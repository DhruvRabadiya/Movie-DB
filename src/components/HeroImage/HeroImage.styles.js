import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroimage 1s;

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div``;

export const Text = styled.div``;
