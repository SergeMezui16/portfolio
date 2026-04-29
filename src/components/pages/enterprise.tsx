import { useRef } from 'react';
import autoplay from 'embla-carousel-autoplay';
import { useIntlayer } from 'react-intlayer';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { MotionDiv } from '../atom';

const data = [
  { name: 'It-Grafik', image: '/images/it-grafik-logo.png' },
  { name: "Transit'Up", image: '/images/transit-up-logo.png' },
  { name: 'Alphocine Water', image: '/images/alphoncine-logo.png' },
] satisfies { name: string; image: string }[];

export const EnterpriseCard = () => {
  const plugin = useRef(autoplay({ delay: 2000, stopOnInteraction: false }));
  const t = useIntlayer('enterprise');

  return (
    <div className="min-h-screen flex items-center py-10" id="enterprise">
      <div className="container">
        <MotionDiv className="my-10 text-center tablet:text-start">
          <h1 className="text-6xl font-bold break-all">
            {t.title}<span className="text-primary">.</span>
          </h1>
          <p className="my-1 italic text-primary">{t.question}</p>
        </MotionDiv>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="mx-auto w-fit"
        >
          <CarouselContent>
            {data.map((e) => (
              <CarouselItem key={e.name} className="flex flex-col gap-5 justify-center items-center">
                <img
                  src={e.image}
                  className="rounded w-[200px]"
                  alt={e.name}
                  title={e.name}
                />
                <p className="font-bold italic text-muted-foreground">{e.name}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
