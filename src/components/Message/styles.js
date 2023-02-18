import styled from "styled-components";

export const ContainerMessageService = styled.div`
  margin-top: 50px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
.fontSize{
    font-size: ${(props) => props.theme.size.xxxs};
}
.accessDenied{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.messageContainer{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.messageSent{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.messageError{
    margin-top: ${(props) => props.theme.size.xxxxxxxl}; 
}
.receiverNotAccessible{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.noAddSelected{
    margin-top: ${(props) => props.theme.size.xxxxxxxl}; 
}

.messageContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 600px;
      max-width: 800px;
      box-shadow: 2px 2px 5px black;
      margin-top: 30px;
      padding: 50px 10px 50px 10px;

        h4 {
            font-size: 15px;
            padding-bottom: 5px;
        }

        .message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h3 {
               font-size: 18px;
               margin-bottom: 10px;
            }

            #message {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 450px;
                height: 200px;
                resize:none;
                font-family: ${(props) => props.theme.fontFamily};
             }

            #message:focus {
                outline:none;
            }

            .sendButton {
                font-size: 15px;
                height: 40px;
                border-style: none;
                color: ${(props) => props.theme.colors.color5};
                border-radius: 10px;
                margin-left: 20px;
                margin-bottom: 20px;
                margin-top: 15px;
            }
            
            .buttonSection {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
                row-gap: 10px;

                h3 {
                    font-size: 18px;
                    margin-bottom: 10px;
                }

                .quickButton {
                    font-size: 15px;
                    border-radius: 25px;
                    height: 30px;
                    padding: 10px;
                    background-color: ${(props) => props.theme.colors.color7};
                    color: ${(props) => props.theme.colors.color3};
                    text-align: center;
                    font-family: ${(props) => props.theme.fontFamily};
                    padding: 7px;
                }
            }
        }
        .fromContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color:  ${(props) => props.theme.colors.color5};
            padding:  ${(props) => props.theme.size.xxxs};
        .fromContainerInformation{
            display: flex;
            flex-direction: column;
            column-gap: ${(props) => props.theme.size.xxxs};
            padding: 10px;
        }
    }
        .toContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color:  ${(props) => props.theme.colors.color5};
            padding:  ${(props) => props.theme.size.xxxs};
                .toContainerInformation{
                    display: flex;
                    column-gap: ${(props) => props.theme.size.xxxs};
                 }   
        }        
}

`