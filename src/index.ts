const cssStr = `#autolog{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;pointer-events:none;width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:9999999;cursor:pointer;transition:.2s}#autolog>span{pointer-events:auto;width:max-content;animation:fadein .4s;animation-delay:0s;border-radius:6px;padding:10px 20px;box-shadow:0 0 10px 6px rgba(0,0,0,.1);margin:4px;transition:.2s;z-index:9999999;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;height:max-content;overflow:hidden;background-color:#fafafa}#autolog>span>span{max-width:50vw}#autolog span.hide{opacity:0;pointer-events:none;transform:translateY(-10px);height:0;padding:0;margin:0}#autolog>.autolog-warn{background-color:#fffaec;color:#e29505}#autolog>.autolog-error{background-color:#fde7e7;color:#d93025}#autolog>.autolog-info{background-color:#e6f7ff;color:#0e6eb8}#autolog>.autolog-success{background-color:#e9f7e7;color:#1a9e2c}#autolog>.autolog-{background-color:#fafafa;color:#333}@keyframes fadein{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}`;

const warnSvg = `<svg t="1713405237257" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2387" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z" fill="#e29505" p-id="2388"></path><path d="M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#e29505" p-id="2389"></path><path d="M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z" fill="#e29505" p-id="2390"></path></svg>`;

const svgIcons = {
  warn: warnSvg,
  warning: warnSvg,
  error: `<svg t="1713405212725" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1744" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#d93025" p-id="1745"></path><path d="M657.066667 360.533333c-12.8-12.8-32-12.8-44.8 0l-102.4 102.4-102.4-102.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l102.4-102.4 102.4 102.4c6.4 6.4 14.933333 8.533333 23.466667 8.533334s17.066667-2.133333 23.466666-8.533334c12.8-12.8 12.8-32 0-44.8l-106.666666-100.266666 102.4-102.4c12.8-12.8 12.8-34.133333 0-46.933334z" fill="#d93025" p-id="1746"></path></svg>`,
  info: `<svg t="1713405208589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1582" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666666v512z" fill="#0e6eb8" p-id="1583"></path><path d="M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="#0e6eb8" p-id="1584"></path></svg>`,
  success: `<svg t="1713405224326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2225" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#1a9e2c" p-id="2226"></path><path d="M701.866667 381.866667L448 637.866667 322.133333 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.333334 149.333333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l277.333333-277.333333c12.8-12.8 12.8-32 0-44.8-14.933333-12.8-36.266667-12.8-49.066666-2.133333z" fill="#1a9e2c" p-id="2227"></path></svg>`,
  loading: `<svg color="#1677ff" viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=" animation: loadingCircle 1s infinite linear; "><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>`,
  // x for close icon
  x: `<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l512-512c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733334l-512 512c-8.533333 8.533333-17.066667 12.8-29.866667 12.8zM768 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-512-512c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733334 0l512 512c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z" fill="#000000"/></svg>`,
  '': '',
};
type AutologLogType<T extends Record<string, string>> =
  | keyof typeof svgIcons
  | keyof T;

type IType = AutologLogType<typeof svgIcons>;

interface MessageConfig {
  content: string;
  duration?: number;
  onClose?: () => void;
  type: IType;
  icon?: SvgString;
}

type SvgString = string;
interface IGlobalConfig {
  debug?: boolean;
  duration: number;
}

const globalConfig: IGlobalConfig = { duration: 2500 };

function info(config: Omit<MessageConfig, 'type'>): void;
function info(content: string, duration?: number, onClose?: () => void): void;
function info(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  log(parseConfig('info', config, duration, onClose));
}

function success(config: Omit<MessageConfig, 'type'>): void;
function success(
  content: string,
  duration?: number,
  onClose?: () => void
): void;
function success(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  log(parseConfig('success', config, duration, onClose));
}

function warn(config: Omit<MessageConfig, 'type'>): void;
function warn(content: string, duration?: number, onClose?: () => void): void;
function warn(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  log(parseConfig('warn', config, duration, onClose));
}

function error(config: Omit<MessageConfig, 'type'>): void;
function error(content: string, duration?: number, onClose?: () => void): void;
function error(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  log(parseConfig('error', config, duration, onClose));
}

function loading(config: Omit<MessageConfig, 'type'>): void;
function loading(
  content: string,
  duration?: number,
  onClose?: () => void
): void;
function loading(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  log(parseConfig('loading', config, duration, onClose));
}

function parseConfig(
  type: IType,
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  if (typeof config === 'string') {
    return { content: config, duration, onClose, type };
  }

  return Object.assign(config, { type });
}

function log({
  type,
  content,
  duration = globalConfig.duration,
  onClose,
  icon = svgIcons[type],
}: MessageConfig) {
  if (globalConfig.debug) {
    console.log('[message DEBUG]', { type, content, duration, onClose, icon });
  }

  const time = duration + 900; // 400ms for fadein, 500ms for fadeout
  const mainEl = getMainElement();
  let el = document.createElement('span');
  el.className = `autolog-${type}`;
  // icon-success icon-warning
  // if (type.startsWith('icon-')) {
  //   // dev.ts 使用案例
  //   el.innerHTML = `<span class="iconfont ${type}"></span> <span>${escapeHtml(
  //     content
  //   )}</span>`;
  // } else {
  // }

  el.innerHTML = icon + `<span>${escapeHtml(content)}</span>`;

  if (!onClose) {
    el.innerHTML += getX(type as keyof MtoastElementColor);
  }
  mainEl.appendChild(el);
  // 当time和autoClose都存在时，点击关闭
  if (onClose) {
    el?.addEventListener('click', () => {
      el!.classList.add('hide');
      setTimeout(() => {
        mainEl.removeChild(el!);
        // @ts-expect-error el can be null
        el = null;
        onClose?.();
      }, 500);
    });
  } else {
    setTimeout(() => {
      el!.classList.add('hide');
    }, time - 500);
    setTimeout(() => {
      mainEl.removeChild(el!);
      // @ts-expect-error el can be null
      el = null;
    }, time);
  }
}

export const message = {
  log,
  open(config: MessageConfig) {
    log(config);
  },

  info,
  success,
  warn,
  warning: warn,
  error,
  loading,
  config(options: { duration?: number; debug?: boolean }) {
    if (typeof options.duration === 'number') {
      globalConfig.duration = options.duration;
    }

    if (typeof options.debug === 'boolean') {
      globalConfig.debug = options.debug;
    }
  },
  destroy(key?: string | number) {
    const mainEl = getMainElement();
    if (key) {
      const el = mainEl.querySelector(`span[key="${key}"]`);
      if (el) {
        el.classList.add('hide');
        setTimeout(() => {
          mainEl.removeChild(el);
        }, 500);
      }
    } else {
      mainEl.innerHTML = '';
    }
  },
};
// 定义颜色对象的类型
type MtoastElementColor = {
  warn: string;
  error: string;
  info: string;
  success: string;
};
// 定义 mtoastElementColor 对象
const mtoastElementColor: MtoastElementColor = {
  warn: '#e29505',
  error: '#d93025',
  info: '#0e6eb8',
  success: '#1a9e2c',
};
// 定义 getX 函数
function getX(type: keyof MtoastElementColor): string {
  const svgEl = svgIcons.x; // 从 svgIcons 获取 x 图标
  const coloredSvgEl = svgEl.replace(
    'fill="#000000"',
    `fill="${mtoastElementColor[type]}"`
  );
  return coloredSvgEl;
}

function getMainElement() {
  let mainEl = document.querySelector('#autolog');
  if (!mainEl) {
    mainEl = document.createElement('div');
    mainEl.id = 'autolog';
    document.body.appendChild(mainEl);
    const style = document.createElement('style');
    style.innerHTML = cssStr;
    document.head.insertBefore(style, document.head.firstChild);
  }
  return mainEl;
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, '&amp;') // & -> &amp;
    .replace(/</g, '&lt;') // < -> &lt;
    .replace(/>/g, '&gt;') // > -> &gt;
    .replace(/"/g, '&quot;') // " -> &quot;
    .replace(/'/g, '&#039;') // ' -> &#039;
    .replace(/\n/g, '</br>');
}
