import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return <Card name={contact.name}
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}/>;
}

function App() {
  return (
      <h1 className="heading">My Contacts</h1>,
      {contacts.map(createCard)}

      // <Card
      // name={contacts[0].name}
      // imgURL={contacts[0].imgURL}
      // tel={contacts[0].tel}
      // email={contacts[0].email}
      // />
      // <Card
      // name={contacts[1].name}
      // imgURL={contacts[1].imgURL}
      // tel={contacts[1].tel}
      // email={contacts[1].email}
      // />
      // <Card
      // name={contacts[2].name}
      // imgURL={contacts[2].imgURL}
      // tel={contacts[2].tel}
      // email={contacts[2].email}
      // />

  );
}

export default App;
