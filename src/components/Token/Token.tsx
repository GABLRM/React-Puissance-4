import './Token.css';

interface Props {
  color: string;
}

const Token: React.FC<Props> = ({ color }) => {
    return (
      <div className={`token ${color}`}>
      </div>
    );
  };
  
  export default Token;