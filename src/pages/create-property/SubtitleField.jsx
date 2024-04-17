import { useFieldArray, useForm } from "react-hook-form";



function SubtitleField({ register, errors, control }) {
  const { fields, append, remove } = useFieldArray({
    name: "subtitle",
    control,
  });



  return (
    <div  className=" border border-gray-100 p-5 mb-8 rounded-sm shadow-lg">
      {/* <label className="text-xl font-semibold text-red-600">Subtitles</label> */}
      {fields.map((field, idx) => (
        <li
          // style={{ border: "3px solid green" }}
          key={field.id}
          className=" w-[70%] list-none my-6 flex items-center justify-between"
        >
          <input
            {...register(`subtitle.${idx}`)}
            placeholder="Enter Subtitle"
            type="text"
            className="border-b-2 border-gray-300 outline-none text-md font-medium text-gray-500"
          />
          <button
            type="button"
            className="bg-blue-600 text-white font-semibold text-sm tracking-tighter w-[7.5rem] h-[2.7rem] rounded-[0.3rem] "
            onClick={() => remove(idx)}
          >
            Remove Subtitle
          </button>
        </li>
      ))}

      <button
        type="button"
        onClick={() => append()}
        className="bg-red-600 text-white font-semibold text-md tracking-tighter p-3 rounded-[0.5rem]"
      >
        Add Subtitle
      </button>
    </div>
  );
}

export default SubtitleField;



