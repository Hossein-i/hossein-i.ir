'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { type ButtonProps, Ripple, useButton } from '@heroui/react';
import { useTheme } from 'next-themes';
import { forwardRef, useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ThemeSwitcherProps extends ButtonProps {}

export const ThemeSwitcher = forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  (props, ref) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const Icon = useMemo(
      () => (theme === 'light' ? MoonIcon : SunIcon),
      [theme]
    );

    const onLightTheme = () => setTheme('light');
    const onDarkTheme = () => setTheme('dark');

    const toggleTheme = theme === 'light' ? onDarkTheme : onLightTheme;

    const {
      domRef,
      //   children,
      //   spinnerSize,
      //   spinner = <Spinner color="current" size={spinnerSize} />,
      //   spinnerPlacement,
      //   startContent,
      //   endContent,
      //   isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      ...props,
      variant: 'light',
      isIconOnly: true,
      onPress: toggleTheme,
    });
    const { ripples, onClear } = getRippleProps();

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <button ref={domRef} {...getButtonProps()}>
        {/* {startContent} */}
        {/* {isLoading && spinnerPlacement === "start" && spinner} */}
        {/* {children} */}
        {/* {isLoading && spinnerPlacement === "end" && spinner} */}
        {/* {endContent} */}
        <Icon className='h-6 w-6' />
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  }
);

ThemeSwitcher.displayName = 'ThemeSwitcherUI';
