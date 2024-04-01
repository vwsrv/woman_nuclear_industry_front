import { FooterMenuProps } from './types';
import cn from 'classnames';
import classes from './styles.module.scss';
import Link from 'next/link';

export const FooterMenu: React.FC<FooterMenuProps> = ({ menuItems }) => {
  return (
    <nav className={cn(classes.footerMenu)}>
      {menuItems.map((subItems, subIndex) => (
        <ul key={subIndex} className={cn(classes.footerMenu__wrapper)}>
          {subItems.map((item, index) => (
            <li key={index} className={cn(classes.footerMenu__item)}>
              <Link href={item.link} className={cn(classes.footerMenu__link)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
