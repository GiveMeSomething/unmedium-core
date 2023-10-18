# UnMedium Core

[![Latest release](https://img.shields.io/github/v/release/givemesomething/unmedium-core?color=facc15)](https://github.com/GiveMeSomething/unmedium-core/releases)

## Description

- Read (any?) articles from Google Cache with a click!
- No more "member-only story" paywall from Medium
- Also check out [unmedium](https://github.com/GiveMeSomething/unmedium) for a full version with a web reader

## How to use

- Go to [Releases](https://github.com/GiveMeSomething/unmedium-core/releases/tag/1.0.0) section and download the ZIP file included with the release (unmedium.zip), then unzip.
- Open `Manage extension` and turn on `Developer Mode`.
- `Load unpacked` the folder that you have unzip earlier

## Why does it exist?

- Recently, Medium added "member-only stories" feature, which can be translated as a paywall. You must pay subscription to read these articles.
- There are things I want to read, but not always. I'm willing to pay for everyday services, not for something that I rarely use.

## How does it work?

- First it redirect to Google Cache with the current URL as the query
- Disable all incoming scripts (currently from medium's sources)
- The rest is magic?

## Roadmap

- Domain Storage: Medium provide its creator with the ability to change their domain. This extension only work with hostname that include the `medium` string. For this issue, I'll try and add a feature that can store multiple appliable domain and configurable by user

## License

Copyright 2023 GiveMeSomething

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

UnMedium exists thanks to everyone who contributes ideas or code, reports bugs, or simply uses the extension. Thank you!
