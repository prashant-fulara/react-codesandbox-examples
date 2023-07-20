import {
  useContacts,
  useStateDispatch,
  useStates,
} from "./providers/MessageProvider";

export default function ContactList() {
  const contacts = useContacts();
  const dispatch = useStateDispatch();
  const state = useStates();

  return (
    <>
      <section className="contact-list">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() =>
                  dispatch({
                    type: "change_selection",
                    selectedId: contact.id,
                  })
                }
                className={
                  state.selectedId == contact.id ? "beautifySelectedBttn" : ""
                }
              >
                {contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
