import { useEffect, useState } from "react"


function PhotoGallery({propertyPhotos}) {
  const [photos, setPhotos] = useState([])


  // Parsing photos
  useEffect(() => {
    // const removeFirst = propertyPhotos?.slice(1)
    setPhotos(propertyPhotos?.slice(1))
  }, [propertyPhotos])

  // console.log('Photos: ', photos)

  return (
    <div style={{ border: "3px solid purple" }} className="flex  gap-3">
      <div className="">
        <img
          src={propertyPhotos?.[0]?.url}
          alt=""
          className="w-[30rem] h-[23rem]"
        />
      </div>
      <div className=" flex flex-col gap-3">
        {photos?.map((item) => (
          <img
            key={item?.url}
            src={item?.url}
            alt=""
            className="w-[20rem] h-[11.1rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery