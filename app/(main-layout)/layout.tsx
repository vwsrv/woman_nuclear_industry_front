import cn from 'classnames';
import classes from './styles.module.scss';
import { Header } from '@/shared/ui/header/header';
import logo from '@/shared/images/for-header/Logo 1.png';
import { Footer } from '@/shared/ui/footer';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={cn(classes.mainLayout)}>
      <div className={cn(classes.mainLayoutWrapper)}>
        <Header
          image={logo}
          isLoggedIn={false}
          links={[
            { title: 'Колба', link: '/' },
            { title: 'Амбассадоры', link: '/' },
            { title: 'Лауреаты', link: '/' },
            { title: 'Новости', link: '/' },
            { title: 'Медиатека', link: '/' },
            { title: 'Контакты', link: '/' }
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
            { title: 'Партнеры', link: '/' },
            { title: 'Объединение', link: '/' },
            { title: 'Территория присутствия', link: '/' },
            { title: 'Мероприятия', link: '/' },
            { title: 'Новости', link: '/' },
            { title: 'Проекты', link: '/' },
            { title: 'Контакты', link: '/' }
          ],
          [
            { title: 'О сообществе', link: '/' },
            { title: 'Команда', link: '/' },
            { title: 'Амбассадоры', link: '/' },
            { title: 'Международный совет', link: '/' },
            { title: 'Вопрос - ответ', link: '/' }
          ]
        ]}
      />
    </div>
  );
};

export default MainLayout;
