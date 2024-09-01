import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
// import AboutTab from "./AboutTab";
// import VenueTab from "./VenueTab";
// import TimeTab from "./TimeTab";
// import ContactTab from "./ContactTab";
// import Button from "./Button";
//import Butt from "./EventCardButton";
// import EventSlider from "./EventSlider";

// Import event descriptions
import TechnicalEvents from '../../constants/EventData/TechnicalEvents.json';
import ManagerialEvents from '../../constants/EventData/ManagerialEvents.json';
import RoboticsEvents from '../../constants/EventData/RoboticsEvents.json';
import OnlineEvents from '../../constants/EventData/OtherEvents.json';

const eventsData: { [key: string]: any } = {
  Technical: TechnicalEvents,
  Managerial: ManagerialEvents,
  Robotics: RoboticsEvents,
  Online: OnlineEvents,
};

const MakingEventCard: React.FC = () => {
//   const [reg, setReg] = useState(false);
  
//   const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//   ];

  const { category, id } = useParams<{ category: string; id: string }>();
//   const [activeTab, setActiveTab] = useState("about");
  const [eventDetails, setEventDetails] = useState<any>(null);

  useEffect(() => {
    if (category && id) {
      const eventData = eventsData[category]?.find((event: any) => event.id === parseInt(id, 10));
      setEventDetails(eventData);
    }
  }, [category, id]);

//   const renderContent = () => {
//     if (!eventDetails) {
//       return <div>Loading...</div>;
//     }

//     switch (activeTab) {
//       case "about":
//         return <AboutTab about={eventDetails.about} />;
//       case "venue":
//         return <VenueTab venue={eventDetails.venue} />;
//       case "time":
//         return <TimeTab time={eventDetails.time} />;
//       case "contact":
//         return <ContactTab contacts={eventDetails.contact} />;
//       default:
//         return <AboutTab about={eventDetails.about} />;
//     }
//   };

//   const tabs = [
//     { id: "about", label: "ABOUT" },
//     { id: "venue", label: "VENUE" },
//     { id: "time", label: "TIME" },
//     { id: "contact", label: "CONTACT" },
//   ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 bg-none">
      <div className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap max-[768px]:justify-center mt-10 sm:mt-40"> {/* Adjusted margin-top for mobile */}
        <div className="relative overflow-hidden aspect-square w-full max-w-[25rem]">
            <img
                className="absolute inset-0 object-cover w-full h-full rounded-3xl border-4 border-white border-opacity-30"
                src={eventDetails?.img || "/Card-Robo.png"} 
                alt="event"
            />
        </div>

        <div className="w-3/5 lg:w-90 md:w-90 max-[768px]:w-[90%] self-start px-10">
          <div className="font-retrog text-center md:text-left lg:text-3xl md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center">
            {eventDetails?.name || "Event Name"} 
          </div>

          <div className="font-ticketing xl:text-xl sm:text-md max-[640px]:text-md">
            {eventDetails?.description ? (
              <div dangerouslySetInnerHTML={{ __html: eventDetails.about }}></div>
            ) : null}
          </div>

          <br />
          <div className="flex w-full justify-between md:justify-start items-center">
            <div className="w-fit text-2">
              <a
                className="font-bold text-xl underline text-yellow-400 pr-5"
                href={eventDetails?.description?.overview || "#"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Rule Book
              </a>
            </div>

            <span className="font-bold text-xl hidden md:flex underline text-yellow-400">
              |
            </span>

            <div className="text-2 pl-5">
              <a
                className="font-bold flex text-xl underline text-yellow-400"
                href={eventDetails?.docs || "https://codebeautify.org/random-link-generator"}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <span className="underline pr-2">Docs</span>
              </a>
            </div>
          </div>
        </div>

        <div className="xl:w-1/5 lg:w-90 md:w-100 max-[768px]:w-[100%] flex flex-col items-center gap-2 justify-center m-2.5">
          <div className="max-[768px]:flex max-[768px]:justify-between max-[768px]:w-[95%]">
            <div className="flex items-center">
              <div className="text-2xl font-retrog">
               Prizes Worth: {eventDetails?.prize ? (eventDetails.prize.toString().substring(0, 2) + "K") : "No Price"}
              </div>
            </div>

            <div className="flex max-[400px]:text-[11px] flex-col justify-center items-center">
              <div className="date font-retrog w-fit text-wrap">
                {eventDetails?.date}
              </div>
            </div>
          </div>
          
          <Link to={eventDetails?.url} className="relative w-[150px] h-18 text-base p-[1px] bg-gradient-to-r from-[#e0e0e0] from-[0%] to-[#FFFFFF] 
                 hover:from-[#131313] hover:from-[61%] hover:to-[#5856D6] 
                 shadow-[0px_4px_4px_1px_rgba(168,167,248,0.51)] 
                 rounded-[30px] urbanist-unique font-extralight text-center 
                 text-black hover:text-white sm:text-lg sm:p-1 sm:w-48
                  md:w-[220px] md:h-15 md:text-xl md:p-2">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default MakingEventCard;
