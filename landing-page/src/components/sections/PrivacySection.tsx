import styled from "styled-components";
import Container from "../layout/Container";

const PrivacySectionWrapper = styled.section`
  padding: 8rem 0;
  background-color: #f9fafb;
  position: relative;
  overflow: hidden;
`;

const SectionHeading = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const GraphicContent = styled.div`
  flex: 1;
  text-align: center;
`;

const PrivacyGraphic = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: rgba(139, 92, 246, 0.1);
    z-index: -1;
  }
`;

const LockIcon = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto 2rem;
  background-color: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PrivacyFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PrivacyFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0;
`;

const PrivacySection = () => {
  return (
    <PrivacySectionWrapper id="privacy">
      <Container>
        <SectionHeading>
          <SectionTitle>Your Privacy Comes First</SectionTitle>
          <SectionSubtitle>
            We've designed the entire experience with privacy and security as
            top priorities
          </SectionSubtitle>
        </SectionHeading>

        <ContentWrapper>
          <TextContent>
            <PrivacyFeatures>
              <PrivacyFeature>
                <FeatureIcon>🔒</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Your Data Stays Local</FeatureTitle>
                  <FeatureDescription>
                    All your conversations, buddy preferences, and settings are
                    stored locally in your browser. No personal data is ever
                    sent to our servers.
                  </FeatureDescription>
                </FeatureContent>
              </PrivacyFeature>

              <PrivacyFeature>
                <FeatureIcon>🔑</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Your API Keys, Your Control</FeatureTitle>
                  <FeatureDescription>
                    You provide your own API keys which stay securely in your
                    browser. We never store, access, or share your API keys.
                  </FeatureDescription>
                </FeatureContent>
              </PrivacyFeature>

              <PrivacyFeature>
                <FeatureIcon>🛡️</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Server as a Secure Proxy</FeatureTitle>
                  <FeatureDescription>
                    Our server acts only as a secure proxy for API calls to
                    protect your keys from exposure. We don't log or store your
                    conversations.
                  </FeatureDescription>
                </FeatureContent>
              </PrivacyFeature>

              <PrivacyFeature>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureContent>
                  <FeatureTitle>Multiple Device Support</FeatureTitle>
                  <FeatureDescription>
                    Access your AI buddies from any device while maintaining the
                    same level of privacy and security across all platforms.
                  </FeatureDescription>
                </FeatureContent>
              </PrivacyFeature>
            </PrivacyFeatures>
          </TextContent>

          <GraphicContent>
            <PrivacyGraphic>
              <LockIcon>🔐</LockIcon>
              <h3>No Backend Database</h3>
              <p>
                We don't store your data on our servers. Your data remains under
                your control at all times.
              </p>
            </PrivacyGraphic>
          </GraphicContent>
        </ContentWrapper>
      </Container>
    </PrivacySectionWrapper>
  );
};

export default PrivacySection;
