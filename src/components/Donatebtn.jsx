import { AiFillHeart } from "react-icons/ai";
import { useContext } from 'react'
import { donationContext } from "../tools/donationContext";

const Donatebtn = (props) => {
    const donationlink = useContext(donationContext)

    return (
        <a href={donationlink} className="btn donate donate-btn">Donate <AiFillHeart className="btn-icon" style={{marginTop: "-2px"}}/></a>
    )
}

export default Donatebtn;