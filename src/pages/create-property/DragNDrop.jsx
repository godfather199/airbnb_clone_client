import { Button } from '@mui/material';
import React, {useCallback, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';



const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function DragNDrop({selectedImages, setSelectedImages}) {

    const onDrop = useCallback((acceptedFiles) => {
      const selectedFilesArray = Array.from(acceptedFiles);

      const imagesArray = [];

      selectedFilesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          imagesArray.push(reader.result);
          setSelectedImages((previousImages) =>
            previousImages.concat(imagesArray)
          );
        };

        reader.readAsDataURL(file);
      });

    }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({onDrop, accept: {'image/*': []}});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div style={{ border: "3px solid red" }} className="">
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className=" block h-[64px] w-[64px]"
            // style= {{"display": block, "height": 64px, "width": 64px; fill: currentcolor;}}
          >
            <path d="M41.636 8.404l1.017 7.237 17.579 4.71a5 5 0 0 1 3.587 5.914l-.051.21-6.73 25.114A5.002 5.002 0 0 1 53 55.233V56a5 5 0 0 1-4.783 4.995L48 61H16a5 5 0 0 1-4.995-4.783L11 56V44.013l-1.69.239a5 5 0 0 1-5.612-4.042l-.034-.214L.045 14.25a5 5 0 0 1 4.041-5.612l.215-.035 31.688-4.454a5 5 0 0 1 5.647 4.256zm-20.49 39.373l-.14.131L13 55.914V56a3 3 0 0 0 2.824 2.995L16 59h21.42L25.149 47.812a3 3 0 0 0-4.004-.035zm16.501-9.903l-.139.136-9.417 9.778L40.387 59H48a3 3 0 0 0 2.995-2.824L51 56v-9.561l-9.3-8.556a3 3 0 0 0-4.053-.009zM53 34.614V53.19a3.003 3.003 0 0 0 2.054-1.944l.052-.174 2.475-9.235L53 34.614zM48 27H31.991c-.283.031-.571.032-.862 0H16a3 3 0 0 0-2.995 2.824L13 30v23.084l6.592-6.59a5 5 0 0 1 6.722-.318l.182.159.117.105 9.455-9.817a5 5 0 0 1 6.802-.374l.184.162L51 43.721V30a3 3 0 0 0-2.824-2.995L48 27zm-37 5.548l-5.363 7.118.007.052a3 3 0 0 0 3.388 2.553L11 41.994v-9.446zM25.18 15.954l-.05.169-2.38 8.876h5.336a4 4 0 1 1 6.955 0L48 25.001a5 5 0 0 1 4.995 4.783L53 30v.88l5.284 8.331 3.552-13.253a3 3 0 0 0-1.953-3.624l-.169-.05L28.804 14a3 3 0 0 0-3.623 1.953zM21 31a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM36.443 6.11l-.175.019-31.69 4.453a3 3 0 0 0-2.572 3.214l.02.175 3.217 22.894 5.833-7.74a5.002 5.002 0 0 1 4.707-4.12L16 25h4.68l2.519-9.395a5 5 0 0 1 5.913-3.587l.21.051 11.232 3.01-.898-6.397a3 3 0 0 0-3.213-2.573zm-6.811 16.395a2 2 0 0 0 1.64 2.496h.593a2 2 0 1 0-2.233-2.496zM10 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
          </svg>
          <span className=" text-gray-500 font-semibold text-lg">
            Drag your photos here
          </span>
          <span className=" block text-gray-500 font-semibold text-lg">
            Click to upload
          </span>
        </div>
      </div>

      {selectedImages.length > 0 && (
        <button>
          UPLOAD {selectedImages.length} IMAGE
          {selectedImages.length === 1 ? "" : "S"}
        </button>
      )}

      <div className="grid grid-cols-3 gap-4 mt-5">
        {selectedImages &&
          selectedImages.map((image, index) => (
            <div
              style={{ border: "3px solid red" }}
              key={image}
              className="   p-2 mx-2"
            >
              <img
                style={{ border: "3px solid green" }}
                src={image}
                className="w-full h-[15rem] object-cover mb-3 rounded-md"
                alt="upload"
              />
              <Button
                // size="small"
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => deleteHandler(image)}
              >
                Delete
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}