import { ClipLoader } from 'react-spinners';
import { cn } from '../../global/libs/utils';
import { cva, VariantProps } from 'class-variance-authority';

import React, { HTMLAttributes, forwardRef } from 'react';

const buttonVariant = cva('flex items-center justify-between  rounded-md', {
  variants: {
    size: {
      default: 'text-xl px-6 py-4 text-lg text-red-500',
      lg: 'px-4 md:px-6 md:py-5 py-3 text-xl',
      md: 'text-xl py-2 px-4  md:px-6 md:py-4 text-base md:text-lg',
      sm: 'px-4 py-2',
      xs: 'text-base px-6 py-2',
      pure: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'title'>,
    VariantProps<typeof buttonVariant> {
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  title?: string | React.ReactNode;
  isLoading?: boolean;
  // children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, children, title, icon, type, isLoading, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariant({ size, className }))}
        {...props}
      >
        <>
          {isLoading && <ClipLoader className="ml-2" color="#ffF" size={16} />}
          {React.isValidElement(title) ? (
            { title }
          ) : (
            <span className="inline leading-8">{title}</span>
          )}

          {icon ? <span className="pl-2">{icon}</span> : null}
          {children}
        </>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
