Create (see example below) or use an example file with the run script.
### Run script
```
    npx babel-node index.js examples/<file.tm>  
```

### Example file must be in format below
```
{
    "start": "q0",
    "accepts": ["q6"],
    "transitions" : {
      "q0" : {
          "X": { "write": "X", "newState": "q6", "direction": "R" },
          "b": { "write": "X", "newState": "q2", "direction": "R" },
          "a": { "write": "X", "newState": "q1", "direction": "R" }
       },
      "q1" : { 
        "a": { "write": "a", "newState": "q1", "direction": "R" },
        "b": { "write": "b", "newState": "q1", "direction": "R" },
        "B": { "write": "B", "newState": "q3", "direction": "L" },
        "X": { "write": "X", "newState": "q3", "direction": "L" }
      },
      "q3" : { 
        "a": { "write": "X", "newState": "q5", "direction": "L" }
      },
      "q4" : { 
        "b": { "write": "X", "newState": "q5", "direction": "L" }
      },
      "q5" : { 
        "a": { "write": "a", "newState": "q5", "direction": "L" },
        "b": { "write": "b", "newState": "q5", "direction": "L" },
        "X": { "write": "X", "newState": "q0", "direction": "R" }
      },
      "q2" : { 
        "a": { "write": "a", "newState": "q2", "direction": "R" },
        "b": { "write": "b", "newState": "q2", "direction": "R" },
        "B": { "write": "B", "newState": "q4", "direction": "L" },
        "X": { "write": "X", "newState": "q4", "direction": "L" }
      } 

    },
    "tests": {
      "accepts": [
        "abba",
        "aa"
      ],
      "rejects": [
        "",
        "cbcbcbcbcbcbcbc",
        "Bbababbaba"
      ]
    }
}
```