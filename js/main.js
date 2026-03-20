import { Counter } from './modules/counter.js';
import { StepCounter } from './modules/counter.js';

// default counter counter
const counter1 = new Counter("#counter-container1");

// specific counter counter
const counter2 = new Counter("#counter-container2", 3);

// default Step counter
const counter3 = new StepCounter("#counter-container3");

// specific Step counter
const counter4 = new StepCounter("#counter-container4", 5, 10);