'use client';

import {
  Avatar,
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { navLinks } from '@/shared/config/app';
import { ThemeSwitcher } from '@/shared/ui/theme-switcher';
import { ShinyText } from '@/shared/ui/typography';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      className='fixed bg-transparent p-4'
      classNames={{
        wrapper: cn(
          'shadow-medium rounded-large bg-background/80 dark:bg-background/20 backdrop-blur-md backdrop-saturate-150'
        ),
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link color='foreground' href='/' className='text-xl font-semibold'>
            <ShinyText Component='p'>Hossein-i</ShinyText>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden gap-2 sm:flex' justify='center'>
        {navLinks.map(({ href, name }) => {
          const active = pathname?.endsWith(href);

          return (
            <NavbarItem key={`nav-link-${href}`}>
              <Button as={Link} href={href} variant={active ? 'flat' : 'light'}>
                <ShinyText Component='p'>{name}</ShinyText>
              </Button>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          {status === 'loading' ? (
            <></>
          ) : session ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  src={session?.user?.image as string}
                  size='sm'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='User action'>
                <DropdownItem key='profile'>
                  <p>Sign in as</p>
                  <p>{session?.user?.email}</p>
                </DropdownItem>
                <DropdownItem
                  variant='flat'
                  color='danger'
                  key='sign_out'
                  onClick={() => confirm('Are you sure?') && signOut()}
                >
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button variant='flat' onPress={() => signIn()}>
              <ShinyText Component='span'>Sign in</ShinyText>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-transparent py-6'>
        <div className='shadow-medium rounded-large bg-background/80 dark:bg-background/20 flex h-full flex-col justify-center gap-2 backdrop-blur-md backdrop-saturate-150'>
          {navLinks.map(({ href, name }) => {
            const active = pathname?.endsWith(href);

            return (
              <NavbarMenuItem key={`menu-item-${href}`} className='grid'>
                <Button
                  as={Link}
                  href={href}
                  variant={active ? 'flat' : 'light'}
                >
                  <ShinyText Component='span'>{name}</ShinyText>
                </Button>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
