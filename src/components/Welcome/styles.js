import styled from 'styled-components';

const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

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
      border: 10px solid pink;
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
      top: ${(props) => props.theme.size.xxxxxxxxl};
      width: 400px;
      z-index: 20;
      a {
        color: ${(props) => props.theme.colors.color3};
      }
      a:hover {
        font-weight: bold;
      }
      a:visited {
        color: ${(props) => props.theme.colors.color5};
      }
    }
  }
`;
export const ContainerWelcome = styled.div`
  margin-top: ${(props) => props.theme.size.xxxxxxl};
  margin-bottom: ${(props) => props.theme.size.xxxxxxl};
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
      margin: 5rem auto;
      gap: 2rem;
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
