package org.clafer.math;

import gnu.trove.list.TIntList;
import gnu.trove.list.array.TIntArrayList;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jimmy
 */
public class LinearFunctionBuilder implements LinearFunctionable {

    private final TIntList coefficients = new TIntArrayList();
    private final List<Variable> variables = new ArrayList<>();
    private int constant;

    public static LinearFunctionBuilder term(Variable variable) {
        return term(1, variable);
    }

    public static LinearFunctionBuilder term(int coefficient, Variable variable) {
        return new LinearFunctionBuilder().plusTerm(coefficient, variable);
    }

    public static LinearFunctionBuilder constant(int c) {
        return new LinearFunctionBuilder().plusConstant(c);
    }

    public static LinearFunctionBuilder function(LinearFunction function) {
        return new LinearFunctionBuilder().plusFunction(function);
    }

    public LinearFunctionBuilder plusTerm(Variable variable) {
        return plusTerm(1, variable);
    }

    public LinearFunctionBuilder plusTerm(int coefficient, Variable variable) {
        coefficients.add(coefficient);
        variables.add(variable);
        return this;
    }

    public LinearFunctionBuilder plusConstant(int constant) {
        this.constant += constant;
        return this;
    }

    public LinearFunctionBuilder plusFunction(LinearFunction function) {
        int[] cs = function.getCoefficients();
        Variable[] vs = function.getVariables();
        for (int i = 0; i < cs.length; i++) {
            plusTerm(cs[i], vs[i]);
        }
        plusConstant(function.getConstant());
        return this;
    }

    @Override
    public LinearFunction toFunction() {
        return new LinearFunction(
                coefficients.toArray(),
                variables.toArray(new Variable[variables.size()]),
                constant);
    }
}
