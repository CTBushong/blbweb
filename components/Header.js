import Subscribe from './Subscribe';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="BushLeagueBusiness.com">
          <img className="header__logo" src="/static/BLB_Logo.jpg" alt="Bush Leage Business: A Small Business Podcast" />
        </a>
      </Link>
    </div>
    <div className="header__right">
    
      <div className="title" />
      <div className="title">
        <h2 className="tagline">A small business podcast. With jokes.</h2>
        <h3 className="tagline">(And no web designer)</h3>
      </div>
      
    </div>
    <Subscribe />
  </header>
);

export default Header;
