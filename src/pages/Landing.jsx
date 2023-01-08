import React from 'react';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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

          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
