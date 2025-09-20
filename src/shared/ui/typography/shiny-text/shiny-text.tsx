import { cn } from '@heroui/react';
import React, { forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

export interface ShinyTextProps extends Omit<TypographyProps, 'plain'> {
  isDisabled?: boolean;
  speed?: number;
}

export const ShinyText = forwardRef<HTMLElement, ShinyTextProps>(
  (
    {
      isDisabled = false,
      speed = 5,
      className,
      Component,
      style,
      ...restProps
    },
    ref
  ) => {
    const animationDuration = `${speed}s`;

    return (
      <Typography
        {...restProps}
        ref={ref}
        className={cn(
          'from-foreground/0 via-foreground to-foreground/0 inline-block bg-linear-120 from-40% via-50% to-60% bg-size-[200%_100%] bg-clip-text text-[#4a4a4aa4] dark:text-[#b5b5b5a4]',
          !isDisabled && 'animate-shine',
          className
        )}
        Component={Component || 'p'}
        style={{ animationDuration: animationDuration, ...style }}
      />
    );
  }
);

ShinyText.displayName = 'ShinyText';
