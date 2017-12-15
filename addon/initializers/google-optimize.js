/* global ga:true */
import { isPresent } from "@ember/utils";
export function initialize(application) {
  const config = application.resolveRegistration("config:environment");
  if (
    isPresent(ga) &&
    isPresent(config.googleOptimize) &&
    isPresent(config.googleOptimize.container)
  ) {
    ga("require", config.googleOptimize.container);
  }
}

export default {
  name: "google-optimize",
  initialize
};
