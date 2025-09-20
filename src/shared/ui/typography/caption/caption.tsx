import { cn } from '@heroui/react';
import React, { forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

type CaptionLevel = '1' | '2';

export interface CaptionProps extends Omit<TypographyProps, 'plain'> {
  /** The size level of the caption, influencing its styling and typography size. */
  level?: CaptionLevel;
}

const captionLevelStyles: Record<CaptionLevel, string> = {
  '1': 'text-sm',
  '2': 'text-xs',
};

/**
 * The Caption component is a text wrapper that applies specific typographic
 * styles, based on the provided `level` prop. It's built on top of the
 * Typography component, ensuring consistent text styling across the
 * application. It primarily serves for text that acts as a small, descriptive
 * label or annotation.
 */
export const Caption = forwardRef<HTMLElement, CaptionProps>(
  ({ level = '1', className, Component, ...restProps }, ref) => (
    <Typography
      {...restProps}
      ref={ref}
      className={cn(captionLevelStyles[level], className)}
      Component={Component || 'span'}
    />
  )
);

Caption.displayName = 'Caption';
