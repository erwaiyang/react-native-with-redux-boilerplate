jest.unmock('../../src/actions/counterActions');

import * as actions from '../../src/actions/counterActions';
import * as types from '../../src/constants/actionTypes';

describe('counter actions', () => {

  describe('increment', () => {
    it('should create an action to increase the counter', () => {
      const expected = {
        type: types.INCREMENT
      };
      expect(actions.increment()).toEqual(expected);
    });
  });

  describe('decrement', () => {
    it('should create an action to decrease the counter', () => {
      const expected = {
        type: types.DECREMENT
      };
      expect(actions.decrement()).toEqual(expected);
    });
  });
});
