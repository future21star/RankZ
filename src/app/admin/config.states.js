(function () {
    'use strict';

    var app = angular.module('app');

    // Configure the states and state resolvers
    app.config(['$stateProvider', '$urlRouterProvider', stateConfigurator]);

    function stateConfigurator($stateProvider, $urlRouterProvider) {

        var states = [            
            {
                name: 'admin',
                url: '/admin',
                views: {
                    "@": {
                        templateUrl: 'app/admin/Partials/admin.html',
                        controller: 'admin as vm'
                    },
                    "navbar@admin": {
                        templateUrl: 'app/layout/Partials/navbar.html',
                        controller: 'navbar as vm'
                    }
                }
            },
            {
                name: 'queries',
                parent: 'admin',
                url: '/queries',
                templateUrl: 'app/admin/Partials/queries.html',
                controller: 'queries as vm'               
            },
            {
                name: 'views',
                parent: 'admin',
                url: '/views',
                templateUrl: 'app/admin/Partials/views.html',
                controller: 'views as vm'               
            },
            {
                name: 'flags',
                parent: 'admin',
                url: '/flags',
                templateUrl: 'app/admin/Partials/flags.html',
                controller: 'flags as vm'               
            },
            {
                name: 'addRank',
                parent: 'admin',
                url: '/addRank',
                templateUrl: 'app/admin/Partials/addRank.html',
                controller: 'addRank as vm'               
            },
            {
                name: 'dbMaint',
                parent: 'admin',
                url: '/dbMaint',
                templateUrl: 'app/admin/Partials/dbMaint.html',
                controller: 'dbMaint as vm'               
            },
            {
                name: 'mergeAnswers',
                parent: 'admin',
                url: '/mergeAnswers',
                templateUrl: 'app/admin/Partials/mergeAnswers.html',
                controller: 'mergeAnswers as vm'               
            },
             {
                name: 'dbQuery',
                parent: 'admin',
                url: '/dbQuery',
                templateUrl: 'app/admin/Partials/dbQuery.html',
                controller: 'dbQuery as vm'               
            },
             {
                name: 'updateHeaders',
                parent: 'admin',
                url: '/updateHeaders',
                templateUrl: 'app/admin/Partials/updateHeaders.html',
                controller: 'updateHeaders as vm'               
            },
             {
                name: 'foodRanks',
                parent: 'admin',
                url: '/foodRanks',
                templateUrl: 'app/admin/Partials/foodRanks.html',
                controller: 'foodRanks as vm'               
            },
            {
                name: 'payment',
                parent: 'admin',
                url: '/payment',
                templateUrl: 'app/admin/Partials/payment.html',
                controller: 'payment as vm'               
            },
            {
                name: 'rodconsole',
                url: '/rodconsole',
                views: {
                    "@": {
                        templateUrl: 'app/admin/Partials/rodconsole.html',
                        controller: 'rodconsole as vm'
                    },
                    "navbar@rodconsole": {
                        templateUrl: 'app/layout/Partials/navbar.html',
                        controller: 'navbar as vm'
                    }
                }
            }
        ];

        $(states).each(function () {

            $stateProvider.state(this);
        });
    }
})();