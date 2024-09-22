<style>
  summary span{
    font-size: 1.5em;
    font-weight: bolder;
  }
  .inside-of-list{
    padding-left: 1em;
  }
  td {
    padding: 0.1em;
  }
  .none-width{
    width: 0;
    padding: 0;
  }
</style>

# 設計書

<!-- 全体説明開始------------------------------------------------------------------------------------------>

<details>

<summary>
  <span>全体</span>
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

</details>
</div>
</details>

<!-- 全体説明完了------------------------------------------------------------------------------------------>

***

<!-- basic.js開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  <span>basic.js</span>
</summary>
<div class="inside-of-list">

### 1. 形式

<div class="inside-of-list">

#### モジュール

</div>

### 2. 使用モジュール

<div class="inside-of-list">

* 無し。

</div>

### 3. 出力モジュール

<div class="inside-of-list">

* #### 関数

<div class="inside-of-list">

* getType
* isSameObject

</div>

</div>

### 4. 重要関数

<div class="inside-of-list">

<!-- getType関数開始 -------------------------------------------------------------------------------------->

<details>

<summary>
  getType
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details open>

<summary>
  概要図
</summary>
<div class="inside-of-list">

</div>
</details>

#### 3.2 フロー

</div>
</details>

<!-- basic.js/getType完了 -------------------------------------------------------------------------------->

<!-- basic.js/isSameObject開始 --------------------------------------------------------------------------->

<details>

<summary>
  isSameObject
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>
<div class="inside-of-list">

#### 3.2 制御項目

<details>

<summary>
  概要図
</summary>
<div class="inside-of-list">

</div>
</details>

### 3.2 フロー

</div>
</details>

<!-- basic.js/isSameObject開始 ---------------------------------------------------------------------------->

</div>
</details>

<!-- basic.js完了 ----------------------------------------------------------------------------------------->

<!-- exec.js開始 ------------------------------------------------------------------------------------------>

<details>

<summary>
  <span>exec.js</span>
</summary>
<div class="inside-of-list">

### 1. 形式

<div class="inside-of-list">

#### モジュール

</div>

### 2. 使用モジュール

<div class="inside-of-list">

* **child_process**

</div>

### 3. 出力モジュール

<div class="inside-of-list">

#### SeparateCommand

<div class="inside-of-list">

* SeparateCommand

</div>

</div>

### 4. 重要関数・重要クラス・重要変数

* #### 関数

<div class="inside-of-list">

<!-- exec.js/obj.funcUnit開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  obj.funcUnit
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- 終了 ----------------------------------------------------------------------------------------->

<!-- exec.js/obj.mainFunc開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  obj.mainFunc
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- exec.js/obj.mainFunc終了 ----------------------------------------------------------------------------------------->

<!-- exec.js/runExec開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  runExec
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- runExec終了 ----------------------------------------------------------------------------------------->

<!-- exec.js/runSpawn開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  runSpawn
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- exec.js/runSpawn終了 ----------------------------------------------------------------------------------------->

<!-- exec.js/SeparateCommand().runS開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  SeparateCommand().runS
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- exec.js/SeparateCommand().runS終了 ----------------------------------------------------------------------------------------->

</div>

* #### クラス

<div class="inside-of-list">

<!-- SeparateCommand開始 ----------------------------------------------------------------------------------------->

<details>
<summary>
  SeparateCommand
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>
<summary>
  概要図
</summary>
<div class="inside-of-list">

</div>
</details>

#### 3.2 プロパティ

<table>
  <thead>
    <tr align="left">
      <th>変数名</th><th>型</th><th>説明</th><td class="none-width"></td>
    </tr>
  </thead>
</table>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- SeparateCommand終了 ----------------------------------------------------------------------------------------->

</div>

* #### 変数

<div class="inside-of-list">

<!-- obj開始 ----------------------------------------------------------------------------------------->

<details open>
<summary>
  obj
</summary>
<div class="inside-of-list">

#### 目的

非同期関数spawn（child_process）を順番に動作させ、実行結果をほかの関数に引き渡す。

#### 方針

#### プロパティ

<table>
  <thead>
    <tr align="left">
      <th>変数名</th><th style="min-width: 5em;">型</th><th>説明</th><td class="none-width">
    </tr>
  </thead>
  <tr valign="top">
    <td>onClose</td><td align="center">
      (outputDataの型)<br>
      ↓<br>
      Void
    </td><td>
      コマンドの終了後に、結果を引数として渡して実行する関数を保存するための変数。
    </td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">outputData</td><td colspan="2">[{command: string, results: [string.,..]},...]</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td></td><td>コマンドの出力結果をコマンドごとに格納する変数。</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">outputUnit</td><td colspan="2">{command: string, results: [string,...]}</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td></td><td>コマンド実行中に少しずつ出力されるコマンドを<br>一時的に格納するための変数。</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">formattedCommands</td><td colspan="2">[{command: string, params: [string,...]}, ...]</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td></td><td>obj.formatCommandによって形式を変換されたコマン<br>ドの格納先。</td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">formatCommand</td><td colspan="2">
      (command: string) → Void
    </td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td></td><td>入力されたコマンド（String型）をchild_processの引<br>数の形式に変換して、obj.formattedCommandsに<br>追加するための関数。<br><b>現在は&でコマンドを分割する場合にのみ対応。</b></td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">funcUnit</td><td colspan="2">
      (command: string, params: [string, ...]) → Void
    </td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td></td>
    <td>
      <ul>
        <li>パラメータ込みの入力されたコマンドをobj.outputUnit.commandに<br>
        格納し、obj.outputUnit.resultsを空の配列に更新する。</li>
        <li>引数をそのままchild_processのspawn関数に入れて実行。</li>
        <li>
          実行中に途中結果が描画されたら、ターミナルに表示しながら<br>
          obj.outputUnit.resultに一行ずつ追加するよう設定。
        </li>
        <li>終了時に以下の処理を行うように設定する。<br>
          obj.outputDataにobj.outputUnitのデータを追加する。<br>
          obj.formattedCommandsの長さを判定し、<br>
          ・空の場合、
          <ul>
            <li>obj.outputDataを引数として、obj.onCloseを実行する。</li>
          </ul>
          ・要素が存在する場合、
          <ul>
            <li>
              .shift()関数を用いてobj.formattedCommandsの<br>
              先頭のコマンドデータを取得しつつ消す。
            </li>
            <li>
              取得したコマンドデータから引数を設定し、自分自身を再度呼び出す。
            </li>
          </ul>
        </li>
      </ul>
    </td><td class="none-width"></td>
  </tr>
  <tr valign="top">
    <td rowspan="2">mainFunc</td><td colspan="2">(command: string, onClose: (outputDataの型)→Void)→Void</td><td class="none-width"></td>
  </tr>
  <tr>
    <td></td><td>
      全体を制御するための関数。
      <ul>
        <li>第2引数をobj.onCloseに格納</li>
        <li>obj.formatCommandに第1引数入れてを実行し、obj.formattedCommandsの値を設定</li>
        <li>
          .shift()関数を用いてobj.formattedCommandsの<br>
          先頭のコマンドデータを取得しつつ消す。
        </li>
        <li>
          取得したコマンドデータから引数を設定し、obj.funcUnitを実行する。
        </li>
      </ul>
    </td><td class="none-width"></td>
  </tr>
</table>

</div>
</details>

<!-- obj終了 ----------------------------------------------------------------------------------------->

</div>

</div>
</details>

<!-- exec.js完了 ------------------------------------------------------------------------------------------->

<!-- file.js開始 ------------------------------------------------------------------------------------------->

<details open>

<summary>
  <span>file.js</span>
</summary>
<div class="inside-of-list">

### 1. 形式

<div class="inside-of-list">

#### モジュール

</div>

### 2. 使用モジュール

<div class="inside-of-list">

* **fs**
* **./basic**

</div>

### 3. 出力モジュール

<div class="inside-of-list">

#### 関数

<div class="inside-of-list">

* 名無し関数

</div>

</div>

### 4. 重要関数・重要クラス・重要変数

* #### 関数

<div class="inside-of-list">

<!-- file.js/名無し関数開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

* 

</div>

##### 返り値

<div class="inside-of-list">

* { isExists, isFile, read, write }

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- file.js/名無し関数終了 ----------------------------------------------------------------------------------------->

<!--  file.js/名無し関数([]).isExist開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数([]).isExist
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

</div>

##### 返り値

<div class="inside-of-list">

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- file.js/名無し関数([]).isExists終了 ----------------------------------------------------------------------------------------->

<!-- file.js/名無し関数([]).isFile開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数([]).isFile
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

</div>

##### 返り値

<div class="inside-of-list">

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- file.js/名無し関数([]).isFile終了 ----------------------------------------------------------------------------------------->

<!-- file.js/名無し関数([]).read開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数([]).read
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

</div>

##### 返り値

<div class="inside-of-list">

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- file.js/名無し関数([]).read終了 ----------------------------------------------------------------------------------------->

<!-- file.js/名無し関数([]).write開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数([]).write
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

</div>

##### 返り値

<div class="inside-of-list">

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- file.js/名無し関数([]).write終了 ----------------------------------------------------------------------------------------->

</div>

</div>
</details>

<!-- file.js完了--------------------------------------------------------------------------------------------->

<!-- load-setting.js開始------------------------------------------------------------------------------------->

<details open>

<summary>
  <span>load-setting.js</span>
</summary>
<div class="inside-of-list">

### 1. 形式

<div class="inside-of-list">

#### モジュール

</div>

### 2. 使用モジュール

<div class="inside-of-list">

* **fs**

</div>

### 3. 出力モジュール

<div class="inside-of-list">

#### 関数

<div class="inside-of-list">

* 名無し関数

</div>

</div>

### 4. 重要関数・重要クラス・重要変数

* #### 関数

<div class="inside-of-list">

<!-- load-setting.js/名無し関数開始 ----------------------------------------------------------------------------------------->

<details>

<summary>
  名無し関数
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>

<summary>
  概要図
</summary>

<div class="inside-of-list">

</div>

</details>

#### 3.2 引数・返り値

<div class="inside-of-list">

##### 引数

<div class="inside-of-list">

</div>

##### 返り値

<div class="inside-of-list">

</div>

</div>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- load-setting.js/名無し関数終了 ----------------------------------------------------------------------------------------->

</div>

* #### クラス

<div class="inside-of-list">

<!-- load-setting.js/名無し関数/Setting開始 ----------------------------------------------------------------------------------------->

<details>
<summary>
  名無し関数/Setting
</summary>
<div class="inside-of-list">

### 1. 要望

### 2. 方針

### 3. 設計・構築内容

#### 3.1 制御項目

<details>
<summary>
  概要図
</summary>
<div class="inside-of-list">

</div>
</details>

#### 3.2 プロパティ

<table>
  <thead>
    <tr align="left">
      <th>変数名</th><th style="min-width: 5em;">型</th><th>説明</th><td class="none-width"></td>
    </tr>
  </thead>
<!-- 単純な型の場合開始 -->
  <tr valign="top">
    <td>変数１</td><td align="center">型１</td><td>備考１</td><td class="none-width"></td>
  </tr>
<!-- 単純な型の場合終了 -->
<!-- 複雑な型の場合開始 -->
  <tr valign="top">
    <td rowspan="2">複雑な変数</td><td colspan="2"><div align="center" style="width:-moz-fit-content; width:fit-content;">複雑な型</div></td><td class="none-width"></td>
  </tr>
  <tr>
    <td></td><td>複雑な変数の備考</td><td class="none-width"></td>
  </tr>
<!-- 複雑な型の場合終了 -->
</table>

#### 3.3 フロー

<div class="inside-of-list">

</div>
</div>
</details>

<!-- load-setting.js名無し関数/Setting終了 ----------------------------------------------------------------------------------------->

</div>

</div>
</details>

<!-- load-setting.js完了------------------------------------------------------------------------------------->

<!-- setting.js開始------------------------------------------------------------------------------------------>

<details open>

<summary>
  <span>setting.js</span>
</summary>
<div class="inside-of-list">

### 1. 形式

<div class="inside-of-list">

#### モジュール

</div>

### 2. 使用モジュール

<div class="inside-of-list">

* **./load-setting**

</div>

### 3. 出力モジュール

<div class="inside-of-list">

#### 定数・変数

<div class="inside-of-list">

* 名無し変数

</div>

</div>

### 4. 重要関数・重要クラス・重要変数

* #### 定数・変数

<div class="inside-of-list">

<!-- setting.js/settingFileInfo開始 ------------------------------------------------------------------------------------------>

<details>
<summary>
  settingFileInfo
</summary>
<div class="inside-of-list">

#### 目的

#### 方針

#### プロパティ

<table>
  <thead>
    <tr align="left">
      <th>変数名</th><th style="min-width: 5em;">型</th><th>説明</th><td class="none-width"></td>
    </tr>
  </thead>
<!-- 単純な型の場合開始 -->
  <tr valign="top">
    <td>変数１</td><td>型１</td><td>備考１</td><td class="none-width"></td>
  </tr>
<!-- 単純な型の場合終了 -->
<!-- 複雑な型の場合開始 -->
  <tr valign="top">
    <td rowspan="2">複雑な変数</td><td colspan="2<div align="center" style="width:-moz-fit-content; width:fit-content;">複雑な型</div>">複雑な型</td><td class="none-width"></td>
  </tr>
  <tr>
    <td></td><td>複雑な変数の備考</td><td class="none-width"></td>
  </tr>
<!-- 複雑な型の場合終了 -->
</table>

</div>
</details>

<!-- setting.js/settingFileInfo終了 ------------------------------------------------------------------------------------------>

<!-- setting.js/名無し変数開始 ------------------------------------------------------------------------------------------>

<details>
<summary>
  名無し変数
</summary>
<div class="inside-of-list">

#### 目的

#### 方針

#### プロパティ

<table>
  <thead>
    <tr align="left">
      <th>変数名</th><th style="min-width: 5em;">型</th><th>説明</th><td class="none-width"></td>
    </tr>
  </thead>
<!-- 単純な型の場合開始 -->
  <tr valign="top">
    <td>変数１</td><td>型１</td><td>備考１</td><td class="none-width"></td>
  </tr>
<!-- 単純な型の場合終了 -->
<!-- 複雑な型の場合開始 -->
  <tr valign="top">
    <td rowspan="2">複雑な変数</td><td colspan="2<div align="center" style="width:-moz-fit-content; width:fit-content;">複雑な型</div>">複雑な型</td><td class="none-width"></td>
  </tr>
  <tr>
    <td></td><td>複雑な変数の備考</td><td class="none-width"></td>
  </tr>
<!-- 複雑な型の場合終了 -->
</table>

</div>
</details>

<!-- setting.js/名無し変数終了 ------------------------------------------------------------------------------------------>

</div>

</div>
</details>

<!-- setting.js完了------------------------------------------------------------------------------------------>