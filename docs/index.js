import Plugin from './plugin.js';

const setStatus = (key, status, message) => {
  if (status === 'error') {
    console.error(key, status, message);
  } else {
    console.log(key, status, message);
  }
  const el = document.getElementById(key);
  el.textContent = message || status;
  el.className = `status status-${status}`;
};

const main = () => {
  let input = '';
  let output = '';
  const transformCode = (code) => {
    if (input === code) {
      return output;
    }

    const {
      code: r,
    } = Babel.transform(code, {
      plugins: [Plugin],
    });

    input = code;
    output = r;

    return r;
  };

  const $btn = document.getElementById('submit');
  const $input = document.getElementById('input');
  const $output = document.getElementById('output');

  $btn.addEventListener('click', () => {
    setStatus('code', 'pending', 'Start transforming code');

    try {
      $output.value = transformCode($input.value);
      setStatus('code', 'done', 'Done transforming code');
    } catch (e) {
      $output.value = `${e.message}\n${e.stack}`;
      setStatus('code', 'error', 'Failed transforming code');
      throw e;
    }
  }, false);

  return 'finished';
};

main()