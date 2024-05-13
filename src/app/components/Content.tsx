"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from '@react-hook/media-query';
import image from 'public/IMAGE.png';

function Content() {
  const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const deviceType = useMediaQuery('(max-width: 464px)') ? 'mobile' : useMediaQuery('(max-width: 1024px)') ? 'tablet' : 'desktop';

  return (
    <div className='flex '
    style={{backgroundColor:" #3E5C76"}}>
      <div className='mt-6'>
        <h1 className='text-2xl px-4 text-black'>TAILOR YOUR FITNESS JOURNEY</h1>
        <p className="uppercase px-4 mb-4 text-black" style={{width: "600px"}}>with personalized workout plans designed to meet your goals, whether you're aiming to build strength, improve flexibility, or boost endurance.
</p>
 <h1 className='text-2xl px-4 text-black'>AND!</h1>
 <p className="uppercase px-4 mb-4 text-black" style={{width: "600px"}}>Unlock the power of personalized nutrition plans tailored to your dietary preferences and health goals. Whether you're looking to lose weight, boost energy, or improve overall wellness, we've got you covered.
</p>
<a href='/'><button className='rounded-2xl w-28 h-10 font-bold ml-48 bg-white text-black'>Learn More</button></a>
<div className='h-24 w-24'>

</div>
      </div>
      <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className='text-white card m-2'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1VVsrmRqJPA3CbWiT4gDgH5_jYhgPa0wRA&usqp=CAU' alt='image1' style={{height:"200px", width:"600px"}}/><p style={{height:"20px"}}></p>
                    <img src='https://i0.wp.com/picjumbo.com/wp-content/uploads/dark-tech-glowing-background-free-photo.jpg?w=600&quality=80' alt='image1' style={{height:"200px", width:"600px"}}/></div>
                <div className='text-white card m-2'><img src='https://images.ctfassets.net/pdf29us7flmy/7y3AVZuwo8qBOWAObNa1hd/8fa5c6d7f040c468e7ee9eed0faa685a/GettyImages-482872096.jpeg?w=720&q=100&fm=jpg' alt='image2' style={{height:"420px", width:"600px"}}/></div>
                   <div className='text-white card m-2'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-Bz6QS-bSezCgILrZho_qg0MGP_KgcB5y289ECFg_GEcsim7o56Ku3KVKQ44dusESVM&usqp=CAU' alt='image1' style={{height:"200px", width:"600px"}}/> <p style={{height:"20px"}}></p>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0vMU50Ma_P2DSxY78Mqj3iLYRrKnWHtruQ&usqp=CAU' alt='image1' style={{height:"200px", width:"600px"}}/></div>
                <div className='text-white card m-2'><img src='https://st.depositphotos.com/1813545/3145/i/450/depositphotos_31457975-stock-photo-high-tech-digital-holographic-earth.jpg' alt='image3' style={{height:"420px", width:"600px"}}/></div>
                 <div className='text-white card m-2'><img src='https://img.freepik.com/free-photo/global-business-internet-network-connection-iot-internet-things-business-intelligence-concept-busines-global-network-futuristic-technology-background-ai-generative_1258-176762.jpg' alt='image1' style={{height:"200px", width:"600px"}}/><p style={{height:"20px"}}></p>
                    <img src='https://www.syte.ai/wp-content/uploads/2021/10/Glossary-Images-1-24_23-1024x625.jpg' alt='image1' style={{height:"200px", width:"600px"}}/></div>
                     <div className='text-white card m-2'><img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg' alt='image2' style={{height:"420px", width:"600px"}}/></div>
<div className='text-white card m-2'><img src='https://media.gettyimages.com/id/1399150019/photo/abstract-network-and-data-speed.jpg?s=612x612&w=gi&k=20&c=V6MOs0_2sk6uF5MEd3IhTosbgaomfFbsbbVHaVyq85U=' alt='image1' style={{height:"200px", width:"600px"}}/><p style={{height:"20px"}}></p>
                    <img src='https://cdn.ces.tech/ces/media/articles/2022/october/innovation.jpg' alt='image1' style={{height:"200px", width:"600px"}}/></div>
                    <div className='text-white card m-2'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyq_jXOpPcM7SXHtyI8E8sa8HDZX358Sgxw&usqp=CAU' alt='image2' style={{height:"420px", width:"600px"}}/></div>
            </Carousel>
    </div>
  )
}

export default Content
