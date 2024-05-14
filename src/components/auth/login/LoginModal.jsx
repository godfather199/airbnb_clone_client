import {TextField} from '../../'
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux';
import { thunk_Login } from '../../../store/thunks/userThunk';
import { CircularProgress } from '@mui/material';
import { reset_User_State } from '../../../store/slices/userSlice';
import GoogleOAuth from '../../google-oauth/GoogleOAuth';



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const schema = yup.object().shape({
  email: yup
    .string()
    .required("**Enter email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "**Invalid email format"
    ),
  password: yup.string().required("**Password is required"),
});



export default function LoginModal({
  openLogin,
  handle_Login_Open,
  handle_Login_Close,
  is_Loading,
}) {
  const dispatch = useDispatch()

  // console.log('is_Success: ', is_Success)
  // console.log('is_Loading: ', is_Loading)
  // console.log('current_User: ', current_User)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handle_Login_Submit = (value) => {
     dispatch(thunk_Login(value));
   };


  return (
    <>
      <span className="ml-[0.7rem]" onClick={handle_Login_Open}>
        Login
      </span>

      {/* Login dialog */}
      <Dialog
        // open={true}
        open={openLogin}
        TransitionComponent={Transition}
        keepMounted
        onClose={handle_Login_Close}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          // style={{ border: "3px solid red" }}
          className="w-[27rem] sm:w-[33rem] h-[40rem]"
        >
          {/* Heading */}
          <div
            // style={{ border: "3px solid purple" }}
            className="flex items-center gap-[9.5rem] sm:gap-[13rem] p-3"
          >
            <CloseIcon
              style={{ fontSize: "1.3rem", fontWeight: "bold" }}
              onClick={handle_Login_Close}
            />
            <span className="text-lg text-gray-700 font-bold">Log in</span>
          </div>
          <div className="border border-gray-200 my-3" />

          {/* Login form */}
          <div
            // style={{ border: "3px solid green" }}
            className="w-full flex flex-col items-center"
          >
            <div className="">
              <span className="text-2xl text-gray-800 font-semibold tracking-tight ml-5">
                Welcome to Airbnb
              </span>
            </div>
            <div className="">
              <form
                // style={{ border: "3px solid purple" }}
                className="mt-5 p-4"
                onSubmit={handleSubmit(handle_Login_Submit)}
                autoComplete="off"
              >
                <TextField
                  register={register}
                  field="Email"
                  errors={errors.email?.message}
                />

                <TextField
                  register={register}
                  field="Password"
                  errors={errors.password?.message}
                />

                {/* <div className="">
                  <input type="email" className="" placeholder='Email' />
                </div> */}

                <div className="mt-7">
                  <button
                    type="submit"
                    className={`bg-pink-600 text-white w-[25rem] sm:w-[28rem] p-[0.9rem] font-semibold text-lg tracking-wider rounded-[0.6rem] ${
                      is_Loading ? " cursor-not-allowed" : " cursor-pointer"
                    }`}
                    disabled={is_Loading}
                  >
                    {is_Loading ? (
                      <CircularProgress
                        style={{ color: "white" }}
                        size="1.5rem"
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            // style={{ border: "3px solid red" }}
            className="flex items-center justify-around w-[90%] my-2 ml-5"
          >
            <div className="border border-gray-300  w-[12rem]" />
            <span className="">or</span>
            <div className="border border-gray-300  w-[12rem]" />
          </div>

          {/* Google OAuth */}
          <GoogleOAuth />
        </div>
      </Dialog>
    </>
  );
}