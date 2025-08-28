import Button from '@components/Button';
import { Box, Container, Typography } from '@mui/material';
import CountdownTimer from './CountdownTimer';

export interface HeroSection {
  mainText: string;
  subText: string;
  buttonText: string;
  buttonAction?: () => void;
  backgroundImage?: string;
  backgroundColor?: string;
}

export interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface WhySection {
  title: string;
  subtitle?: string;
  cards: InfoCard[];
  backgroundColor?: string;
}

export interface GuaranteeSection {
  title: string;
  description: string;
  buttonText: string;
  buttonAction?: () => void;
  backgroundColor?: string;
}

export interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StackSection {
  title: string;
  features: FeatureCard[];
  backgroundColor?: string;
}

export interface ReviewsSection {
  title: string;
  subtitle: string;
  starCount: number;
  location: string;
  backgroundColor?: string;
}

export interface TimerSection {
  title?: string;
  expirationTime: string | Date;
  backgroundColor?: string;
}

export interface PromotionalPageProps {
  heroSection: HeroSection;
  whySection?: WhySection;
  guaranteeSection?: GuaranteeSection;
  stackSection?: StackSection;
  reviewsSection?: ReviewsSection;
  timerSection?: TimerSection;
}

const PromotionalPage = ({
  heroSection,
  whySection,
  guaranteeSection,
  stackSection,
  reviewsSection,
  timerSection,
}: PromotionalPageProps) => {
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Typography
        // biome-ignore lint/suspicious/noArrayIndexKey: static star count, order never changes
        key={`star-${i}`}
        component="span"
        sx={{ color: 'var(--color-yellow)', fontSize: '2rem' }}
      >
        ★
      </Typography>
    ));
  };
  const titleSX = {
    fontFamily: 'var(--font-family-display)',
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    fontWeight: 'var(--font-weight-black)',
    color: 'var(--color-white)',
    mb: 2,
    textTransform: 'uppercase',
  };
  const contentSX = {
    color: 'var(--color-white)',
    mb: 4,
    fontSize: 'var(--font-size-lg)',
  };
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: heroSection.backgroundColor || 'var(--color-yellow)',
          py: { xs: 4, md: 6 },
          display: 'flex',
          alignItems: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: { xs: '1', md: '2' } }}>
              <Typography variant="h2" sx={{ ...titleSX, color: 'var(--color-black)' }}>
                {heroSection.mainText}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem' },
                  color: 'var(--color-black)',
                  mb: 3,
                  maxWidth: '600px',
                }}
              >
                {heroSection.subText}
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={heroSection.buttonAction}
                sx={{
                  backgroundColor: 'var(--color-black)',
                  color: 'var(--color-white)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '1.125rem',
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'var(--color-blue)',
                  },
                }}
              >
                {heroSection.buttonText}
              </Button>
            </Box>
            <Box sx={{ flex: '1', display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src={heroSection.backgroundImage}
                alt="Hero image"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why This Matters Section */}
      {whySection && (
        <Box
          sx={{
            backgroundColor: whySection.backgroundColor || 'var(--color-blue)',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" sx={titleSX}>
              {whySection.title}
            </Typography>
            {whySection.subtitle && <Typography sx={contentSX}>{whySection.subtitle}</Typography>}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              {whySection.cards.map((card, _) => (
                <Box
                  key={card.title.replaceAll(' ', '-').toLowerCase()}
                  sx={{
                    minWidth: '250px',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>{card.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ ...contentSX, fontWeight: 'var(--font-weight-semibold)' }}
                  >
                    {card.title}
                  </Typography>
                  <Typography sx={{ fontSize: 'var(--font-size-base)' }}>
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* Guarantee Section */}
      {guaranteeSection && (
        <Box
          sx={{
            backgroundColor: guaranteeSection.backgroundColor || 'var(--color-yellow)',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: { xs: '1', md: '2' } }}>
                <Typography variant="h2" sx={{ ...titleSX, color: 'var(--color-black)' }}>
                  {guaranteeSection.title}
                </Typography>
                <Typography sx={{ ...contentSX, color: 'var(--color-black)' }}>
                  {guaranteeSection.description}
                </Typography>
              </Box>
              <Box sx={{ flex: '1', textAlign: { xs: 'left', md: 'right' } }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={guaranteeSection.buttonAction}
                  sx={{
                    backgroundColor: 'var(--color-black)',
                    color: 'var(--color-white)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: '1.125rem',
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'var(--color-blue)',
                    },
                  }}
                >
                  {guaranteeSection.buttonText}
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      )}

      {/* Stack The Savings Section */}
      {stackSection && (
        <Box
          sx={{
            backgroundColor: stackSection.backgroundColor || 'var(--color-gray)',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ ...titleSX, color: 'var(--color-black)' }}>
              {stackSection.title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
              {stackSection.features.map((feature, _) => (
                <Box
                  key={feature.title.replaceAll(' ', '-').toLowerCase()}
                  sx={{ maxWidth: '300px' }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'var(--font-weight-semibold)',
                        mb: 1,
                        fontSize: '1.25rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem' }}>{feature.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* Reviews Section */}
      {reviewsSection && (
        <Box
          sx={{
            backgroundColor: reviewsSection.backgroundColor || 'var(--color-blue)',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: '1' }}>
                <Box sx={{ mb: 2 }}>{renderStars(5)}</Box>
                <Typography variant="h2" sx={titleSX}>
                  {reviewsSection.title}
                </Typography>
                <Typography sx={contentSX}>{reviewsSection.subtitle}</Typography>
              </Box>
              <Box sx={{ flex: '1' }}>
                {timerSection && (
                  <Box
                    sx={{
                      backgroundColor: 'var(--color-white)',
                      borderRadius: 2,
                      p: 3,
                      textAlign: 'center',
                      maxWidth: '300px',
                    }}
                  >
                    <Typography variant="h3" sx={{ ...contentSX, color: 'var(--color-black)' }}>
                      {timerSection.title || 'Call soon before offer expires!'}
                    </Typography>
                    <CountdownTimer expirationTime={timerSection.expirationTime} />
                  </Box>
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default PromotionalPage;
