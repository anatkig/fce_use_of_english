import { useContext, useEffect } from "react";
import { Context } from "../main_container/MainContainer";
import { dummies } from "../../data/dummies";

const YouPlayerBox = () => {
  const store = useContext(Context);

  useEffect(() => {
    store.setDummie(dummies[Math.floor(Math.random() * dummies.length)]);
  }, [store]);
  return (
    <div style={{ width: "50vw" }}>
      <h5 style={{ color: "black" }}>
        You are playing against{" "}
        <i>
          <strong>{store.dummie}</strong>
        </i>
      </h5>
    </div>
  );
};

export default YouPlayerBox;
