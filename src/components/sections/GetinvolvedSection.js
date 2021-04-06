import React, { useState } from 'react'
import SectionLayout from '../../layout/SectionLayout'
import '../../styles/GetinvolvedSection.scss'
import PopupModule from '../modules/PopupModule'

const GetinvolvedModule = () => {
    const [ modal, setModal ] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <SectionLayout topic="get-involved" tag="getinvolved">
            <h1>Get involved</h1>
            <button onClick={toggleModal} className="btn blue-btn-solid" style={{ outline: "none", border: "none", margin: "auto" }}> { modal ? "Hide Form" : "I want to help out!"}</button>
            <PopupModule show={modal} ide="getinvo">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddxXfQaYxUUIoEK1FozE8XClHXvTjhoHfyzshuYtiwJXNdKQ/viewform?embedded=true"            
                    title="Get Involved Form"
                    height="1200" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0" 
                    style={{textAlign: "center", width: "100%", display: "block", margin: "auto"}} >
                    Loading…
                </iframe>
            </PopupModule>
        </SectionLayout>
    )
}

export default GetinvolvedModule