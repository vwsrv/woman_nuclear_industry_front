import { FooterMenuProps } from "./types";
import cn from 'classnames';
import classes from './styles.module.scss';

export const FooterMenu: React.FC<FooterMenuProps> = (props) => {
  const { link, title } = props;
  return (
    <nav className={cn(className, classes.footerMenu)}>
      <ul className={cn(className, classes.footerMenuWrapper)}>
        
      </ul>
    </nav>
  );
};