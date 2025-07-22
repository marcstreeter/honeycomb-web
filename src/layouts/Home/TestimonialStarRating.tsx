import type React from 'react';
import StarIcon from '../../assets/icons/StarIcon';

interface TestimonialStarRatingProps {
  stars?: number;
  color?: string;
  size?: number;
}

const TestimonialStarRating: React.FC<TestimonialStarRatingProps> = ({
  stars = 5,
  color = 'var(--color-yellow)',
  size = 24,
}) => {
  // Generate stable keys without using array indices
  const starIds = Array.from({ length: stars }, (_, i) => `star-${stars}-${i + 1}`);

  return (
    <span className="testimonial-stars" style={{ display: 'inline-flex', gap: '4px' }}>
      {starIds.map((starId) => (
        <StarIcon key={starId} color={color} size={size} />
      ))}
    </span>
  );
};

export default TestimonialStarRating;
