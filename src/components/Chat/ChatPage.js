import { useReducer } from "react";
import ContactList from "./ContactList";
import { initialState } from "./data/data";
import messageReducer from "./reducers/MessageReducer";
import { contacts } from "./data/data";
import Chat from "./Chat";

export default function ChatPage() {
  const [state, dispatch] = useReducer(messageReducer, initialState);
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <>
      <ContactList
        contacts={contacts}
        dispatch={dispatch}
        selectedId={state.selectedId}
      />
      <Chat message={state.message} contact={contact} dispatch={dispatch} />
    </>
  );
}
