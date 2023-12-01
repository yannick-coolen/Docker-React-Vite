import { CSSProperties, ReactNode } from 'react';

import classes from '../style/Grid.module.scss';

interface GridProps {
  children: ReactNode;
  width?: 'small' | 'default';
  background?: boolean;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
}

interface ElementProps {
  children: ReactNode;
  background?: boolean;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Grid({
  children,
  width = 'default',
  background = false,
  bordered = false,
  className,
  style,
}: Readonly<GridProps>) {
  const containerSize = width === 'small' ? 'small' : 'default';

  return (
    <section>
      <div
        className={`${classes[`grid-container-${containerSize}`]} ${
          background ? `${classes.background}` : ''
        } ${bordered ? `${classes['border-line']}` : ''} ${className}`}
        style={style}
      >
        {children}
      </div>
    </section>
  );
}

export function Element({
  children,
  background = false,
  bordered = false,
  className,
  style,
}: Readonly<ElementProps>) {
  return (
    <section>
      <div
        className={`${background ? `${classes.background}` : ''} ${
          bordered ? `${classes['border-line']}` : ''
        } ${className}`}
        style={style}
      >
        {children}
      </div>
    </section>
  );
}

Grid.Element = Element;
