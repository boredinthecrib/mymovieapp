import React, { useState } from "react";
import "./Profile.css";
import { Upload, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { signOut } from "firebase/auth";

export default function ProfilePage() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const GoHome = () => {
    navigate("/");
  };

  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div>
        <button onClick={GoHome}>Home</button>
      </div>
      <div>
        <button onClick={logOut}>SignOut</button>
      </div>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image-wrapper">
            {image ? (
              <img src={image} alt="Profile" className="profile-image" />
            ) : (
              <div className="default-profile">
                <User className="default-icon" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="file-input"
              id="imageUpload"
              onChange={handleImageChange}
            />
            <label htmlFor="imageUpload" className="upload-label">
              <Upload className="upload-icon" />
            </label>
          </div>
          <h2 className="profile-name">Your Name</h2>
          <p className="profile-username">@username</p>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>

      <div className="movies-clicked">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est
        veritatis incidunt facilis unde sint inventore voluptatibus rerum,
        obcaecati quas tempora, molestiae enim reprehenderit ipsum perspiciatis
        dicta iusto totam. Reprehenderit!
      </div>
    </div>
  );
}
