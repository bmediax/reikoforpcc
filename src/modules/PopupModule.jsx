import React from 'react';
import './PopupModule.scss';

const PopupModule = (props) => {
    return (
        <>
            <div className="modal-overlay" id="modal-overlay" />
            <div className="modal" id="modal">
                <button className="close-button" id="close-button">Obvious Close Button</button>
                <div className="modal-guts">
                    {props.children}    
                </div>
            </div>
        </>
    );
};

export default PopupModule;