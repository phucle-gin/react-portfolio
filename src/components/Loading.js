import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  const override: CSSProperties = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1"};
  
  return (
    <div className="loader-wrapper">
      <SyncLoader color={"var(--secondary-color)"} size={25} margin={10} cssOverride={override}/>
    </div>

  )
}
