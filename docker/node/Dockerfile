FROM node:latest

COPY ./docker/node/scripts/welcome.sh /etc/profile.d/welcome.sh
COPY ./docker/node/scripts/restart-vite.sh /usr/local/bin/restart-vite
COPY ./docker/node/scripts/stop-vite.sh /usr/local/bin/stop-vite
RUN chmod +x /usr/local/bin/restart-vite \
    && chmod +x /etc/profile.d/welcome.sh \
    && chmod +x /usr/local/bin/stop-vite

RUN echo '[ -f /etc/profile.d/welcome.sh ] && source /etc/profile.d/welcome.sh' >> /root/.bashrc
CMD [ "tail", "-f", "/dev/null" ]
