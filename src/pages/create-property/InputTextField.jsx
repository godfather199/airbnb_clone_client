function InputTextField({ icon, field, register, error }) {
  return (
    <div className=" flex flex-col gap-2 mb-5">
      <div className="border-2 border-gray-200 p-3 flex items-center gap-10 rounded-lg shadow-lg">
        {icon}
        <input
          type="text"
          className=" outline-none text-md font-semibold text-gray-400 w-full"
          {...register(`${field.toLowerCase()}`)}
          placeholder={field}
        />
      </div>
      <span className="text-md font-semibold text-red-400">{error}</span>
    </div>
  );
}

export default InputTextField;
