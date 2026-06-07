import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [dropdownMenu, setDropdownMenu] = useState<Boolean>(false);
    const [bgClass, setBgClass] = useState<Boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const scrollThreshold = 55;
            if (scrollY >= scrollThreshold) {
                setBgClass(true);
            } else {
                setBgClass(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        console.log("Clicked on Menu bar");
        setDropdownMenu(!dropdownMenu);
    };

    return (
        <>
            <div className={bgClass ? `bg-[#1e1e1e30] w-full flex fixed flex-col z-10 py-3 px-6 h-20 backdrop-blur-md sm:px-12 sm:py-0 ` : `w-full flex fixed flex-col z-10 py-3 px-6 h-20 backdrop-blur-md sm:px-12 sm:py-0`}>
                <div className="flex justify-between items-center ">
                    <div className=" font-bold mx-6 font-Alumni text-white text-4xl border-b-4 border-sky-800 ">
                        Lalo
                    </div>
                    <ul className="hidden sm:flex ">
                        <a className="p-6 text-lg font-Roboto text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#home">Home</a>
                        <a className="p-6 text-lg font-Roboto text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#skill">Skills</a>
                        <a className="p-6 text-lg font-Roboto text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#project">Projects</a>
                        <a className="p-6 text-lg font-Roboto text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#contact">Contact</a>
                    </ul>
                    <div
                        onClick={handleClick}
                        className=" px-5 mb-2 flex text-4xl text-center  text-white sm:hidden hover:text-sky-500 hover:duration-300">{!dropdownMenu ? <div className="text-5xl">&#8801;</div>
                            : <div>&#10006;</div>}</div>
                </div>
            </div>
            <div
                className={
                    dropdownMenu
                        ? "z-10 w-56 fixed top-20 right-16 bg-[#1e1e1e30] backdrop-blur-lg shadow-2xl sm:hidden "
                        : "hidden"
                }
            >
                <ul className="mx-10 flex items-center flex-col rounded-md ">
                    <a onClick={handleClick} className="p-3 text-lg text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#home">Home</a>
                    <a onClick={handleClick} className="p-3 text-lg text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#skill">Skills</a>
                    <a onClick={handleClick} className="p-3 text-lg text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#project">Projects</a>
                    <a onClick={handleClick} className="p-3 text-lg text-white hover:text-sky-600 hover:transition-all hover:duration-300 hover:ease-in-out" href="#contact">Contact</a>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
