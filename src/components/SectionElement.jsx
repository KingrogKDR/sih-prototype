import { IoMdMenu } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function SectionElement() {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">Content Name 1</td>
      <td className="border border-gray-300 px-4 py-2">Video</td>
      <td className="border border-gray-300 px-4 py-2">10 mins</td>
      <td className="border border-gray-300 px-4 py-2">1.2k</td>
      <td className="border border-gray-300 px-4 py-4 flex justify-between items-center">
        <button className="text-red-500">
          <MdOutlineDeleteOutline />
        </button>
        <button className="text-gray-500">
          <IoMdMenu />
        </button>
      </td>
    </tr>
  );
}
