import React from 'react';
import { MdDelete } from 'react-icons/md';
import Navbar from "@/components/Navbar";

function Profile(props) {

  return (
    <div>
      <Navbar />

      <div className="profile-container">
        <div className='profile-preview'>
          <div className='profile-name'><h1>Full Name</h1></div>
          <div className="profile-image">

            <div className='image-container'>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile photo" />
            </div>
            <div className='profile-preview-text'>
              <div className='profile-username'>@username</div>
              <div className='profile-gender-age'>
              <div className='profile-gender'>
                Male
              </div>
              <div className='profile-age'>23</div>
              </div>
              <div className='profile-contact'>
                9876543210
              </div>
            </div>

            <div>
              <button className='Upload-photo-btn'>Upload New Photo</button>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className='edit-profile'><h1>Edit Profile</h1> </div>
          <div className='edit-profile-form'>
            <div className="input">
              <input type="text" className="input-field" required />
              <label class="input-label">Full name</label>
            </div>
            <div className="input">
              <input type="date" className="input-field-date" required />
              <label class="input-label"><p>Date of birth</p></label>
            </div>

            <div className="input">
              <input type="text" className="input-field" required />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input type="password" className="input-field" required />
              <label className="input-label">Password</label>
            </div>
            <div className="input">
              <input type="number" className="input-field" required />
              <label className="input-label">Contact number</label>
            </div>
            <div className="input">
              <label className="input-label">Gender</label>
              <select className='input-field'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
          </div>
          <div className='profile-detail-buttons'>
            <button className='Upload-detail-btn'>Continue without saving</button>
            <button className='Upload-detail-btn'>Update Profile</button>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Profile;

