import React from 'react';
import HamburgerIcon from '../../../assets/svg/hamburger-icon.svg';

import classes from '../style/HamburgerButton.module.scss';

export default function HamburgerButton() {
  return (
    <button
      type='button'
      aria-label='Oprn dropdown'
      className={classes['hamburger-icon']}
    >
      <figure>
        <img src={HamburgerIcon} alt='Open dropdown' />
      </figure>
    </button>
  );
}
