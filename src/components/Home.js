import NavBarNumbers from "./NavBarNumbers";
import { useState } from 'react';

function Home() {

    const[numberPage, setNumberPage] = useState("/");


    return (
        <div>
            <NavBarNumbers onChangePage={setNumberPage} />
        </div>
    );
}

export default Home;