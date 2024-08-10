import { useState } from "react";
import MinorEvent from "./MinorEvent";
export default function Tabs() {
  const [selectedOption, setSelectedOption] = useState("Category1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div>
        <div className="sm:hidden ">
          <select
            onChange={handleChange}
            id="tabs"
            className="  w-8/12 mx-auto bg-zinc-800 border border-gray-300 text-slate-100  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  text-md "
          >
            <option className="w-3/4" value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            <option value="Category3">Category3</option>
            <option value="Category4">Category4</option>
          </select>
        </div>
        <ul className="w-8/12 mx-auto hidden text-md bg-zinc-800 font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 ">
          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Category1")}
              className="inline-block w-full p-4   border-r border-gray-200 dark:border-gray-700 rounded-s-lg  hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 active:bg-zinc-950 dark:hover:text-white focus:outline-none "
              aria-current="page"
            >
              Category1
            </a>
          </li>
          <li className="w-full focus-within:z-10 ">
            <a
              onClick={() => setSelectedOption("Category2")}
              className="inline-block w-full p-4  border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white  "
            >
              Category2
            </a>
          </li>
          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Category3")}
              className="inline-block w-full p-4  border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white "
            >
              Category3
            </a>
          </li>
          <li className="w-full focus-within:z-10">
            <a
              onClick={() => setSelectedOption("Category4")}
              className="inline-block w-full p-4  border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-zinc-900 bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white  "
            >
              Category4
            </a>
          </li>
        </ul>
        <div className="mt-4">
          {selectedOption === "Category1" && (
            // <div className="grid grid-cols-3 gap-4">
            //   {/* Category1 grid content */}
            //   <div className="bg-gray-200 p-4">Category1 Item 1</div>
            //   <div className="bg-gray-200 p-4">Category1 Item 2</div>
            //   <div className="bg-gray-200 p-4">Category1 Item 3</div>
            // </div>
            <div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
            </div>
          )}
          {selectedOption === "Category2" && (
            <div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
            </div>
          )}
          {selectedOption === "Category3" && (
            <div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
            </div>
          )}
          {selectedOption === "Category4" && (
            <div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
              <div>
                <MinorEvent />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
