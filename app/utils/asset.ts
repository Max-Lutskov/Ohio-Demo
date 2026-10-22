// Prefix public assets with the app base URL so the site also works from a sub-path (e.g. GitHub Pages).
export const asset = (path: string) => useRuntimeConfig().app.baseURL.replace(/\/$/, '') + path
