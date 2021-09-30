---
slug: understanding-feeder-data
title: Understanding Feeder Data
tags: []
---

## Data

Feeders collect client device and network data to better identify the usage patterns and correlate feedback data.

## Payload

```json
{
  "timeOpened": "2021-09-08T18:30:28.481Z",
  "timezone": 7,
  "window": {
    "innerHeight": 584,
    "innerWidth": 1920
  },
  "screen": {
    "availHeight": 1050,
    "availWidth": 1920,
    "colorDepth": 24,
    "height": 1080,
    "pixelDepth": 24,
    "width": 1920
  },
  "navigator": {
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": "5.0 (Windows)",
    "buildID": "20181001000000",
    "cookieEnabled": true,
    "doNotTrack": "unspecified",
    "hardwareConcurrency": 12,
    "language": "en-US",
    "maxTouchPoints": 0,
    "oscpu": "Windows NT 10.0; Win64; x64",
    "platform": "Win32",
    "product": "Gecko",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0"
  },
  "document": {
    "referrer": "",
    "cookie": ""
  },
  "history": {
    "length": 4
  },
  "server": {
    "remoteAddr": "0:0:0:0:0:0:0:1",
    "localAddr": "0:0:0:0:0:0:0:1"
  }
}
```

At [Gleaner](https://gleaner.in) we provide NoCode tools to craft beautiful web widgets for in-app feedback. We want to motivate users to leave constructive feedback without restricting the way they consume your application.