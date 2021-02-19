import React, { useContext } from "react";
import Partidos from "./Partidos";
import NoPartidos from "../NoPartidos/NoPartidos";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { PartidosContext } from "../../PartidosContext";

const OddsportalDrop = () => {
  const { matches } = useContext(PartidosContext);

  console.log({matches})

  const { partidosOP = [], op = [] } = matches

  if (partidosOP) {
    if (partidosOP.length) {
      partidosOP.sort((a, b) => {
        const aMax = Math.max(a.percent1, a.percent2, a.percent3);
        const bMax = Math.max(b.percent1, b.percent2, b.percent3);
        return bMax - aMax;
      });
      return <Partidos partidos={partidosOP} op={op} />;
    } else return <NoPartidos />;
  } else return <SpinnerComponent />;
};

export default OddsportalDrop;

