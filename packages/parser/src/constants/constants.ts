export const NodeType = {
  AdditiveExpression: "AdditiveExpression",
  MultiplicativeExpression: "MultiplicativeExpression",
  PrimaryExpression: "PrimaryExpression",
  ParanthesizedExpression: "ParanthesizedExpression",
  IdentifierExpression: "IdentifierExpression",
  AssignmentExpression: "AssignmentExpression",
  BinaryExpression: "BinaryExpression",
  LogicalExpression: "LogicalExpression",
  LogicalANDExpression: "LogicalANDExpression",
  LogicalORExpression: "LogicalORExpression",
  RelationalExpression: "RelationalExpression",
  EqualityExpression: "EqualityExpression",
  BlockStatement: "BlockStatement",
  EmptyStatement: "EmptyStatement",
  ExpressionStatement: "ExpressionStatement",
  InitStatement: "InitStatement",
  PrintStatement: "PrintStatement",
  IfStatement: "IfStatement",
  WhileStatement: "WhileStatement",
  BreakStatement: "BreakStatement",
  ContinueStatement: "ContinueStatement",
  VariableStatement: "VariableStatement",
  BooleanLiteral: "BooleanLiteral",
  NumericLiteral: "NumericLiteral",
  StringLiteral: "StringLiteral",
  NullLiteral: "NullLiteral",
  VariableDeclaration: "VariableDeclaration",
  Program: "Program",
} as const;

export type NodeTypeKey = keyof typeof NodeType;
export type NodeTypeValue = typeof NodeType[NodeTypeKey];
