import  React from 'react'
import Header from "./Header.js";
import ContactList from "./ContactList.js";
import AddContact from './AddContact.js';

// import "./App.css";

function App() {

  const contacts =[
    {
      id:"1",
      name:"Praveen",
      email:"praveen@gmail.com",
    },
    {
      id:"1",
      name:"Ram",
      email:"Ram@gmail.com",
    }
  ];
  return (
  <div> 
  <Header />
    <AddContact />
   <ContactList contacts={contacts} />
  </div>
  );
}

export default App;
