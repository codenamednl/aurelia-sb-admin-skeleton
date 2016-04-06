import "metismenu";

export class App {
    configureRouter(config, router) {
        config.title = "Verzuimregistratie";
        config.map([
            { route: ["", "home"], name: "home", moduleId: "home", nav: true, title: "Home" },
        ]);

        this.router = router;
    }
    attached() {
        $("#side-menu").metisMenu();
        //$(window).bind("resize", this.adjustContainers);
        //this.adjustContainers();
    }
    adjustContainers() {
        let topOffset = 30;
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width < 768) {
            $("div.navbar-collapse").addClass("collapse");
            topOffset = 100; // 2-row-menu
        } else {
            $("div.navbar-collapse").removeClass("collapse");
        }

        let height = ((window.innerHeight > 0) ? window.innerHeight : screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
            $(".navbar-default.sidebar").css("min-height", (height - 20) + "px");
        }
    }
}