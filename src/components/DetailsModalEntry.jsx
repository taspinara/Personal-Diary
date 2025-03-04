import React, { useEffect, useState } from "react";

//Solution I: I don't understand this solution
//const Modal = ({ show, onCloseButtonClick }) => {
//    if (!show) {
//        return null;
//    }
//
//    return (
//        <div className="modal-wrapper">
//            <div className="modal">
//                <div className="body">
//                    Textbody
//                </div>
//                <div className="footer">
//                    <button onClick={onCloseButtonClick}>Close</button>
//                </div>
//            </div>
//        </div>
//    );
//}


function DetailsModalEntry({isOpen}) {
    

    return (
        <div>
            <h1>Entry Details</h1>
        {isOpen &&(
            <div className="w-[50%] h-[50%]">
            <p>ACTUAL CONTENT</p>
            </div>
        )}
        </div>
    )
}



//const DetailsModalEntry = ({ isOpen, onClose, children }) => {
//
//    
//
//    if (!isOpen) return null;
//
//
//    return (
//        //semi-transparent covering for actual website
//        <div className="modal-overlay"> 
//        //the actual content, i.e. text and images
//            <div className="modal-content"> 
//                <button className="close-button" onClick={onClose}>
//                    &times;
//                </button> //button to close modal
//                {children} //used to render dynamic content
//            </div>
//
//        </div>
//    );
//};

export default DetailsModalEntry;

//export const DetailsModalEntry = () => {
//
//    entries.addEventListener("click", () => {
//        const modal = document.createElement("div");
//        modal.className =
//            "fixed top-0 left-0 w-full h-full bg-red flex justify-center items-center";
//        const modalContent = document.createElement("div");
//        modalContent.className =
//            "w-[45rem] h-[30rem] bg-blue rounded-md shadow-md flex justify-center items-center p-2 relative";
//        //bg-(image:<custom-property>) - gonna make it parchment!
//        const modalClose = document.createElement("button");
//        modalClose.className =
//            "w-[1.5rem] h-[1.5rem] text-[.8rem] absolute top-3 right-6 cursor-pointer";
//        modalClose.textContent = "Close";
//        modalClose.addEventListener("click", () => {
//            modal.remove();
//        });
//
//        modalContent.appendChild(modalClose);
//
//        modal.appendChild(modalContent);
//
//        entryContainer.appendChild(modal);
//    });
//
//}