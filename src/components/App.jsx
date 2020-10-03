import React from "react";
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar url="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png" />
      <Card name={contacts[0].name} url={contacts[0].imgURL} phone={contacts[0].phone} adress={contacts[0].email}/>
      <Card name={contacts[1].name} url={contacts[1].imgURL} phone={contacts[1].phone} adress={contacts[1].email}/>
      <Card name={contacts[2].name} url={contacts[2].imgURL} phone={contacts[2].phone} adress={contacts[2].email}/>
    </div>
  );
}

export default App;
