import { Navbar } from '.';
import { SergeMezui } from '@/components/atom';
import data from '@/assets/img/logo.jpg';

export const Header = () => {
  return (
    <div className="fixed w-full backdrop-blur-lg z-40">
      <div className="container flex justify-between py-5">
        <div className="z-50">
          <div className="flex gap-4 justify-start items-center">
            <img
              className="w-7.5 h-7.5 tablet:w-[45px] tablet:h-[45px] rounded-full"
              src={data}
              alt="Logo Serge Mezui"
              width={100}
              height={75}
            />
            <SergeMezui />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};
