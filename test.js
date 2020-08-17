import firebase from 'firebase/app';
import 'firebase/firestore';

const ft = firebase.firestore();

ft.collection('user').doc('r3dFqwxEMxKr1RBecppo').collection('cartItem').doc('26nzklRYqBIRL4xiaCi1');
ft.doc('/users/r3dFqwxEMxKr1RBecppo/cartItem/26nzklRYqBIRL4xiaCi1');
ft.collection('/users/r3dFqwxEMxKr1RBecppo/cartItem');