# SISY's DN42 Network Website

![License](https://img.shields.io/badge/license-MIT-orange.svg) ![Vue](https://img.shields.io/badge/Vue-3.5-42b883.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6.svg)

## Docker Deployment

This project is a static site, so it is recommended to use multi-stage building in production: first use Vite to generate `dist`, then use Nginx to serve the static files.

Startup command:

```bash
docker compose up -d --build
```

The default configuration will bind the container's `80` port to the host's `127.0.0.1:8080`. If your host already has Nginx running, you can proxy traffic from `dn42.sisy.cc` on port 443 to `http://127.0.0.1:8080`.

Example site configuration:

```nginx
server {
    listen 443 ssl http2;
    server_name dn42.sisy.cc;

    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## TODO

- [ ] Batch ping tool for nodes (may need backend support)
- [ ] Better peering policy
