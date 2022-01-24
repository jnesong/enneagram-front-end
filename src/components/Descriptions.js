import { useState, useEffect } from 'react';

function Descriptions( {enneagram, baseURL, path} ) {
  const [enneagramData, setEnneagramData] = useState([{
    "enneagram_id": 0,
    "title": "",
    "description": ""
  }]);


  useEffect(()=> {
    fetch(baseURL + "/enneagrams" + path)
    .then(r=>r.json())
    .then(data => setEnneagramData(data))
  }, [])
  
  // console.log(enneagramData[0].description)

    return (
      <div>
        <p>{enneagramData[0].title}</p>
        <p>{enneagramData[0].description}</p>
      </div>
    );
  }
  
  export default Descriptions;