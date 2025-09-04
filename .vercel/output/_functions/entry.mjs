import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DhXaPqYJ.mjs';
import { manifest } from './manifest_DD0M1tO-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/jobs/_slug_.astro.mjs');
const _page3 = () => import('./pages/api/team/_slug_.astro.mjs');
const _page4 = () => import('./pages/api/team-categories/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/career.astro.mjs');
const _page7 = () => import('./pages/privacy-policy.astro.mjs');
const _page8 = () => import('./pages/support.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.5_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/jobs/[slug].ts", _page2],
    ["src/pages/api/team/[slug].ts", _page3],
    ["src/pages/api/team-categories/[slug].ts", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/career.astro", _page6],
    ["src/pages/privacy-policy.astro", _page7],
    ["src/pages/support.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ffae9ac0-09fc-428b-b943-2bc048bbbabf",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
