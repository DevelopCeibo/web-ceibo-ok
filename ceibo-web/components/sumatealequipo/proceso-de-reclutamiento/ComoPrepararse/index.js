import React from "react";
import ThreeColumns from "./ThreeColumns";
import ColumnWithVideo from "./ColumnWithVideo";
import { useRoleTypeContext } from "../../../../context/roleType";

const ComoPrepararse = () => {

  const [roleType] = useRoleTypeContext()

  return (
    <div className="container">
      {roleType === 'consultant' ?
        <>
          <ColumnWithVideo />
          <ThreeColumns />
        </>
        : <></>}

    </div>
  );
};

export default ComoPrepararse;