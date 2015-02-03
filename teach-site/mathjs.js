/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 0.18.1
 * @date    2014-02-15
 *
 * @license
 * Copyright (C) 2013-2014 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
!function(e) {
	return function(n) {
		return function(r) {
			"object" == typeof exports && "object" == typeof module ? module.exports = n(r) : "function" == typeof define && define.amd ? define(function() {
				return n(r)
			}) : "object" == typeof exports ? exports.mathjs = n(r) : e.mathjs = n(r)
		}
	}
}(this)(function(e) {
	function n(i) {
		if(t[i])return t[i][r];
		var o = t[i] = {exports: {}, id: i, loaded: !1};
		return e[i].call(o[r], o, o[r], n), o.loaded = !0, o[r]
	}

	var r = "exports", t = {};
	return n.modules = e, n.cache = t, n.p = "", n(0)
})([function(e, n, r) {
	e.exports = r(1)
}, function(e, n, r) {
	function t(e) {
		if("function" != typeof Object.create)throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
		var n = {}, t = {matrix: "matrix", number: "number"};
		return n.config = function(e) {
			var n = r(220);
			if(e) {
				if(i.deepExtend(t, e), e.decimals && n.config({DECIMAL_PLACES: e.decimals}), e.number && e.number.defaultType)throw new Error("setting `number.defaultType` is deprecated. Use `number` instead.");
				if(e.number && e.number.precision)throw new Error("setting `number.precision` is deprecated. Use `decimals` instead.");
				if(e.matrix && e.matrix.defaultType)throw new Error("setting `matrix.defaultType` is deprecated. Use `matrix` instead.");
				if(e.matrix && e.matrix["default"])throw new Error("setting `matrix.default` is deprecated. Use `matrix` instead.")
			}
			var o = i.clone(t);
			return o.decimals = n.config().DECIMAL_PLACES, o
		}, n.config(e), n.expression = {}, n.expression.node = r(3), n.expression.parse = r(4), n.expression.Scope = function() {
			throw new Error("Scope is deprecated. Use a regular Object instead")
		}, n.expression.Parser = r(5), n.expression.docs = r(6), n.type = {}, n.type.BigNumber = r(220), n.type.Complex = r(7), n.type.Range = r(8), n.type.Index = r(9), n.type.Matrix = r(10), n.type.Unit = r(11), n.type.Help = r(12), n.collection = r(13), r(14)(n), r(15)(n, t), r(16)(n, t), r(17)(n, t), r(18)(n, t), r(19)(n, t), r(20)(n, t), r(21)(n, t), r(22)(n, t), r(23)(n, t), r(24)(n, t), r(25)(n, t), r(26)(n, t), r(27)(n, t), r(28)(n, t), r(29)(n, t), r(30)(n, t), r(31)(n, t), r(32)(n, t), r(33)(n, t), r(34)(n, t), r(35)(n, t), r(36)(n, t), r(37)(n, t), r(38)(n, t), r(39)(n, t), r(40)(n, t), r(41)(n, t), r(42)(n, t), r(43)(n, t), r(44)(n, t), r(45)(n, t), r(46)(n, t), r(47)(n, t), r(48)(n, t), r(49)(n, t), r(50)(n, t), r(51)(n, t), r(52)(n, t), r(53)(n, t), r(54)(n, t), r(55)(n, t), r(56)(n, t), r(57)(n, t), r(58)(n, t), r(59)(n, t), r(60)(n, t), r(61)(n, t), r(62)(n, t), r(63)(n, t), r(64)(n, t), r(65)(n, t), r(66)(n, t), r(67)(n, t), r(68)(n, t), r(69)(n, t), r(70)(n, t), r(71)(n, t), r(72)(n, t), r(73)(n, t), r(74)(n, t), r(75)(n, t), r(76)(n, t), r(77)(n, t), r(78)(n, t), r(79)(n, t), r(80)(n, t), r(81)(n, t), r(82)(n, t), r(83)(n, t), r(84)(n, t), r(85)(n, t), r(86)(n, t), r(87)(n, t), r(88)(n, t), r(89)(n, t), r(90)(n, t), r(91)(n, t), r(92)(n, t), r(93)(n, t), r(94)(n, t), r(95)(n, t), r(96)(n, t), r(97)(n, t),r(98)(n, t),r(99)(n, t),r(100)(n, t),r(101)(n, t),r(102)(n, t),n.chaining = {},n.chaining.Selector = r(103)(n, t),n
	}

	var i = r(2);
	e.exports = t
}, function(e, n) {
	n.clone = function r(e) {
		var n = typeof e;
		if("number" === n || "string" === n || "boolean" === n || null === e || void 0 === e)return e;
		if("function" == typeof e.clone)return e.clone();
		if(Array.isArray(e))return e.map(function(e) {
			return r(e)
		});
		if(e instanceof Object) {
			var t = {};
			for(var i in e)e.hasOwnProperty(i) && (t[i] = r(e[i]));
			return e
		}
		throw new TypeError("Cannot clone " + e)
	}, n.extend = function(e, n) {
		for(var r in n)n.hasOwnProperty(r) && (e[r] = n[r]);
		return e
	}, n.deepExtend = function t(e, n) {
		for(var r in n)n.hasOwnProperty(r) && (n[r] && n[r].constructor === Object ? (void 0 === e[r] && (e[r] = {}), e[r].constructor === Object ? t(e[r], n[r]) : e[r] = n[r]) : e[r] = n[r]);
		return e
	}, n.deepEqual = function(e, r) {
		var t, i, o;
		if(Array.isArray(e)) {
			if(!Array.isArray(r))return !1;
			if(e.length != r.length)return !1;
			for(i = 0, o = e.length; o > i; i++)if(!n.deepEqual(e[i], r[i]))return !1;
			return !0
		}
		if(e instanceof Object) {
			if(Array.isArray(r) || !(r instanceof Object))return !1;
			for(t in e)if(e.hasOwnProperty(t) && !n.deepEqual(e[t], r[t]))return !1;
			for(t in r)if(r.hasOwnProperty(t) && !n.deepEqual(e[t], r[t]))return !1;
			return !0
		}
		return e == r
	}
}, function(e, n, r) {
	n.ArrayNode = r(104), n.AssignmentNode = r(105), n.BlockNode = r(106), n.ConstantNode = r(107), n.IndexNode = r(108), n.FunctionNode = r(109), n.Node = r(110), n.OperatorNode = r(111), n.ParamsNode = r(112), n.RangeNode = r(113), n.SymbolNode = r(114), n.UnitNode = r(115), n.UpdateNode = r(116)
}, function(e, n, r) {
	function t(e, n) {
		if(1 != arguments.length && 2 != arguments.length)throw new SyntaxError("Wrong number of arguments: 1 or 2 expected");
		if(fn = "object" === H(n) ? n : {}, G(e))return cn = e || "", m();
		if(D(e) || e instanceof V)return Y.deepMap(e, function(e) {
			return cn = e || "", m()
		});
		throw new TypeError("String or matrix expected")
	}

	function i() {
		ln = 0, mn = cn.charAt(0)
	}

	function o() {
		ln++, mn = cn.charAt(ln)
	}

	function a() {
		return cn.charAt(ln + 1)
	}

	function s() {
		for(hn = an.NULL, pn = ""; " " == mn || "	" == mn;)o();
		if("#" == mn)for(; "\n" != mn && "" != mn;)o();
		if("" == mn)return void(hn = an.DELIMITER);
		var e = mn + a();
		if(sn[e])return hn = an.DELIMITER, pn = e, o(), void o();
		if(sn[mn])return hn = an.DELIMITER, pn = mn, void o();
		if(!c(mn)) {
			if(f(mn)) {
				for(; f(mn) || l(mn);)pn += mn, o();
				return void(hn = un[pn] ? an.DELIMITER : an.SYMBOL)
			}
			for(hn = an.UNKNOWN; "" != mn;)pn += mn, o();
			throw P('Syntax error in part "' + pn + '"')
		}
		if(hn = an.NUMBER, "." == mn)pn += mn, o(), l(mn) || (hn = an.UNKNOWN);
		else {
			for(; l(mn);)pn += mn, o();
			"." == mn && (pn += mn, o())
		}
		for(; l(mn);)pn += mn, o();
		if("E" == mn || "e" == mn)for(pn += mn, o(), ("+" == mn || "-" == mn) && (pn += mn, o()), l(mn) || (hn = an.UNKNOWN); l(mn);)pn += mn, o()
	}

	function u() {
		for(; "\n" == pn;)s()
	}

	function f(e) {
		return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" == e
	}

	function c(e) {
		return e >= "0" && "9" >= e || "." == e
	}

	function l(e) {
		return e >= "0" && "9" >= e
	}

	function m() {
		i(), s();
		var e;
		if(e = "" == pn ? new K("undefined", "undefined") : p(), "" != pn)throw hn == an.DELIMITER ? k("Unknown operator " + pn) : P('Unexpected part "' + pn + '"');
		return e
	}

	function p() {
		var e, n, r;
		for("\n" != pn && ";" != pn && "" != pn && (e = h()); "\n" == pn || ";" == pn;)n || (n = new Q, e && (r = ";" != pn, n.add(e, r))), s(), "\n" != pn && ";" != pn && "" != pn && (e = h(), r = ";" != pn, n.add(e, r));
		return n ? n : (e || (e = h()), e)
	}

	function h() {
		var e = g(), n = "ans";
		return new Z(n, e)
	}

	function g() {
		if(hn == an.SYMBOL && "function" == pn)throw new Error('Deprecated keyword "function". Functions can now be assigned without it, like "f(x) = x^2".');
		return d()
	}

	function d() {
		var e, n, r, t = x();
		if("=" == pn) {
			if(t instanceof rn)return e = t.name, s(), r = d(), new Z(e, r);
			if(t instanceof X)return s(), r = d(), new on(t, r);
			if(t instanceof en) {
				var i = !0;
				if(n = [], t.object instanceof rn ? (e = t.object.name, t.params.forEach(function(e, r) {
						e instanceof rn ? n[r] = e.name : i = !1
					})) : i = !1, i)return s(), r = d(), new $(e, n, r)
			}
			throw P("Invalid left hand side of assignment operator =")
		}
		return t
	}

	function x() {
		var e, n = [];
		if(e = ":" == pn ? new K("number", "1") : v(), ":" == pn) {
			for(n.push(e); ":" == pn;)s(), n.push(")" == pn || "]" == pn || "," == pn || "" == pn ? new rn("end") : v());
			if(n.length) {
				if(3 == n.length) {
					var r = n[2];
					n[2] = n[1], n[1] = r
				}
				e = new nn(n)
			}
		}
		return e
	}

	function v() {
		var e = w();
		return e
	}

	function w() {
		var e, n, r, t, i;
		for(e = b(), n = {
			"==": "equal",
			"!=": "unequal",
			"<": "smaller",
			">": "larger",
			"<=": "smallereq",
			">=": "largereq"
		}; pn in n;)r = pn, t = n[r], s(), i = [e, b()], e = new J(r, t, i);
		return e
	}

	function b() {
		var e, n, r, t, i;
		for(e = y(), n = {to: "to", "in": "to"}; pn in n;)r = pn, t = n[r], s(), i = [e, y()], e = new J(r, t, i);
		return e
	}

	function y() {
		var e, n, r, t, i;
		for(e = E(), n = {
			"+": "add",
			"-": "subtract"
		}; pn in n;)r = pn, t = n[r], s(), i = [e, E()], e = new J(r, t, i);
		return e
	}

	function E() {
		var e, n, r, t, i;
		for(e = N(), n = {
			"*": "multiply",
			".*": "emultiply",
			"/": "divide",
			"./": "edivide",
			"%": "mod",
			mod: "mod"
		}; pn in n;)r = pn, t = n[r], s(), i = [e, N()], e = new J(r, t, i);
		return e
	}

	function N() {
		var e, n;
		return e = M(), (hn == an.SYMBOL || "in" == pn) && (n = pn, s(), e = new tn(e, n)), e
	}

	function M() {
		var e, n, r;
		return "-" == pn ? (e = pn, n = "unary", s(), r = [M()], new J(e, n, r)) : A()
	}

	function A() {
		var e, n, r, t, i, o, a;
		for(r = [O()], t = []; "^" == pn || ".^" == pn;)t.push(pn), s(), r.push(O());
		for(e = r.pop(); r.length;)n = r.pop(), i = t.pop(), o = "^" == i ? "pow" : "epow", a = [n, e], e = new J(i, o, a);
		return e
	}

	function O() {
		var e, n, r, t, i;
		for(e = T(), n = {
			"!": "factorial",
			"'": "transpose"
		}; pn in n;)r = pn, t = n[r], s(), i = [e], e = new J(r, t, i);
		return e
	}

	function T() {
		var e, n;
		if(hn == an.SYMBOL && fn[pn]) {
			if(n = fn[pn], s(), "(" == pn) {
				if(e = [], s(), ")" != pn)for(e.push(x()); "," == pn;)s(), e.push(x());
				if(")" != pn)throw P("Parenthesis ) expected");
				s()
			}
			return new n(e)
		}
		return S()
	}

	function S() {
		var e, n;
		return hn == an.SYMBOL || hn == an.DELIMITER && pn in un ? (n = pn, s(), e = new rn(n), C(e)) : U()
	}

	function C(e) {
		for(var n, r; "(" == pn || "[" == pn;) {
			if(n = pn, r = [], s(), ")" != pn && "]" != pn)for(r.push(x()); "," == pn;)s(), r.push(x());
			if("(" == n && ")" != pn)throw P("Parenthesis ) expected");
			if("[" == n && "]" != pn)throw P("Parenthesis ] expected");
			s(), e = "(" == n ? new en(e, r) : new X(e, r)
		}
		return e
	}

	function U() {
		var e, n, r;
		if('"' == pn) {
			for(n = "", r = ""; "" != mn && ('"' != mn || "\\" == r);)n += mn, r = mn, o();
			if(s(), '"' != pn)throw P('End of string " expected');
			return s(), e = new K("string", n), e = C(e)
		}
		return z()
	}

	function z() {
		var e, n, r, t;
		if("[" == pn) {
			if(s(), u(), "]" != pn) {
				var i = q();
				if(";" == pn) {
					for(r = 1, n = [i]; ";" == pn;)s(), u(), n[r] = q(), r++, u();
					if("]" != pn)throw P("End of matrix ] expected");
					s(), t = n.length > 0 ? n[0].length : 0;
					for(var o = 1; r > o; o++)if(n[o].length != t)throw k("Number of columns must match (" + n[o].length + " != " + t + ")");
					e = new W(n)
				}
				else {
					if("]" != pn)throw P("End of matrix ] expected");
					s(), e = i
				}
			}
			else s(), e = new W([]);
			return e = C(e)
		}
		return R()
	}

	function q() {
		for(var e = [d()], n = 1; "," == pn;)s(), u(), e[n] = d(), n++, u();
		return new W(e)
	}

	function R() {
		var e, n;
		return hn == an.NUMBER ? (n = "." == pn ? "0" : pn, s(), "i" == pn || "I" == pn ? (s(), e = new K("complex", n)) : e = new K("number", n), e = C(e)) : _()
	}

	function _() {
		var e;
		if("(" == pn) {
			if(s(), e = d(), ")" != pn)throw P("Parenthesis ) expected");
			return s(), e = C(e)
		}
		return I()
	}

	function I() {
		throw P("" == pn ? "Unexpected end of expression" : "Value expected")
	}

	function L() {
		return void 0
	}

	function B() {
		return ln - pn.length + 1
	}

	function j(e) {
		var n = L(), r = B();
		return void 0 === n ? void 0 === r ? e : e + " (char " + r + ")" : e + " (line " + n + ", char " + r + ")"
	}

	function P(e) {
		return new SyntaxError(j(e))
	}

	function k(e) {
		return new Error(j(e))
	}

	var F = r(117), G = (F.number.toNumber, F.string.isString), D = Array.isArray, H = F.types.type, V = (r(7), r(10)), Y = (r(11), r(13)), W = r(104), Z = r(105), Q = r(106), K = r(107), $ = r(109), X = r(108), J = r(111), en = r(112), nn = r(113), rn = r(114), tn = r(115), on = r(116), an = {
		NULL: 0,
		DELIMITER: 1,
		NUMBER: 2,
		SYMBOL: 3,
		UNKNOWN: 4
	}, sn = {
		",": !0,
		"(": !0,
		")": !0,
		"[": !0,
		"]": !0,
		'"': !0,
		"\n": !0,
		";": !0,
		"+": !0,
		"-": !0,
		"*": !0,
		".*": !0,
		"/": !0,
		"./": !0,
		"%": !0,
		"^": !0,
		".^": !0,
		"!": !0,
		"'": !0,
		"=": !0,
		":": !0,
		"==": !0,
		"!=": !0,
		"<": !0,
		">": !0,
		"<=": !0,
		">=": !0
	}, un = {mod: !0, to: !0, "in": !0}, fn = {}, cn = "", ln = 0, mn = "", pn = "", hn = an.NULL;
	e.exports = t
}, function(e, n, r) {
	function t(e) {
		if(!(this instanceof t))throw new SyntaxError("Parser constructor must be called with the new operator");
		if("object" != typeof e)throw new TypeError("Object expected as parameter math");
		this.math = e, this.scope = {}
	}

	var i = r(4);
	t.prototype.parse = function(e) {
		return i(e)
	}, t.prototype.compile = function(e) {
		return i(e).compile(this.math)
	}, t.prototype.eval = function(e) {
		return i(e).compile(this.math).eval(this.scope)
	}, t.prototype.get = function(e) {
		return this.scope[e]
	}, t.prototype.set = function(e, n) {
		return this.scope[e] = n
	}, t.prototype.remove = function(e) {
		delete this.scope[e]
	}, t.prototype.clear = function() {
		for(var e in this.scope)this.scope.hasOwnProperty(e) && delete this.scope[e]
	}, e.exports = t
}, function(e, n, r) {
	n.e = r(118), n.E = r(118), n["false"] = r(119), n.i = r(120), n.Infinity = r(121), n.LN2 = r(122), n.LN10 = r(123), n.LOG2E = r(124), n.LOG10E = r(125), n.NaN = r(126), n.pi = r(127), n.PI = r(127), n.SQRT1_2 = r(128), n.SQRT2 = r(129), n.tau = r(130), n["true"] = r(131), n.abs = r(132), n.add = r(133), n.ceil = r(134), n.cube = r(135), n.divide = r(136), n.edivide = r(137), n.emultiply = r(138), n.epow = r(139), n.equal = r(140), n.exp = r(141), n.fix = r(142), n.floor = r(143), n.gcd = r(144), n.larger = r(145), n.largereq = r(146), n.lcm = r(147), n.log = r(148), n.log10 = r(149), n.mod = r(150), n.multiply = r(151), n.pow = r(152), n.round = r(153), n.sign = r(154), n.smaller = r(155), n.smallereq = r(156), n.sqrt = r(157), n.square = r(158), n.subtract = r(159), n.unary = r(160), n.unequal = r(161), n.xgcd = r(162), n.arg = r(163), n.conj = r(164), n.re = r(165), n.im = r(166), n.bignumber = r(167), n["boolean"] = r(168), n.complex = r(169), n.index = r(170), n.matrix = r(171), n.number = r(172), n.string = r(173), n.unit = r(174), n.eval = r(175), n.help = r(176), n.concat = r(177), n.det = r(178), n.diag = r(179), n.eye = r(180), n.inv = r(181), n.ones = r(182), n.range = r(183), n.resize = r(184), n.size = r(185), n.squeeze = r(186), n.subset = r(187), n.transpose = r(188), n.zeros = r(189), n.combinations = r(190), n.distribution = r(191), n.factorial = r(192), n.permutations = r(193), n.pickRandom = r(194), n.random = r(195), n.randomInt = r(196), n.min = r(197), n.mean = r(198), n.max = r(199), n.acos = r(200), n.asin = r(201), n.atan = r(202), n.atan2 = r(203), n.cos = r(204), n.cot = r(205), n.csc = r(206), n.sec = r(207), n.sin = r(208), n.tan = r(209), n.to = r(210), n.clone = r(211), n.map = r(212), n.forEach = r(213), n.format = r(214), n["import"] = r(215), n["typeof"] = r(216)
}, function(e, n, r) {
	function t(e, n) {
		if(!(this instanceof t))throw new SyntaxError("Complex constructor must be called with the new operator");
		switch(arguments.length) {
			case 0:
				this.re = 0, this.im = 0;
				break;
			case 2:
				if(!p(e) || !p(n))throw new TypeError("Two numbers expected in Complex constructor");
				this.re = e, this.im = n;
				break;
			default:
				if(0 != arguments.length && 2 != arguments.length)throw new SyntaxError("Two or zero arguments expected in Complex constructor")
		}
	}

	function i() {
		for(; " " == x || "	" == x;)s()
	}

	function o(e) {
		return e >= "0" && "9" >= e || "." == e
	}

	function a(e) {
		return e >= "0" && "9" >= e
	}

	function s() {
		d++, x = g.charAt(d)
	}

	function u(e) {
		d = e, x = g.charAt(d)
	}

	function f() {
		var e, n = "";
		if(e = d, "+" == x ? s() : "-" == x && (n += x, s()), !o(x))return u(e), null;
		if("." == x) {
			if(n += x, s(), !a(x))return u(e), null
		}
		else {
			for(; a(x);)n += x, s();
			"." == x && (n += x, s())
		}
		for(; a(x);)n += x, s();
		if("E" == x || "e" == x) {
			if(n += x, s(), ("+" == x || "-" == x) && (n += x, s()), !a(x))return u(e), null;
			for(; a(x);)n += x, s()
		}
		return n
	}

	function c() {
		var e = g.charAt(d + 1);
		if("I" == x || "i" == x)return s(), "1";
		if(!("+" != x && "-" != x || "I" != e && "i" != e)) {
			var n = "+" == x ? "1" : "-1";
			return s(), s(), n
		}
		return null
	}

	var l = r(117), m = l.number, p = l.number.isNumber, h = l.string.isString;
	t.isComplex = function(e) {
		return e instanceof t
	};
	var g, d, x;
	t.parse = function(e) {
		if(g = e, d = -1, x = "", !h(g))return null;
		s(), i();
		var n = f();
		if(n) {
			if("I" == x || "i" == x)return s(), i(), x ? null : new t(0, Number(n));
			i();
			var r = x;
			if("+" != r && "-" != r)return i(), x ? null : new t(Number(n), 0);
			s(), i();
			var o = f();
			if(o) {
				if("I" != x && "i" != x)return null;
				s()
			}
			else if(o = c(), !o)return null;
			return "-" == r && (o = "-" == o[0] ? "+" + o.substring(1) : "-" + o), s(), i(), x ? null : new t(Number(n), Number(o))
		}
		return (n = c()) ? (i(), x ? null : new t(0, Number(n))) : null
	}, t.prototype.clone = function() {
		return new t(this.re, this.im)
	}, t.prototype.equals = function(e) {
		return this.re === e.re && this.im === e.im
	}, t.prototype.format = function(e) {
		var n = "", r = m.format(this.re, e), t = m.format(this.im, e);
		return n = 0 == this.im ? r : 0 == this.re ? 1 == this.im ? "i" : -1 == this.im ? "-i" : t + "i" : this.im > 0 ? 1 == this.im ? r + " + i" : r + " + " + t + "i" : -1 == this.im ? r + " - i" : r + " - " + t.substring(1) + "i"
	}, t.prototype.toString = function() {
		return this.format()
	}, e.exports = t, n.isComplex = t.isComplex, n.parse = t.parse
}, function(e, n, r) {
	function t(e, n, r) {
		if(!(this instanceof t))throw new SyntaxError("Range constructor must be called with the new operator");
		if(null != e && !o.isNumber(e))throw new TypeError("Parameter start must be a number");
		if(null != n && !o.isNumber(n))throw new TypeError("Parameter end must be a number");
		if(null != r && !o.isNumber(r))throw new TypeError("Parameter step must be a number");
		this.start = null != e ? parseFloat(e) : 0, this.end = null != n ? parseFloat(n) : 0, this.step = null != r ? parseFloat(r) : 1
	}

	{
		var i = r(117), o = i.number, a = i.string;
		i.array
	}
	t.parse = function(e) {
		if(!a.isString(e))return null;
		var n = e.split(":"), r = n.map(function(e) {
			return parseFloat(e)
		}), i = r.some(function(e) {
			return isNaN(e)
		});
		if(i)return null;
		switch(r.length) {
			case 2:
				return new t(r[0], r[1]);
			case 3:
				return new t(r[0], r[2], r[1]);
			default:
				return null
		}
	}, t.prototype.clone = function() {
		return new t(this.start, this.end, this.step)
	}, t.isRange = function(e) {
		return e instanceof t
	}, t.prototype.size = function() {
		var e = 0, n = this.start, r = this.step, t = this.end, i = t - n;
		return o.sign(r) == o.sign(i) ? e = Math.ceil(i / r) : 0 == i && (e = 0), isNaN(e) && (e = 0), [e]
	}, t.prototype.min = function() {
		var e = this.size()[0];
		return e > 0 ? this.step > 0 ? this.start : this.start + (e - 1) * this.step : void 0
	}, t.prototype.max = function() {
		var e = this.size()[0];
		return e > 0 ? this.step > 0 ? this.start + (e - 1) * this.step : this.start : void 0
	}, t.prototype.forEach = function(e) {
		var n = this.start, r = this.step, t = this.end, i = 0;
		if(r > 0)for(; t > n;)e(n, i, this), n += r, i++;
		else if(0 > r)for(; n > t;)e(n, i, this), n += r, i++
	}, t.prototype.map = function(e) {
		var n = [];
		return this.forEach(function(r, t, i) {
			n[t] = e(r, t, i)
		}), n
	}, t.prototype.toArray = function() {
		var e = [];
		return this.forEach(function(n, r) {
			e[r] = n
		}), e
	}, t.prototype.valueOf = function() {
		return this.toArray()
	}, t.prototype.format = function(e) {
		var n = o.format(this.start, e);
		return 1 != this.step && (n += ":" + o.format(this.step, e)), n += ":" + o.format(this.end, e)
	}, t.prototype.toString = function() {
		return this.format()
	}, e.exports = t, n.isRange = t.isRange, n.parse = t.parse
}, function(e, n, r) {
	function t() {
		if(!(this instanceof t))throw new SyntaxError("Index constructor must be called with the new operator");
		this._ranges = [];
		for(var e = 0, n = arguments.length; n > e; e++) {
			var r = arguments[e];
			if(r instanceof a)this._ranges.push(r);
			else if(r && (r = r.valueOf()), c(r))this._ranges.push(i(r));
			else {
				if(!u(r))throw new TypeError("Range expected as Array, Number, or String");
				this._ranges.push(i([r, r + 1]))
			}
		}
	}

	function i(e) {
		for(var n = e.length, r = 0; n > r; r++)if(!u(e[r]) || !f(e[r]))throw new TypeError("Index parameters must be integer numbers");
		switch(e.length) {
			case 2:
				return new a(e[0], e[1]);
			case 3:
				return new a(e[0], e[1], e[2]);
			default:
				throw new SyntaxError("Wrong number of arguments in Index (2 or 3 expected)")
		}
	}

	{
		var o = r(117), a = r(8), s = o.number, u = s.isNumber, f = s.isInteger, c = Array.isArray;
		o.array.validateIndex
	}
	t.prototype.clone = function() {
		var e = new t;
		return e._ranges = o.object.clone(this._ranges), e
	}, t.isIndex = function(e) {
		return e instanceof t
	}, t.create = function(e) {
		var n = new t;
		return t.apply(n, e), n
	}, t.prototype.size = function l() {
		for(var l = [], e = 0, n = this._ranges.length; n > e; e++) {
			var r = this._ranges[e];
			l[e] = r.size()[0]
		}
		return l
	}, t.prototype.max = function() {
		for(var e = [], n = 0, r = this._ranges.length; r > n; n++) {
			var t = this._ranges[n];
			e[n] = t.max()
		}
		return e
	}, t.prototype.min = function() {
		for(var e = [], n = 0, r = this._ranges.length; r > n; n++) {
			var t = this._ranges[n];
			e[n] = t.min()
		}
		return e
	}, t.prototype.forEach = function(e) {
		for(var n = 0, r = this._ranges.length; r > n; n++)e(this._ranges[n], n, this)
	}, t.prototype.range = function(e) {
		return this._ranges[e]
	}, t.prototype.isScalar = function() {
		for(var e = this.size(), n = 0, r = e.length; r > n; n++)if(1 !== e[n])return !1;
		return !0
	}, t.prototype.toArray = function() {
		for(var e = [], n = 0, r = this._ranges.length; r > n; n++) {
			var t = this._ranges[n], i = [], o = t.start, a = t.end, s = t.step;
			if(s > 0)for(; a > o;)i.push(o), o += s;
			else if(0 > s)for(; o > a;)i.push(o), o += s;
			e.push(i)
		}
		return e
	}, t.prototype.valueOf = t.prototype.toArray, t.prototype.toString = function() {
		for(var e = [], n = 0, r = this._ranges.length; r > n; n++) {
			var t = this._ranges[n], i = s.format(t.start);
			1 != t.step && (i += ":" + s.format(t.step)), i += ":" + s.format(t.end), e.push(i)
		}
		return "[" + e.join(",") + "]"
	}, e.exports = t, n.isIndex = t.isIndex, n.create = t.create
}, function(e, n, r) {
	function t(e) {
		if(!(this instanceof t))throw new SyntaxError("Matrix constructor must be called with the new operator");
		if(e instanceof t)this._data = e.clone()._data;
		else if(g(e))this._data = f(e);
		else {
			if(null != e)throw new TypeError("Unsupported type of data (" + c.types.type(e) + ")");
			this._data = []
		}
		this._size = p.size(this._data)
	}

	function i(e, n) {
		if(!(n instanceof l))throw new TypeError("Invalid index");
		var r = n.isScalar();
		if(r)return e.get(n.min());
		var i = n.size();
		if(i.length != e._size.length)throw new RangeError("Dimension mismatch (" + i.length + " != " + e._size.length + ")");
		for(var a = new t(o(e._data, n, i.length, 0)); g(a._data) && 1 == a._data.length;)a._data = a._data[0], a._size.shift();
		return a
	}

	function o(e, n, r, t) {
		var i = t == r - 1, a = n.range(t);
		return a.map(i ? function(n) {
			return d(n, e.length), e[n]
		} : function(i) {
			d(i, e.length);
			var a = e[i];
			return o(a, n, r, t + 1)
		})
	}

	function a(e, n, r, i) {
		if(!(n instanceof l))throw new TypeError("Invalid index");
		var o, a = n.size(), f = n.isScalar();
		if(r instanceof t ? (o = r.size(), r = r.valueOf()) : o = p.size(r), f) {
			if(0 != o.length)throw new TypeError("Scalar value expected");
			e.set(n.min(), r, i)
		}
		else {
			if(a.length < e._size.length)throw new RangeError("Dimension mismatch (" + a.length + " < " + e._size.length + ")");
			for(var c = 0, g = a.length - o.length; g > c; c++)r = [r], o.unshift(1);
			if(!h.deepEqual(a, o))throw new RangeError("Dimensions mismatch (" + m.format(a) + " != " + m.format(o) + ")");
			var d = n.max().map(function(e) {
				return e + 1
			});
			u(e, d, i);
			var x = a.length, v = 0;
			s(e._data, n, r, x, v)
		}
		return e
	}

	function s(e, n, r, t, i) {
		var o = i == t - 1, a = n.range(i);
		a.forEach(o ? function(n, t) {
			d(n), e[n] = r[t]
		} : function(o, a) {
			d(o), s(e[o], n, r[a], t, i + 1)
		})
	}

	function u(e, n, r) {
		if(!g(n))throw new Error("Array expected");
		for(var t = h.clone(e._size), i = !1; t.length < n.length;)t.unshift(0), i = !0;
		for(var o = 0, a = n.length; a > o; o++)n[o] > t[o] && (t[o] = n[o], i = !0);
		i && e.resize(t, r)
	}

	function f(e) {
		for(var n = 0, r = e.length; r > n; n++) {
			var i = e[n];
			g(i) ? e[n] = f(i) : i instanceof t && (e[n] = f(i._data))
		}
		return e
	}

	var c = r(117), l = r(9), m = (c.number, c.string), p = c.array, h = c.object, g = Array.isArray, d = p.validateIndex;
	t.isMatrix = function(e) {
		return e instanceof t
	}, t.prototype.subset = function(e, n, r) {
		switch(arguments.length) {
			case 1:
				return i(this, e);
			case 2:
			case 3:
				return a(this, e, n, r);
			default:
				throw new SyntaxError("Wrong number of arguments")
		}
	}, t.prototype.get = function(e) {
		if(!g(e))throw new Error("Array expected");
		if(e.length != this._size.length)throw new RangeError("Dimension mismatch (" + e.length + " != " + this._size.length + ")");
		for(var n = this._data, r = 0, t = e.length; t > r; r++) {
			var i = e[r];
			d(i, n.length), n = n[i]
		}
		return h.clone(n)
	}, t.prototype.set = function(e, n, r) {
		var t, i;
		if(!g(e))throw new Error("Array expected");
		if(e.length < this._size.length)throw new RangeError("Dimension mismatch (" + e.length + " < " + this._size.length + ")");
		var o = e.map(function(e) {
			return e + 1
		});
		u(this, o, r);
		var a = this._data;
		for(t = 0, i = e.length - 1; i > t; t++) {
			var s = e[t];
			d(s, a.length), a = a[s]
		}
		return s = e[e.length - 1], d(s, a.length), a[s] = n, this
	}, t.prototype.resize = function(e, n) {
		return this._size = h.clone(e), this._data = p.resize(this._data, this._size, n), this
	}, t.prototype.clone = function() {
		var e = new t;
		return e._data = h.clone(this._data), e._size = h.clone(this._size), e
	}, t.prototype.size = function() {
		return this._size
	}, t.prototype.map = function(e) {
		var n = this, r = new t, i = [], o = function(r, t) {
			return g(r) ? r.map(function(e, n) {
				return i[t] = n, o(e, t + 1)
			}) : e(r, i, n)
		};
		return r._data = o(this._data, 0), r._size = h.clone(this._size), r
	}, t.prototype.forEach = function(e) {
		var n = this, r = [], t = function(i, o) {
			g(i) ? i.forEach(function(e, n) {
				r[o] = n, t(e, o + 1)
			}) : e(i, r, n)
		};
		t(this._data, 0)
	}, t.prototype.toArray = function() {
		return h.clone(this._data)
	}, t.prototype.valueOf = function() {
		return this._data
	}, t.prototype.format = function(e) {
		return m.format(this._data, e)
	}, t.prototype.toString = function() {
		return m.format(this._data)
	}, e.exports = t, n.isMatrix = t.isMatrix
}, function(e, n, r) {
	function t(e, n) {
		if(!(this instanceof t))throw new Error("Unit constructor must be called with the new operator");
		if(null != e && !v(e))throw new TypeError("First parameter in Unit constructor must be a number");
		if(null != n && !w(n))throw new TypeError("Second parameter in Unit constructor must be a string");
		if(null != n) {
			var r = l(n);
			if(!r)throw new SyntaxError('Unknown unit "' + n + '"');
			this.unit = r.unit, this.prefix = r.prefix
		}
		else this.unit = UNIT_NONE, this.prefix = y;
		null != e ? (this.value = this._normalize(e), this.fixPrefix = !1) : (this.value = null, this.fixPrefix = !0)
	}

	function i() {
		for(; " " == h || "	" == h;)s()
	}

	function o(e) {
		return e >= "0" && "9" >= e || "." == e
	}

	function a(e) {
		return e >= "0" && "9" >= e
	}

	function s() {
		p++, h = m.charAt(p)
	}

	function u(e) {
		p = e, h = m.charAt(p)
	}

	function f() {
		var e, n = "";
		if(e = p, "+" == h ? s() : "-" == h && (n += h, s()), !o(h))return u(e), null;
		if("." == h) {
			if(n += h, s(), !a(h))return u(e), null
		}
		else {
			for(; a(h);)n += h, s();
			"." == h && (n += h, s())
		}
		for(; a(h);)n += h, s();
		if("E" == h || "e" == h) {
			if(n += h, s(), ("+" == h || "-" == h) && (n += h, s()), !a(h))return u(e), null;
			for(; a(h);)n += h, s()
		}
		return n
	}

	function c() {
		var e = "";
		for(i(); h && " " != h && "	" != h;)e += h, s();
		return e || null
	}

	function l(e) {
		for(var n in N)if(N.hasOwnProperty(n) && x.endsWith(e, n)) {
			var r = N[n], t = e.length - n.length, i = e.substring(0, t), o = r.prefixes[i];
			if(void 0 !== o)return {unit: r, prefix: o}
		}
		return null
	}

	var m, p, h, g = r(117), d = g.number, x = g.string, v = g.number.isNumber, w = g.string.isString;
	t.parse = function(e) {
		if(m = e, p = -1, h = "", !w(m))return null;
		s(), i();
		var n, r = f();
		return r ? (n = c(), s(), i(), h ? null : r && n ? new t(Number(r), n) : null) : (n = c(), s(), i(), h ? null : new t(null, n))
	}, t.isUnit = function(e) {
		return e instanceof t
	}, t.prototype.clone = function() {
		var e = new t;
		for(var n in this)this.hasOwnProperty(n) && (e[n] = this[n]);
		return e
	}, t.prototype._normalize = function(e) {
		return (e + this.unit.offset) * this.unit.value * this.prefix.value
	}, t.prototype._unnormalize = function(e, n) {
		return void 0 == n ? e / this.unit.value / this.prefix.value - this.unit.offset : e / this.unit.value / n - this.unit.offset
	}, t.isPlainUnit = function(e) {
		return null != l(e)
	}, t.prototype.hasBase = function(e) {
		return void 0 === this.unit.base ? void 0 === e : this.unit.base === e
	}, t.prototype.equalBase = function(e) {
		return this.unit.base === e.unit.base
	}, t.prototype.equals = function(e) {
		return this.equalBase(e) && this.value == e.value
	}, t.prototype.to = function(e) {
		var n;
		if(w(e)) {
			if(n = new t(null, e), !this.equalBase(n))throw new Error("Units do not match");
			return n.value = this.value, n
		}
		if(e instanceof t) {
			if(!this.equalBase(e))throw new Error("Units do not match");
			if(null != e.value)throw new Error("Cannot convert to a unit with a value");
			if(null == e.unit)throw new Error("Unit expected on the right hand side of function in");
			return n = e.clone(), n.value = this.value, n.fixPrefix = !0, n
		}
		throw new Error("String or Unit expected as parameter")
	}, t.prototype.toNumber = function(e) {
		var n = this.to(e), r = this.fixPrefix ? n._bestPrefix() : n.prefix;
		return n._unnormalize(n.value, r.value)
	}, t.prototype.toString = function() {
		return this.format()
	}, t.prototype.format = function(e) {
		var n, r;
		if(this.fixPrefix)n = this._unnormalize(this.value), r = null != this.value ? d.format(n, e) + " " : "", r += this.prefix.name + this.unit.name;
		else {
			var t = this._bestPrefix();
			n = this._unnormalize(this.value, t.value), r = null != this.value ? d.format(n, e) + " " : "", r += t.name + this.unit.name
		}
		return r
	}, t.prototype._bestPrefix = function() {
		var e = Math.abs(this.value / this.unit.value), n = y, r = Math.abs(Math.log(e / n.value) / Math.LN10 - 1.2), t = this.unit.prefixes;
		for(var i in t)if(t.hasOwnProperty(i)) {
			var o = t[i];
			if(o.scientific) {
				var a = Math.abs(Math.log(e / o.value) / Math.LN10 - 1.2);
				r > a && (n = o, r = a)
			}
		}
		return n
	};
	var b = {
		NONE: {"": {name: "", value: 1, scientific: !0}},
		SHORT: {
			"": {name: "", value: 1, scientific: !0},
			da: {name: "da", value: 10, scientific: !1},
			h: {name: "h", value: 100, scientific: !1},
			k: {name: "k", value: 1e3, scientific: !0},
			M: {name: "M", value: 1e6, scientific: !0},
			G: {name: "G", value: 1e9, scientific: !0},
			T: {name: "T", value: 1e12, scientific: !0},
			P: {name: "P", value: 1e15, scientific: !0},
			E: {name: "E", value: 1e18, scientific: !0},
			Z: {name: "Z", value: 1e21, scientific: !0},
			Y: {name: "Y", value: 1e24, scientific: !0},
			d: {name: "d", value: .1, scientific: !1},
			c: {name: "c", value: .01, scientific: !1},
			m: {name: "m", value: .001, scientific: !0},
			u: {name: "u", value: 1e-6, scientific: !0},
			n: {name: "n", value: 1e-9, scientific: !0},
			p: {name: "p", value: 1e-12, scientific: !0},
			f: {name: "f", value: 1e-15, scientific: !0},
			a: {name: "a", value: 1e-18, scientific: !0},
			z: {name: "z", value: 1e-21, scientific: !0},
			y: {name: "y", value: 1e-24, scientific: !0}
		},
		LONG: {
			"": {name: "", value: 1, scientific: !0},
			deca: {name: "deca", value: 10, scientific: !1},
			hecto: {name: "hecto", value: 100, scientific: !1},
			kilo: {name: "kilo", value: 1e3, scientific: !0},
			mega: {name: "mega", value: 1e6, scientific: !0},
			giga: {name: "giga", value: 1e9, scientific: !0},
			tera: {name: "tera", value: 1e12, scientific: !0},
			peta: {name: "peta", value: 1e15, scientific: !0},
			exa: {name: "exa", value: 1e18, scientific: !0},
			zetta: {name: "zetta", value: 1e21, scientific: !0},
			yotta: {name: "yotta", value: 1e24, scientific: !0},
			deci: {name: "deci", value: .1, scientific: !1},
			centi: {name: "centi", value: .01, scientific: !1},
			milli: {name: "milli", value: .001, scientific: !0},
			micro: {name: "micro", value: 1e-6, scientific: !0},
			nano: {name: "nano", value: 1e-9, scientific: !0},
			pico: {name: "pico", value: 1e-12, scientific: !0},
			femto: {name: "femto", value: 1e-15, scientific: !0},
			atto: {name: "atto", value: 1e-18, scientific: !0},
			zepto: {name: "zepto", value: 1e-21, scientific: !0},
			yocto: {name: "yocto", value: 1e-24, scientific: !0}
		},
		SQUARED: {
			"": {name: "", value: 1, scientific: !0},
			da: {name: "da", value: 100, scientific: !1},
			h: {name: "h", value: 1e4, scientific: !1},
			k: {name: "k", value: 1e6, scientific: !0},
			M: {name: "M", value: 1e12, scientific: !0},
			G: {name: "G", value: 1e18, scientific: !0},
			T: {name: "T", value: 1e24, scientific: !0},
			P: {name: "P", value: 1e30, scientific: !0},
			E: {name: "E", value: 1e36, scientific: !0},
			Z: {name: "Z", value: 1e42, scientific: !0},
			Y: {name: "Y", value: 1e48, scientific: !0},
			d: {name: "d", value: .01, scientific: !1},
			c: {name: "c", value: 1e-4, scientific: !1},
			m: {name: "m", value: 1e-6, scientific: !0},
			u: {name: "u", value: 1e-12, scientific: !0},
			n: {name: "n", value: 1e-18, scientific: !0},
			p: {name: "p", value: 1e-24, scientific: !0},
			f: {name: "f", value: 1e-30, scientific: !0},
			a: {name: "a", value: 1e-36, scientific: !0},
			z: {name: "z", value: 1e-42, scientific: !0},
			y: {name: "y", value: 1e-42, scientific: !0}
		},
		CUBIC: {
			"": {name: "", value: 1, scientific: !0},
			da: {name: "da", value: 1e3, scientific: !1},
			h: {name: "h", value: 1e6, scientific: !1},
			k: {name: "k", value: 1e9, scientific: !0},
			M: {name: "M", value: 1e18, scientific: !0},
			G: {name: "G", value: 1e27, scientific: !0},
			T: {name: "T", value: 1e36, scientific: !0},
			P: {name: "P", value: 1e45, scientific: !0},
			E: {name: "E", value: 1e54, scientific: !0},
			Z: {name: "Z", value: 1e63, scientific: !0},
			Y: {name: "Y", value: 1e72, scientific: !0},
			d: {name: "d", value: .001, scientific: !1},
			c: {name: "c", value: 1e-6, scientific: !1},
			m: {name: "m", value: 1e-9, scientific: !0},
			u: {name: "u", value: 1e-18, scientific: !0},
			n: {name: "n", value: 1e-27, scientific: !0},
			p: {name: "p", value: 1e-36, scientific: !0},
			f: {name: "f", value: 1e-45, scientific: !0},
			a: {name: "a", value: 1e-54, scientific: !0},
			z: {name: "z", value: 1e-63, scientific: !0},
			y: {name: "y", value: 1e-72, scientific: !0}
		},
		BINARY_SHORT: {
			"": {name: "", value: 1, scientific: !0},
			k: {name: "k", value: 1024, scientific: !0},
			M: {name: "M", value: Math.pow(1024, 2), scientific: !0},
			G: {name: "G", value: Math.pow(1024, 3), scientific: !0},
			T: {name: "T", value: Math.pow(1024, 4), scientific: !0},
			P: {name: "P", value: Math.pow(1024, 5), scientific: !0},
			E: {name: "E", value: Math.pow(1024, 6), scientific: !0},
			Z: {name: "Z", value: Math.pow(1024, 7), scientific: !0},
			Y: {name: "Y", value: Math.pow(1024, 8), scientific: !0},
			Ki: {name: "Ki", value: 1024, scientific: !0},
			Mi: {name: "Mi", value: Math.pow(1024, 2), scientific: !0},
			Gi: {name: "Gi", value: Math.pow(1024, 3), scientific: !0},
			Ti: {name: "Ti", value: Math.pow(1024, 4), scientific: !0},
			Pi: {name: "Pi", value: Math.pow(1024, 5), scientific: !0},
			Ei: {name: "Ei", value: Math.pow(1024, 6), scientific: !0},
			Zi: {name: "Zi", value: Math.pow(1024, 7), scientific: !0},
			Yi: {name: "Yi", value: Math.pow(1024, 8), scientific: !0}
		},
		BINARY_LONG: {
			"": {name: "", value: 1, scientific: !0},
			kilo: {name: "kilo", value: 1024, scientific: !0},
			mega: {name: "mega", value: Math.pow(1024, 2), scientific: !0},
			giga: {name: "giga", value: Math.pow(1024, 3), scientific: !0},
			tera: {name: "tera", value: Math.pow(1024, 4), scientific: !0},
			peta: {name: "peta", value: Math.pow(1024, 5), scientific: !0},
			exa: {name: "exa", value: Math.pow(1024, 6), scientific: !0},
			zetta: {name: "zetta", value: Math.pow(1024, 7), scientific: !0},
			yotta: {name: "yotta", value: Math.pow(1024, 8), scientific: !0},
			kibi: {name: "kibi", value: 1024, scientific: !0},
			mebi: {name: "mebi", value: Math.pow(1024, 2), scientific: !0},
			gibi: {name: "gibi", value: Math.pow(1024, 3), scientific: !0},
			tebi: {name: "tebi", value: Math.pow(1024, 4), scientific: !0},
			pebi: {name: "pebi", value: Math.pow(1024, 5), scientific: !0},
			exi: {name: "exi", value: Math.pow(1024, 6), scientific: !0},
			zebi: {name: "zebi", value: Math.pow(1024, 7), scientific: !0},
			yobi: {name: "yobi", value: Math.pow(1024, 8), scientific: !0}
		}
	}, y = {name: "", value: 1, scientific: !0}, E = {
		NONE: {},
		LENGTH: {},
		MASS: {},
		TIME: {},
		CURRENT: {},
		TEMPERATURE: {},
		LUMINOUS_INTENSITY: {},
		AMOUNT_OF_SUBSTANCE: {},
		FORCE: {},
		SURFACE: {},
		VOLUME: {},
		ANGLE: {},
		BIT: {}
	};
	BASE_UNIT_NONE = {}, UNIT_NONE = {name: "", base: BASE_UNIT_NONE, value: 1, offset: 0};
	var N = {
		meter: {name: "meter", base: E.LENGTH, prefixes: b.LONG, value: 1, offset: 0},
		inch: {name: "inch", base: E.LENGTH, prefixes: b.NONE, value: .0254, offset: 0},
		foot: {name: "foot", base: E.LENGTH, prefixes: b.NONE, value: .3048, offset: 0},
		yard: {name: "yard", base: E.LENGTH, prefixes: b.NONE, value: .9144, offset: 0},
		mile: {name: "mile", base: E.LENGTH, prefixes: b.NONE, value: 1609.344, offset: 0},
		link: {name: "link", base: E.LENGTH, prefixes: b.NONE, value: .201168, offset: 0},
		rod: {name: "rod", base: E.LENGTH, prefixes: b.NONE, value: 5.02921, offset: 0},
		chain: {name: "chain", base: E.LENGTH, prefixes: b.NONE, value: 20.1168, offset: 0},
		angstrom: {name: "angstrom", base: E.LENGTH, prefixes: b.NONE, value: 1e-10, offset: 0},
		m: {name: "m", base: E.LENGTH, prefixes: b.SHORT, value: 1, offset: 0},
		"in": {name: "in", base: E.LENGTH, prefixes: b.NONE, value: .0254, offset: 0},
		ft: {name: "ft", base: E.LENGTH, prefixes: b.NONE, value: .3048, offset: 0},
		yd: {name: "yd", base: E.LENGTH, prefixes: b.NONE, value: .9144, offset: 0},
		mi: {name: "mi", base: E.LENGTH, prefixes: b.NONE, value: 1609.344, offset: 0},
		li: {name: "li", base: E.LENGTH, prefixes: b.NONE, value: .201168, offset: 0},
		rd: {name: "rd", base: E.LENGTH, prefixes: b.NONE, value: 5.02921, offset: 0},
		ch: {name: "ch", base: E.LENGTH, prefixes: b.NONE, value: 20.1168, offset: 0},
		mil: {name: "mil", base: E.LENGTH, prefixes: b.NONE, value: 254e-7, offset: 0},
		m2: {name: "m2", base: E.SURFACE, prefixes: b.SQUARED, value: 1, offset: 0},
		sqin: {name: "sqin", base: E.SURFACE, prefixes: b.NONE, value: 64516e-8, offset: 0},
		sqft: {name: "sqft", base: E.SURFACE, prefixes: b.NONE, value: .09290304, offset: 0},
		sqyd: {name: "sqyd", base: E.SURFACE, prefixes: b.NONE, value: .83612736, offset: 0},
		sqmi: {name: "sqmi", base: E.SURFACE, prefixes: b.NONE, value: 2589988.110336, offset: 0},
		sqrd: {name: "sqrd", base: E.SURFACE, prefixes: b.NONE, value: 25.29295, offset: 0},
		sqch: {name: "sqch", base: E.SURFACE, prefixes: b.NONE, value: 404.6873, offset: 0},
		sqmil: {name: "sqmil", base: E.SURFACE, prefixes: b.NONE, value: 6.4516e-10, offset: 0},
		m3: {name: "m3", base: E.VOLUME, prefixes: b.CUBIC, value: 1, offset: 0},
		L: {name: "L", base: E.VOLUME, prefixes: b.SHORT, value: .001, offset: 0},
		l: {name: "l", base: E.VOLUME, prefixes: b.SHORT, value: .001, offset: 0},
		litre: {name: "litre", base: E.VOLUME, prefixes: b.LONG, value: .001, offset: 0},
		cuin: {name: "cuin", base: E.VOLUME, prefixes: b.NONE, value: 16387064e-12, offset: 0},
		cuft: {name: "cuft", base: E.VOLUME, prefixes: b.NONE, value: .028316846592, offset: 0},
		cuyd: {name: "cuyd", base: E.VOLUME, prefixes: b.NONE, value: .764554857984, offset: 0},
		teaspoon: {name: "teaspoon", base: E.VOLUME, prefixes: b.NONE, value: 5e-6, offset: 0},
		tablespoon: {name: "tablespoon", base: E.VOLUME, prefixes: b.NONE, value: 15e-6, offset: 0},
		minim: {name: "minim", base: E.VOLUME, prefixes: b.NONE, value: 6.161152e-8, offset: 0},
		fluiddram: {name: "fluiddram", base: E.VOLUME, prefixes: b.NONE, value: 36966911e-13, offset: 0},
		fluidounce: {name: "fluidounce", base: E.VOLUME, prefixes: b.NONE, value: 2957353e-11, offset: 0},
		gill: {name: "gill", base: E.VOLUME, prefixes: b.NONE, value: .0001182941, offset: 0},
		cc: {name: "cc", base: E.VOLUME, prefixes: b.NONE, value: 1e-6, offset: 0},
		cup: {name: "cup", base: E.VOLUME, prefixes: b.NONE, value: .0002365882, offset: 0},
		pint: {name: "pint", base: E.VOLUME, prefixes: b.NONE, value: .0004731765, offset: 0},
		quart: {name: "quart", base: E.VOLUME, prefixes: b.NONE, value: .0009463529, offset: 0},
		gallon: {name: "gallon", base: E.VOLUME, prefixes: b.NONE, value: .003785412, offset: 0},
		beerbarrel: {name: "beerbarrel", base: E.VOLUME, prefixes: b.NONE, value: .1173478, offset: 0},
		oilbarrel: {name: "oilbarrel", base: E.VOLUME, prefixes: b.NONE, value: .1589873, offset: 0},
		hogshead: {name: "hogshead", base: E.VOLUME, prefixes: b.NONE, value: .238481, offset: 0},
		fldr: {name: "fldr", base: E.VOLUME, prefixes: b.NONE, value: 36966911e-13, offset: 0},
		floz: {name: "floz", base: E.VOLUME, prefixes: b.NONE, value: 2957353e-11, offset: 0},
		gi: {name: "gi", base: E.VOLUME, prefixes: b.NONE, value: .0001182941, offset: 0},
		cp: {name: "cp", base: E.VOLUME, prefixes: b.NONE, value: .0002365882, offset: 0},
		pt: {name: "pt", base: E.VOLUME, prefixes: b.NONE, value: .0004731765, offset: 0},
		qt: {name: "qt", base: E.VOLUME, prefixes: b.NONE, value: .0009463529, offset: 0},
		gal: {name: "gal", base: E.VOLUME, prefixes: b.NONE, value: .003785412, offset: 0},
		bbl: {name: "bbl", base: E.VOLUME, prefixes: b.NONE, value: .1173478, offset: 0},
		obl: {name: "obl", base: E.VOLUME, prefixes: b.NONE, value: .1589873, offset: 0},
		g: {name: "g", base: E.MASS, prefixes: b.SHORT, value: .001, offset: 0},
		gram: {name: "gram", base: E.MASS, prefixes: b.LONG, value: .001, offset: 0},
		ton: {name: "ton", base: E.MASS, prefixes: b.SHORT, value: 907.18474, offset: 0},
		tonne: {name: "tonne", base: E.MASS, prefixes: b.SHORT, value: 1e3, offset: 0},
		grain: {name: "grain", base: E.MASS, prefixes: b.NONE, value: 6479891e-11, offset: 0},
		dram: {name: "dram", base: E.MASS, prefixes: b.NONE, value: .0017718451953125, offset: 0},
		ounce: {name: "ounce", base: E.MASS, prefixes: b.NONE, value: .028349523125, offset: 0},
		poundmass: {name: "poundmass", base: E.MASS, prefixes: b.NONE, value: .45359237, offset: 0},
		hundredweight: {name: "hundredweight", base: E.MASS, prefixes: b.NONE, value: 45.359237, offset: 0},
		stick: {name: "stick", base: E.MASS, prefixes: b.NONE, value: .115, offset: 0},
		gr: {name: "gr", base: E.MASS, prefixes: b.NONE, value: 6479891e-11, offset: 0},
		dr: {name: "dr", base: E.MASS, prefixes: b.NONE, value: .0017718451953125, offset: 0},
		oz: {name: "oz", base: E.MASS, prefixes: b.NONE, value: .028349523125, offset: 0},
		lbm: {name: "lbm", base: E.MASS, prefixes: b.NONE, value: .45359237, offset: 0},
		cwt: {name: "cwt", base: E.MASS, prefixes: b.NONE, value: 45.359237, offset: 0},
		s: {name: "s", base: E.TIME, prefixes: b.SHORT, value: 1, offset: 0},
		min: {name: "min", base: E.TIME, prefixes: b.NONE, value: 60, offset: 0},
		h: {name: "h", base: E.TIME, prefixes: b.NONE, value: 3600, offset: 0},
		second: {name: "second", base: E.TIME, prefixes: b.LONG, value: 1, offset: 0},
		sec: {name: "sec", base: E.TIME, prefixes: b.LONG, value: 1, offset: 0},
		minute: {name: "minute", base: E.TIME, prefixes: b.NONE, value: 60, offset: 0},
		hour: {name: "hour", base: E.TIME, prefixes: b.NONE, value: 3600, offset: 0},
		day: {name: "day", base: E.TIME, prefixes: b.NONE, value: 86400, offset: 0},
		rad: {name: "rad", base: E.ANGLE, prefixes: b.NONE, value: 1, offset: 0},
		deg: {name: "deg", base: E.ANGLE, prefixes: b.NONE, value: .017453292519943295, offset: 0},
		grad: {name: "grad", base: E.ANGLE, prefixes: b.NONE, value: .015707963267948967, offset: 0},
		cycle: {name: "cycle", base: E.ANGLE, prefixes: b.NONE, value: 6.283185307179586, offset: 0},
		A: {name: "A", base: E.CURRENT, prefixes: b.SHORT, value: 1, offset: 0},
		ampere: {name: "ampere", base: E.CURRENT, prefixes: b.LONG, value: 1, offset: 0},
		K: {name: "K", base: E.TEMPERATURE, prefixes: b.NONE, value: 1, offset: 0},
		degC: {name: "degC", base: E.TEMPERATURE, prefixes: b.NONE, value: 1, offset: 273.15},
		degF: {name: "degF", base: E.TEMPERATURE, prefixes: b.NONE, value: 1 / 1.8, offset: 459.67},
		degR: {name: "degR", base: E.TEMPERATURE, prefixes: b.NONE, value: 1 / 1.8, offset: 0},
		kelvin: {name: "kelvin", base: E.TEMPERATURE, prefixes: b.NONE, value: 1, offset: 0},
		celsius: {name: "celsius", base: E.TEMPERATURE, prefixes: b.NONE, value: 1, offset: 273.15},
		fahrenheit: {name: "fahrenheit", base: E.TEMPERATURE, prefixes: b.NONE, value: 1 / 1.8, offset: 459.67},
		rankine: {name: "rankine", base: E.TEMPERATURE, prefixes: b.NONE, value: 1 / 1.8, offset: 0},
		mol: {name: "mol", base: E.AMOUNT_OF_SUBSTANCE, prefixes: b.NONE, value: 1, offset: 0},
		mole: {name: "mole", base: E.AMOUNT_OF_SUBSTANCE, prefixes: b.NONE, value: 1, offset: 0},
		cd: {name: "cd", base: E.LUMINOUS_INTENSITY, prefixes: b.NONE, value: 1, offset: 0},
		candela: {name: "candela", base: E.LUMINOUS_INTENSITY, prefixes: b.NONE, value: 1, offset: 0},
		N: {name: "N", base: E.FORCE, prefixes: b.SHORT, value: 1, offset: 0},
		newton: {name: "newton", base: E.FORCE, prefixes: b.LONG, value: 1, offset: 0},
		lbf: {name: "lbf", base: E.FORCE, prefixes: b.NONE, value: 4.4482216152605, offset: 0},
		poundforce: {name: "poundforce", base: E.FORCE, prefixes: b.NONE, value: 4.4482216152605, offset: 0},
		b: {name: "b", base: E.BIT, prefixes: b.BINARY_SHORT, value: 1, offset: 0},
		bits: {name: "bits", base: E.BIT, prefixes: b.BINARY_LONG, value: 1, offset: 0},
		B: {name: "B", base: E.BIT, prefixes: b.BINARY_SHORT, value: 8, offset: 0},
		bytes: {name: "bytes", base: E.BIT, prefixes: b.BINARY_LONG, value: 8, offset: 0}
	}, M = {
		meters: "meter",
		inches: "inch",
		feet: "foot",
		yards: "yard",
		miles: "mile",
		links: "link",
		rods: "rod",
		chains: "chain",
		angstroms: "angstrom",
		litres: "litre",
		teaspoons: "teaspoon",
		tablespoons: "tablespoon",
		minims: "minim",
		fluiddrams: "fluiddram",
		fluidounces: "fluidounce",
		gills: "gill",
		cups: "cup",
		pints: "pint",
		quarts: "quart",
		gallons: "gallon",
		beerbarrels: "beerbarrel",
		oilbarrels: "oilbarrel",
		hogsheads: "hogshead",
		grams: "gram",
		tons: "ton",
		tonnes: "tonne",
		grains: "grain",
		drams: "dram",
		ounces: "ounce",
		poundmasses: "poundmass",
		hundredweights: "hundredweight",
		sticks: "stick",
		seconds: "second",
		minutes: "minute",
		hours: "hour",
		days: "day",
		radians: "rad",
		degrees: "deg",
		gradients: "grad",
		cycles: "cycle",
		amperes: "ampere",
		moles: "mole"
	};
	for(var A in M)if(M.hasOwnProperty(A)) {
		var O = N[M[A]], T = Object.create(O);
		T.name = A, N[A] = T
	}
	N.lt = N.l, N.liter = N.litre, N.liters = N.litres, N.lb = N.lbm, t.PREFIXES = b, t.BASE_UNITS = E, t.UNITS = N, e.exports = t, n.isUnit = t.isUnit, n.isPlainUnit = t.isPlainUnit, n.parse = t.parse
}, function(e, n, r) {
	function t(e, n) {
		this.math = e, this.doc = n
	}

	var i = r(117), o = i.object, a = i.string;
	t.isHelp = function(e) {
		return e instanceof t
	}, t.prototype.toString = function() {
		var e = this.doc || {}, n = "\n";
		if(e.name && (n += "Name: " + e.name + "\n\n"), e.category && (n += "Category: " + e.category + "\n\n"), e.description && (n += "Description:\n    " + e.description + "\n\n"), e.syntax && (n += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
			var r = this.math.parser();
			n += "Examples:\n";
			for(var i = 0; i < e.examples.length; i++) {
				var o, s = e.examples[i];
				try {
					o = r.eval(s)
				} catch(u) {
					o = u
				}
				n += "    " + s + "\n", !o || o instanceof t || (n += "        " + a.format(o) + "\n")
			}
			n += "\n"
		}
		return e.seealso && (n += "See also: " + e.seealso.join(", ") + "\n"), n
	}, t.prototype.toJSON = function() {
		return o.extend({}, this.doc)
	}, e.exports = t, n.isHelp = t.isHelp
}, function(e, n, r) {
	function t(e, n, r) {
		var o, a, u, f;
		if(0 >= n) {
			if(s(e[0])) {
				for(f = i(e), a = [], o = 0; o < f.length; o++)a[o] = t(f[o], n - 1, r);
				return a
			}
			for(u = e[0], o = 1; o < e.length; o++)u = r(u, e[o]);
			return u
		}
		for(a = [], o = 0; o < e.length; o++)a[o] = t(e[o], n - 1, r);
		return a
	}

	function i(e) {
		var n, r, t = e.length, i = e[0].length, o = [];
		for(r = 0; i > r; r++) {
			var a = [];
			for(n = 0; t > n; n++)a.push(e[n][r]);
			o.push(a)
		}
		return o
	}

	{
		var o = r(117), a = r(10), s = o.array.isArray;
		o.string.isString
	}
	n.argsToArray = function(e) {
		var n;
		return 0 == e.length ? n = [] : 1 == e.length ? (n = e[0], n instanceof a && (n = n.valueOf()), s(n) || (n = [n])) : n = Array.prototype.slice.apply(e), n
	}, n.isCollection = function(e) {
		return s(e) || e instanceof a
	}, n.deepMap = function u(e, n) {
		return e && "function" == typeof e.map ? e.map(function(e) {
			return u(e, n)
		}) : n(e)
	}, n.deepMap2 = function f(e, n, r) {
		var t, i, o;
		if(s(e))if(s(n)) {
			if(e.length != n.length)throw new RangeError("Dimension mismatch (" + e.length + " != " + n.length + ")");
			for(t = [], i = e.length, o = 0; i > o; o++)t[o] = f(e[o], n[o], r)
		}
		else {
			if(n instanceof a)return t = f(e, n.valueOf(), r), new a(t);
			for(t = [], i = e.length, o = 0; i > o; o++)t[o] = f(e[o], n, r)
		}
		else {
			if(e instanceof a)return n instanceof a ? (t = f(e.valueOf(), n.valueOf(), r), new a(t)) : (t = f(e.valueOf(), n, r), new a(t));
			if(s(n))for(t = [], i = n.length, o = 0; i > o; o++)t[o] = f(e, n[o], r);
			else {
				if(n instanceof a)return t = f(e, n.valueOf(), r), new a(t);
				t = r(e, n)
			}
		}
		return t
	}, n.reduce = function(e, n, r) {
		return e instanceof a ? new a(t(e.valueOf(), n, r)) : t(e, n, r)
	}, n.deepForEach = function c(e, n) {
		e instanceof a && (e = e.valueOf());
		for(var r = 0, t = e.length; t > r; r++) {
			var i = e[r];
			s(i) ? c(i, n) : n(i)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = (r(217), {});
		e.error = n, n.UnsupportedTypeError = function(n, r) {
			if(2 == arguments.length) {
				var t = e["typeof"](r);
				this.message = "Function " + n + "(" + t + ") not supported"
			}
			else if(arguments.length > 2) {
				var i = Array.prototype.splice.call(arguments, 1), o = i.map(function(n) {
					return e["typeof"](n)
				});
				this.message = "Function " + n + "(" + o.join(", ") + ") not supported"
			}
			else this.message = "Unsupported type of argument in function " + n;
			this.stack = (new Error).stack
		}, n.UnsupportedTypeError.prototype = new TypeError, n.UnsupportedTypeError.prototype.constructor = TypeError, n.UnsupportedTypeError.prototype.name = "UnsupportedTypeError", n.ArgumentsError = function(e, n, r, t) {
			this.message = "Wrong number of arguments in function " + e + " (" + n + " provided, " + r + (void 0 != t ? "-" + t : "") + " expected)", this.stack = (new Error).stack
		}, n.ArgumentsError.prototype = new Error, n.ArgumentsError.prototype.constructor = Error, n.ArgumentsError.prototype.name = "ArgumentError"
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(4), i = r(13), o = n.string.isString, a = i.isCollection;
		e.compile = function(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("compile", arguments.length, 1);
			if(o(n))return t(n).compile(e);
			if(a(n))return i.deepMap(n, function(n) {
				return t(n).compile(e)
			});
			throw new TypeError("String, array, or matrix expected")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(4), i = r(13), o = n.string.isString, a = i.isCollection;
		e.eval = function(n, r) {
			if(1 != arguments.length && 2 != arguments.length)throw new e.error.ArgumentsError("eval", arguments.length, 1, 2);
			if(r = r || {}, o(n))return t(n).compile(e).eval(r);
			if(a(n))return i.deepMap(n, function(n) {
				return t(n).compile(e).eval(r)
			});
			throw new TypeError("String, array, or matrix expected")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(12);
		e.help = function(r) {
			if(1 != arguments.length)throw new SyntaxError("Wrong number of arguments in function help (" + arguments.length + " provided, 1 expected)");
			var t = null;
			if(r instanceof String || "string" == typeof r)t = r;
			else {
				var i;
				for(i in e)if(e.hasOwnProperty(i) && r === e[i]) {
					t = i;
					break
				}
				if(!t)for(i in e.type)if(e.type.hasOwnProperty(i) && r === e.type[i]) {
					t = i;
					break
				}
			}
			if(t) {
				var o = e.expression.docs[t];
				if(!o)throw new Error('No documentation found on "' + t + '"');
				return new n(e, o)
			}
			throw new Error('Could not find search term "' + r + '"')
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(4);
		e.parse = function() {
			return n.apply(n, arguments)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = (r(10), r(13)), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.abs = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("abs", arguments.length, 1);
			if(a(n))return Math.abs(n);
			if(u(n))return Math.sqrt(n.re * n.re + n.im * n.im);
			if(n instanceof t)return n.abs();
			if(f(n))return o.deepMap(n, c);
			if(s(n))return Math.abs(n);
			throw new e.error.UnsupportedTypeError("abs", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = (r(10), r(11)), a = r(13), s = n["boolean"].isBoolean, u = n.number.isNumber, f = n.number.toNumber, c = n.number.toBigNumber, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.add = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("add", arguments.length, 2);
			if(u(n)) {
				if(u(r))return n + r;
				if(m(r))return new i(n + r.re, r.im)
			}
			if(m(n)) {
				if(m(r))return new i(n.re + r.re, n.im + r.im);
				if(u(r))return new i(n.re + r, n.im)
			}
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Units do not match");
				if(null == n.value)throw new Error("Unit on left hand side of operator + has an undefined value");
				if(null == r.value)throw new Error("Unit on right hand side of operator + has an undefined value");
				var o = n.clone();
				return o.value += r.value, o.fixPrefix = !1, o
			}
			if(n instanceof t)return u(r) ? r = c(r) : s(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.plus(r) : g(f(n), r);
			if(r instanceof t)return u(n) ? n = c(n) : s(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.plus(r) : g(n, f(r));
			if(l(n) || l(r))return n + r;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(s(n))return g(+n, r);
			if(s(r))return g(n, +r);
			throw new e.error.UnsupportedTypeError("add", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = o.isCollection, f = i.isComplex;
		e.ceil = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("ceil", arguments.length, 1);
			if(a(n))return Math.ceil(n);
			if(f(n))return new i(Math.ceil(n.re), Math.ceil(n.im));
			if(n instanceof t)return n.ceil();
			if(u(n))return o.deepMap(n, c);
			if(s(n))return Math.ceil(n);
			throw new e.error.UnsupportedTypeError("ceil", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.cube = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("cube", arguments.length, 1);
			if(a(n))return n * n * n;
			if(u(n))return e.multiply(e.multiply(n, n), n);
			if(n instanceof t)return n.times(n).times(n);
			if(f(n))return o.deepMap(n, c);
			if(s(n))return c(+n);
			throw new e.error.UnsupportedTypeError("cube", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			var r = n.re * n.re + n.im * n.im;
			return 0 != r ? new o((e.re * n.re + e.im * n.im) / r, (e.im * n.re - e.re * n.im) / r) : new o(0 != e.re ? e.re / 0 : 0, 0 != e.im ? e.im / 0 : 0)
		}

		var t = r(117), i = r(220), o = r(7), a = (r(10), r(11)), s = r(13), u = t.number.isNumber, f = t.number.toNumber, c = t.number.toBigNumber, l = t["boolean"].isBoolean, m = o.isComplex, p = a.isUnit, h = s.isCollection;
		e.divide = function g(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("divide", arguments.length, 2);
			if(u(r)) {
				if(u(t))return r / t;
				if(m(t))return n(new o(r, 0), t)
			}
			if(m(r)) {
				if(m(t))return n(r, t);
				if(u(t))return n(r, new o(t, 0))
			}
			if(r instanceof i)return u(t) ? t = c(t) : l(t) && (t = new i(t ? 1 : 0)), t instanceof i ? r.div(t) : g(f(r), t);
			if(t instanceof i)return u(r) ? r = c(r) : l(r) && (r = new i(r ? 1 : 0)), r instanceof i ? r.div(t) : g(r, f(t));
			if(p(r) && u(t)) {
				var a = r.clone();
				return a.value /= t, a
			}
			if(h(r))return h(t) ? e.multiply(r, e.inv(t)) : s.deepMap2(r, t, g);
			if(h(t))return e.multiply(r, e.inv(t));
			if(l(r))return g(+r, t);
			if(l(t))return g(r, +t);
			throw new e.error.UnsupportedTypeError("divide", r, t)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(13);
		e.edivide = function(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("edivide", arguments.length, 2);
			return n.deepMap2(r, t, e.divide)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(13);
		e.emultiply = function(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("emultiply", arguments.length, 2);
			return n.deepMap2(r, t, e.multiply)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(13);
		e.epow = function(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("epow", arguments.length, 2);
			return n.deepMap2(r, t, e.pow)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.equal = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("equal", arguments.length, 2);
			if(s(n)) {
				if(s(r))return n == r;
				if(m(r))return n == r.re && 0 == r.im
			}
			if(m(n)) {
				if(s(r))return n.re == r && 0 == n.im;
				if(m(r))return n.re == r.re && n.im == r.im
			}
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.eq(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.eq(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value == r.value
			}
			if(l(n) || l(r))return n == r;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			throw new e.error.UnsupportedTypeError("equal", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = (r(10), r(13)), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.exp = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("exp", arguments.length, 1);
			if(a(r))return Math.exp(r);
			if(u(r)) {
				var l = Math.exp(r.re);
				return new i(l * Math.cos(r.im), l * Math.sin(r.im))
			}
			if(r instanceof t)return c(n.number.toNumber(r));
			if(f(r))return o.deepMap(r, c);
			if(s(r))return Math.exp(r);
			throw new e.error.UnsupportedTypeError("exp", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.fix = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("fix", arguments.length, 1);
			if(a(n))return n > 0 ? Math.floor(n) : Math.ceil(n);
			if(u(n))return new i(n.re > 0 ? Math.floor(n.re) : Math.ceil(n.re), n.im > 0 ? Math.floor(n.im) : Math.ceil(n.im));
			if(n instanceof t)return n.isNegative() ? n.ceil() : n.floor();
			if(f(n))return o.deepMap(n, c);
			if(s(n))return c(+n);
			throw new e.error.UnsupportedTypeError("fix", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.floor = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("floor", arguments.length, 1);
			if(a(n))return Math.floor(n);
			if(u(n))return new i(Math.floor(n.re), Math.floor(n.im));
			if(n instanceof t)return n.floor();
			if(f(n))return o.deepMap(n, c);
			if(s(n))return c(+n);
			throw new e.error.UnsupportedTypeError("floor", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = n.number.isNumber, a = n.number.toNumber, s = n["boolean"].isBoolean, u = n.number.isInteger, f = i.isCollection;
		e.gcd = function c() {
			var n, r = arguments[0], l = arguments[1];
			if(2 == arguments.length) {
				if(o(r) && o(l)) {
					if(!u(r) || !u(l))throw new Error("Parameters in function gcd must be integer numbers");
					for(; 0 != l;)n = r % l, r = l, l = n;
					return 0 > r ? -r : r
				}
				if(f(r) || f(l))return i.deepMap2(r, l, c);
				if(r instanceof t)return c(a(r), l);
				if(l instanceof t)return c(r, a(l));
				if(s(r))return c(+r, l);
				if(s(l))return c(r, +l);
				throw new e.error.UnsupportedTypeError("gcd", r, l)
			}
			if(arguments.length > 2) {
				for(var m = 1; m < arguments.length; m++)r = c(r, arguments[m]);
				return r
			}
			throw new SyntaxError("Function gcd expects two or more arguments")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.larger = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("larger", arguments.length, 2);
			if(s(n) && s(r))return n > r;
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.gt(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.gt(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value > r.value
			}
			if(l(n) || l(r))return n > r;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			if(m(n) || m(r))throw new TypeError("No ordering relation is defined for complex numbers");
			throw new e.error.UnsupportedTypeError("larger", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.largereq = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("largereq", arguments.length, 2);
			if(s(n) && s(r))return n >= r;
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.gte(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.gte(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value >= r.value
			}
			if(l(n) || l(r))return n >= r;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			if(m(n) || m(r))throw new TypeError("No ordering relation is defined for complex numbers");
			throw new e.error.UnsupportedTypeError("largereq", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = n.number.isNumber, a = n.number.toNumber, s = n["boolean"].isBoolean, u = n.number.isInteger, f = i.isCollection;
		e.lcm = function c() {
			var n, r = arguments[0], l = arguments[1];
			if(2 == arguments.length) {
				if(o(r) && o(l)) {
					if(!u(r) || !u(l))throw new Error("Parameters in function lcm must be integer numbers");
					if(0 == r || 0 == l)return 0;
					for(var m = r * l; 0 != l;)n = l, l = r % n, r = n;
					return Math.abs(m / r)
				}
				if(f(r) || f(l))return i.deepMap2(r, l, c);
				if(s(r))return c(+r, l);
				if(s(l))return c(r, +l);
				if(r instanceof t)return c(a(r), l);
				if(l instanceof t)return c(r, a(l));
				throw new e.error.UnsupportedTypeError("lcm", r, l)
			}
			if(arguments.length > 2) {
				for(var p = 1; p < arguments.length; p++)r = c(r, arguments[p]);
				return r
			}
			throw new SyntaxError("Function lcm expects two or more arguments")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.log = function c(r, l) {
			if(1 == arguments.length) {
				if(a(r))return r >= 0 ? Math.log(r) : c(new i(r, 0));
				if(u(r))return new i(Math.log(Math.sqrt(r.re * r.re + r.im * r.im)), Math.atan2(r.im, r.re));
				if(r instanceof t)return c(n.number.toNumber(r));
				if(f(r))return o.deepMap(r, c);
				if(s(r))return c(+r);
				throw new e.error.UnsupportedTypeError("log", r)
			}
			if(2 == arguments.length)return e.divide(c(r), c(l));
			throw new e.error.ArgumentsError("log", arguments.length, 1, 2)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.log10 = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("log10", arguments.length, 1);
			if(a(r))return r >= 0 ? Math.log(r) / Math.LN10 : c(new i(r, 0));
			if(r instanceof t)return c(n.number.toNumber(r));
			if(u(r))return new i(Math.log(Math.sqrt(r.re * r.re + r.im * r.im)) / Math.LN10, Math.atan2(r.im, r.re) / Math.LN10);
			if(f(r))return o.deepMap(r, c);
			if(s(r))return c(+r);
			throw new e.error.UnsupportedTypeError("log10", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			if(n > 0)return e > 0 ? e % n : 0 == e ? 0 : e - n * Math.floor(e / n);
			if(0 == n)return e;
			throw new Error("Cannot calculate mod for a negative divisor")
		}

		var t = r(117), i = r(220), o = r(13), a = t.number.isNumber, s = t.number.toNumber, u = t.number.toBigNumber, f = t["boolean"].isBoolean, c = o.isCollection;
		e.mod = function l(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("mod", arguments.length, 2);
			if(a(r) && a(t))return n(r, t);
			if(r instanceof i)return a(t) ? t = u(t) : f(t) && (t = new i(t ? 1 : 0)), t instanceof i ? r.mod(t) : l(s(r), t);
			if(t instanceof i)return a(r) ? r = u(r) : f(r) && (r = new i(r ? 1 : 0)), r instanceof i ? r.mod(t) : l(r, s(t));
			if(c(r) || c(t))return o.deepMap2(r, t, l);
			if(f(r))return l(+r, t);
			if(f(t))return l(r, +t);
			throw new e.error.UnsupportedTypeError("mod", r, t)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			for(var t = [], i = n.length, o = r[0].length, a = n[0].length, s = 0; i > s; s++) {
				t[s] = [];
				for(var u = 0; o > u; u++) {
					for(var f = null, c = 0; a > c; c++) {
						var l = e.multiply(n[s][c], r[c][u]);
						f = null === f ? l : e.add(f, l)
					}
					t[s][u] = f
				}
			}
			return t
		}

		function t(n, r) {
			for(var t = [], i = r.length, o = r[0].length, a = 0; o > a; a++) {
				for(var s = null, u = 0; i > u; u++) {
					var f = e.multiply(n[u], r[u][a]);
					s = 0 === u ? f : e.add(s, f)
				}
				t[a] = s
			}
			return t
		}

		function i(n, r) {
			for(var t = [], i = n.length, o = n[0].length, a = 0; i > a; a++) {
				for(var s = null, u = 0; o > u; u++) {
					var f = e.multiply(n[a][u], r[u]);
					s = 0 === u ? f : e.add(s, f)
				}
				t[a] = s
			}
			return t
		}

		function o(n, r) {
			var t = n.length, i = null;
			if(t) {
				i = 0;
				for(var o = 0, a = n.length; a > o; o++)i = e.add(i, e.multiply(n[o], r[o]))
			}
			return i
		}

		function a(e, n) {
			return 0 == e.im ? 0 == n.im ? new f(e.re * n.re, 0) : 0 == n.re ? new f(0, e.re * n.im) : new f(e.re * n.re, e.re * n.im) : 0 == e.re ? 0 == n.im ? new f(0, e.im * n.re) : 0 == n.re ? new f(-e.im * n.im, 0) : new f(-e.im * n.im, e.im * n.re) : 0 == n.im ? new f(e.re * n.re, e.im * n.re) : 0 == n.re ? new f(-e.im * n.im, e.re * n.im) : new f(e.re * n.re - e.im * n.im, e.re * n.im + e.im * n.re)
		}

		var s = r(117), u = r(220), f = r(7), c = r(10), l = r(11), m = r(13), p = s.array, h = s.number.isNumber, g = s.number.toNumber, d = s.number.toBigNumber, x = s["boolean"].isBoolean, v = f.isComplex, w = Array.isArray, b = l.isUnit;
		e.multiply = function y(r, s) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("multiply", arguments.length, 2);
			if(h(r)) {
				if(h(s))return r * s;
				if(v(s))return a(new f(r, 0), s);
				if(b(s))return res = s.clone(), res.value *= r, res
			}
			if(v(r)) {
				if(h(s))return a(r, new f(s, 0));
				if(v(s))return a(r, s)
			}
			if(r instanceof u)return h(s) ? s = d(s) : x(s) && (s = new u(s ? 1 : 0)), s instanceof u ? r.times(s) : y(g(r), s);
			if(s instanceof u)return h(r) ? r = d(r) : x(r) && (r = new u(r ? 1 : 0)), r instanceof u ? r.times(s) : y(r, g(s));
			if(b(r) && h(s))return res = r.clone(), res.value *= s, res;
			if(w(r)) {
				if(w(s)) {
					var l = p.size(r), E = p.size(s);
					if(1 == l.length) {
						if(1 == E.length) {
							if(l[0] != E[0])throw new RangeError("Dimensions mismatch in multiplication. Length of A must match length of B (A is " + l[0] + ", B is " + E[0] + l[0] + " != " + E[0] + ")");
							return o(r, s)
						}
						if(2 == E.length) {
							if(l[0] != E[0])throw new RangeError("Dimensions mismatch in multiplication. Length of A must match rows of B (A is " + l[0] + ", B is " + E[0] + "x" + E[1] + ", " + l[0] + " != " + E[0] + ")");
							return t(r, s)
						}
						throw new Error("Can only multiply a 1 or 2 dimensional matrix (B has " + E.length + " dimensions)")
					}
					if(2 == l.length) {
						if(1 == E.length) {
							if(l[1] != E[0])throw new RangeError("Dimensions mismatch in multiplication. Columns of A must match length of B (A is " + l[0] + "x" + l[0] + ", B is " + E[0] + ", " + l[1] + " != " + E[0] + ")");
							return i(r, s)
						}
						if(2 == E.length) {
							if(l[1] != E[0])throw new RangeError("Dimensions mismatch in multiplication. Columns of A must match rows of B (A is " + l[0] + "x" + l[1] + ", B is " + E[0] + "x" + E[1] + ", " + l[1] + " != " + E[0] + ")");
							return n(r, s)
						}
						throw new Error("Can only multiply a 1 or 2 dimensional matrix (B has " + E.length + " dimensions)")
					}
					throw new Error("Can only multiply a 1 or 2 dimensional matrix (A has " + l.length + " dimensions)")
				}
				return s instanceof c ? new c(y(r, s.valueOf())) : m.deepMap2(r, s, y)
			}
			if(r instanceof c)return new c(s instanceof c ? y(r.valueOf(), s.valueOf()) : y(r.valueOf(), s));
			if(w(s))return m.deepMap2(r, s, y);
			if(s instanceof c)return new c(m.deepMap2(r, s.valueOf(), y));
			if(x(r))return y(+r, s);
			if(x(s))return y(r, +s);
			throw new e.error.UnsupportedTypeError("multiply", r, s)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			var t = e.log(n), i = e.multiply(t, r);
			return e.exp(i)
		}

		var t = r(117), i = r(220), o = r(7), a = r(10), s = (r(13), t.array), u = t.number.isNumber, f = t.number.toNumber, c = t.number.toBigNumber, l = t["boolean"].isBoolean, m = Array.isArray, p = t.number.isInteger, h = o.isComplex;
		e.pow = function g(r, t) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("pow", arguments.length, 2);
			if(u(r)) {
				if(u(t))return p(t) || r >= 0 ? Math.pow(r, t) : n(new o(r, 0), new o(t, 0));
				if(h(t))return n(new o(r, 0), t)
			}
			if(h(r)) {
				if(u(t))return n(r, new o(t, 0));
				if(h(t))return n(r, t)
			}
			if(r instanceof i)return u(t) ? t = c(t) : l(t) && (t = new i(t ? 1 : 0)), t instanceof i ? r.pow(t) : g(f(r), t);
			if(t instanceof i)return u(r) ? r = c(r) : l(r) && (r = new i(r ? 1 : 0)), r instanceof i ? r.pow(t) : g(r, f(t));
			if(m(r)) {
				if(!u(t) || !p(t) || 0 > t)throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")");
				var d = s.size(r);
				if(2 != d.length)throw new Error("For A^b, A must be 2 dimensional (A has " + d.length + " dimensions)");
				if(d[0] != d[1])throw new Error("For A^b, A must be square (size is " + d[0] + "x" + d[1] + ")");
				for(var x = e.eye(d[0]).valueOf(), v = r; t >= 1;)1 == (1 & t) && (x = e.multiply(v, x)), t >>= 1, v = e.multiply(v, v);
				return x
			}
			if(r instanceof a)return new a(g(r.valueOf(), t));
			if(l(r))return g(+r, t);
			if(l(t))return g(r, +t);
			throw new e.error.UnsupportedTypeError("pow", r, t)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			if(n) {
				var r = Math.pow(10, n);
				return Math.round(e * r) / r
			}
			return Math.round(e)
		}

		var t = r(117), i = r(220), o = r(7), a = r(13), s = t.number.isNumber, u = t.number.isInteger, f = t["boolean"].isBoolean, c = o.isComplex, l = a.isCollection;
		e.round = function m(r, t) {
			if(1 != arguments.length && 2 != arguments.length)throw new e.error.ArgumentsError("round", arguments.length, 1, 2);
			if(void 0 == t) {
				if(s(r))return Math.round(r);
				if(c(r))return new o(Math.round(r.re), Math.round(r.im));
				if(r instanceof i)return r.round();
				if(l(r))return a.deepMap(r, m);
				if(f(r))return Math.round(r);
				throw new e.error.UnsupportedTypeError("round", r)
			}
			if(t instanceof i && (t = parseFloat(t.valueOf())), !s(t) || !u(t))throw new TypeError("Number of decimals in function round must be an integer");
			if(0 > t || t > 9)throw new Error("Number of decimals in function round must be in te range of 0-9");
			if(s(r))return n(r, t);
			if(c(r))return new o(n(r.re, t), n(r.im, t));
			if(r instanceof i && s(t))return r.round(t);
			if(l(r) || l(t))return a.deepMap2(r, t, m);
			if(f(r))return m(+r, t);
			if(f(t))return m(r, +t);
			throw new e.error.UnsupportedTypeError("round", r, t)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number, s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isCollection;
		e.sign = function l(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("sign", arguments.length, 1);
			if(s(n))return a.sign(n);
			if(f(n)) {
				var r = Math.sqrt(n.re * n.re + n.im * n.im);
				return new i(n.re / r, n.im / r)
			}
			if(n instanceof t)return new t(n.cmp(0));
			if(c(n))return o.deepMap(n, l);
			if(u(n))return a.sign(n);
			throw new e.error.UnsupportedTypeError("sign", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.smaller = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("smaller", arguments.length, 2);
			if(s(n) && s(r))return r > n;
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.lt(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.lt(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value < r.value
			}
			if(l(n) || l(r))return r > n;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			if(m(n) || m(r))throw new TypeError("No ordering relation is defined for complex numbers");
			throw new e.error.UnsupportedTypeError("smaller", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.smallereq = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("smallereq", arguments.length, 2);
			if(s(n) && s(r))return r >= n;
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.lte(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.lte(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value <= r.value
			}
			if(l(n) || l(r))return r >= n;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			if(m(n) || m(r))throw new TypeError("No ordering relation is defined for complex numbers");
			throw new e.error.UnsupportedTypeError("smallereq", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.sqrt = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("sqrt", arguments.length, 1);
			if(a(n))return n >= 0 ? Math.sqrt(n) : c(new i(n, 0));
			if(u(n)) {
				var r = Math.sqrt(n.re * n.re + n.im * n.im);
				return n.im >= 0 ? new i(.5 * Math.sqrt(2 * (r + n.re)), .5 * Math.sqrt(2 * (r - n.re))) : new i(.5 * Math.sqrt(2 * (r + n.re)), -.5 * Math.sqrt(2 * (r - n.re)))
			}
			if(n instanceof t)return n.sqrt();
			if(f(n))return o.deepMap(n, c);
			if(s(n))return c(+n);
			throw new e.error.UnsupportedTypeError("sqrt", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.square = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("square", arguments.length, 1);
			if(a(n))return n * n;
			if(u(n))return e.multiply(n, n);
			if(n instanceof t)return n.times(n);
			if(f(n))return o.deepMap(n, c);
			if(s(n))return n * n;
			throw new e.error.UnsupportedTypeError("square", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = (r(10), r(11)), a = r(13), s = n.number.toNumber, u = n.number.toBigNumber, f = n["boolean"].isBoolean, c = n.number.isNumber, l = i.isComplex, m = o.isUnit, p = a.isCollection;
		e.subtract = function h(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("subtract", arguments.length, 2);
			if(c(n)) {
				if(c(r))return n - r;
				if(l(r))return new i(n - r.re, -r.im)
			}
			else if(l(n)) {
				if(c(r))return new i(n.re - r, n.im);
				if(l(r))return new i(n.re - r.re, n.im - r.im)
			}
			if(n instanceof t)return c(r) ? r = u(r) : f(r) && (r = new t(r ? 1 : 0)), r instanceof t ? n.minus(r) : h(s(n), r);
			if(r instanceof t)return c(n) ? n = u(n) : f(n) && (n = new t(n ? 1 : 0)), n instanceof t ? n.minus(r) : h(n, s(r));
			if(m(n) && m(r)) {
				if(!n.equalBase(r))throw new Error("Units do not match");
				if(null == n.value)throw new Error("Unit on left hand side of operator - has an undefined value");
				if(null == r.value)throw new Error("Unit on right hand side of operator - has an undefined value");
				var o = n.clone();
				return o.value -= r.value, o.fixPrefix = !1, o
			}
			if(p(n) || p(r))return a.deepMap2(n, r, h);
			if(f(n))return h(+n, r);
			if(f(r))return h(n, +r);
			throw new e.error.UnsupportedTypeError("subtract", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.unary = function m(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("unary", arguments.length, 1);
			if(s(n))return -n;
			if(f(n))return new i(-n.re, -n.im);
			if(n instanceof t)return n.neg();
			if(c(n)) {
				var r = n.clone();
				return r.value = -n.value, r
			}
			if(l(n))return a.deepMap(n, m);
			if(u(n))return -n;
			throw new e.error.UnsupportedTypeError("unary", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n.number.toNumber, f = n.number.toBigNumber, c = n["boolean"].isBoolean, l = n.string.isString, m = i.isComplex, p = o.isUnit, h = a.isCollection;
		e.unequal = function g(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("unequal", arguments.length, 2);
			if(s(n)) {
				if(s(r))return n != r;
				if(m(r))return n != r.re || 0 != r.im
			}
			if(m(n)) {
				if(s(r))return n.re != r || 0 != n.im;
				if(m(r))return n.re != r.re || n.im != r.im
			}
			if(n instanceof t)return s(r) ? r = f(r) : c(r) && (r = new t(r ? 1 : 0)), r instanceof t ? !n.eq(r) : g(u(n), r);
			if(r instanceof t)return s(n) ? n = f(n) : c(n) && (n = new t(n ? 1 : 0)), n instanceof t ? !n.eq(r) : g(n, u(r));
			if(p(n) && p(r)) {
				if(!n.equalBase(r))throw new Error("Cannot compare units with different base");
				return n.value != r.value
			}
			if(l(n) || l(r))return n != r;
			if(h(n) || h(r))return a.deepMap2(n, r, g);
			if(c(n))return g(+n, r);
			if(c(r))return g(n, +r);
			throw new e.error.UnsupportedTypeError("unequal", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			for(var r, t, i, o = 0, a = 1, s = 1, u = 0; n;)t = Math.floor(e / n), i = e % n, r = o, o = a - t * o, a = r, r = s, s = u - t * s, u = r, e = n, n = i;
			return 0 > e ? [-e, e ? -a : 0, -u] : [e, e ? a : 0, u]
		}

		var t = r(117), i = r(220), o = t.number.toNumber, a = t.number.isNumber, s = t["boolean"].isBoolean, u = t.number.isInteger;
		e.xgcd = function f(r, t) {
			if(2 == arguments.length) {
				if(a(r) && a(t)) {
					if(!u(r) || !u(t))throw new Error("Parameters in function xgcd must be integer numbers");
					return n(r, t)
				}
				if(r instanceof i)return f(o(r), t);
				if(t instanceof i)return f(r, o(t));
				if(s(r))return f(+r, t);
				if(s(t))return f(r, +t);
				throw new e.error.UnsupportedTypeError("xgcd", r, t)
			}
			throw new SyntaxError("Function xgcd expects two arguments")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = o.isCollection, f = i.isComplex;
		e.arg = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("arg", arguments.length, 1);
			if(a(r))return Math.atan2(0, r);
			if(f(r))return Math.atan2(r.im, r.re);
			if(u(r))return o.deepMap(r, c);
			if(s(r))return c(+r);
			if(r instanceof t)return c(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("arg", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.object, s = n.number.isNumber, u = n["boolean"].isBoolean, f = o.isCollection, c = i.isComplex;
		e.conj = function l(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("conj", arguments.length, 1);
			return s(n) ? n : n instanceof t ? new t(n) : c(n) ? new i(n.re, -n.im) : f(n) ? o.deepMap(n, l) : u(n) ? +n : a.clone(n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.object, s = n.number.isNumber, u = n["boolean"].isBoolean, f = o.isCollection, c = i.isComplex;
		e.re = function l(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("re", arguments.length, 1);
			return s(n) ? n : n instanceof t ? new t(n) : c(n) ? n.re : f(n) ? o.deepMap(n, l) : u(n) ? +n : a.clone(n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = o.isCollection, f = i.isComplex;
		e.im = function c(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("im", arguments.length, 1);
			return a(n) ? 0 : n instanceof t ? new t(0) : f(n) ? n.im : u(n) ? o.deepMap(n, c) : s(n) ? 0 : 0
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = i.isCollection, a = n.number.isNumber, s = n.string.isString, u = n["boolean"].isBoolean;
		"function" != typeof t.prototype.clone && (t.prototype.clone = function() {
			return new t(this)
		}), e.bignumber = function f(n) {
			if(arguments.length > 1)throw new e.error.ArgumentsError("bignumber", arguments.length, 0, 1);
			if(n instanceof t || a(n) || s(n))return new t(n);
			if(u(n))return new t(+n);
			if(o(n))return i.deepMap(n, f);
			if(0 == arguments.length)return new t(0);
			throw new e.error.UnsupportedTypeError("bignumber", n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = i.isCollection, a = n.number.isNumber, s = n.string.isString;
		e["boolean"] = function u(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("boolean", arguments.length, 0, 1);
			if("true" === n || n === !0)return !0;
			if("false" === n || n === !1)return !1;
			if(n instanceof Boolean)return n ? !0 : !1;
			if(a(n))return 0 !== n;
			if(n instanceof t)return !n.isZero();
			if(s(n)) {
				var r = n.toLowerCase();
				if("true" === r)return !0;
				if("false" === r)return !1;
				var f = Number(n);
				if("" != n && !isNaN(f))return 0 !== f
			}
			if(o(n))return i.deepMap(n, u);
			throw new SyntaxError(n.toString() + " is no valid boolean")
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = o.isCollection, s = n.number.isNumber, u = n.number.toNumber, f = n.string.isString, c = i.isComplex;
		e.complex = function l() {
			switch(arguments.length) {
				case 0:
					return new i(0, 0);
				case 1:
					var n = arguments[0];
					if(s(n))return new i(n, 0);
					if(n instanceof t)return new i(u(n), 0);
					if(c(n))return n.clone();
					if(f(n)) {
						var r = i.parse(n);
						if(r)return r;
						throw new SyntaxError('String "' + n + '" is no valid complex number')
					}
					if(a(n))return o.deepMap(n, l);
					throw new TypeError("Two numbers or a single string expected in function complex");
				case 2:
					var m = arguments[0], p = arguments[1];
					if(m instanceof t && (m = u(m)), p instanceof t && (p = u(p)), s(m) && s(p))return new i(m, p);
					throw new TypeError("Two numbers or a single string expected in function complex");
				default:
					throw new e.error.ArgumentsError("complex", arguments.length, 0, 2)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(9), o = n.number.toNumber;
		e.index = function() {
			var e = new i, n = Array.prototype.slice.apply(arguments).map(function(e) {
				return e instanceof t ? o(e) : Array.isArray(e) ? e.map(function(e) {
					return e instanceof t ? o(e) : e
				}) : e
			});
			return i.apply(e, n), e
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(10);
		e.matrix = function(r) {
			if(arguments.length > 1)throw new e.error.ArgumentsError("matrix", arguments.length, 0, 1);
			return new n(r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = i.isCollection, a = n.number.toNumber, s = n.number.isNumber, u = n["boolean"].isBoolean, f = n.string.isString;
		e.number = function c(n) {
			switch(arguments.length) {
				case 0:
					return 0;
				case 1:
					if(o(n))return i.deepMap(n, c);
					if(n instanceof t)return a(n);
					if(f(n)) {
						var r = Number(n);
						if(isNaN(r) && (r = Number(n.valueOf())), isNaN(r))throw new SyntaxError(n.toString() + " is no valid number");
						return r
					}
					if(u(n))return n + 0;
					if(s(n))return n;
					throw new e.error.UnsupportedTypeError("number", n);
				default:
					throw new e.error.ArgumentsError("number", arguments.length, 0, 1)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(5);
		e.parser = function() {
			return new n(e)
		}
	}
}, function(e) {
	e.exports = function(e) {
		e.select = function(n) {
			return new e.chaining.Selector(n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(13), i = n.number, o = n.number.isNumber, a = t.isCollection;
		e.string = function s(n) {
			switch(arguments.length) {
				case 0:
					return "";
				case 1:
					return o(n) ? i.format(n) : a(n) ? t.deepMap(n, s) : null === n ? "null" : n.toString();
				default:
					throw new e.error.ArgumentsError("string", arguments.length, 0, 1)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(11), o = r(13), a = o.isCollection, s = n.number.toNumber, u = n.string.isString;
		e.unit = function f(n) {
			switch(arguments.length) {
				case 1:
					var r = arguments[0];
					if(r instanceof i)return r.clone();
					if(u(r)) {
						if(i.isPlainUnit(r))return new i(null, r);
						var c = i.parse(r);
						if(c)return c;
						throw new SyntaxError('String "' + r + '" is no valid unit')
					}
					if(a(n))return o.deepMap(n, f);
					throw new TypeError("A string or a number and string expected in function unit");
				case 2:
					return arguments[0]instanceof t ? new i(s(arguments[0]), arguments[1]) : new i(arguments[0], arguments[1]);
				default:
					throw new e.error.ArgumentsError("unit", arguments.length, 1, 2)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, r, t, i) {
			if(t > i) {
				if(e.length != r.length)throw new Error("Dimensions mismatch (" + e.length + " != " + r.length + ")");
				for(var o = [], a = 0; a < e.length; a++)o[a] = n(e[a], r[a], t, i + 1);
				return o
			}
			return e.concat(r)
		}

		var t = r(117), i = r(10), o = r(13), a = t.object, s = t.array, u = t.number.isNumber, f = t.number.isInteger, c = o.isCollection;
		e.concat = function() {
			var r, t, o = arguments.length, l = -1, m = !1, p = [];
			for(r = 0; o > r; r++) {
				var h = arguments[r];
				if(h instanceof i && (m = !0), r == o - 1 && u(h)) {
					if(t = l, l = h, !f(l) || 0 > l)throw new TypeError("Dimension number must be a positive integer (dim = " + l + ")");
					if(r > 0 && l > t)throw new RangeError("Dimension out of range (" + l + " > " + t + ")")
				}
				else {
					if(!c(h))throw new e.error.UnsupportedTypeError("concat", h);
					var g = a.clone(h).valueOf(), d = s.size(h.valueOf());
					if(p[r] = g, t = l, l = d.length - 1, r > 0 && l != t)throw new RangeError("Dimension mismatch (" + t + " != " + l + ")")
				}
			}
			if(0 == p.length)throw new SyntaxError("At least one matrix expected");
			for(var x = p.shift(); p.length;)x = n(x, p.shift(), l, 0);
			return m ? new i(x) : x
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r, t) {
			if(1 == r)return n[0][0];
			if(2 == r)return e.subtract(e.multiply(n[0][0], n[1][1]), e.multiply(n[1][0], n[0][1]));
			for(var i = 1, a = 0, s = 0; r > s && !(a >= t); s++) {
				for(var u = s; 0 == n[u][a];)if(u++, u == r && (u = s, a++, a == t))return o.deepEqual(n, e.eye(r).valueOf()) ? e.round(i, 6) : 0;
				if(u != s) {
					for(var f = 0; t > f; f++) {
						var c = n[u][f];
						n[u][f] = n[s][f], n[s][f] = c
					}
					i *= -1
				}
				for(var l = n[s][a], f = 0; t > f; f++)n[s][f] = n[s][f] / l;
				i *= l;
				for(var m = 0; r > m; m++)if(m != s)for(var p = n[m][a], f = 0; t > f; f++)n[m][f] = n[m][f] - n[s][f] * p;
				a++
			}
			return o.deepEqual(n, e.eye(r).valueOf()) ? e.round(i, 6) : 0
		}

		var t = r(117), i = r(10), o = t.object, a = (t.array, t.string);
		e.det = function(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("det", arguments.length, 1);
			if(!(r instanceof i)) {
				if(!(r instanceof Array))throw new TypeError("Determinant is only defined for Matrix or Array.");
				r = new i(r)
			}
			var t = r.size();
			switch(t.length) {
				case 0:
					return o.clone(r);
				case 1:
					if(1 == t[0])return o.clone(r.valueOf()[0]);
					throw new RangeError("Matrix must be square (size: " + a.format(t) + ")");
				case 2:
					var s = t[0], u = t[1];
					if(s == u)return n(r.clone().valueOf(), s, u);
					throw new RangeError("Matrix must be square (size: " + a.format(t) + ")");
				default:
					throw new RangeError("Matrix must be two dimensional (size: " + a.format(t) + ")")
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(117), i = r(10), o = (r(13), t.object), a = t.array.isArray, s = t.number.isNumber, u = t.number.isInteger;
		e.diag = function(r, t) {
			var f, c, l, m;
			if(1 != arguments.length && 2 != arguments.length)throw new e.error.ArgumentsError("diag", arguments.length, 1, 2);
			if(t) {
				if(!s(t) || !u(t))throw new TypeError("Second parameter in function diag must be an integer")
			}
			else t = 0;
			var p = t > 0 ? t : 0, h = 0 > t ? -t : 0;
			if(r instanceof i);
			else {
				if(!a(r))throw new TypeError("First parameter in function diag must be a Matrix or Array");
				r = new i(r)
			}
			var g = r.size();
			switch(g.length) {
				case 1:
					c = r.valueOf();
					var d = new i, x = 0;
					for(d.resize([c.length + h, c.length + p], x), f = d.valueOf(), m = c.length, l = 0; m > l; l++)f[l + h][l + p] = o.clone(c[l]);
					return "array" === n.matrix ? d.valueOf() : d;
				case 2:
					for(c = [], f = r.valueOf(), m = Math.min(g[0] - h, g[1] - p), l = 0; m > l; l++)c[l] = o.clone(f[l + h][l + p]);
					return "array" === n.matrix ? c : new i(c);
				default:
					throw new RangeError("Matrix for function diag must be 2 dimensional")
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(117), i = r(220), o = r(10), a = r(13), s = t.number.toNumber, u = t.number.isNumber, f = t.number.isInteger, c = Array.isArray;
		e.eye = function(r) {
			var t = a.argsToArray(arguments), l = r instanceof o ? !0 : c(r) ? !1 : "matrix" === n.matrix;
			if(0 == t.length)return l ? new o : [];
			if(1 == t.length)t[1] = t[0];
			else if(t.length > 2)throw new e.error.ArgumentsError("eye", t.length, 0, 2);
			var m = t[0]instanceof i, p = t[0], h = t[1];
			if(p instanceof i && (p = s(p)), h instanceof i && (h = s(h)), !u(p) || !f(p) || 1 > p)throw new Error("Parameters in function eye must be positive integers");
			if(h && (!u(h) || !f(h) || 1 > h))throw new Error("Parameters in function eye must be positive integers");
			var g = new o, d = m ? new i(1) : 1, x = m ? new i(0) : 0;
			g.resize(t.map(s), x);
			for(var v = e.min(t), w = g.valueOf(), b = 0; v > b; b++)w[b][b] = d;
			return l ? g : g.valueOf()
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r, t) {
			var i, o, a, s, u;
			if(1 == r) {
				if(s = n[0][0], 0 == s)throw Error("Cannot calculate inverse, determinant is zero");
				return [[e.divide(1, s)]]
			}
			if(2 == r) {
				var f = e.det(n);
				if(0 == f)throw Error("Cannot calculate inverse, determinant is zero");
				return [[e.divide(n[1][1], f), e.divide(e.unary(n[0][1]), f)], [e.divide(e.unary(n[1][0]), f), e.divide(n[0][0], f)]]
			}
			var c = n.concat();
			for(i = 0; r > i; i++)c[i] = c[i].concat();
			for(var l = e.eye(r).valueOf(), m = 0; t > m; m++) {
				for(i = m; r > i && 0 == c[i][m];)i++;
				if(i == r || 0 == c[i][m])throw Error("Cannot calculate inverse, determinant is zero");
				i != m && (u = c[m], c[m] = c[i], c[i] = u, u = l[m], l[m] = l[i], l[i] = u);
				var p = c[m], h = l[m];
				for(i = 0; r > i; i++) {
					var g = c[i], d = l[i];
					if(i != m) {
						if(0 != g[m]) {
							for(a = e.divide(e.unary(g[m]), p[m]), o = m; t > o; o++)g[o] = e.add(g[o], e.multiply(a, p[o]));
							for(o = 0; t > o; o++)d[o] = e.add(d[o], e.multiply(a, h[o]))
						}
					}
					else {
						for(a = p[m], o = m; t > o; o++)g[o] = e.divide(g[o], a);
						for(o = 0; t > o; o++)d[o] = e.divide(d[o], a)
					}
				}
			}
			return l
		}

		{
			var t = r(218), i = r(10);
			r(13)
		}
		e.inv = function(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("inv", arguments.length, 1);
			var o = e.size(r).valueOf();
			switch(o.length) {
				case 0:
					return e.divide(1, r);
				case 1:
					if(1 == o[0])return r instanceof i ? new i([e.divide(1, r.valueOf()[0])]) : [e.divide(1, r[0])];
					throw new RangeError("Matrix must be square (size: " + t.format(o) + ")");
				case 2:
					var a = o[0], s = o[1];
					if(a == s)return r instanceof i ? new i(n(r.valueOf(), a, s)) : n(r, a, s);
					throw new RangeError("Matrix must be square (size: " + t.format(o) + ")");
				default:
					throw new RangeError("Matrix must be two dimensional (size: " + t.format(o) + ")")
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(117), i = r(220), o = r(10), a = r(13), s = t.array, u = t.number.toNumber, f = Array.isArray;
		e.ones = function(e) {
			var r = a.argsToArray(arguments), t = e instanceof o ? !0 : f(e) ? !1 : "matrix" === n.matrix;
			if(0 == r.length)return t ? new o : [];
			var c = [], l = r[0]instanceof i ? new i(1) : 1;
			return c = s.resize(c, r.map(u), l), t ? new o(c) : c
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		function t(e, n, r) {
			var t = [], i = e;
			if(r > 0)for(; n > i;)t.push(i), i += r;
			else if(0 > r)for(; i > n;)t.push(i), i += r;
			return t
		}

		function i(e, n, r) {
			var t = [], i = e;
			if(r > 0)for(; n >= i;)t.push(i), i += r;
			else if(0 > r)for(; i >= n;)t.push(i), i += r;
			return t
		}

		function o(e, n, r) {
			var t = [], i = e.clone(), o = new f(0);
			if(r.gt(o))for(; i.lt(n);)t.push(i), i = i.plus(r);
			else if(r.lt(o))for(; i.gt(n);)t.push(i), i = i.plus(r);
			return t
		}

		function a(e, n, r) {
			var t = [], i = e.clone(), o = new f(0);
			if(r.gt(o))for(; i.lte(n);)t.push(i), i = i.plus(r);
			else if(r.lt(o))for(; i.gte(n);)t.push(i), i = i.plus(r);
			return t
		}

		function s(e) {
			var r = e.split(":"), t = null;
			if("bignumber" === n.number)try {
				t = r.map(function(e) {
					return new f(e)
				})
			} catch(i) {
				return null
			}
			else {
				t = r.map(function(e) {
					return parseFloat(e)
				});
				var o = t.some(function(e) {
					return isNaN(e)
				});
				if(o)return null
			}
			switch(t.length) {
				case 2:
					return {start: t[0], end: t[1], step: 1};
				case 3:
					return {start: t[0], end: t[2], step: t[1]};
				default:
					return null
			}
		}

		var u = r(117), f = r(220), c = r(10), l = (r(13), u["boolean"].isBoolean), m = u.string.isString, p = u.number.isNumber, h = u.number.toNumber, g = u.number.toBigNumber;
		e.range = function() {
			var r, u, d, x = Array.prototype.slice.call(arguments), v = !1;
			switch(l(x[x.length - 1]) && (v = x.pop() ? !0 : !1), x.length) {
				case 1:
					if(!m(x[0]))throw new TypeError("Two or three numbers or a single string expected in function range");
					var w = s(x[0]);
					if(!w)throw new SyntaxError('String "' + w + '" is no valid range');
					r = w.start, u = w.end, d = w.step;
					break;
				case 2:
					r = x[0], u = x[1], d = 1;
					break;
				case 3:
					r = x[0], u = x[1], d = x[2];
					break;
				default:
					throw new e.error.ArgumentsError("range", arguments.length, 2, 4)
			}
			if(!(p(r) || r instanceof f))throw new TypeError("Parameter start must be a number");
			if(!(p(u) || u instanceof f))throw new TypeError("Parameter end must be a number");
			if(!(p(d) || d instanceof f))throw new TypeError("Parameter step must be a number");
			if(!l(v))throw new TypeError("Parameter includeEnd must be a boolean");
			if(r instanceof f || u instanceof f || d instanceof f) {
				var b = !0;
				r instanceof f || (r = g(r)), u instanceof f || (u = g(u)), d instanceof f || (d = g(d)), r instanceof f && u instanceof f && d instanceof f || (b = !1, r = h(r), u = h(u), d = h(d))
			}
			var y = b ? v ? a : o : v ? i : t, E = y(r, u, d);
			return "array" === n.matrix ? E : new c(E)
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		function t(e, n, r) {
			if(void 0 !== r) {
				if(!f(r) || 1 !== r.length)throw new TypeError("Single character expected as defaultValue")
			}
			else r = " ";
			if(1 !== n.length)throw new Error("Dimension mismatch: (" + n.length + " != 1)");
			var t = n[0];
			if(!l(t) || !m(t))throw new TypeError("Size must contain numbers");
			if(e.length > t)return e.substring(0, t);
			if(e.length < t) {
				for(var i = e, o = 0, a = t - e.length; a > o; o++)i += r;
				return i
			}
			return e
		}

		var i = r(117), o = r(220), a = r(10), s = i.array, u = i.object.clone, f = i.string.isString, c = i.number.toNumber, l = i.number.isNumber, m = i.number.isInteger, p = s.isArray;
		e.resize = function(r, i, l) {
			if(2 != arguments.length && 3 != arguments.length)throw new e.error.ArgumentsError("resize", arguments.length, 2, 3);
			var m = r instanceof a ? !0 : p(r) ? !1 : "array" !== n.matrix;
			if(r instanceof a && (r = r.valueOf()), i instanceof a && (i = i.valueOf()), i.length && i[0]instanceof o && (i = i.map(c)), f(r))return t(r, i, l);
			if(0 == i.length) {
				for(; p(r);)r = r[0];
				return u(r)
			}
			p(r) || (r = [r]), r = u(r);
			var h = s.resize(r, i, l);
			return m ? new a(h) : h
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(117), i = r(220), o = r(7), a = r(11), s = r(10), u = t.array, f = t.number.isNumber, c = t["boolean"].isBoolean, l = t.string.isString, m = o.isComplex, p = a.isUnit;
		e.size = function(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("size", arguments.length, 1);
			var t = "array" === n.matrix;
			if(f(r) || m(r) || p(r) || c(r) || null == r || r instanceof i)return t ? [] : new s([]);
			if(l(r))return t ? [r.length] : new s([r.length]);
			if(Array.isArray(r))return u.size(r);
			if(r instanceof s)return new s(r.size());
			throw new e.error.UnsupportedTypeError("size", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(10), i = n.object, o = n.array, a = Array.isArray;
		e.squeeze = function(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("squeeze", arguments.length, 1);
			if(a(n))return o.squeeze(i.clone(n));
			if(n instanceof t) {
				var r = o.squeeze(n.toArray());
				return a(r) ? new t(r) : r
			}
			return i.clone(n)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			var i, o;
			if(l(n))return i = new s(n), o = i.subset(r), o.valueOf();
			if(n instanceof s)return n.subset(r);
			if(c(n))return t(n, r);
			throw new e.error.UnsupportedTypeError("subset", n)
		}

		function t(e, n) {
			if(!(n instanceof u))throw new TypeError("Index expected");
			if(1 != n.size().length)throw new RangeError("Dimension mismatch (" + n.size().length + " != 1)");
			var r = n.range(0), t = "", i = e.length;
			return r.forEach(function(n) {
				f.validateIndex(n, i), t += e.charAt(n)
			}), t
		}

		function i(n, r, t, i) {
			var a;
			if(l(n))return a = new s(e.clone(n)), a.subset(r, t, i), a.valueOf();
			if(n instanceof s)return n.clone().subset(r, t, i);
			if(c(n))return o(n, r, t, i);
			throw new e.error.UnsupportedTypeError("subset", n)
		}

		function o(e, n, r, t) {
			if(!(n instanceof u))throw new TypeError("Index expected");
			if(1 != n.size().length)throw new RangeError("Dimension mismatch (" + n.size().length + " != 1)");
			if(void 0 !== t) {
				if(!c(t) || 1 !== t.length)throw new TypeError("Single character expected as defaultValue")
			}
			else t = " ";
			var i = n.range(0), o = i.size()[0];
			if(o != r.length)throw new RangeError("Dimension mismatch (" + i.size()[0] + " != " + r.length + ")");
			for(var a = e.length, s = [], l = 0; a > l; l++)s[l] = e.charAt(l);
			if(i.forEach(function(e, n) {
					f.validateIndex(e), s[e] = r.charAt(n)
				}), s.length > a)for(l = a - 1, o = s.length; o > l; l++)s[l] || (s[l] = t);
			return s.join("")
		}

		var a = r(117), s = r(10), u = r(9), f = a.array, c = a.string.isString, l = Array.isArray;
		e.subset = function() {
			switch(arguments.length) {
				case 2:
					return n(arguments[0], arguments[1]);
				case 3:
				case 4:
					return i(arguments[0], arguments[1], arguments[2], arguments[3]);
				default:
					throw new e.error.ArgumentsError("subset", arguments.length, 2, 4)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(10), i = (r(13), n.object), o = n.string;
		e.transpose = function(n) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("transpose", arguments.length, 1);
			var r = e.size(n).valueOf();
			switch(r.length) {
				case 0:
					return i.clone(n);
				case 1:
					return i.clone(n);
				case 2:
					var a, s = r[1], u = r[0], f = n instanceof t, c = n.valueOf(), l = [], m = i.clone;
					if(0 === s)throw new RangeError("Cannot transpose a 2D matrix with no rows(size: " + o.format(r) + ")");
					for(var p = 0; s > p; p++) {
						a = l[p] = [];
						for(var h = 0; u > h; h++)a[h] = m(c[h][p])
					}
					return 0 == u && (l[0] = []), f ? new t(l) : l;
				default:
					throw new RangeError("Matrix must be two dimensional (size: " + o.format(r) + ")")
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(117), i = r(220), o = r(10), a = r(13), s = t.array, u = t.number.toNumber, f = Array.isArray;
		e.zeros = function(e) {
			var r = a.argsToArray(arguments), t = e instanceof o ? !0 : f(e) ? !1 : "matrix" === n.matrix;
			if(0 == r.length)return t ? new o : [];
			var c = [], l = r[0]instanceof i ? new i(0) : 0;
			return c = s.resize(c, r.map(u), l), t ? new o(c) : c
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(13), o = n.number.isNumber, a = n["boolean"].isBoolean, s = n.number.isInteger, u = i.isCollection;
		e.factorial = function c(n) {
			var r, l;
			if(1 != arguments.length)throw new e.error.ArgumentsError("factorial", arguments.length, 1);
			if(o(n)) {
				if(!s(n) || 0 > n)throw new TypeError("Positive integer value expected in function factorial");
				for(r = n - 1, l = n; r > 1;)l *= r, r--;
				return 0 == l && (l = 1), l
			}
			if(n instanceof t) {
				if(!f(n))throw new TypeError("Positive integer value expected in function factorial");
				var m = new t(1);
				for(r = n.minus(m), l = n; r.gt(m);)l = l.times(r), r = r.minus(m);
				return l.equals(0) && (l = m), l
			}
			if(a(n))return 1;
			if(u(n))return i.deepMap(n, c);
			throw new e.error.UnsupportedTypeError("factorial", n)
		};
		var f = function(e) {
			return e.round().equals(e) && e.gte(0)
		}
	}
}, function(e, n, r) {
	e.exports = function(e, n) {
		var t = r(10), i = (r(13), {
			uniform: function() {
				return Math.random
			}, normal: function() {
				return function() {
					for(var e, n, r = -1; 0 > r || r > 1;)e = Math.random(), n = Math.random(), r = 1 / 6 * Math.pow(-2 * Math.log(e), .5) * Math.cos(2 * Math.PI * n) + .5;
					return r
				}
			}
		});
		e.distribution = function(r) {
			if(!i.hasOwnProperty(r))throw new Error("unknown distribution " + r);
			var o = Array.prototype.slice.call(arguments, 1), a = i[r].apply(this, o);
			return function(r) {
				var i = {
					random: function(r, i, a) {
						var u, f, c;
						if(arguments.length > 3)throw new e.error.ArgumentsError("random", arguments.length, 0, 3);
						if(1 === arguments.length ? Array.isArray(r) ? u = r : c = r : 2 === arguments.length ? Array.isArray(r) ? u = r : (f = r, c = i) : (u = r, f = i, c = a), void 0 === c && (c = 1), void 0 === f && (f = 0), void 0 !== u) {
							var l = s(u, f, c, o);
							return "array" === n.matrix ? l : new t(l)
						}
						return o(f, c)
					}, randomInt: function(r, i, o) {
						var u, f, c;
						if(arguments.length > 3 || arguments.length < 1)throw new e.error.ArgumentsError("randomInt", arguments.length, 1, 3);
						if(1 === arguments.length ? c = r : 2 === arguments.length ? "[object Array]" === Object.prototype.toString.call(r) ? u = r : (f = r, c = i) : (u = r, f = i, c = o), void 0 === f && (f = 0), void 0 !== u) {
							var l = s(u, f, c, a);
							return "array" === n.matrix ? l : new t(l)
						}
						return a(f, c)
					}, pickRandom: function(n) {
						if(1 !== arguments.length)throw new e.error.ArgumentsError("pickRandom", arguments.length, 1);
						if(!Array.isArray(n))throw new e.error.UnsupportedTypeError("pickRandom", n);
						return n[Math.floor(Math.random() * n.length)]
					}
				}, o = function(e, n) {
					return e + r() * (n - e)
				}, a = function(e, n) {
					return Math.floor(e + r() * (n - e))
				}, s = function(e, n, r, t) {
					var i, o, a = [];
					if(e = e.slice(0), e.length > 1)for(o = 0, i = e.shift(); i > o; o++)a.push(s(e, n, r, t));
					else for(o = 0, i = e.shift(); i > o; o++)a.push(t(n, r));
					return a
				};
				return i
			}(a)
		};
		var o = e.distribution("uniform");
		e.random = o.random, e.randomInt = o.randomInt, e.pickRandom = o.pickRandom
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = n.number.isNumber, o = n.number.isInteger, a = n.number.toBigNumber;
		e.permutations = function(n, r) {
			var u, f, c = arguments.length;
			if(c > 2)throw new e.error.ArgumentsError("permutations", arguments.length, 2);
			if(i(n)) {
				if(!o(n) || 0 > n)throw new TypeError("Positive integer value expected in function permutations");
				if(1 == c)return e.factorial(n);
				if(2 == c && i(r)) {
					if(!o(r) || 0 > r)throw new TypeError("Positive integer value expected in function permutations");
					if(r > n)throw new TypeError("second argument k must be less than or equal to first argument n");
					for(u = 1, f = n - r + 1; n >= f; f++)u *= f;
					return u
				}
			}
			if(n instanceof t) {
				if(void 0 === r && s(n))return e.factorial(n);
				if(r = a(r), !(r instanceof t && s(n) && s(r)))throw new TypeError("Positive integer value expected in function permutations");
				if(r.gt(n))throw new TypeError("second argument k must be less than or equal to first argument n");
				for(u = new t(1), f = n.minus(r).plus(1); f.lte(n); f = f.plus(1))u = u.times(f);
				return u
			}
			throw new e.error.UnsupportedTypeError("permutations", n)
		};
		var s = function(e) {
			return e.round().equals(e) && e.gte(0)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = (r(13), n.number.isNumber), o = n.number.isInteger, a = n.number.toBigNumber;
		e.combinations = function(n, r) {
			var u, f, c, l, m = arguments.length;
			if(2 != m)throw new e.error.ArgumentsError("combinations", arguments.length, 2);
			if(i(n)) {
				if(!o(n) || 0 > n)throw new TypeError("Positive integer value enpected in function combinations");
				if(r > n)throw new TypeError("k must be less than or equal to n");
				for(u = Math.max(r, n - r), f = 1, c = 1; n - u >= c; c++)f = f * (u + c) / c;
				return f
			}
			if(n instanceof t) {
				if(r = a(r), !(r instanceof t && s(n) && s(r)))throw new TypeError("Positive integer value expected in function combinations");
				if(r.gt(n))throw new TypeError("k must be less than n in function combinations");
				for(u = n.minus(r), r.lt(u) && (u = r), f = new t(1), c = new t(1), l = n.minus(u); c.lte(l); c = c.plus(1))f = f.times(u.plus(c)).dividedBy(c);
				return f
			}
			throw new e.error.UnsupportedTypeError("combinations", n)
		};
		var s = function(e) {
			return e.round().equals(e) && e.gte(0)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			return e.smaller(n, r) ? n : r
		}

		function t(n) {
			var r = null;
			if(i.deepForEach(n, function(n) {
					(null === r || e.smaller(n, r)) && (r = n)
				}), null === r)throw new Error("Cannot calculate min of an empty array");
			return r
		}

		var i = (r(10), r(13)), o = i.isCollection;
		e.min = function(e) {
			if(0 == arguments.length)throw new SyntaxError("Function min requires one or more parameters (0 provided)");
			if(o(e)) {
				if(1 == arguments.length)return t(e);
				if(2 == arguments.length)return i.reduce(arguments[0], arguments[1], n);
				throw new SyntaxError("Wrong number of parameters")
			}
			return t(arguments)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			return e.larger(n, r) ? n : r
		}

		function t(n) {
			var r = null;
			if(i.deepForEach(n, function(n) {
					(null === r || e.larger(n, r)) && (r = n)
				}), null === r)throw new Error("Cannot calculate max of an empty array");
			return r
		}

		var i = (r(10), r(13)), o = i.isCollection;
		e.max = function(e) {
			if(0 == arguments.length)throw new SyntaxError("Function max requires one or more parameters (0 provided)");
			if(o(e)) {
				if(1 == arguments.length)return t(e);
				if(2 == arguments.length)return i.reduce(arguments[0], arguments[1], n);
				throw new SyntaxError("Wrong number of parameters")
			}
			return t(arguments)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r) {
			var t;
			return t = i.reduce(n, r, e.add), e.divide(t, size(n)[r])
		}

		function t(n) {
			var r = 0, t = 0;
			if(i.deepForEach(n, function(n) {
					r = e.add(r, n), t++
				}), 0 === t)throw new Error("Cannot calculate mean of an empty array");
			return e.divide(r, t)
		}

		var i = (r(10), r(13)), o = i.isCollection;
		e.mean = function(e) {
			if(0 == arguments.length)throw new SyntaxError("Function mean requires one or more parameters (0 provided)");
			if(o(e)) {
				if(1 == arguments.length)return t(e);
				if(2 == arguments.length)return n(arguments[0], arguments[1]);
				throw new SyntaxError("Wrong number of parameters")
			}
			return t(arguments)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.acos = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("acos", arguments.length, 1);
			if(a(r))return r >= -1 && 1 >= r ? Math.acos(r) : c(new i(r, 0));
			if(u(r)) {
				var l, m = new i(r.im * r.im - r.re * r.re + 1, -2 * r.re * r.im), p = e.sqrt(m);
				l = p instanceof i ? new i(p.re - r.im, p.im + r.re) : new i(p - r.im, r.re);
				var h = e.log(l);
				return h instanceof i ? new i(1.5707963267948966 - h.im, h.re) : new i(1.5707963267948966, h)
			}
			if(f(r))return o.deepMap(r, c);
			if(s(r))return Math.acos(r);
			if(r instanceof t)return c(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("acos", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.asin = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("asin", arguments.length, 1);
			if(a(r))return r >= -1 && 1 >= r ? Math.asin(r) : c(new i(r, 0));
			if(u(r)) {
				var l, m = r.re, p = r.im, h = new i(p * p - m * m + 1, -2 * m * p), g = e.sqrt(h);
				l = g instanceof i ? new i(g.re - p, g.im + m) : new i(g - p, m);
				var d = e.log(l);
				return d instanceof i ? new i(d.im, -d.re) : new i(0, -d)
			}
			if(f(r))return o.deepMap(r, c);
			if(s(r))return Math.asin(r);
			if(r instanceof t)return c(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("asin", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.isNumber, s = n["boolean"].isBoolean, u = i.isComplex, f = o.isCollection;
		e.atan = function c(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("atan", arguments.length, 1);
			if(a(r))return Math.atan(r);
			if(u(r)) {
				var l = r.re, m = r.im, p = l * l + (1 - m) * (1 - m), h = new i((1 - m * m - l * l) / p, -2 * l / p), g = e.log(h);
				return g instanceof i ? new i(-.5 * g.im, .5 * g.re) : new i(0, .5 * g)
			}
			if(f(r))return o.deepMap(r, c);
			if(s(r))return Math.atan(r);
			if(r instanceof t)return c(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("atan", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(13), a = n.number.toNumber, s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isCollection;
		e.atan2 = function l(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("atan2", arguments.length, 2);
			if(s(n)) {
				if(s(r))return Math.atan2(n, r)
			}
			else if(f(n) && s(r))return Math.atan2(n.re, r);
			if(c(n) || c(r))return o.deepMap2(n, r, l);
			if(u(n))return l(+n, r);
			if(u(r))return l(n, +r);
			if(n instanceof t)return l(a(n), r);
			if(r instanceof t)return l(n, a(r));
			throw new e.error.UnsupportedTypeError("atan2", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.cos = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("cos", arguments.length, 1);
			if(s(r))return Math.cos(r);
			if(f(r))return new i(.5 * Math.cos(r.re) * (Math.exp(-r.im) + Math.exp(r.im)), .5 * Math.sin(r.re) * (Math.exp(-r.im) - Math.exp(r.im)));
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function cos is no angle");
				return Math.cos(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return Math.cos(r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("cos", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.cot = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("cot", arguments.length, 1);
			if(s(r))return 1 / Math.tan(r);
			if(f(r)) {
				var p = Math.exp(-4 * r.im) - 2 * Math.exp(-2 * r.im) * Math.cos(2 * r.re) + 1;
				return new i(2 * Math.exp(-2 * r.im) * Math.sin(2 * r.re) / p, (Math.exp(-4 * r.im) - 1) / p)
			}
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function cot is no angle");
				return 1 / Math.tan(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return m(+r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("cot", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.csc = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("csc", arguments.length, 1);
			if(s(r))return 1 / Math.sin(r);
			if(f(r)) {
				var p = .25 * (Math.exp(-2 * r.im) + Math.exp(2 * r.im)) - .5 * Math.cos(2 * r.re);
				return new i(.5 * Math.sin(r.re) * (Math.exp(-r.im) + Math.exp(r.im)) / p, .5 * Math.cos(r.re) * (Math.exp(-r.im) - Math.exp(r.im)) / p)
			}
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function csc is no angle");
				return 1 / Math.sin(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return m(+r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("csc", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.sec = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("sec", arguments.length, 1);
			if(s(r))return 1 / Math.cos(r);
			if(f(r)) {
				var p = .25 * (Math.exp(-2 * r.im) + Math.exp(2 * r.im)) + .5 * Math.cos(2 * r.re);
				return new i(.5 * Math.cos(r.re) * (Math.exp(-r.im) + Math.exp(r.im)) / p, .5 * Math.sin(r.re) * (Math.exp(r.im) - Math.exp(-r.im)) / p)
			}
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function sec is no angle");
				return 1 / Math.cos(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return m(+r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("sec", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.sin = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("sin", arguments.length, 1);
			if(s(r))return Math.sin(r);
			if(f(r))return new i(.5 * Math.sin(r.re) * (Math.exp(-r.im) + Math.exp(r.im)), .5 * Math.cos(r.re) * (Math.exp(r.im) - Math.exp(-r.im)));
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function sin is no angle");
				return Math.sin(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return Math.sin(r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("sin", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(220), i = r(7), o = r(11), a = r(13), s = n.number.isNumber, u = n["boolean"].isBoolean, f = i.isComplex, c = o.isUnit, l = a.isCollection;
		e.tan = function m(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("tan", arguments.length, 1);
			if(s(r))return Math.tan(r);
			if(f(r)) {
				var p = Math.exp(-4 * r.im) + 2 * Math.exp(-2 * r.im) * Math.cos(2 * r.re) + 1;
				return new i(2 * Math.exp(-2 * r.im) * Math.sin(2 * r.re) / p, (1 - Math.exp(-4 * r.im)) / p)
			}
			if(c(r)) {
				if(!r.hasBase(o.BASE_UNITS.ANGLE))throw new TypeError("Unit in function tan is no angle");
				return Math.tan(r.value)
			}
			if(l(r))return a.deepMap(r, m);
			if(u(r))return Math.tan(r);
			if(r instanceof t)return m(n.number.toNumber(r));
			throw new e.error.UnsupportedTypeError("tan", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(117), t = r(11), i = r(13), o = n.string.isString, a = t.isUnit, s = i.isCollection;
		e.to = function u(n, r) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("to", arguments.length, 2);
			if(a(n) && (a(r) || o(r)))return n.to(r);
			if(s(n) || s(r))return i.deepMap2(n, r, u);
			throw new e.error.UnsupportedTypeError("to", n, r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(2);
		e.clone = function(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("clone", arguments.length, 1);
			return n.clone(r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(218);
		e.format = function(r, t) {
			var i = arguments.length;
			if(1 !== i && 2 !== i)throw new e.error.ArgumentsError("format", i, 1, 2);
			return n.format(r, t)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(n, r, t) {
			(t.override || void 0 === e[n]) && (e[n] = t.wrap && "function" == typeof r ? function() {
				for(var n = [], t = 0, i = arguments.length; i > t; t++)n[t] = arguments[t].valueOf();
				return r.apply(e, n)
			} : r, e.chaining.Selector.createProxy(n, r))
		}

		function t(e) {
			return "function" == typeof e || s(e) || u(e) || f(e) || c(e)
		}

		var i = r(117), o = r(7), a = r(11), s = i.number.isNumber, u = i.string.isString, f = o.isComplex, c = a.isUnit;
		e["import"] = function l(o, a) {
			var s, f = {override: !1, wrap: !0};
			if(a && a instanceof Object && i.object.extend(f, a), u(o)) {
				var c = r(219)(o);
				l(c)
			}
			else if(t(o)) {
				if(s = o.name, !s)throw new Error("Cannot import an unnamed function or object");
				(f.override || void 0 === e[s]) && n(s, o, f)
			}
			else if(o instanceof Object)for(s in o)if(o.hasOwnProperty(s)) {
				var m = o[s];
				t(m) ? n(s, m, f) : l(m)
			}
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			var r = [], t = function(i, o) {
				return Array.isArray(i) ? i.map(function(e, n) {
					return r[o] = n, t(e, o + 1)
				}) : n(i, r, e)
			};
			return t(e, 0)
		}

		var t = r(10).isMatrix;
		e.map = function(r, i) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("map", arguments.length, 2);
			if(Array.isArray(r))return n(r, i);
			if(t(r))return r.map(i);
			throw new e.error.UnsupportedTypeError("map", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(218), t = n.isString;
		e.print = function(n, r, i) {
			var o = arguments.length;
			if(2 != o && 3 != o)throw new e.error.ArgumentsError("print", o, 2, 3);
			if(!t(n))throw new TypeError("String expected as first parameter in function format");
			if(!(r instanceof Object))throw new TypeError("Object expected as second parameter in function format");
			return n.replace(/\$([\w\.]+)/g, function(n, o) {
				for(var a = o.split("."), s = r[a.shift()]; a.length && void 0 !== s;) {
					var u = a.shift();
					s = u ? s[u] : s + "."
				}
				return void 0 !== s ? t(s) ? s : e.format(s, i) : n
			})
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(217), t = r(220), i = r(7), o = r(10), a = r(11), s = r(9), u = r(8), f = r(12);
		e["typeof"] = function(r) {
			if(1 != arguments.length)throw new e.error.ArgumentsError("typeof", arguments.length, 1);
			var c = n.type(r);
			if("object" === c) {
				if(r instanceof i)return "complex";
				if(r instanceof t)return "bignumber";
				if(r instanceof o)return "matrix";
				if(r instanceof a)return "unit";
				if(r instanceof s)return "index";
				if(r instanceof u)return "range";
				if(r instanceof f)return "matrix";
				if(r instanceof e.chaining.Selector)return "selector"
			}
			return c
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e, n) {
			var r = [], t = function(i, o) {
				Array.isArray(i) ? i.forEach(function(e, n) {
					r[o] = n, t(e, o + 1)
				}) : n(i, r, e)
			};
			t(e, 0)
		}

		var t = r(10).isMatrix;
		e.forEach = function(r, i) {
			if(2 != arguments.length)throw new e.error.ArgumentsError("forEach", arguments.length, 2);
			if(Array.isArray(r))return n(r, i);
			if(t(r))return r.forEach(i);
			throw new e.error.UnsupportedTypeError("forEach", r)
		}
	}
}, function(e, n, r) {
	e.exports = function(e) {
		var n = r(7);
		e.pi = Math.PI, e.e = Math.E, e.tau = 2 * Math.PI, e.i = new n(0, 1), e.Infinity = 1 / 0, e.NaN = 0 / 0, e["true"] = !0, e["false"] = !1, e.E = Math.E, e.LN2 = Math.LN2, e.LN10 = Math.LN10, e.LOG2E = Math.LOG2E, e.LOG10E = Math.LOG10E, e.PI = Math.PI, e.SQRT1_2 = Math.SQRT1_2, e.SQRT2 = Math.SQRT2
	}
}, function(e, n, r) {
	e.exports = function(e) {
		function n(e) {
			if(!(this instanceof n))throw new SyntaxError("Selector constructor must be called with the new operator");
			this.value = e instanceof n ? e.value : e
		}

		function t(e, r) {
			var t = Array.prototype.slice;
			n.prototype[e] = "function" == typeof r ? function() {
				var e = [this.value].concat(t.call(arguments, 0));
				return new n(r.apply(this, e))
			} : new n(r)
		}

		var i = r(218);
		n.prototype.done = function() {
			return this.value
		}, n.prototype.valueOf = function() {
			return this.value
		}, n.prototype.toString = function() {
			return i.format(this.value)
		}, n.createProxy = t;
		for(var o in e)e.hasOwnProperty(o) && o && t(o, e[o]);
		return n
	}
}, function(e, n, r) {
	function t(e) {
		this.nodes = e || []
	}

	{
		var i = r(110), o = (r(2), r(218));
		r(13), r(10)
	}
	t.prototype = new i, t.prototype._compile = function(e) {
		var n = "array" !== e.math.config().matrix, r = this.nodes.map(function(n) {
			return n._compile(e)
		});
		return (n ? "math.matrix([" : "[") + r.join(",") + (n ? "])" : "]")
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this);
		for(var r = this.nodes, t = 0, i = r.length; i > t; t++)for(var o = r[t], a = 0, s = o.length; s > a; a++)n = n.concat(o[a].find(e));
		return n
	}, t.prototype.toString = function() {
		return o.format(this.nodes)
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		this.name = e, this.expr = n
	}

	var i = r(110);
	t.prototype = new i, t.prototype._compile = function(e) {
		return 'scope["' + this.name + '"] = ' + this.expr._compile(e)
	}, t.prototype.find = function(e) {
		var n = [];
		return this.match(e) && n.push(this), this.expr && (n = n.concat(this.expr.find(e))), n
	}, t.prototype.toString = function() {
		return this.name + " = " + this.expr.toString()
	}, e.exports = t
}, function(e, n, r) {
	function t() {
		this.params = []
	}

	var i = r(110);
	t.prototype = new i, t.prototype.add = function(e, n) {
		var r = this.params.length;
		this.params[r] = {node: e, visible: void 0 != n ? n : !0}
	}, t.prototype._compile = function(e) {
		var n = this.params.map(function(n) {
			var r = n.node._compile(e);
			return n.visible ? "results.push(" + r + ");" : r + ";"
		});
		return "(function () {var results = [];" + n.join("") + "return results;})()"
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this);
		var r = this.params;
		if(r)for(var t = 0, i = r.length; i > t; t++)n = n.concat(r[t].node.find(e));
		return n
	}, t.prototype.toString = function() {
		return this.params.map(function(e) {
			return e.node.toString() + (e.visible ? "" : ";")
		}).join("\n")
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		if(!a(e))throw new TypeError("Constant type must be a string");
		if(!a(n))throw new TypeError("Constant value must be a string");
		this.type = e, this.value = n
	}

	var i = r(110), o = (r(7), r(220), r(218)), a = o.isString;
	t.prototype = new i, t.prototype._compile = function(e) {
		switch(this.type) {
			case"number":
				return "bignumber" === e.math.config().number ? 'math.bignumber("' + this.value + '")' : this.value.replace(/^(0*)[0-9]/, function(e, n) {
					return e.substring(n.length)
				});
			case"string":
				return '"' + this.value + '"';
			case"complex":
				return "math.complex(0, " + this.value + ")";
			case"boolean":
				return this.value;
			case"undefined":
				return this.value;
			case"null":
				return this.value;
			default:
				throw new TypeError('Unsupported type of constant "' + this.type + '"')
		}
	}, t.prototype.toString = function() {
		switch(this.type) {
			case"string":
				return '"' + this.value + '"';
			case"complex":
				return this.value + "i";
			default:
				return this.value
		}
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		this.object = e, this.ranges = n
	}

	{
		var i = r(221), o = r(110), a = r(113), s = r(114);
		r(220), r(9), r(8), i.isNumber, i.toNumber
	}
	t.prototype = new o, t.prototype._compile = function(e) {
		return this.compileSubset(e)
	}, t.prototype.compileSubset = function(e, n) {
		var r = {type: s, properties: {name: "end"}}, t = this.ranges.map(function(e) {
			return e.find(r).length > 0
		}), i = this.ranges.map(function(n, r) {
			var i = t[r];
			return n instanceof a ? i ? '(function (scope) {  scope = Object.create(scope);   scope["end"] = size[' + r + "];  var step = " + (n.step ? n.step._compile(e) : "1") + ";  return [    " + n.start._compile(e) + " - 1,     " + n.end._compile(e) + " - (step > 0 ? 0 : 2),     step  ];})(scope)" : "(function () {  var step = " + (n.step ? n.step._compile(e) : "1") + ";  return [    " + n.start._compile(e) + " - 1,     " + n.end._compile(e) + " - (step > 0 ? 0 : 2),     step  ];})()" : i ? '(function (scope) {  scope = Object.create(scope);   scope["end"] = size[' + r + "];  return " + n._compile(e) + " - 1;})(scope)" : n._compile(e) + " - 1"
		}), o = i.some(function(e) {
			return e
		});
		return o ? "(function () {  var obj = " + this.object._compile(e) + ";  var size = math.size(obj).valueOf();  return math.subset(    obj,     math.index(" + i.join(", ") + ")    " + (n ? ", " + n : "") + "  );})()" : "math.subset(" + this.object._compile(e) + ",math.index(" + i.join(", ") + (n ? ", " + n : "") + ")"
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this), this.object && (n = n.concat(this.object.find(e)));
		var r = this.ranges;
		if(r)for(var t = 0, i = r.length; i > t; t++)n = n.concat(r[t].find(e));
		return n
	}, t.prototype.objectName = function() {
		return this.object.name
	}, t.prototype.toString = function() {
		var e = this.object ? this.object.toString() : "";
		return this.ranges && (e += "[" + this.ranges.join(", ") + "]"), e
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n, r) {
		this.name = e, this.args = n, this.expr = r
	}

	var i = r(110);
	t.prototype = new i, t.prototype._eval = function() {
		return this.scope.set(this.name, this.fn), this.fn
	}, t.prototype._compile = function(e) {
		return 'scope["' + this.name + '"] =   (function (scope) {    scope = Object.create(scope);     var fn = function ' + this.name + "(" + this.args.join(",") + ") {      if (arguments.length != " + this.args.length + ') {        throw new SyntaxError("Wrong number of arguments in function ' + this.name + ' (" + arguments.length + " provided, ' + this.args.length + ' expected)");      }' + this.args.map(function(e, n) {
				return 'scope["' + e + '"] = arguments[' + n + "];"
			}).join("") + "      return " + this.expr._compile(e) + '    };    fn.syntax = "' + this.name + "(" + this.args.join(", ") + ')";    return fn;  })(scope);'
	}, t.prototype.find = function(e) {
		var n = [];
		return this.match(e) && n.push(this), this.expr && (n = n.concat(this.expr.find(e))), n
	}, t.prototype.toString = function() {
		return "function " + this.name + "(" + this.args.join(", ") + ") = " + this.expr.toString()
	}, e.exports = t
}, function(e) {
	function n() {
	}

	n.prototype.eval = function() {
		throw new Error("Node.eval is deprecated. Use Node.compile(math).eval([scope]) instead.")
	}, n.prototype.compile = function(e) {
		if("object" != typeof e)throw new TypeError("Object expected as parameter math");
		var n = {math: e}, r = this._compile(n), t = Object.keys(n).map(function(e) {
			return "    var " + e + ' = defs["' + e + '"];'
		}), i = t.join(" ") + 'return {  "eval": function (scope) {    scope = scope || {};    return ' + r + ";  }};", o = new Function("defs", i);
		return o(n)
	}, n.prototype._compile = function() {
		throw new Error("Cannot compile a Node interface")
	}, n.prototype.find = function(e) {
		return this.match(e) ? [this] : []
	}, n.prototype.match = function(e) {
		var n = !0;
		if(e && (!e.type || this instanceof e.type || (n = !1), n && e.properties))for(var r in e.properties)if(e.properties.hasOwnProperty(r) && this[r] != e.properties[r]) {
			n = !1;
			break
		}
		return n
	}, n.prototype.toString = function() {
		return ""
	}, e.exports = n
}, function(e, n, r) {
	function t(e, n, r) {
		this.op = e, this.fn = n, this.params = r
	}

	var i = r(110);
	t.prototype = new i, t.prototype._compile = function(e) {
		if(!(this.fn in e.math))throw new Error("Function " + this.fn + ' missing in provided namespace "math"');
		var n = this.params.map(function(n) {
			return n._compile(e)
		});
		return "math." + this.fn + "(" + n.join(", ") + ")"
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this);
		var r = this.params;
		if(r)for(var t = 0, i = r.length; i > t; t++)n = n.concat(r[t].find(e));
		return n
	}, t.prototype.toString = function() {
		var e = this.params;
		switch(e.length) {
			case 1:
				return "-" == this.op ? "-" + e[0].toString() : e[0].toString() + this.op;
			case 2:
				var n = e[0].toString();
				e[0]instanceof t && (n = "(" + n + ")");
				var r = e[1].toString();
				return e[1]instanceof t && (r = "(" + r + ")"), n + " " + this.op + " " + r;
			default:
				return this.op + "(" + this.params.join(", ") + ")"
		}
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		this.object = e, this.params = n
	}

	{
		var i = r(221), o = r(110);
		r(113), r(114), r(220), r(9), r(8), i.isNumber, i.toNumber
	}
	t.prototype = new o, t.prototype._compile = function(e) {
		var n = this.params.map(function(n) {
			return n._compile(e)
		});
		return this.object._compile(e) + "(" + n.join(", ") + ")"
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this), this.object && (n = n.concat(this.object.find(e)));
		var r = this.params;
		if(r)for(var t = 0, i = r.length; i > t; t++)n = n.concat(r[t].find(e));
		return n
	}, t.prototype.toString = function() {
		var e = this.object ? this.object.toString() : "";
		return this.params && (e += "(" + this.params.join(", ") + ")"), e
	}, e.exports = t
}, function(e, n, r) {
	function t(e) {
		if(2 != e.length && 3 != e.length)throw new SyntaxError("Wrong number of arguments. Expected [start, end] or [start, end, step]");
		this.start = e[0], this.end = e[1], this.step = e[2]
	}

	{
		var i = r(221), o = r(110);
		r(220), r(8), r(10), i.toNumber
	}
	t.prototype = new o, t.prototype._compile = function(e) {
		return "math.range(" + this.start._compile(e) + ", " + this.end._compile(e) + ", " + (this.step ? this.step._compile(e) + ", " : "") + "true)"
	}, t.prototype.find = function(e) {
		var n = [];
		return this.match(e) && n.push(this), this.start && (n = n.concat(this.start.find(e))), this.step && (n = n.concat(this.step.find(e))), this.end && (n = n.concat(this.end.find(e))), n
	}, t.prototype.toString = function() {
		var e = this.start.toString();
		return this.step && (e += ":" + this.step.toString()), e += ":" + this.end.toString()
	}, e.exports = t
}, function(e, n, r) {
	function t(e) {
		this.name = e
	}

	function i(e) {
		throw new Error("Undefined symbol " + e)
	}

	var o = r(110), a = r(11);
	t.prototype = new o, t.prototype._compile = function(e) {
		return e.undef = i, e.Unit = a, '(scope["' + this.name + '"] !== undefined ? scope["' + this.name + '"] : math["' + this.name + '"] !== undefined ? math["' + this.name + '"] : ' + (a.isPlainUnit(this.name) ? 'new Unit(null, "' + this.name + '")' : 'undef("' + this.name + '")') + ")"
	}, t.prototype.toString = function() {
		return this.name
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		this.value = e, this.unit = n
	}

	{
		var i = r(110), o = (r(220), r(7), r(11), r(221));
		o.toNumber
	}
	t.prototype = new i, t.prototype._compile = function(e) {
		return "math.unit(" + this.value._compile(e) + ', "' + this.unit + '")'
	}, t.prototype.find = function(e) {
		var n = [];
		return this.match(e) && n.push(this), n = n.concat(this.value.find(e))
	}, t.prototype.toString = function() {
		return this.value + " " + this.unit
	}, e.exports = t
}, function(e, n, r) {
	function t(e, n) {
		if(!(e instanceof a))throw new TypeError("index mus be an IndexNode");
		this.index = e, this.expr = n
	}

	{
		var i = r(221), o = r(110), a = (r(113), r(108));
		r(114), r(220), r(9), r(8), i.isNumber, i.toNumber
	}
	t.prototype = new o, t.prototype._compile = function(e) {
		return 'scope["' + this.index.objectName() + '"] = ' + this.index.compileSubset(e, this.expr._compile(e))
	}, t.prototype.find = function(e) {
		var n = [];
		this.match(e) && n.push(this);
		var r = this.ranges;
		if(r)for(var t = 0, i = r.length; i > t; t++)n = n.concat(r[t].find(e));
		return this.expr && (n = n.concat(this.expr.find(e))), n
	}, t.prototype.toString = function() {
		return this.index.toString() + " = " + this.expr.toString()
	}, e.exports = t
}, function(e, n, r) {
	n.array = r(222), n["boolean"] = r(223), n.number = r(221), n.object = r(2), n.string = r(218), n.types = r(217)
}, function(e) {
	e.exports = {
		name: "e",
		category: "Constants",
		syntax: ["e"],
		description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
		examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
		seealso: ["exp"]
	}
}, function(e) {
	e.exports = {
		name: "false",
		category: "Constants",
		syntax: ["false"],
		description: "Boolean value false",
		examples: ["false"],
		seealso: ["true"]
	}
}, function(e) {
	e.exports = {
		name: "i",
		category: "Constants",
		syntax: ["i"],
		description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
		examples: ["i", "i * i", "sqrt(-1)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "Infinity",
		category: "Constants",
		syntax: ["Infinity"],
		description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
		examples: ["Infinity", "1 / 0"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "LN2",
		category: "Constants",
		syntax: ["LN2"],
		description: "Returns the natural logarithm of 2, approximately equal to 0.693",
		examples: ["LN2", "log(2)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "LN10",
		category: "Constants",
		syntax: ["LN10"],
		description: "Returns the natural logarithm of 10, approximately equal to 2.302",
		examples: ["LN10", "log(10)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "LOG2E",
		category: "Constants",
		syntax: ["LOG2E"],
		description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
		examples: ["LOG2E", "log(e, 2)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "LOG10E",
		category: "Constants",
		syntax: ["LOG10E"],
		description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
		examples: ["LOG10E", "log(e, 10)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "NaN",
		category: "Constants",
		syntax: ["NaN"],
		description: "Not a number",
		examples: ["NaN", "0 / 0"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "pi",
		category: "Constants",
		syntax: ["pi"],
		description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
		examples: ["pi", "sin(pi/2)"],
		seealso: ["tau"]
	}
}, function(e) {
	e.exports = {
		name: "SQRT1_2",
		category: "Constants",
		syntax: ["SQRT1_2"],
		description: "Returns the square root of 1/2, approximately equal to 0.707",
		examples: ["SQRT1_2", "sqrt(1/2)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "SQRT2",
		category: "Constants",
		syntax: ["SQRT2"],
		description: "Returns the square root of 2, approximately equal to 1.414",
		examples: ["SQRT2", "sqrt(2)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "tau",
		category: "Constants",
		syntax: ["pi"],
		description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
		examples: ["tau", "2 * pi"],
		seealso: ["pi"]
	}
}, function(e) {
	e.exports = {
		name: "true",
		category: "Constants",
		syntax: ["true"],
		description: "Boolean value true",
		examples: ["true"],
		seealso: ["false"]
	}
}, function(e) {
	e.exports = {
		name: "abs",
		category: "Arithmetic",
		syntax: ["abs(x)"],
		description: "Compute the absolute value.",
		examples: ["abs(3.5)", "abs(-4.2)"],
		seealso: ["sign"]
	}
}, function(e) {
	e.exports = {
		name: "add",
		category: "Operators",
		syntax: ["x + y", "add(x, y)"],
		description: "Add two values.",
		examples: ["2.1 + 3.6", "ans - 3.6", "3 + 2i", '"hello" + " world"', "3 cm + 2 inch"],
		seealso: ["subtract"]
	}
}, function(e) {
	e.exports = {
		name: "ceil",
		category: "Arithmetic",
		syntax: ["ceil(x)"],
		description: "Round a value towards plus infinity.If x is complex, both real and imaginary part are rounded towards plus infinity.",
		examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
		seealso: ["floor", "fix", "round"]
	}
}, function(e) {
	e.exports = {
		name: "cube",
		category: "Arithmetic",
		syntax: ["cube(x)"],
		description: "Compute the cube of a value. The cube of x is x * x * x.",
		examples: ["cube(2)", "2^3", "2 * 2 * 2"],
		seealso: ["multiply", "square", "pow"]
	}
}, function(e) {
	e.exports = {
		name: "divide",
		category: "Operators",
		syntax: ["x / y", "divide(x, y)"],
		description: "Divide two values.",
		examples: ["2 / 3", "ans * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
		seealso: ["multiply"]
	}
}, function(e) {
	e.exports = {
		name: "edivide",
		category: "Operators",
		syntax: ["x ./ y", "edivide(x, y)"],
		description: "divide two values element wise.",
		examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
		seealso: ["multiply", "emultiply", "divide"]
	}
}, function(e) {
	e.exports = {
		name: "emultiply",
		category: "Operators",
		syntax: ["x .* y", "emultiply(x, y)"],
		description: "multiply two values element wise.",
		examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
		seealso: ["multiply", "divide", "edivide"]
	}
}, function(e) {
	e.exports = {
		name: "epow",
		category: "Operators",
		syntax: ["x .^ y", "epow(x, y)"],
		description: "Calculates the power of x to y element wise.",
		examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
		seealso: ["pow"]
	}
}, function(e) {
	e.exports = {
		name: "equal",
		category: "Operators",
		syntax: ["x == y", "equal(x, y)"],
		description: "Check equality of two values. Returns 1 if the values are equal, and 0 if not.",
		examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
		seealso: ["unequal", "smaller", "larger", "smallereq", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "exp",
		category: "Arithmetic",
		syntax: ["exp(x)"],
		description: "Calculate the exponent of a value.",
		examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
		seealso: ["square", "multiply", "log"]
	}
}, function(e) {
	e.exports = {
		name: "fix",
		category: "Arithmetic",
		syntax: ["fix(x)"],
		description: "Round a value towards zero.If x is complex, both real and imaginary part are rounded towards zero.",
		examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
		seealso: ["ceil", "floor", "round"]
	}
}, function(e) {
	e.exports = {
		name: "floor",
		category: "Arithmetic",
		syntax: ["floor(x)"],
		description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
		examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
		seealso: ["ceil", "fix", "round"]
	}
}, function(e) {
	e.exports = {
		name: "gcd",
		category: "Arithmetic",
		syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
		description: "Compute the greatest common divisor.",
		examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
		seealso: ["lcm", "xgcd"]
	}
}, function(e) {
	e.exports = {
		name: "larger",
		category: "Operators",
		syntax: ["x > y", "larger(x, y)"],
		description: "Check if value x is larger than y. Returns 1 if x is larger than y, and 0 if not.",
		examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
		seealso: ["equal", "unequal", "smaller", "smallereq", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "largereq",
		category: "Operators",
		syntax: ["x >= y", "largereq(x, y)"],
		description: "Check if value x is larger or equal to y. Returns 1 if x is larger or equal to y, and 0 if not.",
		examples: ["2 > 1+1", "2 >= 1+1", "a = 3.2", "b = 6-2.8", "(a > b)"],
		seealso: ["equal", "unequal", "smallereq", "smaller", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "lcm",
		category: "Arithmetic",
		syntax: ["lcm(x, y)"],
		description: "Compute the least common multiple.",
		examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
		seealso: ["gcd"]
	}
}, function(e) {
	e.exports = {
		name: "log",
		category: "Arithmetic",
		syntax: ["log(x)", "log(x, base)"],
		description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
		examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 3", "log(1000, 10)", "log(1000) / log(10)", "b = logb(1024, 2)", "2 ^ b"],
		seealso: ["exp", "log10"]
	}
}, function(e) {
	e.exports = {
		name: "log10",
		category: "Arithmetic",
		syntax: ["log10(x)"],
		description: "Compute the 10-base logarithm of a value.",
		examples: ["log10(1000)", "10 ^ 3", "log10(0.01)", "log(1000) / log(10)", "log(1000, 10)"],
		seealso: ["exp", "log"]
	}
}, function(e) {
	e.exports = {
		name: "mod",
		category: "Operators",
		syntax: ["x % y", "x mod y", "mod(x, y)"],
		description: "Calculates the modulus, the remainder of an integer division.",
		examples: ["7 % 3", "11 % 2", "10 mod 4", "function isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "multiply",
		category: "Operators",
		syntax: ["x * y", "multiply(x, y)"],
		description: "multiply two values.",
		examples: ["2.1 * 3.6", "ans / 3.6", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
		seealso: ["divide"]
	}
}, function(e) {
	e.exports = {
		name: "pow",
		category: "Operators",
		syntax: ["x ^ y", "pow(x, y)"],
		description: "Calculates the power of x to y, x^y.",
		examples: ["2^3 = 8", "2*2*2", "1 + e ^ (pi * i)"],
		seealso: ["unequal", "smaller", "larger", "smallereq", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "round",
		category: "Arithmetic",
		syntax: ["round(x)", "round(x, n)"],
		description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
		examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
		seealso: ["ceil", "floor", "fix"]
	}
}, function(e) {
	e.exports = {
		name: "sign",
		category: "Arithmetic",
		syntax: ["sign(x)"],
		description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
		examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
		seealso: ["abs"]
	}
}, function(e) {
	e.exports = {
		name: "smaller",
		category: "Operators",
		syntax: ["x < y", "smaller(x, y)"],
		description: "Check if value x is smaller than value y. Returns 1 if x is smaller than y, and 0 if not.",
		examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
		seealso: ["equal", "unequal", "larger", "smallereq", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "smallereq",
		category: "Operators",
		syntax: ["x <= y", "smallereq(x, y)"],
		description: "Check if value x is smaller or equal to value y. Returns 1 if x is smaller than y, and 0 if not.",
		examples: ["2 < 1+1", "2 <= 1+1", "a = 3.2", "b = 6-2.8", "(a < b)"],
		seealso: ["equal", "unequal", "larger", "smaller", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "sqrt",
		category: "Arithmetic",
		syntax: ["sqrt(x)"],
		description: "Compute the square root value. If x = y * y, then y is the square root of x.",
		examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
		seealso: ["square", "multiply"]
	}
}, function(e) {
	e.exports = {
		name: "square",
		category: "Arithmetic",
		syntax: ["square(x)"],
		description: "Compute the square of a value. The square of x is x * x.",
		examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
		seealso: ["multiply", "pow", "sqrt", "cube"]
	}
}, function(e) {
	e.exports = {
		name: "subtract",
		category: "Operators",
		syntax: ["x - y", "subtract(x, y)"],
		description: "subtract two values.",
		examples: ["5.3 - 2", "ans + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
		seealso: ["add"]
	}
}, function(e) {
	e.exports = {
		name: "unary",
		category: "Operators",
		syntax: ["-x", "unary(x)"],
		description: "Inverse the sign of a value.",
		examples: ["-4.5", "-(-5.6)"],
		seealso: ["add", "subtract"]
	}
}, function(e) {
	e.exports = {
		name: "unequal",
		category: "Operators",
		syntax: ["x != y", "unequal(x, y)"],
		description: "Check unequality of two values. Returns 1 if the values are unequal, and 0 if they are equal.",
		examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
		seealso: ["equal", "smaller", "larger", "smallereq", "largereq"]
	}
}, function(e) {
	e.exports = {
		name: "xgcd",
		category: "Arithmetic",
		syntax: ["xgcd(a, b)"],
		description: "Calculate the extended greatest common divisor for two values",
		examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
		seealso: ["gcd", "lcm"]
	}
}, function(e) {
	e.exports = {
		name: "arg",
		category: "Complex",
		syntax: ["arg(x)"],
		description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
		examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 - 3i)"],
		seealso: ["re", "im", "conj", "abs"]
	}
}, function(e) {
	e.exports = {
		name: "conj",
		category: "Complex",
		syntax: ["conj(x)"],
		description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
		examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
		seealso: ["re", "im", "abs", "arg"]
	}
}, function(e) {
	e.exports = {
		name: "re",
		category: "Complex",
		syntax: ["re(x)"],
		description: "Get the real part of a complex number.",
		examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
		seealso: ["im", "conj", "abs", "arg"]
	}
}, function(e) {
	e.exports = {
		name: "im",
		category: "Complex",
		syntax: ["im(x)"],
		description: "Get the imaginary part of a complex number.",
		examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
		seealso: ["re", "conj", "abs", "arg"]
	}
}, function(e) {
	e.exports = {
		name: "bignumber",
		category: "Type",
		syntax: ["bignumber(x)"],
		description: "Create a big number from a number or string.",
		examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
		seealso: ["boolean", "complex", "index", "matrix", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "boolean",
		category: "Type",
		syntax: ["x", "boolean(x)"],
		description: "Convert a string or number into a boolean.",
		examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
		seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "complex",
		category: "Type",
		syntax: ["complex()", "complex(re, im)", "complex(string)"],
		description: "Create a complex number.",
		examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
		seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "index",
		category: "Type",
		syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
		description: "Create an index to get or replace a subset of a matrix",
		examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
		seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "matrix",
		category: "Type",
		syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", "matrix([...])"],
		description: "Create a matrix.",
		examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])"],
		seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "number",
		category: "Type",
		syntax: ["x", "number(x)"],
		description: "Create a number or convert a string or boolean into a number.",
		examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])"],
		seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "string",
		category: "Type",
		syntax: ['"text"', "string(x)"],
		description: "Create a string or convert a value to a string",
		examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
		seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
	}
}, function(e) {
	e.exports = {
		name: "unit",
		category: "Type",
		syntax: ["value unit", "unit(value, unit)", "unit(string)"],
		description: "Create a unit.",
		examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
		seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
	}
}, function(e) {
	e.exports = {
		name: "eval",
		category: "Expression",
		syntax: ["eval(expression)", "eval([expr1, expr2, expr3, ...])"],
		description: "Evaluate an expression or an array with expressions.",
		examples: ['eval("2 + 3")', 'eval("sqrt(" + 4 + ")")'],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "help",
		category: "Expression",
		syntax: ["help(object)", "help(string)"],
		description: "Display documentation on a function or data type.",
		examples: ["help(sqrt)", 'help("complex")'],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "concat",
		category: "Matrix",
		syntax: ["concat(a, b, c, ...)", "concat(a, b, c, ..., dim)"],
		description: "Concatenate matrices. By default, the matrices are concatenated by the first dimension. The dimension on which to concatenate can be provided as last argument.",
		examples: ["a = [1, 2; 5, 6]", "b = [3, 4; 7, 8]", "concat(a, b)", "[a, b]", "concat(a, b, 2)", "[a; b]"],
		seealso: ["det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "det",
		category: "Matrix",
		syntax: ["det(x)"],
		description: "Calculate the determinant of a matrix",
		examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
		seealso: ["concat", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "diag",
		category: "Matrix",
		syntax: ["diag(x)", "diag(x, k)"],
		description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned.When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
		examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
		seealso: ["concat", "det", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "eye",
		category: "Matrix",
		syntax: ["eye(n)", "eye(m, n)", "eye([m, n])", "eye"],
		description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
		examples: ["eye(3)", "eye(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "eye(size(a))"],
		seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "inv",
		category: "Matrix",
		syntax: ["inv(x)"],
		description: "Calculate the inverse of a matrix",
		examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
		seealso: ["concat", "det", "diag", "eye", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "ones",
		category: "Matrix",
		syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])", "ones"],
		description: "Create a matrix containing ones.",
		examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
		seealso: ["concat", "det", "diag", "eye", "inv", "range", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "range",
		category: "Type",
		syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
		description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
		examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "size", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "resize",
		category: "Matrix",
		syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
		description: "Resize a matrix.",
		examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5], 0)", "resize(2, [2, 3], 0)", 'resize("hello", [8], "!")'],
		seealso: ["size", "subset", "squeeze"]
	}
}, function(e) {
	e.exports = {
		name: "size",
		category: "Matrix",
		syntax: ["size(x)"],
		description: "Calculate the size of a matrix.",
		examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "squeeze", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "squeeze",
		category: "Matrix",
		syntax: ["squeeze(x)"],
		description: "Remove singleton dimensions from a matrix.",
		examples: ["a = zeros(1,3,2)", "size(squeeze(a))", "b = zeros(3,1,1)", "size(squeeze(b))"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "subset", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "subset",
		category: "Matrix",
		syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
		description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
		examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "transpose", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "transpose",
		category: "Matrix",
		syntax: ["x'", "transpose(x)"],
		description: "Transpose a matrix",
		examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "zeros"]
	}
}, function(e) {
	e.exports = {
		name: "zeros",
		category: "Matrix",
		syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])", "zeros"],
		description: "Create a matrix containing zeros.",
		examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
		seealso: ["concat", "det", "diag", "eye", "inv", "ones", "range", "size", "squeeze", "subset", "transpose"]
	}
}, function(e) {
	e.exports = {
		name: "combinations",
		category: "Probability",
		syntax: ["combinations(n, k)"],
		description: "Compute the number of combinations of n items taken k at a time",
		examples: ["combinations(7, 5)"],
		seealso: ["permutations", "factorial"]
	}
}, function(e) {
	e.exports = {
		name: "distribution",
		category: "Probability",
		syntax: ["distribution(name)", "distribution(name, arg1, arg2, ...)"],
		description: 'Create a distribution object of a specific type. A distribution object contains functions `random([size,] [min,] [max])`, `randomInt([size,] [min,] [max])`, and `pickRandom(array)`. Available types of distributions: "uniform", "normal". Note that the function distribution is currently not available via the expression parser.',
		examples: [],
		seealso: ["random", "randomInt"]
	}
}, function(e) {
	e.exports = {
		name: "factorial",
		category: "Probability",
		syntax: ["n!", "factorial(n)"],
		description: "Compute the factorial of a value",
		examples: ["5!", "5*4*3*2*1", "3!"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "permutations",
		category: "Probability",
		syntax: ["permutations(n)", "permutations(n, k)"],
		description: "Compute the number of permutations of n items taken k at a time",
		examples: ["permutations(5)", "permutations(5, 4)"],
		seealso: ["combinations", "factorial"]
	}
}, function(e) {
	e.exports = {
		name: "pickRandom",
		category: "Probability",
		syntax: ["pickRandom(array)"],
		description: "Pick a random entry from a given array.",
		examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])"],
		seealso: ["distribution", "random", "randomInt"]
	}
}, function(e) {
	e.exports = {
		name: "random",
		category: "Probability",
		syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
		description: "Return a random number.",
		examples: ["random()", "random(10, 20)", "random([2, 3])"],
		seealso: ["distribution", "pickRandom", "randomInt"]
	}
}, function(e) {
	e.exports = {
		name: "randInt",
		category: "Probability",
		syntax: ["randInt()", "randInt(max)", "randInt(min, max)", "randInt(size)", "randInt(size, max)", "randInt(size, min, max)"],
		description: "Return a random integer number",
		examples: ["randInt()", "randInt(10, 20)", "randInt([2, 3], 10)"],
		seealso: ["distribution", "pickRandom", "random"]
	}
}, function(e) {
	e.exports = {
		name: "min",
		category: "Statistics",
		syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
		description: "Compute the minimum value of a list of values.",
		examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3], 0)", "min([2, 5; 4, 3], 1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
		seealso: ["max", "mean", "min"]
	}
}, function(e) {
	e.exports = {
		name: "mean",
		category: "Statistics",
		syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
		description: "Compute the arithmetic mean of a list of values.",
		examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3], 0)", "mean([2, 5; 4, 3], 1)", "mean([1.0, 2.7, 3.2, 4.0])"],
		seealso: ["max", "min"]
	}
}, function(e) {
	e.exports = {
		name: "max",
		category: "Statistics",
		syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
		description: "Compute the maximum value of a list of values.",
		examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3], 0)", "max([2, 5; 4, 3], 1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
		seealso: ["mean", "min"]
	}
}, function(e) {
	e.exports = {
		name: "acos",
		category: "Trigonometry",
		syntax: ["acos(x)"],
		description: "Compute the inverse cosine of a value in radians.",
		examples: ["acos(0.5)", "acos(cos(2.3))"],
		seealso: ["cos", "acos", "asin"]
	}
}, function(e) {
	e.exports = {
		name: "asin",
		category: "Trigonometry",
		syntax: ["asin(x)"],
		description: "Compute the inverse sine of a value in radians.",
		examples: ["asin(0.5)", "asin(sin(2.3))"],
		seealso: ["sin", "acos", "asin"]
	}
}, function(e) {
	e.exports = {
		name: "atan",
		category: "Trigonometry",
		syntax: ["atan(x)"],
		description: "Compute the inverse tangent of a value in radians.",
		examples: ["atan(0.5)", "atan(tan(2.3))"],
		seealso: ["tan", "acos", "asin"]
	}
}, function(e) {
	e.exports = {
		name: "atan2",
		category: "Trigonometry",
		syntax: ["atan2(y, x)"],
		description: "Computes the principal value of the arc tangent of y/x in radians.",
		examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
		seealso: ["sin", "cos", "tan"]
	}
}, function(e) {
	e.exports = {
		name: "cos",
		category: "Trigonometry",
		syntax: ["cos(x)"],
		description: "Compute the cosine of x in radians.",
		examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
		seealso: ["acos", "sin", "tan"]
	}
}, function(e) {
	e.exports = {
		name: "cot",
		category: "Trigonometry",
		syntax: ["cot(x)"],
		description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
		examples: ["cot(2)", "1 / tan(2)"],
		seealso: ["sec", "csc", "tan"]
	}
}, function(e) {
	e.exports = {
		name: "csc",
		category: "Trigonometry",
		syntax: ["csc(x)"],
		description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
		examples: ["csc(2)", "1 / sin(2)"],
		seealso: ["sec", "cot", "sin"]
	}
}, function(e) {
	e.exports = {
		name: "sec",
		category: "Trigonometry",
		syntax: ["sec(x)"],
		description: "Compute the secant of x in radians. Defined as 1/cos(x)",
		examples: ["sec(2)", "1 / cos(2)"],
		seealso: ["cot", "csc", "cos"]
	}
}, function(e) {
	e.exports = {
		name: "sin",
		category: "Trigonometry",
		syntax: ["sin(x)"],
		description: "Compute the sine of x in radians.",
		examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
		seealso: ["asin", "cos", "tan"]
	}
}, function(e) {
	e.exports = {
		name: "tan",
		category: "Trigonometry",
		syntax: ["tan(x)"],
		description: "Compute the tangent of x in radians.",
		examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
		seealso: ["atan", "sin", "cos"]
	}
}, function(e) {
	e.exports = {
		name: "to",
		category: "Units",
		syntax: ["x to unit", "to(x, unit)"],
		description: "Change the unit of a value.",
		examples: ["5 inch in cm", "3.2kg in g", "16 bytes in bits"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "clone",
		category: "Utils",
		syntax: ["clone(x)"],
		description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
		examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "map",
		category: "Utils",
		syntax: ["map(x, callback)"],
		description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
		examples: ["map([1, 2, 3], function(val) { return math.max(val, 1.5) })"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "forEach",
		category: "Utils",
		syntax: ["forEach(x, callback)"],
		description: "Iterates over all elements of a matrix/array, and executes the given callback.",
		examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "format",
		category: "Utils",
		syntax: ["format(value)", "format(value, precision)"],
		description: "Format a value of any type as string.",
		examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
		seealso: ["print"]
	}
}, function(e) {
	e.exports = {
		name: "import",
		category: "Utils",
		syntax: ["import(string)"],
		description: "Import functions from a file.",
		examples: ['import("numbers")', 'import("./mylib.js")'],
		seealso: []
	}
}, function(e) {
	e.exports = {
		name: "typeof",
		category: "Utils",
		syntax: ["typeof(x)"],
		description: "Get the type of a variable.",
		examples: ["typeof(3.5)", "typeof(2 - 4i)", "typeof(45 deg)", 'typeof("hello world")'],
		seealso: []
	}
}, function(e, n) {
	n.type = function r(e) {
		var r = typeof e;
		if("object" === r) {
			if(null === e)return "null";
			if(e instanceof Boolean)return "boolean";
			if(e instanceof Number)return "number";
			if(e instanceof String)return "string";
			if(Array.isArray(e))return "array";
			if(e instanceof Date)return "date"
		}
		return r
	}
}, function(e, n, r) {
	function t(e, r) {
		if(Array.isArray(e)) {
			for(var i = "[", o = e.length, a = 0; o > a; a++)0 != a && (i += ", "), i += t(e[a], r);
			return i += "]"
		}
		return n.format(e, r)
	}

	var i = r(221), o = r(220);
	n.isString = function(e) {
		return e instanceof String || "string" == typeof e
	}, n.endsWith = function(e, n) {
		var r = e.length - n.length, t = e.length;
		return e.substring(r, t) === n
	}, n.format = function(e, r) {
		return i.isNumber(e) || e instanceof o ? i.format(e, r) : Array.isArray(e) ? t(e, r) : n.isString(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? e.syntax + "" : "function" : e instanceof Object ? "function" == typeof e.format ? e.format(r) : e.toString() : String(e)
	}
}, function(e, n, r) {
	function t(e) {
		return r(i(e))
	}

	function i(e) {
		return o[e] || function() {
				throw new Error("Cannot find module '" + e + "'.")
			}()
	}

	var o = {
		"./clone": 95,
		"./clone.js": 95,
		"./forEach": 101,
		"./forEach.js": 101,
		"./format": 96,
		"./format.js": 96,
		"./import": 97,
		"./import.js": 97,
		"./map": 98,
		"./map.js": 98,
		"./print": 99,
		"./print.js": 99,
		"./typeof": 100,
		"./typeof.js": 100
	};
	t.keys = function() {
		return Object.keys(o)
	}, t.resolve = i, e.exports = t
}, function(e, n, r) {
	var t;
	!function(i) {
		"use strict";
		function o(e, n) {
			var r, t, i, u, f, c, p = this;
			if(!(p instanceof o))return new o(e, n);
			if(e instanceof o) {
				if(A = 0, n === r)return p.s = e.s, p.e = e.e, void(p.c = (e = e.c) ? e.slice() : e);
				e += ""
			}
			if("string" != typeof e && (e = (i = "number" == typeof e || "[object Number]" == Object.prototype.toString.call(e)) && 0 === e && 0 > 1 / e ? "-0" : e + ""), c = e, n === r && O.test(e))p.s = "-" == e.charAt(0) ? (e = e.slice(1), -1) : 1;
			else {
				if(10 == n)return l(e, g, d);
				if(e = T.call(e).replace(/^\+(?!-)/, ""), p.s = "-" == e.charAt(0) ? (e = e.replace(/^-(?!-)/, ""), -1) : 1, null != n ? n != (0 | n) && y || (m = !(n >= 2 && 65 > n)) ? (a(n, 2), f = O.test(e)) : (u = "[" + M.slice(0, n = 0 | n) + "]+", e = e.replace(/\.$/, "").replace(/^\./, "0."), (f = new RegExp("^" + u + "(?:\\." + u + ")?$", 37 > n ? "i" : "").test(e)) ? (i && (e.replace(/^0\.0*|\./, "").length > 15 && a(c, 0), i = !i), e = s(e, 10, n, p.s)) : "Infinity" != e && "NaN" != e && (a(c, 1, n), e = "NaN")) : f = O.test(e), !f)return p.c = p.e = null, "Infinity" != e && ("NaN" != e && a(c, 3), p.s = null), void(A = 0)
			}
			for((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (t = e.search(/e/i)) > 0 ? (0 > r && (r = t), r += +e.slice(t + 1), e = e.substring(0, t)) : 0 > r && (r = e.length), t = 0; "0" == e.charAt(t); t++);
			if(n = e.length, i && n > 15 && e.slice(t).length > 15 && a(c, 0), A = 0, (r -= t + 1) > b)p.c = p.e = null;
			else if(t == n || w > r)p.c = [p.e = 0];
			else {
				for(; "0" == e.charAt(--n););
				for(p.e = r, p.c = [], r = 0; n >= t; p.c[r++] = +e.charAt(t++));
			}
		}

		function a(e, n, r, t, i, o) {
			if(y) {
				var a, s = ["new BigNumber", "cmp", "div", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "times", "toFr"][A ? 0 > A ? -A : A : 0 > 1 / A ? 1 : 0] + "()", u = m ? " out of range" : " not a" + (i ? " non-zero" : "n") + " integer";
				throw u = ([s + " number type has more than 15 significant digits", s + " not a base " + r + " number", s + " base" + u, s + " not a number"][n] || r + "() " + n + (o ? " not a boolean or binary digit" : u + (t ? " or not [" + (m ? " negative, positive" : " integer, integer") + " ]" : ""))) + ": " + e, m = A = 0, a = new Error(u), a.name = "BigNumber Error", a
			}
		}

		function s(e, n, r, t) {
			function i(e, t) {
				var i, o, a = 0, s = e.length, u = [0];
				for(t = t || r; s > a; a++) {
					for(o = u.length, i = 0; o > i; u[i] *= t, i++);
					for(u[0] += M.indexOf(e.charAt(a)), i = 0; i < u.length; i++)u[i] > n - 1 && (null == u[i + 1] && (u[i + 1] = 0), u[i + 1] += u[i] / n ^ 0, u[i] %= n)
				}
				return u.reverse()
			}

			function a(e) {
				for(var n = 0, r = e.length, t = ""; r > n; t += M.charAt(e[n++]));
				return t
			}

			var s, f, c, l, m, p;
			if(37 > r && (e = e.toLowerCase()), (s = e.indexOf(".")) > -1)if(s = e.length - s - 1, f = i(new o(r).pow(s).toF(), 10), l = e.split("."), c = i(l[1]), l = i(l[0]), p = u(c, f, c.length - f.length, t, n, 1 & l[l.length - 1]), m = p.c, s = p.e) {
				for(; ++s; m.unshift(0));
				e = a(l) + "." + a(m)
			}
			else m[0] ? l[s = l.length - 1] < n - 1 ? (++l[s], e = a(l)) : e = new o(a(l), n).plus(S).toS(n) : e = a(l);
			else e = a(i(e));
			return e
		}

		function u(e, n, r, t, i, a) {
			var s, u, f, l, m, p = n.slice(), h = s = n.length, d = e.length, x = e.slice(0, s), v = x.length, y = new o(S), E = y.c = [], N = 0, M = g + (y.e = r) + 1;
			for(y.s = t, t = 0 > M ? 0 : M; v++ < s; x.push(0));
			p.unshift(0);
			do {
				for(f = 0; i > f; f++) {
					if(s != (v = x.length))l = s > v ? 1 : -1;
					else for(m = -1, l = 0; ++m < s;)if(n[m] != x[m]) {
						l = n[m] > x[m] ? 1 : -1;
						break
					}
					if(!(0 > l))break;
					for(u = v == s ? n : p; v;) {
						if(x[--v] < u[v]) {
							for(m = v; m && !x[--m]; x[m] = i - 1);
							--x[m], x[v] += i
						}
						x[v] -= u[v]
					}
					for(; !x[0]; x.shift());
				}
				E[N++] = l ? f : ++f, x[0] && l ? x[v] = e[h] || 0 : x = [e[h]]
			} while((h++ < d || null != x[0]) && t--);
			return E[0] || 1 == N || (--y.e, E.shift()), N > M && c(y, g, i, a, null != x[0]), y.e > b ? y.c = y.e = null : y.e < w && (y.c = [y.e = 0]), y
		}

		function f(e, n, r) {
			var t = n - (e = new o(e)).e, i = e.c;
			if(!i)return e.toS();
			for(i.length > ++n && c(e, t, 10), t = 0 == i[0] ? t + 1 : r ? n : e.e + t + 1; i.length < t; i.push(0));
			return t = e.e, 1 == r || 2 == r && (--n < t || x >= t) ? (e.s < 0 && i[0] ? "-" : "") + (i.length > 1 ? (i.splice(1, 0, "."), i.join("")) : i[0]) + (0 > t ? "e" : "e+") + t : e.toS()
		}

		function c(e, n, r, t, i) {
			var o = e.c, a = e.s < 0, s = r / 2, u = e.e + n + 1, f = o[u], c = i || 0 > u || null != o[u + 1];
			if(i = 4 > d ? (null != f || c) && (0 == d || 2 == d && !a || 3 == d && a) : f > s || f == s && (4 == d || c || 6 == d && (1 & o[u - 1] || !n && t) || 7 == d && !a || 8 == d && a), 1 > u || !o[0])return o.length = 0, o.push(0), i ? (o[0] = 1, e.e = -n) : e.e = 0, e;
			if(o.length = u--, i)for(--r; ++o[u] > r;)o[u] = 0, u-- || (++e.e, o.unshift(1));
			for(u = o.length; !o[--u]; o.pop());
			return e
		}

		function l(e, n, r) {
			var t = d;
			return d = r, e = new o(e), e.c && c(e, n, 10), d = t, e
		}

		var m, p = 1e9, h = 1e6, g = 20, d = 4, x = -7, v = 21, w = -p, b = p, y = !0, E = parseInt, N = o.prototype, M = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", A = 0, O = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, T = String.prototype.trim || function() {
				return this.replace(/^\s+|\s+$/g, "")
			}, S = o(1);
		o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.config = function() {
			var e, n, r = 0, t = {}, i = arguments, o = i[0], s = "config", u = function(e, n, r) {
				return !((m = n > e || e > r) || E(e) != e && 0 !== e)
			}, f = o && "object" == typeof o ? function() {
				return o.hasOwnProperty(n) ? null != (e = o[n]) : void 0
			} : function() {
				return i.length > r ? null != (e = i[r++]) : void 0
			};
			return f(n = "DECIMAL_PLACES") && (u(e, 0, p) ? g = 0 | e : a(e, n, s)), t[n] = g, f(n = "ROUNDING_MODE") && (u(e, 0, 8) ? d = 0 | e : a(e, n, s)), t[n] = d, f(n = "EXPONENTIAL_AT") && (u(e, -p, p) ? x = -(v = ~~(0 > e ? -e : +e)) : !m && e && u(e[0], -p, 0) && u(e[1], 0, p) ? (x = ~~e[0], v = ~~e[1]) : a(e, n, s, 1)), t[n] = [x, v], f(n = "RANGE") && (u(e, -p, p) && ~~e ? w = -(b = ~~(0 > e ? -e : +e)) : !m && e && u(e[0], -p, -1) && u(e[1], 1, p) ? (w = ~~e[0], b = ~~e[1]) : a(e, n, s, 1, 1)), t[n] = [w, b], f(n = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (m = A = 0, E = (y = !!e) ? parseInt : parseFloat) : a(e, n, s, 0, 0, 1)), t[n] = y, t
		}, N.abs = N.absoluteValue = function() {
			var e = new o(this);
			return e.s < 0 && (e.s = 1), e
		}, N.ceil = function() {
			return l(this, 0, 2)
		}, N.comparedTo = N.cmp = function(e, n) {
			var r, t = this, i = t.c, a = (A = -A, e = new o(e, n)).c, s = t.s, u = e.s, f = t.e, c = e.e;
			if(!s || !u)return null;
			if(r = i && !i[0], n = a && !a[0], r || n)return r ? n ? 0 : -u : s;
			if(s != u)return s;
			if(r = 0 > s, n = f == c, !i || !a)return n ? 0 : !i ^ r ? 1 : -1;
			if(!n)return f > c ^ r ? 1 : -1;
			for(s = -1, u = (f = i.length) < (c = a.length) ? f : c; ++s < u;)if(i[s] != a[s])return i[s] > a[s] ^ r ? 1 : -1;
			return f == c ? 0 : f > c ^ r ? 1 : -1
		}, N.dividedBy = N.div = function(e, n) {
			var r = this.c, t = this.e, i = this.s, a = (A = 2, e = new o(e, n)).c, s = e.e, f = e.s, c = i == f ? 1 : -1;
			return (t || r && r[0]) && (s || a && a[0]) ? u(r, a, t - s, c, 10) : new o(i && f && (r ? !a || r[0] != a[0] : a) ? r && 0 == r[0] || !a ? 0 * c : c / 0 : 0 / 0)
		}, N.equals = N.eq = function(e, n) {
			return A = 3, 0 === this.cmp(e, n)
		}, N.floor = function() {
			return l(this, 0, 3)
		}, N.greaterThan = N.gt = function(e, n) {
			return A = 4, this.cmp(e, n) > 0
		}, N.greaterThanOrEqualTo = N.gte = function(e, n) {
			return A = 5, 1 == (n = this.cmp(e, n)) || 0 === n
		}, N.isFinite = N.isF = function() {
			return !!this.c
		}, N.isNaN = function() {
			return !this.s
		}, N.isNegative = N.isNeg = function() {
			return this.s < 0
		}, N.isZero = N.isZ = function() {
			return !!this.c && 0 == this.c[0]
		}, N.lessThan = N.lt = function(e, n) {
			return A = 6, this.cmp(e, n) < 0
		}, N.lessThanOrEqualTo = N.lte = function(e, n) {
			return A = 7, -1 == (n = this.cmp(e, n)) || 0 === n
		}, N.minus = function(e, n) {
			var r, t, i, a, s = this, u = s.s;
			if(n = (A = 8, e = new o(e, n)).s, !u || !n)return new o(0 / 0);
			if(u != n)return e.s = -n, s.plus(e);
			var f = s.c, c = s.e, l = e.c, m = e.e;
			if(!c || !m) {
				if(!f || !l)return f ? (e.s = -n, e) : new o(l ? s : 0 / 0);
				if(!f[0] || !l[0])return l[0] ? (e.s = -n, e) : new o(f[0] ? s : 3 == d ? -0 : 0)
			}
			if(f = f.slice(), u = c - m) {
				for(r = (a = 0 > u) ? (u = -u, f) : (m = c, l), r.reverse(), n = u; n--; r.push(0));
				r.reverse()
			}
			else for(i = ((a = f.length < l.length) ? f : l).length, u = n = 0; i > n; n++)if(f[n] != l[n]) {
				a = f[n] < l[n];
				break
			}
			if(a && (r = f, f = l, l = r, e.s = -e.s), (n = -((i = f.length) - l.length)) > 0)for(; n--; f[i++] = 0);
			for(n = l.length; n > u;) {
				if(f[--n] < l[n]) {
					for(t = n; t && !f[--t]; f[t] = 9);
					--f[t], f[n] += 10
				}
				f[n] -= l[n]
			}
			for(; 0 == f[--i]; f.pop());
			for(; 0 == f[0]; f.shift(), --m);
			return (w > m || !f[0]) && (f[0] || (e.s = 3 == d ? -1 : 1), f = [m = 0]), e.c = f, e.e = m, e
		}, N.modulo = N.mod = function(e, n) {
			var r = this, t = r.c, i = (A = 9, e = new o(e, n)).c, a = r.s, s = e.s;
			return n = !a || !s || i && !i[0], n || t && !t[0] ? new o(n ? 0 / 0 : r) : (r.s = e.s = 1, n = 1 == e.cmp(r), r.s = a, e.s = s, n ? new o(r) : (a = g, s = d, g = 0, d = 1, r = r.div(e), g = a, d = s, this.minus(r.times(e))))
		}, N.negated = N.neg = function() {
			var e = new o(this);
			return e.s = -e.s || null, e
		}, N.plus = function(e, n) {
			var r, t = this, i = t.s;
			if(n = (A = 10, e = new o(e, n)).s, !i || !n)return new o(0 / 0);
			if(i != n)return e.s = -n, t.minus(e);
			var a = t.e, s = t.c, u = e.e, f = e.c;
			if(!a || !u) {
				if(!s || !f)return new o(i / 0);
				if(!s[0] || !f[0])return f[0] ? e : new o(s[0] ? t : 0 * i)
			}
			if(s = s.slice(), i = a - u) {
				for(r = i > 0 ? (u = a, f) : (i = -i, s), r.reverse(); i--; r.push(0));
				r.reverse()
			}
			for(s.length - f.length < 0 && (r = f, f = s, s = r), i = f.length, n = 0; i; n = (s[--i] = s[i] + f[i] + n) / 10 ^ 0, s[i] %= 10);
			for(n && (s.unshift(n), ++u > b && (s = u = null)), i = s.length; 0 == s[--i]; s.pop());
			return e.c = s, e.e = u, e
		}, N.toPower = N.pow = function(e) {
			var n = 0 * e == 0 ? 0 | e : e, r = new o(this), t = new o(S);
			if(((m = -h > e || e > h) && (n = 1 * e / 0) || E(e) != e && 0 !== e && !(n = 0 / 0)) && !a(e, "exponent", "pow") || !n)return new o(Math.pow(r.toS(), n));
			for(n = 0 > n ? -n : n; 1 & n && (t = t.times(r)), n >>= 1, n;)r = r.times(r);
			return 0 > e ? S.div(t) : t
		}, N.round = function(e, n) {
			return e = null == e || ((m = 0 > e || e > p) || E(e) != e) && !a(e, "decimal places", "round") ? 0 : 0 | e, n = null == n || ((m = 0 > n || n > 8) || E(n) != n && 0 !== n) && !a(n, "mode", "round") ? d : 0 | n, l(this, e, n)
		}, N.squareRoot = N.sqrt = function() {
			var e, n, r, t, i = this, a = i.c, s = i.s, u = i.e, f = g, l = d, m = new o("0.5");
			if(1 !== s || !a || !a[0])return new o(!s || 0 > s && (!a || a[0]) ? 0 / 0 : a ? i : 1 / 0);
			for(s = Math.sqrt(i.toS()), d = 1, 0 == s || s == 1 / 0 ? (e = a.join(""), e.length + u & 1 || (e += "0"), n = new o(Math.sqrt(e) + ""), n.c || (n.c = [1]), n.e = ((u + 1) / 2 | 0) - (0 > u || 1 & u)) : n = new o(e = s.toString()), r = n.e, s = r + (g += 4), 3 > s && (s = 0), u = s; ;)if(t = n, n = m.times(t.plus(i.div(t))), t.c.slice(0, s).join("") === n.c.slice(0, s).join("")) {
				if(a = n.c, s -= e && n.e < r, 9 != a[s] || 9 != a[s - 1] || 9 != a[s - 2] || !(9 == a[s - 3] || e && 4 == a[s - 3])) {
					if(!(a[u] || a[u - 1] || a[u - 2] || a[u - 3] && 5 != a[u - 3] || (a.length > u - 2 && (a.length = u - 2), n.times(n).eq(i)))) {
						for(; a.length < u - 3;)a.push(0);
						a[u - 3]++
					}
					return d = l, c(n, g = f, 10), n
				}
				if(e && 9 == a[s - 3] && (t = n.round(f, 0), t.times(t).eq(i)))return d = l, g = f, t;
				g += 4, s += 4, e = ""
			}
		}, N.times = function(e, n) {
			var r, t = this, i = t.c, a = (A = 11, e = new o(e, n)).c, s = t.e, u = e.e, f = t.s;
			if(e.s = f == (n = e.s) ? 1 : -1, !((s || i && i[0]) && (u || a && a[0])))return new o(!f || !n || i && !i[0] && !a || a && !a[0] && !i ? 0 / 0 : i && a ? 0 * e.s : e.s / 0);
			for(e.e = s + u, (f = i.length) < (n = a.length) && (r = i, i = a, a = r, u = f, f = n, n = u), u = f + n, r = []; u--; r.push(0));
			for(s = n - 1; s > -1; s--) {
				for(n = 0, u = f + s; u > s; n = r[u] + a[s] * i[u - s - 1] + n, r[u--] = n % 10 | 0, n = n / 10 | 0);
				n && (r[u] = (r[u] + n) % 10)
			}
			for(n && ++e.e, !r[0] && r.shift(), u = r.length; !r[--u]; r.pop());
			return e.c = e.e > b ? e.e = null : e.e < w ? [e.e = 0] : r, e
		}, N.toExponential = N.toE = function(e) {
			return f(this, (null == e || ((m = 0 > e || e > p) || E(e) != e && 0 !== e) && !a(e, "decimal places", "toE")) && this.c ? this.c.length - 1 : 0 | e, 1)
		}, N.toFixed = N.toF = function(e) {
			var n, r, t, i = this;
			return null == e || ((m = 0 > e || e > p) || E(e) != e && 0 !== e) && !a(e, "decimal places", "toF") || (t = i.e + (0 | e)), n = x, e = v, x = -(v = 1 / 0), t == r ? r = i.toS() : (r = f(i, t), i.s < 0 && i.c && (i.c[0] ? r.indexOf("-") < 0 && (r = "-" + r) : r = r.replace(/^-/, ""))), x = n, v = e, r
		}, N.toFraction = N.toFr = function(e) {
			var n, r, t, i, s, u, f, c = i = new o(S), l = t = new o("0"), p = this, h = p.c, x = b, v = g, w = d, E = new o(S);
			if(!h)return p.toS();
			for(f = E.e = h.length - p.e - 1, (null == e || (!(A = 12, u = new o(e)).s || (m = u.cmp(c) < 0 || !u.c) || y && u.e < u.c.length - 1) && !a(e, "max denominator", "toFr") || (e = u).cmp(E) > 0) && (e = f > 0 ? E : c), b = 1 / 0, u = new o(h.join("")), g = 0, d = 1; n = u.div(E), s = i.plus(n.times(l)), 1 != s.cmp(e);)i = l, l = s, c = t.plus(n.times(s = c)), t = s, E = u.minus(n.times(s = E)), u = s;
			return s = e.minus(i).div(l), t = t.plus(s.times(c)), i = i.plus(s.times(l)), t.s = c.s = p.s, g = 2 * f, d = w, r = c.div(l).minus(p).abs().cmp(t.div(i).minus(p).abs()) < 1 ? [c.toS(), l.toS()] : [t.toS(), i.toS()], b = x, g = v, r
		}, N.toPrecision = N.toP = function(e) {
			return null == e || ((m = 1 > e || e > p) || E(e) != e) && !a(e, "precision", "toP") ? this.toS() : f(this, 0 | --e, 2)
		}, N.toString = N.toS = function(e) {
			var n, r, t, i = this, o = i.e;
			if(null === o)r = i.s ? "Infinity" : "NaN";
			else {
				if(e === n && (x >= o || o >= v))return f(i, i.c.length - 1, 1);
				if(r = i.c.join(""), 0 > o) {
					for(; ++o; r = "0" + r);
					r = "0." + r
				}
				else if(t = r.length, o > 0)if(++o > t)for(o -= t; o--; r += "0");
				else t > o && (r = r.slice(0, o) + "." + r.slice(o));
				else if(n = r.charAt(0), t > 1)r = n + "." + r.slice(1);
				else if("0" == n)return n;
				if(null != e)if((m = !(e >= 2 && 65 > e)) || e != (0 | e) && y)a(e, "base", "toS");
				else if(r = s(r, 0 | e, 10, i.s), "0" == r)return r
			}
			return i.s < 0 ? "-" + r : r
		}, N.valueOf = function() {
			return this.toS()
		}, "undefined" != typeof e && e.exports ? e.exports = o : (t = function() {
			return o
		}.call(n, r, n, e), !(void 0 !== t && (e.exports = t)))
	}(this)
}, function(e, n, r) {
	function t(e) {
		return e instanceof o ? e.isZero() : 0 === e
	}

	function i(e, n, r) {
		var t;
		return e instanceof o ? (t = e.abs(), t.gte(n) && t.lt(r)) : (t = Math.abs(e), t >= n && r > t)
	}

	var o = r(220);
	n.isNumber = function(e) {
		return e instanceof Number || "number" == typeof e
	}, n.isInteger = function(e) {
		return e == Math.round(e)
	}, n.sign = function(e) {
		return e > 0 ? 1 : 0 > e ? -1 : 0
	}, n.format = function(e, r) {
		if("function" == typeof r)return r(e);
		if(1 / 0 === e)return "Infinity";
		if(e === -1 / 0)return "-Infinity";
		if(isNaN(e))return "NaN";
		var a = "auto", s = void 0;
		switch(void 0 !== r && (r.notation && (a = r.notation), r && (n.isNumber(r) ? s = r : r.precision && (s = r.precision))), a) {
			case"fixed":
				return n.toFixed(e, s);
			case"scientific":
				throw new Error('Format notation "scientific" is deprecated. Use "exponential" instead.');
			case"exponential":
				return n.toExponential(e, s);
			case"auto":
				var u = .001, f = 1e5;
				if(r && r.exponential)void 0 !== r.exponential.lower && (u = r.exponential.lower), void 0 !== r.exponential.upper && (f = r.exponential.upper);
				else if(r && r.scientific)throw new Error("options.scientific is deprecated, use options.exponential instead.");
				var c = e instanceof o;
				if(c) {
					var l = o.config().EXPONENTIAL_AT;
					o.config({EXPONENTIAL_AT: [Math.round(Math.log(u) / Math.LN10), Math.round(Math.log(f) / Math.LN10)]})
				}
				if(t(e))return "0";
				var m;
				if(i(e, u, f))if(c)m = new o(e.toPrecision(s)).toString();
				else {
					var p = s ? e.toPrecision(Math.min(s, 21)) : e.toPrecision();
					m = parseFloat(p) + ""
				}
				else m = n.toExponential(e, s);
				return c && o.config({EXPONENTIAL_AT: l}), m.replace(/((\.\d*?)(0+))($|e)/, function() {
					var e = arguments[2], n = arguments[4];
					return "." !== e ? e + n : n
				});
			default:
				throw new Error('Unknown notation "' + a + '". Choose "auto", "exponential", or "fixed".')
		}
	}, n.toExponential = function(e, n) {
		return void 0 !== n ? e.toExponential(e instanceof o ? n - 1 : Math.min(n - 1, 20)) : e.toExponential()
	}, n.toFixed = function(e, n) {
		return e.toFixed(e instanceof o ? n || 0 : Math.min(n, 20))
	}, n.digits = function(e) {
		return e.toExponential().replace(/e[\+\-0-9]*$/, "").replace(/^0\.0*|\./, "").length
	}, n.toBigNumber = function(e) {
		return n.digits(e) > 15 ? e : new o(e)
	}, n.toNumber = function(e) {
		return parseFloat(e.valueOf())
	}
}, function(e, n, r) {
	function t(e) {
		for(var n = []; f(e);)n.push(e.length), e = e[0];
		return n
	}

	function i(e, n, r) {
		var t, o = e.length;
		if(o != n[r])throw new RangeError("Dimension mismatch (" + o + " != " + n[r] + ")");
		if(r < n.length - 1) {
			var a = r + 1;
			for(t = 0; o > t; t++) {
				var s = e[t];
				if(!f(s))throw new RangeError("Dimension mismatch (" + (n.length - 1) + " < " + n.length + ")");
				i(e[t], n, a)
			}
		}
		else for(t = 0; o > t; t++)if(f(e[t]))throw new RangeError("Dimension mismatch (" + (n.length + 1) + " > " + n.length + ")")
	}

	function o(e, n, r, t) {
		if(!f(e))throw Error("Array expected");
		var i, a, s = e.length, c = n[r], l = Math.min(s, c);
		if(e.length = c, r < n.length - 1) {
			var m = r + 1;
			for(i = 0; l > i; i++)a = e[i], o(a, n, m, t);
			for(i = l; c > i; i++)a = [], e[i] = a, o(a, n, m, t)
		}
		else if(void 0 !== t)for(i = s; c > i; i++)e[i] = u.clone(t)
	}

	var a = r(221), s = r(218), u = r(2), f = (r(217), Array.isArray);
	n.size = function(e) {
		var r = t(e);
		return n.validate(e, r), r
	}, n.validate = function(e, n) {
		var r = 0 == n.length;
		if(r) {
			if(f(e))throw new RangeError("Dimension mismatch (" + e.length + " != 0)")
		}
		else i(e, n, 0)
	}, n.validateIndex = function(e, n) {
		if(!a.isNumber(e) || !a.isInteger(e))throw new TypeError("Index must be an integer (value: " + e + ")");
		if(0 > e)throw new RangeError("Index out of range (" + e + " < 0)");
		if(void 0 !== n && e >= n)throw new RangeError("Index out of range (" + e + " > " + (n - 1) + ")")
	}, n.resize = function(e, n, r) {
		if(!f(e) || !f(n))throw new TypeError("Array expected");
		if(0 === n.length)throw new Error("Resizing to scalar is not supported");
		n.forEach(function(e) {
			if(!a.isNumber(e) || !a.isInteger(e) || 0 > e)throw new TypeError("Invalid size, must contain positive integers (size: " + s.format(n) + ")")
		});
		for(var t = 1, i = e[0]; f(i);)t++, i = i[0];
		for(; t < n.length;)e = [e], t++;
		for(; t > n.length;)e = e[0], t--;
		return o(e, n, 0, r), e
	}, n.squeeze = function(e) {
		for(; f(e) && 1 === e.length;)e = e[0];
		return e
	}, n.unsqueeze = function(e, r) {
		for(var t = n.size(e), i = 0, o = r - t.length; o > i; i++)e = [e];
		return e
	}, n.isArray = f
}, function(e, n) {
	n.isBoolean = function(e) {
		return e instanceof Boolean || "boolean" == typeof e
	}
}]);
//# sourceMappingURL=math.map