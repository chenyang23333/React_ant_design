var mockjs = require("mockjs");
export default {
  "GET /api/img": mockjs.mock({
    "list|10": [{ src: "@image" }],
  }),
};
