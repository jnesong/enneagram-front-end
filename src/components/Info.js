import NavBarNumbers from "./NavBarNumbers";
import NavBarDescription from "./NavBarDescription";
import About from "./About"
import Descriptions from "./Descriptions";
import Practices from "./Practices"
import Health from "./Health";
// import plant from './gifs/plant.gif';
import { useState, useEffect } from 'react';
import { useParams, Switch, Route } from 'react-router-dom';

function Info( ) {

    const[numberPage, setNumberPage] = useState("");
    const [descriptionPage, setDescriptionPage] = useState("/");
    const { enneagramNumber } = useParams();
    const [enneagram, setEnneagram] = useState({});
    const baseURL = "http://localhost:3000";
    let strengthPath = `/${enneagram.number}` + "/strengths"
    let weaknessPath = `/${enneagram.number}` + "/weaknesses"
    let practicePath = `/${enneagram.number}` + "/practices"
    let healthPath = `/${enneagram.number}` + "/healths"

    useEffect(() => {
      fetch(baseURL + "/enneagrams" + `/${enneagramNumber}`)
        .then(r => r.json())
        .then(data => setEnneagram(data))
    }, [enneagramNumber]);  

    // console.log(enneagram)

    return (
        <div>
            <NavBarNumbers onChangePage = {setNumberPage} />

            <NavBarDescription 
            enneagram = {enneagram.number}
            onChangePage = {setDescriptionPage} />

                <Switch>

                    <Route path="/:enneagramNumber/about">
                        <About 
                        enneagram={enneagram}/>
                    </Route>

                    <Route path="/:enneagramNumber/strengths">
                        <Descriptions
                        path= {strengthPath}
                        baseURL={baseURL}
                        />
                    </Route>

                    <Route path="/:enneagramNumber/weaknesses">
                        <Descriptions
                        baseURL={baseURL}
                        path = {weaknessPath}
                        />
                    </Route>

                    <Route path="/:enneagramNumber/practices">
                        <Practices
                        enneagram = {enneagram.number}
                        baseURL={baseURL}
                        path = {practicePath}
                        />
                    </Route>

                    <Route path="/:enneagramNumber/health">
                        <Health
                        enneagram={enneagram.number}
                        baseURL={baseURL}
                        path = {healthPath}
                        />
                    </Route>

                </Switch>

            <h1> {enneagram.emoji} </h1>


        </div>
    );
}

export default Info;


{/* <img src={plant} alt="plant gif"/> */}