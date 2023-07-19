import { useReducer } from "react";
import { initialState } from "./data/data";
import messageReducer from "./reducers/MessageReducer";

export default function ChatPage() {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  return <></>;
}
