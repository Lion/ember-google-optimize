import { isPresent } from "@ember/utils";
import Service from "@ember/service";

export default Service.extend({
  activate() {
    if (isPresent(window.dataLayer)) {
      window.dataLayer.push({ event: "optimize.activate" });
    }
  }
});
