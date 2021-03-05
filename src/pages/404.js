import RiekoLogo from '../assets/logo.png'
import Layout from '../layout/Layout'
// import './Error.scss'

const Error = () => {
    return (
        <Layout title="404 Not Found">
            <div id="error">
                <img src={RiekoLogo} alt="Reiko Mia Williams for PCC Zone 7" id="notfound-logo" />
                <h1>Error 404: Not Found</h1>
            </div>
        </Layout>
    )
}

export default Error