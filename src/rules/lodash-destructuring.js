function validateSpecifiers(specifiers) {
  return !specifiers.find(s => {
    if (s.type === 'ImportDefaultSpecifier' || s.type === 'ImportNamespaceSpecifier') {
      return true;
    }
    if (s.type === 'ImportSpecifier' && s.imported.name === 'default') {
      return true;
    }
    return false;
  });
}

export default function(context) {
  return {
    ImportDeclaration({ specifiers, type, source}) {
      if (type === 'ImportDeclaration' && source.value === 'lodash' && !validateSpecifiers(specifiers)) {
        context.report(source, 'Importing the entire lodash library is not permitted, please import the specific functions you need');
      }
    }
  };
}
