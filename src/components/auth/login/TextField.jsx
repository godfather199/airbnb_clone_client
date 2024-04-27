import { useState } from 'react';
import {ShowHidePassword} from '../../'


function TextField({register, field, errors}) {
  const [showPassword, setShowPassword] = useState(false);
  console.log('Password: ', showPassword)

  return (
    <div
      className={`border ${
        errors ? "border-2 border-red-600" : "border-gray-400"
      }  w-[28rem] p-4 rounded-lg flex flex-col`}
    >
      <div className="flex items-center justify-between">
        <input
          autoFocus
          type = {`${(!showPassword && field === "Password") ? "password" : "text"}`}
          {...register(`${field.toLowerCase()}`)}
          className=" outline-none text-md text-gray-400 font-medium"
          placeholder={field}
        />
        {field === "Password" && (
          <ShowHidePassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </div>
      <span className="text-sm font-semibold text-red-600 mx-3">{errors}</span>
    </div>
  );
}

export default TextField;