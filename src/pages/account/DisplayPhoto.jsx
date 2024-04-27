import CloseIcon from '@mui/icons-material/Close';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import UploadFileIcon from '@mui/icons-material/UploadFile';

          
function DisplayPhoto({
  displayPhoto,
  setDisplayPhoto,
  photo,
  handle_Image_Upload,
}) {
  // console.log('Photo: ', photo)
  // console.log('Display photo: ', displayPhoto)
  return (
    <div
      // style={{ border: "3px solid purple" }}
      className=" border-2 border-gray-400 w-[30rem] bg-gray-100 p-6 flex items-center justify-around rounded-[15px] shadow-lg"
    >
      {/* Display current pic */}
      {photo && displayPhoto === "" && (
        <img
          src={photo}
          alt=""
          className="h-[10rem] w-[10rem] object-cover rounded-full"
        />
      )}

      {/* Upload new pic */}
      <div className="">
        {displayPhoto ? (
          <div  className="flex">
            <img
              src={displayPhoto}
              alt=""
              className="h-[10rem] w-[10rem] object-cover rounded-full"
            />
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => setDisplayPhoto("")}
            />
          </div>
        ) : (
          <div className="">
            <label className="cursor-pointer">
              <UploadFileIcon style= {{fontSize: '4rem'}} />
              <input
                type="file"
                accept="images/*"
                className="hidden"
                onChange={handle_Image_Upload}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayPhoto