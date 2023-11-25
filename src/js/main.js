import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import Rellax from 'rellax';

var rellax = new Rellax('.rellax', {
  center: true
});


window.addEventListener('resize', () => {
  rellax.refresh()
})
