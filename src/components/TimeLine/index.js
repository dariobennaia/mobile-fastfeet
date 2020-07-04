import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Dot,
  Line,
  Description,
  StepsContainer,
  Step,
} from './styles';

function TimeLine({ currentStep, hasProblem }) {
  return (
    <Container>
      <Line />

      <StepsContainer>
        <Step>
          <Dot active={currentStep >= 1} />
          <Description>Aguardando Retirada</Description>
        </Step>

        <Step>
          <Dot
            active={currentStep >= 2}
            problem={currentStep === 2 && hasProblem}
          />
          <Description problem={currentStep === 2 && hasProblem}>
            Retirada
          </Description>
        </Step>

        <Step>
          <Dot active={currentStep >= 3} />
          <Description>Entregue</Description>
        </Step>
      </StepsContainer>
    </Container>
  );
}

TimeLine.propTypes = {
  currentStep: PropTypes.number,
  hasProblem: PropTypes.bool,
};

TimeLine.defaultProps = {
  currentStep: 1,
  hasProblem: false,
};

export default TimeLine;
