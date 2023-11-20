import ContainerLayout from "@/app/_layouts/container";
import { navLinks, socialLinks } from "@/app/links";
import { getAllTags } from "@/lib/docs";
import { Button, Divider, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { SocialIcon } from "react-social-icons";

interface FooterLayoutProps {}

const FooterLayout: FunctionComponent<FooterLayoutProps> = () => {
  return (
    <footer>
      <ContainerLayout>
        <Divider className="mb-16" />
        <div className="grid gap-4 pb-16">
          <nav className="flex justify-center">
            <ul className="flex flex-wrap gap-2">
              {navLinks.map(({ href, name }) => (
                <li key={`f-nav-link-${href}`}>
                  <Button as={Link} href={href} variant="light">
                    {name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex justify-center">
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map(({ href, name }) => (
                <li key={`f-nav-link-${href}`}>
                  <Button
                    as={Link}
                    href={href}
                    variant="light"
                    isIconOnly
                    isExternal
                  >
                    <SocialIcon
                      as="div"
                      network={name.toLowerCase()}
                      bgColor="#0000"
                      fgColor="currentColor"
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center text-xs text-gray-500">
            © 2023 Hossein-i Media, Inc. All rights reserved.
          </p>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default FooterLayout;
