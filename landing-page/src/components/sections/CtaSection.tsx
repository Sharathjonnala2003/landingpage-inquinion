import styled from "styled-components";
import Container from "../layout/Container";
import Button from "../layout/Button";

const CtaSectionWrapper = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
`;

const BgPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 20%
    );
  z-index: 0;
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const CtaTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const CtaSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  opacity: 0.9;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const CtaActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const CtaButton = styled(Button)`
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CtaOutlineButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const CtaSection = () => {
  return (
    <CtaSectionWrapper>
      <BgPattern />
      <Container>
        <CtaContent>
          <CtaTitle>Your Proactive AI Partner Awaits</CtaTitle>
          <CtaSubtitle>
            Experience an AI that doesn't just wait for commands - it actively engages, 
            initiates meaningful conversations, and helps you achieve more
          </CtaSubtitle>
          <CtaActions>
            <CtaButton
              as="a"
              href="https://inquinion.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="lg"
            >
              Get Started for Free
            </CtaButton>
            <CtaOutlineButton
              as="a"
              href="#how-it-works"
              $variant="outline"
              $size="lg"
            >
              Learn More
            </CtaOutlineButton>
          </CtaActions>
        </CtaContent>
      </Container>
    </CtaSectionWrapper>
  );
};

export default CtaSection;
