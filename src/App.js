import React from "react";
import Phonebook from "./Containers/Phonebook/Phonebook";
function App() {
  return <Phonebook />;
}

export default App;























// import React, { Component } from 'react';
// import './App.css';
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./components/ContactList/ContactList";
// import Filter from "./components/Filter/Filter";
// import ContactForm from "./components/ContactForm/ContactForm";
// import storage from "./helpers/storage";
// // import baseContacts from './bd/baseContacts.json'


// export default class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   addContact = (task) => {
//     const searchSameName = this.state.contacts
//       .map((cont) => cont.name)
//       .includes(task.name);

//     const searchSameNumber = this.state.contacts
//       .map((cont) => cont.number)
//       .includes(task.number);

//     if (searchSameName || searchSameNumber) {
//       alert(`${task.name} is already in contacts`);
//     } else if (task.name.length === 0) {
//       alert("Fields must be filled!");
//     } else if (task.number.length === 0) {
//       alert("Fields must be filled!");
//     } else {
//       const contact = {
//         ...task,
//         id: uuidv4(),
//       };
      
//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };

//   componentDidMount(){
//     const contactsData = storage.get("contacts");
//     if (!contactsData) {
//       storage.save("contacts", []);
//       return
//     }
//     this.setState({
//       contacts:contactsData
//     })
//   }

//   componentDidUpdate(){
//     const { contacts } = this.state;
//     storage.save("contacts", contacts);
//   }


//   changeFilter = (filter) => {
//     this.setState({ filter });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter((contacts) =>
//       contacts.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };
  

//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <ContactForm onAddContact={this.addContact} />
//         <h2>Contacts</h2>
//           <Filter value={filter} onChangeFilter={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onRemoveContact={this.removeContact}
//           />
//       </div>
//     );
//   }
// }
