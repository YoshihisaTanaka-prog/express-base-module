"use strict";

const loadSetting = require("./load-setting");

/*
  ・前準備
    ・アプリごとにこのファイルを設定する。
    ・.gitignoreにこのファイルと.gitignoreを追加する。
*/

/*
const settingFileInfo = [
  {
    "key": "app",
    "path": "full_path_to_setting_json_file1",
    "isMust": true  // if setting file set by the array element is essential, add '"isMust": true'
  },
  {
    "key": "user",
    "path": "full_path_to_setting_json_file2"
  }
];

*/

module.exports = loadSetting(settingFileInfo);