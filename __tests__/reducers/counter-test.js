jest.unmock('../../src/reducers/counterReducer');

import counterReducer from '../../src/reducers/counterReducer';
import * as types from '../../src/constants/actionTypes';

describe('counterReducer', () => {
    it('should return initial state', () => {
      expect(counterReducer( undefined, {} )).toEqual({ count: 0 });
    });

    it('should handle INCREMENT', () => {
      expect(counterReducer( {
        count: 1244
      }, {
        type: types.INCREMENT
      } )).toEqual(
        {
          count: 1245
        }
      );
    });

    it('should handle DECREMENT', () => {
      expect(counterReducer( {
        count: 1245
      }, {
        type: types.DECREMENT
      } )).toEqual(
        {
          count: 1244
        }
      );
    });
});
