'use babel';

import pathHyperclick from "../lib/main";

describe("PathHyperclickProvider", () => {
  function match(s) {
    expect(s.match(pathHyperclick.getProvider().wordRegExp)).toBeTruthy();
  }

  function notMatch(s) {
    expect(s.match(pathHyperclick.getProvider().wordRegExp)).toBeFalsy();
  }

  describe("wordRegExp", () => {
    it("should match path begin with ./", () => {
      match("./test.js");
    });

    it("should match path begin with ../", () => {
      match("../test.js");
    });

    it("should match path begin with /", () => {
      match("/test.js");
    });

    it("should match path that contain space", () => {
      match("./path withspace.js");
      match("./path with space.js");
    });
  });
});
