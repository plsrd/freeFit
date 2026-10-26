/**
 * Builds a reference filter that hides documents already picked in the same array,
 * so editors can't add the same reference twice.
 * @param {Array<{_ref?: string}>} [existingReferences] - The array the reference lives in
 * @returns {{filter: string, params: {existingEntries: string[]}}}
 */
export const createReferenceFilter = (existingReferences = []) => {
  const existingEntries = existingReferences.map(({_ref}) => _ref).filter(Boolean)
  return {
    filter: '!(_id in $existingEntries)',
    params: {
      existingEntries,
    },
  }
}
