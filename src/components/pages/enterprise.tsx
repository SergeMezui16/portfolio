'use client';

import Image from 'next/image';
import { MotionDiv } from '../atom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const data = [
  {
    name: 'It-Grafik',
    image: '/images/it-grafik-logo.png',
  },
  {
    name: "Transit'Up",
    image: '/images/transit-up-logo.png',
  },
  {
    name: 'Alphocine Water',
    image: '/images/alphoncine-logo.png',
  },
] satisfies {
  name: string;
  image: string;
}[];

export const EnterpriseCard = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className='min-h-screen flex items-center py-10' id='enterprise'>
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            They trusted me<span className='text-primary'>.</span>
          </h1>
          <p className='my-1 italic text-primary'>Who have you worked with?</p>
        </MotionDiv>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className='mx-auto w-fit'
        >
          <CarouselContent className=''>
            {data.map((e) => (
              <CarouselItem
                key={e.name}
                className='flex flex-col gap-5 justify-center items-center'
              >
                <Image
                  src={e.image}
                  width={1000}
                  height={1000}
                  className='rounded w-[200px]'
                  alt={e.name}
                  title={e.name}
                />
                <p className='font-bold italic text-muted-foreground'>
                  {e.name}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
