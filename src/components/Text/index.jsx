import React from "react";

const sizeClasses = {
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsLight13: "font-light font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium26: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
