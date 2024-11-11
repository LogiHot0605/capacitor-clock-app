import { useState } from "react";
import NoSleep from "nosleep.js";

function useNoSleep() {
  const [flag, setFlag] = useState<boolean>(false);
  function sleepSwithcer() {
    const newFlag = !flag;
    const noSleep = new NoSleep();

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
