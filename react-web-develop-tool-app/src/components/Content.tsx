import CharacterCount from "../pages/CharacterCount";
import CharacterCreate from "../pages/CharacterCreate";
import JsonFormatting from "../pages/JsonFormatting";
import PasswordCreate from "../pages/PasswordCreate";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Content = () => {
  return (
    <article className="article-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterCount />} />
          <Route path="/character-create" element={<CharacterCreate />} />
          <Route path="/password-create" element={<PasswordCreate />} />
          <Route path="/json-format" element={<JsonFormatting />} />
        </Routes>
      </BrowserRouter>
    </article>
  );
};

export default Content;
