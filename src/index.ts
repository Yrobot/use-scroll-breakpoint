import { useEffect, useState, useCallback } from "react";
/**
 * @description listen the dom.onScroll, return breakpoint < scrollTop
 * @author Yrobot
 * @date 03/06/2021
 * @export
 * @param {*} [{ breakpoint = 0, id = '', onScroll: scrollCallback = () => {} }={}]
 * @return {*}  [breakpoint < scrollTop]
 */
export default function useScrollBreakpoint({
  breakpoint = 0,
  id = "",
  onScroll: scrollCallback = (scrollTop: number) => {},
} = {}) {
  const [isPass, setPass] = useState(breakpoint < 0);

  const onScroll = useCallback((e) => {
    // for window.scrollTop
    let scrollTop = e?.target?.documentElement?.scrollTop;
    // for element.scrollTop
    if (scrollTop === undefined) scrollTop = e?.target?.scrollTop;
    // if cant get scrollTop, warn on console
    if (scrollTop === undefined) {
      console.warn(
        `useScrollBreakpoint.onScroll.event: scrollTop is undefined`
      );
      return;
    }
    // callback from params
    scrollCallback(scrollTop);

    if (scrollTop > breakpoint) setPass(true);
    if (scrollTop <= breakpoint) setPass(false);
  }, []);

  useEffect(() => {
    // set the listener, if pass id, listen the dom, or listen window
    const listenElement = (id && document.getElementById(id)) || window;
    // listen onScroll
    listenElement.addEventListener("scroll", onScroll);
    // unlisten
    return () => listenElement.removeEventListener("scroll", onScroll);
  }, []);
  return [isPass];
}
