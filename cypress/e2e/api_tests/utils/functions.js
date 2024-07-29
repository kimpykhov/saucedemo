function checkStructure(actual, expected) {
    for (const key in expected) {
        expect(actual).to.have.property(key);
        if (typeof expected[key] === 'object' && !Array.isArray(expected[key])) {
            checkStructure(actual[key], expected[key]);
        } else {
            expect(typeof actual[key]).to.eq(expected[key]);
        }
    }
}

export default checkStructure;