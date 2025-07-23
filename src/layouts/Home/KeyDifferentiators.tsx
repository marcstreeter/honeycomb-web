import type React from 'react';
import styled from 'styled-components';
import BadgeHonestIcon from '../../assets/icons/BadgeHonestIcon';
import BadgeLicensedIcon from '../../assets/icons/BadgeLicensedIcon';
import BadgeReliable from '../../assets/icons/BadgeReliableIcon';
import MascotIcon from '../../assets/icons/MascotIcon';
import HoneyIcon from '../../components/HoneyIcon';

const FloatingCardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin-top: -60px;
  margin-bottom: -60px;
  pointer-events: none;
  width: 100%;
  & > * {
    pointer-events: auto;
  }
  @media (max-width: 900px) {
    margin-top: -40px;
    margin-bottom: -40px;
  }
  @media (max-width: 600px) {
    margin-top: -20px;
    margin-bottom: -20px;
  }
  @media (max-width: 480px) {
    margin-top: -30px;
    margin-bottom: -30px;
  }
`;

const CardStack = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  max-width: 90%;
`;

const KeyDifferentiatorsCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: fit-content;
  min-width: min-content;
  position: relative;
  border: 2px solid #ffd700;
  z-index: 10;
  overflow: visible;
  @media (max-width: 900px) {
    padding: 30px 20px;
  }
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const DifferentiatorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const DiffItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  flex-shrink: 0;
`;

const DiffLabel = styled.span`
  font-size: 24px;
  font-weight: 900;
  color: #333;
  text-transform: uppercase;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const KeyDifferentiators: React.FC = () => (
  <FloatingCardRow data-id="floating-card-row">
    <CardStack data-id="key-differentiators">
      <KeyDifferentiatorsCard data-id="key-differentiators-card">
        <DifferentiatorsGrid data-id="differentiators-grid">
          <MascotIcon width={200} height={200} />
          <DiffItem>
            <HoneyIcon icon={<BadgeLicensedIcon />} />
            <DiffLabel>LICENSED & INSURED</DiffLabel>
          </DiffItem>
          <DiffItem>
            <HoneyIcon icon={<BadgeReliable />} />
            <DiffLabel>RELIABLE SERVICE</DiffLabel>
          </DiffItem>
          <DiffItem>
            <HoneyIcon icon={<BadgeHonestIcon />} />
            <DiffLabel>HONEST PRICING</DiffLabel>
          </DiffItem>
        </DifferentiatorsGrid>
      </KeyDifferentiatorsCard>
    </CardStack>
  </FloatingCardRow>
);

export default KeyDifferentiators;
