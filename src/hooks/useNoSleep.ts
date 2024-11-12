import { useState } from "react";
import NoSleep from "nosleep.js";

function useNoSleep() {
  const [flag, setFlag] = useState<boolean>(false);
  const [noSleep] = useState<NoSleep>(new NoSleep());
  function sleepSwithcer() {
    const newFlag = !flag;

    if (newFlag) {
      noSleep.enable();
    } else {
      noSleep.disable();
    }
    setFlag(newFlag);
  }
  return { flag: flag, handler: sleepSwithcer };
}

export { useNoSleep };
