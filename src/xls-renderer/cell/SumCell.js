import BaseCell from "./BaseCell";
import Scope from "../Scope";

export default class SumCell extends BaseCell {
    /**
     * @param {Scope} scope
     * @returns {ForEachCell}
     */
    apply(scope) {
        super.apply(scope);

        const target = this._getTargetParam(scope);
        const __startOutput = scope.vm[target] && scope.vm[target].__startOutput;
        const __endOutput = scope.vm[target] && scope.vm[target].__endOutput;

        if (__startOutput && __endOutput) {
            const start = scope.output.worksheets[scope.output_cell.ws].getCell(__startOutput, scope.output_cell.c).address; //todo refactoring
            const end = scope.output.worksheets[scope.output_cell.ws].getCell(__endOutput, scope.output_cell.c).address; //todo refactoring

            scope.setCurrentOutputValue({formula: `sum(${start}:${end})`});
        }
        
        scope.incrementColl();

        return this;
    }

    /**
     * @param {Scope} scope
     * @returns {string}
     * @protected
     */
    _getTargetParam(scope) {
        return scope.getCurrentTemplateValue().split(' ')[2];
    }

    /**
     * @param {string} value
     * @returns {boolean}
     */
    static match(value) {
        return typeof value === 'string' && value.substring(0, 6) === '#! SUM';
    }
}