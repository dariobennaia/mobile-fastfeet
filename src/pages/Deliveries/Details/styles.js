import styled, { css } from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const InfoTitle = styled.Text`
  color: ${colors.regularLight};
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 3px;
`;

export const InfoDescription = styled.Text`
  color: ${colors.regular};
  font-size: 14px;
  margin-left: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 83px;
  border: 0.5px solid ${colors.backgroundSecondary};
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Option = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  background: ${colors.ternary};
  padding: 2px;

  ${(props) => {
    if (props.start) {
      return css`
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
      `;
    }

    if (props.center) {
      return css`
        border-left-color: ${colors.border};
        border-right-color: ${colors.border};
        border-style: solid;
        border-left-width: 1px;
        border-right-width: 1px;
      `;
    }

    return css`
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    `;
  }}
`;

export const TitleButtonOption = styled.Text`
  color: ${colors.regularLight};
  font-size: 12px;
  text-align: center;
`;
