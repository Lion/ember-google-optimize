# ember-google-optimize

A very quick and dirty addon to include Google Optimize into an Ember app.

## Notes

* Expects there to be a global `ga` variable it can use to require the optimize lib
* Google Optimize doesn't seem to load the previews / redirects on localhost.
* The activation event name is `optimize.activate`

## Installation

* `ember install ember-google-optimize`

## Usage

Use the provided `optimize` service to amend your `app/router.js` file to trigger page load activations. This will use the dataLayer to send the event `optimize.activate`.

```
...
const Router = EmberRouter.extend(GooglePageview, RouterScroll, {
  ...
  optimize: service(),

  didTransition() {
    this._super(...arguments);
    this._activateOptimize();
  },

  _activateOptimize() {
    scheduleOnce("afterRender", this, () => {
      get(this, "optimize").activate();
    });
  },

  ...
});
```

## Configuration

This plugin uses the Ember CLI project's configuration as defined in `config/environment.js`.

The tracking code will appear only if `ENV.googleOptimize.container` is defined. For instance, to enable the tracking code in only the production environment:

```javascript
if (environment === "production") {
  ENV.googleOptimize = {
    container: "GTM-XXXXXX"
  };
}
```

### Configuration Parameters

* `container` (Default: `null`): the container ID for the Google Optimize container.
* `injectFlickerSnippet` (Default: `true`): Inject the Google Optimize flicker prevention script into the index.html `<head>`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
