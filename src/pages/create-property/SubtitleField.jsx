import { useFieldArray, useForm } from "react-hook-form";



function SubtitleField({ register, errors, control }) {
  const { fields, append, remove } = useFieldArray({
    name: "subtitle",
    control,
  });



  return (
    <div style={{ border: "3px solid red" }} className="">
      <label className="">Subtitles</label>
      {fields.map((field, idx) => (
        <li key={field.id} className="">
          <input
            {...register(`subtitle.${idx}`)}
            placeholder="Enter a skill"
            type="text"
            className=""
          />
          <button type="button" className="" onClick={() => remove(idx)}>
            Remove subtitle
          </button>
        </li>
      ))}

      <button type="button" onClick={() => append()} className="">
        Add subtitle
      </button>
    </div>
  );
}

export default SubtitleField;
