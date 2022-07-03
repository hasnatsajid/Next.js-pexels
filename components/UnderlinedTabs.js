import { NavLink } from 'react-router-dom';

const UnderlinedTabs = () => {
  return (
    <div className="underlined-tabs">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'underlined-tabs__tab underlined-tabs__tab--active' : 'underlined-tabs__tab')}
        // 'underlined-tabs__tab--active' : undefined)}}
      >
        Home
      </NavLink>
      <NavLink to="/discover" className={({ isActive }) => (isActive ? 'underlined-tabs__tab underlined-tabs__tab--active' : 'underlined-tabs__tab')}>
        Discover
      </NavLink>
      <NavLink to="/videos" className={({ isActive }) => (isActive ? 'underlined-tabs__tab underlined-tabs__tab--active' : 'underlined-tabs__tab')}>
        Videos
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'underlined-tabs__tab underlined-tabs__tab--active' : 'underlined-tabs__tab')}>
        Leaderboard
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'underlined-tabs__tab underlined-tabs__tab--active' : 'underlined-tabs__tab')}>
        Challenges
      </NavLink>
    </div>
  );
};

export default UnderlinedTabs;
