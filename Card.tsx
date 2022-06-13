import * as React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="Card">
      <img src={props.flag} />
      <a href={props.href}>{props.name}</a>
    </div>
  );
}

export default Card;
