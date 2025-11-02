import {computeStatistics} from '../statistics.mjs';
import {expect} from 'chai';

describe('Statistics', () => {
    it('reports average, min, max', () => {
        const computedStats = computeStatistics([98.6, 98.2, 97.8, 102.2]);
        const epsilon = 0.001;
        expect(computedStats.average).to.be.closeTo(99.2, epsilon);
        expect(computedStats.min).to.be.closeTo(97.8, epsilon);
        expect(computedStats.max).to.be.closeTo(102.2, epsilon);
    });
    it('reports NaN for empty input', () => {
        const computedStats = computeStatistics([]);
        // All fields of computedStats (average, max, min) must be
        // NAN (not-a-number)
        // Design the expect statement here.
        // Use https://www.w3schools.com/jsref/jsref_isnan.asp
    });
});
