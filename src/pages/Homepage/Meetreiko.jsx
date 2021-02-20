import ProfileModule from '../../modules/ProfileModule'
import SectionTemplate from '../../components/SectionTemplate'

const Meetreiko = () => {
    return (
        <SectionTemplate topic="meet-reiko_section">
            <h1> Meet Reiko Mia Williams </h1>

            <ProfileModule 
                title="Who am I?" 
                descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus sag   enenatis mi. Cras justo sem, volutpat tincidunt risus vitae, suscipit lobortis quam. Suspendisse sed odio erat. Nam odio lectus, tristique in lacus nec, condimentum malesuada nibh. Praesent quis metus risus. Etiam ut leo sit amet neque facilisis egestas. Sed sed ex quis orci ultricies." 
                img="https://via.placeholder.com/300x250?text=Headshot%20Image" 
                link="meet-reiko" 
                linkText="Learn More" />
        </SectionTemplate>
    )
}

export default Meetreiko