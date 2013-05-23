package org.clafer.ast;

/**
 *
 * @author jimmy
 */
public abstract class AstPrimClafer extends AstClafer {

    public AstPrimClafer(String name) {
        super(name);
    }

    @Override
    public AstClafer extending(AstAbstractClafer superClafer) {
        throw new UnsupportedOperationException("Cannot extend from " + getName() + " primitive");
    }

    @Override
    public AstClafer refTo(AstClafer targetType) {
        throw new UnsupportedOperationException("Cannot ref from " + getName() + " primitive");
    }

    @Override
    public AstClafer refToUnique(AstClafer targetType) {
        throw new UnsupportedOperationException("Cannot ref from " + getName() + " primitive");
    }

    @Override
    public AstConcreteClafer withGroupCard(Card groupCard) {
        throw new UnsupportedOperationException("Cannot set group cardinality for " + getName() + " primitive");
    }

    @Override
    public AstConcreteClafer addChild(String name) {
        throw new UnsupportedOperationException("Cannot add a child under " + getName() + " primitive");
    }

    @Override
    public void addConstraint(AstBoolExpr constraint) {
        throw new UnsupportedOperationException("Cannot add a constraint under " + getName() + " primitive");
    }
}