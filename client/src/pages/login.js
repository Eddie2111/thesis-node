import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";
axios.defaults.withCredentials = true;

const Login = () => {
    const [message, setMessage] = useState("");
    const formHandle = async (e) => {
        e.preventDefault();
        
            await axios.post(backend+"login",
            { email:e.target.email.value,
              password:e.target.password.value },
            {
                withCredentials: true,
            }
            )
            .then((res) => {
                console.log(res.data);
                setMessage(res.data.data.message);
            }
            )
            .catch((err) => {
                console.log(err);
                
            }
            );
        /*
        else{
            setMessage("Please enter your credentials");
            setTimeout(() => { setMessage(""); }, 1000);

        }
        */
        //e.target.reset();

    }
    return (
        <>
        <Sidebar/>
        <div className="Body">
            
        <div className="card">
            <form onSubmit={formHandle}>
                <label>Type email</label>
                <input className="inputbox" name="email" type="text" placeholder="admin@test.com" />
                <br/>
                <label>Type password</label>
                <input className="inputbox" name="password" type="password" placeholder="********" />
                <br/>
                <button className="button" type="submit">Login</button>
            </form>
            </div>
            <p>{message}</p>
        </div>
        </>
    );
    }

export default Login;