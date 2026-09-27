import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    assetsInclude: ["**/*.glb"],
    server: {
      allowedHosts: [".ngrok-free.dev", "hastiest-brutely-faustina.ngrok-free.dev"],
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
