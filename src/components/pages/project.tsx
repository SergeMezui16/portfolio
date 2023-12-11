import { cn } from '@/lib/cn';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { MotionDiv } from '../atom';

const data = [
  {
    name: "Transit'Up",
    description:
      'Digital solution to quote and transit parcels around the world',
    technos: ['PHP', 'Javascript', 'SQL'],
    link: 'https://transit-up.com',
    image: '/images/transit-up.png',
  },
  {
    name: 'SpaceCoder',
    description:
      'Share tips and tools to better immerse yourself in digital tool',
    link: 'https://fr.spacecoder.fun',
    technos: ['PHP', 'Javascript', 'SQL'],
    image: '/images/spacecoder.png',
  },
  {
    name: 'Servant',
    description: 'Cameroon independent mass workers census project',
    link: 'https://fr.spacecoder.fun/servant',
    technos: ['Symfony', 'Tailwind', 'SQL'],
    image: '/images/servant.png',
  },
  {
    name: 'SpaceCoder API',
    description: "SpaceCoder's V3 Application Programming Interface",
    technos: ['PHP', 'Open API', 'Swagger UI'],
    link: 'https://fr.spacecoder.fun/api',
    image: '/images/spacecoder-api.png',
  },
  {
    name: 'Akoma Server',
    description:
      'Projet independant de rescencement des servants de messe du cameroun',
    technos: ['TypeScript', 'Next JS', 'PHP', 'SQL', 'React'],
    image: '/images/akoma-server.png',
  },
] satisfies {
  name: string;
  description: string;
  link?: string;
  technos: string[];
  image: string;
}[];

export const ProjectCard = () => {
  return (
    <div
      className='min-h-screen flex items-center bg-primary py-10'
      id='project'
    >
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            My Projects<span className='text-primary-foreground'>.</span>
          </h1>
          <p className='my-1 italic text-primary-foreground'>
            What did you already done?
          </p>
        </MotionDiv>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 tablet:mb-0'>
            {data.map((project) => (
              <MotionDiv
                key={project.name}
                className={cn(
                  'rounded  cursor-pointer flex items-center justify-center text-center group relative'
                )}
              >
                <Image
                  src={project.image}
                  width={1000}
                  height={1000}
                  className='w-full h-full rounded'
                  alt='prjcet'
                />
                <div
                  className={cn(
                    'opacity-0 group-hover:opacity-100 flex flex-col gap-2 absolute rounded w-full h-full  items-center justify-center backdrop-blur-lg bg-gray-900/80 text-secondary transition-all p-4',
                    !project.link && 'group-hover:opacity-50'
                  )}
                >
                  <p>{project.description}</p>
                  {project.link && (
                    <Link href={project.link} target='_blank'>
                      <Button className='rounded-full'>
                        Visit {project.name}{' '}
                        <ExternalLinkIcon className='w-3 h-3 stroke-1' />
                      </Button>
                    </Link>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
