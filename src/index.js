import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";

async function getComponent() {
  var element = document.createElement('div')
  const {default: _} = await import(/* webpackChunkName: "lodash" */ 'lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

getComponent().then(component => {
  document.body.appendChild(component());
})