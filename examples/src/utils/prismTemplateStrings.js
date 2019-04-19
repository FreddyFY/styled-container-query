import { languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-typescript'

Prism.languages.insertBefore('jsx', 'template-string', {
  'styled-template-string': {
    pattern: /(styled\w*(\.\w+|\([^\)]*\))(\.\w+(\([^\)]*\))*)*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
    greedy: true,
    inside: {
      'styled-function': {
        pattern: /(styled\w*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)/,
        inside: {
          scq: /styledContainerQuery/,
        },
      },
      interpolation: {
        pattern: /\$\{[^}]+\}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation',
          },
          rest: languages.jsx,
        },
      },
      string: {
        pattern: /[^$;]+/,
        inside: languages.css,
        alias: 'language-css',
      },
    },
  },
})

Prism.languages.insertBefore('css', 'selector', {
  'scq-function': {
    pattern: /:container\(.*\)/,
    inside: {
      function: /container/,
      property: Prism.languages.css.property,
      punctuation: Prism.languages.css.punctuation,
      rule: Prism.languages.css.rule,
      selector: Prism.languages.css.selector,
      and: /and/,
    },
  },
})
Prism.languages.insertBefore('jsx', 'comment', {
  'render-function': {
    pattern: /render\((?:\$\{[^}]+\}|\\\\|\\?[^\\])*?\)/,
    lookbehind: true,
    greedy: true,
  },
})

export { languages }
