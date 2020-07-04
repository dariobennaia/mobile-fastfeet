import styled from 'styled-components/native';

const Avatar = styled.Image`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: ${(props) => `${props.size / 2}px`};
`;

export default Avatar;
