import React, { FunctionComponent } from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
}

const ContainerLayout: FunctionComponent<ContainerLayoutProps> = ({
  children,
}) => {
  return <div className="mx-auto max-w-screen-lg px-6">{children}</div>;
};

export default ContainerLayout;
