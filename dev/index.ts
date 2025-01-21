import { message } from '../src/index';

message.config({ debug: true, duration: 500e3 });

// message.info('This is a info message');
// message.info({ content: 'This is a info message', duration: 1000 });

const svgIcons = {
  msg: `<svg t="1713405208589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1582" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v512z" fill="#0e6eb8" p-id="1583"></path><path d="M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="#0e6eb8" p-id="1584"></path></svg>`,
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
      | 'icon-warning'
      | 'customSvg'
      | 'handleClose';

    const type = btn.dataset.type as IType;

    if (type === 'icon-warning') {
      return message.info({
        content: 'This is a ' + type + ' message',
        icon: `<span class="iconfont warning"></span>`,
      });
    }

    if (type === 'customSvg') {
      return message.info({
        content: 'This is a ' + type + ' message',
        icon: svgIcons.msg,
      });
    }

    if (type === 'handleClose') {
      message.open({
        type: 'info',
        content: 'This is a ' + type + ' message',
        duration: 0,
        onClose: () => message.info('closed manually'),
      });
    } else {
      message[type]('This is a ' + type + ' message');
    }
  });
