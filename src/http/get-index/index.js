const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: '🐢tortoise capital', // ←  Start by adding your name!
    title: 'tortoise capital',
    occupation: 'building, acquiring, and running small SaaS businesses',
    location: 'Vancouver, BC',
    bio: 'We focus on starting small businesses. Instead of growth at any cost, which leads to constant fire fighting, questionable business practices, and worse. Our path is about small, profitable, low overhead businesses. We trade building a hiring practice for a fungible group of well paid, remote work, contractors. Instead of trying to discover new marketing channels for each stage of growth, we build products to work with a handful of known channels. Issues like technical debt and product architecture are minimized by constraining features and knowing that all products have a shelf life. The constraints of building small frees our creativity.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'your@email.com',
    twitter: 'yourTwitter',
    linkedin: 'your-linkedin-name',
    instagram: 'yourInsta',
    facebook: 'your-facebook-name',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
