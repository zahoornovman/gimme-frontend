import styled from "styled-components";

//headers
export const Header1 = styled.h1`
  color: ${(props) => props.theme.colors.color3};
  font-weight: bold;
  text-align: center;
  padding: ${(props) => props.theme.size.xxxxxxs};
  @media (orientation: portrait) and (min-width: 768px) {
    padding: ${(props) => props.theme.size.xxxxs};
  }
`;
export const Header2 = styled.h2`
  color: ${(props) => props.theme.colors.color4};
  font-size: 30px;
  text-align: center;
  padding: ${(props) => props.theme.size.xxxxxxs};
  @media (orientation: portrait) and (min-width: 768px) {
    padding: ${(props) => props.theme.size.xxxxs};
  }
`;

//text
export const TextContainer = styled.div`
  color: ${(props) => props.theme.colors.color3};
  padding: ${(props) => props.theme.size.xxxxxxs};
  @media (orientation: portrait) and (min-width: 768px) {
    padding: ${(props) => props.theme.size.xxxxs};
  }
`;

export const EmjoyContainer = styled.div`
  padding: ${(props) => props.theme.size.xxxxxxs};
  text-align: center;
  @media (orientation: portrait) and (min-width: 768px) {
    padding: ${(props) => props.theme.size.xxxxs};
  }
`;

//buttons
// export const TextButton = styled.button`
//   border-radius: 5px;
//   background-color: ${(props) => props.theme.colors.color1};
//   color: ${(props) => props.theme.colors.color2};
//   text-align: center;
//   font-family: ${(props) => props.theme.fontFamily};
//   cursor: pointer;
// `;

export const TextButton = styled.button`
  background: ${(props) => props.theme.colors.color1};
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.color2};
  cursor: pointer;
  display: inline-block;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.size.l};
  font-weight: 700;
  padding: 1rem 1.5rem;
  /* position: relative; */
  text-align: center;
  text-decoration: none;
  /* transform: translateZ(0) scale(1); */
  transition: transform 200ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  /* :not(:disabled):hover {
    transform: scale(1.05);
    transition: color 200ms;
    color: black;
  } */
  :hover {
    transform: scale(1.05) translateY(0.125rem);
  }
`;


export const PopUpButtonYes = styled.button`
  border: ${(props) => props.theme.colors.color5} solid
    ${(props) => props.theme.size.xxxxxxxs};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.color1};
  color: ${(props) => props.theme.colors.color5};
  text-align: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  cursor: pointer;
`;
export const PopUpButtonNo = styled.button`
  border: ${(props) => props.theme.colors.color5} solid
    ${(props) => props.theme.size.xxxxxxxs};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.color2};
  color: ${(props) => props.theme.colors.color5};
  text-align: center;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  cursor: pointer;
`;

//popup
export const PopUp = styled.div`
  background-color: ${(props) => props.theme.colors.color2};
  color: ${(props) => props.theme.colors.color5};
  border: ${(props) => props.theme.colors.color3} solid
    ${(props) => props.theme.size.xxxxxxxs};
  border-radius: ${(props) => props.theme.size.xxxxxxxs};
  width: 90vw;
  font-weight: bold;
  text-align: center;
`;

//open & close box
export const OpenCloseBox = styled.div`
  display: flex;
  flex-direction: column;
  border: ${(props) => props.theme.colors.color2} solid
    ${(props) => props.theme.size.xxxxxxxs};
  border-radius: ${(props) => props.theme.size.xxxxxxxs};
  width: 252px;
  background-color: ${(props) => props.theme.colors.color5};
  color: ${(props) => props.theme.colors.color4};
  @media (orientation: landscape) {
    width: 580px;
  }
  @media (orientation: portrait) and (min-width: 768px) {
    width: 690px;
  }
  @media (orientation: landscape) and (min-height: 768px) {
    width: 800px;
  }
  @media (orientation: portrait) and (min-width: 1024px) {
    width: 900px;
  }
  @media (orientation: landscape) and (min-height: 1024px) {
    width: 1100px;
  }
  .padding {
    padding: ${(props) => props.theme.size.xxxxxxs};
    @media (orientation: portrait) and (min-width: 768px) {
      padding: ${(props) => props.theme.size.xxxxs};
    }
  }
  .fontSize {
    font-size: ${(props) => props.theme.size.xxxs};
    @media (orientation: landscape) {
      font-size: ${(props) => props.theme.size.xxxxs};
    }
    @media (orientation: portrait) and (min-width: 768px) {
      font-size: ${(props) => props.theme.size.s};
    }
    @media (orientation: landscape) and (min-height: 768px) {
      font-size: ${(props) => props.theme.size.s};
    }
    @media (orientation: portrait) and (min-width: 1024px) {
      font-size: ${(props) => props.theme.size.l};
    }
    @media (orientation: landscape) and (min-height: 1024px) {
      font-size: ${(props) => props.theme.size.l};
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${(props) => props.theme.colors.color2} solid
      ${(props) => props.theme.size.xxxxxxxs};
    h3 {
      font-weight: bold;
      width: 232px;
      text-align: center;
      @media (orientation: landscape) {
        width: 560px;
      }
      @media (orientation: portrait) and (min-width: 768px) {
        width: 660px;
      }
      @media (orientation: landscape) and (min-height: 768px) {
        width: 770px;
      }
      @media (orientation: portrait) and (min-width: 1024px) {
        width: 860px;
      }
      @media (orientation: landscape) and (min-height: 1024px) {
        width: 1060px;
      }
    }
    img {
      height: 20px;
      width: 20px;
      cursor: pointer;
      @media (orientation: portrait) and (min-width: 768px) {
        width: 30px;
        height: 30px;
      }
      @media (orientation: landscape) and (min-height: 768px) {
        width: 30px;
        height: 30px;
      }
      @media (orientation: portrait) and (min-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      @media (orientation: landscape) and (min-height: 1024px) {
        width: 40px;
        height: 40px;
      }
    }
  }
  .content {
    a {
      color: ${(props) => props.theme.colors.color4};
    }
    a:hover {
      font-weight: bold;
    }
    a:visited {
      color: ${(props) => props.theme.colors.color2};
    }
  }
`;
