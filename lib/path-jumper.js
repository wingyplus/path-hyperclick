'use babel';

module.exports = {
  getProvider() {
    return {
      wordRegExp: /(\/|\.\/|\.\.\/)[A-Za-z0-9\-_\/.]*/g,
      providerName: "path-hyperclick",
      /**
       * textEditor {atom$TextEditor}
       * path {string}
       * range {atom$Range}
       */
      getSuggestionForWord(textEditor, path, range){
        return {
          range,
          callback() {
            if (path === undefined || path.length === 0) { return; }
            atom.workspace.open(path);
          }
        };
      }
    };
  }
};
