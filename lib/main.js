'use babel';

import path from "path";

module.exports = {
  activate() {
    require("atom-package-deps").install("path-hyperclick");
  },
  getProvider() {
    return {
      wordRegExp: /\.{0,2}\/[A-Za-z0-9\-_\/.][A-Za-z0-9\-_\/. ]*/g,
      providerName: "path-hyperclick",
      /**
       * textEditor {atom$TextEditor}
       * path {string}
       * range {atom$Range}
       */
      getSuggestionForWord(textEditor, _path, range){
        let dir = path.dirname(atom.workspace.getActiveTextEditor().getPath());
        _path = path.join(dir, _path);
        return {
          range,
          callback() {
            if (_path === undefined || _path.length === 0) { return; }
            atom.workspace.open(_path);
          }
        };
      }
    };
  }
};
