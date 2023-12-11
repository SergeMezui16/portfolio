import Image from "next/image";
import pasker from '@/assets/img/pasker.png';
import { MotionDiv } from "../atom";

export const Footer = () => {
  return (
    <div className='h-1/2 pb-20 bg-card'>
      <MotionDiv className='container p-10 flex flex-col gap-4 tablet:flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold'>
          Serge Mezui<span className='text-primary'>.</span>
        </h1>
        <div className='font-mono flex items-center gap-2'>
          <span>Powererd By</span>
          <Image src={pasker} alt='Pasker Logo' className='w-32' />
        </div>
      </MotionDiv>
    </div>
  );
};
