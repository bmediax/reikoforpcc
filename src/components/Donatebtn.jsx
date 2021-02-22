import { AiFillHeart } from "react-icons/ai";

const Donatebtn = (props) => {
    return (
        <a href={props.donationlink} className="btn donate donate-btn">Donate <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/></a>
    )
}

export default Donatebtn;