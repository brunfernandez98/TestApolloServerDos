"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const sum = (a, b) => a + b;
(0, globals_1.describe)("test hello", () => {
    (0, globals_1.it)("should return hello world", () => {
        (0, globals_1.expect)(sum(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=testSum.js.map