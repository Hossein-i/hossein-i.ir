'use client';

import { Button, Input, Link, Textarea } from '@heroui/react';

import { ShinyText } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ContactMeFormProps {}

export const ContactMeForm: React.FC<ContactMeFormProps> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-8'>
        <div className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Input label='Name' variant='flat' />
            <Input label='Email' variant='flat' />
          </div>
          <Textarea label='Message' variant='flat' />
        </div>
        <div className='space-y-4'>
          <Button type='submit' variant='flat' fullWidth>
            Let’s talk
          </Button>
          <ShinyText className='text-xs'>
            By submitting this form, I agree to the{' '}
            <Link color='foreground' className='text-xs'>
              privacy policy
            </Link>
            .
          </ShinyText>
        </div>
      </div>
    </form>
  );
};
