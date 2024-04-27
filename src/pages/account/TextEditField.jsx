import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset_User_State } from '../../store/slices/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function TextEditField({
  label,
  preFilledValue,
  editValue,
  field_Value,
  register,
  errors,
}) {
  const dispatch = useDispatch()

  const {is_Success} = useSelector(state => state.user)


  const [editField, setEditField] = useState(false);
  const [showPassword, setShowPassword] = useState(false)


  // Toggle edit button
  useEffect(() => {
    if(is_Success) {
      setEditField(false)
    }

    return () => dispatch(reset_User_State())

  }, [is_Success])


  return (
    <div className=" flex flex-col ">
      <div
        // style={{ border: "3px solid red" }}
        className=" border-2 border-gray-300 w-[30rem] grid grid-cols-3 items-center rounded-md shadow-lg p-3"
        // className=" border-2 border-gray-400 w-[30rem] flex items-center justify-around rounded-sm shadow-lg p-2"
      >
          {/* Text label */}
          <span className="text-lg font-mono text-red-500">{label ? label : field_Value.label}</span>

          {/* Pre-filled input field */}
          {label === "Update Password" ? (
            <input
              type={`${showPassword ? "text" : "password"}`}
              className={` text-sm font-semibold text-gray-500 ${
                editField
                  ? "outline-none border-2 border-gray-500 p-3 rounded-lg bg-gray-100"
                  : "cursor-not-allowed  pointer-events-none appearance-none"
              }`}
              value={preFilledValue}
              onChange={(e) => editValue(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className={` text-sm font-semibold text-gray-500 ${
                editField
                  ? "outline-none border-2 border-gray-500 p-3 rounded-lg bg-gray-100"
                  : "cursor-not-allowed  pointer-events-none appearance-none"
              }`}
              readOnly={!editField}
              {...register(`${field_Value.value}`)}
            />
          )}

        <div className="ml-[4rem]">
          {/* Edit button */}
          <IconButton onClick={() => setEditField(!editField)} color="primary">
            <EditIcon />
          </IconButton>

          {/* Password visibility button */}
          {label === "Update Password" &&
            (showPassword ? (
              <VisibilityOffIcon
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <VisibilityIcon
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(true)}
              />
            ))}
        </div>
      </div>

      {/* Error handling */}
      {label !== "Update Password" && <div className="">{errors}</div>}
    </div>
  );
}

export default TextEditField