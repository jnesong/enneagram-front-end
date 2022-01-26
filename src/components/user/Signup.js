import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ baseURL }) {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [buttonDisplay, setButtonDisplay] = useState("signup");

    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        displayname: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault()
        fetch(baseURL + "/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
                setButtonDisplay("✔ signup confirmed, thank you!");
                setTimeout(() => {history.push("/journal")}, 2000);
            } else {
                response.json().then((errors) => {
                    console.error(errors);
                    setButtonDisplay(errors[0] + ", please try again.");
                });
            }
        })
            .catch(err => {setError(err.message)});
    };


    return (
        <div className="login">

            <p className="fade"> Welcome New User! </p>

            <form onSubmit={handleSubmit} className="fade">
                <div>

                    <label htmlFor="username" />
                    <input
                        className="input-login"
                        type="text"
                        placeholder="enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="display-name" />
                    <input
                        className="input-login"
                        type="text"
                        placeholder="enter display name"
                        name="displayname"
                        value={formData.displayname}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" />
                    <input
                        className="input-login"
                        type="password"
                        placeholder="enter password"
                        name="password"
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button className="buttonSubmit" type="submit"> {buttonDisplay} </button>

                </div>

            </form>
        </div>
    );
}

export default Signup;