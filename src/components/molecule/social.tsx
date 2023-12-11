import { MotionDiv } from '../atom';
import { GitHubIcon, GmailIcon, LinkedInIcon, TwitterXIcon } from '../social';

export const Social = () => {
  return (
    <MotionDiv className='flex py-2 items-center justify-center fixed bottom-0 w-full backdrop-blur-lg'>
      <div className='flex gap-5'>
        <LinkedInIcon className='w-6' />
        <TwitterXIcon className='w-8' />
        <GmailIcon />
        <GitHubIcon />
      </div>
    </MotionDiv>
  );
};
