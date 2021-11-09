import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import shortid from "shortid";

const rootReducer = combineReducers({
    contacts: reducer, 
})
const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState ={contacts: {
//     items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
//     filter: ''
//   }} 


// // {
// //     contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    
// //   } ;

// const reducer = (state = initialState, {type, payloadName, payloadNumber, payloadId }) => {
//     switch (type) {
//         case 'AddContact':
//             if (state.contacts.items.find(contact => contact.name === payloadName)) {
//       alert(`${payloadName} is already in contacts`);
//       return;
//     }
//             const contact = {
//                 name: payloadName,
//                 number: payloadNumber,
//                 id: shortid.generate(),
//             };
//             return {
//                 ...state,
//                 contacts: {
                    
//                     items: [...state.contacts.items, contact] , 
//                 }
//             };
//         case 'DeleteContact':
//             return {
//                 contacts:(state.contacts.items.filter(contact => contact.id !== payloadId))
//             };
//         default:
//     return state;
//     }
    
// }

