# Forever Style Guide (next)

This style guide exists for the following reasons.

1. To own branding colors/gradients
2. To own the base Tailwind configuration.
3. To (eventually) own core level components.

## Legacy StyleGuide (current master)

This exists in the case we need to make a change to the store styles...it is using the legacy styleguide which fed into the rails pipeline, etc...

In order to retire legacy styleguide entirely, we need to consume all store pages into the Nuxt framework,
and then subsequently migrate any leftovers. One thing to note is that the store is programmatically consuming styleguide colors for admin purposes.
This should be changes to pull from the Tailwind color config.

## Todos

We must continue the deprecation and retirement of old styleguide patterns:

1. Buttons should be redone using tailwind (see fui-button) and eventually replace the buttons.scss styles here and f-button in mars.
2. Remaining bootstrap dependencies should be removed.
3. As it makes sense, move more things to Tailwind configuration and away from scss files.
4. Modernize.

