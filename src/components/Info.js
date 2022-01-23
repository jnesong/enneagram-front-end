import NavBarNumbers from "./NavBarNumbers";
import NavBarDescription from "./NavBarDescription";
import { useState } from 'react';

function Info() {

    const[numberPage, setNumberPage] = useState("/");
    const [descriptionPage, setDescriptionPage] = useState("/")


    return (
        <div>
            <NavBarNumbers onChangePage={setNumberPage} />
            <NavBarDescription onChangePage={setDescriptionPage} />
        </div>
    );
}

export default Info;