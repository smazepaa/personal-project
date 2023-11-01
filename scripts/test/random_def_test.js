const { expect } = require('chai');
const _ = require('lodash');

function pickRandomDefinition(data) {
    const wordData = _.get(data, '[0]', null);
    console.log(wordData);
    if (wordData && _.get(wordData, 'meanings[0].definitions.length', 0) > 0) {
        const meanings = _.get(wordData, 'meanings[0].definitions', []);
        if (meanings.length > 0) {
            const randomIndex = _.random(0, meanings.length - 1);
            return _.get(meanings[randomIndex], 'definition', "No definition found.");
        }
    }
    return "No definition found.";
}

describe('pickRandomDefinition', () => {
    it('should return a random definition when data is provided', () => {
        const data = [
            {
                meanings: [
                    {
                        definitions: [
                            { definition: 'Definition 1' },
                            { definition: 'Definition 2' },
                            { definition: 'Definition 3' }
                        ]
                    }
                ]
            }
        ];

        const result = pickRandomDefinition(data);
        expect(result).to.be.oneOf(['Definition 1', 'Definition 2', 'Definition 3']);
    });

    it('should return "No definition found." when no data is provided', () => {
        const result = pickRandomDefinition([]);
        expect(result).to.equal('No definition found.');
    });
});
