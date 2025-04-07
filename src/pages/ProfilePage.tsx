import styles from "../css_modules/profilePage.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";

const ProfilePage = () => {
  const user = useSelector(selectCurrentUser);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch("/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.imageUrl); // Assuming the response contains the image URL
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className={styles.profilePage}>
      <h1>Profile</h1>
      <p>Name: {user.name.first}</p>
      <p>Email: {user.email}</p>
      {imageUrl && <img src={imageUrl} alt="Uploaded image" />}
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload picture</button>
    </div>
  );
};

export default ProfilePage;
