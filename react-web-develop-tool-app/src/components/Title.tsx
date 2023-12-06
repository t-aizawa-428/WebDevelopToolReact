type TitleProps = {
    title:string;
}

const Title: React.FC<TitleProps> = ({title}) => {
  return <h2 className="article-main__name">{title}</h2>;
};

export default Title;
