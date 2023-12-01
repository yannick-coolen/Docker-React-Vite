import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import classes from '../style/NavItems.module.scss';

interface Navigator {
  name: string;
  link: string;
}

interface NavProps {
  color?: 'dark' | 'bright';
  backgroundColored?: boolean;
  className?: string;
}

export default function NavItems({
  color = 'dark',
  className,
  backgroundColored = true,
}: Readonly<NavProps>) {
  const [navigators, setNavigators] = useState<Navigator[]>([]);

  const setFontColor = () => {
    if (color === 'bright') {
      return classes['font-bright'];
    } else {
      return classes['font-dark'];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/navigation.link.json');
        const data = await response.json();
        setNavigators(data.links);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className={`${setFontColor()} ${className}`}>
      {navigators.map((data) => (
        <li key={uuid()}>
          <NavLink
            to={data.link}
            className={`${setFontColor()} ${
              backgroundColored && classes.backgroundColor
            }`}
          >
            {data.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
