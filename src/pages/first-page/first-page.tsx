'use client';

import React, { useState } from 'react';
import { About } from '@/shared/ui/about';
import { Mission } from '@/shared/ui/mission';
import { Projects } from '@/shared/ui/projects';
import { Partners } from '@/shared/ui/partners';
// TODO: компонент карты добавить из ZHE-78
import styles from './index.module.scss';

export const FirstPage: React.FC = () => {
  const [aboutTitle, setAboutTitle] = useState('Мы объединяем женщин —');
  const [aboutText, setAboutText] = useState(
    'специалистов в области использования атомной энергии из России и стран-участниц атомного проекта, лидеров общественного мнения, жительниц территорий расположения предприятий атомной отрасли.'
  );
  const [aboutLinks, setAboutLinks] = useState([
    {
      title: 'Присоединиться',
      link: '/join'
    },
    {
      title: 'Пожертвовать',
      link: '/donate'
    }
  ]);

  const [missionTitle, setMissionTitle] = useState('Миссия');
  const [missionText, setMissionText] = useState(
    'Формирование профессионального отраслевого женского сообщества и развитие международного сотрудничества в области использования атомной энергии, укрепление горизонтального взаимодействия и эффективной коммуникации между работниками из различных регионов, популяризация научно-технических профессий среди женщин и их всестороннее развитие.'
  );
  const [missionCounters, setMissionCounters] = useState([
    {
      value: '140+',
      label: 'Реализованных проектов'
    },
    {
      value: '1500+',
      label: 'Участниц из 37 субъектов России'
    },
    {
      value: '38',
      label: 'Инициативных групп'
    },
    {
      value: '17',
      label: 'Зарубежных стран'
    }
  ]);

  const [projectsTitle, setProjectsTitle] = useState('Проекты');
  const [projectsLink, setProjectsLink] = useState('https://www.rosatom.ru/');
  const [projectsTextBtnFirst, setProjectsTextBtnFirst] =
    useState('Поддержать');
  const [projectsTextBtnSecond, setProjectsTextBtnSecond] =
    useState('Подать заявку');
  const [projectsTextBtnThird, setProjectsTextBtnThird] =
    useState('Поддержать');
  const [projectsAwardSupportTitle, setProjectsAwardSupportTitle] =
    useState('Премия «Колба»');
  const [projectsProjectsSupportTitle, setProjectsProjectsSupportTitle] =
    useState('Экологические и социальные проекты');
  const [projectsAwardSupportText, setProjectsAwardSupportText] = useState(
    'В 2022 году Фондом «Объединение женщин атомной отрасли» было проведено тематическое исследование среди студенток технических вузов России.'
  );
  const [projectsProjectsSupportText, setProjectsProjectsSupportText] =
    useState(
      'Объединением женщин атомной отрасли успешно реализовано уже более 170 экологических и социальных инициатив.'
    );

  const [partnersLogos, setPartnersLogos] = useState([
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    },
    {
      logo: 'https://www.rosatom.ru/upload/new_logo_main/Rosatom_Vertical_ru.svg',
      link: 'https://www.rosatom.ru/'
    }
  ]);
  const [partnersLink, setPartnersLink] = useState('/read-more');

  return (
    <div className={styles.firstPage}>
      <About title={aboutTitle} text={aboutText} links={aboutLinks} />
      <Mission
        title={missionTitle}
        text={missionText}
        counters={missionCounters}
      />
      <Projects
        title={projectsTitle}
        linkUrl={projectsLink}
        textBtnFirst={projectsTextBtnFirst}
        textBtnSecond={projectsTextBtnSecond}
        textBtnThird={projectsTextBtnThird}
        awardSupportTitle={projectsAwardSupportTitle}
        projectsSupportTitle={projectsProjectsSupportTitle}
        awardSupportText={projectsAwardSupportText}
        projectsSupportText={projectsProjectsSupportText}
      />
      <Partners logos={partnersLogos} linkUrl={partnersLink} />
    </div>
  );
};
