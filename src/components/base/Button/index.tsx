import { ButtonContainer } from "./styles";

export function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
