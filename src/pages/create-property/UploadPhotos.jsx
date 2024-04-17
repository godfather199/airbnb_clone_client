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
    <div className='my-5'>
      <Button
        variant="contained"
        size='large'
        color="error"
        onClick={handleOpen}
        startIcon={<AddToPhotosIcon />}
        className="p-5"
      >
        Add Photos
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={style} className="bg-white  overflow-y-scroll">
          <CloseIcon
            style={{ position: "absolute", right: "20", top: "15", fontSize: '25px' }}
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


