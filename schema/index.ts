import { workout } from './documents/workout';
import { exercise } from './documents/exercise';
import { muscle } from './documents/target';
import { equipment } from './documents/equipment';
import { exerciseComponent } from './objects/exerciseComponent';
import { programDay } from './objects/programDay';
import { requiredEquipment } from './objects/requiredEquipment';
import { category } from './documents/category';

export const schemaTypes = [
  // Document types
  workout,
  exercise,
  muscle,
  equipment,
  category,
  // Object types
  exerciseComponent,
  programDay,
  requiredEquipment,
];
