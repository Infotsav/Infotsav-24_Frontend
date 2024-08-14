import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mosacibg from "../../assets/mosiacbg.png";

const events =  
[
    {
        "id": 1,
        "name": "Hackathlon",
        "category": "Technical",
        "about": "A flagship hackathon challenging coders to solve real-life problems by developing innovative websites, apps, or desktop solutions.",
        "fee": 0,
        "date": "2024-10-18",
        "img":"https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg",
        "contact": [
            {
                "name": "John Doe",
                "phone": "9876543210",
                "email": ""
            },
            {
                "name": "Jane Doe",
                "phone": "9876543210",
                "email": ""
            }
        ],
        "description": {
            "overview": "Hackathlon is one of our flagship hackathon events, attracting widespread enthusiasm and huge participation in previous years. This hackathon provides a platform for coders, software programmers, and developers to build and design something unconventional. Participants will be tasked with solving nerve-wracking problem statements and developing a website, Android app, or desktop app within a limited time period, based on real-life problems.",
            "rules": {
                "regionals": {
                    "overview": "Preliminary round where teams submit a project summary.",
                    "entry_rules": [
                        "No registration fees will be charged.",
                        "Teams must submit a one-page project summary adhering to submission guidelines.",
                        "The project must be submitted within the given time period on the specified platform.",
                        "The summary must include problem-solving steps and the solution's benefits to the community.",
                        "Graphics may be included if necessary, but they must be of reasonable, readable size and reflect original work.",
                        "The front page should include team name, members' names, college name, phone number, email address, and registered ID on the Infotsav website.",
                        "The judges' decision is final and binding."
                    ]
                },
                "onsite": {
                    "overview": "Final 36-hour round held at ABV-IIITM for selected teams.",
                    "entry_rules": [
                        "A nominal fee will be charged per team for the Onsite round.",
                        "A maximum of seven teams will be selected from every region for the finals.",
                        "Participants must bring their own laptops, phones, and tablets.",
                        "Internet and infrastructure support will be provided, but the organizers will not be liable for any network failures.",
                        "Any kind of plagiarism will result in immediate disqualification.",
                        "By participating, participants agree that the Hackathlon organizers will not be liable for any disputes or damages related to the hackathon, its attendees, intellectual property, or related projects."
                    ]
                }
            }
        }
    },
    {
        "id": 7,
        "name": "Mega Robo War",
        "category": "Robotics",
        "about": "A battle where powerful robots face off in an arena, aiming to overpower their opponent within a fixed time duration.",
        "fee": 0,
        "date": "2024-10-20",
        "img": "https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg",
        "contact": [
            {
                "name": "John Smith",
                "phone": "9876543212",
                "email": "john.smith@example.com"
            },
            {
                "name": "Alice Johnson",
                "phone": "9876543213",
                "email": "alice.johnson@example.com"
            }
        ],
        "description": {
            "overview": "The Mega Robo War is the ultimate battle where two powerful robots face off in a high-stakes arena fight. The goal is to overpower the opponent by pushing them out of the arena or dropping them into a pit within a fixed time duration.",
            "rules": {
                "megawars": {
                    "bot_dimensions_and_fabrication": [
                        "The initial dimension of the robot should not exceed 65cm x 65cm x 45cm. Once the match starts, there is no limitation on robot dimensions.",
                        "No machine component should intentionally detach during the battle.",
                        "The robot's weight should not exceed 55 kg.",
                        "In the case of a wireless robot, the weight will be counted as 0.8 times the actual weight.",
                        "Readymade gearboxes, parts, chassis, control circuits, and remote controls can be used."
                    ],
                    "battery_and_power": [
                        "The machine must be powered electrically only; the use of IC engines in any form is not allowed.",
                        "Batteries must be sealed, immobilized-electrolyte types (such as gel cells, lithium, NiCad, NiMH, or dry cells).",
                        "The electrical voltage at any point in the machine should not exceed 40 V DC/AC.",
                        "230V AC power will be provided for wired bots.",
                        "In the case of wireless robots, batteries should be placed on the robot.",
                        "Wired robots can use external batteries.",
                        "Battery terminals must be protected from short circuits to avoid fires. Failure to do so will result in disqualification."
                    ],
                    "robot_control": [
                        "Wired bots must have a minimum wire length of 10 meters. Wires should remain slack at any instant during the fight.",
                        "All wires should be stacked as a single unit.",
                        "Wires should project 1000 mm above the ground to avoid entanglement.",
                        "Wireless systems should have a minimum of four frequency remote control circuits or two dual control circuits to avoid frequency interference with the opposing team.",
                        "Interference in wireless systems will not be considered for rematches or results.",
                        "Readymade remote controls are allowed."
                    ],
                    "pneumatics_and_hydraulics": [
                        "Pneumatic and hydraulic weapon systems can be used, but external pressure/liquid cylinders are not allowed. Cylinders must be placed on the robots.",
                        "The outlet pressure of the source/tank should not exceed 8 bars.",
                        "Pressurized, non-flammable gases/liquids can be used to initialize pneumatic mechanisms.",
                        "A temporary pressure gauge or a provision to measure cylinder pressure on the robot should be available.",
                        "Pneumatic components must be securely mounted, especially the pressure vessel to ensure safety."
                    ],
                    "weapon_systems": [
                        "Robots can use any kind of cutters, flippers, saws, hammers, lifting devices, etc., except for:",
                        "Liquid projectiles",
                        "Acid-based weapons",
                        "EMP generators",
                        "Flammable liquids or flame-producing weapons",
                        "Explosives, water",
                        "Nets, glue, or any entanglement devices",
                        "High power magnets or electromagnets"
                    ],
                    "general_rules": [
                        "Teams can have a maximum of 4 participants.",
                        "Bots in the form of clusters are allowed, but the total weight should not exceed the weight limit.",
                        "Setup time is 60 seconds. Teams not reporting to the weight and measurement counter before setup time starts will forfeit the round.",
                        "The bot will be inspected for safety before the event begins and may be discarded if found unsafe for participants or spectators.",
                        "The bot cannot be split into two sub-units. Two distinct parts connected by a flexible cable will be considered separate units.",
                        "Damaging the arena will lead to immediate disqualification.",
                        "Lego kits, readymade kits, car bases, and development boards are not permitted. Readymade gearboxes are allowed.",
                        "Teams that are not ready when called for battle will be considered to have declared a walkover and will receive no points.",
                        "The organizers have the right to change any or all of the rules. Changes will be highlighted on the website or Social media pages.",
                        "Violation of any rules will result in immediate disqualification.",
                        "The judges' decision will be final and binding."
                    ]
                }
            }
        }
    },
    {
        "id": 12,
        "name": "Pinnacle",
        "category": "Managerial",
        "about": "Pinnacle is a premier event where teams present their innovative business ideas to a panel of judges. The event is split into two phases: an online submission of an executive summary and an on-campus presentation of the final business plans.",
        "fee": {
            "phase_1": 0,
            "phase_2": "{fees}"
        },
        "date": "2024-10-23",
        "img": "https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg",
        "contact": [
            {
                "name": "Event Coordinator",
                "phone": "1234567890",
                "email": "{custom mail}"
            }
        ],
        "description": {
            "overview": "If you have a unique idea that sets you on the path to becoming a successful entrepreneur, then Pinnacle is the event for you. As one of the most prestigious events of Infotsav, Pinnacle provides a platform for innovative ideas, offering the spark needed to ignite entrepreneurial success. This flagship event of Infotsav'19 attracts students from the best B-schools and engineering colleges across the country.",
            "eligibility": [
                "Open to teams from any recognized B-school or engineering college.",
                "Teams can consist of students from different colleges.",
                "All participants must present valid ID cards.",
                "There is no limit on the number of teams per college."
            ],
            "team_specifications": [
                "Teams may consist of 1 to 3 members.",
                "Cross-institute/organization teams are allowed.",
                "Each team must have a designated presenter."
            ],
            "submission_details": [
                "Phase 1 submissions must be in .PDF format, with a maximum of 5 pages (excluding the cover page).",
                "Executive Summary should be sent to {custom mail} with the subject 'PINNACLE, Infotsav'24 ([Team name]).'",
                "Entries submitted after the deadline will not be considered."
            ],
            "presentation_rules": [
                "Shortlisted teams will present their final business plans on campus.",
                "Each team will have 10 minutes (8 minutes for presentation and 2 minutes for binding).",
                "Teams must use Microsoft PowerPoint for presentations.",
                "A registration fee of {fees} per team is required for Phase 2.",
                "Any act of plagiarism will result in disqualification.",
                "The decisions of the judges and organizers are final and binding."
            ],
            "event_structure": {
                "mode": "Offline",
                "phase_1": "Online submission of Executive Summary.",
                "phase_2": "On-campus presentation of Final Business Plans."
            }
        }
    }
]

function EventCarousel() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index:any) => {
        setCurrentSlide(index);
    };

    return (
        <div className="z-40 h-full flex justify-center items-center my-[100px] font-pixelhugger flex-col">
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
                        Discover our flagship events that showcase talent, creativity, and innovation across various domains.
                    </p>
                </div>

                <button
                    className="bg-white w-[200px] text-black px-5 py-2 rounded-3xl z-30 border-4 border-black font-semibold"
                    style={{
                        boxShadow: '1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910',
                        whiteSpace: 'nowrap',
                    }}
                    onClick={() => { navigate("/events") }}
                >
                    Explore More
                </button>
            </div>

            <div className="mt-10 z-30 w-[80%] bg-white p-5 text-center md:p-10 md:text-left rounded-2xl">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
                    <img
                        className="w-[80%] md:w-[50%] rounded-xl"
                        src={events[currentSlide].img || 'https://via.placeholder.com/400'} // Fallback to a placeholder image if img is empty
                        alt={events[currentSlide].name}
                    />
                    <div>
                        <div className="text-black z-30">
                            <h2 className="text-4xl font-bold mb-6">
                                {events[currentSlide].name}
                            </h2>
                            <p className="font-semibold">
                                {events[currentSlide].about}
                            </p>
                        </div>
                        <div className="dots flex justify-center items-center mt-6">
                            {events.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-black' : 'bg-slate-500'}`}
                                    onClick={() => goToSlide(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCarousel;
