import { GraphCanvas } from "./canvas/canvas";
import { Sidebar } from "./sidebar/sidebar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <GraphCanvas></GraphCanvas>
      <Sidebar></Sidebar>
    </div>
  );
}
