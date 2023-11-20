"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import {
  Button,
  SwitchProps,
  VisuallyHidden,
  useSwitch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { FunctionComponent } from "react";

const ToggleTheme: FunctionComponent<SwitchProps> = (props) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = theme?.includes("light") ? "dark" : "light";
  const { Component, isSelected, getBaseProps, getInputProps } = useSwitch({
    ...props,
    isSelected: !theme?.includes("light"),
  });

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Button isIconOnly variant="light" onClick={() => setTheme(toggleTheme)}>
        {isSelected ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </Button>
    </Component>
  );
};

export default ToggleTheme;
