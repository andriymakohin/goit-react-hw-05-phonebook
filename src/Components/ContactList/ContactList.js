import React from "react";
import PropTypes from "prop-types";
import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { TransitionGroup } from "react-transition-group";

const ContactList = ({ contactsFilter, deleteContact }) => {
  return (
    <TransitionGroup component={List}>
      {contactsFilter.map((el) => (
        <Item key={el.id}>
          <ContactItem
            {...el}
            deleteContact={() => deleteContact(el.id)}
          ></ContactItem>
        </Item>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;










// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./ContactList.module.css";

// const ContactList = ({ contacts, onRemoveContact }) => (
//   <ul className={styles.TaskList}>
//     {contacts.map((contact) => (
//       <li className = {styles.TaskList_item} key={contact.id}>
//         {contact.name} :  {contact.number}
//         {
//           <button
//             className={styles.TaskList_button}
//             type="button"
//             name="delte"
//             onClick={() => onRemoveContact(contact.id)}
//           >
//             delete
//           </button>
//         }
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//   })),
// }
// export default ContactList;