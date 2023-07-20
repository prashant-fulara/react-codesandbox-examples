import { createContext, useContext, useReducer } from "react";
import { initialState, contacts } from "../data/data";
import messageReducer from "../reducers/MessageReducer";

const StateContext = createContext(null);
const StateDispatchContext = createContext(null);
const ContactsContext = createContext(contacts);

export default function MessageProvider({ children }) {
  const [states, dispatch] = useReducer(messageReducer, initialState);

  return (
    <ContactsContext.Provider value={contacts}>
      <StateContext.Provider value={states}>
        <StateDispatchContext.Provider value={dispatch}>
          {children}
        </StateDispatchContext.Provider>
      </StateContext.Provider>
    </ContactsContext.Provider>
  );
}

export function useStates() {
  return useContext(StateContext);
}

export function useContacts() {
  return useContext(ContactsContext);
}

export function useStateDispatch() {
  return useContext(StateDispatchContext);
}
