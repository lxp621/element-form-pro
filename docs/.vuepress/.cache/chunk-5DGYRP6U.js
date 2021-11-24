import {
  init_runtime_dom_esm_bundler
} from "./chunk-ZPM5TX27.js";
import {
  __esm,
  init_define_DEMOBLOCK_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-MDHWYISI.js";

// node_modules/.pnpm/vue-demi@0.12.1_vue@3.2.22/node_modules/vue-demi/lib/index.mjs
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
var isVue2, isVue3;
var init_lib = __esm({
  "node_modules/.pnpm/vue-demi@0.12.1_vue@3.2.22/node_modules/vue-demi/lib/index.mjs"() {
    init_define_DEMOBLOCK_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    init_runtime_dom_esm_bundler();
    init_runtime_dom_esm_bundler();
    isVue2 = false;
    isVue3 = true;
  }
});

export {
  isVue2,
  isVue3,
  set,
  init_lib
};
//# sourceMappingURL=chunk-5DGYRP6U.js.map
