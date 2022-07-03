import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <div className="head-container">
        <div className="logoSection">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
              <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#05A081"></path>
              <path d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z" fill="#fff"></path>
            </svg>
            <div className="logo-text">Pexels</div>
          </Link>
        </div>

        <div className="desktop-menu">
          <ul>
            <li>
              <div>
                <Link to="/about">Explore</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/">License</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/">Upload</Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      ></path>
                    </svg>
                  </i>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/" className="signup">
                  Join
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
