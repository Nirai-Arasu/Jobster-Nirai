import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import Navlinks from './Navlinks';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  console.log(isSidebarOpen);
  return (
    <Wrapper>
      <div
        className={`sidebar-container ${isSidebarOpen ? 'show-sidebar' : ''}`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
