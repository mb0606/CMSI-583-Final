import Tape from "./tape"

export default class TuringMachine {
    constructor({ start, accepts, transitions }) {
      this.startState = start;
      this.acceptStates = accepts;
      this.transitions = transitions;
    }
  }