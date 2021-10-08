import { useState } from "react";
import "./App.css";
import Media from "./Media";
import useFetch from "use-http";
 import Button from "react-bootstrap/Button"
import Header from "./Components/Header";
import UserList from "./Components/UserList";

function App() {
  let uri = "https://picsum.photos/id/0/info";

  const options = {};
  const { loading, error, data = [] } = useFetch(uri, options, []);

  const [message, setmessage] = useState("Joł");

  const displayMessage = () => {
    alert(message);
  };


  return (
    <div className="App">
     <Header/>
      <UserList/>
    </div>
  );
}

export default App;
