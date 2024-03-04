import { cn } from '@/lib/cn';
import Image from 'next/image';
import { MotionDiv } from '../atom';

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
  return (
    <div className='min-h-screen flex items-center py-10' id='enterprise'>
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            They trusted me<span className='text-primary'>.</span>
          </h1>
          <p className='my-1 italic text-primary'>Who have you worked with?</p>
        </MotionDiv>
        <div className=''>  
          <div className='flex flex-col gap-20 items-center justify-center md:flex-row'>
            {data.map((e) => (
              <MotionDiv key={e.name} className={cn('')}>
                <Image
                  src={e.image}
                  width={1000}
                  height={1000}
                  className='rounded w-[200px]'
                  alt={e.name}
                  title={e.name}
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
