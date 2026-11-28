# Week 5 Day 2 — Three requests, side by side

Fill this in from Postman or Bruno. **Never paste your API key in this file.**
This repo is public: anyone on the internet can read it.
Write `{{gemini_key}}` (the variable's name) instead.

| | Weather request | AI request | Add a dish |
| Method (GET / POST) | | | Method = POST |
|Endpoint (the address, filled in for you) | `https://api.open-meteo.com/v1/forecast` | `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent` | `https://dummyjson.com/recipes/add` |
| Where the details go (query params or body?) Query Params | Query Params | Query Params |
| Headers I needed | | Content-Length, Host, User-Agent,Accept-Encoding, Connection. Headers "Cache-Control, Postman-Token were not enabled |
| Does it need a key? | Yes it needs a key: {{gemini_key}} | |
| Status I got | 401 Unauthorized. "Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource." | |
| The part of the response I care about (the path, like `current.temperature_2m`) |It is after the (?) question mark in the url | secret key: {{gemini_key}} | It is after the (?) question mark in the url|

## What was different?

Write 2–3 sentences in your own words.
The AI request and Add a dish are both POST. What job does each one do?
Both `AI request` and `Add a dish` are telling the server what to respond to. The POST request send specific questions to be answered so the response is based on the query as opposed to all that is saved in the server. Here we tell the server what we want.

## Did my dish really save?

What status did `Get my dish` give you? What does that tell you?

## Extra (if you finish early)

- Send the same prompt twice. Is the answer the same? Why might that be?
- Try a different model name in the address. What changed in the response?
