import React from "react";
import "../App.css";
import sign1 from "../assets/Bathroom.png";
import sign2 from "../assets/Friend.png";
import sign3 from "../assets/Hello.png";
import sign4 from "../assets/No.png";
import sign5 from "../assets/Ok.png";
import sign6 from "../assets/Please.png";
import sign7 from "../assets/Thank You.png";
import sign8 from "../assets/Yes.png";

const Images = () => {
  return (
    <div className="overflow-y-hidden bottom-5 left-0 xScroll overflow-x-scroll">
        <div className=" flex signContainer">

            <div className="flex-shrink-0 p-1 ">
                <img src={sign1} alt="Bathroom-Sign" />
            </div>

            <div className="flex-shrink-0 justify-center items-center p-1">
                <img src={sign2} alt="Friend-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign3} alt="Hello-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign4} alt="No-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign5} alt="Ok-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign6} alt="Please-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign7} alt="Thank You-Sign" />
            </div>

            <div className="flex-shrink-0 p-1">
                <img src={sign8} alt="Yes-Sign" />
            </div>
        </div>
    </div>
  );
};

export default Images;