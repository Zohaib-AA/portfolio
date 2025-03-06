
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3603, hash: 'd5d11ab8fa40e60431d0cb28ef7b94173bc88ad65e584d5387ed91f38c4d4063', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: '9b09e75417a1eb20714220ddc190c7ad9068f60a6dbb8aff5a37dbe1ac37b07b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24078, hash: '620e3d1e1be74e20f3975bb950cdfceff27d591d1120fe9ec3a82e166db26819', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTRDFKFO.css': {size: 3020, hash: 'bBBboOE+uBU', text: () => import('./assets-chunks/styles-DTRDFKFO_css.mjs').then(m => m.default)}
  },
};
