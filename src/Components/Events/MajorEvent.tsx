import { useNavigate } from "react-router-dom";

export default function MajorEvent() {
  const navigate = useNavigate();


  return (
    <>
      <div className="overflow-hidden relative hover:transition-all group w-9/12 rounded-lg max-h-auto h-[470px]   border border-slate-500 mx-auto  bg-[url('../src/assets/EventsPage/majorEvent.jpeg')] bg-cover bg-center  grayscale  backdrop-filter   ">
        <div className="h-full p-6 group-hover:backdrop-blur-sm transition-all duration-500 ease-in-out">
          <div className="h-full flex flex-col justify-between group-hover:h-1/2 transition-all duration-500 ease-in-out  ">
            <div className=" text-slate-50 hover:transition-all transition-all duration-500 ease-in-out z-10   group-hover:lg:text-5xl lg:text-6xl md:text-4xl group-hover:md:text-3xl  text-3xl group-hover:text-2xl ">
              Prizes worth 1 lakh
            </div>
            <div className=" hover:transition-all  group-hover:lg:text-5xl lg:text-6xl md:text-4xl group-hover:md:text-3xl  text-3xl group-hover:text-2xl transition-all duration-500 ease-in-out ">
              Event Name
            </div>
          </div>
          <div className=" h-1/2   py-2  ">
            <p className=" line-clamp-5  py-4 text-xs lg:text-lg h-1/2  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, reprehenderit, aliquid pariatur aut repellat
              perspiciatis consequuntur laboriosam cum aspernatur ipsum error
              vitae neque harum, similique illo perferendis ut excepturi a!
              perspiciatis consequuntur laboriosam cum aspernatur ipsum error
            </p>

            <div className="h-1/2 flex flex-col justify-end   mb-2">
              <p className="w-full h-px my-2  bg-pink-500 border-0  "></p>
              <button
                type="button"
                className=" w-fit bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-2 ring-1 ring-slate-50"
                onClick={() => navigate("/eventdetails")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
