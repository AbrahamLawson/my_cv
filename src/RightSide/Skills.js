import React from 'react'
import { GrReactjs } from "react-icons/gr";
import {
    SiJavascript, 
    SiLaravel, 
    SiMongodb, 
    SiPostgresql, 
    SiTypescript, 
    SiBootstrap, 
    SiHtml5, 
    SiAdobephotoshop,
    SiGithub,
    SiAzuredevops,
} from "react-icons/si";
import {DiNodejs} from "react-icons/di"
const Skills = ({ id, }) => {
    
    return (
        <div id={id} className="col-12 min-vh-100">
            <h1 className="text-center title p-2 bg-white rounded shadow">Skills</h1>

            <hr />
            
            <h6 className="font-weight-bold text-white col-auto rounded"> &#9658; Front-end:</h6>

            <div className="col-12 mx-0 row my-3 bg-secondary rounded">
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <GrReactjs size="4rem"  style={{ fill: 'cyan' }} className="rounded shadow p-2 bg-dark border"/>
                </div>
                
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiJavascript size="4rem" style={{ fill: 'yellow' }} className="rounded shadow p-2 bg-dark border"/>
                </div>

                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiHtml5 size="4rem" style={{ fill: 'white' }} className="rounded shadow p-2 bg-orange border"/>
                </div>

                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiTypescript size="4rem" style={{ fill: 'darkslategray' }} className="rounded shadow p-2 bg-white border"/>
                </div>

                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiBootstrap size="4rem" style={{ fill: 'darkviolet' }} className="rounded shadow p-2 bg-white border"/>
                </div>
            </div>

            <h6 className="font-weight-bold text-dark col-auto rounded"> &#9658; Back-end:</h6>

            <div className="col-12 row mx-0 my-3 bg-secondary rounded">
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiLaravel size="4rem" color="white" className="rounded shadow p-2 bg-orange border"/>
                </div>
                
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <DiNodejs size="4rem" style={{ fill: 'green' }} className="rounded shadow p-2 bg-white border"/>
                </div>

                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiMongodb size="4rem" style={{ fill: 'green' }} className="rounded shadow p-2 bg-white border"/>
                </div>

                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiPostgresql size="4rem" style={{ fill: 'steelblue' }} className="rounded shadow p-2 bg-dark border"/>
                </div>
            </div>

            <h6 className="font-weight-bold text-info col-auto rounded"> &#9658; Others:</h6>

            <div className="col-12 row mx-0 my-3 bg-secondary rounded">
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiAdobephotoshop size="4rem" style={{ fill: 'steelblue' }} className="rounded shadow p-2 bg-white border"/>
                </div>
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiGithub size="4rem" style={{ fill: 'black' }} className="rounded shadow p-2 bg-white border"/>
                </div>
                <div className="col-auto mx-1 p-0 my-2 d-flex flex-column align-items-center">
                    <SiAzuredevops size="4rem" style={{ fill: 'steelblue' }} className="rounded shadow p-2 bg-white border"/>
                </div>
            </div>

            <h6 className="font-weight-bold text-primary col-auto rounded"> &#9658; Languages:</h6>
            <ul>
                <li>English</li>
                <li>VietNamese</li>
            </ul>  

        </div>
    )
}
export default Skills