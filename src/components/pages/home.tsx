import Image from 'next/image';
import photo from '@/assets/img/photo.png';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MotionDiv } from '../atom';

export const HomeCard = () => {
  return (
    <div
      className='container min-h-screen flex items-center justify-center bg-background'
      id='home'
    >
      <div className='flex flex-col tablet:flex-row'>
        <MotionDiv className='w-full items-end tablet:items-center justify-center flex'>
          <Image
            className='w-[124px] h-[124px] md:w-[184px] md:h-[184px] tablet:w-[344px] tablet:h-[344px] rounded-full shadow-lg shadow-primary mb-8 tablet:mb-0 transition-all hover:scale-105'
            src={photo}
            alt='Logo Serge Mezui'
            width={314}
            height={316}
          />
        </MotionDiv>
        <MotionDiv className='w-full tablet:text-end flex flex-col tablet:gap-3 gap-6 text-center'>
          <h1 className='tablet:text-8xl md:text-6xl text-3xl font-bold'>
            Serge Mezui<span className='text-primary'>.</span>
          </h1>
          <p className='text-lg md:text-xl text-secondary-foreground'>
            Backend Developper. I am a web enthusiast who develops solutions to
            make your life easier and improve your experience through the web.
          </p>
          <p className='text-muted-foreground'>the Freak.</p>
          <Link href='/#service'>
            <Button>Voir plus</Button>
          </Link>
        </MotionDiv>
      </div>
    </div>
  );
};
