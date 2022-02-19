import Button from './Button';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';

const Fancy = styled.div({
  display: 'flex',
  columnGap: 5
})

function FeedbackOptions({ options, onLeaveFeedback }) {
  let buttons = options.map(option => (
    <Button key={nanoid()} label={option} changeValue={() => onLeaveFeedback(option)}></Button>
  ));

  return <Fancy>{buttons}</Fancy>;
}

export default FeedbackOptions;
