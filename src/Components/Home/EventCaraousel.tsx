// import React from 'react';
import mosacibg from "../../assets/mosiacbg.png"

function EventCaraousel() {
    return (
        <div
            className="z-40 h-full flex justify-center items-center my-[100px] font-pixelhugger flex-col"
        >
            <div
                style={{
                    zIndex: 999,
                    backgroundImage: `url(${mosacibg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    opacity: 0.8,
                }}
                className="flex flex-wrap md:flex-nowrap justify-between items-center z-30 w-[80%] bg-slate-600 p-10 gap-7 rounded-2xl"
            >
                <div className="text-white z-30">
                    <h2 className="text-4xl font-bold mb-6">Flagship Events</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime sed, ipsa rerum natus officiis dolores commodi distinctio nobis recusandae!
                    </p>
                </div>

                <button
                    className="bg-white w-[200px] text-black px-5 py-2 rounded-3xl z-30 border-4 border-black font-semibold"
                    style={{
                        boxShadow: '1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Explore More
                </button>
            </div>

            <div className="mt-10 z-30  w-[80%] bg-white p-5 text-center md:p-10 md:text-left rounded-2xl">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center  gap-10">
                    <img
                        className="w-[80%] md:w-[50%] rounded-xl"
                        src="https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg"
                        alt="Event"
                    />
                    <div className="text-black z-30">
                        <h2 className="text-4xl font-bold mb-6">Flagship Events</h2>
                        <p className="font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste, officiis laudantium ipsum nulla ut tempore praesentium molestias magni, eos sapiente impedit unde, sequi rem dolor vero perferendis nisi? Sint accusantium asperiores nostrum reiciendis incidunt laboriosam placeat.
                        </p>
                    </div>
                </div>
                <div className="dots flex justify-center items-center mt-6">
                    <div className="dot bg-black w-3 h-3 rounded-full mx-1 cursor-pointer"></div>
                    <div className="dot bg-slate-500 w-3 h-3 rounded-full mx-1 cursor-pointer"></div>
                    <div className="dot bg-slate-500 w-3 h-3 rounded-full mx-1 cursor-pointer"></div>
                    <div className="dot bg-slate-500 w-3 h-3 rounded-full mx-1 cursor-pointer"></div>
                </div>
            </div>
        </div>
    );
}

export default EventCaraousel;
