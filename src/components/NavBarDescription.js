import { NavLink, useLocation } from "react-router-dom";

function NavBarDescriptions( {enneagram} ) {

    // let location = useLocation()
    // console.log(location)
    // let path = location.pathname
    // console.log(path)

    // const doubleNum= `${enneagram}`+ `/${enneagram}`

    // function isRepeat (path, doubleNum) {
    //     if (path.includes(doubleNum)) {return true}
    //     else {return false}
    // }

    // // function isRepeat () {
    // //     return false
    // // }

    return (
        <nav id="descriptionNav">
            <NavLink className="enlarge" to={ `${enneagram}/about` }> About </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/strengths` } > Strengths </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/weaknesses` }> Weaknesses </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/practices` }> Helpful Practices </NavLink>
            <NavLink className="enlarge" to={ `${enneagram}/health` }> Health Levels </NavLink>
        </nav>
    );
}

export default NavBarDescriptions;