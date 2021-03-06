package org.clafer.ir;

import org.clafer.domain.Domain;
import org.clafer.ir.IrQuickTest.Solution;
import static org.clafer.ir.Irs.*;
import org.clafer.test.NonEmpty;
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
public class IrWithinTest {

    @Test(timeout = 60000)
    public IrBoolExpr setup(IrIntVar value, @NonEmpty Domain range) {
        return within(value, range);
    }

    @Solution
    public Constraint setup(IntVar value, int[] range) {
        return ICF.member(value, range);
    }
}
