import Navbar from "./Navbar";
import Dropdown from "./Dropdown"
export default function CodeConvertor() {
    return (
        <>
            <Navbar />
            <div className="p-24 flex flex-row">
                <div className="left basis-1/2 pr-20">
                    <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-black">
                        Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <Dropdown options={['COBOL', 'Delphi', 'VB']} />
                </div>

                <div className="right basis-1/2 pl-20">
                    <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-black">
                        Your message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <Dropdown options={['Python', 'C', 'Java']} />
                </div>

            </div>
        </>
    );
};