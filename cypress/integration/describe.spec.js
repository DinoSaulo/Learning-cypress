/// <reference types="cypress"/>

it.only('A external test...', () => {
    
});

describe('Should group tests...', () => {
    describe('Should group more specifc tests...', () => {
        it.skip('A specif test...', () => {
        
        });
    })

    describe('Should group more specifc tests 2...', () => {
        it('A specif test 2...', () => {
        
        });
    })

    it.skip('A internal test...', () => {
        
    });
})