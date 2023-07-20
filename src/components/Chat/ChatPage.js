import ContactList from "./ContactList";
import { initialState } from "./data/data";
import Chat from "./Chat";
import MessageProvider from "./providers/MessageProvider";
import { useStates, useContacts } from "./providers/MessageProvider";

export default function ChatPage() {
  const state = useStates();
  const contacts = useContacts();

  return (
    <>
      <MessageProvider>
        <ContactList />
        <Chat />
      </MessageProvider>
    </>
  );
}
