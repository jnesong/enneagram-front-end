import { useState, useEffect } from 'react';

function Descriptions({ enneagram, baseURL, path }) {
  const [error, setError] = useState(null);

  const [enneagramData, setEnneagramData] = useState([{
    "enneagram_id": 0,
    "title": "",
    "description": ""
  }]);


  useEffect(() => {
    const abortCont = new AbortController();

    fetch(baseURL + "/enneagrams" + path, { signal: abortCont.signal })
      .then(r => r.json())
      .then(data => setEnneagramData(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else { setError(err.message) };
      })
    return () => abortCont.abort()
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