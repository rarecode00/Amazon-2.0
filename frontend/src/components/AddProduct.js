import React from "react";
import firebase from "../firebase/firebase";
const AddProduct = () => {
  const uploadImageToFirebase = async (imageFile) => {
    const storageRef = firebase.storage();
    console.log(storageRef.ref("/Category-Mobile"));
    console.log("clicked");
    const imageRef = storageRef.child(`/Category-Mobile/${imageFile.name}`);
    console.log("Clicked2");
    await imageRef.put(imageFile);
    console.log("Clicked3");
    const imageUrl = await imageRef.getDownloadURL();
    console.log("Clicked4");
    return imageUrl;
  };

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = await uploadImageToFirebase(imageFile);
    console.log(imageUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
};

export default AddProduct;
