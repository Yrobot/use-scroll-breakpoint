/**
 * @description listen the dom.onScroll, return breakpoint < scrollTop
 * @author Yrobot
 * @date 03/06/2021
 * @export
 * @param {*} [{ breakpoint = 0, id = '', onScroll: scrollCallback = () => {} }={}]
 * @return {*}  [breakpoint < scrollTop]
 */
export default function useScrollBreakpoint({ breakpoint, id, onScroll: scrollCallback, }?: {
    breakpoint?: number | undefined;
    id?: string | undefined;
    onScroll?: ((scrollTop: number) => void) | undefined;
}): boolean[];
