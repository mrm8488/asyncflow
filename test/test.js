'use strict';

const expect = require('chai').expect;
const asyncFlow = require('../index');

describe('#asyncFlow => manage asyncFlow with direct style (without callbacks)', () => {

    it('should execute async operations in the written order', done => {

        let date;
        let date2;
        let date3;
        
        asyncFlow(function* (callback) {

            //Async operation 1
            yield setTimeout(() => {

                date = new Date();

            }, 100, callback);

            expect(date).to.not.be.undefined;
            expect(date2).to.be.undefined;
            expect(date3).to.be.undefined;

            //Async operation 2
            yield setTimeout(() => {

                date2 = new Date();

            }, 50, callback);

            expect(date).to.not.be.undefined;
            expect(date2).to.not.be.undefined;
            expect(date3).to.be.undefined;

            //Async operation 3
            yield setTimeout(() => {

                date3 = new Date();

            }, 50, callback);

            expect(date).to.not.be.undefined;
            expect(date2).to.not.be.undefined;
            expect(date3).to.not.be.undefined;

            expect(date1).to.be.lt(date2);
            expect(date2).to.be.lt(date3);
            expect(date3).to.be.let(new Date());

        });

        done();

    });
});    