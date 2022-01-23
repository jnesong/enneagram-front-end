import { NavLink } from "react-router-dom";

function NavBarNumbers() {
    return (
        <nav id="numberNav">
            <NavLink to="/1"> 1 </NavLink>
            <NavLink to="/2"> 2 </NavLink>
            <NavLink to="/3"> 3 </NavLink>
            <NavLink to="/4"> 4 </NavLink>
            <NavLink to="/5"> 5 </NavLink>
            <NavLink to="/6"> 6 </NavLink>
            <NavLink to="/7"> 7 </NavLink>
            <NavLink to="/8"> 8 </NavLink>
            <NavLink to="/9"> 9 </NavLink>

        </nav>
    );
}

export default NavBarNumbers;