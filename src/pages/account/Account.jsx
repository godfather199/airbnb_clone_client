import {DisplayPhoto ,TextEditField, HeadingContent} from '../'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { thunk_Update_User_Info } from '../../store/thunks/userThunk';


const schema = yup.object().shape({
  name: yup.string().required("**Please enter a name"),
  email: yup
    .string()
    .required("**Enter email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "**Invalid email format"
    ),
});


const field_Array = [
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Email',
    value: 'email'
  }
]



function Account() {
  const dispatch = useDispatch()

  const { current_User } = useSelector((state) => state.user);
  

  const [editPassword, setEditPassword] = useState('')
  const [displayPhoto, setDisplayPhoto] = useState('')
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: current_User?.name,
      email: current_User?.email
    }
  });


  const handle_Edit_Changes = ({ name, email }) => {
    if (
      name === current_User?.name &&
      email === current_User?.email &&
      editPassword.length === 0 &&
      displayPhoto === ""
    ) {
      return toast.error("No new info added", {
        duration: 2000,
        position: "bottom-center",
      });
    }

    const update_User = {
      ...(name !== current_User?.name && {name}),
      ...(email !== current_User?.email && {email}),
      ...(editPassword.length > 0 && { password: editPassword }),
      ...(displayPhoto !== '' && { user_Avatar: displayPhoto }),
    };    

    dispatch(thunk_Update_User_Info(update_User))
    // console.log('Update user: ', update_User)

    setEditPassword('')
    setDisplayPhoto('')
  };


  const handle_Image_Upload = (e) => {
    const reader = new FileReader()

    setDisplayPhoto('')

    reader.onload = () => {
      if(reader.readyState === 2) {
        setDisplayPhoto(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
  }


  return (
    <div
      style={{ border: "3px solid purple" }}
      className="w-[60rem] h-[48rem] flex  justify-center mb-10"
    >
      <div
        // style={{ border: "3px solid green" }}
        className="h-[30rem] flex flex-col gap-7 mt-[1rem]"
      >
        {/* Heading & welcome message */}
        <HeadingContent name={current_User?.name} />

        {/* Edit info form  */}
        <form
          className="flex flex-col gap-10"
          onSubmit={handleSubmit(handle_Edit_Changes)}
        >
          <TextEditField
            field_Value={field_Array[0]}
            register={register}
            errors={errors.name?.message}
          />

          <TextEditField
            field_Value={field_Array[1]}
            register={register}
            errors={errors.email?.message}
          />

          <TextEditField
            label="Update Password"
            preFilledValue={editPassword}
            editValue={setEditPassword}
          />

          <DisplayPhoto
            displayPhoto={displayPhoto}
            setDisplayPhoto={setDisplayPhoto}
            photo={current_User?.user_Avatar?.url}
            handle_Image_Upload={handle_Image_Upload}
          />

          {/* Save button */}
          <button type="submit" className="">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account