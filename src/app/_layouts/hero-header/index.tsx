import ContainerLayout from "@/app/_layouts/container";
import { socialLinks } from "@/app/links";
import { Button, Image, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface HeroHeaderLayoutProps {}

const HeroHeaderLayout: FunctionComponent<HeroHeaderLayoutProps> = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-8 py-16 sm:flex sm:flex-row-reverse">
          <div className="min-w-max">
            <Image src="/profile.jpg" alt="" width={175} height={175} />
          </div>
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold">👋🏻 Hey, I’m Hossein</h1>
            <p className="text-gray-500">
              Welcome to my website. I’m web developer from Iran. And here, I
              share what I’ve been working on recently and things I learned
              along the way.
            </p>

            <ul className="flex flex-wrap gap-4">
              {socialLinks.map(({ href, name }) => (
                <li key={`social-link-${href}`}>
                  <Button as={Link} href={href} isExternal showAnchorIcon>
                    {name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HeroHeaderLayout;
