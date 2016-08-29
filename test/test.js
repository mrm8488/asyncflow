'use strict';

const expect = require('chai').expect;
const asyncFlow = require('../index');
const fs = require('fs');

describe('#asyncFlow => manage asyncFlow with direct style (without callbacks)', () => {

    it('should execute async operations in the written order', done => {

        
        asyncFlow(function* (callback) {


            yield fs.writeFile('./test/testFile', 'Hey there!', callback);

            const data = yield fs.readFile('./test/testFile', 'utf8', callback);

            expect(data).to.be.eql('Hey there!');

            yield fs.unlink('./test/testFile', callback);

            done();
        
        });

    });


     it('should execute async operations in the written order (error in flow)', done => {


        asyncFlow(function* (callback) {

            try {

                yield fs.writeFile('./test/testFile', 'Hey there!', callback);

                yield fs.unlink('./test/testFile', callback);    

                const data =  yield fs.readFile('./test/testFile', 'utf8', callback);

            } catch (err) {

                expect(err).to.not.be.undefined;
                expect(err.code).to.be.eql('ENOENT');

                done();
            
            }

        });

     });
});    