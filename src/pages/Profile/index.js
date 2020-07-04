import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import Avatar from '~/components/Avatar';
import DefaultAvatar from '~/components/DefaultAvatar';

import initialsName from '~/utils/initialsName';
import toCapitalize from '~/utils/toCapitalize';

import {
  Container,
  AvatarContainer,
  InfoContainer,
  Info,
  Title,
  Description,
  SignOutButton,
} from './styles';

function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.deliveryman.profile);

  const initials = useMemo(() => initialsName(deliveryman.name), [deliveryman]);
  const name = useMemo(() => toCapitalize(deliveryman.name), [deliveryman]);
  const createdAt = useMemo(
    () => format(parseISO(deliveryman.createdAt), 'dd/MM/yyyy'),
    [deliveryman],
  );

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
      <AvatarContainer>
        {(deliveryman.avatar && (
          <Avatar source={{ uri: deliveryman.avatar.url }} size={150} />
        )) || <DefaultAvatar initials={initials} size={150} />}
      </AvatarContainer>

      <InfoContainer>
        <Info>
          <Title>Nome completo</Title>
          <Description>{name}</Description>
        </Info>

        <Info>
          <Title>Email</Title>
          <Description>{deliveryman.email}</Description>
        </Info>

        <Info>
          <Title>Data de cadastro</Title>
          <Description>{createdAt}</Description>
        </Info>
      </InfoContainer>

      <SignOutButton onPress={handleSignOut}>Logout</SignOutButton>
    </Container>
  );
}

Profile.navigationOptions = () => ({
  title: 'Meu Perfil',
  tabBarIcon: ({ color }) => (
    <Icon name="account-circle" size={28} color={color} />
  ),
});

export default Profile;
