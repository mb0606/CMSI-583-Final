// Do not run this is an example formate file!

{
    "start": "q0",
    "accepts": ["q5"],
    "transitions" : {
      "q0" : {
          "X": { "write": "X", "newState": "q0", "direction": "R" },
          "b": { "write": "X", "newState": "q2", "direction": "R" },
          "a": { "write": "X", "newState": "q1", "direction": "R" },
          "B": { "write": "B", "newState": "q5", "direction": "R" }
       },
      "q1" : { 
        "a": { "write": "X", "newState": "q1", "direction": "R" },
        "X": { "write": "X", "newState": "q1", "direction": "R" },
        "b": { "write": "X", "newState": "q3", "direction": "L" }
      },
      "q3" : { 
        "a": { "write": "a", "newState": "q3", "direction": "L" },
        "b": { "write": "b", "newState": "q3", "direction": "L" },
        "X": { "write": "X", "newState": "q3", "direction": "L" },
        "B": { "write": "B", "newState": "q0", "direction": "R" }
      },
      "q2" : { 
        "a": { "write": "X", "newState": "q3", "direction": "L" },
        "b": { "write": "b", "newState": "q2", "direction": "R" },
        "X": { "write": "X", "newState": "q2", "direction": "R" }
      }
    },
    "tests": {
      "accepts": [
        "abba",
        "aababb"
      ],
      "rejects": [
        "",
        "aaaab",
        "bbbbbbbbb"
      ]
    }
}