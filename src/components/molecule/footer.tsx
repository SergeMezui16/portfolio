import { MotionDiv, SergeMezui } from '../atom';
import data from '@/assets/img/pasker.png';
import { useIntlayer } from 'react-intlayer';

export const Footer = () => {
  const content = useIntlayer('app');
  return (
    <div className="h-1/2 pb-10 bg-card border-t">
      <MotionDiv className="container p-10 flex flex-col gap-4 tablet:flex-row justify-between items-center">
        <SergeMezui />
        <div className="font-mono flex items-center gap-2">
          <span>{content.footer.powered}</span>
          <img src={data} alt="Pasker Logo" className="w-32" />
        </div>
      </MotionDiv>
    </div>
  );
};
