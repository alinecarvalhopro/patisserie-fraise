import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledFieldset } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef(
  (
    { type, label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <StyledFieldset>
          <input type={type} ref={ref} id={id} {...rest} placeholder=" " />
          <label htmlFor={id}>{label}</label>
        </StyledFieldset>
        <p>{error}</p>
      </>
    );
  }
);

export default Input;
