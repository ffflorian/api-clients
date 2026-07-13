import config from '@ffflorian/eslint-config';
import {defineConfig} from 'eslint/config';
import {createRequire} from 'node:module';

// `typescript-eslint`'s dependency tree is pinned (via packageExtensions in .yarnrc.yml) to the
// TypeScript 6 compat package, since it doesn't yet support TypeScript 7. Resolving
// `@typescript-eslint/parser` as a bare specifier (as `eslint-plugin-import`'s `import/parsers`
// setting does by default) would instead pick up the project's real TypeScript 7, so we point it
// at the patched, nested instance explicitly.
const requireFromRoot = createRequire(`${process.cwd()}/package.json`);
const requireFromTypescriptEslint = createRequire(requireFromRoot.resolve('typescript-eslint/package.json'));
const typescriptEslintParserPath = requireFromTypescriptEslint.resolve('@typescript-eslint/parser');

for (const entry of config) {
  const parsers = entry.settings?.['import/parsers'];
  if (parsers && entry.settings) {
    entry.settings['import/parsers'] = Object.fromEntries(
      Object.entries(parsers).map(([parserPath, extensions]) => [
        parserPath === '@typescript-eslint/parser' ? typescriptEslintParserPath : parserPath,
        extensions,
      ])
    );
  }
}

export default defineConfig(config);
