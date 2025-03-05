import React from 'react';
import './Profile.css'; // Import the CSS file for styles
import { Camera, ChevronRight, User, Phone, Mail, Bell, Lock, Moon } from 'lucide-react';

const mockUser = {
  userId: '12345',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: 1234567890,
  email: 'john.doe@example.com',
  profilePic: 'https://i.pravatar.cc/300',
};

const formatPhoneNumber = (phone) => {
  const phoneStr = phone.toString();
  return `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="profile-item">
    <div className="icon-container">
      {icon}
    </div>
    <div className="item-content">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
    <ChevronRight size={16} color="#888" />
  </div>
);

const Profile = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-image-container">
          <img
            src={mockUser.profilePic}
            alt="Profile"
            className="profile-image"
          />
          <button className="edit-button">
            <Camera size={20} color="#007BFF" />
          </button>
        </div>
        <h2 className="name">{mockUser.firstName} {mockUser.lastName}</h2>
        <span className="user-id">ID: {mockUser.userId}</span>
      </div>

      <div className="content">
        <div className="section">
          <h3 className="section-title">Personal Information</h3>
          <div className="card">
            <ProfileItem
              icon={<User size={20} color="#007BFF" />}
              label="Name"
              value={`${mockUser.firstName} ${mockUser.lastName}`}
            />
            <ProfileItem
              icon={<Phone size={20} color="#007BFF" />}
              label="Phone"
              value={formatPhoneNumber(mockUser.phoneNumber)}
            />
            <ProfileItem
              icon={<Mail size={20} color="#007BFF" />}
              label="Email"
              value={mockUser.email}
            />
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Settings</h3>
          <div className="card">
            <ProfileItem
              icon={<Bell size={20} color="#007BFF" />}
              label="Notifications"
              value="On"
            />
            <ProfileItem
              icon={<Lock size={20} color="#007BFF" />}
              label="Privacy"
              value="View Settings"
            />
            <ProfileItem
              icon={<Moon size={20} color="#007BFF" />}
              label="Dark Mode"
              value="System"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
