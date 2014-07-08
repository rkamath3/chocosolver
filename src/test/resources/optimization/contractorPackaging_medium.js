defaultScope(20);
intRange(-100, 100);

c0_Contractor = Abstract("c0_Contractor");
c0_ContractorMethod = Abstract("c0_ContractorMethod");
c0_MethodVU = Abstract("c0_MethodVU");
c0_ValueUnit = Abstract("c0_ValueUnit");
c0_Problem = Abstract("c0_Problem");
c0_methods = c0_Contractor.addChild("c0_methods");
c0_assignedVUs = c0_Contractor.addChild("c0_assignedVUs");
c0_methodVUs = c0_ContractorMethod.addChild("c0_methodVUs");
c0_contractor = c0_ContractorMethod.addChild("c0_contractor").withCard(1, 1);
c0_cost = c0_MethodVU.addChild("c0_cost").withCard(1, 1);
c0_time = c0_MethodVU.addChild("c0_time").withCard(1, 1);
c0_valueUnit = c0_MethodVU.addChild("c0_valueUnit").withCard(1, 1);
c0_appliedContractorMethod = c0_ValueUnit.addChild("c0_appliedContractorMethod").withCard(1, 1);
c0_appliedMethodVU = c0_ValueUnit.addChild("c0_appliedMethodVU").withCard(1, 1);
c0_assignedContractor = c0_ValueUnit.addChild("c0_assignedContractor").withCard(1, 1);
c0_criterion1 = c0_ValueUnit.addChild("c0_criterion1").withCard(1, 1);
c0_criterion2 = c0_ValueUnit.addChild("c0_criterion2").withCard(1, 1);
c0_criterion3 = c0_ValueUnit.addChild("c0_criterion3").withCard(1, 1);
c0_criterion4 = c0_ValueUnit.addChild("c0_criterion4").withCard(1, 1);
c0_criterion5 = c0_ValueUnit.addChild("c0_criterion5").withCard(1, 1);
c0_total_criterion1 = c0_Problem.addChild("c0_total_criterion1").withCard(1, 1);
c0_total_criterion2 = c0_Problem.addChild("c0_total_criterion2").withCard(1, 1);
c0_MyProblem = Clafer("c0_MyProblem").withCard(1, 1).extending(c0_Problem);
c0_financially_unstable_value_units = Clafer("c0_financially_unstable_value_units");
c0_inexperienced_value_units = Clafer("c0_inexperienced_value_units");
c0_high_rate_value_units = Clafer("c0_high_rate_value_units");
c0_VU1 = Clafer("c0_VU1").withCard(1, 1).extending(c0_ValueUnit);
c0_VU2 = Clafer("c0_VU2").withCard(1, 1).extending(c0_ValueUnit);
c0_VU3 = Clafer("c0_VU3").withCard(1, 1).extending(c0_ValueUnit);
c0_VU4 = Clafer("c0_VU4").withCard(1, 1).extending(c0_ValueUnit);
c0_VU5 = Clafer("c0_VU5").withCard(1, 1).extending(c0_ValueUnit);
c0_VU6 = Clafer("c0_VU6").withCard(1, 1).extending(c0_ValueUnit);
c0_VU7 = Clafer("c0_VU7").withCard(1, 1).extending(c0_ValueUnit);
c0_VU8 = Clafer("c0_VU8").withCard(1, 1).extending(c0_ValueUnit);
c0_VU9 = Clafer("c0_VU9").withCard(1, 1).extending(c0_ValueUnit);
c0_VU10 = Clafer("c0_VU10").withCard(1, 1).extending(c0_ValueUnit);
c0_ContractorA = Clafer("c0_ContractorA").withCard(1, 1).extending(c0_Contractor);
c0_ContractorMethodA1 = c0_ContractorA.addChild("c0_ContractorMethodA1").withCard(1, 1).extending(c0_ContractorMethod);
c0_methodVU1 = c0_ContractorMethodA1.addChild("c0_methodVU1").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU2 = c0_ContractorMethodA1.addChild("c0_methodVU2").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU3 = c0_ContractorMethodA1.addChild("c0_methodVU3").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU4 = c0_ContractorMethodA1.addChild("c0_methodVU4").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU5 = c0_ContractorMethodA1.addChild("c0_methodVU5").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU6 = c0_ContractorMethodA1.addChild("c0_methodVU6").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU7 = c0_ContractorMethodA1.addChild("c0_methodVU7").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU8 = c0_ContractorMethodA1.addChild("c0_methodVU8").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU9 = c0_ContractorMethodA1.addChild("c0_methodVU9").withCard(1, 1).extending(c0_MethodVU);
c0_methodVU10 = c0_ContractorMethodA1.addChild("c0_methodVU10").withCard(1, 1).extending(c0_MethodVU);
c0_ContractorMethodA2 = c0_ContractorA.addChild("c0_ContractorMethodA2").withCard(1, 1).extending(c0_ContractorMethod);
c1_methodVU1 = c0_ContractorMethodA2.addChild("c1_methodVU1").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU2 = c0_ContractorMethodA2.addChild("c1_methodVU2").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU3 = c0_ContractorMethodA2.addChild("c1_methodVU3").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU4 = c0_ContractorMethodA2.addChild("c1_methodVU4").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU5 = c0_ContractorMethodA2.addChild("c1_methodVU5").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU6 = c0_ContractorMethodA2.addChild("c1_methodVU6").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU7 = c0_ContractorMethodA2.addChild("c1_methodVU7").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU8 = c0_ContractorMethodA2.addChild("c1_methodVU8").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU9 = c0_ContractorMethodA2.addChild("c1_methodVU9").withCard(1, 1).extending(c0_MethodVU);
c1_methodVU10 = c0_ContractorMethodA2.addChild("c1_methodVU10").withCard(1, 1).extending(c0_MethodVU);
c0_methods.refToUnique(c0_ContractorMethod);
c0_assignedVUs.refToUnique(c0_ValueUnit);
c0_methodVUs.refToUnique(c0_MethodVU);
c0_contractor.refToUnique(c0_Contractor);
c0_cost.refTo(Int);
c0_time.refTo(Int);
c0_valueUnit.refToUnique(c0_ValueUnit);
c0_appliedContractorMethod.refToUnique(c0_ContractorMethod);
c0_appliedMethodVU.refToUnique(c0_MethodVU);
c0_assignedContractor.refToUnique(c0_Contractor);
c0_criterion1.refTo(Int);
c0_criterion2.refTo(Int);
c0_criterion3.refTo(Int);
c0_criterion4.refTo(Int);
c0_criterion5.refTo(Int);
c0_total_criterion1.refTo(Int);
c0_total_criterion2.refTo(Int);
c0_financially_unstable_value_units.refToUnique(c0_ValueUnit);
c0_inexperienced_value_units.refToUnique(c0_ValueUnit);
c0_high_rate_value_units.refToUnique(c0_ValueUnit);
Constraint(all([decl([vu = local("vu")], global(c0_ValueUnit))], ifOnlyIf(lessThanEqual(joinRef(join(vu, c0_criterion3)), constant(2)), $in(vu, joinRef(global(c0_financially_unstable_value_units))))));
Constraint(all([decl([vu = local("vu")], global(c0_ValueUnit))], ifOnlyIf(lessThanEqual(joinRef(join(vu, c0_criterion4)), constant(5)), $in(vu, joinRef(global(c0_inexperienced_value_units))))));
Constraint(all([decl([vu = local("vu")], global(c0_ValueUnit))], ifOnlyIf(equal(joinRef(join(vu, c0_criterion5)), constant(9)), $in(vu, joinRef(global(c0_high_rate_value_units))))));
c0_methods.addConstraint(equal(joinRef(join(joinRef($this()), c0_contractor)), joinParent($this())));
c0_assignedVUs.addConstraint(equal(joinRef(join(joinRef($this()), c0_assignedContractor)), joinParent($this())));
c0_ContractorMethod.addConstraint($in($this(), joinRef(join(joinRef(join($this(), c0_contractor)), c0_methods))));
c0_ContractorMethod.addConstraint(all([disjDecl([m1 = local("m1"), m2 = local("m2")], join($this(), c0_methodVUs))], notEqual(joinRef(join(joinRef(m1), c0_valueUnit)), joinRef(join(joinRef(m2), c0_valueUnit)))));
c0_ValueUnit.addConstraint($in(joinRef(join($this(), c0_appliedMethodVU)), joinRef(join(joinRef(join($this(), c0_appliedContractorMethod)), c0_methodVUs))));
c0_ValueUnit.addConstraint(equal(joinRef(join(joinRef(join($this(), c0_appliedMethodVU)), c0_valueUnit)), $this()));
c0_ValueUnit.addConstraint(equal(joinRef(join($this(), c0_assignedContractor)), joinRef(join(joinRef(join($this(), c0_appliedContractorMethod)), c0_contractor))));
c0_ValueUnit.addConstraint($in($this(), joinRef(join(joinRef(join($this(), c0_assignedContractor)), c0_assignedVUs))));
c0_ValueUnit.addConstraint(equal(joinRef(join($this(), c0_criterion1)), joinRef(join(joinRef(join($this(), c0_appliedMethodVU)), c0_time))));
c0_ValueUnit.addConstraint(equal(joinRef(join($this(), c0_criterion2)), joinRef(join(joinRef(join($this(), c0_appliedMethodVU)), c0_cost))));
c0_Problem.addConstraint(equal(joinRef(join($this(), c0_total_criterion1)), sum(join(global(c0_ValueUnit), c0_criterion1))));
c0_Problem.addConstraint(equal(joinRef(join($this(), c0_total_criterion2)), sum(join(global(c0_ValueUnit), c0_criterion2))));
c0_VU1.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(3)));
c0_VU1.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(4)));
c0_VU1.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(5)));
c0_VU2.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(1)));
c0_VU2.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(10)));
c0_VU2.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(3)));
c0_VU3.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(1)));
c0_VU3.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(2)));
c0_VU3.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(5)));
c0_VU4.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(7)));
c0_VU4.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(2)));
c0_VU4.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(2)));
c0_VU5.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(6)));
c0_VU5.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(3)));
c0_VU5.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(1)));
c0_VU6.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(2)));
c0_VU6.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(6)));
c0_VU6.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(3)));
c0_VU7.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(3)));
c0_VU7.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(7)));
c0_VU7.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(3)));
c0_VU8.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(2)));
c0_VU8.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(5)));
c0_VU8.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(3)));
c0_VU9.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(2)));
c0_VU9.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(9)));
c0_VU9.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(5)));
c0_VU10.addConstraint(equal(joinRef(join($this(), c0_criterion3)), constant(4)));
c0_VU10.addConstraint(equal(joinRef(join($this(), c0_criterion4)), constant(2)));
c0_VU10.addConstraint(equal(joinRef(join($this(), c0_criterion5)), constant(6)));
c0_ContractorA.addConstraint(equal(joinRef(join($this(), c0_methods)), union(join($this(), c0_ContractorMethodA1), join($this(), c0_ContractorMethodA2))));
c0_ContractorMethodA1.addConstraint(equal(joinRef(join($this(), c0_methodVUs)), union(union(union(union(union(union(union(union(union(join($this(), c0_methodVU1), join($this(), c0_methodVU2)), join($this(), c0_methodVU3)), join($this(), c0_methodVU4)), join($this(), c0_methodVU5)), join($this(), c0_methodVU6)), join($this(), c0_methodVU7)), join($this(), c0_methodVU8)), join($this(), c0_methodVU9)), join($this(), c0_methodVU10))));
c0_methodVU1.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU1)));
c0_methodVU1.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(1)));
c0_methodVU1.addConstraint(equal(joinRef(join($this(), c0_time)), constant(2)));
c0_methodVU2.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU2)));
c0_methodVU2.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_methodVU2.addConstraint(equal(joinRef(join($this(), c0_time)), constant(3)));
c0_methodVU3.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU3)));
c0_methodVU3.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(1)));
c0_methodVU3.addConstraint(equal(joinRef(join($this(), c0_time)), constant(2)));
c0_methodVU4.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU4)));
c0_methodVU4.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c0_methodVU4.addConstraint(equal(joinRef(join($this(), c0_time)), constant(2)));
c0_methodVU5.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU5)));
c0_methodVU5.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(8)));
c0_methodVU5.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c0_methodVU6.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU6)));
c0_methodVU6.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c0_methodVU6.addConstraint(equal(joinRef(join($this(), c0_time)), constant(5)));
c0_methodVU7.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU7)));
c0_methodVU7.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(1)));
c0_methodVU7.addConstraint(equal(joinRef(join($this(), c0_time)), constant(2)));
c0_methodVU8.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU8)));
c0_methodVU8.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(7)));
c0_methodVU8.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c0_methodVU9.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU9)));
c0_methodVU9.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c0_methodVU9.addConstraint(equal(joinRef(join($this(), c0_time)), constant(9)));
c0_methodVU10.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU10)));
c0_methodVU10.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c0_methodVU10.addConstraint(equal(joinRef(join($this(), c0_time)), constant(5)));
c0_ContractorMethodA2.addConstraint(equal(joinRef(join($this(), c0_methodVUs)), union(union(union(union(union(union(union(union(union(join($this(), c1_methodVU1), join($this(), c1_methodVU2)), join($this(), c1_methodVU3)), join($this(), c1_methodVU4)), join($this(), c1_methodVU5)), join($this(), c1_methodVU6)), join($this(), c1_methodVU7)), join($this(), c1_methodVU8)), join($this(), c1_methodVU9)), join($this(), c1_methodVU10))));
c1_methodVU1.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU1)));
c1_methodVU1.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c1_methodVU1.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c1_methodVU2.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU2)));
c1_methodVU2.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(1)));
c1_methodVU2.addConstraint(equal(joinRef(join($this(), c0_time)), constant(2)));
c1_methodVU3.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU3)));
c1_methodVU3.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(7)));
c1_methodVU3.addConstraint(equal(joinRef(join($this(), c0_time)), constant(5)));
c1_methodVU4.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU4)));
c1_methodVU4.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c1_methodVU4.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c1_methodVU5.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU5)));
c1_methodVU5.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(3)));
c1_methodVU5.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c1_methodVU6.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU6)));
c1_methodVU6.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(8)));
c1_methodVU6.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c1_methodVU7.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU7)));
c1_methodVU7.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(9)));
c1_methodVU7.addConstraint(equal(joinRef(join($this(), c0_time)), constant(4)));
c1_methodVU8.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU8)));
c1_methodVU8.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c1_methodVU8.addConstraint(equal(joinRef(join($this(), c0_time)), constant(3)));
c1_methodVU9.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU9)));
c1_methodVU9.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(4)));
c1_methodVU9.addConstraint(equal(joinRef(join($this(), c0_time)), constant(3)));
c1_methodVU10.addConstraint(equal(joinRef(join($this(), c0_valueUnit)), global(c0_VU10)));
c1_methodVU10.addConstraint(equal(joinRef(join($this(), c0_cost)), constant(2)));
c1_methodVU10.addConstraint(equal(joinRef(join($this(), c0_time)), constant(6)));
min(joinRef(join(global(c0_MyProblem), c0_total_criterion1)));
min(joinRef(join(global(c0_MyProblem), c0_total_criterion2)));
