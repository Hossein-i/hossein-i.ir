'use client';

import { Button, Card, CardBody, cn, Input } from '@heroui/react';

import { ShinyText, Title } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SubscribeProps {}

export const Subscribe: React.FC<SubscribeProps> = () => {
  return (
    <section>
      <div className='mx-auto max-w-(--breakpoint-lg) px-4 pb-16'>
        <Card>
          <CardBody>
            <div className='space-y-8 p-4'>
              <div className='flex flex-col space-y-2'>
                <ShinyText Component='div'>
                  <Title level='1'>Subscribe to my newsletter</Title>
                </ShinyText>
                <ShinyText>Get updates on my new notes</ShinyText>
              </div>
              <Input
                placeholder='your@email.com'
                classNames={{ inputWrapper: cn('h-auto py-2') }}
                endContent={
                  <Button>
                    <ShinyText Component='span'>Subscribe</ShinyText>
                  </Button>
                }
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
