import catalog, { setBlocks } from "./reducer";
it("check add blocks", () => {
  const action = setBlocks([
    { id: "Stwewe", name: "testName", count: 5 },
    { id: "234", name: "testName2", count: 6 },
  ]);
  const initialState = {
    loading: true,
    error: null,
    openTopicModal: false,
    blocks: [],
  };
  const newState = catalog(initialState, action);
  expect(newState.blocks.length).toBe(2);
});
