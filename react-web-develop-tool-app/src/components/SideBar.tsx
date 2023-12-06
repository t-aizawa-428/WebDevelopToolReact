const SideBar= () => {
  return (
    <aside>
        <ul className="aside-menu">
            <li><a href="/">文字数カウント</a></li>
            <li><a href="/character-create">文字列生成</a></li>
            <li><a href="/password-create">パスワード生成</a></li>
            <li><a href="/json-format">JSON整形</a></li>
        </ul>
    </aside>
  );
};

export default SideBar;
