/* Cloudflare Web Analytics. The beacon token identifies this site; it is not an account API key. */
(() => {
  'use strict';
  // Keep development previews out of the production statistics.
  if (location.protocol !== 'https:' || location.hostname !== 'm3maker.cn') return;
  if (document.querySelector('script[data-cf-beacon]')) return;
  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({token: '1dfc771664af4550a6ecf21c987c4cfa'}));
  document.head.appendChild(beacon);
})();
