import { NavLink } from "react-router-dom";

function NavBarNumbers() {
    return (
        <nav id="numberNav" >
            <NavLink className="enlarge" to="/1"> 1 </NavLink>
            <NavLink className="enlarge" to="/2"> 2 </NavLink>
            <NavLink className="enlarge" to="/3"> 3 </NavLink>
            <NavLink className="enlarge" to="/4"> 4 </NavLink>
            <NavLink className="enlarge" to="/5"> 5 </NavLink>
            <NavLink className="enlarge" to="/6"> 6 </NavLink>
            <NavLink className="enlarge" to="/7"> 7 </NavLink>
            <NavLink className="enlarge" to="/8"> 8 </NavLink>
            <NavLink className="enlarge" to="/9"> 9 </NavLink>

        </nav>
    );
}

export default NavBarNumbers;