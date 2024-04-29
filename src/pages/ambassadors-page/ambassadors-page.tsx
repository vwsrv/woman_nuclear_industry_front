import cn from 'classnames';
import classes from './styles.module.scss';
import { Breadcrumb } from '@/shared/ui/breadcrumb';

export const AmbassadorsPage: React.FC = () => {
  return (
    <div className={cn(classes.ambassadorsPage)}>
      <Breadcrumb
        links={[
          { title: 'Главная', link: '/' },
          { title: 'Амбассадоры', link: '/ambassadors' }
        ]}
      />
    </div>
  );
};
