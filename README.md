# Examples for XToolset

[![XToolSet Banner](./media/xtoolset-logo-final.svg)](https://github.com/siemienik/xtoolset)

## Useful:

* [Official documentation on Siemienik.com](https://siemienik.com/docs/xtoolset)
* [:heart: Sponsor me](https://github.com/sponsors/siemienik)
* [Gitter community](https://gitter.im/Siemienik/community)
* Package [XLSX-Renderer](https://siemienik.com/docs/xlsx-renderer) - Export data to Ecma-376 `.XLSX` Excel files based on template, 
* Package [XLSX-Import](https://siemienik.com/docs/xlsx-import) - Import data from Workbooks / Worksheets Excel files,
* License: [MIT](./LICENSE)
* Order feature or consulting: consulting@siemienik.com


## Working with:

| **TypeScript** | **JavaScript** | **NodeJS** | **React** | **Angular** | **Vue** |
|---|---|---|---|---|---|
| ![TypeScript](./media/vendors/ts-logo-256.png) | ![JavaScript](./media/vendors/js-logo-256.png) | ![NodeJS](./media/vendors/nodejs-logo-256.png) | ![React](./media/vendors/react-logo-256.png) | ![Angular](./media/vendors/angular-logo-256.png) | ![Vue](./media/vendors/vue-logo-256.png) | 

## Examples:

### Xlsx-import for front-end frameworks

* [Vue sample](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import%2Bvue) - it is a web app created with Vue that displays parsed xlsx file.
* [React sample](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import%2Breact) - it is a web app created with React that displays parsed xlsx file.
* [Angular sample](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import%2Bangular) - it is a web app created with Angular that displays parsed xlsx file.

###  Xlsx-import for Console / CLI

* [NodeJS sample](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import%2Bnodejs) of **importing an invoice** - it is pure JS example which runs on nodejs.
* [NodeJS + TS sample](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import%2Bnodejs%2Bts) of **importing an invoice** - it is Typescript example that can be transpiled down to pure JS or run directly with ts-node.
* [Command line of xlsx-import](https://github.com/Siemienik/XToolSet-examples/tree/master/xlsx-import-cli)  examples with prepared scripts based on cli version of xlsx-import.

###  Xlsx-import for backend

* [ExpressJS sample](https://github.com/Siemienik/XToolSet/tree/master/xlsx-import%2Bexpress) - it is a small service created with ExpressJS can parse xlsx files with concrete structure


### Xlsx-export

Each example contains:

* `template.xlsx` with a Template file created in MS Excel,
* `viewModel.json` with a ViewModel - data which will put into the template,
* `expected.xlsx` with the expected result.
* **After tests being run:** `test-output.xlsx` with fresh generated file.

_These examples are able to run by using the command line tool, [read more](./990-cli.md)._

| Id | Example | Explanation |
|----|---------|-------------|
| 0 | [FinishCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer000-FinishCell) | Testing `FinishCell` basic behaviour. |
| 1 | [EndRow](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer001-EndRow) | Testing `EndRowCell` behaviour |
| 2 | [Variable](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer002-Variable) | Testing displaying value of view model variables by using `VariableCell`. |
| 3 | [WsName](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer003-WsName) | Testing if `WsNameCell` set worksheet name correctly. |
| 4 | [Hyperlink](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer004-Hyperlink) | Testing creating hyperlinks by HyperlinkCell. |
| 5 | [ForEach-simple](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer005-ForEach-simple) | Checks simple loop. |
| 6 | [ForEach-Continue-stripped-table](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer006-ForEach-Continue-stripped-table) | Checks ContinueCell behaviour, creates stripped table. |
| 7 | [ForEach-Sum](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer007-ForEach-Sum) | Checks summing of loop part of column. |
| 8 | [Delete](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer008-Delete) | Testing deleting variables. |
| 9 | [ForEach-Average](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer009-ForEach-Average) | Checks getting of average of generated table. |
| 10 | [Formula](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer010-Formula) | Checks formulas. |
| 11 | [DumpCols](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer011-DumpCols) | Checks horizontally appending columns.|
| 12 | [ForEach-special](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer012-ForEach-special) | Checks advance for each usages like looping on worksheets. |
| 13 | [Merged-cells-fill](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer013-Merged-cells-fill) | Checks merged cells behaviour |
| 14 | [ForEach-merged](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer014-ForEach-merged) | Checks merged cells behaviour |
| 15 | [ForEach-merged-two-tables](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer015-ForEach-merged-two-tables) | Checks merged cells behaviour |
| 16 | [ForEach-merged-pyramid](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer016-ForEach-merged-pyramid) | Checks merged cells behaviour |
| 17 | [TemplateFormula](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer017-TemplateFormula) | Dynamic formula creation |
| 18 | [TemplateString](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer018-TemplateString) | Dynamic content creation following by custom template string (`Hello ${name}`). |