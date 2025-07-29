import { memo, useState } from "react";
import logo from '../../assets/logo.png';
import { FaAnglesDown,  FaAnglesUp} from "react-icons/fa6";




function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <span onClick={() => setIsOpen(false)} 
            className={`${isOpen? 'h-dvh bg-black/40 w-full fixed top-0 left-0 z-40 cursor-pointer' : 'hidden'} lg:hidden`}/>
    
            <header className="absolute top-0 left-0 w-full z-50 h-20 flex items-center justify-center lg:justify-between p-2 md:h-22 lg:h-24 font-impact gap-4 uppercase text-lg">
                <nav className="hidden lg:flex w-full items-center justify-end">
                    <ul className="flex gap-4 justify-between flex-row-reverse">
                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#">Início</a>
                        </li>

                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#prices">Preços</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#testimonials">Depoimentos</a>
                        </li>
                    </ul>
                </nav>

                <div className="h-full relative aspect-square">
                    <img src={logo} alt="logo" className="w-full h-full object-contain aspect-square">
                    </img>

                    <button onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden w-full bg-black/20 h-full aspect-square absolute top-0 left-0 rounded-full flex items-end justify-center text-3xl text-white cursor-pointer">
                        {isOpen ? <FaAnglesUp/> : <FaAnglesDown/>}
                    </button>
                </div>

                <nav className="hidden lg:flex w-full items-center justify-start">
                    <ul className="flex gap-3 justify-between">
                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#about">Sobre</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#portfolio">Portfólio</a>
                        </li>

                        <li>
                            <a className="cursor-pointer hover:text-secundary duration-200 transition-colors" 
                            href="#wherearewe">Onde Estamos</a>
                        </li>
                    </ul>
                </nav>
                
                <div className={`lg:hidden absolute top-20 md:top-24 left-1/2 -translate-x-1/2 w-full p-4 max-w-xl ${isOpen ? 'opacity-100 translate-y-0' : '-translate-y-[600px] opacity-0'} duration-600 transition-all`} >
                    <nav className=" bg-secundary w-full rounded-md shadow-lg p-4 text-black font-imprint uppercase">
                        <ul className="min-w-full flex flex-col gap-2 ">
                            <li className="min-w-full flex text-center">
                                <a href="#"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Início
                                </a>
                            </li>
                            <li className="min-w-full flex text-center">
                                <a href="#about"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Sobre
                                </a>
                            </li>
                            <li className="min-w-full flex text-center">
                                <a href="#prices"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Preços
                                </a>
                            </li>
                            <li className="min-w-full flex text-center">
                                <a href="#portfolio"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Portfólio
                                </a>
                            </li>
                            <li className="min-w-full flex text-center">
                                <a href="#testimonials"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Depoimentos
                                </a>
                            </li>
                            <li className="min-w-full flex text-center">
                                <a href="wherearewe"
                                className="min-w-full p-2 rounded-md hover:bg-secundary-ligth duration-200 transition-colors cursor-pointer">
                                    Onde Estamos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )

}


export default memo(Header);