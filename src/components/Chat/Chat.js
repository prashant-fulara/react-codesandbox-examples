import {
  useStateDispatch,
  useStates,
  useContacts,
} from "./providers/MessageProvider";

export default function Chat() {
  const dispatch = useStateDispatch();
  const state = useStates();
  const contacts = useContacts();
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <>
      <section className="chat"></section>
      <textarea
        placeholder="Chat to {contact.name}"
        value={contact.name + "-" + state.message}
        onChange={(e) => {
          let tokenIndex = e.target.value.indexOf("-");
          let text = e.target.value.slice(tokenIndex + 1);
          dispatch({
            type: "edit_message",
            message: text,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "send_message",
            message: state.message,
            email: contact.email,
          });
        }}
      >
        Send to {contact.email}
      </button>
    </>
  );
}
