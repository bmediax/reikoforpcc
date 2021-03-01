import React from 'react';
import './PopupModule.scss';

const PopupModule = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className="popup-modal_wrapper">
            {props.children}
        </div>
    );
};

export default PopupModule;