import { agregaAlDom } from './helpers';
import add from './add';
import SuperPerson from './person';


agregaAlDom('<hr>');
const Nick = new SuperPerson ('Nick Saban', 'coach');
const Aaron = new SuperPerson ('Aaron', 'MVP');

agregaAlDom(Nick.speak('Roll Tide!'));
agregaAlDom(Aaron.speak('relax'));
agregaAlDom(Aaron.runningTheTable());
agregaAlDom(Nick.orderTacos('two'));
agregaAlDom(Nick.sayHeroName('coach'));