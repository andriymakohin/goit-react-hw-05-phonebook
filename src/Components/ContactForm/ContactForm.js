import React, { useState } from "react";
import PropTypes from "prop-types";
import { Message, Form, Label, Input, Button } from "./ContactForm.styles";
import { v1 as uuidv4 } from "uuid";

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);
  const [alert, setAlert] = useState(false);
  const inputHandler = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "name") {
      value = e.target.value.replace(/[^A-zА-яЁё\s]+/gi, "");
    }
    if (name === "number") {
      value = e.target.value.replace(/[^\d\s,+,(,)]+/gi, "");
    }
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    const isExistName = contacts.find((el) => el.name === contact.name);
    if (isExistName) {
      setAlert(true);
      return;
    }
    addContact(contact);
    setForm(formInitialState);
  };
  const disabledAlert = () => {
    setAlert(false);
  };
  const { name, number } = form;
  return (
    <Form onSubmit={submitHandler}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={inputHandler}
          autoFocus
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={inputHandler}
        />
      </Label>
      {!name || !number ?
      null : <Button  type="submit">
      Add Contact
    </Button>} 
      
      <Message in={alert} onEntered={disabledAlert}>
        <span>Contact is already exist</span>
      </Message>
    </Form>
  );
};
ContactForm.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  onSubmitHandler: PropTypes.func,
  onInputHandler: PropTypes.func,
};

export default ContactForm;


































// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import styles from "./ContactForm.module.css";


// export default class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };


//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onAddContact({ ...this.state });
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
//         <label className={styles.TaskEditor_label}>
//           Name
//           <input
//             className={styles.TaskEditor_input}
//             type="text"
//             placeholder = "Enter name"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={styles.TaskEditor_label}>
//           Number
//           <input
//             className={styles.TaskEditor_input}
//             type="number"
//             // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
//             placeholder="123-45-67"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={styles.TaskEditor_button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };