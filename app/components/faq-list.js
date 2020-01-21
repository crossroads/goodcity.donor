import $ from "jquery";
import { scheduleOnce } from "@ember/runloop";
import initFoundation from "./init-foundation";

export default initFoundation.extend({
  didInsertElement() {
    this._super();
    var topMargin = this.get("session.isLoggedIn") ? 20 : 70;

    scheduleOnce("afterRender", this, function() {
      var controller = this.get("currentController");
      if (controller && controller.questionAnchor) {
        controller.send("displayQuestion");
      }
    });

    $().ready(function() {
      $(".faq_list ul").on("click", "li a", function() {
        var anchor = $(this);
        var scrollOffset = $(anchor.attr("href").split("faq")[1]).offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollOffset - topMargin
          },
          "fast"
        );

        return false;
      });
    });
  }
});
