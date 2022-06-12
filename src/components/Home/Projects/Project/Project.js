import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import './Project.css';


const Project = (props) => {
    const { name, description, tech, img, livesite, clientsite, serversite } = props.project;
    console.log(img);
    return (
        <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
            <div className="d-flex">
                <img className="img-r img-fluid" src={img} alt="" />
            </div>


            <div>
                <Fade top>
                    <h3 className="ps-3 mt-2 fw-bold"> {name}</h3>
                </Fade>
            </div>

            <Fade bottom>
                <p className="my-3 ">
                    {" "}
                    <span className="fw-bold">Project Details: </span>{" "}
                    <span className="review-text">{description}</span>{" "}
                </p>
            </Fade>

            <p className="fw-bold mb-2">Technoligies: {tech}</p>
            <br />
            <Zoom>
                <span>  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    rel="noreferrer"
                    target="_blank"
                    href={livesite}
                >
                    Live Site
                </a></span> <span> | </span>
                <span>  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    rel="noreferrer"
                    target="_blank"
                    href={clientsite}
                >
                    Client Site
                </a></span><span> | </span>
                <span>  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    rel="noreferrer"
                    target="_blank"
                    href={serversite}
                >
                    Server Site
                </a></span>
            </Zoom>
            <div>
             <button className="btn btn-danger my-3 fw-bold " >See Details</button>      
            </div>
         
        </div>
    );
};

export default Project;