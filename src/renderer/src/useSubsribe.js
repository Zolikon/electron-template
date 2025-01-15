import { useEffect } from "react";
import { useElectron } from "./useElectron";

export function useSubscribe(message, onEventTriggered, once = false) {
  const { eventBus } = useElectron();
  useEffect(() => {
    let completedListener;
    if (once) {
      completedListener = eventBus.once(message, (event, status) => {
        onEventTriggered(status);
      });
    } else {
      completedListener = eventBus.on(message, (event, status) => {
        onEventTriggered(status);
      });
    }

    return () => {
      eventBus.removeListener(message, completedListener);
    };
  }, [eventBus]);
}
