import { Navbar } from "./Navbar";
import Hovedside from "./Hovedside";
import FremsideBilde from "./FremsideBilde";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FremsideBilde />
      <Hovedside />
    </div>
  );
}
