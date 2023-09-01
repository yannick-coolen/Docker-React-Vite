import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";

import classes from "./style/Nav.module.scss";
import { useEffect, useState } from "react";

interface Navigator {
  name: string;
  link: string;
}

export default function Nav() {
  const [navigators, setNavigators] = useState<Navigator[]>([]);

  useEffect(() => {
    fetch("src/navbar.link.json")
      .then((response) => response.json())
      .then((data) => setNavigators(data));
  }, []);
  
  return (
    <nav>
      <div className={classes.navigator}>
        <h1>My App</h1>
        <ul className={classes["nav-menu"]}>
          {navigators.map((data) => (
            <li key={uuid()}>
              <NavLink to={data.link}>{data.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
