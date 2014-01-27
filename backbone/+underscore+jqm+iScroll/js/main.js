App.Router = Backbone.Router.extend({

    routes:{
        "":"home",
        "home":"home",
        "otherPage":"otherPage",
    },
    initialize:function () {
        this.firstPage = true;
    },
    back: function () {
        window.history.back();
        return false;
    },
    home:function () {
        appRouter.changePage(new App.views.HomeView());
    },
    otherPage:function () {
        appRouter.changePage(new App.views.OtherPage());
    },
    changePage:function(page) {
        $(page.el).attr('data-role', 'page');
        page.render();

        $('body').append($(page.el));
        // var transition = $.mobile.defaultPageTransition;
        var transition = 'slide';
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
 console.log('Device ready');

 App.utils.TemplateUtils.loadTemplates([
    'home','page'
    ],
    function () {
        appRouter = new app.Router();
        Backbone.history.start();
    });
}

$(document).ready(function () {
    console.log('document ready');

    App.utils.TemplateUtils.loadTemplates([
        'home','page'
        ],
        function () {
            appRouter = new App.Router();
            Backbone.history.start();
        });
});