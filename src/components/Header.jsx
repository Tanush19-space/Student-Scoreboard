import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-icon">🎓</div>
        <div>
          <h1 className="header-title">Student Scoreboard</h1>
          <p className="header-subtitle">Track · Update · Manage</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
