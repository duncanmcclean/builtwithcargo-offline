import html from './index.html';

export default {
    async fetch() {
        return new Response(html, {
            status: 503,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'no-store',
                'Retry-After': '3600',
            },
        });
    },
};
