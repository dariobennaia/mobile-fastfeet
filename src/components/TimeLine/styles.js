import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View``;

export const Description = styled.Text`
  font-size: 7px;
  font-weight: bold;
  color: ${(props) => {
    if (props.problem) {
      return colors.danger;
    }
    return colors.regularLight;
  }};
  opacity: 0.7;
  text-align: center;
  margin-top: 5px;
`;

export const StepsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -6px;
`;

export const Step = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  max-width: 50px;
`;

export const Dot = styled.View`
  height: 11px;
  width: 11px;
  border-radius: 6px;
  background: ${(props) => {
    if (props.active && !props.problem) {
      return colors.primary;
    }
    if (props.active && props.problem) {
      return colors.danger;
    }
    return colors.white;
  }};
  border: 1.5px solid
    ${(props) => {
      if (props.active && props.problem) {
        return colors.danger;
      }
      return colors.primary;
    }};
`;

export const Line = styled.View`
  height: 2px;
  background: ${colors.primary};
  margin: 0 20px;
`;
