export default function messageReducer(state, action) {
  switch (action.type) {
    case "change_selection": {
    }
    case "edit_message": {
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
