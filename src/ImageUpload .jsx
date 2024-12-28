/* eslint-disable no-unused-vars */
import  { useState } from "react";
import './MusicUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setImageURL(URL.createObjectURL(selectedImage)); // Generate a preview URL
    }
  };

  return (
    <form className="mar" >
        <h2 className="align">اختر صورة ليتم تشغيله</h2>
      <input
      className="align"
        type="file"
        name="image"
        accept="image/png, image/jpg, image/jpeg"
        required
        onChange={handleImageChange}
        multiple={false}
      />
      
      {imageURL && (
        <div className="padding">
            <img src={imageURL} alt="Preview" />
        </div>
      )}


     
    </form>
  );
};

export default ImageUpload;
