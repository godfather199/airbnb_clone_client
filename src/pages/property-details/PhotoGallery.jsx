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
    <div  className="flex  gap-3 p-3">
      <div className="">
        <img
          src={propertyPhotos?.[0]?.url}
          alt=""
          className="w-[15rem] h-[13rem] sm:w-[30rem] sm:h-[23rem] rounded-[0.4rem] object-cover"
        />
      </div>
      <div className=" flex flex-col gap-3">
        {photos?.map((item) => (
          <img
            key={item?.url}
            src={item?.url}
            alt=""
            className="w-[13rem] h-[6.1rem] sm:w-[20rem] sm:h-[11.1rem] object-cover rounded-[0.4rem]"
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery