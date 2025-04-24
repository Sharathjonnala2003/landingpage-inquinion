import styled from "styled-components";
import Container from "../layout/Container";

const HowItWorksSectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: #f9fafb;
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
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.accent};
`;

const ConnectingLine = styled.div`
  height: 40px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Create Your AI Buddy",
      description:
        "Set up your personalized AI buddy by giving it a name, subject focus, goals, and a unique personality. Your buddy will learn your preferences and proactively engage with you based on these settings.",
    },
    {
      title: "Connect Your API Keys",
      description:
        "Enter your Google Gemini and Serper API keys in the Settings page. These keys stay in your browser and enable your buddy to provide intelligent responses and real-time web search capabilities.",
    },
    {
      title: "Experience Interactive Conversations",
      description:
        "Your buddy will not just respond, but actively initiate conversations, share relevant updates, and engage you with personalized insights based on your interests and goals.",
    },
    {
      title: "Get Proactive Web Updates",
      description:
        "Your buddy automatically searches the web to keep you informed about topics you care about, bringing relevant information to you without being asked.",
    },
    {
      title: "Receive Smart Notifications",
      description:
        "Stay informed with proactive reminders, task updates, and timely information that your buddy thinks might be valuable to you based on your preferences and activities.",
    },
  ];

  return (
    <HowItWorksSectionWrapper id="how-it-works">
      <Container>
        <SectionHeading>
          <SectionTitle>How AI Friend Works</SectionTitle>
          <SectionSubtitle>
            Get started with your personalized AI buddy in just a few simple
            steps
          </SectionSubtitle>
        </SectionHeading>

        <Steps>
          {steps.map((step, index) => (
            <div key={index}>
              <Step>
                <StepNumber>{index + 1}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </Step>
              {index < steps.length - 1 && <ConnectingLine />}
            </div>
          ))}
        </Steps>
      </Container>
    </HowItWorksSectionWrapper>
  );
};

export default HowItWorksSection;
