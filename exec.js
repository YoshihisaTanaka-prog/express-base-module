"use strict";

const { spawn, execSync } = require('child_process');

const obj = {
  outputData: [],
  outputUnit: {command: "", results: []},
  formattedCommands: [],
  formatCommand: function(command){
    let status = 0;
    let cachedParam = "";
    const unit = {command: "", params: []};
    for(const char of command){
      switch (status) {
        case 0:
          if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".includes(char)){
            unit.command += char;
            status = 1;
          }
          break;
        case 1:
          if(char == " "){
            status = 2;
          } else if(char == "&"){
            this.formattedCommands.push({command: Object.freeze(unit.command), params: Object.freeze(unit.params)});
            status = 0;
            unit.command = "";
            unit.params = [];
          } else{
            unit.command += char;
          }
          break;
        case 2:
          if(char == " "){
            if(cachedParam != ""){
              unit.params.push(cachedParam);
              cachedParam = "";
            }
          } else if("&|".includes(char)){
            this.formattedCommands.push({command: Object.freeze(unit.command), params: Object.freeze(unit.params)});
            status = 0;
            unit.command = "";
            unit.params = [];
          } else if(char == '"'){
            status = 3;
            if(unit.command == "echo"){
              cachedParam += '"';
            }
          } else{
            cachedParam += char;
          }
          break;
        case 3:
          if(char == '"'){
            status = 2;
            if(unit.command == "echo"){
              cachedParam += '"';
            }
          } else {
            cachedParam += char
          }
          break;
        default:
          break;
      }
    }
    unit.params.push(cachedParam);
    this.formattedCommands.push({command: Object.freeze(unit.command), params: Object.freeze(unit.params)});
  },
  funcUnit: function(command, params){
    const self = this;
    self.outputUnit = {command: command + " " + params.map( (p) => p.includes(" ") ? '"' + p + '"' : p ).join(" "), results: []};
    return new Promise((resolve, reject) =>{
      const childProcess = spawn(command, params);
      childProcess.stdout.on('data', function(chunk){
        console.log(chunk.toString());
        for(const line of chunk.toString().split("\n").map( (l) => l.replaceAll("\r", "").replaceAll("\t", "    ") )){
          self.outputUnit.results.push(line);
        }
      });
      childProcess.stdout.on("close", function(){
        self.outputData.push(self.outputUnit);
        if(self.formattedCommands.length == 0){
          resolve(self.outputData);
        } else{
          const unit = self.formattedCommands.shift();
          resolve(self.funcUnit(unit.command, unit.params));
        }
      });
    })
  },
  mainFunc: function(command=""){
    this.formatCommand(command);
    const unit = this.formattedCommands.shift();
    return this.funcUnit(unit.command, unit.params);
  }
}

const runSpawn = function(command={}){
  return obj.mainFunc(command[process.platform]);
};

const runExec = function(command={}, isArrayType=true){
  const resultText = execSync(command[process.platform]).toString();
  if(isArrayType){
    return resultText.split("\n").map( (line) => line.replaceAll("\r", "") );
  } else {
    return resultText;
  }
}

class Command {
  constructor(windows="", mac="", linux=""){
    this.win32 = windows;
    this.darwin = mac;
    this.linux = linux;
  }
  runS(){
    return runSpawn(this);
  }
  runE(isArrayType=true){
    return runExec(this, isArrayType);
  }
  static set(windows="", mac="", linux=""){
    return new Command(windows, mac, linux);
  }
  static setAll(command=""){
    return new Command(command, command, command);
  }
}



module.exports = Command;