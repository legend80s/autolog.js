> Forked from [autolog.js](https://github.com/Auto-Plugin/autolog.js/blob/main/README.md)

# antd-message-mini

> Lightweight pixel-level imitation version of Ant Design (antd v5) message component.
>
> `message.info/success/warning/error/loading`

[demo](https://unpkg.com/antd-message-mini@1.0.0/dist/index.html)

## Features

- Pixel-level imitation of antd message component.
- Framework-agnostic, running everywhere: Not rely on heavy frameworks such as antd, react, vue, etc.
- Lightweight.
- No dependencies.

## Installation

```bash
npm install antd-message-mini
```

### install from CDN

### jsdelivr

```html
<script src="https://cdn.jsdelivr.net/npm/antd-message-mini@1.0.0/dist/antd-message-mini.min.js"></script>
```

### unpkg

```html
<script src="https://unpkg.com/antd-message-mini@1.0.0/dist/antd-message-mini.min.js"></script>

<script>
  const message = window.antdMessageMini;

  message.info('This is a info message');
</script>
```

## Usage

```js
import { message } from 'antd-message-mini';

message.info('This is a info message');
message.success('This is a success message');
message.warning('This is a warning message');
message.error('This is a error message');
message.loading('This is a loading message');
```

## API

## License

MIT
