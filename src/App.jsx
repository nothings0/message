import { useState } from "react";
import "./App.css";
import { app } from "../firebase";
import { ref, child, getDatabase, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [msg, setMsg] = useState("");
  const dbRef = ref(getDatabase(app));

  const handleSendMsg = () => {
    set(child(dbRef, `messages/${uuidv4()}`), {
      str: msg,
    });
    setMsg("");
    alert("Sent, thanks!");
  };

  return (
    <main className="main">
      <div className="box">
        <div className="heading">What do you want to tell me?</div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button onClick={handleSendMsg}>Send</button>
      </div>
    </main>
  );
}

export default App;
