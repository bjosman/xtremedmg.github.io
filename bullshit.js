﻿function role() {
	var role = [
		"developer",
		"visual designer",
		"tech lead",
		"stakeholder",
		"business analyst",
		"project manager",
		"tester",
		"CEO",
	];
	return role[Math.floor(Math.random()*role.length)];
}

function testing_technique() {
	var techn = [
		"functional testing",
		"boundary value analysis",
		"usability testing",
		"security testing",
		"automation testing",
		"brainstorming",
		"manual testing",
		"user acceptance testing",
		"system integration testing",
		"system testing",
		"heuristic evaluation",
		"use case analysis",
		"performance testing",
		"state analysis",
		"equivalence partitioning",
		"risk based testing",
		"risk analysis",
		"error testing",
		"pair testing",
		"static analysis",
		"exploratory testing",
		"critical thinking",
		"factory testing",
		"agile testing",
		"context-driven testing",
	];
	return techn[Math.floor(Math.random()*techn.length)];
}

function adjective() {
	var adj = [
		"in-house",
		"empowering",
		"end-to-end",
		"future",
		"low hanging fruit",
	];
	return adj[Math.floor(Math.random()*adj.length)];
}

function company() {
	var company = [
		"ISTQB",
		"ASTQB",
		"ANZTB",
		"IBM",
	];
	return company[Math.floor(Math.random()*company.length)]; 
}

function testing_bullshit() {
	var result = [
		// "You should try a " + adjective() +" " + testing_technique() + " with a " + role(),
		// "Go and fire a " + role(),
		// testing_technique() + " is the new " + testing_technique(),
		company() + " is killing " + testing_technique(),
 	];
	return result[Math.floor(Math.random()*result.length)];
}

var item = document.getElementById("technique");
setInterval(function(){
	item.textContent = '“' + testing_bullshit() + '”';
},2000);

