// import { useEffect, useState } from "react";
import { Button, Popup } from 'semantic-ui-react'
import EditEntry from './EditEntry'

function PastEntry({ journey, holdDeletedID, holdEdit }) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/journeys/${journey.id}`, {
            method: "DELETE"
        })
        holdDeletedID(journey.id)
    }

    const style ={
        padding: '10px',
        border: 'none',
        background: 'transparent',
        fontSize: '16px',
        color: 'rgb(7, 36, 21)',
        fontFamily: 'Optima',
        letterSpacing: '5px',
        marginRight: '55px',
    }

    let popEditor = <Popup
        content={
            <>
                <EditEntry 
                journey={journey}
                holdEdit={holdEdit}
                />
            </>
        }
        on='click'
        popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
        trigger={<Button style={style}> edit </Button>}
    />


    return (

        <>
            <p> ----------------------------- </p>
            <p className="past"> {journey.date} - enneagram: {journey.enneagram}, level: {journey.level} </p>
            <p className="past"> {journey.entry} </p>
            {popEditor}
            <button className="buttonDelete" onClick={handleDeleteClick}> delete </button>
        </>

    )
}

export default PastEntry;