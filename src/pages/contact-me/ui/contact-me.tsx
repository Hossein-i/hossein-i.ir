import { Spacer } from '@heroui/react';

import { ContactMeForm } from './contact-me-form';

import { LargeTitle, ShinyText } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ContactMePageProps {}

export const ContactMePage: React.FC<ContactMePageProps> = () => {
  return (
    <main>
      <section>
        <div className='mx-auto max-w-(--breakpoint-lg) space-y-16 px-4 py-16'>
          <Spacer y={1} />
          <div className='flex flex-col space-y-2'>
            <ShinyText Component='div'>
              <LargeTitle>Let’s talk about your project</LargeTitle>
            </ShinyText>
            <ShinyText>
              We help companies and individuals build out their digital
              presence.
            </ShinyText>
          </div>
          <ContactMeForm />
        </div>
      </section>
    </main>
  );
};
