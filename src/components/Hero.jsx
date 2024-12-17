import { useState } from "react";


import Button from "./Buttons.jsx" 
import arrowRight from "../assets/icons/arrow-right.svg"
import bigshoe1 from "../assets/images/big-shoe1.png"
import bigshoe2 from "../assets/images/big-shoe2.png"
import bigshoe3 from "../assets/images/big-shoe3.png"
import ShoeCard from "../Cards/ShoeCard.jsx"
import thumbnailShoe1 from "../assets/images/thumbnail-shoe1.svg"
import thumbnailShoe2 from "../assets/images/thumbnail-shoe2.svg"
import thumbnailShoe3 from "../assets/images/thumbnail-shoe3.svg"
const Hero = () => {
    const statistics = [
        { value: '1k+', label: 'Brands' },
        { value: '500+', label: 'Shops' },
        { value: '250k+', label: 'Customers' },
    ];
    const shoes = [
        {
            thumbnail: thumbnailShoe1,
            bigShoe: bigshoe1,
        },
        {
            thumbnail: thumbnailShoe2,
            bigShoe: bigshoe2,
        },
        {
            thumbnail: thumbnailShoe3,
            bigShoe: bigshoe3,
        },
    ];
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col 
    justify-center bg-off-white min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat
        text-dull-yellow">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px
        max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative
            z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-dull-yellow inline-block mt-3">Sanfoot</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm"> Explore  trendy Sanfoot arrival,
            exquisite comfort, and fashion for your
            active life
        </p>
        <Button label = "Shop now"
        iconURL = {arrowRight}/>

            <div className="flex justify-start items-start flex-wrap
            w-full mt-20 gap-16">
                {statistics.map((stat, index) =>(
                    <div key={index}>
                        <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                ))}
            </div>
        </div>  

        <div className="relative flex-1 flex justify-center items-center
        xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
            <img src={bigshoe1} alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
            />
        </div>

        {/* <div>
            {shoes.map((shoes)=>(
                <div key={shoes.thumbnail}>
                    <ShoeCard
                    
                    imageURL= {shoes}
                    changeBigShoeImage = {()=> {}}
                    bigshoe = ""
                    />
                    
                </div>
            ))}
        </div> */}


    </section>
  )
}

export default Hero
