# Forever Style Guide

Built on top of https://github.com/pivotalexperimental/style-guide

This gem adds a live style guide for Forever branded apps.  Its long term goals include:
* A live style guide of the core HTML/CSS used across Forever apps
* A typography and iconography library for getting and using the right assets
* A Voice and tone guide for writing copy for Forever
* A Component API for generating common partials and helpers
* Various other common things that are useful across our multiple products

**Note:** this is currently a work in progress effort, I'm hoping to make this useful quickly but its still early.

### Installation

Add to your Gemfile development group:
```
# inside your group :development block
gem 'forever_style_guide', git: 'git@github.com:forever-inc/forever-style-guide.git'

```

Add to the bottom of your config/routes.rb:
```
# recommend keeping at the bottom of routes so as not to conflict with any other routes
mount ForeverStyleGuide::Engine => "/style-guide" unless Rails.env.production?
```

Fire up the app and visit: <app url>/style-guide
