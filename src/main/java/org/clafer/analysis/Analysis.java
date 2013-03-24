package org.clafer.analysis;

import java.util.Map;
import org.clafer.Check;
import org.clafer.Scope;
import org.clafer.analysis.AbstractOffsetAnalysis.Offsets;
import org.clafer.analysis.FormatAnalysis.Format;
import org.clafer.analysis.PartialSolutionAnalysis.PartialSolution;
import org.clafer.ast.AstAbstractClafer;
import org.clafer.ast.AstClafer;
import org.clafer.ast.AstExpression;
import org.clafer.ast.AstModel;
import org.clafer.ast.AstRef;
import org.clafer.ast.Card;

/**
 *
 * @author jimmy
 */
public class Analysis {

    private final Map<AstAbstractClafer, Integer> depths;
    private final Map<AstClafer, Card> globalCards;
    private final Scope scope;
    private final Map<AstClafer, Format> formats;
    private final Map<AstAbstractClafer, Offsets> offsets;
    private final Map<AstClafer, PartialSolution> partialSolutions;
    private final Map<AstRef, int[]> partialInts;
    private final Map<AstExpression, AstClafer> types;

    private Analysis(Map<AstAbstractClafer, Integer> depths,
            Map<AstClafer, Card> globalCards,
            Scope scope,
            Map<AstClafer, Format> formats,
            Map<AstAbstractClafer, Offsets> offsets,
            Map<AstClafer, PartialSolution> partialSolutions,
            Map<AstRef, int[]> partialInts,
            Map<AstExpression, AstClafer> types) {
        this.depths = depths;
        this.globalCards = globalCards;
        this.scope = scope;
        this.formats = formats;
        this.offsets = offsets;
        this.partialSolutions = partialSolutions;
        this.partialInts = partialInts;
        this.types = types;
    }

    public static Analysis analyze(AstModel model, Scope scope) {
        Check.notNull(model);
        Check.notNull(scope);
        Map<AstExpression, AstClafer> types = TypeAnalysis.analyze(model);

        Map<AstAbstractClafer, Integer> depths = TypeHierarchyDepthAnalysis.analyze(model);
        Map<AstClafer, Card> globalCards = GlobalCardAnalysis.analyze(model, scope, depths);
        Scope optimizedScope = ScopeAnalysis.analyze(model, scope, globalCards);

        CardAnalysis.analyze(model, globalCards);
        Map<AstClafer, Format> formats = FormatAnalysis.analyze(model, optimizedScope);

        Map<AstAbstractClafer, Offsets> offsets = AbstractOffsetAnalysis.analyze(model, globalCards);
        Map<AstClafer, PartialSolution> partialSolutions = PartialSolutionAnalysis.analyze(model, globalCards, formats, depths, offsets);

        Map<AstRef, int[]> partialInts = PartialIntAnalysis.analyze(model, types);

        return new Analysis(depths, globalCards, optimizedScope, formats, offsets, partialSolutions, partialInts, types);
    }

    public int getDepth(AstAbstractClafer clafer) {
        return AnalysisUtil.notNull("Cannot find depth analysis for " + clafer, depths.get(clafer)).intValue();
    }

    public Card getGlobalCard(AstClafer clafer) {
        return AnalysisUtil.notNull("Cannot find global card analysis for " + clafer, globalCards.get(clafer));
    }

    public int getScope(AstClafer clafer) {
        return scope.getScope(clafer);
    }

    public Format getFormat(AstClafer clafer) {
        return AnalysisUtil.notNull("Cannot find format analysis for " + clafer, formats.get(clafer));
    }

    public int getOffset(AstAbstractClafer sup, AstClafer sub) {
        return AnalysisUtil.notNull("Cannot find offset analysis for " + sup, offsets.get(sup)).getOffset(sub);
    }

    public PartialSolution getPartialSolution(AstClafer clafer) {
        return AnalysisUtil.notNull("Cannot find partial solution analysis for " + clafer, partialSolutions.get(clafer));
    }

    public int[] getPartialInts(AstRef ref) {
        return partialInts.get(ref);
    }
}