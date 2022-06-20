import { Container } from "./style";

const Button = ({
  children,
  backGround,
  textColor,
  backGroundHover,
  width,
  ...rest
}) => {
  return (
    <Container
      type="button"
      backGround={backGround}
      textColor={textColor}
      backGroundHover={backGroundHover}
      width={width}
      {...rest}
    >
      {children}
    </Container>
  );
};
export default Button;
