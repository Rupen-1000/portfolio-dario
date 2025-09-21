import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

export function smallDisplayCheck() {
    // Standard Tailwind CSS breakpoints as a reference.
    const breakpoints = useBreakpoints(breakpointsTailwind);

    // Create a reactive variable that is true for a mobile-sized viewport.
    return breakpoints.smaller('lg'); // 1024px
}
