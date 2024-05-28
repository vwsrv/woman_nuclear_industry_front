import cn from 'classnames';
import classes from './styles.module.scss';
import { ProfileFieldProps } from './types';

const ProfileField: React.FC<ProfileFieldProps> = ({title, value}) => {
  return (
    <div className={cn(classes['profile-page__info-card'])}>
      <p className={cn(classes['profile-page__info-title'])}>{title}</p>
      <p className={cn(classes['profile-page__info-field'])}>{value}</p>
    </div>
  )
}

export default ProfileField;