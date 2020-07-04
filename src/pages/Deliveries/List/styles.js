import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Action = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.active ? colors.primary : colors.regular)};
  margin-right: 15px;
  text-decoration: ${(props) => (props.active ? 'underline' : '')};
  font-weight: bold;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;

export const ListDeliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 15px;
`;

export const NoDataContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NoDataTitle = styled.Text`
  font-size: 16px;
  color: ${colors.regular};
`;
