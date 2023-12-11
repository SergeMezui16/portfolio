import {
  FlagIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react';
import { MotionDiv } from '../atom';

export const ContactCard = () => {
  return (
    <div
      className='min-h-screen flex items-start bg-primary py-20'
      id='contact'
    >
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            Contacts<span className='text-primary-foreground'>.</span>
          </h1>
          <p className='my-1 italic text-primary-foreground'>
            How can I find you?
          </p>
        </MotionDiv>
        <div className='py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 tablet:mb-0'>
            <MotionDiv className='flex gap-3 items-center'>
              <div className='p-4'>
                <PhoneIcon className='text-white w-10 h-10 stroke-1' />
              </div>
              <div className='flex-1 flex flex-col'>
                <h2 className='text-2xl'>Phone</h2>
                <a
                  href='tel:+250791901792'
                  className='text-primary-foreground font-mono'
                >
                  +250 791901792
                </a>
              </div>
            </MotionDiv>
            <MotionDiv className='flex gap-3 items-center'>
              <div className='p-4'>
                <MailIcon className='text-white w-10 h-10 stroke-1' />
              </div>
              <div className='flex-1 flex flex-col'>
                <h2 className='text-2xl'>Email</h2>
                <a
                  href='mailto:sergemezui.dev@gmail.com'
                  className='text-primary-foreground'
                >
                  sergemezui.dev@gmail.com
                </a>
              </div>
            </MotionDiv>
            <MotionDiv className='flex gap-3 items-center'>
              <div className='p-4'>
                <MapPinIcon className='text-white w-10 h-10 stroke-1' />
              </div>
              <div className='flex-1 flex flex-col'>
                <h2 className='text-2xl'>Location</h2>
                <span className='text-primary-foreground'>Kigali, Rwanda</span>
              </div>
            </MotionDiv>
            <MotionDiv className='flex gap-3 items-center'>
              <div className='p-4'>
                <FlagIcon className='text-white w-10 h-10 stroke-1' />
              </div>
              <div className='flex-1 flex flex-col'>
                <h2 className='text-2xl'>Country</h2>
                <span className='text-primary-foreground'>From Gabon</span>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};
