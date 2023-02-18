import styled from 'styled-components';

const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);


export const ContainerBanner = styled.div`
    display: flex;
    width: auto;
    height: 500px;
    margin-top: 0;
    background-color: #fcfcfc;
    Box-shadow: inset 0 0 10px 0 black;

    .leftSquare {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: auto;
      border-bottom-right-radius: 200px;
      box-shadow: 10px 0 5px -8px black;
    }
     .leftSquare h4 {
      font-size: 40px;
      margin-bottom: 50px;
      color: grey;
    }

    .leftSquare h2 {
      font-size: 100px;
      color: ${(props) => props.theme.colors.color1};
    }

    .bannerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: auto;
    }

    .banner {
    width:1000px;
    height: auto;
    }
`

export const ContainerHome = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fontSize {
    font-size: ${(props) => props.theme.size.xxxs};
    /* @media (orientation: portrait) and (min-width: 768px) {
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
    } */
  }
  .loading {
  }
  .notLoading {
    .searchMatch {
      .searchResultButtons {
        display: flex;
        flex-direction: column;
      }
    }

    .objects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: ${(props) => props.theme.size.xxxxxxs};
      column-gap: ${(props) => props.theme.size.xxxxxxs};
      .object {
        border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        width: 120px;
        justify-content: center;
        align-items: center;
        h3 {
          text-align: center;
          padding: ${(props) => props.theme.size.xxxxxxs};
        }
        img {
          height: 50px;
          width: 37.54px;
        }
      }
    }
  }
  .overlayer {
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 10;
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    .popUpWelcomePage {
      position: fixed;
      top: ${(props) => props.theme.size.xxxxxxxxxxxxl};
      width: 400px;
      z-index: 20;
      a {
        color: ${(props) => props.theme.colors.color1};
      }
      a:hover {
        font-weight: bold;
      }
      a:visited {
        color: ${(props) => props.theme.colors.color4};
      }
      .popUpButtonSection{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
      }
    }
  }
`;
export const ContainerWelcome = styled.div`
  margin-top: ${(props) => props.theme.size.xxxxxxl};
  margin-bottom: ${(props) => props.theme.size.xxxxxxl};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fontSize {
    font-size: ${(props) => props.theme.size.xxxs};
    /* @media (orientation: portrait) and (min-width: 768px) {
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
    } */
  }
  .loading {
  }
  .notLoading {
    .searchMatch {
      .searchResultButtons {
        display: flex;
        flex-direction: column;
      }
    }

    .objects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 5rem auto;
      gap: 3rem;
      .object {
        border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        width: 120px;
        justify-content: center;
        align-items: center;
        h3 {
          text-align: center;
          padding: ${(props) => props.theme.size.xxxxxxs};
        }
        img {
          height: 50px;
          width: 37.54px;
        }
      }
    }
  }
`;
