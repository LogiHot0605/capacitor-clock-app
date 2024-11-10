import Clock, { ClockProps } from "react-clock";
import "./capacitorClock.css";

function CapacitorClock(props: ClockProps) {
  return (
    <>
      <Clock {...props} />
    </>
  );
}

export { CapacitorClock };
