<p>
    <a href="https://www.npmjs.com/package/styled-container-query" target="_blank"><img src="https://flat.badgen.net/npm/v/styled-container-query" alt="NPM-Version"/></a>
    <a href="https://www.npmjs.com/package/styled-container-query" target="_blank"><img src="https://flat.badgen.net/npm/dt/styled-container-query" alt="NPM-Downloads"/></a>
    <a href="https://www.npmjs.com/package/styled-container-query" target="_blank"><img src="https://flat.badgen.net/bundlephobia/minzip/styled-container-query" alt="NPM-Size"/></a>
    <a href="https://www.npmjs.com/package/styled-container-query" target="_blank"><img src="https://flat.badgen.net/npm/license/styled-container-query" alt="NPM-License"/></a>
</p>

# Styled Container Query
Use Container Queries \[Element Queries\] with [styled-components](https://github.com/styled-components)

NPM-Package: [styled-container-query](https://www.npmjs.com/package/styled-container-query)

## Demo
[https://freddyfy.github.io/styled-container-query/](https://freddyfy.github.io/styled-container-query/)

[https://codesandbox.io/s/483170qvyw](https://codesandbox.io/s/483170qvyw)

## Installing

```
npm install styled-container-query --save
```

## Usage
Nothing easier than that. You can use it like [styled-components](https://github.com/styled-components) and an element query `:container()`.

```javascript
import styledContainerQuery from 'styled-container-query';

const Child = styled.span``
const Component = styledContainerQuery.div`
  background-color: green;
  
  &:container(min-width: 500px) {
    background-color: red;
    ${Child} {
          color: white;
      }
  }
  
  &:container(max-width: 600px and max-width: 900px) {
      background-color: yellow;
  }
  
  &:container(min-height: 500px) {
      background-color: blue;
  }
  
  &:container(min-width: 50%) {
      background-color: blue;
  }
`;
```

## Known issues
* Props inside a container-query does not work. [#1](https://github.com/FreddyFY/styled-container-query/issues/1)

## License
MIT License

Copyright &copy; 2019 Freddy Ochner

[LICENSE](https://github.com/FreddyFY/styled-container-query/blob/master/LICENSE)
