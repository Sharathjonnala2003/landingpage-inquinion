import styled from "styled-components";
import Container from "../layout/Container";

const FeaturesSectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SectionHeading = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionSubtitle = styled.p`
  color: #000000;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 2rem;
  box-shadow: ${({ theme }) =>
    theme.shadows.md || "0 1px 3px rgba(0,0,0,0.12)"};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #000000;
  margin-bottom: 0;
`;

const FeaturesSection = () => {
  const features = [
    {
      icon: "👤",
      title: "Personalized AI Buddies",
      description:
        "Create custom AI assistants with unique personalities, expertise areas, and goals tailored to your specific needs.",
    },
    {
      icon: "💬",
      title: "Proactive Smart Conversations",
      description:
        "Your AI buddies don't just respond - they actively initiate conversations, share relevant updates, and engage you with personalized insights.",
    },
    {
      icon: "🔍",
      title: "Web Search Integration",
      description:
        "Your buddies can search the web in real-time to provide up-to-date information and answers to your questions.",
    },
    {
      icon: "📅",
      title: "Task & Reminder Management",
      description:
        "Create tasks, set reminders, and let your buddies help you stay organized and productive.",
    },
    {
      icon: "🔐",
      title: "Privacy-First Design",
      description:
        "Your data stays in your browser with no personal information stored on our servers for maximum privacy.",
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description:
        "Receive timely updates and reminders from your buddies when they have important information to share.",
    },
  ];

  return (
    <FeaturesSectionWrapper id="features">
      <Container>
        <SectionHeading>
          <SectionTitle>All The Tools You Need In One Place</SectionTitle>
          <SectionSubtitle>
            AI Friend combines powerful features to create a personalized AI
            experience that helps you learn, stay productive, and accomplish
            your goals.
          </SectionSubtitle>
        </SectionHeading>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;
