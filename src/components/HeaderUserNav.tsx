import { Link, useNavigate } from "react-router";
import { BsPerson, BsHeart, BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import styles from "../css_modules/HeaderUserNav.module.css";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { useSelector, useDispatch } from "react-redux";
import { getTotalQuantity } from "../store/cartSlice";
import { selectCurrentUser, logout } from "../store/authSlice";
import SearchBar from "./SearchBar";

const HeaderUserNav = () => {
  const user = useSelector(selectCurrentUser);
  const total = useSelector(getTotalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.userNav}>
      <div className={styles.userNavContent}>
        <Link to="/" className={styles.logo}>
          <img src={WeGotBoardLogo} alt="logo" />
        </Link>
        <SearchBar />
        <ul>
          <li>
            {user ? (
              <button onClick={handleLogout} className={styles.logoutButton}>
                <i>
                  <LuLogOut />
                </i>
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/user/login" className={styles.loginLink}>
                <i>
                  <BsPerson />
                </i>
                <span>Account</span>
              </Link>
            )}
          </li>

          <li>
            <Link to="/user/profile">
              <i>
                <BsPerson />
              </i>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/user/wishlist">
              <i>
                <BsHeart />
              </i>
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className={styles.cartIcon}>
                <BsCart3 />
                {total !== 0 && (
                  <span className={styles.quantity}>{total}</span>
                )}
              </i>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderUserNav;
