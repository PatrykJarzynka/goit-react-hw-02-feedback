import styled from '@emotion/styled';

const Fancy = styled.span({
  fontWeight:600
})

function Notification({ message }) {
  return <Fancy>{message}</Fancy>;
}

export default Notification;
