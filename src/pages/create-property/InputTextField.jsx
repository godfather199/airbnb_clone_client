function InputTextField({ icon, field, register, error }) {
  return (
    <div className="">
      {icon}
      <input
        type="text"
        className=""
        {...register(`${field.toLowerCase()}`)}
        placeholder={field}
      />
      <span className="">{error}</span>
    </div>
  );
}

export default InputTextField;
