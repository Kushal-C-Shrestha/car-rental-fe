import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "dark" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    href: string;
  };

type ButtonElementProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

function isLinkButtonProps(props: ButtonProps): props is ButtonLinkProps {
  return typeof props.href === "string";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#ff4d30] text-white shadow-[0_10px_18px_rgba(255,77,48,0.28)] hover:bg-[#e33f25]",
  dark: "bg-zinc-950 text-white hover:bg-zinc-800",
  ghost: "bg-white text-zinc-950 ring-1 ring-inset ring-zinc-200 hover:ring-zinc-950",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-3 text-sm",
  md: "px-5 py-3",
  lg: "px-8 py-4",
};

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    size = "md",
    variant = "primary",
  } = props;

  const classes = [
    "inline-flex items-center justify-center rounded text-center font-bold transition",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isLinkButtonProps(props)) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
