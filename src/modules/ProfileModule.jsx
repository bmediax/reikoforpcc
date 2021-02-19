import './ProfileModule.scss'

const ProfileModule = () => {
    return (
        <div className="profile-module">
            <span className="profile-module_img" style={{"background": "url('https://via.placeholder.com/300x250?text=Headshot%20Image')"}}></span>
            <span className="profile-module_textarea">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sag   enenatis mi. Cras justo sem, volutpat tincidunt risus vitae, suscipit lobortis quam. Suspendisse sed odio erat. Nam odio lectus, tristique in lacus nec, condimentum malesuada nibh. Praesent quis metus risus. Etiam ut leo sit amet neque facilisis egestas. Sed sed ex quis orci ultricies.</p>
                <a href="https://google.com" className="btn minimal-btn">Learn More</a>
            </span>
        </div>
    )
}

export default ProfileModule