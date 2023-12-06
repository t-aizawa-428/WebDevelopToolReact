type ManualProps = {
  text:string;
}

const Manual: React.FC<ManualProps> = ({text}) => {
  return (
    <div className="article-main__manual">
      <p>{text}</p>
    </div>
  );
};

export default Manual;
