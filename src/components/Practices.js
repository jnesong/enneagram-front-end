import { useState, useEffect } from 'react';

function Practices( { enneagram, baseURL, path } ) {
    const [error, setError] = useState(null);

    const [enneagramData, setEnneagramData] = useState([{
        "enneagram_id": 0,
        "title": ""
    }]);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(baseURL + "/enneagrams" + path, { signal: abortCont.signal})
            .then(r => r.json())
            .then(data => setEnneagramData(data))
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } 
                else {
                    setError(err.message)};
                });
        return () => abortCont.abort()
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