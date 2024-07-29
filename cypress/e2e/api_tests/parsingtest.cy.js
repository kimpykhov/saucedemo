import checkStructure from './utils/functions';
import expectedStructure from './utils/responseExamples';

describe('API parsing test', () => {
    it('should save values from JSON response', () => {
        const endpoint = 'https://reqres.in/api/users/2';
        cy.request('GET', endpoint)
        .then((response) => {
            expect(response.status).to.eq(200);

            // Response structure checking
            checkStructure(response.body, expectedStructure);

            const jsonData = response.body;

            const parsedName = jsonData.data.first_name;
            const parsedSurname = jsonData.data.last_name;
        });
    });
});