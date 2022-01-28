import { useState, useEffect } from 'react';

function EditEntry( {journey, holdEdit} ) {

  const baseURL = "http://localhost:3000";
  // const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [journalData, setJournalData] = useState({
    date: journey.date,
    enneagram: journey.enneagram,
    level: journey.level,
    entry: journey.entry
  });


  const handleChange = (e) => {
    setJournalData({
      ...journalData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault()

    fetch(baseURL + `/journeys/${journey.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(journalData),
    }).then(r => r.json())
      .then(editedJourney => holdEdit(editedJourney))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else { setError(err.message) };
      })
  };

  return (
    <div className="editor">

      <p> edit past entry </p>

      <form onSubmit={handleSubmit} className="fade" >

        <div>

          <label htmlFor="date" />
          <input
            type="date"
            name="date"
            defaultValue={journey.date}
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
            defaultValue={journey.enneagram}
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
            defaultValue={journey.level}
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
            defaultValue={journey.entry}
            name="entry"
            value={journalData.entry}
            onChange={handleChange}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />

          <button className="buttonSaveEdit" type="submit"> save edit </button>


        </div>


      </form>

    </div>
  );
}

export default EditEntry;