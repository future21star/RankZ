(function () {
    'use strict';

    angular
        .module('app')
        .controller('content', content);

    content.$inject = ['$rootScope', '$state', '$http', '$stateParams', '$scope', 'answers', 'rankings', 'query', 'table', 'specials'];

    function content($rootScope, $state, $http, $stateParams, $scope, answers, rankings, query, table, specials) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'content';

        vm.goBack = goBack;
        vm.rankSelT = rankSelT;
        vm.rankSelB = rankSelB;
        vm.switchArray = switchArray;
        vm.viewRank = viewRank;
        vm.editRank = editRank;
        vm.applyRule = applyRule;

        vm.content = [];
        vm.emptyspace = '';
        vm.isAdmin = false;

        $rootScope.$on('newCategory', function (e) {
            console.log("trigger");
            loadContent();
        });
        $rootScope.$on('closeRank', function (e) {
            console.log("trigger closeRank");
            closeRank();
        });
        
        //delete these
        $rootScope.viewNum = 0;
        $rootScope.viewCtn = 0;

        var strlen_o = 0;
        var editMode = false;

        window.onload = function () {

        }

        activate();

        function activate() {
            
            //****SUPER TEMP*****************
            /*
            $rootScope.isLoggedIn = true;
            $rootScope.user = {};
            $rootScope.user.id = 7;
            $rootScope.user.name = "Andres Moctezuma";
            $rootScope.isAdmin = false;*/
            //******************************

            //Load current category
            $rootScope.content = {};
            $rootScope.viewCtn = 0;

            getEstablishmentAnswers();

            //$http.get('../../../assets/testcontent.json').success(function (response) {
            $rootScope.content = rankings; //response
            $rootScope.specials = specials;
            loadContent();

            //});
            
            $http.get('../../../assets/fields.json').success(function (response) {
                $rootScope.typeSchema = response;
                console.log("Fields Loaded!");

            });

            $http.get('../../../assets/dialogs.json').success(function (response) {
                $rootScope.dialogs = response;
                console.log("Dialogs Loaded!");

            });

            $state.go('rankSummary', { index: 1 });

        }

        function loadContent() {
            
            //vm.content=[];
            vm.searchArray = [];
            vm.empty = [];
            vm.cTags = {};
            $rootScope.searchStr = [];
            
            //Show ranking titles, hide all ranks
            for (var i = 0; i < $rootScope.content.length; i++) {
                $rootScope.content[i].showR = false;
                $rootScope.content[i].showT = true;
                
                //Tags content of title and tags for better search
                $rootScope.searchStr[i] = $rootScope.content[i].tags + " " + $rootScope.content[i].title;
            }

            $rootScope.neighborhoods = [
                "Downtown", "La Jolla", "Pacific Beach", "HillCrest", "University Heights", "Old Town", "Del Mar",
                "Ocean Beach", "North Park", "Mission Hills", "Barrio Logan", "City Heights", "Clairemont", "Mira Mesa", "Point Loma",
                "South Park", "Scripps Ranch", "Mission Valley", "Kensington"];
            $rootScope.districts = [
                "Columbia", "Core", "Cortez Hill", "East Village", "Gaslamp Quarter", "Horton Plaza", "Little Italy",
                "Marina", "Seaport Village"];

        }

        function goBack() {

            $state.go('rankSummary', { index: $rootScope.cCategory.id });

        }
        
        //Miscellaneous functions, grab header
        function getRankData(x) {
            $rootScope.title = x.title;

            $rootScope.isDowntown = x.title.includes("downtown");
            //Delete the first 3 words, to show ranking theme, not ideal, need to make better
            var n = x.title.length;
            var ctr = 0;
            var si = 0;
            for (var i = 0; i < n; i++) {
                if (x.title[i] == ' ') ctr++;
                if (ctr == 3) {
                    si = i;
                    break;
                }
            }
            $rootScope.header = x.title.substring(si, n - 1);
        }

        function rankSelT(x, index) {

            getRankData(x);

            var arraytemp = [];
            for (var i = 0; i < vm.resultsT.length; i++) {
                if (i < index) arraytemp[i] = vm.resultsT[i];
                if (i > index) vm.resultsB.push(vm.resultsT[i]);
            }
            vm.resultsT = arraytemp;

            vm.showR = true;
            $rootScope.showR = true;

            if (editMode) $state.go('editRanking', { index: x.id });
            else $state.go('rankSummary', { index: x.id });
        }

        function rankSelB(x, index) {
            //overall index
            var n = vm.resultsT.length + 1 + index;
            closeRank();
            rankSelT(vm.resultsT[n], n);

        }


        function switchArray() {
            var userIsTyping = false;
            vm.showR = false;
            $rootScope.showR = false;
            //console.log("SwitchArray ", vm.cTags.length);
            vm.resultsT = [];
            vm.resultsB = [];
            if (vm.val.length >= 3) {
                //vm.content = $rootScope.content;
                var valTags = vm.val.split(" ");

                for (var j = 0; j < $rootScope.content.length; j++) {
                    //for (var j = 50; j < 60; j++) {
                    var r = true;
                    //check that all tags exist
                    for (var k = 0; k < valTags.length; k++) {
                        var tagCapitalized = valTags[k].charAt(0).toUpperCase() + valTags[k].slice(1);
                        r = r && ($rootScope.searchStr[j].includes(valTags[k]) ||
                            $rootScope.searchStr[j].includes(valTags[k].toUpperCase()) ||
                            $rootScope.searchStr[j].includes(tagCapitalized));
                        //console.log("r ", r , valTags[k]);
                    }
                    if (r) {
                        //console.log("push to vm.results array");
                        vm.resultsT.push($rootScope.content[j]);
                        //console.log("vm.results  ", vm.results);
                    }
                }
                if (vm.val.length >= strlen_o) userIsTyping = true;
                else userIsTyping = false;
                //if less than 5 results, write 'query record
                if (vm.resultsT.length <= 5 && (vm.val.length % 3 == 0) && userIsTyping) {
                    query.postQuery(vm.val, vm.resultsT.length)
                }
                strlen_o = vm.val.length;
            }
            else {
                vm.resultsT = [];
                vm.resultsB = [];
            }
            $rootScope.viewNum = 999;
        }

        function getEstablishmentAnswers() {
            $rootScope.estAnswers = [];
            $rootScope.estNames = [];
            for (var i = 0; i < answers.length; i++) {
                if (answers[i].type == 'Establishment') {
                    $rootScope.estNames.push(answers[i].name);
                    $rootScope.estAnswers.push(answers[i]);
                }
            }
        }

        function closeRank() {
            /*
            //Show ranking titles, hide all ranks
            for (var i = 0; i < $rootScope.content.length; i++) {
                $rootScope.content[i].showR = false;
                $rootScope.content[i].showT = true;
            }
            */
            vm.showR = false;
            $rootScope.showR = false;
            switchArray();
        }
        
        //Admin Functions************
        function editRank() {
            editMode = true;
            vm.selEditRank = 'active';
            vm.selViewRank = '';
            console.log("mode -- ", editMode);

        }
        function viewRank() {
            editMode = false;
            vm.selEditRank = '';
            vm.selViewRank = 'active';
            console.log("mode -- ", editMode);

        }

        function applyRule() {
            console.log("apply Rule");
            
            /*
            //Use this to add a tag
            for (var i=0; i < vm.resultsT.length; i++){
                var tags = vm.resultsT[i].tags + ' food';
                table.update(vm.resultsT[i].id, ['tags'],[tags]);
            } 
            */
            /*
            //Use this to remove a tag
            for (var i=0; i < vm.resultsT.length; i++){
                var titlex = vm.resultsT[i].title.replace("places for coffee and studying/working","places with WiFi good for working or studying");
                var tagsx = vm.resultsT[i].tags.replace("tea","coffee shops internet tea quiet");
                //console.log("tags ", tags);
                table.update(vm.resultsT[i].id, ['title','tags'],[titlex, tagsx]);
            } 
            */
            /*
            //Use this to add a neighborhood
            for (var i=0; i < vm.resultsT.length; i++){
                
                //Copy object without reference
                var tablex = JSON.parse(JSON.stringify(vm.resultsT[i]));
                tablex.id = undefined;
                var newtitle = tablex.title.replace("Hillcrest", "Point Loma");
                tablex.title = newtitle;
                //console.log("tags ", tags);
                table.addTable(tablex);
            }
              */
               
            //Use this to add a ranking to all neighborhood
            /*
            for (var i=0; i < vm.resultsT.length; i++){
                
                //Copy object without reference
                var tablex = JSON.parse(JSON.stringify(vm.resultsT[i]));
                tablex.id = undefined;
                var newtitle = tablex.title.replace("for coffee and studying/working", "to have breakfast or brunch");
                tablex.title = newtitle;
                var newtags = tablex.tags.replace("tea", "food pancakes");
                tablex.tags = newtags;
                //console.log("tags ", tags);
                table.addTable(tablex);
            }
                */     
            //Master change
            /*
            
            var question = '';
            for (var i = 0; i < $rootScope.content.length; i++) {

                switch ($rootScope.content[i].type) {
                    case 'Person': { question = 'Who ranks higher?'; break; }
                    case 'Establishment': { question = 'Which one you recommend?'; break; }
                    case 'Place': { question = 'Where would you go?'; break; }
                    case 'Activity': { question = 'What would you rather do?'; break; }
                    case 'Short-Phrase': { question = 'What is more accurate?'; break; }
                    case 'Organization': { question = 'Which one you recommend?'; break; }
                    case 'Event': { question = 'What would you rather do?'; break; }
                }
                table.update($rootScope.content[i].id,['question'],[question]);
            }
            */
        }

    }
})();






