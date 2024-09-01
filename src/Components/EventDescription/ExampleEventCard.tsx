import React from "react";
import Butt from "./EventCardButton.tsx"; // Assuming Button.tsx is in the same directory
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { v4 as uuidv4 } from "uuid";
// import { toast } from "react-hot-toast";

interface EventCardProps {
    data: {
        name: string;
        image?: string;
        description: string;
        readmore: string;
        whatsapp: string;
        prize: number;
        date: string;
        venue: string;
        participationStatus: string;
        role: string;
        status: string;
        teamId: string;
        teamSize: number;
        teamSizeMax: number;
        teamSizeMIN: number;
    };
    status?: string;
    handleTeamSubmit?: (teamData: {
        teamId: string;
        teamSizeMIN: number;
        teamSizeMax: number;
    }) => void;
}

const EventCard: React.FC<EventCardProps> = (props) => {
    // const [reg, setReg] = useState(false);

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    console.log("This are the props here", props);

    const Location = () => {
        window.open(props.data?.venue, "_blank");
    };

    // const handleCreateTeamSubmit = async (e: React.MouseEvent) => {
    //     e.preventDefault();
    //     try {
    //         if (props.data?.unstop !== "") {
    //             openlink();
    //             return;
    //         }
    //         const newTeamId = uuidv4();
    //         const teamName = newTeamId.substring(0, 5) + "ofdjo-ftybd";
    //         const res = await createTeam({
    //             teamname: teamName,
    //             teamId: newTeamId,
    //             eventName: props.data._id,
    //         });
    //         if (res.error) {
    //             toast.error(res.error);
    //         } else {
    //             toast.success(res.message);
    //             setReg(true);
    //         }
    //     } catch (error) {
    //         toast.error("some error occurred");
    //     }
    // };

    return (
        <div className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap max-[768px]:justify-center">
            <img
                className="bg-no-repeat shrink-0 xl:w-[25rem] lg:w-80 md:w-60 sm:w-[25rem] w-[100%] md:mr-3 rounded-3xl"
                src={props.data.image || "/Card-Robo.png"}
                alt="event"
                width={50}
                height={50}
            />

            <div className="w-3/5 lg:w-90 md:w-90 max-[768px]:w-[90%] self-start">
                <div className="font-retrog text-center md:text-left lg:text-3xl md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center">
                    {props.data?.name}
                </div>

                {props.data.teamSize ? (
                    <div className="font-bold xl:text-lg sm:text-sm max-[640px]:text-base flex space-x-1">
                        <p>
                            Members:{" "}
                            {`(${props.data.teamSize}/${props.data.teamSizeMax})`}
                        </p>
                        <img
                            src={
                                props.data.teamSize >= props.data.teamSizeMIN
                                    ? "/green.png"
                                    : "/red.png"
                            }
                            alt="Team Size"
                            className="cursor-pointer w-5"
                        />
                    </div>
                ) : null}

                <div className=" font-ticketing xl:text-xl sm:text-md max-[640px]:text-md">
                    {props.data ? (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.data.description,
                            }}></div>
                    ) : null}
                </div>

                <div className="font-retrog text-center md:text-left lg:text-3xl md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center">
                    {props.data?.name}
                </div>
                {/* <h3 className="text-[#6C91FF] font-bold text-3xl mb-1">
                    Contacts:
                </h3>
                {contacts.map((contact, index) => {
                    return (
                        <div key={index} className="mt-4">
                            <h4 className="text-[#6C91FF] font-semibold text-xl">
                                {contact.name}
                            </h4>
                            <p>{contact.number}</p>
                            <p>{contact.email}</p>
                        </div>
                    );
                })} */}

                <br />
                <div className="flex w-full justify-between md:justify-start items-center">
                    <div className="w-fit text-2">
                        <a
                            className="font-bold text-xl underline text-yellow-400 pr-5"
                            href={props.data.readmore}
                            target="_blank"
                            referrerPolicy="no-referrer">
                            Rule Book
                        </a>
                    </div>

                    <span className="font-bold text-xl hidden md:flex text-yellow-400">
                        |
                    </span>

                    <div className="text-2 pl-5">
                        <a
                            className="font-bold flex text-xl underline text-yellow-400"
                            href={props.data.whatsapp}
                            target="_blank"
                            referrerPolicy="no-referrer">
                            <span className="underline pr-2">Whatsapp</span>
                            <img
                                src={"/whatsapp.png"}
                                width={28}
                                height={25}
                                alt="WhatsApp"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="xl:w-1/5 lg:w-90 md:w-100 max-[768px]:w-[100%] flex flex-col items-center gap-2 justify-center m-2.5">
                <div className="max-[768px]:flex max-[768px]:justify-between max-[768px]:w-[95%]">
                    <div className="flex items-center">
                        <img
                            className="bg-no-repeat shrink-0 max-[768px]:h-12 h-20"
                            src="./Trophy.png"
                            alt="Trophy"
                        />
                        <div className="text-2xl font-retrog">
                            {props.data?.prize.toString().substring(0, 2) + "K"}
                        </div>
                    </div>

                    <div className="flex max-[400px]:text-[11px] flex-col justify-center items-center">
                        <div className="date font-retrog w-fit text-wrap">
                            {props.data?.date.substring(0, 10).split("-")[2] +
                                " "}
                            {months[
                                +props.data?.date
                                    .substring(0, 10)
                                    .split("-")[1] - 1
                            ] + " "}
                            {props.data?.date.substring(0, 10).split("-")[0]}
                        </div>
                        <div className="venue font-retrog">
                            {props.data?.venue || "DTU"}
                        </div>
                    </div>
                </div>
                <Butt title="Location" action={Location} />

                {/* {props.data.status === "closed" ? (
          <Butt title="Closed" />
        ) : reg ? (
          <Butt title="Submitted" />
        ) : ( */}
                {/* <Butt title="Register" action={handleCreateTeamSubmit} /> */}
                <Butt title="Register" />
                {/* )} */}
            </div>
        </div>
    );
};

export default EventCard;
