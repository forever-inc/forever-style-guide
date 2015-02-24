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

