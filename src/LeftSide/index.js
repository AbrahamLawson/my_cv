import React from "react";
import srcAvatar from '../avatar.jpg'
import ButtonSelect from './Button'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const LeftSide = ({ 
    listArea, 
}) =>  {

    const showButtons = (listArea) => {
        return listArea.map(area => (
            <ButtonSelect 
                key={area.idBtn}
                area={area}
                onClick={() => {
                    window.scrollTo({
                        behavior: "smooth",
                        top: area.offsetTop
                    })
                }}
            />
        ))
    }
    

    return (
        <div className=" d-flex flex-column align-items-center sticky-top">
            <div className="my-2 d-flex flex-column align-items-center border-bottom">
                <img
                alt="Abraham Lawson"
                src={srcAvatar}
                className="img-fluid rounded-circle w-50 border p-1 my-2"
                />
                <p className="font-weight-bold mt-2">Abraham Lawson ✌️ </p>
            </div>
            
            <div>
                { showButtons(listArea) }
            </div>

            <div className="col-9 mt-3 row justify-content-between">
                <a
                    href="https://www.facebook.com/lawson.nguyen98/"
                    target="_bank"
                    className="text-dark"
                >
                    <FaFacebook size={'1.5em'}/>
                </a>
                <a
                    href="https://twitter.com/lawson_nguyen"
                    target="_bank"
                    className="text-dark"

                >
                    <FaTwitter  size={'1.5em'}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/lawson-nguyen-968647177/"
                    target="_bank"
                    className="text-dark"

                >
                    <FaLinkedin size={'1.5em'}/>
                </a>
                <a
                    href="https://github.com/AbrahamLawson"
                    target="_bank"
                    className="text-dark"

                >
                    <FaGithub   size={'1.5em'}/>
                </a>
            </div> 

            <p className="col-12 m-0 mt-3  p-0 text-center font-weight-bold">Email: </p>
            <p className="col-12 mx-0 my-1 p-0 text-center">abraham.lawson.dev@gmail.com</p>
        </div>
    );
}
export default LeftSide