import "./App.css";
import { useState, useEffect } from "react";
import Massage from "./components/Massage";
import db from "./components/Firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState<string>("");
  const [massages, setManges] = useState<any>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    db.collection("massage")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        return setManges(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            massage: doc.data(),
          }))
        );
      });
  }, []);
  const massage = (event:any) => {
    event.preventDefault();
    db.collection("massage").add({
      username: username,
      massage: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setManges([...massages,{username:username,massage:input}]);
    setInput("");
  };

  useEffect(() => {
    return setUsername<string>(prompt("Enter You User Name"));
  }, []);

  return (
    <div className='app'>
      <div className='logo'>
        <h1>
         Tharuka Dilshara Me chat app
           </h1>
          <img src="https://th.bing.com/th/id/OIP.1UibV9emrXwSW7No1yYuqAAAAA?w=212&h=212&c=7&r=0&o=5&pid=1.7" alt="logo" width={100}/>     
      </div>

      {/* logo */}

      {/* input state and button */}
      <form className='app__input'>
        <div className='chat__border'>
          <input
          placeholder="Type....."
            type='text'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div />
        </div>
        <button onClick={massage} disabled={!input} type='submit'>
          Sent
        </button>
      </form>
      {/* container */}

      <FlipMove className="message">
        {massages.map(({id ,massage}:any) => (
          <div key={id}>
            <Massage username={username} massage={massage}/>
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
