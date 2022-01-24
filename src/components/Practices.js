import { useState, useEffect } from 'react';

function Practices( { enneagram, baseURL, path } ) {
    const [enneagramData, setEnneagramData] = useState([{
        "enneagram_id": 0,
        "title": ""
    }]);

    useEffect(() => {
        fetch(baseURL + "/enneagrams" + path)
            .then(r => r.json())
            .then(data => setEnneagramData(data))
    }, [enneagram, baseURL, path])

    let practices = enneagramData.map((obj) => <li key={obj.title}> {obj.title} </li>)

    return (
        <div>
            <p className="title"> Recommended practices to help {enneagram}'s process & grow: </p>
            <ul>
                {practices}
            </ul>
        </div>
    );
}

export default Practices;