import datajson from "../../services/content.json";

import bgone from "../../assets/bg-one.svg";
import yellowMustache from "../../assets/yellowMustache.svg";
import bgtwo from "../../assets/bg-two.svg";
import Douglas from "../../assets/douglas.svg";
import pincel from "../../assets/pincel.svg";

import Header from "../../components/header";
import Button from "../../components/button";

import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt, FaCheckCircle  } from "react-icons/fa";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useEffect, useState } from "react";

function HomePage(){

    const data = (datajson ? datajson : null);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const responsiveBrands = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:(width / 95)
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items:(width / 95)
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items:(width / 60)
        },
    };


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!data) return null;

    return(
        <>  
            <Header />
            <main className="w-full bg-gray-dark">

                {/* start */}
                <section id="" style={{
                    backgroundImage: `url(${bgone})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    backgroundRepeat: "no-repeat"
                }} 
                className="w-full relative">

                    <div className="w-full h-full m-auto max-w-6xl flex items-center justify-center min-h-dvh lg:justify-end p-8">
                        
                        <span className="flex-1 h-full absolute top-0 left-0 w-1/2 hidden lg:block opacity-50" style={{
                            backgroundImage: `url(${bgtwo})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center right",
                            backgroundRepeat: "no-repeat"
                        }}/>

                        <article className="flex flex-col max-w-xs text-center items-center justify-between gap-4 flex-1">
                            <div className="w-full">
                                <img src={yellowMustache} alt="mustache" />
                            </div>
                            <h1 className="text-7xl uppercase font-impact text-secundary-dark">{data["barber-name"]}</h1>
                            <h2 className="text-3xl uppercase font-imprint text-white">{data["start-slogan"]}</h2>
                            <p>{data["start-description"]}</p>
                            <Button text={data["schedule-button"]} />
                        </article>
                    </div>

                </section>

                {/* about*/}
                <section 
                className="w-full h-full relative overflow-hidden bg-img">
                    <div className="w-full bg-secundary py-4 z-50">
                        <Carousel
                        responsive={responsiveBrands}
                        autoPlay={true}
                        autoPlaySpeed={500}
                        infinite={true}
                        arrows={false}
                        >
                        {[...data["carousel-images"], ...data["carousel-images"], ...data["carousel-images"]].map((item, index) => (
                            <div
                            key={index}
                            className="w-full h-full  flex items-center justify-center opacity-80 px-4"
                            >
                            <img src={item} className="w-full h-full object-contain" />
                            </div>
                        ))}
                        </Carousel>
                    </div>

                    <div className="w-full mx-auto max-w-5xl p-8 flex flex-col items-center gap-4 min-h-dvh" id="about">
                        <h2 className="text-center uppercase font-impact text-3xl w-full max-w-xs mb-8 text-white">{data["about-slogan"]}</h2>
                        <h1 className="self-start text-2xl font-bold text-secundary-ligth">{data["about-title"]}</h1>
                        
                        <article className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between">
                            <div className="w-full max-w-xl flex-1">
                                <p dangerouslySetInnerHTML={{ __html:data["about-description"] }}/>
                            </div>

                            <div className="w-full flex-1">
                                <img src={Douglas} alt="Douglas" className="lg:float-end aspect-[3/4]  object-cover rounded-sm"/>
                            </div>
                        </article>
                    </div>
                </section>

                {/* prices */}
                <section id="prices">
                    <div className="w-full max-w-7xl p-8 mx-auto flex flex-col gap-12 md:flex-row md:justify-between">
                        
                        <article>

                            <div className="flex flex-col gap-2 pb-2 border-b-3 border-secundary w-fit bg-blac">
                                <h2 className="text-3xl uppercase font-impact text-white">{data.name}</h2>
                                <h3>{data.profissão}</h3>
                            </div>
                            
                            <div style={{
                                backgroundImage: `url(${pincel})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center right",
                                backgroundRepeat: "no-repeat"
                            }} 
                            className="p-16 w-fit">
                                <span className="text-black text-xl font-impact uppercase"
                                >{data["fair-price"]}</span>
                            </div>
                            
                            <div>
                                <ul className="text-white flex flex-col gap-6">
                                    <li>
                                        <a href={`https://wa.me/${data.whatsapp}`} target="_blank" 
                                        className="flex items-center gap-2 hover:rotate-2 duration-400 transition-transform cursor-pointer">
                                            <FaWhatsapp className="text-4xl text-secundary-ligth"/>
                                            <span>{data.whatsapp}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`tel:${data.phone}`} target="_blank" 
                                        className="flex items-center gap-2 hover:rotate-2 duration-400 transition-transform cursor-pointer">
                                            <FaPhoneAlt  className="text-3xl text-secundary-ligth"/>
                                            <span>{data.phone}</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href={`https://www.instagram.com/${data.instagram}`} target="_blank"
                                        className="flex items-center gap-2 hover:rotate-2 duration-400 transition-transform cursor-pointer">
                                            <FaInstagram  className="text-3xl text-secundary-ligth"/>
                                            <span>@{data.instagram}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </article>


                        <article className="flex flex-col gap-8 md:items-end">
                            <div className="flex flex-col gap-2 pb-2 border-b-3 border-secundary w-fit md:text-end">
                                <h2 className="text-2xl font-impact text-white">{data["haircut-title"]}</h2>
                                <h3>{data["haircut-description"]}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:h-96 md:overflow-y-scroll scroll-container">
                                {data["haircut-list"].length > 0 && data["haircut-list"].map((item, index) => (
                                    <div key={`${item.name}-${index}`}
                                    className="flex items-center gap-4 w-fit md:flex-row-reverse md:w-full md:pr-4">
                                        <FaCheckCircle className="text-secundary-ligth"/>
                                        <div className="flex items-center gap-2">
                                            <p>{item.name}</p>
                                            <span>-</span>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>

                    </div>
                </section>

                {/* cuts */}
                <section className="relative">
                    <div className="absolute inset-0 pointer-events-none hidden lg:block">
                        <div
                        className="w-full h-full"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            maskImage: `radial-gradient(circle 300px at ${position.x}px ${position.y}px, transparent 0%, black 100%)`,
                            WebkitMaskImage: `radial-gradient(circle 300px at ${position.x}px ${position.y}px, transparent 0%, black 100%)`,
                            transition: 'mask-position 0.05s ease'
                        }}
                        />
                    </div>
                    <div className="w-full max-w-7xl p-8 mx-auto flex flex-col gap-12 md:flex-row md:justify-between">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                            {data["haircut-images"].length > 0 && data["haircut-images"].map((item, index) => (
                                <div key={`${item}-${index}`} className="w-full aspect-[3/4]">
                                    <img src={item} alt={item} className="w-full h-full object-cover"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;