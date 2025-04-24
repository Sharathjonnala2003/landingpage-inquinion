import styled from "styled-components";
import Container from "../layout/Container";
import Button from "../layout/Button";
import AICompanionImage from "./AI companion.jpg";

const HeroWrapper = styled.section`
  padding: 10rem 0 6rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    #f9fafb 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at top right,
      rgba(99, 102, 241, 0.1),
      transparent 70%
    );
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 8rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: rgba(99, 102, 241, 0.2);
      border-radius: 4px;
      z-index: -1;
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ActionButton = styled(Button)`
  text-decoration: none;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 580px;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`;

const MockupImage = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 580px;
  height: 380px;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 300px;
  }
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(99, 102, 241, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <HeroText>
            <Badges>
              <Badge>✨ AI-Powered Personal Assistants</Badge>
              <Badge>🚀 Privacy Focused</Badge>
            </Badges>
            <HeroTitle>
              Create Your Perfect <span>AI Buddy</span> for Learning,
              Productivity & More
            </HeroTitle>
            <HeroSubtitle>
              Experience AI buddies that proactively engage with you, initiate
              meaningful conversations, and help you accomplish your goals
              through real-time web search and custom-tailored support.
            </HeroSubtitle>
            <HeroActions>
              <ActionButton
                as="a"
                href="https://inquinion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                $variant="primary"
                $size="lg"
              >
                Get Started for Free
              </ActionButton>
              <ActionButton
                as="a"
                href="#how-it-works"
                $variant="outline"
                $size="lg"
              >
                See How It Works
              </ActionButton>
            </HeroActions>
          </HeroText>
          <HeroImage>
            <ImageWrapper>
              <MockupImage>
                <img src={AICompanionImage} alt="AI Friend Interface Preview" />
              </MockupImage>
            </ImageWrapper>
          </HeroImage>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
