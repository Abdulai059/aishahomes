import * as React from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
  // default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-current bg-transparent text-current hover:bg-white hover:text-black",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
  link: "bg-transparent text-primary underline-offset-4 hover:underline",
};

// Define responsive sizes
const sizes = {
  default: "h-9 px-4 py-2 rounded-md text-sm",
  sm: "h-8 px-3 rounded-md text-xs",
  lg: "h-10 px-6 rounded-full text-sm",
  xl: "h-12 px-4 md:rounded-full text-base md:h-14 md:px-8",
  "2xl": "h-12 px-4 md:rounded-full text-base md:h-20 md:px-16 md:text-2xl",
  icon: "h-9 w-9 rounded-md",
};

const Button = React.forwardRef(function Button(
  {
    className = "",
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  },
  ref
) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
});

export default Button;
