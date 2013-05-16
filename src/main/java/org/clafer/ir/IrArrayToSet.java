package org.clafer.ir;

import gnu.trove.set.TIntSet;
import gnu.trove.set.hash.TIntHashSet;
import org.clafer.Check;

/**
 *
 * @author jimmy
 */
public class IrArrayToSet extends IrAbstractSetExpr {

    private final IrIntExpr[] array;

    IrArrayToSet(IrIntExpr[] array, IrDomain env, IrDomain ker, IrDomain card) {
        super(env, ker, card);
        this.array = Check.noNullsNotEmpty(array);
        if (ker.size() > array.length) {
            throw new IllegalArgumentException();
        }
    }

    public IrIntExpr[] getArray() {
        return array;
    }

    @Override
    public <A, B> B accept(IrSetExprVisitor<A, B> visitor, A a) {
        return visitor.visit(this, a);
    }
}
