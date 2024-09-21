"use strict";

const { readFileSync, existsSync, writeFile, lstatSync } = require("fs");

module.exports = function (fileData){
  class Setting {
    constructor(path="", data){
      this.path = Object.freeze(path);
      if(data){
        this.data = data;
      } else {
        this.data = {};
        this.set({});
      }
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
        writable: false,
        enumerable: false
      });
    }
    set(newData){
      this.setUnit(this.data, newData);
    }
    sortKeys(newData){
      let currentOldObject, currentNewObject, didStart=false;
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
        console.error("stop this process because essential json file does not exist.");
        process.exit(1);
      }
      return Object.freeze(new Setting(path, {}));
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