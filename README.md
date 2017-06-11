# FrontHAT
[![Greenkeeper badge](https://badges.greenkeeper.io/erkarl/fronthat.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/erkarl/fronthat.svg?branch=master)](https://travis-ci.org/erkarl/fronthat)

FrontHAT, a job board for frontend developers and designers - [fronthat.com](https://fronthat.com).

#### Overview

##### Offline First Support
* [ember-service-worker](https://github.com/DockYard/ember-service-worker) + [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache) + [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index) - Caching assets locally
* [ember-redux](https://github.com/ember-redux/ember-redux) + [ember-redux-offline](https://github.com/ember-redux/ember-redux-offline-shim) - State management & offline persistence
* [ember-web-app](https://github.com/san650/ember-web-app) - Web App Manifest

##### SEO optimization / support:
* [ember-cli-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) - Server Side Rendering
* [ember-page-title](https://github.com/tim-evans/ember-page-title) - Dynamic Title tags
* [ember-cli-meta-tags](https://github.com/ronco/ember-cli-meta-tags) - Dynamic META tags

##### Testing
* [ember-cli-mirage](http://www.ember-cli-mirage.com/)
* [ember-test-selectors](https://github.com/simplabs/ember-test-selectors)
* [ember-sinon](https://github.com/csantero/ember-sinon) + [ember-sinon-qunit](https://github.com/elwayman02/ember-sinon-qunit)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (version >= 4)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:erkarl/fronthat.git`
* `cd fronthat`
* `yarn`

## Running / Development

* `ember serve`
* [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Contributing
Please do! Pull requests are welcome.

## License

MIT
