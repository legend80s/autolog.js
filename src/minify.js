const fs = require('fs');
const CleanCSS = require('clean-css');

main();

function minify() {
  const css = fs.readFileSync('./src/autolog.css', 'utf8');
  const minified = new CleanCSS().minify(css).styles;
  // 读取ts文件，获取开头为`const cssStr =`的行，将其替换为压缩后的css
  const ts = fs.readFileSync('./src/index.ts', 'utf8');
  const cssStr = ts.match(/const cssStr = `([\s\S]*?)`;/)[1];
  const newTs = ts.replace(
    cssStr,
    '/*请勿直接修改压缩后的 css，请修改 autolog.css，否则你的修改将会被覆盖*/\n' +
      minified
  );
  fs.writeFileSync('./src/index.ts', newTs);
}

function watch(files, cb) {
  fs.watch(files, () => {
    console.log('File changed re-minify:', files);
    cb();
  });
}

function main() {
  minify();
  watch('./src/autolog.css', minify);
}
