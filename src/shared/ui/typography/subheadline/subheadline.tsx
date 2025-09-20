import { cn } from '@heroui/react';
import React, { forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

type SubheadlineLevel = '1' | '2';

export interface SubheadlineProps extends TypographyProps {
  /**
   * Determines the size of the subheadline, with `1` being the default and '2'
   * providing a smaller option.
   */
  level?: SubheadlineLevel;
}

const subheadlineLevelStyles: Record<SubheadlineLevel, string> = {
  '1': 'text-base',
  '2': 'text-sm',
};

/**
 * The Subheadline component is designed to render text that serves as a
 * secondary heading or subheading within content. It leverages the Typography
 * component for consistent text styling, offering additional control over the
 * text's size through the `level` prop. By default, it renders as an `<h6>`
 * element but can be customized with the `Component` prop.
 */
export const Subheadline = forwardRef<HTMLElement, SubheadlineProps>(
  ({ level = '1', className, Component, ...restProps }, ref) => (
    <Typography
      {...restProps}
      ref={ref}
      className={cn(subheadlineLevelStyles[level], className)}
      Component={Component || 'h6'}
    />
  )
);

Subheadline.displayName = 'Subheadline';
