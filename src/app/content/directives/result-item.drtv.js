angular.module('app').directive('resultItem',
    ['$rootScope', '$state', 'answer', 'table', 'catans', '$timeout', 'vrows', 
    '$window', 'cblock', 'color', 'search','dialog', 'special',
        function ($rootScope, $state, answer, table, catans, $timeout, vrows, 
            $window, cblock, color, search, dialog, special) {
            'use strict';

            return {
                templateUrl: 'app/content/partials/result-block.html',
                transclude: true,
                scope: {
                    resultObject: '='
                },
                controller: ['$scope', 'query', '$http', 'answer', 'table', 'catans', '$timeout', 'vrows', '$window', 'cblock', 'color', 'search',

                    function contentCtrl($scope, query, $http, answer, table, catans, $timeout, vrows, $window, cblock, color, search) {
                        var vm = $scope;
                        vm.title = 'mycontent';

                        vm.sm = $rootScope.sm;

                        //Adjust picture size for very small displays
                        if ($window.innerWidth < 768) vm.thumbheight = '80px';
                        if ($window.innerWidth >= 768 && $window.innerWidth < 992) vm.thumbheight = '100px';
                        if ($window.innerWidth >= 992 && $window.innerWidth < 1200) vm.thumbheight = '80px';
                        if ($window.innerWidth > 1200) vm.thumbheight = '100px';

                    }], //end controller
                link: function (scope, elem, attr) {

                    if (scope.isDestroyed == undefined) {
                        loadContent();
                    }

                    //load content based on mode
                    function loadContent() {

                        var w = $window.innerWidth - 20;
                        scope.w2 = Math.round(w / 2);
                        scope.w4 = Math.round(w / 4) - 5;
                        scope.w8 = Math.round(w / 8);

                        if ($rootScope.DISPLAY_XSMALL == true) scope.sm = true;
                        else scope.sm = false;

                        var resObj = {};

                        resObj = {};
                        resObj = scope.resultObject; //JSON.parse(JSON.stringify(scope.resultObject));
                        scope.result = resObj;


                        if (resObj.isAnswer == true) scope.title = resObj.name;
                        else scope.title = resObj.title;
                        
                        if (resObj.isAnswer == true) scope.imageurl = resObj.imageurl;
                        else scope.imageurl = resObj.fimage;

                        if (scope.imageurl == undefined) scope.imageurl = $rootScope.EMPTY_IMAGE; 

                        scope.isAnswer = resObj.isAnswer == undefined ? false:resObj.isAnswer;
                        /*
                        if (resObj.isAnswer == true) scope.introtext = resObj.addinfo.slice(0,150);
                        else {
                            var introtext = '';
                            //If introtext exist load it, if not, create custom intro text
                            if (resObj.introtext) {
                                var start = resObj.introtext.indexOf('++');
                                var end = resObj.introtext.indexOf('--');
                                if (start > -1 && end > -1) introtext = resObj.introtext.substring(start + 2, end);
                                else introtext = resObj.introtext;
                            }
                            else introtext = 'Endorse your favorite ' + resObj.title + '. ';
                            scope.introtext = introtext.slice(0, 150);
                        }*/

                        //scope.type = resObj.type;
                        if (resObj.isAnswer){
                            if (resObj.type == 'Establishment') scope.type = 'Establishment';
                            if (resObj.type == 'Event') scope.type = 'Event';
                            if (resObj.type == 'Organization') scope.type = 'Organization';
                            if (resObj.type == 'Person') scope.type = 'Public Figure';
                            if (resObj.type == 'PersonCust') scope.type = 'Professional';
                            if (resObj.type == 'Place') scope.type = 'Place';
                            if (resObj.type == 'Short-Phrase') scope.type = 'Opinion';
                            //User Objects for Friends Refernces
                            if (resObj.userObjs) scope.userObjs = resObj.userObjs;
                            //console.log("scope.userObjs - ",scope.userObjs);
                            special.findSpecial(resObj);
                            if (resObj.sp_title != undefined && resObj.sp_title != ''){
                                scope.hasSpecial = true;
                                scope.spbc = resObj.sp_bc;
                                scope.spfc = resObj.sp_fc;
                                scope.sptext = resObj.sp_title;
                            }
                        }
                        else {
                            scope.type = 'Ranking';
                            scope.hasSpecial = false;
                        }
                        
                        if (scope.type == undefined) scope.type = '';
                        
                        scope.showStats = scope.type == 'Ranking' && scope.text != 'Food Near Me';

                        //Get rank stats
                        scope.views = resObj.views;
                        scope.answers = resObj.answers;
                        scope.comments = resObj.numcom;
                        
                        if (scope.numcom == undefined || scope.numcom == null)
                            scope.numcom = 0;
                        
                        //Set Feautured Image && box color
                        if (!resObj.isAnswer) { 
                            //if fimage is undefined
                            if (scope.imageurl == undefined || 
                                scope.imageurl == '' || 
                                scope.imageurl == null ||
                                scope.imageurl == $rootScope.EMPTY_IMAGE) {
                                scope.imageurl = resObj.image1url;
                            }
                            
                            scope.bc = 'gray';
                            scope.fc = '#f8f8ff';
                            scope.shade = 4;
                        }
                        else {
                            //Choose color randomly
                            
                            if (resObj.type == 'Organization') { scope.bc = 'brown'; scope.fc = '#f8f8ff'; }
                            if (resObj.type == 'Establishment') { scope.bc = '#4682b4'; scope.fc = '#f8f8ff'; }
                            if (resObj.type == 'Place') { scope.bc = '#008080'; scope.fc = '#f8f8ff'; }
                            if (resObj.type == 'Short-Phrase') { scope.bc = '#2d5a6a'; scope.fc = '#f8f8ff'; }
                            if (resObj.type == 'Event') { scope.bc = '#176ced'; scope.fc = '#f8f8ff'; }
                            if (resObj.type == 'Person' || resObj.type == 'PersonCust') { scope.bc = '#c68c53'; scope.fc = '#f8f8ff'; }
                            scope.shade = -4;

                            if (scope.type == '') {scope.bc = '#d3d3d3'; scope.fc = 'gray'; scope.shade = 4;}

                        }
                        scope.bc2 = color.shadeColor(scope.bc,scope.shade/10);
                        if (resObj.type == 'Short-Phrase') scope.image1 = $rootScope.EMPTY_IMAGE;
                    }

                    function editTitle(x) {
                        x.titlex = x.title.replace(' in San Diego', '');
                        if (x.answers == 0 && x.type != 'Short-Phrase') x.image1url = $rootScope.EMPTY_IMAGE;
                    }

                    function parseShortAnswer(x) {
                        //Check if results is Short-Phrase
                        if (x.type == 'Short-Phrase') {

                            x.isShortPhrase = true;
                            if (x.image1url != undefined) {
                                var sPVals1 = x.image1url.split("##");
                                x.title1 = sPVals1[0];
                                x.addinfo1 = sPVals1[1];
                            }
                            if (x.image2url != undefined) {
                                var sPVals2 = x.image2url.split("##");
                                x.title2 = sPVals2[0];
                                x.addinfo2 = sPVals2[1];
                            }
                            if (x.image3url != undefined) {
                                var sPVals3 = x.image3url.split("##");
                                x.title3 = sPVals3[0];
                                x.addinfo3 = sPVals3[1];
                            }
                        }
                    }

                    scope.resSel = function (x) {
                        
                        if (x.isfoodnearme == true) $rootScope.isFoodNearMe = true;

                        $rootScope.pageYOffset = $window.pageYOffset;
                        $rootScope.$emit('hideBar'); 
                        scope.views++;

                        if (x.isAnswer) {
                            $rootScope.cCategory = undefined;
                            $state.go('answerDetail', { index: x.id });
                        }
                        else {
                            if ($rootScope.editMode) $state.go('editRanking', { index: x.slug });
                            else {
                                $state.go('rankSummary', { index: x.slug });
                            }
                        }
                    };

                    scope.showAllFriendsList = function(userObjs){
                        dialog.showAllFriendsListDlg(userObjs, scope.title);
                    }

                    scope.$on('$destroy', function () {
                        scope.isDestroyed = true;
                    });
                },
            }
        }

    ]);