import styled from "styled-components";
import Container from "./Container";

const FooterWrapper = styled.footer`
  background-color: #111827;
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 0;
  margin: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  max-width: 300px;
`;

const FooterHeading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              AI<span>Friend</span>
            </FooterLogo>
            <FooterDescription>
              Your proactive AI companion that initiates meaningful
              conversations, keeps you informed, and helps you achieve more
              through personalized engagement.
            </FooterDescription>
            <FooterSocial>
              <SocialIcon href="#">
                <span>X</span>
              </SocialIcon>
              <SocialIcon href="#">
                <span>f</span>
              </SocialIcon>
              <SocialIcon href="#">
                <span>in</span>
              </SocialIcon>
              <SocialIcon href="#">
                <span>YT</span>
              </SocialIcon>
            </FooterSocial>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Product</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="#features">Features</a>
              </FooterLink>
              <FooterLink>
                <a href="#pricing">Pricing</a>
              </FooterLink>
              <FooterLink>
                <a href="#testimonials">Testimonials</a>
              </FooterLink>
              <FooterLink>
                <a href="#faq">FAQ</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="#">Blog</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Documentation</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Guides</a>
              </FooterLink>
              <FooterLink>
                <a href="#">API Reference</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Company</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <a href="#">About</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Contact</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Privacy Policy</a>
              </FooterLink>
              <FooterLink>
                <a href="#">Terms of Service</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          &copy; {new Date().getFullYear()} AI Friend. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
