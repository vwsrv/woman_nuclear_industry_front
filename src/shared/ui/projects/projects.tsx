'use client';

import { typeProjectsProps } from '@/shared/ui/projects/types';
import React from 'react';
import Link from 'next/link';
import classes from './styles.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import ArrowRight from '../../images/for-projects/arrow-right.svg';

export const Projects: React.FC<typeProjectsProps> = props => {
  const {
    className,
    title,
    linkUrl,
    textBtnFirst,
    textBtnSecond,
    textBtnThird,
    awardSupportTitle,
    projectsSupportTitle,
    awardSupportText,
    projectsSupportText
  } = props;

  return (
    <div className={cn(className, classes.projects)}>
      <h1 className={cn(className, classes.title)}>{title}</h1>
      <div className={cn(className, classes.info)}>
        <div className={cn(className, classes.supports)}>
          <div className={cn(className, classes.support, classes.awardSupport)}>
            <h1 className={cn(className, classes.awardSupportTitle)}>
              {awardSupportTitle}
            </h1>
            <p className={cn(className, classes.awardSupportText)}>
              {awardSupportText}
            </p>
            <div className={cn(className, classes.links)}>
              <Link className={cn(className, classes.link)} href={linkUrl}>
                <p className={cn(className, classes.linkText)}>
                  {textBtnFirst}
                </p>
              </Link>
              <Link className={cn(className, classes.link)} href={linkUrl}>
                <p className={cn(className, classes.linkText)}>
                  {textBtnSecond}
                </p>
              </Link>
            </div>
          </div>

          <div
            className={cn(className, classes.support, classes.projectsSupport)}
          >
            <h1 className={cn(className, classes.projectsSupportTitle)}>
              {projectsSupportTitle}
            </h1>
            <p className={cn(className, classes.projectsSupportText)}>
              {projectsSupportText}
            </p>
            <div className={cn(className, classes.links)}>
              <Link className={cn(className, classes.link)} href={linkUrl}>
                <p className={cn(className, classes.linkText)}>
                  {textBtnThird}
                </p>
              </Link>
            </div>
          </div>
        </div>

        <Link className={cn(className, classes.linkArrow)} href={linkUrl}>
          <Image
            className={cn(className, classes.arrow)}
            src={ArrowRight}
            alt="arrow"
            width={60}
            height={60}
          />
        </Link>
      </div>
    </div>
  );
};
