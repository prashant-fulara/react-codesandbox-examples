export default function messageReducer(state, action) {
  switch (action.type) {
    case "change_selection": {
      return {
        ...state,
        selectedId: action.selectedId,
      };
    }
    case "edit_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "send_message": {
      alert(action.email + " " + action.message);
      return state;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
