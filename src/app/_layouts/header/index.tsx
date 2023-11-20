"use client";

import ToggleTheme from "@/app/_components/toggle-theme";
import { navLinks } from "@/app/links";
import {
  Avatar,
  Button,
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
} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FunctionComponent, useState } from "react";

interface HeaderLayoutProps {}

const HeaderLayout: FunctionComponent<HeaderLayoutProps> = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMenuOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll isBordered>
      {/* navbar - start */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/" className="text-xl font-semibold">
            Hossein-i
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* navbar - center | hide "sm" device */}
      <NavbarContent className="hidden gap-2 sm:flex" justify="center">
        {navLinks.map(({ href, name }) => {
          const active = pathname.endsWith(href);

          return (
            <NavbarItem key={`nav-link-${href}`}>
              <Button
                as={Link}
                href={href}
                variant="light"
                color={active ? "primary" : "default"}
              >
                {name}
              </Button>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      {/* navbar - end */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
        <NavbarItem>
          {status === "loading" ? (
            <></>
          ) : session ? (
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  src={session?.user?.image as string}
                  size="sm"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User action">
                <DropdownItem key="profile">
                  <p>Sign in as</p>
                  <p>{session?.user?.email}</p>
                </DropdownItem>
                <DropdownItem
                  variant="flat"
                  color="danger"
                  key="sign_out"
                  onClick={() => confirm("Are you sure?") && signOut()}
                >
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button variant="flat" color="primary" onClick={() => signIn()}>
              Sign in
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* navbar - menu */}
      <NavbarMenu>
        {navLinks.map(({ href, name }) => {
          const active = pathname.endsWith(href);

          return (
            <NavbarMenuItem key={`menu-item-${href}`} className="grid">
              <Button
                as={Link}
                href={href}
                variant="light"
                color={active ? "primary" : "default"}
              >
                {name}
              </Button>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderLayout;
