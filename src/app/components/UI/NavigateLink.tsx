import classes from '../style/NavigateLink.module.scss';

interface NavigateProps {
  content: string;
  linkTo: string;
  background?: boolean;
  width?: 'small' | 'default' | 'large';
  target?: boolean;
}

export default function NavigateLink({
  content,
  linkTo,
  background = true,
  width = 'default',
  target = true,
}: Readonly<NavigateProps>) {
  const buttonSizeInWidth = () => {
    switch (width) {
      case 'small':
        return classes['navbutton-small'];
      case 'large':
        return classes['navbutton-large'];
      default:
        return classes['navbutton-default'];
    }
  };

  return (
    <a
      href={linkTo}
      target={!target ? '_blank' : undefined}
      className={`${buttonSizeInWidth()} ${
        background ? classes.background : ''
      }`}
    >
      {content}
    </a>
  );
}
