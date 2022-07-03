import React from "react";
import "../App.css";
import ModalImage from "react-modal-image";

import sign1 from "../assets/Bathroom.png";
import sign2 from "../assets/Friend.png";
import sign3 from "../assets/Hello.png";
import sign4 from "../assets/No.png";
import sign5 from "../assets/Ok.png";
import sign6 from "../assets/Please.png";
import sign7 from "../assets/Thank You.png";
import sign8 from "../assets/Yes.png";
import sign9 from "../assets/Taijutsu.png";

const Images = () => {
  return (
    <div className="overflow-y-hidden bottom-5 left-0 xScroll overflow-x-scroll">
        <div className=" flex signContainer">

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign1} large={sign1} alt="Bathroom-Sign"/>
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign2} large={sign2} alt="Friend-Sign"/>
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign3} large={sign3} alt="Hello-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign4} large={sign4} alt="No-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign5} large={sign5} alt="Ok-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign6} large={sign6} alt="Please-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign7} large={sign7} alt="Thank You-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign8} large={sign8} alt="Yes-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <ModalImage small={sign9} large={sign9} alt="Special-Sign" />
                {/* This sign was originated from Naruto-(Hidden Leaf Secret Tai-Jutsu 1000 YEARS OF DEATH)
                First used by Kakashi The Copy Ninja Against Naruto
                It's just for fun */}
            </div>
        </div>
    </div>
  );
};

export default Images;