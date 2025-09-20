'use client';

import { cn } from '@heroui/react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { Typography, TypographyProps } from '../typography';

export interface CountUpTextProps extends Omit<TypographyProps, 'plain'> {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export const CountUpText = forwardRef<HTMLElement, CountUpTextProps>(
  (
    {
      to,
      from = 0,
      direction = 'up',
      delay = 0,
      duration = 2,
      startWhen = true,
      separator = '',
      onStart,
      onEnd,
      className,
      Component,
      ...restProps
    },
    ref
  ) => {
    const localRef = useRef<HTMLElement | null>(null);
    const mergedRefs = mergeRefs([localRef, ref]);

    const motionValue = useMotionValue(direction === 'down' ? to : from);

    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
      damping,
      stiffness,
    });

    const isInView = useInView(localRef, { once: true, margin: '0px' });

    const getDecimalPlaces = (num: number): number => {
      const str = num.toString();
      if (str.includes('.')) {
        const decimals = str.split('.')[1];
        if (parseInt(decimals) !== 0) {
          return decimals.length;
        }
      }
      return 0;
    };

    const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

    useEffect(() => {
      if (localRef.current) {
        localRef.current.textContent = String(direction === 'down' ? to : from);
      }
    }, [from, to, direction]);

    useEffect(() => {
      if (isInView && startWhen) {
        if (typeof onStart === 'function') {
          onStart();
        }

        const timeoutId = setTimeout(() => {
          motionValue.set(direction === 'down' ? from : to);
        }, delay * 1000);

        const durationTimeoutId = setTimeout(
          () => {
            if (typeof onEnd === 'function') {
              onEnd();
            }
          },
          delay * 1000 + duration * 1000
        );

        return () => {
          clearTimeout(timeoutId);
          clearTimeout(durationTimeoutId);
        };
      }
    }, [
      isInView,
      startWhen,
      motionValue,
      direction,
      from,
      to,
      delay,
      onStart,
      onEnd,
      duration,
    ]);

    useEffect(() => {
      const unsubscribe = springValue.on('change', (latest) => {
        if (localRef.current) {
          const hasDecimals = maxDecimals > 0;

          const options: Intl.NumberFormatOptions = {
            useGrouping: !!separator,
            minimumFractionDigits: hasDecimals ? maxDecimals : 0,
            maximumFractionDigits: hasDecimals ? maxDecimals : 0,
          };

          const formattedNumber = Intl.NumberFormat('en-US', options).format(
            latest
          );

          localRef.current.textContent = separator
            ? formattedNumber.replace(/,/g, separator)
            : formattedNumber;
        }
      });

      return () => unsubscribe();
    }, [springValue, separator, maxDecimals]);

    return (
      <Typography
        {...restProps}
        ref={mergedRefs}
        className={cn('text-base', className)}
        Component={Component || 'p'}
      />
    );
  }
);

CountUpText.displayName = 'CountUpText';
