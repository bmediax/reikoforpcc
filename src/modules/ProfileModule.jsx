import './ProfileModule.scss'

const ProfileModule = (props) => {
    return (
        <div className="profile-module">
            <span className="profile-module_img" style={{backgroundImage: `url(${props.img})`}}></span>
            <span className="profile-module_textarea">
                <p>{props.descr}</p>
                <a href={props.link} className="btn minimal-btn">{props.linkText}</a>
            </span>
        </div>
    )
}

export default ProfileModule