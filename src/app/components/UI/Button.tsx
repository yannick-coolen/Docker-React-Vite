import classes from '../style/Button.module.scss';

interface ButtonProps {
  content: string;
  width?: 'small' | 'default' | 'large';
  onClick: () => void;
}

export default function Button({
  content,
  width,
  onClick,
}: Readonly<ButtonProps>) {
  const buttonWidth = () => {
    switch (width) {
      case 'small':
        return 'button-width-small';
      case 'large':
        return 'button-width-large';
      default:
        return 'button-width-default';
    }
  };

  return (
    <button
      className={`${classes.button} 
      ${classes[buttonWidth()]}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
