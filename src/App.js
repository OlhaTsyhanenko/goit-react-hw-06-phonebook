import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import useLocalStorage from './components/LocalStorage';
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
    
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
  
}



