export const configuration = {
  context: { theme: "light" },
  types: [
    {
      name: "bar-chart",
      load: () => Promise.resolve(window["sn-bar-chart"])
    }
  ]
}