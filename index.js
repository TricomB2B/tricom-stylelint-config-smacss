"use strict"

const order = require("./order")

const generate = require("./generate")

const config = generate(order)

module.exports = {
  "plugins": [
    "stylelint-order",
  ],
  "rules": {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      {
        "type": "at-rule",
        "name": "extend"
      },
      {
        "type": "at-rule",
        "name": "include",
        "hasBlock": false
      },
      "declarations",
      {
        "type": "at-rule",
        "name": "include",
        "hasBlock": true
      },
      "rules"
    ],
    "order/properties-order": config,
  },
}
