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
    <div className="">
      {/* Display current pic */}
      {photo && displayPhoto === '' && (
        <img
          src={photo?.url}
          alt=""
          className="h-[10rem] w-[10rem] object-cover rounded-full"
        />
      )}

      {/* Upload new pic */}
      <div className="">
        {displayPhoto ? (
          <div style={{ border: "3px solid red" }} className="flex">
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
              <UploadFileIcon />
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