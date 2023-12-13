import { IconProps } from '../icons';

export const GmailIcon = (props: IconProps) => (
  <a
    href='mailto:sergemezui.dev@gmail.com'
    className='w-10 h-10 tablet:w-14 tablet:h-14 cursor-pointer bg-primary rounded-full flex items-center justify-center'
  >
    <svg
      fill='#FFFFFF'
      width='24px'
      viewBox='0 0 32 32'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>Gmail</title>
      <path d='M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z'></path>
    </svg>
  </a>
);
