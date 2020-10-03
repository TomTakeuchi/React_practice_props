import React from "react";
import Card from './Card';
import contacts from '../contacts';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name={contacts[0].name} url={contacts[0].imgURL} phone={contacts[0].phone} adress={contacts[0].email}/>
      <Card name={contacts[1].name} url={contacts[1].imgURL} phone={contacts[1].phone} adress={contacts[1].email}/>
      <Card name={contacts[2].name} url={contacts[2].imgURL} phone={contacts[2].phone} adress={contacts[2].email}/>
    </div>
  );
}

export default App;
