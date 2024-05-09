import {DragNDrop} from '../'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CloseIcon from '@mui/icons-material/Close';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '0.5rem'
  // p: 4,
};

export default function UploadPhotos({selectedImages, setSelectedImages}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);


  return (
    <div className="my-5 relative">
      <Button
        variant="contained"
        size="large"
        color="error"
        onClick={handleOpen}
        startIcon={<AddToPhotosIcon />}
        className="p-5"
      >
        Add Photos
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          // Responsive styling using theme breakpoints
          width: {
            xs: "1rem", // On extra-small screens (mobile), use 90% of the screen width
            sm: "70%", // On small screens (small tablets), use 70% of the screen width
            md: "50%", // On medium screens (tablets), use 50% of the screen width
            lg: "30%", // On large screens (desktops), use 30% of the screen width
            xl: "5rem", // On extra-large screens, revert to fixed 5rem width
          },
          marginLeft: {
            xs: "5%", // Center the modal more dynamically on smaller screens
            sm: "15%",
            md: "25%",
            lg: "35%",
            xl: "5rem", // Use a fixed margin on the largest screens
          },
          marginRight: {
            xs: "5%", // Center the modal more dynamically on smaller screens
            sm: "15%",
            md: "25%",
            lg: "35%",
            xl: "5rem", // Use a fixed margin on the largest screens
          },
          // Common styles for all sizes
          position: "absolute",
          top: "32rem",
          left: "3rem",
          // transform: "translate(-50%, -50%)", // This centers the modal
          // bgcolor: "background.paper",
          boxShadow: 24,
          p: 6, // Padding inside the modal
        }}
      >
        <div style={style} className="bg-white  overflow-y-scroll">
          <CloseIcon
            style={{
              position: "absolute",
              right: "20",
              top: "15",
              fontSize: "25px",
            }}
            onClick={handleClose}
          />
          <DragNDrop
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
          />
        </div>
      </Modal>
    </div>
  );
}


