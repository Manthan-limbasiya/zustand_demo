import create from "zustand";

const initialState = {
  counter: 0,
};

const counterStore = create((set) => ({
  ...initialState,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  increaseBy: (num) => set((state) => ({ counter: state.counter + num })),
  decreaseBy: (num) => set((state) => ({ counter: state.counter - num })),
  reset: () => set(initialState),
}));

// export const increaseCounter = () => {
//   useStore.setState((state) => ({ counter: state.counter + 1 }));
// };
// export const decreaseCounter = () => {
//   useStore.setState((state) => ({ counter: state.counter - 1 }));
// };
// export const increaseBy = () => {
//   useStore.setState((state) => ({ counter: state.counter + num }));
// };
// export const decreaseBy = () => {
//   useStore.setState((state) => ({ counter: state.counter - num }));
// };
// export const reset = () => {
//   useStore.setState(() => initialState);
// };

export default counterStore;
