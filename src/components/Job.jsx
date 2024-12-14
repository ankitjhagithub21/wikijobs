import { FaInfoCircle } from "react-icons/fa";


const Job = ({ title, tags, applyLink ,salary}) => {
  return (
    <div className="shadow-md rounded-xl p-5 job">
      <h1 className="mb-3 lg:text-xl text-base text-gray-800 font-semibold">{title} ₹{salary.max} - ₹{salary.min}</h1>

      <div className="flex flex-wrap gap-3 mb-5">
        {tags.map((tag, index) => {
          return (
            <div
              className="px-4 py-1 flex items-center gap-1 rounded-lg md:text-sm text-xs shadow-lg text-blue-500 bg-[#E0F6F6]"
              key={index}
            >
              <FaInfoCircle color="#2BB792"/>

              {tag}
            </div>
          );
        })}
      </div>
      <a
        href={applyLink}
        target="_blank"
        className="bg-blue-500 text-sm text-white py-1.5 px-4 rounded-lg"
      >
        Apply Now
      </a>
    </div>
  );
};

export default Job;
