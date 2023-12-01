import { useEffect, useState } from 'react';

import DisplayWeather from '../components/UI/DisplayWeather';
import HamburgerButton from '../components/UI/HamburgerButton';
import NavItems from '../components/UI/NavItems';

import classes from '../components/style/Nav.module.scss';
import Dropdown from '../components/UI/Dropdown';

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dropdownToggleHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleReszie = () => {
      const newWindowWidth = window.innerWidth;
      if (newWindowWidth > 768) {
        setIsDropdownOpen(false);
      }
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleReszie);
    return () => window.removeEventListener('resize', handleReszie);
  }, []);

  return (
    <>
      <section className={classes['nav-bar']}>
        <h1 className={classes['logo']}>My app</h1>
        <nav className={classes['nav-menu']}>
          <div className={classes['menu-left-side']}>
            <NavItems color={'bright'} className={classes['nav-items']} />
          </div>
          <div className={classes['menu-right-side']}>
            <DisplayWeather />
            <HamburgerButton setIsDropdownOpen={dropdownToggleHandler} />
          </div>
        </nav>
      </section>
      {isDropdownOpen && windowWidth <= 1024 && <Dropdown />}
    </>
  );
}
