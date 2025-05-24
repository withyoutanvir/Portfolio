import React from "react";


const ProfilePhoto = () => {
  return (
    <div className="profile-container">
      {/* Futuristic Photo Box */}
      <div className="futuristic-photo-box">
        <img
          src="/Photo.jpg"
          alt="Your Name"
          className="profile-photo"
        />
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  );
};

export default ProfilePhoto;
