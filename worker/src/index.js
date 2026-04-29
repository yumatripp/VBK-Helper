export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "theday-api" }, { headers: corsHeaders });
    }

    // Coming next:
    // /spotify/login
    // /spotify/callback
    // /spotify/create-playlist
    // /apple/create-playlist

    return Response.json(
      { error: "Not found", path: url.pathname },
      { status: 404, headers: corsHeaders }
    );
  },
};
