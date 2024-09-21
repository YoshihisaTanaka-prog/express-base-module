"use strict";

const { readFile, writeFile, existsSync, lstatSync } = require('fs');
const { getType, isSameObject } = require('./basic');

module.exports = function (supportedFileTypes){
  if(!isSameObject(supportedFileTypes, supportedFileTypes.toSorted())){
    console.log(supportedFileTypes.toSorted());
  }
  const isExists = async function(path=""){
    return existsSync(path);
  }

  const isFile = async function(path="") {
    if(await isExists(path)){
      return await lstatSync(path).isFile();
    } else {
      return await null;
    }
  }

  const read = async function(path=""){
    switch (await isFile(path)){
      case true:
        const type = path.split(".").slice(-1)[0];
        const contents = await new Promise((resolve, reject) =>{
          readFile(path, "utf-8", (err, data)=>{
            if(err){
              console.log(err);
              resolve(null);
            } else {
              resolve(data);
            }
          });
        });
        if(type == "json"){
          return JSON.parse(contents) || {};
        } else if(supportedFileTypes.includes(type)){
          return await contents
        }
        break;
      case false:
        console.error(path, "is directory thus cannot read.");
        break;
      default:
        console.error(path, "does not exist.");
        break;
    }
    return null;
  }

  const write = async function(path="", contents, onSuccess=()=>{}, onError=()=>{}){
    switch (await isFile(path)){
      case false:
        console.error(path, "is directory thus cannot read.");
        onError();
        break;
      default:
        const type = path.split(".").slice(-1)[0];
        if(type == "json" && ["object", "array"].includes(getType(contents))){
          writeFile(path, JSON.stringify(contents, null, 2), (e)=>{
            if(e){
              console.log(e.message);
              onError();
            } else {
              onSuccess();
            }
          });
        } else if(supportedFileTypes.includes(type)){
          writeFile(path, contents, (e)=>{
            if(e){
              console.log(e.message);
              onError();
            } else {
              onSuccess();
            }
          });
        }
        break;
    }
  }

  return { isExists, isFile, read, write };
}
