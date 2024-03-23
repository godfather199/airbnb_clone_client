import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function HostImage({hostName, hostImage}) {
  return (
    <div className="flex gap-5 items-center">
      {/* Image */}
      <div className="">
        {hostImage ? (
          <img
            src={hostImage}
            alt=""
            className="w-[2rem] h-[2rem] rounded-full object-cover"
          />
        ) : (
          <AccountCircleIcon style={{fontSize: '3rem'}} />
        )}
      </div>

      {/* Name */}
      <div className="">
        <span className="">{hostName}</span>
      </div>
    </div>
  );
}

export default HostImage