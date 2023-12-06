import { useState } from "react";
import Manual from "../components/Manual";
import Title from "../components/Title";

const CharacterCount = () => {
  const [inputText, setInputText] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [countNotBlank, setaCountNotBlank] = useState<number>(0);
  const text: string =
    "◆テキストボックスに入力された文字数をリアルタイムにカウントします。";

  // 初期化
  const reset = () => {
    setInputText("");
    setCount(0);
    setaCountNotBlank(0);
  };

  return (
    <>
      {/* タイトル */}
      <Title title="文字数カウント" />

      {/* 説明欄 */}
      <Manual text={text} />

      {/* 文字入力エリア */}
      <textarea
        className="article-main__text-area"
        value={inputText}
        placeholder="ここに文字を入力してください"
        onChange={(e) => {
          const value: string = e.target.value;
          setInputText(value);
          setCount(value.length);
          setaCountNotBlank(value.replace(/\s+/g, "").length);
        }}
      ></textarea>

      {/* 文字数カウント結果 */}
      <div className="article-main__text-area-result">
        <p>
          文字数(空白あり) <input type="text" value={count} readOnly/> 文字
        </p>
        <p>
          文字数(空白なし) <input type="text" value={countNotBlank} readOnly/> 文字
        </p>
      </div>
      <button className="article-main__btn" onClick={reset}>
        リセット
      </button>
    </>
  );
};

export default CharacterCount;
