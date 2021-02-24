import './Error.scss'
import RiekoLogo from '../assets/logo.png'

const Error = () => {
    return (
        <div id="error">
            <img src={RiekoLogo} alt="Reiko Mia Williams for PCC Zone 7" id="notfound-logo" />
            <h1>Error 404: Not Found</h1>
        </div>
    )
}

export default Error