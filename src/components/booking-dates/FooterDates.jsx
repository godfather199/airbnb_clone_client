import { Button } from "@mui/material";


function FooterDates({
  handle_Date_Change,
  handle_Close_Calendar,
  setDisablePreviousDates,
  setDisableUpcomingDates,
}) {
  const handle_Clear_Dates = () => {
    handle_Date_Change("");
    setDisablePreviousDates(new Date());
    setDisableUpcomingDates()
  };

  return (
    <div className="flex items-center">
      <button
        className=" text-sm text-gray-800 font-semibold underline "
        onClick={handle_Clear_Dates}
        // onClick={() => handle_Date_Change("")}
      >
        Clear dates
      </button>
      <Button
        variant="contained"
        size="small"
        style={{
          backgroundColor: "black",
          opacity: 0.9,
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "13px",
          marginLeft: "2rem",
        }}
        className=""
        onClick={handle_Close_Calendar}
      >
        Close
      </Button>
    </div>
  );
}

export default FooterDates