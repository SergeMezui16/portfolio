import Image from 'next/image';
import logo from '@/assets/img/logo.jpg';
import { Navbar } from '.';

export const Header = () => {
  return (
    <div className='fixed w-full backdrop-blur-lg z-40'>
      <div className='container flex justify-between py-5'>
        <div className='z-50'>
          <div className='flex gap-4 justify-start items-center'>
            <Image
              className='w-[30px] h-[30px] tablet:w-[45px] tablet:h-[45px] rounded-full'
              src={logo}
              alt='Logo Serge Mezui'
              width={100}
              height={75}
            />
            <h4 className='text-xl tablet:text-2xl font-bold'>
              Serge Mezui.
            </h4>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};
