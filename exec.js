"use strict";

const { spawn, execSync } = require('child_process');
const { writeFileSync } = require('fs');

const runningSpawnObject = {
  resultData: {status: 0, resultLine: [], resultText: ""},
  mainFunction: function(command){
    writeFileSync("spawn.cmd", "@echo off\n\n" + command);
    const self = this;
    return new Promise((resolve, reject) => {
      let proc = spawn('spawn.cmd');
      proc.stdout.on('data', (data) => {
        console.log(data.toString());
        self.resultData.resultText += data.toString().replaceAll("\r", "").replaceAll("\t", "    ");
        for(const line of data.toString().split("\n")){
          self.resultData.resultLine.push(line.replaceAll("\r", "").replaceAll("\t", "    "));
        }
      });
      proc.stdout.on("close", (code) => {
        self.resultData.status = code;
        resolve(self.resultData);
      })
    })
  }
};

const runSpawn = function(command={}){
  return runningSpawnObject.mainFunction(command[process.platform]);
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