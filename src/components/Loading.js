import React, { useState, useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const override: CSSProperties = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1"};

  useEffect(() => { setTimeout(() => { setLoading(false)}, 5000)}, []);
  
  return (
    <div className="loader-wrapper">
      <SyncLoader color={"var(--secondary-color)"} loading={loading} size={25} margin={10} cssOverride={override}/>
    </div>

  )
}
