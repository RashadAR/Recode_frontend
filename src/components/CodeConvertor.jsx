import Navbar from "./Navbar";
import Dropdown from "./Dropdown"
export default function CodeConvertor() {
    return (
        <>
            <Navbar />
            <div className="p-24 flex flex-row">
                <div className="left basis-1/2 pr-20">
                    <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-black">
                        Legacy code:</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" placeholder="Enter your Legacy code here..."></textarea>
                    <Dropdown label={"Legacy code"} options={['COBOL', 'Delphi', 'VB']} />
                </div>

                <div className="right basis-1/2 pl-20">
                    <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-black">
                        Converted Code:</label>
                    <textarea disabled id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500"></textarea>
                    <Dropdown label={"Code to convert"} options={['Python', 'C', 'Java']} />
                </div>

            </div>
            <div className="flex justify-center items-center">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex
                  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Convert Code
                </button>
            </div>
        </>
    );
};