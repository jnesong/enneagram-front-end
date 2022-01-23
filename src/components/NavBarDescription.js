import { NavLink } from "react-router-dom";

function NavBarDescriptions() {
    return (
        <nav id="descriptionNav">
            <NavLink exact to="/about"> About </NavLink>
            <NavLink to="/strengths"> Strengths </NavLink>
            <NavLink to="/weaknesses"> Weaknesses </NavLink>
            <NavLink to="/practices"> Helpful Practices </NavLink>
            <NavLink to="/health"> Health Levels </NavLink>
        </nav>
    );
}

export default NavBarDescriptions;