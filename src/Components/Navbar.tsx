import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hamburger from "../assets/hamburger-icon.png";
import ArrowIcon from "../assets/arrow-icon.png";

function Navbar() {
    const navigate = useNavigate();
    const [menuClick, setMenuClick] = useState(false);

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center absolute top-0 left-0 pt-[30px]">
            <div
                className="bg-[#FFFFFF] h-[60px] z-30 w-[80vw] rounded-3xl border-4 border-black flex justify-between items-center px-20px"
                style={{
                    boxShadow: '1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 3px 3px 0px #ff4910, 4px 4px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910'
                }}
            >
                <div
                    onClick={() => navigate('/')}
                    className="mx-2 flex justify-center items-center gap-3"
                >
                    <img src="/logo.png" alt="hell" className="h-[35px]" />
                    <h1 className="mr-[20px] font-pixelify font-black text-xl">
                        Infostav
                    </h1>
                </div>

                <div>
                    <button onClick={() => setMenuClick(!menuClick)}>
                        <img src={Hamburger} alt="" className="h-[25px] pt-1" />
                    </button>
                </div>

                <div>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-black mx-3 px-4 py-1 text-white font-pixelify rounded-3xl"
                    >
                        Register
                    </button>
                </div>
            </div>

            {/* pop-down menu */}
            <div
                className={`bg-[#FFFFFF] h-[300px] z-30 w-[80vw] rounded-3xl border-4 border-black flex flex-col justify-between items-center px-20px font-pixelify-semibold text-xl font-semibold transition-all duration-300 ease-in-out ${menuClick ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                style={{
                    padding: "20px",
                    boxShadow: '1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 3px 3px 0px #ff4910, 4px 4px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910'
                }}
            >
                <div className="w-full px-5">
                    <button
                        onClick={() => navigate('/about')}
                        className='rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center'
                    >
                        About
                        <img src={ArrowIcon} alt="" className="h-6" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate('/events')}
                        className='rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center'
                    >
                        Events
                        <img src={ArrowIcon} alt="" className="h-6" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate('/sponsors')}
                        className='rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center'
                    >
                        Our Sponsors
                        <img src={ArrowIcon} alt="" className="h-6" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate('/contact')}
                        className='rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center'
                    >
                        Contact Us
                        <img src={ArrowIcon} alt="" className="h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;