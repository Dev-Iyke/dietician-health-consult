import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type IconPosition = "left" | "right";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type AnchorButtonProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white hover:bg-[#4b142b] hover:shadow-md",
  secondary:
    "bg-peach text-[#4b142b] hover:bg-[#e8c3cf] hover:shadow-sm",
  outline:
    "border border-burgundy/35 bg-transparent text-burgundy hover:border-burgundy hover:bg-burgundy/5",
};

const baseClassName =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-700 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transform-none motion-reduce:transition-none";

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    icon,
    iconPosition = "right",
    ...elementProps
  } = props;

  const classes = `${baseClassName} ${variants[variant]} ${className}`.trim();
  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <a {...(elementProps as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      {...(elementProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {content}
    </button>
  );
}
