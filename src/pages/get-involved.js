import React, { useState } from "react"
import Layout from "../layout"
// import SectionLayout from '../layout/SectionLayout'
import '../styles/GetinvolvedSection.scss'
import PopupModule from '../components/modules/PopupModule'
import Recaptcha from 'react-recaptcha'

// markup
const GetInvolved = () => {
    const [ formSent, setFormSent ] = useState(false)
    const [ formData, setFormData ] = useState({})
    const [ message, setMessage ] = useState("")
    const [isVerified, setIsVerified] = useState(false)

    const formObject = document.querySelector('.getinvolved-form');

    if ( formSent === true) {
        formObject.style.display = "none";
    } else {
        // formObject.style.display = "block";
    }
    
    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    }

    const sendData = async e => {
        if (isVerified) {
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
                setFormSent(true)
                // setModal(false)
                setMessage("Message Sent!");
                setIsVerified(false)
            } catch (error) {
                console.error("Error:", error);
                setFormSent(false)
                setMessage("Error");
            }
        } else {
            e.preventDefault();
            setMessage("Please enter Captcha to continue!")
            console.log("Nope")
        }
    };

    const verifyCallback = (response) => {
        if (response) {
            setIsVerified(true)
        }
    }

  return (
    <Layout title="Meet Reiko">
      <div id="cover">
        <h1> Get Involved </h1>
      </div>
        <PopupModule show={true} ide="getinvo">
            <h3 align="center"> Volunteer Form</h3>
            <p align="center" className="banner-alert" id="banner-alert">{isVerified ? '' : message}</p>
            <form className="getinvolved-form" required onSubmit={sendData} >
                {/* <div id="close-modal" onClick={toggleModal}>x</div> */}
                <label htmlFor="first">First Name</label>
                <input name="first" type="text" id="first" placeholder="John" onChange={handleInput} required/>

                <label htmlFor="last">Last Name</label>
                <input name="last" type="text" id="last" placeholder="Appleseed" onChange={handleInput} required/>

                <label htmlFor="email">Email Address</label>
                <input name="email" type="email" id="email" placeholder="email@mail.com" onChange={handleInput} required/>

                <label htmlFor="titleorg">Title / Organization</label>
                <input name="org" type="text" id="titleorg" placeholder="Title / Organization" onChange={handleInput} />

                <div className="getinvolved-checkbox">
                    <p>I'd like to</p>
                    <input type="checkbox" id="phonebank" name="phonebank" onChange={handleInput} />
                    <label htmlFor="phonebank">Phone Bank</label>
                    <br />
                    <input type="checkbox" id="lawnsign" name="lawnsign" onChange={handleInput} />
                    <label htmlFor="lawnsign">Receive Lawn Sign </label>
                    <br />
                    <input type="checkbox" id="endorse" name="endorse" onChange={handleInput} />
                    <label htmlFor="endorse">Endorse Reiko and authorize her campaign to display my name publicly</label>
                </div>
                <br />
                <Recaptcha 
                    sitekey="6LcCE3IaAAAAAOV_06li12uB_T7iOjPCAbBUSM5C"
                    render="explicit"
                    verifyCallback={verifyCallback}
                    SameSite="Secure"
                />
                <input name="submit" type="submit" value="SEND" onKeyDown={sendData} className="btn minimal-btn" />
            </form>
        </PopupModule>
    </Layout>
  )
}

export default GetInvolved