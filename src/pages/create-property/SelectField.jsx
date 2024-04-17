const category_Options = [
  "Rooms",
  "Cabins",
  "Historical Homes",
  "Luxe",
  "Castles",
];

function SelectField({register, errors}) {
  return (
    <div className="">
      <select
        {...register("category")}
        className="outline-none p-4 font-semibold text-lg  bg-red-600 text-white rounded-lg"
      >
        <option value="">Select a category</option>
        {category_Options.map((option) => (
          <option key={option} value={option} className="bg-white text-red-600">
            {option}
          </option>
        ))}
      </select>
      <span className="">{errors}</span>
    </div>
  );
}

export default SelectField;
