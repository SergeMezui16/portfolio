import {
  AppWindowIcon,
  LucideIcon,
  PaletteIcon,
  PointerIcon,
  ServerIcon,
  UsersIcon,
  WebcamIcon,
} from 'lucide-react';
import { MotionDiv } from '../atom';

const data = [
  {
    id: 'ehrej',
    title: 'Personalized website design',
    icon: WebcamIcon,
    content:
      'Get your own customized sites like this one to make a name for yourself on the web market.',
  },
  {
    id: 'ehredazdj',
    title: 'Web App Design',
    icon: AppWindowIcon,
    content: 'Let us create web applications to make everyday tasks easier.',
  },
  {
    id: 'ehrazdzaej',
    title: 'REST API design',
    icon: ServerIcon,
    content:
      'Have your APIs designed to enable you to centralize the business logic of your projects and manage your databases.',
  },
  {
    id: 'eazdlkhrej',
    title: 'Site design',
    icon: PaletteIcon,
    content:
      'Visualize the final result of your web sites or applications through simple, interactive mock-ups.',
  },
  {
    id: 'zadazdl',
    title: 'Creation of a showcase site',
    icon: PointerIcon,
    content:
      'Have a showcase site created to enable you to present your products, achievements, etc. to everyone.',
  },
  {
    id: 'azdpo',
    title: 'Working in a project development team',
    icon: UsersIcon,
    content: 'Invite me to a web development project.',
  },
] satisfies { id: string; title: string; content: string; icon: LucideIcon }[];

export const Servicecard = () => {
  return (
    <div
      className='min-h-screen flex items-center bg-primary py-10'
      id='service'
    >
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            My Services<span className='text-primary-foreground'>.</span>
          </h1>
          <p className='my-1 italic text-primary-foreground'>
            How can you help me?
          </p>
          <div className='py-4'>
            I&apos;m a young student with a passion for computer science, more
            specifically web development. I develop solutions that solve
            problems for people all over the world and simplify their everyday
            life experience through the internet. I like movies, video games and
            running.
          </div>
        </MotionDiv>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 tablet:mb-0'>
            {data.map(({ title, content, id, icon: Icon }) => (
              <MotionDiv
                key={id}
                className='max-w-md flex gap-2 backdrop-blur-lg mt-4'
              >
                <div className='m-2'>
                  <Icon className='w-8 h-8 stroke-1 text-primary-foreground' />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl font-bold'>{title}</h1>
                  <p className='text-primary-foreground'>{content}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
