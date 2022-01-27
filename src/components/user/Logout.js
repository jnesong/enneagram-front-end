function Logout( {baseURL} ) {
    function handleLogout() {
      fetch( baseURL + "/logout", {
        method: "DELETE",
      }).then(console.log("bye"))
    }
  
    return (
      <header>
        <button className="buttonLogout" onClick={handleLogout}>logout</button>
      </header>
    );
  }

  export default Logout;