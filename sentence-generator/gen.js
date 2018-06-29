/*
This is where the gen also happens but I can't give myself credit to all of them since I stole a few from stackoverflow. :}
*/
function rand(to){
	return Math.floor(Math.random()*to);
}
String.prototype.cap = function() {
    return this.charAt(0).toUpperCase()+this.slice(1);
}
function articles(wo, plupl) {
    return (plupl?[
		"no","zero","two","three","four","five","six","seven","eight","nine","ten","a hundred","a thousand","a million","a lot of"
	][rand(15)]+" ":(
		isPronoun(wo)||wo.charAt(0)===wo.charAt(0).toUpperCase()?"":(
			rand(3)==1?"a"+(
				isVowel(
					wo.charAt(0)
				)?"n":""
			):["the","one"][rand(2)]
		)+" "
	))+wo;
}
function getObjectiveForm(word) {
	var ret;
	if(isPronoun(word)){
		switch (word) {
			case "I":
				ret="me";
				break;
			case "we":
				ret="us";
				break;
			case "who":
				ret="whom";
				break;
			case "he":
				ret="him";
				break;
			case "she":
				ret="her";
				break;
			case "they":
				ret="them";
				break;
			default:
				ret=word;
				break;
		}
	} else {
		ret=word;
	}
	return ret;
}
function setEstar(word, plura) {
	var estar, plura;
	if (word=="I") {
		estar=rand(2)?"was":"am";
	} else if (word=="you") {
		estar=rand(2)?"were":"are";
	} else if (plura) {
		estar=rand(2)?"were":"are";
	} else {
		estar=rand(2)?"was":"is";
	}
	return estar;
}
function isPronoun(w) {
	return ["I","me","we","us","you","who","whom","it","he","she","him","her","they","them"].includes(w);
}
function isthispronounplural(w,ppp) {
	var ppp;
	return ["I","me","we","us","you","they","them"].includes(w)||ppp;
}
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}
function decline(wowo) {
	if (wowo=="sheep") { // SHEEEEP
		return wowo;
	} else if (wowo.charAt(wowo.length-1)=="y") {
		return wowo.slice(0,-1)+"ies";
	} else {
		return wowo+(wowo.charAt(wowo.length-1)=="o"?"es":"s");
	}
}
function conjugate(subj, wor, past, plural) {
	var plural, past, feehee;
	if (subj=="ger ple") {
		if (wor.slice(-2)=="ie") {
			feehee=wor.slice(0,-2)+"ying";
		} else if (wor.charAt(wor.length-1)=="e") {
			feehee=wor.slice(0,-1)+"ing";
		} else if ((wor.length<4||isVowel(wor.charAt(wor.length-4)))&&!isVowel(wor.charAt(wor.length-1))&&isVowel(wor.charAt(wor.length-2))&&!isVowel(wor.charAt(wor.length-3))) {
			feehee=wor+wor.charAt(wor.length-1)+"ing";
		} else if (wor=="ship") {
			feehee="shipping";
		} else {
			feehee=wor+"ing";
		}
	} else {
		if (past) {
			feehee=wor+(wor.charAt(wor.length-1)=="e"?"d":"ed"); // RUNED
			if (wor.charAt(wor.length-1)=="y") {
				feehee=feehee.slice(0,-3)+"ied";
			} else if ((wor.length<4||isVowel(wor.charAt(wor.length-4)))&&!isVowel(wor.charAt(wor.length-1))&&isVowel(wor.charAt(wor.length-2))&&!isVowel(wor.charAt(wor.length-3))) {
				feehee=wor+wor.charAt(wor.length-1)+"ed";
			}
		} else {
			if (subj=="I"||plural||subj=="you") {
				feehee=wor;
			} else {
				feehee=wor+"s";
				if (wor.charAt(wor.length-1)=="y") {
					feehee=feehee.slice(0,-2)+"ies";
				}
			}
		}
	}
	return feehee;
}
document.querySelector("#button").onclick=genSen;
function genSen() {
var sen="", nouns = n.split(" "), ndoVerbs = ndov.split(" "), doVerbs = dov.split(" "), adj = a.split(" ");
/*
SEAN MADE THIS.
https://plus.google.com/u/0/101749103627562194088/

This is the actual place where the gen happens.
*/
var sub=nouns[rand(nouns.length)], pred, obj, subjectOverwrittenYetQuestionMark=false, pluplu=false; // subject + other things
if (rand(2)&&!(isPronoun(sub)||sub.charAt(0)===sub.charAt(0).toUpperCase())) { // plural subject maybe?
	pluplu=true;
	sub=decline(sub);
}
switch (rand(16)) { // number of cases used
	case 0: // S is O
		pred=setEstar(sub,pluplu); // predicate
		obj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(obj)) {
			obj=adj[rand(adj.length)]+" "+obj; // adjectives por todos!
		}
		obj=articles(obj,false);
		break;
	case 1: // S V O
		pred=conjugate(sub,doVerbs[rand(doVerbs.length)],false,pluplu); // predicate
		obj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(obj)) {
			obj=adj[rand(adj.length)]+" "+obj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(obj)||sub.charAt(0)===obj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			obj=decline(obj);
		}
		obj=articles(obj,plup);
		break;
	case 2: // S V
		pred=conjugate(sub,ndoVerbs[rand(ndoVerbs.length)],false,pluplu); // predicate
		break;
	case 3: // S is Ving
		pred=setEstar(sub,pluplu); // predicate
		obj=conjugate("ger ple",ndoVerbs[rand(ndoVerbs.length)]); // participle
		break;
	case 4: // S is Ving O
		pred=setEstar(sub,pluplu); // predicate
		obj=conjugate("ger ple",doVerbs[rand(doVerbs.length)]); // participle
		var objj;
		objj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(objj)) {
			objj=adj[rand(adj.length)]+" "+objj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(objj)||sub.charAt(0)===objj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			objj=decline(objj);
		}
		objj=articles(objj,plup);
		obj+=" "+objj;
		break;
	case 5: // S Ved O
		pred=conjugate(sub,doVerbs[rand(doVerbs.length)],true); // predicate in past tense
		obj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(obj)) {
			obj=adj[rand(adj.length)]+" "+obj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(obj)||sub.charAt(0)===obj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			obj=decline(obj);
		}
		obj=articles(obj,plup);
		break;
	case 6: // S Ved
		pred=conjugate(sub,ndoVerbs[rand(ndoVerbs.length)],true); // predicate in past tense
		break;
	case 7: // S ha(ve/s) to V
		pred=rand(2)?"had":(isthispronounplural(sub,pluplu)?"have":"has");
		obj="to "+ndoVerbs[rand(ndoVerbs.length)]; // infinitive
		break;
	case 8: // S ha(ve/s) to V O
		pred=rand(2)?"had":(isthispronounplural(sub,pluplu)?"have":"has");
		obj="to "+doVerbs[rand(doVerbs.length)]; // infinitive
		var objj;
		objj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(objj)) {
			objj=adj[rand(adj.length)]+" "+objj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(objj)||sub.charAt(0)===objj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			objj=decline(objj);
		}
		objj=articles(objj,plup);
		obj+=" "+objj;
		break;
	case 9: // We ship S and O.
		subjectOverwrittenYetQuestionMark=true;
		sub="We ship "+nouns[rand(nouns.length)].cap();
		pred="and"
		obj=nouns[rand(nouns.length)].cap();
		/* // S is Ved
		pred=setEstar(sub,pluplu); // predicate
		obj=conjugate(sub,ndoVerbs[rand(ndoVerbs.length)], true); // past participle*/
		break;
	case 10: // S is Ved O
		pred=setEstar(sub,pluplu); // predicate
		obj=conjugate(sub,doVerbs[rand(doVerbs.length)], true); // past participle
		var objj;
		objj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(objj)) {
			objj=adj[rand(adj.length)]+" "+objj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(objj)||sub.charAt(0)===objj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			objj=decline(objj);
		}
		objj=articles(objj,plup);
		obj+=" by "+objj;
		break;
	case 11: // (S) do(es) (not) V
		if (rand(2)) {
			sub="do"; // overwrite subject with do
			subjectOverwrittenYetQuestionMark=true; // so that it doesn't add any articles
		} else {
			if (isPronoun(sub)) {
				subjectOverwrittenYetQuestionMark=true; // so that we don't get "a you do"
			}
			sub+=isthispronounplural(sub,pluplu)?" do":" does"; // so that the subject can be with us still
		}
		sub+=(rand(2)?"":" not"); // maybe not
		pred=ndoVerbs[rand(ndoVerbs.length)]; // predicate
		break;
	case 12: // (S) do(es) (not) V O
		if (rand(2)) {
			sub="do"; // overwrite subject with do
			subjectOverwrittenYetQuestionMark=true; // so that it doesn't add any articles
		} else {
			if (isPronoun(sub)) {
				subjectOverwrittenYetQuestionMark=true; // so that we don't get "a you do"
			}
			sub+=isthispronounplural(sub,pluplu)?" do":" does"; // so that the subject can be with us still
		}
		sub+=(rand(2)?"":" not"); // maybe not
		pred=doVerbs[rand(doVerbs.length)]; // predicate
		obj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(obj)) {
			obj=adj[rand(adj.length)]+" "+obj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(obj)||sub.charAt(0)===obj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			obj=decline(obj);
		}
		obj=articles(obj,plup);
		break;
	case 13: // S helpingVerb V O
		pred=["could","should","can","shall","must","might","may","will","would"][rand(9)]+(rand(2)?" ":" not ")+doVerbs[rand(doVerbs.length)]; // predicate
		obj=getObjectiveForm(nouns[rand(nouns.length)]); // direct object
		if (!isPronoun(obj)) {
			obj=adj[rand(adj.length)]+" "+obj; // adjectives por todos!
		}
		var plup=false;
		if (rand(2)&&!(isPronoun(obj)||sub.charAt(0)===obj.charAt(0).toUpperCase())) { // plural object maybe?
			plup=true;
			obj=decline(obj);
		}
		obj=articles(obj,plup);
		break;
	case 14: // S helpingVerb V
		pred=["could","should","can","shall","must","might","may","will","would"][rand(9)]+(rand(2)?" ":" not ")+ndoVerbs[rand(ndoVerbs.length)]; // predicate
		break;
	case 15: // Google S is much better than iO
		subjectOverwrittenYetQuestionMark=true;
		sub="Google "+nouns[rand(nouns.length)].cap();
		pred="is much better than"
		obj="i"+nouns[rand(nouns.length)].cap();
		break;
}
if (!subjectOverwrittenYetQuestionMark) {
	if (!isPronoun(sub)) {
		sub=adj[rand(adj.length)]+" "+sub; // adjectives!
	}
	sub=articles(sub,pluplu);
}
sen=sub.cap()+" "+pred+(obj==undefined?"":" "+obj)+".";
/* don't pay attention to the below stuff */
document.querySelector("p").innerHTML=sen;
console.log(sen);
document.title=sen+" - Sentence Generator";
}