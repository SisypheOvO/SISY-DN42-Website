import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Plugin to inject network name into HTML title from data/index.ts
function injectTitlePlugin() {
    return {
        name: "inject-title",
        transformIndexHtml(html: string) {
            try {
                const dataPath = path.resolve(__dirname, "src/data/index.ts")
                const dataContent = fs.readFileSync(dataPath, "utf-8")
                // export const siteTitle = "Example Title"
                const siteTitleMatch = dataContent.match(/siteTitle\s*=\s*["'`](.+?)["'`]/)
                if (siteTitleMatch && siteTitleMatch[1]) {
                    const siteTitle = siteTitleMatch[1]
                    return html.replace(/<title>[^<]*<\/title>/, `<title>${siteTitle}</title>`)
                }
            } catch (error) {
                console.warn("Failed to inject title:", error)
            }
            return html
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        injectTitlePlugin(),
        vue(),
        tailwindcss(),
        visualizer({
            filename: "dist/stats.html",
            open: false,
            gzipSize: true,
            brotliSize: true,
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
