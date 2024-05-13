"use client"
import React from 'react'

function Service() {
return (
    <>
        <div>
            <div className='h-8 bg-white'></div>
            <div className='text-black text-4xl px-4' style={{backgroundColor:" #D9D9D9"}}>SERVICES WE OFFER:</div>
            <div className='h-8 bg-white'></div>
        </div>
        <div className='flex gap-4 justify-center' style={{backgroundColor:" #3E5C76"}}>
            <div ><a href='/'><img className='rounded-xl m-3 h-96 ' style={{width: "620px"}}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqASSR0mo2KUerq-tbMZ-Ev34KxzcZrvd7LW3DHXbwTg&s'/></a>
            <h1 className='text-center text-black text-xl'>MENTAL HEALTH HUB:</h1>
            <p className='uppercase text-center text-black font-bold' style={{width: "620px"}}>Our Mental Health Hub is a supportive space designed to empower you on your journey towards emotional well-being and inner balance.</p></div>
            <div ><a href='/'><img className='rounded-xl m-3 h-96' style={{width: "620px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqASSR0mo2KUerq-tbMZ-Ev34KxzcZrvd7LW3DHXbwTg&s'/></a><h1 className='text-center text-black text-xl'>DISCOVER PHYSICAL FITNESS:</h1>
            <p className='uppercase text-center text-black font-bold' style={{width: "620px"}}>Tailor your fitness journey with personalized workout plans designed to meet your goals, whether you're aiming to build strength, improve flexibility, or boost endurance.</p></div>
        </div>
        <div className='flex gap-4 justify-center' style={{backgroundColor:" #3E5C76"}}>
            <div ><a href='/'><img className='rounded-xl m-3 h-96 ' style={{width: "620px"}}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqASSR0mo2KUerq-tbMZ-Ev34KxzcZrvd7LW3DHXbwTg&s'/></a><h1 className='text-center text-black text-xl'>MEDICAL SUPPORT AND SUPPLEMENTS:</h1>
            <p className='uppercase text-center text-black font-bold' style={{width: "620px"}}>Revive Well is your trusted platform for accessing expert medical support and personalized supplement recommendations to enhance your well-being.</p></div>
            <div ><a href='/'><img className='rounded-xl m-3 h-96' style={{width: "620px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqASSR0mo2KUerq-tbMZ-Ev34KxzcZrvd7LW3DHXbwTg&s'/></a>
            <h1 className='text-center text-black text-xl'>EXPLORE HEALTHY EATING:</h1>
            <p className='uppercase text-center text-black font-bold' style={{width: "620px"}}>Unlock the power of personalized nutrition plans tailored to your dietary preferences and health goals. Whether you're looking to lose weight, boost energy, or improve overall wellness, we've got you covered.</p></div>
        </div>
    </>
)
}

export default Service
