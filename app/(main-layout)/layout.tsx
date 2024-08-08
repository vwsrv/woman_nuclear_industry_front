import cn from 'classnames';
import classes from './styles.module.scss';
import { Header } from '@/shared/ui/header/header';
import logo from '@/shared/images/for-header/Logo 1.png';
import { Footer } from '@/features/footer';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(classes.mainLayout)}>
      <div className={cn(classes.mainLayoutWrapper)}>
        <Header
          image={logo}
          isLoggedIn={false}
          links={[
            { title: 'Колба', link: '/flask' },
            { title: 'Амбассадоры', link: '/ambassadors' },
            { title: 'Лауреаты', link: '/laureates' },
            { title: 'Новости', link: '/news' },
            { title: 'Медиатека', link: '/mediateka' },
            { title: 'Контакты', link: '/contacts' }
          ]}
        />
        {children}
      </div>
      <Footer
        className="footer"
        copyright={{
          text: '© Фонд поддержки и развития женских инициатив «Объединение женщин атомной отрасли» 2018',
          year: 2018
        }}
        contacts={{
          address:
            'Москва 125424, г. Москва, Волоколамское шоссе, д. 108, оф. 19',
          email: 'info@win-russia.com'
        }}
        items={[
          [
            { title: 'Территория присутствия', link: '/territory-presence' },
            { title: 'Новости', link: '/news' },
            { title: 'Проекты', link: '/projects' },
            { title: 'Контакты', link: '/contacts' }
          ],
          [
            { title: 'О сообществе', link: '/about' },
            { title: 'Команда', link: '/team' },
            { title: 'Амбассадоры', link: '/ambassadors' },
            { title: 'Вопрос - ответ', link: '/question-answer' }
          ]
        ]}
      />
    </div>
  );
};

export default MainLayout;
