FROM alpine:3.10

# Install nodeJS
RUN apk add --update nodejs npm

#Install python
RUN apk add --no-cache python3 py3-pip
RUN ln -s /usr/bin/python3 /usr/bin/python

#Install Java
RUN apk add openjdk11

#Install Dart
# RUN apk add --no-cache bash file git curl curl-dev
# RUN git clone https://github.com/flutter/flutter.git
# ENV PATH="$PATH:/flutter/bin"
# RUN flutter channel stable

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

# Checks
# NodeJS
RUN node --version
# Python
RUN python3 -V
# Java
RUN java -version
# Dart
# C++
RUN g++ --version
# Go
RUN go version
# Rust
RUN rustc --version
# R
RUN R --version

#Initializing the server
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start