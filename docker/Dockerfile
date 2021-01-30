FROM alpine:3.10

# Install NodeJS
RUN apk add --update nodejs npm

#Install python
RUN apk add --no-cache python3 py3-pip

#Install Java
RUN apk add openjdk11

#Install Dart
ENV DART_VERSION 2.10.4

RUN \
    apt-get -q update && apt-get install --no-install-recommends -y -q gnupg2 curl git ca-certificates apt-transport-https openssh-client && \
    curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list && \
    curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_testing.list > /etc/apt/sources.list.d/dart_testing.list && \
    curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_unstable.list > /etc/apt/sources.list.d/dart_unstable.list && \
    apt-get update && \
    apt-get install dart=$DART_VERSION-1 && \
    rm -rf /var/lib/apt/lists/*

ENV DART_SDK /usr/lib/dart
ENV PATH $DART_SDK/bin:/root/.pub-cache/bin:$PATH

#Install C++
RUN apk --no-cache --update add build-base

#Install Go
RUN apk add --no-cache git make musl-dev go

ENV GOROOT /usr/lib/go
ENV GOPATH /go
ENV PATH /go/bin:$PATH

RUN mkdir -p ${GOPATH}/src ${GOPATH}/bin


#Install Rust
RUN apk add rust cargo

#Install R
RUN apk add R