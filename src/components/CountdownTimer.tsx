import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  expirationTime: string | Date;
  className?: string;
  style?: React.CSSProperties;
}

const CountdownTimer = ({ expirationTime, className, style }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expiration = new Date(expirationTime).getTime();
      const now = Date.now();
      const difference = expiration - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const hours =
          days >= 3
            ? Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : totalHours;
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [expirationTime]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const isExpired =
    timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <Box
      className={className}
      style={style}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      {isExpired ? (
        <Typography
          variant="h2"
          component="span"
          sx={{
            fontFamily: 'var(--font-family-display)',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            fontWeight: 'var(--font-weight-black)',
            color: 'var(--color-black)',
            lineHeight: 1,
          }}
        >
          Expired
        </Typography>
      ) : timeLeft.days >= 3 ? (
        <>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontFamily: 'var(--font-family-display)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--color-black)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {formatTime(timeLeft.days)}
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontFamily: 'var(--font-family-display)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--color-black)',
              lineHeight: 1,
              marginLeft: 1,
            }}
          >
            days
          </Typography>
        </>
      ) : (
        <>
          {timeLeft.hours > 0 && (
            <>
              <Typography
                variant="h2"
                component="span"
                sx={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--color-black)',
                  lineHeight: 1,
                }}
              >
                {formatTime(timeLeft.hours)}
              </Typography>
              <Typography
                variant="h2"
                component="span"
                sx={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 'var(--font-weight-black)',
                  color: 'var(--color-black)',
                  lineHeight: 1,
                }}
              >
                :
              </Typography>
            </>
          )}
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontFamily: 'var(--font-family-display)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--color-black)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {formatTime(timeLeft.minutes)}
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontFamily: 'var(--font-family-display)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--color-black)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            :
          </Typography>
          <Typography
            variant="h2"
            component="span"
            sx={{
              fontFamily: 'var(--font-family-display)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'var(--font-weight-black)',
              color: 'var(--color-black)',
              lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {formatTime(timeLeft.seconds)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default CountdownTimer;
