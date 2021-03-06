// import { useContext } from 'react'
// import ReactTooltip from "react-tooltip";

// import { MdEmail } from "react-icons/md";
// import { AiFillFacebook } from "react-icons/ai";
// import { navContext } from '../data/context/navContext';

// const Footer = (props) => {
//     const navItems = useContext(navContext)
//     return (
//         <footer>
//             <div id="footer-wrapper">
//                 <div className="footer-logo">
//                     <img src={props.logo} alt="Reiko for PCC Logo" />
//                 </div>
//                 <ul className="footer-nav">
//                 {navItems.map(navs => (
//                     <li key={navs.id}><a href={navs.path}>{navs.title}</a></li>
//                 ))}
//                 </ul>
//                 <div className="footer-social">
//                     <ReactTooltip
//                         id="main"
//                         multiline={true}
//                     />
//                     <a href="https://facebook.com/Williams4PCC"><AiFillFacebook data-for="main" data-tip="Like us on Facebook" data-iscapture="true" alt="Follow us on Facebook"/></a>
//                     <a href="mailto:reiko4pcc@gmail.com"><MdEmail data-for="main" data-tip="Email Us" data-iscapture="true" alt="Email Reiko" /></a>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer
import React from 'react'

const Footer = () => {
    return (
        <p>Footer </p>
    )
}

export default Footer