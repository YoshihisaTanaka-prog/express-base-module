"use strict";

const getType = function(object){
  const getRoughType = (object)=>{
    return Object.prototype.toString.call(object).split(" ")[1].slice(0, -1).toLowerCase();
  }

  const getClassName = function(object){
    if(Object.keys(object).includes("constructor")){
      if(getRoughType(object.constructor) == "function"){
        return object.constructor.name;
      }
      return "object";
    } else{
      const className = object.constructor.name;
      return className == "Object" ? "object" : object.constructor.name;
    }
  }
  
  const type = getRoughType(object);
  switch(type){
    case "object":
      return getClassName(object);
    case "function":
      const objectCode = object.toString();
      if(objectCode.startsWith("class")){
        let cachedCode = "";
        for(const char of objectCode.slice(5)){
          if(char == "{"){
            break;
          } else if(char != " "){
            cachedCode += char;
          }
        }
        if(cachedCode == ""){
          return "none-name-class-definition"
        } else{
          return "class-definition:" + cachedCode;
        }
      } else{
        return "function";
      }
    default:
      return type;
  }
}

const isSameObject = function(object1, object2, ignoreArrayOrder=false){
  if(getType(object1) == getType(object2)){
    const type = getType(object1);
    switch (type) {
      case "object":
        const keys = Object.keys(object1).toSorted();
        if(isSameObject(keys, Object.keys(object2).toSorted())){
          for(const key of keys){
            if(!isSameObject(object1[key], object2[key])){
              return false
            }
          }
          return true;
        } else{
          return false;
        }
      case "map":
        const mapKeys1 = object1.keys();
        const mapKeys2 = object2.keys();
        if(isSameObject(mapKeys1, mapKeys2, false)){
          for(const key of mapKeys1){
            if(!isSameObject(object1.get(key), object2.get(key))){
              return false
            }
          }
          return true;
        } else{
          return false;
        }
      case "array":
        const length = object1.length;
        if(length == object2.length){
          if(ignoreArrayOrder){
            for(let i=0; i<length; i++){
              let isIncluded = false;
              for(let j=0; j<length; j++){
                if(isSameObject(object1[i], object2[j])){
                  isIncluded = true;
                  break;
                }
              }
              if(!isIncluded){
                return false;
              }
            }
          } else {
            for(let i=0; i<length; i++){
              if(!isSameObject(object1[i], object2[i])){
                return false
              }
            }
          }
          return true;
        } else{
          return false;
        }
      case "function":
        console.log("inComparableType");
        return null
      default:
        if(["null", "undefined", "boolean", "number", "bigint", "string", "date"].includes(type)){
          return object1 == object2;
        } else if(type.includes("-")){
          return true
        } else {
          return isSameObject(JSON.parse(JSON.stringify(object1)), JSON.parse(JSON.stringify(object2)), ignoreArrayOrder);
        }
    }
  }
  return false;
}

const getUid = function(usedUidList=[], length=10){
  function sub(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let uid = letters[Math.floor(Math.random() * 52)];
    for(let i=1; i<length; i++){
      uid += letters[Math.floor(Math.random() * 62)];
    }
    return uid;
  }
  let uid = sub();
  while(usedUidList.includes(uid)){
    uid = sub();
  }
  return uid;
}

module.exports = { getType, isSameObject, getUid };