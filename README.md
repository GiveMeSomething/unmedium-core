# UnMedium Core

## Description

- Read Medium articles from Google Cache with a click!
- No more "member-only story" paywall
- Also check out [unmedium](https://github.com/GiveMeSomething/unmedium) for a full version with a web reader

## Why does it exist?

- I love Medium, people share their experiences and their insights through articles, making the world a better place. But recently, Medium added "member-only stories" feature, which can be translated as a paywall. You must pay subscription to read these articles.
- There are something I want to read at times, but not always. I'm willing to pay for something I use everyday, not something that I use scarcely.

## How does it exist?

- It starts with a Google query "view medium articles free". Then I stumbled upon a GitHub blog that guides people [How to utilize Google Cache to read the articles](https://canererden.com/blog/2023/unlock-medium/).

- One small problem with the solution, pages only work in text-only mode. It was okay for most, but it was a little bit confusing for some with multiple illustrations and diagrams (system design articles for example)

- After inspection, all pages' layout and content were there, but only a blank white space was shown. I assumed they must render the content first for SEO reasons, then add extra interactions on the run. Fun fact, they use React, and now it is safe to assume that they use Static Server Side Rendering with Rehydration. Read more about [Rendering on the web](https://web.dev/articles/rendering-on-the-web)

- After much research, all I have to do is just disable JavaScript using Chrome DevTools. It worked, and now the extension have to imitate the same behavior for my idea to work. For the extension, I just block all incoming scripts using Chrome `declarativeNetRequest` settings

## License

Copyright 2023 GiveMeSomething

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
