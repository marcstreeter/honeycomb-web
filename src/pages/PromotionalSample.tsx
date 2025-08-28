import BadgeExperienceIcon from '@assets/icons/BadgeExperienceIcon.tsx';
import Icon from '@assets/icons/Icon.tsx';
import HoneyIcon from '@components/HoneyIcon';
import PromotionalPage from '@components/PromotionalPage';
import honeycombTeamImg from '@images/img-honeycomb-team.webp';

const buttonAction = () => console.log('General CTA clicked');

const PromotionalSample = () => {
  // Set a static expiration date (e.g., end of year 2024)
  const expirationTime = new Date('2025-08-27T22:59:59');

  const heroSection = {
    mainText: 'Or we pay you $1,000',
    subText:
      'Upgrade your new system (10+ years) to a high-efficiency Honeycomb install and start saving immediately.',
    buttonText: 'Claim My Guaranteed Savings',
    backgroundImage: honeycombTeamImg,
  };

  const whySection = {
    title: 'Why this matters',
    subtitle: "If your system is 10+ years old, you're likely overpaying every single month.",
    cards: [
      {
        icon: <HoneyIcon icon={<BadgeExperienceIcon />} darkTheme={true} />,
        title: 'High-efficiency systems',
      },
      {
        icon: (
          <HoneyIcon
            icon={
              <Icon iconKey="badge-case" width={'50%'} viewBoxY={75} fill="var(--color-white)" />
            }
            darkTheme={true}
          />
        ),
        title: 'Old Equipment',
      },
      {
        icon: (
          <HoneyIcon
            icon={
              <Icon iconKey="badge-honest" width={'40%'} viewBoxY={85} fill="var(--color-white)" />
            }
            darkTheme={true}
          />
        ),
        title: 'Frequent Breakdowns or Expensive',
      },
    ],
  };

  const guaranteeSection = {
    title: 'Our $1,000 utility savings guarantee',
    description:
      "Save at least $1000 on your energy bills in the first year after installation... Or we'll pay you the $1000 difference ourselves.",
    buttonText: 'Book My Free Estimate',
    buttonAction,
  };

  const stackSection = {
    title: 'Stack the savings',
    backgroundColor: 'var(--color-gray)',
    features: [
      {
        icon: (
          <HoneyIcon
            icon={
              <Icon iconKey="badge-stars" width={'60%'} viewBoxY={75} fill="var(--color-white)" />
            }
            darkTheme={true}
          />
        ),
        title: 'Federal Tax Credits',
        description:
          'Some systems qualify. For additional savings, making now the best time to upgrade.',
      },
      {
        icon: (
          <HoneyIcon
            icon={
              <Icon iconKey="badge-energy" width={'60%'} viewBoxY={75} fill="var(--color-white)" />
            }
            darkTheme={true}
          />
        ),
        title: 'CPS Energy Rebates',
        description: 'Some systems qualify for additional saving opportunities.',
      },
      {
        icon: (
          <HoneyIcon
            icon={
              <Icon
                iconKey="badge-moneybag"
                width={'45%'}
                viewBoxY={75}
                fill="var(--color-white)"
              />
            }
            darkTheme={true}
          />
        ),
        title: 'Manufacturer Rebates',
        description: 'Honeycomb/invoice for superior performance.',
      },
    ],
  };

  const reviewsSection = {
    title: '50+ star reviews in San Antonio',
    subtitle: 'Real customers, real results',
    starCount: 5,
    location: 'San Antonio',
  };

  const timerSection = { expirationTime };

  return (
    <PromotionalPage
      heroSection={heroSection}
      whySection={whySection}
      guaranteeSection={guaranteeSection}
      stackSection={stackSection}
      reviewsSection={reviewsSection}
      timerSection={timerSection}
    />
  );
};

export default PromotionalSample;
