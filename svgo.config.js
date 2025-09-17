export default {
  plugins: [
    // Remove hard-coded dimension in svg file.
    { name: 'removeDimensions', active: true },
    // Remove any hard-coded styling that may interfere with the custom-styling.
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|width|height|style)',
      },
    },
    // Add styling attribute if not present
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ fill: 'currentColor' }],
      },
    },
  ],
};