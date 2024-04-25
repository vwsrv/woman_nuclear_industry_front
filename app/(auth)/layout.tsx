import cn from 'classnames';
import classes from './styles.module.scss';
const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={cn(classes.authLayout)}>{children}</div>;
};

export default AuthLayout;
