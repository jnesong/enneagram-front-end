import { NavLink } from "react-router-dom";

function NavBarDescriptions( {enneagram} ) {

// console.log(enneagram)

// useEffect(()=>{

// })
    
    return (
        <nav id="descriptionNav">
            <NavLink className="enlarge" exact to={ `${enneagram}/about` }> About </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/strengths` }> Strengths </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/weaknesses` }> Weaknesses </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/practices` }> Helpful Practices </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/health` }> Health Levels </NavLink>
        </nav>
    );
}

export default NavBarDescriptions;