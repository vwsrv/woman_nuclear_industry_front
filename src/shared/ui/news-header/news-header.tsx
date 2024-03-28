import classes from './styles.module.scss';
import cn from 'classnames';
import { newsHeaderProps } from './types';
import Image from 'next/image';
import back from '@/shared/images/for-news-header/back.svg';
import { useRouter } from 'next/navigation';

export const NewsHeader: React.FC<newsHeaderProps> = ({
  className,
  heading
}) => {
  const router = useRouter();

  const goBack = (): void => {
    if (window.history.length > 2) {
      router.push('/news');
    } else {
      router.back();
    }
  };

  return (
    <div className={cn(className, classes.newsHeaderWrapper)}>
      <button
        onClick={goBack}
        className={cn(className, classes.newsHeaderButton)}
      >
        <Image src={back} alt="" />
      </button>
      <p className={cn(className, classes.newsHeader)}>{heading}</p>
    </div>
  );
};
