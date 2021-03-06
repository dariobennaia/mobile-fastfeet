import React, { useMemo } from 'react';
import { Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import Avatar from '~/components/Avatar';
import DefaultAvatar from '~/components/DefaultAvatar';

import colors from '~/styles/colors';
import FlatList from './FlatList';
import initialsName from '~/utils/initialsName';
import toCapitalize from '~/utils/toCapitalize';

import {
  Container,
  Header,
  Content,
  InfoContainer,
  Welcome,
  Name,
  SignOutContainer,
  SignOut,
} from './styles';

function Deliveries() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.deliveryman.profile);

  const initials = useMemo(() => initialsName(deliveryman.name), [deliveryman]);
  const name = useMemo(() => toCapitalize(deliveryman.name), [deliveryman]);

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
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Header>
        {(deliveryman.avatar && (
          <Avatar source={{ uri: deliveryman.avatar.url }} size={68} />
        )) || <DefaultAvatar initials={initials} size={68} />}
        <InfoContainer>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{name}</Name>
        </InfoContainer>
        <SignOutContainer>
          <SignOut onPress={handleSignOut}>
            <Icon name="exit-to-app" size={22} color={colors.danger} />
          </SignOut>
        </SignOutContainer>
      </Header>

      <Content>
        <FlatList />
      </Content>
    </Container>
  );
}

Deliveries.navigationOptions = () => ({
  title: 'Listagem',
  headerShown: false,
});

export default Deliveries;
