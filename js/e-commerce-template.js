function FeaturedBox(t) {
    this.root = t, this.links = $(t + " .featured-nav-link"), this.items = $(t + " .featured-item"), 
    this.init = function() {
        this.markLinkAsActive(), this.showActiveItem();
        var s = this;
        this.links.each(function(t, e) {
            var i = $(e).data("index");
            $(e).click(function(t) {
                t.preventDefault(), s.markLinkAsActive(i), s.showActiveItem(i);
            });
        });
    }, this.markLinkAsActive = function(i) {
        i = i || 0, this.links.each(function(t, e) {
            $(e).parent().removeClass("active"), t === i && $(e).parent().addClass("active");
        });
    }, this.showActiveItem = function(i) {
        i = i || 0, this.items.each(function(t, e) {
            $(e).hide(), t === i && ($(e).show(), $(e).addClass("fade-effect-enter"));
        });
    };
}

$(document).ready(function() {
    $(".hero-section").owlCarousel({
        loop: !0,
        items: 1,
        center: !0,
        dots: !0,
        dotsClass: "carousel-dots",
        lazyLoad: !0,
        autoplay: !0,
        autoplayTimeout: 5e3
    });
}), new FeaturedBox(".featured-box").init();
//# sourceMappingURL=e-commerce-template.js.map