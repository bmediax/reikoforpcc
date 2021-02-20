import SectionTemplate from '../../components/SectionTemplate'
import React, { useState } from'react'
import { Overlay } from 'react-portal-overlay';

const PrioritiesSection = () => {
    const [openmodal, setOpenmodal] = useState(false)
    return (
        <SectionTemplate topic="priorities" tag="priorities">
            <h1> Priorities </h1>

            <div className="three-column-option_container">
                <div className="three-column-option">
                    <div onClick={() => setOpenmodal(true)}>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                    <Overlay css={`background: white;padding: 3rem; width: 100%;`} open={openmodal} onClose={() => setOpenmodal(false)}>
                        <h1> First Open Overlay </h1>
                    </Overlay>
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/150" alt=""/>
                        <h2>Housing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi</p>
                    </div>
                </div>
            </div>
        </SectionTemplate>
    )
}

export default PrioritiesSection