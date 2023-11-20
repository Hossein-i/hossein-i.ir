import { FunctionComponent } from "react";
import ContainerLayout from "../container";
import { Button, Card, CardBody, Input } from "@nextui-org/react";

interface SubscribeLayoutProps {}

const SubscribeLayout: FunctionComponent<SubscribeLayoutProps> = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="pb-16">
          <Card classNames={{ base: "bg-primary text-white light" }}>
            <CardBody>
              <div className="grid gap-8 p-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Subscribe to my newsletter
                  </h2>
                  <p className="opacity-75">Get updates on my new notes</p>
                </div>

                <Input
                  placeholder="your@email.com"
                  endContent={<Button>Subscribe</Button>}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default SubscribeLayout;
