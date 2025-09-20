import { cn } from '@heroui/react';
import React, { ElementType, forwardRef } from 'react';

import { Typography, TypographyProps } from '../typography';

type TitleLevel = '1' | '2' | '3';

export interface TitleProps extends TypographyProps {
  /**
   * Determines the size and semantic tag of the title, with options for `h2`,
   * `h3`, or `h4`.
   */
  level?: TitleLevel;
}

const titleLevelTags: Record<TitleLevel, ElementType> = {
  '1': 'h2',
  '2': 'h3',
  '3': 'h4',
};

const titleLevelStyles: Record<TitleLevel, string> = {
  '1': 'text-3xl',
  '2': 'text-xl',
  '3': 'text-lg',
};

/**
 * The Title component is designed to render text as a page or section heading,
 * providing clear hierarchy and structure within content. It supports three
 * levels of emphasis, allowing for flexibility in design while maintaining
 * semantic integrity. By default, it uses `h3` for its semantic HTML element
 * but can be customized via the `level` prop or explicitly with the `Component`
 * prop.
 */
export const Title = forwardRef<HTMLElement, TitleProps>(
  ({ level = '2', className, Component, ...restProps }, ref) => (
    <Typography
      {...restProps}
      ref={ref}
      className={cn(titleLevelStyles[level], className)}
      Component={Component || titleLevelTags[level]}
      weight='2'
    />
  )
);

Title.displayName = 'Title';
