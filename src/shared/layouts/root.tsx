import { AppProvider } from '@/app/providers';
import '@/app/styles';
import { comfortaa } from '@/shared/fonts/comfortaa';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RootLayoutProps extends React.PropsWithChildren {}

export const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html lang='en' dir='ltr'>
      <body className={comfortaa.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
};
