import React from 'react';
import background from '../../../images/bg1.webp';
import './Banner.css';
import me from '../../../images/me4.jpg';
import Typewriter from '../../Shared/Typewriter';


const typeWriter = ["MERN Stack Developer", "Web Developer", "Frontend Developer"];
const Banner = () => {
    // var nav = document.querySelector('nav');
    // window.addEventListener('scroll', function () {
    //     if (window.pageYOffset > 100) {
    //         nav.classList.add('bg-dark', 'shadow');
    //     } else {
    //         nav.classList.remove('bg-dark', 'shadow');
    //     }
    // });
    return (
        <div className="bannerImg py-5 " style={{ backgroundImage: `url(${background})` }}>
            <div className="container my-5">
                <div className=" d-flex justify-content-center align-items-center">
                    <img src={me} alt="" className=" my-img img-fluid " />
                </div>
                <div className="text-center">
                    <h1 className='fw-bold text-danger'>Bibi Khadiza</h1>

                    <div className="typewriter-holder">
                        <p className="fw-bold" >
                            I'm <span className="type-ban-text"><Typewriter data={typeWriter} /></span>
                        </p>
                    </div>
                    <div className="my-5 py-5">
                        <button
                            // href={resume}
                            // color="transparent"
                            // target="_blank"
                            className="btn pink-button fw-bold " ><a href={require("../../../resume/resume_khadiza (9).pdf")} download="myFile">Download file</a><i class="fa-solid fa-download ps-3"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;