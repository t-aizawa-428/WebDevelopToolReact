import { useState } from "react";
import Title from "../components/Title";
import Manual from "../components/Manual";

const PasswordCreate = () => {
  const [selectedLength, setSelectedLength] = useState<string>("8");
  const text: string = "◆指定文字数で自動パスワードを生成します。";

  // パスワード生成するための文字列作成
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers: string = "0123456789";
  const passBase: string = alphabet + alphabetUpper + numbers;

  //パスワード生成
  const createPassword = (length: number) => {
    let pass: string = "";
    for (let j = 0; j < length; j++) {
      pass += passBase.charAt(Math.floor(Math.random() * passBase.length));
    }

    return pass;
  };

  // チェックボックスの値が変更されたときに呼び出される関数
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLength(e.target.value);
  };

  // パスワードを生成してpasswords配列に代入
  let passwords = Array(12)
    .fill("")
    .map(() => createPassword(parseInt(selectedLength, 10)));

  return (
    <>
      {/* タイトル */}
      <Title title="パスワード生成" />

      {/* 説明欄 */}
      <Manual text={text} />

      {/* パスワード表示 */}
      <div className="article-main__password-area">
        {passwords.map((password, index) => (
          <input
            key={index}
            className="article-main__password-text"
            type="text"
            value={password}
            readOnly
          />
        ))}

        {/* 文字数指定 */}
        <div id="password-character-count">
          <label>
            <input
              type="radio"
              name="length"
              value="8"
              checked={selectedLength === "8"}
              onChange={handleLengthChange}
            />
            8文字
          </label>
          <label>
            <input
              type="radio"
              name="length"
              value="12"
              checked={selectedLength === "12"}
              onChange={handleLengthChange}
            />
            12文字
          </label>
          <label>
            <input
              type="radio"
              name="length"
              value="16"
              checked={selectedLength === "16"}
              onChange={handleLengthChange}
            />
            16文字
          </label>
        </div>
      </div>
    </>
  );
};

export default PasswordCreate;
