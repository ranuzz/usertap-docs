---
slug: feeder-positioning
title: Positioning a Feeder
tags: []
---

There are two ways to position a feeder:

* Absolute
* Inline

## Absolute

These feeders assume a sticky position on top of your application UI. They can be configured entirely from the [Gleaner](https://gleaner.in/) platform. Types of absolute feeders are

* FAB
* Overlay
* Sticky Panel
* Banner

## Inline

Inline feeders are more versatile and can take any location you require. They integrate more seamlessly with your application's UI and don't create any obstruction in user flow. Configuring them requires a bit of time but with the help of our `widget` library it's just a few clicks and adjustments. Just open your application with `?usertapdebug=true` query parameter and invoke our element picker. Locate the place where you want the widget to appear and click on it. A `copied!` at the bottom will indicate that the necessary information has been captured. Now, head over to [Gleaner](https://gleaner.in/) platform and paste the information in the feeder update window. Refresh your application page and you should see the result right away. Adjust feeder param and/or element location as per your need.
