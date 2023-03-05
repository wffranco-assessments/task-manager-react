import React, { forwardRef } from "react";
import { Link, To } from "react-router-dom";

interface Props {
  children: any;
  className?: string | string[];
  to?: To;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}

const Button = forwardRef<any, Props>(({children, className, to, type, ...props}, ref) => {
  const classes = ["py-2 px-4 rounded-md transition-colors duration-300", className].flat(1).join(" ");

  return to ? (
    <Link ref={ref} to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button ref={ref} type={type} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
