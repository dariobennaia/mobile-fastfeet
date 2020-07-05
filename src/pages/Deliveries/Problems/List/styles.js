import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Header = styled.View`
  align-self: stretch;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
`;

export const ListProblems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
  align-self: stretch;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: ${colors.white};
  border-radius: 4px;
  min-height: 55.42px;
  border: 1px solid ${colors.border};
  padding: 20px;
  margin-bottom: 20px;
`;

export const DescriptionContainer = styled.View`
  flex: 3;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${colors.regularLight};
  text-align: justify;
`;

export const DateContainer = styled.View`
  align-items: flex-end;
  margin-left: 10px;
  flex: 1;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: ${colors.regularLight};
  opacity: 0.6;
`;
