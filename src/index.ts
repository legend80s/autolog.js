import cssStr from './autolog.css';

const warnSvg = `<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>`;

const svgIcons = {
  warn: warnSvg,
  warning: warnSvg,
  error: `<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg>`,

  info: `<svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>`,

  success: `<svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>`,

  loading: `<svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" fill="currentColor" aria-hidden="true" style=" animation: loadingCircle 1s infinite linear; "><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>`,

  close: `<svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>`,
};
// type AutologLogType<T extends Record<string, string>> =
//   | keyof typeof svgIcons
//   | keyof T;

type ILevel = Exclude<keyof typeof svgIcons, 'close'>;

interface MessageConfig extends Partial<IGlobalConfig> {
  content: string;
  onClose?: () => void;
  type: ILevel;
  icon?: SvgString;
}

type SvgString = string;
interface IGlobalConfig {
  debug: boolean;

  // -1 for no auto close and show close button
  duration: number;

  /** show background color */
  colorful: boolean;

  /** show close icon */
  closable: boolean;
}

const globalConfig: IGlobalConfig = {
  debug: false,
  duration: 2500,
  colorful: false,
  closable: false,
};

function info(config: Omit<MessageConfig, 'type'>): void;
function info(content: string, duration?: number, onClose?: () => void): void;
function info(
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  open(parseConfig('info', config, duration, onClose));
}

type IMethod = typeof info;

// function success(config: Omit<MessageConfig, 'type'>): void;
// function success(
//   content: string,
//   duration?: number,
//   onClose?: () => void
// ): void;
const success: IMethod = (
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) => {
  open(parseConfig('success', config, duration, onClose));
};

// function warn(config: Omit<MessageConfig, 'type'>): void;
// function warn(content: string, duration?: number, onClose?: () => void): void;
const warn: IMethod = (
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) => {
  open(parseConfig('warn', config, duration, onClose));
};

// function error(config: Omit<MessageConfig, 'type'>): void;
// function error(content: string, duration?: number, onClose?: () => void): void;
const error: IMethod = (
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) => {
  open(parseConfig('error', config, duration, onClose));
};

// function loading(config: Omit<MessageConfig, 'type'>): void;
// function loading(
//   content: string,
//   duration?: number,
//   onClose?: () => void
// ): void;
const loading: IMethod = (
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) => {
  open(parseConfig('loading', config, duration, onClose));
};

function parseConfig(
  type: ILevel,
  config: Omit<MessageConfig, 'type'> | string,
  duration?: number,
  onClose?: () => void
) {
  if (typeof config === 'string') {
    return { content: config, duration, onClose, type };
  }

  return Object.assign(config, { type });
}

function open({
  type,
  content,
  duration = globalConfig.duration,
  onClose,
  icon = svgIcons[type],
  colorful = globalConfig.colorful,
  closable = globalConfig.closable,
}: MessageConfig) {
  if (globalConfig.debug) {
    console.log('[message DEBUG]', { type, content, duration, onClose, icon });
  }

  const FADE_IN_TIME = 400;
  const FADE_OUT_TIME = 500;
  const autoClose = duration > 0;
  console.log('duration:', duration, globalConfig);
  // if duration is less than 0, it means never close
  duration = duration <= 0 ? 30 * 24 * 3600e3 : duration;
  const time = duration < 0 ? 0 : duration + (FADE_IN_TIME + FADE_OUT_TIME);
  const mainEl = getMainElement();
  let el = document.createElement('span');
  el.className = `autolog-${type} ${colorful ? 'colorful' : ''}`;
  // icon-success icon-warning
  // if (type.startsWith('icon-')) {
  //   // dev.ts 使用案例
  //   el.innerHTML = `<span class="iconfont ${type}"></span> <span>${escapeHtml(
  //     content
  //   )}</span>`;
  // } else {
  // }

  el.innerHTML = icon + escapeHtml(content);

  const showCloseIcon = !autoClose || closable;
  console.log('showCloseIcon:', { showCloseIcon, autoClose, closable });

  if (showCloseIcon) {
    el.innerHTML += getCloseIcon(type, colorful);
  }

  mainEl.appendChild(el);

  if (!showCloseIcon) {
    setTimeout(() => {
      el!.classList.add('hide');
    }, time - 500);
    setTimeout(() => {
      mainEl.removeChild(el!);
      // @ts-expect-error el can be null
      el = null;
    }, time);

    return;
  }

  // 当time和 autoClose 都存在时，点击关闭
  el.addEventListener('click', (event) => {
    // @ts-expect-error event.target.dataset
    console.log('event.target:', event.target.dataset);
    if ((event.target as HTMLElement).dataset.icon !== 'close') {
      return;
    }

    el.classList.add('hide');
    setTimeout(() => {
      mainEl.removeChild(el!);
      // @ts-expect-error el can be null
      el = null;
      onClose && onClose();
    }, 500);
  });
}

export const message = {
  open,

  info,
  success,
  warn,
  warning: warn,
  error,
  loading,
  config(options: Partial<IGlobalConfig>) {
    if (typeof options.duration === 'number') {
      globalConfig.duration = options.duration;
    }

    if (typeof options.debug === 'boolean') {
      globalConfig.debug = options.debug;
    }

    if (typeof options.closable === 'boolean') {
      globalConfig.closable = options.closable;
    }

    if (typeof options.colorful === 'boolean') {
      globalConfig.colorful = options.colorful;
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
type IColor = `#${string}`;

const LevelColor: Record<ILevel, IColor> = {
  info: '#1677FF',
  success: '#52C41A',
  warn: '#FAAD14',
  warning: '#FAAD14',
  error: '#FF4D4F',
  loading: '#1677FF',
};

function getCloseIcon(type: ILevel, colorful: boolean): string {
  const svgEl = svgIcons.close;

  if (!colorful) {
    return svgEl;
  }

  const coloredSvgEl = svgEl.replace(
    'fill="#000000"',
    `fill="${LevelColor[type]}"`
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
