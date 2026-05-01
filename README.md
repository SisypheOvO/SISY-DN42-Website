# SISY's DN42 Network Website

![License](https://img.shields.io/badge/license-MIT-orange.svg) ![Vue](https://img.shields.io/badge/Vue-3.5-42b883.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6.svg)

## Usage

If you want to deploy this project on your own server, you can follow the instructions below.

### Data

All variables you may need to change is stored in the `/data/index.ts` file. You should edit these variables first.

> [!IMPORTANT]
> Make sure to keep all things related to YOUR OWN NETWORK leaving none of my network information in the file.
>
> This is important for both you and me.

### Build and deploy

#### Use GitHub Actions

If you want to use GitHub Actions for deployment, you can follow the instructions below.

1. Fork this repository.
2. Go to the "Settings" of your forked repository, then go to "Secrets and variables" > "Actions".
3. Add the following secrets:
   - `SERVER_HOST`: Your server's IP address or hostname.
   - `SERVER_USER`: Your server's SSH username. It is recommended to use a non-root user with limited permissions for security reasons.
   - `SSH_PRIVATE_KEY`: Your SSH private key (make sure it has access to your server AND DO NOT LEAK IT).
   - `SERVER_PORT` (optional): Your server's SSH port (default 22).
   - `SERVER_DEPLOY_PATH`: The path on your server where the project is deployed (e.g., `/home/user/sisy-dn42-website`).
4. Commit and push your changes to the `main` branch of your forked repository.
5. GitHub Actions will automatically build and deploy the project to your server hopefully.

#### Compose by yourself

This project is a static site, so it is recommended to use multi-stage building in production: first use Vite to generate `dist`, then use Nginx to serve the static files.

Startup command:

```bash
git clone git@github.com:SisypheOvO/SISY-DN42-Website.git
docker compose up -d --build
```

### After deployment

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
