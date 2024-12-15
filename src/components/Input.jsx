


const Input = ({type,label,placeholder,id,name,icon}) => {
  return (
    <div className="my-4">
      <label htmlFor="firstName" className="text-gray-600 font-semibold inline-block mb-2 text-sm">{label}</label>
      <div className="form-group flex items-center gap-1 p-3">
        <span className="text-[#281BCB]  text-xl">
          {icon}
        </span>
        <input
          type={type}
          id={id}
          name={name}
          className="bg-transparent w-full outline-none"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export default Input;
