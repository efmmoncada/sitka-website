# Sitka Renovations Website

This repository is home to the source code of the Sitka Renovations' Website.

The client and backend are split into their own respective projects.

## Architecture and Tech Stack

The front-end is a simple [Next.js](https://nextjs.org) application that is built and entirely statically served. It also uses the following:
 - [TailwindCSS](https://tailwindcss.com)
 - [EmailJS](https://www.emailjs.com)
 - [Swiper](https://swiperjs.com)

In order to enable future changes and updated data, [Payload](https://payloadcms.com) is used to power the CMS, which is backed by a [MongoDB](https://www.mongodb.com) database, and [Google Cloud Storage](https://cloud.google.com/storage) for image hosting.

Designed and developed by [Emmanuel Moncada](https://github.com/efmmoncada)