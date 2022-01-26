import { useState, useEffect } from 'react';
import Logout from './Logout';
import History from './History';
import plant from '../gifs/plant.gif'

function Journal() {
  const baseURL = "http://localhost:3000";
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [journalData, setJournalData] = useState({
    date: "",
    enneagram: null | Number,
    level: null | Number,
    entry: ""
  });

  useEffect(() => {
    fetch(baseURL + "/auth")
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
  }, []);

  console.log(user)

  const handleChange = (e) => {
    setJournalData({
      ...journalData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault()

    fetch(baseURL + "/journeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalData),
    }).then(r => r.json())
      .then(data => setNewEntry(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else { setError(err.message) };
      })
  };

  const [newEntry, setNewEntry] = useState({});

  return (
    <div>
      {<br />}
      {<br />}
      <p> journal </p>

      <form onSubmit={handleSubmit} className="fade" >

        <div>

          <label htmlFor="date" />
          <input
            type="date"
            name="date"
            value={journalData.date}
            onChange={handleChange}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />

          <label htmlFor="enneagram" />
          <input
            onKeyPress={(event) => {
              if (!/[1-9]/.test(event.key)) { //the key pressed is not the key for 1, 2, 3, 4, 5, 6, 7, 8, 9
                event.preventDefault();
              }
            }}
            type="text"
            placeholder="enneagram"
            name="enneagram"
            value={journalData.enneagram}
            onChange={handleChange}
          />

          <label htmlFor="level" />
          <input
            onKeyPress={(event) => {
              if (!/[1-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="text"
            placeholder="health level"
            name="level"
            value={journalData.level}
            onChange={handleChange}
          />

          {<br />}
          {<br />}
          {<br />}

          <label htmlFor="entry" />
          <textarea
            className="input-entry"
            type="text"
            placeholder="enter reflections"
            name="entry"
            value={journalData.entry}
            onChange={handleChange}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />

          <button className="buttonSubmit" type="submit"> save </button>


        </div>


      </form>

      {<br />}
      {<br />}

      <Logout
        baseURL={baseURL}
      />
      {<br />}
      {<br />}
      <img src={plant} alt="plant gif" />
      {<br />}
      {<br />}
  

    </div>
  );
}

export default Journal;

{/* <History
baseURL={baseURL}
/> */}