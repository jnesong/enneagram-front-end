// import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
// import EditEntry from './EditEntry';

function PastEntry({ journey, holdDeletedID, holdEditedID }) {

    function handleDeleteClick() {
        fetch(`/journeys/${journey.id}`, {
            method: "DELETE"
        })
        holdDeletedID(journey.id)
    }

    function handleEditClick() {
        holdEditedID(journey.id)
    }


    return (

        <>
            <p> ----------------------------- </p>
            <p className="past"> {journey.date} - enneagram: {journey.enneagram}, level: {journey.level} </p>
            <p className="past"> {journey.entry} </p>
            <nav id="editNav">
                <NavLink className="enlarge" onClick={handleEditClick} to={`/editor`}> edit </NavLink>
            </nav>
            <button className="buttonDelete" onClick={handleDeleteClick}> delete </button>
        </>

    )
}

export default PastEntry;