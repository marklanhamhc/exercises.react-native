import { createAsyncAction } from 'typesafe-actions';
import { Fixture } from '../../core/api/models';

export const getFixtures = createAsyncAction(
  '@fixtures/get/request',
  '@fixtures/get/success',
  '@fixtures/get/failure'
)<undefined, Fixture[], undefined>();
