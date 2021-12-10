      {
         "transitions" : {
            "q0" : {
               "B" : {
                  "write" : "a",
                  "direction" : "L",
                  "newState" : "q0"
               }
            }
         },
         "accepts" : [
            "q0"
         ],
         "tests" : {
            "accepts" : [
               "Babbabbababa",
               "Bbababbaba",
               "",
              "abababababab",
              "cbcbcbcbcbcbcbc"
            ],
            "rejects" : [

            ]
         },
         "start" : "q0"
      }
  