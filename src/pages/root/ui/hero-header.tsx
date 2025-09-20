'use client';

import { Button, Card, CardBody, Link, Spacer } from '@heroui/react';
import Image from 'next/image';

import { socialLinks } from '@/shared/config/app';
import { LetterGlitch } from '@/shared/ui/letter-glitch';
import { LargeTitle, ShinyText } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HeroHeaderProps {}

export const HeroHeader: React.FC<HeroHeaderProps> = () => {
  return (
    <section className='relative h-screen'>
      <LetterGlitch />
      <div className='absolute top-1/2 left-1/2 z-10 w-full max-w-(--breakpoint-lg) -translate-x-1/2 -translate-y-1/2 p-4'>
        <Spacer y={16} />
        <div className='flex flex-col gap-8 sm:flex-row-reverse'>
          <div className='min-w-max'>
            <Image
              src='/assets/images/profile.jpg'
              alt='profile'
              width={256}
              height={256}
              className='rounded-medium mx-auto aspect-square object-cover'
              priority
            />
          </div>
          <Card className='p-4' isBlurred>
            <CardBody className='text-start'>
              <div className='flex h-full flex-col justify-center space-y-8'>
                <div className='space-y-2'>
                  <ShinyText Component='div'>
                    <LargeTitle>👋🏻 Hey, I’m Hossein</LargeTitle>
                  </ShinyText>
                  <ShinyText>
                    Welcome to my website. I’m web developer from Iran. And
                    here, I share what I’ve been working on recently and things
                    I learned along the way.
                  </ShinyText>
                </div>
                <ul className='flex flex-wrap gap-2'>
                  {socialLinks.map(({ href, name }) => (
                    <li key={`social-link-${href}`}>
                      <Button
                        as={Link}
                        href={href}
                        variant='flat'
                        isExternal
                        showAnchorIcon
                      >
                        <ShinyText Component='span'>{name}</ShinyText>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
