import React from 'react';
import { AmbassadorsPage } from '@/pages/ambassadors-page';
import img1 from '@/shared/images/for-ambassadors-page/item-1.svg';
import img2 from '@/shared/images/for-ambassadors-page/item-2.svg';
import img3 from '@/shared/images/for-ambassadors-page/item-3.svg';
import img4 from '@/shared/images/for-ambassadors-page/item-4.svg';
import img5 from '@/shared/images/for-ambassadors-page/item-5.svg';
import img6 from '@/shared/images/for-ambassadors-page/item-6.svg';
import img7 from '@/shared/images/for-ambassadors-page/item-7.svg';
import img8 from '@/shared/images/for-ambassadors-page/item-8.svg';
import { title } from 'process';

const getData = async () => {
  const aboutItems: React.ReactNode | JSX.Element = (
    <ul>
      <li>в 2007 году переехала с семьей в Москву</li>
      <li>в 2010 году начала работать в Госкорпорации «Росатом»</li>
      <li>
        в 2011 году закончила Московскую государственную юридическую академию
      </li>
      <li>
        в 2018 году стала участником команды поддержки изменений Госкорпорации
        «Росатом» по горизонтальному взаимодействию
      </li>
      <li>в 2019 году участвовала в организации Книжного клуба ГК «Росатом»</li>
      <li>
        в 2020 году стала амбассадором Объединения «Женщины атомной отрасли»
      </li>
      <li>
        в 2020 году прошла обучение по правительственной программе «Женщина -
        Лидер»
      </li>
    </ul>
  );
  const about = [
    { title: 'Поделитесь вашей любимой цитатой?', children: aboutItems },
    {
      title:
        'Где работаете сейчас и на какой должности? Какая основная деятельность?',
      children: aboutItems
    },
    {
      title: 'Расскажите в 3 тезисах о Вашем профессиональном пути?',
      children: aboutItems
    },
    {
      title: 'Расскажите в 3 тезисах о Вашем профессиональном пути?',
      children: aboutItems
    },
    {
      title: 'Расскажите в 3 тезисах о Вашем профессиональном пути?',
      children: aboutItems
    },
    {
      title: 'Расскажите в 3 тезисах о Вашем профессиональном пути?',
      children: aboutItems
    }
  ];
  const items = [
    {
      id: 1,
      name: 'АЛЕКСАНДР ГРИШКАНИЧ',
      description:
        'Директор Департамент по управлению цифровыми активами «Газпромбанк», к.т.н.',
      img: img1,
      region: 'Санкт-Петербург',
      itemAbout: about
    },
    {
      id: 2,
      name: 'ЮЛИЯ РУЗАНКИНА',
      description:
        'Ph.D международной докторской программы в науки KU Leuven (Бельгия) и Università Cattolica del Sacro Cuore (Италия)',
      img: img2,
      region: 'Москва',
      itemAbout: about
    },
    {
      id: 3,
      name: 'АНГЕЛИНА ПОТАПОВА',
      description:
        'Кандидат биологических наук, автор цифрового контента «Молекула»',
      img: img3,
      region: 'Краснодар',
      itemAbout: about
    },
    {
      id: 4,
      name: 'АННА АБРАЖЕНЧИК',
      description:
        'Официальный представитель, советник- председателя Международного Проектного Конгресса, Председатель Пермского Молодежного...',
      img: img4,
      region: 'Санкт-Петербург',
      itemAbout: about
    },
    {
      id: 5,
      name: 'НАТАЛЬЯ ШМАКОВА',
      description:
        'К.т.н., руководитель Технологического центра коллективного пользования по направлению «Нанотехнологии и «нано...',
      img: img5,
      region: 'Москва',
      itemAbout: about
    },
    {
      id: 6,
      name: 'ЕКАТЕРИНА ИВАНИЛОСВКАЯ',
      description:
        'Начальник отдела стратегических коммуникаций РЭУ им. Г.В. Плеханова, ассистент кафедры бизнеса «Капитаны» РЭУ им. Г.В....',
      img: img6,
      region: 'Краснодар',
      itemAbout: about
    },
    {
      id: 7,
      name: 'ИРИНА ШРАЙБЕР',
      description:
        'Кандидат физико-математических науки, учёный, исследователь, ментор, лектор, в разные годы научный сотрудник ЦЕНРН, Женева​',
      img: img7,
      region: 'Санкт-Петербург',
      itemAbout: about
    },
    {
      id: 8,
      name: 'ВИТАЛИЙ АЛТУХОВ',
      description:
        'Сооснователь, директор по разработке и исследованиям "Профилум" Институт Психологии РАН, ВШЭ',
      img: img8,
      region: 'Москва',
      itemAbout: about
    },
    {
      id: 9,
      name: 'АННА АБРАЖЕНЧИК',
      description:
        'Официальный представитель, советник- председателя Международного Проектного Конгресса, Председатель Пермского Молодежного...',
      img: img4,
      region: 'Краснодар',
      itemAbout: about
    },
    {
      id: 10,
      name: 'ИРИНА ШРАЙБЕР',
      description:
        'Кандидат физико-математических науки, учёный, исследователь, ментор, лектор, в разные годы научный сотрудник ЦЕНРН, Женева​',
      img: img7,
      region: 'Санкт-Петербург',
      itemAbout: about
    },
    {
      id: 11,
      name: 'ЮЛИЯ РУЗАНКИНА',
      description:
        'Ph.D международной докторской программы в науки KU Leuven (Бельгия) и Università Cattolica del Sacro Cuore (Италия)',
      img: img2,
      region: 'Москва',
      itemAbout: about
    },
    {
      id: 12,
      name: 'ВИТАЛИЙ АЛТУХОВ',
      description:
        'Сооснователь, директор по разработке и исследованиям "Профилум" Институт Психологии РАН, ВШЭ',
      img: img8,
      region: 'Краснодар',
      itemAbout: about
    },
    {
      id: 13,
      name: 'АЛЕКСАНДР ГРИШКАНИЧ',
      description:
        'Директор Департамент по управлению цифровыми активами «Газпромбанк», к.т.н.',
      img: img1,
      region: 'Санкт-Петербург',
      itemAbout: about
    },
    {
      id: 14,
      name: 'НАТАЛЬЯ ШМАКОВА',
      description:
        'К.т.н., руководитель Технологического центра коллективного пользования по направлению «Нанотехнологии и «нано...',
      img: img5,
      region: 'Москва',
      itemAbout: about
    },
    {
      id: 15,
      name: 'НАТАЛЬЯ ШМАКОВА',
      description:
        'К.т.н., руководитель Технологического центра коллективного пользования по направлению «Нанотехнологии и «нано...',
      img: img5,
      region: 'Краснодар',
      itemAbout: about
    },
    {
      id: 16,
      name: 'НАТАЛЬЯ ШМАКОВА',
      description:
        'К.т.н., руководитель Технологического центра коллективного пользования по направлению «Нанотехнологии и «нано...',
      img: img5,
      region: 'Санкт-Петербург',
      itemAbout: about
    }
  ];
  return [
    {
      title: 'Амбассадоры',
      description:
        'Международный совет по поддержке и развитию женщин в промышленности и технологиях - это международная неправительственная некоммерческая организация, объединяющая женщин-экспертов из различных технологических отраслей. Совет создан в 2022 году Фондом поддержки и развития женских инициатив Объединение женщин атомной отрасли.',
      items: items
    }
  ];
};

const Ambassadors: React.FC = async () => {
  const pageData = await getData();
  return (
    <main>
      <AmbassadorsPage pageData={pageData} />
    </main>
  );
};

export default Ambassadors;
