FROM node:16.14.2-alpine3.15

# Set enviroment variables.
ENV PORT=80
ENV ZEROQ_TOKEN=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjYWphLWxvcy1hbmRlczpkZXNhY3Jpc3RpYW4udmVyYUBjYWphbG9zYW5kZXMuY2wiLCJ1c2VyIjp7ImlkIjoxMzk1Mzg2LCJ1c2VyX2lkIjoxMzk1Mzg2LCJ1aWQiOiJjYWphLWxvcy1hbmRlczpkZXNhY3Jpc3RpYW4udmVyYUBjYWphbG9zYW5kZXMuY2wiLCJuYW1lIjoiQ1JJU1RJQU4gRlJFRERZIFZFUkEgU0FCQUciLCJydXQiOiIxNDUyMTc4Ni01IiwidHlwZSI6Im9ubG9va2VyIiwiZW1haWwiOiJkZXNhY3Jpc3RpYW4udmVyYUBjYWphbG9zYW5kZXMuY2wiLCJwcm92aWRlciI6ImNhamEtbG9zLWFuZGVzIiwibWV0YSI6eyJuYW1lIjoiQ1JJU1RJQU4gRlJFRERZIFZFUkEgU0FCQUciLCJydXQiOiIxNDUyMTc4Ni01IiwidGVtcG9yYXJ5IjpmYWxzZX19LCJ0eXBlIjoib25sb29rZXIiLCJpZCI6MTM5NTM4NiwidXNlcl9pZCI6MTM5NTM4NiwiZW1haWwiOiJkZXNhY3Jpc3RpYW4udmVyYUBjYWphbG9zYW5kZXMuY2wiLCJwcm92aWRlciI6ImNhamEtbG9zLWFuZGVzIiwiaWF0IjoxNjUxMTg0MzA3LCJpc3MiOiJaZXJvUSJ9.VGyyV_G4nwSYe1Tw_X4KYjE2VNU1HI-2GrTTsiwY_MFI55dwKQ-qNOHHPgI5Iswpszd4cRDp0B2sjIylj8rggQ
ENV ENV_SDK=PRODUCTION
ENV ENV_URL_SDK=zeroq.cl

EXPOSE $PORT

WORKDIR /app
COPY . .
RUN npm install --production

CMD ["node", "/app/dist/main"]