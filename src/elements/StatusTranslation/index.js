import { ContainerStatusTranslation } from "./styles";
import { useSelector } from "react-redux";

function StatusTranslation(props) {
  const status = useSelector((state) => state.status)
    return ( 
        <ContainerStatusTranslation>
            {
                    Number(props.obj.status) === 1
                      ?
                      <div>{status.s1}</div>
                      :
                      Number(props.obj.status) === 2
                        ?
                        <div>{status.s2}</div>
                        :
                        Number(props.obj.status) === 3
                          ?
                          <div>{status.s3}</div>
                          :
                          Number(props.obj.status) === 4
                            ?
                            <div>{status.s4}</div>
                            :
                            <div>{status.s5}</div>
                  }
        </ContainerStatusTranslation>
     );
}

export default StatusTranslation;