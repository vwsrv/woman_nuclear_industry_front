import cn from 'classnames';
import classes from './styles.module.scss';
import { FooterContacts } from '@/shared/ui/footer-contacts';
import { FooterLogo } from '@/shared/ui/footer-logo';
import { FooterMenu } from '@/shared/ui/footer-menu';
import { footerProps } from './types';

export const Footer: React.FC<footerProps> = ({
  className,
  copyright,
  items,
  contacts
}) => {
  return (
    <footer className={cn(className, classes.footer)}>
      <div className={cn(className, classes.footerWrapper)}>
        <FooterLogo
          className="footerLogo"
          copyrightText={copyright.text}
          copyrightYear={copyright.year}
        />
        <div className={cn(className, classes.footerMenu)}>
          <FooterMenu className="footerMenu" menuItems={items} />
          <FooterContacts
            className="footerContacts"
            address={contacts.address}
            email={contacts.email}
          />
        </div>
      </div>
    </footer>
  );
};
