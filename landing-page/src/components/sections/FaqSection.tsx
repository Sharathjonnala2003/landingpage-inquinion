import { useState } from "react";
import styled from "styled-components";
import Container from "../layout/Container";

const FaqSectionWrapper = styled.section`
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
  color: ${({ theme }) => theme.colors.secondary};
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FaqItem = styled.div`
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

const FaqQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
`;

const FaqAnswerInner = styled.div`
  padding: 0 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const PlusMinusIcon = styled.span<{ $isOpen: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.primary : theme.colors.secondary};
    transition: all 0.3s ease;
  }

  &::before {
    top: 7px;
    left: 0;
    width: 16px;
    height: 2px;
  }

  &::after {
    top: 0;
    left: 7px;
    width: 2px;
    height: 16px;
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0)")};
  }
`;

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Inquinion and how does it work?",
      answer:
        "Inquinion is a proactive AI assistant application that not only responds to your queries but actively engages with you. It initiates meaningful conversations, shares relevant updates, and provides personalized assistance using large language models. Your AI buddy learns from interactions to deliver increasingly tailored support through chat, web search, and task management.",
    },
    {
      question: "Do I need to provide my own API keys?",
      answer:
        "Yes, Inquinion uses your Google Gemini API and Serper API keys to power the AI capabilities and web search. This keeps costs transparent and gives you control over usage. Your API keys are stored locally in your browser for privacy.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Yes, we take privacy very seriously. All your conversations and data are stored locally in your browser. We do not save or access your personal information on our servers. Your API keys remain on your device and are only used to process your requests.",
    },
    {
      question: "Can I use Inquinion offline?",
      answer:
        "Basic conversation functionality may work offline, but features like web search require an internet connection. Your AI buddy's memory and preferences will be accessible offline once loaded.",
    },
    {
      question: "How many AI buddies can I create?",
      answer:
        "The number of AI buddies you can create depends on your usage needs and API quotas. Since you're using your own API keys, you have control over how many buddies you create and how often you interact with them.",
    },
    {
      question: "How do I get started with Inquinion?",
      answer:
        "Simply visit the website, create your first AI buddy by giving it a name and personality, then connect your API keys in the Settings page. After that, you can start chatting with your buddy and exploring its capabilities.",
    },
  ];

  return (
    <FaqSectionWrapper id="faq">
      <Container>
        <SectionHeading>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Find answers to common questions about Inquinion
          </SectionSubtitle>
        </SectionHeading>

        <FaqContainer>
          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <FaqQuestion
                $isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <PlusMinusIcon $isOpen={openIndex === index} />
              </FaqQuestion>
              <FaqAnswer $isOpen={openIndex === index}>
                <FaqAnswerInner>{faq.answer}</FaqAnswerInner>
              </FaqAnswer>
            </FaqItem>
          ))}
        </FaqContainer>
      </Container>
    </FaqSectionWrapper>
  );
};

export default FaqSection;
