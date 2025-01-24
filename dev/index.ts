import { message } from '../src/index';

// @ts-expect-error make it possible to try in the console
window.message = message;
const label = `[antd-message-mini]`;
// @ts-expect-error make it possible to try in the console
console.log(label, 'window.message:', window.message);
console.log(label, "Try `message.success('Hello World 🎉🎉🎉')`");

message.success(
  'This is a info message. You can try it by typing `message.info` in the console (F12)'
);

// message.open({
//   content: 'This is a colorful info message',
//   escapeHTML: false,
//   duration: 3000,
//   type: 'info',
//   colorful: true,
//   className: 'custom-class',
//   style: {
//     marginTop: '20vh',
//   },
//   closable: true,
// });

// message.config({ debug: false, duration: 5e3, colorful: false });

const svgIcons = {
  bell: `<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4116"><path d="M168.176581 709.482978V402.116972c0-148.766679 118.119466-272.760195 275.058735-301.236563V0.063848h137.529368v100.752713c156.875421 28.476369 275.058736 152.533732 275.058735 301.236563v307.429854H958.938521v126.100511H65.061479v-66.785384-59.315127h103.115102zM659.362015 896.30328c0 70.552438-61.613668 127.69672-137.529368 127.69672C445.853099 1024 384.30328 966.855718 384.30328 896.30328h275.058735zM612.688864 223.277715l-97.432598 0.383091-175.136052 272.249407 80.895873 0.638484h133.315376L436.46739 679.857339h98.90111L703.54508 416.99364l-204.953236-0.574635L612.752712 223.341564z"  p-id="4117"></path></svg>`,
};

document
  .querySelector('.container')
  ?.addEventListener('click', function (event) {
    const btn = event.target;
    if (!(btn instanceof HTMLButtonElement)) {
      return;
    }

    type IType =
      | 'info'
      | 'success'
      | 'warn'
      | 'warning'
      | 'error'
      | 'loading'
      | 'customSvg'
      | 'handleClose'
      | 'customCssAndStyle';

    const text = btn.innerText;
    const { level, iconfont, icon } = btn.dataset;
    const type = level as IType;

    if (iconfont) {
      return message.error({
        content: 'This is a ' + `"${text}"` + ' message',
        icon: `<i class="iconfont ${iconfont}"></i>`,
      });
    }

    if (type === 'customSvg') {
      return message.warn({
        content: 'This is a ' + `"${text}"` + ' message',
        icon: svgIcons.bell,
      });
    }

    if (type === 'handleClose') {
      return message.open({
        type: 'info',
        content: 'This is a ' + `"${text}"` + ' message',
        closable: true,
        duration: -1,
        icon,
        onClose: () => message.success('closed manually', 1000),
      });
    }

    if (type === 'customCssAndStyle') {
      return message.open({
        type: 'info',
        content: 'This is a ' + `"${text}"` + ' message',
        closable: true,
        icon,
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },

        escapeHTML: false,
        duration: -1,
      });
    }

    message[type]({
      content: 'This is a ' + `"${text}"` + ' message',
      icon,
    });
  });
