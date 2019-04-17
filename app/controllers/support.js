import { notEmpty, alias } from "@ember/object/computed";
import Controller from "@ember/controller";

export default Controller.extend({
  hasDonationDetail: notEmpty("session.currentUser.donationAmount"),

  donationAmount: alias("session.currentUser.donationAmount"),
  donationDate: alias("session.currentUser.donationDate")
});
