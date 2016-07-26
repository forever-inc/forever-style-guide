# Forever Style Guide

Built on top of https://github.com/pivotalexperimental/style-guide

This gem adds a live style guide for Forever branded apps.  Its long term goals include:
* A live style guide of the core HTML/CSS used across Forever apps
* A typography and iconography library for getting and using the right assets
* A Voice and tone guide for writing copy for Forever
* A Component API for generating common partials and helpers
* Various other common things that are useful across our multiple products

**Note:** this is currently a work in progress effort, I'm hoping to make this useful quickly but its still early.

## Running Locally

The style guide comes with an embedded 'dummy app' that will mount the style guide gem and nothing else.  Its the easiest way to get the style guide up and running:

```
cd forever-style-guide/test/dummy
rails s -p 3005
```

You can now view the style guide @ [localhost:3005/style_guide](localhost:3005/style_guide)

## Installation

The style guide is an easy to install rails engine that will mount to your existing rails application.

- Add to your Gemfile:
```
gem 'bootstrap-sass'
gem 'font-awesome-rails'
gem 'forever_style_guide', git: 'git@github.com:forever-inc/forever-style-guide.git'

```

- Add to your assets/stylesheets/application.scss (If using application.css, this has to be .scss to use sass import)
```
# recommend importing these before your other styles so you can override them if necessary
@import 'bootstrap';
@import 'font-awesome';
@import 'forever_style_guide/all';
```

- Add to your assets/javascripts/application.js
```
//= require bootstrap
```

- Add to your views/layouts/application.html.erb
```
# style guide js should be loaded *after* you load any of your own app's js
<%= javascript_include_tag "forever_style_guide/application" %>
```

- Add mount route to the bottom of your config/routes.rb:
```
# recommend keeping at the bottom of routes so as not to conflict with any other routes
mount ForeverStyleGuide::Engine => "/style_guide" unless Rails.env.production?
```

- Fire up the app and visit: <app url>/style_guide

## Style Guide Development

### Adding sections to style guide

All the content in the style guide can be found in *app/views/forever_style_guide/sections*.  All content in the style guide is organized into *sections* which are simple folders in the sections directory.  There are two ways to add content to the section, through auto-formatted partials and raw_html partials.

#### Auto-Formatted Partials

Any content intended to be used as css/html in an other applications should use this format.  Auto-formatted partials are the default format content in the style guide will be displayed as and display titles, descriptions, css classes and code previews automatically.
All you need to do is add an auto-formatted partial is create a partial in a section directory:
```
_partial.erb
```


#### Raw-HTML Partials
Raw-Html partials allow more customized styling than Auto-formatted partials, but do not do any sort of automatic headings, css class inspection, pre-formatted code previews or any of that other fun stuff.  Its mostly for adding static content examples to the style guide such as the voice & tone section.
To create a raw-html partial all you need to do is add a partial with a .html. extension to a section directory:
```
partial.html.erb
```

### Developing with another Rails app
To test edits to core style guide in another app before committing, you will need to install the gem locally:
```
rake install
cd /path/to/other/repo
bundle update
bundle install
```

### Live-reload
Guard is available for live-reload capability in development mode.  Editing the styleguide will automatically reload the page for you.
```
bundle exec guard
```
