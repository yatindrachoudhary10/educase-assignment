import "./profile.css";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import profileImage from "../../assets/profile.png";
import cameraImage from "../../assets/camera.png";

export const Profile = () => {
    const location = useLocation();  // Grabs the data passed via navigation (name, email, etc.)
    const data = location.state;
    
    // Profile Picture (state) → starts with a default image
    const [pfpUrl, setPfpUrl] = useState(profileImage);

    //useRef for hidden file input → allows programmatically triggering file select
    const fileInputRef = useRef(null);
    
    // When user clicks the upload icon → open the hidden file input
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    
    //When user selects a file → check if it's an image, then preview it
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (event) => {

                // Update profile pic preview with uploaded image
                setPfpUrl(event.target.result);
            };

            reader.readAsDataURL(file);   // Convert image into base64 URL for preview
        }
    };

    return (
        <div className="container">
            <div className="page">
                <section className="content content-profile">
                    <div className="profile-wrapper">
                        <div className="banner">Account Settings</div>

                        <div className="profile-details">
                            <div className="pfp-group">
                                <img
                                    id="pfp"
                                    src={pfpUrl}   // Current profile pic (default or uploaded)
                                    alt="Profile Picture"
                                    title="Profile Picture"
                                />

                                <div className="upload-btn-wrapper" onClick={handleUploadClick}>
                                    <img
                                        id="upload-btn"
                                        src={cameraImage}
                                        alt="Upload PfP"
                                        title="Upload Profile Picture"
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        ref={fileInputRef}
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>

                            <div className="user-info">
                                <h4 className="profile-name">{data?.name || "Marry Doe"}</h4>
                                <p className="profile-email">
                                    {data?.email || "Marry@gmail.com"}
                                </p>
                            </div>
                        </div>

                        <p className="description shorter-description">
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
                            Erat, Sed Diam
                        </p>
                    </div>

                    <div className="empty-space"></div>
                </section>
            </div>
        </div>
    );
};

export default Profile;