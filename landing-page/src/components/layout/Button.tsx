import styled from "styled-components";

interface ButtonProps {
  $variant?: "primary" | "outline";
  $size?: "sm" | "md" | "lg";
  $fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $size }) =>
    $size === "sm"
      ? "0.5rem 1rem"
      : $size === "lg"
      ? "0.875rem 2rem"
      : "0.75rem 1.5rem"};
  font-size: ${({ $size, theme }) =>
    $size === "sm"
      ? theme.fontSizes.sm
      : $size === "lg"
      ? theme.fontSizes.lg
      : theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  cursor: pointer;
  text-decoration: none;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? `
    background: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.secondary} 100%
    );
    color: ${theme.colors.white};
    border: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
  `
      : $variant === "outline"
      ? `
    background: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `
      : ""};
`;

Button.defaultProps = {
  $variant: "primary",
  $size: "md",
};

export default Button;
