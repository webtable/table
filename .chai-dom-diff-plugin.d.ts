/// <reference types="chai" />

import { DiffOptions } from './get-diffable-html';

/**
 * The type declarations in this file fix some type issues in Chai introduced by @open-wc/semantic-dom-diff. Details
 * about the bug can be found here: https://github.com/open-wc/open-wc/issues/2675
 * 
 * The npm script "fix:chai" copies this file into node_modules/@open-wc/semantic-dom-diff/chai-dom-diff-plugin.d.t
 * which overwrites the bug. Once the bug in @open-wc/semantic-dom-diff is fixed, this file and the "fix:chai" script
 * can be deleted.
 */
declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
      dom: Assertion;
      lightDom: Assertion;
      shadowDom: Assertion;
      notEqual(actual: Object, expected: Object, message?: string): void;
      equalSnapshot(options?: Object): Promise<Assertion>;
      notEqualSnapshot(options?: Object): Promise<Assertion>;
    }

    interface Assert {
      dom: Pick<Assertion, 'equal' | 'notEqual' | 'equalSnapshot' | 'notEqualSnapshot'>;
      lightDom: Pick<Assertion, 'equal' | 'notEqual' | 'equalSnapshot' | 'notEqualSnapshot'>;
      shadowDom: Pick<Assertion, 'equal' | 'notEqual' | 'equalSnapshot' | 'notEqualSnapshot'>;
      equalSnapshot(fixture: unknown, options?: DiffOptions): Promise<Assertion>;
      notEqualSnapshot(fixture: unknown, options?: DiffOptions): Promise<Assertion>;

      equal<T>(actual: T, expected: T, message?: string, options?: DiffOptions): void;
      equal<T>(actual: T, expected: T, message?: string): void;
      equal<T>(actual: T, expected: T, options?: DiffOptions): void;

      notEqual<T>(actual: T, expected: T, message?: string, options?: DiffOptions): void;
      notEqual<T>(actual: T, expected: T, message?: string): void;
      notEqual<T>(actual: T, expected: T, options?: DiffOptions): void;
    }

    interface Equal {
      (value: unknown, message?: string, options?: DiffOptions): Assertion;
      (value: unknown, options?: DiffOptions): Assertion;
    }
  }
}
