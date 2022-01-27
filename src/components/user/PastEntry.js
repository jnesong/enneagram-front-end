// import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
// import EditEntry from './EditEntry';

function PastEntry({ journey, holdDeletedID }) {

    function handleDeleteClick() {
        fetch(`/journeys/${journey.id}`, {
            method: "DELETE"
        })
        holdDeletedID(journey.id)
    }


    return (

        <>
            <p> ----------------------------- </p>
            <p className="past"> {journey.date} - enneagram: {journey.enneagram}, level: {journey.level} </p>
            <p className="past"> {journey.entry} </p>
            <nav id="editNav">
                <NavLink className="enlarge" to={`/`}> edit </NavLink>
            </nav>
            <button className="buttonDelete" onClick={handleDeleteClick}> delete </button>
        </>

    )
}

export default PastEntry;