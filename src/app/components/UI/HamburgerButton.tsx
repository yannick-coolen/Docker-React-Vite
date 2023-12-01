import HamburgerIcon from '../../../../assets/svg/hamburger-icon.svg';

import classes from '../style/HamburgerButton.module.scss';

interface ButtonProps {
  setIsDropdownOpen: () => void;
}

export default function HamburgerButton({
  setIsDropdownOpen,
}: Readonly<ButtonProps>) {
  return (
    <div>
      <button
        type='button'
        aria-label='Oprn dropdown'
        className={classes['hamburger-icon']}
        onClick={setIsDropdownOpen}
      >
        <figure>
          <img src={HamburgerIcon} alt='Open dropdown' />
        </figure>
      </button>
    </div>
  );
}
