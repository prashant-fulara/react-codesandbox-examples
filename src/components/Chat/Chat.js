export default function Chat({ message, contact, dispatch }) {
  return (
    <>
      <section className="chat"></section>
      <textarea
        placeholder="Chat to {contact.name}"
        value={contact.name + "-" + message}
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
            message: message,
            email: contact.email,
          });
        }}
      >
        Send to {contact.email}
      </button>
    </>
  );
}
