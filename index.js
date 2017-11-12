{
  "languageModel": {
    "types": [
      {
        "name": "Egg",
        "values": [
          {
            "id": null,
            "name": {
              "value": "hard boiled",
              "synonyms": [
                "hard boiled egg",
                "hard boil",
                "boil",
                "hard boiled eggs",
                "hard-boiled egg",
                "hard-boiled eggs"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "soft boiled",
              "synonyms": [
                "soft boiled egg",
                "soft boil",
                "soft boiled eggs",
                "soft-boiled eggs",
                "soft-boiled egg",
                "soft-boil",
                "soft-boiled"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "scrambled",
              "synonyms": [
                "scrambled eggs",
                "scramble"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "sunny side up",
              "synonyms": [
                "sunny",
                "sunny side up egg",
                "sunny side up eggs"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "over easy",
              "synonyms": [
                "over easy egg",
                "easy",
                "runny",
                "over easy eggs",
                "runny egg",
                "runny eggs"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "over medium",
              "synonyms": [
                "medium",
                "over medium egg",
                "over medium eggs"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "over hard",
              "synonyms": [
                "over hard egg",
                "fried",
                "fried egg",
                "fry",
                "fried eggs",
                "over hard eggs"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "poached",
              "synonyms": [
                "poached egg",
                "poach",
                "poached eggs"
              ]
            }
          }
        ]
      }
    ],
    "intents": [
      {
        "name": "AboutIntent",
        "samples": [
          "about"
        ],
        "slots": []
      },
      {
        "name": "AMAZON.CancelIntent",
        "samples": []
      },
      {
        "name": "AMAZON.HelpIntent",
        "samples": []
      },
      {
        "name": "AMAZON.NoIntent",
        "samples": [
          "none",
          "no other eggs",
          "no other",
          "no egg",
          "nothing else",
          "all set"
        ]
      },
      {
        "name": "AMAZON.StopIntent",
        "samples": []
      },
      {
        "name": "EggIntent",
        "samples": [
          "how do i cook a {Egg}",
          "how do i make a {Egg}",
          "how do i boil a {Egg}",
          "how do i fry a {Egg}",
          "how do i bake a {Egg}",
          "how do i {Egg}",
          "{Egg}",
          "how do we make a {Egg}",
          "how do we {Egg}",
          "how to {Egg} eggs",
          "how do we {Egg} an egg",
          "how do i {Egg} an egg",
          "how do i {Egg} eggs",
          "how to make {Egg}",
          "how to make a {Egg}"
        ],
        "slots": [
          {
            "name": "Egg",
            "type": "Egg"
          }
        ]
      }
    ],
    "invocationName": "egg cellent"
  }
}
