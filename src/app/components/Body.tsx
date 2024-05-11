"use client"
import React from 'react'

function Body() {
return (
    <div>
        <div className="relative">
                            <div className="w-full h-100 relative">
                                 <img src="https://static.wixstatic.com/media/11062b_1c4e5d8f0ce241bda76c8c3c17fe0576~mv2.jpg/v1/fill/w_2880,h_1448,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_1c4e5d8f0ce241bda76c8c3c17fe0576~mv2.jpg" className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-40"></div>
                            </div>
                    </div>
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center mt-52 text-white">
                                    <div className="font-bold text-3xl mb-2 px-3">WELCOME TO REVIVE WELL,</div>
                                    <div className=" text-base px-4 uppercase mb-5" style={{width: "730px"}}>your go-to destination for holistic wellness. We're dedicated to helping you revitalize your health and well-being through personalized fitness tracking, mental health support, and expert nutrition guidance. Whether you're looking to boost your energy, find inner peace, or eat healthier, Revive Well is here to guide you on your journey.</div>
                                    <div className="font-bold text-3xl mb-2 px-3">AT REVIVE WELL,</div>
                                    <div className=" text-base px-4 uppercase mb-5" style={{width: "730px"}}>we understand that mental health is just as important as physical health. Our Mental Health Hub is a supportive space designed to empower you on your journey towards emotional well-being and inner balance.</div>
                                    <div><a href='/'><button className='rounded-2xl w-28 h-10 font-bold ml-48' style={{backgroundColor:" #1D2D44"}}>Sign Up</button></a></div>
                            </div>
    </div>
)
}

export default Body
