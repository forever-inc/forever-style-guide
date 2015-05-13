#!/bin/bash

GUIDE_PATH='/Users/nmcclay/Documents/git/forever-style-guide'
SASS_PATH=$GUIDE_PATH'/app/assets/stylesheets'
FONT_DIR='/app/assets/fonts/'

time sass --load-path $SASS_PATH --require bootstrap-sass  --compass stylesheet.scss -C > /dev/null
