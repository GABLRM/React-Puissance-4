import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css'

interface Props {
    to: string,
    label: string,
}

const LinkButton: React.FC<Props> = ({ to, label }) => (
  <Link to={to} className="linkButton" >
    {label}
  </Link>
);

export default LinkButton;
