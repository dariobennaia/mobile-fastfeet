import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import colors from '~/styles/colors';
import List from './List';
import initialsName from '~/utils/initialsName';
import toCapitalize from '~/utils/toCapitalize';

import {
  Container,
  Header,
  Content,
  Avatar,
  InfoContainer,
  Welcome,
  Name,
  SignOutContainer,
  SignOut,
  AvatarNameContainer,
  AvatarName,
} from './styles';

function Deliveries() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.deliveryman.profile);

  const initials = useMemo(() => initialsName(deliveryman.name), [deliveryman]);
  const deliverymanName = useMemo(() => toCapitalize(deliveryman.name, true), [
    deliveryman,
  ]);

  function handleSignOut() {
    Alert.alert(
      'Tem certeza?',
      'Deseja realmente sair?',
      [{ text: 'Não' }, { text: 'Sim', onPress: () => dispatch(signOut()) }],
      { cancelable: false },
    );
  }

  return (
    <Container>
      <Header>
        {(deliveryman.avatar && (
          <Avatar source={{ uri: deliveryman.avatar.url }} />
        )) || (
          <AvatarNameContainer>
            <AvatarName>{initials}</AvatarName>
          </AvatarNameContainer>
        )}
        <InfoContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{deliverymanName}</Name>
        </InfoContainer>
        <SignOutContainer>
          <SignOut onPress={handleSignOut}>
            <Icon name="exit-to-app" size={22} color={colors.danger} />
          </SignOut>
        </SignOutContainer>
      </Header>

      <Content>
        <List />
      </Content>
    </Container>
  );
}

Deliveries.navigationOptions = () => ({
  title: 'Entregas',
  tabBarIcon: ({ color }) => <Icon name="reorder" size={28} color={color} />,
});

export default Deliveries;
