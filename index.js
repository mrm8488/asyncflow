'use strict';

/**
 * Allow to manage async flow with a generator
 * @param {function*} generatorFunction
 * @return {} 
 */
module.exports = gneratorFunction => {

	function callback(err) {

		if (err) {
			return generator.throw(err);
		}

		let results = [].slice.call(arguments, 1);
		generator.next(results.length > 1 ? results : results[0]);
	}

	const generator = gneratorFunction(callback);
	generator.next();

};
