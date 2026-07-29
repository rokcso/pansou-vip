export default {
  async fetch(request, env) {
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) return asset;

    const url = new URL(request.url);
    const isPagePath = !url.pathname.endsWith('/') && !url.pathname.includes('.');
    if (!isPagePath) return asset;

    url.pathname = `${url.pathname}.html`;
    return env.ASSETS.fetch(new Request(url, request));
  },
};
