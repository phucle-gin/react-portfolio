import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const override: CSSProperties = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1"};

  useEffect(() => { setTimeout(() => { setLoading(false)}, 2000)}, []);
  
  return (
    <RingLoader color={"#80b1e3"} loading={loading} size={100}cssOverride={override} />
  )
}
