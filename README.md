chocosolver
===========

v0.3.10.1

A backend for [Clafer](http://clafer.org) using the Choco 3.3 constraint programming library. There are two ways to use the project: programmatically via the Java API, or the Javascript CLI.

Contributors
------------

* [Jimmy Liang](http://gsd.uwaterloo.ca/jliang), MSc. Candidate. Main developer.
* [Michal Antkiewicz](http://gsd.uwaterloo.ca/mantkiew), Research Engineer. Release Management, testing.
* [Alexandr Murashkin](http://gsd.uwaterloo.ca/amurashk). Stress testing.
* [Jordan Ross](http://gsd.uwaterloo.ca/j25ross). Stress testing.

Getting Clafer Tools
--------------------

### Installation from binaries

Binary distributions of the release 0.3.10 of Clafer Tools for Windows, Mac, and Linux, can be downloaded from [Clafer Tools - Binary Distributions](http://http://gsd.uwaterloo.ca/clafer-tools-binary-distributions).

1. download the binaries and unpack `<target directory>` of your choice
2. add the `<target directory>` to your system path so that the executables can be found

### Installation from the source code

Prerequisites
-------------
* [Choco 3](https://github.com/chocoteam/choco3) v3.3.2-SNAPSHOT
* [Java 8+](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven 3](http://maven.apache.org/) - Required for building the project.

Optional
--------
* [Clafer compiler](https://github.com/gsdlab/clafer) - This backend provides an API for solving Clafer models. The Clafer compiler can compile a Clafer model down to the proper API calls. Can also be done manually by hand quite easily with a bit of typing (examples down below). v0.3.10.

Follow the installation instructions in the [README.md](https://github.com/gsdlab/clafer#clafer).

Installation
------------

Install Choco3 development snapshot:

```bash
git clone https://github.com/chocoteam/choco3.git -b develop
cd choco3
mvn install -DskipTests
```

Install the API and CLI.

```bash
git clone https://github.com/gsdlab/chocosolver.git
cd chocosolver
mvn install -DskipTests
```

Include the following XML snippet in your POM to use the API in your Maven project.

```xml
<dependency>
    <groupId>org.clafer</groupId>
    <artifactId>chocosolver</artifactId>
    <version>0.3.10.1</version>
</dependency>
```
The CLI is installed to target/chocosolver-0.3.10.1-jar-with-dependencies.jar. Start the CLI using the command "java -jar chocosolver-0.3.10.1-jar-with-dependencies.jar mymodel.js".

### Important: Branches must correspond

All related projects are following the *simultaneous release model*.
The branch `master` contains releases, whereas the branch `develop` contains code under development.
When building the tools, the branches should match.
Releases from branches 'master` are guaranteed to work well together.
Development versions from branches `develop` should work well together but this might not always be the case.

Getting Started with the API
----------------------------

Consider the following Clafer model.
```clafer
Installation
    xor Status
        Ok
        Bad
    Time -> integer
        [this > 2]
```
Below is an example of using the API to build the model above. [AstModel](http://gsdlab.github.io/chocosolver/org/clafer/ast/AstModel.html) represents the implicit "root" of the model. Every Clafer in the model nests below it.
```java
import org.clafer.ast.*;
import static org.clafer.ast.Asts.*;

public static void main(String[] args) {
    AstModel model = newModel();

    AstConcreteClafer installation = model.addChild("Installation").withCard(Mandatory);
        // withCard(Mandatory) and withCard(1, 1) is the same. Pick the one you find more readable.
        AstConcreteClafer status = installation.addChild("Status").withCard(1, 1).withGroupCard(1, 1);
            AstConcreteClafer ok = status.addChild("Ok").withCard(Optional);
            // withCard(Optional) and withCard(0, 1) is the same.
            AstConcreteClafer bad = status.addChild("Bad").withCard(0, 1);
            // Note that ok and bad have an explicit optional cardinality, whereas
            // it was implicit in the oringal model.
        AstConcreteClafer time = installation.addChild("Time").withCard(1, 1).refTo(IntType);
            time.addConstraint(greaterThan(joinRef($this()), constant(2)));
            // Note that joinRef is explicit whereas it was implicit in the original model.
}
```
The [Asts](http://gsdlab.github.io/chocosolver/org/clafer/ast/Asts.html) class provides all the functions required for building the model. See the previous link for a list of all the supported expressions. More examples of building models: [structure](https://github.com/gsdlab/chocosolver/blob/master/src/test/java/org/clafer/SimpleStructureTest.java), [expressions](https://github.com/gsdlab/chocosolver/blob/master/src/test/java/org/clafer/SimpleConstraintTest.java), [quantifiers](https://github.com/gsdlab/chocosolver/blob/master/src/test/java/org/clafer/QuantifierTest.java), and [attributed feature models](https://github.com/gsdlab/chocosolver/blob/master/src/test/java/org/clafer/FeatureModelTest.java#L229).

Finding Instances
-----------------

The next step is to solve the model.
```java
import org.clafer.compiler.*;
import org.clafer.scope.*;

public static void main(String[] args) {
    ...
    ClaferSolver solver = ClaferCompiler.compile(model,
        Scope.setScope(installation, 1).setScope(status, 1).setScope(ok, 1).setScope(bad, 1).setScope(time, 1)
        // Set the scope of every Clafer to 1. The code above could be replaced with
        // "Scope.defaultScope(1)".
        .intLow(-16).intHigh(16));
        // intLow is the "suggested" lowest integer for solving. intHigh is the "suggested"
        // highest integer.
    // find will return true when the solver finds another instance.
    while (solver.find()) {
        // Print the solution in a format similar to ClaferIG.
        System.out.println(solver.instance());
    }
}
```

Finding Optimal Instances
-------------------------
Optimizing on a single objective is supported. Suppose we wanted to optimize on the expression "sum time".
```java
import org.clafer.objective.*;
...
ClaferOptimizer solver = ClaferCompiler.compile(model,
    Scope.defaultScope(1).intLow(-16).intHigh(16),
    Objective.maximize(sum(global(time))));
while (solver.find()) {
    // The instances where time is maximal.
    System.out.println(solver.instance());
}

solver = ClaferCompiler.compile(model,
    Scope.defaultScope(1).intLow(-16).intHigh(16),
    Objective.minimize(sum(global(time))));
while (solver.find()) {
    // The instances where time is minimal.
    System.out.println(solver.instance());
}
```

The compiler can accept multiple objectives, in which case it will solve for all the Pareto-optimal solutions.

Finding Min-Unsat
-----------------
Consider the following Clafer model.
```clafer
Mob
Duck ?
Witch ?
Floats ?
[Floats => Duck]
[Floats <=> Witch]
[!Duck]
[Witch]
```
The model is overconstrained and has no solutions. The solver can help here as well.
```java
AstModel model = newModel();
AstConcreteClafer mob = model.addChild("Mob").withCard(0, 1);
AstConcreteClafer duck = model.addChild("Duck").withCard(0, 1);
AstConcreteClafer witch = model.addChild("Witch").withCard(0, 1);
AstConcreteClafer floats = model.addChild("Floats").withCard(0, 1);
model.addConstraint(some(mob));
model.addConstraint(implies(some(floats), some(duck)));
model.addConstraint(ifOnlyIf(some(floats), some(witch)));
model.addConstraint(none(duck));
model.addConstraint(some(witch));

ClaferUnsat unsat = ClaferCompiler.compileUnsat(model, Scope.defaultScope(1));
// Print the Min-Unsat and near-miss example.
System.out.println(unsat.minUnsat());
```
The above code will print two things. First it will print "#(Witch) >= 1" which is the constraint that is unsatisfiable in the model, ie. the last constraint that enforces there to be some witch. Next it will print the near-miss example "Mob#0". What this means is that removing the "some(Witch)" constraint would make the model satisfiable and an example of a solution (after removing the constraint), is the instance with exactly one mob and nothing else. For this example, the min-unsat is not unique, so it is possible that the library may report another set of constraints although the set of constraints is guaranteed to have a size of one.

Finding Unsat-Core
----------------------
The above example found that removing one constraint will *fix* the model but you may be wondering why the model cannot have a witch. In this case, it is more useful to compute the Unsat-Core instead.
```java
ClaferUnsat unsat = ClaferCompiler.compileUnsat(model, Scope.defaultScope(1));
// Print the Unsat-Core.
System.out.println(unsat.unsatCore());
```
The above code will print the last 4 constraints which are the constraints that are mutually unsatisfiable. What this means is that if you removed all constraints but these 4, the model is still unsatisfiable. The set of constraints is not guaranteed to be minimal but will likely be small.

Getting Started with the CLI
----------------------------
The CLI provides a more interactive approach to solving instances. The input of the CLI uses the Javascript API, whose syntax looks similar to the Java API.
```javascript
// Save the contents here to mymodel.js

scope({Installation:1, Status:1, Ok:1, Bad:1, Time:1})
// Alternatively "defaultScope(1)"
intRange(-16, 16)
Installation = Clafer("Installation").withCard(1, 1);
    Status = Installation.addChild("Status").withCard(1, 1).withGroupCard(1, 1);
        Ok = Status.addChild("Ok").withCard(0, 1);
        Bad = Status.addChild("Bad").withCard(0, 1);
    Time = Installation.addChild("Time").withCard(1, 1).refTo(Int);
        Time.addConstraint(greaterThan(joinRef($this()), constant(2)));
```
This file can be automatically generated by the Clafer compiler (if you have it installed using the instructions above) with the command "clafer -m choco mymodel.cfr". Now execute the CLI: "java -jar chocosolver-version-jar-with-dependencies.jar mymodel.js". The entire implementation of the CLI is a small [Java file](https://github.com/gsdlab/chocosolver/blob/master/src/main/java/org/clafer/javascript/JavascriptShell.java). The CLI is a very basic Javacsript REPL. It accepts any one-line Javacsript at a time. For example, "for(var i = 0; i < 10; i++) { println(solve()); }" would print the next 10 solutions. The mapping from Javascript to the Java API is defined [here](https://github.com/gsdlab/chocosolver/blob/master/src/main/resources/org/clafer/javascript/header.js) and [here](https://github.com/gsdlab/chocosolver/blob/master/src/main/resources/org/clafer/javascript/solver.js).

Javascript vs Java
------------------

If you prefer to use the Javascript API over the Java API:
```java
import org.clafer.javascript.Javascript;

public static void main(String[] args) {
    Javascript.readModel(
                "scope({Installation:1, Status:1, Ok:1, Bad:1, Time:1});" +
                "intRange(-16, 16);" +
                "Installation = Clafer('Installation').withCard(1, 1);" +
                ...
}
```

Semantic Differences with the Alloy Backend
-------------------------------------------
Consider the following constraint.
```clafer
[5 + 5 = -6]
```
For this backend, the constraint is always unsatisfiable. For the Alloy backend, the constraint can be satisfied, depending on the set bitwidth. Why? In the default bitwidth of 4, the number succeeding 7 is -8. Hence 5 + 5 is translated to 5 -> 6 -> 7 -> -8 -> -7 -> -6, hence the constraint is true. For any other bitwidth, the constraint is false. Overflow can be a problem for low bitwidths when dealing with arithmetic. This backend can also suffer from overflow. It essentially, in regards to overflow, has a fixed bitwidth of 32.

Possible Future Work?
---------------------
* API for choosing branching strategy. Two reasons. The advantage of constraint programming is the ability to tune the solver to the specific problem. Choosing the right branching strategy can make a world of difference. Secondly, it allows the user to control the order of instances generated. For example, the user would like to see instances where Feature A is present and Feature B is absent before any other instances. This can be done by choosing the branching strategy.
* Transitive closure, inverse
* Reals

Need help?
==========
* Visit [language's website](http://clafer.org).
* Report issues to [issue tracker](https://github.com/gsdlab/chocosolver/issues)
