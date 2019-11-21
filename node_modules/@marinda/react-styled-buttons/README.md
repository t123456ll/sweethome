# React Styled Buttons

<p align="center">
  <a href="https://travis-ci.org/mariiinda/react-styled-buttons" target="_blank">
    <img src="https://api.travis-ci.org/mariiinda/react-styled-buttons.svg?branch=master" alt="">
    </a>
  <a href="https://www.npmjs.com/package/@marinda/react-styled-buttons" target="_blank">
    <img src="https://badgen.net/npm/v/@marinda/react-styled-buttons" alt="">
    </a>
  <a href="LICENSE.md" target="_blank">
    <img src="https://badgen.net/badge/license/ISC/blue" alt="">
  </a>
  <a href="https://www.npmjs.com/package/@marinda/react-styled-buttons" target="_blank">
    <img src="https://badgen.net/npm/dt/@marinda/react-styled-buttons" alt="">
  </a>
  <a href="https://marinda.me/react-styled-buttons/?path=/story/components-button--primary" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="">
  </a>
</p>


React button components with WCAG 2 AA contrast ratio tested colors, light and dark theme options. Flexible & easily customized.

Uses a theme based on [System UI Theme Specification](https://system-ui.com/theme/) & can be overriden by passing in your own theme as a prop.

If you are using emotion, styles can also be overriden via [composition](https://emotion.sh/docs/composition).

## Getting Started

Install.

```sh
npm i -S @marinda/react-styled-buttons
```

Import the Button component into your app:

```js
import { Button } from '@marinda/react-styled-buttons';
```

Add Button to your render function.

```js
<Button>Click Me!</Button>
```

## Demo
Explore all the button themes, styles and sizes in the [Storybook](https://marinda.me/react-styled-buttons/?path=/story/components-button--primary).

## Button props

These are the available props for the button component.

### as

Allows you to overwrite the element - by default it is rendered as a button element. This is useful if you need to use a routing Link component

```js
<Button as={Link} to="/about">
  About
</Button>
```

### any html attribute

Any html attribute can be passed as a prop and will be set as an attribute to the element.

```js
<Button tabindex="-1">
  About
</Button>
```

### onClick or any react on event handler

```js
<Button
onClick={() => {
    /* your click handler */
}}
onMouseUp={() => {
    /* your mouse up handler */
}}
>
```

### variant

Button variant - this will assign different theme styles for each variant. Options: primary(default), secondary, accent1, accent2, accent3, accent4, muted, highlight, gray.

```js
<Button variant="secondary">
  About
</Button>
```

### size

Three sizes: large(default), medium, small.

```js
<Button size="small">
  About
</Button>
```

### mode

Mode: light or dark.

```js
<Button mode="dark">
  About
</Button>
```

### disabled

Sets button to disabled.

```js
<Button disabled>
  About
</Button>
```

### 

Disables button animation on hover & click.

```js
<Button disableAnimation>
  About
</Button>
```

Disable color transforms on hover & click.

```js
<Button disableColorTransforms>
  About
</Button>
```

### theme

The Button component uses a theme [preset](https://github.com/mariiinda/tetris-theme-ui-preset)  to set styles. Override the theme by passing a theme object, this will be merged with the Button's theme. Pass in the same [properties](https://github.com/mariiinda/tetris-theme-ui-preset/blob/master/src/json/index.json) as the inner theme.


```js
<Button
  mode={mode}
  theme={{
    colors: {
      background: "#f8f0fc",
      primary: "#862E9C",
      modes: {
        dark: {
          background: "#333",
          primary: "#e599f7"
        }
      }
    },
    shadows: {
      default: "0 .5rem 1rem rebeccapurple"
    }
  }}
>
  Custom theme button
</Button>
```

##  Styles

### Compose your own styles
 If you are using [emotion](https://emotion.sh/), you can merge your own styles with existing styles ([composition](https://emotion.sh/docs/composition)) by passing in a [css prop](https://emotion.sh/docs/css-prop).

```js
<Button
css={css`
    background: red;
    &:hover {
    background: green;
    }
`}
>
About
</Button>
```