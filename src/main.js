import {getUsers} from './all';
// import './all';
import './style.scss';

// test();

getUsers().then(function(data) {
  console.log(data)
})


console.log('test 2')