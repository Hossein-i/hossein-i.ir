import { Spinner } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface RootLoadingProps {}

const RootLoading: FunctionComponent<RootLoadingProps> = () => {
  return (
    <div className="fixed inset-0 z-10 h-full w-full">
      <div className="flex h-full w-full items-center justify-center bg-background">
        <Spinner label="Loading..." color="primary" />
      </div>
    </div>
  );
};

export default RootLoading;
