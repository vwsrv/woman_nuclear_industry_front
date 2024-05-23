import classes from './styles.module.scss';
import cn from 'classnames';
import { territoryAssociationProps } from './types';
import Image from 'next/image';

export const TerritoryAssociation: React.FC<territoryAssociationProps> = ({
  title,
  subtitle,
  image,
  regions
}) => {
  return (
    <section className={cn(classes.territoryAssociation)}>
      <h2 className={cn(classes.territoryAssociationTitle)}>{title}</h2>
      <p className={cn(classes.territoryAssociationSubtitle)}>{subtitle}</p>
      <Image
        className={cn(classes.territoryAssociationImage)}
        src={image}
        alt=""
      />
    </section>
  );
};
