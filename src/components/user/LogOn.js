import Login from './Login';
import Signup from './Signup';

function LogOn( {holdUser} ) {

    const baseURL = "http://localhost:3000";

    return (
        <div>
            <Login 
            baseURL={baseURL}
            holdUser={holdUser}
            />
            {<br />}
            {<br />}
            <Signup 
            baseURL={baseURL}
            />
        </div>
    );
}

export default LogOn;