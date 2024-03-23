import { Skeleton } from "@mui/material";

function SkeletonProperty() {
  return (
    <div
    //   style={{ border: "3px solid purple" }}
      className=" flex flex-col border w-full my-4 rounded bg-white"
    >
        <Skeleton animation="wave" variant="rectangular" sx={{ height: 400 }} />
      <div
        // style={{ border: "3px solid green" }}
        className="flex items-center gap-2 p-2"
      >
        <div className="flex flex-col gap-1 w-full">
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height="10"
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="25%"
            height="10"
          />
        </div>
      </div>
      
    </div>
  );
}

export default SkeletonProperty;
