'use strict';


module.exports = asyncFlow;
/**
 * Allow to manage async flow with a generator
 * @param {function*} generatorFunction
 * @return {} 
 */
function asyncFlow (generatorFunction) {

	function callback(err) {

		if (err) {
			
			return generator.throw(err);
		}

		let results = [].slice.call(arguments, 1);

		generator.next(results.length > 1 ? results : results[0]);

	};

	const generator = generatorFunction(callback);

	generator.next();

};
