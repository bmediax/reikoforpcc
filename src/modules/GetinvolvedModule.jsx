import { useState } from 'react'
import SectionTemplate from '../components/SectionTemplate'
import './GetinvolvedModule.scss'
import PopupModule from './PopupModule'

const GetinvolvedModule = () => {
    const [ modal, setModal ] = useState(false)
    const [ formSent, setFormSent ] = useState(false)
    const [ formData, setFormData ] = useState({})
    const [ message, setMessage ] = useState("")

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    }

    const sendData = async e => {
        e.preventDefault();
        const {first, last, email, org, phonebank, lawnsign, endorse} = formData
        try {
            await fetch(
                "https://v1.nocodeapi.com/bmediax/google_sheets/YnGwFVSmQsDSetUl?tabId=form",
                {
                    method: "post",
                    body: JSON.stringify([[first, last, email, org, phonebank, lawnsign, endorse]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            // const json = await response.json();
            // console.log("Success:", JSON.stringify(json));
            toggleModal()
            setFormSent(true)
            setMessage("Message Sent!");
        } catch (error) {
            console.error("Error:", error);
            setFormSent(false)
            setMessage("Error");
        }
    };

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <SectionTemplate topic="get-involved" tag="getinvolved">
            <h1>Get involved</h1>
            <button onClick={toggleModal} className="btn dark-btn-solid"> { modal ? "Hide Form" : "I want to help out!"}</button>
            <PopupModule show={modal} ide="getinvo">
                <h3> Volunteer Form</h3>
                <form className="getinvolved-form" required onSubmit={sendData} >
                    <div id="close-modal" onClick={toggleModal}>x</div>
                    <label htmlFor="first">First Name</label>
                    <input name="first" type="text" id="first" placeholder="John" onChange={handleInput} />

                    <label htmlFor="last">Last Name</label>
                    <input name="last" type="text" id="last" placeholder="Appleseed" onChange={handleInput}/>

                    <label htmlFor="email">Email Address</label>
                    <input name="email" type="email" id="email" placeholder="email@mail.com" onChange={handleInput} />

                    <label htmlFor="titleorg">Title / Organization</label>
                    <input name="org" type="text" id="titleorg" placeholder="Title / Organization" onChange={handleInput}/>

                    <div className="getinvolved-checkbox">
                        <label>I'd like to</label><br />
                        <input type="checkbox" id="phonebank" name="phonebank" onChange={handleInput} />
                        <label htmlFor="phonebank">Phone Bank</label>
                        <br />
                        <input type="checkbox" id="lawnsign" name="lawnsign" onChange={handleInput} />
                        <label htmlFor="lawnsign">Receive Lawn Sign </label>
                        <br />
                        <input type="checkbox" id="endorse" name="endorse" onChange={handleInput} />
                        <label htmlFor="endorse">Endorse Reiko and authorize her campaign to display my name publicly</label>
                    </div>

                    <input name="submit" type="submit" value="SEND" className="btn minimal-btn" />
                </form>
            </PopupModule>
            <p align="center" style={{margin: "0px", padding: "0px", color: "white", fontWeight: "Bold", fontSize: "2rem"}}>{formSent ? message : ''}</p>
        </SectionTemplate>
    )
}

export default GetinvolvedModule
