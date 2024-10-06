import { cn } from '@/lib/cn';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import { MotionDiv } from '../atom';
import { getScopedI18n } from "@/locales/server";


export const ProjectCard = async () => {
  const t = await getScopedI18n("project");

  const data = [
    {
      name: t("projects.transitup.name"),
      description: t("projects.transitup.description"),
      technos: ['PHP', 'Javascript', 'SQL'],
      link: 'https://transit-up.com',
      image: '/images/transit-up.png',
    },
    {
      name: t("projects.spacecoder.name"),
      description: t("projects.spacecoder.description"),
      link: 'https://fr.spacecoder.fun',
      technos: ['PHP', 'Javascript', 'SQL'],
      image: '/images/spacecoder.png',
    },
    {
      name: t("projects.servant.name"),
      description: t("projects.servant.description"),
      link: 'https://fr.spacecoder.fun/servant',
      technos: ['Symfony', 'Tailwind', 'SQL'],
      image: '/images/servant.png',
    },
    {
      name: t("projects.spacecoderapi.name"),
      description: t("projects.spacecoderapi.description"),
      technos: ['PHP', 'Open API', 'Swagger UI'],
      link: 'https://fr.spacecoder.fun/api',
      image: '/images/spacecoder-api.png',
    },
    {
      name: t("projects.akomaserver.name"),
      description: t("projects.akomaserver.description"),
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


  return (
    <div
      className='min-h-screen flex items-center bg-primary py-10'
      id='project'
    >
      <div className='container'>
        <MotionDiv className='my-10 text-center tablet:text-start'>
          <h1 className='text-6xl font-bold'>
            {t("title")}<span className='text-primary-foreground'>.</span>
          </h1>
          <p className='my-1 italic text-primary-foreground'>
            {t("question")}
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
                        {t("visit")} {project.name}{' '}
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
