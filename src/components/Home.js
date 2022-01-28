import NavBarNumbers from "./NavBarNumbers";
import LogOn from "./user/LogOn";
import plant2 from "./gifs/plant2.gif";
import { useState } from 'react';

function Home({holdUser}) {

    const [numberPage, setNumberPage] = useState("/");


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
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            <img src={plant2} alt="plant gif" />
            {<br />}
            {<br />}
            {<br />}
            {<br />}
           
            <LogOn 
            holdUser={holdUser}
            />

            {<br />}
            {<br />}
            {<br />}
            <p className="fade" id="credit"> Credit to CrossingParagould for the enneagram information on this site 🙏 </p>

        </div>
    );
}

export default Home;