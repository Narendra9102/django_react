import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './LoginForm.css';
import NavBar from "./NavBar";

function RegistrationForm() {

    const [customerName, setCustomerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/registration/", {
                customerName: customerName,
                mobileNumber: mobileNumber,
                emailId: emailId,
                password: password,
            });
            setRegistrationSuccess(true);
            setCustomerName("");
            setMobileNumber("");
            setEmailId("");
            setPassword("");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login">
            <div className="head">
                <NavBar />
            </div>
        <div className="log">
            <h2>Create An Account</h2>
            {registrationSuccess && <p className="Logs">Registration success</p>}
            <form className="reg" onSubmit={save}>
                <label>Customer Name</label>
                <input
                    type="text"
                    className="form"
                    id="customername"
                    placeholder="Enter Name"
                    value={customerName}
                    onChange={(event) => {
                        setCustomerName(event.target.value);
                    }}
                    required
                />

                <label>Mobile Number</label>
                <input
                    type="text"
                    className="form"
                    id="employeename"
                    placeholder="Enter Number"
                    value={mobileNumber}
                    onChange={(event) => {
                        setMobileNumber(event.target.value);
                    }}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    className="form"
                    id="email"
                    placeholder="Enter Email"
                    value={emailId}
                    onChange={(event) => {
                        setEmailId(event.target.value);
                    }}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    className="form"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required
                />

                <button 
                    type="submit"
                    className="login-btn">Register </button>

                <br /><br />

                <Link
                    to='/login'
                    className='list'>Login</Link>

            </form>
        </div>
        </div>
    );
}

export default RegistrationForm;