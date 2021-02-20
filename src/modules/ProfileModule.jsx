import { Link } from 'react-router-dom'
import './ProfileModule.scss'

const ProfileModule = (props) => {
    return (
        <div className="profile-module">
            <img className="profile-module_img" src={props.img} alt="Profile Headshot" />
            <span className="profile-module_textarea">
                <h3>{props.title}</h3>
                <p>{props.descr}</p>
                <Link to={props.link} className="btn minimal-btn" style={{marginTop:"15px"}}>{props.linkText}</Link>
            </span>
        </div>
    )
}

export default ProfileModule