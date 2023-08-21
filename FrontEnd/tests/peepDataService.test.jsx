import axios from 'axios';
import { getPeepData } from '../src/utils/dataService';
import { describe } from 'vitest';
import testPeeps from '../src/constants/mockPeepData.json';


vi.mock(`axios`);

describe('getPeepData tests', () => {
    describe('GET request tests to /response', () => {
        it('1. should actually make the external data call', async () => {
            // Arrange
            // Nothing to arrange here. For this test, the data doesn't need to be returned.
            // Act
            await getPeepData();
            // Assert
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/');
        })

        test('2. should have a successful request with the correct data returned', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: testPeeps });
            // Act
            const result = await getPeepData();
            // Assert
            expect(result).toEqual(testPeeps);
        })

        test('3. should have an unsuccessful request returning an error object', async () => {
            // Arrange
            const error = { message: 'Error' };
            axios.get.mockRejectedValueOnce(error);
            // Act
            const result = await getPeepData();
            // Assert
            expect(result).toBe(error);
        })
    })
})