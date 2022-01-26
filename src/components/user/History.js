import React, { useEffect, useState } from "react";

function History({ baseURL }) {

    const [journalHistory, setJournalHistory] = useState([]);

    useEffect(fetchData, [baseURL]);

    function fetchData() {
        fetch(baseURL + "/journeys")
            .then(r => r.json())
            .then(data => setJournalHistory(data))
    };

    function handleEdit ( clickedJourney ) {
        console.log("edit was clicked")
        const updatedJournalHistory = journalHistory.map(journey => {
            if (journey.id === clickedJourney.id) {
                return {...journalHistory, clickedJourney}
            } else {
                return journalHistory
            }
        })
        setJournalHistory(updatedJournalHistory)
    }

    console.log(journalHistory);

    const listJournalHistory = journalHistory.map(journey => {
        return (
        <div key={journey.id}>
            <p> {journey.date} -  enneagram: {journey.enneagram} level: {journey.level} </p>
            <p> {journey.entry} </p>
            <button className="buttonSubmit" onClick={handleEdit}> edit </button>
        </div>
        )
    })

    return (

        <>

            {<br />}
            {<br />}
            <p> history </p>
            {listJournalHistory}

            {<br />}
            {<br />}
        </>

    )
}

export default History;