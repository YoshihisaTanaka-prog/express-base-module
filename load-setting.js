"use strict";

const { readFileSync, existsSync, writeFile, lstatSync } = require("fs");

module.exports = function (fileData){
  class Setting {
    constructor(path="", data){
      const getType = function (object) {
        return Object.prototype.toString.call(object).split(" ")[1].slice(0, -1).toLowerCase();
      }
      Object.defineProperty(this, 'setUnit', {
        value: Object.freeze(function(oldObject, newObject, self){
          if(getType(oldObject) == getType(newObject) || ["null", "undefined"].includes(getType(oldObject))){
            switch (getType(newObject)) {
              case "object":
                if(oldObject == null){
                  oldObject = {};
                }
                for(const key in (newObject)){
                  if(oldObject[key]){
                    self.setUnit(oldObject[key], newObject[key], self);
                  } else {
                    oldObject[key] = newObject[key];
                  }
                }
                return;
              case "function":
                return ;
              default:
                oldObject = newObject;
                return ;
            }
          }
          console.error("type error while updating to\n" + JSON.stringify(newObject, null, 2));
        }),
        enumerable: false
      });
      Object.defineProperty(this, 'write', {
        value: Object.freeze(function(){
          return new Promise((resolve, reject) =>{
            writeFile(this.path, JSON.stringify(this.data, null, 2), (e)=>{
              if(e){
                resolve(e.message);
              } else {
                resolve("successed")
              }
            });
          })
        }),
        enumerable: false
      });
      this.path = Object.freeze(path);
      if(data){
        this.data = data;
      } else {
        this.data = {};
        this.write();
      }
    }
    async set(newData){
      this.setUnit(this.data, newData);
      return await this.write();
    }
    async sortKey(path="", orderdKeys=[], defaultValue){
      const cachedObjects = [this.data];
      let cachedObject = this.data;
      const sortedObject = {};
      const pathArray = path.split(".");
      let cachedPath = "";
      for(let i=0; i<pathArray.length; i++) {
        const key = pathArray[i];
        cachedPath += `.${key}`;
        if(cachedObject[key]){
          cachedObjects.push(cachedObject[key]);
          cachedObject = cachedObject[key];
        } else {
          return"cannot access to this.data" + cachedPath;
        }
      }
      for(const key of orderdKeys){
        if(cachedObject[key]){
          sortedObject[key] = cachedObject[key];
        } else {
          console.log(key, "does not exist.");
          sortedObject[key] = defaultValue;
        }
      }
      for(const key of Object.keys(cachedObject)){
        if(!orderdKeys.includes(key)){
          sortedObject[key] = cachedObject[key];
        }
      }
      cachedObjects[pathArray.length] = sortedObject;
      for(let i=cachedObjects.length-1; i>0; i--){
        cachedObjects[i-1][pathArray[i-1]] = cachedObjects[i];
      }
      return await this.write();
    }
    static new(path="", isMustData){
      if(existsSync(path)){
        if(lstatSync(path).isFile()){
          const loadedText = readFileSync(path, "utf-8");
          const loadedData = loadedText == "" ? null : JSON.parse(loadedText);
          return Object.freeze(new Setting(path, loadedData));
        }
      }
      if(isMustData){
        console.error("Stoped this process because essential json file does not exist " + path + " is folder.\nPlease check your setting file.");
        process.exit(1);
      }
      return Object.freeze(new Setting(path, null));
    }
  }
  
  const moduleObject = {};
  for(const fileDatum of fileData){
    const setting = Setting.new(fileDatum.path, fileDatum.isMustData || false);
    if(setting){
      moduleObject[fileDatum.key+"Setting"] = setting;
    }
  }
  return moduleObject;
};