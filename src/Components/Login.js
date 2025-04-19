import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            // Store token in localStorage
            localStorage.setItem("token", data.token);
            alert("Login successful!");

            // Redirect to dashboard
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return React.createElement(
        "div",
        { style: { textAlign: "center", padding: "50px" } },
        React.createElement("h2", null, "Login"),
        error ? React.createElement("p", { style: { color: "red" } }, error) : null,
        React.createElement(
            "form",
            { onSubmit: handleLogin },
            React.createElement("input", {
                type: "email",
                placeholder: "Email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                style: { display: "block", margin: "10px auto", padding: "10px", width: "250px" }
            }),
            React.createElement("input", {
                type: "password",
                placeholder: "Password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true,
                style: { display: "block", margin: "10px auto", padding: "10px", width: "250px" }
            }),
            React.createElement(
                "button",
                { type: "submit", style: { padding: "10px 20px", cursor: "pointer" } },
                "Login"
            )
        )
    );
}

export default Login;
