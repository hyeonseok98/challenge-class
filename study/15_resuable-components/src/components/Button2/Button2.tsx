import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

const buttonVariant = cva(
  "border font-semibold hover:brightness-90 active:brightness-75",
  {
    variants: {
      intent: {
        primary: "bg-sky-500 border-sky-500 text-white",
        secondary: "bg-slate-500 border-slate-500 text-white",
        danger: "bg-red-500 border-red-500 text-white",
      },
      size: {
        sm: "px-3 py-1 rounded text-[13px]",
        md: "px-4 py-1.5 rounded text-[15px]",
        lg: "px-5 py-2 rounded text-[17px]",
      },
      variant: {
        outline: "bg-white",
        contained: "text-white",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "contained",
        className: "bg-sky-500 ",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "text-sky-500",
      },
      {
        intent: "secondary",
        variant: "contained",
        className: "bg-slate-500 ",
      },
      {
        intent: "secondary",
        variant: "outline",
        className: "text-slate-500",
      },
      {
        intent: "danger",
        variant: "contained",
        className: "bg-red-500 ",
      },
      {
        intent: "danger",
        variant: "outline",
        className: " text-red-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      variant: "contained",
    },
  }
);

type ButtonVariant = VariantProps<typeof buttonVariant>;

type ButtonProps = ButtonVariant &
  (
    | ({} & ComponentProps<"button">)
    | ({ href: string } & ComponentProps<typeof Link>)
  );

function Button({
  intent,
  size,
  variant,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  if ("href" in props) {
    return (
      <Link className={buttonVariant({ intent, size, variant })} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={buttonVariant({ intent, size, variant })} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
