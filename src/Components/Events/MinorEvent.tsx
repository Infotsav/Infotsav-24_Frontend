export default function MinorEvent() {
  return (
    <>
      <div className="mx-auto w-9/12 mt-8">
        <div className=" h-px p-px      bg-gray-500 border-0  "></div>
        <div className=" ">
          <p className="inline-flex text-4xl my-3">Sub Category</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
            <EventBox />
            <EventBox />
            <EventBox />
          </div>
        </div>
      </div>
    </>
  );
}

export function EventBox() {
  return (
    <>
      {" "}
      <div className="overflow-hidden aspect-square  relative hover:transition-all group   rounded-lg max-h-auto    border border-slate-500 mx-auto  bg-[url('../src/assets/EventsPage/minorEvent.png')] bg-cover bg-center  grayscale  backdrop-filter   ">
        <div className="h-full lg:p-6 p-2 group-hover:backdrop-blur-sm transition-all duration-500 ease-in-out">
          <div className="h-full flex flex-col justify-between group-hover:h-1/3 transition-all duration-500 ease-in-out  ">
            <div className=" text-slate-50 hover:transition-all transition-all duration-500 ease-in-out z-10   group-hover:lg:text-2xl lg:text-3xl md:text-3xl group-hover:md:text-2xl  text-3xl group-hover:text-2xl ">
              Prizes worth 60k
            </div>
            <div className=" hover:transition-all  group-hover:lg:text-2xl lg:text-3xl md:text-4xl group-hover:md:text-3xl  text-3xl group-hover:text-2xl transition-all duration-500 ease-in-out ">
              Event Name
            </div>
          </div>
          <div className=" h-2/3   py-2  ">
            <p className=" line-clamp-5  py-4 text-xs     ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, reprehenderit, aliquid pariatur aut repellat
              perspiciatis consequuntur laboriosam cum aspernatur ipsum error
              vitae neque harum, similique illo perferendis ut excepturi a!
              perspiciatis consequuntur laboriosam cum aspernatur ipsum error
            </p>

            <div className="h-1/3  flex flex-col justify-end   mb-2">
              <p className="w-full h-px my-2  bg-pink-500 border-0  "></p>
              <button
                type="button"
                className=" w-fit bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-2 ring-1 ring-slate-50"
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
