import { useState } from "react";
import check from "../assets/check.svg";
import notcheck from "../assets/notcheck.svg";

function Video({ source, title, description }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="w-full h-40 bg-[#E4E4E4] rounded-xl flex flex-row gap-3 py-4 px-6 mb-4 transition-all duration-300">
      <button onClick={() => (setIsChecked(!isChecked))}>
        {isChecked ? <img src={check} className="w-10 h-10" /> : <img src={notcheck} className="w-10 h-10" />}
      </button>
      <div className="w-1/4 rounded-xl border-2 border-black">
        <img src={source} alt="Thumbnail" />
      </div>
      <div className="w-3/4 rounded-xl border-2 border-gray-50">
        <p className="text-xl font-bold px-5 py-2">{title}</p>
        <p className="text-lg font-semibold px-5 py-2">{description}</p>
      </div>
    </div>
  );
}

export default Video;
