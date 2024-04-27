import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function ShowHidePassword({ showPassword, setShowPassword }) {
  return (
    <div className="">
      {showPassword ? (
        <VisibilityOffIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <VisibilityIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
}

export default ShowHidePassword;
