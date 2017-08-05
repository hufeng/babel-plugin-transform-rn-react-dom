module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function(path, state) {
        var node = path.node;
        var value = node.source.value;
        if (value === 'react-dom') {
          node.source.value = 'react-native';
        }
      }
    }
  };
};
