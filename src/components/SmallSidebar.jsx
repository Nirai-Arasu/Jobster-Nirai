import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import Navlinks from './Navlinks';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen ? 'show-sidebar' : ''}`}
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebarHandler}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggle={toggleSidebarHandler} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
