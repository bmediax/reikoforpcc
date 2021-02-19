import { Link } from 'react-router-dom'
import './ProfileModule.scss'

const ProfileModule = (props) => {
    return (
        <div className="profile-module">
            <img className="profile-module_img" src={props.img} alt="Profile Headshot" />
            <span className="profile-module_textarea">
                <p>{props.descr}</p>
                <Link to={props.link} className="btn minimal-btn">{props.linkText}</Link>
            </span>
        </div>
    )
}

export default ProfileModule