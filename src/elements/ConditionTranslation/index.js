import { ContainerConditionTranslation } from "./styles";
import { useState } from "react";
import { useSelector } from "react-redux";

function ConditionTranslation(props) {
  const conditions = useSelector((state) => state.conditions)
    return ( 
        <ContainerConditionTranslation>
            {
                    Number(props.obj.condition) === 1
                      ?
                      <div>{conditions.c1}</div>
                      :
                      Number(props.obj.condition) === 2
                        ?
                        <div>{conditions.c2}</div>
                        :
                        Number(props.obj.condition) === 3
                          ?
                          <div>{conditions.c3}</div>
                          :
                          <div>{conditions.c4}</div>
                  }
        </ContainerConditionTranslation>
     );
}

export default ConditionTranslation;