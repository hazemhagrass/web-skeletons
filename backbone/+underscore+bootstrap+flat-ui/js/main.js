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
        $('[data-role=page]').remove();
        
        $(page.el).attr('data-role', 'page');
        page.render();

        $('.content').append($(page.el));
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