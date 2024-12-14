import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Job = ({ title, tags, applyLink ,salary}) => {
  const navigate = useNavigate()
  const data = {
    title,
    tags,
    applyLink,
    salary
  }
  return (
    <div className="shadow-md rounded-xl p-5 job">
      <h1 className="mb-3 lg:text-xl text-base text-gray-800 font-semibold">{title} ₹{salary.max} - ₹{salary.min}</h1>

      <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-5">
        {tags.map((tag, index) => {
          return (
            <div
              className="px-2 py-1 flex items-center gap-1 rounded-lg md:text-sm tag shadow-lg text-blue-500 bg-[#E0F6F6]"
              key={index}
            >
              <FaInfoCircle color="#2BB792"/>

              {tag}
            </div>
          );
        })}
      </div>
      <button
        
       onClick={()=>navigate("/job-details",{state:data})}
        className="bg-blue-500 text-sm text-white py-1.5 px-4 rounded-lg"
      >
        Apply Now
      </button>
    </div>
  );
};

export default Job;
