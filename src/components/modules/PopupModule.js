import React from 'react';
import './PopupModule.scss';

const PopupModule = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div id={props.ide} className="popup-modal_wrapper">
            {props.children}
        </div>
    );
};

export default PopupModule;