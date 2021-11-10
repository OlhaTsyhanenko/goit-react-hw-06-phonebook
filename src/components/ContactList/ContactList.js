import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./contactList.module.css";
import actions from "../../redux/contacts/contacts-actions";

 function ContactList({ contacts, onDeleteContact }) {
  
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactList__item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};



const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContacts(items,filter)
  return {
    contacts: visibleContacts,
  }
};


const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});


export default connect(mapStateToProps,mapDispatchToProps)(ContactList);
