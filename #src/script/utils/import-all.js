/* eslint no-param-reassign: 0 */
/* eslint no-return-assign: "error" */
/* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

export default function importAll(r, arr) {
	for (const [i, s] of r.keys().entries()) arr[i] = r(s);
}
