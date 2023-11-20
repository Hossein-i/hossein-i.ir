"use client";

import { Button, Input, Link, Textarea } from "@nextui-org/react";
import { FormEvent, FunctionComponent } from "react";

interface ContactFormLayoutProps {}

const ContactFormLayout: FunctionComponent<ContactFormLayoutProps> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-8">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" variant="bordered" />
            <Input label="Email" variant="bordered" />
          </div>
          <Textarea label="Message" variant="bordered" />
        </div>
        <div className="grid gap-4">
          <Button type="submit" color="primary">
            Let’s talk
          </Button>
          <p className="text-xs text-gray-500">
            By submitting this form, I agree to the{" "}
            <Link className="text-xs">privacy policy</Link>.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactFormLayout;
