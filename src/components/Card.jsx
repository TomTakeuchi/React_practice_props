import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className='name'>{props.name}</h2>
      <Avatar url={props.url} />
    </div>
    <div className="bottom">
      <Detail detailInfo={props.phone} /> 
      <Detail detailInfo={props.adress} />   
    </div>
  </div>
}

export default Card;