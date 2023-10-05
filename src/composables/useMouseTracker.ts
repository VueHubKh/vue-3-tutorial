import { ref } from "vue";
import { useEventListener } from "./useEventListener";

export const useMouseTracker = () => {
  const x = ref(0);
  const y = ref(0);

  const update = (event: any) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  const consoler = (msg: string) => console.log(msg);

  useEventListener(window, "mousemove", update);
  useEventListener(window, "click", function () {
    consoler("HEllo");
  });

  return {
    x,
    y,
  };
};
