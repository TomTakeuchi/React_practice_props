import React from 'react';

function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className='name'>{props.name}</h2>
      <img
      className='circle-img'
        src={props.url}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p className='info'>{props.phone}</p>
      <p className='info'>{props.adress}</p>
    </div>
  </div>
}

export default Card;