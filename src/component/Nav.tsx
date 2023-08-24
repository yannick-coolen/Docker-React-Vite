import classes from "./Nav.module.scss";

import {NavLink} from "react-router-dom";

const NAVIGATOR: {
  id: string;
  name: string;
  link: string
}[] = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "About", link: "/about"},
  { id: "3", name: "Contact", link: "/contact"},
];

export default function Nav() {
  return (
    <nav>
      <div className={classes.navigator}>
        <div>My App</div>
        <ul className={classes["nav-menu"]}>
          {NAVIGATOR.map((data) => (
            <li key={data.id}>
              <NavLink to={data.link}>{data.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
