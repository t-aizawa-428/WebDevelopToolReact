import React, { useState } from "react";
import Title from "../components/Title";
import Manual from "../components/Manual";

const JsonFormatting = () => {
  const text: string = "◆JSONのコードを綺麗に自動整形・フォーマットします。";
  const [originalJson, setOriginalJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");

  // JSONを整形する関数
  const formatJson = () => {
    try {
      const parsedJson = JSON.parse(originalJson);
      const prettyJson = JSON.stringify(parsedJson, null, 2);
      setFormattedJson(prettyJson);
    } catch (error: any) {
      // パースエラーが発生した場合はエラーメッセージを表示
      setFormattedJson("JSONの整形失敗: " + error.message);
    }
  };

  return (
    <>
      {/* タイトル */}
      <Title title="JSON整形" />

      <div className="article-main__json-format">
        {/* 説明欄 */}
        <Manual text={text} />

        {/* 整形前のjson入力エリア */}
        <textarea
          className="article-main__json-text-area"
          placeholder="ここに整形したいjson文字列を入力し、「整形」ボタンを押下してください"
          value={originalJson}
          onChange={(e) => setOriginalJson(e.target.value)}
        />

        {/* 整形ボタン */}
        <button className="article-main__btn" onClick={formatJson}>
          整形
        </button>

        {/* 整形後のjson表示エリア */}
        <textarea
          className="article-main__json-text-area"
          placeholder="整形後のjson文字列が表示されます"
          value={formattedJson}
          readOnly
        />
      </div>
    </>
  );
};

export default JsonFormatting;
