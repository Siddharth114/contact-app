import React from 'react';
import './App.css';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';


function App() {

  const contacts = [
    {
      id :'1',
      name :'Sid',
      phone :'1234567890'
    },
    {
      id :'2',
      name :'Doe',
      phone :'2345678901'
    },
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
