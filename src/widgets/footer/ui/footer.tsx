'use client';

import { Button, Card, CardBody, Link } from '@heroui/react';
import { FunctionComponent } from 'react';
import { SocialIcon } from 'react-social-icons';

import { navLinks, socialLinks } from '@/shared/config/app';
import { Squares } from '@/shared/ui/squares';
import { ShinyText } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className='relative h-80'>
      <Squares />
      <div className='absolute top-1/2 left-1/2 w-full max-w-(--breakpoint-lg) -translate-x-1/2 -translate-y-1/2 px-4'>
        <Card className='p-4' isBlurred>
          <CardBody className='text-start'>
            <div className='flex flex-col gap-4'>
              <nav>
                <ul className='flex flex-wrap justify-center gap-2'>
                  {navLinks.map(({ href, name }) => (
                    <li key={`f-nav-link-${href}`}>
                      <Button as={Link} href={href} variant='light'>
                        <ShinyText Component='span'>{name}</ShinyText>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav>
                <ul className='flex flex-wrap justify-center gap-4'>
                  {socialLinks.map(({ href, name }) => (
                    <li key={`f-nav-link-${href}`}>
                      <Button
                        as={Link}
                        href={href}
                        variant='light'
                        isIconOnly
                        isExternal
                      >
                        <SocialIcon
                          as='div'
                          network={name.toLowerCase()}
                          bgColor='#0000'
                          fgColor='currentColor'
                        />
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
              <ShinyText className='text-center text-xs'>
                © 2023 Hossein-i Media, Inc. All rights reserved.
              </ShinyText>
            </div>
          </CardBody>
        </Card>
      </div>
    </footer>
  );
};
