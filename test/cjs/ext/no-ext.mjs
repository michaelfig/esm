import assert from "assert"

export default () => {
  return import("../../fixture/cjs/ext/no-ext-esm")
    .then(() => assert.ok(false))
    .catch((e) => assert.strictEqual(e.code, "ERR_UNKNOWN_FILE_EXTENSION"))
}
