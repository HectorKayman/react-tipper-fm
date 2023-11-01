import { useState } from "react";
import { TipDisplay } from "./TipDisplay";
import { TipForm } from "./TipForm";

export default function App() {
  const [totalBill, setTotalBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTip] = useState(null);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [billPerPerson, setBillPerPerson] = useState(0);

  function calculateBill() {
    if (!totalBill || !people || !tipPercent) {
      return;
    } else {
      const totalTip = (totalBill * tipPercent) / 100;
      const totalAmount = totalBill + totalTip;
      setTipPerPerson(totalTip / people);
      setBillPerPerson(totalAmount / people);
    }
  }

  function handleReset() {
    setTotalBill("");
    setPeople("");
    setTip(null);
    setTipPerPerson(0);
    setBillPerPerson(0);
  }

  function handleBillChange(e) {
    setTotalBill(Number(e.target.value));
  }

  function handlePeopleChange(e) {
    setPeople(Number(e.target.value));
  }

  function handleTip(e) {
    setTip(Number(e.target.value));
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
        onCalculateBill={calculateBill}
      />
      <TipDisplay
        tipPerPerson={tipPerPerson}
        billPerPerson={billPerPerson}
        onReset={handleReset}
      />
    </div>
  );
}
