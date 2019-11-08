// import { add } from './utils';
// console.log( add ( 1, 2 ) );

/**Multiple imports */
import { add as myfun, subtract } from './utils';
console.log( myfun ( 1, 2 ) );
console.log( subtract ( 1, 2 ) );


/**Different name */
// import { add as utilAdd, subtract } from './utils';
// console.log( utilAdd ( 1, 2 ) );
// console.log( subtract ( 1, 2 ) );

/**Import all */
// import * as utilitiesLib from './utils';
// console.log( utilitiesLib.add ( 1, 2 ) );
// console.log( utilitiesLib.subtract ( 1, 2 ) );

/**Import default */
// import hello from './utils';
// console.log( hello() );