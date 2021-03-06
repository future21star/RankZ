angular.module('app').directive('answerHeader', ['color', '$window', '$rootScope','$state','dialog','dataloader',
function (color, $window, $rootScope, $state, dialog, dataloader) {
    'use strict';

    return {
        templateUrl: 'app/answer/Partials/answerheader.html',
        transclude: true,
        scope: {
            ans: '@',
            idx: '@',
            refresh: '='
        },
        link: function (scope) {
            var vm = scope;
            scope.isMobile = false;
            // device detection
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
                scope.isMobile = true;
            
            scope.answer = JSON.parse(scope.ans);
            
            //Type Flags
            if (scope.answer.type == 'Short-Phrase') scope.isShortPhrase = true;
            else scope.isShortPhrase = false;
            if (scope.answer.type == 'Event') scope.isEvent = true;
            else scope.isEvent = false;

            checkCredentials();

            scope.modeIsImage = true; //Image Mode
            scope.imgmode = 'Show Map';
            scope.imgmodeicon = 'fa fa-globe';
            scope.hasMap = scope.answer.location != undefined && scope.answer.location != ''; 

            //Effective width vs $window.innerWidth
            var iWa = [0, 401, 474, 769, 971, 996, 1173, 1201, 1635, 1960, 3500];
            var eWa = [0.86, 0.86, 0.88, 0.96, 0.75, 0.96, 0.68, 0.96, 0.64, 0.6, 0.6];
            var iW = $window.innerWidth;
            var eW = 0; //effective width
            for (var n = 0; n < iWa.length - 1; n++) {
                if (iW > iWa[n] && iW < iWa[n + 1]) {
                    //equation of line y=mx+b (m is slope, b is y intersect)
                    var slp = (eWa[n + 1] - eWa[n]) / (iWa[n + 1] - iWa[n]);
                    var bpt = eWa[n] - iWa[n] * slp;
                    eW = iW * slp + bpt;
                }
            }
            
            //Adjust picture size for very small displays
            if ($window.innerWidth < 763) {
                scope.sp1 = 'width:5%;padding:0px;';
                scope.sp2 = 'width:25%;max-height:50px';
                scope.sp3 = 'width:20%';
                scope.sm = true; scope.nsm = false;
                scope.width = Math.round(iW * eW);
                scope.mxheight = Math.round((scope.width / 1.25));
                //clamp max height
                if (scope.mxheight > 300) scope.mxheight = 300;
                if ($rootScope.cCategory) {
                    var colors = color.defaultRankColor($rootScope.cCategory);
                    scope.bc = colors[0];
                    scope.fc = colors[1];
                }
                else {
                    scope.bc = 'gray';
                    scope.fc = 'black';
                }
                scope.bc2 = color.shadeColor(scope.bc, 0.4);
            }
            else {
                scope.mxheight = '300';
                scope.sp1 = 'width:15%';
                scope.sp2 = 'width:22.5%;max-height:50px;';
                scope.sp3 = 'width:20%';
                scope.sm = false; scope.nsm = true;
                scope.width = Math.round(iW * eW);
                scope.width2 = Math.round((iW * eW) / 2);
                scope.width3 = Math.round((iW * eW) / 3);
                if ($rootScope.cCategory) {
                    var colors = color.defaultRankColor($rootScope.cCategory);
                    scope.bc = colors[0];
                    scope.fc = colors[1];
                }
                else {
                    scope.bc = 'gray';
                    scope.fc = 'black';
                }
                scope.bc2 = '#d8d8d8';
            }

            // Answer additional info text slice
           if (scope.answer.addinfo != undefined) {
                scope.answer.addinfo_teaser = scope.answer.addinfo.slice(0, 300);
                scope.answer.addinfo_complete = scope.answer.addinfo.slice(300);
            }

            scope.moretext = ' more ';
            scope.completeinfo = false;

           //Get distance if not available
           if ($rootScope.coordsRdy && scope.answer.location && scope.answer.dist == undefined) {
               //Calculate distances to user
               var p = 0.017453292519943295;    // Math.PI / 180
               var c = Math.cos;
               var a = 0;
               var lat_o = $rootScope.currentUserLatitude;
               var lng_o = $rootScope.currentUserLongitude;
               var lat = 0;
               var lng = 0;
               var dist_mi = 0;

               lat = scope.answer.lat;
               lng = scope.answer.lng;

               a = 0.5 - c((lat - lat_o) * p) / 2 + c(lat_o * p) * c(lat * p) * (1 - c((lng - lng_o) * p)) / 2;

               dist_mi = (12742 * Math.asin(Math.sqrt(a))) / 1.609; // 2 * R; R = 6371 km

               if (dist_mi < 1) scope.answer.dist = dist_mi.toPrecision(2);
               else scope.answer.dist = dist_mi.toPrecision(3);
           }

            getHours();
            getWorkHere();

        //Directive Methods
        scope.toggleimgmode = function() {
            if (scope.modeIsImage) setMap();
            else setImage();
        }

        function setImage() {
            scope.imgmode = 'Show Map';
            scope.imgmodeicon = 'fa fa-globe';
            scope.modeIsImage = true;
            $rootScope.modeIsImage = true;
        }

        function setMap() {
            scope.imgmode = 'Show Image';
            scope.imgmodeicon = 'fa fa-picture-o';
            scope.modeIsImage = false;
            $rootScope.modeIsImage = false;
        }

        function getHours() {
            scope.hrset = false;
            if (scope.answer.strhours != undefined && scope.answer.strhours != null) {
                scope.hrset = true;
                var cdate = new Date();
                var dayOfWeek = cdate.getDay();
                var idx = dayOfWeek - 1;
                if (idx < 0) idx = 6;

                var openhours = JSON.parse(scope.answer.strhours);
                if (openhours[idx].opn == 'CLOSED') {
                    scope.hourstr = 'Closed today';
                }
                else {
                    scope.hourstr = 'Open today from: ' + openhours[idx].st + ' to ' + openhours[idx].ct;
                }
            }
        }

        function checkCredentials(){
            //User is Owner Flag
            if ($rootScope.isLoggedIn) {
                if ($rootScope.user.id == scope.answer.owner) {
                    scope.userIsOwner = true;
                }
                else scope.userIsOwner = false;
            }
            else scope.userIsOwner = false;

            if (scope.userIsOwner && scope.answer.imageurl == $rootScope.EMPTY_IMAGE) scope.uploadmsg = true;
            else scope.uploadmsg = false;
        }

        function getWorkHere(){
            //check if there are any freelances that work here
            scope.workhere = [];
            scope.eventhere = [];
            $rootScope.answers.forEach(function(ansObj){
                if (ansObj.eventlocid == scope.answer.id){
                    if (ansObj.type != 'Event') scope.workhere.push(ansObj);
                    if (ansObj.type == 'Event') scope.eventhere.push(ansObj);
                }
            });
            if (scope.workhere.length > 0) dataloader.pulldata('answers',scope.workhere);
            if (scope.eventhere.length > 0) dataloader.pulldata('answers',scope.eventhere);
        }

         scope.editAnswer = function() {
            if ($rootScope.isLoggedIn) {
                if (scope.answer.type == 'Event') {
                    $rootScope.eventmode = 'edit';
                    $state.go("addEvent", { index: scope.answer.id });
                }
                else $state.go("editAnswer", { index: scope.answer.id });
            }
            else dialog.loginFacebook(); 
            //dialog.getDialog('notLoggedIn');           
        }
 
          scope.showcomplete = function() {
            if (scope.moretext == ' more ') {
                scope.moretext = ' less ';
                scope.completeinfo = true;
                return;
            }
            if (scope.moretext == ' less ') {
                scope.moretext = ' more ';
                scope.completeinfo = false;
                return;
            }
        }

        scope.gotoLocationAnswer = function(){
            $state.go('answerDetail',{index: scope.answer.eventlocid})
        }

        scope.gotoprofile = function(x){
            $state.go('answerDetail',{index: x.slug})
        }

        scope.$watch('refresh', function() {
                if (scope.refresh) {
                    scope.answer = JSON.parse(scope.ans);
                    checkCredentials();
                }
        });

        },
    }
}
]);