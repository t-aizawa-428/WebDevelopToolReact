import React, { useState } from "react";
import Title from "../components/Title";
import Manual from "../components/Manual";

const CharacterCreate = () => {
  const text: string = "◆任意の内容で、指定された長さの文字列を作成します。";

  const [count, setCount] = useState<string>("100");
  const [generatedString, setGeneratedString] = useState<string>("");
  const [options, setOptions] = useState({
    numbers: true,
    uppercaseLetters: true,
    lowercaseLetters: true,
    symbols: false,
    hiragana: false,
    katakana: false,
  });

  const generateString = () => {
    const characters = [];
    if (options.numbers) characters.push("0123456789");
    if (options.uppercaseLetters) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (options.lowercaseLetters) characters.push("abcdefghijklmnopqrstuvwxyz");
    if (options.symbols) characters.push("!@#$%^&*()_+-=[]{}|;':,.<>?");
    if (options.hiragana)
      characters.push(
        "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん"
      );
    if (options.katakana)
      characters.push(
        "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヵヶ"
      );

    if (characters.length === 0) {
      setGeneratedString("作成文字の種類を選択してください");
    } else {
      const selectedCharacters = characters.join("");
      let result = "";
      const length = parseInt(count);
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
          Math.random() * selectedCharacters.length
        );
        result += selectedCharacters[randomIndex];
      }
      setGeneratedString(result);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div>
      {/* タイトル */}
      <Title title="文字列生成" />

      {/* 説明欄 */}
      <Manual text={text} />

      {/* 文字数入力 */}
      <div className="article-main__text-area-result">
        作成文字数{" "}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        文字
      </div>

      {/* チェックボックス */}
      <div className="article-main__select-area">
        <div className="article-main__select-row">
          {" "}
          <label>
            <input
              type="checkbox"
              name="numbers"
              checked={options.numbers}
              onChange={handleCheckboxChange}
            />
            半角数字
          </label>
          <label>
            <input
              type="checkbox"
              name="uppercaseLetters"
              checked={options.uppercaseLetters}
              onChange={handleCheckboxChange}
            />
            半角英字(大)
          </label>
          <label>
            <input
              type="checkbox"
              name="lowercaseLetters"
              checked={options.lowercaseLetters}
              onChange={handleCheckboxChange}
            />
            半角英字(小)
          </label>
          <label>
            <input
              type="checkbox"
              name="symbols"
              checked={options.symbols}
              onChange={handleCheckboxChange}
            />
            半角記号
          </label>
          <label>
            <input
              type="checkbox"
              name="hiragana"
              checked={options.hiragana}
              onChange={handleCheckboxChange}
            />
            ひらがな
          </label>
          <label>
            <input
              type="checkbox"
              name="katakana"
              checked={options.katakana}
              onChange={handleCheckboxChange}
            />
            カタカナ
          </label>
        </div>
      </div>

      {/* 生成ボタン */}
      <button className="article-main__btn" onClick={generateString}>
        生成
      </button>

      {/* 生成された文字列を表示 */}
      <textarea
        className="article-main__create-text-area"
        value={generatedString}
        placeholder="ここに生成された文字列が表示されます"
        readOnly
      />
    </div>
  );
};

export default CharacterCreate;
