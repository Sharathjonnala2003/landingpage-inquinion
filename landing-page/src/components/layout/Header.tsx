import { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  z-index: 40; /* Using hardcoded value instead of theme */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700; /* Using literal value instead of theme */
  color: ${({ theme }) => theme.colors.secondary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.75rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileNavActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo href="#">
            AI<span>Friend</span>
          </Logo>

          <NavLinks>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </NavLinks>

          <NavActions>
            <Button
              as="a"
              href="https://inquinion.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              $variant="outline"
              $size="sm"
            >
              Log In
            </Button>
            <Button
              as="a"
              href="https://inquinion.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="sm"
            >
              Sign Up
            </Button>
          </NavActions>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </MobileMenuButton>
        </HeaderContent>
      </Container>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
        <MobileNavLink href="#faq">FAQ</MobileNavLink>

        <MobileNavActions>
          <Button
            as="a"
            href="https://inquinion.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            $variant="outline"
            $fullWidth
          >
            Log In
          </Button>
          <Button
            as="a"
            href="https://inquinion.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            $variant="primary"
            $fullWidth
          >
            Sign Up
          </Button>
        </MobileNavActions>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
