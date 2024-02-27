import {omit} from 'lodash';

export default function clearActionsMeta(actions) {
  return actions.map((action) => omit(action, ['meta']));
}