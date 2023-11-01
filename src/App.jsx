import { useState } from "react";
import { TipDisplay } from "./TipDisplay";
import { TipForm } from "./TipForm";

export default function App() {
  const [totalBill, setTotalBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTip] = useState(null);

  function handleBillChange(e) {
    setTotalBill(Number(e.target.value));
  }

  function handlePeopleChange(e) {
    setPeople(Number(e.target.value));
  }

  function handleTip(e) {
    setTip(Number(e.target.value));
    console.log(Number(e.target.value));
  }

  return (
    <div className="flex gap-10 bg-white p-8 font-mono font-bold max-mid:my-10 max-mid:flex-col max-small:my-0 small:rounded-3xl">
      <TipForm
        totalBill={totalBill}
        people={people}
        tip={tipPercent}
        handleBillChange={handleBillChange}
        handlePeopleChange={handlePeopleChange}
        handleTip={handleTip}
      />
      <TipDisplay />
    </div>
  );
}
