# Vilvona AI — runtime image
# Installs the published npm package; the launcher fetches the OpenClaw
# runtime on first start, same as `npx vilvona`.
FROM node:22-slim

RUN npm install -g vilvona && npm cache clean --force

ENV OPENCLAW_PORT=4000
EXPOSE 4000

CMD ["vilvona"]
