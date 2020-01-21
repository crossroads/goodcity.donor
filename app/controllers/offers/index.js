import { computed } from "@ember/object";
import { sort } from "@ember/object/computed";
import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: ["latestUpdatedTime:desc"],
  arrangedContent: sort("offersWithItems", "sortProperties"),

  offersWithItems: computed("model.@each.itemCount", function() {
    return this.get("model").rejectBy("itemCount", 0);
  })
});
