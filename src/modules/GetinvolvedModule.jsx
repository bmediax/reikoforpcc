import { useState } from 'react'
import SectionTemplate from '../components/SectionTemplate'
import './GetinvolvedModule.scss'
import PopupModule from './PopupModule'

const GetinvolvedModule = () => {
    const [ modal, setModal ] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <SectionTemplate topic="get-involved" tag="getinvolved">
            <h1>Get involved</h1>
            <button onClick={toggleModal} className="btn transparent-btn-solid"> { modal ? "Hide" : "I want to help out!"}</button>
            <PopupModule show={modal}>
                <h3> Get Involved</h3>

                <form className="getinvolved-form">
                    <label for="first">First Name</label>
                    <input type="text" id="first" placeholder="John" />

                    <label for="last">Last Name</label>
                    <input type="text" id="last" placeholder="Appleseed" />

                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="email@mail.com" />

                    <label for="titleorg">Title / Organization</label>
                    <input type="text" id="titleorg" placeholder="Title / Organization" />

                    <div className="getinvolved-checkbox">
                        <label>I'd like to</label><br />
                        <input type="checkbox" id="phonebank" name="phonebank" value="phonebank" />
                        <label htmlFor="phonebank">Phone Bank</label>
                        <br />
                        <input type="checkbox" id="lawnsign" name="lawnsign" value="lawnsign" />
                        <label htmlFor="lawnsign">Receive Lawn Sign </label>
                        <br />
                        <input type="checkbox" id="endorse" name="endorse" value="endorse" />
                        <label htmlFor="endorse">Endorse Reiko and I authorize her campaign to display my name publicly</label>
                    </div>

                    <input type="submit" value="send" className="btn minimal-btn" />
                </form>
            </PopupModule>
        </SectionTemplate>
    )
}

export default GetinvolvedModule
