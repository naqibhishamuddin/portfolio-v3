import { cn } from "@/lib/utils";
import type {
  BlockquoteHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

type ElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function TypographyH1(props: HeadingProps) {
  const { children, className, ...restProps } = props;

  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl",
        className,
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
}

export function TypographyH2(props: HeadingProps) {
  const { children, className, ...restProps } = props;

  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...restProps}
    >
      {children}
    </h2>
  );
}

export function TypographyH3(props: HeadingProps) {
  const { children, className, ...restProps } = props;

  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...restProps}
    >
      {children}
    </h3>
  );
}

export function TypographyH4(props: HeadingProps) {
  const { children, className, ...restProps } = props;

  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...restProps}
    >
      {children}
    </h4>
  );
}

export function TypographyP(props: ParagraphProps) {
  const { children, className, ...restProps } = props;

  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

export function TypographyMuted(props: ParagraphProps) {
  const { children, className, ...restProps } = props;

  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

export function TypographyLead(props: ParagraphProps) {
  const { children, className, ...restProps } = props;

  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote(
  props: DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >,
) {
  const { children, className, ...restProps } = props;

  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...restProps}
    >
      {children}
    </blockquote>
  );
}

export function TypographyInlineCode(props: ElementProps) {
  const { children, className, ...restProps } = props;

  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...restProps}
    >
      {children}
    </code>
  );
}

export function TypographySmall(props: ElementProps) {
  const { children, className, ...restProps } = props;

  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...restProps}
    >
      {children}
    </small>
  );
}

export function TypographyLarge(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  const { children, className, ...restProps } = props;

  return (
    <div className={cn("text-lg font-semibold", className)} {...restProps}>
      {children}
    </div>
  );
}
