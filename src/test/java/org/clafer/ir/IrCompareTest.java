package org.clafer.ir;

import org.clafer.ir.IrQuickTest.Solution;
import static org.clafer.ir.Irs.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.chocosolver.solver.constraints.Constraint;
import org.chocosolver.solver.constraints.ICF;
import org.chocosolver.solver.variables.IntVar;

/**
 *
 * @author jimmy
 */
@RunWith(IrQuickTest.class)
public class IrCompareTest {

    @Test(timeout = 60000)
    public IrBoolExpr setup(IrIntVar left, IrCompare.Op op, IrIntVar right) {
        return compare(left, op, right);
    }

    @Solution
    public Constraint setup(IntVar left, IrCompare.Op op, IntVar right) {
        return ICF.arithm(left, op.getSyntax(), right);
    }
}
