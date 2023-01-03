import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking </span> App
          </h1>
          <p>
            Retro slow-carb taiyaki viral thundercats biodiesel DSA lumbersexual
            blue bottle. 3 wolf moon fixie everyday carry typewriter. Jianbing
            literally vinyl skateboard whatever ethical fanny pack VHS celiac.
            Farm-to-table vexillologist vibecession DIY, biodiesel chambray
            viral cray actually meditation live-edge fanny pack.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
