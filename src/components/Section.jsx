import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import SectionElement from "./SectionElement";

function Section({ name }) {
  const [isTableVisible, setIsTableVisible] = useState(true);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="w-[80%]">
      <div className="h-10 p-10 text-2xl bg-gray-200 flex items-center justify-between text-center">
        <h1>{name}</h1>
        <button onClick={toggleTable}>
          {isTableVisible ? <TfiAngleUp /> : <TfiAngleDown />}
        </button>
      </div>

      {isTableVisible && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Type of Content
                </th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
                <th className="border border-gray-300 px-4 py-2">Views</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <SectionElement />
              <SectionElement />
              <SectionElement />
              <SectionElement />
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Section;
