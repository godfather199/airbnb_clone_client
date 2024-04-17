


function TextField({register, field, errors}) {
  return (
    <div
      className={`border ${
        errors ? "border-2 border-red-600" : "border-gray-400"
      }  w-[28rem] p-4 rounded-lg flex flex-col`}
    >
      <input
        autoFocus
        type= {field === 'Password' ? "password" : "text"}
        {...register(`${field.toLowerCase()}`)}
        className=" outline-none text-md text-gray-400 font-medium"
        placeholder= {field}
      />
      <span className="text-sm font-semibold text-red-600 mx-3">
        {errors}
      </span>
    </div>
  );
}

export default TextField;