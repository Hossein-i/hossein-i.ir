'use client';

import { Button, Link } from '@heroui/react';

import { ShinyText, Title } from '@/shared/ui/typography';

export interface RecentNotesProps {
  notes: [];
}

export const RecentNotes: React.FC<RecentNotesProps> = (props) => {
  const { notes } = props;

  return (
    <section>
      <div className='container mx-auto space-y-8 px-4'>
        <div className='flex items-center justify-between'>
          <ShinyText Component='div'>
            <Title level='1'>Recent Notes</Title>
          </ShinyText>
          <Button as={Link} variant='flat' href='/notes'>
            <ShinyText Component='span'>All Notes</ShinyText>
          </Button>
        </div>
        <ul className='grid gap-4 md:grid-cols-3'>
          {notes.slice(0, 3).map((note) => (
            <li key={`recent-note-${note}`}></li>
          ))}
        </ul>
      </div>
    </section>
  );
};
