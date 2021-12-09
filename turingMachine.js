import Tape from "./tape";

export default class TuringMachine {

  constructor({ start, accepts, transitions }) {
    this.startState = start;
    this.acceptStates = accepts;
    this.transitions = transitions;
  }

  accept(FEED) {
    let state = this.startState;
    const tape = new Tape(FEED);

debugger
    while (!this.accepted(state)) {
      const transition = this.transition(state, tape.read());
      if (!transition) {
        return false;
      }
      state = transition["newState"];
      tape.write(transition["write"]);
      tape.move(transition["direction"]);
    }
    return true;
  }


  transition(state, sym) {
    return (this.transitions[state]||{})[sym];
  }

  accepted(state) {
    return this.acceptStates.includes(state)
  }
}




















