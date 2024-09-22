"use strict";

const { spawn, execSync } = require('child_process');

const obj = {
  outputData: [],
  outputUnit: {command: "", results: []},
  funcUnit: function(command, params){
    const self = this;
    const childProcess = spawn(command, params);
    self.outputUnit = {command: command + " " + params.map( (p) => p.includes(" ") ? '"' + p + '"' : p ).join(" "), results: []};
    childProcess.stdout.on('data', function(chunk){
      console.log(chunk.toString());
      for(const line of chunk.toString().split("\n").map( (l) => l.replaceAll("\r", "").replaceAll("\t", "    ") )){
        self.outputUnit.results.push(line);
      }
    });
    childProcess.stdout.on("close", function(){
      self.outputData.push(self.outputUnit);
      if(self.formattedCommands.length == 0){
        if(self.onClose){
          self.onClose(self.outputData);
        }
      } else{
        const unit = self.formattedCommands.shift();
        self.funcUnit(unit.command, unit.params);
      }
    });
  },
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
          } else if(char == "&"){
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
  formattedCommands: [],
  mainFunc: function(command="", onClose){
    this.onClose = onClose;
    this.formatCommand(command);
    const unit = this.formattedCommands.shift();
    this.funcUnit(unit.command, unit.params);
  }
}

const runSpawn = function(command={}, onClose=()=>{}){
  obj.mainFunc(command[process.platform], onClose);
};

const runExec = function(command={}, isArrayType=true){
  const resultText = execSync(command[process.platform]).toString();
  if(isArrayType){
    return resultText.split("\n").map( (line) => line.replaceAll("\r", "") );
  } else {
    return resultText;
  }
}

class SeparateCommand {
  constructor(windows="", mac="", linux=""){
    this.win32 = windows;
    this.darwin = mac;
    this.linux = linux;
  }
  runS(onClose=()=>{}){
    runSpawn(this, onClose);
  }
  runE(isArrayType=true){
    runExec(this, isArrayType);
  }
}



module.exports = { SeparateCommand };