var bodyEl = document.body

var Slide = function(el) {
    this.el = el
    this.txt = new TextFx(this.el.querySelector('.link'))
  },
  DisplayLink = function (el) {
    this.el = el
    var self = this
    this.slides = []
    Array.prototype.slice.call(this.el.querySelectorAll('.slide')).forEach(function (slide) {
      self.slides.push(new Slide(slide))
    })
  }
DisplayLink.prototype._display = function (timing) {
  var self = this
  window.setTimeout(function () {
    console.log(self)
    self.slides[0].txt.hide('fx17', function() {
					self.slides[0].el.style.opacity = 0
          self.slides[0].el.classList.remove('slide--current')
          self.slides[1].el.classList.add('slide--current')
			})
      self.slides[1].txt.hide();
			self.slides[1].el.style.opacity = 1;
    self.slides[1].txt.show('fx17')
  }, timing)
}
var displayLinks = Array.prototype.slice.call(document.querySelectorAll('.display-link')).map(function (el, pos) {
  return new DisplayLink(el)
})
document.addEventListener('DOMContentLoaded', function () {
  displayLinks.forEach(function (displaylink, index) {
    displaylink._display(index * 1000)
  })
})
