import React from 'react';
import { ReactComponent as IconClose } from './icon-close.svg';

import './modal.scss'



function Modal ( {isOpen, onClose, children}) {

    

    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal__wrapper")) onClose();
    };

    return (
        <>
        {isOpen && (
            <div className="modal">
               <div className="modal__wrapper" onClick={onWrapperClick}>
                <div className="modal__content">
                    <button className="modal__close-button" onClick={() => onClose()}>
                        <IconClose></IconClose>
                    </button>
                    {children}
                </div>
               </div>
            </div>
             )}
        </>
    );
}

export default Modal;