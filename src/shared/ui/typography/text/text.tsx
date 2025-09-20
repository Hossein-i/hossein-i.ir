import { cn } from '@heroui/react';
import React, { forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

export type TextProps = Omit<TypographyProps, 'plain'>;

/**
 * Text component is designed for general-purpose text rendering, offering a
 * wide range of typographic options. It extends the Typography component,
 * inheriting its flexibility and styling capabilities. This component is ideal
 * for paragraphs, labels, or any textual content, providing consistent styling
 * across the application.
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, Component, ...restProps }, ref) => (
    <Typography
      {...restProps}
      ref={ref}
      className={cn('text-base', className)}
      Component={Component || 'p'}
    />
  )
);

Text.displayName = 'Text';
