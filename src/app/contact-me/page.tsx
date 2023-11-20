import { FunctionComponent } from "react";
import ContainerLayout from "../_layouts/container";
import ContactFormLayout from "./_layouts/contact-form";

interface ContactMePageProps {}

const ContactMePage: FunctionComponent<ContactMePageProps> = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="grid gap-16 py-16">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">
              Let’s talk about your project
            </h1>
            <p className="text-gray-500">
              We help companies and individuals build out their digital
              presence.
            </p>
          </div>
          <ContactFormLayout />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ContactMePage;
