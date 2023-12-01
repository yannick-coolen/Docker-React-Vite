import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import avatar from '../../../../assets/image/avatar.png';

import classes from '../style/Avatar.module.scss';

interface SocialLinks {
  link: string;
  img: string;
  alt: string;
}

export default function Avatar() {
  const [socialLinks, setSocialLinks] = useState<SocialLinks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/navigation.link.json');
        const data = await response.json();
        setSocialLinks(data.socialLinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <figure>
        <img src={avatar} alt='avatar' className={classes.avatar} />
      </figure>
      <ul className={classes['social-links']}>
        {socialLinks.map((data) => (
          <li key={uuid()}>
            <a href={data.link} target='_blank'>
              <img src={data.img} alt={data.alt} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
