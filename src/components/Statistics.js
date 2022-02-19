import styled from '@emotion/styled';

const Fancy = styled.div({
  fontWeight: 600
})

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Fancy>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
    </Fancy>
  );
}

export default Statistics;
