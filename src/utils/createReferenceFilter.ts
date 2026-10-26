import type {ReferenceFilterSearchOptions} from 'sanity'

/**
 * Builds a reference filter that hides documents already picked in the same array,
 * so editors can't add the same reference twice.
 * @param existingReferences - The array the reference lives in. Sanity hands this over
 *   untyped, so entries without a `_ref` (e.g. a half-created item) are ignored.
 */
export const createReferenceFilter = (
  existingReferences: Array<{_ref?: unknown}> = [],
): ReferenceFilterSearchOptions => {
  const existingEntries = existingReferences
    .map(({_ref}) => _ref)
    .filter((ref): ref is string => typeof ref === 'string')

  return {
    filter: '!(_id in $existingEntries)',
    params: {
      existingEntries,
    },
  }
}
