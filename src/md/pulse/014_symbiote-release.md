```json
{
  "date": "18-01-2024",
  "title": "Symbiote.js 2.x is out now!",
  "summary": "Here we go!",
  "image": "https://ucarecdn.com/44913731-0dd4-471b-bd4b-b94116e4f0f1/-/scale_crop/200x200/center/-/format/auto/",
  "link": ""
}
```
# Symbiote.js 2.x is out now!

I'm happy to announce the release of a new version of the wonderful front-end library [Symbiote.js](https://symbiotejs.org/)! Never heard of it? It's time to get acquainted.

Symbiote is a compact but very powerful library for creating web components and applications based on them. Yes, I know, we already have React, Vue, Svelte, LitElement and more. And maybe it’s not very clear why delve into anything else... But don’t rush to conclusions, the Symbiote has something to offer you.

## Concept

Unlike many popular solutions, Symbiote.js takes the path of extending standard browser APIs. It is NOT trying to replace the web platform and become a new meta-platform, to create a new syntax, or reinvent the wheel in any other way. It does not require special compilers, parsers or special environment tools. The symbiote only needs a browser and JavaScript, but otherwise it is absolutely agnostic and can work both on its own and in combination with many popular and familiar technologies.

Also, a feature of Symbiote.js is that components created with it, use the DOM as the basis of their runtime. They are capable of analyzing the actual context of their use and can determine for themselves how to behave in each specific case. This makes Symbiote.js an excellent choice for creating widgets, organizing micro-frontends, creating meta applications and UI component libraries.

It is also worth noting that Symbiote.js is very flexible and extensible. It does not hide entities behind a thick layer of opaque abstractions, but, on the contrary, makes it possible to conveniently interact with them. If you are familiar with the DOM API, you already know almost everything you need and can easily create your own base class for application components with the functionality you need.

Symbiote.js is the answer to the question: - what can be squeezed out of standard HTML, JavaScript and CSS? And this answer is - You can squeeze out a lot. More than bare React and its closest, in terms of popularity, competitors can do.

In order not to be unfounded, I will give an example with such a difficult topic as SSR (Server Side Rendering). Since Symbiote templates are just HTML, which can be directly parsed by the browser without any additional processing, you can generate the base document markup for your Symbiote application with almost anything: from various CMS and JAMStack generators, to using simple template literals in Node.js or even static files directly. All you need to further “hydrate” (revitalize) the result is one single flag in the code of your wrapper component: `ssrMode = true`. That's all! There is no need to pre-generate HTML from JSX templates, no special placeholders and no magical “server components”. Here you can see how it works live: https://symbiotejs.org/2x/playground/ssr-hydration/ 

## A simple example

Here I will give a basic example from the official documentation:

```js
import Symbiote, { html, css } from 'https://esm.run/@symbiotejs/symbiote';

export class MyComponent extends Symbiote {

  init$ = {
    count: 0,
    increment: () => {
      this.$.count++;
    },
  }

}

MyComponent.template = html`
  <h2>{{count}}</h2>
  <button ${{onclick: 'increment'}}>Click me!</button>
`;

MyComponent.rootStyles = css`
  my-component {
    color: green;
  }
`;

MyComponent.reg('my-component');
```

As you can see, everything is quite simple and familiar: state initialization, component template, styles, event handlers... No conceptual complexity. You've most likely already encountered all of this, in one form or another.

## DX

At the heart of Symbiote's DX strategy (Developer Experience) is the idea that the vulgar minimization of characters printed by the developer does not equal convenience in itself. Yes, compact code and minimal boilerplate are very good (and the code of Symbiote applications does not violate general trends), but what is much more important is an understanding of what the developer sees in front of him and a clear mental model behind the development process. This is why, personally, I really don’t like fashionable “black boxes” that hide details beyond their most banal and superficial use. There are ALWAYS problems lurking in these “dark waters”. And the more “magical” your framework is, the more difficult it is to solve these problems. And sometimes, almost all development in such environments comes down to solving problems created in previous iterations.

In Symbiote.js, almost everything you see should already be familiar to you, directly or indirectly. Unless you're new to frontend. And if you are a beginner, then you can learn the necessary basics on popular sites with documentation on modern specifications, for example [MDN](https://developer.mozilla.org).

## Patterns

This section is directly related to the previous one. To implement reactivity and work with data, Symbiote uses an extremely simple and understandable pub/sub pattern (Publish–subscribe). Most changes happen synchronously, and surprise surprise, this works, in most cases, faster than the approach of accumulating changes and then rendering asynchronously. Much faster, judging by the benchmarks.

In many ways, Symbiote follows principles that favor the creation of a Loosely Coupled Architecture, which is hardwired into the DNA of the web platform. The Symbiote encourages you to create business abstractions (independent components) rather than abstractions above the platform and alternatives to native APIs that further connect your entities.

## Ecosystem

For any core library, an ecosystem of ready-made solutions is important. And often, this is an argument against using something new. And here the Symbiote also has a strong position. The fact is that due to its proximity to the platform, it can easily work with ready-made solutions for this platform and not require any special treatment. I have never had any problems with integrations, and I have already done a lot of them, from working with WebGL, to online code editors, complex UIs for working with graph data, and more.

Speaking about development environment tools, we have the same picture. An approximate and sufficient setup is described on the project website: https://symbiotejs.org/#biome 

And the Symbiote does a lot of things perfectly on its own and does not require any additional dependencies at all. For example, you don’t need to look for libraries for rendering complex dynamic tables and lists (itemize API does a great job with this), you don’t need external solutions for application localization (there are several very simple and compact ways to do this), you don’t need external state managers (you you can connect them, but Symbiote has everything you need without them, and even more). And so on. Examples can also be seen on the website: https://symbiotejs.org/#playground 

## Summary

I understand perfectly well that new front-end libs are now of little interest to anyone, in general. But I think Symbiote.js can be seen as an alternative to the black box trend, as a dedicated solution for widgets, and as an example of how the use of modern standards is changing approaches. And therefore, it is worthy of your attention, at least in general terms, for the self development and outlook.

I often communicate with other developers, conduct interviews and read posts with comments on specialized resources. And I often come across the opinion that there are libraries “for large projects” and “for the soul.” Some use it for their main work, others for personal projects. Many people like Symbiote.js, but most often it is automatically classified as the second category of solutions for “small” personal projects. It's hard for me to agree with this. Recently, my team completed another, very large project using Symbiote.js and we did not regret our choice for a second.

Thanks for your attention, and don't be sorry for the stars on [GitHub](https://github.com/symbiotejs/symbiote.js), developers will be very pleased to know that they are not “screaming into the void.”
