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
      >
        <option value="">Select a category</option>
        {category_Options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="">{errors}</span>
    </div>
  );
}

export default SelectField;
