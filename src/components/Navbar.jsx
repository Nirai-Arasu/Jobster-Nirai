import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { logoutUser, toggleSidebar } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isclicked, setIsClicked] = useState(false);

  const clickedHandler = () => {
    setIsClicked(!isclicked);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={clickedHandler}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          {isclicked && (
            <div className="dropdown show-dropdown">
              <button
                className="dropdown-btn"
                onClick={() => dispatch(logoutUser('Logging out...'))}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
