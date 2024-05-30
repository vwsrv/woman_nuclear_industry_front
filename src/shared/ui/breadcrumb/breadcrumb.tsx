import cn from 'classnames';
import classes from './styles.module.scss';
import { breadcrumbProps } from './types';
import Link from 'next/link';
import Image from 'next/image';
import great from '@/shared/images/for-breadcrumb/great.svg';

export const Breadcrumb: React.FC<breadcrumbProps> = ({ className, links }) => {
  return (
    <nav className={cn(className, classes.breadcrumb)}>
      {links &&
        links.map((link, index) => (
          <div
            className={cn(className, classes.breadcrumbLinkWrapper, {
              [classes.last]: index === links.length - 1
            })}
            key={index}
          >
            {index !== links.length - 1 ? (
              <>
                <Link
                  className={cn(className, classes.breadcrumbLink)}
                  href={link.link}
                >
                  {link.title}
                </Link>
                <Image
                  className={cn(className, classes.breadcrumbGreat)}
                  src={great}
                  alt={'Иконка стрелки вправо для разделения ссылок'}
                />
              </>
            ) : (
              <span
                className={cn(className, classes.breadcrumbLink, [
                  classes.last
                ])}
              >
                {link.title}
              </span>
            )}
          </div>
        ))}
    </nav>
  );
};
