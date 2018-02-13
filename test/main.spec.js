const fs = require('fs');
const { expect } = require('chai');

describe('class', function() {
    describe('method', function() {
        it('test', function() {
            fs.writeFileSync('./' + new Date().getMilliseconds(), new Date().toISOString());
            expect(1).to.equal(1);
        });
    });
});
