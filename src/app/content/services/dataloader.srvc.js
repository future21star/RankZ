(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataloader', dataloader);

    dataloader.$inject = ['$http', '$q','$rootScope','pvisits', 'table2',
        'rankofday', 'answer', 'table', 'special', 'datetime', 'uaf', 'userdata',
        'matchrec', 'edit', 'useractivity', 'vrows', 'headline', 'cblock', 'catans','categories', 'locations'];

    function dataloader($http, $q, $rootScope, pvisits, table2,
        rankofday, answer, table, special, datetime, uaf, userdata,
        matchrec, edit, useractivity, vrows, headline, cblock, catans, categories, locations) {

        // Members
        var service = {
            gethomedata: gethomedata,
            getallranks: getallranks,
            //getthisrankdata: getthisrankdata,
            getallcblocks: getallcblocks,
            getrankdata: getrankdata,
            getanswerdata: getanswerdata,
            getpagevisitdata: getpagevisitdata,
            getInitalHomeData: getInitalHomeData
        };

        return service;

        function getInitalHomeData() {
            table.getInitalHomeData().then(function(response){

            });
        }
        function gethomedata() {

            var p0 = table.getTables();
            var p1 = headline.getheadlines();
            //var p2 = cblock.getcblocksmain();
            var p3 = rankofday.getrankofday();
            var p4 = uaf.getactions();
            var q5 = categories.getAllCategories();
            var q6 = locations.getAllLocations();

            // userdata.loadUserData();        //load user data (votes and activities)
            // userdata.loadUserAccount();     //load user business account

            //Minimum Data for Cwrapper
            return $q.all([p0, p1, p3, p4, q5, q6]).then(function (d) {
            
                $rootScope.content = d[0];

                $rootScope.headlines = d[1];
                //$rootScope.cblocks = d[2];
                $rootScope.rankofday = d[2];
                $rootScope.uafs = d[3];

                $rootScope.categories = d[4];
                $rootScope.locations = d[5];

                syncCatNh();
                createSearchStrings();

                $rootScope.pageDataLoaded = true;
                //loadingDone();
                createSearchStrings();
                if ($rootScope.DEBUG_MODE) console.log("cwrapper data ready!");
                $rootScope.$emit('homeDataLoaded');

            });
        }

        function getallranks(){
            
            var p0 = table.getTablesNonMain();      //Get ranks that are non main page, load them on the background

            //Minimum Data for Cwrapper
            return $q.all([p0]).then(function (d) {
            
                $rootScope.content = d[0];
                $rootScope.allRanksLoaded = true;
                createSearchStrings();
                //loadingDone();
                if ($rootScope.DEBUG_MODE) console.log("all ranks data ready!");
                // $rootScope.$emit('homeDataLoaded');

            });
        }

        function getallcblocks(){
            
            var p0 = cblock.getcblocksall();      //Get ranks that are non main page, load them on the background

            //Minimum Data for Cwrapper
            return $q.all([p0]).then(function (d) {
            
                $rootScope.cblocks = d[0];
                $rootScope.allCblocksLoaded = true;
                
                if ($rootScope.DEBUG_MODE) console.log("all cblocks ready!");
                //$rootScope.$emit('homeDataLoaded');
            });
        }

        function getrankdata() {

            // Requirement for rankSummary
            var q0 = answer.getAnswers();
            var q1 = special.getSpecials();
            var q2 = matchrec.GetMatchTable();
            var q3 = useractivity.getAllUserActivity();
            var q4 = catans.getAllcatans();

            return $q.all([q0, q1, q2, q3, q4]).then(function (d) {
            
                $rootScope.answers = d[0];
                $rootScope.specials = d[1];
                $rootScope.mrecs = d[2];
                $rootScope.alluseractivity = d[3];
                $rootScope.catansrecs = d[4];
                
                $rootScope.rankSummaryDataLoaded = true;
                getEstablishmentAnswers();
                if ($rootScope.DEBUG_MODE) console.log("rankSummary data ready!");
                $rootScope.$emit('rankDataLoaded');

            });
        }

        function getanswerdata(){

            //Requirement for answerDetail
            var r0 = edit.getEdits();
            var r1 = vrows.getAllvrows();
            var r2 = table2.getTables();
            
            return $q.all([r0, r1, r2]).then(function (d) {
                
                $rootScope.edits = d[0];
                $rootScope.cvrows = d[1];
                $rootScope.customranks = d[2];
                
                $rootScope.answerDetailLoaded = true;
                if ($rootScope.DEBUG_MODE) console.log("answerdetail data ready!");
                $rootScope.$emit('answerDataLoaded');

            });   
        }

        function getpagevisitdata(){

            //Not required for anything, just statistic, page visit counter
            var s0 = pvisits.getpvisits();
            return $q.all([s0]).then(function (d) {
                
                $rootScope.pvisits = d[0];
                updatePageVisits();
                if ($rootScope.DEBUG_MODE) console.log("page visits data ready!");
                
            });      
        }

        /*
        function getthisrankdata(category){
            var p0 = table.getSingleTable(category);
            return $q.all([p0]).then(function (d) {
                
                $rootScope.content = d[0];
                if ($rootScope.DEBUG_MODE) console.log("loaded single table!");

                var catansarr = [];
                if ($rootScope.content[0].isatomic == true){
                    catansarr = [category];
                }
                else catansarr = $rootScope.content[0].catstr.split(':').map(Number);
                console.log("catansarr - ",catansarr);
                var s0 = catans.getbyCategory(catansarr);
                
            });
        }*/

        function updatePageVisits() {
            //get todays date
            var datenow = new Date();
            var tz = datenow.getTimezoneOffset();

            datenow.setMinutes(datenow.getMinutes() - tz);

            //var dateStr = datenow.toLocaleDateString();
            function pad(n) { return n < 10 ? n : n; }
            var dateStr = pad(datenow.getMonth() + 1) + "/" + pad(datenow.getDate()) + "/" + datenow.getFullYear();

            //console.log('Date Str: ', dateStr);
            var newDate = true;
            var pvisitrec = {};
            for (var i = 0; i < $rootScope.pvisits.length; i++) {
                if ($rootScope.pvisits[i].date == dateStr) {
                    newDate = false;
                    pvisitrec = $rootScope.pvisits[i];
                    break;
                }
            }
            if (newDate) pvisits.postRec(dateStr);
            else pvisits.patchRec(pvisitrec.id, pvisitrec.nvisits + 1);

            $rootScope.dateToday = dateStr;
            $rootScope.dateTodayNum = datetime.date2number(dateStr);
        }

        function getEstablishmentAnswers() {
            $rootScope.estAnswers = [];
            $rootScope.estNames = [];
            $rootScope.pplAnswers = [];
            $rootScope.pplNames = [];
            $rootScope.plaAnswers = [];
            $rootScope.plaNames = [];
            $rootScope.orgAnswers = [];
            $rootScope.orgNames = [];
            for (var i = 0; i < $rootScope.answers.length; i++) {
                if ($rootScope.answers[i].type == 'Establishment') {
                    $rootScope.estNames.push($rootScope.answers[i].name);
                    $rootScope.estAnswers.push($rootScope.answers[i]);
                }
                if ($rootScope.answers[i].type == 'Person') {
                    $rootScope.pplNames.push($rootScope.answers[i].name);
                    $rootScope.pplAnswers.push($rootScope.answers[i]);
                }
                if ($rootScope.answers[i].type == 'Place') {
                    $rootScope.plaNames.push($rootScope.answers[i].name);
                    $rootScope.plaAnswers.push($rootScope.answers[i]);
                }
                if ($rootScope.answers[i].type == 'Organization') {
                    $rootScope.orgNames.push($rootScope.answers[i].name);
                    $rootScope.orgAnswers.push($rootScope.answers[i]);
                }
            }
        }

        function createSearchStrings(){
            $rootScope.searchStr = [];
            //Create seach strings combination of tags, title and answers            
            for (var i = 0; i < $rootScope.categories.length; i++) {                
                //Create single string for search
                //$rootScope.searchStr[i] = $rootScope.content[i].tags + " " + $rootScope.content[i].title + " " + $rootScope.content[i].answertags;
                $rootScope.searchStr[i] = $rootScope.categories[i].tags + " " + $rootScope.categories[i].title;
            
            }
        }

        function syncCatNh() {

            $rootScope.content.forEach(function(ranking){
                
                if(ranking.isatomic && ranking.ismp) {
                    var categoryName = ranking.title;

                    var index = $rootScope.categories.map(function(cat){return cat.category.toLowerCase().trim();}).indexOf(ranking.title.toLowerCase().trim());
                    // if (index == -1)
                    //     console.log('No Category', categoryName, ranking);
                    //if (index != -1)
                        //table.update(ranking.id, ['cat'], [$rootScope.categories[index].id]);

                } else {
                    var ind = ranking.title.lastIndexOf(' in ');

                    var categoryName = ranking.title.slice(0, ind);
                    categoryName += ' in @nh';

                    var location = ranking.title.slice(ind+4);

                    var index = $rootScope.categories.map(function(cat){return cat.category.toLowerCase().trim();}).indexOf(categoryName.toLowerCase().trim());

                    // if (index == -1)
                    //     console.log('No Category', categoryName, ranking);

                    var indexlocation = $rootScope.locations.map(function(loc){return loc.nh_name.toLowerCase().trim();}).indexOf(location.toLowerCase().trim()); 

                    // if (indexlocation == -1)
                    //     console.log('No Location', location, ranking);
                    //table.update(ranking.id, ['cat','nh'], [$rootScope.categories[index].id, $rootScope.locations[indexlocation].id]);

                }
            });

            // Uncomment when generating categories from title of rankings
            // var categoryAddList = [];

            // $rootScope.content.forEach(function(ranking){
                

            //     if(ranking.isatomic && ranking.ismp) {
            //         var categoryName = ranking.title;
            //         categoryAddList.push({
            //             category: ranking.title,
            //             type: ranking.type,
            //             tags: ranking.tags,
            //             keywords: ranking.keywords,
            //             question: ranking.question,
            //             fimage: ranking.fimage,
            //             bc: ranking.bc,
            //             fc: ranking.fc,
            //             shade: ranking.shade,
            //             introtext: ranking.introtext,
            //             user: ranking.user 
            //         });

            //     } else {
            //         var ind = ranking.title.lastIndexOf(' in ');
            //         var location = ranking.title.slice(ind+4);


            //         var categoryName = ranking.title.slice(0, ind);
            //         categoryName += ' in @nh';

            //         if( ind != -1){

            //             if(categoryAddList.map(function(cat){return cat.category.toLowerCase();}).indexOf(categoryName.toLowerCase()) == -1) {

            //                 var capitalized = categoryName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

            //                 categoryAddList.push({
            //                     category: capitalized,
            //                     type: ranking.type,
            //                     tags: ranking.tags,
            //                     keywords: ranking.keywords,
            //                     question: ranking.question,
            //                     fimage: ranking.fimage,
            //                     bc: ranking.bc,
            //                     fc: ranking.fc,
            //                     shade: ranking.shade,
            //                     introtext: ranking.introtext,
            //                     user: ranking.user
            //                 });
            //             }
            //         } else {

            //         }
            //     }
            // });
            //     // console.log(categoryAddList);
            // $q.all(categoryAddList.map(function(nh){
            //     return categories.addCategory(nh);
            // })).then(function(responses){
            //     console.log(responses);
            // }).catch(function(err){
            //     console.log(err);
            // })
        }
    }
})();