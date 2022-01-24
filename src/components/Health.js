import { useState, useEffect } from 'react';

function Health( {enneagram, baseURL, path} ) {

    const [enneagramData, setEnneagramData] = useState([{
        "enneagram_id": 0,
        "level": 0,
        "description": ""
    }]);

    useEffect(() => {
        fetch(baseURL + "/enneagrams" + path)
            .then(r => r.json())
            .then(data => setEnneagramData(data))
    }, [enneagram])

    let healthLevels = enneagramData.map((obj) => <li className="health" key={obj.level}> Level {obj.level} : {obj.description} </li> )


    return (
        <div>
            <p className="title"> The Levels of Development are measuring our capacity to be fully present in our relationships and use our personality and
gifts in life-giving ways. </p>
            <ul>
                {healthLevels}
            </ul>
        </div>
    );
}
  
  export default Health;