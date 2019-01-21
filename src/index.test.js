import * as index from "./index";
import test from "ava";

test("hello world", (t) => {
  t.is(index.hello(), "Hello, World!");
});
