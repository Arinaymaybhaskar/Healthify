import React from 'react';

function Profile(props) {
  
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="/profile" alt="" />
      </div>
      <div className='profile-line'></div>
      <div className="profile-details">
        <div className="profile-name-age">
          <div className='profile-name'>Name</div>
          <div className='profile-age'>Age</div>
        </div>
        <div className="profile-email">
          <p>Email: </p>
        </div>
        <div className="profile-contact">
          <p>Contact: </p>
        </div>
      </div>
    </div>
  );
}


export default Profile;

