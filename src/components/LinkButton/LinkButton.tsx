import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css'

interface Props {
  to: string,
  label: string,
  onClick?: () => void,
}

const LinkButton: React.FC<Props> = ({ to, label, onClick }) => (
  <Link to={to} onClick={onClick} className="linkButton" >
    {label}
  </Link>
);

export default LinkButton;
