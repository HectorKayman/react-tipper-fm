import { TipDisplay } from "./TipDisplay";
import { TipForm } from "./TipForm";

export default function App() {
  return (
    <div className="flex gap-10 rounded-3xl bg-white p-8 font-mono font-bold">
      <TipForm />
      <TipDisplay />
    </div>
  );
}
