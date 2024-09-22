"use strict";

const { spawn, execSync } = require('child_process');
const { writeFileSync } = require('fs');

console.log(__dirname);

module.exports = function(characterEncodingIdentifier=65001){

  const runningSpawnObject = {
    resultData: {success: {resultLine: [], resultText: ""}, error: {resultLine: [], resultText: ""}},
    mainFunction: function(command){
      writeFileSync(__dirname + "\\nwaps.cmd", "@echo off\n\nchcp " + characterEncodingIdentifier + " > nul & " + command);
      const self = this;
      return new Promise((resolve, reject) => {
        const proc = spawn(__dirname + '\\nwaps.cmd', []);
        proc.stdout.on('data', (data) => {
          console.log(data.toString());
          self.resultData.success.resultText += data.toString().replaceAll("\r", "").replaceAll("\t", "    ");
          for(const line of data.toString().split("\n")){
            self.resultData.success.resultLine.push(line.replaceAll("\r", "").replaceAll("\t", "    "));
          }
        });
        proc.stderr.on('data', (err) => {
          console.log(err.toString());
          self.resultData.error.resultText += err.toString().replaceAll("\r", "").replaceAll("\t", "    ");
          for(const line of err.toString().split("\n")){
            self.resultData.error.resultLine.push(line.replaceAll("\r", "").replaceAll("\t", "    "));
          }
        })
        proc.stdout.on("close", (code) =>{
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

  return Command;
}