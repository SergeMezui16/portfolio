import { cn } from '@/lib/cn';
import {
  CogIcon,
  Layers3Icon,
  LayoutIcon,
  LucideIcon,
  ServerIcon,
} from 'lucide-react';
import { MotionDiv } from '../atom';

const data = [
  {
    title: 'Design',
    description:
      'I make interactive website mock-ups to visualize how the final websites will look.',
    icon: Layers3Icon,
    technos: ['Figma', 'Adobe XD'],
  },
  {
    title: 'Back-end',
    description:
      'I build APIs and websites with back-end technologies and/or create databases, authentication systems and server-side applications.',
    icon: ServerIcon,
    technos: ['Symfony', 'API Platform', 'Nest JS', 'Node JS'],
  },
  {
    title: 'Front-end',
    description:
      'I set up SPA (Single Page Application) type applications or fast, interactive applications.',
    icon: LayoutIcon,
    technos: ['Next JS', 'React JS', 'Vanilla Javascript', 'TypeScript'],
  },
  {
    title: 'Others',
    description:
      'I also know how to use tools that help me do my job better. I use technologies common to several types of project to adapt to standards.',
    icon: CogIcon,
    technos: ['GitHub & Git', 'Linux', 'Apache Server', 'Java'],
  },
] satisfies {
  title: string;
  description: string;
  icon: LucideIcon;
  technos: string[];
}[];

export const SkillCard = () => {
  return (
    <div className='container min-h-screen flex items-center py-16' id='skill'>
      <div className=''>
        <MotionDiv className='text-center tablet:text-start p-5'>
          <h1 className='text-6xl font-bold'>
            My Skills<span className='text-primary'>.</span>
          </h1>
          <p className='my-1 italic text-primary'>What do you know?</p>
          <div className='py-4'>
            I&apos;m an autonomous, creative and professional developer.
            Passionate about backend work (database administration, API design,
            server administration...) I can also take on front-end tasks (web
            integration, ...) or model building.
          </div>
        </MotionDiv>
        <MotionDiv className='flex flex-col tablet:flex-row tablet:mt-5 border rounded my-4'>
          {data.map(({ icon: Icon, technos, title, description }, i) => (
            <MotionDiv
              key={title}
              className={cn(
                'flex flex-col w-full items-center gap-2 text-center p-2',
                i !== 0 && 'border-t tablet:border-t-0 tablet:border-l'
              )}
            >
              <div className='bg-thirdly rounded-full w-16 h-16 flex items-center justify-center'>
                <Icon className='stroke-1 w-10 h-10' />
              </div>
              <h2 className='text-2xl font-bold'>
                {title}
                <span className='text-primary'>.</span>
              </h2>
              <div className='p-5'>
                <p>{description}</p>
                <h3 className='text-xl font-bold my-4 text-primary'>Technos</h3>
                <p className='flex flex-col gap-1'>
                  {technos.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </p>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </div>
  );
};
