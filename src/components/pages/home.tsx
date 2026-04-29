import { useIntlayer } from 'react-intlayer';
import { Button } from '../ui/button';
import { MotionDiv } from '../atom';
import photoOriginal from '@/assets/img/photo-original.png';
import { Link } from '@tanstack/react-router';

export const HomeCard = () => {
  const t = useIntlayer('home');

  return (
    <div className="container min-h-screen flex items-center justify-center" id="home">
      <div className="flex flex-col tablet:flex-row">
        <MotionDiv className="w-full items-end tablet:items-center justify-center flex">
          <img
            className="w-[124px] h-[124px] md:w-[184px] md:h-[184px] tablet:w-[344px] tablet:h-[344px] rounded-full shadow-lg shadow-primary mb-8 tablet:mb-0 transition-all hover:scale-105 object-cover"
            src={photoOriginal}
            alt="Serge Mezui"
            width={1080}
            height={1080}
          />
        </MotionDiv>
        <MotionDiv className="w-full tablet:text-end flex flex-col tablet:gap-3 gap-6 text-center">
          <h1 className="tablet:text-8xl md:text-6xl text-3xl font-bold">
            {t.name}<span className="text-primary">.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground">{t.bio}</p>
          <p className="text-muted-foreground">{t.nickName}</p>
          <div className="flex gap-2 tablet:justify-end justify-center">
            <Link to="/cv" target="_blank" rel="noopener noreferrer">
              <Button>{t.cv}</Button>
            </Link>
            <Link to="#service">
              <Button variant="secondary">{t.next}</Button>
            </Link>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};
