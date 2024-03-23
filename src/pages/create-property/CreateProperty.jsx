import {InputTextField, SelectField, SubtitleField, UploadPhotos} from '../'
import TitleIcon from '@mui/icons-material/Title';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import * as yup from 'yup'
import { useFieldArray, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { thunk_New_Property } from '../../store/thunks/propertyThunk';
import { reset_Property } from '../../store/slices/propertySlice';

// Designing : https://onaircode.com/wp-content/uploads/2019/10/responsive-registration-form-1024x693.jpg

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  location: yup.string().required("Location is required"),
  distance: yup.string().required("Distance is required"),
  price: yup.string().required("Price is required"),
  category: yup.string().required("Category is required"),
});


function CreateProperty() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {isLoading, isSuccess} = useSelector(state => state.property)

  const [selectedImages, setSelectedImages] = useState([]);

  // Property created successfully
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/");
        dispatch(reset_Property());
      }, 1500);
    }
  }, [isSuccess]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   subtitle: dummy_Subtitle
    // }
  });

  const handle_Form_Submit = (info) => {
    if (info.subtitle.length === 0) {
      return toast.error("Subtitle is required", {
        duration: 1200,
        position: "bottom-center",
      });
    }

    if (selectedImages.length === 0) {
      return toast.error("Upload atleast one photo", {
        duration: 1200,
        position: "bottom-center",
      });
    }

    dispatch(thunk_New_Property({
      ...info,
      property_Photos: selectedImages
    }))

    reset();
    setSelectedImages([]);
  };

  return (
    <div className="">
      <div className="">
        {/* Form Heading */}
        <div className="">
          <span className="">Create New Property</span>
        </div>

        {/* Form Body */}
        <div className="">
          <form
            className=""
            onSubmit={handleSubmit(handle_Form_Submit)}
            autoComplete="off"
          >
            <InputTextField
              icon={<TitleIcon />}
              field="Title"
              register={register}
              error={errors.title?.message}
            />

            <InputTextField
              icon={<AddLocationIcon />}
              field="Location"
              register={register}
              error={errors.location?.message}
            />

            <InputTextField
              icon={<ExploreIcon />}
              field="Distance"
              register={register}
              error={errors.distance?.message}
            />

            <InputTextField
              icon={<AccountBalanceIcon />}
              field="Price"
              register={register}
              error={errors.price?.message}
            />

            {/* Subtitles */}
            <SubtitleField
              register={register}
              errors={errors.subtitle?.message}
              control={control}
            />

            <SelectField
              register={register}
              errors={errors.category?.message}
            />

            {/* Image Upload */}
            <UploadPhotos
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />

            {/* Button */}
            <div className="">
              <button type="submit" className="">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProperty