import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({
  children,
  size = "md",
  variant = "filled",
  color = "black",
  disabled = false,
  ripple = false,
  className = "",
  onClick,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const handleRipple = (event) => {
    if (!ripple) return;

    const rect = event.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple = { x, y, size };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 500);
  };

  const handleClick = (event) => {
    handleRipple(event);
    if (onClick) onClick(event);
  };

  const baseClasses =
    "relative overflow-hidden select-none rounded-lg text-center align-middle font-sans text-xs font-bold uppercase transition-all";
  const sizeClasses = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-6 text-xs",
    lg: "py-3.5 px-7 text-sm",
  };

  const colorClasses = {
    black: "text-white bg-black ",
    blue: "text-white bg-blue-500 ",
    red: "text-white bg-red-500 ",
    green: "text-white bg-green-500 ",
    amber: "text-black bg-amber-500 ",
  };

  const gradientClasses = {
    black: "from-black to-gray-800",
    blue: "from-blue-600 to-blue-400",
    red: "from-red-600 to-red-400",
    green: "from-green-600 to-green-400",
    amber: "from-amber-600 to-amber-400",
  };

  const variantClasses = {
    filled: `${colorClasses[color]} shadow-green-300 hover:shadow-sm `,
    // gradient: `bg-gradient-to-tr ${gradientClasses[color]} text-white shadow-md hover:shadow-lg`,
    outlined: `border border-${color}-500 text-${color}-500 hover:opacity-75 focus:ring focus:ring-${color}-300`,
    text: `text-${color}-500 hover:bg-${color}-500/10 active:bg-${color}-500/20`,
  };

  const disabledClasses =
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
  const focusClasses =
    "focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none";

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        focusClasses,
        disabledClasses,
        className
      )}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute bg-white opacity-50 rounded-full transform scale-0 animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        />
      ))}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["filled", "outlined", "text"]),
  color: PropTypes.oneOf(["black", "blue", "red", "green", "amber"]),
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
