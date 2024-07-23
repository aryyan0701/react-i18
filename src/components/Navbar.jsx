import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex w-full h-20 bg-stone-400 dark:bg-slate-900 text-black dark:text-white justify-between p-3 px-5 items-center">
        <div className="flex space-x-2 items-center">
          <h2 className="text-xl text-black dark:text-white font-semibold">
            Ques-generator
          </h2>
        </div>
        <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            {" "}
            Headliner{" "}
          </label>
          <div className="flex space-x-2 items-center">
            <span className="text-xl font-medium">Language</span>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="w-full rounded-lg border-gray-300 text-gray-700"
          >
            <option value="">Eng</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
          </select>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
