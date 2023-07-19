export default function ContactList({ contacts, dispatch, selectedId }) {
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
                  selectedId == contact.id ? "beautifySelectedBttn" : ""
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
