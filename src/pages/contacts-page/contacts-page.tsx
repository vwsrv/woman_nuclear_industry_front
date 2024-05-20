'use client';

import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Button } from '@/shared/ui/button';
import cn from 'classnames';
import { Breadcrumb } from '@/shared/ui/breadcrumb';
import { ContactMap } from '@/shared/ui/contact-map';
import { contactMapProps } from '@/shared/ui/contact-map/types';
import { QustionForm } from '@/features/question-from';
import { qustionInputs } from '@/utils/validation/forms-options/question-form';
import { useForm, FormProvider } from 'react-hook-form';

export const ContactsPage: React.FC = () => {
  const methods = useForm({
    defaultValues: Object.fromEntries(
      qustionInputs.map(input => [input.name, input.defaultValue])
    ),
    mode: 'onBlur'
  });

  const [breadcrumbLinks, setBreadcrumbLinks] = useState<
    { title: string; link: string }[]
  >([
    { title: 'Главная', link: '/' },
    { title: 'Контакты', link: '/contacts' }
  ]);

  const [mapData, setMapData] = useState<contactMapProps>({
    address: 'Москва, Волоколамское шоссе, д. 108, оф. 19, 125424',
    buisnessHours:
      'Пн. - Пт: С 10:00 до 18:00 Суббота и воскресенье - выходные',
    email: 'info@win-russia.com',
    coordinats: { lat: 55.826655, lng: 37.427372 }
  });

  const [consent, setConsent] = useState(false);
  const toggleConsent = () => {
    setConsent(!consent);
  };

  const handleSubmit = (data: any): Promise<void> => {
    console.log({ ...data, consent });
    return Promise.resolve();
  };

  return (
    <div className={styles.contacts}>
      <Breadcrumb links={breadcrumbLinks} />
      <h2 className={styles.contacts__heading}>Контакты</h2>
      <p className={styles.contacts__paragraph}>
        Мы всегда рады получать от вас обратную связь и с удовольствием ответим
        на все ваши вопросы. Вы можете заполнить форму обращения ниже или
        написать нам письмо на электронную почту. Наши внимательные и
        компетентные менеджеры окажут любую консультацию и развеют все ваши
        сомнения. Напишите нам прямо сейчас!
      </p>
      <div className={styles.contacts__questionAndMapContainer}>
        <FormProvider {...methods}>
          <QustionForm
            inputs={qustionInputs}
            consent={consent}
            toggleConsent={toggleConsent}
            onSubmit={handleSubmit}
          />
        </FormProvider>
        <ContactMap
          address={mapData.address}
          buisnessHours={mapData.buisnessHours}
          email={mapData.email}
          coordinats={mapData.coordinats}
        />
      </div>
    </div>
  );
};
