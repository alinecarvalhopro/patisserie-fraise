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
          <label htmlFor={id}>{label}</label>
          <input type={type} ref={ref} id={id} {...rest} />
          <p className={"messageError"}>{error}</p>
        </StyledFieldset>
      </>
    );
  }
);

export default Input;
