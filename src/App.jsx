import { useState } from "react";
import { TipDisplay } from "./TipDisplay";
import { TipForm } from "./TipForm";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(null);

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handlePeopleChange(e) {
    setPeople(e.target.value);
  }

  function handleTip(e) {
    setTip(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="flex gap-10 bg-white p-8 font-mono font-bold max-mid:my-10 max-mid:flex-col max-small:my-0 small:rounded-3xl">
      <TipForm
        bill={bill}
        people={people}
        tip={tip}
        handleBillChange={handleBillChange}
        handlePeopleChange={handlePeopleChange}
        handleTip={handleTip}
      />
      <TipDisplay />
    </div>
  );
}
