import NavBarNumbers from "./NavBarNumbers";
import { useState } from 'react';

function Home() {

    const[numberPage, setNumberPage] = useState("/");


    return (
        <div>
            <NavBarNumbers onChangePage={setNumberPage} />
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            <p className="fade" > According to the Enneagram there are nine personality types.</p>
            <p className="fade" > Each personality has particular gifts and weaknesses they bring into their relationships.</p>
            <p className="fade" > The Enneagram resonates with most people as it aids our understanding of how we’ve been shaped by our stories.</p>
        </div>
    );
}

export default Home;