import React from "react";
import axios from "axios";
import { useState } from "react";
import backend from "./api/backend";
import Sidebar from "./components/sidebar";


const Home = () => {
    const [message, setMessage] = useState("");
    const formHandle = async (e) => {
        e.preventDefault();
        if(e.target.sentence.value !== ""){
            await axios.post(backend+"recieve", 
            { sentence:e.target.sentence.value },
            )
            .then((res) => {
                console.log(res.data.data);
                setMessage(res.data.data);
            }
            )
            .catch((err) => {
                console.log(err);
                
            }
            );
        }
        else{
            setMessage("Please enter a sentence");
            setTimeout(() => { setMessage(""); }, 3000);

        }
        e.target.reset();

    }
    return (
        <>
        <Sidebar/>
        <div className="Body">
            
        <div className="card">
            <form onSubmit={formHandle}>
                <label>Type any sentence</label>
                <input className="inputbox" name="sentence" type="text" placeholder="যে কোন বাংলা বাক্য" />
                <button className="button" type="submit">Submit</button>
            </form>
            </div>
            <p>{message}</p>
        </div>
        </>
    );
    }

export default Home;