import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";


export default class BlockStatement extends Visitor {
  visitNode(node: ASTNode) {
    const parentScope = InterpreterModule.getCurrentScope();
    InterpreterModule.setCurrentScope(new Scope(parentScope));

    if (Array.isArray(node.body)) {
      node.body?.forEach((statement: ASTNode) => {
        this.visitNode(statement);
      });
    }

    InterpreterModule.setCurrentScope(parentScope);
  }
}
