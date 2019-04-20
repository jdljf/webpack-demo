import _ from 'lodash'

function component() {
  let element = document.createElement('div');
  let button = document.createElement('div');
  let br = document.createElement('br');

  button.innerHTML = 'click me and look at the console';
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => {
    import(/* webpackChunkName: "print" */ './print').then(module => {
      let print = module.default;

      print()
    })
  }

  return element
}

document.body.appendChild(component());