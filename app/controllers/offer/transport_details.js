import { computed } from "@ember/object";
import transportDetails from "shared-goodcity/controllers/offer/transport_details";
import config from "../../config/environment";

export default transportDetails.extend({
  crossroadsContact: computed(function() {
    return config.APP.CROSSROADS_CONTACT;
  })
});
