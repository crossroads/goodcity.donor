import $ from "jquery";
import Controller from "@ember/controller";

export default Controller.extend({
  questionAnchor: null,

  actions: {
    displayQuestion() {
      var question = this.get("questionAnchor");
      if (question) {
        var scrollOffset = $("#" + question).offset().top;

        $("html, body").animate(
          {
            scrollTop: scrollOffset - 70
          },
          "fast"
        );
      }
      return false;
    }
  }
});
