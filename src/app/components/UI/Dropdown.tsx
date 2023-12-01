import classes from '../style/Dropdown.module.scss';
import NavItems from '../UI/NavItems';

export default function Dropdown() {
  return (
    <section className={classes.dropdown}>
      <NavItems className={classes['dropdown-list']} backgroundColored/>
    </section>
  );
}
