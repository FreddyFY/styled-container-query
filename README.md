# Styled Container Query
Use Container Queries \[Element Queries\] with [styled-components](https://github.com/styled-components)

## Demo
[https://codesandbox.io/s/483170qvyw](https://codesandbox.io/s/483170qvyw)

## Installing

```
npm install styled-container-query --save
```

## Usage
Nothing easier than that. You can use it like [styled-components](https://github.com/styled-components) and a media query `:container()`.

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
`;
```

## License
MIT License

Copyright &copy; 2018 Freddy Ochner

[LICENSE](https://github.com/FreddyFY/styled-container-query/blob/master/LICENSE)
