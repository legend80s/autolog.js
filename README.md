> Forked from [autolog.js](https://github.com/Auto-Plugin/autolog.js/blob/main/README.md)

<h1 align="center">🐜 antd-message-mini 💬</h1>

> `message.info/success/warning/error/loading`
>
> Lightweight message toast. A pixel-level imitation version of Ant Design (antd v5) message static methods.

[demo](https://unpkg.com/antd-message-mini@1.0.0/dist/index.html)

## Features

- 🎈 **Lightweight**: no dependencies. 1.7kb (minified) ![bundlephobia](https://badgen.net/bundlephobia/min/antd-message-mini).
- 🐪 **Framework-agnostic, run in everywhere**: no rely on heavy frameworks such as antd, react, vue, etc.
- 🎎 **Pixel-level imitation** of antd `message[level](...)`.

## Installation

```bash
npm install antd-message-mini --save
```

### install from CDN

### 🚚 jsdelivr

```html
<script src="https://cdn.jsdelivr.net/npm/antd-message-mini@1.0.0/dist/antd-message-mini.min.js"></script>
```

### 📦 unpkg

```html
<script src="https://unpkg.com/antd-message-mini@1.0.0/dist/antd-message-mini.min.js"></script>

<script>
  const message = window.antdMessageMini;

  message.info('This is a info message');
</script>
```

## 🍞 Usage

```js
import { message } from 'antd-message-mini';

message.info('This is a info message');
message.success('This is a success message');
message.warning('This is a warning message');
message.error('This is a error message');
message.loading('This is a loading message');
```

## ⚙️ API

Common props ref：[Common props](/docs/react/common-props)

This component provides some static methods, with usage and arguments as following:

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.loading(content, [duration], onClose)`

| Argument | Description | Type | Default |
| --- | --- | --- | --- |
| content | The content of the message | ReactNode \| config | - |
| duration | Time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 1.5 |
| onClose | Specify a function that will be called when the message is closed | function | - |

`afterClose` can be called in thenable interface:

- `message[level](content, [duration]).then(afterClose)`
- `message[level](content, [duration], onClose).then(afterClose)`

where `level` refers one static methods of `message`. The result of `then` method will be a Promise.

Supports passing parameters wrapped in an object:

- `message.open(config)`
- `message.success(config)`
- `message.error(config)`
- `message.info(config)`
- `message.warning(config)`
- `message.loading(config)`

The properties of config are as follows:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| className | Customized CSS class | string | - |
| content | The content of the message | ReactNode | - |
| duration | Time(seconds) before auto-dismiss, don't dismiss if set to 0 | number | 3 |
| icon | Customized Icon | ReactNode | - |
| key | The unique identifier of the Message | string \| number | - |
| style | Customized inline style | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |
| onClick | Specify a function that will be called when the message is clicked | function | - |
| onClose | Specify a function that will be called when the message is closed | function | - |

### Global static methods

Methods for global configuration and destruction are also provided:

- `message.config(options)`
- `message.destroy()`

> use `message.destroy(key)` to remove a message。

#### message.config

> When you use `ConfigProvider` for global configuration, the system will automatically start RTL mode by default.(4.3.0+)
>
> When you want to use it alone, you can start the RTL mode through the following settings.

```js
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: 'my-message',
});
```

| Argument | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| duration | Time before auto-dismiss, in seconds | number | 3 |  |
| getContainer | Return the mount node for Message, but still display at fullScreen | () => HTMLElement | () => document.body |  |
| maxCount | Max message show, drop oldest if exceed limit | number | - |  |
| prefixCls | The prefix className of message node | string | `ant-message` | 4.5.0 |
| rtl | Whether to enable RTL mode | boolean | false |  |
| top | Distance from top | string \| number | 8 |  |

## 🤝 Contributing

```sh
pnpm i

pnpm run dev
```

Open `http://localhost:9000` to see the demo.

And edit `src/index.ts` and `dev/index.ts` to see the changes in real-time.

## 📜 License

MIT
