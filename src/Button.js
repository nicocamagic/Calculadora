import { Children } from "react";

const Button = ({ onclick, Children, ...props }) => (
  <button onClick={onclick} {...props}>
    {Children}
  </button>
);
