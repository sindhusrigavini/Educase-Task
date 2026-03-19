
function Profile() {
  return (
    <div className="profile-page">

      <h3 className="profile-title">Account Settings</h3>

      <div className="profile-header">

        <img
          className="profile-img"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
        />

        <div>
          <h4>Marry Doe</h4>
          <p>Marry@gmail.com</p>
        </div>

      </div>

      <p className="profile-text">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

    </div>
  );
}

export default Profile;