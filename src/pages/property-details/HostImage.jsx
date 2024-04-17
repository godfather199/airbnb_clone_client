import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function HostImage({hostName, hostImage}) {
  return (
    <div className="flex gap-3 items-center">
      {/* Image */}
      <div className="">
        {hostImage ? (
          <img
            src={hostImage}
            alt=""
            className="w-[3rem] h-[3rem] rounded-full object-cover"
          />
        ) : (
          <AccountCircleIcon style={{fontSize: '3rem'}} />
        )}
      </div>

      {/* Name */}
      <div className="">
        <span className="text-xl font-semibold text-gray-800">{hostName}</span>
      </div>
    </div>
  );
}

export default HostImage