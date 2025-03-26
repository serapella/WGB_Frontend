import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";

const ProfilePage = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  if (!user) {
    navigate("/user/login");
    return null;
  }

  const handleClick = () => {
    navigate("/user/profile/edit");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleClick}>Edit profile</button>
    </div>
  );
};

export default ProfilePage;
