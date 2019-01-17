<h1 align="center">Firebase & GCP Examples</h1>

<p align="center">
Firebase & GCP examples exploring FaaS with <a href="https://firebase.google.com/docs/functions/">Cloud Functions</a>, BaaS with <a href="https://firebase.google.com/">Firebase</a>, serverless app architecture, server-side rendering and more!
</p>

<!-- badges -->

<p align="center">
  <a href="https://github.com/prettier/prettier"><img alt="styled with Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" /></a>
  <a href="#contribs"><img alt="all contributors" src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat" /></a>
  <a href="#contribs"><img alt="prs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" /></a>
</p>

<!-- toc -->

<p align="center">
    <em>
      🗒 <a href="#notes">notes on examples</a>
      · 🔧 <a href="#code-compat">code compatibility</a>
      · 👨‍👩‍👧‍👦 <a href="#contribs">contributions</a>
      · 💻 <a href="#dev-tools">developer tools used</a>
      · 👨‍💻 <a href="#find-me">find me</a>
    </em>
</p>

<img
    src='https://cdn-images-1.medium.com/max/1000/1*gJJhD2GynUDikKl5OWbk_w.gif'
    title='Firebase & Google Cloud Platform Examples'
    alt="Firebase & GCP"
/>

<h2 id="posts-n-code">📑 posts & code</h2>

For all my blog posts, see my Medium [Table of Contents](https://medium.com/@jthegedus/table-of-contents-ec337953b39b) post.

Legend: 📚 Theory, 💻 Examples & 💬 Comments.

| Blog posts                                                                                                                                                                                                  | Repo/Folder                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| [💬 Awesome Firebase](https://medium.com/@jthegedus/awesome-firebase-6876cb9563e4)                                                                                                                          | [awesome-firebase](https://github.com/jthegedus/awesome-firebase) |
| [💬 State of Firebase (late 2018)](https://medium.com/@jthegedus/the-state-of-firebase-late-18-e74e6d4a940e)                                                                                                | --                                                                |
| [💬 Exploring Cloud Functions for Firebase](https://medium.com/@jthegedus/exploring-cloud-functions-for-firebase-cdf62297349e)                                                                              | --                                                                |
| [📚 Babel & preset-env](https://medium.com/@jthegedus/babel-preset-env-cbc0bbf06b8f)                                                                                                                        | --                                                                |
| [📚 Firebase Package Names and Bundle Sizes](https://medium.com/@jthegedus/firebase-package-names-and-bundle-sizes-ec10cede63f1)                                                                            | [fb-namespaced_packages](/fb-namespaced_packages)                 |
| [📚 Cloud Functions for Firebase with Compiled Code](https://medium.com/@jthegedus/cloud-functions-for-firebase-with-compiled-code-e234e83462dc)                                                            | --                                                                |
| [💻 Part 1: Cloud Functions for Firebase with Babel, Flow & TypeScript](https://medium.com/@jthegedus/cloud-functions-for-firebase-with-babel-flow-typescript-796606628d37)                                 | [fb-functions-compiled_code](/fb-functions-compiled_code)         |
| [💻 Part 2: Cloud Functions for Firebase with Flow, TypeScript & ReasonML via ParcelJS](https://medium.com/@jthegedus/cloud-functions-for-firebase-with-flow-typescript-reasonml-via-parceljs-bf94dd5b325c) | [fb-functions-compiled_code](/fb-functions-compiled_code)         |

| OLD (to be replaced) Technical Blog posts                                                                                                                                 | Repo/Folder                                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| [ES6+ in Cloud Functions for Firebase #2](https://medium.com/@jthegedus/es6-in-cloud-functions-for-firebase-2-415d15205468)                                               | [firebase-functions-babel-example](https://github.com/jthegedus/firebase-gcp-examples/tree/deprecated/firebase-functions-es6-babel) |
| [Express.js on Cloud Functions for Firebase](https://medium.com/@jthegedus/express-js-on-cloud-functions-for-firebase-86ed26f9144c)                                       | [firebase-functions-express](/fb-functions-express)                                                                                 |
| [GraphQL Server on Cloud Functions for Firebase](https://medium.com/@jthegedus/graphql-server-on-cloud-functions-for-firebase-ae97441399c0)                               | [firebase-functions-graphql-example](https://github.com/jthegedus/firebase-functions-graphql-example)                               |
| [Next.js on Cloud Functions for Firebase with Firebase Hosting](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2) | [firebase-functions-next-example](https://github.com/jthegedus/firebase-functions-next-example)                                     |
| GraphQL Server on GCP Cloud Functions                                                                                                                                     | [gcp-functions-graphql](/gcp-functions-graphql)                                                                                     |
| []()                                                                                                                                                                      | [](/)                                                                                                                               |

<h2 id="notes">🗒 notes on examples</h2>

These examples use [Yarn](https://yarnpkg.com/) for all npm scripts, so either install Yarn or replace all uses of `yarn` in the scripts with `npm run`.

I use [asdf](https://github.com/asdf-vm/asdf) to manage my Node runtimes. Some examples require specific Node versions, see the `.tool-versions` file or use this tool to get the exact versions.

<h2 id="code-compat">🔧 code compatibility</h2>

Everything was tested on Ubuntu 18.10. If you wish for Windows native support please [submit an issue](https://github.com/jthegedus/firebase-gcp-examples/issues/new) so we can work on a Windows branch. Please report any macOS errors as I do not have access to a device to test. [My development environment can be found here](https://github.com/jthegedus/dotfiles).

<h2 id="contribs">👨‍👩‍👧‍👦 contributions</h2>

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/20798510?v=4" width="100px;"/><br /><sub><b>James Hegedus</b></sub>](https://medium.com/@jthegedus)<br />[📝](#blog-jthegedus "Blogposts") [💻](https://github.com/jthegedus/firebase-gcp-examples/commits?author=jthegedus "Code") [📖](https://github.com/jthegedus/firebase-gcp-examples/commits?author=jthegedus "Documentation") [💡](#example-jthegedus "Examples") [🤔](#ideas-jthegedus "Ideas, Planning, & Feedback") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

**Please note:** I do intend to write a blog post about each of the examples here. I have a lot of examples in various stages of progress that I will release when I have the blog post written. If you wish to contribute to examples prior to a post being written I will of course credit all contributions to each particular example :smile:

If you have a request please open an issue so we can discuss how & why it should be implemented.

<h2 id="dev-tools">💻 developer tools used</h2>

- [asdf](https://github.com/asdf-vm/asdf) - extendable version manager with support for Node, OCaml, Ruby, Go, Python and more!
- [Yarn](https://github.com/yarnpkg/yarn) - NodeJS package manager
- [PrettierJS](https://prettier.io/) - Opinionated Code Formatter.

<h2 id="find-me">👨‍💻 find me...</h2>

<ul>
  <li><a href="https://medium.com/@jthegedus">:writing_hand: medium</a></li>
  <li><a href="https://twitter.com/">:bird: twitter</a></li>
  <li><a href="https://github.com/jthegedus">:octocat: github</a></li>
</ul>
