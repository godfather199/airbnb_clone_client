import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function HostDetails({details}) {
  // console.log('Owner: ', details)

  return (
    <div className="">
      <h1 className=" text-2xl font-semibold text-gray-700 mb-4">
        Meet your Host
      </h1>
      <div
        // style={{ border: "3px solid red" }}
        className=" flex flex-col gap-10 bg-red-50 items-center justify-center   p-7 rounded-[0.8rem] shadow-lg"
      >
        {/* Host card */}
        <div
          // style={{ border: "3px solid purple" }}
          className="  bg-white flex items-center justify-center mr-[4rem]  w-[19rem] h-[7.8rem] rounded-[0.4rem] shadow-lg"
        >
          <div
            // style={{ border: "3px solid purple" }}
            className="w-full flex items-center justify-around"
          >
            {/* Host image */}
            <div className="">
              {details?.user_Avatar?.url ? (
                <>
                  <img
                    src={details?.user_Avatar?.url}
                    alt=""
                    className="w-[5rem] h-[5rem] object-cover rounded-full"
                  />
                </>
              ) : (
                <AccountCircleIcon style={{ fontSize: "4rem" }} />
              )}
            </div>

            {/* Host name & email */}
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-gray-600">
                {details?.name}
              </span>
              <span className="text-sm font-medium text-gray-400">
                {details?.email}
              </span>
              {/* <span className="text-md font-medium text-gray-800 mt-5">
                Host
              </span> */}
            </div>
          </div>
        </div>

        {/* Host Details */}
        <div
          // style={{ border: "5px solid orange" }}
          className="w-[23rem]  flex flex-col  gap-5 "
        >
          <div className="flex flex-col  gap-5 text-md font-medium text-gray-400">
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className=" block h-[2rem] w-[2rem]"
                // style= {{display: block; height: 24px; width: 24px; fill: currentcolor;}}
              >
                <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path>
              </svg>
              <span className="ml-[1rem]">Born in the 90s</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className=" block h-[2rem] w-[2rem]"
                // style="display: block; height: 24px; width: 24px; fill: currentcolor;"
              >
                <path d="M26 2a5 5 0 0 1 5 4.78V21a5 5 0 0 1-4.78 5h-6.06L16 31.08 11.84 26H6a5 5 0 0 1-4.98-4.56L1 21.22 1 21V7a5 5 0 0 1 4.78-5H26zm0 2H6a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H12.8l3.2 3.92L19.2 24H26a3 3 0 0 0 3-2.82V7a3 3 0 0 0-2.82-3H26zM16 6a8.02 8.02 0 0 1 8 8.03A8 8 0 0 1 16.23 22h-.25A8 8 0 0 1 8 14.24v-.25A8 8 0 0 1 16 6zm1.68 9h-3.37c.11 1.45.43 2.76.79 3.68l.09.22.13.3c.23.45.45.74.62.8H16c.33 0 .85-.94 1.23-2.34l.11-.44c.16-.67.29-1.42.34-2.22zm4.24 0h-2.23c-.1 1.6-.42 3.12-.92 4.32a6 6 0 0 0 3.1-4.07l.05-.25zm-9.61 0h-2.23a6 6 0 0 0 3.14 4.32c-.5-1.2-.82-2.71-.91-4.32zm.92-6.32-.13.07A6 6 0 0 0 10.08 13h2.23c.1-1.61.42-3.12.91-4.32zM16 8h-.05c-.27.08-.64.7-.97 1.65l-.13.4a13.99 13.99 0 0 0-.54 2.95h3.37c-.19-2.66-1.1-4.85-1.63-5H16zm2.78.69.02.05c.48 1.19.8 2.68.9 4.26h2.21A6.02 6.02 0 0 0 19 8.8l-.22-.12z"></path>
              </svg>
              <span className="ml-[1rem]">Speaks English and Hindi</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className=" block h-[2rem] w-[2rem]"
                // style="display: block; height: 24px; width: 24px; fill: currentcolor;"
              >
                <path d="m5.7 1.3 3 3-.66.72a12 12 0 0 0 16.95 16.94l.72-.67 3 3-1.42 1.42-1.67-1.68A13.94 13.94 0 0 1 18 26.96V29h3v2h-8v-2h3v-2.04a13.95 13.95 0 0 1-8.92-4.08 14 14 0 0 1-1.11-18.5L4.29 2.71zm18.18 4.44.21.21.21.22a10 10 0 1 1-.64-.63zm-9.34 11.13-2.45 2.45a8 8 0 0 0 8.04 1.05 16.7 16.7 0 0 1-5.59-3.5zm4.91-4.91-3.5 3.5c2.85 2.54 6.08 3.82 6.7 3.2.63-.61-.66-3.85-3.2-6.7zm-9.81-2.1-.08.19a8 8 0 0 0 1.12 7.86l2.45-2.45a16.68 16.68 0 0 1-3.5-5.6zM23.32 8.1l-2.45 2.44a16.73 16.73 0 0 1 3.5 5.6 8 8 0 0 0-1.05-8.05zm-11.98-.76c-.62.62.66 3.86 3.2 6.7l3.5-3.5c-2.85-2.54-6.07-3.82-6.7-3.2zm2.54-1.7c1.75.59 3.75 1.83 5.58 3.49l2.44-2.45a8.03 8.03 0 0 0-8.02-1.04z"></path>
              </svg>
              <span className="ml-[1rem]">Lives in Delhi, India</span>
            </div>
          </div>

          {/* About */}
          <div
            // style={{ border: "3px solid blue" }} 
            className=" text-lg font-serif text-gray-400 h-[10rem] tracking-tighter p-1 "
          >
            <span className="">
              {`Hello Explorer, I am ${details?.name}. Food, travel and music are
              the 3 best words to describe me. I am always excited to host
              people, and share stories and experiences. Feel free to reach out
              to me for any queries and I will reply to you at the earliest.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostDetails