import SectionTemplate from '../components/SectionTemplate'
import './GetinvolvedModule.scss'
import PopupModule from './PopupModule'

const GetinvolvedModule = () => {
    return (
        <SectionTemplate topic="get-involved" tag="getinvolved">
            <h1>Get involved</h1>
            <button className="btn transparent-btn-solid"> I want to help out! </button>
            <PopupModule>
                <h3> Popup Module</h3>
            </PopupModule>
        </SectionTemplate>
    )
}

export default GetinvolvedModule