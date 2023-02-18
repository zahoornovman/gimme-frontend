import styled from "styled-components";

export const SignInContainer = styled.div`
  margin-top: 50px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;

  .fontSize {
    font-size: ${(props) => props.theme.size.xxxs};

  }
  .contentSignIn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;

    .messageSignIn {
      width: 250px;

    }
    .inputSignIn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 600px;
      max-width: 800px;
      box-shadow: 2px 2px 5px black;
      margin-top: 30px;
      padding: 50px 10px 50px 10px;


      .inputField {

        input {
          width: 300px;
          height: 25px;
          border-radius: 5px;
          background-color: ${(props) => props.theme.colors.color5};
          padding: 5px;
          border: 1px solid ${(props) => props.theme.colors.color7};
          margin-top: 10px;
        }

        input:focus {
          outline:none;
        }
      }
      .buttonsSignIn {
        display: flex;
        row-gap: ${(props) => props.theme.size.xxxxxxs};
        .signInCreateButton {
          font-size: 15px;
          height: 40px;
          border-style: none;
          color: ${(props) => props.theme.colors.color5};
          border-radius: 10px;
          margin-left: 20px;
          margin-bottom: 50px;
          margin-top: 10px;
        }
      }
      .buttonPasswordReset {
        a {
          font-size: ${(props) => props.theme.size.xxxs};
          text-decoration: none;
          :hover {
            text-decoration-line: underline;
          }
        }
      }
    }
  }
`;
