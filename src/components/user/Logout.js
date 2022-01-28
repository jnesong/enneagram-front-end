import { useState } from "react";
import { useHistory } from "react-router-dom";

function Logout( {baseURL} ) {
  const [buttonDisplay, setButtonDisplay] = useState("logout");
  const history = useHistory();


    function handleLogout() {
      fetch( baseURL + "/logout", {
        method: "DELETE",
      }).then(console.log("bye"))
      setButtonDisplay("bye!");
      setTimeout(() => {history.push("/")}, 1000);
    }
  
    return (
      <header>
        <button className="buttonLogout" onClick={handleLogout}> {buttonDisplay} </button>
      </header>
    );
  }

  export default Logout;