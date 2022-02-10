/* eslint-disable */
function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var lib$3 = {};

var formatters$1 = {};

var lib$2 = {};

var isReactComponent$1 = {};

var buildMatchMemberExpression$1 = {};

var matchesPattern$1 = {};

var generated$4 = {};

var shallowEqual$1 = {};

Object.defineProperty(shallowEqual$1, "__esModule", {
  value: true
});
shallowEqual$1.default = shallowEqual;

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);

  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

Object.defineProperty(generated$4, "__esModule", {
  value: true
});
generated$4.isAccessor = isAccessor;
generated$4.isAnyTypeAnnotation = isAnyTypeAnnotation;
generated$4.isArgumentPlaceholder = isArgumentPlaceholder;
generated$4.isArrayExpression = isArrayExpression;
generated$4.isArrayPattern = isArrayPattern;
generated$4.isArrayTypeAnnotation = isArrayTypeAnnotation;
generated$4.isArrowFunctionExpression = isArrowFunctionExpression;
generated$4.isAssignmentExpression = isAssignmentExpression;
generated$4.isAssignmentPattern = isAssignmentPattern;
generated$4.isAwaitExpression = isAwaitExpression;
generated$4.isBigIntLiteral = isBigIntLiteral;
generated$4.isBinary = isBinary;
generated$4.isBinaryExpression = isBinaryExpression;
generated$4.isBindExpression = isBindExpression;
generated$4.isBlock = isBlock;
generated$4.isBlockParent = isBlockParent;
generated$4.isBlockStatement = isBlockStatement;
generated$4.isBooleanLiteral = isBooleanLiteral;
generated$4.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
generated$4.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
generated$4.isBreakStatement = isBreakStatement;
generated$4.isCallExpression = isCallExpression$1;
generated$4.isCatchClause = isCatchClause;
generated$4.isClass = isClass;
generated$4.isClassAccessorProperty = isClassAccessorProperty;
generated$4.isClassBody = isClassBody;
generated$4.isClassDeclaration = isClassDeclaration;
generated$4.isClassExpression = isClassExpression;
generated$4.isClassImplements = isClassImplements;
generated$4.isClassMethod = isClassMethod;
generated$4.isClassPrivateMethod = isClassPrivateMethod;
generated$4.isClassPrivateProperty = isClassPrivateProperty;
generated$4.isClassProperty = isClassProperty;
generated$4.isCompletionStatement = isCompletionStatement;
generated$4.isConditional = isConditional;
generated$4.isConditionalExpression = isConditionalExpression;
generated$4.isContinueStatement = isContinueStatement;
generated$4.isDebuggerStatement = isDebuggerStatement;
generated$4.isDecimalLiteral = isDecimalLiteral;
generated$4.isDeclaration = isDeclaration;
generated$4.isDeclareClass = isDeclareClass;
generated$4.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
generated$4.isDeclareExportDeclaration = isDeclareExportDeclaration;
generated$4.isDeclareFunction = isDeclareFunction;
generated$4.isDeclareInterface = isDeclareInterface;
generated$4.isDeclareModule = isDeclareModule;
generated$4.isDeclareModuleExports = isDeclareModuleExports;
generated$4.isDeclareOpaqueType = isDeclareOpaqueType;
generated$4.isDeclareTypeAlias = isDeclareTypeAlias;
generated$4.isDeclareVariable = isDeclareVariable;
generated$4.isDeclaredPredicate = isDeclaredPredicate;
generated$4.isDecorator = isDecorator;
generated$4.isDirective = isDirective;
generated$4.isDirectiveLiteral = isDirectiveLiteral;
generated$4.isDoExpression = isDoExpression;
generated$4.isDoWhileStatement = isDoWhileStatement;
generated$4.isEmptyStatement = isEmptyStatement;
generated$4.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
generated$4.isEnumBody = isEnumBody;
generated$4.isEnumBooleanBody = isEnumBooleanBody;
generated$4.isEnumBooleanMember = isEnumBooleanMember;
generated$4.isEnumDeclaration = isEnumDeclaration;
generated$4.isEnumDefaultedMember = isEnumDefaultedMember;
generated$4.isEnumMember = isEnumMember;
generated$4.isEnumNumberBody = isEnumNumberBody;
generated$4.isEnumNumberMember = isEnumNumberMember;
generated$4.isEnumStringBody = isEnumStringBody;
generated$4.isEnumStringMember = isEnumStringMember;
generated$4.isEnumSymbolBody = isEnumSymbolBody;
generated$4.isExistsTypeAnnotation = isExistsTypeAnnotation;
generated$4.isExportAllDeclaration = isExportAllDeclaration;
generated$4.isExportDeclaration = isExportDeclaration;
generated$4.isExportDefaultDeclaration = isExportDefaultDeclaration;
generated$4.isExportDefaultSpecifier = isExportDefaultSpecifier;
generated$4.isExportNamedDeclaration = isExportNamedDeclaration;
generated$4.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
generated$4.isExportSpecifier = isExportSpecifier;
generated$4.isExpression = isExpression;
generated$4.isExpressionStatement = isExpressionStatement$1;
generated$4.isExpressionWrapper = isExpressionWrapper;
generated$4.isFile = isFile;
generated$4.isFlow = isFlow;
generated$4.isFlowBaseAnnotation = isFlowBaseAnnotation;
generated$4.isFlowDeclaration = isFlowDeclaration;
generated$4.isFlowPredicate = isFlowPredicate;
generated$4.isFlowType = isFlowType;
generated$4.isFor = isFor;
generated$4.isForInStatement = isForInStatement;
generated$4.isForOfStatement = isForOfStatement;
generated$4.isForStatement = isForStatement;
generated$4.isForXStatement = isForXStatement;
generated$4.isFunction = isFunction$1;
generated$4.isFunctionDeclaration = isFunctionDeclaration;
generated$4.isFunctionExpression = isFunctionExpression;
generated$4.isFunctionParent = isFunctionParent;
generated$4.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
generated$4.isFunctionTypeParam = isFunctionTypeParam;
generated$4.isGenericTypeAnnotation = isGenericTypeAnnotation;
generated$4.isIdentifier = isIdentifier$1;
generated$4.isIfStatement = isIfStatement;
generated$4.isImmutable = isImmutable$2;
generated$4.isImport = isImport;
generated$4.isImportAttribute = isImportAttribute;
generated$4.isImportDeclaration = isImportDeclaration;
generated$4.isImportDefaultSpecifier = isImportDefaultSpecifier;
generated$4.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
generated$4.isImportSpecifier = isImportSpecifier;
generated$4.isIndexedAccessType = isIndexedAccessType;
generated$4.isInferredPredicate = isInferredPredicate;
generated$4.isInterfaceDeclaration = isInterfaceDeclaration;
generated$4.isInterfaceExtends = isInterfaceExtends;
generated$4.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
generated$4.isInterpreterDirective = isInterpreterDirective;
generated$4.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
generated$4.isJSX = isJSX;
generated$4.isJSXAttribute = isJSXAttribute;
generated$4.isJSXClosingElement = isJSXClosingElement;
generated$4.isJSXClosingFragment = isJSXClosingFragment;
generated$4.isJSXElement = isJSXElement;
generated$4.isJSXEmptyExpression = isJSXEmptyExpression;
generated$4.isJSXExpressionContainer = isJSXExpressionContainer;
generated$4.isJSXFragment = isJSXFragment;
generated$4.isJSXIdentifier = isJSXIdentifier$1;
generated$4.isJSXMemberExpression = isJSXMemberExpression;
generated$4.isJSXNamespacedName = isJSXNamespacedName;
generated$4.isJSXOpeningElement = isJSXOpeningElement;
generated$4.isJSXOpeningFragment = isJSXOpeningFragment;
generated$4.isJSXSpreadAttribute = isJSXSpreadAttribute;
generated$4.isJSXSpreadChild = isJSXSpreadChild;
generated$4.isJSXText = isJSXText;
generated$4.isLVal = isLVal;
generated$4.isLabeledStatement = isLabeledStatement;
generated$4.isLiteral = isLiteral;
generated$4.isLogicalExpression = isLogicalExpression;
generated$4.isLoop = isLoop$1;
generated$4.isMemberExpression = isMemberExpression;
generated$4.isMetaProperty = isMetaProperty;
generated$4.isMethod = isMethod;
generated$4.isMiscellaneous = isMiscellaneous;
generated$4.isMixedTypeAnnotation = isMixedTypeAnnotation;
generated$4.isModuleDeclaration = isModuleDeclaration;
generated$4.isModuleExpression = isModuleExpression;
generated$4.isModuleSpecifier = isModuleSpecifier;
generated$4.isNewExpression = isNewExpression$1;
generated$4.isNoop = isNoop;
generated$4.isNullLiteral = isNullLiteral;
generated$4.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
generated$4.isNullableTypeAnnotation = isNullableTypeAnnotation;
generated$4.isNumberLiteral = isNumberLiteral;
generated$4.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
generated$4.isNumberTypeAnnotation = isNumberTypeAnnotation;
generated$4.isNumericLiteral = isNumericLiteral;
generated$4.isObjectExpression = isObjectExpression;
generated$4.isObjectMember = isObjectMember;
generated$4.isObjectMethod = isObjectMethod;
generated$4.isObjectPattern = isObjectPattern;
generated$4.isObjectProperty = isObjectProperty;
generated$4.isObjectTypeAnnotation = isObjectTypeAnnotation;
generated$4.isObjectTypeCallProperty = isObjectTypeCallProperty;
generated$4.isObjectTypeIndexer = isObjectTypeIndexer;
generated$4.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
generated$4.isObjectTypeProperty = isObjectTypeProperty;
generated$4.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
generated$4.isOpaqueType = isOpaqueType;
generated$4.isOptionalCallExpression = isOptionalCallExpression;
generated$4.isOptionalIndexedAccessType = isOptionalIndexedAccessType;
generated$4.isOptionalMemberExpression = isOptionalMemberExpression;
generated$4.isParenthesizedExpression = isParenthesizedExpression;
generated$4.isPattern = isPattern;
generated$4.isPatternLike = isPatternLike;
generated$4.isPipelineBareFunction = isPipelineBareFunction;
generated$4.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
generated$4.isPipelineTopicExpression = isPipelineTopicExpression;
generated$4.isPlaceholder = isPlaceholder$1;
generated$4.isPrivate = isPrivate;
generated$4.isPrivateName = isPrivateName;
generated$4.isProgram = isProgram;
generated$4.isProperty = isProperty;
generated$4.isPureish = isPureish;
generated$4.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
generated$4.isRecordExpression = isRecordExpression;
generated$4.isRegExpLiteral = isRegExpLiteral;
generated$4.isRegexLiteral = isRegexLiteral;
generated$4.isRestElement = isRestElement;
generated$4.isRestProperty = isRestProperty;
generated$4.isReturnStatement = isReturnStatement;
generated$4.isScopable = isScopable;
generated$4.isSequenceExpression = isSequenceExpression;
generated$4.isSpreadElement = isSpreadElement;
generated$4.isSpreadProperty = isSpreadProperty;
generated$4.isStandardized = isStandardized;
generated$4.isStatement = isStatement$2;
generated$4.isStaticBlock = isStaticBlock;
generated$4.isStringLiteral = isStringLiteral$2;
generated$4.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
generated$4.isStringTypeAnnotation = isStringTypeAnnotation;
generated$4.isSuper = isSuper;
generated$4.isSwitchCase = isSwitchCase;
generated$4.isSwitchStatement = isSwitchStatement;
generated$4.isSymbolTypeAnnotation = isSymbolTypeAnnotation;
generated$4.isTSAnyKeyword = isTSAnyKeyword;
generated$4.isTSArrayType = isTSArrayType;
generated$4.isTSAsExpression = isTSAsExpression;
generated$4.isTSBaseType = isTSBaseType;
generated$4.isTSBigIntKeyword = isTSBigIntKeyword;
generated$4.isTSBooleanKeyword = isTSBooleanKeyword;
generated$4.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
generated$4.isTSConditionalType = isTSConditionalType;
generated$4.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
generated$4.isTSConstructorType = isTSConstructorType;
generated$4.isTSDeclareFunction = isTSDeclareFunction;
generated$4.isTSDeclareMethod = isTSDeclareMethod;
generated$4.isTSEntityName = isTSEntityName;
generated$4.isTSEnumDeclaration = isTSEnumDeclaration;
generated$4.isTSEnumMember = isTSEnumMember;
generated$4.isTSExportAssignment = isTSExportAssignment;
generated$4.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
generated$4.isTSExternalModuleReference = isTSExternalModuleReference;
generated$4.isTSFunctionType = isTSFunctionType;
generated$4.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
generated$4.isTSImportType = isTSImportType;
generated$4.isTSIndexSignature = isTSIndexSignature;
generated$4.isTSIndexedAccessType = isTSIndexedAccessType;
generated$4.isTSInferType = isTSInferType;
generated$4.isTSInterfaceBody = isTSInterfaceBody;
generated$4.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
generated$4.isTSIntersectionType = isTSIntersectionType;
generated$4.isTSIntrinsicKeyword = isTSIntrinsicKeyword;
generated$4.isTSLiteralType = isTSLiteralType;
generated$4.isTSMappedType = isTSMappedType;
generated$4.isTSMethodSignature = isTSMethodSignature;
generated$4.isTSModuleBlock = isTSModuleBlock;
generated$4.isTSModuleDeclaration = isTSModuleDeclaration;
generated$4.isTSNamedTupleMember = isTSNamedTupleMember;
generated$4.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
generated$4.isTSNeverKeyword = isTSNeverKeyword;
generated$4.isTSNonNullExpression = isTSNonNullExpression;
generated$4.isTSNullKeyword = isTSNullKeyword;
generated$4.isTSNumberKeyword = isTSNumberKeyword;
generated$4.isTSObjectKeyword = isTSObjectKeyword;
generated$4.isTSOptionalType = isTSOptionalType;
generated$4.isTSParameterProperty = isTSParameterProperty;
generated$4.isTSParenthesizedType = isTSParenthesizedType;
generated$4.isTSPropertySignature = isTSPropertySignature;
generated$4.isTSQualifiedName = isTSQualifiedName;
generated$4.isTSRestType = isTSRestType;
generated$4.isTSStringKeyword = isTSStringKeyword;
generated$4.isTSSymbolKeyword = isTSSymbolKeyword;
generated$4.isTSThisType = isTSThisType;
generated$4.isTSTupleType = isTSTupleType;
generated$4.isTSType = isTSType;
generated$4.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
generated$4.isTSTypeAnnotation = isTSTypeAnnotation;
generated$4.isTSTypeAssertion = isTSTypeAssertion;
generated$4.isTSTypeElement = isTSTypeElement;
generated$4.isTSTypeLiteral = isTSTypeLiteral;
generated$4.isTSTypeOperator = isTSTypeOperator;
generated$4.isTSTypeParameter = isTSTypeParameter;
generated$4.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
generated$4.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
generated$4.isTSTypePredicate = isTSTypePredicate;
generated$4.isTSTypeQuery = isTSTypeQuery;
generated$4.isTSTypeReference = isTSTypeReference;
generated$4.isTSUndefinedKeyword = isTSUndefinedKeyword;
generated$4.isTSUnionType = isTSUnionType;
generated$4.isTSUnknownKeyword = isTSUnknownKeyword;
generated$4.isTSVoidKeyword = isTSVoidKeyword;
generated$4.isTaggedTemplateExpression = isTaggedTemplateExpression;
generated$4.isTemplateElement = isTemplateElement;
generated$4.isTemplateLiteral = isTemplateLiteral;
generated$4.isTerminatorless = isTerminatorless;
generated$4.isThisExpression = isThisExpression;
generated$4.isThisTypeAnnotation = isThisTypeAnnotation;
generated$4.isThrowStatement = isThrowStatement;
generated$4.isTopicReference = isTopicReference;
generated$4.isTryStatement = isTryStatement;
generated$4.isTupleExpression = isTupleExpression;
generated$4.isTupleTypeAnnotation = isTupleTypeAnnotation;
generated$4.isTypeAlias = isTypeAlias;
generated$4.isTypeAnnotation = isTypeAnnotation;
generated$4.isTypeCastExpression = isTypeCastExpression;
generated$4.isTypeParameter = isTypeParameter;
generated$4.isTypeParameterDeclaration = isTypeParameterDeclaration;
generated$4.isTypeParameterInstantiation = isTypeParameterInstantiation;
generated$4.isTypeScript = isTypeScript;
generated$4.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
generated$4.isUnaryExpression = isUnaryExpression;
generated$4.isUnaryLike = isUnaryLike;
generated$4.isUnionTypeAnnotation = isUnionTypeAnnotation;
generated$4.isUpdateExpression = isUpdateExpression;
generated$4.isUserWhitespacable = isUserWhitespacable;
generated$4.isV8IntrinsicIdentifier = isV8IntrinsicIdentifier;
generated$4.isVariableDeclaration = isVariableDeclaration;
generated$4.isVariableDeclarator = isVariableDeclarator;
generated$4.isVariance = isVariance;
generated$4.isVoidTypeAnnotation = isVoidTypeAnnotation;
generated$4.isWhile = isWhile;
generated$4.isWhileStatement = isWhileStatement;
generated$4.isWithStatement = isWithStatement;
generated$4.isYieldExpression = isYieldExpression;

var _shallowEqual$1 = shallowEqual$1;

function isArrayExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBinaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isInterpreterDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBlockStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBreakStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isCallExpression$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isCatchClause(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isConditionalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isContinueStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDebuggerStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDoWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEmptyStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExpressionStatement$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isForInStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isForStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isIdentifier$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isIfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isLabeledStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteral$2(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNumericLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isRegExpLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isLogicalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNewExpression$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isProgram(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isRestElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isReturnStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSequenceExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSwitchCase(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSwitchStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isThisExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isThrowStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTryStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isUnaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isUpdateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclarator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isWithStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isArrayPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isForOfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isMetaProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSpreadElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSuper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTemplateElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTemplateLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isYieldExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isAwaitExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImport(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBigIntLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassAccessorProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassAccessorProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPrivateName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStaticBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StaticBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClassImplements(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareInterface(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModule(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareVariable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isInferredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceExtends(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSymbolTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SymbolTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeCastExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isVariance(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumSymbolBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumSymbolBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBooleanMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumBooleanMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumNumberMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumNumberMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumStringMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumStringMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumDefaultedMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EnumDefaultedMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isOptionalIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXIdentifier$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXText(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPlaceholder$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Placeholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isV8IntrinsicIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "V8IntrinsicIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isArgumentPlaceholder(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArgumentPlaceholder") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBindExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImportAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDecorator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDoExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isRecordExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RecordExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTupleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDecimalLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DecimalLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isModuleExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSParameterProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSQualifiedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSPropertySignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSMethodSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSBigIntKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBigIntKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSIntrinsicKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntrinsicKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNullKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSStringKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSThisType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSFunctionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructorType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypePredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeQuery(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSArrayType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTupleType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSOptionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSRestType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNamedTupleMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamedTupleMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSUnionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSIntersectionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSConditionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSInferType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeOperator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSMappedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSLiteralType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSAsExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSImportType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSExportAssignment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStandardized(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "InterpreterDirective" === nodeType || "Directive" === nodeType || "DirectiveLiteral" === nodeType || "BlockStatement" === nodeType || "BreakStatement" === nodeType || "CallExpression" === nodeType || "CatchClause" === nodeType || "ConditionalExpression" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "File" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "Program" === nodeType || "ObjectExpression" === nodeType || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "RestElement" === nodeType || "ReturnStatement" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "SwitchCase" === nodeType || "SwitchStatement" === nodeType || "ThisExpression" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "VariableDeclaration" === nodeType || "VariableDeclarator" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassBody" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ExportSpecifier" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "MetaProperty" === nodeType || "ClassMethod" === nodeType || "ObjectPattern" === nodeType || "SpreadElement" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateElement" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "ExportNamespaceSpecifier" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType || "StaticBlock" === nodeType || nodeType === "Placeholder" && ("Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode || "BlockStatement" === node.expectedNode || "ClassBody" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ParenthesizedExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType || "Import" === nodeType || "BigIntLiteral" === nodeType || "OptionalMemberExpression" === nodeType || "OptionalCallExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "BindExpression" === nodeType || "DoExpression" === nodeType || "RecordExpression" === nodeType || "TupleExpression" === nodeType || "DecimalLiteral" === nodeType || "ModuleExpression" === nodeType || "TopicReference" === nodeType || "PipelineTopicExpression" === nodeType || "PipelineBareFunction" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType || nodeType === "Placeholder" && ("Expression" === node.expectedNode || "Identifier" === node.expectedNode || "StringLiteral" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBinary(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isScopable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "ClassDeclaration" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBlockParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "Program" === nodeType || "TSModuleBlock" === nodeType || nodeType === "Placeholder" && "BlockStatement" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isStatement$2(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || nodeType === "Placeholder" && ("Statement" === node.expectedNode || "Declaration" === node.expectedNode || "BlockStatement" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTerminatorless(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isCompletionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isConditional(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isLoop$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isWhile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExpressionWrapper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExpressionStatement" === nodeType || "ParenthesizedExpression" === nodeType || "TypeCastExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isForXStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunction$1(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFunctionParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType || "StaticBlock" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPureish(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "EnumDeclaration" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || nodeType === "Placeholder" && "Declaration" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPatternLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isLVal(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType || nodeType === "Placeholder" && ("Pattern" === node.expectedNode || "Identifier" === node.expectedNode)) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSEntityName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Identifier" === nodeType || "TSQualifiedName" === nodeType || nodeType === "Placeholder" && "Identifier" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isImmutable$2(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "BigIntLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "DecimalLiteral" === nodeType || nodeType === "Placeholder" && "StringLiteral" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isUserWhitespacable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isObjectMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassAccessorProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isUnaryLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || nodeType === "Placeholder" && "Pattern" === node.expectedNode) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassExpression" === nodeType || "ClassDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isModuleSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isAccessor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassAccessorProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isPrivate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFlow(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType || "EnumDeclaration" === nodeType || "EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType || "EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFlowType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType || "IndexedAccessType" === nodeType || "OptionalIndexedAccessType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "SymbolTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFlowDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isFlowPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanBody" === nodeType || "EnumNumberBody" === nodeType || "EnumStringBody" === nodeType || "EnumSymbolBody" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("EnumBooleanMember" === nodeType || "EnumNumberMember" === nodeType || "EnumStringMember" === nodeType || "EnumDefaultedMember" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isJSX(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isMiscellaneous(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("Noop" === nodeType || "Placeholder" === nodeType || "V8IntrinsicIdentifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTypeScript(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSParameterProperty" === nodeType || "TSDeclareFunction" === nodeType || "TSDeclareMethod" === nodeType || "TSQualifiedName" === nodeType || "TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType || "TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSNamedTupleMember" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSInterfaceBody" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSEnumDeclaration" === nodeType || "TSEnumMember" === nodeType || "TSModuleDeclaration" === nodeType || "TSModuleBlock" === nodeType || "TSImportType" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExternalModuleReference" === nodeType || "TSNonNullExpression" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType || "TSTypeAnnotation" === nodeType || "TSTypeParameterInstantiation" === nodeType || "TSTypeParameterDeclaration" === nodeType || "TSTypeParameter" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isTSBaseType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if ("TSAnyKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSBigIntKeyword" === nodeType || "TSIntrinsicKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSThisType" === nodeType || "TSLiteralType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual$1.default)(node, opts);
    }
  }

  return false;
}

Object.defineProperty(matchesPattern$1, "__esModule", {
  value: true
});
matchesPattern$1.default = matchesPattern;

var _generated$o = generated$4;

function matchesPattern(member, match, allowPartial) {
  if (!(0, _generated$o.isMemberExpression)(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;

  for (node = member; (0, _generated$o.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;

    if ((0, _generated$o.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, _generated$o.isStringLiteral)(node)) {
      value = node.value;
    } else if ((0, _generated$o.isThisExpression)(node)) {
      value = "this";
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}

Object.defineProperty(buildMatchMemberExpression$1, "__esModule", {
  value: true
});
buildMatchMemberExpression$1.default = buildMatchMemberExpression;

var _matchesPattern = matchesPattern$1;

function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, _matchesPattern.default)(member, parts, allowPartial);
}

Object.defineProperty(isReactComponent$1, "__esModule", {
  value: true
});
isReactComponent$1.default = void 0;

var _buildMatchMemberExpression = buildMatchMemberExpression$1;

const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default$6 = isReactComponent;
isReactComponent$1.default = _default$6;

var isCompatTag$1 = {};

Object.defineProperty(isCompatTag$1, "__esModule", {
  value: true
});
isCompatTag$1.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}

var buildChildren$1 = {};

var cleanJSXElementLiteralChild$1 = {};

var generated$3 = {};

var builder$2 = {};

var definitions = {};

let fastProto = null;

// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(o) {
	// A prototype object will have "fast properties" enabled once it is checked
	// against the inline property cache of a function, e.g. fastProto.property:
	// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
	if (fastProto !== null && typeof fastProto.property) {
		const result = fastProto;
		fastProto = FastObject.prototype = null;
		return result;
	}
	fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
	return new FastObject;
}

// Initialize the inline property cache of FastObject
FastObject();

var toFastProperties = function toFastproperties(o) {
	return FastObject(o);
};

var core = {};

var is$1 = {};

var isType$1 = {};

Object.defineProperty(isType$1, "__esModule", {
  value: true
});
isType$1.default = isType;

var _definitions$a = definitions;

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (_definitions$a.ALIAS_KEYS[targetType]) return false;
  const aliases = _definitions$a.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}

var isPlaceholderType$1 = {};

Object.defineProperty(isPlaceholderType$1, "__esModule", {
  value: true
});
isPlaceholderType$1.default = isPlaceholderType;

var _definitions$9 = definitions;

function isPlaceholderType(placeholderType, targetType) {
  if (placeholderType === targetType) return true;
  const aliases = _definitions$9.PLACEHOLDERS_ALIAS[placeholderType];

  if (aliases) {
    for (const alias of aliases) {
      if (targetType === alias) return true;
    }
  }

  return false;
}

Object.defineProperty(is$1, "__esModule", {
  value: true
});
is$1.default = is;

var _shallowEqual = shallowEqual$1;

var _isType$1 = isType$1;

var _isPlaceholderType = isPlaceholderType$1;

var _definitions$8 = definitions;

function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, _isType$1.default)(node.type, type);

  if (!matches) {
    if (!opts && node.type === "Placeholder" && type in _definitions$8.FLIPPED_ALIAS_KEYS) {
      return (0, _isPlaceholderType.default)(node.expectedNode, type);
    }

    return false;
  }

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}

var isValidIdentifier$1 = {};

var lib$1 = {};

var identifier$2 = {};

Object.defineProperty(identifier$2, "__esModule", {
  value: true
});
identifier$2.isIdentifierChar = isIdentifierChar$1;
identifier$2.isIdentifierName = isIdentifierName;
identifier$2.isIdentifierStart = isIdentifierStart$1;
let nonASCIIidentifierStartChars$1 = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars$1 = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart$1 = new RegExp("[" + nonASCIIidentifierStartChars$1 + "]");
const nonASCIIidentifier$1 = new RegExp("[" + nonASCIIidentifierStartChars$1 + nonASCIIidentifierChars$1 + "]");
nonASCIIidentifierStartChars$1 = nonASCIIidentifierChars$1 = null;
const astralIdentifierStartCodes$1 = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
const astralIdentifierCodes$1 = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet$1(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart$1(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart$1.test(String.fromCharCode(code));
  }

  return isInAstralSet$1(code, astralIdentifierStartCodes$1);
}

function isIdentifierChar$1(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier$1.test(String.fromCharCode(code));
  }

  return isInAstralSet$1(code, astralIdentifierStartCodes$1) || isInAstralSet$1(code, astralIdentifierCodes$1);
}

function isIdentifierName(name) {
  let isFirst = true;

  for (let i = 0; i < name.length; i++) {
    let cp = name.charCodeAt(i);

    if ((cp & 0xfc00) === 0xd800 && i + 1 < name.length) {
      const trail = name.charCodeAt(++i);

      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }

    if (isFirst) {
      isFirst = false;

      if (!isIdentifierStart$1(cp)) {
        return false;
      }
    } else if (!isIdentifierChar$1(cp)) {
      return false;
    }
  }

  return !isFirst;
}

var keyword = {};

Object.defineProperty(keyword, "__esModule", {
  value: true
});
keyword.isKeyword = isKeyword$1;
keyword.isReservedWord = isReservedWord$1;
keyword.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord$1;
keyword.isStrictBindReservedWord = isStrictBindReservedWord$1;
keyword.isStrictReservedWord = isStrictReservedWord$1;
const reservedWords$1 = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords$2 = new Set(reservedWords$1.keyword);
const reservedWordsStrictSet$1 = new Set(reservedWords$1.strict);
const reservedWordsStrictBindSet$1 = new Set(reservedWords$1.strictBind);

function isReservedWord$1(word, inModule) {
  return inModule && word === "await" || word === "enum";
}

function isStrictReservedWord$1(word, inModule) {
  return isReservedWord$1(word, inModule) || reservedWordsStrictSet$1.has(word);
}

function isStrictBindOnlyReservedWord$1(word) {
  return reservedWordsStrictBindSet$1.has(word);
}

function isStrictBindReservedWord$1(word, inModule) {
  return isStrictReservedWord$1(word, inModule) || isStrictBindOnlyReservedWord$1(word);
}

function isKeyword$1(word) {
  return keywords$2.has(word);
}

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isIdentifierChar", {
  enumerable: true,
  get: function () {
    return _identifier.isIdentifierChar;
  }
});
Object.defineProperty(exports, "isIdentifierName", {
  enumerable: true,
  get: function () {
    return _identifier.isIdentifierName;
  }
});
Object.defineProperty(exports, "isIdentifierStart", {
  enumerable: true,
  get: function () {
    return _identifier.isIdentifierStart;
  }
});
Object.defineProperty(exports, "isKeyword", {
  enumerable: true,
  get: function () {
    return _keyword.isKeyword;
  }
});
Object.defineProperty(exports, "isReservedWord", {
  enumerable: true,
  get: function () {
    return _keyword.isReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
  enumerable: true,
  get: function () {
    return _keyword.isStrictBindOnlyReservedWord;
  }
});
Object.defineProperty(exports, "isStrictBindReservedWord", {
  enumerable: true,
  get: function () {
    return _keyword.isStrictBindReservedWord;
  }
});
Object.defineProperty(exports, "isStrictReservedWord", {
  enumerable: true,
  get: function () {
    return _keyword.isStrictReservedWord;
  }
});

var _identifier = identifier$2;

var _keyword = keyword;
}(lib$1));

Object.defineProperty(isValidIdentifier$1, "__esModule", {
  value: true
});
isValidIdentifier$1.default = isValidIdentifier;

var _helperValidatorIdentifier$2 = lib$1;

function isValidIdentifier(name, reserved = true) {
  if (typeof name !== "string") return false;

  if (reserved) {
    if ((0, _helperValidatorIdentifier$2.isKeyword)(name) || (0, _helperValidatorIdentifier$2.isStrictReservedWord)(name, true)) {
      return false;
    }
  }

  return (0, _helperValidatorIdentifier$2.isIdentifierName)(name);
}

var constants = {};

Object.defineProperty(constants, "__esModule", {
  value: true
});
constants.UPDATE_OPERATORS = constants.UNARY_OPERATORS = constants.STRING_UNARY_OPERATORS = constants.STATEMENT_OR_BLOCK_KEYS = constants.NUMBER_UNARY_OPERATORS = constants.NUMBER_BINARY_OPERATORS = constants.NOT_LOCAL_BINDING = constants.LOGICAL_OPERATORS = constants.INHERIT_KEYS = constants.FOR_INIT_KEYS = constants.FLATTENABLE_KEYS = constants.EQUALITY_BINARY_OPERATORS = constants.COMPARISON_BINARY_OPERATORS = constants.COMMENT_KEYS = constants.BOOLEAN_UNARY_OPERATORS = constants.BOOLEAN_NUMBER_BINARY_OPERATORS = constants.BOOLEAN_BINARY_OPERATORS = constants.BLOCK_SCOPED_SYMBOL = constants.BINARY_OPERATORS = constants.ASSIGNMENT_OPERATORS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
constants.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
constants.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
constants.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
constants.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
constants.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
constants.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
constants.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
constants.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
constants.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
constants.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
constants.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
constants.BINARY_OPERATORS = BINARY_OPERATORS;
const ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
constants.ASSIGNMENT_OPERATORS = ASSIGNMENT_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
constants.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
constants.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
constants.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
constants.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
constants.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
constants.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
constants.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;

var utils = {};

var validate$4 = {};

Object.defineProperty(validate$4, "__esModule", {
  value: true
});
validate$4.default = validate$3;
validate$4.validateChild = validateChild;
validate$4.validateField = validateField;

var _definitions$7 = definitions;

function validate$3(node, key, val) {
  if (!node) return;
  const fields = _definitions$7.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}

function validateField(node, key, val, field) {
  if (!(field != null && field.validate)) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

function validateChild(node, key, val) {
  if (val == null) return;
  const validate = _definitions$7.NODE_PARENT_VALIDATIONS[val.type];
  if (!validate) return;
  validate(node, key, val);
}

Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.VISITOR_KEYS = utils.NODE_PARENT_VALIDATIONS = utils.NODE_FIELDS = utils.FLIPPED_ALIAS_KEYS = utils.DEPRECATED_KEYS = utils.BUILDER_KEYS = utils.ALIAS_KEYS = void 0;
utils.arrayOf = arrayOf;
utils.arrayOfType = arrayOfType;
utils.assertEach = assertEach;
utils.assertNodeOrValueType = assertNodeOrValueType;
utils.assertNodeType = assertNodeType;
utils.assertOneOf = assertOneOf;
utils.assertOptionalChainStart = assertOptionalChainStart;
utils.assertShape = assertShape;
utils.assertValueType = assertValueType;
utils.chain = chain;
utils.default = defineType$5;
utils.defineAliasedType = defineAliasedType;
utils.typeIs = typeIs;
utils.validate = validate$2;
utils.validateArrayOfType = validateArrayOfType;
utils.validateOptional = validateOptional;
utils.validateOptionalType = validateOptionalType;
utils.validateType = validateType;

var _is$3 = is$1;

var _validate$1 = validate$4;

const VISITOR_KEYS = {};
utils.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
utils.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
utils.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
utils.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
utils.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
utils.DEPRECATED_KEYS = DEPRECATED_KEYS;
const NODE_PARENT_VALIDATIONS = {};
utils.NODE_PARENT_VALIDATIONS = NODE_PARENT_VALIDATIONS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else {
    return typeof val;
  }
}

function validate$2(validate) {
  return {
    validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}

function validateType(typeName) {
  return validate$2(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate$2(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (let i = 0; i < val.length; i++) {
      const subkey = `${key}[${i}]`;
      const v = val[i];
      callback(node, subkey, v);
      if (process.env.BABEL_TYPES_8_BREAKING) (0, _validate$1.validateChild)(node, subkey, v);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf(...values) {
  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if ((0, _is$3.default)(type, val)) {
        (0, _validate$1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    for (const type of types) {
      if (getType(val) === type || (0, _is$3.default)(type, val)) {
        (0, _validate$1.validateChild)(node, key, val);
        return;
      }
    }

    throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} but instead got ${JSON.stringify(val == null ? void 0 : val.type)}`);
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    const valid = getType(val) === type;

    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }

  validate.type = type;
  return validate;
}

function assertShape(shape) {
  function validate(node, key, val) {
    const errors = [];

    for (const property of Object.keys(shape)) {
      try {
        (0, _validate$1.validateField)(node, property, val[property], shape[property]);
      } catch (error) {
        if (error instanceof TypeError) {
          errors.push(error.message);
          continue;
        }

        throw error;
      }
    }

    if (errors.length) {
      throw new TypeError(`Property ${key} of ${node.type} expected to have the following:\n${errors.join("\n")}`);
    }
  }

  validate.shapeOf = shape;
  return validate;
}

function assertOptionalChainStart() {
  function validate(node) {
    var _current;

    let current = node;

    while (node) {
      const {
        type
      } = current;

      if (type === "OptionalCallExpression") {
        if (current.optional) return;
        current = current.callee;
        continue;
      }

      if (type === "OptionalMemberExpression") {
        if (current.optional) return;
        current = current.object;
        continue;
      }

      break;
    }

    throw new TypeError(`Non-optional ${node.type} must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${(_current = current) == null ? void 0 : _current.type}`);
  }

  return validate;
}

function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }

  validate.chainOf = fns;

  if (fns.length >= 2 && "type" in fns[0] && fns[0].type === "array" && !("each" in fns[1])) {
    throw new Error(`An assertValueType("array") validator can only be followed by an assertEach(...) validator.`);
  }

  return validate;
}

const validTypeOpts = ["aliases", "builder", "deprecatedAlias", "fields", "inherits", "visitor", "validate"];
const validFieldKeys = ["default", "optional", "validate"];

function defineAliasedType(...aliases) {
  return (type, opts = {}) => {
    let defined = opts.aliases;

    if (!defined) {
      var _store$opts$inherits$, _defined;

      if (opts.inherits) defined = (_store$opts$inherits$ = store[opts.inherits].aliases) == null ? void 0 : _store$opts$inherits$.slice();
      (_defined = defined) != null ? _defined : defined = [];
      opts.aliases = defined;
    }

    const additional = aliases.filter(a => !defined.includes(a));
    defined.unshift(...additional);
    return defineType$5(type, opts);
  };
}

function defineType$5(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  let fields = opts.fields;

  if (!fields) {
    fields = {};

    if (inherits.fields) {
      const keys = Object.getOwnPropertyNames(inherits.fields);

      for (const key of keys) {
        const field = inherits.fields[key];
        const def = field.default;

        if (Array.isArray(def) ? def.length > 0 : def && typeof def === "object") {
          throw new Error("field defaults can only be primitives or empty arrays currently");
        }

        fields[key] = {
          default: Array.isArray(def) ? [] : def,
          optional: field.optional,
          validate: field.validate
        };
      }
    }
  }

  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];

  for (const k of Object.keys(opts)) {
    if (validTypeOpts.indexOf(k) === -1) {
      throw new Error(`Unknown type option "${k}" on ${type}`);
    }
  }

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }

  for (const key of Object.keys(fields)) {
    const field = fields[key];

    if (field.default !== undefined && builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate && field.default != null) {
      field.validate = assertValueType(getType(field.default));
    }

    for (const k of Object.keys(field)) {
      if (validFieldKeys.indexOf(k) === -1) {
        throw new Error(`Unknown field key "${k}" on ${type}.${key}`);
      }
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });

  if (opts.validate) {
    NODE_PARENT_VALIDATIONS[type] = opts.validate;
  }

  store[type] = opts;
}

const store = {};

Object.defineProperty(core, "__esModule", {
  value: true
});
core.patternLikeCommon = core.functionTypeAnnotationCommon = core.functionDeclarationCommon = core.functionCommon = core.classMethodOrPropertyCommon = core.classMethodOrDeclareMethodCommon = void 0;

var _is$2 = is$1;

var _isValidIdentifier$3 = isValidIdentifier$1;

var _helperValidatorIdentifier$1 = lib$1;

var _constants$5 = constants;

var _utils$6 = utils;

const defineType$4 = (0, _utils$6.defineAliasedType)("Standardized");
defineType$4("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: !process.env.BABEL_TYPES_8_BREAKING ? [] : undefined
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
defineType$4("AssignmentExpression", {
  fields: {
    operator: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertValueType)("string");
        }

        const identifier = (0, _utils$6.assertOneOf)(..._constants$5.ASSIGNMENT_OPERATORS);
        const pattern = (0, _utils$6.assertOneOf)("=");
        return function (node, key, val) {
          const validator = (0, _is$2.default)("Pattern", node.left) ? pattern : identifier;
          validator(node, key, val);
        };
      }()
    },
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("LVal") : (0, _utils$6.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
defineType$4("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.BINARY_OPERATORS)
    },
    left: {
      validate: function () {
        const expression = (0, _utils$6.assertNodeType)("Expression");
        const inOp = (0, _utils$6.assertNodeType)("Expression", "PrivateName");

        const validator = function (node, key, val) {
          const validator = node.operator === "in" ? inOp : expression;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "PrivateName"];
        return validator;
      }()
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
defineType$4("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  }
});
defineType$4("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertNodeType)("DirectiveLiteral")
    }
  }
});
defineType$4("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  }
});
defineType$4("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
defineType$4("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: Object.assign({
    callee: {
      validate: (0, _utils$6.assertNodeType)("Expression", "V8IntrinsicIdentifier")
    },
    arguments: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils$6.assertOneOf)(true, false),
      optional: true
    }
  } : {}, {
    typeArguments: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  })
});
defineType$4("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
defineType$4("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
defineType$4("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
defineType$4("DebuggerStatement", {
  aliases: ["Statement"]
});
defineType$4("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
defineType$4("EmptyStatement", {
  aliases: ["Statement"]
});
defineType$4("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
defineType$4("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils$6.assertNodeType)("Program")
    },
    comments: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? Object.assign(() => {}, {
        each: {
          oneOfNodeTypes: ["CommentBlock", "CommentLine"]
        }
      }) : (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("CommentBlock", "CommentLine")),
      optional: true
    },
    tokens: {
      validate: (0, _utils$6.assertEach)(Object.assign(() => {}, {
        type: "any"
      })),
      optional: true
    }
  }
});
defineType$4("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("VariableDeclaration", "LVal") : (0, _utils$6.assertNodeType)("VariableDeclaration", "Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils$6.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Identifier", "Pattern", "RestElement")))
  },
  generator: {
    default: false
  },
  async: {
    default: false
  }
};
core.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
core.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils$6.assertNodeType)("Identifier"),
    optional: true
  }
});
core.functionDeclarationCommon = functionDeclarationCommon;
defineType$4("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"],
  validate: function () {
    if (!process.env.BABEL_TYPES_8_BREAKING) return () => {};
    const identifier = (0, _utils$6.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!(0, _is$2.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
defineType$4("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator")))
  }
};
core.patternLikeCommon = patternLikeCommon;
defineType$4("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!(0, _isValidIdentifier$3.default)(val, false)) {
          throw new TypeError(`"${val}" is not a valid identifier name`);
        }
      }, {
        type: "string"
      }))
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /\.(\w+)$/.exec(key);
    if (!match) return;
    const [, parentKey] = match;
    const nonComp = {
      computed: false
    };

    if (parentKey === "property") {
      if ((0, _is$2.default)("MemberExpression", parent, nonComp)) return;
      if ((0, _is$2.default)("OptionalMemberExpression", parent, nonComp)) return;
    } else if (parentKey === "key") {
      if ((0, _is$2.default)("Property", parent, nonComp)) return;
      if ((0, _is$2.default)("Method", parent, nonComp)) return;
    } else if (parentKey === "exported") {
      if ((0, _is$2.default)("ExportSpecifier", parent)) return;
    } else if (parentKey === "imported") {
      if ((0, _is$2.default)("ImportSpecifier", parent, {
        imported: node
      })) return;
    } else if (parentKey === "meta") {
      if ((0, _is$2.default)("MetaProperty", parent, {
        meta: node
      })) return;
    }

    if (((0, _helperValidatorIdentifier$1.isKeyword)(node.name) || (0, _helperValidatorIdentifier$1.isReservedWord)(node.name, false)) && node.name !== "this") {
      throw new TypeError(`"${node.name}" is not a valid identifier`);
    }
  }

});
defineType$4("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Pureish", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils$6.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        const invalid = /[^gimsuy]/.exec(val);

        if (invalid) {
          throw new TypeError(`"${invalid[0]}" is not a valid RegExp flag`);
        }
      }, {
        type: "string"
      })),
      default: ""
    }
  }
});
defineType$4("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("MemberExpression", {
  builder: ["object", "property", "computed", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["optional"] : [])],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: Object.assign({
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, _utils$6.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "PrivateName"];
        return validator;
      }()
    },
    computed: {
      default: false
    }
  }, !process.env.BABEL_TYPES_8_BREAKING ? {
    optional: {
      validate: (0, _utils$6.assertOneOf)(true, false),
      optional: true
    }
  } : {})
});
defineType$4("NewExpression", {
  inherits: "CallExpression"
});
defineType$4("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, _utils$6.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils$6.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils$6.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
defineType$4("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
defineType$4("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed", "generator", "async"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    kind: Object.assign({
      validate: (0, _utils$6.assertOneOf)("method", "get", "set")
    }, !process.env.BABEL_TYPES_8_BREAKING ? {
      default: "method"
    } : {}),
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils$6.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
defineType$4("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", ...(!process.env.BABEL_TYPES_8_BREAKING ? ["decorators"] : [])],
  fields: {
    computed: {
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils$6.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier", "StringLiteral", "NumericLiteral"];
        return validator;
      }()
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.computed) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if computed is true");
        }
      }, {
        type: "boolean"
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !(0, _is$2.default)("Identifier", node.key)) {
          throw new TypeError("Property shorthand of ObjectProperty cannot be true if key is not an Identifier");
        }
      }),
      default: false
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"],
  validate: function () {
    const pattern = (0, _utils$6.assertNodeType)("Identifier", "Pattern");
    const expression = (0, _utils$6.assertNodeType)("Expression");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;
      const validator = (0, _is$2.default)("ObjectPattern", parent) ? pattern : expression;
      validator(node, "value", node.value);
    };
  }()
});
defineType$4("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("LVal") : (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern", "MemberExpression")
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  }),

  validate(parent, key) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    const match = /(\w+)\[(\d+)\]/.exec(key);
    if (!match) throw new Error("Internal Babel error: malformed key.");
    const [, listKey, index] = match;

    if (parent[listKey].length > index + 1) {
      throw new TypeError(`RestElement must be last element of ${listKey}`);
    }
  }

});
defineType$4("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    }
  }
});
defineType$4("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
defineType$4("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  }
});
defineType$4("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("SwitchCase")))
    }
  }
});
defineType$4("ThisExpression", {
  aliases: ["Expression"]
});
defineType$4("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("BlockStatement"), Object.assign(function (node) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (!node.handler && !node.finalizer) {
          throw new TypeError("TryStatement expects either a handler or finalizer, or both");
        }
      }, {
        oneOfNodeTypes: ["BlockStatement"]
      }))
    },
    handler: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  }
});
defineType$4("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
defineType$4("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertNodeType)("Expression") : (0, _utils$6.assertNodeType)("Identifier", "MemberExpression")
    },
    operator: {
      validate: (0, _utils$6.assertOneOf)(..._constants$5.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
defineType$4("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils$6.assertOneOf)("var", "let", "const")
    },
    declarations: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("VariableDeclarator")))
    }
  },

  validate(parent, key, node) {
    if (!process.env.BABEL_TYPES_8_BREAKING) return;
    if (!(0, _is$2.default)("ForXStatement", parent, {
      left: node
    })) return;

    if (node.declarations.length !== 1) {
      throw new TypeError(`Exactly one VariableDeclarator is required in the VariableDeclaration of a ${parent.type}`);
    }
  }

});
defineType$4("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertNodeType)("LVal");
        }

        const normal = (0, _utils$6.assertNodeType)("Identifier", "ArrayPattern", "ObjectPattern");
        const without = (0, _utils$6.assertNodeType)("Identifier");
        return function (node, key, val) {
          const validator = node.init ? normal : without;
          validator(node, key, val);
        };
      }()
    },
    definite: {
      optional: true,
      validate: (0, _utils$6.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    }
  }
});
defineType$4("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    left: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern", "MemberExpression")
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
defineType$4("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    elements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeOrValueType)("null", "PatternLike")))
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    optional: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  })
});
defineType$4("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    expression: {
      validate: (0, _utils$6.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
defineType$4("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "ClassAccessorProperty", "TSDeclareMethod", "TSIndexSignature", "StaticBlock")))
    }
  }
});
defineType$4("ClassExpression", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Expression"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils$6.assertNodeType)("InterfaceExtends"),
      optional: true
    }
  }
});
defineType$4("ClassDeclaration", {
  inherits: "ClassExpression",
  aliases: ["Scopable", "Class", "Statement", "Declaration"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
      optional: true
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    superTypeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    },
    implements: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    mixins: {
      validate: (0, _utils$6.assertNodeType)("InterfaceExtends"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    }
  },
  validate: function () {
    const identifier = (0, _utils$6.assertNodeType)("Identifier");
    return function (parent, key, node) {
      if (!process.env.BABEL_TYPES_8_BREAKING) return;

      if (!(0, _is$2.default)("ExportDefaultDeclaration", parent)) {
        identifier(node, "id", node.id);
      }
    };
  }()
});
defineType$4("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral")
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("type", "value")),
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    }
  }
});
defineType$4("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils$6.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("value"))
  }
});
defineType$4("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("Declaration"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.specifiers.length) {
          throw new TypeError("Only declaration or specifiers is allowed on ExportNamedDeclaration");
        }
      }, {
        oneOfNodeTypes: ["Declaration"]
      }), function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && node.source) {
          throw new TypeError("Cannot export a declaration from a source");
        }
      })
    },
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      default: [],
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)(function () {
        const sourced = (0, _utils$6.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier");
        const sourceless = (0, _utils$6.assertNodeType)("ExportSpecifier");
        if (!process.env.BABEL_TYPES_8_BREAKING) return sourced;
        return function (node, key, val) {
          const validator = node.source ? sourced : sourceless;
          validator(node, key, val);
        };
      }()))
    },
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral"),
      optional: true
    },
    exportKind: (0, _utils$6.validateOptional)((0, _utils$6.assertOneOf)("type", "value"))
  }
});
defineType$4("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "StringLiteral")
    },
    exportKind: {
      validate: (0, _utils$6.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType$4("ForOfStatement", {
  visitor: ["left", "right", "body"],
  builder: ["left", "right", "body", "await"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: function () {
        if (!process.env.BABEL_TYPES_8_BREAKING) {
          return (0, _utils$6.assertNodeType)("VariableDeclaration", "LVal");
        }

        const declaration = (0, _utils$6.assertNodeType)("VariableDeclaration");
        const lval = (0, _utils$6.assertNodeType)("Identifier", "MemberExpression", "ArrayPattern", "ObjectPattern");
        return function (node, key, val) {
          if ((0, _is$2.default)("VariableDeclaration", val)) {
            declaration(node, key, val);
          } else {
            lval(node, key, val);
          }
        };
      }()
    },
    right: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("Statement")
    },
    await: {
      default: false
    }
  }
});
defineType$4("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    assertions: {
      optional: true,
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportAttribute")))
    },
    specifiers: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils$6.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils$6.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils$6.assertNodeType)("Identifier", "StringLiteral")
    },
    importKind: {
      validate: (0, _utils$6.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
defineType$4("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertNodeType)("Identifier"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;
        let property;

        switch (val.name) {
          case "function":
            property = "sent";
            break;

          case "new":
            property = "target";
            break;

          case "import":
            property = "meta";
            break;
        }

        if (!(0, _is$2.default)("Identifier", node.property, {
          name: property
        })) {
          throw new TypeError("Unrecognised MetaProperty");
        }
      }, {
        oneOfNodeTypes: ["Identifier"]
      }))
    },
    property: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils$6.assertOneOf)("public", "private", "protected"),
    optional: true
  },
  static: {
    default: false
  },
  override: {
    default: false
  },
  computed: {
    default: false
  },
  optional: {
    validate: (0, _utils$6.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils$6.chain)(function () {
      const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed = (0, _utils$6.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
core.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, functionCommon, classMethodOrPropertyCommon, {
  params: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  kind: {
    validate: (0, _utils$6.assertOneOf)("get", "set", "method", "constructor"),
    default: "method"
  },
  access: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("string"), (0, _utils$6.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
    optional: true
  }
});
core.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
defineType$4("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static", "generator", "async"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  })
});
defineType$4("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, patternLikeCommon, {
    properties: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
defineType$4("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("Super", {
  aliases: ["Expression"]
});
defineType$4("TaggedTemplateExpression", {
  visitor: ["tag", "quasi", "typeParameters"],
  builder: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils$6.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {
      validate: (0, _utils$6.assertShape)({
        raw: {
          validate: (0, _utils$6.assertValueType)("string")
        },
        cooked: {
          validate: (0, _utils$6.assertValueType)("string"),
          optional: true
        }
      })
    },
    tail: {
      default: false
    }
  }
});
defineType$4("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "TSType")), function (node, key, val) {
        if (node.quasis.length !== val.length + 1) {
          throw new TypeError(`Number of ${node.type} quasis should be exactly one more than the number of expressions.\nExpected ${val.length + 1} quasis but got ${node.quasis.length}`);
        }
      })
    }
  }
});
defineType$4("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), Object.assign(function (node, key, val) {
        if (!process.env.BABEL_TYPES_8_BREAKING) return;

        if (val && !node.argument) {
          throw new TypeError("Property delegate of YieldExpression cannot be true if there is no argument");
        }
      }, {
        type: "boolean"
      })),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    }
  }
});
defineType$4("Import", {
  aliases: ["Expression"]
});
defineType$4("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$6.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
defineType$4("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils$6.assertNodeType)("Identifier");
        const computed = (0, _utils$6.assertNodeType)("Expression");

        const validator = function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };

        validator.oneOfNodeTypes = ["Expression", "Identifier"];
        return validator;
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertValueType)("boolean") : (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), (0, _utils$6.assertOptionalChainStart)())
    }
  }
});
defineType$4("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils$6.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName", "ArgumentPlaceholder")))
    },
    optional: {
      validate: !process.env.BABEL_TYPES_8_BREAKING ? (0, _utils$6.assertValueType)("boolean") : (0, _utils$6.chain)((0, _utils$6.assertValueType)("boolean"), (0, _utils$6.assertOptionalChainStart)())
    },
    typeArguments: {
      validate: (0, _utils$6.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils$6.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$4("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property"],
  fields: Object.assign({}, classMethodOrPropertyCommon, {
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType$4("ClassAccessorProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed", "static"],
  aliases: ["Property", "Accessor"],
  fields: Object.assign({}, classMethodOrPropertyCommon, {
    key: {
      validate: (0, _utils$6.chain)(function () {
        const normal = (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "PrivateName");
        const computed = (0, _utils$6.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }(), (0, _utils$6.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression", "PrivateName"))
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    declare: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  })
});
defineType$4("ClassPrivateProperty", {
  visitor: ["key", "value", "decorators", "typeAnnotation"],
  builder: ["key", "value", "decorators", "static"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils$6.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils$6.assertNodeType)("Expression"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils$6.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    definite: {
      validate: (0, _utils$6.assertValueType)("boolean"),
      optional: true
    },
    variance: {
      validate: (0, _utils$6.assertNodeType)("Variance"),
      optional: true
    }
  }
});
defineType$4("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, functionTypeAnnotationCommon, {
    key: {
      validate: (0, _utils$6.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils$6.assertNodeType)("BlockStatement")
    }
  })
});
defineType$4("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils$6.assertNodeType)("Identifier")
    }
  }
});
defineType$4("StaticBlock", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$6.chain)((0, _utils$6.assertValueType)("array"), (0, _utils$6.assertEach)((0, _utils$6.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "FunctionParent"]
});

var _utils$5 = utils;

const defineType$3 = (0, _utils$5.defineAliasedType)("Flow");

const defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
  defineType$3(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils$5.validateType)("Identifier"),
      typeParameters: (0, _utils$5.validateOptionalType)(typeParameterType),
      extends: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
      mixins: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
      implements: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("ClassImplements")),
      body: (0, _utils$5.validateType)("ObjectTypeAnnotation")
    }
  });
};

defineType$3("AnyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["FlowType"],
  fields: {
    elementType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("BooleanTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("NullLiteralTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ClassImplements", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
defineType$3("DeclareFunction", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    predicate: (0, _utils$5.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
defineType$3("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils$5.validateType)("BlockStatement"),
    kind: (0, _utils$5.validateOptional)((0, _utils$5.assertOneOf)("CommonJS", "ES"))
  }
});
defineType$3("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("TypeAnnotation")
  }
});
defineType$3("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils$5.validateOptionalType)("FlowType"),
    impltype: (0, _utils$5.validateOptionalType)("FlowType")
  }
});
defineType$3("DeclareVariable", {
  visitor: ["id"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier")
  }
});
defineType$3("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils$5.validateOptionalType)("Flow"),
    specifiers: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils$5.validateOptionalType)("StringLiteral"),
    default: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils$5.validateType)("StringLiteral"),
    exportKind: (0, _utils$5.validateOptional)((0, _utils$5.assertOneOf)("type", "value"))
  }
});
defineType$3("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["FlowPredicate"],
  fields: {
    value: (0, _utils$5.validateType)("Flow")
  }
});
defineType$3("ExistsTypeAnnotation", {
  aliases: ["FlowType"]
});
defineType$3("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["FlowType"],
  fields: {
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils$5.validateOptionalType)("FunctionTypeParam"),
    this: (0, _utils$5.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  fields: {
    name: (0, _utils$5.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["FlowType"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineType$3("InferredPredicate", {
  aliases: ["FlowPredicate"]
});
defineType$3("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  fields: {
    id: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
defineType$3("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["FlowType"],
  fields: {
    extends: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("InterfaceExtends")),
    body: (0, _utils$5.validateType)("ObjectTypeAnnotation")
  }
});
defineType$3("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("MixedTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EmptyTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["FlowType"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("number"))
  }
});
defineType$3("NumberTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, _utils$5.validate)((0, _utils$5.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, _utils$5.validateOptional)((0, _utils$5.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, _utils$5.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, _utils$5.validateOptional)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    value: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    method: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["UserWhitespacable"],
  fields: {
    value: (0, _utils$5.validateType)("FlowType"),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    id: (0, _utils$5.validateOptionalType)("Identifier"),
    key: (0, _utils$5.validateType)("FlowType"),
    value: (0, _utils$5.validateType)("FlowType"),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    variance: (0, _utils$5.validateOptionalType)("Variance")
  }
});
defineType$3("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["UserWhitespacable"],
  fields: {
    key: (0, _utils$5.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils$5.validateType)("FlowType"),
    kind: (0, _utils$5.validate)((0, _utils$5.assertOneOf)("init", "get", "set")),
    static: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    proto: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    variance: (0, _utils$5.validateOptionalType)("Variance"),
    method: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["UserWhitespacable"],
  fields: {
    argument: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils$5.validateOptionalType)("FlowType"),
    impltype: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    qualification: (0, _utils$5.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
defineType$3("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["FlowType"],
  fields: {
    value: (0, _utils$5.validate)((0, _utils$5.assertValueType)("string"))
  }
});
defineType$3("StringTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("SymbolTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("ThisTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["FlowType"],
  fields: {
    argument: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    typeParameters: (0, _utils$5.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils$5.validateType)("Expression"),
    typeAnnotation: (0, _utils$5.validateType)("TypeAnnotation")
  }
});
defineType$3("TypeParameter", {
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils$5.validate)((0, _utils$5.assertValueType)("string")),
    bound: (0, _utils$5.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils$5.validateOptionalType)("FlowType"),
    variance: (0, _utils$5.validateOptionalType)("Variance")
  }
});
defineType$3("TypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("TypeParameter"))
  }
});
defineType$3("TypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["FlowType"],
  fields: {
    types: (0, _utils$5.validate)((0, _utils$5.arrayOfType)("FlowType"))
  }
});
defineType$3("Variance", {
  builder: ["kind"],
  fields: {
    kind: (0, _utils$5.validate)((0, _utils$5.assertOneOf)("minus", "plus"))
  }
});
defineType$3("VoidTypeAnnotation", {
  aliases: ["FlowType", "FlowBaseAnnotation"]
});
defineType$3("EnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    body: (0, _utils$5.validateType)(["EnumBooleanBody", "EnumNumberBody", "EnumStringBody", "EnumSymbolBody"])
  }
});
defineType$3("EnumBooleanBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)("EnumBooleanMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumNumberBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)("EnumNumberMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumStringBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    explicitType: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean")),
    members: (0, _utils$5.validateArrayOfType)(["EnumStringMember", "EnumDefaultedMember"]),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumSymbolBody", {
  aliases: ["EnumBody"],
  visitor: ["members"],
  fields: {
    members: (0, _utils$5.validateArrayOfType)("EnumDefaultedMember"),
    hasUnknownMembers: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});
defineType$3("EnumBooleanMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("BooleanLiteral")
  }
});
defineType$3("EnumNumberMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("NumericLiteral")
  }
});
defineType$3("EnumStringMember", {
  aliases: ["EnumMember"],
  visitor: ["id", "init"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier"),
    init: (0, _utils$5.validateType)("StringLiteral")
  }
});
defineType$3("EnumDefaultedMember", {
  aliases: ["EnumMember"],
  visitor: ["id"],
  fields: {
    id: (0, _utils$5.validateType)("Identifier")
  }
});
defineType$3("IndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, _utils$5.validateType)("FlowType"),
    indexType: (0, _utils$5.validateType)("FlowType")
  }
});
defineType$3("OptionalIndexedAccessType", {
  visitor: ["objectType", "indexType"],
  aliases: ["FlowType"],
  fields: {
    objectType: (0, _utils$5.validateType)("FlowType"),
    indexType: (0, _utils$5.validateType)("FlowType"),
    optional: (0, _utils$5.validate)((0, _utils$5.assertValueType)("boolean"))
  }
});

var _utils$4 = utils;

const defineType$2 = (0, _utils$4.defineAliasedType)("JSX");
defineType$2("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils$4.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
defineType$2("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    }
  }
});
defineType$2("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _utils$4.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils$4.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    },
    selfClosing: {
      validate: (0, _utils$4.assertValueType)("boolean"),
      optional: true
    }
  }
});
defineType$2("JSXEmptyExpression", {});
defineType$2("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, _utils$4.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
defineType$2("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["Immutable"],
  fields: {
    expression: {
      validate: (0, _utils$4.assertNodeType)("Expression")
    }
  }
});
defineType$2("JSXIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils$4.assertValueType)("string")
    }
  }
});
defineType$2("JSXMemberExpression", {
  visitor: ["object", "property"],
  fields: {
    object: {
      validate: (0, _utils$4.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$2("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  fields: {
    namespace: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier")
    }
  }
});
defineType$2("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["Immutable"],
  fields: {
    name: {
      validate: (0, _utils$4.assertNodeType)("JSXIdentifier", "JSXMemberExpression", "JSXNamespacedName")
    },
    selfClosing: {
      default: false
    },
    attributes: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, _utils$4.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
defineType$2("JSXSpreadAttribute", {
  visitor: ["argument"],
  fields: {
    argument: {
      validate: (0, _utils$4.assertNodeType)("Expression")
    }
  }
});
defineType$2("JSXText", {
  aliases: ["Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$4.assertValueType)("string")
    }
  }
});
defineType$2("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils$4.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils$4.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils$4.chain)((0, _utils$4.assertValueType)("array"), (0, _utils$4.assertEach)((0, _utils$4.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
defineType$2("JSXOpeningFragment", {
  aliases: ["Immutable"]
});
defineType$2("JSXClosingFragment", {
  aliases: ["Immutable"]
});

var placeholders$1 = {};

Object.defineProperty(placeholders$1, "__esModule", {
  value: true
});
placeholders$1.PLACEHOLDERS_FLIPPED_ALIAS = placeholders$1.PLACEHOLDERS_ALIAS = placeholders$1.PLACEHOLDERS = void 0;

var _utils$3 = utils;

const PLACEHOLDERS = ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];
placeholders$1.PLACEHOLDERS = PLACEHOLDERS;
const PLACEHOLDERS_ALIAS = {
  Declaration: ["Statement"],
  Pattern: ["PatternLike", "LVal"]
};
placeholders$1.PLACEHOLDERS_ALIAS = PLACEHOLDERS_ALIAS;

for (const type of PLACEHOLDERS) {
  const alias = _utils$3.ALIAS_KEYS[type];
  if (alias != null && alias.length) PLACEHOLDERS_ALIAS[type] = alias;
}

const PLACEHOLDERS_FLIPPED_ALIAS = {};
placeholders$1.PLACEHOLDERS_FLIPPED_ALIAS = PLACEHOLDERS_FLIPPED_ALIAS;
Object.keys(PLACEHOLDERS_ALIAS).forEach(type => {
  PLACEHOLDERS_ALIAS[type].forEach(alias => {
    if (!Object.hasOwnProperty.call(PLACEHOLDERS_FLIPPED_ALIAS, alias)) {
      PLACEHOLDERS_FLIPPED_ALIAS[alias] = [];
    }

    PLACEHOLDERS_FLIPPED_ALIAS[alias].push(type);
  });
});

var _utils$2 = utils;

var _placeholders = placeholders$1;

const defineType$1 = (0, _utils$2.defineAliasedType)("Miscellaneous");
{
  defineType$1("Noop", {
    visitor: []
  });
}
defineType$1("Placeholder", {
  visitor: [],
  builder: ["expectedNode", "name"],
  fields: {
    name: {
      validate: (0, _utils$2.assertNodeType)("Identifier")
    },
    expectedNode: {
      validate: (0, _utils$2.assertOneOf)(..._placeholders.PLACEHOLDERS)
    }
  }
});
defineType$1("V8IntrinsicIdentifier", {
  builder: ["name"],
  fields: {
    name: {
      validate: (0, _utils$2.assertValueType)("string")
    }
  }
});

var _utils$1 = utils;

(0, _utils$1.default)("ArgumentPlaceholder", {});
(0, _utils$1.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: !process.env.BABEL_TYPES_8_BREAKING ? {
    object: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    },
    callee: {
      validate: Object.assign(() => {}, {
        oneOfNodeTypes: ["Expression"]
      })
    }
  } : {
    object: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    },
    callee: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  }
});
(0, _utils$1.default)("ImportAttribute", {
  visitor: ["key", "value"],
  fields: {
    key: {
      validate: (0, _utils$1.assertNodeType)("Identifier", "StringLiteral")
    },
    value: {
      validate: (0, _utils$1.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils$1.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  }
});
(0, _utils$1.default)("DoExpression", {
  visitor: ["body"],
  builder: ["body", "async"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils$1.assertNodeType)("BlockStatement")
    },
    async: {
      validate: (0, _utils$1.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _utils$1.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils$1.assertNodeType)("Identifier")
    }
  }
});
(0, _utils$1.default)("RecordExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils$1.chain)((0, _utils$1.assertValueType)("array"), (0, _utils$1.assertEach)((0, _utils$1.assertNodeType)("ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils$1.default)("TupleExpression", {
  fields: {
    elements: {
      validate: (0, _utils$1.chain)((0, _utils$1.assertValueType)("array"), (0, _utils$1.assertEach)((0, _utils$1.assertNodeType)("Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils$1.default)("DecimalLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils$1.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils$1.default)("ModuleExpression", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils$1.assertNodeType)("Program")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("TopicReference", {
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, _utils$1.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression"]
});
(0, _utils$1.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});

var _utils = utils;

var _core = core;

var _is$1 = is$1;

const defineType = (0, _utils.defineAliasedType)("TypeScript");
const bool = (0, _utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
defineType("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    },
    override: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  }
});
defineType("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
});
defineType("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _core.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
});
defineType("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = {
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  ["parameters"]: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  ["typeAnnotation"]: (0, _utils.validateOptionalType)("TSTypeAnnotation")
};
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
defineType("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
defineType("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = {
  key: (0, _utils.validateType)("Expression"),
  computed: (0, _utils.validate)(bool),
  optional: (0, _utils.validateOptional)(bool)
};
defineType("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon, {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression"),
    kind: {
      validate: (0, _utils.assertOneOf)("get", "set")
    }
  })
});
defineType("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon, namedTypeElementCommon, {
    kind: {
      validate: (0, _utils.assertOneOf)("method", "get", "set")
    }
  })
});
defineType("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    static: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSBooleanKeyword", "TSBigIntKeyword", "TSIntrinsicKeyword", "TSNeverKeyword", "TSNullKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSUndefinedKeyword", "TSUnknownKeyword", "TSVoidKeyword"];

for (const type of tsKeywordTypes) {
  defineType(type, {
    aliases: ["TSType", "TSBaseType"],
    visitor: [],
    fields: {}
  });
}

defineType("TSThisType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: [],
  fields: {}
});
const fnOrCtrBase = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"]
};
defineType("TSFunctionType", Object.assign({}, fnOrCtrBase, {
  fields: signatureDeclarationCommon
}));
defineType("TSConstructorType", Object.assign({}, fnOrCtrBase, {
  fields: Object.assign({}, signatureDeclarationCommon, {
    abstract: (0, _utils.validateOptional)(bool)
  })
}));
defineType("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  builder: ["parameterName", "typeAnnotation", "asserts"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    asserts: (0, _utils.validateOptional)(bool)
  }
});
defineType("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"])
  }
});
defineType("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)(["TSType", "TSNamedTupleMember"])
  }
});
defineType("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSNamedTupleMember", {
  visitor: ["label", "elementType"],
  builder: ["label", "elementType", "optional"],
  fields: {
    label: (0, _utils.validateType)("Identifier"),
    optional: {
      validate: bool,
      default: false
    },
    elementType: (0, _utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
defineType("TSUnionType", unionOrIntersection);
defineType("TSIntersectionType", unionOrIntersection);
defineType("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSTypeParameter")
  }
});
defineType("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
defineType("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation", "nameType"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType"),
    nameType: (0, _utils.validateOptionalType)("TSType")
  }
});
defineType("TSLiteralType", {
  aliases: ["TSType", "TSBaseType"],
  visitor: ["literal"],
  fields: {
    literal: {
      validate: function () {
        const unaryExpression = (0, _utils.assertNodeType)("NumericLiteral", "BigIntLiteral");
        const unaryOperator = (0, _utils.assertOneOf)("-");
        const literal = (0, _utils.assertNodeType)("NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral");

        function validator(parent, key, node) {
          if ((0, _is$1.default)("UnaryExpression", node)) {
            unaryOperator(node, "operator", node.operator);
            unaryExpression(node, "argument", node.argument);
          } else {
            literal(parent, key, node);
          }
        }

        validator.oneOfNodeTypes = ["NumericLiteral", "StringLiteral", "BooleanLiteral", "BigIntLiteral", "UnaryExpression"];
        return validator;
      }()
    }
  }
});
defineType("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
defineType("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
defineType("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
defineType("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
defineType("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
defineType("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
defineType("TSModuleBlock", {
  aliases: ["Scopable", "Block", "BlockParent"],
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
defineType("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, _utils.validateType)("StringLiteral"),
    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
defineType("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"]),
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "value"),
      optional: true
    }
  }
});
defineType("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
defineType("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
defineType("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
defineType("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
defineType("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
defineType("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
defineType("TSTypeParameter", {
  builder: ["constraint", "default", "name"],
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.DEPRECATED_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "NODE_PARENT_VALIDATIONS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_PARENT_VALIDATIONS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_ALIAS;
  }
});
Object.defineProperty(exports, "PLACEHOLDERS_FLIPPED_ALIAS", {
  enumerable: true,
  get: function () {
    return _placeholders.PLACEHOLDERS_FLIPPED_ALIAS;
  }
});
exports.TYPES = void 0;
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.VISITOR_KEYS;
  }
});

var _toFastProperties = toFastProperties;













var _utils = utils;

var _placeholders = placeholders$1;

_toFastProperties(_utils.VISITOR_KEYS);

_toFastProperties(_utils.ALIAS_KEYS);

_toFastProperties(_utils.FLIPPED_ALIAS_KEYS);

_toFastProperties(_utils.NODE_FIELDS);

_toFastProperties(_utils.BUILDER_KEYS);

_toFastProperties(_utils.DEPRECATED_KEYS);

_toFastProperties(_placeholders.PLACEHOLDERS_ALIAS);

_toFastProperties(_placeholders.PLACEHOLDERS_FLIPPED_ALIAS);

const TYPES = [].concat(Object.keys(_utils.VISITOR_KEYS), Object.keys(_utils.FLIPPED_ALIAS_KEYS), Object.keys(_utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;
}(definitions));

Object.defineProperty(builder$2, "__esModule", {
  value: true
});
builder$2.default = builder$1;

var _definitions$6 = definitions;

var _validate = validate$4;

function builder$1() {
  const type = this;
  const keys = _definitions$6.BUILDER_KEYS[type];
  const countArgs = arguments.length;

  if (countArgs > keys.length) {
    throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
  }

  const node = {
    type
  };

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const field = _definitions$6.NODE_FIELDS[type][key];
    let arg;
    if (i < countArgs) arg = arguments[i];

    if (arg === undefined) {
      arg = Array.isArray(field.default) ? [] : field.default;
    }

    node[key] = arg;
  }

  for (const key in node) {
    (0, _validate.default)(node, key, node[key]);
  }

  return node;
}

Object.defineProperty(generated$3, "__esModule", {
  value: true
});
generated$3.anyTypeAnnotation = anyTypeAnnotation;
generated$3.argumentPlaceholder = argumentPlaceholder;
generated$3.arrayExpression = arrayExpression;
generated$3.arrayPattern = arrayPattern;
generated$3.arrayTypeAnnotation = arrayTypeAnnotation;
generated$3.arrowFunctionExpression = arrowFunctionExpression;
generated$3.assignmentExpression = assignmentExpression;
generated$3.assignmentPattern = assignmentPattern;
generated$3.awaitExpression = awaitExpression;
generated$3.bigIntLiteral = bigIntLiteral;
generated$3.binaryExpression = binaryExpression;
generated$3.bindExpression = bindExpression;
generated$3.blockStatement = blockStatement$1;
generated$3.booleanLiteral = booleanLiteral;
generated$3.booleanLiteralTypeAnnotation = booleanLiteralTypeAnnotation;
generated$3.booleanTypeAnnotation = booleanTypeAnnotation;
generated$3.breakStatement = breakStatement;
generated$3.callExpression = callExpression;
generated$3.catchClause = catchClause;
generated$3.classAccessorProperty = classAccessorProperty;
generated$3.classBody = classBody;
generated$3.classDeclaration = classDeclaration;
generated$3.classExpression = classExpression;
generated$3.classImplements = classImplements;
generated$3.classMethod = classMethod;
generated$3.classPrivateMethod = classPrivateMethod;
generated$3.classPrivateProperty = classPrivateProperty;
generated$3.classProperty = classProperty;
generated$3.conditionalExpression = conditionalExpression;
generated$3.continueStatement = continueStatement;
generated$3.debuggerStatement = debuggerStatement;
generated$3.decimalLiteral = decimalLiteral;
generated$3.declareClass = declareClass;
generated$3.declareExportAllDeclaration = declareExportAllDeclaration;
generated$3.declareExportDeclaration = declareExportDeclaration;
generated$3.declareFunction = declareFunction;
generated$3.declareInterface = declareInterface;
generated$3.declareModule = declareModule;
generated$3.declareModuleExports = declareModuleExports;
generated$3.declareOpaqueType = declareOpaqueType;
generated$3.declareTypeAlias = declareTypeAlias;
generated$3.declareVariable = declareVariable;
generated$3.declaredPredicate = declaredPredicate;
generated$3.decorator = decorator;
generated$3.directive = directive;
generated$3.directiveLiteral = directiveLiteral;
generated$3.doExpression = doExpression;
generated$3.doWhileStatement = doWhileStatement;
generated$3.emptyStatement = emptyStatement$1;
generated$3.emptyTypeAnnotation = emptyTypeAnnotation;
generated$3.enumBooleanBody = enumBooleanBody;
generated$3.enumBooleanMember = enumBooleanMember;
generated$3.enumDeclaration = enumDeclaration;
generated$3.enumDefaultedMember = enumDefaultedMember;
generated$3.enumNumberBody = enumNumberBody;
generated$3.enumNumberMember = enumNumberMember;
generated$3.enumStringBody = enumStringBody;
generated$3.enumStringMember = enumStringMember;
generated$3.enumSymbolBody = enumSymbolBody;
generated$3.existsTypeAnnotation = existsTypeAnnotation;
generated$3.exportAllDeclaration = exportAllDeclaration;
generated$3.exportDefaultDeclaration = exportDefaultDeclaration;
generated$3.exportDefaultSpecifier = exportDefaultSpecifier;
generated$3.exportNamedDeclaration = exportNamedDeclaration;
generated$3.exportNamespaceSpecifier = exportNamespaceSpecifier;
generated$3.exportSpecifier = exportSpecifier;
generated$3.expressionStatement = expressionStatement$1;
generated$3.file = file;
generated$3.forInStatement = forInStatement;
generated$3.forOfStatement = forOfStatement;
generated$3.forStatement = forStatement;
generated$3.functionDeclaration = functionDeclaration;
generated$3.functionExpression = functionExpression;
generated$3.functionTypeAnnotation = functionTypeAnnotation;
generated$3.functionTypeParam = functionTypeParam;
generated$3.genericTypeAnnotation = genericTypeAnnotation;
generated$3.identifier = identifier$1;
generated$3.ifStatement = ifStatement;
generated$3.import = _import;
generated$3.importAttribute = importAttribute;
generated$3.importDeclaration = importDeclaration;
generated$3.importDefaultSpecifier = importDefaultSpecifier;
generated$3.importNamespaceSpecifier = importNamespaceSpecifier;
generated$3.importSpecifier = importSpecifier;
generated$3.indexedAccessType = indexedAccessType;
generated$3.inferredPredicate = inferredPredicate;
generated$3.interfaceDeclaration = interfaceDeclaration;
generated$3.interfaceExtends = interfaceExtends;
generated$3.interfaceTypeAnnotation = interfaceTypeAnnotation;
generated$3.interpreterDirective = interpreterDirective;
generated$3.intersectionTypeAnnotation = intersectionTypeAnnotation;
generated$3.jSXAttribute = generated$3.jsxAttribute = jsxAttribute;
generated$3.jSXClosingElement = generated$3.jsxClosingElement = jsxClosingElement;
generated$3.jSXClosingFragment = generated$3.jsxClosingFragment = jsxClosingFragment;
generated$3.jSXElement = generated$3.jsxElement = jsxElement;
generated$3.jSXEmptyExpression = generated$3.jsxEmptyExpression = jsxEmptyExpression;
generated$3.jSXExpressionContainer = generated$3.jsxExpressionContainer = jsxExpressionContainer;
generated$3.jSXFragment = generated$3.jsxFragment = jsxFragment;
generated$3.jSXIdentifier = generated$3.jsxIdentifier = jsxIdentifier;
generated$3.jSXMemberExpression = generated$3.jsxMemberExpression = jsxMemberExpression;
generated$3.jSXNamespacedName = generated$3.jsxNamespacedName = jsxNamespacedName;
generated$3.jSXOpeningElement = generated$3.jsxOpeningElement = jsxOpeningElement;
generated$3.jSXOpeningFragment = generated$3.jsxOpeningFragment = jsxOpeningFragment;
generated$3.jSXSpreadAttribute = generated$3.jsxSpreadAttribute = jsxSpreadAttribute;
generated$3.jSXSpreadChild = generated$3.jsxSpreadChild = jsxSpreadChild;
generated$3.jSXText = generated$3.jsxText = jsxText;
generated$3.labeledStatement = labeledStatement;
generated$3.logicalExpression = logicalExpression;
generated$3.memberExpression = memberExpression;
generated$3.metaProperty = metaProperty;
generated$3.mixedTypeAnnotation = mixedTypeAnnotation;
generated$3.moduleExpression = moduleExpression;
generated$3.newExpression = newExpression;
generated$3.noop = noop;
generated$3.nullLiteral = nullLiteral;
generated$3.nullLiteralTypeAnnotation = nullLiteralTypeAnnotation;
generated$3.nullableTypeAnnotation = nullableTypeAnnotation;
generated$3.numberLiteral = NumberLiteral;
generated$3.numberLiteralTypeAnnotation = numberLiteralTypeAnnotation;
generated$3.numberTypeAnnotation = numberTypeAnnotation;
generated$3.numericLiteral = numericLiteral;
generated$3.objectExpression = objectExpression;
generated$3.objectMethod = objectMethod;
generated$3.objectPattern = objectPattern;
generated$3.objectProperty = objectProperty;
generated$3.objectTypeAnnotation = objectTypeAnnotation;
generated$3.objectTypeCallProperty = objectTypeCallProperty;
generated$3.objectTypeIndexer = objectTypeIndexer;
generated$3.objectTypeInternalSlot = objectTypeInternalSlot;
generated$3.objectTypeProperty = objectTypeProperty;
generated$3.objectTypeSpreadProperty = objectTypeSpreadProperty;
generated$3.opaqueType = opaqueType;
generated$3.optionalCallExpression = optionalCallExpression;
generated$3.optionalIndexedAccessType = optionalIndexedAccessType;
generated$3.optionalMemberExpression = optionalMemberExpression;
generated$3.parenthesizedExpression = parenthesizedExpression;
generated$3.pipelineBareFunction = pipelineBareFunction;
generated$3.pipelinePrimaryTopicReference = pipelinePrimaryTopicReference;
generated$3.pipelineTopicExpression = pipelineTopicExpression;
generated$3.placeholder = placeholder;
generated$3.privateName = privateName;
generated$3.program = program$2;
generated$3.qualifiedTypeIdentifier = qualifiedTypeIdentifier;
generated$3.recordExpression = recordExpression;
generated$3.regExpLiteral = regExpLiteral;
generated$3.regexLiteral = RegexLiteral;
generated$3.restElement = restElement;
generated$3.restProperty = RestProperty;
generated$3.returnStatement = returnStatement;
generated$3.sequenceExpression = sequenceExpression;
generated$3.spreadElement = spreadElement;
generated$3.spreadProperty = SpreadProperty;
generated$3.staticBlock = staticBlock;
generated$3.stringLiteral = stringLiteral$1;
generated$3.stringLiteralTypeAnnotation = stringLiteralTypeAnnotation;
generated$3.stringTypeAnnotation = stringTypeAnnotation;
generated$3.super = _super;
generated$3.switchCase = switchCase;
generated$3.switchStatement = switchStatement;
generated$3.symbolTypeAnnotation = symbolTypeAnnotation;
generated$3.taggedTemplateExpression = taggedTemplateExpression;
generated$3.templateElement = templateElement;
generated$3.templateLiteral = templateLiteral;
generated$3.thisExpression = thisExpression;
generated$3.thisTypeAnnotation = thisTypeAnnotation;
generated$3.throwStatement = throwStatement;
generated$3.topicReference = topicReference;
generated$3.tryStatement = tryStatement;
generated$3.tSAnyKeyword = generated$3.tsAnyKeyword = tsAnyKeyword;
generated$3.tSArrayType = generated$3.tsArrayType = tsArrayType;
generated$3.tSAsExpression = generated$3.tsAsExpression = tsAsExpression;
generated$3.tSBigIntKeyword = generated$3.tsBigIntKeyword = tsBigIntKeyword;
generated$3.tSBooleanKeyword = generated$3.tsBooleanKeyword = tsBooleanKeyword;
generated$3.tSCallSignatureDeclaration = generated$3.tsCallSignatureDeclaration = tsCallSignatureDeclaration;
generated$3.tSConditionalType = generated$3.tsConditionalType = tsConditionalType;
generated$3.tSConstructSignatureDeclaration = generated$3.tsConstructSignatureDeclaration = tsConstructSignatureDeclaration;
generated$3.tSConstructorType = generated$3.tsConstructorType = tsConstructorType;
generated$3.tSDeclareFunction = generated$3.tsDeclareFunction = tsDeclareFunction;
generated$3.tSDeclareMethod = generated$3.tsDeclareMethod = tsDeclareMethod;
generated$3.tSEnumDeclaration = generated$3.tsEnumDeclaration = tsEnumDeclaration;
generated$3.tSEnumMember = generated$3.tsEnumMember = tsEnumMember;
generated$3.tSExportAssignment = generated$3.tsExportAssignment = tsExportAssignment;
generated$3.tSExpressionWithTypeArguments = generated$3.tsExpressionWithTypeArguments = tsExpressionWithTypeArguments;
generated$3.tSExternalModuleReference = generated$3.tsExternalModuleReference = tsExternalModuleReference;
generated$3.tSFunctionType = generated$3.tsFunctionType = tsFunctionType;
generated$3.tSImportEqualsDeclaration = generated$3.tsImportEqualsDeclaration = tsImportEqualsDeclaration;
generated$3.tSImportType = generated$3.tsImportType = tsImportType;
generated$3.tSIndexSignature = generated$3.tsIndexSignature = tsIndexSignature;
generated$3.tSIndexedAccessType = generated$3.tsIndexedAccessType = tsIndexedAccessType;
generated$3.tSInferType = generated$3.tsInferType = tsInferType;
generated$3.tSInterfaceBody = generated$3.tsInterfaceBody = tsInterfaceBody;
generated$3.tSInterfaceDeclaration = generated$3.tsInterfaceDeclaration = tsInterfaceDeclaration;
generated$3.tSIntersectionType = generated$3.tsIntersectionType = tsIntersectionType;
generated$3.tSIntrinsicKeyword = generated$3.tsIntrinsicKeyword = tsIntrinsicKeyword;
generated$3.tSLiteralType = generated$3.tsLiteralType = tsLiteralType;
generated$3.tSMappedType = generated$3.tsMappedType = tsMappedType;
generated$3.tSMethodSignature = generated$3.tsMethodSignature = tsMethodSignature;
generated$3.tSModuleBlock = generated$3.tsModuleBlock = tsModuleBlock;
generated$3.tSModuleDeclaration = generated$3.tsModuleDeclaration = tsModuleDeclaration;
generated$3.tSNamedTupleMember = generated$3.tsNamedTupleMember = tsNamedTupleMember;
generated$3.tSNamespaceExportDeclaration = generated$3.tsNamespaceExportDeclaration = tsNamespaceExportDeclaration;
generated$3.tSNeverKeyword = generated$3.tsNeverKeyword = tsNeverKeyword;
generated$3.tSNonNullExpression = generated$3.tsNonNullExpression = tsNonNullExpression;
generated$3.tSNullKeyword = generated$3.tsNullKeyword = tsNullKeyword;
generated$3.tSNumberKeyword = generated$3.tsNumberKeyword = tsNumberKeyword;
generated$3.tSObjectKeyword = generated$3.tsObjectKeyword = tsObjectKeyword;
generated$3.tSOptionalType = generated$3.tsOptionalType = tsOptionalType;
generated$3.tSParameterProperty = generated$3.tsParameterProperty = tsParameterProperty;
generated$3.tSParenthesizedType = generated$3.tsParenthesizedType = tsParenthesizedType;
generated$3.tSPropertySignature = generated$3.tsPropertySignature = tsPropertySignature;
generated$3.tSQualifiedName = generated$3.tsQualifiedName = tsQualifiedName;
generated$3.tSRestType = generated$3.tsRestType = tsRestType;
generated$3.tSStringKeyword = generated$3.tsStringKeyword = tsStringKeyword;
generated$3.tSSymbolKeyword = generated$3.tsSymbolKeyword = tsSymbolKeyword;
generated$3.tSThisType = generated$3.tsThisType = tsThisType;
generated$3.tSTupleType = generated$3.tsTupleType = tsTupleType;
generated$3.tSTypeAliasDeclaration = generated$3.tsTypeAliasDeclaration = tsTypeAliasDeclaration;
generated$3.tSTypeAnnotation = generated$3.tsTypeAnnotation = tsTypeAnnotation;
generated$3.tSTypeAssertion = generated$3.tsTypeAssertion = tsTypeAssertion;
generated$3.tSTypeLiteral = generated$3.tsTypeLiteral = tsTypeLiteral;
generated$3.tSTypeOperator = generated$3.tsTypeOperator = tsTypeOperator;
generated$3.tSTypeParameter = generated$3.tsTypeParameter = tsTypeParameter;
generated$3.tSTypeParameterDeclaration = generated$3.tsTypeParameterDeclaration = tsTypeParameterDeclaration;
generated$3.tSTypeParameterInstantiation = generated$3.tsTypeParameterInstantiation = tsTypeParameterInstantiation;
generated$3.tSTypePredicate = generated$3.tsTypePredicate = tsTypePredicate;
generated$3.tSTypeQuery = generated$3.tsTypeQuery = tsTypeQuery;
generated$3.tSTypeReference = generated$3.tsTypeReference = tsTypeReference;
generated$3.tSUndefinedKeyword = generated$3.tsUndefinedKeyword = tsUndefinedKeyword;
generated$3.tSUnionType = generated$3.tsUnionType = tsUnionType;
generated$3.tSUnknownKeyword = generated$3.tsUnknownKeyword = tsUnknownKeyword;
generated$3.tSVoidKeyword = generated$3.tsVoidKeyword = tsVoidKeyword;
generated$3.tupleExpression = tupleExpression;
generated$3.tupleTypeAnnotation = tupleTypeAnnotation;
generated$3.typeAlias = typeAlias;
generated$3.typeAnnotation = typeAnnotation;
generated$3.typeCastExpression = typeCastExpression;
generated$3.typeParameter = typeParameter;
generated$3.typeParameterDeclaration = typeParameterDeclaration;
generated$3.typeParameterInstantiation = typeParameterInstantiation;
generated$3.typeofTypeAnnotation = typeofTypeAnnotation;
generated$3.unaryExpression = unaryExpression;
generated$3.unionTypeAnnotation = unionTypeAnnotation;
generated$3.updateExpression = updateExpression;
generated$3.v8IntrinsicIdentifier = v8IntrinsicIdentifier;
generated$3.variableDeclaration = variableDeclaration;
generated$3.variableDeclarator = variableDeclarator;
generated$3.variance = variance;
generated$3.voidTypeAnnotation = voidTypeAnnotation;
generated$3.whileStatement = whileStatement;
generated$3.withStatement = withStatement;
generated$3.yieldExpression = yieldExpression;

var _builder$1 = builder$2;

function arrayExpression(elements) {
  return _builder$1.default.apply("ArrayExpression", arguments);
}

function assignmentExpression(operator, left, right) {
  return _builder$1.default.apply("AssignmentExpression", arguments);
}

function binaryExpression(operator, left, right) {
  return _builder$1.default.apply("BinaryExpression", arguments);
}

function interpreterDirective(value) {
  return _builder$1.default.apply("InterpreterDirective", arguments);
}

function directive(value) {
  return _builder$1.default.apply("Directive", arguments);
}

function directiveLiteral(value) {
  return _builder$1.default.apply("DirectiveLiteral", arguments);
}

function blockStatement$1(body, directives) {
  return _builder$1.default.apply("BlockStatement", arguments);
}

function breakStatement(label) {
  return _builder$1.default.apply("BreakStatement", arguments);
}

function callExpression(callee, _arguments) {
  return _builder$1.default.apply("CallExpression", arguments);
}

function catchClause(param, body) {
  return _builder$1.default.apply("CatchClause", arguments);
}

function conditionalExpression(test, consequent, alternate) {
  return _builder$1.default.apply("ConditionalExpression", arguments);
}

function continueStatement(label) {
  return _builder$1.default.apply("ContinueStatement", arguments);
}

function debuggerStatement() {
  return _builder$1.default.apply("DebuggerStatement", arguments);
}

function doWhileStatement(test, body) {
  return _builder$1.default.apply("DoWhileStatement", arguments);
}

function emptyStatement$1() {
  return _builder$1.default.apply("EmptyStatement", arguments);
}

function expressionStatement$1(expression) {
  return _builder$1.default.apply("ExpressionStatement", arguments);
}

function file(program, comments, tokens) {
  return _builder$1.default.apply("File", arguments);
}

function forInStatement(left, right, body) {
  return _builder$1.default.apply("ForInStatement", arguments);
}

function forStatement(init, test, update, body) {
  return _builder$1.default.apply("ForStatement", arguments);
}

function functionDeclaration(id, params, body, generator, async) {
  return _builder$1.default.apply("FunctionDeclaration", arguments);
}

function functionExpression(id, params, body, generator, async) {
  return _builder$1.default.apply("FunctionExpression", arguments);
}

function identifier$1(name) {
  return _builder$1.default.apply("Identifier", arguments);
}

function ifStatement(test, consequent, alternate) {
  return _builder$1.default.apply("IfStatement", arguments);
}

function labeledStatement(label, body) {
  return _builder$1.default.apply("LabeledStatement", arguments);
}

function stringLiteral$1(value) {
  return _builder$1.default.apply("StringLiteral", arguments);
}

function numericLiteral(value) {
  return _builder$1.default.apply("NumericLiteral", arguments);
}

function nullLiteral() {
  return _builder$1.default.apply("NullLiteral", arguments);
}

function booleanLiteral(value) {
  return _builder$1.default.apply("BooleanLiteral", arguments);
}

function regExpLiteral(pattern, flags) {
  return _builder$1.default.apply("RegExpLiteral", arguments);
}

function logicalExpression(operator, left, right) {
  return _builder$1.default.apply("LogicalExpression", arguments);
}

function memberExpression(object, property, computed, optional) {
  return _builder$1.default.apply("MemberExpression", arguments);
}

function newExpression(callee, _arguments) {
  return _builder$1.default.apply("NewExpression", arguments);
}

function program$2(body, directives, sourceType, interpreter) {
  return _builder$1.default.apply("Program", arguments);
}

function objectExpression(properties) {
  return _builder$1.default.apply("ObjectExpression", arguments);
}

function objectMethod(kind, key, params, body, computed, generator, async) {
  return _builder$1.default.apply("ObjectMethod", arguments);
}

function objectProperty(key, value, computed, shorthand, decorators) {
  return _builder$1.default.apply("ObjectProperty", arguments);
}

function restElement(argument) {
  return _builder$1.default.apply("RestElement", arguments);
}

function returnStatement(argument) {
  return _builder$1.default.apply("ReturnStatement", arguments);
}

function sequenceExpression(expressions) {
  return _builder$1.default.apply("SequenceExpression", arguments);
}

function parenthesizedExpression(expression) {
  return _builder$1.default.apply("ParenthesizedExpression", arguments);
}

function switchCase(test, consequent) {
  return _builder$1.default.apply("SwitchCase", arguments);
}

function switchStatement(discriminant, cases) {
  return _builder$1.default.apply("SwitchStatement", arguments);
}

function thisExpression() {
  return _builder$1.default.apply("ThisExpression", arguments);
}

function throwStatement(argument) {
  return _builder$1.default.apply("ThrowStatement", arguments);
}

function tryStatement(block, handler, finalizer) {
  return _builder$1.default.apply("TryStatement", arguments);
}

function unaryExpression(operator, argument, prefix) {
  return _builder$1.default.apply("UnaryExpression", arguments);
}

function updateExpression(operator, argument, prefix) {
  return _builder$1.default.apply("UpdateExpression", arguments);
}

function variableDeclaration(kind, declarations) {
  return _builder$1.default.apply("VariableDeclaration", arguments);
}

function variableDeclarator(id, init) {
  return _builder$1.default.apply("VariableDeclarator", arguments);
}

function whileStatement(test, body) {
  return _builder$1.default.apply("WhileStatement", arguments);
}

function withStatement(object, body) {
  return _builder$1.default.apply("WithStatement", arguments);
}

function assignmentPattern(left, right) {
  return _builder$1.default.apply("AssignmentPattern", arguments);
}

function arrayPattern(elements) {
  return _builder$1.default.apply("ArrayPattern", arguments);
}

function arrowFunctionExpression(params, body, async) {
  return _builder$1.default.apply("ArrowFunctionExpression", arguments);
}

function classBody(body) {
  return _builder$1.default.apply("ClassBody", arguments);
}

function classExpression(id, superClass, body, decorators) {
  return _builder$1.default.apply("ClassExpression", arguments);
}

function classDeclaration(id, superClass, body, decorators) {
  return _builder$1.default.apply("ClassDeclaration", arguments);
}

function exportAllDeclaration(source) {
  return _builder$1.default.apply("ExportAllDeclaration", arguments);
}

function exportDefaultDeclaration(declaration) {
  return _builder$1.default.apply("ExportDefaultDeclaration", arguments);
}

function exportNamedDeclaration(declaration, specifiers, source) {
  return _builder$1.default.apply("ExportNamedDeclaration", arguments);
}

function exportSpecifier(local, exported) {
  return _builder$1.default.apply("ExportSpecifier", arguments);
}

function forOfStatement(left, right, body, _await) {
  return _builder$1.default.apply("ForOfStatement", arguments);
}

function importDeclaration(specifiers, source) {
  return _builder$1.default.apply("ImportDeclaration", arguments);
}

function importDefaultSpecifier(local) {
  return _builder$1.default.apply("ImportDefaultSpecifier", arguments);
}

function importNamespaceSpecifier(local) {
  return _builder$1.default.apply("ImportNamespaceSpecifier", arguments);
}

function importSpecifier(local, imported) {
  return _builder$1.default.apply("ImportSpecifier", arguments);
}

function metaProperty(meta, property) {
  return _builder$1.default.apply("MetaProperty", arguments);
}

function classMethod(kind, key, params, body, computed, _static, generator, async) {
  return _builder$1.default.apply("ClassMethod", arguments);
}

function objectPattern(properties) {
  return _builder$1.default.apply("ObjectPattern", arguments);
}

function spreadElement(argument) {
  return _builder$1.default.apply("SpreadElement", arguments);
}

function _super() {
  return _builder$1.default.apply("Super", arguments);
}

function taggedTemplateExpression(tag, quasi) {
  return _builder$1.default.apply("TaggedTemplateExpression", arguments);
}

function templateElement(value, tail) {
  return _builder$1.default.apply("TemplateElement", arguments);
}

function templateLiteral(quasis, expressions) {
  return _builder$1.default.apply("TemplateLiteral", arguments);
}

function yieldExpression(argument, delegate) {
  return _builder$1.default.apply("YieldExpression", arguments);
}

function awaitExpression(argument) {
  return _builder$1.default.apply("AwaitExpression", arguments);
}

function _import() {
  return _builder$1.default.apply("Import", arguments);
}

function bigIntLiteral(value) {
  return _builder$1.default.apply("BigIntLiteral", arguments);
}

function exportNamespaceSpecifier(exported) {
  return _builder$1.default.apply("ExportNamespaceSpecifier", arguments);
}

function optionalMemberExpression(object, property, computed, optional) {
  return _builder$1.default.apply("OptionalMemberExpression", arguments);
}

function optionalCallExpression(callee, _arguments, optional) {
  return _builder$1.default.apply("OptionalCallExpression", arguments);
}

function classProperty(key, value, typeAnnotation, decorators, computed, _static) {
  return _builder$1.default.apply("ClassProperty", arguments);
}

function classAccessorProperty(key, value, typeAnnotation, decorators, computed, _static) {
  return _builder$1.default.apply("ClassAccessorProperty", arguments);
}

function classPrivateProperty(key, value, decorators, _static) {
  return _builder$1.default.apply("ClassPrivateProperty", arguments);
}

function classPrivateMethod(kind, key, params, body, _static) {
  return _builder$1.default.apply("ClassPrivateMethod", arguments);
}

function privateName(id) {
  return _builder$1.default.apply("PrivateName", arguments);
}

function staticBlock(body) {
  return _builder$1.default.apply("StaticBlock", arguments);
}

function anyTypeAnnotation() {
  return _builder$1.default.apply("AnyTypeAnnotation", arguments);
}

function arrayTypeAnnotation(elementType) {
  return _builder$1.default.apply("ArrayTypeAnnotation", arguments);
}

function booleanTypeAnnotation() {
  return _builder$1.default.apply("BooleanTypeAnnotation", arguments);
}

function booleanLiteralTypeAnnotation(value) {
  return _builder$1.default.apply("BooleanLiteralTypeAnnotation", arguments);
}

function nullLiteralTypeAnnotation() {
  return _builder$1.default.apply("NullLiteralTypeAnnotation", arguments);
}

function classImplements(id, typeParameters) {
  return _builder$1.default.apply("ClassImplements", arguments);
}

function declareClass(id, typeParameters, _extends, body) {
  return _builder$1.default.apply("DeclareClass", arguments);
}

function declareFunction(id) {
  return _builder$1.default.apply("DeclareFunction", arguments);
}

function declareInterface(id, typeParameters, _extends, body) {
  return _builder$1.default.apply("DeclareInterface", arguments);
}

function declareModule(id, body, kind) {
  return _builder$1.default.apply("DeclareModule", arguments);
}

function declareModuleExports(typeAnnotation) {
  return _builder$1.default.apply("DeclareModuleExports", arguments);
}

function declareTypeAlias(id, typeParameters, right) {
  return _builder$1.default.apply("DeclareTypeAlias", arguments);
}

function declareOpaqueType(id, typeParameters, supertype) {
  return _builder$1.default.apply("DeclareOpaqueType", arguments);
}

function declareVariable(id) {
  return _builder$1.default.apply("DeclareVariable", arguments);
}

function declareExportDeclaration(declaration, specifiers, source) {
  return _builder$1.default.apply("DeclareExportDeclaration", arguments);
}

function declareExportAllDeclaration(source) {
  return _builder$1.default.apply("DeclareExportAllDeclaration", arguments);
}

function declaredPredicate(value) {
  return _builder$1.default.apply("DeclaredPredicate", arguments);
}

function existsTypeAnnotation() {
  return _builder$1.default.apply("ExistsTypeAnnotation", arguments);
}

function functionTypeAnnotation(typeParameters, params, rest, returnType) {
  return _builder$1.default.apply("FunctionTypeAnnotation", arguments);
}

function functionTypeParam(name, typeAnnotation) {
  return _builder$1.default.apply("FunctionTypeParam", arguments);
}

function genericTypeAnnotation(id, typeParameters) {
  return _builder$1.default.apply("GenericTypeAnnotation", arguments);
}

function inferredPredicate() {
  return _builder$1.default.apply("InferredPredicate", arguments);
}

function interfaceExtends(id, typeParameters) {
  return _builder$1.default.apply("InterfaceExtends", arguments);
}

function interfaceDeclaration(id, typeParameters, _extends, body) {
  return _builder$1.default.apply("InterfaceDeclaration", arguments);
}

function interfaceTypeAnnotation(_extends, body) {
  return _builder$1.default.apply("InterfaceTypeAnnotation", arguments);
}

function intersectionTypeAnnotation(types) {
  return _builder$1.default.apply("IntersectionTypeAnnotation", arguments);
}

function mixedTypeAnnotation() {
  return _builder$1.default.apply("MixedTypeAnnotation", arguments);
}

function emptyTypeAnnotation() {
  return _builder$1.default.apply("EmptyTypeAnnotation", arguments);
}

function nullableTypeAnnotation(typeAnnotation) {
  return _builder$1.default.apply("NullableTypeAnnotation", arguments);
}

function numberLiteralTypeAnnotation(value) {
  return _builder$1.default.apply("NumberLiteralTypeAnnotation", arguments);
}

function numberTypeAnnotation() {
  return _builder$1.default.apply("NumberTypeAnnotation", arguments);
}

function objectTypeAnnotation(properties, indexers, callProperties, internalSlots, exact) {
  return _builder$1.default.apply("ObjectTypeAnnotation", arguments);
}

function objectTypeInternalSlot(id, value, optional, _static, method) {
  return _builder$1.default.apply("ObjectTypeInternalSlot", arguments);
}

function objectTypeCallProperty(value) {
  return _builder$1.default.apply("ObjectTypeCallProperty", arguments);
}

function objectTypeIndexer(id, key, value, variance) {
  return _builder$1.default.apply("ObjectTypeIndexer", arguments);
}

function objectTypeProperty(key, value, variance) {
  return _builder$1.default.apply("ObjectTypeProperty", arguments);
}

function objectTypeSpreadProperty(argument) {
  return _builder$1.default.apply("ObjectTypeSpreadProperty", arguments);
}

function opaqueType(id, typeParameters, supertype, impltype) {
  return _builder$1.default.apply("OpaqueType", arguments);
}

function qualifiedTypeIdentifier(id, qualification) {
  return _builder$1.default.apply("QualifiedTypeIdentifier", arguments);
}

function stringLiteralTypeAnnotation(value) {
  return _builder$1.default.apply("StringLiteralTypeAnnotation", arguments);
}

function stringTypeAnnotation() {
  return _builder$1.default.apply("StringTypeAnnotation", arguments);
}

function symbolTypeAnnotation() {
  return _builder$1.default.apply("SymbolTypeAnnotation", arguments);
}

function thisTypeAnnotation() {
  return _builder$1.default.apply("ThisTypeAnnotation", arguments);
}

function tupleTypeAnnotation(types) {
  return _builder$1.default.apply("TupleTypeAnnotation", arguments);
}

function typeofTypeAnnotation(argument) {
  return _builder$1.default.apply("TypeofTypeAnnotation", arguments);
}

function typeAlias(id, typeParameters, right) {
  return _builder$1.default.apply("TypeAlias", arguments);
}

function typeAnnotation(typeAnnotation) {
  return _builder$1.default.apply("TypeAnnotation", arguments);
}

function typeCastExpression(expression, typeAnnotation) {
  return _builder$1.default.apply("TypeCastExpression", arguments);
}

function typeParameter(bound, _default, variance) {
  return _builder$1.default.apply("TypeParameter", arguments);
}

function typeParameterDeclaration(params) {
  return _builder$1.default.apply("TypeParameterDeclaration", arguments);
}

function typeParameterInstantiation(params) {
  return _builder$1.default.apply("TypeParameterInstantiation", arguments);
}

function unionTypeAnnotation(types) {
  return _builder$1.default.apply("UnionTypeAnnotation", arguments);
}

function variance(kind) {
  return _builder$1.default.apply("Variance", arguments);
}

function voidTypeAnnotation() {
  return _builder$1.default.apply("VoidTypeAnnotation", arguments);
}

function enumDeclaration(id, body) {
  return _builder$1.default.apply("EnumDeclaration", arguments);
}

function enumBooleanBody(members) {
  return _builder$1.default.apply("EnumBooleanBody", arguments);
}

function enumNumberBody(members) {
  return _builder$1.default.apply("EnumNumberBody", arguments);
}

function enumStringBody(members) {
  return _builder$1.default.apply("EnumStringBody", arguments);
}

function enumSymbolBody(members) {
  return _builder$1.default.apply("EnumSymbolBody", arguments);
}

function enumBooleanMember(id) {
  return _builder$1.default.apply("EnumBooleanMember", arguments);
}

function enumNumberMember(id, init) {
  return _builder$1.default.apply("EnumNumberMember", arguments);
}

function enumStringMember(id, init) {
  return _builder$1.default.apply("EnumStringMember", arguments);
}

function enumDefaultedMember(id) {
  return _builder$1.default.apply("EnumDefaultedMember", arguments);
}

function indexedAccessType(objectType, indexType) {
  return _builder$1.default.apply("IndexedAccessType", arguments);
}

function optionalIndexedAccessType(objectType, indexType) {
  return _builder$1.default.apply("OptionalIndexedAccessType", arguments);
}

function jsxAttribute(name, value) {
  return _builder$1.default.apply("JSXAttribute", arguments);
}

function jsxClosingElement(name) {
  return _builder$1.default.apply("JSXClosingElement", arguments);
}

function jsxElement(openingElement, closingElement, children, selfClosing) {
  return _builder$1.default.apply("JSXElement", arguments);
}

function jsxEmptyExpression() {
  return _builder$1.default.apply("JSXEmptyExpression", arguments);
}

function jsxExpressionContainer(expression) {
  return _builder$1.default.apply("JSXExpressionContainer", arguments);
}

function jsxSpreadChild(expression) {
  return _builder$1.default.apply("JSXSpreadChild", arguments);
}

function jsxIdentifier(name) {
  return _builder$1.default.apply("JSXIdentifier", arguments);
}

function jsxMemberExpression(object, property) {
  return _builder$1.default.apply("JSXMemberExpression", arguments);
}

function jsxNamespacedName(namespace, name) {
  return _builder$1.default.apply("JSXNamespacedName", arguments);
}

function jsxOpeningElement(name, attributes, selfClosing) {
  return _builder$1.default.apply("JSXOpeningElement", arguments);
}

function jsxSpreadAttribute(argument) {
  return _builder$1.default.apply("JSXSpreadAttribute", arguments);
}

function jsxText(value) {
  return _builder$1.default.apply("JSXText", arguments);
}

function jsxFragment(openingFragment, closingFragment, children) {
  return _builder$1.default.apply("JSXFragment", arguments);
}

function jsxOpeningFragment() {
  return _builder$1.default.apply("JSXOpeningFragment", arguments);
}

function jsxClosingFragment() {
  return _builder$1.default.apply("JSXClosingFragment", arguments);
}

function noop() {
  return _builder$1.default.apply("Noop", arguments);
}

function placeholder(expectedNode, name) {
  return _builder$1.default.apply("Placeholder", arguments);
}

function v8IntrinsicIdentifier(name) {
  return _builder$1.default.apply("V8IntrinsicIdentifier", arguments);
}

function argumentPlaceholder() {
  return _builder$1.default.apply("ArgumentPlaceholder", arguments);
}

function bindExpression(object, callee) {
  return _builder$1.default.apply("BindExpression", arguments);
}

function importAttribute(key, value) {
  return _builder$1.default.apply("ImportAttribute", arguments);
}

function decorator(expression) {
  return _builder$1.default.apply("Decorator", arguments);
}

function doExpression(body, async) {
  return _builder$1.default.apply("DoExpression", arguments);
}

function exportDefaultSpecifier(exported) {
  return _builder$1.default.apply("ExportDefaultSpecifier", arguments);
}

function recordExpression(properties) {
  return _builder$1.default.apply("RecordExpression", arguments);
}

function tupleExpression(elements) {
  return _builder$1.default.apply("TupleExpression", arguments);
}

function decimalLiteral(value) {
  return _builder$1.default.apply("DecimalLiteral", arguments);
}

function moduleExpression(body) {
  return _builder$1.default.apply("ModuleExpression", arguments);
}

function topicReference() {
  return _builder$1.default.apply("TopicReference", arguments);
}

function pipelineTopicExpression(expression) {
  return _builder$1.default.apply("PipelineTopicExpression", arguments);
}

function pipelineBareFunction(callee) {
  return _builder$1.default.apply("PipelineBareFunction", arguments);
}

function pipelinePrimaryTopicReference() {
  return _builder$1.default.apply("PipelinePrimaryTopicReference", arguments);
}

function tsParameterProperty(parameter) {
  return _builder$1.default.apply("TSParameterProperty", arguments);
}

function tsDeclareFunction(id, typeParameters, params, returnType) {
  return _builder$1.default.apply("TSDeclareFunction", arguments);
}

function tsDeclareMethod(decorators, key, typeParameters, params, returnType) {
  return _builder$1.default.apply("TSDeclareMethod", arguments);
}

function tsQualifiedName(left, right) {
  return _builder$1.default.apply("TSQualifiedName", arguments);
}

function tsCallSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return _builder$1.default.apply("TSCallSignatureDeclaration", arguments);
}

function tsConstructSignatureDeclaration(typeParameters, parameters, typeAnnotation) {
  return _builder$1.default.apply("TSConstructSignatureDeclaration", arguments);
}

function tsPropertySignature(key, typeAnnotation, initializer) {
  return _builder$1.default.apply("TSPropertySignature", arguments);
}

function tsMethodSignature(key, typeParameters, parameters, typeAnnotation) {
  return _builder$1.default.apply("TSMethodSignature", arguments);
}

function tsIndexSignature(parameters, typeAnnotation) {
  return _builder$1.default.apply("TSIndexSignature", arguments);
}

function tsAnyKeyword() {
  return _builder$1.default.apply("TSAnyKeyword", arguments);
}

function tsBooleanKeyword() {
  return _builder$1.default.apply("TSBooleanKeyword", arguments);
}

function tsBigIntKeyword() {
  return _builder$1.default.apply("TSBigIntKeyword", arguments);
}

function tsIntrinsicKeyword() {
  return _builder$1.default.apply("TSIntrinsicKeyword", arguments);
}

function tsNeverKeyword() {
  return _builder$1.default.apply("TSNeverKeyword", arguments);
}

function tsNullKeyword() {
  return _builder$1.default.apply("TSNullKeyword", arguments);
}

function tsNumberKeyword() {
  return _builder$1.default.apply("TSNumberKeyword", arguments);
}

function tsObjectKeyword() {
  return _builder$1.default.apply("TSObjectKeyword", arguments);
}

function tsStringKeyword() {
  return _builder$1.default.apply("TSStringKeyword", arguments);
}

function tsSymbolKeyword() {
  return _builder$1.default.apply("TSSymbolKeyword", arguments);
}

function tsUndefinedKeyword() {
  return _builder$1.default.apply("TSUndefinedKeyword", arguments);
}

function tsUnknownKeyword() {
  return _builder$1.default.apply("TSUnknownKeyword", arguments);
}

function tsVoidKeyword() {
  return _builder$1.default.apply("TSVoidKeyword", arguments);
}

function tsThisType() {
  return _builder$1.default.apply("TSThisType", arguments);
}

function tsFunctionType(typeParameters, parameters, typeAnnotation) {
  return _builder$1.default.apply("TSFunctionType", arguments);
}

function tsConstructorType(typeParameters, parameters, typeAnnotation) {
  return _builder$1.default.apply("TSConstructorType", arguments);
}

function tsTypeReference(typeName, typeParameters) {
  return _builder$1.default.apply("TSTypeReference", arguments);
}

function tsTypePredicate(parameterName, typeAnnotation, asserts) {
  return _builder$1.default.apply("TSTypePredicate", arguments);
}

function tsTypeQuery(exprName) {
  return _builder$1.default.apply("TSTypeQuery", arguments);
}

function tsTypeLiteral(members) {
  return _builder$1.default.apply("TSTypeLiteral", arguments);
}

function tsArrayType(elementType) {
  return _builder$1.default.apply("TSArrayType", arguments);
}

function tsTupleType(elementTypes) {
  return _builder$1.default.apply("TSTupleType", arguments);
}

function tsOptionalType(typeAnnotation) {
  return _builder$1.default.apply("TSOptionalType", arguments);
}

function tsRestType(typeAnnotation) {
  return _builder$1.default.apply("TSRestType", arguments);
}

function tsNamedTupleMember(label, elementType, optional) {
  return _builder$1.default.apply("TSNamedTupleMember", arguments);
}

function tsUnionType(types) {
  return _builder$1.default.apply("TSUnionType", arguments);
}

function tsIntersectionType(types) {
  return _builder$1.default.apply("TSIntersectionType", arguments);
}

function tsConditionalType(checkType, extendsType, trueType, falseType) {
  return _builder$1.default.apply("TSConditionalType", arguments);
}

function tsInferType(typeParameter) {
  return _builder$1.default.apply("TSInferType", arguments);
}

function tsParenthesizedType(typeAnnotation) {
  return _builder$1.default.apply("TSParenthesizedType", arguments);
}

function tsTypeOperator(typeAnnotation) {
  return _builder$1.default.apply("TSTypeOperator", arguments);
}

function tsIndexedAccessType(objectType, indexType) {
  return _builder$1.default.apply("TSIndexedAccessType", arguments);
}

function tsMappedType(typeParameter, typeAnnotation, nameType) {
  return _builder$1.default.apply("TSMappedType", arguments);
}

function tsLiteralType(literal) {
  return _builder$1.default.apply("TSLiteralType", arguments);
}

function tsExpressionWithTypeArguments(expression, typeParameters) {
  return _builder$1.default.apply("TSExpressionWithTypeArguments", arguments);
}

function tsInterfaceDeclaration(id, typeParameters, _extends, body) {
  return _builder$1.default.apply("TSInterfaceDeclaration", arguments);
}

function tsInterfaceBody(body) {
  return _builder$1.default.apply("TSInterfaceBody", arguments);
}

function tsTypeAliasDeclaration(id, typeParameters, typeAnnotation) {
  return _builder$1.default.apply("TSTypeAliasDeclaration", arguments);
}

function tsAsExpression(expression, typeAnnotation) {
  return _builder$1.default.apply("TSAsExpression", arguments);
}

function tsTypeAssertion(typeAnnotation, expression) {
  return _builder$1.default.apply("TSTypeAssertion", arguments);
}

function tsEnumDeclaration(id, members) {
  return _builder$1.default.apply("TSEnumDeclaration", arguments);
}

function tsEnumMember(id, initializer) {
  return _builder$1.default.apply("TSEnumMember", arguments);
}

function tsModuleDeclaration(id, body) {
  return _builder$1.default.apply("TSModuleDeclaration", arguments);
}

function tsModuleBlock(body) {
  return _builder$1.default.apply("TSModuleBlock", arguments);
}

function tsImportType(argument, qualifier, typeParameters) {
  return _builder$1.default.apply("TSImportType", arguments);
}

function tsImportEqualsDeclaration(id, moduleReference) {
  return _builder$1.default.apply("TSImportEqualsDeclaration", arguments);
}

function tsExternalModuleReference(expression) {
  return _builder$1.default.apply("TSExternalModuleReference", arguments);
}

function tsNonNullExpression(expression) {
  return _builder$1.default.apply("TSNonNullExpression", arguments);
}

function tsExportAssignment(expression) {
  return _builder$1.default.apply("TSExportAssignment", arguments);
}

function tsNamespaceExportDeclaration(id) {
  return _builder$1.default.apply("TSNamespaceExportDeclaration", arguments);
}

function tsTypeAnnotation(typeAnnotation) {
  return _builder$1.default.apply("TSTypeAnnotation", arguments);
}

function tsTypeParameterInstantiation(params) {
  return _builder$1.default.apply("TSTypeParameterInstantiation", arguments);
}

function tsTypeParameterDeclaration(params) {
  return _builder$1.default.apply("TSTypeParameterDeclaration", arguments);
}

function tsTypeParameter(constraint, _default, name) {
  return _builder$1.default.apply("TSTypeParameter", arguments);
}

function NumberLiteral(value) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return _builder$1.default.apply("NumberLiteral", arguments);
}

function RegexLiteral(pattern, flags) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return _builder$1.default.apply("RegexLiteral", arguments);
}

function RestProperty(argument) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return _builder$1.default.apply("RestProperty", arguments);
}

function SpreadProperty(argument) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return _builder$1.default.apply("SpreadProperty", arguments);
}

Object.defineProperty(cleanJSXElementLiteralChild$1, "__esModule", {
  value: true
});
cleanJSXElementLiteralChild$1.default = cleanJSXElementLiteralChild;

var _generated$n = generated$3;

function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  let str = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, _generated$n.stringLiteral)(str));
}

Object.defineProperty(buildChildren$1, "__esModule", {
  value: true
});
buildChildren$1.default = buildChildren;

var _generated$m = generated$4;

var _cleanJSXElementLiteralChild = cleanJSXElementLiteralChild$1;

function buildChildren(node) {
  const elements = [];

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];

    if ((0, _generated$m.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }

    if ((0, _generated$m.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, _generated$m.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}

var assertNode$1 = {};

var isNode$1 = {};

Object.defineProperty(isNode$1, "__esModule", {
  value: true
});
isNode$1.default = isNode;

var _definitions$5 = definitions;

function isNode(node) {
  return !!(node && _definitions$5.VISITOR_KEYS[node.type]);
}

Object.defineProperty(assertNode$1, "__esModule", {
  value: true
});
assertNode$1.default = assertNode;

var _isNode = isNode$1;

function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    var _node$type;

    const type = (_node$type = node == null ? void 0 : node.type) != null ? _node$type : JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

var generated$2 = {};

Object.defineProperty(generated$2, "__esModule", {
  value: true
});
generated$2.assertAccessor = assertAccessor;
generated$2.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
generated$2.assertArgumentPlaceholder = assertArgumentPlaceholder;
generated$2.assertArrayExpression = assertArrayExpression;
generated$2.assertArrayPattern = assertArrayPattern;
generated$2.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
generated$2.assertArrowFunctionExpression = assertArrowFunctionExpression;
generated$2.assertAssignmentExpression = assertAssignmentExpression;
generated$2.assertAssignmentPattern = assertAssignmentPattern;
generated$2.assertAwaitExpression = assertAwaitExpression;
generated$2.assertBigIntLiteral = assertBigIntLiteral;
generated$2.assertBinary = assertBinary;
generated$2.assertBinaryExpression = assertBinaryExpression;
generated$2.assertBindExpression = assertBindExpression;
generated$2.assertBlock = assertBlock;
generated$2.assertBlockParent = assertBlockParent;
generated$2.assertBlockStatement = assertBlockStatement;
generated$2.assertBooleanLiteral = assertBooleanLiteral;
generated$2.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
generated$2.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
generated$2.assertBreakStatement = assertBreakStatement;
generated$2.assertCallExpression = assertCallExpression;
generated$2.assertCatchClause = assertCatchClause;
generated$2.assertClass = assertClass;
generated$2.assertClassAccessorProperty = assertClassAccessorProperty;
generated$2.assertClassBody = assertClassBody;
generated$2.assertClassDeclaration = assertClassDeclaration;
generated$2.assertClassExpression = assertClassExpression;
generated$2.assertClassImplements = assertClassImplements;
generated$2.assertClassMethod = assertClassMethod;
generated$2.assertClassPrivateMethod = assertClassPrivateMethod;
generated$2.assertClassPrivateProperty = assertClassPrivateProperty;
generated$2.assertClassProperty = assertClassProperty;
generated$2.assertCompletionStatement = assertCompletionStatement;
generated$2.assertConditional = assertConditional;
generated$2.assertConditionalExpression = assertConditionalExpression;
generated$2.assertContinueStatement = assertContinueStatement;
generated$2.assertDebuggerStatement = assertDebuggerStatement;
generated$2.assertDecimalLiteral = assertDecimalLiteral;
generated$2.assertDeclaration = assertDeclaration;
generated$2.assertDeclareClass = assertDeclareClass;
generated$2.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
generated$2.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
generated$2.assertDeclareFunction = assertDeclareFunction;
generated$2.assertDeclareInterface = assertDeclareInterface;
generated$2.assertDeclareModule = assertDeclareModule;
generated$2.assertDeclareModuleExports = assertDeclareModuleExports;
generated$2.assertDeclareOpaqueType = assertDeclareOpaqueType;
generated$2.assertDeclareTypeAlias = assertDeclareTypeAlias;
generated$2.assertDeclareVariable = assertDeclareVariable;
generated$2.assertDeclaredPredicate = assertDeclaredPredicate;
generated$2.assertDecorator = assertDecorator;
generated$2.assertDirective = assertDirective;
generated$2.assertDirectiveLiteral = assertDirectiveLiteral;
generated$2.assertDoExpression = assertDoExpression;
generated$2.assertDoWhileStatement = assertDoWhileStatement;
generated$2.assertEmptyStatement = assertEmptyStatement;
generated$2.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
generated$2.assertEnumBody = assertEnumBody;
generated$2.assertEnumBooleanBody = assertEnumBooleanBody;
generated$2.assertEnumBooleanMember = assertEnumBooleanMember;
generated$2.assertEnumDeclaration = assertEnumDeclaration;
generated$2.assertEnumDefaultedMember = assertEnumDefaultedMember;
generated$2.assertEnumMember = assertEnumMember;
generated$2.assertEnumNumberBody = assertEnumNumberBody;
generated$2.assertEnumNumberMember = assertEnumNumberMember;
generated$2.assertEnumStringBody = assertEnumStringBody;
generated$2.assertEnumStringMember = assertEnumStringMember;
generated$2.assertEnumSymbolBody = assertEnumSymbolBody;
generated$2.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
generated$2.assertExportAllDeclaration = assertExportAllDeclaration;
generated$2.assertExportDeclaration = assertExportDeclaration;
generated$2.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
generated$2.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
generated$2.assertExportNamedDeclaration = assertExportNamedDeclaration;
generated$2.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
generated$2.assertExportSpecifier = assertExportSpecifier;
generated$2.assertExpression = assertExpression;
generated$2.assertExpressionStatement = assertExpressionStatement$1;
generated$2.assertExpressionWrapper = assertExpressionWrapper;
generated$2.assertFile = assertFile;
generated$2.assertFlow = assertFlow;
generated$2.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
generated$2.assertFlowDeclaration = assertFlowDeclaration;
generated$2.assertFlowPredicate = assertFlowPredicate;
generated$2.assertFlowType = assertFlowType;
generated$2.assertFor = assertFor;
generated$2.assertForInStatement = assertForInStatement;
generated$2.assertForOfStatement = assertForOfStatement;
generated$2.assertForStatement = assertForStatement;
generated$2.assertForXStatement = assertForXStatement;
generated$2.assertFunction = assertFunction;
generated$2.assertFunctionDeclaration = assertFunctionDeclaration;
generated$2.assertFunctionExpression = assertFunctionExpression;
generated$2.assertFunctionParent = assertFunctionParent;
generated$2.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
generated$2.assertFunctionTypeParam = assertFunctionTypeParam;
generated$2.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
generated$2.assertIdentifier = assertIdentifier;
generated$2.assertIfStatement = assertIfStatement;
generated$2.assertImmutable = assertImmutable;
generated$2.assertImport = assertImport;
generated$2.assertImportAttribute = assertImportAttribute;
generated$2.assertImportDeclaration = assertImportDeclaration;
generated$2.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
generated$2.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
generated$2.assertImportSpecifier = assertImportSpecifier;
generated$2.assertIndexedAccessType = assertIndexedAccessType;
generated$2.assertInferredPredicate = assertInferredPredicate;
generated$2.assertInterfaceDeclaration = assertInterfaceDeclaration;
generated$2.assertInterfaceExtends = assertInterfaceExtends;
generated$2.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
generated$2.assertInterpreterDirective = assertInterpreterDirective;
generated$2.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
generated$2.assertJSX = assertJSX;
generated$2.assertJSXAttribute = assertJSXAttribute;
generated$2.assertJSXClosingElement = assertJSXClosingElement;
generated$2.assertJSXClosingFragment = assertJSXClosingFragment;
generated$2.assertJSXElement = assertJSXElement;
generated$2.assertJSXEmptyExpression = assertJSXEmptyExpression;
generated$2.assertJSXExpressionContainer = assertJSXExpressionContainer;
generated$2.assertJSXFragment = assertJSXFragment;
generated$2.assertJSXIdentifier = assertJSXIdentifier;
generated$2.assertJSXMemberExpression = assertJSXMemberExpression;
generated$2.assertJSXNamespacedName = assertJSXNamespacedName;
generated$2.assertJSXOpeningElement = assertJSXOpeningElement;
generated$2.assertJSXOpeningFragment = assertJSXOpeningFragment;
generated$2.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
generated$2.assertJSXSpreadChild = assertJSXSpreadChild;
generated$2.assertJSXText = assertJSXText;
generated$2.assertLVal = assertLVal;
generated$2.assertLabeledStatement = assertLabeledStatement;
generated$2.assertLiteral = assertLiteral;
generated$2.assertLogicalExpression = assertLogicalExpression;
generated$2.assertLoop = assertLoop;
generated$2.assertMemberExpression = assertMemberExpression;
generated$2.assertMetaProperty = assertMetaProperty;
generated$2.assertMethod = assertMethod;
generated$2.assertMiscellaneous = assertMiscellaneous;
generated$2.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
generated$2.assertModuleDeclaration = assertModuleDeclaration;
generated$2.assertModuleExpression = assertModuleExpression;
generated$2.assertModuleSpecifier = assertModuleSpecifier;
generated$2.assertNewExpression = assertNewExpression;
generated$2.assertNoop = assertNoop;
generated$2.assertNullLiteral = assertNullLiteral;
generated$2.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
generated$2.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
generated$2.assertNumberLiteral = assertNumberLiteral;
generated$2.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
generated$2.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
generated$2.assertNumericLiteral = assertNumericLiteral;
generated$2.assertObjectExpression = assertObjectExpression;
generated$2.assertObjectMember = assertObjectMember;
generated$2.assertObjectMethod = assertObjectMethod;
generated$2.assertObjectPattern = assertObjectPattern;
generated$2.assertObjectProperty = assertObjectProperty;
generated$2.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
generated$2.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
generated$2.assertObjectTypeIndexer = assertObjectTypeIndexer;
generated$2.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
generated$2.assertObjectTypeProperty = assertObjectTypeProperty;
generated$2.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
generated$2.assertOpaqueType = assertOpaqueType;
generated$2.assertOptionalCallExpression = assertOptionalCallExpression;
generated$2.assertOptionalIndexedAccessType = assertOptionalIndexedAccessType;
generated$2.assertOptionalMemberExpression = assertOptionalMemberExpression;
generated$2.assertParenthesizedExpression = assertParenthesizedExpression;
generated$2.assertPattern = assertPattern;
generated$2.assertPatternLike = assertPatternLike;
generated$2.assertPipelineBareFunction = assertPipelineBareFunction;
generated$2.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
generated$2.assertPipelineTopicExpression = assertPipelineTopicExpression;
generated$2.assertPlaceholder = assertPlaceholder;
generated$2.assertPrivate = assertPrivate;
generated$2.assertPrivateName = assertPrivateName;
generated$2.assertProgram = assertProgram;
generated$2.assertProperty = assertProperty;
generated$2.assertPureish = assertPureish;
generated$2.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
generated$2.assertRecordExpression = assertRecordExpression;
generated$2.assertRegExpLiteral = assertRegExpLiteral;
generated$2.assertRegexLiteral = assertRegexLiteral;
generated$2.assertRestElement = assertRestElement;
generated$2.assertRestProperty = assertRestProperty;
generated$2.assertReturnStatement = assertReturnStatement;
generated$2.assertScopable = assertScopable;
generated$2.assertSequenceExpression = assertSequenceExpression;
generated$2.assertSpreadElement = assertSpreadElement;
generated$2.assertSpreadProperty = assertSpreadProperty;
generated$2.assertStandardized = assertStandardized;
generated$2.assertStatement = assertStatement;
generated$2.assertStaticBlock = assertStaticBlock;
generated$2.assertStringLiteral = assertStringLiteral;
generated$2.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
generated$2.assertStringTypeAnnotation = assertStringTypeAnnotation;
generated$2.assertSuper = assertSuper;
generated$2.assertSwitchCase = assertSwitchCase;
generated$2.assertSwitchStatement = assertSwitchStatement;
generated$2.assertSymbolTypeAnnotation = assertSymbolTypeAnnotation;
generated$2.assertTSAnyKeyword = assertTSAnyKeyword;
generated$2.assertTSArrayType = assertTSArrayType;
generated$2.assertTSAsExpression = assertTSAsExpression;
generated$2.assertTSBaseType = assertTSBaseType;
generated$2.assertTSBigIntKeyword = assertTSBigIntKeyword;
generated$2.assertTSBooleanKeyword = assertTSBooleanKeyword;
generated$2.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
generated$2.assertTSConditionalType = assertTSConditionalType;
generated$2.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
generated$2.assertTSConstructorType = assertTSConstructorType;
generated$2.assertTSDeclareFunction = assertTSDeclareFunction;
generated$2.assertTSDeclareMethod = assertTSDeclareMethod;
generated$2.assertTSEntityName = assertTSEntityName;
generated$2.assertTSEnumDeclaration = assertTSEnumDeclaration;
generated$2.assertTSEnumMember = assertTSEnumMember;
generated$2.assertTSExportAssignment = assertTSExportAssignment;
generated$2.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
generated$2.assertTSExternalModuleReference = assertTSExternalModuleReference;
generated$2.assertTSFunctionType = assertTSFunctionType;
generated$2.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
generated$2.assertTSImportType = assertTSImportType;
generated$2.assertTSIndexSignature = assertTSIndexSignature;
generated$2.assertTSIndexedAccessType = assertTSIndexedAccessType;
generated$2.assertTSInferType = assertTSInferType;
generated$2.assertTSInterfaceBody = assertTSInterfaceBody;
generated$2.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
generated$2.assertTSIntersectionType = assertTSIntersectionType;
generated$2.assertTSIntrinsicKeyword = assertTSIntrinsicKeyword;
generated$2.assertTSLiteralType = assertTSLiteralType;
generated$2.assertTSMappedType = assertTSMappedType;
generated$2.assertTSMethodSignature = assertTSMethodSignature;
generated$2.assertTSModuleBlock = assertTSModuleBlock;
generated$2.assertTSModuleDeclaration = assertTSModuleDeclaration;
generated$2.assertTSNamedTupleMember = assertTSNamedTupleMember;
generated$2.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
generated$2.assertTSNeverKeyword = assertTSNeverKeyword;
generated$2.assertTSNonNullExpression = assertTSNonNullExpression;
generated$2.assertTSNullKeyword = assertTSNullKeyword;
generated$2.assertTSNumberKeyword = assertTSNumberKeyword;
generated$2.assertTSObjectKeyword = assertTSObjectKeyword;
generated$2.assertTSOptionalType = assertTSOptionalType;
generated$2.assertTSParameterProperty = assertTSParameterProperty;
generated$2.assertTSParenthesizedType = assertTSParenthesizedType;
generated$2.assertTSPropertySignature = assertTSPropertySignature;
generated$2.assertTSQualifiedName = assertTSQualifiedName;
generated$2.assertTSRestType = assertTSRestType;
generated$2.assertTSStringKeyword = assertTSStringKeyword;
generated$2.assertTSSymbolKeyword = assertTSSymbolKeyword;
generated$2.assertTSThisType = assertTSThisType;
generated$2.assertTSTupleType = assertTSTupleType;
generated$2.assertTSType = assertTSType;
generated$2.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
generated$2.assertTSTypeAnnotation = assertTSTypeAnnotation;
generated$2.assertTSTypeAssertion = assertTSTypeAssertion;
generated$2.assertTSTypeElement = assertTSTypeElement;
generated$2.assertTSTypeLiteral = assertTSTypeLiteral;
generated$2.assertTSTypeOperator = assertTSTypeOperator;
generated$2.assertTSTypeParameter = assertTSTypeParameter;
generated$2.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
generated$2.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
generated$2.assertTSTypePredicate = assertTSTypePredicate;
generated$2.assertTSTypeQuery = assertTSTypeQuery;
generated$2.assertTSTypeReference = assertTSTypeReference;
generated$2.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
generated$2.assertTSUnionType = assertTSUnionType;
generated$2.assertTSUnknownKeyword = assertTSUnknownKeyword;
generated$2.assertTSVoidKeyword = assertTSVoidKeyword;
generated$2.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
generated$2.assertTemplateElement = assertTemplateElement;
generated$2.assertTemplateLiteral = assertTemplateLiteral;
generated$2.assertTerminatorless = assertTerminatorless;
generated$2.assertThisExpression = assertThisExpression;
generated$2.assertThisTypeAnnotation = assertThisTypeAnnotation;
generated$2.assertThrowStatement = assertThrowStatement;
generated$2.assertTopicReference = assertTopicReference;
generated$2.assertTryStatement = assertTryStatement;
generated$2.assertTupleExpression = assertTupleExpression;
generated$2.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
generated$2.assertTypeAlias = assertTypeAlias;
generated$2.assertTypeAnnotation = assertTypeAnnotation;
generated$2.assertTypeCastExpression = assertTypeCastExpression;
generated$2.assertTypeParameter = assertTypeParameter;
generated$2.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
generated$2.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
generated$2.assertTypeScript = assertTypeScript;
generated$2.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
generated$2.assertUnaryExpression = assertUnaryExpression;
generated$2.assertUnaryLike = assertUnaryLike;
generated$2.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
generated$2.assertUpdateExpression = assertUpdateExpression;
generated$2.assertUserWhitespacable = assertUserWhitespacable;
generated$2.assertV8IntrinsicIdentifier = assertV8IntrinsicIdentifier;
generated$2.assertVariableDeclaration = assertVariableDeclaration;
generated$2.assertVariableDeclarator = assertVariableDeclarator;
generated$2.assertVariance = assertVariance;
generated$2.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
generated$2.assertWhile = assertWhile;
generated$2.assertWhileStatement = assertWhileStatement;
generated$2.assertWithStatement = assertWithStatement;
generated$2.assertYieldExpression = assertYieldExpression;

var _is = is$1;

function assert$1(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, ` + `but instead got "${node.type}".`);
  }
}

function assertArrayExpression(node, opts) {
  assert$1("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts) {
  assert$1("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts) {
  assert$1("BinaryExpression", node, opts);
}

function assertInterpreterDirective(node, opts) {
  assert$1("InterpreterDirective", node, opts);
}

function assertDirective(node, opts) {
  assert$1("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts) {
  assert$1("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts) {
  assert$1("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts) {
  assert$1("BreakStatement", node, opts);
}

function assertCallExpression(node, opts) {
  assert$1("CallExpression", node, opts);
}

function assertCatchClause(node, opts) {
  assert$1("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts) {
  assert$1("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts) {
  assert$1("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts) {
  assert$1("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts) {
  assert$1("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts) {
  assert$1("EmptyStatement", node, opts);
}

function assertExpressionStatement$1(node, opts) {
  assert$1("ExpressionStatement", node, opts);
}

function assertFile(node, opts) {
  assert$1("File", node, opts);
}

function assertForInStatement(node, opts) {
  assert$1("ForInStatement", node, opts);
}

function assertForStatement(node, opts) {
  assert$1("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts) {
  assert$1("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts) {
  assert$1("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts) {
  assert$1("Identifier", node, opts);
}

function assertIfStatement(node, opts) {
  assert$1("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts) {
  assert$1("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts) {
  assert$1("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts) {
  assert$1("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts) {
  assert$1("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts) {
  assert$1("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts) {
  assert$1("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts) {
  assert$1("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts) {
  assert$1("MemberExpression", node, opts);
}

function assertNewExpression(node, opts) {
  assert$1("NewExpression", node, opts);
}

function assertProgram(node, opts) {
  assert$1("Program", node, opts);
}

function assertObjectExpression(node, opts) {
  assert$1("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts) {
  assert$1("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts) {
  assert$1("ObjectProperty", node, opts);
}

function assertRestElement(node, opts) {
  assert$1("RestElement", node, opts);
}

function assertReturnStatement(node, opts) {
  assert$1("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts) {
  assert$1("SequenceExpression", node, opts);
}

function assertParenthesizedExpression(node, opts) {
  assert$1("ParenthesizedExpression", node, opts);
}

function assertSwitchCase(node, opts) {
  assert$1("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts) {
  assert$1("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts) {
  assert$1("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts) {
  assert$1("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts) {
  assert$1("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts) {
  assert$1("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts) {
  assert$1("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts) {
  assert$1("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts) {
  assert$1("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts) {
  assert$1("WhileStatement", node, opts);
}

function assertWithStatement(node, opts) {
  assert$1("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts) {
  assert$1("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts) {
  assert$1("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts) {
  assert$1("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts) {
  assert$1("ClassBody", node, opts);
}

function assertClassExpression(node, opts) {
  assert$1("ClassExpression", node, opts);
}

function assertClassDeclaration(node, opts) {
  assert$1("ClassDeclaration", node, opts);
}

function assertExportAllDeclaration(node, opts) {
  assert$1("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts) {
  assert$1("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts) {
  assert$1("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts) {
  assert$1("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts) {
  assert$1("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts) {
  assert$1("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts) {
  assert$1("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts) {
  assert$1("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts) {
  assert$1("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts) {
  assert$1("MetaProperty", node, opts);
}

function assertClassMethod(node, opts) {
  assert$1("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts) {
  assert$1("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts) {
  assert$1("SpreadElement", node, opts);
}

function assertSuper(node, opts) {
  assert$1("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts) {
  assert$1("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts) {
  assert$1("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts) {
  assert$1("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts) {
  assert$1("YieldExpression", node, opts);
}

function assertAwaitExpression(node, opts) {
  assert$1("AwaitExpression", node, opts);
}

function assertImport(node, opts) {
  assert$1("Import", node, opts);
}

function assertBigIntLiteral(node, opts) {
  assert$1("BigIntLiteral", node, opts);
}

function assertExportNamespaceSpecifier(node, opts) {
  assert$1("ExportNamespaceSpecifier", node, opts);
}

function assertOptionalMemberExpression(node, opts) {
  assert$1("OptionalMemberExpression", node, opts);
}

function assertOptionalCallExpression(node, opts) {
  assert$1("OptionalCallExpression", node, opts);
}

function assertClassProperty(node, opts) {
  assert$1("ClassProperty", node, opts);
}

function assertClassAccessorProperty(node, opts) {
  assert$1("ClassAccessorProperty", node, opts);
}

function assertClassPrivateProperty(node, opts) {
  assert$1("ClassPrivateProperty", node, opts);
}

function assertClassPrivateMethod(node, opts) {
  assert$1("ClassPrivateMethod", node, opts);
}

function assertPrivateName(node, opts) {
  assert$1("PrivateName", node, opts);
}

function assertStaticBlock(node, opts) {
  assert$1("StaticBlock", node, opts);
}

function assertAnyTypeAnnotation(node, opts) {
  assert$1("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts) {
  assert$1("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts) {
  assert$1("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts) {
  assert$1("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts) {
  assert$1("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts) {
  assert$1("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts) {
  assert$1("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts) {
  assert$1("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts) {
  assert$1("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts) {
  assert$1("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts) {
  assert$1("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts) {
  assert$1("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts) {
  assert$1("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts) {
  assert$1("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts) {
  assert$1("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts) {
  assert$1("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts) {
  assert$1("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts) {
  assert$1("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts) {
  assert$1("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts) {
  assert$1("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts) {
  assert$1("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts) {
  assert$1("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts) {
  assert$1("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts) {
  assert$1("InterfaceDeclaration", node, opts);
}

function assertInterfaceTypeAnnotation(node, opts) {
  assert$1("InterfaceTypeAnnotation", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts) {
  assert$1("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts) {
  assert$1("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts) {
  assert$1("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts) {
  assert$1("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts) {
  assert$1("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts) {
  assert$1("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts) {
  assert$1("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeInternalSlot(node, opts) {
  assert$1("ObjectTypeInternalSlot", node, opts);
}

function assertObjectTypeCallProperty(node, opts) {
  assert$1("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts) {
  assert$1("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts) {
  assert$1("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts) {
  assert$1("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts) {
  assert$1("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts) {
  assert$1("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts) {
  assert$1("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts) {
  assert$1("StringTypeAnnotation", node, opts);
}

function assertSymbolTypeAnnotation(node, opts) {
  assert$1("SymbolTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts) {
  assert$1("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts) {
  assert$1("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts) {
  assert$1("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts) {
  assert$1("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts) {
  assert$1("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts) {
  assert$1("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts) {
  assert$1("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts) {
  assert$1("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts) {
  assert$1("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts) {
  assert$1("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts) {
  assert$1("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts) {
  assert$1("VoidTypeAnnotation", node, opts);
}

function assertEnumDeclaration(node, opts) {
  assert$1("EnumDeclaration", node, opts);
}

function assertEnumBooleanBody(node, opts) {
  assert$1("EnumBooleanBody", node, opts);
}

function assertEnumNumberBody(node, opts) {
  assert$1("EnumNumberBody", node, opts);
}

function assertEnumStringBody(node, opts) {
  assert$1("EnumStringBody", node, opts);
}

function assertEnumSymbolBody(node, opts) {
  assert$1("EnumSymbolBody", node, opts);
}

function assertEnumBooleanMember(node, opts) {
  assert$1("EnumBooleanMember", node, opts);
}

function assertEnumNumberMember(node, opts) {
  assert$1("EnumNumberMember", node, opts);
}

function assertEnumStringMember(node, opts) {
  assert$1("EnumStringMember", node, opts);
}

function assertEnumDefaultedMember(node, opts) {
  assert$1("EnumDefaultedMember", node, opts);
}

function assertIndexedAccessType(node, opts) {
  assert$1("IndexedAccessType", node, opts);
}

function assertOptionalIndexedAccessType(node, opts) {
  assert$1("OptionalIndexedAccessType", node, opts);
}

function assertJSXAttribute(node, opts) {
  assert$1("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts) {
  assert$1("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts) {
  assert$1("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts) {
  assert$1("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts) {
  assert$1("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts) {
  assert$1("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts) {
  assert$1("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts) {
  assert$1("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts) {
  assert$1("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts) {
  assert$1("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts) {
  assert$1("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts) {
  assert$1("JSXText", node, opts);
}

function assertJSXFragment(node, opts) {
  assert$1("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts) {
  assert$1("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts) {
  assert$1("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts) {
  assert$1("Noop", node, opts);
}

function assertPlaceholder(node, opts) {
  assert$1("Placeholder", node, opts);
}

function assertV8IntrinsicIdentifier(node, opts) {
  assert$1("V8IntrinsicIdentifier", node, opts);
}

function assertArgumentPlaceholder(node, opts) {
  assert$1("ArgumentPlaceholder", node, opts);
}

function assertBindExpression(node, opts) {
  assert$1("BindExpression", node, opts);
}

function assertImportAttribute(node, opts) {
  assert$1("ImportAttribute", node, opts);
}

function assertDecorator(node, opts) {
  assert$1("Decorator", node, opts);
}

function assertDoExpression(node, opts) {
  assert$1("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts) {
  assert$1("ExportDefaultSpecifier", node, opts);
}

function assertRecordExpression(node, opts) {
  assert$1("RecordExpression", node, opts);
}

function assertTupleExpression(node, opts) {
  assert$1("TupleExpression", node, opts);
}

function assertDecimalLiteral(node, opts) {
  assert$1("DecimalLiteral", node, opts);
}

function assertModuleExpression(node, opts) {
  assert$1("ModuleExpression", node, opts);
}

function assertTopicReference(node, opts) {
  assert$1("TopicReference", node, opts);
}

function assertPipelineTopicExpression(node, opts) {
  assert$1("PipelineTopicExpression", node, opts);
}

function assertPipelineBareFunction(node, opts) {
  assert$1("PipelineBareFunction", node, opts);
}

function assertPipelinePrimaryTopicReference(node, opts) {
  assert$1("PipelinePrimaryTopicReference", node, opts);
}

function assertTSParameterProperty(node, opts) {
  assert$1("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts) {
  assert$1("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts) {
  assert$1("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts) {
  assert$1("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts) {
  assert$1("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts) {
  assert$1("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts) {
  assert$1("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts) {
  assert$1("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts) {
  assert$1("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts) {
  assert$1("TSAnyKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts) {
  assert$1("TSBooleanKeyword", node, opts);
}

function assertTSBigIntKeyword(node, opts) {
  assert$1("TSBigIntKeyword", node, opts);
}

function assertTSIntrinsicKeyword(node, opts) {
  assert$1("TSIntrinsicKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts) {
  assert$1("TSNeverKeyword", node, opts);
}

function assertTSNullKeyword(node, opts) {
  assert$1("TSNullKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts) {
  assert$1("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts) {
  assert$1("TSObjectKeyword", node, opts);
}

function assertTSStringKeyword(node, opts) {
  assert$1("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts) {
  assert$1("TSSymbolKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts) {
  assert$1("TSUndefinedKeyword", node, opts);
}

function assertTSUnknownKeyword(node, opts) {
  assert$1("TSUnknownKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts) {
  assert$1("TSVoidKeyword", node, opts);
}

function assertTSThisType(node, opts) {
  assert$1("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts) {
  assert$1("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts) {
  assert$1("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts) {
  assert$1("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts) {
  assert$1("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts) {
  assert$1("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts) {
  assert$1("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts) {
  assert$1("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts) {
  assert$1("TSTupleType", node, opts);
}

function assertTSOptionalType(node, opts) {
  assert$1("TSOptionalType", node, opts);
}

function assertTSRestType(node, opts) {
  assert$1("TSRestType", node, opts);
}

function assertTSNamedTupleMember(node, opts) {
  assert$1("TSNamedTupleMember", node, opts);
}

function assertTSUnionType(node, opts) {
  assert$1("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts) {
  assert$1("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts) {
  assert$1("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts) {
  assert$1("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts) {
  assert$1("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts) {
  assert$1("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts) {
  assert$1("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts) {
  assert$1("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts) {
  assert$1("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts) {
  assert$1("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts) {
  assert$1("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts) {
  assert$1("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts) {
  assert$1("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts) {
  assert$1("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts) {
  assert$1("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts) {
  assert$1("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts) {
  assert$1("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts) {
  assert$1("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts) {
  assert$1("TSModuleBlock", node, opts);
}

function assertTSImportType(node, opts) {
  assert$1("TSImportType", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts) {
  assert$1("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts) {
  assert$1("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts) {
  assert$1("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts) {
  assert$1("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts) {
  assert$1("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts) {
  assert$1("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts) {
  assert$1("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts) {
  assert$1("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts) {
  assert$1("TSTypeParameter", node, opts);
}

function assertStandardized(node, opts) {
  assert$1("Standardized", node, opts);
}

function assertExpression(node, opts) {
  assert$1("Expression", node, opts);
}

function assertBinary(node, opts) {
  assert$1("Binary", node, opts);
}

function assertScopable(node, opts) {
  assert$1("Scopable", node, opts);
}

function assertBlockParent(node, opts) {
  assert$1("BlockParent", node, opts);
}

function assertBlock(node, opts) {
  assert$1("Block", node, opts);
}

function assertStatement(node, opts) {
  assert$1("Statement", node, opts);
}

function assertTerminatorless(node, opts) {
  assert$1("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts) {
  assert$1("CompletionStatement", node, opts);
}

function assertConditional(node, opts) {
  assert$1("Conditional", node, opts);
}

function assertLoop(node, opts) {
  assert$1("Loop", node, opts);
}

function assertWhile(node, opts) {
  assert$1("While", node, opts);
}

function assertExpressionWrapper(node, opts) {
  assert$1("ExpressionWrapper", node, opts);
}

function assertFor(node, opts) {
  assert$1("For", node, opts);
}

function assertForXStatement(node, opts) {
  assert$1("ForXStatement", node, opts);
}

function assertFunction(node, opts) {
  assert$1("Function", node, opts);
}

function assertFunctionParent(node, opts) {
  assert$1("FunctionParent", node, opts);
}

function assertPureish(node, opts) {
  assert$1("Pureish", node, opts);
}

function assertDeclaration(node, opts) {
  assert$1("Declaration", node, opts);
}

function assertPatternLike(node, opts) {
  assert$1("PatternLike", node, opts);
}

function assertLVal(node, opts) {
  assert$1("LVal", node, opts);
}

function assertTSEntityName(node, opts) {
  assert$1("TSEntityName", node, opts);
}

function assertLiteral(node, opts) {
  assert$1("Literal", node, opts);
}

function assertImmutable(node, opts) {
  assert$1("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts) {
  assert$1("UserWhitespacable", node, opts);
}

function assertMethod(node, opts) {
  assert$1("Method", node, opts);
}

function assertObjectMember(node, opts) {
  assert$1("ObjectMember", node, opts);
}

function assertProperty(node, opts) {
  assert$1("Property", node, opts);
}

function assertUnaryLike(node, opts) {
  assert$1("UnaryLike", node, opts);
}

function assertPattern(node, opts) {
  assert$1("Pattern", node, opts);
}

function assertClass(node, opts) {
  assert$1("Class", node, opts);
}

function assertModuleDeclaration(node, opts) {
  assert$1("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts) {
  assert$1("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts) {
  assert$1("ModuleSpecifier", node, opts);
}

function assertAccessor(node, opts) {
  assert$1("Accessor", node, opts);
}

function assertPrivate(node, opts) {
  assert$1("Private", node, opts);
}

function assertFlow(node, opts) {
  assert$1("Flow", node, opts);
}

function assertFlowType(node, opts) {
  assert$1("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts) {
  assert$1("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts) {
  assert$1("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts) {
  assert$1("FlowPredicate", node, opts);
}

function assertEnumBody(node, opts) {
  assert$1("EnumBody", node, opts);
}

function assertEnumMember(node, opts) {
  assert$1("EnumMember", node, opts);
}

function assertJSX(node, opts) {
  assert$1("JSX", node, opts);
}

function assertMiscellaneous(node, opts) {
  assert$1("Miscellaneous", node, opts);
}

function assertTypeScript(node, opts) {
  assert$1("TypeScript", node, opts);
}

function assertTSTypeElement(node, opts) {
  assert$1("TSTypeElement", node, opts);
}

function assertTSType(node, opts) {
  assert$1("TSType", node, opts);
}

function assertTSBaseType(node, opts) {
  assert$1("TSBaseType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert$1("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert$1("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert$1("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert$1("SpreadProperty", node, opts);
}

var createTypeAnnotationBasedOnTypeof$1 = {};

Object.defineProperty(createTypeAnnotationBasedOnTypeof$1, "__esModule", {
  value: true
});
createTypeAnnotationBasedOnTypeof$1.default = void 0;

var _generated$l = generated$3;

var _default$5 = createTypeAnnotationBasedOnTypeof;
createTypeAnnotationBasedOnTypeof$1.default = _default$5;

function createTypeAnnotationBasedOnTypeof(type) {
  switch (type) {
    case "string":
      return (0, _generated$l.stringTypeAnnotation)();

    case "number":
      return (0, _generated$l.numberTypeAnnotation)();

    case "undefined":
      return (0, _generated$l.voidTypeAnnotation)();

    case "boolean":
      return (0, _generated$l.booleanTypeAnnotation)();

    case "function":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Function"));

    case "object":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Object"));

    case "symbol":
      return (0, _generated$l.genericTypeAnnotation)((0, _generated$l.identifier)("Symbol"));

    case "bigint":
      return (0, _generated$l.anyTypeAnnotation)();
  }

  throw new Error("Invalid typeof value: " + type);
}

var createFlowUnionType$1 = {};

var removeTypeDuplicates$3 = {};

Object.defineProperty(removeTypeDuplicates$3, "__esModule", {
  value: true
});
removeTypeDuplicates$3.default = removeTypeDuplicates$2;

var _generated$k = generated$4;

function getQualifiedName(node) {
  return (0, _generated$k.isIdentifier)(node) ? node.name : `${node.id.name}.${getQualifiedName(node.qualification)}`;
}

function removeTypeDuplicates$2(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = new Set();
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, _generated$k.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, _generated$k.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, _generated$k.isUnionTypeAnnotation)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes = nodes.concat(node.types);
        typeGroups.add(node.types);
      }

      continue;
    }

    if ((0, _generated$k.isGenericTypeAnnotation)(node)) {
      const name = getQualifiedName(node.id);

      if (generics[name]) {
        let existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates$2(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}

Object.defineProperty(createFlowUnionType$1, "__esModule", {
  value: true
});
createFlowUnionType$1.default = createFlowUnionType;

var _generated$j = generated$3;

var _removeTypeDuplicates$1 = removeTypeDuplicates$3;

function createFlowUnionType(types) {
  const flattened = (0, _removeTypeDuplicates$1.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated$j.unionTypeAnnotation)(flattened);
  }
}

var createTSUnionType$1 = {};

var removeTypeDuplicates$1 = {};

Object.defineProperty(removeTypeDuplicates$1, "__esModule", {
  value: true
});
removeTypeDuplicates$1.default = removeTypeDuplicates;

var _generated$i = generated$4;

function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = new Set();
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, _generated$i.isTSAnyKeyword)(node)) {
      return [node];
    }

    if ((0, _generated$i.isTSBaseType)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, _generated$i.isTSUnionType)(node)) {
      if (!typeGroups.has(node.types)) {
        nodes.push(...node.types);
        typeGroups.add(node.types);
      }

      continue;
    }

    types.push(node);
  }

  for (const type of Object.keys(bases)) {
    types.push(bases[type]);
  }

  for (const name of Object.keys(generics)) {
    types.push(generics[name]);
  }

  return types;
}

Object.defineProperty(createTSUnionType$1, "__esModule", {
  value: true
});
createTSUnionType$1.default = createTSUnionType;

var _generated$h = generated$3;

var _removeTypeDuplicates = removeTypeDuplicates$1;

function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => type.typeAnnotation);
  const flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated$h.tsUnionType)(flattened);
  }
}

var uppercase = {};

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AnyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.anyTypeAnnotation;
  }
});
Object.defineProperty(exports, "ArgumentPlaceholder", {
  enumerable: true,
  get: function () {
    return _index.argumentPlaceholder;
  }
});
Object.defineProperty(exports, "ArrayExpression", {
  enumerable: true,
  get: function () {
    return _index.arrayExpression;
  }
});
Object.defineProperty(exports, "ArrayPattern", {
  enumerable: true,
  get: function () {
    return _index.arrayPattern;
  }
});
Object.defineProperty(exports, "ArrayTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.arrayTypeAnnotation;
  }
});
Object.defineProperty(exports, "ArrowFunctionExpression", {
  enumerable: true,
  get: function () {
    return _index.arrowFunctionExpression;
  }
});
Object.defineProperty(exports, "AssignmentExpression", {
  enumerable: true,
  get: function () {
    return _index.assignmentExpression;
  }
});
Object.defineProperty(exports, "AssignmentPattern", {
  enumerable: true,
  get: function () {
    return _index.assignmentPattern;
  }
});
Object.defineProperty(exports, "AwaitExpression", {
  enumerable: true,
  get: function () {
    return _index.awaitExpression;
  }
});
Object.defineProperty(exports, "BigIntLiteral", {
  enumerable: true,
  get: function () {
    return _index.bigIntLiteral;
  }
});
Object.defineProperty(exports, "BinaryExpression", {
  enumerable: true,
  get: function () {
    return _index.binaryExpression;
  }
});
Object.defineProperty(exports, "BindExpression", {
  enumerable: true,
  get: function () {
    return _index.bindExpression;
  }
});
Object.defineProperty(exports, "BlockStatement", {
  enumerable: true,
  get: function () {
    return _index.blockStatement;
  }
});
Object.defineProperty(exports, "BooleanLiteral", {
  enumerable: true,
  get: function () {
    return _index.booleanLiteral;
  }
});
Object.defineProperty(exports, "BooleanLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.booleanLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "BooleanTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.booleanTypeAnnotation;
  }
});
Object.defineProperty(exports, "BreakStatement", {
  enumerable: true,
  get: function () {
    return _index.breakStatement;
  }
});
Object.defineProperty(exports, "CallExpression", {
  enumerable: true,
  get: function () {
    return _index.callExpression;
  }
});
Object.defineProperty(exports, "CatchClause", {
  enumerable: true,
  get: function () {
    return _index.catchClause;
  }
});
Object.defineProperty(exports, "ClassAccessorProperty", {
  enumerable: true,
  get: function () {
    return _index.classAccessorProperty;
  }
});
Object.defineProperty(exports, "ClassBody", {
  enumerable: true,
  get: function () {
    return _index.classBody;
  }
});
Object.defineProperty(exports, "ClassDeclaration", {
  enumerable: true,
  get: function () {
    return _index.classDeclaration;
  }
});
Object.defineProperty(exports, "ClassExpression", {
  enumerable: true,
  get: function () {
    return _index.classExpression;
  }
});
Object.defineProperty(exports, "ClassImplements", {
  enumerable: true,
  get: function () {
    return _index.classImplements;
  }
});
Object.defineProperty(exports, "ClassMethod", {
  enumerable: true,
  get: function () {
    return _index.classMethod;
  }
});
Object.defineProperty(exports, "ClassPrivateMethod", {
  enumerable: true,
  get: function () {
    return _index.classPrivateMethod;
  }
});
Object.defineProperty(exports, "ClassPrivateProperty", {
  enumerable: true,
  get: function () {
    return _index.classPrivateProperty;
  }
});
Object.defineProperty(exports, "ClassProperty", {
  enumerable: true,
  get: function () {
    return _index.classProperty;
  }
});
Object.defineProperty(exports, "ConditionalExpression", {
  enumerable: true,
  get: function () {
    return _index.conditionalExpression;
  }
});
Object.defineProperty(exports, "ContinueStatement", {
  enumerable: true,
  get: function () {
    return _index.continueStatement;
  }
});
Object.defineProperty(exports, "DebuggerStatement", {
  enumerable: true,
  get: function () {
    return _index.debuggerStatement;
  }
});
Object.defineProperty(exports, "DecimalLiteral", {
  enumerable: true,
  get: function () {
    return _index.decimalLiteral;
  }
});
Object.defineProperty(exports, "DeclareClass", {
  enumerable: true,
  get: function () {
    return _index.declareClass;
  }
});
Object.defineProperty(exports, "DeclareExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return _index.declareExportAllDeclaration;
  }
});
Object.defineProperty(exports, "DeclareExportDeclaration", {
  enumerable: true,
  get: function () {
    return _index.declareExportDeclaration;
  }
});
Object.defineProperty(exports, "DeclareFunction", {
  enumerable: true,
  get: function () {
    return _index.declareFunction;
  }
});
Object.defineProperty(exports, "DeclareInterface", {
  enumerable: true,
  get: function () {
    return _index.declareInterface;
  }
});
Object.defineProperty(exports, "DeclareModule", {
  enumerable: true,
  get: function () {
    return _index.declareModule;
  }
});
Object.defineProperty(exports, "DeclareModuleExports", {
  enumerable: true,
  get: function () {
    return _index.declareModuleExports;
  }
});
Object.defineProperty(exports, "DeclareOpaqueType", {
  enumerable: true,
  get: function () {
    return _index.declareOpaqueType;
  }
});
Object.defineProperty(exports, "DeclareTypeAlias", {
  enumerable: true,
  get: function () {
    return _index.declareTypeAlias;
  }
});
Object.defineProperty(exports, "DeclareVariable", {
  enumerable: true,
  get: function () {
    return _index.declareVariable;
  }
});
Object.defineProperty(exports, "DeclaredPredicate", {
  enumerable: true,
  get: function () {
    return _index.declaredPredicate;
  }
});
Object.defineProperty(exports, "Decorator", {
  enumerable: true,
  get: function () {
    return _index.decorator;
  }
});
Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function () {
    return _index.directive;
  }
});
Object.defineProperty(exports, "DirectiveLiteral", {
  enumerable: true,
  get: function () {
    return _index.directiveLiteral;
  }
});
Object.defineProperty(exports, "DoExpression", {
  enumerable: true,
  get: function () {
    return _index.doExpression;
  }
});
Object.defineProperty(exports, "DoWhileStatement", {
  enumerable: true,
  get: function () {
    return _index.doWhileStatement;
  }
});
Object.defineProperty(exports, "EmptyStatement", {
  enumerable: true,
  get: function () {
    return _index.emptyStatement;
  }
});
Object.defineProperty(exports, "EmptyTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.emptyTypeAnnotation;
  }
});
Object.defineProperty(exports, "EnumBooleanBody", {
  enumerable: true,
  get: function () {
    return _index.enumBooleanBody;
  }
});
Object.defineProperty(exports, "EnumBooleanMember", {
  enumerable: true,
  get: function () {
    return _index.enumBooleanMember;
  }
});
Object.defineProperty(exports, "EnumDeclaration", {
  enumerable: true,
  get: function () {
    return _index.enumDeclaration;
  }
});
Object.defineProperty(exports, "EnumDefaultedMember", {
  enumerable: true,
  get: function () {
    return _index.enumDefaultedMember;
  }
});
Object.defineProperty(exports, "EnumNumberBody", {
  enumerable: true,
  get: function () {
    return _index.enumNumberBody;
  }
});
Object.defineProperty(exports, "EnumNumberMember", {
  enumerable: true,
  get: function () {
    return _index.enumNumberMember;
  }
});
Object.defineProperty(exports, "EnumStringBody", {
  enumerable: true,
  get: function () {
    return _index.enumStringBody;
  }
});
Object.defineProperty(exports, "EnumStringMember", {
  enumerable: true,
  get: function () {
    return _index.enumStringMember;
  }
});
Object.defineProperty(exports, "EnumSymbolBody", {
  enumerable: true,
  get: function () {
    return _index.enumSymbolBody;
  }
});
Object.defineProperty(exports, "ExistsTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.existsTypeAnnotation;
  }
});
Object.defineProperty(exports, "ExportAllDeclaration", {
  enumerable: true,
  get: function () {
    return _index.exportAllDeclaration;
  }
});
Object.defineProperty(exports, "ExportDefaultDeclaration", {
  enumerable: true,
  get: function () {
    return _index.exportDefaultDeclaration;
  }
});
Object.defineProperty(exports, "ExportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return _index.exportDefaultSpecifier;
  }
});
Object.defineProperty(exports, "ExportNamedDeclaration", {
  enumerable: true,
  get: function () {
    return _index.exportNamedDeclaration;
  }
});
Object.defineProperty(exports, "ExportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return _index.exportNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "ExportSpecifier", {
  enumerable: true,
  get: function () {
    return _index.exportSpecifier;
  }
});
Object.defineProperty(exports, "ExpressionStatement", {
  enumerable: true,
  get: function () {
    return _index.expressionStatement;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function () {
    return _index.file;
  }
});
Object.defineProperty(exports, "ForInStatement", {
  enumerable: true,
  get: function () {
    return _index.forInStatement;
  }
});
Object.defineProperty(exports, "ForOfStatement", {
  enumerable: true,
  get: function () {
    return _index.forOfStatement;
  }
});
Object.defineProperty(exports, "ForStatement", {
  enumerable: true,
  get: function () {
    return _index.forStatement;
  }
});
Object.defineProperty(exports, "FunctionDeclaration", {
  enumerable: true,
  get: function () {
    return _index.functionDeclaration;
  }
});
Object.defineProperty(exports, "FunctionExpression", {
  enumerable: true,
  get: function () {
    return _index.functionExpression;
  }
});
Object.defineProperty(exports, "FunctionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.functionTypeAnnotation;
  }
});
Object.defineProperty(exports, "FunctionTypeParam", {
  enumerable: true,
  get: function () {
    return _index.functionTypeParam;
  }
});
Object.defineProperty(exports, "GenericTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.genericTypeAnnotation;
  }
});
Object.defineProperty(exports, "Identifier", {
  enumerable: true,
  get: function () {
    return _index.identifier;
  }
});
Object.defineProperty(exports, "IfStatement", {
  enumerable: true,
  get: function () {
    return _index.ifStatement;
  }
});
Object.defineProperty(exports, "Import", {
  enumerable: true,
  get: function () {
    return _index.import;
  }
});
Object.defineProperty(exports, "ImportAttribute", {
  enumerable: true,
  get: function () {
    return _index.importAttribute;
  }
});
Object.defineProperty(exports, "ImportDeclaration", {
  enumerable: true,
  get: function () {
    return _index.importDeclaration;
  }
});
Object.defineProperty(exports, "ImportDefaultSpecifier", {
  enumerable: true,
  get: function () {
    return _index.importDefaultSpecifier;
  }
});
Object.defineProperty(exports, "ImportNamespaceSpecifier", {
  enumerable: true,
  get: function () {
    return _index.importNamespaceSpecifier;
  }
});
Object.defineProperty(exports, "ImportSpecifier", {
  enumerable: true,
  get: function () {
    return _index.importSpecifier;
  }
});
Object.defineProperty(exports, "IndexedAccessType", {
  enumerable: true,
  get: function () {
    return _index.indexedAccessType;
  }
});
Object.defineProperty(exports, "InferredPredicate", {
  enumerable: true,
  get: function () {
    return _index.inferredPredicate;
  }
});
Object.defineProperty(exports, "InterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return _index.interfaceDeclaration;
  }
});
Object.defineProperty(exports, "InterfaceExtends", {
  enumerable: true,
  get: function () {
    return _index.interfaceExtends;
  }
});
Object.defineProperty(exports, "InterfaceTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.interfaceTypeAnnotation;
  }
});
Object.defineProperty(exports, "InterpreterDirective", {
  enumerable: true,
  get: function () {
    return _index.interpreterDirective;
  }
});
Object.defineProperty(exports, "IntersectionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.intersectionTypeAnnotation;
  }
});
Object.defineProperty(exports, "JSXAttribute", {
  enumerable: true,
  get: function () {
    return _index.jsxAttribute;
  }
});
Object.defineProperty(exports, "JSXClosingElement", {
  enumerable: true,
  get: function () {
    return _index.jsxClosingElement;
  }
});
Object.defineProperty(exports, "JSXClosingFragment", {
  enumerable: true,
  get: function () {
    return _index.jsxClosingFragment;
  }
});
Object.defineProperty(exports, "JSXElement", {
  enumerable: true,
  get: function () {
    return _index.jsxElement;
  }
});
Object.defineProperty(exports, "JSXEmptyExpression", {
  enumerable: true,
  get: function () {
    return _index.jsxEmptyExpression;
  }
});
Object.defineProperty(exports, "JSXExpressionContainer", {
  enumerable: true,
  get: function () {
    return _index.jsxExpressionContainer;
  }
});
Object.defineProperty(exports, "JSXFragment", {
  enumerable: true,
  get: function () {
    return _index.jsxFragment;
  }
});
Object.defineProperty(exports, "JSXIdentifier", {
  enumerable: true,
  get: function () {
    return _index.jsxIdentifier;
  }
});
Object.defineProperty(exports, "JSXMemberExpression", {
  enumerable: true,
  get: function () {
    return _index.jsxMemberExpression;
  }
});
Object.defineProperty(exports, "JSXNamespacedName", {
  enumerable: true,
  get: function () {
    return _index.jsxNamespacedName;
  }
});
Object.defineProperty(exports, "JSXOpeningElement", {
  enumerable: true,
  get: function () {
    return _index.jsxOpeningElement;
  }
});
Object.defineProperty(exports, "JSXOpeningFragment", {
  enumerable: true,
  get: function () {
    return _index.jsxOpeningFragment;
  }
});
Object.defineProperty(exports, "JSXSpreadAttribute", {
  enumerable: true,
  get: function () {
    return _index.jsxSpreadAttribute;
  }
});
Object.defineProperty(exports, "JSXSpreadChild", {
  enumerable: true,
  get: function () {
    return _index.jsxSpreadChild;
  }
});
Object.defineProperty(exports, "JSXText", {
  enumerable: true,
  get: function () {
    return _index.jsxText;
  }
});
Object.defineProperty(exports, "LabeledStatement", {
  enumerable: true,
  get: function () {
    return _index.labeledStatement;
  }
});
Object.defineProperty(exports, "LogicalExpression", {
  enumerable: true,
  get: function () {
    return _index.logicalExpression;
  }
});
Object.defineProperty(exports, "MemberExpression", {
  enumerable: true,
  get: function () {
    return _index.memberExpression;
  }
});
Object.defineProperty(exports, "MetaProperty", {
  enumerable: true,
  get: function () {
    return _index.metaProperty;
  }
});
Object.defineProperty(exports, "MixedTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.mixedTypeAnnotation;
  }
});
Object.defineProperty(exports, "ModuleExpression", {
  enumerable: true,
  get: function () {
    return _index.moduleExpression;
  }
});
Object.defineProperty(exports, "NewExpression", {
  enumerable: true,
  get: function () {
    return _index.newExpression;
  }
});
Object.defineProperty(exports, "Noop", {
  enumerable: true,
  get: function () {
    return _index.noop;
  }
});
Object.defineProperty(exports, "NullLiteral", {
  enumerable: true,
  get: function () {
    return _index.nullLiteral;
  }
});
Object.defineProperty(exports, "NullLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.nullLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NullableTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.nullableTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberLiteral", {
  enumerable: true,
  get: function () {
    return _index.numberLiteral;
  }
});
Object.defineProperty(exports, "NumberLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.numberLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumberTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.numberTypeAnnotation;
  }
});
Object.defineProperty(exports, "NumericLiteral", {
  enumerable: true,
  get: function () {
    return _index.numericLiteral;
  }
});
Object.defineProperty(exports, "ObjectExpression", {
  enumerable: true,
  get: function () {
    return _index.objectExpression;
  }
});
Object.defineProperty(exports, "ObjectMethod", {
  enumerable: true,
  get: function () {
    return _index.objectMethod;
  }
});
Object.defineProperty(exports, "ObjectPattern", {
  enumerable: true,
  get: function () {
    return _index.objectPattern;
  }
});
Object.defineProperty(exports, "ObjectProperty", {
  enumerable: true,
  get: function () {
    return _index.objectProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.objectTypeAnnotation;
  }
});
Object.defineProperty(exports, "ObjectTypeCallProperty", {
  enumerable: true,
  get: function () {
    return _index.objectTypeCallProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeIndexer", {
  enumerable: true,
  get: function () {
    return _index.objectTypeIndexer;
  }
});
Object.defineProperty(exports, "ObjectTypeInternalSlot", {
  enumerable: true,
  get: function () {
    return _index.objectTypeInternalSlot;
  }
});
Object.defineProperty(exports, "ObjectTypeProperty", {
  enumerable: true,
  get: function () {
    return _index.objectTypeProperty;
  }
});
Object.defineProperty(exports, "ObjectTypeSpreadProperty", {
  enumerable: true,
  get: function () {
    return _index.objectTypeSpreadProperty;
  }
});
Object.defineProperty(exports, "OpaqueType", {
  enumerable: true,
  get: function () {
    return _index.opaqueType;
  }
});
Object.defineProperty(exports, "OptionalCallExpression", {
  enumerable: true,
  get: function () {
    return _index.optionalCallExpression;
  }
});
Object.defineProperty(exports, "OptionalIndexedAccessType", {
  enumerable: true,
  get: function () {
    return _index.optionalIndexedAccessType;
  }
});
Object.defineProperty(exports, "OptionalMemberExpression", {
  enumerable: true,
  get: function () {
    return _index.optionalMemberExpression;
  }
});
Object.defineProperty(exports, "ParenthesizedExpression", {
  enumerable: true,
  get: function () {
    return _index.parenthesizedExpression;
  }
});
Object.defineProperty(exports, "PipelineBareFunction", {
  enumerable: true,
  get: function () {
    return _index.pipelineBareFunction;
  }
});
Object.defineProperty(exports, "PipelinePrimaryTopicReference", {
  enumerable: true,
  get: function () {
    return _index.pipelinePrimaryTopicReference;
  }
});
Object.defineProperty(exports, "PipelineTopicExpression", {
  enumerable: true,
  get: function () {
    return _index.pipelineTopicExpression;
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function () {
    return _index.placeholder;
  }
});
Object.defineProperty(exports, "PrivateName", {
  enumerable: true,
  get: function () {
    return _index.privateName;
  }
});
Object.defineProperty(exports, "Program", {
  enumerable: true,
  get: function () {
    return _index.program;
  }
});
Object.defineProperty(exports, "QualifiedTypeIdentifier", {
  enumerable: true,
  get: function () {
    return _index.qualifiedTypeIdentifier;
  }
});
Object.defineProperty(exports, "RecordExpression", {
  enumerable: true,
  get: function () {
    return _index.recordExpression;
  }
});
Object.defineProperty(exports, "RegExpLiteral", {
  enumerable: true,
  get: function () {
    return _index.regExpLiteral;
  }
});
Object.defineProperty(exports, "RegexLiteral", {
  enumerable: true,
  get: function () {
    return _index.regexLiteral;
  }
});
Object.defineProperty(exports, "RestElement", {
  enumerable: true,
  get: function () {
    return _index.restElement;
  }
});
Object.defineProperty(exports, "RestProperty", {
  enumerable: true,
  get: function () {
    return _index.restProperty;
  }
});
Object.defineProperty(exports, "ReturnStatement", {
  enumerable: true,
  get: function () {
    return _index.returnStatement;
  }
});
Object.defineProperty(exports, "SequenceExpression", {
  enumerable: true,
  get: function () {
    return _index.sequenceExpression;
  }
});
Object.defineProperty(exports, "SpreadElement", {
  enumerable: true,
  get: function () {
    return _index.spreadElement;
  }
});
Object.defineProperty(exports, "SpreadProperty", {
  enumerable: true,
  get: function () {
    return _index.spreadProperty;
  }
});
Object.defineProperty(exports, "StaticBlock", {
  enumerable: true,
  get: function () {
    return _index.staticBlock;
  }
});
Object.defineProperty(exports, "StringLiteral", {
  enumerable: true,
  get: function () {
    return _index.stringLiteral;
  }
});
Object.defineProperty(exports, "StringLiteralTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.stringLiteralTypeAnnotation;
  }
});
Object.defineProperty(exports, "StringTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.stringTypeAnnotation;
  }
});
Object.defineProperty(exports, "Super", {
  enumerable: true,
  get: function () {
    return _index.super;
  }
});
Object.defineProperty(exports, "SwitchCase", {
  enumerable: true,
  get: function () {
    return _index.switchCase;
  }
});
Object.defineProperty(exports, "SwitchStatement", {
  enumerable: true,
  get: function () {
    return _index.switchStatement;
  }
});
Object.defineProperty(exports, "SymbolTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.symbolTypeAnnotation;
  }
});
Object.defineProperty(exports, "TSAnyKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsAnyKeyword;
  }
});
Object.defineProperty(exports, "TSArrayType", {
  enumerable: true,
  get: function () {
    return _index.tsArrayType;
  }
});
Object.defineProperty(exports, "TSAsExpression", {
  enumerable: true,
  get: function () {
    return _index.tsAsExpression;
  }
});
Object.defineProperty(exports, "TSBigIntKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsBigIntKeyword;
  }
});
Object.defineProperty(exports, "TSBooleanKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsBooleanKeyword;
  }
});
Object.defineProperty(exports, "TSCallSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsCallSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSConditionalType", {
  enumerable: true,
  get: function () {
    return _index.tsConditionalType;
  }
});
Object.defineProperty(exports, "TSConstructSignatureDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsConstructSignatureDeclaration;
  }
});
Object.defineProperty(exports, "TSConstructorType", {
  enumerable: true,
  get: function () {
    return _index.tsConstructorType;
  }
});
Object.defineProperty(exports, "TSDeclareFunction", {
  enumerable: true,
  get: function () {
    return _index.tsDeclareFunction;
  }
});
Object.defineProperty(exports, "TSDeclareMethod", {
  enumerable: true,
  get: function () {
    return _index.tsDeclareMethod;
  }
});
Object.defineProperty(exports, "TSEnumDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsEnumDeclaration;
  }
});
Object.defineProperty(exports, "TSEnumMember", {
  enumerable: true,
  get: function () {
    return _index.tsEnumMember;
  }
});
Object.defineProperty(exports, "TSExportAssignment", {
  enumerable: true,
  get: function () {
    return _index.tsExportAssignment;
  }
});
Object.defineProperty(exports, "TSExpressionWithTypeArguments", {
  enumerable: true,
  get: function () {
    return _index.tsExpressionWithTypeArguments;
  }
});
Object.defineProperty(exports, "TSExternalModuleReference", {
  enumerable: true,
  get: function () {
    return _index.tsExternalModuleReference;
  }
});
Object.defineProperty(exports, "TSFunctionType", {
  enumerable: true,
  get: function () {
    return _index.tsFunctionType;
  }
});
Object.defineProperty(exports, "TSImportEqualsDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsImportEqualsDeclaration;
  }
});
Object.defineProperty(exports, "TSImportType", {
  enumerable: true,
  get: function () {
    return _index.tsImportType;
  }
});
Object.defineProperty(exports, "TSIndexSignature", {
  enumerable: true,
  get: function () {
    return _index.tsIndexSignature;
  }
});
Object.defineProperty(exports, "TSIndexedAccessType", {
  enumerable: true,
  get: function () {
    return _index.tsIndexedAccessType;
  }
});
Object.defineProperty(exports, "TSInferType", {
  enumerable: true,
  get: function () {
    return _index.tsInferType;
  }
});
Object.defineProperty(exports, "TSInterfaceBody", {
  enumerable: true,
  get: function () {
    return _index.tsInterfaceBody;
  }
});
Object.defineProperty(exports, "TSInterfaceDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsInterfaceDeclaration;
  }
});
Object.defineProperty(exports, "TSIntersectionType", {
  enumerable: true,
  get: function () {
    return _index.tsIntersectionType;
  }
});
Object.defineProperty(exports, "TSIntrinsicKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsIntrinsicKeyword;
  }
});
Object.defineProperty(exports, "TSLiteralType", {
  enumerable: true,
  get: function () {
    return _index.tsLiteralType;
  }
});
Object.defineProperty(exports, "TSMappedType", {
  enumerable: true,
  get: function () {
    return _index.tsMappedType;
  }
});
Object.defineProperty(exports, "TSMethodSignature", {
  enumerable: true,
  get: function () {
    return _index.tsMethodSignature;
  }
});
Object.defineProperty(exports, "TSModuleBlock", {
  enumerable: true,
  get: function () {
    return _index.tsModuleBlock;
  }
});
Object.defineProperty(exports, "TSModuleDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsModuleDeclaration;
  }
});
Object.defineProperty(exports, "TSNamedTupleMember", {
  enumerable: true,
  get: function () {
    return _index.tsNamedTupleMember;
  }
});
Object.defineProperty(exports, "TSNamespaceExportDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsNamespaceExportDeclaration;
  }
});
Object.defineProperty(exports, "TSNeverKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsNeverKeyword;
  }
});
Object.defineProperty(exports, "TSNonNullExpression", {
  enumerable: true,
  get: function () {
    return _index.tsNonNullExpression;
  }
});
Object.defineProperty(exports, "TSNullKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsNullKeyword;
  }
});
Object.defineProperty(exports, "TSNumberKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsNumberKeyword;
  }
});
Object.defineProperty(exports, "TSObjectKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsObjectKeyword;
  }
});
Object.defineProperty(exports, "TSOptionalType", {
  enumerable: true,
  get: function () {
    return _index.tsOptionalType;
  }
});
Object.defineProperty(exports, "TSParameterProperty", {
  enumerable: true,
  get: function () {
    return _index.tsParameterProperty;
  }
});
Object.defineProperty(exports, "TSParenthesizedType", {
  enumerable: true,
  get: function () {
    return _index.tsParenthesizedType;
  }
});
Object.defineProperty(exports, "TSPropertySignature", {
  enumerable: true,
  get: function () {
    return _index.tsPropertySignature;
  }
});
Object.defineProperty(exports, "TSQualifiedName", {
  enumerable: true,
  get: function () {
    return _index.tsQualifiedName;
  }
});
Object.defineProperty(exports, "TSRestType", {
  enumerable: true,
  get: function () {
    return _index.tsRestType;
  }
});
Object.defineProperty(exports, "TSStringKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsStringKeyword;
  }
});
Object.defineProperty(exports, "TSSymbolKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsSymbolKeyword;
  }
});
Object.defineProperty(exports, "TSThisType", {
  enumerable: true,
  get: function () {
    return _index.tsThisType;
  }
});
Object.defineProperty(exports, "TSTupleType", {
  enumerable: true,
  get: function () {
    return _index.tsTupleType;
  }
});
Object.defineProperty(exports, "TSTypeAliasDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsTypeAliasDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.tsTypeAnnotation;
  }
});
Object.defineProperty(exports, "TSTypeAssertion", {
  enumerable: true,
  get: function () {
    return _index.tsTypeAssertion;
  }
});
Object.defineProperty(exports, "TSTypeLiteral", {
  enumerable: true,
  get: function () {
    return _index.tsTypeLiteral;
  }
});
Object.defineProperty(exports, "TSTypeOperator", {
  enumerable: true,
  get: function () {
    return _index.tsTypeOperator;
  }
});
Object.defineProperty(exports, "TSTypeParameter", {
  enumerable: true,
  get: function () {
    return _index.tsTypeParameter;
  }
});
Object.defineProperty(exports, "TSTypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return _index.tsTypeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TSTypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return _index.tsTypeParameterInstantiation;
  }
});
Object.defineProperty(exports, "TSTypePredicate", {
  enumerable: true,
  get: function () {
    return _index.tsTypePredicate;
  }
});
Object.defineProperty(exports, "TSTypeQuery", {
  enumerable: true,
  get: function () {
    return _index.tsTypeQuery;
  }
});
Object.defineProperty(exports, "TSTypeReference", {
  enumerable: true,
  get: function () {
    return _index.tsTypeReference;
  }
});
Object.defineProperty(exports, "TSUndefinedKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsUndefinedKeyword;
  }
});
Object.defineProperty(exports, "TSUnionType", {
  enumerable: true,
  get: function () {
    return _index.tsUnionType;
  }
});
Object.defineProperty(exports, "TSUnknownKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsUnknownKeyword;
  }
});
Object.defineProperty(exports, "TSVoidKeyword", {
  enumerable: true,
  get: function () {
    return _index.tsVoidKeyword;
  }
});
Object.defineProperty(exports, "TaggedTemplateExpression", {
  enumerable: true,
  get: function () {
    return _index.taggedTemplateExpression;
  }
});
Object.defineProperty(exports, "TemplateElement", {
  enumerable: true,
  get: function () {
    return _index.templateElement;
  }
});
Object.defineProperty(exports, "TemplateLiteral", {
  enumerable: true,
  get: function () {
    return _index.templateLiteral;
  }
});
Object.defineProperty(exports, "ThisExpression", {
  enumerable: true,
  get: function () {
    return _index.thisExpression;
  }
});
Object.defineProperty(exports, "ThisTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.thisTypeAnnotation;
  }
});
Object.defineProperty(exports, "ThrowStatement", {
  enumerable: true,
  get: function () {
    return _index.throwStatement;
  }
});
Object.defineProperty(exports, "TopicReference", {
  enumerable: true,
  get: function () {
    return _index.topicReference;
  }
});
Object.defineProperty(exports, "TryStatement", {
  enumerable: true,
  get: function () {
    return _index.tryStatement;
  }
});
Object.defineProperty(exports, "TupleExpression", {
  enumerable: true,
  get: function () {
    return _index.tupleExpression;
  }
});
Object.defineProperty(exports, "TupleTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.tupleTypeAnnotation;
  }
});
Object.defineProperty(exports, "TypeAlias", {
  enumerable: true,
  get: function () {
    return _index.typeAlias;
  }
});
Object.defineProperty(exports, "TypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.typeAnnotation;
  }
});
Object.defineProperty(exports, "TypeCastExpression", {
  enumerable: true,
  get: function () {
    return _index.typeCastExpression;
  }
});
Object.defineProperty(exports, "TypeParameter", {
  enumerable: true,
  get: function () {
    return _index.typeParameter;
  }
});
Object.defineProperty(exports, "TypeParameterDeclaration", {
  enumerable: true,
  get: function () {
    return _index.typeParameterDeclaration;
  }
});
Object.defineProperty(exports, "TypeParameterInstantiation", {
  enumerable: true,
  get: function () {
    return _index.typeParameterInstantiation;
  }
});
Object.defineProperty(exports, "TypeofTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.typeofTypeAnnotation;
  }
});
Object.defineProperty(exports, "UnaryExpression", {
  enumerable: true,
  get: function () {
    return _index.unaryExpression;
  }
});
Object.defineProperty(exports, "UnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.unionTypeAnnotation;
  }
});
Object.defineProperty(exports, "UpdateExpression", {
  enumerable: true,
  get: function () {
    return _index.updateExpression;
  }
});
Object.defineProperty(exports, "V8IntrinsicIdentifier", {
  enumerable: true,
  get: function () {
    return _index.v8IntrinsicIdentifier;
  }
});
Object.defineProperty(exports, "VariableDeclaration", {
  enumerable: true,
  get: function () {
    return _index.variableDeclaration;
  }
});
Object.defineProperty(exports, "VariableDeclarator", {
  enumerable: true,
  get: function () {
    return _index.variableDeclarator;
  }
});
Object.defineProperty(exports, "Variance", {
  enumerable: true,
  get: function () {
    return _index.variance;
  }
});
Object.defineProperty(exports, "VoidTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _index.voidTypeAnnotation;
  }
});
Object.defineProperty(exports, "WhileStatement", {
  enumerable: true,
  get: function () {
    return _index.whileStatement;
  }
});
Object.defineProperty(exports, "WithStatement", {
  enumerable: true,
  get: function () {
    return _index.withStatement;
  }
});
Object.defineProperty(exports, "YieldExpression", {
  enumerable: true,
  get: function () {
    return _index.yieldExpression;
  }
});

var _index = generated$3;
}(uppercase));

var cloneNode$2 = {};

Object.defineProperty(cloneNode$2, "__esModule", {
  value: true
});
cloneNode$2.default = cloneNode$1;

var _definitions$4 = definitions;

var _generated$g = generated$4;

const has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep, withoutLoc) {
  if (obj && typeof obj.type === "string") {
    return cloneNode$1(obj, deep, withoutLoc);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep, withoutLoc) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep, withoutLoc));
  }

  return cloneIfNode(obj, deep, withoutLoc);
}

function cloneNode$1(node, deep = true, withoutLoc = false) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type: node.type
  };

  if ((0, _generated$g.isIdentifier)(node)) {
    newNode.name = node.name;

    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }

    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true, withoutLoc) : node.typeAnnotation;
    }
  } else if (!has(_definitions$4.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_definitions$4.NODE_FIELDS[type])) {
      if (has(node, field)) {
        if (deep) {
          newNode[field] = (0, _generated$g.isFile)(node) && field === "comments" ? maybeCloneComments(node.comments, deep, withoutLoc) : cloneIfNodeOrArray(node[field], true, withoutLoc);
        } else {
          newNode[field] = node[field];
        }
      }
    }
  }

  if (has(node, "loc")) {
    if (withoutLoc) {
      newNode.loc = null;
    } else {
      newNode.loc = node.loc;
    }
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = maybeCloneComments(node.leadingComments, deep, withoutLoc);
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = maybeCloneComments(node.innerComments, deep, withoutLoc);
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = maybeCloneComments(node.trailingComments, deep, withoutLoc);
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}

function maybeCloneComments(comments, deep, withoutLoc) {
  if (!comments || !deep) {
    return comments;
  }

  return comments.map(({
    type,
    value,
    loc
  }) => {
    if (withoutLoc) {
      return {
        type,
        value,
        loc: null
      };
    }

    return {
      type,
      value,
      loc
    };
  });
}

var clone$1 = {};

Object.defineProperty(clone$1, "__esModule", {
  value: true
});
clone$1.default = clone;

var _cloneNode$5 = cloneNode$2;

function clone(node) {
  return (0, _cloneNode$5.default)(node, false);
}

var cloneDeep$1 = {};

Object.defineProperty(cloneDeep$1, "__esModule", {
  value: true
});
cloneDeep$1.default = cloneDeep;

var _cloneNode$4 = cloneNode$2;

function cloneDeep(node) {
  return (0, _cloneNode$4.default)(node);
}

var cloneDeepWithoutLoc$1 = {};

Object.defineProperty(cloneDeepWithoutLoc$1, "__esModule", {
  value: true
});
cloneDeepWithoutLoc$1.default = cloneDeepWithoutLoc;

var _cloneNode$3 = cloneNode$2;

function cloneDeepWithoutLoc(node) {
  return (0, _cloneNode$3.default)(node, true, true);
}

var cloneWithoutLoc$1 = {};

Object.defineProperty(cloneWithoutLoc$1, "__esModule", {
  value: true
});
cloneWithoutLoc$1.default = cloneWithoutLoc;

var _cloneNode$2 = cloneNode$2;

function cloneWithoutLoc(node) {
  return (0, _cloneNode$2.default)(node, false, true);
}

var addComment$1 = {};

var addComments$1 = {};

Object.defineProperty(addComments$1, "__esModule", {
  value: true
});
addComments$1.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key].push(...comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}

Object.defineProperty(addComment$1, "__esModule", {
  value: true
});
addComment$1.default = addComment;

var _addComments = addComments$1;

function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

var inheritInnerComments$1 = {};

var inherit$1 = {};

Object.defineProperty(inherit$1, "__esModule", {
  value: true
});
inherit$1.default = inherit;

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = Array.from(new Set([].concat(child[key], parent[key]).filter(Boolean)));
  }
}

Object.defineProperty(inheritInnerComments$1, "__esModule", {
  value: true
});
inheritInnerComments$1.default = inheritInnerComments;

var _inherit$2 = inherit$1;

function inheritInnerComments(child, parent) {
  (0, _inherit$2.default)("innerComments", child, parent);
}

var inheritLeadingComments$1 = {};

Object.defineProperty(inheritLeadingComments$1, "__esModule", {
  value: true
});
inheritLeadingComments$1.default = inheritLeadingComments;

var _inherit$1 = inherit$1;

function inheritLeadingComments(child, parent) {
  (0, _inherit$1.default)("leadingComments", child, parent);
}

var inheritsComments$1 = {};

var inheritTrailingComments$1 = {};

Object.defineProperty(inheritTrailingComments$1, "__esModule", {
  value: true
});
inheritTrailingComments$1.default = inheritTrailingComments;

var _inherit = inherit$1;

function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}

Object.defineProperty(inheritsComments$1, "__esModule", {
  value: true
});
inheritsComments$1.default = inheritsComments;

var _inheritTrailingComments = inheritTrailingComments$1;

var _inheritLeadingComments = inheritLeadingComments$1;

var _inheritInnerComments = inheritInnerComments$1;

function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}

var removeComments$1 = {};

Object.defineProperty(removeComments$1, "__esModule", {
  value: true
});
removeComments$1.default = removeComments;

var _constants$4 = constants;

function removeComments(node) {
  _constants$4.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}

var generated$1 = {};

Object.defineProperty(generated$1, "__esModule", {
  value: true
});
generated$1.WHILE_TYPES = generated$1.USERWHITESPACABLE_TYPES = generated$1.UNARYLIKE_TYPES = generated$1.TYPESCRIPT_TYPES = generated$1.TSTYPE_TYPES = generated$1.TSTYPEELEMENT_TYPES = generated$1.TSENTITYNAME_TYPES = generated$1.TSBASETYPE_TYPES = generated$1.TERMINATORLESS_TYPES = generated$1.STATEMENT_TYPES = generated$1.STANDARDIZED_TYPES = generated$1.SCOPABLE_TYPES = generated$1.PUREISH_TYPES = generated$1.PROPERTY_TYPES = generated$1.PRIVATE_TYPES = generated$1.PATTERN_TYPES = generated$1.PATTERNLIKE_TYPES = generated$1.OBJECTMEMBER_TYPES = generated$1.MODULESPECIFIER_TYPES = generated$1.MODULEDECLARATION_TYPES = generated$1.MISCELLANEOUS_TYPES = generated$1.METHOD_TYPES = generated$1.LVAL_TYPES = generated$1.LOOP_TYPES = generated$1.LITERAL_TYPES = generated$1.JSX_TYPES = generated$1.IMMUTABLE_TYPES = generated$1.FUNCTION_TYPES = generated$1.FUNCTIONPARENT_TYPES = generated$1.FOR_TYPES = generated$1.FORXSTATEMENT_TYPES = generated$1.FLOW_TYPES = generated$1.FLOWTYPE_TYPES = generated$1.FLOWPREDICATE_TYPES = generated$1.FLOWDECLARATION_TYPES = generated$1.FLOWBASEANNOTATION_TYPES = generated$1.EXPRESSION_TYPES = generated$1.EXPRESSIONWRAPPER_TYPES = generated$1.EXPORTDECLARATION_TYPES = generated$1.ENUMMEMBER_TYPES = generated$1.ENUMBODY_TYPES = generated$1.DECLARATION_TYPES = generated$1.CONDITIONAL_TYPES = generated$1.COMPLETIONSTATEMENT_TYPES = generated$1.CLASS_TYPES = generated$1.BLOCK_TYPES = generated$1.BLOCKPARENT_TYPES = generated$1.BINARY_TYPES = generated$1.ACCESSOR_TYPES = void 0;

var _definitions$3 = definitions;

const STANDARDIZED_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Standardized"];
generated$1.STANDARDIZED_TYPES = STANDARDIZED_TYPES;
const EXPRESSION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Expression"];
generated$1.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Binary"];
generated$1.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Scopable"];
generated$1.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["BlockParent"];
generated$1.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Block"];
generated$1.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Statement"];
generated$1.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Terminatorless"];
generated$1.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["CompletionStatement"];
generated$1.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Conditional"];
generated$1.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Loop"];
generated$1.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["While"];
generated$1.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
generated$1.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["For"];
generated$1.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ForXStatement"];
generated$1.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Function"];
generated$1.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FunctionParent"];
generated$1.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Pureish"];
generated$1.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Declaration"];
generated$1.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["PatternLike"];
generated$1.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["LVal"];
generated$1.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSEntityName"];
generated$1.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Literal"];
generated$1.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Immutable"];
generated$1.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
generated$1.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Method"];
generated$1.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ObjectMember"];
generated$1.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Property"];
generated$1.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["UnaryLike"];
generated$1.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Pattern"];
generated$1.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Class"];
generated$1.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
generated$1.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
generated$1.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
generated$1.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const ACCESSOR_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Accessor"];
generated$1.ACCESSOR_TYPES = ACCESSOR_TYPES;
const PRIVATE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Private"];
generated$1.PRIVATE_TYPES = PRIVATE_TYPES;
const FLOW_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Flow"];
generated$1.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowType"];
generated$1.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
generated$1.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
generated$1.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["FlowPredicate"];
generated$1.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const ENUMBODY_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["EnumBody"];
generated$1.ENUMBODY_TYPES = ENUMBODY_TYPES;
const ENUMMEMBER_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["EnumMember"];
generated$1.ENUMMEMBER_TYPES = ENUMMEMBER_TYPES;
const JSX_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["JSX"];
generated$1.JSX_TYPES = JSX_TYPES;
const MISCELLANEOUS_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["Miscellaneous"];
generated$1.MISCELLANEOUS_TYPES = MISCELLANEOUS_TYPES;
const TYPESCRIPT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TypeScript"];
generated$1.TYPESCRIPT_TYPES = TYPESCRIPT_TYPES;
const TSTYPEELEMENT_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSTypeElement"];
generated$1.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSType"];
generated$1.TSTYPE_TYPES = TSTYPE_TYPES;
const TSBASETYPE_TYPES = _definitions$3.FLIPPED_ALIAS_KEYS["TSBaseType"];
generated$1.TSBASETYPE_TYPES = TSBASETYPE_TYPES;

var ensureBlock$1 = {};

var toBlock$1 = {};

Object.defineProperty(toBlock$1, "__esModule", {
  value: true
});
toBlock$1.default = toBlock;

var _generated$f = generated$4;

var _generated2$3 = generated$3;

function toBlock(node, parent) {
  if ((0, _generated$f.isBlockStatement)(node)) {
    return node;
  }

  let blockNodes = [];

  if ((0, _generated$f.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _generated$f.isStatement)(node)) {
      if ((0, _generated$f.isFunction)(parent)) {
        node = (0, _generated2$3.returnStatement)(node);
      } else {
        node = (0, _generated2$3.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, _generated2$3.blockStatement)(blockNodes);
}

Object.defineProperty(ensureBlock$1, "__esModule", {
  value: true
});
ensureBlock$1.default = ensureBlock;

var _toBlock = toBlock$1;

function ensureBlock(node, key = "body") {
  return node[key] = (0, _toBlock.default)(node[key], node);
}

var toBindingIdentifierName$1 = {};

var toIdentifier$1 = {};

Object.defineProperty(toIdentifier$1, "__esModule", {
  value: true
});
toIdentifier$1.default = toIdentifier;

var _isValidIdentifier$2 = isValidIdentifier$1;

var _helperValidatorIdentifier = lib$1;

function toIdentifier(input) {
  input = input + "";
  let name = "";

  for (const c of input) {
    name += (0, _helperValidatorIdentifier.isIdentifierChar)(c.codePointAt(0)) ? c : "-";
  }

  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, _isValidIdentifier$2.default)(name)) {
    name = `_${name}`;
  }

  return name || "_";
}

Object.defineProperty(toBindingIdentifierName$1, "__esModule", {
  value: true
});
toBindingIdentifierName$1.default = toBindingIdentifierName;

var _toIdentifier = toIdentifier$1;

function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

var toComputedKey$1 = {};

Object.defineProperty(toComputedKey$1, "__esModule", {
  value: true
});
toComputedKey$1.default = toComputedKey;

var _generated$e = generated$4;

var _generated2$2 = generated$3;

function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, _generated$e.isIdentifier)(key)) key = (0, _generated2$2.stringLiteral)(key.name);
  return key;
}

var toExpression$1 = {};

Object.defineProperty(toExpression$1, "__esModule", {
  value: true
});
toExpression$1.default = void 0;

var _generated$d = generated$4;

var _default$4 = toExpression;
toExpression$1.default = _default$4;

function toExpression(node) {
  if ((0, _generated$d.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, _generated$d.isExpression)(node)) {
    return node;
  }

  if ((0, _generated$d.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, _generated$d.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, _generated$d.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }

  return node;
}

var toKeyAlias$1 = {};

var removePropertiesDeep$2 = {};

var traverseFast$1 = {};

Object.defineProperty(traverseFast$1, "__esModule", {
  value: true
});
traverseFast$1.default = traverseFast;

var _definitions$2 = definitions;

function traverseFast(node, enter, opts) {
  if (!node) return;
  const keys = _definitions$2.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

var removeProperties$1 = {};

Object.defineProperty(removeProperties$1, "__esModule", {
  value: true
});
removeProperties$1.default = removeProperties;

var _constants$3 = constants;

const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

const CLEAR_KEYS_PLUS_COMMENTS = _constants$3.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }

  for (const key of Object.keys(node)) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  const symbols = Object.getOwnPropertySymbols(node);

  for (const sym of symbols) {
    node[sym] = null;
  }
}

Object.defineProperty(removePropertiesDeep$2, "__esModule", {
  value: true
});
removePropertiesDeep$2.default = removePropertiesDeep$1;

var _traverseFast = traverseFast$1;

var _removeProperties = removeProperties$1;

function removePropertiesDeep$1(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}

Object.defineProperty(toKeyAlias$1, "__esModule", {
  value: true
});
toKeyAlias$1.default = toKeyAlias;

var _generated$c = generated$4;

var _cloneNode$1 = cloneNode$2;

var _removePropertiesDeep = removePropertiesDeep$2;

function toKeyAlias(node, key = node.key) {
  let alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _generated$c.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _generated$c.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode$1.default)(key)));
  }

  if (node.computed) {
    alias = `[${alias}]`;
  }

  if (node.static) {
    alias = `static:${alias}`;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

var toSequenceExpression$1 = {};

var gatherSequenceExpressions$1 = {};

var getBindingIdentifiers$1 = {};

Object.defineProperty(getBindingIdentifiers$1, "__esModule", {
  value: true
});
getBindingIdentifiers$1.default = getBindingIdentifiers;

var _generated$b = generated$4;

function getBindingIdentifiers(node, duplicates, outerOnly) {
  let search = [].concat(node);
  const ids = Object.create(null);

  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    const keys = getBindingIdentifiers.keys[id.type];

    if ((0, _generated$b.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, _generated$b.isExportDeclaration)(id) && !(0, _generated$b.isExportAllDeclaration)(id)) {
      if ((0, _generated$b.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, _generated$b.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, _generated$b.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ClassPrivateMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};

Object.defineProperty(gatherSequenceExpressions$1, "__esModule", {
  value: true
});
gatherSequenceExpressions$1.default = gatherSequenceExpressions;

var _getBindingIdentifiers$2 = getBindingIdentifiers$1;

var _generated$a = generated$4;

var _generated2$1 = generated$3;

var _cloneNode = cloneNode$2;

function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;

  for (const node of nodes) {
    if (!(0, _generated$a.isEmptyStatement)(node)) {
      ensureLastUndefined = false;
    }

    if ((0, _generated$a.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _generated$a.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _generated$a.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;

      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers$2.default)(declar);

        for (const key of Object.keys(bindings)) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, _generated2$1.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, _generated$a.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, _generated2$1.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _generated$a.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _generated$a.isEmptyStatement)(node)) {
      if (nodes.indexOf(node) === 0) {
        ensureLastUndefined = true;
      }
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _generated2$1.sequenceExpression)(exprs);
  }
}

Object.defineProperty(toSequenceExpression$1, "__esModule", {
  value: true
});
toSequenceExpression$1.default = toSequenceExpression;

var _gatherSequenceExpressions = gatherSequenceExpressions$1;

function toSequenceExpression(nodes, scope) {
  if (!(nodes != null && nodes.length)) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result) return;

  for (const declar of declars) {
    scope.push(declar);
  }

  return result;
}

var toStatement$1 = {};

Object.defineProperty(toStatement$1, "__esModule", {
  value: true
});
toStatement$1.default = void 0;

var _generated$9 = generated$4;

var _generated2 = generated$3;

var _default$3 = toStatement;
toStatement$1.default = _default$3;

function toStatement(node, ignore) {
  if ((0, _generated$9.isStatement)(node)) {
    return node;
  }

  let mustHaveId = false;
  let newType;

  if ((0, _generated$9.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _generated$9.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _generated$9.isAssignmentExpression)(node)) {
    return (0, _generated2.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }

  node.type = newType;
  return node;
}

var valueToNode$1 = {};

Object.defineProperty(valueToNode$1, "__esModule", {
  value: true
});
valueToNode$1.default = void 0;

var _isValidIdentifier$1 = isValidIdentifier$1;

var _generated$8 = generated$3;

var _default$2 = valueToNode;
valueToNode$1.default = _default$2;
const objectToString = Function.call.bind(Object.prototype.toString);

function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}

function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}

function valueToNode(value) {
  if (value === undefined) {
    return (0, _generated$8.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, _generated$8.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, _generated$8.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, _generated$8.stringLiteral)(value);
  }

  if (typeof value === "number") {
    let result;

    if (Number.isFinite(value)) {
      result = (0, _generated$8.numericLiteral)(Math.abs(value));
    } else {
      let numerator;

      if (Number.isNaN(value)) {
        numerator = (0, _generated$8.numericLiteral)(0);
      } else {
        numerator = (0, _generated$8.numericLiteral)(1);
      }

      result = (0, _generated$8.binaryExpression)("/", numerator, (0, _generated$8.numericLiteral)(0));
    }

    if (value < 0 || Object.is(value, -0)) {
      result = (0, _generated$8.unaryExpression)("-", result);
    }

    return result;
  }

  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, _generated$8.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, _generated$8.arrayExpression)(value.map(valueToNode));
  }

  if (isPlainObject(value)) {
    const props = [];

    for (const key of Object.keys(value)) {
      let nodeKey;

      if ((0, _isValidIdentifier$1.default)(key)) {
        nodeKey = (0, _generated$8.identifier)(key);
      } else {
        nodeKey = (0, _generated$8.stringLiteral)(key);
      }

      props.push((0, _generated$8.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, _generated$8.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}

var appendToMemberExpression$1 = {};

Object.defineProperty(appendToMemberExpression$1, "__esModule", {
  value: true
});
appendToMemberExpression$1.default = appendToMemberExpression;

var _generated$7 = generated$3;

function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, _generated$7.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

var inherits$1 = {};

Object.defineProperty(inherits$1, "__esModule", {
  value: true
});
inherits$1.default = inherits;

var _constants$2 = constants;

var _inheritsComments = inheritsComments$1;

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (const key of _constants$2.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (const key of Object.keys(parent)) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  for (const key of _constants$2.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }

  (0, _inheritsComments.default)(child, parent);
  return child;
}

var prependToMemberExpression$1 = {};

Object.defineProperty(prependToMemberExpression$1, "__esModule", {
  value: true
});
prependToMemberExpression$1.default = prependToMemberExpression;

var _generated$6 = generated$3;

function prependToMemberExpression(member, prepend) {
  member.object = (0, _generated$6.memberExpression)(prepend, member.object);
  return member;
}

var getOuterBindingIdentifiers$1 = {};

Object.defineProperty(getOuterBindingIdentifiers$1, "__esModule", {
  value: true
});
getOuterBindingIdentifiers$1.default = void 0;

var _getBindingIdentifiers$1 = getBindingIdentifiers$1;

var _default$1 = getOuterBindingIdentifiers;
getOuterBindingIdentifiers$1.default = _default$1;

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers$1.default)(node, duplicates, true);
}

var traverse$2 = {};

Object.defineProperty(traverse$2, "__esModule", {
  value: true
});
traverse$2.default = traverse$1;

var _definitions$1 = definitions;

function traverse$1(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _definitions$1.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}

var isBinding$1 = {};

Object.defineProperty(isBinding$1, "__esModule", {
  value: true
});
isBinding$1.default = isBinding;

var _getBindingIdentifiers = getBindingIdentifiers$1;

function isBinding(node, parent, grandparent) {
  if (grandparent && node.type === "Identifier" && parent.type === "ObjectProperty" && grandparent.type === "ObjectExpression") {
    return false;
  }

  const keys = _getBindingIdentifiers.default.keys[parent.type];

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}

var isBlockScoped$1 = {};

var isLet$1 = {};

Object.defineProperty(isLet$1, "__esModule", {
  value: true
});
isLet$1.default = isLet;

var _generated$5 = generated$4;

var _constants$1 = constants;

function isLet(node) {
  return (0, _generated$5.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants$1.BLOCK_SCOPED_SYMBOL]);
}

Object.defineProperty(isBlockScoped$1, "__esModule", {
  value: true
});
isBlockScoped$1.default = isBlockScoped;

var _generated$4 = generated$4;

var _isLet = isLet$1;

function isBlockScoped(node) {
  return (0, _generated$4.isFunctionDeclaration)(node) || (0, _generated$4.isClassDeclaration)(node) || (0, _isLet.default)(node);
}

var isImmutable$1 = {};

Object.defineProperty(isImmutable$1, "__esModule", {
  value: true
});
isImmutable$1.default = isImmutable;

var _isType = isType$1;

var _generated$3 = generated$4;

function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;

  if ((0, _generated$3.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

var isNodesEquivalent$1 = {};

Object.defineProperty(isNodesEquivalent$1, "__esModule", {
  value: true
});
isNodesEquivalent$1.default = isNodesEquivalent;

var _definitions = definitions;

function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = _definitions.VISITOR_KEYS[a.type];

  for (const field of fields) {
    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (a[field] == null && b[field] == null) {
      continue;
    } else if (a[field] == null || b[field] == null) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (let i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (typeof a[field] === "object" && !(visitorKeys != null && visitorKeys.includes(field))) {
      for (const key of Object.keys(a[field])) {
        if (a[field][key] !== b[field][key]) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}

var isReferenced$1 = {};

Object.defineProperty(isReferenced$1, "__esModule", {
  value: true
});
isReferenced$1.default = isReferenced;

function isReferenced(node, parent, grandparent) {
  switch (parent.type) {
    case "MemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }

      return parent.object === node;

    case "JSXMemberExpression":
      return parent.object === node;

    case "VariableDeclarator":
      return parent.init === node;

    case "ArrowFunctionExpression":
      return parent.body === node;

    case "PrivateName":
      return false;

    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return false;

    case "ObjectProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return !grandparent || grandparent.type !== "ObjectPattern";

    case "ClassProperty":
    case "ClassAccessorProperty":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return true;

    case "ClassPrivateProperty":
      return parent.key !== node;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return false;

    case "RestElement":
      return false;

    case "BreakStatement":
    case "ContinueStatement":
      return false;

    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "ExportSpecifier":
      if (grandparent != null && grandparent.source) {
        return false;
      }

      return parent.local === node;

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "ImportAttribute":
      return false;

    case "JSXAttribute":
      return false;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;

    case "MetaProperty":
      return false;

    case "ObjectTypeProperty":
      return parent.key !== node;

    case "TSEnumMember":
      return parent.id !== node;

    case "TSPropertySignature":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return true;
  }

  return true;
}

var isScope$1 = {};

Object.defineProperty(isScope$1, "__esModule", {
  value: true
});
isScope$1.default = isScope;

var _generated$2 = generated$4;

function isScope(node, parent) {
  if ((0, _generated$2.isBlockStatement)(node) && ((0, _generated$2.isFunction)(parent) || (0, _generated$2.isCatchClause)(parent))) {
    return false;
  }

  if ((0, _generated$2.isPattern)(node) && ((0, _generated$2.isFunction)(parent) || (0, _generated$2.isCatchClause)(parent))) {
    return true;
  }

  return (0, _generated$2.isScopable)(node);
}

var isSpecifierDefault$1 = {};

Object.defineProperty(isSpecifierDefault$1, "__esModule", {
  value: true
});
isSpecifierDefault$1.default = isSpecifierDefault;

var _generated$1 = generated$4;

function isSpecifierDefault(specifier) {
  return (0, _generated$1.isImportDefaultSpecifier)(specifier) || (0, _generated$1.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}

var isValidES3Identifier$1 = {};

Object.defineProperty(isValidES3Identifier$1, "__esModule", {
  value: true
});
isValidES3Identifier$1.default = isValidES3Identifier;

var _isValidIdentifier = isValidIdentifier$1;

const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

var isVar$1 = {};

Object.defineProperty(isVar$1, "__esModule", {
  value: true
});
isVar$1.default = isVar;

var _generated = generated$4;

var _constants = constants;

function isVar(node) {
  return (0, _generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}

var generated = /*#__PURE__*/Object.freeze({
	__proto__: null
});

var require$$65 = /*@__PURE__*/getAugmentedNamespace(generated);

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  createFlowUnionType: true,
  createTSUnionType: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneDeepWithoutLoc: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isPlaceholderType: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function () {
    return _addComment.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function () {
    return _addComments.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function () {
    return _appendToMemberExpression.default;
  }
});
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function () {
    return _assertNode.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function () {
    return _buildMatchMemberExpression.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function () {
    return _cloneDeep.default;
  }
});
Object.defineProperty(exports, "cloneDeepWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneDeepWithoutLoc.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function () {
    return _cloneNode.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneWithoutLoc.default;
  }
});
Object.defineProperty(exports, "createFlowUnionType", {
  enumerable: true,
  get: function () {
    return _createFlowUnionType.default;
  }
});
Object.defineProperty(exports, "createTSUnionType", {
  enumerable: true,
  get: function () {
    return _createTSUnionType.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function () {
    return _createTypeAnnotationBasedOnTypeof.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _createFlowUnionType.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function () {
    return _ensureBlock.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getOuterBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function () {
    return _inheritInnerComments.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function () {
    return _inheritLeadingComments.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function () {
    return _inheritTrailingComments.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function () {
    return _inherits.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function () {
    return _inheritsComments.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function () {
    return _isBinding.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function () {
    return _isBlockScoped.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function () {
    return _isImmutable.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function () {
    return _isLet.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function () {
    return _isNodesEquivalent.default;
  }
});
Object.defineProperty(exports, "isPlaceholderType", {
  enumerable: true,
  get: function () {
    return _isPlaceholderType.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function () {
    return _isReferenced.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function () {
    return _isScope.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function () {
    return _isSpecifierDefault.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _isType.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function () {
    return _isValidES3Identifier.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function () {
    return _isValidIdentifier.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function () {
    return _isVar.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function () {
    return _matchesPattern.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function () {
    return _prependToMemberExpression.default;
  }
});
exports.react = void 0;
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function () {
    return _removeComments.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function () {
    return _removeProperties.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function () {
    return _removePropertiesDeep.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function () {
    return _removeTypeDuplicates.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function () {
    return _toBindingIdentifierName.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function () {
    return _toBlock.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function () {
    return _toComputedKey.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return _toExpression.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function () {
    return _toIdentifier.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function () {
    return _toKeyAlias.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function () {
    return _toSequenceExpression.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function () {
    return _toStatement.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function () {
    return _traverse.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function () {
    return _traverseFast.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function () {
    return _valueToNode.default;
  }
});

var _isReactComponent = isReactComponent$1;

var _isCompatTag = isCompatTag$1;

var _buildChildren = buildChildren$1;

var _assertNode = assertNode$1;

var _generated = generated$2;

Object.keys(_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated[key];
    }
  });
});

var _createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof$1;

var _createFlowUnionType = createFlowUnionType$1;

var _createTSUnionType = createTSUnionType$1;

var _generated2 = generated$3;

Object.keys(_generated2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generated2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated2[key];
    }
  });
});

var _uppercase = uppercase;

Object.keys(_uppercase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _uppercase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _uppercase[key];
    }
  });
});

var _cloneNode = cloneNode$2;

var _clone = clone$1;

var _cloneDeep = cloneDeep$1;

var _cloneDeepWithoutLoc = cloneDeepWithoutLoc$1;

var _cloneWithoutLoc = cloneWithoutLoc$1;

var _addComment = addComment$1;

var _addComments = addComments$1;

var _inheritInnerComments = inheritInnerComments$1;

var _inheritLeadingComments = inheritLeadingComments$1;

var _inheritsComments = inheritsComments$1;

var _inheritTrailingComments = inheritTrailingComments$1;

var _removeComments = removeComments$1;

var _generated3 = generated$1;

Object.keys(_generated3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generated3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated3[key];
    }
  });
});

var _constants = constants;

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _ensureBlock = ensureBlock$1;

var _toBindingIdentifierName = toBindingIdentifierName$1;

var _toBlock = toBlock$1;

var _toComputedKey = toComputedKey$1;

var _toExpression = toExpression$1;

var _toIdentifier = toIdentifier$1;

var _toKeyAlias = toKeyAlias$1;

var _toSequenceExpression = toSequenceExpression$1;

var _toStatement = toStatement$1;

var _valueToNode = valueToNode$1;

var _definitions = definitions;

Object.keys(_definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _definitions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _definitions[key];
    }
  });
});

var _appendToMemberExpression = appendToMemberExpression$1;

var _inherits = inherits$1;

var _prependToMemberExpression = prependToMemberExpression$1;

var _removeProperties = removeProperties$1;

var _removePropertiesDeep = removePropertiesDeep$2;

var _removeTypeDuplicates = removeTypeDuplicates$3;

var _getBindingIdentifiers = getBindingIdentifiers$1;

var _getOuterBindingIdentifiers = getOuterBindingIdentifiers$1;

var _traverse = traverse$2;

Object.keys(_traverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _traverse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _traverse[key];
    }
  });
});

var _traverseFast = traverseFast$1;

var _shallowEqual = shallowEqual$1;

var _is = is$1;

var _isBinding = isBinding$1;

var _isBlockScoped = isBlockScoped$1;

var _isImmutable = isImmutable$1;

var _isLet = isLet$1;

var _isNode = isNode$1;

var _isNodesEquivalent = isNodesEquivalent$1;

var _isPlaceholderType = isPlaceholderType$1;

var _isReferenced = isReferenced$1;

var _isScope = isScope$1;

var _isSpecifierDefault = isSpecifierDefault$1;

var _isType = isType$1;

var _isValidES3Identifier = isValidES3Identifier$1;

var _isValidIdentifier = isValidIdentifier$1;

var _isVar = isVar$1;

var _matchesPattern = matchesPattern$1;

var _validate = validate$4;

var _buildMatchMemberExpression = buildMatchMemberExpression$1;

var _generated4 = generated$4;

Object.keys(_generated4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generated4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated4[key];
    }
  });
});

var _generated5 = require$$65;

Object.keys(_generated5).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _generated5[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated5[key];
    }
  });
});
const react = {
  isReactComponent: _isReactComponent.default,
  isCompatTag: _isCompatTag.default,
  buildChildren: _buildChildren.default
};
exports.react = react;
}(lib$2));

Object.defineProperty(formatters$1, "__esModule", {
  value: true
});
formatters$1.statements = formatters$1.statement = formatters$1.smart = formatters$1.program = formatters$1.expression = void 0;

var _t$2 = lib$2;

const {
  assertExpressionStatement
} = _t$2;

function makeStatementFormatter(fn) {
  return {
    code: str => `/* @babel/template */;\n${str}`,
    validate: () => {},
    unwrap: ast => {
      return fn(ast.program.body.slice(1));
    }
  };
}

const smart$1 = makeStatementFormatter(body => {
  if (body.length > 1) {
    return body;
  } else {
    return body[0];
  }
});
formatters$1.smart = smart$1;
const statements$1 = makeStatementFormatter(body => body);
formatters$1.statements = statements$1;
const statement$1 = makeStatementFormatter(body => {
  if (body.length === 0) {
    throw new Error("Found nothing to return.");
  }

  if (body.length > 1) {
    throw new Error("Found multiple statements but wanted one");
  }

  return body[0];
});
formatters$1.statement = statement$1;
const expression$1 = {
  code: str => `(\n${str}\n)`,
  validate: ast => {
    if (ast.program.body.length > 1) {
      throw new Error("Found multiple statements but wanted one");
    }

    if (expression$1.unwrap(ast).start === 0) {
      throw new Error("Parse result included parens.");
    }
  },
  unwrap: ({
    program
  }) => {
    const [stmt] = program.body;
    assertExpressionStatement(stmt);
    return stmt.expression;
  }
};
formatters$1.expression = expression$1;
const program$1 = {
  code: str => str,
  validate: () => {},
  unwrap: ast => ast.program
};
formatters$1.program = program$1;

var builder = {};

var options = {};

Object.defineProperty(options, "__esModule", {
  value: true
});
options.merge = merge;
options.normalizeReplacements = normalizeReplacements;
options.validate = validate$1;
const _excluded = ["placeholderWhitelist", "placeholderPattern", "preserveComments", "syntacticPlaceholders"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function merge(a, b) {
  const {
    placeholderWhitelist = a.placeholderWhitelist,
    placeholderPattern = a.placeholderPattern,
    preserveComments = a.preserveComments,
    syntacticPlaceholders = a.syntacticPlaceholders
  } = b;
  return {
    parser: Object.assign({}, a.parser, b.parser),
    placeholderWhitelist,
    placeholderPattern,
    preserveComments,
    syntacticPlaceholders
  };
}

function validate$1(opts) {
  if (opts != null && typeof opts !== "object") {
    throw new Error("Unknown template options.");
  }

  const _ref = opts || {},
        {
    placeholderWhitelist,
    placeholderPattern,
    preserveComments,
    syntacticPlaceholders
  } = _ref,
        parser = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (placeholderWhitelist != null && !(placeholderWhitelist instanceof Set)) {
    throw new Error("'.placeholderWhitelist' must be a Set, null, or undefined");
  }

  if (placeholderPattern != null && !(placeholderPattern instanceof RegExp) && placeholderPattern !== false) {
    throw new Error("'.placeholderPattern' must be a RegExp, false, null, or undefined");
  }

  if (preserveComments != null && typeof preserveComments !== "boolean") {
    throw new Error("'.preserveComments' must be a boolean, null, or undefined");
  }

  if (syntacticPlaceholders != null && typeof syntacticPlaceholders !== "boolean") {
    throw new Error("'.syntacticPlaceholders' must be a boolean, null, or undefined");
  }

  if (syntacticPlaceholders === true && (placeholderWhitelist != null || placeholderPattern != null)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible" + " with '.syntacticPlaceholders: true'");
  }

  return {
    parser,
    placeholderWhitelist: placeholderWhitelist || undefined,
    placeholderPattern: placeholderPattern == null ? undefined : placeholderPattern,
    preserveComments: preserveComments == null ? undefined : preserveComments,
    syntacticPlaceholders: syntacticPlaceholders == null ? undefined : syntacticPlaceholders
  };
}

function normalizeReplacements(replacements) {
  if (Array.isArray(replacements)) {
    return replacements.reduce((acc, replacement, i) => {
      acc["$" + i] = replacement;
      return acc;
    }, {});
  } else if (typeof replacements === "object" || replacements == null) {
    return replacements || undefined;
  }

  throw new Error("Template replacements must be an array, object, null, or undefined");
}

var string = {};

var parse$1 = {};

var lib = {};

Object.defineProperty(lib, '__esModule', { value: true });

class BaseParser {
  constructor() {
    this.sawUnambiguousESM = false;
    this.ambiguousScriptDifferentAst = false;
  }

  hasPlugin(pluginConfig) {
    if (typeof pluginConfig === "string") {
      return this.plugins.has(pluginConfig);
    } else {
      const [pluginName, pluginOptions] = pluginConfig;

      if (!this.hasPlugin(pluginName)) {
        return false;
      }

      const actualOptions = this.plugins.get(pluginName);

      for (const key of Object.keys(pluginOptions)) {
        if ((actualOptions == null ? void 0 : actualOptions[key]) !== pluginOptions[key]) {
          return false;
        }
      }

      return true;
    }
  }

  getPluginOption(plugin, name) {
    var _this$plugins$get;

    return (_this$plugins$get = this.plugins.get(plugin)) == null ? void 0 : _this$plugins$get[name];
  }

}

function setTrailingComments(node, comments) {
  if (node.trailingComments === undefined) {
    node.trailingComments = comments;
  } else {
    node.trailingComments.unshift(...comments);
  }
}

function setLeadingComments(node, comments) {
  if (node.leadingComments === undefined) {
    node.leadingComments = comments;
  } else {
    node.leadingComments.unshift(...comments);
  }
}

function setInnerComments(node, comments) {
  if (node.innerComments === undefined) {
    node.innerComments = comments;
  } else {
    node.innerComments.unshift(...comments);
  }
}

function adjustInnerComments(node, elements, commentWS) {
  let lastElement = null;
  let i = elements.length;

  while (lastElement === null && i > 0) {
    lastElement = elements[--i];
  }

  if (lastElement === null || lastElement.start > commentWS.start) {
    setInnerComments(node, commentWS.comments);
  } else {
    setTrailingComments(lastElement, commentWS.comments);
  }
}

class CommentsParser extends BaseParser {
  addComment(comment) {
    if (this.filename) comment.loc.filename = this.filename;
    this.state.comments.push(comment);
  }

  processComment(node) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;
    const lastCommentWS = commentStack[i];

    if (lastCommentWS.start === node.end) {
      lastCommentWS.leadingNode = node;
      i--;
    }

    const {
      start: nodeStart
    } = node;

    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;

      if (commentEnd > nodeStart) {
        commentWS.containingNode = node;
        this.finalizeComment(commentWS);
        commentStack.splice(i, 1);
      } else {
        if (commentEnd === nodeStart) {
          commentWS.trailingNode = node;
        }

        break;
      }
    }
  }

  finalizeComment(commentWS) {
    const {
      comments
    } = commentWS;

    if (commentWS.leadingNode !== null || commentWS.trailingNode !== null) {
      if (commentWS.leadingNode !== null) {
        setTrailingComments(commentWS.leadingNode, comments);
      }

      if (commentWS.trailingNode !== null) {
        setLeadingComments(commentWS.trailingNode, comments);
      }
    } else {
      const {
        containingNode: node,
        start: commentStart
      } = commentWS;

      if (this.input.charCodeAt(commentStart - 1) === 44) {
        switch (node.type) {
          case "ObjectExpression":
          case "ObjectPattern":
          case "RecordExpression":
            adjustInnerComments(node, node.properties, commentWS);
            break;

          case "CallExpression":
          case "OptionalCallExpression":
            adjustInnerComments(node, node.arguments, commentWS);
            break;

          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ArrowFunctionExpression":
          case "ObjectMethod":
          case "ClassMethod":
          case "ClassPrivateMethod":
            adjustInnerComments(node, node.params, commentWS);
            break;

          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            adjustInnerComments(node, node.elements, commentWS);
            break;

          case "ExportNamedDeclaration":
          case "ImportDeclaration":
            adjustInnerComments(node, node.specifiers, commentWS);
            break;

          default:
            {
              setInnerComments(node, comments);
            }
        }
      } else {
        setInnerComments(node, comments);
      }
    }
  }

  finalizeRemainingComments() {
    const {
      commentStack
    } = this.state;

    for (let i = commentStack.length - 1; i >= 0; i--) {
      this.finalizeComment(commentStack[i]);
    }

    this.state.commentStack = [];
  }

  resetPreviousNodeTrailingComments(node) {
    const {
      commentStack
    } = this.state;
    const {
      length
    } = commentStack;
    if (length === 0) return;
    const commentWS = commentStack[length - 1];

    if (commentWS.leadingNode === node) {
      commentWS.leadingNode = null;
    }
  }

  takeSurroundingComments(node, start, end) {
    const {
      commentStack
    } = this.state;
    const commentStackLength = commentStack.length;
    if (commentStackLength === 0) return;
    let i = commentStackLength - 1;

    for (; i >= 0; i--) {
      const commentWS = commentStack[i];
      const commentEnd = commentWS.end;
      const commentStart = commentWS.start;

      if (commentStart === end) {
        commentWS.leadingNode = node;
      } else if (commentEnd === start) {
        commentWS.trailingNode = node;
      } else if (commentEnd < start) {
        break;
      }
    }
  }

}

const ErrorCodes = Object.freeze({
  SyntaxError: "BABEL_PARSER_SYNTAX_ERROR",
  SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
});

const ErrorMessages = makeErrorTemplates({
  AccessorIsGenerator: "A %0ter cannot be a generator.",
  ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
  AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
  AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
  AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
  AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
  AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
  AwaitNotInAsyncFunction: "'await' is only allowed within async functions.",
  BadGetterArity: "A 'get' accesor must not have any formal parameters.",
  BadSetterArity: "A 'set' accesor must have exactly one formal parameter.",
  BadSetterRestParameter: "A 'set' accesor function argument must not be a rest parameter.",
  ConstructorClassField: "Classes may not have a field named 'constructor'.",
  ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
  ConstructorIsAccessor: "Class constructor may not be an accessor.",
  ConstructorIsAsync: "Constructor can't be an async function.",
  ConstructorIsGenerator: "Constructor can't be a generator.",
  DeclarationMissingInitializer: "'%0' require an initialization value.",
  DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.",
  DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
  DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
  DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
  DecoratorStaticBlock: "Decorators can't be used with a static block.",
  DeletePrivateField: "Deleting a private field is not allowed.",
  DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
  DuplicateConstructor: "Duplicate constructor in the same class.",
  DuplicateDefaultExport: "Only one default export allowed per module.",
  DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
  DuplicateProto: "Redefinition of __proto__ property.",
  DuplicateRegExpFlags: "Duplicate regular expression flag.",
  ElementAfterRest: "Rest element must be last element.",
  EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
  ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
  ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
  ForInOfLoopInitializer: "'%0' loop variable declaration may not have an initializer.",
  ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
  ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
  GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
  IllegalBreakContinue: "Unsyntactic %0.",
  IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
  IllegalReturn: "'return' outside of function.",
  ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
  ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.",
  ImportCallArity: "`import()` requires exactly %0.",
  ImportCallNotNewExpression: "Cannot use new with import(...).",
  ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
  IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
  InvalidBigIntLiteral: "Invalid BigIntLiteral.",
  InvalidCodePoint: "Code point out of bounds.",
  InvalidCoverInitializedName: "Invalid shorthand property initializer.",
  InvalidDecimal: "Invalid decimal.",
  InvalidDigit: "Expected number in radix %0.",
  InvalidEscapeSequence: "Bad character escape sequence.",
  InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
  InvalidEscapedReservedWord: "Escape sequence in keyword %0.",
  InvalidIdentifier: "Invalid identifier %0.",
  InvalidLhs: "Invalid left-hand side in %0.",
  InvalidLhsBinding: "Binding invalid left-hand side in %0.",
  InvalidNumber: "Invalid number.",
  InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
  InvalidOrUnexpectedToken: "Unexpected character '%0'.",
  InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
  InvalidPrivateFieldResolution: "Private name #%0 is not defined.",
  InvalidPropertyBindingPattern: "Binding member expression.",
  InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
  InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
  LabelRedeclaration: "Label '%0' is already declared.",
  LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
  LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
  MalformedRegExpFlags: "Invalid regular expression flag.",
  MissingClassName: "A class name is required.",
  MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
  MissingSemicolon: "Missing semicolon.",
  MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
  MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
  ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
  ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
  ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes.',
  ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'.",
  ModuleExportUndefined: "Export '%0' is not defined.",
  MultipleDefaultsInSwitch: "Multiple default clauses.",
  NewlineAfterThrow: "Illegal newline after throw.",
  NoCatchOrFinally: "Missing catch or finally clause.",
  NumberIdentifier: "Identifier directly after number.",
  NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
  ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
  OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
  OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
  OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
  ParamDupe: "Argument name clash.",
  PatternHasAccessor: "Object pattern can't contain getter or setter.",
  PatternHasMethod: "Object pattern can't contain methods.",
  PipeBodyIsTighter: "Unexpected %0 after pipeline body; any %0 expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
  PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
  PipeTopicUnconfiguredToken: 'Invalid topic token %0. In order to use %0 as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "%0" }.',
  PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
  PipeUnparenthesizedBody: "Hack-style pipe body cannot be an unparenthesized %0 expression; please wrap it in parentheses.",
  PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
  PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
  PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
  PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
  PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
  PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
  PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`).",
  PrivateNameRedeclaration: "Duplicate private name #%0.",
  RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  RecordNoProto: "'__proto__' is not allowed in Record expressions.",
  RestTrailingComma: "Unexpected trailing comma after rest element.",
  SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
  StaticPrototype: "Classes may not have static property named prototype.",
  StrictDelete: "Deleting local variable in strict mode.",
  StrictEvalArguments: "Assigning to '%0' in strict mode.",
  StrictEvalArgumentsBinding: "Binding '%0' in strict mode.",
  StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
  StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
  StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
  StrictWith: "'with' in strict mode.",
  SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
  SuperPrivateField: "Private fields can't be accessed on super.",
  TrailingDecorator: "Decorators must be attached to a class element.",
  TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
  TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
  UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
  UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
  UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
  UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
  UnexpectedKeyword: "Unexpected keyword '%0'.",
  UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
  UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
  UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
  UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
  UnexpectedPrivateField: "Unexpected private name.",
  UnexpectedReservedWord: "Unexpected reserved word '%0'.",
  UnexpectedSuper: "'super' is only allowed in object methods and classes.",
  UnexpectedToken: "Unexpected token '%0'.",
  UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
  UnsupportedBind: "Binding should be performed on object property.",
  UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
  UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
  UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
  UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1.",
  UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
  UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
  UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
  UnterminatedComment: "Unterminated comment.",
  UnterminatedRegExp: "Unterminated regular expression.",
  UnterminatedString: "Unterminated string constant.",
  UnterminatedTemplate: "Unterminated template.",
  VarRedeclaration: "Identifier '%0' has already been declared.",
  YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
  YieldInParameter: "Yield expression is not allowed in formal parameters.",
  ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
}, ErrorCodes.SyntaxError);
const SourceTypeModuleErrorMessages = makeErrorTemplates({
  ImportMetaOutsideModule: `import.meta may appear only with 'sourceType: "module"'`,
  ImportOutsideModule: `'import' and 'export' may appear only with 'sourceType: "module"'`
}, ErrorCodes.SourceTypeModuleError);

function keepReasonCodeCompat(reasonCode, syntaxPlugin) {
  {
    if (syntaxPlugin === "flow" && reasonCode === "PatternIsOptional") {
      return "OptionalBindingPattern";
    }
  }
  return reasonCode;
}

function makeErrorTemplates(messages, code, syntaxPlugin) {
  const templates = {};
  Object.keys(messages).forEach(reasonCode => {
    templates[reasonCode] = Object.freeze({
      code,
      reasonCode: keepReasonCodeCompat(reasonCode, syntaxPlugin),
      template: messages[reasonCode]
    });
  });
  return Object.freeze(templates);
}
class ParserError extends CommentsParser {
  raise({
    code,
    reasonCode,
    template
  }, origin, ...params) {
    return this.raiseWithData(origin.node ? origin.node.loc.start : origin.at, {
      code,
      reasonCode
    }, template, ...params);
  }

  raiseOverwrite(loc, {
    code,
    template
  }, ...params) {
    const pos = loc.index;
    const message = template.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;

    if (this.options.errorRecovery) {
      const errors = this.state.errors;

      for (let i = errors.length - 1; i >= 0; i--) {
        const error = errors[i];

        if (error.pos === pos) {
          return Object.assign(error, {
            message
          });
        } else if (error.pos < pos) {
          break;
        }
      }
    }

    return this._raise({
      code,
      loc,
      pos
    }, message);
  }

  raiseWithData(loc, data, errorTemplate, ...params) {
    const pos = loc.index;
    const message = errorTemplate.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;
    return this._raise(Object.assign({
      loc,
      pos
    }, data), message);
  }

  _raise(errorContext, message) {
    const err = new SyntaxError(message);
    Object.assign(err, errorContext);

    if (this.options.errorRecovery) {
      if (!this.isLookahead) this.state.errors.push(err);
      return err;
    } else {
      throw err;
    }
  }

}

const {
  defineProperty
} = Object;

const toUnenumerable = (object, key) => defineProperty(object, key, {
  enumerable: false,
  value: object[key]
});

function toESTreeLocation(node) {
  toUnenumerable(node.loc.start, "index");
  toUnenumerable(node.loc.end, "index");
  return node;
}

var estree = (superClass => class extends superClass {
  parse() {
    const file = toESTreeLocation(super.parse());

    if (this.options.tokens) {
      file.tokens = file.tokens.map(toESTreeLocation);
    }

    return file;
  }

  parseRegExpLiteral({
    pattern,
    flags
  }) {
    let regex = null;

    try {
      regex = new RegExp(pattern, flags);
    } catch (e) {}

    const node = this.estreeParseLiteral(regex);
    node.regex = {
      pattern,
      flags
    };
    return node;
  }

  parseBigIntLiteral(value) {
    let bigInt;

    try {
      bigInt = BigInt(value);
    } catch (_unused) {
      bigInt = null;
    }

    const node = this.estreeParseLiteral(bigInt);
    node.bigint = String(node.value || value);
    return node;
  }

  parseDecimalLiteral(value) {
    const decimal = null;
    const node = this.estreeParseLiteral(decimal);
    node.decimal = String(node.value || value);
    return node;
  }

  estreeParseLiteral(value) {
    return this.parseLiteral(value, "Literal");
  }

  parseStringLiteral(value) {
    return this.estreeParseLiteral(value);
  }

  parseNumericLiteral(value) {
    return this.estreeParseLiteral(value);
  }

  parseNullLiteral() {
    return this.estreeParseLiteral(null);
  }

  parseBooleanLiteral(value) {
    return this.estreeParseLiteral(value);
  }

  directiveToStmt(directive) {
    const directiveLiteral = directive.value;
    const stmt = this.startNodeAt(directive.start, directive.loc.start);
    const expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
    expression.value = directiveLiteral.extra.expressionValue;
    expression.raw = directiveLiteral.extra.raw;
    stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.loc.end);
    stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
    return this.finishNodeAt(stmt, "ExpressionStatement", directive.loc.end);
  }

  initFunction(node, isAsync) {
    super.initFunction(node, isAsync);
    node.expression = false;
  }

  checkDeclaration(node) {
    if (node != null && this.isObjectProperty(node)) {
      this.checkDeclaration(node.value);
    } else {
      super.checkDeclaration(node);
    }
  }

  getObjectOrClassMethodParams(method) {
    return method.value.params;
  }

  isValidDirective(stmt) {
    var _stmt$expression$extr;

    return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) != null && _stmt$expression$extr.parenthesized);
  }

  parseBlockBody(node, ...args) {
    super.parseBlockBody(node, ...args);
    const directiveStatements = node.directives.map(d => this.directiveToStmt(d));
    node.body = directiveStatements.concat(node.body);
    delete node.directives;
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true);

    if (method.typeParameters) {
      method.value.typeParameters = method.typeParameters;
      delete method.typeParameters;
    }

    classBody.body.push(method);
  }

  parsePrivateName() {
    const node = super.parsePrivateName();
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return node;
      }
    }
    return this.convertPrivateNameToPrivateIdentifier(node);
  }

  convertPrivateNameToPrivateIdentifier(node) {
    const name = super.getPrivateNameSV(node);
    node = node;
    delete node.id;
    node.name = name;
    node.type = "PrivateIdentifier";
    return node;
  }

  isPrivateName(node) {
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.isPrivateName(node);
      }
    }
    return node.type === "PrivateIdentifier";
  }

  getPrivateNameSV(node) {
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.getPrivateNameSV(node);
      }
    }
    return node.name;
  }

  parseLiteral(value, type) {
    const node = super.parseLiteral(value, type);
    node.raw = node.extra.raw;
    delete node.extra;
    return node;
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    super.parseFunctionBody(node, allowExpression, isMethod);
    node.expression = node.body.type !== "BlockStatement";
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    let funcNode = this.startNode();
    funcNode.kind = node.kind;
    funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
    funcNode.type = "FunctionExpression";
    delete funcNode.kind;
    node.value = funcNode;

    if (type === "ClassPrivateMethod") {
      node.computed = false;
    }

    type = "MethodDefinition";
    return this.finishNode(node, type);
  }

  parseClassProperty(...args) {
    const propertyNode = super.parseClassProperty(...args);
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return propertyNode;
      }
    }
    propertyNode.type = "PropertyDefinition";
    return propertyNode;
  }

  parseClassPrivateProperty(...args) {
    const propertyNode = super.parseClassPrivateProperty(...args);
    {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return propertyNode;
      }
    }
    propertyNode.type = "PropertyDefinition";
    propertyNode.computed = false;
    return propertyNode;
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    const node = super.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor);

    if (node) {
      node.type = "Property";
      if (node.kind === "method") node.kind = "init";
      node.shorthand = false;
    }

    return node;
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    const node = super.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);

    if (node) {
      node.kind = "init";
      node.type = "Property";
    }

    return node;
  }

  isAssignable(node, isBinding) {
    if (node != null && this.isObjectProperty(node)) {
      return this.isAssignable(node.value, isBinding);
    }

    return super.isAssignable(node, isBinding);
  }

  toAssignable(node, isLHS = false) {
    if (node != null && this.isObjectProperty(node)) {
      const {
        key,
        value
      } = node;

      if (this.isPrivateName(key)) {
        this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
      }

      this.toAssignable(value, isLHS);
      return node;
    }

    return super.toAssignable(node, isLHS);
  }

  toAssignableObjectExpressionProp(prop, ...args) {
    if (prop.kind === "get" || prop.kind === "set") {
      this.raise(ErrorMessages.PatternHasAccessor, {
        node: prop.key
      });
    } else if (prop.method) {
      this.raise(ErrorMessages.PatternHasMethod, {
        node: prop.key
      });
    } else {
      super.toAssignableObjectExpressionProp(prop, ...args);
    }
  }

  finishCallExpression(node, optional) {
    super.finishCallExpression(node, optional);

    if (node.callee.type === "Import") {
      node.type = "ImportExpression";
      node.source = node.arguments[0];

      if (this.hasPlugin("importAssertions")) {
        var _node$arguments$;

        node.attributes = (_node$arguments$ = node.arguments[1]) != null ? _node$arguments$ : null;
      }

      delete node.arguments;
      delete node.callee;
    }

    return node;
  }

  toReferencedArguments(node) {
    if (node.type === "ImportExpression") {
      return;
    }

    super.toReferencedArguments(node);
  }

  parseExport(node) {
    super.parseExport(node);

    switch (node.type) {
      case "ExportAllDeclaration":
        node.exported = null;
        break;

      case "ExportNamedDeclaration":
        if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
          node.type = "ExportAllDeclaration";
          node.exported = node.specifiers[0].exported;
          delete node.specifiers;
        }

        break;
    }

    return node;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    const node = super.parseSubscript(base, startPos, startLoc, noCalls, state);

    if (state.optionalChainMember) {
      if (node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression") {
        node.type = node.type.substring(8);
      }

      if (state.stop) {
        const chain = this.startNodeAtNode(node);
        chain.expression = node;
        return this.finishNode(chain, "ChainExpression");
      }
    } else if (node.type === "MemberExpression" || node.type === "CallExpression") {
      node.optional = false;
    }

    return node;
  }

  hasPropertyAsPrivateName(node) {
    if (node.type === "ChainExpression") {
      node = node.expression;
    }

    return super.hasPropertyAsPrivateName(node);
  }

  isOptionalChain(node) {
    return node.type === "ChainExpression";
  }

  isObjectProperty(node) {
    return node.type === "Property" && node.kind === "init" && !node.method;
  }

  isObjectMethod(node) {
    return node.method || node.kind === "get" || node.kind === "set";
  }

  finishNodeAt(node, type, endLoc) {
    return toESTreeLocation(super.finishNodeAt(node, type, endLoc));
  }

  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    super.resetEndLocation(node, endLoc);
    toESTreeLocation(node);
  }

});

class TokContext {
  constructor(token, preserveSpace) {
    this.token = void 0;
    this.preserveSpace = void 0;
    this.token = token;
    this.preserveSpace = !!preserveSpace;
  }

}
const types = {
  brace: new TokContext("{"),
  j_oTag: new TokContext("<tag"),
  j_cTag: new TokContext("</tag"),
  j_expr: new TokContext("<tag>...</tag>", true)
};
{
  types.template = new TokContext("`", true);
}

const beforeExpr = true;
const startsExpr = true;
const isLoop = true;
const isAssign = true;
const prefix = true;
const postfix = true;
class ExportedTokenType {
  constructor(label, conf = {}) {
    this.label = void 0;
    this.keyword = void 0;
    this.beforeExpr = void 0;
    this.startsExpr = void 0;
    this.rightAssociative = void 0;
    this.isLoop = void 0;
    this.isAssign = void 0;
    this.prefix = void 0;
    this.postfix = void 0;
    this.binop = void 0;
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.rightAssociative = !!conf.rightAssociative;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop != null ? conf.binop : null;
    {
      this.updateContext = null;
    }
  }

}
const keywords$1 = new Map();

function createKeyword(name, options = {}) {
  options.keyword = name;
  const token = createToken(name, options);
  keywords$1.set(name, token);
  return token;
}

function createBinop(name, binop) {
  return createToken(name, {
    beforeExpr,
    binop
  });
}

let tokenTypeCounter = -1;
const tokenTypes = [];
const tokenLabels = [];
const tokenBinops = [];
const tokenBeforeExprs = [];
const tokenStartsExprs = [];
const tokenPrefixes = [];

function createToken(name, options = {}) {
  var _options$binop, _options$beforeExpr, _options$startsExpr, _options$prefix;

  ++tokenTypeCounter;
  tokenLabels.push(name);
  tokenBinops.push((_options$binop = options.binop) != null ? _options$binop : -1);
  tokenBeforeExprs.push((_options$beforeExpr = options.beforeExpr) != null ? _options$beforeExpr : false);
  tokenStartsExprs.push((_options$startsExpr = options.startsExpr) != null ? _options$startsExpr : false);
  tokenPrefixes.push((_options$prefix = options.prefix) != null ? _options$prefix : false);
  tokenTypes.push(new ExportedTokenType(name, options));
  return tokenTypeCounter;
}

function createKeywordLike(name, options = {}) {
  var _options$binop2, _options$beforeExpr2, _options$startsExpr2, _options$prefix2;

  ++tokenTypeCounter;
  keywords$1.set(name, tokenTypeCounter);
  tokenLabels.push(name);
  tokenBinops.push((_options$binop2 = options.binop) != null ? _options$binop2 : -1);
  tokenBeforeExprs.push((_options$beforeExpr2 = options.beforeExpr) != null ? _options$beforeExpr2 : false);
  tokenStartsExprs.push((_options$startsExpr2 = options.startsExpr) != null ? _options$startsExpr2 : false);
  tokenPrefixes.push((_options$prefix2 = options.prefix) != null ? _options$prefix2 : false);
  tokenTypes.push(new ExportedTokenType("name", options));
  return tokenTypeCounter;
}

const tt = {
  bracketL: createToken("[", {
    beforeExpr,
    startsExpr
  }),
  bracketHashL: createToken("#[", {
    beforeExpr,
    startsExpr
  }),
  bracketBarL: createToken("[|", {
    beforeExpr,
    startsExpr
  }),
  bracketR: createToken("]"),
  bracketBarR: createToken("|]"),
  braceL: createToken("{", {
    beforeExpr,
    startsExpr
  }),
  braceBarL: createToken("{|", {
    beforeExpr,
    startsExpr
  }),
  braceHashL: createToken("#{", {
    beforeExpr,
    startsExpr
  }),
  braceR: createToken("}", {
    beforeExpr
  }),
  braceBarR: createToken("|}"),
  parenL: createToken("(", {
    beforeExpr,
    startsExpr
  }),
  parenR: createToken(")"),
  comma: createToken(",", {
    beforeExpr
  }),
  semi: createToken(";", {
    beforeExpr
  }),
  colon: createToken(":", {
    beforeExpr
  }),
  doubleColon: createToken("::", {
    beforeExpr
  }),
  dot: createToken("."),
  question: createToken("?", {
    beforeExpr
  }),
  questionDot: createToken("?."),
  arrow: createToken("=>", {
    beforeExpr
  }),
  template: createToken("template"),
  ellipsis: createToken("...", {
    beforeExpr
  }),
  backQuote: createToken("`", {
    startsExpr
  }),
  dollarBraceL: createToken("${", {
    beforeExpr,
    startsExpr
  }),
  templateTail: createToken("...`", {
    startsExpr
  }),
  templateNonTail: createToken("...${", {
    beforeExpr,
    startsExpr
  }),
  at: createToken("@"),
  hash: createToken("#", {
    startsExpr
  }),
  interpreterDirective: createToken("#!..."),
  eq: createToken("=", {
    beforeExpr,
    isAssign
  }),
  assign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  slashAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  xorAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  moduloAssign: createToken("_=", {
    beforeExpr,
    isAssign
  }),
  incDec: createToken("++/--", {
    prefix,
    postfix,
    startsExpr
  }),
  bang: createToken("!", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  tilde: createToken("~", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  doubleCaret: createToken("^^", {
    startsExpr
  }),
  doubleAt: createToken("@@", {
    startsExpr
  }),
  pipeline: createBinop("|>", 0),
  nullishCoalescing: createBinop("??", 1),
  logicalOR: createBinop("||", 1),
  logicalAND: createBinop("&&", 2),
  bitwiseOR: createBinop("|", 3),
  bitwiseXOR: createBinop("^", 4),
  bitwiseAND: createBinop("&", 5),
  equality: createBinop("==/!=/===/!==", 6),
  lt: createBinop("</>/<=/>=", 7),
  gt: createBinop("</>/<=/>=", 7),
  relational: createBinop("</>/<=/>=", 7),
  bitShift: createBinop("<</>>/>>>", 8),
  bitShiftL: createBinop("<</>>/>>>", 8),
  bitShiftR: createBinop("<</>>/>>>", 8),
  plusMin: createToken("+/-", {
    beforeExpr,
    binop: 9,
    prefix,
    startsExpr
  }),
  modulo: createToken("%", {
    binop: 10,
    startsExpr
  }),
  star: createToken("*", {
    binop: 10
  }),
  slash: createBinop("/", 10),
  exponent: createToken("**", {
    beforeExpr,
    binop: 11,
    rightAssociative: true
  }),
  _in: createKeyword("in", {
    beforeExpr,
    binop: 7
  }),
  _instanceof: createKeyword("instanceof", {
    beforeExpr,
    binop: 7
  }),
  _break: createKeyword("break"),
  _case: createKeyword("case", {
    beforeExpr
  }),
  _catch: createKeyword("catch"),
  _continue: createKeyword("continue"),
  _debugger: createKeyword("debugger"),
  _default: createKeyword("default", {
    beforeExpr
  }),
  _else: createKeyword("else", {
    beforeExpr
  }),
  _finally: createKeyword("finally"),
  _function: createKeyword("function", {
    startsExpr
  }),
  _if: createKeyword("if"),
  _return: createKeyword("return", {
    beforeExpr
  }),
  _switch: createKeyword("switch"),
  _throw: createKeyword("throw", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _try: createKeyword("try"),
  _var: createKeyword("var"),
  _const: createKeyword("const"),
  _with: createKeyword("with"),
  _new: createKeyword("new", {
    beforeExpr,
    startsExpr
  }),
  _this: createKeyword("this", {
    startsExpr
  }),
  _super: createKeyword("super", {
    startsExpr
  }),
  _class: createKeyword("class", {
    startsExpr
  }),
  _extends: createKeyword("extends", {
    beforeExpr
  }),
  _export: createKeyword("export"),
  _import: createKeyword("import", {
    startsExpr
  }),
  _null: createKeyword("null", {
    startsExpr
  }),
  _true: createKeyword("true", {
    startsExpr
  }),
  _false: createKeyword("false", {
    startsExpr
  }),
  _typeof: createKeyword("typeof", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _void: createKeyword("void", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _delete: createKeyword("delete", {
    beforeExpr,
    prefix,
    startsExpr
  }),
  _do: createKeyword("do", {
    isLoop,
    beforeExpr
  }),
  _for: createKeyword("for", {
    isLoop
  }),
  _while: createKeyword("while", {
    isLoop
  }),
  _as: createKeywordLike("as", {
    startsExpr
  }),
  _assert: createKeywordLike("assert", {
    startsExpr
  }),
  _async: createKeywordLike("async", {
    startsExpr
  }),
  _await: createKeywordLike("await", {
    startsExpr
  }),
  _from: createKeywordLike("from", {
    startsExpr
  }),
  _get: createKeywordLike("get", {
    startsExpr
  }),
  _let: createKeywordLike("let", {
    startsExpr
  }),
  _meta: createKeywordLike("meta", {
    startsExpr
  }),
  _of: createKeywordLike("of", {
    startsExpr
  }),
  _sent: createKeywordLike("sent", {
    startsExpr
  }),
  _set: createKeywordLike("set", {
    startsExpr
  }),
  _static: createKeywordLike("static", {
    startsExpr
  }),
  _yield: createKeywordLike("yield", {
    startsExpr
  }),
  _asserts: createKeywordLike("asserts", {
    startsExpr
  }),
  _checks: createKeywordLike("checks", {
    startsExpr
  }),
  _exports: createKeywordLike("exports", {
    startsExpr
  }),
  _global: createKeywordLike("global", {
    startsExpr
  }),
  _implements: createKeywordLike("implements", {
    startsExpr
  }),
  _intrinsic: createKeywordLike("intrinsic", {
    startsExpr
  }),
  _infer: createKeywordLike("infer", {
    startsExpr
  }),
  _is: createKeywordLike("is", {
    startsExpr
  }),
  _mixins: createKeywordLike("mixins", {
    startsExpr
  }),
  _proto: createKeywordLike("proto", {
    startsExpr
  }),
  _require: createKeywordLike("require", {
    startsExpr
  }),
  _keyof: createKeywordLike("keyof", {
    startsExpr
  }),
  _readonly: createKeywordLike("readonly", {
    startsExpr
  }),
  _unique: createKeywordLike("unique", {
    startsExpr
  }),
  _abstract: createKeywordLike("abstract", {
    startsExpr
  }),
  _declare: createKeywordLike("declare", {
    startsExpr
  }),
  _enum: createKeywordLike("enum", {
    startsExpr
  }),
  _module: createKeywordLike("module", {
    startsExpr
  }),
  _namespace: createKeywordLike("namespace", {
    startsExpr
  }),
  _interface: createKeywordLike("interface", {
    startsExpr
  }),
  _type: createKeywordLike("type", {
    startsExpr
  }),
  _opaque: createKeywordLike("opaque", {
    startsExpr
  }),
  name: createToken("name", {
    startsExpr
  }),
  string: createToken("string", {
    startsExpr
  }),
  num: createToken("num", {
    startsExpr
  }),
  bigint: createToken("bigint", {
    startsExpr
  }),
  decimal: createToken("decimal", {
    startsExpr
  }),
  regexp: createToken("regexp", {
    startsExpr
  }),
  privateName: createToken("#name", {
    startsExpr
  }),
  eof: createToken("eof"),
  jsxName: createToken("jsxName"),
  jsxText: createToken("jsxText", {
    beforeExpr: true
  }),
  jsxTagStart: createToken("jsxTagStart", {
    startsExpr: true
  }),
  jsxTagEnd: createToken("jsxTagEnd"),
  placeholder: createToken("%%", {
    startsExpr: true
  })
};
function tokenIsIdentifier(token) {
  return token >= 93 && token <= 128;
}
function tokenKeywordOrIdentifierIsKeyword(token) {
  return token <= 92;
}
function tokenIsKeywordOrIdentifier(token) {
  return token >= 58 && token <= 128;
}
function tokenIsLiteralPropertyName(token) {
  return token >= 58 && token <= 132;
}
function tokenComesBeforeExpression(token) {
  return tokenBeforeExprs[token];
}
function tokenCanStartExpression(token) {
  return tokenStartsExprs[token];
}
function tokenIsAssignment(token) {
  return token >= 29 && token <= 33;
}
function tokenIsFlowInterfaceOrTypeOrOpaque(token) {
  return token >= 125 && token <= 127;
}
function tokenIsLoop(token) {
  return token >= 90 && token <= 92;
}
function tokenIsKeyword(token) {
  return token >= 58 && token <= 92;
}
function tokenIsOperator(token) {
  return token >= 39 && token <= 59;
}
function tokenIsPostfix(token) {
  return token === 34;
}
function tokenIsPrefix(token) {
  return tokenPrefixes[token];
}
function tokenIsTSTypeOperator(token) {
  return token >= 117 && token <= 119;
}
function tokenIsTSDeclarationStart(token) {
  return token >= 120 && token <= 126;
}
function tokenLabelName(token) {
  return tokenLabels[token];
}
function tokenOperatorPrecedence(token) {
  return tokenBinops[token];
}
function tokenIsRightAssociative(token) {
  return token === 57;
}
function tokenIsTemplate(token) {
  return token >= 24 && token <= 25;
}
function getExportedToken(token) {
  return tokenTypes[token];
}
{
  tokenTypes[8].updateContext = context => {
    context.pop();
  };

  tokenTypes[5].updateContext = tokenTypes[7].updateContext = tokenTypes[23].updateContext = context => {
    context.push(types.brace);
  };

  tokenTypes[22].updateContext = context => {
    if (context[context.length - 1] === types.template) {
      context.pop();
    } else {
      context.push(types.template);
    }
  };

  tokenTypes[138].updateContext = context => {
    context.push(types.j_expr, types.j_oTag);
  };
}

class Position {
  constructor(line, col, index) {
    this.line = void 0;
    this.column = void 0;
    this.index = void 0;
    this.line = line;
    this.column = col;
    this.index = index;
  }

}
class SourceLocation {
  constructor(start, end) {
    this.start = void 0;
    this.end = void 0;
    this.filename = void 0;
    this.identifierName = void 0;
    this.start = start;
    this.end = end;
  }

}
function createPositionWithColumnOffset(position, columnOffset) {
  const {
    line,
    column,
    index
  } = position;
  return new Position(line, column + columnOffset, index + columnOffset);
}

let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

function isInAstralSet(code, set) {
  let pos = 0x10000;

  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }

  return false;
}

function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;

  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }

  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}

const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}

function isIteratorStart(current, next, next2) {
  return current === 64 && next === 64 && isIdentifierStart(next2);
}
const reservedWordLikeSet = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
function canBeReservedWord(word) {
  return reservedWordLikeSet.has(word);
}

const SCOPE_OTHER = 0b000000000,
      SCOPE_PROGRAM = 0b000000001,
      SCOPE_FUNCTION = 0b000000010,
      SCOPE_ARROW = 0b000000100,
      SCOPE_SIMPLE_CATCH = 0b000001000,
      SCOPE_SUPER = 0b000010000,
      SCOPE_DIRECT_SUPER = 0b000100000,
      SCOPE_CLASS = 0b001000000,
      SCOPE_STATIC_BLOCK = 0b010000000,
      SCOPE_TS_MODULE = 0b100000000,
      SCOPE_VAR = SCOPE_PROGRAM | SCOPE_FUNCTION | SCOPE_TS_MODULE;
const BIND_KIND_VALUE = 0b000000000001,
      BIND_KIND_TYPE = 0b000000000010,
      BIND_SCOPE_VAR = 0b000000000100,
      BIND_SCOPE_LEXICAL = 0b000000001000,
      BIND_SCOPE_FUNCTION = 0b000000010000,
      BIND_FLAGS_NONE = 0b000001000000,
      BIND_FLAGS_CLASS = 0b000010000000,
      BIND_FLAGS_TS_ENUM = 0b000100000000,
      BIND_FLAGS_TS_CONST_ENUM = 0b001000000000,
      BIND_FLAGS_TS_EXPORT_ONLY = 0b010000000000,
      BIND_FLAGS_FLOW_DECLARE_FN = 0b100000000000;
const BIND_CLASS = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_CLASS,
      BIND_LEXICAL = BIND_KIND_VALUE | 0 | BIND_SCOPE_LEXICAL | 0,
      BIND_VAR = BIND_KIND_VALUE | 0 | BIND_SCOPE_VAR | 0,
      BIND_FUNCTION = BIND_KIND_VALUE | 0 | BIND_SCOPE_FUNCTION | 0,
      BIND_TS_INTERFACE = 0 | BIND_KIND_TYPE | 0 | BIND_FLAGS_CLASS,
      BIND_TS_TYPE = 0 | BIND_KIND_TYPE | 0 | 0,
      BIND_TS_ENUM = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_TS_ENUM,
      BIND_TS_AMBIENT = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
      BIND_NONE = 0 | 0 | 0 | BIND_FLAGS_NONE,
      BIND_OUTSIDE = BIND_KIND_VALUE | 0 | 0 | BIND_FLAGS_NONE,
      BIND_TS_CONST_ENUM = BIND_TS_ENUM | BIND_FLAGS_TS_CONST_ENUM,
      BIND_TS_NAMESPACE = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY,
      BIND_FLOW_DECLARE_FN = BIND_FLAGS_FLOW_DECLARE_FN;
const CLASS_ELEMENT_FLAG_STATIC = 0b100,
      CLASS_ELEMENT_KIND_GETTER = 0b010,
      CLASS_ELEMENT_KIND_SETTER = 0b001,
      CLASS_ELEMENT_KIND_ACCESSOR = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_KIND_SETTER;
const CLASS_ELEMENT_STATIC_GETTER = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_STATIC_SETTER = CLASS_ELEMENT_KIND_SETTER | CLASS_ELEMENT_FLAG_STATIC,
      CLASS_ELEMENT_INSTANCE_GETTER = CLASS_ELEMENT_KIND_GETTER,
      CLASS_ELEMENT_INSTANCE_SETTER = CLASS_ELEMENT_KIND_SETTER,
      CLASS_ELEMENT_OTHER = 0;

class Scope {
  constructor(flags) {
    this.var = new Set();
    this.lexical = new Set();
    this.functions = new Set();
    this.flags = flags;
  }

}
class ScopeHandler {
  constructor(raise, inModule) {
    this.scopeStack = [];
    this.undefinedExports = new Map();
    this.raise = raise;
    this.inModule = inModule;
  }

  get inFunction() {
    return (this.currentVarScopeFlags() & SCOPE_FUNCTION) > 0;
  }

  get allowSuper() {
    return (this.currentThisScopeFlags() & SCOPE_SUPER) > 0;
  }

  get allowDirectSuper() {
    return (this.currentThisScopeFlags() & SCOPE_DIRECT_SUPER) > 0;
  }

  get inClass() {
    return (this.currentThisScopeFlags() & SCOPE_CLASS) > 0;
  }

  get inClassAndNotInNonArrowFunction() {
    const flags = this.currentThisScopeFlags();
    return (flags & SCOPE_CLASS) > 0 && (flags & SCOPE_FUNCTION) === 0;
  }

  get inStaticBlock() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];

      if (flags & SCOPE_STATIC_BLOCK) {
        return true;
      }

      if (flags & (SCOPE_VAR | SCOPE_CLASS)) {
        return false;
      }
    }
  }

  get inNonArrowFunction() {
    return (this.currentThisScopeFlags() & SCOPE_FUNCTION) > 0;
  }

  get treatFunctionsAsVar() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  }

  createScope(flags) {
    return new Scope(flags);
  }

  enter(flags) {
    this.scopeStack.push(this.createScope(flags));
  }

  exit() {
    this.scopeStack.pop();
  }

  treatFunctionsAsVarInScope(scope) {
    return !!(scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_PROGRAM);
  }

  declareName(name, bindingType, loc) {
    let scope = this.currentScope();

    if (bindingType & BIND_SCOPE_LEXICAL || bindingType & BIND_SCOPE_FUNCTION) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);

      if (bindingType & BIND_SCOPE_FUNCTION) {
        scope.functions.add(name);
      } else {
        scope.lexical.add(name);
      }

      if (bindingType & BIND_SCOPE_LEXICAL) {
        this.maybeExportDefined(scope, name);
      }
    } else if (bindingType & BIND_SCOPE_VAR) {
      for (let i = this.scopeStack.length - 1; i >= 0; --i) {
        scope = this.scopeStack[i];
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        scope.var.add(name);
        this.maybeExportDefined(scope, name);
        if (scope.flags & SCOPE_VAR) break;
      }
    }

    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  maybeExportDefined(scope, name) {
    if (this.inModule && scope.flags & SCOPE_PROGRAM) {
      this.undefinedExports.delete(name);
    }
  }

  checkRedeclarationInScope(scope, name, bindingType, loc) {
    if (this.isRedeclaredInScope(scope, name, bindingType)) {
      this.raise(ErrorMessages.VarRedeclaration, {
        at: loc
      }, name);
    }
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (!(bindingType & BIND_KIND_VALUE)) return false;

    if (bindingType & BIND_SCOPE_LEXICAL) {
      return scope.lexical.has(name) || scope.functions.has(name) || scope.var.has(name);
    }

    if (bindingType & BIND_SCOPE_FUNCTION) {
      return scope.lexical.has(name) || !this.treatFunctionsAsVarInScope(scope) && scope.var.has(name);
    }

    return scope.lexical.has(name) && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical.values().next().value === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.has(name);
  }

  checkLocalExport(id) {
    const {
      name
    } = id;
    const topLevelScope = this.scopeStack[0];

    if (!topLevelScope.lexical.has(name) && !topLevelScope.var.has(name) && !topLevelScope.functions.has(name)) {
      this.undefinedExports.set(name, id.loc.start);
    }
  }

  currentScope() {
    return this.scopeStack[this.scopeStack.length - 1];
  }

  currentVarScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];

      if (flags & SCOPE_VAR) {
        return flags;
      }
    }
  }

  currentThisScopeFlags() {
    for (let i = this.scopeStack.length - 1;; i--) {
      const {
        flags
      } = this.scopeStack[i];

      if (flags & (SCOPE_VAR | SCOPE_CLASS) && !(flags & SCOPE_ARROW)) {
        return flags;
      }
    }
  }

}

class FlowScope extends Scope {
  constructor(...args) {
    super(...args);
    this.declareFunctions = new Set();
  }

}

class FlowScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new FlowScope(flags);
  }

  declareName(name, bindingType, loc) {
    const scope = this.currentScope();

    if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
      this.checkRedeclarationInScope(scope, name, bindingType, loc);
      this.maybeExportDefined(scope, name);
      scope.declareFunctions.add(name);
      return;
    }

    super.declareName(...arguments);
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (super.isRedeclaredInScope(...arguments)) return true;

    if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
      return !scope.declareFunctions.has(name) && (scope.lexical.has(name) || scope.functions.has(name));
    }

    return false;
  }

  checkLocalExport(id) {
    if (!this.scopeStack[0].declareFunctions.has(id.name)) {
      super.checkLocalExport(id);
    }
  }

}

const lineBreak = /\r\n?|[\n\u2028\u2029]/;
const lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code) {
  switch (code) {
    case 10:
    case 13:
    case 8232:
    case 8233:
      return true;

    default:
      return false;
  }
}
const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
const skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y;
const skipWhiteSpaceToLineBreak = new RegExp("(?=(" + skipWhiteSpaceInLine.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
function isWhitespace(code) {
  switch (code) {
    case 0x0009:
    case 0x000b:
    case 0x000c:
    case 32:
    case 160:
    case 5760:
    case 0x2000:
    case 0x2001:
    case 0x2002:
    case 0x2003:
    case 0x2004:
    case 0x2005:
    case 0x2006:
    case 0x2007:
    case 0x2008:
    case 0x2009:
    case 0x200a:
    case 0x202f:
    case 0x205f:
    case 0x3000:
    case 0xfeff:
      return true;

    default:
      return false;
  }
}

class State {
  constructor() {
    this.strict = void 0;
    this.curLine = void 0;
    this.lineStart = void 0;
    this.startLoc = void 0;
    this.endLoc = void 0;
    this.errors = [];
    this.potentialArrowAt = -1;
    this.noArrowAt = [];
    this.noArrowParamsConversionAt = [];
    this.maybeInArrowParameters = false;
    this.inType = false;
    this.noAnonFunctionType = false;
    this.hasFlowComment = false;
    this.isAmbientContext = false;
    this.inAbstractClass = false;
    this.topicContext = {
      maxNumOfResolvableTopics: 0,
      maxTopicIndex: null
    };
    this.soloAwait = false;
    this.inFSharpPipelineDirectBody = false;
    this.labels = [];
    this.decoratorStack = [[]];
    this.comments = [];
    this.commentStack = [];
    this.pos = 0;
    this.type = 135;
    this.value = null;
    this.start = 0;
    this.end = 0;
    this.lastTokEndLoc = null;
    this.lastTokStartLoc = null;
    this.lastTokStart = 0;
    this.context = [types.brace];
    this.canStartJSXElement = true;
    this.containsEsc = false;
    this.strictErrors = new Map();
    this.tokensLength = 0;
  }

  init({
    strictMode,
    sourceType,
    startLine,
    startColumn
  }) {
    this.strict = strictMode === false ? false : strictMode === true ? true : sourceType === "module";
    this.curLine = startLine;
    this.lineStart = -startColumn;
    this.startLoc = this.endLoc = new Position(startLine, startColumn, 0);
  }

  curPosition() {
    return new Position(this.curLine, this.pos - this.lineStart, this.pos);
  }

  clone(skipArrays) {
    const state = new State();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];
      let val = this[key];

      if (!skipArrays && Array.isArray(val)) {
        val = val.slice();
      }

      state[key] = val;
    }

    return state;
  }

}

var _isDigit = function isDigit(code) {
  return code >= 48 && code <= 57;
};
const VALID_REGEX_FLAGS = new Set([103, 109, 115, 105, 121, 117, 100, 118]);
const forbiddenNumericSeparatorSiblings = {
  decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
  hex: [46, 88, 95, 120]
};
const allowedNumericSeparatorSiblings = {};
allowedNumericSeparatorSiblings.bin = [48, 49];
allowedNumericSeparatorSiblings.oct = [...allowedNumericSeparatorSiblings.bin, 50, 51, 52, 53, 54, 55];
allowedNumericSeparatorSiblings.dec = [...allowedNumericSeparatorSiblings.oct, 56, 57];
allowedNumericSeparatorSiblings.hex = [...allowedNumericSeparatorSiblings.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
class Token {
  constructor(state) {
    this.type = state.type;
    this.value = state.value;
    this.start = state.start;
    this.end = state.end;
    this.loc = new SourceLocation(state.startLoc, state.endLoc);
  }

}
class Tokenizer extends ParserError {
  constructor(options, input) {
    super();
    this.isLookahead = void 0;
    this.tokens = [];
    this.state = new State();
    this.state.init(options);
    this.input = input;
    this.length = input.length;
    this.isLookahead = false;
  }

  pushToken(token) {
    this.tokens.length = this.state.tokensLength;
    this.tokens.push(token);
    ++this.state.tokensLength;
  }

  next() {
    this.checkKeywordEscapes();

    if (this.options.tokens) {
      this.pushToken(new Token(this.state));
    }

    this.state.lastTokStart = this.state.start;
    this.state.lastTokEndLoc = this.state.endLoc;
    this.state.lastTokStartLoc = this.state.startLoc;
    this.nextToken();
  }

  eat(type) {
    if (this.match(type)) {
      this.next();
      return true;
    } else {
      return false;
    }
  }

  match(type) {
    return this.state.type === type;
  }

  createLookaheadState(state) {
    return {
      pos: state.pos,
      value: null,
      type: state.type,
      start: state.start,
      end: state.end,
      context: [this.curContext()],
      inType: state.inType,
      startLoc: state.startLoc,
      lastTokEndLoc: state.lastTokEndLoc,
      curLine: state.curLine,
      lineStart: state.lineStart,
      curPosition: state.curPosition
    };
  }

  lookahead() {
    const old = this.state;
    this.state = this.createLookaheadState(old);
    this.isLookahead = true;
    this.nextToken();
    this.isLookahead = false;
    const curr = this.state;
    this.state = old;
    return curr;
  }

  nextTokenStart() {
    return this.nextTokenStartSince(this.state.pos);
  }

  nextTokenStartSince(pos) {
    skipWhiteSpace.lastIndex = pos;
    return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos;
  }

  lookaheadCharCode() {
    return this.input.charCodeAt(this.nextTokenStart());
  }

  codePointAtPos(pos) {
    let cp = this.input.charCodeAt(pos);

    if ((cp & 0xfc00) === 0xd800 && ++pos < this.input.length) {
      const trail = this.input.charCodeAt(pos);

      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }

    return cp;
  }

  setStrict(strict) {
    this.state.strict = strict;

    if (strict) {
      this.state.strictErrors.forEach(({
        message,
        loc
      }) => this.raise(message, {
        at: loc
      }));
      this.state.strictErrors.clear();
    }
  }

  curContext() {
    return this.state.context[this.state.context.length - 1];
  }

  nextToken() {
    this.skipSpace();
    this.state.start = this.state.pos;
    if (!this.isLookahead) this.state.startLoc = this.state.curPosition();

    if (this.state.pos >= this.length) {
      this.finishToken(135);
      return;
    }

    this.getTokenFromCode(this.codePointAtPos(this.state.pos));
  }

  skipBlockComment() {
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    const start = this.state.pos;
    const end = this.input.indexOf("*/", start + 2);

    if (end === -1) {
      throw this.raise(ErrorMessages.UnterminatedComment, {
        at: this.state.curPosition()
      });
    }

    this.state.pos = end + 2;
    lineBreakG.lastIndex = start + 2;

    while (lineBreakG.test(this.input) && lineBreakG.lastIndex <= end) {
      ++this.state.curLine;
      this.state.lineStart = lineBreakG.lastIndex;
    }

    if (this.isLookahead) return;
    const comment = {
      type: "CommentBlock",
      value: this.input.slice(start + 2, end),
      start,
      end: end + 2,
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.options.tokens) this.pushToken(comment);
    return comment;
  }

  skipLineComment(startSkip) {
    const start = this.state.pos;
    let startLoc;
    if (!this.isLookahead) startLoc = this.state.curPosition();
    let ch = this.input.charCodeAt(this.state.pos += startSkip);

    if (this.state.pos < this.length) {
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
    }

    if (this.isLookahead) return;
    const end = this.state.pos;
    const value = this.input.slice(start + startSkip, end);
    const comment = {
      type: "CommentLine",
      value,
      start,
      end,
      loc: new SourceLocation(startLoc, this.state.curPosition())
    };
    if (this.options.tokens) this.pushToken(comment);
    return comment;
  }

  skipSpace() {
    const spaceStart = this.state.pos;
    const comments = [];

    loop: while (this.state.pos < this.length) {
      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 32:
        case 160:
        case 9:
          ++this.state.pos;
          break;

        case 13:
          if (this.input.charCodeAt(this.state.pos + 1) === 10) {
            ++this.state.pos;
          }

        case 10:
        case 8232:
        case 8233:
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          break;

        case 47:
          switch (this.input.charCodeAt(this.state.pos + 1)) {
            case 42:
              {
                const comment = this.skipBlockComment();

                if (comment !== undefined) {
                  this.addComment(comment);
                  if (this.options.attachComment) comments.push(comment);
                }

                break;
              }

            case 47:
              {
                const comment = this.skipLineComment(2);

                if (comment !== undefined) {
                  this.addComment(comment);
                  if (this.options.attachComment) comments.push(comment);
                }

                break;
              }

            default:
              break loop;
          }

          break;

        default:
          if (isWhitespace(ch)) {
            ++this.state.pos;
          } else if (ch === 45 && !this.inModule) {
            const pos = this.state.pos;

            if (this.input.charCodeAt(pos + 1) === 45 && this.input.charCodeAt(pos + 2) === 62 && (spaceStart === 0 || this.state.lineStart > spaceStart)) {
              const comment = this.skipLineComment(3);

              if (comment !== undefined) {
                this.addComment(comment);
                if (this.options.attachComment) comments.push(comment);
              }
            } else {
              break loop;
            }
          } else if (ch === 60 && !this.inModule) {
            const pos = this.state.pos;

            if (this.input.charCodeAt(pos + 1) === 33 && this.input.charCodeAt(pos + 2) === 45 && this.input.charCodeAt(pos + 3) === 45) {
              const comment = this.skipLineComment(4);

              if (comment !== undefined) {
                this.addComment(comment);
                if (this.options.attachComment) comments.push(comment);
              }
            } else {
              break loop;
            }
          } else {
            break loop;
          }

      }
    }

    if (comments.length > 0) {
      const end = this.state.pos;
      const CommentWhitespace = {
        start: spaceStart,
        end,
        comments,
        leadingNode: null,
        trailingNode: null,
        containingNode: null
      };
      this.state.commentStack.push(CommentWhitespace);
    }
  }

  finishToken(type, val) {
    this.state.end = this.state.pos;
    this.state.endLoc = this.state.curPosition();
    const prevType = this.state.type;
    this.state.type = type;
    this.state.value = val;

    if (!this.isLookahead) {
      this.updateContext(prevType);
    }
  }

  replaceToken(type) {
    this.state.type = type;
    this.updateContext();
  }

  readToken_numberSign() {
    if (this.state.pos === 0 && this.readToken_interpreter()) {
      return;
    }

    const nextPos = this.state.pos + 1;
    const next = this.codePointAtPos(nextPos);

    if (next >= 48 && next <= 57) {
      throw this.raise(ErrorMessages.UnexpectedDigitAfterHash, {
        at: this.state.curPosition()
      });
    }

    if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
      this.expectPlugin("recordAndTuple");

      if (this.getPluginOption("recordAndTuple", "syntaxType") !== "hash") {
        throw this.raise(next === 123 ? ErrorMessages.RecordExpressionHashIncorrectStartSyntaxType : ErrorMessages.TupleExpressionHashIncorrectStartSyntaxType, {
          at: this.state.curPosition()
        });
      }

      this.state.pos += 2;

      if (next === 123) {
        this.finishToken(7);
      } else {
        this.finishToken(1);
      }
    } else if (isIdentifierStart(next)) {
      ++this.state.pos;
      this.finishToken(134, this.readWord1(next));
    } else if (next === 92) {
      ++this.state.pos;
      this.finishToken(134, this.readWord1());
    } else {
      this.finishOp(27, 1);
    }
  }

  readToken_dot() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next >= 48 && next <= 57) {
      this.readNumber(true);
      return;
    }

    if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
      this.state.pos += 3;
      this.finishToken(21);
    } else {
      ++this.state.pos;
      this.finishToken(16);
    }
  }

  readToken_slash() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(31, 2);
    } else {
      this.finishOp(56, 1);
    }
  }

  readToken_interpreter() {
    if (this.state.pos !== 0 || this.length < 2) return false;
    let ch = this.input.charCodeAt(this.state.pos + 1);
    if (ch !== 33) return false;
    const start = this.state.pos;
    this.state.pos += 1;

    while (!isNewLine(ch) && ++this.state.pos < this.length) {
      ch = this.input.charCodeAt(this.state.pos);
    }

    const value = this.input.slice(start + 2, this.state.pos);
    this.finishToken(28, value);
    return true;
  }

  readToken_mult_modulo(code) {
    let type = code === 42 ? 55 : 54;
    let width = 1;
    let next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 42 && next === 42) {
      width++;
      next = this.input.charCodeAt(this.state.pos + 2);
      type = 57;
    }

    if (next === 61 && !this.state.inType) {
      width++;
      type = code === 37 ? 33 : 30;
    }

    this.finishOp(type, width);
  }

  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      if (this.input.charCodeAt(this.state.pos + 2) === 61) {
        this.finishOp(30, 3);
      } else {
        this.finishOp(code === 124 ? 41 : 42, 2);
      }

      return;
    }

    if (code === 124) {
      if (next === 62) {
        this.finishOp(39, 2);
        return;
      }

      if (this.hasPlugin("recordAndTuple") && next === 125) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(ErrorMessages.RecordExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
        }

        this.state.pos += 2;
        this.finishToken(9);
        return;
      }

      if (this.hasPlugin("recordAndTuple") && next === 93) {
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
          throw this.raise(ErrorMessages.TupleExpressionBarIncorrectEndSyntaxType, {
            at: this.state.curPosition()
          });
        }

        this.state.pos += 2;
        this.finishToken(4);
        return;
      }
    }

    if (next === 61) {
      this.finishOp(30, 2);
      return;
    }

    this.finishOp(code === 124 ? 43 : 45, 1);
  }

  readToken_caret() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61 && !this.state.inType) {
      this.finishOp(32, 2);
    } else if (next === 94 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "^^"
    }])) {
      this.finishOp(37, 2);
      const lookaheadCh = this.input.codePointAt(this.state.pos);

      if (lookaheadCh === 94) {
        throw this.unexpected();
      }
    } else {
      this.finishOp(44, 1);
    }
  }

  readToken_atSign() {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 64 && this.hasPlugin(["pipelineOperator", {
      proposal: "hack",
      topicToken: "@@"
    }])) {
      this.finishOp(38, 2);
    } else {
      this.finishOp(26, 1);
    }
  }

  readToken_plus_min(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === code) {
      this.finishOp(34, 2);
      return;
    }

    if (next === 61) {
      this.finishOp(30, 2);
    } else {
      this.finishOp(53, 1);
    }
  }

  readToken_lt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);

    if (next === 60) {
      if (this.input.charCodeAt(pos + 2) === 61) {
        this.finishOp(30, 3);
        return;
      }

      this.finishOp(51, 2);
      return;
    }

    if (next === 61) {
      this.finishOp(49, 2);
      return;
    }

    this.finishOp(47, 1);
  }

  readToken_gt() {
    const {
      pos
    } = this.state;
    const next = this.input.charCodeAt(pos + 1);

    if (next === 62) {
      const size = this.input.charCodeAt(pos + 2) === 62 ? 3 : 2;

      if (this.input.charCodeAt(pos + size) === 61) {
        this.finishOp(30, size + 1);
        return;
      }

      this.finishOp(52, size);
      return;
    }

    if (next === 61) {
      this.finishOp(49, 2);
      return;
    }

    this.finishOp(48, 1);
  }

  readToken_eq_excl(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (next === 61) {
      this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
      return;
    }

    if (code === 61 && next === 62) {
      this.state.pos += 2;
      this.finishToken(19);
      return;
    }

    this.finishOp(code === 61 ? 29 : 35, 1);
  }

  readToken_question() {
    const next = this.input.charCodeAt(this.state.pos + 1);
    const next2 = this.input.charCodeAt(this.state.pos + 2);

    if (next === 63) {
      if (next2 === 61) {
        this.finishOp(30, 3);
      } else {
        this.finishOp(40, 2);
      }
    } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
      this.state.pos += 2;
      this.finishToken(18);
    } else {
      ++this.state.pos;
      this.finishToken(17);
    }
  }

  getTokenFromCode(code) {
    switch (code) {
      case 46:
        this.readToken_dot();
        return;

      case 40:
        ++this.state.pos;
        this.finishToken(10);
        return;

      case 41:
        ++this.state.pos;
        this.finishToken(11);
        return;

      case 59:
        ++this.state.pos;
        this.finishToken(13);
        return;

      case 44:
        ++this.state.pos;
        this.finishToken(12);
        return;

      case 91:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(ErrorMessages.TupleExpressionBarIncorrectStartSyntaxType, {
              at: this.state.curPosition()
            });
          }

          this.state.pos += 2;
          this.finishToken(2);
        } else {
          ++this.state.pos;
          this.finishToken(0);
        }

        return;

      case 93:
        ++this.state.pos;
        this.finishToken(3);
        return;

      case 123:
        if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(ErrorMessages.RecordExpressionBarIncorrectStartSyntaxType, {
              at: this.state.curPosition()
            });
          }

          this.state.pos += 2;
          this.finishToken(6);
        } else {
          ++this.state.pos;
          this.finishToken(5);
        }

        return;

      case 125:
        ++this.state.pos;
        this.finishToken(8);
        return;

      case 58:
        if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
          this.finishOp(15, 2);
        } else {
          ++this.state.pos;
          this.finishToken(14);
        }

        return;

      case 63:
        this.readToken_question();
        return;

      case 96:
        this.readTemplateToken();
        return;

      case 48:
        {
          const next = this.input.charCodeAt(this.state.pos + 1);

          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }

          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }

          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }

      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        this.readNumber(false);
        return;

      case 34:
      case 39:
        this.readString(code);
        return;

      case 47:
        this.readToken_slash();
        return;

      case 37:
      case 42:
        this.readToken_mult_modulo(code);
        return;

      case 124:
      case 38:
        this.readToken_pipe_amp(code);
        return;

      case 94:
        this.readToken_caret();
        return;

      case 43:
      case 45:
        this.readToken_plus_min(code);
        return;

      case 60:
        this.readToken_lt();
        return;

      case 62:
        this.readToken_gt();
        return;

      case 61:
      case 33:
        this.readToken_eq_excl(code);
        return;

      case 126:
        this.finishOp(36, 1);
        return;

      case 64:
        this.readToken_atSign();
        return;

      case 35:
        this.readToken_numberSign();
        return;

      case 92:
        this.readWord();
        return;

      default:
        if (isIdentifierStart(code)) {
          this.readWord(code);
          return;
        }

    }

    throw this.raise(ErrorMessages.InvalidOrUnexpectedToken, {
      at: this.state.curPosition()
    }, String.fromCodePoint(code));
  }

  finishOp(type, size) {
    const str = this.input.slice(this.state.pos, this.state.pos + size);
    this.state.pos += size;
    this.finishToken(type, str);
  }

  readRegexp() {
    const startLoc = this.state.startLoc;
    const start = this.state.start + 1;
    let escaped, inClass;
    let {
      pos
    } = this.state;

    for (;; ++pos) {
      if (pos >= this.length) {
        throw this.raise(ErrorMessages.UnterminatedRegExp, {
          at: createPositionWithColumnOffset(startLoc, 1)
        });
      }

      const ch = this.input.charCodeAt(pos);

      if (isNewLine(ch)) {
        throw this.raise(ErrorMessages.UnterminatedRegExp, {
          at: createPositionWithColumnOffset(startLoc, 1)
        });
      }

      if (escaped) {
        escaped = false;
      } else {
        if (ch === 91) {
          inClass = true;
        } else if (ch === 93 && inClass) {
          inClass = false;
        } else if (ch === 47 && !inClass) {
          break;
        }

        escaped = ch === 92;
      }
    }

    const content = this.input.slice(start, pos);
    ++pos;
    let mods = "";

    const nextPos = () => createPositionWithColumnOffset(startLoc, pos + 2 - start);

    while (pos < this.length) {
      const cp = this.codePointAtPos(pos);
      const char = String.fromCharCode(cp);

      if (VALID_REGEX_FLAGS.has(cp)) {
        if (cp === 118) {
          this.expectPlugin("regexpUnicodeSets", nextPos());

          if (mods.includes("u")) {
            this.raise(ErrorMessages.IncompatibleRegExpUVFlags, {
              at: nextPos()
            });
          }
        } else if (cp === 117) {
          if (mods.includes("v")) {
            this.raise(ErrorMessages.IncompatibleRegExpUVFlags, {
              at: nextPos()
            });
          }
        }

        if (mods.includes(char)) {
          this.raise(ErrorMessages.DuplicateRegExpFlags, {
            at: nextPos()
          });
        }
      } else if (isIdentifierChar(cp) || cp === 92) {
        this.raise(ErrorMessages.MalformedRegExpFlags, {
          at: nextPos()
        });
      } else {
        break;
      }

      ++pos;
      mods += char;
    }

    this.state.pos = pos;
    this.finishToken(133, {
      pattern: content,
      flags: mods
    });
  }

  readInt(radix, len, forceLen, allowNumSeparator = true) {
    const start = this.state.pos;
    const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
    const allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
    let invalid = false;
    let total = 0;

    for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
      const code = this.input.charCodeAt(this.state.pos);
      let val;

      if (code === 95) {
        const prev = this.input.charCodeAt(this.state.pos - 1);
        const next = this.input.charCodeAt(this.state.pos + 1);

        if (allowedSiblings.indexOf(next) === -1) {
          this.raise(ErrorMessages.UnexpectedNumericSeparator, {
            at: this.state.curPosition()
          });
        } else if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
          this.raise(ErrorMessages.UnexpectedNumericSeparator, {
            at: this.state.curPosition()
          });
        }

        if (!allowNumSeparator) {
          this.raise(ErrorMessages.NumericSeparatorInEscapeSequence, {
            at: this.state.curPosition()
          });
        }

        ++this.state.pos;
        continue;
      }

      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (_isDigit(code)) {
        val = code - 48;
      } else {
        val = Infinity;
      }

      if (val >= radix) {
        if (this.options.errorRecovery && val <= 9) {
          val = 0;
          this.raise(ErrorMessages.InvalidDigit, {
            at: this.state.curPosition()
          }, radix);
        } else if (forceLen) {
          val = 0;
          invalid = true;
        } else {
          break;
        }
      }

      ++this.state.pos;
      total = total * radix + val;
    }

    if (this.state.pos === start || len != null && this.state.pos - start !== len || invalid) {
      return null;
    }

    return total;
  }

  readRadixNumber(radix) {
    const startLoc = this.state.curPosition();
    let isBigInt = false;
    this.state.pos += 2;
    const val = this.readInt(radix);

    if (val == null) {
      this.raise(ErrorMessages.InvalidDigit, {
        at: createPositionWithColumnOffset(startLoc, 2)
      }, radix);
    }

    const next = this.input.charCodeAt(this.state.pos);

    if (next === 110) {
      ++this.state.pos;
      isBigInt = true;
    } else if (next === 109) {
      throw this.raise(ErrorMessages.InvalidDecimal, {
        at: startLoc
      });
    }

    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(ErrorMessages.NumberIdentifier, {
        at: this.state.curPosition()
      });
    }

    if (isBigInt) {
      const str = this.input.slice(startLoc.index, this.state.pos).replace(/[_n]/g, "");
      this.finishToken(131, str);
      return;
    }

    this.finishToken(130, val);
  }

  readNumber(startsWithDot) {
    const start = this.state.pos;
    const startLoc = this.state.curPosition();
    let isFloat = false;
    let isBigInt = false;
    let isDecimal = false;
    let hasExponent = false;
    let isOctal = false;

    if (!startsWithDot && this.readInt(10) === null) {
      this.raise(ErrorMessages.InvalidNumber, {
        at: this.state.curPosition()
      });
    }

    const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;

    if (hasLeadingZero) {
      const integer = this.input.slice(start, this.state.pos);
      this.recordStrictModeErrors(ErrorMessages.StrictOctalLiteral, startLoc);

      if (!this.state.strict) {
        const underscorePos = integer.indexOf("_");

        if (underscorePos > 0) {
          this.raise(ErrorMessages.ZeroDigitNumericSeparator, {
            at: createPositionWithColumnOffset(startLoc, underscorePos)
          });
        }
      }

      isOctal = hasLeadingZero && !/[89]/.test(integer);
    }

    let next = this.input.charCodeAt(this.state.pos);

    if (next === 46 && !isOctal) {
      ++this.state.pos;
      this.readInt(10);
      isFloat = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if ((next === 69 || next === 101) && !isOctal) {
      next = this.input.charCodeAt(++this.state.pos);

      if (next === 43 || next === 45) {
        ++this.state.pos;
      }

      if (this.readInt(10) === null) {
        this.raise(ErrorMessages.InvalidOrMissingExponent, {
          at: startLoc
        });
      }

      isFloat = true;
      hasExponent = true;
      next = this.input.charCodeAt(this.state.pos);
    }

    if (next === 110) {
      if (isFloat || hasLeadingZero) {
        this.raise(ErrorMessages.InvalidBigIntLiteral, {
          at: startLoc
        });
      }

      ++this.state.pos;
      isBigInt = true;
    }

    if (next === 109) {
      this.expectPlugin("decimal", this.state.curPosition());

      if (hasExponent || hasLeadingZero) {
        this.raise(ErrorMessages.InvalidDecimal, {
          at: startLoc
        });
      }

      ++this.state.pos;
      isDecimal = true;
    }

    if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
      throw this.raise(ErrorMessages.NumberIdentifier, {
        at: this.state.curPosition()
      });
    }

    const str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");

    if (isBigInt) {
      this.finishToken(131, str);
      return;
    }

    if (isDecimal) {
      this.finishToken(132, str);
      return;
    }

    const val = isOctal ? parseInt(str, 8) : parseFloat(str);
    this.finishToken(130, val);
  }

  readCodePoint(throwOnInvalid) {
    const ch = this.input.charCodeAt(this.state.pos);
    let code;

    if (ch === 123) {
      ++this.state.pos;
      code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, throwOnInvalid);
      ++this.state.pos;

      if (code !== null && code > 0x10ffff) {
        if (throwOnInvalid) {
          this.raise(ErrorMessages.InvalidCodePoint, {
            at: this.state.curPosition()
          });
        } else {
          return null;
        }
      }
    } else {
      code = this.readHexChar(4, false, throwOnInvalid);
    }

    return code;
  }

  readString(quote) {
    let out = "",
        chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(ErrorMessages.UnterminatedString, {
          at: this.state.startLoc
        });
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.state.pos;
      } else if (ch === 8232 || ch === 8233) {
        ++this.state.pos;
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
      } else if (isNewLine(ch)) {
        throw this.raise(ErrorMessages.UnterminatedString, {
          at: this.state.startLoc
        });
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    this.finishToken(129, out);
  }

  readTemplateContinuation() {
    if (!this.match(8)) {
      this.unexpected(null, 8);
    }

    this.state.pos--;
    this.readTemplateToken();
  }

  readTemplateToken() {
    let out = "",
        chunkStart = this.state.pos,
        containsInvalid = false;
    ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(ErrorMessages.UnterminatedTemplate, {
          at: createPositionWithColumnOffset(this.state.startLoc, 1)
        });
      }

      const ch = this.input.charCodeAt(this.state.pos);

      if (ch === 96) {
        ++this.state.pos;
        out += this.input.slice(chunkStart, this.state.pos);
        this.finishToken(24, containsInvalid ? null : out);
        return;
      }

      if (ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
        this.state.pos += 2;
        out += this.input.slice(chunkStart, this.state.pos);
        this.finishToken(25, containsInvalid ? null : out);
        return;
      }

      if (ch === 92) {
        out += this.input.slice(chunkStart, this.state.pos);
        const escaped = this.readEscapedChar(true);

        if (escaped === null) {
          containsInvalid = true;
        } else {
          out += escaped;
        }

        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        ++this.state.pos;

        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.state.pos) === 10) {
              ++this.state.pos;
            }

          case 10:
            out += "\n";
            break;

          default:
            out += String.fromCharCode(ch);
            break;
        }

        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }
  }

  recordStrictModeErrors(message, loc) {
    if (this.state.strict && !this.state.strictErrors.has(loc.index)) {
      this.raise(message, {
        at: loc
      });
    } else {
      this.state.strictErrors.set(loc.index, {
        loc,
        message
      });
    }
  }

  readEscapedChar(inTemplate) {
    const throwOnInvalid = !inTemplate;
    const ch = this.input.charCodeAt(++this.state.pos);
    ++this.state.pos;

    switch (ch) {
      case 110:
        return "\n";

      case 114:
        return "\r";

      case 120:
        {
          const code = this.readHexChar(2, false, throwOnInvalid);
          return code === null ? null : String.fromCharCode(code);
        }

      case 117:
        {
          const code = this.readCodePoint(throwOnInvalid);
          return code === null ? null : String.fromCodePoint(code);
        }

      case 116:
        return "\t";

      case 98:
        return "\b";

      case 118:
        return "\u000b";

      case 102:
        return "\f";

      case 13:
        if (this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
        }

      case 10:
        this.state.lineStart = this.state.pos;
        ++this.state.curLine;

      case 8232:
      case 8233:
        return "";

      case 56:
      case 57:
        if (inTemplate) {
          return null;
        } else {
          this.recordStrictModeErrors(ErrorMessages.StrictNumericEscape, createPositionWithColumnOffset(this.state.curPosition(), -1));
        }

      default:
        if (ch >= 48 && ch <= 55) {
          const codePos = createPositionWithColumnOffset(this.state.curPosition(), -1);
          const match = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/);
          let octalStr = match[0];
          let octal = parseInt(octalStr, 8);

          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }

          this.state.pos += octalStr.length - 1;
          const next = this.input.charCodeAt(this.state.pos);

          if (octalStr !== "0" || next === 56 || next === 57) {
            if (inTemplate) {
              return null;
            } else {
              this.recordStrictModeErrors(ErrorMessages.StrictNumericEscape, codePos);
            }
          }

          return String.fromCharCode(octal);
        }

        return String.fromCharCode(ch);
    }
  }

  readHexChar(len, forceLen, throwOnInvalid) {
    const codeLoc = this.state.curPosition();
    const n = this.readInt(16, len, forceLen, false);

    if (n === null) {
      if (throwOnInvalid) {
        this.raise(ErrorMessages.InvalidEscapeSequence, {
          at: codeLoc
        });
      } else {
        this.state.pos = codeLoc.index - 1;
      }
    }

    return n;
  }

  readWord1(firstCode) {
    this.state.containsEsc = false;
    let word = "";
    const start = this.state.pos;
    let chunkStart = this.state.pos;

    if (firstCode !== undefined) {
      this.state.pos += firstCode <= 0xffff ? 1 : 2;
    }

    while (this.state.pos < this.length) {
      const ch = this.codePointAtPos(this.state.pos);

      if (isIdentifierChar(ch)) {
        this.state.pos += ch <= 0xffff ? 1 : 2;
      } else if (ch === 92) {
        this.state.containsEsc = true;
        word += this.input.slice(chunkStart, this.state.pos);
        const escStart = this.state.curPosition();
        const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;

        if (this.input.charCodeAt(++this.state.pos) !== 117) {
          this.raise(ErrorMessages.MissingUnicodeEscape, {
            at: this.state.curPosition()
          });
          chunkStart = this.state.pos - 1;
          continue;
        }

        ++this.state.pos;
        const esc = this.readCodePoint(true);

        if (esc !== null) {
          if (!identifierCheck(esc)) {
            this.raise(ErrorMessages.EscapedCharNotAnIdentifier, {
              at: escStart
            });
          }

          word += String.fromCodePoint(esc);
        }

        chunkStart = this.state.pos;
      } else {
        break;
      }
    }

    return word + this.input.slice(chunkStart, this.state.pos);
  }

  readWord(firstCode) {
    const word = this.readWord1(firstCode);
    const type = keywords$1.get(word);

    if (type !== undefined) {
      this.finishToken(type, tokenLabelName(type));
    } else {
      this.finishToken(128, word);
    }
  }

  checkKeywordEscapes() {
    const {
      type
    } = this.state;

    if (tokenIsKeyword(type) && this.state.containsEsc) {
      this.raise(ErrorMessages.InvalidEscapedReservedWord, {
        at: this.state.startLoc
      }, tokenLabelName(type));
    }
  }

  updateContext(prevType) {}

}

class ClassScope {
  constructor() {
    this.privateNames = new Set();
    this.loneAccessors = new Map();
    this.undefinedPrivateNames = new Map();
  }

}
class ClassScopeHandler {
  constructor(raise) {
    this.stack = [];
    this.undefinedPrivateNames = new Map();
    this.raise = raise;
  }

  current() {
    return this.stack[this.stack.length - 1];
  }

  enter() {
    this.stack.push(new ClassScope());
  }

  exit() {
    const oldClassScope = this.stack.pop();
    const current = this.current();

    for (const [name, loc] of Array.from(oldClassScope.undefinedPrivateNames)) {
      if (current) {
        if (!current.undefinedPrivateNames.has(name)) {
          current.undefinedPrivateNames.set(name, loc);
        }
      } else {
        this.raise(ErrorMessages.InvalidPrivateFieldResolution, {
          at: loc
        }, name);
      }
    }
  }

  declarePrivateName(name, elementType, loc) {
    const {
      privateNames,
      loneAccessors,
      undefinedPrivateNames
    } = this.current();
    let redefined = privateNames.has(name);

    if (elementType & CLASS_ELEMENT_KIND_ACCESSOR) {
      const accessor = redefined && loneAccessors.get(name);

      if (accessor) {
        const oldStatic = accessor & CLASS_ELEMENT_FLAG_STATIC;
        const newStatic = elementType & CLASS_ELEMENT_FLAG_STATIC;
        const oldKind = accessor & CLASS_ELEMENT_KIND_ACCESSOR;
        const newKind = elementType & CLASS_ELEMENT_KIND_ACCESSOR;
        redefined = oldKind === newKind || oldStatic !== newStatic;
        if (!redefined) loneAccessors.delete(name);
      } else if (!redefined) {
        loneAccessors.set(name, elementType);
      }
    }

    if (redefined) {
      this.raise(ErrorMessages.PrivateNameRedeclaration, {
        at: loc
      }, name);
    }

    privateNames.add(name);
    undefinedPrivateNames.delete(name);
  }

  usePrivateName(name, loc) {
    let classScope;

    for (classScope of this.stack) {
      if (classScope.privateNames.has(name)) return;
    }

    if (classScope) {
      classScope.undefinedPrivateNames.set(name, loc);
    } else {
      this.raise(ErrorMessages.InvalidPrivateFieldResolution, {
        at: loc
      }, name);
    }
  }

}

const kExpression = 0,
      kMaybeArrowParameterDeclaration = 1,
      kMaybeAsyncArrowParameterDeclaration = 2,
      kParameterDeclaration = 3;

class ExpressionScope {
  constructor(type = kExpression) {
    this.type = void 0;
    this.type = type;
  }

  canBeArrowParameterDeclaration() {
    return this.type === kMaybeAsyncArrowParameterDeclaration || this.type === kMaybeArrowParameterDeclaration;
  }

  isCertainlyParameterDeclaration() {
    return this.type === kParameterDeclaration;
  }

}

class ArrowHeadParsingScope extends ExpressionScope {
  constructor(type) {
    super(type);
    this.errors = new Map();
  }

  recordDeclarationError(message, loc) {
    this.errors.set(loc.index, {
      message,
      loc
    });
  }

  clearDeclarationError(loc) {
    this.errors.delete(loc.index);
  }

  iterateErrors(iterator) {
    this.errors.forEach(iterator);
  }

}

class ExpressionScopeHandler {
  constructor(raise) {
    this.stack = [new ExpressionScope()];
    this.raise = raise;
  }

  enter(scope) {
    this.stack.push(scope);
  }

  exit() {
    this.stack.pop();
  }

  recordParameterInitializerError(loc, template) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];

    while (!scope.isCertainlyParameterDeclaration()) {
      if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(template, loc);
      } else {
        return;
      }

      scope = stack[--i];
    }

    this.raise(template, {
      at: loc
    });
  }

  recordParenthesizedIdentifierError(template, loc) {
    const {
      stack
    } = this;
    const scope = stack[stack.length - 1];

    if (scope.isCertainlyParameterDeclaration()) {
      this.raise(template, {
        at: loc
      });
    } else if (scope.canBeArrowParameterDeclaration()) {
      scope.recordDeclarationError(template, loc);
    } else {
      return;
    }
  }

  recordAsyncArrowParametersError(template, loc) {
    const {
      stack
    } = this;
    let i = stack.length - 1;
    let scope = stack[i];

    while (scope.canBeArrowParameterDeclaration()) {
      if (scope.type === kMaybeAsyncArrowParameterDeclaration) {
        scope.recordDeclarationError(template, loc);
      }

      scope = stack[--i];
    }
  }

  validateAsPattern() {
    const {
      stack
    } = this;
    const currentScope = stack[stack.length - 1];
    if (!currentScope.canBeArrowParameterDeclaration()) return;
    currentScope.iterateErrors(({
      message,
      loc
    }) => {
      this.raise(message, {
        at: loc
      });
      let i = stack.length - 2;
      let scope = stack[i];

      while (scope.canBeArrowParameterDeclaration()) {
        scope.clearDeclarationError(loc);
        scope = stack[--i];
      }
    });
  }

}
function newParameterDeclarationScope() {
  return new ExpressionScope(kParameterDeclaration);
}
function newArrowHeadScope() {
  return new ArrowHeadParsingScope(kMaybeArrowParameterDeclaration);
}
function newAsyncArrowScope() {
  return new ArrowHeadParsingScope(kMaybeAsyncArrowParameterDeclaration);
}
function newExpressionScope() {
  return new ExpressionScope();
}

const PARAM = 0b0000,
      PARAM_YIELD = 0b0001,
      PARAM_AWAIT = 0b0010,
      PARAM_RETURN = 0b0100,
      PARAM_IN = 0b1000;
class ProductionParameterHandler {
  constructor() {
    this.stacks = [];
  }

  enter(flags) {
    this.stacks.push(flags);
  }

  exit() {
    this.stacks.pop();
  }

  currentFlags() {
    return this.stacks[this.stacks.length - 1];
  }

  get hasAwait() {
    return (this.currentFlags() & PARAM_AWAIT) > 0;
  }

  get hasYield() {
    return (this.currentFlags() & PARAM_YIELD) > 0;
  }

  get hasReturn() {
    return (this.currentFlags() & PARAM_RETURN) > 0;
  }

  get hasIn() {
    return (this.currentFlags() & PARAM_IN) > 0;
  }

}
function functionFlags(isAsync, isGenerator) {
  return (isAsync ? PARAM_AWAIT : 0) | (isGenerator ? PARAM_YIELD : 0);
}

class UtilParser extends Tokenizer {
  addExtra(node, key, value, enumerable = true) {
    if (!node) return;
    const extra = node.extra = node.extra || {};

    if (enumerable) {
      extra[key] = value;
    } else {
      Object.defineProperty(extra, key, {
        enumerable,
        value
      });
    }
  }

  isContextual(token) {
    return this.state.type === token && !this.state.containsEsc;
  }

  isUnparsedContextual(nameStart, name) {
    const nameEnd = nameStart + name.length;

    if (this.input.slice(nameStart, nameEnd) === name) {
      const nextCh = this.input.charCodeAt(nameEnd);
      return !(isIdentifierChar(nextCh) || (nextCh & 0xfc00) === 0xd800);
    }

    return false;
  }

  isLookaheadContextual(name) {
    const next = this.nextTokenStart();
    return this.isUnparsedContextual(next, name);
  }

  eatContextual(token) {
    if (this.isContextual(token)) {
      this.next();
      return true;
    }

    return false;
  }

  expectContextual(token, template) {
    if (!this.eatContextual(token)) {
      if (template != null) {
        throw this.raise(template, {
          at: this.state.startLoc
        });
      }

      throw this.unexpected(null, token);
    }
  }

  canInsertSemicolon() {
    return this.match(135) || this.match(8) || this.hasPrecedingLineBreak();
  }

  hasPrecedingLineBreak() {
    return lineBreak.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
  }

  hasFollowingLineBreak() {
    skipWhiteSpaceToLineBreak.lastIndex = this.state.end;
    return skipWhiteSpaceToLineBreak.test(this.input);
  }

  isLineTerminator() {
    return this.eat(13) || this.canInsertSemicolon();
  }

  semicolon(allowAsi = true) {
    if (allowAsi ? this.isLineTerminator() : this.eat(13)) return;
    this.raise(ErrorMessages.MissingSemicolon, {
      at: this.state.lastTokEndLoc
    });
  }

  expect(type, loc) {
    this.eat(type) || this.unexpected(loc, type);
  }

  assertNoSpace(message = "Unexpected space.") {
    if (this.state.start > this.state.lastTokEndLoc.index) {
      this.raise({
        code: ErrorCodes.SyntaxError,
        reasonCode: "UnexpectedSpace",
        template: message
      }, {
        at: this.state.lastTokEndLoc
      });
    }
  }

  unexpected(loc, type) {
    throw this.raise({
      code: ErrorCodes.SyntaxError,
      reasonCode: "UnexpectedToken",
      template: type != null ? `Unexpected token, expected "${tokenLabelName(type)}"` : "Unexpected token"
    }, {
      at: loc != null ? loc : this.state.startLoc
    });
  }

  getPluginNamesFromConfigs(pluginConfigs) {
    return pluginConfigs.map(c => {
      if (typeof c === "string") {
        return c;
      } else {
        return c[0];
      }
    });
  }

  expectPlugin(pluginConfig, loc) {
    if (!this.hasPlugin(pluginConfig)) {
      throw this.raiseWithData(loc != null ? loc : this.state.startLoc, {
        missingPlugin: this.getPluginNamesFromConfigs([pluginConfig])
      }, `This experimental syntax requires enabling the parser plugin: ${JSON.stringify(pluginConfig)}.`);
    }

    return true;
  }

  expectOnePlugin(pluginConfigs) {
    if (!pluginConfigs.some(c => this.hasPlugin(c))) {
      throw this.raiseWithData(this.state.startLoc, {
        missingPlugin: this.getPluginNamesFromConfigs(pluginConfigs)
      }, `This experimental syntax requires enabling one of the following parser plugin(s): ${pluginConfigs.map(c => JSON.stringify(c)).join(", ")}.`);
    }
  }

  tryParse(fn, oldState = this.state.clone()) {
    const abortSignal = {
      node: null
    };

    try {
      const node = fn((node = null) => {
        abortSignal.node = node;
        throw abortSignal;
      });

      if (this.state.errors.length > oldState.errors.length) {
        const failState = this.state;
        this.state = oldState;
        this.state.tokensLength = failState.tokensLength;
        return {
          node,
          error: failState.errors[oldState.errors.length],
          thrown: false,
          aborted: false,
          failState
        };
      }

      return {
        node,
        error: null,
        thrown: false,
        aborted: false,
        failState: null
      };
    } catch (error) {
      const failState = this.state;
      this.state = oldState;

      if (error instanceof SyntaxError) {
        return {
          node: null,
          error,
          thrown: true,
          aborted: false,
          failState
        };
      }

      if (error === abortSignal) {
        return {
          node: abortSignal.node,
          error: null,
          thrown: false,
          aborted: true,
          failState
        };
      }

      throw error;
    }
  }

  checkExpressionErrors(refExpressionErrors, andThrow) {
    if (!refExpressionErrors) return false;
    const {
      shorthandAssignLoc,
      doubleProtoLoc,
      privateKeyLoc,
      optionalParametersLoc
    } = refExpressionErrors;
    const hasErrors = !!shorthandAssignLoc || !!doubleProtoLoc || !!optionalParametersLoc || !!privateKeyLoc;

    if (!andThrow) {
      return hasErrors;
    }

    if (shorthandAssignLoc != null) {
      this.raise(ErrorMessages.InvalidCoverInitializedName, {
        at: shorthandAssignLoc
      });
    }

    if (doubleProtoLoc != null) {
      this.raise(ErrorMessages.DuplicateProto, {
        at: doubleProtoLoc
      });
    }

    if (privateKeyLoc != null) {
      this.raise(ErrorMessages.UnexpectedPrivateField, {
        at: privateKeyLoc
      });
    }

    if (optionalParametersLoc != null) {
      this.unexpected(optionalParametersLoc);
    }
  }

  isLiteralPropertyName() {
    return tokenIsLiteralPropertyName(this.state.type);
  }

  isPrivateName(node) {
    return node.type === "PrivateName";
  }

  getPrivateNameSV(node) {
    return node.id.name;
  }

  hasPropertyAsPrivateName(node) {
    return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
  }

  isOptionalChain(node) {
    return node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression";
  }

  isObjectProperty(node) {
    return node.type === "ObjectProperty";
  }

  isObjectMethod(node) {
    return node.type === "ObjectMethod";
  }

  initializeScopes(inModule = this.options.sourceType === "module") {
    const oldLabels = this.state.labels;
    this.state.labels = [];
    const oldExportedIdentifiers = this.exportedIdentifiers;
    this.exportedIdentifiers = new Set();
    const oldInModule = this.inModule;
    this.inModule = inModule;
    const oldScope = this.scope;
    const ScopeHandler = this.getScopeHandler();
    this.scope = new ScopeHandler(this.raise.bind(this), this.inModule);
    const oldProdParam = this.prodParam;
    this.prodParam = new ProductionParameterHandler();
    const oldClassScope = this.classScope;
    this.classScope = new ClassScopeHandler(this.raise.bind(this));
    const oldExpressionScope = this.expressionScope;
    this.expressionScope = new ExpressionScopeHandler(this.raise.bind(this));
    return () => {
      this.state.labels = oldLabels;
      this.exportedIdentifiers = oldExportedIdentifiers;
      this.inModule = oldInModule;
      this.scope = oldScope;
      this.prodParam = oldProdParam;
      this.classScope = oldClassScope;
      this.expressionScope = oldExpressionScope;
    };
  }

  enterInitialScopes() {
    let paramFlags = PARAM;

    if (this.inModule) {
      paramFlags |= PARAM_AWAIT;
    }

    this.scope.enter(SCOPE_PROGRAM);
    this.prodParam.enter(paramFlags);
  }

  checkDestructuringPrivate(refExpressionErrors) {
    const {
      privateKeyLoc
    } = refExpressionErrors;

    if (privateKeyLoc !== null) {
      this.expectPlugin("destructuringPrivate", privateKeyLoc);
    }
  }

}
class ExpressionErrors {
  constructor() {
    this.shorthandAssignLoc = null;
    this.doubleProtoLoc = null;
    this.privateKeyLoc = null;
    this.optionalParametersLoc = null;
  }

}

class Node {
  constructor(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    this.loc = new SourceLocation(loc);
    if (parser != null && parser.options.ranges) this.range = [pos, 0];
    if (parser != null && parser.filename) this.loc.filename = parser.filename;
  }

}

const NodePrototype = Node.prototype;
{
  NodePrototype.__clone = function () {
    const newNode = new Node();
    const keys = Object.keys(this);

    for (let i = 0, length = keys.length; i < length; i++) {
      const key = keys[i];

      if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
        newNode[key] = this[key];
      }
    }

    return newNode;
  };
}

function clonePlaceholder(node) {
  return cloneIdentifier(node);
}

function cloneIdentifier(node) {
  const {
    type,
    start,
    end,
    loc,
    range,
    extra,
    name
  } = node;
  const cloned = Object.create(NodePrototype);
  cloned.type = type;
  cloned.start = start;
  cloned.end = end;
  cloned.loc = loc;
  cloned.range = range;
  cloned.extra = extra;
  cloned.name = name;

  if (type === "Placeholder") {
    cloned.expectedNode = node.expectedNode;
  }

  return cloned;
}
function cloneStringLiteral(node) {
  const {
    type,
    start,
    end,
    loc,
    range,
    extra
  } = node;

  if (type === "Placeholder") {
    return clonePlaceholder(node);
  }

  const cloned = Object.create(NodePrototype);
  cloned.type = type;
  cloned.start = start;
  cloned.end = end;
  cloned.loc = loc;
  cloned.range = range;

  if (node.raw !== undefined) {
    cloned.raw = node.raw;
  } else {
    cloned.extra = extra;
  }

  cloned.value = node.value;
  return cloned;
}
class NodeUtils extends UtilParser {
  startNode() {
    return new Node(this, this.state.start, this.state.startLoc);
  }

  startNodeAt(pos, loc) {
    return new Node(this, pos, loc);
  }

  startNodeAtNode(type) {
    return this.startNodeAt(type.start, type.loc.start);
  }

  finishNode(node, type) {
    return this.finishNodeAt(node, type, this.state.lastTokEndLoc);
  }

  finishNodeAt(node, type, endLoc) {

    node.type = type;
    node.end = endLoc.index;
    node.loc.end = endLoc;
    if (this.options.ranges) node.range[1] = endLoc.index;
    if (this.options.attachComment) this.processComment(node);
    return node;
  }

  resetStartLocation(node, start, startLoc) {
    node.start = start;
    node.loc.start = startLoc;
    if (this.options.ranges) node.range[0] = start;
  }

  resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
    node.end = endLoc.index;
    node.loc.end = endLoc;
    if (this.options.ranges) node.range[1] = endLoc.index;
  }

  resetStartLocationFromNode(node, locationNode) {
    this.resetStartLocation(node, locationNode.start, locationNode.loc.start);
  }

}

const reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
const FlowErrors = makeErrorTemplates({
  AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
  AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
  AssignReservedType: "Cannot overwrite reserved type %0.",
  DeclareClassElement: "The `declare` modifier can only appear on class fields.",
  DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
  DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
  EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
  EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
  EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
  EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
  EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
  EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
  EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
  EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
  EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
  EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
  GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
  ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
  InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
  InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
  InexactVariance: "Explicit inexact syntax cannot have variance.",
  InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
  MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
  NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
  NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
  SpreadVariance: "Spread properties cannot have variance.",
  ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
  ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
  ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
  ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
  ThisParamNoDefault: "The `this` parameter may not have a default value.",
  TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
  UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
  UnexpectedReservedType: "Unexpected reserved type %0.",
  UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
  UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
  UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
  UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
  UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
  UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
  UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead.",
  UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
  UnterminatedFlowComment: "Unterminated flow-comment."
}, ErrorCodes.SyntaxError, "flow");

function isEsModuleType(bodyElement) {
  return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
}

function hasTypeImportKind(node) {
  return node.importKind === "type" || node.importKind === "typeof";
}

function isMaybeDefaultImport(type) {
  return tokenIsKeywordOrIdentifier(type) && type !== 97;
}

const exportSuggestions = {
  const: "declare export var",
  let: "declare export var",
  type: "export type",
  interface: "export interface"
};

function partition(list, test) {
  const list1 = [];
  const list2 = [];

  for (let i = 0; i < list.length; i++) {
    (test(list[i], i, list) ? list1 : list2).push(list[i]);
  }

  return [list1, list2];
}

const FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
var flow = (superClass => class extends superClass {
  constructor(...args) {
    super(...args);
    this.flowPragma = undefined;
  }

  getScopeHandler() {
    return FlowScopeHandler;
  }

  shouldParseTypes() {
    return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
  }

  shouldParseEnums() {
    return !!this.getPluginOption("flow", "enums");
  }

  finishToken(type, val) {
    if (type !== 129 && type !== 13 && type !== 28) {
      if (this.flowPragma === undefined) {
        this.flowPragma = null;
      }
    }

    return super.finishToken(type, val);
  }

  addComment(comment) {
    if (this.flowPragma === undefined) {
      const matches = FLOW_PRAGMA_REGEX.exec(comment.value);

      if (!matches) ; else if (matches[1] === "flow") {
        this.flowPragma = "flow";
      } else if (matches[1] === "noflow") {
        this.flowPragma = "noflow";
      } else {
        throw new Error("Unexpected flow pragma");
      }
    }

    return super.addComment(comment);
  }

  flowParseTypeInitialiser(tok) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(tok || 14);
    const type = this.flowParseType();
    this.state.inType = oldInType;
    return type;
  }

  flowParsePredicate() {
    const node = this.startNode();
    const moduloLoc = this.state.startLoc;
    this.next();
    this.expectContextual(107);

    if (this.state.lastTokStart > moduloLoc.index + 1) {
      this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks, {
        at: moduloLoc
      });
    }

    if (this.eat(10)) {
      node.value = this.parseExpression();
      this.expect(11);
      return this.finishNode(node, "DeclaredPredicate");
    } else {
      return this.finishNode(node, "InferredPredicate");
    }
  }

  flowParseTypeAndPredicateInitialiser() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    this.expect(14);
    let type = null;
    let predicate = null;

    if (this.match(54)) {
      this.state.inType = oldInType;
      predicate = this.flowParsePredicate();
    } else {
      type = this.flowParseType();
      this.state.inType = oldInType;

      if (this.match(54)) {
        predicate = this.flowParsePredicate();
      }
    }

    return [type, predicate];
  }

  flowParseDeclareClass(node) {
    this.next();
    this.flowParseInterfaceish(node, true);
    return this.finishNode(node, "DeclareClass");
  }

  flowParseDeclareFunction(node) {
    this.next();
    const id = node.id = this.parseIdentifier();
    const typeNode = this.startNode();
    const typeContainer = this.startNode();

    if (this.match(47)) {
      typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      typeNode.typeParameters = null;
    }

    this.expect(10);
    const tmp = this.flowParseFunctionTypeParams();
    typeNode.params = tmp.params;
    typeNode.rest = tmp.rest;
    typeNode.this = tmp._this;
    this.expect(11);
    [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
    typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
    id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
    this.resetEndLocation(id);
    this.semicolon();
    this.scope.declareName(node.id.name, BIND_FLOW_DECLARE_FN, node.id.loc.start);
    return this.finishNode(node, "DeclareFunction");
  }

  flowParseDeclare(node, insideModule) {
    if (this.match(80)) {
      return this.flowParseDeclareClass(node);
    } else if (this.match(68)) {
      return this.flowParseDeclareFunction(node);
    } else if (this.match(74)) {
      return this.flowParseDeclareVariable(node);
    } else if (this.eatContextual(123)) {
      if (this.match(16)) {
        return this.flowParseDeclareModuleExports(node);
      } else {
        if (insideModule) {
          this.raise(FlowErrors.NestedDeclareModule, {
            at: this.state.lastTokStartLoc
          });
        }

        return this.flowParseDeclareModule(node);
      }
    } else if (this.isContextual(126)) {
      return this.flowParseDeclareTypeAlias(node);
    } else if (this.isContextual(127)) {
      return this.flowParseDeclareOpaqueType(node);
    } else if (this.isContextual(125)) {
      return this.flowParseDeclareInterface(node);
    } else if (this.match(82)) {
      return this.flowParseDeclareExportDeclaration(node, insideModule);
    } else {
      throw this.unexpected();
    }
  }

  flowParseDeclareVariable(node) {
    this.next();
    node.id = this.flowParseTypeAnnotatableIdentifier(true);
    this.scope.declareName(node.id.name, BIND_VAR, node.id.loc.start);
    this.semicolon();
    return this.finishNode(node, "DeclareVariable");
  }

  flowParseDeclareModule(node) {
    this.scope.enter(SCOPE_OTHER);

    if (this.match(129)) {
      node.id = this.parseExprAtom();
    } else {
      node.id = this.parseIdentifier();
    }

    const bodyNode = node.body = this.startNode();
    const body = bodyNode.body = [];
    this.expect(5);

    while (!this.match(8)) {
      let bodyNode = this.startNode();

      if (this.match(83)) {
        this.next();

        if (!this.isContextual(126) && !this.match(87)) {
          this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule, {
            at: this.state.lastTokStartLoc
          });
        }

        this.parseImport(bodyNode);
      } else {
        this.expectContextual(121, FlowErrors.UnsupportedStatementInDeclareModule);
        bodyNode = this.flowParseDeclare(bodyNode, true);
      }

      body.push(bodyNode);
    }

    this.scope.exit();
    this.expect(8);
    this.finishNode(bodyNode, "BlockStatement");
    let kind = null;
    let hasModuleExport = false;
    body.forEach(bodyElement => {
      if (isEsModuleType(bodyElement)) {
        if (kind === "CommonJS") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, {
            node: bodyElement
          });
        }

        kind = "ES";
      } else if (bodyElement.type === "DeclareModuleExports") {
        if (hasModuleExport) {
          this.raise(FlowErrors.DuplicateDeclareModuleExports, {
            node: bodyElement
          });
        }

        if (kind === "ES") {
          this.raise(FlowErrors.AmbiguousDeclareModuleKind, {
            node: bodyElement
          });
        }

        kind = "CommonJS";
        hasModuleExport = true;
      }
    });
    node.kind = kind || "CommonJS";
    return this.finishNode(node, "DeclareModule");
  }

  flowParseDeclareExportDeclaration(node, insideModule) {
    this.expect(82);

    if (this.eat(65)) {
      if (this.match(68) || this.match(80)) {
        node.declaration = this.flowParseDeclare(this.startNode());
      } else {
        node.declaration = this.flowParseType();
        this.semicolon();
      }

      node.default = true;
      return this.finishNode(node, "DeclareExportDeclaration");
    } else {
      if (this.match(75) || this.isLet() || (this.isContextual(126) || this.isContextual(125)) && !insideModule) {
        const label = this.state.value;
        const suggestion = exportSuggestions[label];
        throw this.raise(FlowErrors.UnsupportedDeclareExportKind, {
          at: this.state.startLoc
        }, label, suggestion);
      }

      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(127)) {
        node.declaration = this.flowParseDeclare(this.startNode());
        node.default = false;
        return this.finishNode(node, "DeclareExportDeclaration");
      } else if (this.match(55) || this.match(5) || this.isContextual(125) || this.isContextual(126) || this.isContextual(127)) {
        node = this.parseExport(node);

        if (node.type === "ExportNamedDeclaration") {
          node.type = "ExportDeclaration";
          node.default = false;
          delete node.exportKind;
        }

        node.type = "Declare" + node.type;
        return node;
      }
    }

    throw this.unexpected();
  }

  flowParseDeclareModuleExports(node) {
    this.next();
    this.expectContextual(108);
    node.typeAnnotation = this.flowParseTypeAnnotation();
    this.semicolon();
    return this.finishNode(node, "DeclareModuleExports");
  }

  flowParseDeclareTypeAlias(node) {
    this.next();
    this.flowParseTypeAlias(node);
    node.type = "DeclareTypeAlias";
    return node;
  }

  flowParseDeclareOpaqueType(node) {
    this.next();
    this.flowParseOpaqueType(node, true);
    node.type = "DeclareOpaqueType";
    return node;
  }

  flowParseDeclareInterface(node) {
    this.next();
    this.flowParseInterfaceish(node);
    return this.finishNode(node, "DeclareInterface");
  }

  flowParseInterfaceish(node, isClass = false) {
    node.id = this.flowParseRestrictedIdentifier(!isClass, true);
    this.scope.declareName(node.id.name, isClass ? BIND_FUNCTION : BIND_LEXICAL, node.id.loc.start);

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.extends = [];
    node.implements = [];
    node.mixins = [];

    if (this.eat(81)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (!isClass && this.eat(12));
    }

    if (this.isContextual(114)) {
      this.next();

      do {
        node.mixins.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }

    if (this.isContextual(110)) {
      this.next();

      do {
        node.implements.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }

    node.body = this.flowParseObjectType({
      allowStatic: isClass,
      allowExact: false,
      allowSpread: false,
      allowProto: isClass,
      allowInexact: false
    });
  }

  flowParseInterfaceExtends() {
    const node = this.startNode();
    node.id = this.flowParseQualifiedTypeIdentifier();

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    } else {
      node.typeParameters = null;
    }

    return this.finishNode(node, "InterfaceExtends");
  }

  flowParseInterface(node) {
    this.flowParseInterfaceish(node);
    return this.finishNode(node, "InterfaceDeclaration");
  }

  checkNotUnderscore(word) {
    if (word === "_") {
      this.raise(FlowErrors.UnexpectedReservedUnderscore, {
        at: this.state.startLoc
      });
    }
  }

  checkReservedType(word, startLoc, declaration) {
    if (!reservedTypes.has(word)) return;
    this.raise(declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, {
      at: startLoc
    }, word);
  }

  flowParseRestrictedIdentifier(liberal, declaration) {
    this.checkReservedType(this.state.value, this.state.startLoc, declaration);
    return this.parseIdentifier(liberal);
  }

  flowParseTypeAlias(node) {
    node.id = this.flowParseRestrictedIdentifier(false, true);
    this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.loc.start);

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.right = this.flowParseTypeInitialiser(29);
    this.semicolon();
    return this.finishNode(node, "TypeAlias");
  }

  flowParseOpaqueType(node, declare) {
    this.expectContextual(126);
    node.id = this.flowParseRestrictedIdentifier(true, true);
    this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.loc.start);

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    } else {
      node.typeParameters = null;
    }

    node.supertype = null;

    if (this.match(14)) {
      node.supertype = this.flowParseTypeInitialiser(14);
    }

    node.impltype = null;

    if (!declare) {
      node.impltype = this.flowParseTypeInitialiser(29);
    }

    this.semicolon();
    return this.finishNode(node, "OpaqueType");
  }

  flowParseTypeParameter(requireDefault = false) {
    const nodeStartLoc = this.state.startLoc;
    const node = this.startNode();
    const variance = this.flowParseVariance();
    const ident = this.flowParseTypeAnnotatableIdentifier();
    node.name = ident.name;
    node.variance = variance;
    node.bound = ident.typeAnnotation;

    if (this.match(29)) {
      this.eat(29);
      node.default = this.flowParseType();
    } else {
      if (requireDefault) {
        this.raise(FlowErrors.MissingTypeParamDefault, {
          at: nodeStartLoc
        });
      }
    }

    return this.finishNode(node, "TypeParameter");
  }

  flowParseTypeParameterDeclaration() {
    const oldInType = this.state.inType;
    const node = this.startNode();
    node.params = [];
    this.state.inType = true;

    if (this.match(47) || this.match(138)) {
      this.next();
    } else {
      this.unexpected();
    }

    let defaultRequired = false;

    do {
      const typeParameter = this.flowParseTypeParameter(defaultRequired);
      node.params.push(typeParameter);

      if (typeParameter.default) {
        defaultRequired = true;
      }

      if (!this.match(48)) {
        this.expect(12);
      }
    } while (!this.match(48));

    this.expect(48);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterDeclaration");
  }

  flowParseTypeParameterInstantiation() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expect(47);
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;
    this.state.noAnonFunctionType = false;

    while (!this.match(48)) {
      node.params.push(this.flowParseType());

      if (!this.match(48)) {
        this.expect(12);
      }
    }

    this.state.noAnonFunctionType = oldNoAnonFunctionType;
    this.expect(48);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }

  flowParseTypeParameterInstantiationCallOrNew() {
    const node = this.startNode();
    const oldInType = this.state.inType;
    node.params = [];
    this.state.inType = true;
    this.expect(47);

    while (!this.match(48)) {
      node.params.push(this.flowParseTypeOrImplicitInstantiation());

      if (!this.match(48)) {
        this.expect(12);
      }
    }

    this.expect(48);
    this.state.inType = oldInType;
    return this.finishNode(node, "TypeParameterInstantiation");
  }

  flowParseInterfaceType() {
    const node = this.startNode();
    this.expectContextual(125);
    node.extends = [];

    if (this.eat(81)) {
      do {
        node.extends.push(this.flowParseInterfaceExtends());
      } while (this.eat(12));
    }

    node.body = this.flowParseObjectType({
      allowStatic: false,
      allowExact: false,
      allowSpread: false,
      allowProto: false,
      allowInexact: false
    });
    return this.finishNode(node, "InterfaceTypeAnnotation");
  }

  flowParseObjectPropertyKey() {
    return this.match(130) || this.match(129) ? this.parseExprAtom() : this.parseIdentifier(true);
  }

  flowParseObjectTypeIndexer(node, isStatic, variance) {
    node.static = isStatic;

    if (this.lookahead().type === 14) {
      node.id = this.flowParseObjectPropertyKey();
      node.key = this.flowParseTypeInitialiser();
    } else {
      node.id = null;
      node.key = this.flowParseType();
    }

    this.expect(3);
    node.value = this.flowParseTypeInitialiser();
    node.variance = variance;
    return this.finishNode(node, "ObjectTypeIndexer");
  }

  flowParseObjectTypeInternalSlot(node, isStatic) {
    node.static = isStatic;
    node.id = this.flowParseObjectPropertyKey();
    this.expect(3);
    this.expect(3);

    if (this.match(47) || this.match(10)) {
      node.method = true;
      node.optional = false;
      node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
    } else {
      node.method = false;

      if (this.eat(17)) {
        node.optional = true;
      }

      node.value = this.flowParseTypeInitialiser();
    }

    return this.finishNode(node, "ObjectTypeInternalSlot");
  }

  flowParseObjectTypeMethodish(node) {
    node.params = [];
    node.rest = null;
    node.typeParameters = null;
    node.this = null;

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    this.expect(10);

    if (this.match(78)) {
      node.this = this.flowParseFunctionTypeParam(true);
      node.this.name = null;

      if (!this.match(11)) {
        this.expect(12);
      }
    }

    while (!this.match(11) && !this.match(21)) {
      node.params.push(this.flowParseFunctionTypeParam(false));

      if (!this.match(11)) {
        this.expect(12);
      }
    }

    if (this.eat(21)) {
      node.rest = this.flowParseFunctionTypeParam(false);
    }

    this.expect(11);
    node.returnType = this.flowParseTypeInitialiser();
    return this.finishNode(node, "FunctionTypeAnnotation");
  }

  flowParseObjectTypeCallProperty(node, isStatic) {
    const valueNode = this.startNode();
    node.static = isStatic;
    node.value = this.flowParseObjectTypeMethodish(valueNode);
    return this.finishNode(node, "ObjectTypeCallProperty");
  }

  flowParseObjectType({
    allowStatic,
    allowExact,
    allowSpread,
    allowProto,
    allowInexact
  }) {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const nodeStart = this.startNode();
    nodeStart.callProperties = [];
    nodeStart.properties = [];
    nodeStart.indexers = [];
    nodeStart.internalSlots = [];
    let endDelim;
    let exact;
    let inexact = false;

    if (allowExact && this.match(6)) {
      this.expect(6);
      endDelim = 9;
      exact = true;
    } else {
      this.expect(5);
      endDelim = 8;
      exact = false;
    }

    nodeStart.exact = exact;

    while (!this.match(endDelim)) {
      let isStatic = false;
      let protoStartLoc = null;
      let inexactStartLoc = null;
      const node = this.startNode();

      if (allowProto && this.isContextual(115)) {
        const lookahead = this.lookahead();

        if (lookahead.type !== 14 && lookahead.type !== 17) {
          this.next();
          protoStartLoc = this.state.startLoc;
          allowStatic = false;
        }
      }

      if (allowStatic && this.isContextual(104)) {
        const lookahead = this.lookahead();

        if (lookahead.type !== 14 && lookahead.type !== 17) {
          this.next();
          isStatic = true;
        }
      }

      const variance = this.flowParseVariance();

      if (this.eat(0)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }

        if (this.eat(0)) {
          if (variance) {
            this.unexpected(variance.loc.start);
          }

          nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
        } else {
          nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
        }
      } else if (this.match(10) || this.match(47)) {
        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }

        if (variance) {
          this.unexpected(variance.loc.start);
        }

        nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
      } else {
        let kind = "init";

        if (this.isContextual(98) || this.isContextual(103)) {
          const lookahead = this.lookahead();

          if (tokenIsLiteralPropertyName(lookahead.type)) {
            kind = this.state.value;
            this.next();
          }
        }

        const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);

        if (propOrInexact === null) {
          inexact = true;
          inexactStartLoc = this.state.lastTokStartLoc;
        } else {
          nodeStart.properties.push(propOrInexact);
        }
      }

      this.flowObjectTypeSemicolon();

      if (inexactStartLoc && !this.match(8) && !this.match(9)) {
        this.raise(FlowErrors.UnexpectedExplicitInexactInObject, {
          at: inexactStartLoc
        });
      }
    }

    this.expect(endDelim);

    if (allowSpread) {
      nodeStart.inexact = inexact;
    }

    const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
    this.state.inType = oldInType;
    return out;
  }

  flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact) {
    if (this.eat(21)) {
      const isInexactToken = this.match(12) || this.match(13) || this.match(8) || this.match(9);

      if (isInexactToken) {
        if (!allowSpread) {
          this.raise(FlowErrors.InexactInsideNonObject, {
            at: this.state.lastTokStartLoc
          });
        } else if (!allowInexact) {
          this.raise(FlowErrors.InexactInsideExact, {
            at: this.state.lastTokStartLoc
          });
        }

        if (variance) {
          this.raise(FlowErrors.InexactVariance, {
            node: variance
          });
        }

        return null;
      }

      if (!allowSpread) {
        this.raise(FlowErrors.UnexpectedSpreadType, {
          at: this.state.lastTokStartLoc
        });
      }

      if (protoStartLoc != null) {
        this.unexpected(protoStartLoc);
      }

      if (variance) {
        this.raise(FlowErrors.SpreadVariance, {
          node: variance
        });
      }

      node.argument = this.flowParseType();
      return this.finishNode(node, "ObjectTypeSpreadProperty");
    } else {
      node.key = this.flowParseObjectPropertyKey();
      node.static = isStatic;
      node.proto = protoStartLoc != null;
      node.kind = kind;
      let optional = false;

      if (this.match(47) || this.match(10)) {
        node.method = true;

        if (protoStartLoc != null) {
          this.unexpected(protoStartLoc);
        }

        if (variance) {
          this.unexpected(variance.loc.start);
        }

        node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));

        if (kind === "get" || kind === "set") {
          this.flowCheckGetterSetterParams(node);
        }

        if (!allowSpread && node.key.name === "constructor" && node.value.this) {
          this.raise(FlowErrors.ThisParamBannedInConstructor, {
            node: node.value.this
          });
        }
      } else {
        if (kind !== "init") this.unexpected();
        node.method = false;

        if (this.eat(17)) {
          optional = true;
        }

        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
      }

      node.optional = optional;
      return this.finishNode(node, "ObjectTypeProperty");
    }
  }

  flowCheckGetterSetterParams(property) {
    const paramCount = property.kind === "get" ? 0 : 1;
    const length = property.value.params.length + (property.value.rest ? 1 : 0);

    if (property.value.this) {
      this.raise(property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam, {
        node: property.value.this
      });
    }

    if (length !== paramCount) {
      this.raise(property.kind === "get" ? ErrorMessages.BadGetterArity : ErrorMessages.BadSetterArity, {
        node: property
      });
    }

    if (property.kind === "set" && property.value.rest) {
      this.raise(ErrorMessages.BadSetterRestParameter, {
        node: property
      });
    }
  }

  flowObjectTypeSemicolon() {
    if (!this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9)) {
      this.unexpected();
    }
  }

  flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
    startPos = startPos || this.state.start;
    startLoc = startLoc || this.state.startLoc;
    let node = id || this.flowParseRestrictedIdentifier(true);

    while (this.eat(16)) {
      const node2 = this.startNodeAt(startPos, startLoc);
      node2.qualification = node;
      node2.id = this.flowParseRestrictedIdentifier(true);
      node = this.finishNode(node2, "QualifiedTypeIdentifier");
    }

    return node;
  }

  flowParseGenericType(startPos, startLoc, id) {
    const node = this.startNodeAt(startPos, startLoc);
    node.typeParameters = null;
    node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterInstantiation();
    }

    return this.finishNode(node, "GenericTypeAnnotation");
  }

  flowParseTypeofType() {
    const node = this.startNode();
    this.expect(87);
    node.argument = this.flowParsePrimaryType();
    return this.finishNode(node, "TypeofTypeAnnotation");
  }

  flowParseTupleType() {
    const node = this.startNode();
    node.types = [];
    this.expect(0);

    while (this.state.pos < this.length && !this.match(3)) {
      node.types.push(this.flowParseType());
      if (this.match(3)) break;
      this.expect(12);
    }

    this.expect(3);
    return this.finishNode(node, "TupleTypeAnnotation");
  }

  flowParseFunctionTypeParam(first) {
    let name = null;
    let optional = false;
    let typeAnnotation = null;
    const node = this.startNode();
    const lh = this.lookahead();
    const isThis = this.state.type === 78;

    if (lh.type === 14 || lh.type === 17) {
      if (isThis && !first) {
        this.raise(FlowErrors.ThisParamMustBeFirst, {
          node
        });
      }

      name = this.parseIdentifier(isThis);

      if (this.eat(17)) {
        optional = true;

        if (isThis) {
          this.raise(FlowErrors.ThisParamMayNotBeOptional, {
            node
          });
        }
      }

      typeAnnotation = this.flowParseTypeInitialiser();
    } else {
      typeAnnotation = this.flowParseType();
    }

    node.name = name;
    node.optional = optional;
    node.typeAnnotation = typeAnnotation;
    return this.finishNode(node, "FunctionTypeParam");
  }

  reinterpretTypeAsFunctionTypeParam(type) {
    const node = this.startNodeAt(type.start, type.loc.start);
    node.name = null;
    node.optional = false;
    node.typeAnnotation = type;
    return this.finishNode(node, "FunctionTypeParam");
  }

  flowParseFunctionTypeParams(params = []) {
    let rest = null;
    let _this = null;

    if (this.match(78)) {
      _this = this.flowParseFunctionTypeParam(true);
      _this.name = null;

      if (!this.match(11)) {
        this.expect(12);
      }
    }

    while (!this.match(11) && !this.match(21)) {
      params.push(this.flowParseFunctionTypeParam(false));

      if (!this.match(11)) {
        this.expect(12);
      }
    }

    if (this.eat(21)) {
      rest = this.flowParseFunctionTypeParam(false);
    }

    return {
      params,
      rest,
      _this
    };
  }

  flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
    switch (id.name) {
      case "any":
        return this.finishNode(node, "AnyTypeAnnotation");

      case "bool":
      case "boolean":
        return this.finishNode(node, "BooleanTypeAnnotation");

      case "mixed":
        return this.finishNode(node, "MixedTypeAnnotation");

      case "empty":
        return this.finishNode(node, "EmptyTypeAnnotation");

      case "number":
        return this.finishNode(node, "NumberTypeAnnotation");

      case "string":
        return this.finishNode(node, "StringTypeAnnotation");

      case "symbol":
        return this.finishNode(node, "SymbolTypeAnnotation");

      default:
        this.checkNotUnderscore(id.name);
        return this.flowParseGenericType(startPos, startLoc, id);
    }
  }

  flowParsePrimaryType() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const node = this.startNode();
    let tmp;
    let type;
    let isGroupedType = false;
    const oldNoAnonFunctionType = this.state.noAnonFunctionType;

    switch (this.state.type) {
      case 5:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: true,
          allowProto: false,
          allowInexact: true
        });

      case 6:
        return this.flowParseObjectType({
          allowStatic: false,
          allowExact: true,
          allowSpread: true,
          allowProto: false,
          allowInexact: false
        });

      case 0:
        this.state.noAnonFunctionType = false;
        type = this.flowParseTupleType();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        return type;

      case 47:
        node.typeParameters = this.flowParseTypeParameterDeclaration();
        this.expect(10);
        tmp = this.flowParseFunctionTypeParams();
        node.params = tmp.params;
        node.rest = tmp.rest;
        node.this = tmp._this;
        this.expect(11);
        this.expect(19);
        node.returnType = this.flowParseType();
        return this.finishNode(node, "FunctionTypeAnnotation");

      case 10:
        this.next();

        if (!this.match(11) && !this.match(21)) {
          if (tokenIsIdentifier(this.state.type) || this.match(78)) {
            const token = this.lookahead().type;
            isGroupedType = token !== 17 && token !== 14;
          } else {
            isGroupedType = true;
          }
        }

        if (isGroupedType) {
          this.state.noAnonFunctionType = false;
          type = this.flowParseType();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;

          if (this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) {
            this.expect(11);
            return type;
          } else {
            this.eat(12);
          }
        }

        if (type) {
          tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
        } else {
          tmp = this.flowParseFunctionTypeParams();
        }

        node.params = tmp.params;
        node.rest = tmp.rest;
        node.this = tmp._this;
        this.expect(11);
        this.expect(19);
        node.returnType = this.flowParseType();
        node.typeParameters = null;
        return this.finishNode(node, "FunctionTypeAnnotation");

      case 129:
        return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");

      case 85:
      case 86:
        node.value = this.match(85);
        this.next();
        return this.finishNode(node, "BooleanLiteralTypeAnnotation");

      case 53:
        if (this.state.value === "-") {
          this.next();

          if (this.match(130)) {
            return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", node);
          }

          if (this.match(131)) {
            return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", node);
          }

          throw this.raise(FlowErrors.UnexpectedSubtractionOperand, {
            at: this.state.startLoc
          });
        }

        throw this.unexpected();

      case 130:
        return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");

      case 131:
        return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");

      case 88:
        this.next();
        return this.finishNode(node, "VoidTypeAnnotation");

      case 84:
        this.next();
        return this.finishNode(node, "NullLiteralTypeAnnotation");

      case 78:
        this.next();
        return this.finishNode(node, "ThisTypeAnnotation");

      case 55:
        this.next();
        return this.finishNode(node, "ExistsTypeAnnotation");

      case 87:
        return this.flowParseTypeofType();

      default:
        if (tokenIsKeyword(this.state.type)) {
          const label = tokenLabelName(this.state.type);
          this.next();
          return super.createIdentifier(node, label);
        } else if (tokenIsIdentifier(this.state.type)) {
          if (this.isContextual(125)) {
            return this.flowParseInterfaceType();
          }

          return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());
        }

    }

    throw this.unexpected();
  }

  flowParsePostfixType() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let type = this.flowParsePrimaryType();
    let seenOptionalIndexedAccess = false;

    while ((this.match(0) || this.match(18)) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startPos, startLoc);
      const optional = this.eat(18);
      seenOptionalIndexedAccess = seenOptionalIndexedAccess || optional;
      this.expect(0);

      if (!optional && this.match(3)) {
        node.elementType = type;
        this.next();
        type = this.finishNode(node, "ArrayTypeAnnotation");
      } else {
        node.objectType = type;
        node.indexType = this.flowParseType();
        this.expect(3);

        if (seenOptionalIndexedAccess) {
          node.optional = optional;
          type = this.finishNode(node, "OptionalIndexedAccessType");
        } else {
          type = this.finishNode(node, "IndexedAccessType");
        }
      }
    }

    return type;
  }

  flowParsePrefixType() {
    const node = this.startNode();

    if (this.eat(17)) {
      node.typeAnnotation = this.flowParsePrefixType();
      return this.finishNode(node, "NullableTypeAnnotation");
    } else {
      return this.flowParsePostfixType();
    }
  }

  flowParseAnonFunctionWithoutParens() {
    const param = this.flowParsePrefixType();

    if (!this.state.noAnonFunctionType && this.eat(19)) {
      const node = this.startNodeAt(param.start, param.loc.start);
      node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
      node.rest = null;
      node.this = null;
      node.returnType = this.flowParseType();
      node.typeParameters = null;
      return this.finishNode(node, "FunctionTypeAnnotation");
    }

    return param;
  }

  flowParseIntersectionType() {
    const node = this.startNode();
    this.eat(45);
    const type = this.flowParseAnonFunctionWithoutParens();
    node.types = [type];

    while (this.eat(45)) {
      node.types.push(this.flowParseAnonFunctionWithoutParens());
    }

    return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
  }

  flowParseUnionType() {
    const node = this.startNode();
    this.eat(43);
    const type = this.flowParseIntersectionType();
    node.types = [type];

    while (this.eat(43)) {
      node.types.push(this.flowParseIntersectionType());
    }

    return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
  }

  flowParseType() {
    const oldInType = this.state.inType;
    this.state.inType = true;
    const type = this.flowParseUnionType();
    this.state.inType = oldInType;
    return type;
  }

  flowParseTypeOrImplicitInstantiation() {
    if (this.state.type === 128 && this.state.value === "_") {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const node = this.parseIdentifier();
      return this.flowParseGenericType(startPos, startLoc, node);
    } else {
      return this.flowParseType();
    }
  }

  flowParseTypeAnnotation() {
    const node = this.startNode();
    node.typeAnnotation = this.flowParseTypeInitialiser();
    return this.finishNode(node, "TypeAnnotation");
  }

  flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
    const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();

    if (this.match(14)) {
      ident.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(ident);
    }

    return ident;
  }

  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
    return node.expression;
  }

  flowParseVariance() {
    let variance = null;

    if (this.match(53)) {
      variance = this.startNode();

      if (this.state.value === "+") {
        variance.kind = "plus";
      } else {
        variance.kind = "minus";
      }

      this.next();
      this.finishNode(variance, "Variance");
    }

    return variance;
  }

  parseFunctionBody(node, allowExpressionBody, isMethod = false) {
    if (allowExpressionBody) {
      return this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
    }

    return super.parseFunctionBody(node, false, isMethod);
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(14)) {
      const typeNode = this.startNode();
      [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
      node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
    }

    super.parseFunctionBodyAndFinish(node, type, isMethod);
  }

  parseStatement(context, topLevel) {
    if (this.state.strict && this.isContextual(125)) {
      const lookahead = this.lookahead();

      if (tokenIsKeywordOrIdentifier(lookahead.type)) {
        const node = this.startNode();
        this.next();
        return this.flowParseInterface(node);
      }
    } else if (this.shouldParseEnums() && this.isContextual(122)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }

    const stmt = super.parseStatement(context, topLevel);

    if (this.flowPragma === undefined && !this.isValidDirective(stmt)) {
      this.flowPragma = null;
    }

    return stmt;
  }

  parseExpressionStatement(node, expr) {
    if (expr.type === "Identifier") {
      if (expr.name === "declare") {
        if (this.match(80) || tokenIsIdentifier(this.state.type) || this.match(68) || this.match(74) || this.match(82)) {
          return this.flowParseDeclare(node);
        }
      } else if (tokenIsIdentifier(this.state.type)) {
        if (expr.name === "interface") {
          return this.flowParseInterface(node);
        } else if (expr.name === "type") {
          return this.flowParseTypeAlias(node);
        } else if (expr.name === "opaque") {
          return this.flowParseOpaqueType(node, false);
        }
      }
    }

    return super.parseExpressionStatement(node, expr);
  }

  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;

    if (tokenIsFlowInterfaceOrTypeOrOpaque(type) || this.shouldParseEnums() && type === 122) {
      return !this.state.containsEsc;
    }

    return super.shouldParseExportDeclaration();
  }

  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;

    if (tokenIsFlowInterfaceOrTypeOrOpaque(type) || this.shouldParseEnums() && type === 122) {
      return this.state.containsEsc;
    }

    return super.isExportDefaultSpecifier();
  }

  parseExportDefaultExpression() {
    if (this.shouldParseEnums() && this.isContextual(122)) {
      const node = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(node);
    }

    return super.parseExportDefaultExpression();
  }

  parseConditional(expr, startPos, startLoc, refExpressionErrors) {
    if (!this.match(17)) return expr;

    if (this.state.maybeInArrowParameters) {
      const nextCh = this.lookaheadCharCode();

      if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
        this.setOptionalParametersError(refExpressionErrors);
        return expr;
      }
    }

    this.expect(17);
    const state = this.state.clone();
    const originalNoArrowAt = this.state.noArrowAt;
    const node = this.startNodeAt(startPos, startLoc);
    let {
      consequent,
      failed
    } = this.tryParseConditionalConsequent();
    let [valid, invalid] = this.getArrowLikeExpressions(consequent);

    if (failed || invalid.length > 0) {
      const noArrowAt = [...originalNoArrowAt];

      if (invalid.length > 0) {
        this.state = state;
        this.state.noArrowAt = noArrowAt;

        for (let i = 0; i < invalid.length; i++) {
          noArrowAt.push(invalid[i].start);
        }

        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
        [valid, invalid] = this.getArrowLikeExpressions(consequent);
      }

      if (failed && valid.length > 1) {
        this.raise(FlowErrors.AmbiguousConditionalArrow, {
          at: state.startLoc
        });
      }

      if (failed && valid.length === 1) {
        this.state = state;
        noArrowAt.push(valid[0].start);
        this.state.noArrowAt = noArrowAt;
        ({
          consequent,
          failed
        } = this.tryParseConditionalConsequent());
      }
    }

    this.getArrowLikeExpressions(consequent, true);
    this.state.noArrowAt = originalNoArrowAt;
    this.expect(14);
    node.test = expr;
    node.consequent = consequent;
    node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(undefined, undefined));
    return this.finishNode(node, "ConditionalExpression");
  }

  tryParseConditionalConsequent() {
    this.state.noArrowParamsConversionAt.push(this.state.start);
    const consequent = this.parseMaybeAssignAllowIn();
    const failed = !this.match(14);
    this.state.noArrowParamsConversionAt.pop();
    return {
      consequent,
      failed
    };
  }

  getArrowLikeExpressions(node, disallowInvalid) {
    const stack = [node];
    const arrows = [];

    while (stack.length !== 0) {
      const node = stack.pop();

      if (node.type === "ArrowFunctionExpression") {
        if (node.typeParameters || !node.returnType) {
          this.finishArrowValidation(node);
        } else {
          arrows.push(node);
        }

        stack.push(node.body);
      } else if (node.type === "ConditionalExpression") {
        stack.push(node.consequent);
        stack.push(node.alternate);
      }
    }

    if (disallowInvalid) {
      arrows.forEach(node => this.finishArrowValidation(node));
      return [arrows, []];
    }

    return partition(arrows, node => node.params.every(param => this.isAssignable(param, true)));
  }

  finishArrowValidation(node) {
    var _node$extra;

    this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingCommaLoc, false);
    this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
    super.checkParams(node, false, true);
    this.scope.exit();
  }

  forwardNoArrowParamsConversionAt(node, parse) {
    let result;

    if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      result = parse();
      this.state.noArrowParamsConversionAt.pop();
    } else {
      result = parse();
    }

    return result;
  }

  parseParenItem(node, startPos, startLoc) {
    node = super.parseParenItem(node, startPos, startLoc);

    if (this.eat(17)) {
      node.optional = true;
      this.resetEndLocation(node);
    }

    if (this.match(14)) {
      const typeCastNode = this.startNodeAt(startPos, startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TypeCastExpression");
    }

    return node;
  }

  assertModuleNodeAllowed(node) {
    if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
      return;
    }

    super.assertModuleNodeAllowed(node);
  }

  parseExport(node) {
    const decl = super.parseExport(node);

    if (decl.type === "ExportNamedDeclaration" || decl.type === "ExportAllDeclaration") {
      decl.exportKind = decl.exportKind || "value";
    }

    return decl;
  }

  parseExportDeclaration(node) {
    if (this.isContextual(126)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();

      if (this.match(5)) {
        node.specifiers = this.parseExportSpecifiers(true);
        this.parseExportFrom(node);
        return null;
      } else {
        return this.flowParseTypeAlias(declarationNode);
      }
    } else if (this.isContextual(127)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseOpaqueType(declarationNode, false);
    } else if (this.isContextual(125)) {
      node.exportKind = "type";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseInterface(declarationNode);
    } else if (this.shouldParseEnums() && this.isContextual(122)) {
      node.exportKind = "value";
      const declarationNode = this.startNode();
      this.next();
      return this.flowParseEnumDeclaration(declarationNode);
    } else {
      return super.parseExportDeclaration(node);
    }
  }

  eatExportStar(node) {
    if (super.eatExportStar(...arguments)) return true;

    if (this.isContextual(126) && this.lookahead().type === 55) {
      node.exportKind = "type";
      this.next();
      this.next();
      return true;
    }

    return false;
  }

  maybeParseExportNamespaceSpecifier(node) {
    const {
      startLoc
    } = this.state;
    const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);

    if (hasNamespace && node.exportKind === "type") {
      this.unexpected(startLoc);
    }

    return hasNamespace;
  }

  parseClassId(node, isStatement, optionalId) {
    super.parseClassId(node, isStatement, optionalId);

    if (this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }
  }

  parseClassMember(classBody, member, state) {
    const {
      startLoc
    } = this.state;

    if (this.isContextual(121)) {
      if (this.parseClassMemberFromModifier(classBody, member)) {
        return;
      }

      member.declare = true;
    }

    super.parseClassMember(classBody, member, state);

    if (member.declare) {
      if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
        this.raise(FlowErrors.DeclareClassElement, {
          at: startLoc
        });
      } else if (member.value) {
        this.raise(FlowErrors.DeclareClassFieldInitializer, {
          node: member.value
        });
      }
    }
  }

  isIterator(word) {
    return word === "iterator" || word === "asyncIterator";
  }

  readIterator() {
    const word = super.readWord1();
    const fullWord = "@@" + word;

    if (!this.isIterator(word) || !this.state.inType) {
      this.raise(ErrorMessages.InvalidIdentifier, {
        at: this.state.curPosition()
      }, fullWord);
    }

    this.finishToken(128, fullWord);
  }

  getTokenFromCode(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 123 && next === 124) {
      return this.finishOp(6, 2);
    } else if (this.state.inType && (code === 62 || code === 60)) {
      return this.finishOp(code === 62 ? 48 : 47, 1);
    } else if (this.state.inType && code === 63) {
      if (next === 46) {
        return this.finishOp(18, 2);
      }

      return this.finishOp(17, 1);
    } else if (isIteratorStart(code, next, this.input.charCodeAt(this.state.pos + 2))) {
      this.state.pos += 2;
      return this.readIterator();
    } else {
      return super.getTokenFromCode(code);
    }
  }

  isAssignable(node, isBinding) {
    if (node.type === "TypeCastExpression") {
      return this.isAssignable(node.expression, isBinding);
    } else {
      return super.isAssignable(node, isBinding);
    }
  }

  toAssignable(node, isLHS = false) {
    if (node.type === "TypeCastExpression") {
      return super.toAssignable(this.typeCastToParameter(node), isLHS);
    } else {
      return super.toAssignable(node, isLHS);
    }
  }

  toAssignableList(exprList, trailingCommaLoc, isLHS) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];

      if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
        exprList[i] = this.typeCastToParameter(expr);
      }
    }

    return super.toAssignableList(exprList, trailingCommaLoc, isLHS);
  }

  toReferencedList(exprList, isParenthesizedExpr) {
    for (let i = 0; i < exprList.length; i++) {
      var _expr$extra;

      const expr = exprList[i];

      if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) != null && _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
        this.raise(FlowErrors.TypeCastInPattern, {
          node: expr.typeAnnotation
        });
      }
    }

    return exprList;
  }

  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    const node = super.parseArrayLike(close, canBePattern, isTuple, refExpressionErrors);

    if (canBePattern && !this.state.maybeInArrowParameters) {
      this.toReferencedList(node.elements);
    }

    return node;
  }

  checkLVal(expr, ...args) {
    if (expr.type !== "TypeCastExpression") {
      return super.checkLVal(expr, ...args);
    }
  }

  parseClassProperty(node) {
    if (this.match(14)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }

    return super.parseClassProperty(node);
  }

  parseClassPrivateProperty(node) {
    if (this.match(14)) {
      node.typeAnnotation = this.flowParseTypeAnnotation();
    }

    return super.parseClassPrivateProperty(node);
  }

  isClassMethod() {
    return this.match(47) || super.isClassMethod();
  }

  isClassProperty() {
    return this.match(14) || super.isClassProperty();
  }

  isNonstaticConstructor(method) {
    return !this.match(14) && super.isNonstaticConstructor(method);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    if (method.variance) {
      this.unexpected(method.variance.loc.start);
    }

    delete method.variance;

    if (this.match(47)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);

    if (method.params && isConstructor) {
      const params = method.params;

      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, {
          node: method
        });
      }
    } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
      const params = method.value.params;

      if (params.length > 0 && this.isThisParam(params[0])) {
        this.raise(FlowErrors.ThisParamBannedInConstructor, {
          node: method
        });
      }
    }
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    if (method.variance) {
      this.unexpected(method.variance.loc.start);
    }

    delete method.variance;

    if (this.match(47)) {
      method.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }

  parseClassSuper(node) {
    super.parseClassSuper(node);

    if (node.superClass && this.match(47)) {
      node.superTypeParameters = this.flowParseTypeParameterInstantiation();
    }

    if (this.isContextual(110)) {
      this.next();
      const implemented = node.implements = [];

      do {
        const node = this.startNode();
        node.id = this.flowParseRestrictedIdentifier(true);

        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }

        implemented.push(this.finishNode(node, "ClassImplements"));
      } while (this.eat(12));
    }
  }

  checkGetterSetterParams(method) {
    super.checkGetterSetterParams(method);
    const params = this.getObjectOrClassMethodParams(method);

    if (params.length > 0) {
      const param = params[0];

      if (this.isThisParam(param) && method.kind === "get") {
        this.raise(FlowErrors.GetterMayNotHaveThisParam, {
          node: param
        });
      } else if (this.isThisParam(param)) {
        this.raise(FlowErrors.SetterMayNotHaveThisParam, {
          node: param
        });
      }
    }
  }

  parsePropertyNamePrefixOperator(node) {
    node.variance = this.flowParseVariance();
  }

  parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    if (prop.variance) {
      this.unexpected(prop.variance.loc.start);
    }

    delete prop.variance;
    let typeParameters;

    if (this.match(47) && !isAccessor) {
      typeParameters = this.flowParseTypeParameterDeclaration();
      if (!this.match(10)) this.unexpected();
    }

    super.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);

    if (typeParameters) {
      (prop.value || prop).typeParameters = typeParameters;
    }
  }

  parseAssignableListItemTypes(param) {
    if (this.eat(17)) {
      if (param.type !== "Identifier") {
        this.raise(FlowErrors.PatternIsOptional, {
          node: param
        });
      }

      if (this.isThisParam(param)) {
        this.raise(FlowErrors.ThisParamMayNotBeOptional, {
          node: param
        });
      }

      param.optional = true;
    }

    if (this.match(14)) {
      param.typeAnnotation = this.flowParseTypeAnnotation();
    } else if (this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamAnnotationRequired, {
        node: param
      });
    }

    if (this.match(29) && this.isThisParam(param)) {
      this.raise(FlowErrors.ThisParamNoDefault, {
        node: param
      });
    }

    this.resetEndLocation(param);
    return param;
  }

  parseMaybeDefault(startPos, startLoc, left) {
    const node = super.parseMaybeDefault(startPos, startLoc, left);

    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(FlowErrors.TypeBeforeInitializer, {
        node: node.typeAnnotation
      });
    }

    return node;
  }

  shouldParseDefaultImport(node) {
    if (!hasTypeImportKind(node)) {
      return super.shouldParseDefaultImport(node);
    }

    return isMaybeDefaultImport(this.state.type);
  }

  parseImportSpecifierLocal(node, specifier, type, contextDescription) {
    specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
    this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
    node.specifiers.push(this.finishNode(specifier, type));
  }

  maybeParseDefaultImportSpecifier(node) {
    node.importKind = "value";
    let kind = null;

    if (this.match(87)) {
      kind = "typeof";
    } else if (this.isContextual(126)) {
      kind = "type";
    }

    if (kind) {
      const lh = this.lookahead();
      const {
        type
      } = lh;

      if (kind === "type" && type === 55) {
        this.unexpected(null, lh.type);
      }

      if (isMaybeDefaultImport(type) || type === 5 || type === 55) {
        this.next();
        node.importKind = kind;
      }
    }

    return super.maybeParseDefaultImportSpecifier(node);
  }

  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly) {
    const firstIdent = specifier.imported;
    let specifierTypeKind = null;

    if (firstIdent.type === "Identifier") {
      if (firstIdent.name === "type") {
        specifierTypeKind = "type";
      } else if (firstIdent.name === "typeof") {
        specifierTypeKind = "typeof";
      }
    }

    let isBinding = false;

    if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
      const as_ident = this.parseIdentifier(true);

      if (specifierTypeKind !== null && !tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = as_ident;
        specifier.importKind = specifierTypeKind;
        specifier.local = cloneIdentifier(as_ident);
      } else {
        specifier.imported = firstIdent;
        specifier.importKind = null;
        specifier.local = this.parseIdentifier();
      }
    } else {
      if (specifierTypeKind !== null && tokenIsKeywordOrIdentifier(this.state.type)) {
        specifier.imported = this.parseIdentifier(true);
        specifier.importKind = specifierTypeKind;
      } else {
        if (importedIsString) {
          throw this.raise(ErrorMessages.ImportBindingIsString, {
            node: specifier
          }, firstIdent.value);
        }

        specifier.imported = firstIdent;
        specifier.importKind = null;
      }

      if (this.eatContextual(93)) {
        specifier.local = this.parseIdentifier();
      } else {
        isBinding = true;
        specifier.local = cloneIdentifier(specifier.imported);
      }
    }

    const specifierIsTypeImport = hasTypeImportKind(specifier);

    if (isInTypeOnlyImport && specifierIsTypeImport) {
      this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport, {
        node: specifier
      });
    }

    if (isInTypeOnlyImport || specifierIsTypeImport) {
      this.checkReservedType(specifier.local.name, specifier.local.loc.start, true);
    }

    if (isBinding && !isInTypeOnlyImport && !specifierIsTypeImport) {
      this.checkReservedWord(specifier.local.name, specifier.loc.start, true, true);
    }

    this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
    return this.finishNode(specifier, "ImportSpecifier");
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case 78:
        return this.parseIdentifier(true);

      default:
        return super.parseBindingAtom();
    }
  }

  parseFunctionParams(node, allowModifiers) {
    const kind = node.kind;

    if (kind !== "get" && kind !== "set" && this.match(47)) {
      node.typeParameters = this.flowParseTypeParameterDeclaration();
    }

    super.parseFunctionParams(node, allowModifiers);
  }

  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);

    if (this.match(14)) {
      decl.id.typeAnnotation = this.flowParseTypeAnnotation();
      this.resetEndLocation(decl.id);
    }
  }

  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(14)) {
      const oldNoAnonFunctionType = this.state.noAnonFunctionType;
      this.state.noAnonFunctionType = true;
      node.returnType = this.flowParseTypeAnnotation();
      this.state.noAnonFunctionType = oldNoAnonFunctionType;
    }

    return super.parseAsyncArrowFromCallExpression(node, call);
  }

  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }

  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    var _jsx;

    let state = null;
    let jsx;

    if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];

      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }

    if ((_jsx = jsx) != null && _jsx.error || this.match(47)) {
      var _jsx2, _jsx3;

      state = state || this.state.clone();
      let typeParameters;
      const arrow = this.tryParse(abort => {
        var _arrowExpression$extr;

        typeParameters = this.flowParseTypeParameterDeclaration();
        const arrowExpression = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
          const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
          this.resetStartLocationFromNode(result, typeParameters);
          return result;
        });
        if ((_arrowExpression$extr = arrowExpression.extra) != null && _arrowExpression$extr.parenthesized) abort();
        const expr = this.maybeUnwrapTypeCastExpression(arrowExpression);
        if (expr.type !== "ArrowFunctionExpression") abort();
        expr.typeParameters = typeParameters;
        this.resetStartLocationFromNode(expr, typeParameters);
        return arrowExpression;
      }, state);
      let arrowExpression = null;

      if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
        if (!arrow.error && !arrow.aborted) {
          if (arrow.node.async) {
            this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction, {
              node: typeParameters
            });
          }

          return arrow.node;
        }

        arrowExpression = arrow.node;
      }

      if ((_jsx2 = jsx) != null && _jsx2.node) {
        this.state = jsx.failState;
        return jsx.node;
      }

      if (arrowExpression) {
        this.state = arrow.failState;
        return arrowExpression;
      }

      if ((_jsx3 = jsx) != null && _jsx3.thrown) throw jsx.error;
      if (arrow.thrown) throw arrow.error;
      throw this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter, {
        node: typeParameters
      });
    }

    return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
  }

  parseArrow(node) {
    if (this.match(14)) {
      const result = this.tryParse(() => {
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = true;
        const typeNode = this.startNode();
        [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        if (this.canInsertSemicolon()) this.unexpected();
        if (!this.match(19)) this.unexpected();
        return typeNode;
      });
      if (result.thrown) return null;
      if (result.error) this.state = result.failState;
      node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
    }

    return super.parseArrow(node);
  }

  shouldParseArrow(params) {
    return this.match(14) || super.shouldParseArrow(params);
  }

  setArrowFunctionParameters(node, params) {
    if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      node.params = params;
    } else {
      super.setArrowFunctionParameters(node, params);
    }
  }

  checkParams(node, allowDuplicates, isArrowFunction) {
    if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
      return;
    }

    for (let i = 0; i < node.params.length; i++) {
      if (this.isThisParam(node.params[i]) && i > 0) {
        this.raise(FlowErrors.ThisParamMustBeFirst, {
          node: node.params[i]
        });
      }
    }

    return super.checkParams(...arguments);
  }

  parseParenAndDistinguishExpression(canBeArrow) {
    return super.parseParenAndDistinguishExpression(canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
  }

  parseSubscripts(base, startPos, startLoc, noCalls) {
    if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
      this.next();
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      node.arguments = this.parseCallExpressionArguments(11, false);
      base = this.finishNode(node, "CallExpression");
    } else if (base.type === "Identifier" && base.name === "async" && this.match(47)) {
      const state = this.state.clone();
      const arrow = this.tryParse(abort => this.parseAsyncArrowWithTypeParameters(startPos, startLoc) || abort(), state);
      if (!arrow.error && !arrow.aborted) return arrow.node;
      const result = this.tryParse(() => super.parseSubscripts(base, startPos, startLoc, noCalls), state);
      if (result.node && !result.error) return result.node;

      if (arrow.node) {
        this.state = arrow.failState;
        return arrow.node;
      }

      if (result.node) {
        this.state = result.failState;
        return result.node;
      }

      throw arrow.error || result.error;
    }

    return super.parseSubscripts(base, startPos, startLoc, noCalls);
  }

  parseSubscript(base, startPos, startLoc, noCalls, subscriptState) {
    if (this.match(18) && this.isLookaheadToken_lt()) {
      subscriptState.optionalChainMember = true;

      if (noCalls) {
        subscriptState.stop = true;
        return base;
      }

      this.next();
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      node.typeArguments = this.flowParseTypeParameterInstantiation();
      this.expect(10);
      node.arguments = this.parseCallExpressionArguments(11, false);
      node.optional = true;
      return this.finishCallExpression(node, true);
    } else if (!noCalls && this.shouldParseTypes() && this.match(47)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      const result = this.tryParse(() => {
        node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
        this.expect(10);
        node.arguments = this.parseCallExpressionArguments(11, false);
        if (subscriptState.optionalChainMember) node.optional = false;
        return this.finishCallExpression(node, subscriptState.optionalChainMember);
      });

      if (result.node) {
        if (result.error) this.state = result.failState;
        return result.node;
      }
    }

    return super.parseSubscript(base, startPos, startLoc, noCalls, subscriptState);
  }

  parseNewArguments(node) {
    let targs = null;

    if (this.shouldParseTypes() && this.match(47)) {
      targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
    }

    node.typeArguments = targs;
    super.parseNewArguments(node);
  }

  parseAsyncArrowWithTypeParameters(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    this.parseFunctionParams(node);
    if (!this.parseArrow(node)) return;
    return this.parseArrowExpression(node, undefined, true);
  }

  readToken_mult_modulo(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 42 && next === 47 && this.state.hasFlowComment) {
      this.state.hasFlowComment = false;
      this.state.pos += 2;
      this.nextToken();
      return;
    }

    super.readToken_mult_modulo(code);
  }

  readToken_pipe_amp(code) {
    const next = this.input.charCodeAt(this.state.pos + 1);

    if (code === 124 && next === 125) {
      this.finishOp(9, 2);
      return;
    }

    super.readToken_pipe_amp(code);
  }

  parseTopLevel(file, program) {
    const fileNode = super.parseTopLevel(file, program);

    if (this.state.hasFlowComment) {
      this.raise(FlowErrors.UnterminatedFlowComment, {
        at: this.state.curPosition()
      });
    }

    return fileNode;
  }

  skipBlockComment() {
    if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
      if (this.state.hasFlowComment) {
        throw this.raise(FlowErrors.NestedFlowComment, {
          at: this.state.startLoc
        });
      }

      this.hasFlowCommentCompletion();
      this.state.pos += this.skipFlowComment();
      this.state.hasFlowComment = true;
      return;
    }

    if (this.state.hasFlowComment) {
      const end = this.input.indexOf("*-/", this.state.pos + 2);

      if (end === -1) {
        throw this.raise(ErrorMessages.UnterminatedComment, {
          at: this.state.curPosition()
        });
      }

      this.state.pos = end + 2 + 3;
      return;
    }

    return super.skipBlockComment();
  }

  skipFlowComment() {
    const {
      pos
    } = this.state;
    let shiftToFirstNonWhiteSpace = 2;

    while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
      shiftToFirstNonWhiteSpace++;
    }

    const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
    const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);

    if (ch2 === 58 && ch3 === 58) {
      return shiftToFirstNonWhiteSpace + 2;
    }

    if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
      return shiftToFirstNonWhiteSpace + 12;
    }

    if (ch2 === 58 && ch3 !== 58) {
      return shiftToFirstNonWhiteSpace;
    }

    return false;
  }

  hasFlowCommentCompletion() {
    const end = this.input.indexOf("*/", this.state.pos);

    if (end === -1) {
      throw this.raise(ErrorMessages.UnterminatedComment, {
        at: this.state.curPosition()
      });
    }
  }

  flowEnumErrorBooleanMemberNotInitialized(loc, {
    enumName,
    memberName
  }) {
    this.raise(FlowErrors.EnumBooleanMemberNotInitialized, {
      at: loc
    }, memberName, enumName);
  }

  flowEnumErrorInvalidExplicitType(loc, {
    enumName,
    suppliedType
  }) {
    return this.raise(suppliedType === null ? FlowErrors.EnumInvalidExplicitTypeUnknownSupplied : FlowErrors.EnumInvalidExplicitType, {
      at: loc
    }, enumName, suppliedType);
  }

  flowEnumErrorInvalidMemberInitializer(loc, {
    enumName,
    explicitType,
    memberName
  }) {
    return this.raise(explicitType === "boolean" || explicitType === "number" || explicitType === "string" ? FlowErrors.EnumInvalidMemberInitializerPrimaryType : explicitType === "symbol" ? FlowErrors.EnumInvalidMemberInitializerSymbolType : FlowErrors.EnumInvalidMemberInitializerUnknownType, {
      at: loc
    }, enumName, memberName, explicitType);
  }

  flowEnumErrorNumberMemberNotInitialized(loc, {
    enumName,
    memberName
  }) {
    this.raise(FlowErrors.EnumNumberMemberNotInitialized, {
      at: loc
    }, enumName, memberName);
  }

  flowEnumErrorStringMemberInconsistentlyInitailized(node, {
    enumName
  }) {
    this.raise(FlowErrors.EnumStringMemberInconsistentlyInitailized, {
      node
    }, enumName);
  }

  flowEnumMemberInit() {
    const startLoc = this.state.startLoc;

    const endOfInit = () => this.match(12) || this.match(8);

    switch (this.state.type) {
      case 130:
        {
          const literal = this.parseNumericLiteral(this.state.value);

          if (endOfInit()) {
            return {
              type: "number",
              loc: literal.loc.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            loc: startLoc
          };
        }

      case 129:
        {
          const literal = this.parseStringLiteral(this.state.value);

          if (endOfInit()) {
            return {
              type: "string",
              loc: literal.loc.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            loc: startLoc
          };
        }

      case 85:
      case 86:
        {
          const literal = this.parseBooleanLiteral(this.match(85));

          if (endOfInit()) {
            return {
              type: "boolean",
              loc: literal.loc.start,
              value: literal
            };
          }

          return {
            type: "invalid",
            loc: startLoc
          };
        }

      default:
        return {
          type: "invalid",
          loc: startLoc
        };
    }
  }

  flowEnumMemberRaw() {
    const loc = this.state.startLoc;
    const id = this.parseIdentifier(true);
    const init = this.eat(29) ? this.flowEnumMemberInit() : {
      type: "none",
      loc
    };
    return {
      id,
      init
    };
  }

  flowEnumCheckExplicitTypeMismatch(loc, context, expectedType) {
    const {
      explicitType
    } = context;

    if (explicitType === null) {
      return;
    }

    if (explicitType !== expectedType) {
      this.flowEnumErrorInvalidMemberInitializer(loc, context);
    }
  }

  flowEnumMembers({
    enumName,
    explicitType
  }) {
    const seenNames = new Set();
    const members = {
      booleanMembers: [],
      numberMembers: [],
      stringMembers: [],
      defaultedMembers: []
    };
    let hasUnknownMembers = false;

    while (!this.match(8)) {
      if (this.eat(21)) {
        hasUnknownMembers = true;
        break;
      }

      const memberNode = this.startNode();
      const {
        id,
        init
      } = this.flowEnumMemberRaw();
      const memberName = id.name;

      if (memberName === "") {
        continue;
      }

      if (/^[a-z]/.test(memberName)) {
        this.raise(FlowErrors.EnumInvalidMemberName, {
          node: id
        }, memberName, memberName[0].toUpperCase() + memberName.slice(1), enumName);
      }

      if (seenNames.has(memberName)) {
        this.raise(FlowErrors.EnumDuplicateMemberName, {
          node: id
        }, memberName, enumName);
      }

      seenNames.add(memberName);
      const context = {
        enumName,
        explicitType,
        memberName
      };
      memberNode.id = id;

      switch (init.type) {
        case "boolean":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "boolean");
            memberNode.init = init.value;
            members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
            break;
          }

        case "number":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "number");
            memberNode.init = init.value;
            members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
            break;
          }

        case "string":
          {
            this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "string");
            memberNode.init = init.value;
            members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
            break;
          }

        case "invalid":
          {
            throw this.flowEnumErrorInvalidMemberInitializer(init.loc, context);
          }

        case "none":
          {
            switch (explicitType) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(init.loc, context);
                break;

              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(init.loc, context);
                break;

              default:
                members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
            }
          }
      }

      if (!this.match(8)) {
        this.expect(12);
      }
    }

    return {
      members,
      hasUnknownMembers
    };
  }

  flowEnumStringMembers(initializedMembers, defaultedMembers, {
    enumName
  }) {
    if (initializedMembers.length === 0) {
      return defaultedMembers;
    } else if (defaultedMembers.length === 0) {
      return initializedMembers;
    } else if (defaultedMembers.length > initializedMembers.length) {
      for (const member of initializedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitailized(member, {
          enumName
        });
      }

      return defaultedMembers;
    } else {
      for (const member of defaultedMembers) {
        this.flowEnumErrorStringMemberInconsistentlyInitailized(member, {
          enumName
        });
      }

      return initializedMembers;
    }
  }

  flowEnumParseExplicitType({
    enumName
  }) {
    if (this.eatContextual(101)) {
      if (!tokenIsIdentifier(this.state.type)) {
        throw this.flowEnumErrorInvalidExplicitType(this.state.startLoc, {
          enumName,
          suppliedType: null
        });
      }

      const {
        value
      } = this.state;
      this.next();

      if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
        this.flowEnumErrorInvalidExplicitType(this.state.startLoc, {
          enumName,
          suppliedType: value
        });
      }

      return value;
    }

    return null;
  }

  flowEnumBody(node, id) {
    const enumName = id.name;
    const nameLoc = id.loc.start;
    const explicitType = this.flowEnumParseExplicitType({
      enumName
    });
    this.expect(5);
    const {
      members,
      hasUnknownMembers
    } = this.flowEnumMembers({
      enumName,
      explicitType
    });
    node.hasUnknownMembers = hasUnknownMembers;

    switch (explicitType) {
      case "boolean":
        node.explicitType = true;
        node.members = members.booleanMembers;
        this.expect(8);
        return this.finishNode(node, "EnumBooleanBody");

      case "number":
        node.explicitType = true;
        node.members = members.numberMembers;
        this.expect(8);
        return this.finishNode(node, "EnumNumberBody");

      case "string":
        node.explicitType = true;
        node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
          enumName
        });
        this.expect(8);
        return this.finishNode(node, "EnumStringBody");

      case "symbol":
        node.members = members.defaultedMembers;
        this.expect(8);
        return this.finishNode(node, "EnumSymbolBody");

      default:
        {
          const empty = () => {
            node.members = [];
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          };

          node.explicitType = false;
          const boolsLen = members.booleanMembers.length;
          const numsLen = members.numberMembers.length;
          const strsLen = members.stringMembers.length;
          const defaultedLen = members.defaultedMembers.length;

          if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
            return empty();
          } else if (!boolsLen && !numsLen) {
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorBooleanMemberNotInitialized(member.loc.start, {
                enumName,
                memberName: member.id.name
              });
            }

            node.members = members.booleanMembers;
            this.expect(8);
            return this.finishNode(node, "EnumBooleanBody");
          } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
            for (const member of members.defaultedMembers) {
              this.flowEnumErrorNumberMemberNotInitialized(member.loc.start, {
                enumName,
                memberName: member.id.name
              });
            }

            node.members = members.numberMembers;
            this.expect(8);
            return this.finishNode(node, "EnumNumberBody");
          } else {
            this.raise(FlowErrors.EnumInconsistentMemberValues, {
              at: nameLoc
            }, enumName);
            return empty();
          }
        }
    }
  }

  flowParseEnumDeclaration(node) {
    const id = this.parseIdentifier();
    node.id = id;
    node.body = this.flowEnumBody(this.startNode(), id);
    return this.finishNode(node, "EnumDeclaration");
  }

  isLookaheadToken_lt() {
    const next = this.nextTokenStart();

    if (this.input.charCodeAt(next) === 60) {
      const afterNext = this.input.charCodeAt(next + 1);
      return afterNext !== 60 && afterNext !== 61;
    }

    return false;
  }

  maybeUnwrapTypeCastExpression(node) {
    return node.type === "TypeCastExpression" ? node.expression : node;
  }

});

const entities = {
  quot: "\u0022",
  amp: "&",
  apos: "\u0027",
  lt: "<",
  gt: ">",
  nbsp: "\u00A0",
  iexcl: "\u00A1",
  cent: "\u00A2",
  pound: "\u00A3",
  curren: "\u00A4",
  yen: "\u00A5",
  brvbar: "\u00A6",
  sect: "\u00A7",
  uml: "\u00A8",
  copy: "\u00A9",
  ordf: "\u00AA",
  laquo: "\u00AB",
  not: "\u00AC",
  shy: "\u00AD",
  reg: "\u00AE",
  macr: "\u00AF",
  deg: "\u00B0",
  plusmn: "\u00B1",
  sup2: "\u00B2",
  sup3: "\u00B3",
  acute: "\u00B4",
  micro: "\u00B5",
  para: "\u00B6",
  middot: "\u00B7",
  cedil: "\u00B8",
  sup1: "\u00B9",
  ordm: "\u00BA",
  raquo: "\u00BB",
  frac14: "\u00BC",
  frac12: "\u00BD",
  frac34: "\u00BE",
  iquest: "\u00BF",
  Agrave: "\u00C0",
  Aacute: "\u00C1",
  Acirc: "\u00C2",
  Atilde: "\u00C3",
  Auml: "\u00C4",
  Aring: "\u00C5",
  AElig: "\u00C6",
  Ccedil: "\u00C7",
  Egrave: "\u00C8",
  Eacute: "\u00C9",
  Ecirc: "\u00CA",
  Euml: "\u00CB",
  Igrave: "\u00CC",
  Iacute: "\u00CD",
  Icirc: "\u00CE",
  Iuml: "\u00CF",
  ETH: "\u00D0",
  Ntilde: "\u00D1",
  Ograve: "\u00D2",
  Oacute: "\u00D3",
  Ocirc: "\u00D4",
  Otilde: "\u00D5",
  Ouml: "\u00D6",
  times: "\u00D7",
  Oslash: "\u00D8",
  Ugrave: "\u00D9",
  Uacute: "\u00DA",
  Ucirc: "\u00DB",
  Uuml: "\u00DC",
  Yacute: "\u00DD",
  THORN: "\u00DE",
  szlig: "\u00DF",
  agrave: "\u00E0",
  aacute: "\u00E1",
  acirc: "\u00E2",
  atilde: "\u00E3",
  auml: "\u00E4",
  aring: "\u00E5",
  aelig: "\u00E6",
  ccedil: "\u00E7",
  egrave: "\u00E8",
  eacute: "\u00E9",
  ecirc: "\u00EA",
  euml: "\u00EB",
  igrave: "\u00EC",
  iacute: "\u00ED",
  icirc: "\u00EE",
  iuml: "\u00EF",
  eth: "\u00F0",
  ntilde: "\u00F1",
  ograve: "\u00F2",
  oacute: "\u00F3",
  ocirc: "\u00F4",
  otilde: "\u00F5",
  ouml: "\u00F6",
  divide: "\u00F7",
  oslash: "\u00F8",
  ugrave: "\u00F9",
  uacute: "\u00FA",
  ucirc: "\u00FB",
  uuml: "\u00FC",
  yacute: "\u00FD",
  thorn: "\u00FE",
  yuml: "\u00FF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};

const HEX_NUMBER = /^[\da-fA-F]+$/;
const DECIMAL_NUMBER = /^\d+$/;
const JsxErrors = makeErrorTemplates({
  AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
  MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>.",
  MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
  UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
  UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
  UnterminatedJsxContent: "Unterminated JSX contents.",
  UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
}, ErrorCodes.SyntaxError, "jsx");

function isFragment(object) {
  return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
}

function getQualifiedJSXName(object) {
  if (object.type === "JSXIdentifier") {
    return object.name;
  }

  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }

  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }

  throw new Error("Node had unexpected type: " + object.type);
}

var jsx = (superClass => class extends superClass {
  jsxReadToken() {
    let out = "";
    let chunkStart = this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(JsxErrors.UnterminatedJsxContent, {
          at: this.state.startLoc
        });
      }

      const ch = this.input.charCodeAt(this.state.pos);

      switch (ch) {
        case 60:
        case 123:
          if (this.state.pos === this.state.start) {
            if (ch === 60 && this.state.canStartJSXElement) {
              ++this.state.pos;
              return this.finishToken(138);
            }

            return super.getTokenFromCode(ch);
          }

          out += this.input.slice(chunkStart, this.state.pos);
          return this.finishToken(137, out);

        case 38:
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
          break;

        case 62:
        case 125:

        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(true);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }

      }
    }
  }

  jsxReadNewLine(normalizeCRLF) {
    const ch = this.input.charCodeAt(this.state.pos);
    let out;
    ++this.state.pos;

    if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
      ++this.state.pos;
      out = normalizeCRLF ? "\n" : "\r\n";
    } else {
      out = String.fromCharCode(ch);
    }

    ++this.state.curLine;
    this.state.lineStart = this.state.pos;
    return out;
  }

  jsxReadString(quote) {
    let out = "";
    let chunkStart = ++this.state.pos;

    for (;;) {
      if (this.state.pos >= this.length) {
        throw this.raise(ErrorMessages.UnterminatedString, {
          at: this.state.startLoc
        });
      }

      const ch = this.input.charCodeAt(this.state.pos);
      if (ch === quote) break;

      if (ch === 38) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadEntity();
        chunkStart = this.state.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.state.pos);
        out += this.jsxReadNewLine(false);
        chunkStart = this.state.pos;
      } else {
        ++this.state.pos;
      }
    }

    out += this.input.slice(chunkStart, this.state.pos++);
    return this.finishToken(129, out);
  }

  jsxReadEntity() {
    let str = "";
    let count = 0;
    let entity;
    let ch = this.input[this.state.pos];
    const startPos = ++this.state.pos;

    while (this.state.pos < this.length && count++ < 10) {
      ch = this.input[this.state.pos++];

      if (ch === ";") {
        if (str[0] === "#") {
          if (str[1] === "x") {
            str = str.substr(2);

            if (HEX_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 16));
            }
          } else {
            str = str.substr(1);

            if (DECIMAL_NUMBER.test(str)) {
              entity = String.fromCodePoint(parseInt(str, 10));
            }
          }
        } else {
          entity = entities[str];
        }

        break;
      }

      str += ch;
    }

    if (!entity) {
      this.state.pos = startPos;
      return "&";
    }

    return entity;
  }

  jsxReadWord() {
    let ch;
    const start = this.state.pos;

    do {
      ch = this.input.charCodeAt(++this.state.pos);
    } while (isIdentifierChar(ch) || ch === 45);

    return this.finishToken(136, this.input.slice(start, this.state.pos));
  }

  jsxParseIdentifier() {
    const node = this.startNode();

    if (this.match(136)) {
      node.name = this.state.value;
    } else if (tokenIsKeyword(this.state.type)) {
      node.name = tokenLabelName(this.state.type);
    } else {
      this.unexpected();
    }

    this.next();
    return this.finishNode(node, "JSXIdentifier");
  }

  jsxParseNamespacedName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const name = this.jsxParseIdentifier();
    if (!this.eat(14)) return name;
    const node = this.startNodeAt(startPos, startLoc);
    node.namespace = name;
    node.name = this.jsxParseIdentifier();
    return this.finishNode(node, "JSXNamespacedName");
  }

  jsxParseElementName() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let node = this.jsxParseNamespacedName();

    if (node.type === "JSXNamespacedName") {
      return node;
    }

    while (this.eat(16)) {
      const newNode = this.startNodeAt(startPos, startLoc);
      newNode.object = node;
      newNode.property = this.jsxParseIdentifier();
      node = this.finishNode(newNode, "JSXMemberExpression");
    }

    return node;
  }

  jsxParseAttributeValue() {
    let node;

    switch (this.state.type) {
      case 5:
        node = this.startNode();
        this.setContext(types.brace);
        this.next();
        node = this.jsxParseExpressionContainer(node, types.j_oTag);

        if (node.expression.type === "JSXEmptyExpression") {
          this.raise(JsxErrors.AttributeIsEmpty, {
            node
          });
        }

        return node;

      case 138:
      case 129:
        return this.parseExprAtom();

      default:
        throw this.raise(JsxErrors.UnsupportedJsxValue, {
          at: this.state.startLoc
        });
    }
  }

  jsxParseEmptyExpression() {
    const node = this.startNodeAt(this.state.lastTokEndLoc.index, this.state.lastTokEndLoc);
    return this.finishNodeAt(node, "JSXEmptyExpression", this.state.startLoc);
  }

  jsxParseSpreadChild(node) {
    this.next();
    node.expression = this.parseExpression();
    this.setContext(types.j_oTag);
    this.expect(8);
    return this.finishNode(node, "JSXSpreadChild");
  }

  jsxParseExpressionContainer(node, previousContext) {
    if (this.match(8)) {
      node.expression = this.jsxParseEmptyExpression();
    } else {
      const expression = this.parseExpression();
      node.expression = expression;
    }

    this.setContext(previousContext);
    this.expect(8);
    return this.finishNode(node, "JSXExpressionContainer");
  }

  jsxParseAttribute() {
    const node = this.startNode();

    if (this.match(5)) {
      this.setContext(types.brace);
      this.next();
      this.expect(21);
      node.argument = this.parseMaybeAssignAllowIn();
      this.setContext(types.j_oTag);
      this.expect(8);
      return this.finishNode(node, "JSXSpreadAttribute");
    }

    node.name = this.jsxParseNamespacedName();
    node.value = this.eat(29) ? this.jsxParseAttributeValue() : null;
    return this.finishNode(node, "JSXAttribute");
  }

  jsxParseOpeningElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(139)) {
      this.expect(139);
      return this.finishNode(node, "JSXOpeningFragment");
    }

    node.name = this.jsxParseElementName();
    return this.jsxParseOpeningElementAfterName(node);
  }

  jsxParseOpeningElementAfterName(node) {
    const attributes = [];

    while (!this.match(56) && !this.match(139)) {
      attributes.push(this.jsxParseAttribute());
    }

    node.attributes = attributes;
    node.selfClosing = this.eat(56);
    this.expect(139);
    return this.finishNode(node, "JSXOpeningElement");
  }

  jsxParseClosingElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);

    if (this.match(139)) {
      this.expect(139);
      return this.finishNode(node, "JSXClosingFragment");
    }

    node.name = this.jsxParseElementName();
    this.expect(139);
    return this.finishNode(node, "JSXClosingElement");
  }

  jsxParseElementAt(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    const children = [];
    const openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
    let closingElement = null;

    if (!openingElement.selfClosing) {
      contents: for (;;) {
        switch (this.state.type) {
          case 138:
            startPos = this.state.start;
            startLoc = this.state.startLoc;
            this.next();

            if (this.eat(56)) {
              closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
              break contents;
            }

            children.push(this.jsxParseElementAt(startPos, startLoc));
            break;

          case 137:
            children.push(this.parseExprAtom());
            break;

          case 5:
            {
              const node = this.startNode();
              this.setContext(types.brace);
              this.next();

              if (this.match(21)) {
                children.push(this.jsxParseSpreadChild(node));
              } else {
                children.push(this.jsxParseExpressionContainer(node, types.j_expr));
              }

              break;
            }

          default:
            throw this.unexpected();
        }
      }

      if (isFragment(openingElement) && !isFragment(closingElement) && closingElement !== null) {
        this.raise(JsxErrors.MissingClosingTagFragment, {
          node: closingElement
        });
      } else if (!isFragment(openingElement) && isFragment(closingElement)) {
        this.raise(JsxErrors.MissingClosingTagElement, {
          node: closingElement
        }, getQualifiedJSXName(openingElement.name));
      } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(JsxErrors.MissingClosingTagElement, {
            node: closingElement
          }, getQualifiedJSXName(openingElement.name));
        }
      }
    }

    if (isFragment(openingElement)) {
      node.openingFragment = openingElement;
      node.closingFragment = closingElement;
    } else {
      node.openingElement = openingElement;
      node.closingElement = closingElement;
    }

    node.children = children;

    if (this.match(47)) {
      throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements, {
        at: this.state.startLoc
      });
    }

    return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
  }

  jsxParseElement() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.next();
    return this.jsxParseElementAt(startPos, startLoc);
  }

  setContext(newContext) {
    const {
      context
    } = this.state;
    context[context.length - 1] = newContext;
  }

  parseExprAtom(refExpressionErrors) {
    if (this.match(137)) {
      return this.parseLiteral(this.state.value, "JSXText");
    } else if (this.match(138)) {
      return this.jsxParseElement();
    } else if (this.match(47) && this.input.charCodeAt(this.state.pos) !== 33) {
      this.replaceToken(138);
      return this.jsxParseElement();
    } else {
      return super.parseExprAtom(refExpressionErrors);
    }
  }

  skipSpace() {
    const curContext = this.curContext();
    if (!curContext.preserveSpace) super.skipSpace();
  }

  getTokenFromCode(code) {
    const context = this.curContext();

    if (context === types.j_expr) {
      return this.jsxReadToken();
    }

    if (context === types.j_oTag || context === types.j_cTag) {
      if (isIdentifierStart(code)) {
        return this.jsxReadWord();
      }

      if (code === 62) {
        ++this.state.pos;
        return this.finishToken(139);
      }

      if ((code === 34 || code === 39) && context === types.j_oTag) {
        return this.jsxReadString(code);
      }
    }

    if (code === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
      ++this.state.pos;
      return this.finishToken(138);
    }

    return super.getTokenFromCode(code);
  }

  updateContext(prevType) {
    const {
      context,
      type
    } = this.state;

    if (type === 56 && prevType === 138) {
      context.splice(-2, 2, types.j_cTag);
      this.state.canStartJSXElement = false;
    } else if (type === 138) {
      context.push(types.j_oTag);
    } else if (type === 139) {
      const out = context[context.length - 1];

      if (out === types.j_oTag && prevType === 56 || out === types.j_cTag) {
        context.pop();
        this.state.canStartJSXElement = context[context.length - 1] === types.j_expr;
      } else {
        this.setContext(types.j_expr);
        this.state.canStartJSXElement = true;
      }
    } else {
      this.state.canStartJSXElement = tokenComesBeforeExpression(type);
    }
  }

});

class TypeScriptScope extends Scope {
  constructor(...args) {
    super(...args);
    this.types = new Set();
    this.enums = new Set();
    this.constEnums = new Set();
    this.classes = new Set();
    this.exportOnlyBindings = new Set();
  }

}

class TypeScriptScopeHandler extends ScopeHandler {
  createScope(flags) {
    return new TypeScriptScope(flags);
  }

  declareName(name, bindingType, loc) {
    const scope = this.currentScope();

    if (bindingType & BIND_FLAGS_TS_EXPORT_ONLY) {
      this.maybeExportDefined(scope, name);
      scope.exportOnlyBindings.add(name);
      return;
    }

    super.declareName(...arguments);

    if (bindingType & BIND_KIND_TYPE) {
      if (!(bindingType & BIND_KIND_VALUE)) {
        this.checkRedeclarationInScope(scope, name, bindingType, loc);
        this.maybeExportDefined(scope, name);
      }

      scope.types.add(name);
    }

    if (bindingType & BIND_FLAGS_TS_ENUM) scope.enums.add(name);
    if (bindingType & BIND_FLAGS_TS_CONST_ENUM) scope.constEnums.add(name);
    if (bindingType & BIND_FLAGS_CLASS) scope.classes.add(name);
  }

  isRedeclaredInScope(scope, name, bindingType) {
    if (scope.enums.has(name)) {
      if (bindingType & BIND_FLAGS_TS_ENUM) {
        const isConst = !!(bindingType & BIND_FLAGS_TS_CONST_ENUM);
        const wasConst = scope.constEnums.has(name);
        return isConst !== wasConst;
      }

      return true;
    }

    if (bindingType & BIND_FLAGS_CLASS && scope.classes.has(name)) {
      if (scope.lexical.has(name)) {
        return !!(bindingType & BIND_KIND_VALUE);
      } else {
        return false;
      }
    }

    if (bindingType & BIND_KIND_TYPE && scope.types.has(name)) {
      return true;
    }

    return super.isRedeclaredInScope(...arguments);
  }

  checkLocalExport(id) {
    const topLevelScope = this.scopeStack[0];
    const {
      name
    } = id;

    if (!topLevelScope.types.has(name) && !topLevelScope.exportOnlyBindings.has(name)) {
      super.checkLocalExport(id);
    }
  }

}

function nonNull(x) {
  if (x == null) {
    throw new Error(`Unexpected ${x} value.`);
  }

  return x;
}

function assert(x) {
  if (!x) {
    throw new Error("Assert fail");
  }
}

const TSErrors = makeErrorTemplates({
  AbstractMethodHasImplementation: "Method '%0' cannot have an implementation because it is marked abstract.",
  AbstractPropertyHasInitializer: "Property '%0' cannot have an initializer because it is marked abstract.",
  AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
  AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
  ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
  ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
  ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
  DeclareAccessor: "'declare' is not allowed in %0ters.",
  DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
  DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
  DuplicateAccessibilityModifier: "Accessibility modifier already seen.",
  DuplicateModifier: "Duplicate modifier: '%0'.",
  EmptyHeritageClauseType: "'%0' list cannot be empty.",
  EmptyTypeArguments: "Type argument list cannot be empty.",
  EmptyTypeParameters: "Type parameter list cannot be empty.",
  ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
  ImportAliasHasImportType: "An import alias can not use 'import type'.",
  IncompatibleModifiers: "'%0' modifier cannot be used with '%1' modifier.",
  IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
  IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0').",
  IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
  IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
  IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
  InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.",
  InvalidModifiersOrder: "'%0' modifier must precede '%1' modifier.",
  InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
  MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
  MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
  NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
  NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
  OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
  OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
  PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
  PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
  PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0').",
  ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
  ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
  ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
  SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
  SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
  SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
  StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
  TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
  TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
  TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
  TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
  UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
  UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
  UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
  UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
  UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
  UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
  UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0."
}, ErrorCodes.SyntaxError, "typescript");

function keywordTypeFromName(value) {
  switch (value) {
    case "any":
      return "TSAnyKeyword";

    case "boolean":
      return "TSBooleanKeyword";

    case "bigint":
      return "TSBigIntKeyword";

    case "never":
      return "TSNeverKeyword";

    case "number":
      return "TSNumberKeyword";

    case "object":
      return "TSObjectKeyword";

    case "string":
      return "TSStringKeyword";

    case "symbol":
      return "TSSymbolKeyword";

    case "undefined":
      return "TSUndefinedKeyword";

    case "unknown":
      return "TSUnknownKeyword";

    default:
      return undefined;
  }
}

function tsIsAccessModifier(modifier) {
  return modifier === "private" || modifier === "public" || modifier === "protected";
}

var typescript = (superClass => class extends superClass {
  getScopeHandler() {
    return TypeScriptScopeHandler;
  }

  tsIsIdentifier() {
    return tokenIsIdentifier(this.state.type);
  }

  tsTokenCanFollowModifier() {
    return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(134) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
  }

  tsNextTokenCanFollowModifier() {
    this.next();
    return this.tsTokenCanFollowModifier();
  }

  tsParseModifier(allowedModifiers, stopOnStartOfClassStaticBlock) {
    if (!tokenIsIdentifier(this.state.type)) {
      return undefined;
    }

    const modifier = this.state.value;

    if (allowedModifiers.indexOf(modifier) !== -1) {
      if (stopOnStartOfClassStaticBlock && this.tsIsStartOfStaticBlocks()) {
        return undefined;
      }

      if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
        return modifier;
      }
    }

    return undefined;
  }

  tsParseModifiers(modified, allowedModifiers, disallowedModifiers, errorTemplate, stopOnStartOfClassStaticBlock) {
    const enforceOrder = (loc, modifier, before, after) => {
      if (modifier === before && modified[after]) {
        this.raise(TSErrors.InvalidModifiersOrder, {
          at: loc
        }, before, after);
      }
    };

    const incompatible = (loc, modifier, mod1, mod2) => {
      if (modified[mod1] && modifier === mod2 || modified[mod2] && modifier === mod1) {
        this.raise(TSErrors.IncompatibleModifiers, {
          at: loc
        }, mod1, mod2);
      }
    };

    for (;;) {
      const {
        startLoc
      } = this.state;
      const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers != null ? disallowedModifiers : []), stopOnStartOfClassStaticBlock);
      if (!modifier) break;

      if (tsIsAccessModifier(modifier)) {
        if (modified.accessibility) {
          this.raise(TSErrors.DuplicateAccessibilityModifier, {
            at: startLoc
          });
        } else {
          enforceOrder(startLoc, modifier, modifier, "override");
          enforceOrder(startLoc, modifier, modifier, "static");
          enforceOrder(startLoc, modifier, modifier, "readonly");
          modified.accessibility = modifier;
        }
      } else {
        if (Object.hasOwnProperty.call(modified, modifier)) {
          this.raise(TSErrors.DuplicateModifier, {
            at: startLoc
          }, modifier);
        } else {
          enforceOrder(startLoc, modifier, "static", "readonly");
          enforceOrder(startLoc, modifier, "static", "override");
          enforceOrder(startLoc, modifier, "override", "readonly");
          enforceOrder(startLoc, modifier, "abstract", "override");
          incompatible(startLoc, modifier, "declare", "override");
          incompatible(startLoc, modifier, "static", "abstract");
        }

        modified[modifier] = true;
      }

      if (disallowedModifiers != null && disallowedModifiers.includes(modifier)) {
        this.raise(errorTemplate, {
          at: startLoc
        }, modifier);
      }
    }
  }

  tsIsListTerminator(kind) {
    switch (kind) {
      case "EnumMembers":
      case "TypeMembers":
        return this.match(8);

      case "HeritageClauseElement":
        return this.match(5);

      case "TupleElementTypes":
        return this.match(3);

      case "TypeParametersOrArguments":
        return this.match(48);
    }

    throw new Error("Unreachable");
  }

  tsParseList(kind, parseElement) {
    const result = [];

    while (!this.tsIsListTerminator(kind)) {
      result.push(parseElement());
    }

    return result;
  }

  tsParseDelimitedList(kind, parseElement, refTrailingCommaPos) {
    return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true, refTrailingCommaPos));
  }

  tsParseDelimitedListWorker(kind, parseElement, expectSuccess, refTrailingCommaPos) {
    const result = [];
    let trailingCommaPos = -1;

    for (;;) {
      if (this.tsIsListTerminator(kind)) {
        break;
      }

      trailingCommaPos = -1;
      const element = parseElement();

      if (element == null) {
        return undefined;
      }

      result.push(element);

      if (this.eat(12)) {
        trailingCommaPos = this.state.lastTokStart;
        continue;
      }

      if (this.tsIsListTerminator(kind)) {
        break;
      }

      if (expectSuccess) {
        this.expect(12);
      }

      return undefined;
    }

    if (refTrailingCommaPos) {
      refTrailingCommaPos.value = trailingCommaPos;
    }

    return result;
  }

  tsParseBracketedList(kind, parseElement, bracket, skipFirstToken, refTrailingCommaPos) {
    if (!skipFirstToken) {
      if (bracket) {
        this.expect(0);
      } else {
        this.expect(47);
      }
    }

    const result = this.tsParseDelimitedList(kind, parseElement, refTrailingCommaPos);

    if (bracket) {
      this.expect(3);
    } else {
      this.expect(48);
    }

    return result;
  }

  tsParseImportType() {
    const node = this.startNode();
    this.expect(83);
    this.expect(10);

    if (!this.match(129)) {
      this.raise(TSErrors.UnsupportedImportTypeArgument, {
        at: this.state.startLoc
      });
    }

    node.argument = this.parseExprAtom();
    this.expect(11);

    if (this.eat(16)) {
      node.qualifier = this.tsParseEntityName(true);
    }

    if (this.match(47)) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSImportType");
  }

  tsParseEntityName(allowReservedWords) {
    let entity = this.parseIdentifier();

    while (this.eat(16)) {
      const node = this.startNodeAtNode(entity);
      node.left = entity;
      node.right = this.parseIdentifier(allowReservedWords);
      entity = this.finishNode(node, "TSQualifiedName");
    }

    return entity;
  }

  tsParseTypeReference() {
    const node = this.startNode();
    node.typeName = this.tsParseEntityName(false);

    if (!this.hasPrecedingLineBreak() && this.match(47)) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSTypeReference");
  }

  tsParseThisTypePredicate(lhs) {
    this.next();
    const node = this.startNodeAtNode(lhs);
    node.parameterName = lhs;
    node.typeAnnotation = this.tsParseTypeAnnotation(false);
    node.asserts = false;
    return this.finishNode(node, "TSTypePredicate");
  }

  tsParseThisTypeNode() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "TSThisType");
  }

  tsParseTypeQuery() {
    const node = this.startNode();
    this.expect(87);

    if (this.match(83)) {
      node.exprName = this.tsParseImportType();
    } else {
      node.exprName = this.tsParseEntityName(true);
    }

    return this.finishNode(node, "TSTypeQuery");
  }

  tsParseTypeParameter() {
    const node = this.startNode();
    node.name = this.tsParseTypeParameterName();
    node.constraint = this.tsEatThenParseType(81);
    node.default = this.tsEatThenParseType(29);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsTryParseTypeParameters() {
    if (this.match(47)) {
      return this.tsParseTypeParameters();
    }
  }

  tsParseTypeParameters() {
    const node = this.startNode();

    if (this.match(47) || this.match(138)) {
      this.next();
    } else {
      this.unexpected();
    }

    const refTrailingCommaPos = {
      value: -1
    };
    node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true, refTrailingCommaPos);

    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeParameters, {
        node
      });
    }

    if (refTrailingCommaPos.value !== -1) {
      this.addExtra(node, "trailingComma", refTrailingCommaPos.value);
    }

    return this.finishNode(node, "TSTypeParameterDeclaration");
  }

  tsTryNextParseConstantContext() {
    if (this.lookahead().type === 75) {
      this.next();
      return this.tsParseTypeReference();
    }

    return null;
  }

  tsFillSignature(returnToken, signature) {
    const returnTokenRequired = returnToken === 19;
    const paramsKey = "parameters";
    const returnTypeKey = "typeAnnotation";
    signature.typeParameters = this.tsTryParseTypeParameters();
    this.expect(10);
    signature[paramsKey] = this.tsParseBindingListForSignature();

    if (returnTokenRequired) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    } else if (this.match(returnToken)) {
      signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
    }
  }

  tsParseBindingListForSignature() {
    return this.parseBindingList(11, 41).map(pattern => {
      if (pattern.type !== "Identifier" && pattern.type !== "RestElement" && pattern.type !== "ObjectPattern" && pattern.type !== "ArrayPattern") {
        this.raise(TSErrors.UnsupportedSignatureParameterKind, {
          node: pattern
        }, pattern.type);
      }

      return pattern;
    });
  }

  tsParseTypeMemberSemicolon() {
    if (!this.eat(12) && !this.isLineTerminator()) {
      this.expect(13);
    }
  }

  tsParseSignatureMember(kind, node) {
    this.tsFillSignature(14, node);
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, kind);
  }

  tsIsUnambiguouslyIndexSignature() {
    this.next();

    if (tokenIsIdentifier(this.state.type)) {
      this.next();
      return this.match(14);
    }

    return false;
  }

  tsTryParseIndexSignature(node) {
    if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
      return undefined;
    }

    this.expect(0);
    const id = this.parseIdentifier();
    id.typeAnnotation = this.tsParseTypeAnnotation();
    this.resetEndLocation(id);
    this.expect(3);
    node.parameters = [id];
    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
    this.tsParseTypeMemberSemicolon();
    return this.finishNode(node, "TSIndexSignature");
  }

  tsParsePropertyOrMethodSignature(node, readonly) {
    if (this.eat(17)) node.optional = true;
    const nodeAny = node;

    if (this.match(10) || this.match(47)) {
      if (readonly) {
        this.raise(TSErrors.ReadonlyForMethodSignature, {
          node
        });
      }

      const method = nodeAny;

      if (method.kind && this.match(47)) {
        this.raise(TSErrors.AccesorCannotHaveTypeParameters, {
          at: this.state.curPosition()
        });
      }

      this.tsFillSignature(14, method);
      this.tsParseTypeMemberSemicolon();
      const paramsKey = "parameters";
      const returnTypeKey = "typeAnnotation";

      if (method.kind === "get") {
        if (method[paramsKey].length > 0) {
          this.raise(ErrorMessages.BadGetterArity, {
            at: this.state.curPosition()
          });

          if (this.isThisParam(method[paramsKey][0])) {
            this.raise(TSErrors.AccesorCannotDeclareThisParameter, {
              at: this.state.curPosition()
            });
          }
        }
      } else if (method.kind === "set") {
        if (method[paramsKey].length !== 1) {
          this.raise(ErrorMessages.BadSetterArity, {
            at: this.state.curPosition()
          });
        } else {
          const firstParameter = method[paramsKey][0];

          if (this.isThisParam(firstParameter)) {
            this.raise(TSErrors.AccesorCannotDeclareThisParameter, {
              at: this.state.curPosition()
            });
          }

          if (firstParameter.type === "Identifier" && firstParameter.optional) {
            this.raise(TSErrors.SetAccesorCannotHaveOptionalParameter, {
              at: this.state.curPosition()
            });
          }

          if (firstParameter.type === "RestElement") {
            this.raise(TSErrors.SetAccesorCannotHaveRestParameter, {
              at: this.state.curPosition()
            });
          }
        }

        if (method[returnTypeKey]) {
          this.raise(TSErrors.SetAccesorCannotHaveReturnType, {
            node: method[returnTypeKey]
          });
        }
      } else {
        method.kind = "method";
      }

      return this.finishNode(method, "TSMethodSignature");
    } else {
      const property = nodeAny;
      if (readonly) property.readonly = true;
      const type = this.tsTryParseTypeAnnotation();
      if (type) property.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(property, "TSPropertySignature");
    }
  }

  tsParseTypeMember() {
    const node = this.startNode();

    if (this.match(10) || this.match(47)) {
      return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
    }

    if (this.match(77)) {
      const id = this.startNode();
      this.next();

      if (this.match(10) || this.match(47)) {
        return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
      } else {
        node.key = this.createIdentifier(id, "new");
        return this.tsParsePropertyOrMethodSignature(node, false);
      }
    }

    this.tsParseModifiers(node, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static", "override"], TSErrors.InvalidModifierOnTypeMember);
    const idx = this.tsTryParseIndexSignature(node);

    if (idx) {
      return idx;
    }

    this.parsePropertyName(node);

    if (!node.computed && node.key.type === "Identifier" && (node.key.name === "get" || node.key.name === "set") && this.tsTokenCanFollowModifier()) {
      node.kind = node.key.name;
      this.parsePropertyName(node);
    }

    return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
  }

  tsParseTypeLiteral() {
    const node = this.startNode();
    node.members = this.tsParseObjectTypeMembers();
    return this.finishNode(node, "TSTypeLiteral");
  }

  tsParseObjectTypeMembers() {
    this.expect(5);
    const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
    this.expect(8);
    return members;
  }

  tsIsStartOfMappedType() {
    this.next();

    if (this.eat(53)) {
      return this.isContextual(118);
    }

    if (this.isContextual(118)) {
      this.next();
    }

    if (!this.match(0)) {
      return false;
    }

    this.next();

    if (!this.tsIsIdentifier()) {
      return false;
    }

    this.next();
    return this.match(58);
  }

  tsParseMappedTypeParameter() {
    const node = this.startNode();
    node.name = this.tsParseTypeParameterName();
    node.constraint = this.tsExpectThenParseType(58);
    return this.finishNode(node, "TSTypeParameter");
  }

  tsParseMappedType() {
    const node = this.startNode();
    this.expect(5);

    if (this.match(53)) {
      node.readonly = this.state.value;
      this.next();
      this.expectContextual(118);
    } else if (this.eatContextual(118)) {
      node.readonly = true;
    }

    this.expect(0);
    node.typeParameter = this.tsParseMappedTypeParameter();
    node.nameType = this.eatContextual(93) ? this.tsParseType() : null;
    this.expect(3);

    if (this.match(53)) {
      node.optional = this.state.value;
      this.next();
      this.expect(17);
    } else if (this.eat(17)) {
      node.optional = true;
    }

    node.typeAnnotation = this.tsTryParseType();
    this.semicolon();
    this.expect(8);
    return this.finishNode(node, "TSMappedType");
  }

  tsParseTupleType() {
    const node = this.startNode();
    node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
    let seenOptionalElement = false;
    let labeledElements = null;
    node.elementTypes.forEach(elementNode => {
      var _labeledElements;

      let {
        type
      } = elementNode;

      if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
        this.raise(TSErrors.OptionalTypeBeforeRequired, {
          node: elementNode
        });
      }

      seenOptionalElement = seenOptionalElement || type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType";

      if (type === "TSRestType") {
        elementNode = elementNode.typeAnnotation;
        type = elementNode.type;
      }

      const isLabeled = type === "TSNamedTupleMember";
      labeledElements = (_labeledElements = labeledElements) != null ? _labeledElements : isLabeled;

      if (labeledElements !== isLabeled) {
        this.raise(TSErrors.MixedLabeledAndUnlabeledElements, {
          node: elementNode
        });
      }
    });
    return this.finishNode(node, "TSTupleType");
  }

  tsParseTupleElementType() {
    const {
      start: startPos,
      startLoc
    } = this.state;
    const rest = this.eat(21);
    let type = this.tsParseType();
    const optional = this.eat(17);
    const labeled = this.eat(14);

    if (labeled) {
      const labeledNode = this.startNodeAtNode(type);
      labeledNode.optional = optional;

      if (type.type === "TSTypeReference" && !type.typeParameters && type.typeName.type === "Identifier") {
        labeledNode.label = type.typeName;
      } else {
        this.raise(TSErrors.InvalidTupleMemberLabel, {
          node: type
        });
        labeledNode.label = type;
      }

      labeledNode.elementType = this.tsParseType();
      type = this.finishNode(labeledNode, "TSNamedTupleMember");
    } else if (optional) {
      const optionalTypeNode = this.startNodeAtNode(type);
      optionalTypeNode.typeAnnotation = type;
      type = this.finishNode(optionalTypeNode, "TSOptionalType");
    }

    if (rest) {
      const restNode = this.startNodeAt(startPos, startLoc);
      restNode.typeAnnotation = type;
      type = this.finishNode(restNode, "TSRestType");
    }

    return type;
  }

  tsParseParenthesizedType() {
    const node = this.startNode();
    this.expect(10);
    node.typeAnnotation = this.tsParseType();
    this.expect(11);
    return this.finishNode(node, "TSParenthesizedType");
  }

  tsParseFunctionOrConstructorType(type, abstract) {
    const node = this.startNode();

    if (type === "TSConstructorType") {
      node.abstract = !!abstract;
      if (abstract) this.next();
      this.next();
    }

    this.tsFillSignature(19, node);
    return this.finishNode(node, type);
  }

  tsParseLiteralTypeNode() {
    const node = this.startNode();

    node.literal = (() => {
      switch (this.state.type) {
        case 130:
        case 131:
        case 129:
        case 85:
        case 86:
          return this.parseExprAtom();

        default:
          throw this.unexpected();
      }
    })();

    return this.finishNode(node, "TSLiteralType");
  }

  tsParseTemplateLiteralType() {
    const node = this.startNode();
    node.literal = this.parseTemplate(false);
    return this.finishNode(node, "TSLiteralType");
  }

  parseTemplateSubstitution() {
    if (this.state.inType) return this.tsParseType();
    return super.parseTemplateSubstitution();
  }

  tsParseThisTypeOrThisTypePredicate() {
    const thisKeyword = this.tsParseThisTypeNode();

    if (this.isContextual(113) && !this.hasPrecedingLineBreak()) {
      return this.tsParseThisTypePredicate(thisKeyword);
    } else {
      return thisKeyword;
    }
  }

  tsParseNonArrayType() {
    switch (this.state.type) {
      case 129:
      case 130:
      case 131:
      case 85:
      case 86:
        return this.tsParseLiteralTypeNode();

      case 53:
        if (this.state.value === "-") {
          const node = this.startNode();
          const nextToken = this.lookahead();

          if (nextToken.type !== 130 && nextToken.type !== 131) {
            throw this.unexpected();
          }

          node.literal = this.parseMaybeUnary();
          return this.finishNode(node, "TSLiteralType");
        }

        break;

      case 78:
        return this.tsParseThisTypeOrThisTypePredicate();

      case 87:
        return this.tsParseTypeQuery();

      case 83:
        return this.tsParseImportType();

      case 5:
        return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();

      case 0:
        return this.tsParseTupleType();

      case 10:
        return this.tsParseParenthesizedType();

      case 25:
      case 24:
        return this.tsParseTemplateLiteralType();

      default:
        {
          const {
            type
          } = this.state;

          if (tokenIsIdentifier(type) || type === 88 || type === 84) {
            const nodeType = type === 88 ? "TSVoidKeyword" : type === 84 ? "TSNullKeyword" : keywordTypeFromName(this.state.value);

            if (nodeType !== undefined && this.lookaheadCharCode() !== 46) {
              const node = this.startNode();
              this.next();
              return this.finishNode(node, nodeType);
            }

            return this.tsParseTypeReference();
          }
        }
    }

    throw this.unexpected();
  }

  tsParseArrayTypeOrHigher() {
    let type = this.tsParseNonArrayType();

    while (!this.hasPrecedingLineBreak() && this.eat(0)) {
      if (this.match(3)) {
        const node = this.startNodeAtNode(type);
        node.elementType = type;
        this.expect(3);
        type = this.finishNode(node, "TSArrayType");
      } else {
        const node = this.startNodeAtNode(type);
        node.objectType = type;
        node.indexType = this.tsParseType();
        this.expect(3);
        type = this.finishNode(node, "TSIndexedAccessType");
      }
    }

    return type;
  }

  tsParseTypeOperator() {
    const node = this.startNode();
    const operator = this.state.value;
    this.next();
    node.operator = operator;
    node.typeAnnotation = this.tsParseTypeOperatorOrHigher();

    if (operator === "readonly") {
      this.tsCheckTypeAnnotationForReadOnly(node);
    }

    return this.finishNode(node, "TSTypeOperator");
  }

  tsCheckTypeAnnotationForReadOnly(node) {
    switch (node.typeAnnotation.type) {
      case "TSTupleType":
      case "TSArrayType":
        return;

      default:
        this.raise(TSErrors.UnexpectedReadonly, {
          node
        });
    }
  }

  tsParseInferType() {
    const node = this.startNode();
    this.expectContextual(112);
    const typeParameter = this.startNode();
    typeParameter.name = this.tsParseTypeParameterName();
    node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
    return this.finishNode(node, "TSInferType");
  }

  tsParseTypeOperatorOrHigher() {
    const isTypeOperator = tokenIsTSTypeOperator(this.state.type) && !this.state.containsEsc;
    return isTypeOperator ? this.tsParseTypeOperator() : this.isContextual(112) ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
  }

  tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
    const node = this.startNode();
    const hasLeadingOperator = this.eat(operator);
    const types = [];

    do {
      types.push(parseConstituentType());
    } while (this.eat(operator));

    if (types.length === 1 && !hasLeadingOperator) {
      return types[0];
    }

    node.types = types;
    return this.finishNode(node, kind);
  }

  tsParseIntersectionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
  }

  tsParseUnionTypeOrHigher() {
    return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
  }

  tsIsStartOfFunctionType() {
    if (this.match(47)) {
      return true;
    }

    return this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
  }

  tsSkipParameterStart() {
    if (tokenIsIdentifier(this.state.type) || this.match(78)) {
      this.next();
      return true;
    }

    if (this.match(5)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(5)) {
          ++braceStackCounter;
        } else if (this.match(8)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    if (this.match(0)) {
      let braceStackCounter = 1;
      this.next();

      while (braceStackCounter > 0) {
        if (this.match(0)) {
          ++braceStackCounter;
        } else if (this.match(3)) {
          --braceStackCounter;
        }

        this.next();
      }

      return true;
    }

    return false;
  }

  tsIsUnambiguouslyStartOfFunctionType() {
    this.next();

    if (this.match(11) || this.match(21)) {
      return true;
    }

    if (this.tsSkipParameterStart()) {
      if (this.match(14) || this.match(12) || this.match(17) || this.match(29)) {
        return true;
      }

      if (this.match(11)) {
        this.next();

        if (this.match(19)) {
          return true;
        }
      }
    }

    return false;
  }

  tsParseTypeOrTypePredicateAnnotation(returnToken) {
    return this.tsInType(() => {
      const t = this.startNode();
      this.expect(returnToken);
      const node = this.startNode();
      const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));

      if (asserts && this.match(78)) {
        let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();

        if (thisTypePredicate.type === "TSThisType") {
          node.parameterName = thisTypePredicate;
          node.asserts = true;
          node.typeAnnotation = null;
          thisTypePredicate = this.finishNode(node, "TSTypePredicate");
        } else {
          this.resetStartLocationFromNode(thisTypePredicate, node);
          thisTypePredicate.asserts = true;
        }

        t.typeAnnotation = thisTypePredicate;
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));

      if (!typePredicateVariable) {
        if (!asserts) {
          return this.tsParseTypeAnnotation(false, t);
        }

        node.parameterName = this.parseIdentifier();
        node.asserts = asserts;
        node.typeAnnotation = null;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      }

      const type = this.tsParseTypeAnnotation(false);
      node.parameterName = typePredicateVariable;
      node.typeAnnotation = type;
      node.asserts = asserts;
      t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
      return this.finishNode(t, "TSTypeAnnotation");
    });
  }

  tsTryParseTypeOrTypePredicateAnnotation() {
    return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : undefined;
  }

  tsTryParseTypeAnnotation() {
    return this.match(14) ? this.tsParseTypeAnnotation() : undefined;
  }

  tsTryParseType() {
    return this.tsEatThenParseType(14);
  }

  tsParseTypePredicatePrefix() {
    const id = this.parseIdentifier();

    if (this.isContextual(113) && !this.hasPrecedingLineBreak()) {
      this.next();
      return id;
    }
  }

  tsParseTypePredicateAsserts() {
    if (this.state.type !== 106) {
      return false;
    }

    const containsEsc = this.state.containsEsc;
    this.next();

    if (!tokenIsIdentifier(this.state.type) && !this.match(78)) {
      return false;
    }

    if (containsEsc) {
      this.raise(ErrorMessages.InvalidEscapedReservedWord, {
        at: this.state.lastTokStartLoc
      }, "asserts");
    }

    return true;
  }

  tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
    this.tsInType(() => {
      if (eatColon) this.expect(14);
      t.typeAnnotation = this.tsParseType();
    });
    return this.finishNode(t, "TSTypeAnnotation");
  }

  tsParseType() {
    assert(this.state.inType);
    const type = this.tsParseNonConditionalType();

    if (this.hasPrecedingLineBreak() || !this.eat(81)) {
      return type;
    }

    const node = this.startNodeAtNode(type);
    node.checkType = type;
    node.extendsType = this.tsParseNonConditionalType();
    this.expect(17);
    node.trueType = this.tsParseType();
    this.expect(14);
    node.falseType = this.tsParseType();
    return this.finishNode(node, "TSConditionalType");
  }

  isAbstractConstructorSignature() {
    return this.isContextual(120) && this.lookahead().type === 77;
  }

  tsParseNonConditionalType() {
    if (this.tsIsStartOfFunctionType()) {
      return this.tsParseFunctionOrConstructorType("TSFunctionType");
    }

    if (this.match(77)) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType");
    } else if (this.isAbstractConstructorSignature()) {
      return this.tsParseFunctionOrConstructorType("TSConstructorType", true);
    }

    return this.tsParseUnionTypeOrHigher();
  }

  tsParseTypeAssertion() {
    if (this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedTypeAssertion, {
        at: this.state.startLoc
      });
    }

    const node = this.startNode();

    const _const = this.tsTryNextParseConstantContext();

    node.typeAnnotation = _const || this.tsNextThenParseType();
    this.expect(48);
    node.expression = this.parseMaybeUnary();
    return this.finishNode(node, "TSTypeAssertion");
  }

  tsParseHeritageClause(descriptor) {
    const originalStartLoc = this.state.startLoc;
    const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));

    if (!delimitedList.length) {
      this.raise(TSErrors.EmptyHeritageClauseType, {
        at: originalStartLoc
      }, descriptor);
    }

    return delimitedList;
  }

  tsParseExpressionWithTypeArguments() {
    const node = this.startNode();
    node.expression = this.tsParseEntityName(false);

    if (this.match(47)) {
      node.typeParameters = this.tsParseTypeArguments();
    }

    return this.finishNode(node, "TSExpressionWithTypeArguments");
  }

  tsParseInterfaceDeclaration(node) {
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();
      this.checkLVal(node.id, "typescript interface declaration", BIND_TS_INTERFACE);
    } else {
      node.id = null;
      this.raise(TSErrors.MissingInterfaceName, {
        at: this.state.startLoc
      });
    }

    node.typeParameters = this.tsTryParseTypeParameters();

    if (this.eat(81)) {
      node.extends = this.tsParseHeritageClause("extends");
    }

    const body = this.startNode();
    body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
    node.body = this.finishNode(body, "TSInterfaceBody");
    return this.finishNode(node, "TSInterfaceDeclaration");
  }

  tsParseTypeAliasDeclaration(node) {
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "typescript type alias", BIND_TS_TYPE);
    node.typeParameters = this.tsTryParseTypeParameters();
    node.typeAnnotation = this.tsInType(() => {
      this.expect(29);

      if (this.isContextual(111) && this.lookahead().type !== 16) {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "TSIntrinsicKeyword");
      }

      return this.tsParseType();
    });
    this.semicolon();
    return this.finishNode(node, "TSTypeAliasDeclaration");
  }

  tsInNoContext(cb) {
    const oldContext = this.state.context;
    this.state.context = [oldContext[0]];

    try {
      return cb();
    } finally {
      this.state.context = oldContext;
    }
  }

  tsInType(cb) {
    const oldInType = this.state.inType;
    this.state.inType = true;

    try {
      return cb();
    } finally {
      this.state.inType = oldInType;
    }
  }

  tsEatThenParseType(token) {
    return !this.match(token) ? undefined : this.tsNextThenParseType();
  }

  tsExpectThenParseType(token) {
    return this.tsDoThenParseType(() => this.expect(token));
  }

  tsNextThenParseType() {
    return this.tsDoThenParseType(() => this.next());
  }

  tsDoThenParseType(cb) {
    return this.tsInType(() => {
      cb();
      return this.tsParseType();
    });
  }

  tsParseEnumMember() {
    const node = this.startNode();
    node.id = this.match(129) ? this.parseExprAtom() : this.parseIdentifier(true);

    if (this.eat(29)) {
      node.initializer = this.parseMaybeAssignAllowIn();
    }

    return this.finishNode(node, "TSEnumMember");
  }

  tsParseEnumDeclaration(node, isConst) {
    if (isConst) node.const = true;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "typescript enum declaration", isConst ? BIND_TS_CONST_ENUM : BIND_TS_ENUM);
    this.expect(5);
    node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
    this.expect(8);
    return this.finishNode(node, "TSEnumDeclaration");
  }

  tsParseModuleBlock() {
    const node = this.startNode();
    this.scope.enter(SCOPE_OTHER);
    this.expect(5);
    this.parseBlockOrModuleBlockBody(node.body = [], undefined, true, 8);
    this.scope.exit();
    return this.finishNode(node, "TSModuleBlock");
  }

  tsParseModuleOrNamespaceDeclaration(node, nested = false) {
    node.id = this.parseIdentifier();

    if (!nested) {
      this.checkLVal(node.id, "module or namespace declaration", BIND_TS_NAMESPACE);
    }

    if (this.eat(16)) {
      const inner = this.startNode();
      this.tsParseModuleOrNamespaceDeclaration(inner, true);
      node.body = inner;
    } else {
      this.scope.enter(SCOPE_TS_MODULE);
      this.prodParam.enter(PARAM);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseAmbientExternalModuleDeclaration(node) {
    if (this.isContextual(109)) {
      node.global = true;
      node.id = this.parseIdentifier();
    } else if (this.match(129)) {
      node.id = this.parseExprAtom();
    } else {
      this.unexpected();
    }

    if (this.match(5)) {
      this.scope.enter(SCOPE_TS_MODULE);
      this.prodParam.enter(PARAM);
      node.body = this.tsParseModuleBlock();
      this.prodParam.exit();
      this.scope.exit();
    } else {
      this.semicolon();
    }

    return this.finishNode(node, "TSModuleDeclaration");
  }

  tsParseImportEqualsDeclaration(node, isExport) {
    node.isExport = isExport || false;
    node.id = this.parseIdentifier();
    this.checkLVal(node.id, "import equals declaration", BIND_LEXICAL);
    this.expect(29);
    const moduleReference = this.tsParseModuleReference();

    if (node.importKind === "type" && moduleReference.type !== "TSExternalModuleReference") {
      this.raise(TSErrors.ImportAliasHasImportType, {
        node: moduleReference
      });
    }

    node.moduleReference = moduleReference;
    this.semicolon();
    return this.finishNode(node, "TSImportEqualsDeclaration");
  }

  tsIsExternalModuleReference() {
    return this.isContextual(116) && this.lookaheadCharCode() === 40;
  }

  tsParseModuleReference() {
    return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
  }

  tsParseExternalModuleReference() {
    const node = this.startNode();
    this.expectContextual(116);
    this.expect(10);

    if (!this.match(129)) {
      throw this.unexpected();
    }

    node.expression = this.parseExprAtom();
    this.expect(11);
    return this.finishNode(node, "TSExternalModuleReference");
  }

  tsLookAhead(f) {
    const state = this.state.clone();
    const res = f();
    this.state = state;
    return res;
  }

  tsTryParseAndCatch(f) {
    const result = this.tryParse(abort => f() || abort());
    if (result.aborted || !result.node) return undefined;
    if (result.error) this.state = result.failState;
    return result.node;
  }

  tsTryParse(f) {
    const state = this.state.clone();
    const result = f();

    if (result !== undefined && result !== false) {
      return result;
    } else {
      this.state = state;
      return undefined;
    }
  }

  tsTryParseDeclare(nany) {
    if (this.isLineTerminator()) {
      return;
    }

    let starttype = this.state.type;
    let kind;

    if (this.isContextual(99)) {
      starttype = 74;
      kind = "let";
    }

    return this.tsInAmbientContext(() => {
      switch (starttype) {
        case 68:
          nany.declare = true;
          return this.parseFunctionStatement(nany, false, true);

        case 80:
          nany.declare = true;
          return this.parseClass(nany, true, false);

        case 75:
          if (this.match(75) && this.isLookaheadContextual("enum")) {
            this.expect(75);
            this.expectContextual(122);
            return this.tsParseEnumDeclaration(nany, true);
          }

        case 74:
          kind = kind || this.state.value;
          return this.parseVarStatement(nany, kind);

        case 109:
          return this.tsParseAmbientExternalModuleDeclaration(nany);

        default:
          {
            if (tokenIsIdentifier(starttype)) {
              return this.tsParseDeclaration(nany, this.state.value, true);
            }
          }
      }
    });
  }

  tsTryParseExportDeclaration() {
    return this.tsParseDeclaration(this.startNode(), this.state.value, true);
  }

  tsParseExpressionStatement(node, expr) {
    switch (expr.name) {
      case "declare":
        {
          const declaration = this.tsTryParseDeclare(node);

          if (declaration) {
            declaration.declare = true;
            return declaration;
          }

          break;
        }

      case "global":
        if (this.match(5)) {
          this.scope.enter(SCOPE_TS_MODULE);
          this.prodParam.enter(PARAM);
          const mod = node;
          mod.global = true;
          mod.id = expr;
          mod.body = this.tsParseModuleBlock();
          this.scope.exit();
          this.prodParam.exit();
          return this.finishNode(mod, "TSModuleDeclaration");
        }

        break;

      default:
        return this.tsParseDeclaration(node, expr.name, false);
    }
  }

  tsParseDeclaration(node, value, next) {
    switch (value) {
      case "abstract":
        if (this.tsCheckLineTerminator(next) && (this.match(80) || tokenIsIdentifier(this.state.type))) {
          return this.tsParseAbstractDeclaration(node);
        }

        break;

      case "enum":
        if (next || tokenIsIdentifier(this.state.type)) {
          if (next) this.next();
          return this.tsParseEnumDeclaration(node, false);
        }

        break;

      case "interface":
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          return this.tsParseInterfaceDeclaration(node);
        }

        break;

      case "module":
        if (this.tsCheckLineTerminator(next)) {
          if (this.match(129)) {
            return this.tsParseAmbientExternalModuleDeclaration(node);
          } else if (tokenIsIdentifier(this.state.type)) {
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }
        }

        break;

      case "namespace":
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          return this.tsParseModuleOrNamespaceDeclaration(node);
        }

        break;

      case "type":
        if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
          return this.tsParseTypeAliasDeclaration(node);
        }

        break;
    }
  }

  tsCheckLineTerminator(next) {
    if (next) {
      if (this.hasFollowingLineBreak()) return false;
      this.next();
      return true;
    }

    return !this.isLineTerminator();
  }

  tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
    if (!this.match(47)) {
      return undefined;
    }

    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = true;
    const res = this.tsTryParseAndCatch(() => {
      const node = this.startNodeAt(startPos, startLoc);
      node.typeParameters = this.tsParseTypeParameters();
      super.parseFunctionParams(node);
      node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
      this.expect(19);
      return node;
    });
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;

    if (!res) {
      return undefined;
    }

    return this.parseArrowExpression(res, null, true);
  }

  tsParseTypeArgumentsInExpression() {
    if (this.reScan_lt() !== 47) {
      return undefined;
    }

    return this.tsParseTypeArguments();
  }

  tsParseTypeArguments() {
    const node = this.startNode();
    node.params = this.tsInType(() => this.tsInNoContext(() => {
      this.expect(47);
      return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
    }));

    if (node.params.length === 0) {
      this.raise(TSErrors.EmptyTypeArguments, {
        node
      });
    }

    this.expect(48);
    return this.finishNode(node, "TSTypeParameterInstantiation");
  }

  tsIsDeclarationStart() {
    return tokenIsTSDeclarationStart(this.state.type);
  }

  isExportDefaultSpecifier() {
    if (this.tsIsDeclarationStart()) return false;
    return super.isExportDefaultSpecifier();
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let accessibility;
    let readonly = false;
    let override = false;

    if (allowModifiers !== undefined) {
      const modified = {};
      this.tsParseModifiers(modified, ["public", "private", "protected", "override", "readonly"]);
      accessibility = modified.accessibility;
      override = modified.override;
      readonly = modified.readonly;

      if (allowModifiers === false && (accessibility || readonly || override)) {
        this.raise(TSErrors.UnexpectedParameterModifier, {
          at: startLoc
        });
      }
    }

    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (accessibility || readonly || override) {
      const pp = this.startNodeAt(startPos, startLoc);

      if (decorators.length) {
        pp.decorators = decorators;
      }

      if (accessibility) pp.accessibility = accessibility;
      if (readonly) pp.readonly = readonly;
      if (override) pp.override = override;

      if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
        this.raise(TSErrors.UnsupportedParameterPropertyKind, {
          node: pp
        });
      }

      pp.parameter = elt;
      return this.finishNode(pp, "TSParameterProperty");
    }

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    if (this.match(14)) {
      node.returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
    }

    const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" || type === "ClassPrivateMethod" ? "TSDeclareMethod" : undefined;

    if (bodilessType && !this.match(5) && this.isLineTerminator()) {
      this.finishNode(node, bodilessType);
      return;
    }

    if (bodilessType === "TSDeclareFunction" && this.state.isAmbientContext) {
      this.raise(TSErrors.DeclareFunctionHasImplementation, {
        node
      });

      if (node.declare) {
        super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
        return;
      }
    }

    super.parseFunctionBodyAndFinish(node, type, isMethod);
  }

  registerFunctionStatementId(node) {
    if (!node.body && node.id) {
      this.checkLVal(node.id, "function name", BIND_TS_AMBIENT);
    } else {
      super.registerFunctionStatementId(...arguments);
    }
  }

  tsCheckForInvalidTypeCasts(items) {
    items.forEach(node => {
      if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
        this.raise(TSErrors.UnexpectedTypeAnnotation, {
          node: node.typeAnnotation
        });
      }
    });
  }

  toReferencedList(exprList, isInParens) {
    this.tsCheckForInvalidTypeCasts(exprList);
    return exprList;
  }

  parseArrayLike(...args) {
    const node = super.parseArrayLike(...args);

    if (node.type === "ArrayExpression") {
      this.tsCheckForInvalidTypeCasts(node.elements);
    }

    return node;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    if (!this.hasPrecedingLineBreak() && this.match(35)) {
      this.state.canStartJSXElement = false;
      this.next();
      const nonNullExpression = this.startNodeAt(startPos, startLoc);
      nonNullExpression.expression = base;
      return this.finishNode(nonNullExpression, "TSNonNullExpression");
    }

    let isOptionalCall = false;

    if (this.match(18) && this.lookaheadCharCode() === 60) {
      if (noCalls) {
        state.stop = true;
        return base;
      }

      state.optionalChainMember = isOptionalCall = true;
      this.next();
    }

    if (this.match(47) || this.match(51)) {
      let missingParenErrorLoc;
      const result = this.tsTryParseAndCatch(() => {
        if (!noCalls && this.atPossibleAsyncArrow(base)) {
          const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);

          if (asyncArrowFn) {
            return asyncArrowFn;
          }
        }

        const node = this.startNodeAt(startPos, startLoc);
        node.callee = base;
        const typeArguments = this.tsParseTypeArgumentsInExpression();

        if (typeArguments) {
          if (isOptionalCall && !this.match(10)) {
            missingParenErrorLoc = this.state.curPosition();
            this.unexpected();
          }

          if (!noCalls && this.eat(10)) {
            node.arguments = this.parseCallExpressionArguments(11, false);
            this.tsCheckForInvalidTypeCasts(node.arguments);
            node.typeParameters = typeArguments;

            if (state.optionalChainMember) {
              node.optional = isOptionalCall;
            }

            return this.finishCallExpression(node, state.optionalChainMember);
          } else if (tokenIsTemplate(this.state.type)) {
            const result = this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
            result.typeParameters = typeArguments;
            return result;
          }
        }

        this.unexpected();
      });

      if (missingParenErrorLoc) {
        this.unexpected(missingParenErrorLoc, 10);
      }

      if (result) return result;
    }

    return super.parseSubscript(base, startPos, startLoc, noCalls, state);
  }

  parseNewArguments(node) {
    if (this.match(47) || this.match(51)) {
      const typeParameters = this.tsTryParseAndCatch(() => {
        const args = this.tsParseTypeArgumentsInExpression();
        if (!this.match(10)) this.unexpected();
        return args;
      });

      if (typeParameters) {
        node.typeParameters = typeParameters;
      }
    }

    super.parseNewArguments(node);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
    if (tokenOperatorPrecedence(58) > minPrec && !this.hasPrecedingLineBreak() && this.isContextual(93)) {
      const node = this.startNodeAt(leftStartPos, leftStartLoc);
      node.expression = left;

      const _const = this.tsTryNextParseConstantContext();

      if (_const) {
        node.typeAnnotation = _const;
      } else {
        node.typeAnnotation = this.tsNextThenParseType();
      }

      this.finishNode(node, "TSAsExpression");
      this.reScan_lt_gt();
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
    }

    return super.parseExprOp(left, leftStartPos, leftStartLoc, minPrec);
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {}

  checkDuplicateExports() {}

  parseImport(node) {
    node.importKind = "value";

    if (tokenIsIdentifier(this.state.type) || this.match(55) || this.match(5)) {
      let ahead = this.lookahead();

      if (this.isContextual(126) && ahead.type !== 12 && ahead.type !== 97 && ahead.type !== 29) {
        node.importKind = "type";
        this.next();
        ahead = this.lookahead();
      }

      if (tokenIsIdentifier(this.state.type) && ahead.type === 29) {
        return this.tsParseImportEqualsDeclaration(node);
      }
    }

    const importNode = super.parseImport(node);

    if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
      this.raise(TSErrors.TypeImportCannotSpecifyDefaultAndNamed, {
        node: importNode
      });
    }

    return importNode;
  }

  parseExport(node) {
    if (this.match(83)) {
      this.next();

      if (this.isContextual(126) && this.lookaheadCharCode() !== 61) {
        node.importKind = "type";
        this.next();
      } else {
        node.importKind = "value";
      }

      return this.tsParseImportEqualsDeclaration(node, true);
    } else if (this.eat(29)) {
      const assign = node;
      assign.expression = this.parseExpression();
      this.semicolon();
      return this.finishNode(assign, "TSExportAssignment");
    } else if (this.eatContextual(93)) {
      const decl = node;
      this.expectContextual(124);
      decl.id = this.parseIdentifier();
      this.semicolon();
      return this.finishNode(decl, "TSNamespaceExportDeclaration");
    } else {
      if (this.isContextual(126) && this.lookahead().type === 5) {
        this.next();
        node.exportKind = "type";
      } else {
        node.exportKind = "value";
      }

      return super.parseExport(node);
    }
  }

  isAbstractClass() {
    return this.isContextual(120) && this.lookahead().type === 80;
  }

  parseExportDefaultExpression() {
    if (this.isAbstractClass()) {
      const cls = this.startNode();
      this.next();
      cls.abstract = true;
      this.parseClass(cls, true, true);
      return cls;
    }

    if (this.match(125)) {
      const interfaceNode = this.startNode();
      this.next();
      const result = this.tsParseInterfaceDeclaration(interfaceNode);
      if (result) return result;
    }

    return super.parseExportDefaultExpression();
  }

  parseStatementContent(context, topLevel) {
    if (this.state.type === 75) {
      const ahead = this.lookahead();

      if (ahead.type === 122) {
        const node = this.startNode();
        this.next();
        this.expectContextual(122);
        return this.tsParseEnumDeclaration(node, true);
      }
    }

    return super.parseStatementContent(context, topLevel);
  }

  parseAccessModifier() {
    return this.tsParseModifier(["public", "protected", "private"]);
  }

  tsHasSomeModifiers(member, modifiers) {
    return modifiers.some(modifier => {
      if (tsIsAccessModifier(modifier)) {
        return member.accessibility === modifier;
      }

      return !!member[modifier];
    });
  }

  tsIsStartOfStaticBlocks() {
    return this.isContextual(104) && this.lookaheadCharCode() === 123;
  }

  parseClassMember(classBody, member, state) {
    const modifiers = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
    this.tsParseModifiers(member, modifiers, undefined, undefined, true);

    const callParseClassMemberWithIsStatic = () => {
      if (this.tsIsStartOfStaticBlocks()) {
        this.next();
        this.next();

        if (this.tsHasSomeModifiers(member, modifiers)) {
          this.raise(TSErrors.StaticBlockCannotHaveModifier, {
            at: this.state.curPosition()
          });
        }

        this.parseClassStaticBlock(classBody, member);
      } else {
        this.parseClassMemberWithIsStatic(classBody, member, state, !!member.static);
      }
    };

    if (member.declare) {
      this.tsInAmbientContext(callParseClassMemberWithIsStatic);
    } else {
      callParseClassMemberWithIsStatic();
    }
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const idx = this.tsTryParseIndexSignature(member);

    if (idx) {
      classBody.body.push(idx);

      if (member.abstract) {
        this.raise(TSErrors.IndexSignatureHasAbstract, {
          node: member
        });
      }

      if (member.accessibility) {
        this.raise(TSErrors.IndexSignatureHasAccessibility, {
          node: member
        }, member.accessibility);
      }

      if (member.declare) {
        this.raise(TSErrors.IndexSignatureHasDeclare, {
          node: member
        });
      }

      if (member.override) {
        this.raise(TSErrors.IndexSignatureHasOverride, {
          node: member
        });
      }

      return;
    }

    if (!this.state.inAbstractClass && member.abstract) {
      this.raise(TSErrors.NonAbstractClassHasAbstractMethod, {
        node: member
      });
    }

    if (member.override) {
      if (!state.hadSuperClass) {
        this.raise(TSErrors.OverrideNotInSubClass, {
          node: member
        });
      }
    }

    super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }

  parsePostMemberNameModifiers(methodOrProp) {
    const optional = this.eat(17);
    if (optional) methodOrProp.optional = true;

    if (methodOrProp.readonly && this.match(10)) {
      this.raise(TSErrors.ClassMethodHasReadonly, {
        node: methodOrProp
      });
    }

    if (methodOrProp.declare && this.match(10)) {
      this.raise(TSErrors.ClassMethodHasDeclare, {
        node: methodOrProp
      });
    }
  }

  parseExpressionStatement(node, expr) {
    const decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : undefined;
    return decl || super.parseExpressionStatement(node, expr);
  }

  shouldParseExportDeclaration() {
    if (this.tsIsDeclarationStart()) return true;
    return super.shouldParseExportDeclaration();
  }

  parseConditional(expr, startPos, startLoc, refExpressionErrors) {
    if (!this.state.maybeInArrowParameters || !this.match(17)) {
      return super.parseConditional(expr, startPos, startLoc, refExpressionErrors);
    }

    const result = this.tryParse(() => super.parseConditional(expr, startPos, startLoc));

    if (!result.node) {
      if (result.error) {
        super.setOptionalParametersError(refExpressionErrors, result.error);
      }

      return expr;
    }

    if (result.error) this.state = result.failState;
    return result.node;
  }

  parseParenItem(node, startPos, startLoc) {
    node = super.parseParenItem(node, startPos, startLoc);

    if (this.eat(17)) {
      node.optional = true;
      this.resetEndLocation(node);
    }

    if (this.match(14)) {
      const typeCastNode = this.startNodeAt(startPos, startLoc);
      typeCastNode.expression = node;
      typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
      return this.finishNode(typeCastNode, "TSTypeCastExpression");
    }

    return node;
  }

  parseExportDeclaration(node) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const isDeclare = this.eatContextual(121);

    if (isDeclare && (this.isContextual(121) || !this.shouldParseExportDeclaration())) {
      throw this.raise(TSErrors.ExpectedAmbientAfterExportDeclare, {
        at: this.state.startLoc
      });
    }

    let declaration;

    if (tokenIsIdentifier(this.state.type)) {
      declaration = this.tsTryParseExportDeclaration();
    }

    if (!declaration) {
      declaration = super.parseExportDeclaration(node);
    }

    if (declaration && (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare)) {
      node.exportKind = "type";
    }

    if (declaration && isDeclare) {
      this.resetStartLocation(declaration, startPos, startLoc);
      declaration.declare = true;
    }

    return declaration;
  }

  parseClassId(node, isStatement, optionalId) {
    if ((!isStatement || optionalId) && this.isContextual(110)) {
      return;
    }

    super.parseClassId(node, isStatement, optionalId, node.declare ? BIND_TS_AMBIENT : BIND_CLASS);
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
  }

  parseClassPropertyAnnotation(node) {
    if (!node.optional && this.eat(35)) {
      node.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) node.typeAnnotation = type;
  }

  parseClassProperty(node) {
    this.parseClassPropertyAnnotation(node);

    if (this.state.isAmbientContext && this.match(29)) {
      this.raise(TSErrors.DeclareClassFieldHasInitializer, {
        at: this.state.startLoc
      });
    }

    if (node.abstract && this.match(29)) {
      const {
        key
      } = node;
      this.raise(TSErrors.AbstractPropertyHasInitializer, {
        at: this.state.startLoc
      }, key.type === "Identifier" && !node.computed ? key.name : `[${this.input.slice(key.start, key.end)}]`);
    }

    return super.parseClassProperty(node);
  }

  parseClassPrivateProperty(node) {
    if (node.abstract) {
      this.raise(TSErrors.PrivateElementHasAbstract, {
        node
      });
    }

    if (node.accessibility) {
      this.raise(TSErrors.PrivateElementHasAccessibility, {
        node
      }, node.accessibility);
    }

    this.parseClassPropertyAnnotation(node);
    return super.parseClassPrivateProperty(node);
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    const typeParameters = this.tsTryParseTypeParameters();

    if (typeParameters && isConstructor) {
      this.raise(TSErrors.ConstructorHasTypeParameters, {
        node: typeParameters
      });
    }

    if (method.declare && (method.kind === "get" || method.kind === "set")) {
      this.raise(TSErrors.DeclareAccessor, {
        node: method
      }, method.kind);
    }

    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) method.typeParameters = typeParameters;
    super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
  }

  declareClassPrivateMethodInScope(node, kind) {
    if (node.type === "TSDeclareMethod") return;
    if (node.type === "MethodDefinition" && !node.value.body) return;
    super.declareClassPrivateMethodInScope(node, kind);
  }

  parseClassSuper(node) {
    super.parseClassSuper(node);

    if (node.superClass && (this.match(47) || this.match(51))) {
      node.superTypeParameters = this.tsParseTypeArgumentsInExpression();
    }

    if (this.eatContextual(110)) {
      node.implements = this.tsParseHeritageClause("implements");
    }
  }

  parseObjPropValue(prop, ...args) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) prop.typeParameters = typeParameters;
    super.parseObjPropValue(prop, ...args);
  }

  parseFunctionParams(node, allowModifiers) {
    const typeParameters = this.tsTryParseTypeParameters();
    if (typeParameters) node.typeParameters = typeParameters;
    super.parseFunctionParams(node, allowModifiers);
  }

  parseVarId(decl, kind) {
    super.parseVarId(decl, kind);

    if (decl.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35)) {
      decl.definite = true;
    }

    const type = this.tsTryParseTypeAnnotation();

    if (type) {
      decl.id.typeAnnotation = type;
      this.resetEndLocation(decl.id);
    }
  }

  parseAsyncArrowFromCallExpression(node, call) {
    if (this.match(14)) {
      node.returnType = this.tsParseTypeAnnotation();
    }

    return super.parseAsyncArrowFromCallExpression(node, call);
  }

  parseMaybeAssign(...args) {
    var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2, _jsx4, _typeCast3;

    let state;
    let jsx;
    let typeCast;

    if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
      state = this.state.clone();
      jsx = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!jsx.error) return jsx.node;
      const {
        context
      } = this.state;
      const currentContext = context[context.length - 1];

      if (currentContext === types.j_oTag || currentContext === types.j_expr) {
        context.pop();
      }
    }

    if (!((_jsx = jsx) != null && _jsx.error) && !this.match(47)) {
      return super.parseMaybeAssign(...args);
    }

    let typeParameters;
    state = state || this.state.clone();
    const arrow = this.tryParse(abort => {
      var _expr$extra, _typeParameters;

      typeParameters = this.tsParseTypeParameters();
      const expr = super.parseMaybeAssign(...args);

      if (expr.type !== "ArrowFunctionExpression" || (_expr$extra = expr.extra) != null && _expr$extra.parenthesized) {
        abort();
      }

      if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
        this.resetStartLocationFromNode(expr, typeParameters);
      }

      expr.typeParameters = typeParameters;
      return expr;
    }, state);

    if (!arrow.error && !arrow.aborted) {
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }

    if (!jsx) {
      assert(!this.hasPlugin("jsx"));
      typeCast = this.tryParse(() => super.parseMaybeAssign(...args), state);
      if (!typeCast.error) return typeCast.node;
    }

    if ((_jsx2 = jsx) != null && _jsx2.node) {
      this.state = jsx.failState;
      return jsx.node;
    }

    if (arrow.node) {
      this.state = arrow.failState;
      if (typeParameters) this.reportReservedArrowTypeParam(typeParameters);
      return arrow.node;
    }

    if ((_typeCast = typeCast) != null && _typeCast.node) {
      this.state = typeCast.failState;
      return typeCast.node;
    }

    if ((_jsx3 = jsx) != null && _jsx3.thrown) throw jsx.error;
    if (arrow.thrown) throw arrow.error;
    if ((_typeCast2 = typeCast) != null && _typeCast2.thrown) throw typeCast.error;
    throw ((_jsx4 = jsx) == null ? void 0 : _jsx4.error) || arrow.error || ((_typeCast3 = typeCast) == null ? void 0 : _typeCast3.error);
  }

  reportReservedArrowTypeParam(node) {
    var _node$extra;

    if (node.params.length === 1 && !((_node$extra = node.extra) != null && _node$extra.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
      this.raise(TSErrors.ReservedArrowTypeParam, {
        node
      });
    }
  }

  parseMaybeUnary(refExpressionErrors) {
    if (!this.hasPlugin("jsx") && this.match(47)) {
      return this.tsParseTypeAssertion();
    } else {
      return super.parseMaybeUnary(refExpressionErrors);
    }
  }

  parseArrow(node) {
    if (this.match(14)) {
      const result = this.tryParse(abort => {
        const returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
        if (this.canInsertSemicolon() || !this.match(19)) abort();
        return returnType;
      });
      if (result.aborted) return;

      if (!result.thrown) {
        if (result.error) this.state = result.failState;
        node.returnType = result.node;
      }
    }

    return super.parseArrow(node);
  }

  parseAssignableListItemTypes(param) {
    if (this.eat(17)) {
      if (param.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType) {
        this.raise(TSErrors.PatternIsOptional, {
          node: param
        });
      }

      param.optional = true;
    }

    const type = this.tsTryParseTypeAnnotation();
    if (type) param.typeAnnotation = type;
    this.resetEndLocation(param);
    return param;
  }

  isAssignable(node, isBinding) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return this.isAssignable(node.expression, isBinding);

      case "TSParameterProperty":
        return true;

      default:
        return super.isAssignable(node, isBinding);
    }
  }

  toAssignable(node, isLHS = false) {
    switch (node.type) {
      case "TSTypeCastExpression":
        return super.toAssignable(this.typeCastToParameter(node), isLHS);

      case "TSParameterProperty":
        return super.toAssignable(node, isLHS);

      case "ParenthesizedExpression":
        return this.toAssignableParenthesizedExpression(node, isLHS);

      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
        node.expression = this.toAssignable(node.expression, isLHS);
        return node;

      default:
        return super.toAssignable(node, isLHS);
    }
  }

  toAssignableParenthesizedExpression(node, isLHS) {
    switch (node.expression.type) {
      case "TSAsExpression":
      case "TSNonNullExpression":
      case "TSTypeAssertion":
      case "ParenthesizedExpression":
        node.expression = this.toAssignable(node.expression, isLHS);
        return node;

      default:
        return super.toAssignable(node, isLHS);
    }
  }

  checkLVal(expr, contextDescription, ...args) {
    var _expr$extra2;

    switch (expr.type) {
      case "TSTypeCastExpression":
        return;

      case "TSParameterProperty":
        this.checkLVal(expr.parameter, "parameter property", ...args);
        return;

      case "TSAsExpression":
      case "TSTypeAssertion":
        if (!args[0] && contextDescription !== "parenthesized expression" && !((_expr$extra2 = expr.extra) != null && _expr$extra2.parenthesized)) {
          this.raise(ErrorMessages.InvalidLhs, {
            node: expr
          }, contextDescription);
          break;
        }

        this.checkLVal(expr.expression, "parenthesized expression", ...args);
        return;

      case "TSNonNullExpression":
        this.checkLVal(expr.expression, contextDescription, ...args);
        return;

      default:
        super.checkLVal(expr, contextDescription, ...args);
        return;
    }
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case 78:
        return this.parseIdentifier(true);

      default:
        return super.parseBindingAtom();
    }
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.match(47) || this.match(51)) {
      const typeArguments = this.tsParseTypeArgumentsInExpression();

      if (this.match(10)) {
        const call = super.parseMaybeDecoratorArguments(expr);
        call.typeParameters = typeArguments;
        return call;
      }

      this.unexpected(null, 10);
    }

    return super.parseMaybeDecoratorArguments(expr);
  }

  checkCommaAfterRest(close) {
    if (this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === close) {
      this.next();
      return false;
    } else {
      return super.checkCommaAfterRest(close);
    }
  }

  isClassMethod() {
    return this.match(47) || super.isClassMethod();
  }

  isClassProperty() {
    return this.match(35) || this.match(14) || super.isClassProperty();
  }

  parseMaybeDefault(...args) {
    const node = super.parseMaybeDefault(...args);

    if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
      this.raise(TSErrors.TypeAnnotationAfterAssign, {
        node: node.typeAnnotation
      });
    }

    return node;
  }

  getTokenFromCode(code) {
    if (this.state.inType) {
      if (code === 62) {
        return this.finishOp(48, 1);
      }

      if (code === 60) {
        return this.finishOp(47, 1);
      }
    }

    return super.getTokenFromCode(code);
  }

  reScan_lt_gt() {
    const {
      type
    } = this.state;

    if (type === 47) {
      this.state.pos -= 1;
      this.readToken_lt();
    } else if (type === 48) {
      this.state.pos -= 1;
      this.readToken_gt();
    }
  }

  reScan_lt() {
    const {
      type
    } = this.state;

    if (type === 51) {
      this.state.pos -= 2;
      this.finishOp(47, 1);
      return 47;
    }

    return type;
  }

  toAssignableList(exprList) {
    for (let i = 0; i < exprList.length; i++) {
      const expr = exprList[i];
      if (!expr) continue;

      switch (expr.type) {
        case "TSTypeCastExpression":
          exprList[i] = this.typeCastToParameter(expr);
          break;

        case "TSAsExpression":
        case "TSTypeAssertion":
          if (!this.state.maybeInArrowParameters) {
            exprList[i] = this.typeCastToParameter(expr);
          } else {
            this.raise(TSErrors.UnexpectedTypeCastInParameter, {
              node: expr
            });
          }

          break;
      }
    }

    return super.toAssignableList(...arguments);
  }

  typeCastToParameter(node) {
    node.expression.typeAnnotation = node.typeAnnotation;
    this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
    return node.expression;
  }

  shouldParseArrow(params) {
    if (this.match(14)) {
      return params.every(expr => this.isAssignable(expr, true));
    }

    return super.shouldParseArrow(params);
  }

  shouldParseAsyncArrow() {
    return this.match(14) || super.shouldParseAsyncArrow();
  }

  canHaveLeadingDecorator() {
    return super.canHaveLeadingDecorator() || this.isAbstractClass();
  }

  jsxParseOpeningElementAfterName(node) {
    if (this.match(47) || this.match(51)) {
      const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
      if (typeArguments) node.typeParameters = typeArguments;
    }

    return super.jsxParseOpeningElementAfterName(node);
  }

  getGetterSetterExpectedParamCount(method) {
    const baseCount = super.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);
    const firstParam = params[0];
    const hasContextParam = firstParam && this.isThisParam(firstParam);
    return hasContextParam ? baseCount + 1 : baseCount;
  }

  parseCatchClauseParam() {
    const param = super.parseCatchClauseParam();
    const type = this.tsTryParseTypeAnnotation();

    if (type) {
      param.typeAnnotation = type;
      this.resetEndLocation(param);
    }

    return param;
  }

  tsInAmbientContext(cb) {
    const oldIsAmbientContext = this.state.isAmbientContext;
    this.state.isAmbientContext = true;

    try {
      return cb();
    } finally {
      this.state.isAmbientContext = oldIsAmbientContext;
    }
  }

  parseClass(node, ...args) {
    const oldInAbstractClass = this.state.inAbstractClass;
    this.state.inAbstractClass = !!node.abstract;

    try {
      return super.parseClass(node, ...args);
    } finally {
      this.state.inAbstractClass = oldInAbstractClass;
    }
  }

  tsParseAbstractDeclaration(node) {
    if (this.match(80)) {
      node.abstract = true;
      return this.parseClass(node, true, false);
    } else if (this.isContextual(125)) {
      if (!this.hasFollowingLineBreak()) {
        node.abstract = true;
        this.raise(TSErrors.NonClassMethodPropertyHasAbstractModifer, {
          node
        });
        this.next();
        return this.tsParseInterfaceDeclaration(node);
      }
    } else {
      this.unexpected(null, 80);
    }
  }

  parseMethod(...args) {
    const method = super.parseMethod(...args);

    if (method.abstract) {
      const hasBody = this.hasPlugin("estree") ? !!method.value.body : !!method.body;

      if (hasBody) {
        const {
          key
        } = method;
        this.raise(TSErrors.AbstractMethodHasImplementation, {
          node: method
        }, key.type === "Identifier" && !method.computed ? key.name : `[${this.input.slice(key.start, key.end)}]`);
      }
    }

    return method;
  }

  tsParseTypeParameterName() {
    const typeName = this.parseIdentifier();
    return typeName.name;
  }

  shouldParseAsAmbientContext() {
    return !!this.getPluginOption("typescript", "dts");
  }

  parse() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }

    return super.parse();
  }

  getExpression() {
    if (this.shouldParseAsAmbientContext()) {
      this.state.isAmbientContext = true;
    }

    return super.getExpression();
  }

  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (!isString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(node, false, isInTypeExport);
      return this.finishNode(node, "ExportSpecifier");
    }

    node.exportKind = "value";
    return super.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly);
  }

  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly) {
    if (!importedIsString && isMaybeTypeOnly) {
      this.parseTypeOnlyImportExportSpecifier(specifier, true, isInTypeOnlyImport);
      return this.finishNode(specifier, "ImportSpecifier");
    }

    specifier.importKind = "value";
    return super.parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly);
  }

  parseTypeOnlyImportExportSpecifier(node, isImport, isInTypeOnlyImportExport) {
    const leftOfAsKey = isImport ? "imported" : "local";
    const rightOfAsKey = isImport ? "local" : "exported";
    let leftOfAs = node[leftOfAsKey];
    let rightOfAs;
    let hasTypeSpecifier = false;
    let canParseAsKeyword = true;
    const loc = leftOfAs.loc.start;

    if (this.isContextual(93)) {
      const firstAs = this.parseIdentifier();

      if (this.isContextual(93)) {
        const secondAs = this.parseIdentifier();

        if (tokenIsKeywordOrIdentifier(this.state.type)) {
          hasTypeSpecifier = true;
          leftOfAs = firstAs;
          rightOfAs = this.parseIdentifier();
          canParseAsKeyword = false;
        } else {
          rightOfAs = secondAs;
          canParseAsKeyword = false;
        }
      } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
        canParseAsKeyword = false;
        rightOfAs = this.parseIdentifier();
      } else {
        hasTypeSpecifier = true;
        leftOfAs = firstAs;
      }
    } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
      hasTypeSpecifier = true;
      leftOfAs = this.parseIdentifier();
    }

    if (hasTypeSpecifier && isInTypeOnlyImportExport) {
      this.raise(isImport ? TSErrors.TypeModifierIsUsedInTypeImports : TSErrors.TypeModifierIsUsedInTypeExports, {
        at: loc
      });
    }

    node[leftOfAsKey] = leftOfAs;
    node[rightOfAsKey] = rightOfAs;
    const kindKey = isImport ? "importKind" : "exportKind";
    node[kindKey] = hasTypeSpecifier ? "type" : "value";

    if (canParseAsKeyword && this.eatContextual(93)) {
      node[rightOfAsKey] = isImport ? this.parseIdentifier() : this.parseModuleExportName();
    }

    if (!node[rightOfAsKey]) {
      node[rightOfAsKey] = cloneIdentifier(node[leftOfAsKey]);
    }

    if (isImport) {
      this.checkLVal(node[rightOfAsKey], "import specifier", BIND_LEXICAL);
    }
  }

});

const PlaceholderErrors = makeErrorTemplates({
  ClassNameIsRequired: "A class name is required."
}, ErrorCodes.SyntaxError, "placeholders");
var placeholders = (superClass => class extends superClass {
  parsePlaceholder(expectedNode) {
    if (this.match(140)) {
      const node = this.startNode();
      this.next();
      this.assertNoSpace("Unexpected space in placeholder.");
      node.name = super.parseIdentifier(true);
      this.assertNoSpace("Unexpected space in placeholder.");
      this.expect(140);
      return this.finishPlaceholder(node, expectedNode);
    }
  }

  finishPlaceholder(node, expectedNode) {
    const isFinished = !!(node.expectedNode && node.type === "Placeholder");
    node.expectedNode = expectedNode;
    return isFinished ? node : this.finishNode(node, "Placeholder");
  }

  getTokenFromCode(code) {
    if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
      return this.finishOp(140, 2);
    }

    return super.getTokenFromCode(...arguments);
  }

  parseExprAtom() {
    return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
  }

  parseIdentifier() {
    return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
  }

  checkReservedWord(word) {
    if (word !== undefined) super.checkReservedWord(...arguments);
  }

  parseBindingAtom() {
    return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
  }

  checkLVal(expr) {
    if (expr.type !== "Placeholder") super.checkLVal(...arguments);
  }

  toAssignable(node) {
    if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
      node.expectedNode = "Pattern";
      return node;
    }

    return super.toAssignable(...arguments);
  }

  isLet(context) {
    if (super.isLet(context)) {
      return true;
    }

    if (!this.isContextual(99)) {
      return false;
    }

    if (context) return false;
    const nextToken = this.lookahead();

    if (nextToken.type === 140) {
      return true;
    }

    return false;
  }

  verifyBreakContinue(node) {
    if (node.label && node.label.type === "Placeholder") return;
    super.verifyBreakContinue(...arguments);
  }

  parseExpressionStatement(node, expr) {
    if (expr.type !== "Placeholder" || expr.extra && expr.extra.parenthesized) {
      return super.parseExpressionStatement(...arguments);
    }

    if (this.match(14)) {
      const stmt = node;
      stmt.label = this.finishPlaceholder(expr, "Identifier");
      this.next();
      stmt.body = this.parseStatement("label");
      return this.finishNode(stmt, "LabeledStatement");
    }

    this.semicolon();
    node.name = expr.name;
    return this.finishPlaceholder(node, "Statement");
  }

  parseBlock() {
    return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
  }

  parseFunctionId() {
    return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
  }

  parseClass(node, isStatement, optionalId) {
    const type = isStatement ? "ClassDeclaration" : "ClassExpression";
    this.next();
    this.takeDecorators(node);
    const oldStrict = this.state.strict;
    const placeholder = this.parsePlaceholder("Identifier");

    if (placeholder) {
      if (this.match(81) || this.match(140) || this.match(5)) {
        node.id = placeholder;
      } else if (optionalId || !isStatement) {
        node.id = null;
        node.body = this.finishPlaceholder(placeholder, "ClassBody");
        return this.finishNode(node, type);
      } else {
        throw this.raise(PlaceholderErrors.ClassNameIsRequired, {
          at: this.state.startLoc
        });
      }
    } else {
      this.parseClassId(node, isStatement, optionalId);
    }

    this.parseClassSuper(node);
    node.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, type);
  }

  parseExport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseExport(...arguments);

    if (!this.isContextual(97) && !this.match(12)) {
      node.specifiers = [];
      node.source = null;
      node.declaration = this.finishPlaceholder(placeholder, "Declaration");
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    this.expectPlugin("exportDefaultFrom");
    const specifier = this.startNode();
    specifier.exported = placeholder;
    node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
    return super.parseExport(node);
  }

  isExportDefaultSpecifier() {
    if (this.match(65)) {
      const next = this.nextTokenStart();

      if (this.isUnparsedContextual(next, "from")) {
        if (this.input.startsWith(tokenLabelName(140), this.nextTokenStartSince(next + 4))) {
          return true;
        }
      }
    }

    return super.isExportDefaultSpecifier();
  }

  maybeParseExportDefaultSpecifier(node) {
    if (node.specifiers && node.specifiers.length > 0) {
      return true;
    }

    return super.maybeParseExportDefaultSpecifier(...arguments);
  }

  checkExport(node) {
    const {
      specifiers
    } = node;

    if (specifiers != null && specifiers.length) {
      node.specifiers = specifiers.filter(node => node.exported.type === "Placeholder");
    }

    super.checkExport(node);
    node.specifiers = specifiers;
  }

  parseImport(node) {
    const placeholder = this.parsePlaceholder("Identifier");
    if (!placeholder) return super.parseImport(...arguments);
    node.specifiers = [];

    if (!this.isContextual(97) && !this.match(12)) {
      node.source = this.finishPlaceholder(placeholder, "StringLiteral");
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }

    const specifier = this.startNodeAtNode(placeholder);
    specifier.local = placeholder;
    this.finishNode(specifier, "ImportDefaultSpecifier");
    node.specifiers.push(specifier);

    if (this.eat(12)) {
      const hasStarImport = this.maybeParseStarImportSpecifier(node);
      if (!hasStarImport) this.parseNamedImportSpecifiers(node);
    }

    this.expectContextual(97);
    node.source = this.parseImportSource();
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
  }

});

var v8intrinsic = (superClass => class extends superClass {
  parseV8Intrinsic() {
    if (this.match(54)) {
      const v8IntrinsicStartLoc = this.state.startLoc;
      const node = this.startNode();
      this.next();

      if (tokenIsIdentifier(this.state.type)) {
        const name = this.parseIdentifierName(this.state.start);
        const identifier = this.createIdentifier(node, name);
        identifier.type = "V8IntrinsicIdentifier";

        if (this.match(10)) {
          return identifier;
        }
      }

      this.unexpected(v8IntrinsicStartLoc);
    }
  }

  parseExprAtom() {
    return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
  }

});

function hasPlugin(plugins, expectedConfig) {
  const [expectedName, expectedOptions] = typeof expectedConfig === "string" ? [expectedConfig, {}] : expectedConfig;
  const expectedKeys = Object.keys(expectedOptions);
  const expectedOptionsIsEmpty = expectedKeys.length === 0;
  return plugins.some(p => {
    if (typeof p === "string") {
      return expectedOptionsIsEmpty && p === expectedName;
    } else {
      const [pluginName, pluginOptions] = p;

      if (pluginName !== expectedName) {
        return false;
      }

      for (const key of expectedKeys) {
        if (pluginOptions[key] !== expectedOptions[key]) {
          return false;
        }
      }

      return true;
    }
  });
}
function getPluginOption(plugins, name, option) {
  const plugin = plugins.find(plugin => {
    if (Array.isArray(plugin)) {
      return plugin[0] === name;
    } else {
      return plugin === name;
    }
  });

  if (plugin && Array.isArray(plugin)) {
    return plugin[1][option];
  }

  return null;
}
const PIPELINE_PROPOSALS = ["minimal", "fsharp", "hack", "smart"];
const TOPIC_TOKENS = ["^^", "@@", "^", "%", "#"];
const RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];
function validatePlugins(plugins) {
  if (hasPlugin(plugins, "decorators")) {
    if (hasPlugin(plugins, "decorators-legacy")) {
      throw new Error("Cannot use the decorators and decorators-legacy plugin together");
    }

    const decoratorsBeforeExport = getPluginOption(plugins, "decorators", "decoratorsBeforeExport");

    if (decoratorsBeforeExport == null) {
      throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option," + " whose value must be a boolean. If you are migrating from" + " Babylon/Babel 6 or want to use the old decorators proposal, you" + " should use the 'decorators-legacy' plugin instead of 'decorators'.");
    } else if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }

  if (hasPlugin(plugins, "flow") && hasPlugin(plugins, "typescript")) {
    throw new Error("Cannot combine flow and typescript plugins.");
  }

  if (hasPlugin(plugins, "placeholders") && hasPlugin(plugins, "v8intrinsic")) {
    throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
  }

  if (hasPlugin(plugins, "pipelineOperator")) {
    const proposal = getPluginOption(plugins, "pipelineOperator", "proposal");

    if (!PIPELINE_PROPOSALS.includes(proposal)) {
      const proposalList = PIPELINE_PROPOSALS.map(p => `"${p}"`).join(", ");
      throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${proposalList}.`);
    }

    const tupleSyntaxIsHash = hasPlugin(plugins, ["recordAndTuple", {
      syntaxType: "hash"
    }]);

    if (proposal === "hack") {
      if (hasPlugin(plugins, "placeholders")) {
        throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
      }

      if (hasPlugin(plugins, "v8intrinsic")) {
        throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
      }

      const topicToken = getPluginOption(plugins, "pipelineOperator", "topicToken");

      if (!TOPIC_TOKENS.includes(topicToken)) {
        const tokenList = TOPIC_TOKENS.map(t => `"${t}"`).join(", ");
        throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${tokenList}.`);
      }

      if (topicToken === "#" && tupleSyntaxIsHash) {
        throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
      }
    } else if (proposal === "smart" && tupleSyntaxIsHash) {
      throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
    }
  }

  if (hasPlugin(plugins, "moduleAttributes")) {
    {
      if (hasPlugin(plugins, "importAssertions")) {
        throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      }

      const moduleAttributesVerionPluginOption = getPluginOption(plugins, "moduleAttributes", "version");

      if (moduleAttributesVerionPluginOption !== "may-2020") {
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option," + " representing the last proposal update. Currently, the" + " only supported value is 'may-2020'.");
      }
    }
  }

  if (hasPlugin(plugins, "recordAndTuple") && !RECORD_AND_TUPLE_SYNTAX_TYPES.includes(getPluginOption(plugins, "recordAndTuple", "syntaxType"))) {
    throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map(p => `'${p}'`).join(", "));
  }

  if (hasPlugin(plugins, "asyncDoExpressions") && !hasPlugin(plugins, "doExpressions")) {
    const error = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
    error.missingPlugins = "doExpressions";
    throw error;
  }
}
const mixinPlugins = {
  estree,
  jsx,
  flow,
  typescript,
  v8intrinsic,
  placeholders
};
const mixinPluginNames = Object.keys(mixinPlugins);

const defaultOptions = {
  sourceType: "script",
  sourceFilename: undefined,
  startColumn: 0,
  startLine: 1,
  allowAwaitOutsideFunction: false,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowSuperOutsideMethod: false,
  allowUndeclaredExports: false,
  plugins: [],
  strictMode: null,
  ranges: false,
  tokens: false,
  createParenthesizedExpressions: false,
  errorRecovery: false,
  attachComment: true
};
function getOptions(opts) {
  const options = {};

  for (const key of Object.keys(defaultOptions)) {
    options[key] = opts && opts[key] != null ? opts[key] : defaultOptions[key];
  }

  return options;
}

const unwrapParenthesizedExpression = node => {
  return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
};

class LValParser extends NodeUtils {
  toAssignable(node, isLHS = false) {
    var _node$extra, _node$extra3;

    let parenthesized = undefined;

    if (node.type === "ParenthesizedExpression" || (_node$extra = node.extra) != null && _node$extra.parenthesized) {
      parenthesized = unwrapParenthesizedExpression(node);

      if (isLHS) {
        if (parenthesized.type === "Identifier") {
          this.expressionScope.recordParenthesizedIdentifierError(ErrorMessages.InvalidParenthesizedAssignment, node.loc.start);
        } else if (parenthesized.type !== "MemberExpression") {
          this.raise(ErrorMessages.InvalidParenthesizedAssignment, {
            node
          });
        }
      } else {
        this.raise(ErrorMessages.InvalidParenthesizedAssignment, {
          node
        });
      }
    }

    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        break;

      case "ObjectExpression":
        node.type = "ObjectPattern";

        for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
          var _node$extra2;

          const prop = node.properties[i];
          const isLast = i === last;
          this.toAssignableObjectExpressionProp(prop, isLast, isLHS);

          if (isLast && prop.type === "RestElement" && (_node$extra2 = node.extra) != null && _node$extra2.trailingCommaLoc) {
            this.raise(ErrorMessages.RestTrailingComma, {
              at: node.extra.trailingCommaLoc
            });
          }
        }

        break;

      case "ObjectProperty":
        {
          const {
            key,
            value
          } = node;

          if (this.isPrivateName(key)) {
            this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
          }

          this.toAssignable(value, isLHS);
          break;
        }

      case "SpreadElement":
        {
          this.checkToRestConversion(node);
          node.type = "RestElement";
          const arg = node.argument;
          this.toAssignable(arg, isLHS);
          break;
        }

      case "ArrayExpression":
        node.type = "ArrayPattern";
        this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingCommaLoc, isLHS);
        break;

      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(ErrorMessages.MissingEqInAssignment, {
            at: node.left.loc.end
          });
        }

        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isLHS);
        break;

      case "ParenthesizedExpression":
        this.toAssignable(parenthesized, isLHS);
        break;
    }

    return node;
  }

  toAssignableObjectExpressionProp(prop, isLast, isLHS) {
    if (prop.type === "ObjectMethod") {
      this.raise(prop.kind === "get" || prop.kind === "set" ? ErrorMessages.PatternHasAccessor : ErrorMessages.PatternHasMethod, {
        node: prop.key
      });
    } else if (prop.type === "SpreadElement" && !isLast) {
      this.raise(ErrorMessages.RestTrailingComma, {
        node: prop
      });
    } else {
      this.toAssignable(prop, isLHS);
    }
  }

  toAssignableList(exprList, trailingCommaLoc, isLHS) {
    let end = exprList.length;

    if (end) {
      const last = exprList[end - 1];

      if ((last == null ? void 0 : last.type) === "RestElement") {
        --end;
      } else if ((last == null ? void 0 : last.type) === "SpreadElement") {
        last.type = "RestElement";
        let arg = last.argument;
        this.toAssignable(arg, isLHS);
        arg = unwrapParenthesizedExpression(arg);

        if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern" && arg.type !== "ObjectPattern") {
          this.unexpected(arg.start);
        }

        if (trailingCommaLoc) {
          this.raise(ErrorMessages.RestTrailingComma, {
            at: trailingCommaLoc
          });
        }

        --end;
      }
    }

    for (let i = 0; i < end; i++) {
      const elt = exprList[i];

      if (elt) {
        this.toAssignable(elt, isLHS);

        if (elt.type === "RestElement") {
          this.raise(ErrorMessages.RestTrailingComma, {
            node: elt
          });
        }
      }
    }

    return exprList;
  }

  isAssignable(node, isBinding) {
    switch (node.type) {
      case "Identifier":
      case "ObjectPattern":
      case "ArrayPattern":
      case "AssignmentPattern":
      case "RestElement":
        return true;

      case "ObjectExpression":
        {
          const last = node.properties.length - 1;
          return node.properties.every((prop, i) => {
            return prop.type !== "ObjectMethod" && (i === last || prop.type !== "SpreadElement") && this.isAssignable(prop);
          });
        }

      case "ObjectProperty":
        return this.isAssignable(node.value);

      case "SpreadElement":
        return this.isAssignable(node.argument);

      case "ArrayExpression":
        return node.elements.every(element => element === null || this.isAssignable(element));

      case "AssignmentExpression":
        return node.operator === "=";

      case "ParenthesizedExpression":
        return this.isAssignable(node.expression);

      case "MemberExpression":
      case "OptionalMemberExpression":
        return !isBinding;

      default:
        return false;
    }
  }

  toReferencedList(exprList, isParenthesizedExpr) {
    return exprList;
  }

  toReferencedListDeep(exprList, isParenthesizedExpr) {
    this.toReferencedList(exprList, isParenthesizedExpr);

    for (const expr of exprList) {
      if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
        this.toReferencedListDeep(expr.elements);
      }
    }
  }

  parseSpread(refExpressionErrors, refNeedsArrowPos) {
    const node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, undefined, refNeedsArrowPos);
    return this.finishNode(node, "SpreadElement");
  }

  parseRestBinding() {
    const node = this.startNode();
    this.next();
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  }

  parseBindingAtom() {
    switch (this.state.type) {
      case 0:
        {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(3, 93, true);
          return this.finishNode(node, "ArrayPattern");
        }

      case 5:
        return this.parseObjectLike(8, true);
    }

    return this.parseIdentifier();
  }

  parseBindingList(close, closeCharCode, allowEmpty, allowModifiers) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
      }

      if (allowEmpty && this.match(12)) {
        elts.push(null);
      } else if (this.eat(close)) {
        break;
      } else if (this.match(21)) {
        elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));

        if (!this.checkCommaAfterRest(closeCharCode)) {
          this.expect(close);
          break;
        }
      } else {
        const decorators = [];

        if (this.match(26) && this.hasPlugin("decorators")) {
          this.raise(ErrorMessages.UnsupportedParameterDecorator, {
            at: this.state.startLoc
          });
        }

        while (this.match(26)) {
          decorators.push(this.parseDecorator());
        }

        elts.push(this.parseAssignableListItem(allowModifiers, decorators));
      }
    }

    return elts;
  }

  parseBindingRestProperty(prop) {
    this.next();
    prop.argument = this.parseIdentifier();
    this.checkCommaAfterRest(125);
    return this.finishNode(prop, "RestElement");
  }

  parseBindingProperty() {
    const prop = this.startNode();
    const {
      type,
      start: startPos,
      startLoc
    } = this.state;

    if (type === 21) {
      return this.parseBindingRestProperty(prop);
    } else if (type === 134) {
      this.expectPlugin("destructuringPrivate", startLoc);
      this.classScope.usePrivateName(this.state.value, startLoc);
      prop.key = this.parsePrivateName();
    } else {
      this.parsePropertyName(prop);
    }

    prop.method = false;
    this.parseObjPropValue(prop, startPos, startLoc, false, false, true, false);
    return prop;
  }

  parseAssignableListItem(allowModifiers, decorators) {
    const left = this.parseMaybeDefault();
    this.parseAssignableListItemTypes(left);
    const elt = this.parseMaybeDefault(left.start, left.loc.start, left);

    if (decorators.length) {
      left.decorators = decorators;
    }

    return elt;
  }

  parseAssignableListItemTypes(param) {
    return param;
  }

  parseMaybeDefault(startPos, startLoc, left) {
    var _startLoc, _startPos, _left;

    startLoc = (_startLoc = startLoc) != null ? _startLoc : this.state.startLoc;
    startPos = (_startPos = startPos) != null ? _startPos : this.state.start;
    left = (_left = left) != null ? _left : this.parseBindingAtom();
    if (!this.eat(29)) return left;
    const node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssignAllowIn();
    return this.finishNode(node, "AssignmentPattern");
  }

  checkLVal(expr, contextDescription, bindingType = BIND_NONE, checkClashes, disallowLetBinding, strictModeChanged = false) {
    switch (expr.type) {
      case "Identifier":
        {
          const {
            name
          } = expr;

          if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(name, this.inModule) : isStrictBindOnlyReservedWord(name))) {
            this.raise(bindingType === BIND_NONE ? ErrorMessages.StrictEvalArguments : ErrorMessages.StrictEvalArgumentsBinding, {
              node: expr
            }, name);
          }

          if (checkClashes) {
            if (checkClashes.has(name)) {
              this.raise(ErrorMessages.ParamDupe, {
                node: expr
              });
            } else {
              checkClashes.add(name);
            }
          }

          if (disallowLetBinding && name === "let") {
            this.raise(ErrorMessages.LetInLexicalBinding, {
              node: expr
            });
          }

          if (!(bindingType & BIND_NONE)) {
            this.scope.declareName(name, bindingType, expr.loc.start);
          }

          break;
        }

      case "MemberExpression":
        if (bindingType !== BIND_NONE) {
          this.raise(ErrorMessages.InvalidPropertyBindingPattern, {
            node: expr
          });
        }

        break;

      case "ObjectPattern":
        for (let prop of expr.properties) {
          if (this.isObjectProperty(prop)) prop = prop.value;else if (this.isObjectMethod(prop)) continue;
          this.checkLVal(prop, "object destructuring pattern", bindingType, checkClashes, disallowLetBinding);
        }

        break;

      case "ArrayPattern":
        for (const elem of expr.elements) {
          if (elem) {
            this.checkLVal(elem, "array destructuring pattern", bindingType, checkClashes, disallowLetBinding);
          }
        }

        break;

      case "AssignmentPattern":
        this.checkLVal(expr.left, "assignment pattern", bindingType, checkClashes);
        break;

      case "RestElement":
        this.checkLVal(expr.argument, "rest element", bindingType, checkClashes);
        break;

      case "ParenthesizedExpression":
        this.checkLVal(expr.expression, "parenthesized expression", bindingType, checkClashes);
        break;

      default:
        {
          this.raise(bindingType === BIND_NONE ? ErrorMessages.InvalidLhs : ErrorMessages.InvalidLhsBinding, {
            node: expr
          }, contextDescription);
        }
    }
  }

  checkToRestConversion(node) {
    if (node.argument.type !== "Identifier" && node.argument.type !== "MemberExpression") {
      this.raise(ErrorMessages.InvalidRestAssignmentPattern, {
        node: node.argument
      });
    }
  }

  checkCommaAfterRest(close) {
    if (!this.match(12)) {
      return false;
    }

    this.raise(this.lookaheadCharCode() === close ? ErrorMessages.RestTrailingComma : ErrorMessages.ElementAfterRest, {
      at: this.state.startLoc
    });
    return true;
  }

}

const invalidHackPipeBodies = new Map([["ArrowFunctionExpression", "arrow function"], ["AssignmentExpression", "assignment"], ["ConditionalExpression", "conditional"], ["YieldExpression", "yield"]]);
class ExpressionParser extends LValParser {
  checkProto(prop, isRecord, protoRef, refExpressionErrors) {
    if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
      return;
    }

    const key = prop.key;
    const name = key.type === "Identifier" ? key.name : key.value;

    if (name === "__proto__") {
      if (isRecord) {
        this.raise(ErrorMessages.RecordNoProto, {
          node: key
        });
        return;
      }

      if (protoRef.used) {
        if (refExpressionErrors) {
          if (refExpressionErrors.doubleProtoLoc === null) {
            refExpressionErrors.doubleProtoLoc = key.loc.start;
          }
        } else {
          this.raise(ErrorMessages.DuplicateProto, {
            node: key
          });
        }
      }

      protoRef.used = true;
    }
  }

  shouldExitDescending(expr, potentialArrowAt) {
    return expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt;
  }

  getExpression() {
    this.enterInitialScopes();
    this.nextToken();
    const expr = this.parseExpression();

    if (!this.match(135)) {
      this.unexpected();
    }

    this.finalizeRemainingComments();
    expr.comments = this.state.comments;
    expr.errors = this.state.errors;

    if (this.options.tokens) {
      expr.tokens = this.tokens;
    }

    return expr;
  }

  parseExpression(disallowIn, refExpressionErrors) {
    if (disallowIn) {
      return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
    }

    return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
  }

  parseExpressionBase(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const expr = this.parseMaybeAssign(refExpressionErrors);

    if (this.match(12)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];

      while (this.eat(12)) {
        node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
      }

      this.toReferencedList(node.expressions);
      return this.finishNode(node, "SequenceExpression");
    }

    return expr;
  }

  parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse) {
    return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }

  parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse) {
    return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
  }

  setOptionalParametersError(refExpressionErrors, resultError) {
    var _resultError$loc;

    refExpressionErrors.optionalParametersLoc = (_resultError$loc = resultError == null ? void 0 : resultError.loc) != null ? _resultError$loc : this.state.startLoc;
  }

  parseMaybeAssign(refExpressionErrors, afterLeftParse) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    if (this.isContextual(105)) {
      if (this.prodParam.hasYield) {
        let left = this.parseYield();

        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }

        return left;
      }
    }

    let ownExpressionErrors;

    if (refExpressionErrors) {
      ownExpressionErrors = false;
    } else {
      refExpressionErrors = new ExpressionErrors();
      ownExpressionErrors = true;
    }

    const {
      type
    } = this.state;

    if (type === 10 || tokenIsIdentifier(type)) {
      this.state.potentialArrowAt = this.state.start;
    }

    let left = this.parseMaybeConditional(refExpressionErrors);

    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startPos, startLoc);
    }

    if (tokenIsAssignment(this.state.type)) {
      const node = this.startNodeAt(startPos, startLoc);
      const operator = this.state.value;
      node.operator = operator;

      if (this.match(29)) {
        node.left = this.toAssignable(left, true);

        if (refExpressionErrors.doubleProtoLoc != null && refExpressionErrors.doubleProtoLoc.index >= startPos) {
          refExpressionErrors.doubleProtoLoc = null;
        }

        if (refExpressionErrors.shorthandAssignLoc != null && refExpressionErrors.shorthandAssignLoc.index >= startPos) {
          refExpressionErrors.shorthandAssignLoc = null;
        }

        if (refExpressionErrors.privateKeyLoc != null && refExpressionErrors.privateKeyLoc.index >= startPos) {
          this.checkDestructuringPrivate(refExpressionErrors);
          refExpressionErrors.privateKeyLoc = null;
        }
      } else {
        node.left = left;
      }

      this.checkLVal(left, "assignment expression");
      this.next();
      node.right = this.parseMaybeAssign();
      return this.finishNode(node, "AssignmentExpression");
    } else if (ownExpressionErrors) {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    return left;
  }

  parseMaybeConditional(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprOps(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseConditional(expr, startPos, startLoc, refExpressionErrors);
  }

  parseConditional(expr, startPos, startLoc, refExpressionErrors) {
    if (this.eat(17)) {
      const node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssignAllowIn();
      this.expect(14);
      node.alternate = this.parseMaybeAssign();
      return this.finishNode(node, "ConditionalExpression");
    }

    return expr;
  }

  parseMaybeUnaryOrPrivate(refExpressionErrors) {
    return this.match(134) ? this.parsePrivateName() : this.parseMaybeUnary(refExpressionErrors);
  }

  parseExprOps(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseMaybeUnaryOrPrivate(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseExprOp(expr, startPos, startLoc, -1);
  }

  parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
    if (this.isPrivateName(left)) {
      const value = this.getPrivateNameSV(left);

      if (minPrec >= tokenOperatorPrecedence(58) || !this.prodParam.hasIn || !this.match(58)) {
        this.raise(ErrorMessages.PrivateInExpectedIn, {
          node: left
        }, value);
      }

      this.classScope.usePrivateName(value, left.loc.start);
    }

    const op = this.state.type;

    if (tokenIsOperator(op) && (this.prodParam.hasIn || !this.match(58))) {
      let prec = tokenOperatorPrecedence(op);

      if (prec > minPrec) {
        if (op === 39) {
          this.expectPlugin("pipelineOperator");

          if (this.state.inFSharpPipelineDirectBody) {
            return left;
          }

          this.checkPipelineAtInfixOperator(left, leftStartLoc);
        }

        const node = this.startNodeAt(leftStartPos, leftStartLoc);
        node.left = left;
        node.operator = this.state.value;
        const logical = op === 41 || op === 42;
        const coalesce = op === 40;

        if (coalesce) {
          prec = tokenOperatorPrecedence(42);
        }

        this.next();

        if (op === 39 && this.hasPlugin(["pipelineOperator", {
          proposal: "minimal"
        }])) {
          if (this.state.type === 96 && this.prodParam.hasAwait) {
            throw this.raise(ErrorMessages.UnexpectedAwaitAfterPipelineBody, {
              at: this.state.startLoc
            });
          }
        }

        node.right = this.parseExprOpRightExpr(op, prec);
        this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
        const nextOp = this.state.type;

        if (coalesce && (nextOp === 41 || nextOp === 42) || logical && nextOp === 40) {
          throw this.raise(ErrorMessages.MixingCoalesceWithLogical, {
            at: this.state.startLoc
          });
        }

        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
      }
    }

    return left;
  }

  parseExprOpRightExpr(op, prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;

    switch (op) {
      case 39:
        switch (this.getPluginOption("pipelineOperator", "proposal")) {
          case "hack":
            return this.withTopicBindingContext(() => {
              return this.parseHackPipeBody();
            });

          case "smart":
            return this.withTopicBindingContext(() => {
              if (this.prodParam.hasYield && this.isContextual(105)) {
                throw this.raise(ErrorMessages.PipeBodyIsTighter, {
                  at: this.state.startLoc
                }, this.state.value);
              }

              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(op, prec), startPos, startLoc);
            });

          case "fsharp":
            return this.withSoloAwaitPermittingContext(() => {
              return this.parseFSharpPipelineBody(prec);
            });
        }

      default:
        return this.parseExprOpBaseRightExpr(op, prec);
    }
  }

  parseExprOpBaseRightExpr(op, prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startPos, startLoc, tokenIsRightAssociative(op) ? prec - 1 : prec);
  }

  parseHackPipeBody() {
    var _body$extra;

    const {
      startLoc
    } = this.state;
    const body = this.parseMaybeAssign();

    if (invalidHackPipeBodies.has(body.type) && !((_body$extra = body.extra) != null && _body$extra.parenthesized)) {
      this.raise(ErrorMessages.PipeUnparenthesizedBody, {
        at: startLoc
      }, invalidHackPipeBodies.get(body.type));
    }

    if (!this.topicReferenceWasUsedInCurrentContext()) {
      this.raise(ErrorMessages.PipeTopicUnused, {
        at: startLoc
      });
    }

    return body;
  }

  checkExponentialAfterUnary(node) {
    if (this.match(57)) {
      this.raise(ErrorMessages.UnexpectedTokenUnaryExponentiation, {
        node: node.argument
      });
    }
  }

  parseMaybeUnary(refExpressionErrors, sawUnary) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const isAwait = this.isContextual(96);

    if (isAwait && this.isAwaitAllowed()) {
      this.next();
      const expr = this.parseAwait(startPos, startLoc);
      if (!sawUnary) this.checkExponentialAfterUnary(expr);
      return expr;
    }

    const update = this.match(34);
    const node = this.startNode();

    if (tokenIsPrefix(this.state.type)) {
      node.operator = this.state.value;
      node.prefix = true;

      if (this.match(72)) {
        this.expectPlugin("throwExpressions");
      }

      const isDelete = this.match(89);
      this.next();
      node.argument = this.parseMaybeUnary(null, true);
      this.checkExpressionErrors(refExpressionErrors, true);

      if (this.state.strict && isDelete) {
        const arg = node.argument;

        if (arg.type === "Identifier") {
          this.raise(ErrorMessages.StrictDelete, {
            node
          });
        } else if (this.hasPropertyAsPrivateName(arg)) {
          this.raise(ErrorMessages.DeletePrivateField, {
            node
          });
        }
      }

      if (!update) {
        if (!sawUnary) this.checkExponentialAfterUnary(node);
        return this.finishNode(node, "UnaryExpression");
      }
    }

    const expr = this.parseUpdate(node, update, refExpressionErrors);

    if (isAwait) {
      const {
        type
      } = this.state;
      const startsExpr = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(54);

      if (startsExpr && !this.isAmbiguousAwait()) {
        this.raiseOverwrite(startLoc, ErrorMessages.AwaitNotInAsyncContext);
        return this.parseAwait(startPos, startLoc);
      }
    }

    return expr;
  }

  parseUpdate(node, update, refExpressionErrors) {
    if (update) {
      this.checkLVal(node.argument, "prefix operation");
      return this.finishNode(node, "UpdateExpression");
    }

    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let expr = this.parseExprSubscripts(refExpressionErrors);
    if (this.checkExpressionErrors(refExpressionErrors, false)) return expr;

    while (tokenIsPostfix(this.state.type) && !this.canInsertSemicolon()) {
      const node = this.startNodeAt(startPos, startLoc);
      node.operator = this.state.value;
      node.prefix = false;
      node.argument = expr;
      this.checkLVal(expr, "postfix operation");
      this.next();
      expr = this.finishNode(node, "UpdateExpression");
    }

    return expr;
  }

  parseExprSubscripts(refExpressionErrors) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    const potentialArrowAt = this.state.potentialArrowAt;
    const expr = this.parseExprAtom(refExpressionErrors);

    if (this.shouldExitDescending(expr, potentialArrowAt)) {
      return expr;
    }

    return this.parseSubscripts(expr, startPos, startLoc);
  }

  parseSubscripts(base, startPos, startLoc, noCalls) {
    const state = {
      optionalChainMember: false,
      maybeAsyncArrow: this.atPossibleAsyncArrow(base),
      stop: false
    };

    do {
      base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
      state.maybeAsyncArrow = false;
    } while (!state.stop);

    return base;
  }

  parseSubscript(base, startPos, startLoc, noCalls, state) {
    const {
      type
    } = this.state;

    if (!noCalls && type === 15) {
      return this.parseBind(base, startPos, startLoc, noCalls, state);
    } else if (tokenIsTemplate(type)) {
      return this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
    }

    let optional = false;

    if (type === 18) {
      if (noCalls && this.lookaheadCharCode() === 40) {
        state.stop = true;
        return base;
      }

      state.optionalChainMember = optional = true;
      this.next();
    }

    if (!noCalls && this.match(10)) {
      return this.parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional);
    } else {
      const computed = this.eat(0);

      if (computed || optional || this.eat(16)) {
        return this.parseMember(base, startPos, startLoc, state, computed, optional);
      } else {
        state.stop = true;
        return base;
      }
    }
  }

  parseMember(base, startPos, startLoc, state, computed, optional) {
    const node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    node.computed = computed;

    if (computed) {
      node.property = this.parseExpression();
      this.expect(3);
    } else if (this.match(134)) {
      if (base.type === "Super") {
        this.raise(ErrorMessages.SuperPrivateField, {
          at: startLoc
        });
      }

      this.classScope.usePrivateName(this.state.value, this.state.startLoc);
      node.property = this.parsePrivateName();
    } else {
      node.property = this.parseIdentifier(true);
    }

    if (state.optionalChainMember) {
      node.optional = optional;
      return this.finishNode(node, "OptionalMemberExpression");
    } else {
      return this.finishNode(node, "MemberExpression");
    }
  }

  parseBind(base, startPos, startLoc, noCalls, state) {
    const node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    this.next();
    node.callee = this.parseNoCallExpr();
    state.stop = true;
    return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
  }

  parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional) {
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    let refExpressionErrors = null;
    this.state.maybeInArrowParameters = true;
    this.next();
    let node = this.startNodeAt(startPos, startLoc);
    node.callee = base;
    const {
      maybeAsyncArrow,
      optionalChainMember
    } = state;

    if (maybeAsyncArrow) {
      this.expressionScope.enter(newAsyncArrowScope());
      refExpressionErrors = new ExpressionErrors();
    }

    if (optionalChainMember) {
      node.optional = optional;
    }

    if (optional) {
      node.arguments = this.parseCallExpressionArguments(11);
    } else {
      node.arguments = this.parseCallExpressionArguments(11, base.type === "Import", base.type !== "Super", node, refExpressionErrors);
    }

    this.finishCallExpression(node, optionalChainMember);

    if (maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
      state.stop = true;
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      node = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), node);
    } else {
      if (maybeAsyncArrow) {
        this.checkExpressionErrors(refExpressionErrors, true);
        this.expressionScope.exit();
      }

      this.toReferencedArguments(node);
    }

    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return node;
  }

  toReferencedArguments(node, isParenthesizedExpr) {
    this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
  }

  parseTaggedTemplateExpression(base, startPos, startLoc, state) {
    const node = this.startNodeAt(startPos, startLoc);
    node.tag = base;
    node.quasi = this.parseTemplate(true);

    if (state.optionalChainMember) {
      this.raise(ErrorMessages.OptionalChainingNoTemplate, {
        at: startLoc
      });
    }

    return this.finishNode(node, "TaggedTemplateExpression");
  }

  atPossibleAsyncArrow(base) {
    return base.type === "Identifier" && base.name === "async" && this.state.lastTokEndLoc.index === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && base.start === this.state.potentialArrowAt;
  }

  finishCallExpression(node, optional) {
    if (node.callee.type === "Import") {
      if (node.arguments.length === 2) {
        {
          if (!this.hasPlugin("moduleAttributes")) {
            this.expectPlugin("importAssertions");
          }
        }
      }

      if (node.arguments.length === 0 || node.arguments.length > 2) {
        this.raise(ErrorMessages.ImportCallArity, {
          node
        }, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
      } else {
        for (const arg of node.arguments) {
          if (arg.type === "SpreadElement") {
            this.raise(ErrorMessages.ImportCallSpreadArgument, {
              node: arg
            });
          }
        }
      }
    }

    return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
  }

  parseCallExpressionArguments(close, dynamicImport, allowPlaceholder, nodeForExtra, refExpressionErrors) {
    const elts = [];
    let first = true;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);

        if (this.match(close)) {
          if (dynamicImport && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes")) {
            this.raise(ErrorMessages.ImportCallArgumentTrailingComma, {
              at: this.state.lastTokStartLoc
            });
          }

          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }

          this.next();
          break;
        }
      }

      elts.push(this.parseExprListItem(false, refExpressionErrors, allowPlaceholder));
    }

    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return elts;
  }

  shouldParseAsyncArrow() {
    return this.match(19) && !this.canInsertSemicolon();
  }

  parseAsyncArrowFromCallExpression(node, call) {
    var _call$extra;

    this.resetPreviousNodeTrailingComments(call);
    this.expect(19);
    this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingCommaLoc);

    if (call.innerComments) {
      setInnerComments(node, call.innerComments);
    }

    if (call.callee.trailingComments) {
      setInnerComments(node, call.callee.trailingComments);
    }

    return node;
  }

  parseNoCallExpr() {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  }

  parseExprAtom(refExpressionErrors) {
    let node;
    const {
      type
    } = this.state;

    switch (type) {
      case 79:
        return this.parseSuper();

      case 83:
        node = this.startNode();
        this.next();

        if (this.match(16)) {
          return this.parseImportMetaProperty(node);
        }

        if (!this.match(10)) {
          this.raise(ErrorMessages.UnsupportedImport, {
            at: this.state.lastTokStartLoc
          });
        }

        return this.finishNode(node, "Import");

      case 78:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");

      case 90:
        {
          return this.parseDo(this.startNode(), false);
        }

      case 56:
      case 31:
        {
          this.readRegexp();
          return this.parseRegExpLiteral(this.state.value);
        }

      case 130:
        return this.parseNumericLiteral(this.state.value);

      case 131:
        return this.parseBigIntLiteral(this.state.value);

      case 132:
        return this.parseDecimalLiteral(this.state.value);

      case 129:
        return this.parseStringLiteral(this.state.value);

      case 84:
        return this.parseNullLiteral();

      case 85:
        return this.parseBooleanLiteral(true);

      case 86:
        return this.parseBooleanLiteral(false);

      case 10:
        {
          const canBeArrow = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(canBeArrow);
        }

      case 2:
      case 1:
        {
          return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
        }

      case 0:
        {
          return this.parseArrayLike(3, true, false, refExpressionErrors);
        }

      case 6:
      case 7:
        {
          return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
        }

      case 5:
        {
          return this.parseObjectLike(8, false, false, refExpressionErrors);
        }

      case 68:
        return this.parseFunctionOrFunctionSent();

      case 26:
        this.parseDecorators();

      case 80:
        node = this.startNode();
        this.takeDecorators(node);
        return this.parseClass(node, false);

      case 77:
        return this.parseNewOrNewTarget();

      case 25:
      case 24:
        return this.parseTemplate(false);

      case 15:
        {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();

          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(ErrorMessages.UnsupportedBind, {
              node: callee
            });
          }
        }

      case 134:
        {
          this.raise(ErrorMessages.PrivateInExpectedIn, {
            at: this.state.startLoc
          }, this.state.value);
          return this.parsePrivateName();
        }

      case 33:
        {
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        }

      case 32:
        {
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        }

      case 37:
      case 38:
        {
          return this.parseTopicReference("hack");
        }

      case 44:
      case 54:
      case 27:
        {
          const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");

          if (pipeProposal) {
            return this.parseTopicReference(pipeProposal);
          } else {
            throw this.unexpected();
          }
        }

      case 47:
        {
          const lookaheadCh = this.input.codePointAt(this.nextTokenStart());

          if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
            this.expectOnePlugin(["jsx", "flow", "typescript"]);
            break;
          } else {
            throw this.unexpected();
          }
        }

      default:
        if (tokenIsIdentifier(type)) {
          if (this.isContextual(123) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak()) {
            return this.parseModuleExpression();
          }

          const canBeArrow = this.state.potentialArrowAt === this.state.start;
          const containsEsc = this.state.containsEsc;
          const id = this.parseIdentifier();

          if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
            const {
              type
            } = this.state;

            if (type === 68) {
              this.resetPreviousNodeTrailingComments(id);
              this.next();
              return this.parseFunction(this.startNodeAtNode(id), undefined, true);
            } else if (tokenIsIdentifier(type)) {
              if (this.lookaheadCharCode() === 61) {
                return this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(id));
              } else {
                return id;
              }
            } else if (type === 90) {
              this.resetPreviousNodeTrailingComments(id);
              return this.parseDo(this.startNodeAtNode(id), true);
            }
          }

          if (canBeArrow && this.match(19) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
          }

          return id;
        } else {
          throw this.unexpected();
        }

    }
  }

  parseTopicReferenceThenEqualsSign(topicTokenType, topicTokenValue) {
    const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");

    if (pipeProposal) {
      this.state.type = topicTokenType;
      this.state.value = topicTokenValue;
      this.state.pos--;
      this.state.end--;
      this.state.endLoc = createPositionWithColumnOffset(this.state.endLoc, -1);
      return this.parseTopicReference(pipeProposal);
    } else {
      throw this.unexpected();
    }
  }

  parseTopicReference(pipeProposal) {
    const node = this.startNode();
    const startLoc = this.state.startLoc;
    const tokenType = this.state.type;
    this.next();
    return this.finishTopicReference(node, startLoc, pipeProposal, tokenType);
  }

  finishTopicReference(node, startLoc, pipeProposal, tokenType) {
    if (this.testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType)) {
      const nodeType = pipeProposal === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";

      if (!this.topicReferenceIsAllowedInCurrentContext()) {
        this.raise(pipeProposal === "smart" ? ErrorMessages.PrimaryTopicNotAllowed : ErrorMessages.PipeTopicUnbound, {
          at: startLoc
        });
      }

      this.registerTopicReference();
      return this.finishNode(node, nodeType);
    } else {
      throw this.raise(ErrorMessages.PipeTopicUnconfiguredToken, {
        at: startLoc
      }, tokenLabelName(tokenType));
    }
  }

  testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType) {
    switch (pipeProposal) {
      case "hack":
        {
          return this.hasPlugin(["pipelineOperator", {
            topicToken: tokenLabelName(tokenType)
          }]);
        }

      case "smart":
        return tokenType === 27;

      default:
        throw this.raise(ErrorMessages.PipeTopicRequiresHackPipes, {
          at: startLoc
        });
    }
  }

  parseAsyncArrowUnaryFunction(node) {
    this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
    const params = [this.parseIdentifier()];
    this.prodParam.exit();

    if (this.hasPrecedingLineBreak()) {
      this.raise(ErrorMessages.LineTerminatorBeforeArrow, {
        at: this.state.curPosition()
      });
    }

    this.expect(19);
    this.parseArrowExpression(node, params, true);
    return node;
  }

  parseDo(node, isAsync) {
    this.expectPlugin("doExpressions");

    if (isAsync) {
      this.expectPlugin("asyncDoExpressions");
    }

    node.async = isAsync;
    this.next();
    const oldLabels = this.state.labels;
    this.state.labels = [];

    if (isAsync) {
      this.prodParam.enter(PARAM_AWAIT);
      node.body = this.parseBlock();
      this.prodParam.exit();
    } else {
      node.body = this.parseBlock();
    }

    this.state.labels = oldLabels;
    return this.finishNode(node, "DoExpression");
  }

  parseSuper() {
    const node = this.startNode();
    this.next();

    if (this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod) {
      this.raise(ErrorMessages.SuperNotAllowed, {
        node
      });
    } else if (!this.scope.allowSuper && !this.options.allowSuperOutsideMethod) {
      this.raise(ErrorMessages.UnexpectedSuper, {
        node
      });
    }

    if (!this.match(10) && !this.match(0) && !this.match(16)) {
      this.raise(ErrorMessages.UnsupportedSuper, {
        node
      });
    }

    return this.finishNode(node, "Super");
  }

  parsePrivateName() {
    const node = this.startNode();
    const id = this.startNodeAt(this.state.start + 1, new Position(this.state.curLine, this.state.start + 1 - this.state.lineStart, this.state.start + 1));
    const name = this.state.value;
    this.next();
    node.id = this.createIdentifier(id, name);
    return this.finishNode(node, "PrivateName");
  }

  parseFunctionOrFunctionSent() {
    const node = this.startNode();
    this.next();

    if (this.prodParam.hasYield && this.match(16)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
      this.next();

      if (this.match(102)) {
        this.expectPlugin("functionSent");
      } else if (!this.hasPlugin("functionSent")) {
        this.unexpected();
      }

      return this.parseMetaProperty(node, meta, "sent");
    }

    return this.parseFunction(node);
  }

  parseMetaProperty(node, meta, propertyName) {
    node.meta = meta;
    const containsEsc = this.state.containsEsc;
    node.property = this.parseIdentifier(true);

    if (node.property.name !== propertyName || containsEsc) {
      this.raise(ErrorMessages.UnsupportedMetaProperty, {
        node: node.property
      }, meta.name, propertyName);
    }

    return this.finishNode(node, "MetaProperty");
  }

  parseImportMetaProperty(node) {
    const id = this.createIdentifier(this.startNodeAtNode(node), "import");
    this.next();

    if (this.isContextual(100)) {
      if (!this.inModule) {
        this.raise(SourceTypeModuleErrorMessages.ImportMetaOutsideModule, {
          node: id
        });
      }

      this.sawUnambiguousESM = true;
    }

    return this.parseMetaProperty(node, id, "meta");
  }

  parseLiteralAtNode(value, type, node) {
    this.addExtra(node, "rawValue", value);
    this.addExtra(node, "raw", this.input.slice(node.start, this.state.end));
    node.value = value;
    this.next();
    return this.finishNode(node, type);
  }

  parseLiteral(value, type) {
    const node = this.startNode();
    return this.parseLiteralAtNode(value, type, node);
  }

  parseStringLiteral(value) {
    return this.parseLiteral(value, "StringLiteral");
  }

  parseNumericLiteral(value) {
    return this.parseLiteral(value, "NumericLiteral");
  }

  parseBigIntLiteral(value) {
    return this.parseLiteral(value, "BigIntLiteral");
  }

  parseDecimalLiteral(value) {
    return this.parseLiteral(value, "DecimalLiteral");
  }

  parseRegExpLiteral(value) {
    const node = this.parseLiteral(value.value, "RegExpLiteral");
    node.pattern = value.pattern;
    node.flags = value.flags;
    return node;
  }

  parseBooleanLiteral(value) {
    const node = this.startNode();
    node.value = value;
    this.next();
    return this.finishNode(node, "BooleanLiteral");
  }

  parseNullLiteral() {
    const node = this.startNode();
    this.next();
    return this.finishNode(node, "NullLiteral");
  }

  parseParenAndDistinguishExpression(canBeArrow) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    let val;
    this.next();
    this.expressionScope.enter(newArrowHeadScope());
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.maybeInArrowParameters = true;
    this.state.inFSharpPipelineDirectBody = false;
    const innerStartPos = this.state.start;
    const innerStartLoc = this.state.startLoc;
    const exprList = [];
    const refExpressionErrors = new ExpressionErrors();
    let first = true;
    let spreadStartLoc;
    let optionalCommaStartLoc;

    while (!this.match(11)) {
      if (first) {
        first = false;
      } else {
        this.expect(12, refExpressionErrors.optionalParametersLoc === null ? null : refExpressionErrors.optionalParametersLoc);

        if (this.match(11)) {
          optionalCommaStartLoc = this.state.startLoc;
          break;
        }
      }

      if (this.match(21)) {
        const spreadNodeStartPos = this.state.start;
        const spreadNodeStartLoc = this.state.startLoc;
        spreadStartLoc = this.state.startLoc;
        exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartPos, spreadNodeStartLoc));

        if (!this.checkCommaAfterRest(41)) {
          break;
        }
      } else {
        exprList.push(this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem));
      }
    }

    const innerEndLoc = this.state.lastTokEndLoc;
    this.expect(11);
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let arrowNode = this.startNodeAt(startPos, startLoc);

    if (canBeArrow && this.shouldParseArrow(exprList) && (arrowNode = this.parseArrow(arrowNode))) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.expressionScope.validateAsPattern();
      this.expressionScope.exit();
      this.parseArrowExpression(arrowNode, exprList, false);
      return arrowNode;
    }

    this.expressionScope.exit();

    if (!exprList.length) {
      this.unexpected(this.state.lastTokStartLoc);
    }

    if (optionalCommaStartLoc) this.unexpected(optionalCommaStartLoc);
    if (spreadStartLoc) this.unexpected(spreadStartLoc);
    this.checkExpressionErrors(refExpressionErrors, true);
    this.toReferencedListDeep(exprList, true);

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNode(val, "SequenceExpression");
      this.resetEndLocation(val, innerEndLoc);
    } else {
      val = exprList[0];
    }

    if (!this.options.createParenthesizedExpressions) {
      this.addExtra(val, "parenthesized", true);
      this.addExtra(val, "parenStart", startPos);
      this.takeSurroundingComments(val, startPos, this.state.lastTokEndLoc.index);
      return val;
    }

    const parenExpression = this.startNodeAt(startPos, startLoc);
    parenExpression.expression = val;
    this.finishNode(parenExpression, "ParenthesizedExpression");
    return parenExpression;
  }

  shouldParseArrow(params) {
    return !this.canInsertSemicolon();
  }

  parseArrow(node) {
    if (this.eat(19)) {
      return node;
    }
  }

  parseParenItem(node, startPos, startLoc) {
    return node;
  }

  parseNewOrNewTarget() {
    const node = this.startNode();
    this.next();

    if (this.match(16)) {
      const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
      this.next();
      const metaProp = this.parseMetaProperty(node, meta, "target");

      if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
        this.raise(ErrorMessages.UnexpectedNewTarget, {
          node: metaProp
        });
      }

      return metaProp;
    }

    return this.parseNew(node);
  }

  parseNew(node) {
    node.callee = this.parseNoCallExpr();

    if (node.callee.type === "Import") {
      this.raise(ErrorMessages.ImportCallNotNewExpression, {
        node: node.callee
      });
    } else if (this.isOptionalChain(node.callee)) {
      this.raise(ErrorMessages.OptionalChainingNoNew, {
        at: this.state.lastTokEndLoc
      });
    } else if (this.eat(18)) {
      this.raise(ErrorMessages.OptionalChainingNoNew, {
        at: this.state.startLoc
      });
    }

    this.parseNewArguments(node);
    return this.finishNode(node, "NewExpression");
  }

  parseNewArguments(node) {
    if (this.eat(10)) {
      const args = this.parseExprList(11);
      this.toReferencedList(args);
      node.arguments = args;
    } else {
      node.arguments = [];
    }
  }

  parseTemplateElement(isTagged) {
    const {
      start,
      startLoc,
      end,
      value
    } = this.state;
    const elemStart = start + 1;
    const elem = this.startNodeAt(elemStart, createPositionWithColumnOffset(startLoc, 1));

    if (value === null) {
      if (!isTagged) {
        this.raise(ErrorMessages.InvalidEscapeSequenceTemplate, {
          at: createPositionWithColumnOffset(startLoc, 2)
        });
      }
    }

    const isTail = this.match(24);
    const endOffset = isTail ? -1 : -2;
    const elemEnd = end + endOffset;
    elem.value = {
      raw: this.input.slice(elemStart, elemEnd).replace(/\r\n?/g, "\n"),
      cooked: value === null ? null : value.slice(1, endOffset)
    };
    elem.tail = isTail;
    this.next();
    this.finishNode(elem, "TemplateElement");
    this.resetEndLocation(elem, createPositionWithColumnOffset(this.state.lastTokEndLoc, endOffset));
    return elem;
  }

  parseTemplate(isTagged) {
    const node = this.startNode();
    node.expressions = [];
    let curElt = this.parseTemplateElement(isTagged);
    node.quasis = [curElt];

    while (!curElt.tail) {
      node.expressions.push(this.parseTemplateSubstitution());
      this.readTemplateContinuation();
      node.quasis.push(curElt = this.parseTemplateElement(isTagged));
    }

    return this.finishNode(node, "TemplateLiteral");
  }

  parseTemplateSubstitution() {
    return this.parseExpression();
  }

  parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
    if (isRecord) {
      this.expectPlugin("recordAndTuple");
    }

    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const propHash = Object.create(null);
    let first = true;
    const node = this.startNode();
    node.properties = [];
    this.next();

    while (!this.match(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);

        if (this.match(close)) {
          this.addTrailingCommaExtraToNode(node);
          break;
        }
      }

      let prop;

      if (isPattern) {
        prop = this.parseBindingProperty();
      } else {
        prop = this.parsePropertyDefinition(refExpressionErrors);
        this.checkProto(prop, isRecord, propHash, refExpressionErrors);
      }

      if (isRecord && !this.isObjectProperty(prop) && prop.type !== "SpreadElement") {
        this.raise(ErrorMessages.InvalidRecordProperty, {
          node: prop
        });
      }

      if (prop.shorthand) {
        this.addExtra(prop, "shorthand", true);
      }

      node.properties.push(prop);
    }

    this.next();
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    let type = "ObjectExpression";

    if (isPattern) {
      type = "ObjectPattern";
    } else if (isRecord) {
      type = "RecordExpression";
    }

    return this.finishNode(node, type);
  }

  addTrailingCommaExtraToNode(node) {
    this.addExtra(node, "trailingComma", this.state.lastTokStart);
    this.addExtra(node, "trailingCommaLoc", this.state.lastTokStartLoc, false);
  }

  maybeAsyncOrAccessorProp(prop) {
    return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
  }

  parsePropertyDefinition(refExpressionErrors) {
    let decorators = [];

    if (this.match(26)) {
      if (this.hasPlugin("decorators")) {
        this.raise(ErrorMessages.UnsupportedPropertyDecorator, {
          at: this.state.startLoc
        });
      }

      while (this.match(26)) {
        decorators.push(this.parseDecorator());
      }
    }

    const prop = this.startNode();
    let isAsync = false;
    let isAccessor = false;
    let startPos;
    let startLoc;

    if (this.match(21)) {
      if (decorators.length) this.unexpected();
      return this.parseSpread();
    }

    if (decorators.length) {
      prop.decorators = decorators;
      decorators = [];
    }

    prop.method = false;

    if (refExpressionErrors) {
      startPos = this.state.start;
      startLoc = this.state.startLoc;
    }

    let isGenerator = this.eat(55);
    this.parsePropertyNamePrefixOperator(prop);
    const containsEsc = this.state.containsEsc;
    const key = this.parsePropertyName(prop, refExpressionErrors);

    if (!isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
      const keyName = key.name;

      if (keyName === "async" && !this.hasPrecedingLineBreak()) {
        isAsync = true;
        this.resetPreviousNodeTrailingComments(key);
        isGenerator = this.eat(55);
        this.parsePropertyName(prop);
      }

      if (keyName === "get" || keyName === "set") {
        isAccessor = true;
        this.resetPreviousNodeTrailingComments(key);
        prop.kind = keyName;

        if (this.match(55)) {
          isGenerator = true;
          this.raise(ErrorMessages.AccessorIsGenerator, {
            at: this.state.curPosition()
          }, keyName);
          this.next();
        }

        this.parsePropertyName(prop);
      }
    }

    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, false, isAccessor, refExpressionErrors);
    return prop;
  }

  getGetterSetterExpectedParamCount(method) {
    return method.kind === "get" ? 0 : 1;
  }

  getObjectOrClassMethodParams(method) {
    return method.params;
  }

  checkGetterSetterParams(method) {
    var _params;

    const paramCount = this.getGetterSetterExpectedParamCount(method);
    const params = this.getObjectOrClassMethodParams(method);

    if (params.length !== paramCount) {
      this.raise(method.kind === "get" ? ErrorMessages.BadGetterArity : ErrorMessages.BadSetterArity, {
        node: method
      });
    }

    if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
      this.raise(ErrorMessages.BadSetterRestParameter, {
        node: method
      });
    }
  }

  parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
    if (isAccessor) {
      this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
      this.checkGetterSetterParams(prop);
      return prop;
    }

    if (isAsync || isGenerator || this.match(10)) {
      if (isPattern) this.unexpected();
      prop.kind = "method";
      prop.method = true;
      return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
    }
  }

  parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
    prop.shorthand = false;

    if (this.eat(14)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(refExpressionErrors);
      return this.finishNode(prop, "ObjectProperty");
    }

    if (!prop.computed && prop.key.type === "Identifier") {
      this.checkReservedWord(prop.key.name, prop.key.loc.start, true, false);

      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, cloneIdentifier(prop.key));
      } else if (this.match(29)) {
        const shorthandAssignLoc = this.state.startLoc;

        if (refExpressionErrors != null) {
          if (refExpressionErrors.shorthandAssignLoc === null) {
            refExpressionErrors.shorthandAssignLoc = shorthandAssignLoc;
          }
        } else {
          this.raise(ErrorMessages.InvalidCoverInitializedName, {
            at: shorthandAssignLoc
          });
        }

        prop.value = this.parseMaybeDefault(startPos, startLoc, cloneIdentifier(prop.key));
      } else {
        prop.value = cloneIdentifier(prop.key);
      }

      prop.shorthand = true;
      return this.finishNode(prop, "ObjectProperty");
    }
  }

  parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
    const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
    if (!node) this.unexpected();
    return node;
  }

  parsePropertyName(prop, refExpressionErrors) {
    if (this.eat(0)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssignAllowIn();
      this.expect(3);
    } else {
      const {
        type,
        value
      } = this.state;
      let key;

      if (tokenIsKeywordOrIdentifier(type)) {
        key = this.parseIdentifier(true);
      } else {
        switch (type) {
          case 130:
            key = this.parseNumericLiteral(value);
            break;

          case 129:
            key = this.parseStringLiteral(value);
            break;

          case 131:
            key = this.parseBigIntLiteral(value);
            break;

          case 132:
            key = this.parseDecimalLiteral(value);
            break;

          case 134:
            {
              const privateKeyLoc = this.state.startLoc;

              if (refExpressionErrors != null) {
                if (refExpressionErrors.privateKeyLoc === null) {
                  refExpressionErrors.privateKeyLoc = privateKeyLoc;
                }
              } else {
                this.raise(ErrorMessages.UnexpectedPrivateField, {
                  at: privateKeyLoc
                });
              }

              key = this.parsePrivateName();
              break;
            }

          default:
            throw this.unexpected();
        }
      }

      prop.key = key;

      if (type !== 134) {
        prop.computed = false;
      }
    }

    return prop.key;
  }

  initFunction(node, isAsync) {
    node.id = null;
    node.generator = false;
    node.async = !!isAsync;
  }

  parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
    this.initFunction(node, isAsync);
    node.generator = !!isGenerator;
    const allowModifiers = isConstructor;
    this.scope.enter(SCOPE_FUNCTION | SCOPE_SUPER | (inClassScope ? SCOPE_CLASS : 0) | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
    this.prodParam.enter(functionFlags(isAsync, node.generator));
    this.parseFunctionParams(node, allowModifiers);
    this.parseFunctionBodyAndFinish(node, type, true);
    this.prodParam.exit();
    this.scope.exit();
    return node;
  }

  parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
    if (isTuple) {
      this.expectPlugin("recordAndTuple");
    }

    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = false;
    const node = this.startNode();
    this.next();
    node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
  }

  parseArrowExpression(node, params, isAsync, trailingCommaLoc) {
    this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
    let flags = functionFlags(isAsync, false);

    if (!this.match(5) && this.prodParam.hasIn) {
      flags |= PARAM_IN;
    }

    this.prodParam.enter(flags);
    this.initFunction(node, isAsync);
    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;

    if (params) {
      this.state.maybeInArrowParameters = true;
      this.setArrowFunctionParameters(node, params, trailingCommaLoc);
    }

    this.state.maybeInArrowParameters = false;
    this.parseFunctionBody(node, true);
    this.prodParam.exit();
    this.scope.exit();
    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return this.finishNode(node, "ArrowFunctionExpression");
  }

  setArrowFunctionParameters(node, params, trailingCommaLoc) {
    node.params = this.toAssignableList(params, trailingCommaLoc, false);
  }

  parseFunctionBodyAndFinish(node, type, isMethod = false) {
    this.parseFunctionBody(node, false, isMethod);
    this.finishNode(node, type);
  }

  parseFunctionBody(node, allowExpression, isMethod = false) {
    const isExpression = allowExpression && !this.match(5);
    this.expressionScope.enter(newExpressionScope());

    if (isExpression) {
      node.body = this.parseMaybeAssign();
      this.checkParams(node, false, allowExpression, false);
    } else {
      const oldStrict = this.state.strict;
      const oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(this.prodParam.currentFlags() | PARAM_RETURN);
      node.body = this.parseBlock(true, false, hasStrictModeDirective => {
        const nonSimple = !this.isSimpleParamList(node.params);

        if (hasStrictModeDirective && nonSimple) {
          const errorOrigin = (node.kind === "method" || node.kind === "constructor") && !!node.key ? {
            at: node.key.loc.end
          } : {
            node
          };
          this.raise(ErrorMessages.IllegalLanguageModeDirective, errorOrigin);
        }

        const strictModeChanged = !oldStrict && this.state.strict;
        this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);

        if (this.state.strict && node.id) {
          this.checkLVal(node.id, "function name", BIND_OUTSIDE, undefined, undefined, strictModeChanged);
        }
      });
      this.prodParam.exit();
      this.state.labels = oldLabels;
    }

    this.expressionScope.exit();
  }

  isSimpleParamList(params) {
    for (let i = 0, len = params.length; i < len; i++) {
      if (params[i].type !== "Identifier") return false;
    }

    return true;
  }

  checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
    const checkClashes = new Set();

    for (const param of node.params) {
      this.checkLVal(param, "function parameter list", BIND_VAR, allowDuplicates ? null : checkClashes, undefined, strictModeChanged);
    }
  }

  parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
    const elts = [];
    let first = true;

    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);

        if (this.match(close)) {
          if (nodeForExtra) {
            this.addTrailingCommaExtraToNode(nodeForExtra);
          }

          this.next();
          break;
        }
      }

      elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
    }

    return elts;
  }

  parseExprListItem(allowEmpty, refExpressionErrors, allowPlaceholder) {
    let elt;

    if (this.match(12)) {
      if (!allowEmpty) {
        this.raise(ErrorMessages.UnexpectedToken, {
          at: this.state.curPosition()
        }, ",");
      }

      elt = null;
    } else if (this.match(21)) {
      const spreadNodeStartPos = this.state.start;
      const spreadNodeStartLoc = this.state.startLoc;
      elt = this.parseParenItem(this.parseSpread(refExpressionErrors), spreadNodeStartPos, spreadNodeStartLoc);
    } else if (this.match(17)) {
      this.expectPlugin("partialApplication");

      if (!allowPlaceholder) {
        this.raise(ErrorMessages.UnexpectedArgumentPlaceholder, {
          at: this.state.startLoc
        });
      }

      const node = this.startNode();
      this.next();
      elt = this.finishNode(node, "ArgumentPlaceholder");
    } else {
      elt = this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem);
    }

    return elt;
  }

  parseIdentifier(liberal) {
    const node = this.startNode();
    const name = this.parseIdentifierName(node.start, liberal);
    return this.createIdentifier(node, name);
  }

  createIdentifier(node, name) {
    node.name = name;
    node.loc.identifierName = name;
    return this.finishNode(node, "Identifier");
  }

  parseIdentifierName(pos, liberal) {
    let name;
    const {
      startLoc,
      type
    } = this.state;

    if (tokenIsKeywordOrIdentifier(type)) {
      name = this.state.value;
    } else {
      throw this.unexpected();
    }

    const tokenIsKeyword = tokenKeywordOrIdentifierIsKeyword(type);

    if (liberal) {
      if (tokenIsKeyword) {
        this.replaceToken(128);
      }
    } else {
      this.checkReservedWord(name, startLoc, tokenIsKeyword, false);
    }

    this.next();
    return name;
  }

  checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    if (word.length > 10) {
      return;
    }

    if (!canBeReservedWord(word)) {
      return;
    }

    if (word === "yield") {
      if (this.prodParam.hasYield) {
        this.raise(ErrorMessages.YieldBindingIdentifier, {
          at: startLoc
        });
        return;
      }
    } else if (word === "await") {
      if (this.prodParam.hasAwait) {
        this.raise(ErrorMessages.AwaitBindingIdentifier, {
          at: startLoc
        });
        return;
      }

      if (this.scope.inStaticBlock) {
        this.raise(ErrorMessages.AwaitBindingIdentifierInStaticBlock, {
          at: startLoc
        });
        return;
      }

      this.expressionScope.recordAsyncArrowParametersError(ErrorMessages.AwaitBindingIdentifier, startLoc);
    } else if (word === "arguments") {
      if (this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(ErrorMessages.ArgumentsInClass, {
          at: startLoc
        });
        return;
      }
    }

    if (checkKeywords && isKeyword(word)) {
      this.raise(ErrorMessages.UnexpectedKeyword, {
        at: startLoc
      }, word);
      return;
    }

    const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;

    if (reservedTest(word, this.inModule)) {
      this.raise(ErrorMessages.UnexpectedReservedWord, {
        at: startLoc
      }, word);
    }
  }

  isAwaitAllowed() {
    if (this.prodParam.hasAwait) return true;

    if (this.options.allowAwaitOutsideFunction && !this.scope.inFunction) {
      return true;
    }

    return false;
  }

  parseAwait(startPos, startLoc) {
    const node = this.startNodeAt(startPos, startLoc);
    this.expressionScope.recordParameterInitializerError(node.loc.start, ErrorMessages.AwaitExpressionFormalParameter);

    if (this.eat(55)) {
      this.raise(ErrorMessages.ObsoleteAwaitStar, {
        node
      });
    }

    if (!this.scope.inFunction && !this.options.allowAwaitOutsideFunction) {
      if (this.isAmbiguousAwait()) {
        this.ambiguousScriptDifferentAst = true;
      } else {
        this.sawUnambiguousESM = true;
      }
    }

    if (!this.state.soloAwait) {
      node.argument = this.parseMaybeUnary(null, true);
    }

    return this.finishNode(node, "AwaitExpression");
  }

  isAmbiguousAwait() {
    if (this.hasPrecedingLineBreak()) return true;
    const {
      type
    } = this.state;
    return type === 53 || type === 10 || type === 0 || tokenIsTemplate(type) || type === 133 || type === 56 || this.hasPlugin("v8intrinsic") && type === 54;
  }

  parseYield() {
    const node = this.startNode();
    this.expressionScope.recordParameterInitializerError(node.loc.start, ErrorMessages.YieldInParameter);
    this.next();
    let delegating = false;
    let argument = null;

    if (!this.hasPrecedingLineBreak()) {
      delegating = this.eat(55);

      switch (this.state.type) {
        case 13:
        case 135:
        case 8:
        case 11:
        case 3:
        case 9:
        case 14:
        case 12:
          if (!delegating) break;

        default:
          argument = this.parseMaybeAssign();
      }
    }

    node.delegate = delegating;
    node.argument = argument;
    return this.finishNode(node, "YieldExpression");
  }

  checkPipelineAtInfixOperator(left, leftStartLoc) {
    if (this.hasPlugin(["pipelineOperator", {
      proposal: "smart"
    }])) {
      if (left.type === "SequenceExpression") {
        this.raise(ErrorMessages.PipelineHeadSequenceExpression, {
          at: leftStartLoc
        });
      }
    }
  }

  parseSmartPipelineBodyInStyle(childExpr, startPos, startLoc) {
    const bodyNode = this.startNodeAt(startPos, startLoc);

    if (this.isSimpleReference(childExpr)) {
      bodyNode.callee = childExpr;
      return this.finishNode(bodyNode, "PipelineBareFunction");
    } else {
      this.checkSmartPipeTopicBodyEarlyErrors(startLoc);
      bodyNode.expression = childExpr;
      return this.finishNode(bodyNode, "PipelineTopicExpression");
    }
  }

  isSimpleReference(expression) {
    switch (expression.type) {
      case "MemberExpression":
        return !expression.computed && this.isSimpleReference(expression.object);

      case "Identifier":
        return true;

      default:
        return false;
    }
  }

  checkSmartPipeTopicBodyEarlyErrors(startLoc) {
    if (this.match(19)) {
      throw this.raise(ErrorMessages.PipelineBodyNoArrow, {
        at: this.state.startLoc
      });
    }

    if (!this.topicReferenceWasUsedInCurrentContext()) {
      this.raise(ErrorMessages.PipelineTopicUnused, {
        at: startLoc
      });
    }
  }

  withTopicBindingContext(callback) {
    const outerContextTopicState = this.state.topicContext;
    this.state.topicContext = {
      maxNumOfResolvableTopics: 1,
      maxTopicIndex: null
    };

    try {
      return callback();
    } finally {
      this.state.topicContext = outerContextTopicState;
    }
  }

  withSmartMixTopicForbiddingContext(callback) {
    if (this.hasPlugin(["pipelineOperator", {
      proposal: "smart"
    }])) {
      const outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };

      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    } else {
      return callback();
    }
  }

  withSoloAwaitPermittingContext(callback) {
    const outerContextSoloAwaitState = this.state.soloAwait;
    this.state.soloAwait = true;

    try {
      return callback();
    } finally {
      this.state.soloAwait = outerContextSoloAwaitState;
    }
  }

  allowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToSet = PARAM_IN & ~flags;

    if (prodParamToSet) {
      this.prodParam.enter(flags | PARAM_IN);

      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }

    return callback();
  }

  disallowInAnd(callback) {
    const flags = this.prodParam.currentFlags();
    const prodParamToClear = PARAM_IN & flags;

    if (prodParamToClear) {
      this.prodParam.enter(flags & ~PARAM_IN);

      try {
        return callback();
      } finally {
        this.prodParam.exit();
      }
    }

    return callback();
  }

  registerTopicReference() {
    this.state.topicContext.maxTopicIndex = 0;
  }

  topicReferenceIsAllowedInCurrentContext() {
    return this.state.topicContext.maxNumOfResolvableTopics >= 1;
  }

  topicReferenceWasUsedInCurrentContext() {
    return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
  }

  parseFSharpPipelineBody(prec) {
    const startPos = this.state.start;
    const startLoc = this.state.startLoc;
    this.state.potentialArrowAt = this.state.start;
    const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
    this.state.inFSharpPipelineDirectBody = true;
    const ret = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startPos, startLoc, prec);
    this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
    return ret;
  }

  parseModuleExpression() {
    this.expectPlugin("moduleBlocks");
    const node = this.startNode();
    this.next();
    this.eat(5);
    const revertScopes = this.initializeScopes(true);
    this.enterInitialScopes();
    const program = this.startNode();

    try {
      node.body = this.parseProgram(program, 8, "module");
    } finally {
      revertScopes();
    }

    this.eat(8);
    return this.finishNode(node, "ModuleExpression");
  }

  parsePropertyNamePrefixOperator(prop) {}

}

const loopLabel = {
  kind: "loop"
},
      switchLabel = {
  kind: "switch"
};
const FUNC_NO_FLAGS = 0b000,
      FUNC_STATEMENT = 0b001,
      FUNC_HANGING_STATEMENT = 0b010,
      FUNC_NULLABLE_ID = 0b100;
const loneSurrogate = /[\uD800-\uDFFF]/u;
const keywordRelationalOperator = /in(?:stanceof)?/y;

function babel7CompatTokens(tokens, input) {
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const {
      type
    } = token;

    if (typeof type === "number") {
      {
        if (type === 134) {
          const {
            loc,
            start,
            value,
            end
          } = token;
          const hashEndPos = start + 1;
          const hashEndLoc = createPositionWithColumnOffset(loc.start, 1);
          tokens.splice(i, 1, new Token({
            type: getExportedToken(27),
            value: "#",
            start: start,
            end: hashEndPos,
            startLoc: loc.start,
            endLoc: hashEndLoc
          }), new Token({
            type: getExportedToken(128),
            value: value,
            start: hashEndPos,
            end: end,
            startLoc: hashEndLoc,
            endLoc: loc.end
          }));
          i++;
          continue;
        }

        if (tokenIsTemplate(type)) {
          const {
            loc,
            start,
            value,
            end
          } = token;
          const backquoteEnd = start + 1;
          const backquoteEndLoc = createPositionWithColumnOffset(loc.start, 1);
          let startToken;

          if (input.charCodeAt(start) === 96) {
            startToken = new Token({
              type: getExportedToken(22),
              value: "`",
              start: start,
              end: backquoteEnd,
              startLoc: loc.start,
              endLoc: backquoteEndLoc
            });
          } else {
            startToken = new Token({
              type: getExportedToken(8),
              value: "}",
              start: start,
              end: backquoteEnd,
              startLoc: loc.start,
              endLoc: backquoteEndLoc
            });
          }

          let templateValue, templateElementEnd, templateElementEndLoc, endToken;

          if (type === 24) {
            templateElementEnd = end - 1;
            templateElementEndLoc = createPositionWithColumnOffset(loc.end, -1);
            templateValue = value === null ? null : value.slice(1, -1);
            endToken = new Token({
              type: getExportedToken(22),
              value: "`",
              start: templateElementEnd,
              end: end,
              startLoc: templateElementEndLoc,
              endLoc: loc.end
            });
          } else {
            templateElementEnd = end - 2;
            templateElementEndLoc = createPositionWithColumnOffset(loc.end, -2);
            templateValue = value === null ? null : value.slice(1, -2);
            endToken = new Token({
              type: getExportedToken(23),
              value: "${",
              start: templateElementEnd,
              end: end,
              startLoc: templateElementEndLoc,
              endLoc: loc.end
            });
          }

          tokens.splice(i, 1, startToken, new Token({
            type: getExportedToken(20),
            value: templateValue,
            start: backquoteEnd,
            end: templateElementEnd,
            startLoc: backquoteEndLoc,
            endLoc: templateElementEndLoc
          }), endToken);
          i += 2;
          continue;
        }
      }
      token.type = getExportedToken(type);
    }
  }

  return tokens;
}

class StatementParser extends ExpressionParser {
  parseTopLevel(file, program) {
    file.program = this.parseProgram(program);
    file.comments = this.state.comments;

    if (this.options.tokens) {
      file.tokens = babel7CompatTokens(this.tokens, this.input);
    }

    return this.finishNode(file, "File");
  }

  parseProgram(program, end = 135, sourceType = this.options.sourceType) {
    program.sourceType = sourceType;
    program.interpreter = this.parseInterpreterDirective();
    this.parseBlockBody(program, true, true, end);

    if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
      for (const [name, loc] of Array.from(this.scope.undefinedExports)) {
        this.raise(ErrorMessages.ModuleExportUndefined, {
          at: loc
        }, name);
      }
    }

    return this.finishNode(program, "Program");
  }

  stmtToDirective(stmt) {
    const directive = stmt;
    directive.type = "Directive";
    directive.value = directive.expression;
    delete directive.expression;
    const directiveLiteral = directive.value;
    const expressionValue = directiveLiteral.value;
    const raw = this.input.slice(directiveLiteral.start, directiveLiteral.end);
    const val = directiveLiteral.value = raw.slice(1, -1);
    this.addExtra(directiveLiteral, "raw", raw);
    this.addExtra(directiveLiteral, "rawValue", val);
    this.addExtra(directiveLiteral, "expressionValue", expressionValue);
    directiveLiteral.type = "DirectiveLiteral";
    return directive;
  }

  parseInterpreterDirective() {
    if (!this.match(28)) {
      return null;
    }

    const node = this.startNode();
    node.value = this.state.value;
    this.next();
    return this.finishNode(node, "InterpreterDirective");
  }

  isLet(context) {
    if (!this.isContextual(99)) {
      return false;
    }

    return this.isLetKeyword(context);
  }

  isLetKeyword(context) {
    const next = this.nextTokenStart();
    const nextCh = this.codePointAtPos(next);

    if (nextCh === 92 || nextCh === 91) {
      return true;
    }

    if (context) return false;
    if (nextCh === 123) return true;

    if (isIdentifierStart(nextCh)) {
      keywordRelationalOperator.lastIndex = next;

      if (keywordRelationalOperator.test(this.input)) {
        const endCh = this.codePointAtPos(keywordRelationalOperator.lastIndex);

        if (!isIdentifierChar(endCh) && endCh !== 92) {
          return false;
        }
      }

      return true;
    }

    return false;
  }

  parseStatement(context, topLevel) {
    if (this.match(26)) {
      this.parseDecorators(true);
    }

    return this.parseStatementContent(context, topLevel);
  }

  parseStatementContent(context, topLevel) {
    let starttype = this.state.type;
    const node = this.startNode();
    let kind;

    if (this.isLet(context)) {
      starttype = 74;
      kind = "let";
    }

    switch (starttype) {
      case 60:
        return this.parseBreakContinueStatement(node, true);

      case 63:
        return this.parseBreakContinueStatement(node, false);

      case 64:
        return this.parseDebuggerStatement(node);

      case 90:
        return this.parseDoStatement(node);

      case 91:
        return this.parseForStatement(node);

      case 68:
        if (this.lookaheadCharCode() === 46) break;

        if (context) {
          if (this.state.strict) {
            this.raise(ErrorMessages.StrictFunction, {
              at: this.state.startLoc
            });
          } else if (context !== "if" && context !== "label") {
            this.raise(ErrorMessages.SloppyFunction, {
              at: this.state.startLoc
            });
          }
        }

        return this.parseFunctionStatement(node, false, !context);

      case 80:
        if (context) this.unexpected();
        return this.parseClass(node, true);

      case 69:
        return this.parseIfStatement(node);

      case 70:
        return this.parseReturnStatement(node);

      case 71:
        return this.parseSwitchStatement(node);

      case 72:
        return this.parseThrowStatement(node);

      case 73:
        return this.parseTryStatement(node);

      case 75:
      case 74:
        kind = kind || this.state.value;

        if (context && kind !== "var") {
          this.raise(ErrorMessages.UnexpectedLexicalDeclaration, {
            at: this.state.startLoc
          });
        }

        return this.parseVarStatement(node, kind);

      case 92:
        return this.parseWhileStatement(node);

      case 76:
        return this.parseWithStatement(node);

      case 5:
        return this.parseBlock();

      case 13:
        return this.parseEmptyStatement(node);

      case 83:
        {
          const nextTokenCharCode = this.lookaheadCharCode();

          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
            break;
          }
        }

      case 82:
        {
          if (!this.options.allowImportExportEverywhere && !topLevel) {
            this.raise(ErrorMessages.UnexpectedImportExport, {
              at: this.state.startLoc
            });
          }

          this.next();
          let result;

          if (starttype === 83) {
            result = this.parseImport(node);

            if (result.type === "ImportDeclaration" && (!result.importKind || result.importKind === "value")) {
              this.sawUnambiguousESM = true;
            }
          } else {
            result = this.parseExport(node);

            if (result.type === "ExportNamedDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportAllDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportDefaultDeclaration") {
              this.sawUnambiguousESM = true;
            }
          }

          this.assertModuleNodeAllowed(node);
          return result;
        }

      default:
        {
          if (this.isAsyncFunction()) {
            if (context) {
              this.raise(ErrorMessages.AsyncFunctionInSingleStatementContext, {
                at: this.state.startLoc
              });
            }

            this.next();
            return this.parseFunctionStatement(node, true, !context);
          }
        }
    }

    const maybeName = this.state.value;
    const expr = this.parseExpression();

    if (tokenIsIdentifier(starttype) && expr.type === "Identifier" && this.eat(14)) {
      return this.parseLabeledStatement(node, maybeName, expr, context);
    } else {
      return this.parseExpressionStatement(node, expr);
    }
  }

  assertModuleNodeAllowed(node) {
    if (!this.options.allowImportExportEverywhere && !this.inModule) {
      this.raise(SourceTypeModuleErrorMessages.ImportOutsideModule, {
        node
      });
    }
  }

  takeDecorators(node) {
    const decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (decorators.length) {
      node.decorators = decorators;
      this.resetStartLocationFromNode(node, decorators[0]);
      this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
    }
  }

  canHaveLeadingDecorator() {
    return this.match(80);
  }

  parseDecorators(allowExport) {
    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    while (this.match(26)) {
      const decorator = this.parseDecorator();
      currentContextDecorators.push(decorator);
    }

    if (this.match(82)) {
      if (!allowExport) {
        this.unexpected();
      }

      if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(ErrorMessages.DecoratorExportClass, {
          at: this.state.startLoc
        });
      }
    } else if (!this.canHaveLeadingDecorator()) {
      throw this.raise(ErrorMessages.UnexpectedLeadingDecorator, {
        at: this.state.startLoc
      });
    }
  }

  parseDecorator() {
    this.expectOnePlugin(["decorators-legacy", "decorators"]);
    const node = this.startNode();
    this.next();

    if (this.hasPlugin("decorators")) {
      this.state.decoratorStack.push([]);
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let expr;

      if (this.eat(10)) {
        expr = this.parseExpression();
        this.expect(11);
      } else {
        expr = this.parseIdentifier(false);

        while (this.eat(16)) {
          const node = this.startNodeAt(startPos, startLoc);
          node.object = expr;
          node.property = this.parseIdentifier(true);
          node.computed = false;
          expr = this.finishNode(node, "MemberExpression");
        }
      }

      node.expression = this.parseMaybeDecoratorArguments(expr);
      this.state.decoratorStack.pop();
    } else {
      node.expression = this.parseExprSubscripts();
    }

    return this.finishNode(node, "Decorator");
  }

  parseMaybeDecoratorArguments(expr) {
    if (this.eat(10)) {
      const node = this.startNodeAtNode(expr);
      node.callee = expr;
      node.arguments = this.parseCallExpressionArguments(11, false);
      this.toReferencedList(node.arguments);
      return this.finishNode(node, "CallExpression");
    }

    return expr;
  }

  parseBreakContinueStatement(node, isBreak) {
    this.next();

    if (this.isLineTerminator()) {
      node.label = null;
    } else {
      node.label = this.parseIdentifier();
      this.semicolon();
    }

    this.verifyBreakContinue(node, isBreak);
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  }

  verifyBreakContinue(node, isBreak) {
    let i;

    for (i = 0; i < this.state.labels.length; ++i) {
      const lab = this.state.labels[i];

      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
        if (node.label && isBreak) break;
      }
    }

    if (i === this.state.labels.length) {
      this.raise(ErrorMessages.IllegalBreakContinue, {
        node
      }, isBreak ? "break" : "continue");
    }
  }

  parseDebuggerStatement(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  }

  parseHeaderExpression() {
    this.expect(10);
    const val = this.parseExpression();
    this.expect(11);
    return val;
  }

  parseDoStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do"));
    this.state.labels.pop();
    this.expect(92);
    node.test = this.parseHeaderExpression();
    this.eat(13);
    return this.finishNode(node, "DoWhileStatement");
  }

  parseForStatement(node) {
    this.next();
    this.state.labels.push(loopLabel);
    let awaitAt = null;

    if (this.isAwaitAllowed() && this.eatContextual(96)) {
      awaitAt = this.state.lastTokStartLoc;
    }

    this.scope.enter(SCOPE_OTHER);
    this.expect(10);

    if (this.match(13)) {
      if (awaitAt !== null) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, null);
    }

    const startsWithLet = this.isContextual(99);
    const isLet = startsWithLet && this.isLetKeyword();

    if (this.match(74) || this.match(75) || isLet) {
      const init = this.startNode();
      const kind = isLet ? "let" : this.state.value;
      this.next();
      this.parseVar(init, true, kind);
      this.finishNode(init, "VariableDeclaration");

      if ((this.match(58) || this.isContextual(101)) && init.declarations.length === 1) {
        return this.parseForIn(node, init, awaitAt);
      }

      if (awaitAt !== null) {
        this.unexpected(awaitAt);
      }

      return this.parseFor(node, init);
    }

    const startsWithAsync = this.isContextual(95);
    const refExpressionErrors = new ExpressionErrors();
    const init = this.parseExpression(true, refExpressionErrors);
    const isForOf = this.isContextual(101);

    if (isForOf) {
      if (startsWithLet) {
        this.raise(ErrorMessages.ForOfLet, {
          node: init
        });
      }

      if (awaitAt === null && startsWithAsync && init.type === "Identifier") {
        this.raise(ErrorMessages.ForOfAsync, {
          node: init
        });
      }
    }

    if (isForOf || this.match(58)) {
      this.checkDestructuringPrivate(refExpressionErrors);
      this.toAssignable(init, true);
      const description = isForOf ? "for-of statement" : "for-in statement";
      this.checkLVal(init, description);
      return this.parseForIn(node, init, awaitAt);
    } else {
      this.checkExpressionErrors(refExpressionErrors, true);
    }

    if (awaitAt !== null) {
      this.unexpected(awaitAt);
    }

    return this.parseFor(node, init);
  }

  parseFunctionStatement(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), isAsync);
  }

  parseIfStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(66) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement");
  }

  parseReturnStatement(node) {
    if (!this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction) {
      this.raise(ErrorMessages.IllegalReturn, {
        at: this.state.startLoc
      });
    }

    this.next();

    if (this.isLineTerminator()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }

    return this.finishNode(node, "ReturnStatement");
  }

  parseSwitchStatement(node) {
    this.next();
    node.discriminant = this.parseHeaderExpression();
    const cases = node.cases = [];
    this.expect(5);
    this.state.labels.push(switchLabel);
    this.scope.enter(SCOPE_OTHER);
    let cur;

    for (let sawDefault; !this.match(8);) {
      if (this.match(61) || this.match(65)) {
        const isCase = this.match(61);
        if (cur) this.finishNode(cur, "SwitchCase");
        cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();

        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raise(ErrorMessages.MultipleDefaultsInSwitch, {
              at: this.state.lastTokStartLoc
            });
          }

          sawDefault = true;
          cur.test = null;
        }

        this.expect(14);
      } else {
        if (cur) {
          cur.consequent.push(this.parseStatement(null));
        } else {
          this.unexpected();
        }
      }
    }

    this.scope.exit();
    if (cur) this.finishNode(cur, "SwitchCase");
    this.next();
    this.state.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  }

  parseThrowStatement(node) {
    this.next();

    if (this.hasPrecedingLineBreak()) {
      this.raise(ErrorMessages.NewlineAfterThrow, {
        at: this.state.lastTokEndLoc
      });
    }

    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  }

  parseCatchClauseParam() {
    const param = this.parseBindingAtom();
    const simple = param.type === "Identifier";
    this.scope.enter(simple ? SCOPE_SIMPLE_CATCH : 0);
    this.checkLVal(param, "catch clause", BIND_LEXICAL);
    return param;
  }

  parseTryStatement(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;

    if (this.match(62)) {
      const clause = this.startNode();
      this.next();

      if (this.match(10)) {
        this.expect(10);
        clause.param = this.parseCatchClauseParam();
        this.expect(11);
      } else {
        clause.param = null;
        this.scope.enter(SCOPE_OTHER);
      }

      clause.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false));
      this.scope.exit();
      node.handler = this.finishNode(clause, "CatchClause");
    }

    node.finalizer = this.eat(67) ? this.parseBlock() : null;

    if (!node.handler && !node.finalizer) {
      this.raise(ErrorMessages.NoCatchOrFinally, {
        node
      });
    }

    return this.finishNode(node, "TryStatement");
  }

  parseVarStatement(node, kind) {
    this.next();
    this.parseVar(node, false, kind);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  }

  parseWhileStatement(node) {
    this.next();
    node.test = this.parseHeaderExpression();
    this.state.labels.push(loopLabel);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while"));
    this.state.labels.pop();
    return this.finishNode(node, "WhileStatement");
  }

  parseWithStatement(node) {
    if (this.state.strict) {
      this.raise(ErrorMessages.StrictWith, {
        at: this.state.startLoc
      });
    }

    this.next();
    node.object = this.parseHeaderExpression();
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with"));
    return this.finishNode(node, "WithStatement");
  }

  parseEmptyStatement(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  }

  parseLabeledStatement(node, maybeName, expr, context) {
    for (const label of this.state.labels) {
      if (label.name === maybeName) {
        this.raise(ErrorMessages.LabelRedeclaration, {
          node: expr
        }, maybeName);
      }
    }

    const kind = tokenIsLoop(this.state.type) ? "loop" : this.match(71) ? "switch" : null;

    for (let i = this.state.labels.length - 1; i >= 0; i--) {
      const label = this.state.labels[i];

      if (label.statementStart === node.start) {
        label.statementStart = this.state.start;
        label.kind = kind;
      } else {
        break;
      }
    }

    this.state.labels.push({
      name: maybeName,
      kind: kind,
      statementStart: this.state.start
    });
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.state.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  }

  parseExpressionStatement(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  }

  parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
    const node = this.startNode();

    if (allowDirectives) {
      this.state.strictErrors.clear();
    }

    this.expect(5);

    if (createNewLexicalScope) {
      this.scope.enter(SCOPE_OTHER);
    }

    this.parseBlockBody(node, allowDirectives, false, 8, afterBlockParse);

    if (createNewLexicalScope) {
      this.scope.exit();
    }

    return this.finishNode(node, "BlockStatement");
  }

  isValidDirective(stmt) {
    return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
  }

  parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
    const body = node.body = [];
    const directives = node.directives = [];
    this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : undefined, topLevel, end, afterBlockParse);
  }

  parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
    const oldStrict = this.state.strict;
    let hasStrictModeDirective = false;
    let parsedNonDirective = false;

    while (!this.match(end)) {
      const stmt = this.parseStatement(null, topLevel);

      if (directives && !parsedNonDirective) {
        if (this.isValidDirective(stmt)) {
          const directive = this.stmtToDirective(stmt);
          directives.push(directive);

          if (!hasStrictModeDirective && directive.value.value === "use strict") {
            hasStrictModeDirective = true;
            this.setStrict(true);
          }

          continue;
        }

        parsedNonDirective = true;
        this.state.strictErrors.clear();
      }

      body.push(stmt);
    }

    if (afterBlockParse) {
      afterBlockParse.call(this, hasStrictModeDirective);
    }

    if (!oldStrict) {
      this.setStrict(false);
    }

    this.next();
  }

  parseFor(node, init) {
    node.init = init;
    this.semicolon(false);
    node.test = this.match(13) ? null : this.parseExpression();
    this.semicolon(false);
    node.update = this.match(11) ? null : this.parseExpression();
    this.expect(11);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, "ForStatement");
  }

  parseForIn(node, init, awaitAt) {
    const isForIn = this.match(58);
    this.next();

    if (isForIn) {
      if (awaitAt !== null) this.unexpected(awaitAt);
    } else {
      node.await = awaitAt !== null;
    }

    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(ErrorMessages.ForInOfLoopInitializer, {
        node: init
      }, isForIn ? "for-in" : "for-of");
    }

    if (init.type === "AssignmentPattern") {
      this.raise(ErrorMessages.InvalidLhs, {
        node: init
      }, "for-loop");
    }

    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
    this.expect(11);
    node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for"));
    this.scope.exit();
    this.state.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  }

  parseVar(node, isFor, kind) {
    const declarations = node.declarations = [];
    const isTypescript = this.hasPlugin("typescript");
    node.kind = kind;

    for (;;) {
      const decl = this.startNode();
      this.parseVarId(decl, kind);

      if (this.eat(29)) {
        decl.init = isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
      } else {
        if (kind === "const" && !(this.match(58) || this.isContextual(101))) {
          if (!isTypescript) {
            this.raise(ErrorMessages.DeclarationMissingInitializer, {
              at: this.state.lastTokEndLoc
            }, "Const declarations");
          }
        } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(58) || this.isContextual(101)))) {
          this.raise(ErrorMessages.DeclarationMissingInitializer, {
            at: this.state.lastTokEndLoc
          }, "Complex binding patterns");
        }

        decl.init = null;
      }

      declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(12)) break;
    }

    return node;
  }

  parseVarId(decl, kind) {
    decl.id = this.parseBindingAtom();
    this.checkLVal(decl.id, "variable declaration", kind === "var" ? BIND_VAR : BIND_LEXICAL, undefined, kind !== "var");
  }

  parseFunction(node, statement = FUNC_NO_FLAGS, isAsync = false) {
    const isStatement = statement & FUNC_STATEMENT;
    const isHangingStatement = statement & FUNC_HANGING_STATEMENT;
    const requireId = !!isStatement && !(statement & FUNC_NULLABLE_ID);
    this.initFunction(node, isAsync);

    if (this.match(55) && isHangingStatement) {
      this.raise(ErrorMessages.GeneratorInSingleStatementContext, {
        at: this.state.startLoc
      });
    }

    node.generator = this.eat(55);

    if (isStatement) {
      node.id = this.parseFunctionId(requireId);
    }

    const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
    this.state.maybeInArrowParameters = false;
    this.scope.enter(SCOPE_FUNCTION);
    this.prodParam.enter(functionFlags(isAsync, node.generator));

    if (!isStatement) {
      node.id = this.parseFunctionId();
    }

    this.parseFunctionParams(node, false);
    this.withSmartMixTopicForbiddingContext(() => {
      this.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
    });
    this.prodParam.exit();
    this.scope.exit();

    if (isStatement && !isHangingStatement) {
      this.registerFunctionStatementId(node);
    }

    this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
    return node;
  }

  parseFunctionId(requireId) {
    return requireId || tokenIsIdentifier(this.state.type) ? this.parseIdentifier() : null;
  }

  parseFunctionParams(node, allowModifiers) {
    this.expect(10);
    this.expressionScope.enter(newParameterDeclarationScope());
    node.params = this.parseBindingList(11, 41, false, allowModifiers);
    this.expressionScope.exit();
  }

  registerFunctionStatementId(node) {
    if (!node.id) return;
    this.scope.declareName(node.id.name, this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION, node.id.loc.start);
  }

  parseClass(node, isStatement, optionalId) {
    this.next();
    this.takeDecorators(node);
    const oldStrict = this.state.strict;
    this.state.strict = true;
    this.parseClassId(node, isStatement, optionalId);
    this.parseClassSuper(node);
    node.body = this.parseClassBody(!!node.superClass, oldStrict);
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  }

  isClassProperty() {
    return this.match(29) || this.match(13) || this.match(8);
  }

  isClassMethod() {
    return this.match(10);
  }

  isNonstaticConstructor(method) {
    return !method.computed && !method.static && (method.key.name === "constructor" || method.key.value === "constructor");
  }

  parseClassBody(hadSuperClass, oldStrict) {
    this.classScope.enter();
    const state = {
      hadConstructor: false,
      hadSuperClass
    };
    let decorators = [];
    const classBody = this.startNode();
    classBody.body = [];
    this.expect(5);
    this.withSmartMixTopicForbiddingContext(() => {
      while (!this.match(8)) {
        if (this.eat(13)) {
          if (decorators.length > 0) {
            throw this.raise(ErrorMessages.DecoratorSemicolon, {
              at: this.state.lastTokEndLoc
            });
          }

          continue;
        }

        if (this.match(26)) {
          decorators.push(this.parseDecorator());
          continue;
        }

        const member = this.startNode();

        if (decorators.length) {
          member.decorators = decorators;
          this.resetStartLocationFromNode(member, decorators[0]);
          decorators = [];
        }

        this.parseClassMember(classBody, member, state);

        if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
          this.raise(ErrorMessages.DecoratorConstructor, {
            node: member
          });
        }
      }
    });
    this.state.strict = oldStrict;
    this.next();

    if (decorators.length) {
      throw this.raise(ErrorMessages.TrailingDecorator, {
        at: this.state.startLoc
      });
    }

    this.classScope.exit();
    return this.finishNode(classBody, "ClassBody");
  }

  parseClassMemberFromModifier(classBody, member) {
    const key = this.parseIdentifier(true);

    if (this.isClassMethod()) {
      const method = member;
      method.kind = "method";
      method.computed = false;
      method.key = key;
      method.static = false;
      this.pushClassMethod(classBody, method, false, false, false, false);
      return true;
    } else if (this.isClassProperty()) {
      const prop = member;
      prop.computed = false;
      prop.key = key;
      prop.static = false;
      classBody.body.push(this.parseClassProperty(prop));
      return true;
    }

    this.resetPreviousNodeTrailingComments(key);
    return false;
  }

  parseClassMember(classBody, member, state) {
    const isStatic = this.isContextual(104);

    if (isStatic) {
      if (this.parseClassMemberFromModifier(classBody, member)) {
        return;
      }

      if (this.eat(5)) {
        this.parseClassStaticBlock(classBody, member);
        return;
      }
    }

    this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
  }

  parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
    const publicMethod = member;
    const privateMethod = member;
    const publicProp = member;
    const privateProp = member;
    const accessorProp = member;
    const method = publicMethod;
    const publicMember = publicMethod;
    member.static = isStatic;
    this.parsePropertyNamePrefixOperator(member);

    if (this.eat(55)) {
      method.kind = "method";
      const isPrivateName = this.match(134);
      this.parseClassElementName(method);

      if (isPrivateName) {
        this.pushClassPrivateMethod(classBody, privateMethod, true, false);
        return;
      }

      if (this.isNonstaticConstructor(publicMethod)) {
        this.raise(ErrorMessages.ConstructorIsGenerator, {
          node: publicMethod.key
        });
      }

      this.pushClassMethod(classBody, publicMethod, true, false, false, false);
      return;
    }

    const isContextual = tokenIsIdentifier(this.state.type) && !this.state.containsEsc;
    const isPrivate = this.match(134);
    const key = this.parseClassElementName(member);
    const maybeQuestionTokenStartLoc = this.state.startLoc;
    this.parsePostMemberNameModifiers(publicMember);

    if (this.isClassMethod()) {
      method.kind = "method";

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        return;
      }

      const isConstructor = this.isNonstaticConstructor(publicMethod);
      let allowsDirectSuper = false;

      if (isConstructor) {
        publicMethod.kind = "constructor";

        if (state.hadConstructor && !this.hasPlugin("typescript")) {
          this.raise(ErrorMessages.DuplicateConstructor, {
            node: key
          });
        }

        if (isConstructor && this.hasPlugin("typescript") && member.override) {
          this.raise(ErrorMessages.OverrideOnConstructor, {
            node: key
          });
        }

        state.hadConstructor = true;
        allowsDirectSuper = state.hadSuperClass;
      }

      this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
    } else if (this.isClassProperty()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else if (isContextual && key.name === "async" && !this.isLineTerminator()) {
      this.resetPreviousNodeTrailingComments(key);
      const isGenerator = this.eat(55);

      if (publicMember.optional) {
        this.unexpected(maybeQuestionTokenStartLoc);
      }

      method.kind = "method";
      const isPrivate = this.match(134);
      this.parseClassElementName(method);
      this.parsePostMemberNameModifiers(publicMember);

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(ErrorMessages.ConstructorIsAsync, {
            node: publicMethod.key
          });
        }

        this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
      }
    } else if (isContextual && (key.name === "get" || key.name === "set") && !(this.match(55) && this.isLineTerminator())) {
      this.resetPreviousNodeTrailingComments(key);
      method.kind = key.name;
      const isPrivate = this.match(134);
      this.parseClassElementName(publicMethod);

      if (isPrivate) {
        this.pushClassPrivateMethod(classBody, privateMethod, false, false);
      } else {
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(ErrorMessages.ConstructorIsAccessor, {
            node: publicMethod.key
          });
        }

        this.pushClassMethod(classBody, publicMethod, false, false, false, false);
      }

      this.checkGetterSetterParams(publicMethod);
    } else if (isContextual && key.name === "accessor" && !this.isLineTerminator()) {
      this.expectPlugin("decoratorAutoAccessors");
      this.resetPreviousNodeTrailingComments(key);
      const isPrivate = this.match(134);
      this.parseClassElementName(publicProp);
      this.pushClassAccessorProperty(classBody, accessorProp, isPrivate);
    } else if (this.isLineTerminator()) {
      if (isPrivate) {
        this.pushClassPrivateProperty(classBody, privateProp);
      } else {
        this.pushClassProperty(classBody, publicProp);
      }
    } else {
      this.unexpected();
    }
  }

  parseClassElementName(member) {
    const {
      type,
      value
    } = this.state;

    if ((type === 128 || type === 129) && member.static && value === "prototype") {
      this.raise(ErrorMessages.StaticPrototype, {
        at: this.state.startLoc
      });
    }

    if (type === 134) {
      if (value === "constructor") {
        this.raise(ErrorMessages.ConstructorClassPrivateField, {
          at: this.state.startLoc
        });
      }

      const key = this.parsePrivateName();
      member.key = key;
      return key;
    }

    return this.parsePropertyName(member);
  }

  parseClassStaticBlock(classBody, member) {
    var _member$decorators;

    this.scope.enter(SCOPE_CLASS | SCOPE_STATIC_BLOCK | SCOPE_SUPER);
    const oldLabels = this.state.labels;
    this.state.labels = [];
    this.prodParam.enter(PARAM);
    const body = member.body = [];
    this.parseBlockOrModuleBlockBody(body, undefined, false, 8);
    this.prodParam.exit();
    this.scope.exit();
    this.state.labels = oldLabels;
    classBody.body.push(this.finishNode(member, "StaticBlock"));

    if ((_member$decorators = member.decorators) != null && _member$decorators.length) {
      this.raise(ErrorMessages.DecoratorStaticBlock, {
        node: member
      });
    }
  }

  pushClassProperty(classBody, prop) {
    if (!prop.computed && (prop.key.name === "constructor" || prop.key.value === "constructor")) {
      this.raise(ErrorMessages.ConstructorClassField, {
        node: prop.key
      });
    }

    classBody.body.push(this.parseClassProperty(prop));
  }

  pushClassPrivateProperty(classBody, prop) {
    const node = this.parseClassPrivateProperty(prop);
    classBody.body.push(node);
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), CLASS_ELEMENT_OTHER, node.key.loc.start);
  }

  pushClassAccessorProperty(classBody, prop, isPrivate) {
    if (!isPrivate && !prop.computed) {
      const key = prop.key;

      if (key.name === "constructor" || key.value === "constructor") {
        this.raise(ErrorMessages.ConstructorClassField, {
          node: key
        });
      }
    }

    const node = this.parseClassAccessorProperty(prop);
    classBody.body.push(node);

    if (isPrivate) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), CLASS_ELEMENT_OTHER, node.key.loc.start);
    }
  }

  pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
    classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
  }

  pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
    const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
    classBody.body.push(node);
    const kind = node.kind === "get" ? node.static ? CLASS_ELEMENT_STATIC_GETTER : CLASS_ELEMENT_INSTANCE_GETTER : node.kind === "set" ? node.static ? CLASS_ELEMENT_STATIC_SETTER : CLASS_ELEMENT_INSTANCE_SETTER : CLASS_ELEMENT_OTHER;
    this.declareClassPrivateMethodInScope(node, kind);
  }

  declareClassPrivateMethodInScope(node, kind) {
    this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.loc.start);
  }

  parsePostMemberNameModifiers(methodOrProp) {}

  parseClassPrivateProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassPrivateProperty");
  }

  parseClassProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassProperty");
  }

  parseClassAccessorProperty(node) {
    this.parseInitializer(node);
    this.semicolon();
    return this.finishNode(node, "ClassAccessorProperty");
  }

  parseInitializer(node) {
    this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
    this.expressionScope.enter(newExpressionScope());
    this.prodParam.enter(PARAM);
    node.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null;
    this.expressionScope.exit();
    this.prodParam.exit();
    this.scope.exit();
  }

  parseClassId(node, isStatement, optionalId, bindingType = BIND_CLASS) {
    if (tokenIsIdentifier(this.state.type)) {
      node.id = this.parseIdentifier();

      if (isStatement) {
        this.checkLVal(node.id, "class name", bindingType);
      }
    } else {
      if (optionalId || !isStatement) {
        node.id = null;
      } else {
        throw this.raise(ErrorMessages.MissingClassName, {
          at: this.state.startLoc
        });
      }
    }
  }

  parseClassSuper(node) {
    node.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
  }

  parseExport(node) {
    const hasDefault = this.maybeParseExportDefaultSpecifier(node);
    const parseAfterDefault = !hasDefault || this.eat(12);
    const hasStar = parseAfterDefault && this.eatExportStar(node);
    const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
    const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(12));
    const isFromRequired = hasDefault || hasStar;

    if (hasStar && !hasNamespace) {
      if (hasDefault) this.unexpected();
      this.parseExportFrom(node, true);
      return this.finishNode(node, "ExportAllDeclaration");
    }

    const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);

    if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers || hasNamespace && parseAfterNamespace && !hasSpecifiers) {
      throw this.unexpected(null, 5);
    }

    let hasDeclaration;

    if (isFromRequired || hasSpecifiers) {
      hasDeclaration = false;
      this.parseExportFrom(node, isFromRequired);
    } else {
      hasDeclaration = this.maybeParseExportDeclaration(node);
    }

    if (isFromRequired || hasSpecifiers || hasDeclaration) {
      this.checkExport(node, true, false, !!node.source);
      return this.finishNode(node, "ExportNamedDeclaration");
    }

    if (this.eat(65)) {
      node.declaration = this.parseExportDefaultExpression();
      this.checkExport(node, true, true);
      return this.finishNode(node, "ExportDefaultDeclaration");
    }

    throw this.unexpected(null, 5);
  }

  eatExportStar(node) {
    return this.eat(55);
  }

  maybeParseExportDefaultSpecifier(node) {
    if (this.isExportDefaultSpecifier()) {
      this.expectPlugin("exportDefaultFrom");
      const specifier = this.startNode();
      specifier.exported = this.parseIdentifier(true);
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return true;
    }

    return false;
  }

  maybeParseExportNamespaceSpecifier(node) {
    if (this.isContextual(93)) {
      if (!node.specifiers) node.specifiers = [];
      const specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
      this.next();
      specifier.exported = this.parseModuleExportName();
      node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
      return true;
    }

    return false;
  }

  maybeParseExportNamedSpecifiers(node) {
    if (this.match(5)) {
      if (!node.specifiers) node.specifiers = [];
      const isTypeExport = node.exportKind === "type";
      node.specifiers.push(...this.parseExportSpecifiers(isTypeExport));
      node.source = null;
      node.declaration = null;

      if (this.hasPlugin("importAssertions")) {
        node.assertions = [];
      }

      return true;
    }

    return false;
  }

  maybeParseExportDeclaration(node) {
    if (this.shouldParseExportDeclaration()) {
      node.specifiers = [];
      node.source = null;

      if (this.hasPlugin("importAssertions")) {
        node.assertions = [];
      }

      node.declaration = this.parseExportDeclaration(node);
      return true;
    }

    return false;
  }

  isAsyncFunction() {
    if (!this.isContextual(95)) return false;
    const next = this.nextTokenStart();
    return !lineBreak.test(this.input.slice(this.state.pos, next)) && this.isUnparsedContextual(next, "function");
  }

  parseExportDefaultExpression() {
    const expr = this.startNode();
    const isAsync = this.isAsyncFunction();

    if (this.match(68) || isAsync) {
      this.next();

      if (isAsync) {
        this.next();
      }

      return this.parseFunction(expr, FUNC_STATEMENT | FUNC_NULLABLE_ID, isAsync);
    }

    if (this.match(80)) {
      return this.parseClass(expr, true, true);
    }

    if (this.match(26)) {
      if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
        this.raise(ErrorMessages.DecoratorBeforeExport, {
          at: this.state.startLoc
        });
      }

      this.parseDecorators(false);
      return this.parseClass(expr, true, true);
    }

    if (this.match(75) || this.match(74) || this.isLet()) {
      throw this.raise(ErrorMessages.UnsupportedDefaultExport, {
        at: this.state.startLoc
      });
    }

    const res = this.parseMaybeAssignAllowIn();
    this.semicolon();
    return res;
  }

  parseExportDeclaration(node) {
    return this.parseStatement(null);
  }

  isExportDefaultSpecifier() {
    const {
      type
    } = this.state;

    if (tokenIsIdentifier(type)) {
      if (type === 95 && !this.state.containsEsc || type === 99) {
        return false;
      }

      if ((type === 126 || type === 125) && !this.state.containsEsc) {
        const {
          type: nextType
        } = this.lookahead();

        if (tokenIsIdentifier(nextType) && nextType !== 97 || nextType === 5) {
          this.expectOnePlugin(["flow", "typescript"]);
          return false;
        }
      }
    } else if (!this.match(65)) {
      return false;
    }

    const next = this.nextTokenStart();
    const hasFrom = this.isUnparsedContextual(next, "from");

    if (this.input.charCodeAt(next) === 44 || tokenIsIdentifier(this.state.type) && hasFrom) {
      return true;
    }

    if (this.match(65) && hasFrom) {
      const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
      return nextAfterFrom === 34 || nextAfterFrom === 39;
    }

    return false;
  }

  parseExportFrom(node, expect) {
    if (this.eatContextual(97)) {
      node.source = this.parseImportSource();
      this.checkExport(node);
      const assertions = this.maybeParseImportAssertions();

      if (assertions) {
        node.assertions = assertions;
      }
    } else if (expect) {
      this.unexpected();
    }

    this.semicolon();
  }

  shouldParseExportDeclaration() {
    const {
      type
    } = this.state;

    if (type === 26) {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);

      if (this.hasPlugin("decorators")) {
        if (this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          throw this.raise(ErrorMessages.DecoratorBeforeExport, {
            at: this.state.startLoc
          });
        }

        return true;
      }
    }

    return type === 74 || type === 75 || type === 68 || type === 80 || this.isLet() || this.isAsyncFunction();
  }

  checkExport(node, checkNames, isDefault, isFrom) {
    if (checkNames) {
      if (isDefault) {
        this.checkDuplicateExports(node, "default");

        if (this.hasPlugin("exportDefaultFrom")) {
          var _declaration$extra;

          const declaration = node.declaration;

          if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) != null && _declaration$extra.parenthesized)) {
            this.raise(ErrorMessages.ExportDefaultFromAsIdentifier, {
              node: declaration
            });
          }
        }
      } else if (node.specifiers && node.specifiers.length) {
        for (const specifier of node.specifiers) {
          const {
            exported
          } = specifier;
          const exportedName = exported.type === "Identifier" ? exported.name : exported.value;
          this.checkDuplicateExports(specifier, exportedName);

          if (!isFrom && specifier.local) {
            const {
              local
            } = specifier;

            if (local.type !== "Identifier") {
              this.raise(ErrorMessages.ExportBindingIsString, {
                node: specifier
              }, local.value, exportedName);
            } else {
              this.checkReservedWord(local.name, local.loc.start, true, false);
              this.scope.checkLocalExport(local);
            }
          }
        }
      } else if (node.declaration) {
        if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
          const id = node.declaration.id;
          if (!id) throw new Error("Assertion failure");
          this.checkDuplicateExports(node, id.name);
        } else if (node.declaration.type === "VariableDeclaration") {
          for (const declaration of node.declaration.declarations) {
            this.checkDeclaration(declaration.id);
          }
        }
      }
    }

    const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];

    if (currentContextDecorators.length) {
      throw this.raise(ErrorMessages.UnsupportedDecoratorExport, {
        node
      });
    }
  }

  checkDeclaration(node) {
    if (node.type === "Identifier") {
      this.checkDuplicateExports(node, node.name);
    } else if (node.type === "ObjectPattern") {
      for (const prop of node.properties) {
        this.checkDeclaration(prop);
      }
    } else if (node.type === "ArrayPattern") {
      for (const elem of node.elements) {
        if (elem) {
          this.checkDeclaration(elem);
        }
      }
    } else if (node.type === "ObjectProperty") {
      this.checkDeclaration(node.value);
    } else if (node.type === "RestElement") {
      this.checkDeclaration(node.argument);
    } else if (node.type === "AssignmentPattern") {
      this.checkDeclaration(node.left);
    }
  }

  checkDuplicateExports(node, name) {
    if (this.exportedIdentifiers.has(name)) {
      this.raise(name === "default" ? ErrorMessages.DuplicateDefaultExport : ErrorMessages.DuplicateExport, {
        node
      }, name);
    }

    this.exportedIdentifiers.add(name);
  }

  parseExportSpecifiers(isInTypeExport) {
    const nodes = [];
    let first = true;
    this.expect(5);

    while (!this.eat(8)) {
      if (first) {
        first = false;
      } else {
        this.expect(12);
        if (this.eat(8)) break;
      }

      const isMaybeTypeOnly = this.isContextual(126);
      const isString = this.match(129);
      const node = this.startNode();
      node.local = this.parseModuleExportName();
      nodes.push(this.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly));
    }

    return nodes;
  }

  parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
    if (this.eatContextual(93)) {
      node.exported = this.parseModuleExportName();
    } else if (isString) {
      node.exported = cloneStringLiteral(node.local);
    } else if (!node.exported) {
      node.exported = cloneIdentifier(node.local);
    }

    return this.finishNode(node, "ExportSpecifier");
  }

  parseModuleExportName() {
    if (this.match(129)) {
      const result = this.parseStringLiteral(this.state.value);
      const surrogate = result.value.match(loneSurrogate);

      if (surrogate) {
        this.raise(ErrorMessages.ModuleExportNameHasLoneSurrogate, {
          node: result
        }, surrogate[0].charCodeAt(0).toString(16));
      }

      return result;
    }

    return this.parseIdentifier(true);
  }

  parseImport(node) {
    node.specifiers = [];

    if (!this.match(129)) {
      const hasDefault = this.maybeParseDefaultImportSpecifier(node);
      const parseNext = !hasDefault || this.eat(12);
      const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
      if (parseNext && !hasStar) this.parseNamedImportSpecifiers(node);
      this.expectContextual(97);
    }

    node.source = this.parseImportSource();
    const assertions = this.maybeParseImportAssertions();

    if (assertions) {
      node.assertions = assertions;
    } else {
      const attributes = this.maybeParseModuleAttributes();

      if (attributes) {
        node.attributes = attributes;
      }
    }

    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  }

  parseImportSource() {
    if (!this.match(129)) this.unexpected();
    return this.parseExprAtom();
  }

  shouldParseDefaultImport(node) {
    return tokenIsIdentifier(this.state.type);
  }

  parseImportSpecifierLocal(node, specifier, type, contextDescription) {
    specifier.local = this.parseIdentifier();
    this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
    node.specifiers.push(this.finishNode(specifier, type));
  }

  parseAssertEntries() {
    const attrs = [];
    const attrNames = new Set();

    do {
      if (this.match(8)) {
        break;
      }

      const node = this.startNode();
      const keyName = this.state.value;

      if (attrNames.has(keyName)) {
        this.raise(ErrorMessages.ModuleAttributesWithDuplicateKeys, {
          at: this.state.startLoc
        }, keyName);
      }

      attrNames.add(keyName);

      if (this.match(129)) {
        node.key = this.parseStringLiteral(keyName);
      } else {
        node.key = this.parseIdentifier(true);
      }

      this.expect(14);

      if (!this.match(129)) {
        throw this.raise(ErrorMessages.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
      }

      node.value = this.parseStringLiteral(this.state.value);
      this.finishNode(node, "ImportAttribute");
      attrs.push(node);
    } while (this.eat(12));

    return attrs;
  }

  maybeParseModuleAttributes() {
    if (this.match(76) && !this.hasPrecedingLineBreak()) {
      this.expectPlugin("moduleAttributes");
      this.next();
    } else {
      if (this.hasPlugin("moduleAttributes")) return [];
      return null;
    }

    const attrs = [];
    const attributes = new Set();

    do {
      const node = this.startNode();
      node.key = this.parseIdentifier(true);

      if (node.key.name !== "type") {
        this.raise(ErrorMessages.ModuleAttributeDifferentFromType, {
          node: node.key
        }, node.key.name);
      }

      if (attributes.has(node.key.name)) {
        this.raise(ErrorMessages.ModuleAttributesWithDuplicateKeys, {
          node: node.key
        }, node.key.name);
      }

      attributes.add(node.key.name);
      this.expect(14);

      if (!this.match(129)) {
        throw this.raise(ErrorMessages.ModuleAttributeInvalidValue, {
          at: this.state.startLoc
        });
      }

      node.value = this.parseStringLiteral(this.state.value);
      this.finishNode(node, "ImportAttribute");
      attrs.push(node);
    } while (this.eat(12));

    return attrs;
  }

  maybeParseImportAssertions() {
    if (this.isContextual(94) && !this.hasPrecedingLineBreak()) {
      this.expectPlugin("importAssertions");
      this.next();
    } else {
      if (this.hasPlugin("importAssertions")) return [];
      return null;
    }

    this.eat(5);
    const attrs = this.parseAssertEntries();
    this.eat(8);
    return attrs;
  }

  maybeParseDefaultImportSpecifier(node) {
    if (this.shouldParseDefaultImport(node)) {
      this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier", "default import specifier");
      return true;
    }

    return false;
  }

  maybeParseStarImportSpecifier(node) {
    if (this.match(55)) {
      const specifier = this.startNode();
      this.next();
      this.expectContextual(93);
      this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier", "import namespace specifier");
      return true;
    }

    return false;
  }

  parseNamedImportSpecifiers(node) {
    let first = true;
    this.expect(5);

    while (!this.eat(8)) {
      if (first) {
        first = false;
      } else {
        if (this.eat(14)) {
          throw this.raise(ErrorMessages.DestructureNamedImport, {
            at: this.state.startLoc
          });
        }

        this.expect(12);
        if (this.eat(8)) break;
      }

      const specifier = this.startNode();
      const importedIsString = this.match(129);
      const isMaybeTypeOnly = this.isContextual(126);
      specifier.imported = this.parseModuleExportName();
      const importSpecifier = this.parseImportSpecifier(specifier, importedIsString, node.importKind === "type" || node.importKind === "typeof", isMaybeTypeOnly);
      node.specifiers.push(importSpecifier);
    }
  }

  parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly) {
    if (this.eatContextual(93)) {
      specifier.local = this.parseIdentifier();
    } else {
      const {
        imported
      } = specifier;

      if (importedIsString) {
        throw this.raise(ErrorMessages.ImportBindingIsString, {
          node: specifier
        }, imported.value);
      }

      this.checkReservedWord(imported.name, specifier.loc.start, true, true);

      if (!specifier.local) {
        specifier.local = cloneIdentifier(imported);
      }
    }

    this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
    return this.finishNode(specifier, "ImportSpecifier");
  }

  isThisParam(param) {
    return param.type === "Identifier" && param.name === "this";
  }

}

class Parser extends StatementParser {
  constructor(options, input) {
    options = getOptions(options);
    super(options, input);
    this.options = options;
    this.initializeScopes();
    this.plugins = pluginsMap(this.options.plugins);
    this.filename = options.sourceFilename;
  }

  getScopeHandler() {
    return ScopeHandler;
  }

  parse() {
    this.enterInitialScopes();
    const file = this.startNode();
    const program = this.startNode();
    this.nextToken();
    file.errors = null;
    this.parseTopLevel(file, program);
    file.errors = this.state.errors;
    return file;
  }

}

function pluginsMap(plugins) {
  const pluginMap = new Map();

  for (const plugin of plugins) {
    const [name, options] = Array.isArray(plugin) ? plugin : [plugin, {}];
    if (!pluginMap.has(name)) pluginMap.set(name, options || {});
  }

  return pluginMap;
}

function parse(input, options) {
  var _options;

  if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
    options = Object.assign({}, options);

    try {
      options.sourceType = "module";
      const parser = getParser(options, input);
      const ast = parser.parse();

      if (parser.sawUnambiguousESM) {
        return ast;
      }

      if (parser.ambiguousScriptDifferentAst) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused) {}
      } else {
        ast.program.sourceType = "script";
      }

      return ast;
    } catch (moduleError) {
      try {
        options.sourceType = "script";
        return getParser(options, input).parse();
      } catch (_unused2) {}

      throw moduleError;
    }
  } else {
    return getParser(options, input).parse();
  }
}
function parseExpression(input, options) {
  const parser = getParser(options, input);

  if (parser.options.strictMode) {
    parser.state.strict = true;
  }

  return parser.getExpression();
}

function generateExportedTokenTypes(internalTokenTypes) {
  const tokenTypes = {};

  for (const typeName of Object.keys(internalTokenTypes)) {
    tokenTypes[typeName] = getExportedToken(internalTokenTypes[typeName]);
  }

  return tokenTypes;
}

const tokTypes = generateExportedTokenTypes(tt);

function getParser(options, input) {
  let cls = Parser;

  if (options != null && options.plugins) {
    validatePlugins(options.plugins);
    cls = getParserClass(options.plugins);
  }

  return new cls(options, input);
}

const parserClassCache = {};

function getParserClass(pluginsFromOptions) {
  const pluginList = mixinPluginNames.filter(name => hasPlugin(pluginsFromOptions, name));
  const key = pluginList.join("/");
  let cls = parserClassCache[key];

  if (!cls) {
    cls = Parser;

    for (const plugin of pluginList) {
      cls = mixinPlugins[plugin](cls);
    }

    parserClassCache[key] = cls;
  }

  return cls;
}

lib.parse = parse;
lib.parseExpression = parseExpression;
lib.tokTypes = tokTypes;

var codeFrame = null;

var codeFrame$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': codeFrame
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(codeFrame$1);

Object.defineProperty(parse$1, "__esModule", {
  value: true
});
parse$1.default = parseAndBuildMetadata;

var _t$1 = lib$2;

var _parser = lib;

var _codeFrame = require$$2;

const {
  isCallExpression,
  isExpressionStatement,
  isFunction,
  isIdentifier,
  isJSXIdentifier,
  isNewExpression,
  isPlaceholder,
  isStatement: isStatement$1,
  isStringLiteral: isStringLiteral$1,
  removePropertiesDeep,
  traverse
} = _t$1;
const PATTERN = /^[_$A-Z0-9]+$/;

function parseAndBuildMetadata(formatter, code, opts) {
  const {
    placeholderWhitelist,
    placeholderPattern,
    preserveComments,
    syntacticPlaceholders
  } = opts;
  const ast = parseWithCodeFrame(code, opts.parser, syntacticPlaceholders);
  removePropertiesDeep(ast, {
    preserveComments
  });
  formatter.validate(ast);
  const syntactic = {
    placeholders: [],
    placeholderNames: new Set()
  };
  const legacy = {
    placeholders: [],
    placeholderNames: new Set()
  };
  const isLegacyRef = {
    value: undefined
  };
  traverse(ast, placeholderVisitorHandler, {
    syntactic,
    legacy,
    isLegacyRef,
    placeholderWhitelist,
    placeholderPattern,
    syntacticPlaceholders
  });
  return Object.assign({
    ast
  }, isLegacyRef.value ? legacy : syntactic);
}

function placeholderVisitorHandler(node, ancestors, state) {
  var _state$placeholderWhi;

  let name;

  if (isPlaceholder(node)) {
    if (state.syntacticPlaceholders === false) {
      throw new Error("%%foo%%-style placeholders can't be used when " + "'.syntacticPlaceholders' is false.");
    } else {
      name = node.name.name;
      state.isLegacyRef.value = false;
    }
  } else if (state.isLegacyRef.value === false || state.syntacticPlaceholders) {
    return;
  } else if (isIdentifier(node) || isJSXIdentifier(node)) {
    name = node.name;
    state.isLegacyRef.value = true;
  } else if (isStringLiteral$1(node)) {
    name = node.value;
    state.isLegacyRef.value = true;
  } else {
    return;
  }

  if (!state.isLegacyRef.value && (state.placeholderPattern != null || state.placeholderWhitelist != null)) {
    throw new Error("'.placeholderWhitelist' and '.placeholderPattern' aren't compatible" + " with '.syntacticPlaceholders: true'");
  }

  if (state.isLegacyRef.value && (state.placeholderPattern === false || !(state.placeholderPattern || PATTERN).test(name)) && !((_state$placeholderWhi = state.placeholderWhitelist) != null && _state$placeholderWhi.has(name))) {
    return;
  }

  ancestors = ancestors.slice();
  const {
    node: parent,
    key
  } = ancestors[ancestors.length - 1];
  let type;

  if (isStringLiteral$1(node) || isPlaceholder(node, {
    expectedNode: "StringLiteral"
  })) {
    type = "string";
  } else if (isNewExpression(parent) && key === "arguments" || isCallExpression(parent) && key === "arguments" || isFunction(parent) && key === "params") {
    type = "param";
  } else if (isExpressionStatement(parent) && !isPlaceholder(node)) {
    type = "statement";
    ancestors = ancestors.slice(0, -1);
  } else if (isStatement$1(node) && isPlaceholder(node)) {
    type = "statement";
  } else {
    type = "other";
  }

  const {
    placeholders,
    placeholderNames
  } = state.isLegacyRef.value ? state.legacy : state.syntactic;
  placeholders.push({
    name,
    type,
    resolve: ast => resolveAncestors(ast, ancestors),
    isDuplicate: placeholderNames.has(name)
  });
  placeholderNames.add(name);
}

function resolveAncestors(ast, ancestors) {
  let parent = ast;

  for (let i = 0; i < ancestors.length - 1; i++) {
    const {
      key,
      index
    } = ancestors[i];

    if (index === undefined) {
      parent = parent[key];
    } else {
      parent = parent[key][index];
    }
  }

  const {
    key,
    index
  } = ancestors[ancestors.length - 1];
  return {
    parent,
    key,
    index
  };
}

function parseWithCodeFrame(code, parserOpts, syntacticPlaceholders) {
  const plugins = (parserOpts.plugins || []).slice();

  if (syntacticPlaceholders !== false) {
    plugins.push("placeholders");
  }

  parserOpts = Object.assign({
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    sourceType: "module"
  }, parserOpts, {
    plugins
  });

  try {
    return (0, _parser.parse)(code, parserOpts);
  } catch (err) {
    const loc = err.loc;

    if (loc) {
      err.message += "\n" + (0, _codeFrame.codeFrameColumns)(code, {
        start: loc
      });
      err.code = "BABEL_TEMPLATE_PARSE_ERROR";
    }

    throw err;
  }
}

var populate = {};

Object.defineProperty(populate, "__esModule", {
  value: true
});
populate.default = populatePlaceholders;

var _t = lib$2;

const {
  blockStatement,
  cloneNode,
  emptyStatement,
  expressionStatement,
  identifier,
  isStatement,
  isStringLiteral,
  stringLiteral,
  validate
} = _t;

function populatePlaceholders(metadata, replacements) {
  const ast = cloneNode(metadata.ast);

  if (replacements) {
    metadata.placeholders.forEach(placeholder => {
      if (!Object.prototype.hasOwnProperty.call(replacements, placeholder.name)) {
        const placeholderName = placeholder.name;
        throw new Error(`Error: No substitution given for "${placeholderName}". If this is not meant to be a
            placeholder you may want to consider passing one of the following options to @babel/template:
            - { placeholderPattern: false, placeholderWhitelist: new Set(['${placeholderName}'])}
            - { placeholderPattern: /^${placeholderName}$/ }`);
      }
    });
    Object.keys(replacements).forEach(key => {
      if (!metadata.placeholderNames.has(key)) {
        throw new Error(`Unknown substitution "${key}" given`);
      }
    });
  }

  metadata.placeholders.slice().reverse().forEach(placeholder => {
    try {
      applyReplacement(placeholder, ast, replacements && replacements[placeholder.name] || null);
    } catch (e) {
      e.message = `@babel/template placeholder "${placeholder.name}": ${e.message}`;
      throw e;
    }
  });
  return ast;
}

function applyReplacement(placeholder, ast, replacement) {
  if (placeholder.isDuplicate) {
    if (Array.isArray(replacement)) {
      replacement = replacement.map(node => cloneNode(node));
    } else if (typeof replacement === "object") {
      replacement = cloneNode(replacement);
    }
  }

  const {
    parent,
    key,
    index
  } = placeholder.resolve(ast);

  if (placeholder.type === "string") {
    if (typeof replacement === "string") {
      replacement = stringLiteral(replacement);
    }

    if (!replacement || !isStringLiteral(replacement)) {
      throw new Error("Expected string substitution");
    }
  } else if (placeholder.type === "statement") {
    if (index === undefined) {
      if (!replacement) {
        replacement = emptyStatement();
      } else if (Array.isArray(replacement)) {
        replacement = blockStatement(replacement);
      } else if (typeof replacement === "string") {
        replacement = expressionStatement(identifier(replacement));
      } else if (!isStatement(replacement)) {
        replacement = expressionStatement(replacement);
      }
    } else {
      if (replacement && !Array.isArray(replacement)) {
        if (typeof replacement === "string") {
          replacement = identifier(replacement);
        }

        if (!isStatement(replacement)) {
          replacement = expressionStatement(replacement);
        }
      }
    }
  } else if (placeholder.type === "param") {
    if (typeof replacement === "string") {
      replacement = identifier(replacement);
    }

    if (index === undefined) throw new Error("Assertion failure.");
  } else {
    if (typeof replacement === "string") {
      replacement = identifier(replacement);
    }

    if (Array.isArray(replacement)) {
      throw new Error("Cannot replace single expression with an array.");
    }
  }

  if (index === undefined) {
    validate(parent, key, replacement);
    parent[key] = replacement;
  } else {
    const items = parent[key].slice();

    if (placeholder.type === "statement" || placeholder.type === "param") {
      if (replacement == null) {
        items.splice(index, 1);
      } else if (Array.isArray(replacement)) {
        items.splice(index, 1, ...replacement);
      } else {
        items[index] = replacement;
      }
    } else {
      items[index] = replacement;
    }

    validate(parent, key, items);
    parent[key] = items;
  }
}

Object.defineProperty(string, "__esModule", {
  value: true
});
string.default = stringTemplate;

var _options$2 = options;

var _parse$1 = parse$1;

var _populate$1 = populate;

function stringTemplate(formatter, code, opts) {
  code = formatter.code(code);
  let metadata;
  return arg => {
    const replacements = (0, _options$2.normalizeReplacements)(arg);
    if (!metadata) metadata = (0, _parse$1.default)(formatter, code, opts);
    return formatter.unwrap((0, _populate$1.default)(metadata, replacements));
  };
}

var literal = {};

Object.defineProperty(literal, "__esModule", {
  value: true
});
literal.default = literalTemplate;

var _options$1 = options;

var _parse = parse$1;

var _populate = populate;

function literalTemplate(formatter, tpl, opts) {
  const {
    metadata,
    names
  } = buildLiteralData(formatter, tpl, opts);
  return arg => {
    const defaultReplacements = {};
    arg.forEach((replacement, i) => {
      defaultReplacements[names[i]] = replacement;
    });
    return arg => {
      const replacements = (0, _options$1.normalizeReplacements)(arg);

      if (replacements) {
        Object.keys(replacements).forEach(key => {
          if (Object.prototype.hasOwnProperty.call(defaultReplacements, key)) {
            throw new Error("Unexpected replacement overlap.");
          }
        });
      }

      return formatter.unwrap((0, _populate.default)(metadata, replacements ? Object.assign(replacements, defaultReplacements) : defaultReplacements));
    };
  };
}

function buildLiteralData(formatter, tpl, opts) {
  let names;
  let nameSet;
  let metadata;
  let prefix = "";

  do {
    prefix += "$";
    const result = buildTemplateCode(tpl, prefix);
    names = result.names;
    nameSet = new Set(names);
    metadata = (0, _parse.default)(formatter, formatter.code(result.code), {
      parser: opts.parser,
      placeholderWhitelist: new Set(result.names.concat(opts.placeholderWhitelist ? Array.from(opts.placeholderWhitelist) : [])),
      placeholderPattern: opts.placeholderPattern,
      preserveComments: opts.preserveComments,
      syntacticPlaceholders: opts.syntacticPlaceholders
    });
  } while (metadata.placeholders.some(placeholder => placeholder.isDuplicate && nameSet.has(placeholder.name)));

  return {
    metadata,
    names
  };
}

function buildTemplateCode(tpl, prefix) {
  const names = [];
  let code = tpl[0];

  for (let i = 1; i < tpl.length; i++) {
    const value = `${prefix}${i - 1}`;
    names.push(value);
    code += value + tpl[i];
  }

  return {
    names,
    code
  };
}

Object.defineProperty(builder, "__esModule", {
  value: true
});
builder.default = createTemplateBuilder;

var _options = options;

var _string = string;

var _literal = literal;

const NO_PLACEHOLDER = (0, _options.validate)({
  placeholderPattern: false
});

function createTemplateBuilder(formatter, defaultOpts) {
  const templateFnCache = new WeakMap();
  const templateAstCache = new WeakMap();
  const cachedOpts = defaultOpts || (0, _options.validate)(null);
  return Object.assign((tpl, ...args) => {
    if (typeof tpl === "string") {
      if (args.length > 1) throw new Error("Unexpected extra params.");
      return extendedTrace((0, _string.default)(formatter, tpl, (0, _options.merge)(cachedOpts, (0, _options.validate)(args[0]))));
    } else if (Array.isArray(tpl)) {
      let builder = templateFnCache.get(tpl);

      if (!builder) {
        builder = (0, _literal.default)(formatter, tpl, cachedOpts);
        templateFnCache.set(tpl, builder);
      }

      return extendedTrace(builder(args));
    } else if (typeof tpl === "object" && tpl) {
      if (args.length > 0) throw new Error("Unexpected extra params.");
      return createTemplateBuilder(formatter, (0, _options.merge)(cachedOpts, (0, _options.validate)(tpl)));
    }

    throw new Error(`Unexpected template param ${typeof tpl}`);
  }, {
    ast: (tpl, ...args) => {
      if (typeof tpl === "string") {
        if (args.length > 1) throw new Error("Unexpected extra params.");
        return (0, _string.default)(formatter, tpl, (0, _options.merge)((0, _options.merge)(cachedOpts, (0, _options.validate)(args[0])), NO_PLACEHOLDER))();
      } else if (Array.isArray(tpl)) {
        let builder = templateAstCache.get(tpl);

        if (!builder) {
          builder = (0, _literal.default)(formatter, tpl, (0, _options.merge)(cachedOpts, NO_PLACEHOLDER));
          templateAstCache.set(tpl, builder);
        }

        return builder(args)();
      }

      throw new Error(`Unexpected template param ${typeof tpl}`);
    }
  });
}

function extendedTrace(fn) {
  let rootStack = "";

  try {
    throw new Error();
  } catch (error) {
    if (error.stack) {
      rootStack = error.stack.split("\n").slice(3).join("\n");
    }
  }

  return arg => {
    try {
      return fn(arg);
    } catch (err) {
      err.stack += `\n    =============\n${rootStack}`;
      throw err;
    }
  };
}

Object.defineProperty(lib$3, "__esModule", {
  value: true
});
lib$3.statements = lib$3.statement = lib$3.smart = lib$3.program = lib$3.expression = default_1 = lib$3.default = void 0;

var formatters = formatters$1;

var _builder = builder;

const smart = (0, _builder.default)(formatters.smart);
lib$3.smart = smart;
const statement = (0, _builder.default)(formatters.statement);
lib$3.statement = statement;
const statements = (0, _builder.default)(formatters.statements);
lib$3.statements = statements;
const expression = (0, _builder.default)(formatters.expression);
lib$3.expression = expression;
const program = (0, _builder.default)(formatters.program);
lib$3.program = program;

var _default = Object.assign(smart.bind(undefined), {
  smart,
  statement,
  statements,
  expression,
  program,
  ast: smart.ast
});

var default_1 = lib$3.default = _default;

const template = default_1.default || default_1;

/*
 * Ternary operator is part of conditional
 * expression, if-else keywords are parts of
 * if statement. How can we turn expressions into
 * statements? The answer is IIFE.
 *
 * Sure IIFEs can bloat generated code easily,
 * but currently there is no other way to maintain
 * execution order yet without the verbosity.
 * And mixed expressions surely make it harder.
 *
 * With the "do expressions" proposal landing,
 * this can be improve. Now we should just stick
 * to IIFEs.
 *
 */
const convert = () => {
  const template$1 = template(`
(function(){
  if (TEST) {
    return CONSEQUENT;
  }
  return ALTERNATE;
})();
`);

  const Plugin = {
    visitor: {
      ConditionalExpression(path) {
        const {
          node: {
            test,
            consequent,
            alternate,
          },
        } = path;

        path.replaceWith(
          template$1({
            TEST: test,
            CONSEQUENT: consequent,
            ALTERNATE: alternate,
          })
        );
      },
    },
  };

  return Plugin;
};

export { convert as default };
