FROM ubuntu
USER root
RUN apt-get update \
    && apt-get -y install libgbm1 libgtk2.0-0 libgtk-3-0 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN apt-get -y install curl git
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt install -y nodejs
