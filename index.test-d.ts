import {expectType} from 'tsd';
import roet from './index.js';

expectType<number>(roet(9));
expectType<number>(roet(9, 3));
