import React, { useEffect, useState } from "react";
import PastEntry from "./PastEntry";

function History({ journalHistory, holdDeletedID, holdEdit }) {

    // const [journalHistory, setJournalHistory] = useState([]);

    // useEffect(fetchData, [baseURL]);

    // function fetchData() {
    //     fetch(baseURL + "/journeys")
    //         .then(r => r.json())
    //         .then(data => setJournalHistory(data))
    // };

    // function holdDeletedID(id){
    //     const updatedJournalHistory = journalHistory.filter(journey => journey.id !== id)
    //     setJournalHistory(updatedJournalHistory)
    // }

    const listJournalHistory = journalHistory.map(journey => (
        <PastEntry
            key={journey.id} 
            journey = {journey}
            holdDeletedID = {holdDeletedID}
            holdEdit={holdEdit}
        />
    ))

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