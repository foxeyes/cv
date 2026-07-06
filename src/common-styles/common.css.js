export default /*css*/ `
@view-transition {
  navigation: auto;
}

:root {
  --clr-1: #eee;
  --clr-2: #212121;

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --ui-size: 40px;
  --col-w: 960px;

  --calc-gap-aside: clamp(calc((100vw - var(--col-w)) / 2 - var(--gap-mid)), var(--gap-max), var(--gap-max));
  --calc-top-pan-height: calc(var(--ui-size) + var(--gap-mid) * 2);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: var(--clr-1);
  color: var(--clr-2);
  overscroll-behavior: none;
  height: 100dvh;
}

body {
  opacity: 1;
  transition: opacity 1s;

  @starting-style {
    opacity: 0;
  }
}

a {
  color: currentColor;
  font-weight: bold;
}

article {
  display: block;
  margin: auto;
  max-width: var(--col-w);
  min-height: calc(100dvh - var(--ui-size) * 2 - var(--gap-mid) * 4);
  padding: var(--gap-max);

  blockquote {
    display: block;
    margin: 0;
    margin-bottom: 2lh;
    padding: var(--gap-max);
    border: var(--gap-min) solid currentColor;
    box-shadow: 5px 5px 0 currentColor;

    p {
      margin: 0;
    }

    > ul {
      margin: 0 !important;

      li {
        margin: 0;
        border: none;
        padding-left: unset;
        font-style: italic;

        &:before {
          display: none;
        }
      }
    }
  }

  img[src^="https://rnd-pro.com/idn/"] {
    width: 100%;
  }

  svg {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center center;

    path {
      vector-effect: non-scaling-stroke;
    }
  }

  ul {
    position: relative;
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 20px;

    &[cols] {
      column-count: 2;
      column-gap: var(--gap-max);
    }

    li {
      position: relative;
      display: block;
      padding: 10px;
      padding-left: 30px;
      border-left: var(--gap-min) solid currentColor;
      margin-bottom: 0;

      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        width: 10px;
        height: var(--gap-min);
        border-bottom: var(--gap-min) solid currentColor;
        content: "";
        color: currentColor;
        margin-right: var(--gap-mid);
      }
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    margin-bottom: 20px;
    table-layout: fixed;

    th, td {
      padding: var(--gap-mid);
      border: var(--gap-min) solid currentColor;
    }
  }

  h2, h3 {
    margin-top: 4ch;
  }

  hr {
    border: none;
    height: var(--gap-min);
    background-color: var(--clr-2);
  }
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--clr-1) var(--clr-2);
}

@media screen and (width < 800px) {
  ul {
    &[cols] {
      column-count: unset !important;
      column-gap: unset !important;
    }
  }
}
`;