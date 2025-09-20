import { HeroHeader } from './hero-header';
import { Subscribe } from './subscribe';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RootPageProps {}

export const RootPage: React.FC<RootPageProps> = () => {
  return (
    <main className='space-y-8'>
      <HeroHeader />
      <Subscribe />
    </main>
  );
};
