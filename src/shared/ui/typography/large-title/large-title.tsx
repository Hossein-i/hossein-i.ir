import { cn } from '@heroui/react';
import React, { forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

export type LargeTitleProps = TypographyProps;

/**
 * The LargeTitle component is designed for prominent display text, typically
 * used for major headings or titles within an application. It encapsulates the
 * Typography component's features, offering extensive styling and semantic
 * customization options while defaulting to an `<h1>` HTML element. This choice
 * of default component underscores the importance and hierarchy of the text it
 * encapsulates, making it suitable for primary page titles or significant
 * headings.
 */
export const LargeTitle = forwardRef<HTMLElement, LargeTitleProps>(
  ({ className, Component, ...restProps }, ref) => (
    <Typography
      {...restProps}
      ref={ref}
      Component={Component || 'h1'}
      className={cn('text-4xl', className)}
      weight='2'
    />
  )
);

LargeTitle.displayName = 'LargeTitle';
