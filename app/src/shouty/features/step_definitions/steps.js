const Person = require('../../src/shouty')
const { Given, When, Then } = require('cucumber')
const { assertThat, is } = require('hamjest')

Given('{person} is located/standing {int} metre(s) from {person}', function (receiver, distance, shouter) {
  this.shouter = shouter
  this.receiver = receiver
  this.receiver.moveTo(distance)
})

When('{person} shouts {string}', function (shouter, message) {
  this.shouter.shout(message)
  this.receiver.tryHear(message)
})

Then('{person} hears {person}’s message', function (person, person2) {
  assertThat(this.receiver.getMessageHeard(), is(this.shouter.getMessageShouted()))
});

Then('{person} hears {person}\'s message', function (person, person2) {
  assertThat(this.receiver.getMessageHeard(), is(this.shouter.getMessageShouted()))
});

Then('{person} doesn`t hear Sean`s message', function (person) {
  assertThat(this.receiver.getMessageHeard(), is([]))
});
