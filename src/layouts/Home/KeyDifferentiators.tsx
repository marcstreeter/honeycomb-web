import type React from 'react';
import styled from 'styled-components';
import BadgeHonestIcon from '../../assets/icons/BadgeHonestIcon';
import BadgeLicensedIcon from '../../assets/icons/BadgeLicensedIcon';
import BadgeReliable from '../../assets/icons/BadgeReliableIcon';
import Mascot from '../../assets/icons/mascot.svg';
import HoneyIcon from '../../components/HoneyIcon';

const FloatingCardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
  margin-top: -60px;
  margin-bottom: -60px;
  pointer-events: none;
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
  width: 90%;
`;

const MascotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-bottom: 20px;
  }
`;

const BeeMascot = styled.img`
  height: 220px;
  width: auto;
  z-index: 11;
  pointer-events: none;
  position: relative;
  transform: translateY(-20px);
  @media (max-width: 900px) {
    height: 180px;
    transform: translateY(-15px);
  }
  @media (max-width: 768px) {
    height: 120px;
    transform: translateY(-10px);
  }
  @media (max-width: 480px) {
    height: 80px;
    transform: translateY(-5px);
  }
`;

const KeyDifferentiatorsCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
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
  display: grid;
  grid-template-columns: auto repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    justify-items: center;
  }
`;

const DiffItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
`;

const DiffLabel = styled.span`
  font-size: 24px;
  font-weight: 900;
  color: #333;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const KeyDifferentiators: React.FC = () => (
  <FloatingCardRow data-id="floating-card-row">
    <CardStack data-id="key-differentiators">
      <KeyDifferentiatorsCard data-id="key-differentiators-card">
        <DifferentiatorsGrid data-id="differentiators-grid">
          <MascotContainer>
            <BeeMascot src={Mascot} alt="Honeycomb Mascot" />
          </MascotContainer>
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
