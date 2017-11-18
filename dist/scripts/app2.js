angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/admin/Partials/admin.html","<div ui-view=\"navbar\"></div><br><div ng-if=\"!vm.dataready\"><h2>Please wait, loading all admin data...</h2></div><div ng-if=\"vm.dataready\"><div class=\"text-center\" ng-if=\"vm.isAdmin\"><div class=\"btn-group\"><button class=\"btn btn-default {{vm.selKeywords}}\" ng-click=\"vm.keywords()\">Searched-Keyword</button> <button class=\"btn btn-default {{vm.selViews}}\" ng-click=\"vm.views()\">Ranking-Answers Views</button> <button class=\"btn btn-default {{vm.selFlags}}\" ng-click=\"vm.flags()\">Answer Flags</button> <button class=\"btn btn-default {{vm.selAddRanking}}\" ng-click=\"vm.addRank()\">Add Ranking</button> <button class=\"btn btn-default {{vm.selDbMaint}}\" ng-click=\"vm.dbMaint()\">dB Maint</button> <button class=\"btn btn-default {{vm.selQuery}}\" ng-click=\"vm.dbQuery()\">Query</button> <button class=\"btn btn-default {{vm.selSibLocs}}\" ng-click=\"vm.sibLocs()\">Sibbling Locations</button> <button class=\"btn btn-default {{vm.selFoodRanks}}\" ng-click=\"vm.foodranks()\">Food Ranks</button> <button class=\"btn btn-default {{vm.selPayment}}\" ng-click=\"vm.payment()\">Payment</button> <button class=\"btn btn-default {{vm.selPlan}}\" ng-click=\"vm.plan()\">Plan</button> <button class=\"btn btn-default\" ng-click=\"vm.bizAdmin()\">Business</button> <button class=\"btn btn-default\" ng-click=\"vm.cleanDB()\">Clean DB</button> <button class=\"btn btn-default\" ng-click=\"vm.modImages()\">Moderate Images</button> <button class=\"btn btn-default\" ng-click=\"vm.staticPages()\">Static Pages</button> <button class=\"btn btn-default {{vm.selLocations}}\" ng-click=\"vm.golocations()\">Locations</button> <button class=\"btn btn-default {{vm.selsitemap}}\" ng-click=\"vm.gositemap()\">Sitemap</button> <button class=\"btn btn-danger\" ng-click=\"vm.applyRule()\">Apply Rule</button></div></div><div ng-if=\"vm.dataAdmin\"><button class=\"btn btn-default {{vm.selQuery}}\" ng-click=\"vm.dbQuery()\">Query</button> <button class=\"btn btn-default {{vm.selSibLocs}}\" ng-click=\"vm.sibLocs()\">Sibbling Locations</button></div><div ng-if=\"vm.modAdmin\"><button class=\"btn btn-default\" ng-click=\"vm.modImages()\">Moderate Images</button> <button class=\"btn btn-default\" ng-click=\"vm.staticPages()\">Static Pages</button></div></div><br><br><div ui-view=\"\"></div><br><br>");
$templateCache.put("app/answer/Partials2/addAnswer.html","<div class=\"well-rank\" ng-if=\"vm.nsm\" style=\"margin:0px;\"><h2 class=\"sub-header\">{{vm.ranking}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h2></div><div class=\"well-rank\" ng-if=\"vm.sm\" style=\"margin:0px;\"><h3 class=\"sub-header\">{{vm.ranking}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h3></div><div class=\"row\" style=\"margin:0px;\"><h4>&nbsp&nbspAdd a new <span ng-if=\"vm.type == \'Establishment\'\"><em>Establishment</em> to this list.</span> <span ng-if=\"vm.type == \'Organization\'\"><em>Organization or Company</em> to this list.</span> <span ng-if=\"vm.type == \'Person\'\"><em>Person</em> to this list.</span> <span ng-if=\"vm.type == \'PersonCust\'\"><em>Professional</em> to this list.</span> <span ng-if=\"vm.type == \'Place\'\"><em>Place</em> to this list.</span> <span ng-if=\"vm.type == \'Short-Phrase\'\"><em>Answer</em> to this list.</span> <span ng-if=\"vm.type == \'Thing\'\"><em>Item</em> to this list.</span> <span ng-if=\"vm.type == \'Event\'\"><em>Event</em> to this list.</span> <span ng-if=\"vm.type == \'Simple\'\"><em>Item</em> to this list.</span></h4></div><div class=\"text-right\"><p class=\"hiw\" ng-click=\"vm.showHowItWorksDialog()\"><u>How it works?</u></p></div><br><div class=\"row\" style=\"margin:0px;\"><form class=\"form-horizontal col-sm-12 col-md-7\" role=\"form\" name=\"answerForm\"><div class=\"form-group\" ng-repeat=\"x in vm.fields\"><label class=\"control-label capitalize\" ng-if=\"!x.onlybyowner\" style=\"padding-left:10px\">{{x.isrequired ? \'**\':\'\'}}{{x.label}}:</label> <input class=\"form-control\" ng-model=\"x.val\" bs-options=\"{{x.opts}}\" bs-typeahead=\"\" type=\"{{x.textstyle}}\" ng-change=\"vm.onSelect(x)\" placeholder=\"{{x.label}}\" ng-hide=\"{{x.name==\'addinfo\'}}\" ng-if=\"!x.onlybyowner\" style=\"width:94%;margin-left:10px;margin-right:10px;\"><textarea class=\"form-control\" ng-model=\"x.val\" placeholder=\"{{x.label}}\" ng-model-options=\"{debounce: 2500}\" ng-show=\"{{x.name==\'addinfo\'}}\" rows=\"3\" ng-if=\"!x.onlybyowner\" id=\"textarea2\" style=\"width:94%;margin-left:10px;margin-right:10px;\"></textarea></div><div class=\"text-right\" ng-if=\"vm.type == \'Person\'\"><button ng-click=\"vm.getWiki()\" class=\"btn btn-primary\" style=\"background-color:#595959;border-color:black\">Get from Wikipedia</button></div></form><div class=\"col-sm-12 col-md-5\" ng-if=\"!vm.userIsOwner\"><div class=\"\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><img ng-src=\"{{vm.imageURL}}\" alt=\"{{image.errorLoading}}\" style=\"width:100%; max-height:300px\"> <img ng-src=\"../../../assets/images/powered_by_google_on_white.png\" ng-if=\"vm.type!=\'PersonCust\'\"></div><div class=\"\" ng-show=\"{{vm.type == \'Short-Phrase\'}}\"><div class=\"container-answer\" style=\"width:100%;height:auto\" ng-if=\"vm.type == \'Short-Phrase\'\"><br><h2 style=\"text-align:center\"><strong>{{vm.fields[0].val}}</strong></h2><br><h4 style=\"text-align:center\">{{vm.fields[1].val}}</h4></div></div><div ng-if=\"vm.type != \'PersonCust\'\"><div class=\"form-group text-right\"><button type=\"submit\" class=\"btn btn-primary {{vm.searchDisabled}}\" ng-click=\"vm.callSearchImage()\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\">{{vm.imageCommand}}</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewPrev()\" ng-disabled=\"vm.numLinks === 0\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&laquo</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewNext()\" ng-disabled=\"vm.numLinks === 0\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&raquo</button> <a ng-attr-style=\"display:{{vm.imagefunctions}}\">{{vm.linkIdx+1}} of {{vm.numLinks}}</a></div><label class=\"checkbox-inline\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><input type=\"checkbox\" ng-change=\"vm.onNoGoodImages(vm.ngi)\" ng-model=\"vm.ngi\">No good images were found</label></div><br></div><div class=\"col-sm-12 col-md-5\" ng-if=\"vm.userIsOwner\"><img ng-src=\"{{vm.imageURL}}\" alt=\"{{image.errorLoading}}\" style=\"width:100%; max-height:300px\"><div ng-attr-style=\"display:{{vm.userIsOwner ? \'inline\':\'none\'}}\"><blob-upload></blob-upload></div><br ng-if=\"vm.sm\"></div></div><div class=\"col-sm-12 col-md-7\" style=\"padding-bottom:10px\"><label>Ranks (select all that apply):</label><div ng-if=\"!vm.nhrdy\"><i>Please enter a valid neighborhood</i></div><ul class=\"list-group\" ng-if=\"vm.nhrdy\"><li class=\"list-group-item\" ng-repeat=\"x in vm.addToRanks\" ng-click=\"vm.selRank(x,$index)\" style=\"color:{{x.sel?\'black\':\'lightgrey\'}};cursor:pointer;\"><i ng-if=\"x.sel\" class=\"fa fa-check\"></i>&nbsp{{x.title}}</li></ul><div ng-if=\"vm.addRanksEnable\" style=\"padding-top:10px\"><div class=\"text-left\"><button class=\"btn btn-primary\" ng-if=\"!vm.addctsactive\" ng-click=\"vm.addCatans()\">Add More Ranks</button></div><div class=\"input-group\" ng-if=\"vm.addctsactive\"><input type=\"text\" class=\"form-control\" ng-model=\"vm.addctsval\" bs-options=\"c for c in vm.addctsopts\" bs-typeahead=\"\"> <span class=\"input-group-btn text-right\"><button class=\"btn btn-success\" type=\"button\" ng-click=\"vm.addcts()\">Add</button></span></div></div></div><div class=\"col-sm-12 col-md-12 form-group\" style=\"margin:0px;\"><div class=\"text-center\"><button ng-click=\"vm.rankSummary()\" class=\"btn btn-danger\">Cancel</button><button type=\"submit\" class=\"btn btn-success\" ng-click=\"vm.callAddAnswer()\">Add Answer</button></div></div><br class=\"hidden-md hidden-lg hidden-xl\"><br class=\"hidden-md hidden-lg hidden-xl\"><br class=\"hidden-md hidden-lg hidden-xl\">");
$templateCache.put("app/answer/Partials2/addEvent.html","<div class=\"well-rank\" ng-if=\"vm.nsm\" style=\"margin:0px;\"><h2 class=\"sub-header\">{{vm.ranking}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h2></div><div class=\"well-rank\" ng-if=\"vm.sm\" style=\"margin:0px;\"><h3 class=\"sub-header\">{{vm.ranking}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h3></div><div class=\"row\" style=\"margin:0px;\"><h4>{{ vm.isEdit ? \'Edit Event\':\'Add Event\'}}</h4></div><div class=\"text-right\"><p class=\"hiw\" ng-click=\"vm.showHowItWorksDialog()\"><u>How it works?</u></p></div><br><div class=\"row\" style=\"margin:0px;\"><div class=\"col-xs-6 col-sm-4 col-md-4\"><p class=\"text-right\">** Event Title:</p></div><div class=\"col-xs-12 col-sm-4 col-md-4\"><input class=\"form-control\" ng-model=\"vm.ev.name\" type=\"text\" placeholder=\"Event Title\" ng-change=\"vm.displayCharLength()\" maxlength=\"45\" ng-attr-style=\"background-color:{{vm.ev.bc}};color:{{vm.ev.fc}}\"></div><div class=\"col-xs-8 hidden-sm hidden-md hidden-lg hidden-xl\"></div><div class=\"col-xs-6 col-sm-4 col-md-4\"><p class=\"text-left\">{{vm.char}} chars left</p></div></div><br ng-if=\"!vm.sm\"><div ng-if=\"!vm.sm\"><div class=\"row\" style=\"margin:0px;\"><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Background Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.ev.bc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Font Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.ev.fc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div></div></div><br ng-if=\"!vm.sm\"><br><p class=\"text-left\">Frequency</p><div class=\"btn-group col-sm-6 col-md-6\"><button class=\"btn btn-primary {{vm.ev.freq == \'onetime\'? \'active\':\'\'}}\" ng-click=\"vm.frequencySel(1)\">One-Time</button> <button class=\"btn btn-primary {{vm.ev.freq == \'weekly\'? \'active\':\'\'}}\" ng-click=\"vm.frequencySel(2)\">Weekly</button></div><br><br><div class=\"row\" ng-if=\"vm.onetime\" style=\"margin:0px;\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">Start date:</p></div></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.ev.sdate\" type=\"text\"></datepicker></div></div></div><div class=\"row\" ng-if=\"vm.onetime\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">Start time:</p></div></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><select ng-model=\"vm.ev.stime\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.stime}}</option></select></div></div></div><div class=\"row\" ng-if=\"vm.onetime\" style=\"margin:0px;\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">End date:</p></div></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.ev.edate\" type=\"text\"></datepicker></div></div><div class=\"row\" ng-if=\"vm.onetime\" style=\"margin:0px;\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">End time:</p></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" ng-attr-style=\"display:{{vm.onetime ? \'inline\':\'none\'}}\"><select ng-model=\"vm.ev.etime\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.etime}}</option></select></div></div><div class=\"row\" ng-if=\"vm.weekly\" style=\"margin:0px;\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">Start date:</p></div></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.ev.sdate\" type=\"text\"></datepicker></div></div></div><div class=\"row\" ng-if=\"vm.weekly\" style=\"margin:0px;\"><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><p class=\"{{vm.sm ? \'text-left\':\'text-right\'}}\">End date:</p></div></div><div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\" ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.ev.edate\" type=\"text\"></datepicker></div></div><div class=\"row\" ng-if=\"vm.weekly\" style=\"margin:0px;\"><div class=\"text-center\"><div class=\"col-xs-12 col-sm-12 col-md-12\" ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.mon\" value=\"\">Mon</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.tue\" value=\"\">Tue</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.wed\" value=\"\">Wed</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.thu\" value=\"\">Thu</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.fri\" value=\"\">Fri</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.sat\" value=\"\">Sat</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.ev.sun\" value=\"\">Sun</label></div></div></div><br><div class=\"row\" ng-if=\"vm.weekly\" style=\"margin:0px;\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><p class=\"text-right\">Start time:</p></div></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><select ng-model=\"vm.ev.stime2\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.ev.stime2}}</option></select></div></div></div><div class=\"row\" ng-if=\"vm.weekly\" style=\"margin:0px;\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><p class=\"text-right\">End time:</p></div></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-attr-style=\"display:{{vm.weekly ? \'inline\':\'none\'}}\"><select ng-model=\"vm.ev.etime2\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.ev.etime2}}</option></select></div></div></div><div class=\"row\" style=\"margin:0px;\"><form class=\"form-horizontal col-xs-12 col-sm-12 col-md-6\" role=\"form\" name=\"answerForm\"><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Venue / Location:</label> <input class=\"form-control\" ng-model=\"vm.ev.eventloc\" bs-typeahead=\"\" bs-options=\"c for c in vm.locations\" type=\"text\" placeholder=\"{{vm.ev.eventloc.str}}\" ng-change=\"vm.onSelect()\"></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Address:</label> <input class=\"form-control\" ng-model=\"vm.ev.location\" type=\"text\" placeholder=\"{{vm.ev.location}}\"></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Neighborhood:</label> <input class=\"form-control\" ng-model=\"vm.ev.cityarea\" bs-typeahead=\"\" bs-options=\"c for c in vm.neighborhoods\" ng-change=\"vm.onSelectNh()\" type=\"text\" placeholder=\"{{vm.ev.cityarea}}\"></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Phone Number:</label> <input class=\"form-control\" ng-model=\"vm.ev.phone\" type=\"text\" placeholder=\"{{vm.ev.phone}}\"></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Event Website:</label> <input class=\"form-control\" ng-model=\"vm.ev.website\" type=\"text\" placeholder=\"{{vm.ev.website}}\"></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Additional Info:</label> <textarea class=\"form-control\" ng-model=\"vm.ev.addinfo\" placeholder=\"{{vm.ev.addinfo}}\" rows=\"4\" ng-attr-style=\"background-color:{{vm.ev.bc}};color:{{vm.ev.fc}};width:100%\"></textarea></div></form><div class=\"col-xs-12 col-sm-12 col-md-6\"><div class=\"\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><img src=\"{{vm.imageURL}}\" alt=\"{{image.errorLoading}}\" style=\"width:100%; max-height:300px\"> <img src=\"../../../assets/images/powered_by_google_on_white.png\"></div><div class=\"form-group text-right\"><button type=\"submit\" class=\"btn btn-primary {{vm.searchDisabled}}\" ng-click=\"vm.callSearchImage()\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\">{{vm.imageCommand}}</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewPrev()\" ng-disabled=\"vm.numLinks === 0\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&laquo</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewNext()\" ng-disabled=\"vm.numLinks === 0\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&raquo</button> <a ng-attr-style=\"display:{{vm.imagefunctions}}\">{{vm.linkIdx+1}} of {{vm.numLinks}}</a></div><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-change=\"vm.onNoGoodImages(vm.ngi)\" ng-model=\"vm.ngi\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\">No good images were found</label></div></div><br><div class=\"radio\"><label><input type=\"radio\" ng-model=\"vm.nobind\" name=\"optradio\" checked=\"true\">Do not bind event to my account, let anyone make changes.</label></div><div class=\"radio\"><label><input type=\"radio\" ng-model=\"vm.bind\" name=\"optradio\">Bind this event to my account, only I can make changes.</label></div><br><div class=\"row\" style=\"margin:0px;\"><div class=\"form-group text-center\"><button type=\"button\" class=\"btn btn-success\" ng-click=\"vm.goBack()\">Back</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.showPreview()\">Preview</button> <button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.deleteSpecial()\" ng-attr-style=\"display:{{vm.isEdit ? \'inline\':\'none\'}}\">Delete</button></div></div>");
$templateCache.put("app/answer/Partials2/answerRanksManager.html","<h2>Custom Ranks Manager</h2><br><p class=\"text-left\">You have purchased <strong>{{vm.ranksqty}}</strong> ranks that are currently active.</p><table class=\"table\"><tbody><thead style=\"border-style:none;\"><tr><th>Name</th><th></th><th></th></tr></thead><tr ng-repeat=\"x in vm.ranks\" style=\"cursor:pointer;\"><td ng-if=\"x.used\" style=\"width:80%\">{{x.title}}</td><td ng-if=\"!x.used\" style=\"width:80%;color:#808080\"><i>Empty</i></td><td ng-if=\"x.used\" style=\"width:10%\"><button class=\"btn btn-primary\" ng-click=\"vm.editRank($index)\">Edit</button></td><td ng-if=\"x.used\" style=\"width:10%\"><button class=\"btn btn-danger\" ng-click=\"vm.deleteRank($index)\">Delete</button></td><td ng-if=\"!x.used\" style=\"width:10%\"><button class=\"btn btn-success\" ng-click=\"vm.addRank()\">Add</button></td></tr></tbody></table><p class=\"text-left\">Custom ranks are a great way to engage your audience with your products and services.</p><div class=\"text-center\"><button class=\"btn btn-success\">Purchase additional Ranks</button><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div></div>");
$templateCache.put("app/answer/Partials2/editAnswer.html","<div class=\"well-answer\" ng-if=\"vm.nsm\"><h2 class=\"sub-header\">{{vm.answer.name}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#b3b3b3;color:#4d4d4d;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h2></div><div class=\"well-answer\" ng-if=\"vm.sm\"><h3 class=\"sub-header\">{{vm.answer.name}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#b3b3b3;color:#4d4d4d;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h3></div><div class=\"row\" style=\"margin:0px\"><div class=\"col-sm-6\"><h3>Edit Answer Profile</h3></div><div class=\"col-sm-6 text-right\"><p class=\"hiw\" ng-click=\"vm.showHowItWorksDialog()\"><u>How it Works</u></p></div></div><br><div class=\"row\" style=\"margin:0px\"><div class=\"col-sm-12 col-md-7\"><form class=\"form-horizontal\" role=\"form\" name=\"answerForm\" ng-repeat=\"x in vm.fields\"><div ng-attr-style=\"display:{{x.field!=\'addinfo\' ? \'inline\':\'none\'}}\" ng-hide=\"{{x.onlybyowner && !vm.userIsOwner}}\"><label class=\"control-label capitalize\">{{x.label}}:</label><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"x.val\" bs-options=\"{{x.opts}}\" bs-typeahead=\"\" placeholder=\"{{x.cval}}\"> <span class=\"input-group-btn text-right\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.editField(x)\">Edit</button></span></div></div><div class=\"input-group\" ng-attr-style=\"display:{{x.field==\'addinfo\' ? \'inline\':\'none\'}}\" ng-hide=\"{{!vm.access && (vm.type == \'PersonCust\')}}\"><label class=\"control-label capitalize\">{{x.label}}:</label> <textarea id=\"textarea1\" class=\"form-control\" ng-model=\"x.val\" placeholder=\"{{x.cval}}\" rows=\"5\" ng-model-options=\"{debounce: 2500}\">\n            </textarea><br><br><span class=\"input-group-btn text-right\"><button ng-click=\"vm.getWiki()\" class=\"btn btn-primary\" style=\"background-color:#595959;border-color:gray;margin-right:10px\" ng-if=\"vm.type == \'Person\'\">Get from Wikipedia</button> <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.editField(x)\">Edit</button></span></div></form></div><div class=\"col-sm-12 col-md-5\"><div class=\"\" ng-if=\"vm.type!=\'Short-Phrase\'\"><img class=\"displayed-uc\" ng-src=\"{{vm.imageURL}}\" alt=\"{{image.errorLoading}}\" ng-attr-style=\"width:100%; max-height:300px\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"> <img ng-src=\"../../../assets/images/powered_by_google_on_white.png\" ng-if=\"vm.type!=\'PersonCust\' && !vm.userIsOwner\"></div><div class=\"container-answer\" ng-attr-style=\"width:100%; max-height:300px;\" ng-if=\"vm.type == \'Short-Phrase\'\"><br><h2 style=\"text-align:center\"><strong>{{vm.answer.name}}</strong></h2><br><h4 style=\"text-align:center\">{{vm.answer.addinfo}}</h4></div><br><div ng-if=\"vm.userIsOwner\" ng-attr-style=\"display:{{vm.userIsOwner ? \'inline\':\'none\'}}\"><blob-upload></blob-upload></div><div ng-attr-style=\"display:{{vm.userIsOwner ? \'none\':\'inline\'}}\" ng-if=\"vm.type!=\'PersonCust\'\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.editImage()\">{{vm.imageCommand}}</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewPrev()\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&laquo</button> <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.viewNext()\" ng-attr-style=\"display:{{vm.imagefunctions}}\">&raquo</button> <a ng-attr-style=\"display:{{vm.imagefunctions}}\">{{vm.linkIdx+1}} of {{vm.numLinks}}</a> <button type=\"submit\" class=\"btn btn-success\" ng-click=\"vm.selectImage()\" ng-attr-style=\"display:{{vm.imagefunctions}}\">Select</button></div><br><label class=\"checkbox-inline\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><input type=\"checkbox\" ng-change=\"vm.onNoGoodImages(vm.ngi)\" ng-model=\"vm.ngi\">No good images were found</label></div></div><div class=\"row\"><div class=\"col-sm-12 col-md-7\" style=\"padding-top:10px\"><label>Ranks:</label><ul class=\"list-group\"><li class=\"list-group-item\" ng-repeat=\"x in vm.answerRanks\" style=\"cursor:pointer;\">{{x.title}} <i ng-if=\"$index>0\" class=\"glyphicon glyphicon-remove pull-right\" ng-click=\"vm.remRank(x)\"></i></li></ul><div ng-if=\"true\" style=\"padding-top:10px\"><div class=\"text-left\"><button class=\"btn btn-primary\" ng-if=\"!vm.addctsactive\" ng-click=\"vm.addCatans()\">Add More Ranks</button></div><div class=\"input-group\" ng-if=\"vm.addctsactive\"><input type=\"text\" class=\"form-control\" ng-model=\"vm.addctsval\" bs-options=\"c for c in vm.addctsopts\" bs-typeahead=\"\"> <span class=\"input-group-btn text-right\"><button class=\"btn btn-success\" type=\"button\" ng-click=\"vm.addcts()\">Add</button></span></div></div></div></div><br><div class=\"well well-light-edit\" ng-repeat=\"x in vm.edits\"><div ng-if=\"x.field != \'addinfo\'\"><p><strong>{{x.username}}</strong> has edited the <strong class=\"capitalize\"><em>{{x.field}}</em></strong> of <strong><em>{{x.name}}</em></strong> to <strong><em>{{x.nval}}</em></strong>.</p></div><div ng-if=\"x.field == \'addinfo\'\"><p><strong>{{x.username}}</strong> has edited the information of <strong><em>{{x.name}}</em></strong> to:<br><br>{{x.nval}}.</p></div><img ng-src=\"{{x.imageURL}}\" class=\"displayed\" ng-attr-style=\"height:150px;display:{{x.display}}\"><div class=\"row form-group\"><div class=\"text-center\"><label>{{x.upV}}</label> <label></label> <button class=\"btn btn-primary {{x.agree}}\" ng-click=\"vm.editAgree(x, $index)\">Agree</button> <button type=\"submit\" class=\"btn btn-primary {{x.disagree}}\" ng-click=\"vm.editDisagree(x, $index)\">Disagree</button> <label></label> <label>{{x.downV}}</label></div></div></div><div ng-if=\"vm.sm && vm.userIsOwner && vm.type == \'Establishment\'\"><div class=\"text-center\"><label>Service Hours</label></div><br><div ng-repeat=\"x in vm.openhours\"><div class=\"container-hours\"><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-2\"><p>{{x.day}}:</p></div><div class=\"col-xs-6 col-sm-6 col-md-2\"><select ng-model=\"x.opn\" ng-change=\"vm.hoursChanged()\" ng-options=\"n for n in vm.openOptions\"></select></div></div><div class=\"row\"><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><p class=\"text-right\">From:</p></div><div class=\"col-xs-4 col-sm-4 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><select ng-model=\"x.st\" ng-change=\"vm.hoursChanged()\" ng-options=\"t for t in vm.timeDD\"></select></div><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><p class=\"text-right\">To:</p></div><div class=\"col-xs-4 col-sm-4 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><select ng-model=\"x.ct\" ng-change=\"vm.hoursChanged()\" ng-options=\"t for t in vm.timeDD\"></select></div></div></div><br></div></div><div ng-if=\"vm.nsm && vm.userIsOwner && vm.type == \'Establishment\'\"><div class=\"container\" style=\"background-color:#e6e6e6;padding-right:50px;padding-left:10px;padding-top:10px;padding-bottom:0px;\"><div class=\"text-center\"><label>Service Hours</label></div><br><div class=\"container\" ng-repeat=\"x in vm.openhours\"><div class=\"row\"><div class=\"col-xs-2 col-sm-2 col-md-2\"><p>{{x.day}}:</p></div><div class=\"col-xs-2 col-sm-2 col-md-2\"><select ng-model=\"x.opn\" ng-change=\"vm.hoursChanged()\" ng-options=\"n for n in vm.openOptions\"></select></div><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><p class=\"text-right\">From:</p></div><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><select ng-model=\"x.st\" ng-change=\"vm.hoursChanged()\" ng-options=\"t for t in vm.timeDD\"></select></div><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><p class=\"text-right\">To:</p></div><div class=\"col-xs-2 col-sm-2 col-md-2\" ng-attr-style=\"display:{{x.opn==\'OPEN\' ? \'inline\': \'none\'}}\"><select ng-model=\"x.ct\" ng-change=\"vm.hoursChanged()\" ng-options=\"t for t in vm.timeDD\"></select></div></div><br></div></div></div><div class=\"text-right\" ng-if=\"vm.userIsOwner && vm.type == \'Establishment\'\"><a ng-click=\"vm.updateHours()\" class=\"btn btn-primary {{vm.updateHoursEn}}\">Update Hours</a></div><br><div class=\"text-center\"><a ng-click=\"vm.answerDetail()\" class=\"btn btn-success\">Back</a></div><br>");
$templateCache.put("app/customer/Partials/customer.html","<div ui-view=\"navbar\"></div><br><h2>Select business you wish to manage</h2><div ng-repeat=\"x in vm.answers\"><label><input type=\"radio\" name=\"businessradio\" ng-click=\"vm.selAnswer(x)\">&nbsp;&nbsp;{{x.name}}, {{x.location}}, {{x.cityarea}}</label></div><br><div class=\"text-center\"><div class=\"btn-group col-sm-6 col-md-6\"><button class=\"btn btn-success {{vm.loadMainPhoto}}\" ng-click=\"vm.loadMainPhoto()\">Main Photo</button> <button class=\"btn btn-primary {{vm.loadSpecials}}\" ng-click=\"vm.loadSpecials()\">Specials</button> <button class=\"btn btn-danger {{vm.loadPhotoGallery}}\" ng-click=\"vm.loadPhotoGallery()\">Photo Gallery</button></div></div><br><br><div ui-view=\"\"></div><br><br><footer class=\"footer\"><div class=\"container\"><p class=\"text-muted\">Rank-X is property of Rank-X LLC. San Diego, CA - 2016</p></div></footer>");
$templateCache.put("app/customer/Partials/editspecial.html","<div class=\"container\"><div class=\"well-sm\"><h3 class=\"sub-header\">{{vm.header}} <span class=\"nomargin\"><button type=\"button\" class=\"btn btn-default pull-right\" style=\"vertical-align:middle;\" ng-click=\"vm.closeRank()\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-top:0px;padding-bottom:0px;\" aria-hidden=\"true\"></span></button></span></h3></div></div><h3>{{ vm.isEdit ? \'Edit Special\':\'Add Special\'}}</h3><br><div class=\"well\"><div class=\"row\"><div class=\"col-xs-6 col-sm-4 col-md-4\"><p class=\"text-right\">Specials Title:</p></div><div class=\"col-xs-12 col-sm-4 col-md-4\"><input class=\"form-control\" ng-model=\"vm.sp.stitle\" type=\"text\" placeholder=\"Special Banner\" ng-change=\"vm.displayCharLength()\" maxlength=\"25\" ng-attr-style=\"background-color:{{vm.sp.bc}};color:{{vm.sp.fc}}\"></div><div class=\"col-xs-8 hidden-sm hidden-md hidden-lg hidden-xl\"></div><div class=\"col-xs-6 col-sm-4 col-md-4\"><p class=\"text-left\">{{vm.char}} chars left</p></div></div><br><div class=\"row\"><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Background Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.sp.bc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Font Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.sp.fc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div></div><p class=\"text-left\">Frequency</p><div class=\"btn-group col-sm-6 col-md-6\"><button class=\"btn btn-primary {{vm.sp.freq == \'onetime\'? \'active\':\'\'}}\" ng-click=\"vm.frequencySel(1)\">One-Time</button> <button class=\"btn btn-primary {{vm.sp.freq == \'weekly\'? \'active\':\'\'}}\" ng-click=\"vm.frequencySel(2)\">Weekly</button></div><br><br><br><div class=\"row\"><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><div ng-if=\"vm.onetime\"><p class=\"text-right\">Start date:</p></div></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><div ng-if=\"vm.onetime\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.sp.sdate\" type=\"text\"></datepicker></div></div></div><div class=\"row\"><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><div ng-if=\"vm.onetime\"><p class=\"text-right\">Start time:</p></div></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><div ng-if=\"vm.onetime\"><select ng-model=\"vm.sp.stime\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.stime}}</option></select></div></div></div><div class=\"row\"><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><div ng-if=\"vm.onetime\"><p class=\"text-right\">End date:</p></div></div><div class=\"col-xs-4 col-sm-3 col-md-3 col-lg-3\" ng-if=\"vm.onetime\"><datepicker date-format=\"EEE MMM d y\" date-year-title=\"selected title------\"><input ng-model=\"vm.sp.edate\" type=\"text\"></datepicker></div></div><div class=\"row\"><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" ng-if=\"vm.onetime\"><p class=\"text-right\">End time:</p></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" ng-if=\"vm.onetime\"><select ng-model=\"vm.sp.etime\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.etime}}</option></select></div></div><div class=\"row\"><div class=\"text-center\"><div class=\"col-xs-12 col-sm-12 col-md-12\" ng-if=\"vm.weekly\"><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.mon\" value=\"\">Mon</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.tue\" value=\"\">Tue</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.wed\" value=\"\">Wed</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.thu\" value=\"\">Thu</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.fri\" value=\"\">Fri</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.sat\" value=\"\">Sat</label> <label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.sp.sun\" value=\"\">Sun</label></div></div></div><br><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-if=\"vm.weekly\"><p class=\"text-right\">Start time:</p></div></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-if=\"vm.weekly\"><select ng-model=\"vm.sp.stime2\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.stime2}}</option></select></div></div></div><div class=\"row\"><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-if=\"vm.weekly\"><p class=\"text-right\">End time:</p></div></div><div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\"><div ng-if=\"vm.weekly\"><select ng-model=\"vm.sp.etime2\" ng-options=\"x for x in vm.timeDD\"><option value=\"\">{{vm.sp.etime2}}</option></select></div></div></div><br><div class=\"row\"><div class=\"col-sm-0 col-md-3 col-lg-3\"></div><div class=\"container col-sm-12 col-md-6 col-lg-6\"><p>Event Details</p><textarea class=\"form-control\" ng-model=\"vm.sp.details\" placeholder=\"{{x.label}}\" rows=\"4\" ng-attr-style=\"background-color:{{vm.sp.bc}};color:{{vm.sp.fc}};width:100%\"></textarea></div><div class=\"col-sm-0 col-md-3 col-lg-3\"></div><br></div><div class=\"row\"><div class=\"col-sm-0 col-md-3 col-lg-3\"></div><div class=\"container col-sm-12 col-md-6 col-lg-6\"><div class=\"\"><p>Event Image</p><img src=\"{{vm.imageURL}}\" alt=\"{{image.errorLoading}}\" style=\"width:100%; max-height:300px\"><div ng-if=\"vm.userIsOwner\"><blob-upload></blob-upload></div></div></div><div class=\"col-sm-0 col-md-3 col-lg-3\"></div><br></div><br><div class=\"form-group text-center\"><button type=\"button\" class=\"btn btn-success\" ng-click=\"vm.goBack()\">Back</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.showPreview()\">Preview</button> <button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.deleteSpecial()\" ng-attr-style=\"display:{{vm.isEdit ? \'inline\':\'none\'}}\">Delete</button></div></div>");
$templateCache.put("app/customer/Partials/editvrows.html","<div class=\"container\"><div class=\"well-sm\"><h3 class=\"sub-header\">{{vm.header}} <span class=\"nomargin\"><button type=\"button\" class=\"btn btn-default pull-right\" style=\"vertical-align:middle;\" ng-click=\"vm.closeRank()\"><span class=\"glyphicon glyphicon-remove\" style=\"padding-top:0px;padding-bottom:0px;\" aria-hidden=\"true\"></span></button></span></h3></div></div><div ng-repeat=\"x in vm.vrows track by $index\"><div ng-attr-style=\"display:{{x.shdr ? \'inline\':\'none\'}}\"><br></div><div class=\"row\"><div ng-attr-style=\"display:{{x.shdr ? \'inline\':\'none\'}}\"><div class=\"col-xs-10\" style=\"background-color:gray;color:white;\"><p>{{x.gtitle}}</p></div><div class=\"col-xs-2\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.editVRowGroupDiag(x)\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span></button></div></div></div><div ng-attr-style=\"display:{{x.title != \'-\' ? \'inline\':\'none\'}}\"><div class=\"row\"><div class=\"col-xs-10\" style=\"background-color:#d9d9d9;padding-top:2px;padding-bottom:2px;\">{{x.title}}</div><div class=\"col-xs-2\"><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.deleteVRowDiag(x)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></div></div></div></div><div ng-attr-style=\"display:{{x.saddr ? \'inline\':\'none\'}}\"><div class=\"row\"><div class=\"col-xs-10\"><div class=\"text-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.addVRowDiag(x)\">Add Vote Row</button></div></div><div class=\"col-xs-2\"></div></div></div></div><br><div class=\"text-left\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.addVRowGroupDiag()\">Add Group</button></div><div class=\"text-right\"><button type=\"button\" class=\"btn btn-success\" ng-click=\"vm.closeRank()\">Go Back</button></div>");
$templateCache.put("app/customer/Partials/mainphoto.html","<h1>Main Photo</h1>");
$templateCache.put("app/customer/Partials/photogallery.html","<h1>Photo Gallery</h1>");
$templateCache.put("app/customer/Partials/specials.html","<div id=\"veil\" ng-hide=\"vm.dataReady\"></div><div id=\"feedLoading\" ng-hide=\"vm.dataReady\"><div style=\"text-align: center\" ng-if=\"!vm.dataReady\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">loading specials...</p></div></div><div ng-if=\"vm.dataReady\"><h2>Specials Manager</h2><br><p class=\"text-left\">You have purchased premium membership for this Establishment. You can add up to 7 specials and promotions.</p><table class=\"table\"><tbody><thead style=\"border-style:none;\"><tr><th>Special</th><th></th><th></th></tr></thead><tr ng-repeat=\"x in vm.specialsList\" style=\"cursor:pointer;\"><td ng-if=\"x.used\" style=\"width:80%\">{{x.stitle}}</td><td ng-if=\"!x.used\" style=\"width:80%;color:#808080\"><i>Empty</i></td><td ng-if=\"x.used\" style=\"width:10%\"><button class=\"btn btn-primary\" ng-click=\"vm.selSpecial(x)\">Edit</button></td><td ng-if=\"x.used\" style=\"width:10%\"><button class=\"btn btn-danger\" ng-click=\"vm.deleteSpecial(x)\">Delete</button></td><td ng-if=\"!x.used\" style=\"width:10%\"><button class=\"btn btn-success\" ng-click=\"vm.addSpecial()\">Add</button></td></tr></tbody></table><p class=\"text-left\">Specials are a great way to let people know all the great offers you have at any time.</p><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div></div>");
$templateCache.put("app/layout/Partials2/about.html","<div class=\"container\"><div class=\"jumbotron\"><br><div class=\"row\"><div class=\"col-sm-0 col-md-2 col-lg-3\"></div><div class=\"col-sm-12 col-md-8 col-lg-6\"><img src=\"{{vm.logoimage}}\" class=\"displayed-uc\" alt=\"Cinque Terre\" ng-attr-style=\"width:100%;height:{{vm.sm ? \'100px\':\'200px\'}}\"></div><div class=\"col-sm-0 col-md-2 col-lg-3\"></div></div><br><br><p>Rank-X collects users preferences to generate truly collective rankings on all things about your city.</p><br></div><div class=\"well\"><div class=\"form-group text-left\"><p>San Diego, CA - 2016</p><p>Contact: contact@rank-x.com</p></div></div><br><div class=\"form-group text-center\"><button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.goBack()\">Back</button></div></div>");
$templateCache.put("app/layout/Partials2/city-selection.html","");
$templateCache.put("app/layout/Partials2/customertos.html","<style>\n    #ppBody {\n        font-size: 11pt;\n        width: 100%;\n        margin: 0 auto;\n        text-align: justify;\n    }\n    \n    #ppHeader {\n        font-family: verdana;\n        font-size: 21pt;\n        width: 100%;\n        margin: 0 auto;\n    }\n    \n    .ppConsistencies {\n        display: none;\n    }\n\n\n    #ppBody > ol > li {\n        margin-bottom: 30px;\n    }\n    \n    #ppBody > ol > li > ul > li{\n        margin-bottom: 20px;\n    }\n\n    #ppBody > ol > li > ul > li > ol >li{\n        margin-bottom: 10px;\n    }\n</style><div class=\"container\"><br><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><div id=\"ppHeader\"><span><img src=\"/assets/images/logo_sq.png\" style=\"width:80px\"></span> Rank-X Terms of Use</div><div id=\"ppBody\">These terms of service constitute a legally binding agreement (the “Agreement”) between you and Rank-X, LLC (“Rank-X” “we,” “us” or “our”) governing your use of the Rank-X application, website, and technology platform (collectively, the “Rank-X Platform”). PLEASE BE ADVISED: THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW CLAIMS YOU AND RANK-X HAVE AGAINST EACH OTHER CAN BE BROUGHT (SEE SECTION 16 BELOW). THESE PROVISIONS WILL, WITH LIMITED EXCEPTION, REQUIRE YOU TO SUBMIT CLAIMS YOU HAVE AGAINST RANK-X TO BINDING AND FINAL ARBITRATION ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, GROUP OR REPRESENTATIVE ACTION OR PROCEEDING. AS A DRIVER, YOU HAVE AN OPPORTUNITY TO OPT OUT OF ARBITRATION WITH RESPECT TO CERTAIN CLAIMS AS PROVIDED IN SECTION 17. By entering into to this Agreement, you expressly acknowledge that you understand this Agreement (including the dispute resolution and arbitration provisions Section 16) and accept all of its terms. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE OR ACCESS THE RANK-X PLATFORM.<ol><li><b>The Rank-X Platform</b> The Rank-X Platform provides an online platform that creates lists, rankings, and forums about businesses, activities, locations, and venues (Collectively “Businesses”). The lists, rankings, and forums within the Rank-X Platform are generated by persons who use the site (“Users”) to rank and comment on Businesses they have experienced. The Rank-X Platform also allows persons to promote Rank-X to various Businesses (“Promoters”) in exchange for a commission-based percentage of the revenue generated by Businesses who the Promoter successfully signs up for Rank-X’s Premium Membership. Each individual Promoter will be assigned a unique alphanumeric code (“Code”). Each Business that signs up for Rank-X’s Premium Membership will use the Code assigned to the Promoter that contacted them to gain access to Rank-X’s Premium Membership benefits. When a Business uses this Code, the Business will be given sixty (60) days of free access to the Premium Membership. If a Business, after the 60-day free period expires, chooses to continue accessing Rank-X’s Premium Membership benefits, it will do so by using the Promoter’s Code to sign up for continued Premium Membership benefits at the specified cost.</li><li><b>Modification to the Agreement</b> In the event Rank-X modifies the terms and conditions of this Agreement, such modifications shall be binding on you only upon your acceptance of the modified Agreement. Rank-X reserves the right to modify any information referenced in the hyperlinks from this Agreement from time to time, and such modifications shall become effective upon posting. Continued use of the Rank-X Platform or Services after any such changes shall constitute your consent to such changes. Unless material changes are made to the arbitration provisions herein, you agree that modification of this Agreement does not create a renewed opportunity to opt out of arbitration (if applicable).</li><li><b>Eligibility</b> The Rank-X Platform may only be used by individuals and businesses who can form legally binding contracts under applicable law. The Rank-X Platform is not available to children (persons under the age of 18) or Premium Members who have had their Premium Member account temporarily or permanently deactivated. By becoming a Premium Member of Rank-X’s Platform, you represent and warrant that you are at least 18 years old and that you have the right, authority and capacity to enter into and abide by the terms and conditions of this Agreement. You may not allow other persons to use your Business’s Rank-X account, and you agree that you are the sole authorized user of your account.</li><li><b>Costs and Fees</b> If you are a business, you may obtain the benefits of Rank-X’s Premium Membership by paying the specified monthly membership fee. Rank-X’s Premium Membership fees are set out in Section 4(b) below.<ol type=\"a\"><li><b>Costs and Fees</b> A Business may sign up for and purchase Rank-X’s Premium Membership in order to utilize the various benefits of doing so. “Premium Membership” for purposes of this agreement refers to a Business’s ability to promote the Business’s menu, specials, and activities, which drives additional online traffic to the Business’s profile, in exchange for a monthly Premium Membership fee. Rank-X reserves the right to change the pricing schedule for Premium Memberships at any time in our discretion based upon local market factors, and we will provide you with notice if our prices do change.</li><li><b>Membership Fees and Payment Schedule.</b> Rank-X’s Premium Membership costs vary depending on the industry and business type that the business is associated with, as set out in Section 4(c) below. Additionally, Businesses may purchase custom rankings at the price of $45.00 per month. Rank-X charges Businesses once per month for Premium Membership benefits, which will continue to be accessible by Businesses until and unless this Agreement has been materially breached or terminated with or without cause.</li><li><b>Premium Membership Fee Schedule.</b> Premium Membership pricing is determined by the industry and size of the Business (“Business Class”) purchasing the Premium Membership. For example, a large, national, and well known company or brand will pay a higher monthly Premium Membership fee than a small “mom and pop” café or retail shop. A Business that fits within more than one Business Class will pay the higher Premium Membership fee. Thus, for example, if a Business fits within the “Small Business Enterprise” Business Class as well as the “Restaurants and Bars” Business Class, the Business will pay the “Restaurants and Bars” Business Class rate because that rate is higher than the “Small Business Enterprise” Business Class.<ol type=\"i\"><li><b>The Premium Membership Pricing of Each Business Class is as Follows:</b><ol><li>Enterprise (“ENT”) – Large National Brands (e.g., AT&T, Verizon, Starbucks, etc.)</li><li>Large Business (“LBZ”) – Large Companies (e.g., Car Dealerships, etc.)</li><li>Restaurants and Bars (“REB”) – Food and Beverage Industry (e.g., Diners, Bars, Clubs, etc.)</li><li>Medium Size Business (“MBZ”) – Mid-Sized Companies (e.g., Auto Repair Shops, Sporting Supplies, etc.)</li><li>Small Business Establishment (“SBZ”) – Small Businesses (e.g., Hair Salons, Flower Shops, Computer Repair Shops, Crossfit Gyms, etc.)</li><li>Personal Business/Sole Proprietorship (“PER”) – (e.g., Personal Trainers, Yoga Instructors, Music Teachers, Mobile Auto-Repair, etc.)</li></ol></li><li><b>Which Business Class a Business falls into is determined with the sole and absolute discretion of Rank-X. The Business Class that a Business falls into can be changed at any time if it is determined by Rank-X that the Business has changed in such a way that warrants a change in Business Class.</b></li></ol></li></ol></li></ol><li><b>Communications</b> By becoming a Premium Member, you agree to receive communications from us, including via e-mail, text message, calls, and push notifications. You agree that texts, calls or prerecorded messages may be generated by automatic telephone dialing systems. Communications from Rank-X, its affiliated companies and/or Drivers, may include but are not limited to: operational communications concerning your Premium Member account or use of the Rank-X Platform or Services, updates concerning new and existing features on the Rank-X Platform, communications concerning promotions run by us or our third-party partners, and news concerning Rank-X and industry developments. Standard text messaging charges applied by your cell phone carrier will apply to text messages we send.<br>IF YOU WISH TO OPT OUT OF PROMOTIONAL EMAILS, YOU CAN UNSUBSCRIBE FROM OUR PROMOTIONAL EMAIL LIST BY FOLLOWING THE UNSUBSCRIBE OPTIONS IN THE PROMOTIONAL EMAIL ITSELF. YOU ACKNOWLEDGE THAT YOU ARE NOT REQUIRED TO CONSENT TO RECEIVE PROMOTIONAL TEXTS OR CALLS AS A CONDITION OF USING THE PLATFORM OR THE SERVICES. IF YOU WISH TO OPT OUT OF ALL TEXTS OR CALLS FROM (INCLUDING OPERATIONAL OR TRANSACTIONAL TEXTS OR CALLS), YOU CAN NOTIFY US VIA EMAIL, HOWEVER YOU ACKNOWLEDGE THAT OPTING OUT OF RECEIVING ALL TEXTS MAY IMPACT YOUR USE OF THE Rank-X PLATFORM OR THE SERVICES.</li><li><b>Your Information</b> Your Information is any information you provide, publish or post to or through the Rank-X Platform (including any profile information you provide) or send to other Users or Premium Members (including via in-application feedback, any email feature, or through any -related Facebook, Twitter or other social media posting) (your “Information”). You consent to us using your Information to create a Premium Member account that will allow you to use the Platform and participate in the Services. Our collection and use of personal information in connection with the Rank-X Platform and Services is as provided in Rank-X’s Privacy Policy located at www.Rank-X.com/privacy. You are solely responsible for your Information and your interactions with other members of the public, and we act only as a passive conduit for your online posting of your Information. You agree to provide and maintain accurate, current and complete information and that we and other members of the public may rely on your Information as accurate, current and complete. To enable Rank-X to use your Information, you grant to us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, transferable, sub-licensable (through multiple tiers) right and license to exercise the copyright, publicity, and database rights you have in your Information, and to use, copy, perform, display and distribute such Information to prepare derivative works, or incorporate into other works, such Information, in any media now known or not currently known. Rank-X does not assert any ownership over your Information; rather, as between you and Rank-X, subject to the rights granted to us in this Agreement, you retain full ownership of all of your Information and any intellectual property rights or other proprietary rights associated with your Information.<br>You may be able to create or log-in to your Rank-X Premium Member account through online accounts you may have with third party social networking sites (each such account, an \"SNS Account\"). By connecting to Rank-X through an SNS Account, you understand that Rank-X may access, store, and make available any SNS Account content according to the permission settings of your SNS Account (e.g., friends, mutual friends, contacts or following/followed lists (the “SNS Content”)). You understand that SNS Content may be available on and through the Rank-X Platform to other Users. Unless otherwise specified in this Agreement, all SNS Content, if any, shall be considered to be your Information.</li><li><b>Promotions and Referral Programs</b> Rank-X, at its sole discretion, may make available promotions with different features to any Premium Members or prospective Premium Members. These promotions, unless made to you, shall have no bearing whatsoever on your Agreement or relationship with Rank-X. Rank-X reserves the right to withhold or deduct credits or benefits obtained through a promotion in the event that Rank-X determines or believes that the redemption of the promotion or receipt of the credit or benefit was in error, fraudulent, illegal, or in violation of the applicable promotion terms or this Agreement.</li><li><b>Restricted Activities</b><ol type=\"a\">With respect to your use of the Rank-X Platform and your participation in the Premium Membership, you agree that you will not:<li>impersonate any person, business, or government entity;</li><li>stalk, threaten, or otherwise harass any person or entity, or carry any weapons;</li><li>violate any law, statute, rule, permit, ordinance or regulation;</li><li>interfere with or disrupt the Services or the Rank-X Platform or the servers or networks connected to the Rank-X Platform;</li><li>post Information or interact on the Rank-X Platform or Services in a manner which is false, inaccurate, misleading (directly or by omission or failure to update information), defamatory, libelous, abusive, obscene, profane, offensive, sexually oriented, threatening, harassing, or illegal;</li><li>use the Rank-X Platform in any way that infringes any third party’s rights, including but not limited to: intellectual property rights, copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy;</li><li>post, email or otherwise transmit any malicious code, files or programs designed to interrupt, damage, destroy or limit the functionality of any computer software or hardware or telecommunications equipment or surreptitiously intercept or expropriate any system, data or personal information;</li><li>forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the Rank-X Platform;</li><li>“frame” or “mirror” any part of the Rank-X Platform, without our prior written authorization or use meta tags or code or other devices containing any reference to us in order to direct any person to any other web site for any purpose; or</li><li>modify, adapt, translate, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Rank-X Platform or any software used on or for the Rank-X Platform;</li><li>rent, lease, lend, sell, redistribute, license or sublicense the Rank-X Platform or access to any portion of the Rank-X Platform;</li><li>use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, scrape, “data mine”, or in any way reproduce or circumvent the navigational structure or presentation of the Rank-X Platform or its contents;</li><li>link directly or indirectly to any other web sites;</li><li>transfer or sell your Premium Member account, password and/or identification to any other party</li><li>discriminate against or harass anyone on the basis of race, national origin, religion, gender, gender identity, physical or mental disability, medical condition, marital status, age or sexual orientation, or</li><li>cause any third party to engage in the restricted activities above.</li></ol></li><li><b>Intellectual Property</b> All intellectual property rights in the Rank-X Platform shall be owned by Rank-X absolutely and in their entirety. These rights include and are not limited to database rights, copyright, design rights (whether registered or unregistered), trademarks (whether registered or unregistered) and other similar rights wherever existing in the world together with the right to apply for protection of the same. All other trademarks, logos, service marks, company or product names set forth in the Rank-X Platform are the property of their respective owners. You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information (“Submissions”) provided by you to us are non-confidential and shall become the sole property of Rank-X. Rank-X shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.<br>Rank-X and other Rank-X logos, designs, graphics, icons, scripts and service names are registered trademarks, trademarks or trade dress of Rank-X in the United States and/or other countries (collectively, the “Rank-X Marks”). If you provide Services as a Premium Member, Rank-X grants to you, during the term of this Agreement, and subject to your compliance with the terms and conditions of this Agreement, a limited, revocable, non-exclusive license to display and use the Rank-X Marks solely in connection with providing the Services through the Rank-X Platform (“License”). The License is non-transferable and non-assignable, and you shall not grant to any third party any right, permission, license or sublicense with respect to any of the rights granted hereunder without Rank-X’s prior written permission, which it may withhold in its sole discretion. The Rank-X Marks may not be used in any manner that is likely to cause confusion.<br>You acknowledge that Rank-X is the owner and licensor of the Rank-X Marks, including all goodwill associated therewith, and that your use of the Rank-X Marks will confer no additional interest in or ownership of the Rank-X Marks in you but rather inures to the benefit of Rank-X. You agree to use the Rank-X Marks strictly in accordance with Rank-X’s Terms and Conditions and any other guidelines as may be provided to you and revised from time to time, and to immediately cease any use that Rank-X determines to nonconforming or otherwise unacceptable.<br>You agree that you will not: (1) create any materials that incorporate the Rank-X Marks or any derivatives of the Rank-X Marks other than as expressly approved by Rank-X in writing; (2) use the Rank-X Marks in any way that tends to impair their validity as proprietary trademarks, service marks, trade names or trade dress, or use the Rank-X Marks other than in accordance with the terms, conditions and restrictions herein; (3) take any other action that would jeopardize or impair Rank-X’s rights as owner of the Rank-X Marks or the legality and/or enforceability of the Rank-X Marks, including, without limitation, challenging or opposing Rank-X’s ownership in the Rank-X Marks; (4) apply for trademark registration or renewal of trademark registration of any of the Rank-X Marks, any derivative of the Rank-X Marks, any combination of the Rank-X Marks and any other name, or any trademark, service mark, trade name, symbol or word which is similar to the Rank-X Marks; (5) use the Rank-X Marks on or in connection with any product, service or activity that is in violation of any law, statute, government regulation or standard.<br>Violation of any provision of this License may result in immediate termination of the License, in Rank-X’s sole discretion. If you create any materials bearing the Rank-X Marks (in violation of this Agreement or otherwise), you agree that upon their creation Rank-X exclusively owns all right, title and interest in and to such materials, including without limitation any modifications to the Rank-X Marks or derivative works based on the Rank-X Marks. You further agree to assign any interest or right you may have in such materials to Rank-X, and to provide information and execute any documents as reasonably requested by Rank-X to enable Rank-X to formalize such assignment.<br>Rank-X respects the intellectual property of others, and expects Premium Members to do the same. If you believe, in good faith, that any materials on the Rank-X Platform or Services infringe upon your copyrights, please contact us via email.<br></li><li><b>Disclaimers</b> The following disclaimers are made on behalf of Rank-X, our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, and shareholders.<br>The Rank-X Platform is provided on an “as is” basis and without any warranty or condition, express, implied or statutory. We do not guarantee and do not promise any specific results from use of the Rank-X Platform and/or the Services, including the ability to provide or receive Services at any given location or time. We specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement. Some states do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you.<br>We do not warrant that your use of the Rank-X Platform or Services will be accurate, complete, reliable, current, secure, uninterrupted, always available, or error- free, or will meet your requirements, that any defects in the Rank-X Platform will be corrected, or that the Rank-X Platform is free of viruses or other harmful components. We disclaim liability for, and no warranty is made with respect to, connectivity and availability of the Rank-X Platform or Services.<br>We cannot guarantee that each User of the Rank-X Platform is who he or she claims to be. Please use common sense when using the Rank-X Platform and Services. Please note that there are also risks of dealing with underage persons or people acting under false pretense, and we do not accept responsibility or liability for any content, communication or other use or access of the Rank-X Platform by persons under the age of 18 in violation of this Agreement.<br>Rank-X is not responsible for the conduct, whether online or offline, of any User of the Rank-X Platform or Services. You are solely responsible for your interactions with other Users.<br>Rank-X expressly disclaims any liability arising from the unauthorized use of your Premium Member account. Should you suspect that any unauthorized party may be using your Premium Member account or you suspect any other breach of security, you agree to notify us immediately.<br>Please carefully select the type of information that you post on the Rank-X Platform or through the Services or release to others. We disclaim all liability, regardless of the form of action, for the acts or omissions of other Users (including unauthorized users, or “hackers”).<br>Opinions, advice, statements, offers, or other information or content concerning Rank-X or made available through the Rank-X Platform, but not directly by us, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. Under no circumstances will we be responsible for any loss or damage resulting from your reliance on information or other content posted by third parties, whether on the Rank-X Platform or otherwise. We reserve the right, but we have no obligation, to monitor the materials posted on the Rank-X Platform and remove any such material that in our sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, illegal, or that might violate the rights, harm, or threaten the safety of Users or others.<br>This paragraph applies to any version of the Rank-X Platform that you acquire from the Apple App Store. This Agreement is entered into between you and Rank-X. Apple, Inc. (“Apple”) is not a party to this Agreement and shall have no obligations with respect to the Rank-X Platform. Rank-X, not Apple, is solely responsible for the Rank-X Platform and the content thereof as set forth hereunder. However, Apple and Apple’s subsidiaries may be third party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple shall have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third party beneficiary thereof. This Agreement incorporates by reference Apple’s Licensed Application End User License Agreement, for purposes of which, you are “the end-user.” In the event of a conflict in the terms of the Licensed Application End User License Agreement and this Agreement, the terms of this Agreement shall control.</li><li><b>Indemnity</b> You will defend, indemnify, and hold Rank-X including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders harmless from any claims, actions, suits, losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of your use of the Rank-X Platform and participation in the Services, including: (1) your breach of this Agreement or the documents it incorporates by reference; (2) your violation of any law or the rights of a third party, including, without limitation, Drivers, Riders, other motorists, and pedestrians, as a result of your own interaction with such third party; (3) any allegation that any materials that you submit to us or transmit through the Rank-X Platform or to us infringe or otherwise violate the copyright, trademark, trade secret or other intellectual property or other rights of any third party; (4) your ownership, use or operation of a motor vehicle or passenger vehicle, including your provision of Services as a Driver; and/or (5) any other activities in connection with the Services. This indemnity shall be applicable without regard to the negligence of any party, including any indemnified person.</li><li><b>Limitation of Liability</b> IN NO EVENT WILL RANK-X, INCLUDING OUR AFFILIATES, SUBSIDIARIES, PARENTS, SUCCESSORS AND ASSIGNS, AND EACH OF OUR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS (COLLECTIVELY “RANK-X” FOR PURPOSES OF THIS SECTION), BE LIABLE TO YOU FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR DELETION, CORRUPTION, LOSS OF DATA, LOSS OF PROGRAMS, FAILURE TO STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED OR TRANSMITTED BY THE RANK-X PLATFORM, SERVICE INTERRUPTIONS, OR FOR THE COST OF PROCUREMENT OF SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION WITH THE RANK-X PLATFORM, THE SERVICES, OR THIS AGREEMENT, HOWEVER ARISING INCLUDING NEGLIGENCE, EVEN IF WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE RANK-X PLATFORM MAY BE USED BY YOU TO REQUEST AND SCHEDULE TRANSPORTATION, GOODS, OR OTHER SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT RANK-X HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY TRANSPORTATION, GOODS OR OTHER SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN Their TERMS. CERTAIN JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</li><li><b>Term and Termination</b> This Agreement is effective upon your creation of a Premium Member account. This Agreement may be terminated: a) by Premium Member, without cause, upon seven (7) days’ prior written notice to Rank-X; or b) by either Party immediately, without notice, upon the other Party’s material breach of this Agreement, including but not limited to any breach of Section 8 or breach of Section 9 of this Agreement. In addition, Rank-X may terminate this Agreement or deactivate your User account immediately in the event: (1) you no longer qualify to provide Services or to operate the approved vehicle under applicable law, rule, permit, ordinance or regulation; (2) you fall below Rank-X’s star rating or cancellation threshold; (3) Rank-X has the good faith belief that such action is necessary to protect the safety of the Rank-X community or third parties, provided that in the event of a deactivation pursuant to (1)-(3) above, you will be given notice of the potential or actual deactivation and an opportunity to attempt to cure the issue to Rank-X’s reasonable satisfaction prior to Rank-X permanently terminating the Agreement. For all other breaches of this Agreement, you will be provided notice and an opportunity to cure the breach. If the breach is cured in a timely manner and to Rank-X’s satisfaction, this Agreement will not be permanently terminated. Sections 2, 4, 6, 9 (with respect to the license), 10-12, 14-16 shall survive any termination or expiration of this Agreement.</li><li><b>Confidentiality</b> You agree not to use any technical, financial, strategic and other proprietary and confidential information relating to Rank-X’s business, operations and properties, including Premium Member information (“Confidential Information”) disclosed to you by Rank-X for your own use or for any purpose other than as contemplated herein. You shall not disclose or permit disclosure of any Confidential Information to third parties. You agree to take all reasonable measures to protect the secrecy of and avoid disclosure or use of Confidential Information of Rank-X in order to prevent it from falling into the public domain. Notwithstanding the above, you shall not have liability to Rank-X with regard to any Confidential Information which you can prove: was in the public domain at the time it was disclosed by Rank-X or has entered the public domain through no fault of yours; was known to you, without restriction, at the time of disclosure, as demonstrated by files in existence at the time of disclosure; is disclosed with the prior written approval of Rank-X; becomes known to you, without restriction, from a source other than Rank-X without breach of this Agreement by you and otherwise not in violation of Rank-X’s rights; or is disclosed pursuant to the order or requirement of a court, administrative agency, or other governmental body; provided, however, that You shall provide prompt notice of such court order or requirement to Rank-X to enable Rank-X to seek a protective order or otherwise prevent or restrict such disclosure.</li><li><b>General</b> Except as provided in Section 16, this Agreement shall be governed by the laws of the State of California without regard to choice of law principles. This choice of law provision is only intended to specify the use of California law to interpret this Agreement and is not intended to create any other substantive right to non-Californians to assert claims under California law whether by statute, common law, or otherwise. If any provision of this Agreement is or becomes invalid or non-binding, the parties shall remain bound by all other provisions hereof. In that event, the parties shall replace the invalid or non- binding provision with provisions that are valid and binding and that have, to the greatest extent possible, a similar effect as the invalid or non-binding provision, given the contents and purpose of this Agreement. You agree that this Agreement and all incorporated agreements may be automatically assigned by Rank-X, in our sole discretion by providing notice to you. Except as explicitly stated otherwise, any notices to Rank-X shall be given by certified mail, postage prepaid and return receipt requested to Rank-X. Any notices to you shall be provided to you through the Rank-X Platform or given to you via the email address or physical you provide to Rank-X during the registration process. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. A party’s failure to act with respect to a breach by the other party does not constitute a waiver of the party’s right to act with respect to subsequent or similar breaches. This Agreement sets forth the entire understanding and agreement between you and Rank-X with respect to the subject matter hereof and supersedes all previous understandings and agreements between the parties, whether oral or written.</li><li><b>Dispute Resolution and Arbitration Agreement</b><ol type=\"a\"><li><b>Agreement to Binding Arbitration Between You and Rank-X.</b> YOU AND RANK-X MUTUALLY AGREE TO WAIVE OUR RESPECTIVE RIGHTS TO RESOLUTION OF DISPUTES IN A COURT OF LAW BY A JUDGE OR JURY AND AGREE TO RESOLVE ANY DISPUTE BY ARBITRATION, as set forth below. This agreement to arbitrate (“Arbitration Agreement”) is governed by the Federal Arbitration Act and survives after the Agreement terminates or your relationship with Rank-X ends. ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED. Except as expressly provided below, this Arbitration Agreement applies to all Claims (defined below) between you and Rank-X, including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders.<br>Except as expressly provided below, ALL DISPUTES AND CLAIMS BETWEEN US (EACH A “CLAIM” AND COLLECTIVELY, “CLAIMS”) SHALL BE EXCLUSIVELY RESOLVED BY BINDING ARBITRATION SOLELY BETWEEN YOU AND RANK-X. These Claims include, but are not limited to, any dispute, claim or controversy, whether based on past, present, or future events, arising out of or relating to: this Agreement and prior versions thereof (including the breach, termination, enforcement, interpretation or validity thereof), the Rank-X Platform, the Services, any other goods or services made available through the Rank-X Platform, your relationship with Rank-X, the threatened or actual suspension, deactivation or termination of your Premium Member Account or this Agreement, payments made by you or any payments made or allegedly owed to you, any promotions or offers made by Rank-X, any city, county, state or federal wage-hour law, trade secrets, unfair competition, compensation, breaks and rest periods, expense reimbursement, wrongful termination, discrimination, harassment, retaliation, fraud, defamation, emotional distress, breach of any express or implied contract or covenant, claims arising under federal or state consumer protection laws; claims arising under antitrust laws, claims arising under the Telephone Consumer Protection Act and Fair Credit Reporting Act; and claims arising under the Uniform Trade Secrets Act, Civil Rights Act of 1964, Americans With Disabilities Act, Age Discrimination in Employment Act, Older Workers Benefit Protection Act, Family Medical Leave Act, Fair Labor Standards Act, Employee Retirement Income Security Act (except for individual claims for employee benefits under any benefit plan sponsored by Rank-X and covered by the Employee Retirement Income Security Act of 1974 or funded by insurance), and state statutes, if any, addressing the same or similar subject matters, and all other federal and state statutory and common law claims. All disputes concerning the arbitrability of a Claim (including disputes about the scope, applicability, enforceability, revocability or validity of the Arbitration Agreement) shall be decided by the arbitrator, except as expressly provided below.<br>BY AGREEING TO ARBITRATION, YOU UNDERSTAND THAT YOU AND RANK-X ARE WAIVING THE RIGHT TO SUE IN COURT OR HAVE A JURY TRIAL FOR ALL CLAIMS, EXCEPT AS EXPRESSLY OTHERWISE PROVIDED IN THIS ARBITRATION AGREEMENT. This Arbitration Agreement is intended to require arbitration of every claim or dispute that can lawfully be arbitrated, except for those claims and disputes which by the terms of this Arbitration Agreement are expressly excluded from the requirement to arbitrate.</li><li><b>Prohibition of Class Actions and Non-Individualized Relief.</b> YOU UNDERSTAND AND AGREE THAT YOU AND RANK-X MAY EACH BRING CLAIMS IN ARBITRATION AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT ON A CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE BASIS (“CLASS ACTION WAIVER”). YOU UNDERSTAND AND AGREE THAT YOU AND RANK-X BOTH ARE WAIVING THE RIGHT TO PURSUE OR HAVE A DISPUTE RESOLVED AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE OR REPRESENTATIVE PROCEEDING. NOTWITHSTANDING THE FOREGOING, THIS SUBSECTION (B) SHALL NOT APPLY TO REPRESENTATIVE PRIVATE ATTORNEYS GENERAL ACT CLAIMS BROUGHT AGAINST RANK-X, WHICH ARE ADDRESSED SEPARATELY IN SECTION 17(C).<br>The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on any basis other than an individual basis. The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on a class, collective, or representative basis.<br>Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the scope, applicability, enforceability, revocability or validity of the Class Action Waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. In any case in which: (1) the dispute is filed as a class, collective, or representative action and (2) there is a final judicial determination that the Class Action Waiver is unenforceable as to any Claims, the class, collective, and/or representative action on such Claims must be litigated in a civil court of competent jurisdiction, but the Class Action Waiver shall be enforced in arbitration on an individual basis as to all other Claims to the fullest extent possible.</li><li><b>Representative PAGA Waiver.</b> Notwithstanding any other provision of this Agreement or the Arbitration Agreement, to the fullest extent permitted by law: (1) you and Rank-X agree not to bring a representative action on behalf of others under the Private Attorneys General Act of 2004 (“PAGA”), California Labor Code § 2698 et seq., in any court or in arbitration, and (2) for any claim brought on a private attorney general basis, including under the California PAGA, both you and Rank-X agree that any such dispute shall be resolved in arbitration on an individual basis only (i.e., to resolve whether you have personally been aggrieved or subject to any violations of law), and that such an action may not be used to resolve the claims or rights of other individuals in a single or collective proceeding (i.e., to resolve whether other individuals have been aggrieved or subject to any violations of law) (collectively, “representative PAGA Waiver”). Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the scope, applicability, enforceability, revocability or validity of this representative PAGA Waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. If any provision of this representative PAGA Waiver is found to be unenforceable or unlawful for any reason: (i) the unenforceable provision shall be severed from this Agreement; (ii) severance of the unenforceable provision shall have no impact whatsoever on the Arbitration Agreement or the requirement that any remaining Claims be arbitrated on an individual basis pursuant to the Arbitration Agreement; and (iii) any such representative PAGA or other representative private attorneys general act claims must be litigated in a civil court of competent jurisdiction and not in arbitration. To the extent that there are any Claims to be litigated in a civil court of competent jurisdiction because a civil court of competent jurisdiction determines that the representative PAGA Waiver is unenforceable with respect to those Claims, the Parties agree that litigation of those Claims shall be stayed pending the outcome of any individual Claims in arbitration.</li><li><b>Rules Governing the Arbitration.</b> Any arbitration conducted pursuant to this Arbitration Agreement shall be administered by the American Arbitration Association (“AAA”) pursuant to its Consumer Arbitration Rules that are in effect at the time the arbitration is initiated, as modified by the terms set forth in this Agreement. Copies of these rules can be obtained at the AAA’s website (www.adr.org) (the “AAA Rules”) or by calling the AAA at 1-800-778-7879. Notwithstanding the foregoing, if requested by you and if proper based on the facts and circumstances of the Claims presented, the arbitrator shall have the discretion to select a different set of AAA Rules, but in no event shall the arbitrator consolidate more than one person’s Claims, or otherwise preside over any form of representative, collective, or class proceeding.<br>As part of the arbitration, both you and Rank-X will have the opportunity for reasonable discovery of non-privileged information that is relevant to the Claim. The arbitrator may award any individualized remedies that would be available in court. The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party\'s individual claims. The arbitrator will provide a reasoned written statement of the arbitrator’s decision which shall explain the award given and the findings and conclusions on which the decision is based.<br>The arbitrator will decide the substance of all claims in accordance with applicable law, and will honor all claims of privilege recognized by law. The arbitrator shall not be bound by rulings in prior arbitrations involving different Riders or Drivers, but is bound by rulings in prior arbitrations involving the same Rider or Driver to the extent required by applicable law. The arbitrator’s award shall be final and binding and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof, provided that any award may be challenged in a court of competent jurisdiction.</li><li><b>Arbitration Fees and Awards.</b> The payment of filing and arbitration fees will be governed by the relevant AAA Rules subject to the following modifications:<ol type=\"i\"><li>If you initiate arbitration under this Arbitration Agreement after participating in the optional Negotiation process described in subsection (k) below and are otherwise required to pay a filing fee under the relevant AAA Rules, Rank-X agrees that, unless your claim is for $5,000 or more, your share of the filing and arbitration fees is limited to $50, and that, after you submit proof of payment of the filing fee to Rank-X, Rank-X will promptly reimburse you for all but $50 of the filing fee. If, however, the arbitrator finds that either the substance of your claim or the relief sought in the claim is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all such fees will be governed by the AAA Rules.</li><li>Rank-X initiates arbitration under this Arbitration Agreement, Rank-X will pay all AAA filing and arbitration fees.</li><li>With respect to any Claims brought by Rank-X against a Premium Member, or for Claims brought by a Premium Member against Rank-X that: (A) arise out of, or relate to, Rank-X’s actual deactivation of a Premium Member’s account or a threat by Rank-X to deactivate a Premium Member’s account; or (C) arise out of, or relate to, Rank-X’s actual termination of a Premium Member’s Agreement with Rank-X under the termination provisions of this Agreement, or a threat by Rank-X to terminate a Premium Member’s Agreement, Rank-X shall pay all costs unique to arbitration (as compared to the costs of adjudicating the same claims before a court), including the regular and customary arbitration fees and expenses (to the extent not paid by Rank-X pursuant to the fee provisions above). However, if you are the party initiating the Premium Member Claim, you shall be responsible for contributing up to an amount equal to the filing fee that would be paid to initiate the claim in the court of general jurisdiction in the state in which you provide Services to Businesses, unless a lower fee amount would be owed by you pursuant to the AAA Rules, applicable law, or subsection (e)(1) above. Any dispute as to whether a cost is unique to arbitration shall be resolved by the arbitrator.</li><li>Except as provided in Federal Rule of Civil Procedure 68 or any state equivalents, each party shall pay its own attorneys’ fees and pay any costs that are not unique to the arbitration (i.e., costs that each party would incur if the claim(s) were litigated in a court such as costs to subpoena witnesses and/or documents, take depositions and purchase deposition transcripts, copy documents, etc.).</li><li>At the end of any arbitration, the arbitrator may award reasonable fees and costs or any portion thereof to you if you prevail, to the extent authorized by applicable law.<br>vi. If the arbitrator issues you an award that is greater than the value of Rank-X’s last written settlement offer made after you participated in good faith in the optional Negotiation process described in subsection (j) below, then Rank-X will pay you the amount of the award or U.S. $1,000, whichever is greater.</li></ol></li><li><b>Location and Manner of Arbitration.</b> Unless you and Rank-X agree otherwise, any arbitration hearings between Rank-X and a Premium Member will take place in the county of Rank-X’s Principal Office, and any arbitration hearings between Rank-X and a Premium Member will take place in the county in which Rank-X maintains its Principal Office. If AAA arbitration is unavailable in such county, the arbitration hearings will take place in the nearest available location for a AAA arbitration. If your Claim is for $10,000 or less, Rank-X agrees that you may choose whether the arbitration will be conducted solely on the basis of documents submitted to the arbitrator, through a telephonic hearing, or by an in-person hearing as determined by the AAA Rules. If your Claim exceeds $10,000, the right to a hearing will be determined by the AAA Rules.</li><li><b>Exceptions to Arbitration.</b> This Arbitration Agreement shall not require arbitration of the following types of claims: (1) small claims actions brought on an individual basis that are within the scope of such small claims court’s jurisdiction; (2) a representative action brought on behalf of others under PAGA or other private attorneys general acts, to the extent the representative PAGA Waiver in Section 17(c) of such action is deemed unenforceable by a court of competent jurisdiction; (3) claims for workers’ compensation, state disability insurance and unemployment insurance benefits; and (4) claims that may not be subject to arbitration as a matter of law.<br>Nothing in this Arbitration Agreement prevents you from making a report to or filing a claim or charge with the Equal Employment Opportunity Commission, U.S. Department of Labor, Securities Exchange Commission, National Labor Relations Board, or Office of Federal Contract Compliance Programs, or similar local, state or federal agency, and nothing in this Arbitration Agreement shall be deemed to preclude or excuse a party from bringing an administrative claim before any agency in order to fulfill the party\'s obligation to exhaust administrative remedies before making a claim in arbitration, however you knowingly and voluntarily waive the right to seek or recover money damages of any type pursuant to any administrative complaint and instead may seek such relief only through arbitration under this Agreement. Nothing in this Agreement or Arbitration Agreement prevents your participation in an investigation by a government agency of any report, claim or charge otherwise covered by this Arbitration Provision.</li><li><b>Severability.</b> In addition to the severability provisions in subsections (c) above, in the event that any portion of this Arbitration Agreement is deemed illegal or unenforceable, such provision shall be severed and the remainder of the Arbitration Agreement shall be given full force and effect.</li></ol></li><div class=\"innerText\">Rank-X welcomes your questions or comments regarding this Statement of Privacy. If you believe that Rank-X has not adhered to this Statement, please contact Rank-X at:<br></div><br><div class=\"innerText\">Rank-X, LLC</div><div class=\"innerText\">1650 Adams Av.</div><div class=\"innerText\">San Diego, California, 92116</div><br><div class=\"innerText\">Email Address:</div><div class=\"innerText\">contact@rank-x.com</div><br><div class=\"innerText\">Telephone number:</div><div class=\"innerText\"><br>Effective as of May 31, 2017</div><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><br></div></div>");
$templateCache.put("app/layout/Partials2/feedback.html","<div class=\"row\"><div class=\"col-lg-6\"><content-block type=\"rxfeedback\" dynamic=\"false\"></content-block></div><div class=\"col-lg-6\"><content-block type=\"rxsuggestion\" dynamic=\"false\"></content-block></div></div>");
$templateCache.put("app/layout/Partials2/feeds.html","<userfeed-block show-all=\"true\" class=\"show-all\"></userfeed-block>");
$templateCache.put("app/layout/Partials2/mybusiness.html","<div ui-view=\"navbar\"></div><div id=\"veil\" ng-hide=\"vm.dataReady\"></div><div id=\"feedLoading\" ng-hide=\"vm.dataReady\"><div style=\"text-align: center\" ng-if=\"!vm.dataReady\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">loading your business accounts...</p></div></div><div id=\"feedLoading\" ng-show=\"vm.purchase_progress\"><div style=\"text-align: center\" ng-if=\"vm.purchase_progress\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">Processing your payment information...</p></div></div><div id=\"feedLoading\" ng-show=\"vm.edit_progress\"><div style=\"text-align: center\" ng-if=\"vm.edit_progress\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">Updating your account...</p></div></div><div id=\"feedLoading\" ng-show=\"vm.cancel_progress\"><div style=\"text-align: center\" ng-if=\"vm.cancel_progress\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">Cancelling your subscrpitions...</p></div></div><div ng-if=\"vm.dataReady\" ng-hide=\"vm.processInProgress\"><div><h3 ng-if=\"vm.overview\">My Business</h3><div ng-if=\"!vm.noAns&&vm.overview\" id=\"mybiztable-container\"><table class=\"table\" id=\"mybiztable\"><tbody><thead style=\"border-style:none;\"><tr><th class=\"text-center\">Name</th><th text-align=\"center\" class=\"text-center\">Premium Membership</th><th text-align=\"center\" class=\"text-center\">Custom Ranks</th><th></th><th></th></tr></thead><tr ng-repeat=\"x in vm.mybizs\" style=\"cursor:pointer;\"><td>{{x.name}}</td><td align=\"center\" ng-attr-style=\"{{x.style}}\">{{x.status}}</td><td align=\"center\" ng-attr-style=\"{{x.style2}}\">{{x.status2}}</td><td align=\"center\"><a href=\"\" ng-click=\"vm.gotomanage(x)\">{{(x.isPremium || x.hasRanks) ? \'Manage\':\'Purchase Features\'}}</a></td><td align=\"center\"><a href=\"\" ng-click=\"vm.gotoanswer(x)\">Go to Listing</a></td></tr></tbody></table><div ng-if=\"vm.mybizs.length == 0\"><br><p>You have not bound your account to any business. If you are freelancer own or represent a business in this city, create a listing and bind your account so you can manage its account.</p></div></div><div ng-if=\"vm.manageview\"><h3>{{vm.business.name}}</h3><h4 align=\"center\" style=\"background-color:#b3b3b3;padding:5px\">Contact Info</h4><div><p class=\"text-left\" style=\"color:{{vm.fnok?\'black\':\'red\'}}\"><strong>First Name:</strong>&nbsp{{vm.business.firstname}}</p><p class=\"text-left\" style=\"color:{{vm.lnok?\'black\':\'red\'}}\"><strong>Last Name:</strong>&nbsp{{vm.business.lastname}}</p><p class=\"text-left\" style=\"color:{{vm.emok?\'black\':\'red\'}}\"><strong>Email:</strong>&nbsp{{vm.business.email}}</p></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.editContact()\" class=\"btn btn-primary\">Edit</button></div><h4 align=\"center\" style=\"background-color:#b3b3b3;padding:5px\">Business Info</h4><div><p class=\"text-left\"><strong>Business Name:</strong>&nbsp{{vm.business.name}}</p><p class=\"text-left\"><strong>Address:</strong>&nbsp{{vm.business.location}}</p><p class=\"text-left\"><strong>Phone:</strong>&nbsp{{vm.business.phone}}</p><p class=\"text-left\"><strong>Membership:</strong>&nbsp{{vm.business.status}}</p></div><div class=\"text-right\"><a href=\"\" ng-click=\"vm.unbind(vm.business.id)\">Unbind this business from my account</a></div><h4 align=\"center\" style=\"background-color:#b3b3b3;padding:5px\" ng-if=\"vm.business.isPremium||vm.business.hasRanks\">Subscriptions</h4><div class=\"text-right\"><div ng-if=\"vm.business.isPremium||vm.business.hasRanks\" style=\"padding-bottom:5px\"><button type=\"button\" class=\"btn btn-primary\" ng-class=\"vm.showPaymentInfo?\'active\':\'\'\" ng-click=\"vm.showPaymentInfoEditClicked()\">{{vm.showPaymentInfo?\'Hide Payment Method\':\'Show Payment Method\'}}</button> <button type=\"button\" class=\"btn btn-primary\" ng-class=\"vm.showInvoices?\'active\':\'\'\" ng-click=\"vm.showInvoicsClicked()\">{{vm.showInvoices?\'Hide Invoices\':\'Show Invoices\'}}</button></div></div><div ng-if=\"vm.showPaymentInfo && !vm.business.loadingInvoices\"><h3>Payment Information</h3><hr><div class=\"text-center\"><span>Now you are billing with {{vm.business.customer.sources.data[0].brand}} Card <code> **** - **** - **** - {{vm.business.customer.sources.data[0].last4}} </code></span><br><button id=\"updateCardButton\" name=\"updateCardButton\" class=\"btn btn-primary\" onclick=\"updateCardNumberButton()\" style=\"margin-top:10px\">Enter a New Card</button></div><form action=\"https://server.rank-x.com/StripeServer/changeSource\" method=\"POST\" data-remote=\"true\" ng-submit=\"changeCardNumber()\" id=\"updateCardNumberForm\"><div style=\"display: none\"><script src=\"https://checkout.stripe.com/checkout.js\" class=\"stripe-button\" data-key=\"pk_test_q9kbYzvzE6uMwZH9ZUjfK6Xq\" data-email=\"{{vm.business.email}}\" data-label=\"Update Card Details\" data-name=\"Rank-X\" data-description=\"Update Card Details\" data-panel-label=\"Subscribe\" data-image=\"/assets/images/rankx-logo-small-2-square.png\" data-locale=\"auto\" data-zip-code=\"true\">\n            </script></div><input type=\"hidden\" id=\"userId\" name=\"userId\" value=\"{{vm.business.user}}\"> <input type=\"hidden\" id=\"useraccntId\" name=\"useraccntId\" value=\"{{vm.business.accountid}}\"> <input type=\"hidden\" id=\"stripeId\" name=\"stripeId\" value=\"{{vm.business.stripeid}}\"></form></div><div ng-if=\"vm.showInvoices && !vm.business.loadingInvoices\"><h3>Invoices</h3><hr><table class=\"table\"><thead style=\"border-style:none;\"><tr><th style=\"width:25%\" text-align=\"center\">Date</th><th style=\"width:15%\" text-align=\"center\">SubTotal</th><th style=\"width:15%\" text-align=\"center\">Discount</th><th style=\"width:15%\" text-align=\"center\">Total</th><th style=\"width:20%\" class=\"text-center\">Status</th><th style=\"width:20%\"></th></tr></thead><tbody><tr ng-repeat=\"invoice in vm.business.invoices\"><td>{{invoice.date}}</td><td>{{invoice.subtotal/100 + \' \' + invoice.currency.toUpperCase()}}</td><td>{{invoice.discountMsg}}</td><td>{{invoice.total/100 + \' \' + invoice.currency.toUpperCase()}}</td><td>{{invoice.paid ? \'Paid\' : \'\'}}</td><td></td></tr></tbody></table><button class=\"btn btn-primary pull-right\" ng-click=\"vm.hideInvoices()\">Hide Invoices</button></div><div ng-if=\"vm.business.isPremium||vm.business.hasRanks\"><h3>Subscriptions</h3><hr><table class=\"table\"><tbody><thead style=\"border-style:none;\"><tr><th style=\"width:45%\" text-align=\"center\">Subscription</th><th style=\"width:15%\" text-align=\"center\">Monthly Cost</th><th style=\"width:20%\"></th><th style=\"width:20%\"></th></tr></thead><tr ng-if=\"vm.business.isPremium\" style=\"cursor:pointer;\"><td style=\"width:45%\">Premium Membership</td><td style=\"width:15%\">${{vm.business.price}}</td><td style=\"width:20%\"></td><td style=\"width:20%\"><button class=\"btn btn-danger\" style=\"width:100%\" ng-click=\"vm.cancelPremium()\">Cancel</button></td></tr><tr ng-if=\"vm.business.hasRanks\" style=\"cursor:pointer;\"><td style=\"width:45%\">{{vm.business.ranksQty}} Custom Ranks</td><td style=\"width:15%\">${{vm.business.ranksQty*vm.CUSTOM_RANK_PRICE}}</td><td style=\"width:20%\"><button class=\"btn btn-primary\" style=\"width:100%\" ng-click=\"vm.editRanks()\">Edit</button></td><td style=\"width:20%\"><button class=\"btn btn-danger\" style=\"width:100%\" ng-click=\"vm.cancelAllRanks()\">Cancel</button></td></tr><tr ng-if=\"vm.business.istrial\" style=\"cursor:pointer;\"><td style=\"width:45%\">Free Trial</td><td style=\"width:15%\">- ${{vm.business.ranksQty*vm.CUSTOM_RANK_PRICE + vm.business.price}}</td><td style=\"width:20%\"></td><td style=\"width:20%\"></td></tr><tr style=\"cursor:pointer;\"><td style=\"width:45%\">Total</td><td style=\"width:15%\" ng-if=\"!vm.business.istrial\">${{vm.business.ranksQty*vm.CUSTOM_RANK_PRICE + vm.business.price}}</td><td style=\"width:15%\" ng-if=\"vm.business.istrial\">$0</td><td style=\"width:20%\"></td><td style=\"width:20%\"><button class=\"btn btn-danger\" style=\"width:100%\" ng-click=\"vm.cancelAll()\" ng-if=\"vm.business.hasranks&&vm.business.ispremium\">Cancel All</button></td></tr></tbody></table><div ng-if=\"vm.business.lastPaymentAmount > 0\">Thank you for your last payment of <strong>${{vm.business.lastPaymentAmount}}</strong> on <strong>{{vm.business.lastPaymentMade}}</strong>.<br></div><div ng-if=\"vm.business.nextPaymentAmount > 0\">Your next payment will be for <strong>${{vm.business.nextPaymentAmount}}</strong> and it will be billed on <strong>{{vm.business.nextPaymentDue}}</strong><br></div><div ng-if=\"vm.business.istrial\">You have <strong>{{vm.business.daysLeft}} days</strong> left on your free trial. It will expire on <strong>{{vm.business.discountEndDate}}</strong>.<br></div><br>For any questions about your billing, please write us at <strong>contact@rank-x.com</strong></div><div class=\"well\" ng-if=\"!vm.business.isPremium\"><h2 class=\"text-center\">Upgrade to Premium</h2><h3 class=\"text-center\">${{vm.business.price}} / month</h3><i class=\"fa fa-check\"></i><strong>&nbspGet more exposure</strong> within San Diego<br><i class=\"fa fa-check\"></i>&nbspLet people know all your <strong>specials, promotions and special events</strong><br><i class=\"fa fa-check\"></i>&nbspOffer <strong>coupons and promotions</strong>real time.<br><i class=\"fa fa-check\"></i><strong>&nbspDrive more traffic</strong> to your business profile<br><i class=\"fa fa-check\"></i><strong>&nbspGet&nbsp</strong>more customers<br><div class=\"text-center\"><a href=\"\" ng-click=\"vm.showLearnMore(1)\">Learn More</a></div><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.getPremium\" value=\"\">Get Premium Membership</label></div><div class=\"well\" ng-if=\"!vm.business.hasRanks\"><h2 class=\"text-center\">Purchase Rankings</h2><h3 class=\"text-center\">${{vm.CUSTOM_RANK_PRICE}} / month each</h3><i class=\"fa fa-check\"></i>&nbspCreate <strong>unique rankings and lists</strong> for your own products and services<br><i class=\"fa fa-check\"></i>&nbspUse for: <strong>menu items, recent projects, top-selling products, team members</strong> and more.<br><i class=\"fa fa-check\"></i>&nbsp<strong>Put the spotlight</strong> on any area of your business<br><i class=\"fa fa-check\"></i><strong>&nbspEngage the audience</strong> with the best of what you offer<br><i class=\"fa fa-check\"></i><strong>&nbspGet feedback</strong> from your customers on your specific products or services<br><div class=\"text-center\"><a href=\"\" ng-click=\"vm.showLearnMore(2)\">Learn More</a></div><div class=\"row\"><div class=\"col-xs-12 col-sm-9 col-md-10 col-lg-10\"><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.getRanks\" value=\"\">Purchase Ranks</label></div><div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-2\"><div class=\"input-group\" ng-if=\"vm.getRanks\"><span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.minusQty()\"><i class=\"fa fa-minus\"></i></button></span> <input style=\"text-align:center\" class=\"form-control\" ng-model=\"vm.ranksQty\" type=\"text\" placeholder=\"vm.ranksQty\"> <span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.plusQty()\"><i class=\"fa fa-plus\"></i></button></span></div></div></div></div><div class=\"row\" ng-if=\"vm.sell\"><br><div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\"><label>Promo Code:</label></div><div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\"><div class=\"input-group\"><input class=\"form-control\" style=\"color:red;\" ng-model=\"vm.promocode\" type=\"text\" placeholder=\"Enter code...\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" ng-click=\"vm.checkcode()\">Check Code</button></span></div></div></div><div class=\"text-center\" ng-if=\"vm.sell\"><br><p><i>{{vm.codeMsg}}</i></p></div><div class=\"text-center\" ng-if=\"vm.sell\"><br><button class=\"btn btn-success\" ng-click=\"vm.goCheckout()\" ng-class=\"(vm.getPremium || vm.getRanks) ? \'\' : \'disabled\'\">Checkout</button></div></div><div ng-if=\"vm.checkout\"><h3>Checkout</h3><br><p style=\"text-align:center\">You are purchasing the following subscriptions for the business <strong>{{vm.business.name}}</strong>:</p><br><table class=\"table\"><tbody><thead style=\"border-style:none;\"><tr><th class=\"text-center\">Name</th><th class=\"text-center\">Quantity</th><th class=\"text-center\">Total</th><th class=\"text-center\"></th></tr></thead><tr ng-if=\"vm.getPremium\"><td style=\"width:70%\">Premium Membership</td><td style=\"width:15%\" align=\"center\">1</td><td style=\"width:15%\" align=\"center\">${{vm.business.price}}</td></tr><tr ng-if=\"vm.getRanks\"><td style=\"width:70%\">Custom Rankings</td><td style=\"width:15%\" align=\"center\">{{vm.ranksQty}}</td><td style=\"width:15%\" align=\"center\">${{vm.ranksQty*vm.CUSTOM_RANK_PRICE}}</td></tr><tr><td style=\"width:85%\" colspan=\"2\">Total</td><td style=\"width:15%\" align=\"center\">${{vm.total}}</td></tr></tbody></table><p ng-if=\"vm.codeOk\">You have a valid code to try the above subscriptions free for 60 days. You will not be charged until the 60 day trial period expires. Afterwards your card will be charged <strong>${{vm.total}}</strong> monthly. You can log in to cancel or make modifications to your account at any time. If you experience any problems during checkout, please contact us at <strong>contact@rank-x.com</strong></p><p ng-if=\"!vm.codeOk\">Your card will be charged <strong>${{vm.total}}</strong> monthly. You can log in to cancel or make modifications to your account at any time. If you experience any problems during checkout, please contact us at <strong>contact@rank-x.com</strong></p><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.acceptTOS\" value=\"\">I have read and understood the <a ng-click=\"vm.showTOSCustomersDlg()\" target=\"_blank\">Terms of Service</a></label><div class=\"text-center\"><br><button id=\"checkoutButton\" name=\"checkoutButton\" class=\"btn btn-success\" ng-class=\"vm.acceptTOS ? \'\' : \'disabled\'\" onclick=\"clickStripeButton()\" ng-click=\"vm.clickStripeCheckout()\" ng-if=\"!(vm.business.isPremium == true || vm.business.hasRanks == true)\">Pay with Card</button> <button id=\"checkoutButton\" name=\"checkoutButton\" class=\"btn btn-success\" ng-class=\"vm.acceptTOS ? \'\' : \'disabled\'\" ng-click=\"vm.addSubscription()\" ng-if=\"vm.business.isPremium == true || vm.business.hasRanks == true\">Add Subscription</button><br><div ng-show=\"!vm.showCurrentPlan\"><form action=\"https://server.rank-x.com/StripeServer/charge\" method=\"POST\"><div style=\"display:none\"><script src=\"https://checkout.stripe.com/checkout.js\" class=\"stripe-button\" data-key=\"pk_test_q9kbYzvzE6uMwZH9ZUjfK6Xq\" data-email=\"{{vm.business.email}}\" data-label=\"Pay with Card\" data-name=\"Rank-X\" data-description=\"Premium Membership Subscription\" data-panel-label=\"Subscribe\" data-image=\"/assets/images/rankx-logo-small-2-square.png\" data-locale=\"auto\" data-zip-code=\"true\">\n            </script></div><input type=\"hidden\" id=\"userEmail\" name=\"userEmail\" value=\"{{vm.business.email}}\"> <input type=\"hidden\" id=\"userName\" name=\"userName\" value=\"{{vm.business.firstname + \' \' + vm.business.lastname}}\"> <input type=\"hidden\" id=\"bizName\" name=\"bizName\" value=\"{{vm.business.name}}\"> <input type=\"hidden\" id=\"userId\" name=\"userId\" value=\"{{vm.business.user}}\"> <input type=\"hidden\" id=\"useraccntId\" name=\"useraccntId\" value=\"{{vm.business.accountid}}\"> <input type=\"hidden\" id=\"answerId\" name=\"answerId\" value=\"{{vm.business.id}}\"> <input type=\"hidden\" id=\"stripeId\" name=\"stripeId\" value=\"{{vm.business.stripeid}}\"> <input type=\"hidden\" id=\"getPremiumPlan\" name=\"getPremiumPlan\" value=\"{{vm.getPremium}}\"> <input type=\"hidden\" id=\"getCustomRanks\" name=\"getCustomRanks\" value=\"{{vm.getRanks}}\"> <input type=\"hidden\" id=\"ranksQuantity\" name=\"ranksQuantity\" value=\"{{vm.ranksQty}}\"> <input type=\"hidden\" id=\"couponValid\" name=\"couponValid\" value=\"{{vm.codeOk}}\"> <input type=\"hidden\" id=\"couponValid\" name=\"promoCode\" value=\"{{vm.promocode}}\"> <input type=\"hidden\" id=\"bizcat\" name=\"bizcat\" value=\"{{vm.business.bizcat}}\"></form></div></div></div><div class=\"text-left\" role=\"group\"><br><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div><br><br></div></div><script>\n        function eventFire(el, etype){\n          if (el.fireEvent) {\n            el.fireEvent(\'on\' + etype);\n          } else {\n            var evObj = document.createEvent(\'Events\');\n            evObj.initEvent(etype, true, false);\n            el.dispatchEvent(evObj);\n          }\n        }\n        function clickCancelPlanButton() {\n          showLoaderBriefDouble();\n          console.log(\"about to fire click event\");\n          var resultOfEventFire = eventFire(document.getElementById(\'confirmCancelPlan\'), \'click\');\n          console.log(\"done firing click event, resultOfEventFire: \" + resultOfEventFire);\n        }\n        function clickStripeButton() {\n          console.log(\"about to fire click event\");\n          var resultOfEventFire = eventFire(document.getElementsByClassName(\'stripe-button-el\')[0], \'click\');\n\n          console.log(\"done firing click event, resultOfEventFire: \" + resultOfEventFire);\n        }\n\n        function updateCardNumberButton() {\n          console.log(\"about to fire update stripe info event\");\n		  var resultOfEventFire = eventFire($(\'#updateCardNumberForm .stripe-button-el\')[0], \'click\');\n\n          console.log(\"done firing click event, resultOfEventFire: \" + resultOfEventFire);\n        }\n\n\n		// $(\'iframe.stripe_checkout_app\').ready(function(){\n		// 	var stripe_form_interval = setInterval(function(){\n		// 		console.log(\'000000000000000000000000\')\n		// 		if($(\'button[type=\"submit\"]\').length != 0){\n		// 			clearInterval(stripe_form_interval)\n		// 			$(\'button[type=\"submit\"]\').bind(\'cssClassChanged\',function(){\n		// 				alert(\'clearInterval(stripe_form_interval)\')\n						\n		// 			})\n		// 		} \n		// 	})\n		// })\n        </script>");
$templateCache.put("app/layout/Partials2/privacypolicy.html","<style>\n    #ppBody {\n        font-size: 11pt;\n        width: 100%;\n        margin: 0 auto;\n        text-align: justify;\n    }\n    \n    #ppHeader {\n        font-family: verdana;\n        font-size: 21pt;\n        width: 100%;\n        margin: 0 auto;\n    }\n    \n    .ppConsistencies {\n        display: none;\n    }\n</style><div class=\"container\"><br><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><div id=\"ppHeader\"><span><img src=\"/assets/images/logo_sq.png\" style=\"width:80px\"></span> Rank-X Privacy Policy</div><div id=\"ppBody\"><div class=\"ppConsistencies\"><div class=\"col-2\"><div class=\"quick-links text-center\">Information Collection</div></div><div class=\"col-2\"><div class=\"quick-links text-center\">Information Usage</div></div><div class=\"col-2\"><div class=\"quick-links text-center\">Information Protection</div></div><div class=\"col-2\"><div class=\"quick-links text-center\">Cookie Usage</div></div><div class=\"col-2\"><div class=\"quick-links text-center\">3rd Party Disclosure</div></div><div class=\"col-2\"><div class=\"quick-links text-center\">3rd Party Links</div></div><div class=\"col-2\"></div></div><div style=\"clear:both;height:10px;\"></div><div class=\"ppConsistencies\"><div class=\"col-2\"><div class=\"col-12 quick-links2 gen-text-center\">Google AdSense</div></div><div class=\"col-2\"><div class=\"col-12 quick-links2 gen-text-center\">Fair Information Practices<div class=\"col-8 gen-text-left gen-xs-text-center\" style=\"font-size:12px;position:relative;left:20px;\">Fair information<br>Practices</div></div></div><div class=\"col-2\"><div class=\"col-12 quick-links2 gen-text-center coppa-pad\">COPPA</div></div><div class=\"col-2\"><div class=\"col-12 quick-links2 quick4 gen-text-center caloppa-pad\">CalOPPA</div></div><div class=\"col-2\"><div class=\"quick-links2 gen-text-center\">Our Contact Information<br></div></div></div><div style=\"clear:both;height:10px;\"></div><div class=\"innerText\">Protecting your private information is our priority. This Statement of Privacy applies to <a href=\"http://www.rank-x.com\">http://www.rank-x.com</a> and Rank-X, LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Rank-X, LLC include http://www.rank-x.com and Rank-X. The Rank-X website is a Online Advertising and Marketing site. By using the Rank-X website, you consent to the data practices described in this statement.</div><br></div><span id=\"infoCo\"></span><br><div class=\"grayText\"><strong>Collection of your Personal Information</strong></div><br><div class=\"innerText\">Rank-X may collect personally identifiable information, such as your:<ul style=\"list-style-type: none\"><li>- Name</li><li>- Address</li><li>- E-mail Address</li></ul><br>Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through Rank-X\'s public message boards, this information may be collected and used by others.</div><div class=\"innerText\">Rank-X encourages you to review the privacy statements of websites you choose to link to from Rank-X so that you can understand how those websites collect, use and share your information. Rank-X is not responsible for the privacy statements or other content on websites outside of the Rank-X website.</div><br><div class=\"grayText\"><strong>Use of your Personal Information</strong></div><br><div class=\"innerText\">Rank-X collects and uses your personal information to operate its website(s) and deliver the services you have requested.<br>Rank-X may also use your personally identifiable information to inform you of other products or services available from Rank-X and its affiliates. Rank-X may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered.<br>Rank-X does not sell, rent or lease its customer lists to third parties.<br>Rank-X may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. Rank-X may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Rank-X, and they are required to maintain the confidentiality of your information.<br>Rank-X may keep track of the websites and pages our users visit within Rank-X, in order to determine what Rank-X services are the most popular. This data is used to deliver customized content and advertising within Rank-X to customers whose behavior indicates that they are interested in a particular subject area.<br>Rank-X will disclose your personal information, without notice, only if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Rank-X or the site; (b) protect and defend the rights or property of Rank-X; and, (c) act under exigent circumstances to protect the personal safety of users of Rank-X, or the public.<br></div><span id=\"infoUs\"></span><br><div class=\"grayText\"><strong>Automatically Collected Information</strong></div><br><div class=\"innerText\">Information about your computer hardware and software may be automatically collected by Rank-X. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Rank-X website.<br><br></div><div class=\"grayText\"><strong>Use of Cookies</strong></div><div class=\"innerText\">The Rank-X website may use \"cookies\" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.<br>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Rank-X pages, or register with Rank-X site or services, a cookie helps Rank-X to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Rank-X website, the information you previously provided can be retrieved, so you can easily use the Rank-X features that you customized.<br>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Rank-X services or websites you visit.<br><br></div><div class=\"grayText\"><strong>Security of your Personal Information</strong></div><br><div class=\"innerText\">Rank-X secures your personal information from unauthorized access, use, or disclosure. Rank-X uses the following methods for this purpose:<br><ul style=\"list-style-type: none\"><li>- SSL Protocol</li><li>- Malware Scanning</li></ul><br>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</div><br><div class=\"grayText\"><strong>Children Under Thirteen</strong></div><br><div class=\"innerText\">Rank-X does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.<br></div><br><div class=\"grayText\"><strong>Disconnecting your Rank-X Account from Third Party Websites</strong></div><br><div class=\"innerText\">You will be able to connect your Rank-X account to third party accounts. BY CONNECTING YOUR RANK-X ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED INTHIS MANNER, DO NOT USE THE THIS FEATURE. You may disconnect your account from a third party account at any time. Users may learn how to disconnect their accounts from third-party websites by visiting their \"My Account\" page. Users may also contact us via email.<br></div><br><div class=\"grayText\"><strong>Account Termination</strong></div><br><div class=\"innerText\">We will remove your public posts from view and/or dissociate them from your account profile, but we may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations. Please note that businesses cannot remove their business listings, ratings, or reviews by closing their accounts.<br></div><br><div class=\"grayText\"><strong>Opt-Out &amp; Unsubscribe</strong></div><br><div class=\"innerText\">We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain information. Users may opt-out of receiving any or all communications from Rank-X by contacting us here:<br><ul style=\"list-style-type: none\"><li>- Web page: _________________</li><li>- Email: _________________</li><li>- Phone: _________________</li></ul><br></div><br><div class=\"grayText\"><strong>California Residents: Your California Privacy Rights</strong></div><br><div class=\"innerText\">Rank-X does not disclose your personal information to third parties for the purpose of directly marketing their services to you unless you first agree to such disclosure. If you have any questions regarding this policy, or would like to change your preferences, you may contact us at the address listed below.<br></div><br><div class=\"grayText\"><strong>Changes to this Statement</strong></div><br><div class=\"innerText\">Rank-X will occasionally update this Statement of Privacy to reflect company and customer feedback. Rank-X encourages you to periodically review this Statement to be informed of how Rank-X is protecting your information.<br></div><br><div class=\"grayText\"><strong>Contact Information</strong></div><br><div class=\"innerText\">Rank-X welcomes your questions or comments regarding this Statement of Privacy. If you believe that Rank-X has not adhered to this Statement, please contact Rank-X at:<br></div><br><div class=\"innerText\">Rank-X, LLC</div><div class=\"innerText\">1650 Adams Av.</div><div class=\"innerText\">San Diego, California, 92116</div><br><div class=\"innerText\">Email Address:</div><div class=\"innerText\">contact@rank-x.com</div><br><div class=\"innerText\">Telephone number:</div><div class=\"innerText\"></div><br><div class=\"innerText\"><br>Effective as of May 31, 2017</div><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><br></div>");
$templateCache.put("app/layout/Partials2/promotertos.html","<style>\n    #ppBody {\n        font-size: 13pt;\n        width: 100%;\n        margin: 0 auto;\n        text-align: justify;\n    }\n    #ppHeader {\n        font-family: verdana;\n        font-size: 21pt;\n        width: 100%;\n        margin: 0 auto;\n    }\n    \n    .ppConsistencies {\n        display: none;\n    }\n\n\n    #ppBody > ol > li {\n        margin-bottom: 30px;\n    }\n    \n    #ppBody > ol > li > ul > li{\n        margin-bottom: 20px;\n    }\n\n    #ppBody > ol > li > ul > li > ol >li{\n        margin-bottom: 10px;\n    }\n</style><div class=\"container\"><br><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><div id=\"ppHeader\"><span><img src=\"/assets/images/logo_sq.png\" style=\"width:80px\"></span> Rank-X Terms of Use</div><div id=\"ppBody\">These terms of service constitute a legally binding agreement (the “Agreement”) between you and Rank-X, LLC (“Rank-X” “we,” “us” or “our”) governing your use of the Rank-X application, website, and technology platform (collectively, the “Rank-X Platform”). PLEASE BE ADVISED: THIS AGREEMENT CONTAINS PROVISIONS THAT GOVERN HOW CLAIMS YOU AND RANK-X HAVE AGAINST EACH OTHER CAN BE BROUGHT (SEE SECTION 16 BELOW). THESE PROVISIONS WILL, WITH LIMITED EXCEPTION, REQUIRE YOU TO SUBMIT CLAIMS YOU HAVE AGAINST RANK-X TO BINDING AND FINAL ARBITRATION ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, GROUP OR REPRESENTATIVE ACTION OR PROCEEDING. AS A DRIVER, YOU HAVE AN OPPORTUNITY TO OPT OUT OF ARBITRATION WITH RESPECT TO CERTAIN CLAIMS AS PROVIDED IN SECTION 17. By entering into to this Agreement, you expressly acknowledge that you understand this Agreement (including the dispute resolution and arbitration provisions Section 16) and accept all of its terms. IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MAY NOT USE OR ACCESS THE RANK-X PLATFORM.<ol><li><b>The Rank-X Platform</b> The Rank-X Platform provides an online platform that creates lists, rankings, and forums about businesses, activities, locations, and venues (Collectively “Businesses”). The lists, rankings, and forums within the Rank-X Platform are generated by persons who use the site (“Users”) to rank and comment on Businesses they have experienced. The Rank-X Platform also allows persons to promote Rank-X to various Businesses (“Promoters”) in exchange for a commission-based percentage of the revenue generated by Businesses who the Promoter successfully signs up for Rank-X’s Premium Membership. Each individual Promoter will be assigned a unique alphanumeric code (“Code”). Each Business that signs up for Rank-X’s Premium Membership will use the Code assigned to the Promoter that contacted them to gain access to Rank-X’s Premium Membership benefits. When a Business uses this Code, the Business will be given sixty (60) days of free access to the Premium Membership. If a Business, after the 60-day free period expires, chooses to continue accessing Rank-X’s Premium Membership benefits, it will do so by using the Promoter’s Code to sign up for continued Premium Membership benefits at the specified cost.</li><li><b>Modification to the Agreement</b> In the event Rank-X modifies the terms and conditions of this Agreement, such modifications shall be binding on you only upon your acceptance of the modified Agreement. Rank-X reserves the right to modify any information referenced in the hyperlinks from this Agreement from time to time, and such modifications shall become effective upon posting. Continued use of the Rank-X Platform or Services after any such changes shall constitute your consent to such changes. Unless material changes are made to the arbitration provisions herein, you agree that modification of this Agreement does not create a renewed opportunity to opt out of arbitration (if applicable).</li><li><b>Eligibility</b> The Rank-X Platform may only be used by individuals and businesses who can form legally binding contracts under applicable law. The Rank-X Platform is not available to children (persons under the age of 18) or Premium Members who have had their Premium Member account temporarily or permanently deactivated. By becoming a Premium Member of Rank-X’s Platform, you represent and warrant that you are at least 18 years old and that you have the right, authority and capacity to enter into and abide by the terms and conditions of this Agreement. You may not allow other persons to use your Business’s Rank-X account, and you agree that you are the sole authorized user of your account.</li><li><b>Payments</b> If you are a Promoter, you will receive payment for your efforts in promoting after successfully signing Businesses up for Rank-X’s Premium Memberships (“Services”). All payments are subject to Rank-X Commission, discussed below. Rank-X will process all payments due to you through its third party payments processor. You acknowledge and agree that such amounts shall not include any interest and will be net of any amounts that we are required to withhold by law.<ol type=\"a\"><li><b>a. Commission</b> In exchange for successfully signing Businesses up for Rank-X’s Premium Memberships, Rank-X agrees to pay the Promoter a commission based on the revenue generated by his or her Services. The amount of the applicable Commission is set out in Exhibit 1 herein, and will apply once you accept these Terms of Service. Rank-X reserves the right to change the applicable Commission at any time in Rank-X’s discretion based upon local market factors, and Rank-X will provide you with notice in the event of such change. Commission for each Account generated by Promoter shall continue unless and until this relationship is expressly terminated and/or the Business cancels its Premium Membership. Continued use of the Rank-X Platform after any such change in the Commission calculation shall constitute your consent to such change. The amount of monthly Commission paid by Rank-X to any individual Promoter shall not exceed $5,000.00 United States Dollars per month. Similarly, no individual Promoter may receive commission for more than one hundred (100) Businesses that they sign up for Rank-X’s Premium Memberships (“Accounts”).</li><li><b>Membership Fees and Payment Schedule.</b> Rank-X’s Premium Membership costs vary depending on the industry and business type that the business is associated with, as set out in Section 4(c) below. Additionally, Businesses may purchase custom rankings at the price of $45.00 per month. Rank-X charges Businesses once per month for Premium Membership benefits, which will continue to be accessible by Businesses until and unless this Agreement has been materially breached or terminated with or without cause.</li><li><b>Premium Memberships and Pricing</b> A Business may sign up for and purchase Rank-X’s Premium Membership in order to utilize the various benefits of doing so. “Premium Membership” for purposes of this agreement refers to a Business’s ability to promote the Business’s specials and activities, which drives additional online traffic to the Business’s profile, in exchange for a monthly Premium Membership fee. Rank-X reserves the right to change the pricing schedule for Premium Memberships at any time in our discretion based upon local market factors, and we will provide you with notice in the event of changes to the base Premium Membership fees that would result in a change in the applicable commission rate.</li><li><b>Payment Schedule.</b> Promoters shall be paid once per month (twelve times per year) for the cumulative commission earned in that month, based on the Commission Schedule, that is generated by the Accounts they have obtained for Rank-X.</li><li><b>No Other Payments.</b> No other fees and/or expenses will be paid to the Promoter, unless such fees and/or expenses have been approved in advance by the appropriate executive on behalf of the Recipient in writing. The Promoter shall be solely responsible for any and all taxes, Social Security contributions or payments, disability insurance, unemployment taxes, and other payroll type taxes applicable to such compensation. The Contractor has the right of control over the method of payment for services.</li></ol></li><li><b>Communications</b> By becoming a Premium Member, you agree to receive communications from us, including via e-mail, text message, calls, and push notifications. You agree that texts, calls or prerecorded messages may be generated by automatic telephone dialing systems. Communications from Rank-X, its affiliated companies and/or Drivers, may include but are not limited to: operational communications concerning your Premium Member account or use of the Rank-X Platform or Services, updates concerning new and existing features on the Rank-X Platform, communications concerning promotions run by us or our third-party partners, and news concerning Rank-X and industry developments. Standard text messaging charges applied by your cell phone carrier will apply to text messages we send.<br>IF YOU WISH TO OPT OUT OF PROMOTIONAL EMAILS, YOU CAN UNSUBSCRIBE FROM OUR PROMOTIONAL EMAIL LIST BY FOLLOWING THE UNSUBSCRIBE OPTIONS IN THE PROMOTIONAL EMAIL ITSELF. YOU ACKNOWLEDGE THAT YOU ARE NOT REQUIRED TO CONSENT TO RECEIVE PROMOTIONAL TEXTS OR CALLS AS A CONDITION OF USING THE PLATFORM OR THE SERVICES. IF YOU WISH TO OPT OUT OF ALL TEXTS OR CALLS FROM (INCLUDING OPERATIONAL OR TRANSACTIONAL TEXTS OR CALLS), YOU CAN NOTIFY US VIA EMAIL, HOWEVER YOU ACKNOWLEDGE THAT OPTING OUT OF RECEIVING ALL TEXTS MAY IMPACT YOUR USE OF THE Rank-X PLATFORM OR THE SERVICES.</li><li><b>Your Information</b> Your Information is any information you provide, publish or post to or through the Rank-X Platform (including any profile information you provide) or send to other Users or Premium Members (including via in-application feedback, any email feature, or through any -related Facebook, Twitter or other social media posting) (your “Information”). You consent to us using your Information to create a Premium Member account that will allow you to use the Platform and participate in the Services. Our collection and use of personal information in connection with the Rank-X Platform and Services is as provided in Rank-X’s Privacy Policy located at www.Rank-X.com/privacy. You are solely responsible for your Information and your interactions with other members of the public, and we act only as a passive conduit for your online posting of your Information. You agree to provide and maintain accurate, current and complete information and that we and other members of the public may rely on your Information as accurate, current and complete. To enable Rank-X to use your Information, you grant to us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, transferable, sub-licensable (through multiple tiers) right and license to exercise the copyright, publicity, and database rights you have in your Information, and to use, copy, perform, display and distribute such Information to prepare derivative works, or incorporate into other works, such Information, in any media now known or not currently known. Rank-X does not assert any ownership over your Information; rather, as between you and Rank-X, subject to the rights granted to us in this Agreement, you retain full ownership of all of your Information and any intellectual property rights or other proprietary rights associated with your Information.<br>You may be able to create or log-in to your Rank-X Premium Member account through online accounts you may have with third party social networking sites (each such account, an \"SNS Account\"). By connecting to Rank-X through an SNS Account, you understand that Rank-X may access, store, and make available any SNS Account content according to the permission settings of your SNS Account (e.g., friends, mutual friends, contacts or following/followed lists (the “SNS Content”)). You understand that SNS Content may be available on and through the Rank-X Platform to other Users. Unless otherwise specified in this Agreement, all SNS Content, if any, shall be considered to be your Information.</li><li><b>Promotions and Referral Programs</b> Rank-X, at its sole discretion, may make available promotions with different features to any Premium Members or prospective Premium Members. These promotions, unless made to you, shall have no bearing whatsoever on your Agreement or relationship with Rank-X. Rank-X reserves the right to withhold or deduct credits or benefits obtained through a promotion in the event that Rank-X determines or believes that the redemption of the promotion or receipt of the credit or benefit was in error, fraudulent, illegal, or in violation of the applicable promotion terms or this Agreement.</li><li><b>Restricted Activities</b><ol type=\"a\">With respect to your use of the Rank-X Platform and your participation in the Premium Membership, you agree that you will not:<li>impersonate any person, business, or government entity;</li><li>stalk, threaten, or otherwise harass any person or entity, or carry any weapons;</li><li>violate any law, statute, rule, permit, ordinance or regulation;</li><li>interfere with or disrupt the Services or the Rank-X Platform or the servers or networks connected to the Rank-X Platform;</li><li>post Information or interact on the Rank-X Platform or Services in a manner which is false, inaccurate, misleading (directly or by omission or failure to update information), defamatory, libelous, abusive, obscene, profane, offensive, sexually oriented, threatening, harassing, or illegal;</li><li>use the Rank-X Platform in any way that infringes any third party’s rights, including but not limited to: intellectual property rights, copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy;</li><li>post, email or otherwise transmit any malicious code, files or programs designed to interrupt, damage, destroy or limit the functionality of any computer software or hardware or telecommunications equipment or surreptitiously intercept or expropriate any system, data or personal information;</li><li>forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted through the Rank-X Platform;</li><li>“frame” or “mirror” any part of the Rank-X Platform, without our prior written authorization or use meta tags or code or other devices containing any reference to us in order to direct any person to any other web site for any purpose; or</li><li>modify, adapt, translate, reverse engineer, decipher, decompile or otherwise disassemble any portion of the Rank-X Platform or any software used on or for the Rank-X Platform;</li><li>rent, lease, lend, sell, redistribute, license or sublicense the Rank-X Platform or access to any portion of the Rank-X Platform;</li><li>use any robot, spider, site search/retrieval application, or other manual or automatic device or process to retrieve, index, scrape, “data mine”, or in any way reproduce or circumvent the navigational structure or presentation of the Rank-X Platform or its contents;</li><li>link directly or indirectly to any other web sites;</li><li>transfer or sell your Premium Member account, password and/or identification to any other party</li><li>discriminate against or harass anyone on the basis of race, national origin, religion, gender, gender identity, physical or mental disability, medical condition, marital status, age or sexual orientation, or</li><li>cause any third party to engage in the restricted activities above.</li></ol></li><li><b>Intellectual Property</b> All intellectual property rights in the Rank-X Platform shall be owned by Rank-X absolutely and in their entirety. These rights include and are not limited to database rights, copyright, design rights (whether registered or unregistered), trademarks (whether registered or unregistered) and other similar rights wherever existing in the world together with the right to apply for protection of the same. All other trademarks, logos, service marks, company or product names set forth in the Rank-X Platform are the property of their respective owners. You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information (“Submissions”) provided by you to us are non-confidential and shall become the sole property of Rank-X. Rank-X shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.<br>Rank-X and other Rank-X logos, designs, graphics, icons, scripts and service names are registered trademarks, trademarks or trade dress of Rank-X in the United States and/or other countries (collectively, the “Rank-X Marks”). If you provide Services as a Premium Member, Rank-X grants to you, during the term of this Agreement, and subject to your compliance with the terms and conditions of this Agreement, a limited, revocable, non-exclusive license to display and use the Rank-X Marks solely in connection with providing the Services through the Rank-X Platform (“License”). The License is non-transferable and non-assignable, and you shall not grant to any third party any right, permission, license or sublicense with respect to any of the rights granted hereunder without Rank-X’s prior written permission, which it may withhold in its sole discretion. The Rank-X Marks may not be used in any manner that is likely to cause confusion.<br>You acknowledge that Rank-X is the owner and licensor of the Rank-X Marks, including all goodwill associated therewith, and that your use of the Rank-X Marks will confer no additional interest in or ownership of the Rank-X Marks in you but rather inures to the benefit of Rank-X. You agree to use the Rank-X Marks strictly in accordance with Rank-X’s Terms and Conditions and any other guidelines as may be provided to you and revised from time to time, and to immediately cease any use that Rank-X determines to nonconforming or otherwise unacceptable.<br>You agree that you will not: (1) create any materials that incorporate the Rank-X Marks or any derivatives of the Rank-X Marks other than as expressly approved by Rank-X in writing; (2) use the Rank-X Marks in any way that tends to impair their validity as proprietary trademarks, service marks, trade names or trade dress, or use the Rank-X Marks other than in accordance with the terms, conditions and restrictions herein; (3) take any other action that would jeopardize or impair Rank-X’s rights as owner of the Rank-X Marks or the legality and/or enforceability of the Rank-X Marks, including, without limitation, challenging or opposing Rank-X’s ownership in the Rank-X Marks; (4) apply for trademark registration or renewal of trademark registration of any of the Rank-X Marks, any derivative of the Rank-X Marks, any combination of the Rank-X Marks and any other name, or any trademark, service mark, trade name, symbol or word which is similar to the Rank-X Marks; (5) use the Rank-X Marks on or in connection with any product, service or activity that is in violation of any law, statute, government regulation or standard.<br>Violation of any provision of this License may result in immediate termination of the License, in Rank-X’s sole discretion. If you create any materials bearing the Rank-X Marks (in violation of this Agreement or otherwise), you agree that upon their creation Rank-X exclusively owns all right, title and interest in and to such materials, including without limitation any modifications to the Rank-X Marks or derivative works based on the Rank-X Marks. You further agree to assign any interest or right you may have in such materials to Rank-X, and to provide information and execute any documents as reasonably requested by Rank-X to enable Rank-X to formalize such assignment.<br>Rank-X respects the intellectual property of others, and expects Premium Members to do the same. If you believe, in good faith, that any materials on the Rank-X Platform or Services infringe upon your copyrights, please contact us via email.<br></li><li><b>Disclaimers</b> The following disclaimers are made on behalf of Rank-X, our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, and shareholders.<br>The Rank-X Platform is provided on an “as is” basis and without any warranty or condition, express, implied or statutory. We do not guarantee and do not promise any specific results from use of the Rank-X Platform and/or the Services, including the ability to provide or receive Services at any given location or time. We specifically disclaim any implied warranties of title, merchantability, fitness for a particular purpose and non-infringement. Some states do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you.<br>We do not warrant that your use of the Rank-X Platform or Services will be accurate, complete, reliable, current, secure, uninterrupted, always available, or error- free, or will meet your requirements, that any defects in the Rank-X Platform will be corrected, or that the Rank-X Platform is free of viruses or other harmful components. We disclaim liability for, and no warranty is made with respect to, connectivity and availability of the Rank-X Platform or Services.<br>We cannot guarantee that each User of the Rank-X Platform is who he or she claims to be. Please use common sense when using the Rank-X Platform and Services. Please note that there are also risks of dealing with underage persons or people acting under false pretense, and we do not accept responsibility or liability for any content, communication or other use or access of the Rank-X Platform by persons under the age of 18 in violation of this Agreement.<br>Rank-X is not responsible for the conduct, whether online or offline, of any User of the Rank-X Platform or Services. You are solely responsible for your interactions with other Users.<br>Rank-X expressly disclaims any liability arising from the unauthorized use of your Premium Member account. Should you suspect that any unauthorized party may be using your Premium Member account or you suspect any other breach of security, you agree to notify us immediately.<br>Please carefully select the type of information that you post on the Rank-X Platform or through the Services or release to others. We disclaim all liability, regardless of the form of action, for the acts or omissions of other Users (including unauthorized users, or “hackers”).<br>Opinions, advice, statements, offers, or other information or content concerning Rank-X or made available through the Rank-X Platform, but not directly by us, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. Under no circumstances will we be responsible for any loss or damage resulting from your reliance on information or other content posted by third parties, whether on the Rank-X Platform or otherwise. We reserve the right, but we have no obligation, to monitor the materials posted on the Rank-X Platform and remove any such material that in our sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, illegal, or that might violate the rights, harm, or threaten the safety of Users or others.<br>This paragraph applies to any version of the Rank-X Platform that you acquire from the Apple App Store. This Agreement is entered into between you and Rank-X. Apple, Inc. (“Apple”) is not a party to this Agreement and shall have no obligations with respect to the Rank-X Platform. Rank-X, not Apple, is solely responsible for the Rank-X Platform and the content thereof as set forth hereunder. However, Apple and Apple’s subsidiaries may be third party beneficiaries of this Agreement. Upon your acceptance of this Agreement, Apple shall have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third party beneficiary thereof. This Agreement incorporates by reference Apple’s Licensed Application End User License Agreement, for purposes of which, you are “the end-user.” In the event of a conflict in the terms of the Licensed Application End User License Agreement and this Agreement, the terms of this Agreement shall control.</li><li><b>Indemnity</b> You will defend, indemnify, and hold Rank-X including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders harmless from any claims, actions, suits, losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of your use of the Rank-X Platform and participation in the Services, including: (1) your breach of this Agreement or the documents it incorporates by reference; (2) your violation of any law or the rights of a third party, including, without limitation, Drivers, Riders, other motorists, and pedestrians, as a result of your own interaction with such third party; (3) any allegation that any materials that you submit to us or transmit through the Rank-X Platform or to us infringe or otherwise violate the copyright, trademark, trade secret or other intellectual property or other rights of any third party; (4) your ownership, use or operation of a motor vehicle or passenger vehicle, including your provision of Services as a Driver; and/or (5) any other activities in connection with the Services. This indemnity shall be applicable without regard to the negligence of any party, including any indemnified person.</li><li><b>Limitation of Liability</b> IN NO EVENT WILL RANK-X, INCLUDING OUR AFFILIATES, SUBSIDIARIES, PARENTS, SUCCESSORS AND ASSIGNS, AND EACH OF OUR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SHAREHOLDERS (COLLECTIVELY “RANK-X” FOR PURPOSES OF THIS SECTION), BE LIABLE TO YOU FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, CONSEQUENTIAL, OR INDIRECT DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR DELETION, CORRUPTION, LOSS OF DATA, LOSS OF PROGRAMS, FAILURE TO STORE ANY INFORMATION OR OTHER CONTENT MAINTAINED OR TRANSMITTED BY THE RANK-X PLATFORM, SERVICE INTERRUPTIONS, OR FOR THE COST OF PROCUREMENT OF SUBSTITUTE SERVICES) ARISING OUT OF OR IN CONNECTION WITH THE RANK-X PLATFORM, THE SERVICES, OR THIS AGREEMENT, HOWEVER ARISING INCLUDING NEGLIGENCE, EVEN IF WE OR OUR AGENTS OR REPRESENTATIVES KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE RANK-X PLATFORM MAY BE USED BY YOU TO REQUEST AND SCHEDULE TRANSPORTATION, GOODS, OR OTHER SERVICES WITH THIRD PARTY PROVIDERS, BUT YOU AGREE THAT RANK-X HAS NO RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY TRANSPORTATION, GOODS OR OTHER SERVICES PROVIDED TO YOU BY THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN Their TERMS. CERTAIN JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</li><li><b>Term and Termination</b> This Agreement is effective upon your creation of a Premium Member account. This Agreement may be terminated: a) by Premium Member, without cause, upon seven (7) days’ prior written notice to Rank-X; or b) by either Party immediately, without notice, upon the other Party’s material breach of this Agreement, including but not limited to any breach of Section 8 or breach of Section 9 of this Agreement. In addition, Rank-X may terminate this Agreement or deactivate your User account immediately in the event: (1) you no longer qualify to provide Services or to operate the approved vehicle under applicable law, rule, permit, ordinance or regulation; (2) you fall below Rank-X’s star rating or cancellation threshold; (3) Rank-X has the good faith belief that such action is necessary to protect the safety of the Rank-X community or third parties, provided that in the event of a deactivation pursuant to (1)-(3) above, you will be given notice of the potential or actual deactivation and an opportunity to attempt to cure the issue to Rank-X’s reasonable satisfaction prior to Rank-X permanently terminating the Agreement. For all other breaches of this Agreement, you will be provided notice and an opportunity to cure the breach. If the breach is cured in a timely manner and to Rank-X’s satisfaction, this Agreement will not be permanently terminated. Sections 2, 4, 6, 9 (with respect to the license), 10-12, 14-16 shall survive any termination or expiration of this Agreement.</li><li><b>Confidentiality</b> You agree not to use any technical, financial, strategic and other proprietary and confidential information relating to Rank-X’s business, operations and properties, including Premium Member information (“Confidential Information”) disclosed to you by Rank-X for your own use or for any purpose other than as contemplated herein. You shall not disclose or permit disclosure of any Confidential Information to third parties. You agree to take all reasonable measures to protect the secrecy of and avoid disclosure or use of Confidential Information of Rank-X in order to prevent it from falling into the public domain. Notwithstanding the above, you shall not have liability to Rank-X with regard to any Confidential Information which you can prove: was in the public domain at the time it was disclosed by Rank-X or has entered the public domain through no fault of yours; was known to you, without restriction, at the time of disclosure, as demonstrated by files in existence at the time of disclosure; is disclosed with the prior written approval of Rank-X; becomes known to you, without restriction, from a source other than Rank-X without breach of this Agreement by you and otherwise not in violation of Rank-X’s rights; or is disclosed pursuant to the order or requirement of a court, administrative agency, or other governmental body; provided, however, that You shall provide prompt notice of such court order or requirement to Rank-X to enable Rank-X to seek a protective order or otherwise prevent or restrict such disclosure.</li><li><b>Relationship with Rank-X</b> As a Promoter on the Rank-X Platform, you acknowledge and agree that you and Rank-X are in a direct business relationship, and the relationship between the parties under this Agreement is solely that of independent contracting parties. You and Rank-X expressly agree expressly agree that (1) this is not an employment agreement and does not create an employment relationship between you and Rank-X; and (2) no joint venture, franchisor-franchisee, partnership, or agency relationship is intended or created by this Agreement. You have no authority to bind Rank-X, and you undertake not to hold yourself out as an employee, agent or authorized representative of Rank-X.<br>Rank-X does not, and shall not be deemed to, direct or control you generally or in your performance under this Agreement specifically, including in connection with your provision of Services, your acts or omissions, or your operation and maintenance of your vehicle. You retain the sole right to determine when, where, and for how long you will utilize the Rank-X Platform. You retain the option to accept or to decline or ignore a Rank-X or any Third Party request for Services via the Rank-X Platform, or to cancel your Promoter Code via the Rank-X Platform, subject to Rank-X’s then-current cancellation policies. With the exception of any signage required by law or permit/license rules or requirements, Rank-X shall have no right to require you to: (a) display Rank-X’s names, logos or colors when you are Promoting the Company; or (b) wear a uniform or any other clothing displaying Rank-X’s names, logos or colors. You acknowledge and agree that you have complete discretion to provide Services or otherwise engage in other business or employment activities. The Promoter has no desk or other equipment either located at or furnished by Rank-X.</li><li><b>General</b> Except as provided in Section 16, this Agreement shall be governed by the laws of the State of California without regard to choice of law principles. This choice of law provision is only intended to specify the use of California law to interpret this Agreement and is not intended to create any other substantive right to non-Californians to assert claims under California law whether by statute, common law, or otherwise. If any provision of this Agreement is or becomes invalid or non-binding, the parties shall remain bound by all other provisions hereof. In that event, the parties shall replace the invalid or non- binding provision with provisions that are valid and binding and that have, to the greatest extent possible, a similar effect as the invalid or non-binding provision, given the contents and purpose of this Agreement. You agree that this Agreement and all incorporated agreements may be automatically assigned by Rank-X, in our sole discretion by providing notice to you. Except as explicitly stated otherwise, any notices to Rank-X shall be given by certified mail, postage prepaid and return receipt requested to Rank-X. Any notices to you shall be provided to you through the Rank-X Platform or given to you via the email address or physical you provide to Rank-X during the registration process. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. A party’s failure to act with respect to a breach by the other party does not constitute a waiver of the party’s right to act with respect to subsequent or similar breaches. This Agreement sets forth the entire understanding and agreement between you and Rank-X with respect to the subject matter hereof and supersedes all previous understandings and agreements between the parties, whether oral or written.</li><li><b>Dispute Resolution and Arbitration Agreement</b><ol type=\"a\"><li><b>Agreement to Binding Arbitration Between You and Rank-X.</b> YOU AND RANK-X MUTUALLY AGREE TO WAIVE OUR RESPECTIVE RIGHTS TO RESOLUTION OF DISPUTES IN A COURT OF LAW BY A JUDGE OR JURY AND AGREE TO RESOLVE ANY DISPUTE BY ARBITRATION, as set forth below. This agreement to arbitrate (“Arbitration Agreement”) is governed by the Federal Arbitration Act and survives after the Agreement terminates or your relationship with Rank-X ends. ANY ARBITRATION UNDER THIS AGREEMENT WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED. Except as expressly provided below, this Arbitration Agreement applies to all Claims (defined below) between you and Rank-X, including our affiliates, subsidiaries, parents, successors and assigns, and each of our respective officers, directors, employees, agents, or shareholders.<br>Except as expressly provided below, ALL DISPUTES AND CLAIMS BETWEEN US (EACH A “CLAIM” AND COLLECTIVELY, “CLAIMS”) SHALL BE EXCLUSIVELY RESOLVED BY BINDING ARBITRATION SOLELY BETWEEN YOU AND RANK-X. These Claims include, but are not limited to, any dispute, claim or controversy, whether based on past, present, or future events, arising out of or relating to: this Agreement and prior versions thereof (including the breach, termination, enforcement, interpretation or validity thereof), the Rank-X Platform, the Services, any other goods or services made available through the Rank-X Platform, your relationship with Rank-X, the threatened or actual suspension, deactivation or termination of your Premium Member Account or this Agreement, payments made by you or any payments made or allegedly owed to you, any promotions or offers made by Rank-X, any city, county, state or federal wage-hour law, trade secrets, unfair competition, compensation, breaks and rest periods, expense reimbursement, wrongful termination, discrimination, harassment, retaliation, fraud, defamation, emotional distress, breach of any express or implied contract or covenant, claims arising under federal or state consumer protection laws; claims arising under antitrust laws, claims arising under the Telephone Consumer Protection Act and Fair Credit Reporting Act; and claims arising under the Uniform Trade Secrets Act, Civil Rights Act of 1964, Americans With Disabilities Act, Age Discrimination in Employment Act, Older Workers Benefit Protection Act, Family Medical Leave Act, Fair Labor Standards Act, Employee Retirement Income Security Act (except for individual claims for employee benefits under any benefit plan sponsored by Rank-X and covered by the Employee Retirement Income Security Act of 1974 or funded by insurance), and state statutes, if any, addressing the same or similar subject matters, and all other federal and state statutory and common law claims. All disputes concerning the arbitrability of a Claim (including disputes about the scope, applicability, enforceability, revocability or validity of the Arbitration Agreement) shall be decided by the arbitrator, except as expressly provided below.<br>BY AGREEING TO ARBITRATION, YOU UNDERSTAND THAT YOU AND RANK-X ARE WAIVING THE RIGHT TO SUE IN COURT OR HAVE A JURY TRIAL FOR ALL CLAIMS, EXCEPT AS EXPRESSLY OTHERWISE PROVIDED IN THIS ARBITRATION AGREEMENT. This Arbitration Agreement is intended to require arbitration of every claim or dispute that can lawfully be arbitrated, except for those claims and disputes which by the terms of this Arbitration Agreement are expressly excluded from the requirement to arbitrate.</li><li><b>Prohibition of Class Actions and Non-Individualized Relief.</b> YOU UNDERSTAND AND AGREE THAT YOU AND RANK-X MAY EACH BRING CLAIMS IN ARBITRATION AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT ON A CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE BASIS (“CLASS ACTION WAIVER”). YOU UNDERSTAND AND AGREE THAT YOU AND RANK-X BOTH ARE WAIVING THE RIGHT TO PURSUE OR HAVE A DISPUTE RESOLVED AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE OR REPRESENTATIVE PROCEEDING. NOTWITHSTANDING THE FOREGOING, THIS SUBSECTION (B) SHALL NOT APPLY TO REPRESENTATIVE PRIVATE ATTORNEYS GENERAL ACT CLAIMS BROUGHT AGAINST RANK-X, WHICH ARE ADDRESSED SEPARATELY IN SECTION 17(C).<br>The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on any basis other than an individual basis. The arbitrator shall have no authority to consider or resolve any Claim or issue any relief on a class, collective, or representative basis.<br>Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the scope, applicability, enforceability, revocability or validity of the Class Action Waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. In any case in which: (1) the dispute is filed as a class, collective, or representative action and (2) there is a final judicial determination that the Class Action Waiver is unenforceable as to any Claims, the class, collective, and/or representative action on such Claims must be litigated in a civil court of competent jurisdiction, but the Class Action Waiver shall be enforced in arbitration on an individual basis as to all other Claims to the fullest extent possible.</li><li><b>Representative PAGA Waiver.</b> Notwithstanding any other provision of this Agreement or the Arbitration Agreement, to the fullest extent permitted by law: (1) you and Rank-X agree not to bring a representative action on behalf of others under the Private Attorneys General Act of 2004 (“PAGA”), California Labor Code § 2698 et seq., in any court or in arbitration, and (2) for any claim brought on a private attorney general basis, including under the California PAGA, both you and Rank-X agree that any such dispute shall be resolved in arbitration on an individual basis only (i.e., to resolve whether you have personally been aggrieved or subject to any violations of law), and that such an action may not be used to resolve the claims or rights of other individuals in a single or collective proceeding (i.e., to resolve whether other individuals have been aggrieved or subject to any violations of law) (collectively, “representative PAGA Waiver”). Notwithstanding any other provision of this Agreement, the Arbitration Agreement or the AAA Rules, disputes regarding the scope, applicability, enforceability, revocability or validity of this representative PAGA Waiver may be resolved only by a civil court of competent jurisdiction and not by an arbitrator. If any provision of this representative PAGA Waiver is found to be unenforceable or unlawful for any reason: (i) the unenforceable provision shall be severed from this Agreement; (ii) severance of the unenforceable provision shall have no impact whatsoever on the Arbitration Agreement or the requirement that any remaining Claims be arbitrated on an individual basis pursuant to the Arbitration Agreement; and (iii) any such representative PAGA or other representative private attorneys general act claims must be litigated in a civil court of competent jurisdiction and not in arbitration. To the extent that there are any Claims to be litigated in a civil court of competent jurisdiction because a civil court of competent jurisdiction determines that the representative PAGA Waiver is unenforceable with respect to those Claims, the Parties agree that litigation of those Claims shall be stayed pending the outcome of any individual Claims in arbitration.</li><li><b>Rules Governing the Arbitration.</b> Any arbitration conducted pursuant to this Arbitration Agreement shall be administered by the American Arbitration Association (“AAA”) pursuant to its Consumer Arbitration Rules that are in effect at the time the arbitration is initiated, as modified by the terms set forth in this Agreement. Copies of these rules can be obtained at the AAA’s website (www.adr.org) (the “AAA Rules”) or by calling the AAA at 1-800-778-7879. Notwithstanding the foregoing, if requested by you and if proper based on the facts and circumstances of the Claims presented, the arbitrator shall have the discretion to select a different set of AAA Rules, but in no event shall the arbitrator consolidate more than one person’s Claims, or otherwise preside over any form of representative, collective, or class proceeding.<br>As part of the arbitration, both you and Rank-X will have the opportunity for reasonable discovery of non-privileged information that is relevant to the Claim. The arbitrator may award any individualized remedies that would be available in court. The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party\'s individual claims. The arbitrator will provide a reasoned written statement of the arbitrator’s decision which shall explain the award given and the findings and conclusions on which the decision is based.<br>The arbitrator will decide the substance of all claims in accordance with applicable law, and will honor all claims of privilege recognized by law. The arbitrator shall not be bound by rulings in prior arbitrations involving different Riders or Drivers, but is bound by rulings in prior arbitrations involving the same Rider or Driver to the extent required by applicable law. The arbitrator’s award shall be final and binding and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof, provided that any award may be challenged in a court of competent jurisdiction.</li><li><b>Arbitration Fees and Awards.</b> The payment of filing and arbitration fees will be governed by the relevant AAA Rules subject to the following modifications:<ol type=\"i\"><li>If you initiate arbitration under this Arbitration Agreement after participating in the optional Negotiation process described in subsection (k) below and are otherwise required to pay a filing fee under the relevant AAA Rules, Rank-X agrees that, unless your claim is for $5,000 or more, your share of the filing and arbitration fees is limited to $50, and that, after you submit proof of payment of the filing fee to Rank-X, Rank-X will promptly reimburse you for all but $50 of the filing fee. If, however, the arbitrator finds that either the substance of your claim or the relief sought in the claim is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all such fees will be governed by the AAA Rules.</li><li>Rank-X initiates arbitration under this Arbitration Agreement, Rank-X will pay all AAA filing and arbitration fees.</li><li>With respect to any Claims brought by Rank-X against a Premium Member, or for Claims brought by a Premium Member against Rank-X that: (A) arise out of, or relate to, Rank-X’s actual deactivation of a Premium Member’s account or a threat by Rank-X to deactivate a Premium Member’s account; or (C) arise out of, or relate to, Rank-X’s actual termination of a Premium Member’s Agreement with Rank-X under the termination provisions of this Agreement, or a threat by Rank-X to terminate a Premium Member’s Agreement, Rank-X shall pay all costs unique to arbitration (as compared to the costs of adjudicating the same claims before a court), including the regular and customary arbitration fees and expenses (to the extent not paid by Rank-X pursuant to the fee provisions above). However, if you are the party initiating the Premium Member Claim, you shall be responsible for contributing up to an amount equal to the filing fee that would be paid to initiate the claim in the court of general jurisdiction in the state in which you provide Services to Businesses, unless a lower fee amount would be owed by you pursuant to the AAA Rules, applicable law, or subsection (e)(1) above. Any dispute as to whether a cost is unique to arbitration shall be resolved by the arbitrator.</li><li>Except as provided in Federal Rule of Civil Procedure 68 or any state equivalents, each party shall pay its own attorneys’ fees and pay any costs that are not unique to the arbitration (i.e., costs that each party would incur if the claim(s) were litigated in a court such as costs to subpoena witnesses and/or documents, take depositions and purchase deposition transcripts, copy documents, etc.).</li><li>At the end of any arbitration, the arbitrator may award reasonable fees and costs or any portion thereof to you if you prevail, to the extent authorized by applicable law.<br>vi. If the arbitrator issues you an award that is greater than the value of Rank-X’s last written settlement offer made after you participated in good faith in the optional Negotiation process described in subsection (j) below, then Rank-X will pay you the amount of the award or U.S. $1,000, whichever is greater.</li></ol></li><li><b>Location and Manner of Arbitration.</b> Unless you and Rank-X agree otherwise, any arbitration hearings between Rank-X and a Premium Member will take place in the county of Rank-X’s Principal Office, and any arbitration hearings between Rank-X and a Premium Member will take place in the county in which Rank-X maintains its Principal Office. If AAA arbitration is unavailable in such county, the arbitration hearings will take place in the nearest available location for a AAA arbitration. If your Claim is for $10,000 or less, Rank-X agrees that you may choose whether the arbitration will be conducted solely on the basis of documents submitted to the arbitrator, through a telephonic hearing, or by an in-person hearing as determined by the AAA Rules. If your Claim exceeds $10,000, the right to a hearing will be determined by the AAA Rules.</li><li><b>Exceptions to Arbitration.</b> This Arbitration Agreement shall not require arbitration of the following types of claims: (1) small claims actions brought on an individual basis that are within the scope of such small claims court’s jurisdiction; (2) a representative action brought on behalf of others under PAGA or other private attorneys general acts, to the extent the representative PAGA Waiver in Section 17(c) of such action is deemed unenforceable by a court of competent jurisdiction; (3) claims for workers’ compensation, state disability insurance and unemployment insurance benefits; and (4) claims that may not be subject to arbitration as a matter of law.<br>Nothing in this Arbitration Agreement prevents you from making a report to or filing a claim or charge with the Equal Employment Opportunity Commission, U.S. Department of Labor, Securities Exchange Commission, National Labor Relations Board, or Office of Federal Contract Compliance Programs, or similar local, state or federal agency, and nothing in this Arbitration Agreement shall be deemed to preclude or excuse a party from bringing an administrative claim before any agency in order to fulfill the party\'s obligation to exhaust administrative remedies before making a claim in arbitration, however you knowingly and voluntarily waive the right to seek or recover money damages of any type pursuant to any administrative complaint and instead may seek such relief only through arbitration under this Agreement. Nothing in this Agreement or Arbitration Agreement prevents your participation in an investigation by a government agency of any report, claim or charge otherwise covered by this Arbitration Provision.</li><li><b>Severability.</b> In addition to the severability provisions in subsections (c) above, in the event that any portion of this Arbitration Agreement is deemed illegal or unenforceable, such provision shall be severed and the remainder of the Arbitration Agreement shall be given full force and effect.</li></ol></li></ol><div class=\"innerText\">Rank-X welcomes your questions or comments regarding this Statement of Privacy. If you believe that Rank-X has not adhered to this Statement, please contact Rank-X at:<br></div><br><div class=\"innerText\">Rank-X, LLC</div><div class=\"innerText\">1650 Adams Av.</div><div class=\"innerText\">San Diego, California, 92116</div><br><div class=\"innerText\">Email Address:</div><div class=\"innerText\">contact@rank-x.com</div><br><div class=\"innerText\">Telephone number:</div><div class=\"innerText\"><br>Effective as of May 31, 2017</div><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Back</button></div><br></div></div>");
$templateCache.put("app/layout/Partials2/searchresults.html","<div ng-show=\"vm.searchActive\"><search-block></search-block></div>");
$templateCache.put("app/layout/Partials2/trends.html","<trend-block show-all=\"true\"></trend-block>");
$templateCache.put("app/rank/Partials2/RankChat.html","<div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><h1 class=\"page-heading\">This is a test</h1></div></div></div>");
$templateCache.put("app/rank/Partials2/addCustomRank.html","<div class=\"container\"><h4>Add a New Ranking</h4><br><label><strong>Choose the best category for your ranking:</strong></label><div class=\"dropdown\" style=\"padding-bottom:10px\"><button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" id=\"nhdropdown\" style=\"width:100%\">{{vm.rankCat}}&nbsp&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-middle\"><li ng-click=\"vm.selCat(1)\"><a>FOOD</a></li><li ng-click=\"vm.selCat(2)\"><a>LIFESTYLE</a></li><li ng-click=\"vm.selCat(3)\"><a>HEALTH</a></li><li ng-click=\"vm.selCat(4)\"><a>SOCIAL</a></li><li ng-click=\"vm.selCat(5)\"><a>SPORTS</a></li><li ng-click=\"vm.selCat(6)\"><a>PERSONALITIES</a></li><li ng-click=\"vm.selCat(7)\"><a>SERVICES</a></li><li ng-click=\"vm.selCat(8)\"><a>BEAUTY</a></li><li ng-click=\"vm.selCat(9)\"><a>CITY</a></li><li ng-click=\"vm.selCat(10)\"><a>POLITICS</a></li><li ng-click=\"vm.selCat(11)\"><a>SCIENCE & TECH</a></li><li ng-click=\"vm.selCat(12)\"><a>LOVE & RELATIONSHIPS</a></li><li ng-click=\"vm.selCat(13)\"><a>FAMILY</a></li><li ng-click=\"vm.selCat(14)\"><a>OTHER</a></li></ul></div><div ng-if=\"vm.step > 1\"><label><strong>What are you ranking?</strong></label><div class=\"dropdown\" style=\"padding-bottom:10px\"><button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" id=\"nhdropdown\" style=\"width:100%\">{{vm.rankType}}&nbsp&nbsp<span class=\"caret\"></span></button><ul class=\"dropdown-menu dropdown-menu-middle\"><li ng-click=\"vm.selType(1)\"><a><strong>ESTABLISHMENTS</strong> - i.e. Restaurants, Shops, Gyms</a></li><li ng-click=\"vm.selType(2)\"><a><strong>PEOPLE</strong> - i.e. Athletes, Celebrities, Politicians</a></li><li ng-click=\"vm.selType(3)\"><a><strong>ORGANIZATIONS</strong> - i.e. Companies, Brands</a></li><li ng-click=\"vm.selType(4)\"><a><strong>PLACES</strong> - i.e. Physical Landmarks, Beaches, Parks, etc.</a></li><li ng-click=\"vm.selType(5)\"><a><strong>OPINIONS</strong> - i.e. Favorite things, Things people like, etc.</a></li><li ng-click=\"vm.selType(6)\"><a><strong>CONTRACTORS</strong> - i.e. Freelancers, Handyman, Tutors, etc.</a></li><li ng-click=\"vm.selType(7)\"><a><strong>ITEM / OBJECTS</strong> - i.e. Souvenier, Products, etc.</a></li><li ng-click=\"vm.selType(8)\"><a><strong>EVENTS</strong> - i.e. Parties, Festivals, etc</a></li></ul></div></div><div ng-if=\"vm.step > 2\"><label><strong>Ranking Title:</strong></label><div class=\"input-group\" style=\"padding-bottom:10px\"><input type=\"text\" class=\"form-control\" placeholder=\"i.e. The best fish tacos in San Diego\" ng-model=\"vm.rankTitle\"> <span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.valRank()\" type=\"button\">Validate</button></span></div><div class=\"alert alert-warning\" ng-if=\"vm.showAlert&&vm.similarRanks.length>0\" style=\"padding-bottom:0px;margin-bottom:0px;\"><strong>Please confirm.</strong> There are similar rankings to the one you are trying to create. If this ranking is different to any of the existing rankings below, click \'Continue\'. If not, please cancel and expand on the already existing rankings.<br><div ng-repeat=\"x in vm.similarRanks\">&nbsp- {{x.title}}<br></div><div class=\"text-center\"><button class=\"btn btn-default\" ng-click=\"vm.alertOk()\">Continue</button> <button class=\"btn btn-default\" ng-click=\"vm.goBack()\">Cancel</button></div></div><div class=\"alert alert-success\" ng-if=\"vm.showAlert&&vm.similarRanks.length==0\"><strong>Good one!</strong> This rank does not seem to have any duplicates.<br><div class=\"text-right\"><button class=\"btn btn-default\" ng-click=\"vm.alertOk()\">Ok</button></div></div></div><div ng-if=\"vm.step > 3\"><label><strong>Ranking Question:</strong></label><div class=\"input-group\" style=\"padding-bottom:10px\"><input type=\"text\" class=\"form-control\" placeholder=\"i.e. Who makes the better fish tacos?\" ng-model=\"vm.question\"> <span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.questionOk()\" type=\"button\">Ok</button></span></div><div class=\"text-right\"><a href=\"\" ng-click=\"vm.whatisrankquestion()\">What is this?</a></div></div><div ng-if=\"vm.step > 4\"><label><strong>Tags</strong></label><div class=\"input-group\" style=\"padding-bottom:10px\"><input type=\"text\" class=\"form-control\" placeholder=\"tags separated by blank space, i.e. food seafood fish\" ng-model=\"vm.tags\"> <span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.tagsOk()\" type=\"button\">Ok</button></span></div><div class=\"text-right\"><a href=\"\" ng-click=\"vm.whataretags()\">What are tags?</a></div></div><div ng-if=\"vm.step > 5\"><div class=\"alert alert-info\" ng-if=\"vm.step == 6\"><strong>Select Image</strong><br>1. Enter a query and click the \'Search Images\' button.<br>2. Navigate the available images using the \'<<\' and=\"\" \'=\"\">>\' buttons.<br>3. When you find an image you like, click \'Select Image\'.<br><br></\'></div><br><button class=\"btn btn-default\" ng-click=\"vm.imageBanksDialog()\"><i class=\"fa fa-question\"></i></button> <label><strong>Select Image Bank:</strong></label><div class=\"row\"><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><img src=\"../../../assets/images/pixabay-logo.png\" ng-click=\"vm.selImgBank(1)\" alt=\"Pixabay\" style=\"width:100%;height:45px;padding:3px;border-style:solid;border-width:1px;border-color:{{vm.pixabay ? \'black\':\'white\'}}\"></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><img src=\"../../../assets/images/pexels-logo.png\" ng-click=\"vm.selImgBank(2)\" alt=\"Pexels\" style=\"width:100%;height:45px;padding:3px;border-style:solid;border-width:1px;border-color:{{vm.pexels ? \'black\':\'white\'}}\"></div><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div></div><label><strong>Image Query:</strong></label><div class=\"input-group\" style=\"padding-bottom:10px\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter what to search for an image, i.e. taco\" ng-model=\"vm.imageQuery\"> <span class=\"input-group-btn\"><button class=\"btn btn-primary\" ng-click=\"vm.getImages()\" type=\"button\">Search Images</button></span></div><div class=\"text-center\"><div class=\"btn-group\"><button class=\"btn btn-default\" ng-click=\"vm.prevImg()\">&nbsp&nbspPrev&nbsp&nbsp</button> <button class=\"btn btn-default\" ng-click=\"vm.nextImg()\">&nbsp&nbspNext&nbsp&nbsp</button></div><button class=\"btn btn-success {{vm.selImageEnable}}\" ng-click=\"vm.selectImg()\">Select Image</button></div></div><br><div ng-if=\"vm.step > 6\"><div class=\"alert alert-info\" ng-if=\"vm.step == 7\"><strong>Select Title Box Background Color</strong><br>1. Select a background color.<br>2. Adjust the shade factor to create attractive visual with your image.<br>3. When you are ready to submit, click the \'Add Rank\' button.</div><label><strong>Select Color Design:</strong></label><div class=\"container\"><div class=\"row\"><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(1)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c1sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:brown\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(2)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c2sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#4682b4\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(3)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c3sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#008080\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(4)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c4sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:gray\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(5)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c5sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#a3297a\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(6)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c6sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#c68c53\"></div></div><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div></div><div class=\"row\" style=\"padding-top:10px\"><div class=\"text-right col-xs-6\"><label>Shade Factor:</label></div><div class=\"btn-group col-xs-6\"><button class=\"btn btn-primary\" ng-click=\"vm.minusShade()\">&nbsp&nbsp<i class=\"fa fa-minus\"></i>&nbsp&nbsp</button> <button class=\"btn btn-primary\" ng-click=\"vm.plusShade()\">&nbsp&nbsp<i class=\"fa fa-plus\"></i>&nbsp&nbsp</button></div></div></div></div><div class=\"container\" ng-if=\"vm.step > 5\"><div class=\"row\"><div class=\"col-xs-12\"><div class=\"well-sm\" style=\"background-color:#666666;color:#f8f8ff;\"><h3 class=\"sub-header\">Preview</h3></div></div></div><div class=\"row\" style=\"padding-bottom:10px\"><div class=\"hidden-xs col-sm-3 col-md-4 col-lg-4\"></div><div class=\"container-bgbox col-xs-6 col-sm-3 col-md-2 col-lg-2\"><bg-box bc=\"{{vm.bc}}\" bc2=\"{{vm.bc2}}\" fc=\"{{vm.fc}}\" text=\"{{vm.rankTitle}}\" dir=\"horizontal\" w=\"100%\" h=\"{{vm.sm ? \'150px\':\'200px\'}}\"></bg-box></div><div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" style=\"margin:0px;padding:0px;border:0px;\"><img ng-src=\"{{vm.image}}\" ng-if=\"!vm.imageLoading\" ng-attr-style=\"width:100%;height:{{vm.sm ? \'150px\':\'200px\'}};\"><div ng-attr-style=\"position:relative;width:100%;height:{{vm.sm ? \'150px\':\'200px\'}};\" ng-if=\"vm.imageLoading\"><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px;position:absolute; top:50%; left:50%; margin-right:-50%;transform: translate(-50%,-50%)\"></div></div><div class=\"hidden-xs col-sm-3 col-md-4 col-lg-4\"></div></div></div><br><div class=\"text-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.goBack()\">Cancel</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.addRank()\" ng-show=\"vm.showAddButton\">{{vm.buttonLabel}}</button></div><br><br></div>");
$templateCache.put("app/rank/Partials2/addRankforAnswer.html","<br><h4>Add Ranking</h4><label><strong>Title:</strong></label> <input class=\"form-control\" ng-model=\"vm.rankTitle\" type=\"text\" placeholder=\"{{vm.rankTitle}}\"> <label><strong>Question:</strong></label> <input class=\"form-control\" ng-model=\"vm.question\" type=\"text\" placeholder=\"{{vm.question}}\"><div class=\"text-right\"><a href=\"\" ng-click=\"\">What is this?</a></div><div class=\"form-group\" style=\"padding:5px\"><label class=\"control-label\">Intro:</label> <textarea class=\"form-control\" ng-model=\"vm.introtext\" placeholder=\"{{vm.introtext}}\" rows=\"4\"></textarea></div><br><div class=\"row\"><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Background Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.bc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><p class=\"text-right\">Font Color</p></div><div class=\"col-xs-6 col-sm-2 col-md-2 col-lg-2\"><color-picker ng-model=\"vm.fc\" color-picker-swatch=\"true\" color-picker-swatch-pos=\"\'left\'\" color-picker-swatch-bootstrap=\"true\" color-picker-swatch-only=\"true\"></color-picker></div><div class=\"hidden-xs col-sm-2 col-md-2 col-lg-2\"></div></div><h4>Preview</h4><div class=\"container\" ng-if=\"true\"><div class=\"row\" ng-if=\"vm.type != \'Short-Phrase\'\"><div class=\"col-xs-12\"><div class=\"well-sm\" style=\"background-color:#666666;color:#f8f8ff;\"><h3 class=\"sub-header\">The Favorites</h3></div></div></div><div class=\"row\"><div class=\"container col-xs-6 col-sm-3 col-md-2 col-lg-2\" ng-attr-style=\"background-color:{{vm.bc}};color:{{vm.fc}};height:{{vm.sm ? \'120px\':\'150px\'}};margin:0px;padding:0px;border:0px;position:relative;\"><h2 class=\"hidden-xs text-center\" style=\"padding:3px; margin:0px; position:absolute; top:50%; left:50%; margin-right:-50%;transform: translate(-50%,-50%)\">{{vm.rankTitle}}</h2><h3 class=\"hidden-sm hidden-md hidden-lg hidden-xl text-center\" style=\"padding:3px; margin:0px; position:absolute; top:50%; left:50%; margin-right:-50%;transform: translate(-50%,-50%)\">{{vm.rankTitle}}</h3></div><div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" style=\"margin:0px;padding:0px;border:0px;\"><img src=\"../../../assets/images/noimage.jpg\" ng-attr-style=\"width:100%;height:{{vm.sm ? \'120px\':\'150px\'}};\"></div></div></div><br><div class=\"text-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.goBack()\">Cancel</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.addRankingforAnswer()\">{{vm.buttonLabel}}</button></div>");
$templateCache.put("app/rank/Partials2/editRanking.html","<div class=\"container\"><h3>Edit Ranking</h3><div class=\"row\" style=\"padding-bottom:10px\"><div class=\"hidden-xs col-sm-3 col-md-4 col-lg-4\"></div><div class=\"container-bgbox col-xs-6 col-sm-3 col-md-2 col-lg-2\"><bg-box bc=\"{{vm.bc}}\" bc2=\"{{vm.bc2}}\" fc=\"{{vm.fc}}\" text=\"{{vm.rankTitle}}\" dir=\"horizontal\" w=\"100%\" h=\"{{vm.sm ? \'200px\':\'200px\'}}\"></bg-box></div><div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-2\" style=\"margin:0px;padding:0px;border:0px;\"><img ng-src=\"{{vm.image}}\" ng-attr-style=\"width:100%;height:{{vm.sm ? \'200px\':\'200px\'}};\"></div><div class=\"hidden-xs col-sm-3 col-md-4 col-lg-4\"></div></div><br><label><strong>Select Image Bank:</strong></label><div class=\"row\"><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><img src=\"../../../assets/images/pixabay-logo.png\" ng-click=\"vm.selImgBank(1)\" alt=\"Pixabay\" style=\"width:100%;height:45px;padding:3px;border-style:solid;border-width:1px;border-color:{{vm.pixabay ? \'black\':\'white\'}}\"><div class=\"text-center\"><a href=\"https://www.pixabay.com/\">Visit Pixabay</a></div></div><div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\"><img src=\"../../../assets/images/pexels-logo.png\" ng-click=\"vm.selImgBank(2)\" alt=\"Pexels\" style=\"width:100%;height:45px;padding:3px;border-style:solid;border-width:1px;border-color:{{vm.pexels ? \'black\':\'white\'}}\"><div class=\"text-center\"><a href=\"https://www.pexels.com/\">Visit Pexels</a></div></div><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div></div><div><br><label><strong>Image Query:</strong></label><div class=\"input-group\" style=\"padding-bottom:10px\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter what to search for an image, i.e. taco\" ng-model=\"vm.imageQuery\"> <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" ng-click=\"vm.getImages()\" type=\"button\">Search Images</button></span></div><div class=\"text-center\"><div class=\"btn-group\"><button class=\"btn btn-default\" ng-click=\"vm.prevImg()\">&nbsp&nbspPrev&nbsp&nbsp</button> <button class=\"btn btn-default\" ng-click=\"vm.nextImg()\">&nbsp&nbspNext&nbsp&nbsp</button> <button class=\"btn btn-default\" ng-click=\"vm.selectImg()\">Select Image</button></div></div></div><br><div><label><strong>Select Color Design:</strong></label><div class=\"container\"><div class=\"row\"><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(1)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c1sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:brown\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(2)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c2sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#4682b4\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(3)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c3sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#008080\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(4)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c4sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:gray\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(5)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c5sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#a3297a\"></div></div><div class=\"col-xs-2 col-sm-1 col-md-1 col-lg-1\" ng-click=\"vm.csel(6)\" ng-attr-style=\"padding:15px;border-style:solid;border-width:1px;border-color:{{vm.c6sel ? \'black\':\'white\'}};\"><div style=\"height:30px;background-color:#c68c53\"></div></div><div class=\"hidden-xs col-sm-3 col-md-3 col-lg-3\"></div></div><div class=\"row\" style=\"padding-top:10px\"><div class=\"text-right col-xs-6\"><label>Shade Factor:</label></div><div class=\"btn-group col-xs-6\"><button class=\"btn btn-primary\" ng-click=\"vm.minusShade()\">&nbsp&nbsp<i class=\"fa fa-minus\"></i>&nbsp&nbsp</button> <button class=\"btn btn-primary\" ng-click=\"vm.plusShade()\">&nbsp&nbsp<i class=\"fa fa-plus\"></i>&nbsp&nbsp</button></div></div></div></div><br><label><strong>Title:</strong></label> <input class=\"form-control\" ng-model=\"vm.rankTitle\" type=\"text\" placeholder=\"{{vm.rankTitle}}\"> <label><strong>Question:</strong></label> <input class=\"form-control\" ng-model=\"vm.question\" type=\"text\" placeholder=\"{{vm.question}}\"> <label><strong>Tags:</strong></label> <input class=\"form-control\" ng-model=\"vm.tags\" type=\"text\" placeholder=\"{{vm.tags}}\"> <label><strong>Keywords:</strong></label> <input class=\"form-control\" ng-model=\"vm.keywords\" type=\"text\" placeholder=\"{{vm.keywords}}\"> <label><strong>AnswerTags:</strong></label> <input class=\"form-control\" ng-model=\"vm.answertags\" type=\"text\" placeholder=\"{{vm.answertags}}\"> <label><strong>IsAtomic:</strong></label> <input class=\"form-control\" ng-model=\"vm.isatomic\" type=\"text\" placeholder=\"{{vm.isatomic}}\"> <label><strong>Category-Strings:</strong></label> <input class=\"form-control\" ng-model=\"vm.catstr\" type=\"text\" placeholder=\"{{vm.catstr}}\"> <label><strong>Type:</strong></label> <input class=\"form-control\" ng-model=\"vm.type\" bs-typeahead=\"\" type=\"text\" placeholder=\"{{vm.type}}\" bs-options=\"c for c in vm.typeList\"> <label><strong>fimage:</strong></label> <input class=\"form-control\" ng-model=\"vm.image\" type=\"text\" placeholder=\"{{vm.image}}\"> <label><strong>isMP Flag:</strong></label> <input class=\"form-control\" ng-model=\"vm.ismp\" type=\"text\" placeholder=\"{{vm.ismp}}\"> <label><strong>Scope:</strong></label> <input class=\"form-control\" ng-model=\"vm.scope\" type=\"text\" placeholder=\"{{vm.scope}}\"><br><div class=\"form-group text-right\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.goBack()\">Cancel</button> <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.goEdit()\">Edit</button> <button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.goDelete()\">Delete</button></div><br></div>");
$templateCache.put("app/rank/Partials2/match.html","<div class=\"well-rank\" ng-if=\"vm.nsm\" style=\"margin:0px;\"><h2 class=\"sub-header\">{{vm.table.title}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h2></div><div class=\"well-rank\" ng-if=\"vm.sm\" style=\"margin:0px;\"><h3 class=\"sub-header\">{{vm.table.title}} <span class=\"nomargin\"><button type=\"button\" class=\"glyphicon glyphicon-remove pull-right\" style=\"margin:0px;padding:0px;border:0px;background-color:#006dcc;color:#002699;font-size:medium;\" ng-click=\"vm.closeRank()\"></button></span></h3></div><h3>{{vm.table.question}}</h3><div class=\"form-group text-center\"><div class=\"well well-dark\">Rank match <strong>{{vm.GP}}</strong> of <strong>{{vm.Tot}}</strong></div></div><div class=\"row\"><div class=\"col-xs-6 col-md-6 col-lg-6\"><div class=\"well well-light\" ng-click=\"vm.selectAnswer(1)\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><span ng-repeat=\"f in vm.fields | filter:(f.isrequired=true)\">{{(f.name == \"name\" && vm.answer1.name) ? vm.answer1.name : \"\"}} {{(f.name == \"cityarea\" && vm.answer1.cityarea) ? \" - \"+ vm.answer1.cityarea : \"\"}}</span></div><img class=\"displayed\" src=\"{{vm.answer1.imageurl}}\" ng-click=\"vm.selectAnswer(1)\" style=\"width:100%;max-height:300px\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><div class=\"container-answer\" style=\"width:100%; height:auto;\" ng-click=\"vm.selectAnswer(1)\" ng-show=\"{{vm.type == \'Short-Phrase\'}}\"><br><h2 style=\"text-align:center\"><strong>{{vm.answer1.name}}</strong></h2><br><h4 style=\"text-align:center\">{{vm.answer1.addinfo}}</h4></div></div><div class=\"col-xs-6 col-md-6 col-lg-6\"><div class=\"well well-light\" ng-click=\"vm.selectAnswer(2)\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><span ng-repeat=\"f in vm.fields | filter:(f.isrequired=true)\">{{(f.name == \"name\" && vm.answer2.name) ? vm.answer2.name : \"\"}} {{(f.name == \"cityarea\" && vm.answer2.cityarea) ? \" - \"+ vm.answer2.cityarea : \"\"}}</span></div><img class=\"displayed\" src=\"{{vm.answer2.imageurl}}\" ng-click=\"vm.selectAnswer(2)\" style=\"width:100%;max-height:300px\" ng-show=\"{{vm.type != \'Short-Phrase\'}}\"><div class=\"container-answer\" style=\"width:100%; height:auto;\" ng-click=\"vm.selectAnswer(2)\" ng-show=\"{{vm.type == \'Short-Phrase\'}}\"><br><h2 style=\"text-align:center\"><strong>{{vm.answer2.name}}</strong></h2><br><h4 style=\"text-align:center\">{{vm.answer2.addinfo}}</h4></div></div></div><br><div class=\"row\"><div class=\"form-group text-left col-xs-6 col-md-6 col-lg-6\"><button ng-click=\"vm.answerDetail(1)\" type=\"button\" class=\"btn btn-success\">Details</button></div><div class=\"form-group text-right col-xs-6 col-md-6 col-lg-6\"><button ng-click=\"vm.answerDetail(2)\" type=\"button\" class=\"btn btn-success\">Details</button></div></div><div class=\"form-group text-center\"><button ng-click=\"vm.skipMatch()\" type=\"button\" class=\"btn btn-default\">I don\'t know, Skip</button> <button ng-click=\"vm.rankSummary()\" type=\"button\" class=\"btn btn-danger\">Stop</button></div><br>");
$templateCache.put("app/promoters/Partials/promote.html","<br><div class=\"container\"><h2>Become a Rank-X Promoter</h2><br><p class=\"text-left\">Thank you for your interest in becoming a Rank-X promotor. Please read carefully the information below.</p><div class=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\" ng-click=\"vm.show(1)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseOne\">What is Rank-X?</a></h3></div><div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" ng-show=\"vm.showOne\"><div class=\"card-block\"><p class=\"text-left\">Rank-X is a San Diego based company with a web application designed to create interactive content in the forms of rankings, lists and opinions. We like to focus on things on our city but also cover general topics. Our goal is to be the best source of information for the best services, food, events and things happening around our city in a clean and elegant way. In addition to best deals and specials that different businesses offer. If you have not already done so, please take a time to look at the website. <span><a href=\"/#!/home\">Click here</a></span></p></div></div></div><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingTwo\" ng-click=\"vm.show(2)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">What does Rank-X sells?</a></h3></div><div id=\"collapseTwo\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" ng-show=\"vm.showTwo\"><div class=\"card-block\"><p class=\"text-left\">Rank-X sells premium memberships to businesses and brands that wish to stand out from others, and to those that wish to promote their specials and promotions with users.</p><div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><img src=\"/assets/images/promote_img1.jpg\" style=\"width:100%; height:auto; border-style:solid;border-width:3px; border-color:lightgray\"><p style=\"margin-top:5px\">All of the content is generated by lists.</p></div><div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><img src=\"/assets/images/promote_img2.jpg\" style=\"width:100%; height:auto; border-style:solid;border-width:3px; border-color:lightgray\"><p style=\"margin-top:5px\">When content is presented, a far right column is saved for specials. <i>Premium Business</i> (Demo Restaurant 1) gets highlighted with a short description of the current special.</p></div><div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><img src=\"/assets/images/promote_img3.jpg\" style=\"width:100%; height:auto; border-style:solid;border-width:3px; border-color:lightgray\"><p style=\"margin-top:5px\">Inside an Establishment detail, a <i>Premium Business</i> can create detail boxes to advertise their specials.</p></div><div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\"><img src=\"/assets/images/promote_img4.jpg\" style=\"width:100%; height:auto; border-style:solid;border-width:3px; border-color:lightgray\"><p style=\"margin-top:5px\">Each special can contain an image that can be displayed. Images can contain <strong>coupons</strong>, <strong>flyers</strong>, <strong>bar codes</strong>, etc. It is up to the business the content of the image to be displayed.</p></div></div><p class=\"text-left\"><i>Premium Business</i> can edit and control real-time the specials and promotions that are shown.</p></div></div></div><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingThree\" ng-click=\"vm.show(3)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseOne\">How much do businesses pay for Premium Membership?</a></h3></div><div id=\"collapseThree\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingThree\" ng-show=\"vm.showThree\"><div class=\"card-block\"><p class=\"text-left\">Premium memberships for Rank-X cost $99 per month. When using a promo code businneses get 60 days free trial.</p></div></div></div><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingFour\" ng-click=\"vm.show(4)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseFour\">What does it mean to be a Rank-X Promotor?</a></h3></div><div id=\"collapseFour\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingFour\" ng-show=\"vm.showFour\"><div class=\"card-block\"><p class=\"text-left\">Rank-X promotors are people working as independent contractors that help us promote, advertise and give feedback about the application. The success of Rank-X will depend strongly on its ability to spread the word out about its exsitance to businesses and to get business to subscribe to Rank-X to advertise their specials and promotions. Thus, Rank-X promotors have three basic responsibilities.</p><p class=\"text-left\"><strong>1. Become familiar with the app.</strong> Rank-X Promotors are expected to understand the working of the application, to participate regularly in the rankings, add content and do their best so the content of the application is always engaging, accurate and useful.</p><p class=\"text-left\"><strong>2. Market the application.</strong> Rank-X Promotors are expected to connect with business owners in their area show the value that Rank-X can have in their bussiness. The amount of money earned by a Rank-X promoter will be directly proportional to the amount of businesses they get to sign up.</p><p class=\"text-left\"><strong>3. Provide constant Feedback.</strong> Rank-X Promotors are expected to provide feedback of the workings of the app so it can be continually improved. By keeping the application running smoothly, with help customer retention and</p></div></div></div><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingFive\" ng-click=\"vm.show(5)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseFive\">What are the benefits of becoming a Rank-X Promotor?</a></h3></div><div id=\"collapseFive\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingFive\" ng-show=\"vm.showFive\"><div class=\"card-block\"><p class=\"text-left\">All payments to promotors are strictly based on commissions. Rank-X offers lasting commissions on all accounts that a Rank-X promotor closes. As long as the account that the promoter closed are active, the Promotor will continue receiving commission. There is no limit on how much money a promotor can make.</p><p class=\"text-left\">Consider the example of a Rank-X promoter that closes one business per month and receives $30 commission per business (actual commission might vary). Promoter sign ups come with a 60 days free trial for that business. After free trial expires, and business start paying subscription, Rank-X promoter will get paid commission for that account as shown in the table below.</p><table class=\"table table-hover cursor\"><thead><tr><th align=\"middle\">Month</th><th align=\"middle\">Accnt 1</th><th align=\"middle\">Accnt 2</th><th align=\"middle\">Accnt 3</th><th align=\"middle\">Commission</th></tr></thead><tbody align=\"middle\"><tr><td>1st</td><td>On trial</td><td>-</td><td>-</td><td>$0.00</td></tr><tr><td>2nd</td><td>On trial</td><td>On trial</td><td>-</td><td>$0.00</td></tr><tr><td>3rd</td><td>Active</td><td>On trial</td><td>On trial</td><td>$30.00</td></tr><tr><td>4th</td><td>Active</td><td>Active</td><td>On trial</td><td>$60.00</td></tr><tr><td>5th</td><td>Active</td><td>Active</td><td>Active</td><td>$90.00</td></tr></tbody></table></div></div></div><div class-=\"\" \"card\"=\"\"><div class=\"card-header\" role=\"tab\" id=\"headingSix\" ng-click=\"vm.show(6)\"><h3 class=\"mb-0\" style=\"background-color:#b3b3b3;padding:5px\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"true\" aria-controls=\"collapseOne\">How do I become a Rank-X promoter?</a></h3></div><div id=\"collapseSix\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingSix\" ng-show=\"vm.showSix\"><div class=\"card-block\"><p class=\"text-left\">Becoming a Rank-X promoter is very simple. Only requirement is that you must have an active Facebook account. There is no cost to becoming a promoter, its completely free. To begin, login to Rank-X using your Facebook account. Once you are logged in, click the \'Promote\' link at the bottom of the page. It will redirect you to the Promoter Console, where you will be asked to fill in a form and you will get your Promoter Code right away.</p></div></div></div><footer class=\"footer\"><div class=\"container\"><p class=\"text-muted\">Rank-X is property of Rank-X LLC. San Diego, CA - 2016</p></div></footer></div></div>");
$templateCache.put("app/promoters/Partials/promoterconsole.html","<div id=\"veil\" ng-hide=\"vm.dataReady\"></div><div id=\"feedLoading\" ng-hide=\"vm.dataReady\"><div style=\"text-align: center\" ng-if=\"!vm.dataReady\"><div><img src=\"/assets/images/loading.gif\" class=\"img\" style=\"width:50px;height:50px\"></div><p style=\"font-size:large\">loading your accounts...</p></div></div><div ng-if=\"vm.dataReady\"><div class=\"container\"><h3>Promoter Console</h3><div ng-if=\"vm.userIsPromoter\"><h4 align=\"center\" style=\"background-color:#b3b3b3;padding:5px\">Account Information</h4><div ng-if=\"!vm.promoter.stripeid\" style=\"padding: 10px;background-color: indianred;border-radius: 10px;text-align: center;margin-bottom:10px\">You should link your stripe account to get payed. <a class=\"btn btn-primary\" ng-click=\"vm.connectStripe()\">Connect with Stripe</a></div><div ng-if=\"vm.notifications.length != 0\"><notification-block notifications=\"vm.notifications\"></notification-block></div><p class=\"text-left\"><strong>First Name:</strong>&nbsp{{vm.promoter.firstname}}</p><p class=\"text-left\"><strong>Last Name:</strong>&nbsp{{vm.promoter.lastname}}</p><p class=\"text-left\"><strong>Email:</strong>&nbsp{{vm.promoter.email}}</p><p class=\"text-left\"><strong>Address:</strong>&nbsp{{vm.promoter.address}}</p><p class=\"text-left\"><strong>Phone Number:</strong>&nbsp{{vm.promoter.phone}}</p><p class=\"text-left\"><strong>Promoter Code:</strong>&nbsp{{vm.promoter.code}}</p><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goEdit()\" class=\"btn btn-default\">Edit</button></div><h4 align=\"center\" style=\"background-color:#b3b3b3;padding:5px\">Accounts</h4><table class=\"table\" ng-if=\"!vm.noAns&&vm.overview\"><tbody><thead style=\"border-style:none;\"><tr><th class=\"text-center\">Business Name</th><th class=\"text-center\">Status</th><th class=\"text-center\">Commission (after trial)</th></tr></thead><tr ng-repeat=\"x in vm.myaccnts\" style=\"cursor:pointer;\"><td ng-click=\"vm.gotoanswer(x.answerObj)\">{{x.name}}</td><td align=\"middle\" ng-attr-style=\"{{x.style}}\" ng-click=\"vm.gotomanage(x)\">{{x.status}}</td><td ng-click=\"vm.gotomanage(x)\" style=\"text-align:right\">${{x.totalCommission}}</td></tr></tbody></table><div ng-if=\"vm.manageview\"><p class=\"text-left\"><strong>Business Name:</strong>&nbsp{{vm.business.answerObj.name}}</p><p class=\"text-left\"><strong>Email:</strong>&nbsp{{vm.business.email}}</p><p class=\"text-left\"><strong>Owner/Contact Name:</strong>&nbsp{{vm.business.username}}</p><p class=\"text-left\"><strong>Last Name:</strong>&nbsp{{vm.promoter.lastname}}</p><p class=\"text-left\"><strong>Status:</strong><span align=\"middle\" ng-attr-style=\"{{x.style}}\">{{x.business.status}}</span></p><p class=\"text-left\"><table class=\"table\" ng-if=\"vm.business.status==\'Active\'\"><tbody><thead style=\"border-style:none;\"><tr><th style=\"width:45%\" text-align=\"center\">Subscription</th><th style=\"width:15%\" text-align=\"center\">Commission</th></tr></thead><tr ng-if=\"vm.business.ispremium\" style=\"cursor:pointer;\"><td style=\"width:45%\">Premium Membership</td><td style=\"width:15%\">${{vm.business.price*vm.STRIPE_COMMISSION_PERCENTAGE}}</td></tr><tr ng-if=\"vm.business.hasranks\" style=\"cursor:pointer;\"><td style=\"width:45%\">{{vm.business.ranksqty}} Custom Ranks</td><td style=\"width:15%\">${{vm.business.ranksqty*vm.CUSTOM_RANK_PRICE*vm.STRIPE_COMMISSION_PERCENTAGE}}</td></tr><tr><td style=\"width:45%\">Total</td><td style=\"width:15%; background-color: darkgray;\">${{vm.business.totalCommission}}</td></tr></tbody></table></p><p class=\"text-left\" ng-if=\"vm.business.status.indexOf(\'On Trial\') != -1\">Will be active from {{vm.business.discountEndDate}}.</p><p class=\"text-left\"><strong>Address:</strong>&nbsp{{vm.promoter.address}}</p><p class=\"text-left\"><strong>Phone Number:</strong>&nbsp{{vm.promoter.phone}}</p></div><div ng-if=\"vm.noAns\"><br><p>No businesses have signed up using your promoter code. For tips and suggestions on how to get businesses to sign up using your promoter code <a href=\"\" ng-click=\"vm.gotoPromotePage()\">click here</a>.</p></div></div><div ng-if=\"!vm.userIsPromoter\"><p>You are currently not registered to be a Promoter. Rank-X promoters help spread the word out about the app to local businesses, as well as monitoring the accuracy of content of the application. In exchange, promoters get paid monthly commissions on all businesses accounts they bring to Rank-X.</p><div class=\"text-center\"><button type=\"button\" ng-click=\"vm.goSignup()\" class=\"btn btn-success\">Sign Up</button> <button type=\"button\" ng-click=\"vm.gotoPromotePage()\" class=\"btn btn-primary\">Learn More</button></div></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div></div></div>");
$templateCache.put("app/promoters/Partials/promotersignup.html","<div class=\"container\"><h3>Promoter Sign Up</h3><br><form class=\"form-horizontal\" role=\"form\" name=\"answerForm\"><div class=\"form-group\"><label class=\"control-label capitalize\" style=\"padding-left:10px\">First Name:</label> <input class=\"form-control\" ng-model=\"vm.promoter.firstname\" placeholder=\"{{vm.promoter.firstname}}\" style=\"width:94%;margin-left:10px;margin-right:10px;\"> <label class=\"control-label capitalize\" style=\"padding-left:10px\">Last Name:</label> <input class=\"form-control\" ng-model=\"vm.promoter.lastname\" placeholder=\"{{vm.promoter.lastname}}\" style=\"width:94%;margin-left:10px;margin-right:10px;\"> <label class=\"control-label capitalize\" style=\"padding-left:10px\">Email:</label> <input class=\"form-control\" ng-model=\"vm.promoter.email\" placeholder=\"Your email address\" style=\"width:94%;margin-left:10px;margin-right:10px;\"> <label class=\"control-label capitalize\" style=\"padding-left:10px\">Phone:</label> <input class=\"form-control\" ng-model=\"vm.promoter.phone\" placeholder=\"123-123-1234\" style=\"width:94%;margin-left:10px;margin-right:10px;\"> <label class=\"control-label capitalize\" style=\"padding-left:10px\">Address:</label> <input class=\"form-control\" ng-model=\"vm.promoter.address\" placeholder=\"Your address\" style=\"width:94%;margin-left:10px;margin-right:10px;\"></div><label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"vm.acceptTOS\" value=\"\">I have read and understood the <a ng-click=\"vm.showTOSPromotersDlg()\" target=\"_blank\">Terms of Service</a></label></form><br><div class=\"row\"><div class=\"col-xs-3 col-sm-3 col-md-2\"><div class=\"text-right\"><button class=\"btn btn-primary\" ng-click=\"vm.getcode()\">Get Code</button></div></div><div class=\"col-xs-9 col-sm-9 col-md-10\"><h3 style=\"color:blue; margin:2px\">{{vm.code}}</h3></div><br></div><br><div class=\"text-center\"><button class=\"btn btn-success\" ng-click=\"vm.submit()\" ng-class=\"vm.acceptTOS ? \'\' : \'disabled\'\">Submit</button></div><br></div>");
$templateCache.put("app/user/Partials/favs.html","<ul class=\"nav nav-tabs\"><li class=\"active\"><a data-toggle=\"tab\" href=\"#myfavs\">My Favorites</a></li><li><a data-toggle=\"tab\" href=\"#myfriends\">My Friends</a></li></ul><div class=\"tab-content\"><div id=\"myfavs\" class=\"tab-pane fade in active\"><div ng-controller=\"myfavs as vm\"><h3>My Favorites</h3><table class=\"table\" ng-if=\"vm.answerExist2\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\">{{vm.headline2}}</th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mylifestyleans | limitTo:vm.maxRes2\" ng-click=\"vm.answerDetail(2,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(2)\" ng-if=\"vm.cb2gt5\">&lt;&lt;{{vm.btext2}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist1\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\">{{vm.headline1}}</th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myfoodans | limitTo:vm.maxRes1\" ng-click=\"vm.answerDetail(1,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(1)\" ng-if=\"vm.cb1gt5\">&lt;&lt;{{vm.btext1}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist3\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\">{{vm.headline3}}</th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myservicesans | limitTo:vm.maxRes3\" ng-click=\"vm.answerDetail(3,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(3)\" ng-if=\"vm.cb3gt5\">&lt;&lt;{{vm.btext3}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist4\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\">{{vm.headline4}}</th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myhealthans | limitTo:vm.maxRes4\" ng-click=\"vm.answerDetail(4,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(4)\" ng-if=\"vm.cb4gt5\">&lt;&lt;{{vm.btext4}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist5\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\">{{vm.headline5}}</th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mybeautyans | limitTo:vm.maxRes5\" ng-click=\"vm.answerDetail(5,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(5)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext5}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist6\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\">{{vm.headline6}}</th><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mysocialans | limitTo:vm.maxRes6\" ng-click=\"vm.answerDetail(6,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(6)\" ng-if=\"vm.cb6gt5\">&lt;&lt;{{vm.btext6}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist7\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\">{{vm.headline7}}</th><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myfamilyans | limitTo:vm.maxRes7\" ng-click=\"vm.answerDetail(7,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(7)\" ng-if=\"vm.cb7gt5\">&lt;&lt;{{vm.btext7}}&gt;&gt;</p><div ng-if=\"vm.noAns\"><br><p>You have not endorsed any Establishments yet. Places that you endorse will show up here so you can have quick access to all their specials and promotions.</p></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div></div></div><div id=\"myfriends\" class=\"tab-pane fade\"><div ng-controller=\"myfriends as vm\"><h3>My Friends\' Favorites</h3><table class=\"table\" ng-if=\"vm.answerExist2\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\">{{vm.headline2}}</th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.lifestyleans | limitTo:vm.maxRes2 track by $index\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(2,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(2)\" ng-if=\"vm.cb2gt5\">&lt;&lt;{{vm.btext2}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist1\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\">{{vm.headline1}}</th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.foodans | limitTo:vm.maxRes1 track by $index\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(1,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(1)\" ng-if=\"vm.cb1gt5\">&lt;&lt;{{vm.btext1}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist3\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\">{{vm.headline3}}</th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.servicesans | limitTo:vm.maxRes3 track by $index\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(3,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(3)\" ng-if=\"vm.cb3gt5\">&lt;&lt;{{vm.btext3}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist4\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\">{{vm.headline4}}</th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.healthans | limitTo:vm.maxRes4 track by $index\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(4,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(4)\" ng-if=\"vm.cb4gt5\">&lt;&lt;{{vm.btext4}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist5\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\">{{vm.headline5}}</th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.beautyans | limitTo:vm.maxRes5 track by $index\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(5,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(5)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext5}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist6\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\">{{vm.headline6}}</th><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.socialans | limitTo:vm.maxRes6\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(6,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(6)\" ng-if=\"vm.cb6gt5\">&lt;&lt;{{vm.btext6}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist7\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\">{{vm.headline7}}</th><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\"></th><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.familyans | limitTo:vm.maxRes7\" style=\"cursor:pointer;\"><td style=\"width:50%;line-height: 35px\" ng-click=\"vm.answerDetail(7,x)\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td><td><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs | limitTo:1\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div></td><td style=\"line-height: 35px\"><div ng-show=\"x.userObjs.length > 1\" style=\"display: inline\"><span class=\"badge btn-primary\" ng-click=\"vm.showAllFriendsList(x.userObjs, x.name)\">{{x.userObjs.length}}</span></div></td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(7)\" ng-if=\"vm.cb7gt5\">&lt;&lt;{{vm.btext7}}&gt;&gt;</p><div ng-if=\"vm.noAns\"><br><p>You have not endorsed any Establishments yet. Places that you endorse will show up here so you can have quick access to all their specials and promotions.</p></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div></div></div></div>");
$templateCache.put("app/user/Partials/myfavs.html","<h3>My Favorites</h3><table class=\"table\" ng-if=\"vm.answerExist2\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\">{{vm.headline2}}</th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mylifestyleans | limitTo:vm.maxRes2\" ng-click=\"vm.answerDetail(2,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(2)\" ng-if=\"vm.cb2gt5\">&lt;&lt;{{vm.btext2}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist1\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\">{{vm.headline1}}</th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myfoodans | limitTo:vm.maxRes1\" ng-click=\"vm.answerDetail(1,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(1)\" ng-if=\"vm.cb1gt5\">&lt;&lt;{{vm.btext1}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist3\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\">{{vm.headline3}}</th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myservicesans | limitTo:vm.maxRes3\" ng-click=\"vm.answerDetail(3,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(3)\" ng-if=\"vm.cb3gt5\">&lt;&lt;{{vm.btext3}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist4\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\">{{vm.headline4}}</th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myhealthans | limitTo:vm.maxRes4\" ng-click=\"vm.answerDetail(4,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(4)\" ng-if=\"vm.cb4gt5\">&lt;&lt;{{vm.btext4}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist5\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\">{{vm.headline5}}</th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mybeautyans | limitTo:vm.maxRes5\" ng-click=\"vm.answerDetail(5,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(5)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext5}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist6\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\">{{vm.headline6}}</th><th ng-attr-style=\"background-color:{{vm.bgc6}};color:{{vm.fc6}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.mysocialans | limitTo:vm.maxRes6\" ng-click=\"vm.answerDetail(6,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(6)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext6}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist7\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\">{{vm.headline7}}</th><th ng-attr-style=\"background-color:{{vm.bgc7}};color:{{vm.fc7}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.myfamilyans | limitTo:vm.maxRes7\" ng-click=\"vm.answerDetail(7,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\">{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(7)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext7}}&gt;&gt;</p><div ng-if=\"vm.noAns\"><br><p>You have not endorsed any Establishments yet. Places that you endorse will show up here so you can have quick access to all their specials and promotions.</p></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div>");
$templateCache.put("app/user/Partials/myfriends.html","<h3>My Favorites</h3><table class=\"table\" ng-if=\"vm.answerExist2\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\">{{vm.headline2}}</th><th ng-attr-style=\"background-color:{{vm.bgc2}};color:{{vm.fc2}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.lifestyleans | limitTo:vm.maxRes2 track by $index\" ng-click=\"vm.answerDetail(2,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\"><div class=\"profile-avatar-wrapper media-left\" align=\"middle\" ng-repeat=\"userObj in x.userObjs\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div>{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(2)\" ng-if=\"vm.cb2gt5\">&lt;&lt;{{vm.btext2}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist1\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\">{{vm.headline1}}</th><th ng-attr-style=\"background-color:{{vm.bgc1}};color:{{vm.fc1}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.foodans | limitTo:vm.maxRes1 track by $index\" ng-click=\"vm.answerDetail(1,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\"><div class=\"profile-avatar-wrapper media-left\" ng-repeat=\"userObj in x.userObjs\" align=\"middle\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div>{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(1)\" ng-if=\"vm.cb1gt5\">&lt;&lt;{{vm.btext1}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist3\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\">{{vm.headline3}}</th><th ng-attr-style=\"background-color:{{vm.bgc3}};color:{{vm.fc3}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.servicesans | limitTo:vm.maxRes3 track by $index\" ng-click=\"vm.answerDetail(3,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\"><div class=\"profile-avatar-wrapper media-left\" align=\"middle\" ng-repeat=\"userObj in x.userObjs\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div>{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(3)\" ng-if=\"vm.cb3gt5\">&lt;&lt;{{vm.btext3}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist4\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\">{{vm.headline4}}</th><th ng-attr-style=\"background-color:{{vm.bgc4}};color:{{vm.fc4}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.healthans | limitTo:vm.maxRes4 track by $index\" ng-click=\"vm.answerDetail(4,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\"><div class=\"profile-avatar-wrapper media-left\" align=\"middle\" ng-repeat=\"userObj in x.userObjs\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div>{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(4)\" ng-if=\"vm.cb4gt5\">&lt;&lt;{{vm.btext4}}&gt;&gt;</p><table class=\"table\" ng-if=\"vm.answerExist5\"><tbody><thead style=\"border-style:none;\"><tr><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\">{{vm.headline5}}</th><th ng-attr-style=\"background-color:{{vm.bgc5}};color:{{vm.fc5}};width:50%;\"></th></tr></thead><tr ng-repeat=\"x in vm.beautyans | limitTo:vm.maxRes5 track by $index\" ng-click=\"vm.answerDetail(5,x)\" style=\"cursor:pointer;\"><td style=\"width:50%;\"><div class=\"profile-avatar-wrapper media-left\" align=\"middle\" ng-repeat=\"userObj in x.userObjs\" style=\"display: inline\"><img ng-src=\"{{userObj.picture.data.url}}\" class=\"img-responsive img-circle profile-avatar\" style=\"display: inline\"></div>{{x.name}}</td><td ng-attr-style=\"background-color:{{x.sp_bc}};color:{{x.sp_fc}}\">{{x.sp_title}}</td></tr></tbody></table><p class=\"text-right\" style=\"color:blue;\" ng-click=\"vm.seeMore(5)\" ng-if=\"vm.cb5gt5\">&lt;&lt;{{vm.btext5}}&gt;&gt;</p><div ng-if=\"vm.noAns\"><br><p>You have not endorsed any Establishments yet. Places that you endorse will show up here so you can have quick access to all their specials and promotions.</p></div><div class=\"text-right\" role=\"group\"><button type=\"button\" ng-click=\"vm.goBack()\" class=\"btn btn-default\">Back</button></div>");}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRlbXBsYXRlQ2FjaGVIdG1sMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9hZG1pbi9QYXJ0aWFscy9hZG1pbi5odG1sXCIsXCI8ZGl2IHVpLXZpZXc9XFxcIm5hdmJhclxcXCI+PC9kaXY+PGJyPjxkaXYgbmctaWY9XFxcIiF2bS5kYXRhcmVhZHlcXFwiPjxoMj5QbGVhc2Ugd2FpdCwgbG9hZGluZyBhbGwgYWRtaW4gZGF0YS4uLjwvaDI+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uZGF0YXJlYWR5XFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgbmctaWY9XFxcInZtLmlzQWRtaW5cXFwiPjxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHt7dm0uc2VsS2V5d29yZHN9fVxcXCIgbmctY2xpY2s9XFxcInZtLmtleXdvcmRzKClcXFwiPlNlYXJjaGVkLUtleXdvcmQ8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHt7dm0uc2VsVmlld3N9fVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdzKClcXFwiPlJhbmtpbmctQW5zd2VycyBWaWV3czwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxGbGFnc319XFxcIiBuZy1jbGljaz1cXFwidm0uZmxhZ3MoKVxcXCI+QW5zd2VyIEZsYWdzPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCB7e3ZtLnNlbEFkZFJhbmtpbmd9fVxcXCIgbmctY2xpY2s9XFxcInZtLmFkZFJhbmsoKVxcXCI+QWRkIFJhbmtpbmc8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IHt7dm0uc2VsRGJNYWludH19XFxcIiBuZy1jbGljaz1cXFwidm0uZGJNYWludCgpXFxcIj5kQiBNYWludDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxRdWVyeX19XFxcIiBuZy1jbGljaz1cXFwidm0uZGJRdWVyeSgpXFxcIj5RdWVyeTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxTaWJMb2NzfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaWJMb2NzKClcXFwiPlNpYmJsaW5nIExvY2F0aW9uczwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxGb29kUmFua3N9fVxcXCIgbmctY2xpY2s9XFxcInZtLmZvb2RyYW5rcygpXFxcIj5Gb29kIFJhbmtzPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCB7e3ZtLnNlbFBheW1lbnR9fVxcXCIgbmctY2xpY2s9XFxcInZtLnBheW1lbnQoKVxcXCI+UGF5bWVudDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxQbGFufX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5wbGFuKClcXFwiPlBsYW48L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uYml6QWRtaW4oKVxcXCI+QnVzaW5lc3M8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uY2xlYW5EQigpXFxcIj5DbGVhbiBEQjwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5tb2RJbWFnZXMoKVxcXCI+TW9kZXJhdGUgSW1hZ2VzPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLnN0YXRpY1BhZ2VzKClcXFwiPlN0YXRpYyBQYWdlczwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxMb2NhdGlvbnN9fVxcXCIgbmctY2xpY2s9XFxcInZtLmdvbG9jYXRpb25zKClcXFwiPkxvY2F0aW9uczwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxzaXRlbWFwfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb3NpdGVtYXAoKVxcXCI+U2l0ZW1hcDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgbmctY2xpY2s9XFxcInZtLmFwcGx5UnVsZSgpXFxcIj5BcHBseSBSdWxlPC9idXR0b24+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uZGF0YUFkbWluXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxRdWVyeX19XFxcIiBuZy1jbGljaz1cXFwidm0uZGJRdWVyeSgpXFxcIj5RdWVyeTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQge3t2bS5zZWxTaWJMb2NzfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaWJMb2NzKClcXFwiPlNpYmJsaW5nIExvY2F0aW9uczwvYnV0dG9uPjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLm1vZEFkbWluXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5tb2RJbWFnZXMoKVxcXCI+TW9kZXJhdGUgSW1hZ2VzPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLnN0YXRpY1BhZ2VzKClcXFwiPlN0YXRpYyBQYWdlczwvYnV0dG9uPjwvZGl2PjwvZGl2Pjxicj48YnI+PGRpdiB1aS12aWV3PVxcXCJcXFwiPjwvZGl2Pjxicj48YnI+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2Fuc3dlci9QYXJ0aWFsczIvYWRkQW5zd2VyLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcIndlbGwtcmFua1xcXCIgbmctaWY9XFxcInZtLm5zbVxcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7XFxcIj48aDIgY2xhc3M9XFxcInN1Yi1oZWFkZXJcXFwiPnt7dm0ucmFua2luZ319IDxzcGFuIGNsYXNzPVxcXCJub21hcmdpblxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBwdWxsLXJpZ2h0XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtwYWRkaW5nOjBweDtib3JkZXI6MHB4O2JhY2tncm91bmQtY29sb3I6IzAwNmRjYztjb2xvcjojMDAyNjk5O2ZvbnQtc2l6ZTptZWRpdW07XFxcIiBuZy1jbGljaz1cXFwidm0uY2xvc2VSYW5rKClcXFwiPjwvYnV0dG9uPjwvc3Bhbj48L2gyPjwvZGl2PjxkaXYgY2xhc3M9XFxcIndlbGwtcmFua1xcXCIgbmctaWY9XFxcInZtLnNtXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxoMyBjbGFzcz1cXFwic3ViLWhlYWRlclxcXCI+e3t2bS5yYW5raW5nfX0gPHNwYW4gY2xhc3M9XFxcIm5vbWFyZ2luXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGNjO2NvbG9yOiMwMDI2OTk7Zm9udC1zaXplOm1lZGl1bTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PC9idXR0b24+PC9zcGFuPjwvaDM+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxoND4mbmJzcCZuYnNwQWRkIGEgbmV3IDxzcGFuIG5nLWlmPVxcXCJ2bS50eXBlID09IFxcJ0VzdGFibGlzaG1lbnRcXCdcXFwiPjxlbT5Fc3RhYmxpc2htZW50PC9lbT4gdG8gdGhpcyBsaXN0Ljwvc3Bhbj4gPHNwYW4gbmctaWY9XFxcInZtLnR5cGUgPT0gXFwnT3JnYW5pemF0aW9uXFwnXFxcIj48ZW0+T3JnYW5pemF0aW9uIG9yIENvbXBhbnk8L2VtPiB0byB0aGlzIGxpc3QuPC9zcGFuPiA8c3BhbiBuZy1pZj1cXFwidm0udHlwZSA9PSBcXCdQZXJzb25cXCdcXFwiPjxlbT5QZXJzb248L2VtPiB0byB0aGlzIGxpc3QuPC9zcGFuPiA8c3BhbiBuZy1pZj1cXFwidm0udHlwZSA9PSBcXCdQZXJzb25DdXN0XFwnXFxcIj48ZW0+UHJvZmVzc2lvbmFsPC9lbT4gdG8gdGhpcyBsaXN0Ljwvc3Bhbj4gPHNwYW4gbmctaWY9XFxcInZtLnR5cGUgPT0gXFwnUGxhY2VcXCdcXFwiPjxlbT5QbGFjZTwvZW0+IHRvIHRoaXMgbGlzdC48L3NwYW4+IDxzcGFuIG5nLWlmPVxcXCJ2bS50eXBlID09IFxcJ1Nob3J0LVBocmFzZVxcJ1xcXCI+PGVtPkFuc3dlcjwvZW0+IHRvIHRoaXMgbGlzdC48L3NwYW4+IDxzcGFuIG5nLWlmPVxcXCJ2bS50eXBlID09IFxcJ1RoaW5nXFwnXFxcIj48ZW0+SXRlbTwvZW0+IHRvIHRoaXMgbGlzdC48L3NwYW4+IDxzcGFuIG5nLWlmPVxcXCJ2bS50eXBlID09IFxcJ0V2ZW50XFwnXFxcIj48ZW0+RXZlbnQ8L2VtPiB0byB0aGlzIGxpc3QuPC9zcGFuPiA8c3BhbiBuZy1pZj1cXFwidm0udHlwZSA9PSBcXCdTaW1wbGVcXCdcXFwiPjxlbT5JdGVtPC9lbT4gdG8gdGhpcyBsaXN0Ljwvc3Bhbj48L2g0PjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxwIGNsYXNzPVxcXCJoaXdcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93SG93SXRXb3Jrc0RpYWxvZygpXFxcIj48dT5Ib3cgaXQgd29ya3M/PC91PjwvcD48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY29sLXNtLTEyIGNvbC1tZC03XFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuYW1lPVxcXCJhbnN3ZXJGb3JtXFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBuZy1yZXBlYXQ9XFxcInggaW4gdm0uZmllbGRzXFxcIj48bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY2FwaXRhbGl6ZVxcXCIgbmctaWY9XFxcIiF4Lm9ubHlieW93bmVyXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OjEwcHhcXFwiPnt7eC5pc3JlcXVpcmVkID8gXFwnKipcXCc6XFwnXFwnfX17e3gubGFiZWx9fTo8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIngudmFsXFxcIiBicy1vcHRpb25zPVxcXCJ7e3gub3B0c319XFxcIiBicy10eXBlYWhlYWQ9XFxcIlxcXCIgdHlwZT1cXFwie3t4LnRleHRzdHlsZX19XFxcIiBuZy1jaGFuZ2U9XFxcInZtLm9uU2VsZWN0KHgpXFxcIiBwbGFjZWhvbGRlcj1cXFwie3t4LmxhYmVsfX1cXFwiIG5nLWhpZGU9XFxcInt7eC5uYW1lPT1cXCdhZGRpbmZvXFwnfX1cXFwiIG5nLWlmPVxcXCIheC5vbmx5Ynlvd25lclxcXCIgc3R5bGU9XFxcIndpZHRoOjk0JTttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O1xcXCI+PHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ4LnZhbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7eC5sYWJlbH19XFxcIiBuZy1tb2RlbC1vcHRpb25zPVxcXCJ7ZGVib3VuY2U6IDI1MDB9XFxcIiBuZy1zaG93PVxcXCJ7e3gubmFtZT09XFwnYWRkaW5mb1xcJ319XFxcIiByb3dzPVxcXCIzXFxcIiBuZy1pZj1cXFwiIXgub25seWJ5b3duZXJcXFwiIGlkPVxcXCJ0ZXh0YXJlYTJcXFwiIHN0eWxlPVxcXCJ3aWR0aDo5NCU7bWFyZ2luLWxlZnQ6MTBweDttYXJnaW4tcmlnaHQ6MTBweDtcXFwiPjwvdGV4dGFyZWE+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgbmctaWY9XFxcInZtLnR5cGUgPT0gXFwnUGVyc29uXFwnXFxcIj48YnV0dG9uIG5nLWNsaWNrPVxcXCJ2bS5nZXRXaWtpKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiM1OTU5NTk7Ym9yZGVyLWNvbG9yOmJsYWNrXFxcIj5HZXQgZnJvbSBXaWtpcGVkaWE8L2J1dHRvbj48L2Rpdj48L2Zvcm0+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC01XFxcIiBuZy1pZj1cXFwiIXZtLnVzZXJJc093bmVyXFxcIj48ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dm0uaW1hZ2VVUkx9fVxcXCIgYWx0PVxcXCJ7e2ltYWdlLmVycm9yTG9hZGluZ319XFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTsgbWF4LWhlaWdodDozMDBweFxcXCI+IDxpbWcgbmctc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Bvd2VyZWRfYnlfZ29vZ2xlX29uX3doaXRlLnBuZ1xcXCIgbmctaWY9XFxcInZtLnR5cGUhPVxcJ1BlcnNvbkN1c3RcXCdcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcIlxcXCIgbmctc2hvdz1cXFwie3t2bS50eXBlID09IFxcJ1Nob3J0LVBocmFzZVxcJ319XFxcIj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItYW5zd2VyXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0b1xcXCIgbmctaWY9XFxcInZtLnR5cGUgPT0gXFwnU2hvcnQtUGhyYXNlXFwnXFxcIj48YnI+PGgyIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlclxcXCI+PHN0cm9uZz57e3ZtLmZpZWxkc1swXS52YWx9fTwvc3Ryb25nPjwvaDI+PGJyPjxoNCBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPnt7dm0uZmllbGRzWzFdLnZhbH19PC9oND48L2Rpdj48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ2bS50eXBlICE9IFxcJ1BlcnNvbkN1c3RcXCdcXFwiPjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1yaWdodFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS5zZWFyY2hEaXNhYmxlZH19XFxcIiBuZy1jbGljaz1cXFwidm0uY2FsbFNlYXJjaEltYWdlKClcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+e3t2bS5pbWFnZUNvbW1hbmR9fTwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdQcmV2KClcXFwiIG5nLWRpc2FibGVkPVxcXCJ2bS5udW1MaW5rcyA9PT0gMFxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPiZsYXF1bzwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdOZXh0KClcXFwiIG5nLWRpc2FibGVkPVxcXCJ2bS5udW1MaW5rcyA9PT0gMFxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPiZyYXF1bzwvYnV0dG9uPiA8YSBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0uaW1hZ2VmdW5jdGlvbnN9fVxcXCI+e3t2bS5saW5rSWR4KzF9fSBvZiB7e3ZtLm51bUxpbmtzfX08L2E+PC9kaXY+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1jaGFuZ2U9XFxcInZtLm9uTm9Hb29kSW1hZ2VzKHZtLm5naSlcXFwiIG5nLW1vZGVsPVxcXCJ2bS5uZ2lcXFwiPk5vIGdvb2QgaW1hZ2VzIHdlcmUgZm91bmQ8L2xhYmVsPjwvZGl2Pjxicj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTVcXFwiIG5nLWlmPVxcXCJ2bS51c2VySXNPd25lclxcXCI+PGltZyBuZy1zcmM9XFxcInt7dm0uaW1hZ2VVUkx9fVxcXCIgYWx0PVxcXCJ7e2ltYWdlLmVycm9yTG9hZGluZ319XFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTsgbWF4LWhlaWdodDozMDBweFxcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0udXNlcklzT3duZXIgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48YmxvYi11cGxvYWQ+PC9ibG9iLXVwbG9hZD48L2Rpdj48YnIgbmctaWY9XFxcInZtLnNtXFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtc20tMTIgY29sLW1kLTdcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbToxMHB4XFxcIj48bGFiZWw+UmFua3MgKHNlbGVjdCBhbGwgdGhhdCBhcHBseSk6PC9sYWJlbD48ZGl2IG5nLWlmPVxcXCIhdm0ubmhyZHlcXFwiPjxpPlBsZWFzZSBlbnRlciBhIHZhbGlkIG5laWdoYm9yaG9vZDwvaT48L2Rpdj48dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIG5nLWlmPVxcXCJ2bS5uaHJkeVxcXCI+PGxpIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5hZGRUb1JhbmtzXFxcIiBuZy1jbGljaz1cXFwidm0uc2VsUmFuayh4LCRpbmRleClcXFwiIHN0eWxlPVxcXCJjb2xvcjp7e3guc2VsP1xcJ2JsYWNrXFwnOlxcJ2xpZ2h0Z3JleVxcJ319O2N1cnNvcjpwb2ludGVyO1xcXCI+PGkgbmctaWY9XFxcInguc2VsXFxcIiBjbGFzcz1cXFwiZmEgZmEtY2hlY2tcXFwiPjwvaT4mbmJzcHt7eC50aXRsZX19PC9saT48L3VsPjxkaXYgbmctaWY9XFxcInZtLmFkZFJhbmtzRW5hYmxlXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MTBweFxcXCI+PGRpdiBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWlmPVxcXCIhdm0uYWRkY3RzYWN0aXZlXFxcIiBuZy1jbGljaz1cXFwidm0uYWRkQ2F0YW5zKClcXFwiPkFkZCBNb3JlIFJhbmtzPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIG5nLWlmPVxcXCJ2bS5hZGRjdHNhY3RpdmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uYWRkY3RzdmFsXFxcIiBicy1vcHRpb25zPVxcXCJjIGZvciBjIGluIHZtLmFkZGN0c29wdHNcXFwiIGJzLXR5cGVhaGVhZD1cXFwiXFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmFkZGN0cygpXFxcIj5BZGQ8L2J1dHRvbj48L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC0xMiBmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YnV0dG9uIG5nLWNsaWNrPVxcXCJ2bS5yYW5rU3VtbWFyeSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPkNhbmNlbDwvYnV0dG9uPjxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBuZy1jbGljaz1cXFwidm0uY2FsbEFkZEFuc3dlcigpXFxcIj5BZGQgQW5zd2VyPC9idXR0b24+PC9kaXY+PC9kaXY+PGJyIGNsYXNzPVxcXCJoaWRkZW4tbWQgaGlkZGVuLWxnIGhpZGRlbi14bFxcXCI+PGJyIGNsYXNzPVxcXCJoaWRkZW4tbWQgaGlkZGVuLWxnIGhpZGRlbi14bFxcXCI+PGJyIGNsYXNzPVxcXCJoaWRkZW4tbWQgaGlkZGVuLWxnIGhpZGRlbi14bFxcXCI+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2Fuc3dlci9QYXJ0aWFsczIvYWRkRXZlbnQuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwid2VsbC1yYW5rXFxcIiBuZy1pZj1cXFwidm0ubnNtXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxoMiBjbGFzcz1cXFwic3ViLWhlYWRlclxcXCI+e3t2bS5yYW5raW5nfX0gPHNwYW4gY2xhc3M9XFxcIm5vbWFyZ2luXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGNjO2NvbG9yOiMwMDI2OTk7Zm9udC1zaXplOm1lZGl1bTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PC9idXR0b24+PC9zcGFuPjwvaDI+PC9kaXY+PGRpdiBjbGFzcz1cXFwid2VsbC1yYW5rXFxcIiBuZy1pZj1cXFwidm0uc21cXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGgzIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj57e3ZtLnJhbmtpbmd9fSA8c3BhbiBjbGFzcz1cXFwibm9tYXJnaW5cXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgcHVsbC1yaWdodFxcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7cGFkZGluZzowcHg7Ym9yZGVyOjBweDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDZkY2M7Y29sb3I6IzAwMjY5OTtmb250LXNpemU6bWVkaXVtO1xcXCIgbmctY2xpY2s9XFxcInZtLmNsb3NlUmFuaygpXFxcIj48L2J1dHRvbj48L3NwYW4+PC9oMz48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGg0Pnt7IHZtLmlzRWRpdCA/IFxcJ0VkaXQgRXZlbnRcXCc6XFwnQWRkIEV2ZW50XFwnfX08L2g0PjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxwIGNsYXNzPVxcXCJoaXdcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93SG93SXRXb3Jrc0RpYWxvZygpXFxcIj48dT5Ib3cgaXQgd29ya3M/PC91PjwvcD48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC00XFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+KiogRXZlbnQgVGl0bGU6PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbWQtNFxcXCI+PGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5ldi5uYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRXZlbnQgVGl0bGVcXFwiIG5nLWNoYW5nZT1cXFwidm0uZGlzcGxheUNoYXJMZW5ndGgoKVxcXCIgbWF4bGVuZ3RoPVxcXCI0NVxcXCIgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmV2LmJjfX07Y29sb3I6e3t2bS5ldi5mY319XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtOCBoaWRkZW4tc20gaGlkZGVuLW1kIGhpZGRlbi1sZyBoaWRkZW4teGxcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC00XFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e3ZtLmNoYXJ9fSBjaGFycyBsZWZ0PC9wPjwvZGl2PjwvZGl2PjxiciBuZy1pZj1cXFwiIXZtLnNtXFxcIj48ZGl2IG5nLWlmPVxcXCIhdm0uc21cXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7XFxcIj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+QmFja2dyb3VuZCBDb2xvcjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PGNvbG9yLXBpY2tlciBuZy1tb2RlbD1cXFwidm0uZXYuYmNcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2g9XFxcInRydWVcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtcG9zPVxcXCJcXCdsZWZ0XFwnXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLWJvb3RzdHJhcD1cXFwidHJ1ZVxcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1vbmx5PVxcXCJ0cnVlXFxcIj48L2NvbG9yLXBpY2tlcj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkZvbnQgQ29sb3I8L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjxjb2xvci1waWNrZXIgbmctbW9kZWw9XFxcInZtLmV2LmZjXFxcIiBjb2xvci1waWNrZXItc3dhdGNoPVxcXCJ0cnVlXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLXBvcz1cXFwiXFwnbGVmdFxcJ1xcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1ib290c3RyYXA9XFxcInRydWVcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtb25seT1cXFwidHJ1ZVxcXCI+PC9jb2xvci1waWNrZXI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaGlkZGVuLXhzIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48L2Rpdj48L2Rpdj48L2Rpdj48YnIgbmctaWY9XFxcIiF2bS5zbVxcXCI+PGJyPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPkZyZXF1ZW5jeTwvcD48ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSB7e3ZtLmV2LmZyZXEgPT0gXFwnb25ldGltZVxcJz8gXFwnYWN0aXZlXFwnOlxcJ1xcJ319XFxcIiBuZy1jbGljaz1cXFwidm0uZnJlcXVlbmN5U2VsKDEpXFxcIj5PbmUtVGltZTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS5ldi5mcmVxID09IFxcJ3dlZWtseVxcJz8gXFwnYWN0aXZlXFwnOlxcJ1xcJ319XFxcIiBuZy1jbGljaz1cXFwidm0uZnJlcXVlbmN5U2VsKDIpXFxcIj5XZWVrbHk8L2J1dHRvbj48L2Rpdj48YnI+PGJyPjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbmctaWY9XFxcInZtLm9uZXRpbWVcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS5vbmV0aW1lID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInt7dm0uc20gPyBcXCd0ZXh0LWxlZnRcXCc6XFwndGV4dC1yaWdodFxcJ319XFxcIj5TdGFydCBkYXRlOjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLm9uZXRpbWUgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGF0ZXBpY2tlciBkYXRlLWZvcm1hdD1cXFwiRUVFIE1NTSBkIHlcXFwiIGRhdGUteWVhci10aXRsZT1cXFwic2VsZWN0ZWQgdGl0bGUtLS0tLS1cXFwiPjxpbnB1dCBuZy1tb2RlbD1cXFwidm0uZXYuc2RhdGVcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS5vbmV0aW1lXFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLm9uZXRpbWUgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48cCBjbGFzcz1cXFwie3t2bS5zbSA/IFxcJ3RleHQtbGVmdFxcJzpcXCd0ZXh0LXJpZ2h0XFwnfX1cXFwiPlN0YXJ0IHRpbWU6PC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0ub25ldGltZSA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInZtLmV2LnN0aW1lXFxcIiBuZy1vcHRpb25zPVxcXCJ4IGZvciB4IGluIHZtLnRpbWVERFxcXCI+PG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj57e3ZtLnNwLnN0aW1lfX08L29wdGlvbj48L3NlbGVjdD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS5vbmV0aW1lXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0ub25ldGltZSA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiPjxwIGNsYXNzPVxcXCJ7e3ZtLnNtID8gXFwndGV4dC1sZWZ0XFwnOlxcJ3RleHQtcmlnaHRcXCd9fVxcXCI+RW5kIGRhdGU6PC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLm9uZXRpbWUgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGF0ZXBpY2tlciBkYXRlLWZvcm1hdD1cXFwiRUVFIE1NTSBkIHlcXFwiIGRhdGUteWVhci10aXRsZT1cXFwic2VsZWN0ZWQgdGl0bGUtLS0tLS1cXFwiPjxpbnB1dCBuZy1tb2RlbD1cXFwidm0uZXYuZWRhdGVcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS5vbmV0aW1lXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLm9uZXRpbWUgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48cCBjbGFzcz1cXFwie3t2bS5zbSA/IFxcJ3RleHQtbGVmdFxcJzpcXCd0ZXh0LXJpZ2h0XFwnfX1cXFwiPkVuZCB0aW1lOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS5vbmV0aW1lID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwidm0uZXYuZXRpbWVcXFwiIG5nLW9wdGlvbnM9XFxcInggZm9yIHggaW4gdm0udGltZUREXFxcIj48b3B0aW9uIHZhbHVlPVxcXCJcXFwiPnt7dm0uc3AuZXRpbWV9fTwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbmctaWY9XFxcInZtLndlZWtseVxcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLndlZWtseSA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiPjxwIGNsYXNzPVxcXCJ7e3ZtLnNtID8gXFwndGV4dC1sZWZ0XFwnOlxcJ3RleHQtcmlnaHRcXCd9fVxcXCI+U3RhcnQgZGF0ZTo8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS53ZWVrbHkgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGF0ZXBpY2tlciBkYXRlLWZvcm1hdD1cXFwiRUVFIE1NTSBkIHlcXFwiIGRhdGUteWVhci10aXRsZT1cXFwic2VsZWN0ZWQgdGl0bGUtLS0tLS1cXFwiPjxpbnB1dCBuZy1tb2RlbD1cXFwidm0uZXYuc2RhdGVcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS53ZWVrbHlcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS53ZWVrbHkgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48cCBjbGFzcz1cXFwie3t2bS5zbSA/IFxcJ3RleHQtbGVmdFxcJzpcXCd0ZXh0LXJpZ2h0XFwnfX1cXFwiPkVuZCBkYXRlOjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS53ZWVrbHkgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGF0ZXBpY2tlciBkYXRlLWZvcm1hdD1cXFwiRUVFIE1NTSBkIHlcXFwiIGRhdGUteWVhci10aXRsZT1cXFwic2VsZWN0ZWQgdGl0bGUtLS0tLS1cXFwiPjxpbnB1dCBuZy1tb2RlbD1cXFwidm0uZXYuZWRhdGVcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS53ZWVrbHlcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0ud2Vla2x5ID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2Lm1vblxcXCIgdmFsdWU9XFxcIlxcXCI+TW9uPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LnR1ZVxcXCIgdmFsdWU9XFxcIlxcXCI+VHVlPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LndlZFxcXCIgdmFsdWU9XFxcIlxcXCI+V2VkPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LnRodVxcXCIgdmFsdWU9XFxcIlxcXCI+VGh1PC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LmZyaVxcXCIgdmFsdWU9XFxcIlxcXCI+RnJpPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LnNhdFxcXCIgdmFsdWU9XFxcIlxcXCI+U2F0PC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LnN1blxcXCIgdmFsdWU9XFxcIlxcXCI+U3VuPC9sYWJlbD48L2Rpdj48L2Rpdj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBuZy1pZj1cXFwidm0ud2Vla2x5XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy02XFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS53ZWVrbHkgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+U3RhcnQgdGltZTo8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTZcXFwiPjxkaXYgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLndlZWtseSA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInZtLmV2LnN0aW1lMlxcXCIgbmctb3B0aW9ucz1cXFwieCBmb3IgeCBpbiB2bS50aW1lRERcXFwiPjxvcHRpb24gdmFsdWU9XFxcIlxcXCI+e3t2bS5ldi5zdGltZTJ9fTwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgbmctaWY9XFxcInZtLndlZWtseVxcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0ud2Vla2x5ID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkVuZCB0aW1lOjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0ud2Vla2x5ID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwidm0uZXYuZXRpbWUyXFxcIiBuZy1vcHRpb25zPVxcXCJ4IGZvciB4IGluIHZtLnRpbWVERFxcXCI+PG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj57e3ZtLmV2LmV0aW1lMn19PC9vcHRpb24+PC9zZWxlY3Q+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtcXFwiPjxmb3JtIGNsYXNzPVxcXCJmb3JtLWhvcml6b250YWwgY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNlxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwiYW5zd2VyRm9ybVxcXCI+PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmc6NXB4XFxcIj48bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPlZlbnVlIC8gTG9jYXRpb246PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5ldi5ldmVudGxvY1xcXCIgYnMtdHlwZWFoZWFkPVxcXCJcXFwiIGJzLW9wdGlvbnM9XFxcImMgZm9yIGMgaW4gdm0ubG9jYXRpb25zXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5ldi5ldmVudGxvYy5zdHJ9fVxcXCIgbmctY2hhbmdlPVxcXCJ2bS5vblNlbGVjdCgpXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwicGFkZGluZzo1cHhcXFwiPjxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+QWRkcmVzczo8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmV2LmxvY2F0aW9uXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5ldi5sb2NhdGlvbn19XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwicGFkZGluZzo1cHhcXFwiPjxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+TmVpZ2hib3Job29kOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZXYuY2l0eWFyZWFcXFwiIGJzLXR5cGVhaGVhZD1cXFwiXFxcIiBicy1vcHRpb25zPVxcXCJjIGZvciBjIGluIHZtLm5laWdoYm9yaG9vZHNcXFwiIG5nLWNoYW5nZT1cXFwidm0ub25TZWxlY3ROaCgpXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5ldi5jaXR5YXJlYX19XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwicGFkZGluZzo1cHhcXFwiPjxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZXYucGhvbmVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3ZtLmV2LnBob25lfX1cXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjVweFxcXCI+PGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsXFxcIj5FdmVudCBXZWJzaXRlOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZXYud2Vic2l0ZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7dm0uZXYud2Vic2l0ZX19XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwicGFkZGluZzo1cHhcXFwiPjxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbFxcXCI+QWRkaXRpb25hbCBJbmZvOjwvbGFiZWw+IDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uZXYuYWRkaW5mb1xcXCIgcGxhY2Vob2xkZXI9XFxcInt7dm0uZXYuYWRkaW5mb319XFxcIiByb3dzPVxcXCI0XFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uZXYuYmN9fTtjb2xvcjp7e3ZtLmV2LmZjfX07d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT48L2Rpdj48L2Zvcm0+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNlxcXCI+PGRpdiBjbGFzcz1cXFwiXFxcIiBuZy1zaG93PVxcXCJ7e3ZtLnR5cGUgIT0gXFwnU2hvcnQtUGhyYXNlXFwnfX1cXFwiPjxpbWcgc3JjPVxcXCJ7e3ZtLmltYWdlVVJMfX1cXFwiIGFsdD1cXFwie3tpbWFnZS5lcnJvckxvYWRpbmd9fVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7IG1heC1oZWlnaHQ6MzAwcHhcXFwiPiA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wb3dlcmVkX2J5X2dvb2dsZV9vbl93aGl0ZS5wbmdcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1yaWdodFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS5zZWFyY2hEaXNhYmxlZH19XFxcIiBuZy1jbGljaz1cXFwidm0uY2FsbFNlYXJjaEltYWdlKClcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+e3t2bS5pbWFnZUNvbW1hbmR9fTwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdQcmV2KClcXFwiIG5nLWRpc2FibGVkPVxcXCJ2bS5udW1MaW5rcyA9PT0gMFxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPiZsYXF1bzwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdOZXh0KClcXFwiIG5nLWRpc2FibGVkPVxcXCJ2bS5udW1MaW5rcyA9PT0gMFxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPiZyYXF1bzwvYnV0dG9uPiA8YSBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0uaW1hZ2VmdW5jdGlvbnN9fVxcXCI+e3t2bS5saW5rSWR4KzF9fSBvZiB7e3ZtLm51bUxpbmtzfX08L2E+PC9kaXY+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctY2hhbmdlPVxcXCJ2bS5vbk5vR29vZEltYWdlcyh2bS5uZ2kpXFxcIiBuZy1tb2RlbD1cXFwidm0ubmdpXFxcIiBuZy1zaG93PVxcXCJ7e3ZtLnR5cGUgIT0gXFwnU2hvcnQtUGhyYXNlXFwnfX1cXFwiPk5vIGdvb2QgaW1hZ2VzIHdlcmUgZm91bmQ8L2xhYmVsPjwvZGl2PjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJyYWRpb1xcXCI+PGxhYmVsPjxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmctbW9kZWw9XFxcInZtLm5vYmluZFxcXCIgbmFtZT1cXFwib3B0cmFkaW9cXFwiIGNoZWNrZWQ9XFxcInRydWVcXFwiPkRvIG5vdCBiaW5kIGV2ZW50IHRvIG15IGFjY291bnQsIGxldCBhbnlvbmUgbWFrZSBjaGFuZ2VzLjwvbGFiZWw+PC9kaXY+PGRpdiBjbGFzcz1cXFwicmFkaW9cXFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5nLW1vZGVsPVxcXCJ2bS5iaW5kXFxcIiBuYW1lPVxcXCJvcHRyYWRpb1xcXCI+QmluZCB0aGlzIGV2ZW50IHRvIG15IGFjY291bnQsIG9ubHkgSSBjYW4gbWFrZSBjaGFuZ2VzLjwvbGFiZWw+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHg7XFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcInZtLmdvQmFjaygpXFxcIj5CYWNrPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uc2hvd1ByZXZpZXcoKVxcXCI+UHJldmlldzwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwidm0uZGVsZXRlU3BlY2lhbCgpXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0uaXNFZGl0ID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCI+RGVsZXRlPC9idXR0b24+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2Fuc3dlci9QYXJ0aWFsczIvYW5zd2VyUmFua3NNYW5hZ2VyLmh0bWxcIixcIjxoMj5DdXN0b20gUmFua3MgTWFuYWdlcjwvaDI+PGJyPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPllvdSBoYXZlIHB1cmNoYXNlZCA8c3Ryb25nPnt7dm0ucmFua3NxdHl9fTwvc3Ryb25nPiByYW5rcyB0aGF0IGFyZSBjdXJyZW50bHkgYWN0aXZlLjwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGg+TmFtZTwvdGg+PHRoPjwvdGg+PHRoPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0ucmFua3NcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBuZy1pZj1cXFwieC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6ODAlXFxcIj57e3gudGl0bGV9fTwvdGQ+PHRkIG5nLWlmPVxcXCIheC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6ODAlO2NvbG9yOiM4MDgwODBcXFwiPjxpPkVtcHR5PC9pPjwvdGQ+PHRkIG5nLWlmPVxcXCJ4LnVzZWRcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMCVcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmVkaXRSYW5rKCRpbmRleClcXFwiPkVkaXQ8L2J1dHRvbj48L3RkPjx0ZCBuZy1pZj1cXFwieC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVJhbmsoJGluZGV4KVxcXCI+RGVsZXRlPC9idXR0b24+PC90ZD48dGQgbmctaWY9XFxcIiF4LnVzZWRcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMCVcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcInZtLmFkZFJhbmsoKVxcXCI+QWRkPC9idXR0b24+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj5DdXN0b20gcmFua3MgYXJlIGEgZ3JlYXQgd2F5IHRvIGVuZ2FnZSB5b3VyIGF1ZGllbmNlIHdpdGggeW91ciBwcm9kdWN0cyBhbmQgc2VydmljZXMuPC9wPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPlB1cmNoYXNlIGFkZGl0aW9uYWwgUmFua3M8L2J1dHRvbj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9hbnN3ZXIvUGFydGlhbHMyL2VkaXRBbnN3ZXIuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwid2VsbC1hbnN3ZXJcXFwiIG5nLWlmPVxcXCJ2bS5uc21cXFwiPjxoMiBjbGFzcz1cXFwic3ViLWhlYWRlclxcXCI+e3t2bS5hbnN3ZXIubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJub21hcmdpblxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBwdWxsLXJpZ2h0XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtwYWRkaW5nOjBweDtib3JkZXI6MHB4O2JhY2tncm91bmQtY29sb3I6I2IzYjNiMztjb2xvcjojNGQ0ZDRkO2ZvbnQtc2l6ZTptZWRpdW07XFxcIiBuZy1jbGljaz1cXFwidm0uY2xvc2VSYW5rKClcXFwiPjwvYnV0dG9uPjwvc3Bhbj48L2gyPjwvZGl2PjxkaXYgY2xhc3M9XFxcIndlbGwtYW5zd2VyXFxcIiBuZy1pZj1cXFwidm0uc21cXFwiPjxoMyBjbGFzcz1cXFwic3ViLWhlYWRlclxcXCI+e3t2bS5hbnN3ZXIubmFtZX19IDxzcGFuIGNsYXNzPVxcXCJub21hcmdpblxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBwdWxsLXJpZ2h0XFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtwYWRkaW5nOjBweDtib3JkZXI6MHB4O2JhY2tncm91bmQtY29sb3I6I2IzYjNiMztjb2xvcjojNGQ0ZDRkO2ZvbnQtc2l6ZTptZWRpdW07XFxcIiBuZy1jbGljaz1cXFwidm0uY2xvc2VSYW5rKClcXFwiPjwvYnV0dG9uPjwvc3Bhbj48L2gzPjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHhcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj48aDM+RWRpdCBBbnN3ZXIgUHJvZmlsZTwvaDM+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgdGV4dC1yaWdodFxcXCI+PHAgY2xhc3M9XFxcImhpd1xcXCIgbmctY2xpY2s9XFxcInZtLnNob3dIb3dJdFdvcmtzRGlhbG9nKClcXFwiPjx1PkhvdyBpdCBXb3JrczwvdT48L3A+PC9kaXY+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbjowcHhcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtN1xcXCI+PGZvcm0gY2xhc3M9XFxcImZvcm0taG9yaXpvbnRhbFxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbmFtZT1cXFwiYW5zd2VyRm9ybVxcXCIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLmZpZWxkc1xcXCI+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5maWVsZCE9XFwnYWRkaW5mb1xcJyA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiIG5nLWhpZGU9XFxcInt7eC5vbmx5Ynlvd25lciAmJiAhdm0udXNlcklzT3duZXJ9fVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNhcGl0YWxpemVcXFwiPnt7eC5sYWJlbH19OjwvbGFiZWw+PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwieC52YWxcXFwiIGJzLW9wdGlvbnM9XFxcInt7eC5vcHRzfX1cXFwiIGJzLXR5cGVhaGVhZD1cXFwiXFxcIiBwbGFjZWhvbGRlcj1cXFwie3t4LmN2YWx9fVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG4gdGV4dC1yaWdodFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5lZGl0RmllbGQoeClcXFwiPkVkaXQ8L2J1dHRvbj48L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t4LmZpZWxkPT1cXCdhZGRpbmZvXFwnID8gXFwnaW5saW5lXFwnOlxcJ25vbmVcXCd9fVxcXCIgbmctaGlkZT1cXFwie3shdm0uYWNjZXNzICYmICh2bS50eXBlID09IFxcJ1BlcnNvbkN1c3RcXCcpfX1cXFwiPjxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjYXBpdGFsaXplXFxcIj57e3gubGFiZWx9fTo8L2xhYmVsPiA8dGV4dGFyZWEgaWQ9XFxcInRleHRhcmVhMVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcIngudmFsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3t4LmN2YWx9fVxcXCIgcm93cz1cXFwiNVxcXCIgbmctbW9kZWwtb3B0aW9ucz1cXFwie2RlYm91bmNlOiAyNTAwfVxcXCI+XFxuICAgICAgICAgICAgPC90ZXh0YXJlYT48YnI+PGJyPjxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG4gdGV4dC1yaWdodFxcXCI+PGJ1dHRvbiBuZy1jbGljaz1cXFwidm0uZ2V0V2lraSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojNTk1OTU5O2JvcmRlci1jb2xvcjpncmF5O21hcmdpbi1yaWdodDoxMHB4XFxcIiBuZy1pZj1cXFwidm0udHlwZSA9PSBcXCdQZXJzb25cXCdcXFwiPkdldCBmcm9tIFdpa2lwZWRpYTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmVkaXRGaWVsZCh4KVxcXCI+RWRpdDwvYnV0dG9uPjwvc3Bhbj48L2Rpdj48L2Zvcm0+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC01XFxcIj48ZGl2IGNsYXNzPVxcXCJcXFwiIG5nLWlmPVxcXCJ2bS50eXBlIT1cXCdTaG9ydC1QaHJhc2VcXCdcXFwiPjxpbWcgY2xhc3M9XFxcImRpc3BsYXllZC11Y1xcXCIgbmctc3JjPVxcXCJ7e3ZtLmltYWdlVVJMfX1cXFwiIGFsdD1cXFwie3tpbWFnZS5lcnJvckxvYWRpbmd9fVxcXCIgbmctYXR0ci1zdHlsZT1cXFwid2lkdGg6MTAwJTsgbWF4LWhlaWdodDozMDBweFxcXCIgbmctc2hvdz1cXFwie3t2bS50eXBlICE9IFxcJ1Nob3J0LVBocmFzZVxcJ319XFxcIj4gPGltZyBuZy1zcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcG93ZXJlZF9ieV9nb29nbGVfb25fd2hpdGUucG5nXFxcIiBuZy1pZj1cXFwidm0udHlwZSE9XFwnUGVyc29uQ3VzdFxcJyAmJiAhdm0udXNlcklzT3duZXJcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1hbnN3ZXJcXFwiIG5nLWF0dHItc3R5bGU9XFxcIndpZHRoOjEwMCU7IG1heC1oZWlnaHQ6MzAwcHg7XFxcIiBuZy1pZj1cXFwidm0udHlwZSA9PSBcXCdTaG9ydC1QaHJhc2VcXCdcXFwiPjxicj48aDIgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyXFxcIj48c3Ryb25nPnt7dm0uYW5zd2VyLm5hbWV9fTwvc3Ryb25nPjwvaDI+PGJyPjxoNCBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPnt7dm0uYW5zd2VyLmFkZGluZm99fTwvaDQ+PC9kaXY+PGJyPjxkaXYgbmctaWY9XFxcInZtLnVzZXJJc093bmVyXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7dm0udXNlcklzT3duZXIgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48YmxvYi11cGxvYWQ+PC9ibG9iLXVwbG9hZD48L2Rpdj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS51c2VySXNPd25lciA/IFxcJ25vbmVcXCc6XFwnaW5saW5lXFwnfX1cXFwiIG5nLWlmPVxcXCJ2bS50eXBlIT1cXCdQZXJzb25DdXN0XFwnXFxcIj48YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmVkaXRJbWFnZSgpXFxcIj57e3ZtLmltYWdlQ29tbWFuZH19PC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0udmlld1ByZXYoKVxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPiZsYXF1bzwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZpZXdOZXh0KClcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS5pbWFnZWZ1bmN0aW9uc319XFxcIj4mcmFxdW88L2J1dHRvbj4gPGEgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3ZtLmltYWdlZnVuY3Rpb25zfX1cXFwiPnt7dm0ubGlua0lkeCsxfX0gb2Yge3t2bS5udW1MaW5rc319PC9hPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcInZtLnNlbGVjdEltYWdlKClcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS5pbWFnZWZ1bmN0aW9uc319XFxcIj5TZWxlY3Q8L2J1dHRvbj48L2Rpdj48YnI+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1jaGFuZ2U9XFxcInZtLm9uTm9Hb29kSW1hZ2VzKHZtLm5naSlcXFwiIG5nLW1vZGVsPVxcXCJ2bS5uZ2lcXFwiPk5vIGdvb2QgaW1hZ2VzIHdlcmUgZm91bmQ8L2xhYmVsPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyIGNvbC1tZC03XFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MTBweFxcXCI+PGxhYmVsPlJhbmtzOjwvbGFiZWw+PHVsIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj48bGkgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLmFuc3dlclJhbmtzXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj57e3gudGl0bGV9fSA8aSBuZy1pZj1cXFwiJGluZGV4PjBcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBwdWxsLXJpZ2h0XFxcIiBuZy1jbGljaz1cXFwidm0ucmVtUmFuayh4KVxcXCI+PC9pPjwvbGk+PC91bD48ZGl2IG5nLWlmPVxcXCJ0cnVlXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MTBweFxcXCI+PGRpdiBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWlmPVxcXCIhdm0uYWRkY3RzYWN0aXZlXFxcIiBuZy1jbGljaz1cXFwidm0uYWRkQ2F0YW5zKClcXFwiPkFkZCBNb3JlIFJhbmtzPC9idXR0b24+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIG5nLWlmPVxcXCJ2bS5hZGRjdHNhY3RpdmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uYWRkY3RzdmFsXFxcIiBicy1vcHRpb25zPVxcXCJjIGZvciBjIGluIHZtLmFkZGN0c29wdHNcXFwiIGJzLXR5cGVhaGVhZD1cXFwiXFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0biB0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmFkZGN0cygpXFxcIj5BZGQ8L2J1dHRvbj48L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcIndlbGwgd2VsbC1saWdodC1lZGl0XFxcIiBuZy1yZXBlYXQ9XFxcInggaW4gdm0uZWRpdHNcXFwiPjxkaXYgbmctaWY9XFxcInguZmllbGQgIT0gXFwnYWRkaW5mb1xcJ1xcXCI+PHA+PHN0cm9uZz57e3gudXNlcm5hbWV9fTwvc3Ryb25nPiBoYXMgZWRpdGVkIHRoZSA8c3Ryb25nIGNsYXNzPVxcXCJjYXBpdGFsaXplXFxcIj48ZW0+e3t4LmZpZWxkfX08L2VtPjwvc3Ryb25nPiBvZiA8c3Ryb25nPjxlbT57e3gubmFtZX19PC9lbT48L3N0cm9uZz4gdG8gPHN0cm9uZz48ZW0+e3t4Lm52YWx9fTwvZW0+PC9zdHJvbmc+LjwvcD48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ4LmZpZWxkID09IFxcJ2FkZGluZm9cXCdcXFwiPjxwPjxzdHJvbmc+e3t4LnVzZXJuYW1lfX08L3N0cm9uZz4gaGFzIGVkaXRlZCB0aGUgaW5mb3JtYXRpb24gb2YgPHN0cm9uZz48ZW0+e3t4Lm5hbWV9fTwvZW0+PC9zdHJvbmc+IHRvOjxicj48YnI+e3t4Lm52YWx9fS48L3A+PC9kaXY+PGltZyBuZy1zcmM9XFxcInt7eC5pbWFnZVVSTH19XFxcIiBjbGFzcz1cXFwiZGlzcGxheWVkXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJoZWlnaHQ6MTUwcHg7ZGlzcGxheTp7e3guZGlzcGxheX19XFxcIj48ZGl2IGNsYXNzPVxcXCJyb3cgZm9ybS1ncm91cFxcXCI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxsYWJlbD57e3gudXBWfX08L2xhYmVsPiA8bGFiZWw+PC9sYWJlbD4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHt7eC5hZ3JlZX19XFxcIiBuZy1jbGljaz1cXFwidm0uZWRpdEFncmVlKHgsICRpbmRleClcXFwiPkFncmVlPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHt7eC5kaXNhZ3JlZX19XFxcIiBuZy1jbGljaz1cXFwidm0uZWRpdERpc2FncmVlKHgsICRpbmRleClcXFwiPkRpc2FncmVlPC9idXR0b24+IDxsYWJlbD48L2xhYmVsPiA8bGFiZWw+e3t4LmRvd25WfX08L2xhYmVsPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLnNtICYmIHZtLnVzZXJJc093bmVyICYmIHZtLnR5cGUgPT0gXFwnRXN0YWJsaXNobWVudFxcJ1xcXCI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxsYWJlbD5TZXJ2aWNlIEhvdXJzPC9sYWJlbD48L2Rpdj48YnI+PGRpdiBuZy1yZXBlYXQ9XFxcInggaW4gdm0ub3BlbmhvdXJzXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItaG91cnNcXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTJcXFwiPjxwPnt7eC5kYXl9fTo8L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTJcXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcIngub3BuXFxcIiBuZy1jaGFuZ2U9XFxcInZtLmhvdXJzQ2hhbmdlZCgpXFxcIiBuZy1vcHRpb25zPVxcXCJuIGZvciBuIGluIHZtLm9wZW5PcHRpb25zXFxcIj48L3NlbGVjdD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkZyb206PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy00IGNvbC1zbS00IGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwieC5zdFxcXCIgbmctY2hhbmdlPVxcXCJ2bS5ob3Vyc0NoYW5nZWQoKVxcXCIgbmctb3B0aW9ucz1cXFwidCBmb3IgdCBpbiB2bS50aW1lRERcXFwiPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPlRvOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNCBjb2wtc20tNCBjb2wtbWQtMlxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3gub3BuPT1cXCdPUEVOXFwnID8gXFwnaW5saW5lXFwnOiBcXCdub25lXFwnfX1cXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInguY3RcXFwiIG5nLWNoYW5nZT1cXFwidm0uaG91cnNDaGFuZ2VkKClcXFwiIG5nLW9wdGlvbnM9XFxcInQgZm9yIHQgaW4gdm0udGltZUREXFxcIj48L3NlbGVjdD48L2Rpdj48L2Rpdj48L2Rpdj48YnI+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0ubnNtICYmIHZtLnVzZXJJc093bmVyICYmIHZtLnR5cGUgPT0gXFwnRXN0YWJsaXNobWVudFxcJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O3BhZGRpbmctcmlnaHQ6NTBweDtwYWRkaW5nLWxlZnQ6MTBweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjBweDtcXFwiPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48bGFiZWw+U2VydmljZSBIb3VyczwvbGFiZWw+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm9wZW5ob3Vyc1xcXCI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb2wtbWQtMlxcXCI+PHA+e3t4LmRheX19OjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb2wtbWQtMlxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwieC5vcG5cXFwiIG5nLWNoYW5nZT1cXFwidm0uaG91cnNDaGFuZ2VkKClcXFwiIG5nLW9wdGlvbnM9XFxcIm4gZm9yIG4gaW4gdm0ub3Blbk9wdGlvbnNcXFwiPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkZyb206PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwieC5zdFxcXCIgbmctY2hhbmdlPVxcXCJ2bS5ob3Vyc0NoYW5nZWQoKVxcXCIgbmctb3B0aW9ucz1cXFwidCBmb3IgdCBpbiB2bS50aW1lRERcXFwiPjwvc2VsZWN0PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0yIGNvbC1tZC0yXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5vcG49PVxcJ09QRU5cXCcgPyBcXCdpbmxpbmVcXCc6IFxcJ25vbmVcXCd9fVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPlRvOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMiBjb2wtbWQtMlxcXCIgbmctYXR0ci1zdHlsZT1cXFwiZGlzcGxheTp7e3gub3BuPT1cXCdPUEVOXFwnID8gXFwnaW5saW5lXFwnOiBcXCdub25lXFwnfX1cXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInguY3RcXFwiIG5nLWNoYW5nZT1cXFwidm0uaG91cnNDaGFuZ2VkKClcXFwiIG5nLW9wdGlvbnM9XFxcInQgZm9yIHQgaW4gdm0udGltZUREXFxcIj48L3NlbGVjdD48L2Rpdj48L2Rpdj48YnI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgbmctaWY9XFxcInZtLnVzZXJJc093bmVyICYmIHZtLnR5cGUgPT0gXFwnRXN0YWJsaXNobWVudFxcJ1xcXCI+PGEgbmctY2xpY2s9XFxcInZtLnVwZGF0ZUhvdXJzKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS51cGRhdGVIb3Vyc0VufX1cXFwiPlVwZGF0ZSBIb3VyczwvYT48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxhIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+QmFjazwvYT48L2Rpdj48YnI+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2N1c3RvbWVyL1BhcnRpYWxzL2N1c3RvbWVyLmh0bWxcIixcIjxkaXYgdWktdmlldz1cXFwibmF2YmFyXFxcIj48L2Rpdj48YnI+PGgyPlNlbGVjdCBidXNpbmVzcyB5b3Ugd2lzaCB0byBtYW5hZ2U8L2gyPjxkaXYgbmctcmVwZWF0PVxcXCJ4IGluIHZtLmFuc3dlcnNcXFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImJ1c2luZXNzcmFkaW9cXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxBbnN3ZXIoeClcXFwiPiZuYnNwOyZuYnNwO3t7eC5uYW1lfX0sIHt7eC5sb2NhdGlvbn19LCB7e3guY2l0eWFyZWF9fTwvbGFiZWw+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyB7e3ZtLmxvYWRNYWluUGhvdG99fVxcXCIgbmctY2xpY2s9XFxcInZtLmxvYWRNYWluUGhvdG8oKVxcXCI+TWFpbiBQaG90bzwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS5sb2FkU3BlY2lhbHN9fVxcXCIgbmctY2xpY2s9XFxcInZtLmxvYWRTcGVjaWFscygpXFxcIj5TcGVjaWFsczwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciB7e3ZtLmxvYWRQaG90b0dhbGxlcnl9fVxcXCIgbmctY2xpY2s9XFxcInZtLmxvYWRQaG90b0dhbGxlcnkoKVxcXCI+UGhvdG8gR2FsbGVyeTwvYnV0dG9uPjwvZGl2PjwvZGl2Pjxicj48YnI+PGRpdiB1aS12aWV3PVxcXCJcXFwiPjwvZGl2Pjxicj48YnI+PGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LW11dGVkXFxcIj5SYW5rLVggaXMgcHJvcGVydHkgb2YgUmFuay1YIExMQy4gU2FuIERpZWdvLCBDQSAtIDIwMTY8L3A+PC9kaXY+PC9mb290ZXI+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2N1c3RvbWVyL1BhcnRpYWxzL2VkaXRzcGVjaWFsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGRpdiBjbGFzcz1cXFwid2VsbC1zbVxcXCI+PGgzIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj57e3ZtLmhlYWRlcn19IDxzcGFuIGNsYXNzPVxcXCJub21hcmdpblxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MHB4O3BhZGRpbmctYm90dG9tOjBweDtcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC9zcGFuPjwvaDM+PC9kaXY+PC9kaXY+PGgzPnt7IHZtLmlzRWRpdCA/IFxcJ0VkaXQgU3BlY2lhbFxcJzpcXCdBZGQgU3BlY2lhbFxcJ319PC9oMz48YnI+PGRpdiBjbGFzcz1cXFwid2VsbFxcXCI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNCBjb2wtbWQtNFxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPlNwZWNpYWxzIFRpdGxlOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTQgY29sLW1kLTRcXFwiPjxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uc3Auc3RpdGxlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU3BlY2lhbCBCYW5uZXJcXFwiIG5nLWNoYW5nZT1cXFwidm0uZGlzcGxheUNoYXJMZW5ndGgoKVxcXCIgbWF4bGVuZ3RoPVxcXCIyNVxcXCIgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLnNwLmJjfX07Y29sb3I6e3t2bS5zcC5mY319XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtOCBoaWRkZW4tc20gaGlkZGVuLW1kIGhpZGRlbi1sZyBoaWRkZW4teGxcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS00IGNvbC1tZC00XFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj57e3ZtLmNoYXJ9fSBjaGFycyBsZWZ0PC9wPjwvZGl2PjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImhpZGRlbi14cyBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5CYWNrZ3JvdW5kIENvbG9yPC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48Y29sb3ItcGlja2VyIG5nLW1vZGVsPVxcXCJ2bS5zcC5iY1xcXCIgY29sb3ItcGlja2VyLXN3YXRjaD1cXFwidHJ1ZVxcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1wb3M9XFxcIlxcJ2xlZnRcXCdcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtYm9vdHN0cmFwPVxcXCJ0cnVlXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLW9ubHk9XFxcInRydWVcXFwiPjwvY29sb3ItcGlja2VyPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+Rm9udCBDb2xvcjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PGNvbG9yLXBpY2tlciBuZy1tb2RlbD1cXFwidm0uc3AuZmNcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2g9XFxcInRydWVcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtcG9zPVxcXCJcXCdsZWZ0XFwnXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLWJvb3RzdHJhcD1cXFwidHJ1ZVxcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1vbmx5PVxcXCJ0cnVlXFxcIj48L2NvbG9yLXBpY2tlcj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjwvZGl2PjwvZGl2PjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPkZyZXF1ZW5jeTwvcD48ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgY29sLXNtLTYgY29sLW1kLTZcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSB7e3ZtLnNwLmZyZXEgPT0gXFwnb25ldGltZVxcJz8gXFwnYWN0aXZlXFwnOlxcJ1xcJ319XFxcIiBuZy1jbGljaz1cXFwidm0uZnJlcXVlbmN5U2VsKDEpXFxcIj5PbmUtVGltZTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkge3t2bS5zcC5mcmVxID09IFxcJ3dlZWtseVxcJz8gXFwnYWN0aXZlXFwnOlxcJ1xcJ319XFxcIiBuZy1jbGljaz1cXFwidm0uZnJlcXVlbmN5U2VsKDIpXFxcIj5XZWVrbHk8L2J1dHRvbj48L2Rpdj48YnI+PGJyPjxicj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48ZGl2IG5nLWlmPVxcXCJ2bS5vbmV0aW1lXFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+U3RhcnQgZGF0ZTo8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctaWY9XFxcInZtLm9uZXRpbWVcXFwiPjxkYXRlcGlja2VyIGRhdGUtZm9ybWF0PVxcXCJFRUUgTU1NIGQgeVxcXCIgZGF0ZS15ZWFyLXRpdGxlPVxcXCJzZWxlY3RlZCB0aXRsZS0tLS0tLVxcXCI+PGlucHV0IG5nLW1vZGVsPVxcXCJ2bS5zcC5zZGF0ZVxcXCIgdHlwZT1cXFwidGV4dFxcXCI+PC9kYXRlcGlja2VyPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctaWY9XFxcInZtLm9uZXRpbWVcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5TdGFydCB0aW1lOjwvcD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGRpdiBuZy1pZj1cXFwidm0ub25ldGltZVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwidm0uc3Auc3RpbWVcXFwiIG5nLW9wdGlvbnM9XFxcInggZm9yIHggaW4gdm0udGltZUREXFxcIj48b3B0aW9uIHZhbHVlPVxcXCJcXFwiPnt7dm0uc3Auc3RpbWV9fTwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxkaXYgbmctaWY9XFxcInZtLm9uZXRpbWVcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj5FbmQgZGF0ZTo8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTQgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiIG5nLWlmPVxcXCJ2bS5vbmV0aW1lXFxcIj48ZGF0ZXBpY2tlciBkYXRlLWZvcm1hdD1cXFwiRUVFIE1NTSBkIHlcXFwiIGRhdGUteWVhci10aXRsZT1cXFwic2VsZWN0ZWQgdGl0bGUtLS0tLS1cXFwiPjxpbnB1dCBuZy1tb2RlbD1cXFwidm0uc3AuZWRhdGVcXFwiIHR5cGU9XFxcInRleHRcXFwiPjwvZGF0ZXBpY2tlcj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIiBuZy1pZj1cXFwidm0ub25ldGltZVxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkVuZCB0aW1lOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCIgbmctaWY9XFxcInZtLm9uZXRpbWVcXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInZtLnNwLmV0aW1lXFxcIiBuZy1vcHRpb25zPVxcXCJ4IGZvciB4IGluIHZtLnRpbWVERFxcXCI+PG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj57e3ZtLnNwLmV0aW1lfX08L29wdGlvbj48L3NlbGVjdD48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMlxcXCIgbmctaWY9XFxcInZtLndlZWtseVxcXCI+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLm1vblxcXCIgdmFsdWU9XFxcIlxcXCI+TW9uPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLnR1ZVxcXCIgdmFsdWU9XFxcIlxcXCI+VHVlPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLndlZFxcXCIgdmFsdWU9XFxcIlxcXCI+V2VkPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLnRodVxcXCIgdmFsdWU9XFxcIlxcXCI+VGh1PC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLmZyaVxcXCIgdmFsdWU9XFxcIlxcXCI+RnJpPC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLnNhdFxcXCIgdmFsdWU9XFxcIlxcXCI+U2F0PC9sYWJlbD4gPGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLnNwLnN1blxcXCIgdmFsdWU9XFxcIlxcXCI+U3VuPC9sYWJlbD48L2Rpdj48L2Rpdj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGRpdiBuZy1pZj1cXFwidm0ud2Vla2x5XFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+U3RhcnQgdGltZTo8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTYgY29sLWxnLTZcXFwiPjxkaXYgbmctaWY9XFxcInZtLndlZWtseVxcXCI+PHNlbGVjdCBuZy1tb2RlbD1cXFwidm0uc3Auc3RpbWUyXFxcIiBuZy1vcHRpb25zPVxcXCJ4IGZvciB4IGluIHZtLnRpbWVERFxcXCI+PG9wdGlvbiB2YWx1ZT1cXFwiXFxcIj57e3ZtLnNwLnN0aW1lMn19PC9vcHRpb24+PC9zZWxlY3Q+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGRpdiBuZy1pZj1cXFwidm0ud2Vla2x5XFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+RW5kIHRpbWU6PC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS02IGNvbC1tZC02IGNvbC1sZy02XFxcIj48ZGl2IG5nLWlmPVxcXCJ2bS53ZWVrbHlcXFwiPjxzZWxlY3QgbmctbW9kZWw9XFxcInZtLnNwLmV0aW1lMlxcXCIgbmctb3B0aW9ucz1cXFwieCBmb3IgeCBpbiB2bS50aW1lRERcXFwiPjxvcHRpb24gdmFsdWU9XFxcIlxcXCI+e3t2bS5zcC5ldGltZTJ9fTwvb3B0aW9uPjwvc2VsZWN0PjwvZGl2PjwvZGl2PjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC1zbS0wIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02XFxcIj48cD5FdmVudCBEZXRhaWxzPC9wPjx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uc3AuZGV0YWlsc1xcXCIgcGxhY2Vob2xkZXI9XFxcInt7eC5sYWJlbH19XFxcIiByb3dzPVxcXCI0XFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uc3AuYmN9fTtjb2xvcjp7e3ZtLnNwLmZjfX07d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtc20tMCBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PC9kaXY+PGJyPjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTAgY29sLW1kLTMgY29sLWxnLTNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTZcXFwiPjxkaXYgY2xhc3M9XFxcIlxcXCI+PHA+RXZlbnQgSW1hZ2U8L3A+PGltZyBzcmM9XFxcInt7dm0uaW1hZ2VVUkx9fVxcXCIgYWx0PVxcXCJ7e2ltYWdlLmVycm9yTG9hZGluZ319XFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTsgbWF4LWhlaWdodDozMDBweFxcXCI+PGRpdiBuZy1pZj1cXFwidm0udXNlcklzT3duZXJcXFwiPjxibG9iLXVwbG9hZD48L2Jsb2ItdXBsb2FkPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC1zbS0wIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48L2Rpdj48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiPkJhY2s8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93UHJldmlldygpXFxcIj5QcmV2aWV3PC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5kZWxldGVTcGVjaWFsKClcXFwiIG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t2bS5pc0VkaXQgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj5EZWxldGU8L2J1dHRvbj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvY3VzdG9tZXIvUGFydGlhbHMvZWRpdHZyb3dzLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGRpdiBjbGFzcz1cXFwid2VsbC1zbVxcXCI+PGgzIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj57e3ZtLmhlYWRlcn19IDxzcGFuIGNsYXNzPVxcXCJub21hcmdpblxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MHB4O3BhZGRpbmctYm90dG9tOjBweDtcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC9zcGFuPjwvaDM+PC9kaXY+PC9kaXY+PGRpdiBuZy1yZXBlYXQ9XFxcInggaW4gdm0udnJvd3MgdHJhY2sgYnkgJGluZGV4XFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t4LnNoZHIgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48YnI+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t4LnNoZHIgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTBcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOmdyYXk7Y29sb3I6d2hpdGU7XFxcIj48cD57e3guZ3RpdGxlfX08L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTJcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uZWRpdFZSb3dHcm91cERpYWcoeClcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBlbmNpbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcImRpc3BsYXk6e3t4LnRpdGxlICE9IFxcJy1cXCcgPyBcXCdpbmxpbmVcXCc6XFwnbm9uZVxcJ319XFxcIj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2Q5ZDlkOTtwYWRkaW5nLXRvcDoycHg7cGFkZGluZy1ib3R0b206MnB4O1xcXCI+e3t4LnRpdGxlfX08L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMlxcXCI+PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVZSb3dEaWFnKHgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBuZy1hdHRyLXN0eWxlPVxcXCJkaXNwbGF5Ont7eC5zYWRkciA/IFxcJ2lubGluZVxcJzpcXCdub25lXFwnfX1cXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEwXFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLmFkZFZSb3dEaWFnKHgpXFxcIj5BZGQgVm90ZSBSb3c8L2J1dHRvbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMlxcXCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hZGRWUm93R3JvdXBEaWFnKClcXFwiPkFkZCBHcm91cDwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBuZy1jbGljaz1cXFwidm0uY2xvc2VSYW5rKClcXFwiPkdvIEJhY2s8L2J1dHRvbj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvY3VzdG9tZXIvUGFydGlhbHMvbWFpbnBob3RvLmh0bWxcIixcIjxoMT5NYWluIFBob3RvPC9oMT5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvY3VzdG9tZXIvUGFydGlhbHMvcGhvdG9nYWxsZXJ5Lmh0bWxcIixcIjxoMT5QaG90byBHYWxsZXJ5PC9oMT5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvY3VzdG9tZXIvUGFydGlhbHMvc3BlY2lhbHMuaHRtbFwiLFwiPGRpdiBpZD1cXFwidmVpbFxcXCIgbmctaGlkZT1cXFwidm0uZGF0YVJlYWR5XFxcIj48L2Rpdj48ZGl2IGlkPVxcXCJmZWVkTG9hZGluZ1xcXCIgbmctaGlkZT1cXFwidm0uZGF0YVJlYWR5XFxcIj48ZGl2IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiIG5nLWlmPVxcXCIhdm0uZGF0YVJlYWR5XFxcIj48ZGl2PjxpbWcgc3JjPVxcXCIvYXNzZXRzL2ltYWdlcy9sb2FkaW5nLmdpZlxcXCIgY2xhc3M9XFxcImltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHhcXFwiPjwvZGl2PjxwIHN0eWxlPVxcXCJmb250LXNpemU6bGFyZ2VcXFwiPmxvYWRpbmcgc3BlY2lhbHMuLi48L3A+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uZGF0YVJlYWR5XFxcIj48aDI+U3BlY2lhbHMgTWFuYWdlcjwvaDI+PGJyPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPllvdSBoYXZlIHB1cmNoYXNlZCBwcmVtaXVtIG1lbWJlcnNoaXAgZm9yIHRoaXMgRXN0YWJsaXNobWVudC4gWW91IGNhbiBhZGQgdXAgdG8gNyBzcGVjaWFscyBhbmQgcHJvbW90aW9ucy48L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoPlNwZWNpYWw8L3RoPjx0aD48L3RoPjx0aD48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLnNwZWNpYWxzTGlzdFxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIG5nLWlmPVxcXCJ4LnVzZWRcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MCVcXFwiPnt7eC5zdGl0bGV9fTwvdGQ+PHRkIG5nLWlmPVxcXCIheC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6ODAlO2NvbG9yOiM4MDgwODBcXFwiPjxpPkVtcHR5PC9pPjwvdGQ+PHRkIG5nLWlmPVxcXCJ4LnVzZWRcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMCVcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnNlbFNwZWNpYWwoeClcXFwiPkVkaXQ8L2J1dHRvbj48L3RkPjx0ZCBuZy1pZj1cXFwieC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgbmctY2xpY2s9XFxcInZtLmRlbGV0ZVNwZWNpYWwoeClcXFwiPkRlbGV0ZTwvYnV0dG9uPjwvdGQ+PHRkIG5nLWlmPVxcXCIheC51c2VkXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hZGRTcGVjaWFsKClcXFwiPkFkZDwvYnV0dG9uPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+U3BlY2lhbHMgYXJlIGEgZ3JlYXQgd2F5IHRvIGxldCBwZW9wbGUga25vdyBhbGwgdGhlIGdyZWF0IG9mZmVycyB5b3UgaGF2ZSBhdCBhbnkgdGltZS48L3A+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvbGF5b3V0L1BhcnRpYWxzMi9hYm91dC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxkaXYgY2xhc3M9XFxcImp1bWJvdHJvblxcXCI+PGJyPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTAgY29sLW1kLTIgY29sLWxnLTNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiBjb2wtbWQtOCBjb2wtbGctNlxcXCI+PGltZyBzcmM9XFxcInt7dm0ubG9nb2ltYWdlfX1cXFwiIGNsYXNzPVxcXCJkaXNwbGF5ZWQtdWNcXFwiIGFsdD1cXFwiQ2lucXVlIFRlcnJlXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJ3aWR0aDoxMDAlO2hlaWdodDp7e3ZtLnNtID8gXFwnMTAwcHhcXCc6XFwnMjAwcHhcXCd9fVxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXNtLTAgY29sLW1kLTIgY29sLWxnLTNcXFwiPjwvZGl2PjwvZGl2Pjxicj48YnI+PHA+UmFuay1YIGNvbGxlY3RzIHVzZXJzIHByZWZlcmVuY2VzIHRvIGdlbmVyYXRlIHRydWx5IGNvbGxlY3RpdmUgcmFua2luZ3Mgb24gYWxsIHRoaW5ncyBhYm91dCB5b3VyIGNpdHkuPC9wPjxicj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ3ZWxsXFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRleHQtbGVmdFxcXCI+PHA+U2FuIERpZWdvLCBDQSAtIDIwMTY8L3A+PHA+Q29udGFjdDogY29udGFjdEByYW5rLXguY29tPC9wPjwvZGl2PjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmdvQmFjaygpXFxcIj5CYWNrPC9idXR0b24+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2xheW91dC9QYXJ0aWFsczIvY2l0eS1zZWxlY3Rpb24uaHRtbFwiLFwiXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2xheW91dC9QYXJ0aWFsczIvY3VzdG9tZXJ0b3MuaHRtbFwiLFwiPHN0eWxlPlxcbiAgICAjcHBCb2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB9XFxuICAgIFxcbiAgICAjcHBIZWFkZXIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XFxuICAgICAgICBmb250LXNpemU6IDIxcHQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuICAgIFxcbiAgICAucHBDb25zaXN0ZW5jaWVzIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG5cXG4gICAgI3BwQm9keSA+IG9sID4gbGkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI3BwQm9keSA+IG9sID4gbGkgPiB1bCA+IGxpe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAjcHBCb2R5ID4gb2wgPiBsaSA+IHVsID4gbGkgPiBvbCA+bGl7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuPC9zdHlsZT48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxicj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjxkaXYgaWQ9XFxcInBwSGVhZGVyXFxcIj48c3Bhbj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9nb19zcS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MHB4XFxcIj48L3NwYW4+IFJhbmstWCBUZXJtcyBvZiBVc2U8L2Rpdj48ZGl2IGlkPVxcXCJwcEJvZHlcXFwiPlRoZXNlIHRlcm1zIG9mIHNlcnZpY2UgY29uc3RpdHV0ZSBhIGxlZ2FsbHkgYmluZGluZyBhZ3JlZW1lbnQgKHRoZSDigJxBZ3JlZW1lbnTigJ0pIGJldHdlZW4geW91IGFuZCBSYW5rLVgsIExMQyAo4oCcUmFuay1Y4oCdIOKAnHdlLOKAnSDigJx1c+KAnSBvciDigJxvdXLigJ0pIGdvdmVybmluZyB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIGFwcGxpY2F0aW9uLCB3ZWJzaXRlLCBhbmQgdGVjaG5vbG9neSBwbGF0Zm9ybSAoY29sbGVjdGl2ZWx5LCB0aGUg4oCcUmFuay1YIFBsYXRmb3Jt4oCdKS4gUExFQVNFIEJFIEFEVklTRUQ6IFRISVMgQUdSRUVNRU5UIENPTlRBSU5TIFBST1ZJU0lPTlMgVEhBVCBHT1ZFUk4gSE9XIENMQUlNUyBZT1UgQU5EIFJBTkstWCBIQVZFIEFHQUlOU1QgRUFDSCBPVEhFUiBDQU4gQkUgQlJPVUdIVCAoU0VFIFNFQ1RJT04gMTYgQkVMT1cpLiBUSEVTRSBQUk9WSVNJT05TIFdJTEwsIFdJVEggTElNSVRFRCBFWENFUFRJT04sIFJFUVVJUkUgWU9VIFRPIFNVQk1JVCBDTEFJTVMgWU9VIEhBVkUgQUdBSU5TVCBSQU5LLVggVE8gQklORElORyBBTkQgRklOQUwgQVJCSVRSQVRJT04gT04gQU4gSU5ESVZJRFVBTCBCQVNJUywgTk9UIEFTIEEgUExBSU5USUZGIE9SIENMQVNTIE1FTUJFUiBJTiBBTlkgQ0xBU1MsIEdST1VQIE9SIFJFUFJFU0VOVEFUSVZFIEFDVElPTiBPUiBQUk9DRUVESU5HLiBBUyBBIERSSVZFUiwgWU9VIEhBVkUgQU4gT1BQT1JUVU5JVFkgVE8gT1BUIE9VVCBPRiBBUkJJVFJBVElPTiBXSVRIIFJFU1BFQ1QgVE8gQ0VSVEFJTiBDTEFJTVMgQVMgUFJPVklERUQgSU4gU0VDVElPTiAxNy4gQnkgZW50ZXJpbmcgaW50byB0byB0aGlzIEFncmVlbWVudCwgeW91IGV4cHJlc3NseSBhY2tub3dsZWRnZSB0aGF0IHlvdSB1bmRlcnN0YW5kIHRoaXMgQWdyZWVtZW50IChpbmNsdWRpbmcgdGhlIGRpc3B1dGUgcmVzb2x1dGlvbiBhbmQgYXJiaXRyYXRpb24gcHJvdmlzaW9ucyBTZWN0aW9uIDE2KSBhbmQgYWNjZXB0IGFsbCBvZiBpdHMgdGVybXMuIElGIFlPVSBETyBOT1QgQUdSRUUgVE8gQkUgQk9VTkQgQlkgVEhFIFRFUk1TIEFORCBDT05ESVRJT05TIE9GIFRISVMgQUdSRUVNRU5ULCBZT1UgTUFZIE5PVCBVU0UgT1IgQUNDRVNTIFRIRSBSQU5LLVggUExBVEZPUk0uPG9sPjxsaT48Yj5UaGUgUmFuay1YIFBsYXRmb3JtPC9iPiBUaGUgUmFuay1YIFBsYXRmb3JtIHByb3ZpZGVzIGFuIG9ubGluZSBwbGF0Zm9ybSB0aGF0IGNyZWF0ZXMgbGlzdHMsIHJhbmtpbmdzLCBhbmQgZm9ydW1zIGFib3V0IGJ1c2luZXNzZXMsIGFjdGl2aXRpZXMsIGxvY2F0aW9ucywgYW5kIHZlbnVlcyAoQ29sbGVjdGl2ZWx5IOKAnEJ1c2luZXNzZXPigJ0pLiBUaGUgbGlzdHMsIHJhbmtpbmdzLCBhbmQgZm9ydW1zIHdpdGhpbiB0aGUgUmFuay1YIFBsYXRmb3JtIGFyZSBnZW5lcmF0ZWQgYnkgcGVyc29ucyB3aG8gdXNlIHRoZSBzaXRlICjigJxVc2Vyc+KAnSkgdG8gcmFuayBhbmQgY29tbWVudCBvbiBCdXNpbmVzc2VzIHRoZXkgaGF2ZSBleHBlcmllbmNlZC4gVGhlIFJhbmstWCBQbGF0Zm9ybSBhbHNvIGFsbG93cyBwZXJzb25zIHRvIHByb21vdGUgUmFuay1YIHRvIHZhcmlvdXMgQnVzaW5lc3NlcyAo4oCcUHJvbW90ZXJz4oCdKSBpbiBleGNoYW5nZSBmb3IgYSBjb21taXNzaW9uLWJhc2VkIHBlcmNlbnRhZ2Ugb2YgdGhlIHJldmVudWUgZ2VuZXJhdGVkIGJ5IEJ1c2luZXNzZXMgd2hvIHRoZSBQcm9tb3RlciBzdWNjZXNzZnVsbHkgc2lnbnMgdXAgZm9yIFJhbmstWOKAmXMgUHJlbWl1bSBNZW1iZXJzaGlwLiBFYWNoIGluZGl2aWR1YWwgUHJvbW90ZXIgd2lsbCBiZSBhc3NpZ25lZCBhIHVuaXF1ZSBhbHBoYW51bWVyaWMgY29kZSAo4oCcQ29kZeKAnSkuIEVhY2ggQnVzaW5lc3MgdGhhdCBzaWducyB1cCBmb3IgUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgd2lsbCB1c2UgdGhlIENvZGUgYXNzaWduZWQgdG8gdGhlIFByb21vdGVyIHRoYXQgY29udGFjdGVkIHRoZW0gdG8gZ2FpbiBhY2Nlc3MgdG8gUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMuIFdoZW4gYSBCdXNpbmVzcyB1c2VzIHRoaXMgQ29kZSwgdGhlIEJ1c2luZXNzIHdpbGwgYmUgZ2l2ZW4gc2l4dHkgKDYwKSBkYXlzIG9mIGZyZWUgYWNjZXNzIHRvIHRoZSBQcmVtaXVtIE1lbWJlcnNoaXAuIElmIGEgQnVzaW5lc3MsIGFmdGVyIHRoZSA2MC1kYXkgZnJlZSBwZXJpb2QgZXhwaXJlcywgY2hvb3NlcyB0byBjb250aW51ZSBhY2Nlc3NpbmcgUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMsIGl0IHdpbGwgZG8gc28gYnkgdXNpbmcgdGhlIFByb21vdGVy4oCZcyBDb2RlIHRvIHNpZ24gdXAgZm9yIGNvbnRpbnVlZCBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMgYXQgdGhlIHNwZWNpZmllZCBjb3N0LjwvbGk+PGxpPjxiPk1vZGlmaWNhdGlvbiB0byB0aGUgQWdyZWVtZW50PC9iPiBJbiB0aGUgZXZlbnQgUmFuay1YIG1vZGlmaWVzIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIEFncmVlbWVudCwgc3VjaCBtb2RpZmljYXRpb25zIHNoYWxsIGJlIGJpbmRpbmcgb24geW91IG9ubHkgdXBvbiB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlIG1vZGlmaWVkIEFncmVlbWVudC4gUmFuay1YIHJlc2VydmVzIHRoZSByaWdodCB0byBtb2RpZnkgYW55IGluZm9ybWF0aW9uIHJlZmVyZW5jZWQgaW4gdGhlIGh5cGVybGlua3MgZnJvbSB0aGlzIEFncmVlbWVudCBmcm9tIHRpbWUgdG8gdGltZSwgYW5kIHN1Y2ggbW9kaWZpY2F0aW9ucyBzaGFsbCBiZWNvbWUgZWZmZWN0aXZlIHVwb24gcG9zdGluZy4gQ29udGludWVkIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIFNlcnZpY2VzIGFmdGVyIGFueSBzdWNoIGNoYW5nZXMgc2hhbGwgY29uc3RpdHV0ZSB5b3VyIGNvbnNlbnQgdG8gc3VjaCBjaGFuZ2VzLiBVbmxlc3MgbWF0ZXJpYWwgY2hhbmdlcyBhcmUgbWFkZSB0byB0aGUgYXJiaXRyYXRpb24gcHJvdmlzaW9ucyBoZXJlaW4sIHlvdSBhZ3JlZSB0aGF0IG1vZGlmaWNhdGlvbiBvZiB0aGlzIEFncmVlbWVudCBkb2VzIG5vdCBjcmVhdGUgYSByZW5ld2VkIG9wcG9ydHVuaXR5IHRvIG9wdCBvdXQgb2YgYXJiaXRyYXRpb24gKGlmIGFwcGxpY2FibGUpLjwvbGk+PGxpPjxiPkVsaWdpYmlsaXR5PC9iPiBUaGUgUmFuay1YIFBsYXRmb3JtIG1heSBvbmx5IGJlIHVzZWQgYnkgaW5kaXZpZHVhbHMgYW5kIGJ1c2luZXNzZXMgd2hvIGNhbiBmb3JtIGxlZ2FsbHkgYmluZGluZyBjb250cmFjdHMgdW5kZXIgYXBwbGljYWJsZSBsYXcuIFRoZSBSYW5rLVggUGxhdGZvcm0gaXMgbm90IGF2YWlsYWJsZSB0byBjaGlsZHJlbiAocGVyc29ucyB1bmRlciB0aGUgYWdlIG9mIDE4KSBvciBQcmVtaXVtIE1lbWJlcnMgd2hvIGhhdmUgaGFkIHRoZWlyIFByZW1pdW0gTWVtYmVyIGFjY291bnQgdGVtcG9yYXJpbHkgb3IgcGVybWFuZW50bHkgZGVhY3RpdmF0ZWQuIEJ5IGJlY29taW5nIGEgUHJlbWl1bSBNZW1iZXIgb2YgUmFuay1Y4oCZcyBQbGF0Zm9ybSwgeW91IHJlcHJlc2VudCBhbmQgd2FycmFudCB0aGF0IHlvdSBhcmUgYXQgbGVhc3QgMTggeWVhcnMgb2xkIGFuZCB0aGF0IHlvdSBoYXZlIHRoZSByaWdodCwgYXV0aG9yaXR5IGFuZCBjYXBhY2l0eSB0byBlbnRlciBpbnRvIGFuZCBhYmlkZSBieSB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQuIFlvdSBtYXkgbm90IGFsbG93IG90aGVyIHBlcnNvbnMgdG8gdXNlIHlvdXIgQnVzaW5lc3PigJlzIFJhbmstWCBhY2NvdW50LCBhbmQgeW91IGFncmVlIHRoYXQgeW91IGFyZSB0aGUgc29sZSBhdXRob3JpemVkIHVzZXIgb2YgeW91ciBhY2NvdW50LjwvbGk+PGxpPjxiPkNvc3RzIGFuZCBGZWVzPC9iPiBJZiB5b3UgYXJlIGEgYnVzaW5lc3MsIHlvdSBtYXkgb2J0YWluIHRoZSBiZW5lZml0cyBvZiBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcCBieSBwYXlpbmcgdGhlIHNwZWNpZmllZCBtb250aGx5IG1lbWJlcnNoaXAgZmVlLiBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcCBmZWVzIGFyZSBzZXQgb3V0IGluIFNlY3Rpb24gNChiKSBiZWxvdy48b2wgdHlwZT1cXFwiYVxcXCI+PGxpPjxiPkNvc3RzIGFuZCBGZWVzPC9iPiBBIEJ1c2luZXNzIG1heSBzaWduIHVwIGZvciBhbmQgcHVyY2hhc2UgUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgaW4gb3JkZXIgdG8gdXRpbGl6ZSB0aGUgdmFyaW91cyBiZW5lZml0cyBvZiBkb2luZyBzby4g4oCcUHJlbWl1bSBNZW1iZXJzaGlw4oCdIGZvciBwdXJwb3NlcyBvZiB0aGlzIGFncmVlbWVudCByZWZlcnMgdG8gYSBCdXNpbmVzc+KAmXMgYWJpbGl0eSB0byBwcm9tb3RlIHRoZSBCdXNpbmVzc+KAmXMgbWVudSwgc3BlY2lhbHMsIGFuZCBhY3Rpdml0aWVzLCB3aGljaCBkcml2ZXMgYWRkaXRpb25hbCBvbmxpbmUgdHJhZmZpYyB0byB0aGUgQnVzaW5lc3PigJlzIHByb2ZpbGUsIGluIGV4Y2hhbmdlIGZvciBhIG1vbnRobHkgUHJlbWl1bSBNZW1iZXJzaGlwIGZlZS4gUmFuay1YIHJlc2VydmVzIHRoZSByaWdodCB0byBjaGFuZ2UgdGhlIHByaWNpbmcgc2NoZWR1bGUgZm9yIFByZW1pdW0gTWVtYmVyc2hpcHMgYXQgYW55IHRpbWUgaW4gb3VyIGRpc2NyZXRpb24gYmFzZWQgdXBvbiBsb2NhbCBtYXJrZXQgZmFjdG9ycywgYW5kIHdlIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBub3RpY2UgaWYgb3VyIHByaWNlcyBkbyBjaGFuZ2UuPC9saT48bGk+PGI+TWVtYmVyc2hpcCBGZWVzIGFuZCBQYXltZW50IFNjaGVkdWxlLjwvYj4gUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgY29zdHMgdmFyeSBkZXBlbmRpbmcgb24gdGhlIGluZHVzdHJ5IGFuZCBidXNpbmVzcyB0eXBlIHRoYXQgdGhlIGJ1c2luZXNzIGlzIGFzc29jaWF0ZWQgd2l0aCwgYXMgc2V0IG91dCBpbiBTZWN0aW9uIDQoYykgYmVsb3cuIEFkZGl0aW9uYWxseSwgQnVzaW5lc3NlcyBtYXkgcHVyY2hhc2UgY3VzdG9tIHJhbmtpbmdzIGF0IHRoZSBwcmljZSBvZiAkNDUuMDAgcGVyIG1vbnRoLiBSYW5rLVggY2hhcmdlcyBCdXNpbmVzc2VzIG9uY2UgcGVyIG1vbnRoIGZvciBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMsIHdoaWNoIHdpbGwgY29udGludWUgdG8gYmUgYWNjZXNzaWJsZSBieSBCdXNpbmVzc2VzIHVudGlsIGFuZCB1bmxlc3MgdGhpcyBBZ3JlZW1lbnQgaGFzIGJlZW4gbWF0ZXJpYWxseSBicmVhY2hlZCBvciB0ZXJtaW5hdGVkIHdpdGggb3Igd2l0aG91dCBjYXVzZS48L2xpPjxsaT48Yj5QcmVtaXVtIE1lbWJlcnNoaXAgRmVlIFNjaGVkdWxlLjwvYj4gUHJlbWl1bSBNZW1iZXJzaGlwIHByaWNpbmcgaXMgZGV0ZXJtaW5lZCBieSB0aGUgaW5kdXN0cnkgYW5kIHNpemUgb2YgdGhlIEJ1c2luZXNzICjigJxCdXNpbmVzcyBDbGFzc+KAnSkgcHVyY2hhc2luZyB0aGUgUHJlbWl1bSBNZW1iZXJzaGlwLiBGb3IgZXhhbXBsZSwgYSBsYXJnZSwgbmF0aW9uYWwsIGFuZCB3ZWxsIGtub3duIGNvbXBhbnkgb3IgYnJhbmQgd2lsbCBwYXkgYSBoaWdoZXIgbW9udGhseSBQcmVtaXVtIE1lbWJlcnNoaXAgZmVlIHRoYW4gYSBzbWFsbCDigJxtb20gYW5kIHBvcOKAnSBjYWbDqSBvciByZXRhaWwgc2hvcC4gQSBCdXNpbmVzcyB0aGF0IGZpdHMgd2l0aGluIG1vcmUgdGhhbiBvbmUgQnVzaW5lc3MgQ2xhc3Mgd2lsbCBwYXkgdGhlIGhpZ2hlciBQcmVtaXVtIE1lbWJlcnNoaXAgZmVlLiBUaHVzLCBmb3IgZXhhbXBsZSwgaWYgYSBCdXNpbmVzcyBmaXRzIHdpdGhpbiB0aGUg4oCcU21hbGwgQnVzaW5lc3MgRW50ZXJwcmlzZeKAnSBCdXNpbmVzcyBDbGFzcyBhcyB3ZWxsIGFzIHRoZSDigJxSZXN0YXVyYW50cyBhbmQgQmFyc+KAnSBCdXNpbmVzcyBDbGFzcywgdGhlIEJ1c2luZXNzIHdpbGwgcGF5IHRoZSDigJxSZXN0YXVyYW50cyBhbmQgQmFyc+KAnSBCdXNpbmVzcyBDbGFzcyByYXRlIGJlY2F1c2UgdGhhdCByYXRlIGlzIGhpZ2hlciB0aGFuIHRoZSDigJxTbWFsbCBCdXNpbmVzcyBFbnRlcnByaXNl4oCdIEJ1c2luZXNzIENsYXNzLjxvbCB0eXBlPVxcXCJpXFxcIj48bGk+PGI+VGhlIFByZW1pdW0gTWVtYmVyc2hpcCBQcmljaW5nIG9mIEVhY2ggQnVzaW5lc3MgQ2xhc3MgaXMgYXMgRm9sbG93czo8L2I+PG9sPjxsaT5FbnRlcnByaXNlICjigJxFTlTigJ0pIOKAkyBMYXJnZSBOYXRpb25hbCBCcmFuZHMgKGUuZy4sIEFUJlQsIFZlcml6b24sIFN0YXJidWNrcywgZXRjLik8L2xpPjxsaT5MYXJnZSBCdXNpbmVzcyAo4oCcTEJa4oCdKSDigJMgTGFyZ2UgQ29tcGFuaWVzIChlLmcuLCBDYXIgRGVhbGVyc2hpcHMsIGV0Yy4pPC9saT48bGk+UmVzdGF1cmFudHMgYW5kIEJhcnMgKOKAnFJFQuKAnSkg4oCTIEZvb2QgYW5kIEJldmVyYWdlIEluZHVzdHJ5IChlLmcuLCBEaW5lcnMsIEJhcnMsIENsdWJzLCBldGMuKTwvbGk+PGxpPk1lZGl1bSBTaXplIEJ1c2luZXNzICjigJxNQlrigJ0pIOKAkyBNaWQtU2l6ZWQgQ29tcGFuaWVzIChlLmcuLCBBdXRvIFJlcGFpciBTaG9wcywgU3BvcnRpbmcgU3VwcGxpZXMsIGV0Yy4pPC9saT48bGk+U21hbGwgQnVzaW5lc3MgRXN0YWJsaXNobWVudCAo4oCcU0Ja4oCdKSDigJMgU21hbGwgQnVzaW5lc3NlcyAoZS5nLiwgSGFpciBTYWxvbnMsIEZsb3dlciBTaG9wcywgQ29tcHV0ZXIgUmVwYWlyIFNob3BzLCBDcm9zc2ZpdCBHeW1zLCBldGMuKTwvbGk+PGxpPlBlcnNvbmFsIEJ1c2luZXNzL1NvbGUgUHJvcHJpZXRvcnNoaXAgKOKAnFBFUuKAnSkg4oCTIChlLmcuLCBQZXJzb25hbCBUcmFpbmVycywgWW9nYSBJbnN0cnVjdG9ycywgTXVzaWMgVGVhY2hlcnMsIE1vYmlsZSBBdXRvLVJlcGFpciwgZXRjLik8L2xpPjwvb2w+PC9saT48bGk+PGI+V2hpY2ggQnVzaW5lc3MgQ2xhc3MgYSBCdXNpbmVzcyBmYWxscyBpbnRvIGlzIGRldGVybWluZWQgd2l0aCB0aGUgc29sZSBhbmQgYWJzb2x1dGUgZGlzY3JldGlvbiBvZiBSYW5rLVguIFRoZSBCdXNpbmVzcyBDbGFzcyB0aGF0IGEgQnVzaW5lc3MgZmFsbHMgaW50byBjYW4gYmUgY2hhbmdlZCBhdCBhbnkgdGltZSBpZiBpdCBpcyBkZXRlcm1pbmVkIGJ5IFJhbmstWCB0aGF0IHRoZSBCdXNpbmVzcyBoYXMgY2hhbmdlZCBpbiBzdWNoIGEgd2F5IHRoYXQgd2FycmFudHMgYSBjaGFuZ2UgaW4gQnVzaW5lc3MgQ2xhc3MuPC9iPjwvbGk+PC9vbD48L2xpPjwvb2w+PC9saT48L29sPjxsaT48Yj5Db21tdW5pY2F0aW9uczwvYj4gQnkgYmVjb21pbmcgYSBQcmVtaXVtIE1lbWJlciwgeW91IGFncmVlIHRvIHJlY2VpdmUgY29tbXVuaWNhdGlvbnMgZnJvbSB1cywgaW5jbHVkaW5nIHZpYSBlLW1haWwsIHRleHQgbWVzc2FnZSwgY2FsbHMsIGFuZCBwdXNoIG5vdGlmaWNhdGlvbnMuIFlvdSBhZ3JlZSB0aGF0IHRleHRzLCBjYWxscyBvciBwcmVyZWNvcmRlZCBtZXNzYWdlcyBtYXkgYmUgZ2VuZXJhdGVkIGJ5IGF1dG9tYXRpYyB0ZWxlcGhvbmUgZGlhbGluZyBzeXN0ZW1zLiBDb21tdW5pY2F0aW9ucyBmcm9tIFJhbmstWCwgaXRzIGFmZmlsaWF0ZWQgY29tcGFuaWVzIGFuZC9vciBEcml2ZXJzLCBtYXkgaW5jbHVkZSBidXQgYXJlIG5vdCBsaW1pdGVkIHRvOiBvcGVyYXRpb25hbCBjb21tdW5pY2F0aW9ucyBjb25jZXJuaW5nIHlvdXIgUHJlbWl1bSBNZW1iZXIgYWNjb3VudCBvciB1c2Ugb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciBTZXJ2aWNlcywgdXBkYXRlcyBjb25jZXJuaW5nIG5ldyBhbmQgZXhpc3RpbmcgZmVhdHVyZXMgb24gdGhlIFJhbmstWCBQbGF0Zm9ybSwgY29tbXVuaWNhdGlvbnMgY29uY2VybmluZyBwcm9tb3Rpb25zIHJ1biBieSB1cyBvciBvdXIgdGhpcmQtcGFydHkgcGFydG5lcnMsIGFuZCBuZXdzIGNvbmNlcm5pbmcgUmFuay1YIGFuZCBpbmR1c3RyeSBkZXZlbG9wbWVudHMuIFN0YW5kYXJkIHRleHQgbWVzc2FnaW5nIGNoYXJnZXMgYXBwbGllZCBieSB5b3VyIGNlbGwgcGhvbmUgY2FycmllciB3aWxsIGFwcGx5IHRvIHRleHQgbWVzc2FnZXMgd2Ugc2VuZC48YnI+SUYgWU9VIFdJU0ggVE8gT1BUIE9VVCBPRiBQUk9NT1RJT05BTCBFTUFJTFMsIFlPVSBDQU4gVU5TVUJTQ1JJQkUgRlJPTSBPVVIgUFJPTU9USU9OQUwgRU1BSUwgTElTVCBCWSBGT0xMT1dJTkcgVEhFIFVOU1VCU0NSSUJFIE9QVElPTlMgSU4gVEhFIFBST01PVElPTkFMIEVNQUlMIElUU0VMRi4gWU9VIEFDS05PV0xFREdFIFRIQVQgWU9VIEFSRSBOT1QgUkVRVUlSRUQgVE8gQ09OU0VOVCBUTyBSRUNFSVZFIFBST01PVElPTkFMIFRFWFRTIE9SIENBTExTIEFTIEEgQ09ORElUSU9OIE9GIFVTSU5HIFRIRSBQTEFURk9STSBPUiBUSEUgU0VSVklDRVMuIElGIFlPVSBXSVNIIFRPIE9QVCBPVVQgT0YgQUxMIFRFWFRTIE9SIENBTExTIEZST00gKElOQ0xVRElORyBPUEVSQVRJT05BTCBPUiBUUkFOU0FDVElPTkFMIFRFWFRTIE9SIENBTExTKSwgWU9VIENBTiBOT1RJRlkgVVMgVklBIEVNQUlMLCBIT1dFVkVSIFlPVSBBQ0tOT1dMRURHRSBUSEFUIE9QVElORyBPVVQgT0YgUkVDRUlWSU5HIEFMTCBURVhUUyBNQVkgSU1QQUNUIFlPVVIgVVNFIE9GIFRIRSBSYW5rLVggUExBVEZPUk0gT1IgVEhFIFNFUlZJQ0VTLjwvbGk+PGxpPjxiPllvdXIgSW5mb3JtYXRpb248L2I+IFlvdXIgSW5mb3JtYXRpb24gaXMgYW55IGluZm9ybWF0aW9uIHlvdSBwcm92aWRlLCBwdWJsaXNoIG9yIHBvc3QgdG8gb3IgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtIChpbmNsdWRpbmcgYW55IHByb2ZpbGUgaW5mb3JtYXRpb24geW91IHByb3ZpZGUpIG9yIHNlbmQgdG8gb3RoZXIgVXNlcnMgb3IgUHJlbWl1bSBNZW1iZXJzIChpbmNsdWRpbmcgdmlhIGluLWFwcGxpY2F0aW9uIGZlZWRiYWNrLCBhbnkgZW1haWwgZmVhdHVyZSwgb3IgdGhyb3VnaCBhbnkgLXJlbGF0ZWQgRmFjZWJvb2ssIFR3aXR0ZXIgb3Igb3RoZXIgc29jaWFsIG1lZGlhIHBvc3RpbmcpICh5b3VyIOKAnEluZm9ybWF0aW9u4oCdKS4gWW91IGNvbnNlbnQgdG8gdXMgdXNpbmcgeW91ciBJbmZvcm1hdGlvbiB0byBjcmVhdGUgYSBQcmVtaXVtIE1lbWJlciBhY2NvdW50IHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gdXNlIHRoZSBQbGF0Zm9ybSBhbmQgcGFydGljaXBhdGUgaW4gdGhlIFNlcnZpY2VzLiBPdXIgY29sbGVjdGlvbiBhbmQgdXNlIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCBTZXJ2aWNlcyBpcyBhcyBwcm92aWRlZCBpbiBSYW5rLVjigJlzIFByaXZhY3kgUG9saWN5IGxvY2F0ZWQgYXQgd3d3LlJhbmstWC5jb20vcHJpdmFjeS4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHlvdXIgSW5mb3JtYXRpb24gYW5kIHlvdXIgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgbWVtYmVycyBvZiB0aGUgcHVibGljLCBhbmQgd2UgYWN0IG9ubHkgYXMgYSBwYXNzaXZlIGNvbmR1aXQgZm9yIHlvdXIgb25saW5lIHBvc3Rpbmcgb2YgeW91ciBJbmZvcm1hdGlvbi4gWW91IGFncmVlIHRvIHByb3ZpZGUgYW5kIG1haW50YWluIGFjY3VyYXRlLCBjdXJyZW50IGFuZCBjb21wbGV0ZSBpbmZvcm1hdGlvbiBhbmQgdGhhdCB3ZSBhbmQgb3RoZXIgbWVtYmVycyBvZiB0aGUgcHVibGljIG1heSByZWx5IG9uIHlvdXIgSW5mb3JtYXRpb24gYXMgYWNjdXJhdGUsIGN1cnJlbnQgYW5kIGNvbXBsZXRlLiBUbyBlbmFibGUgUmFuay1YIHRvIHVzZSB5b3VyIEluZm9ybWF0aW9uLCB5b3UgZ3JhbnQgdG8gdXMgYSBub24tZXhjbHVzaXZlLCB3b3JsZHdpZGUsIHBlcnBldHVhbCwgaXJyZXZvY2FibGUsIHJveWFsdHktZnJlZSwgdHJhbnNmZXJhYmxlLCBzdWItbGljZW5zYWJsZSAodGhyb3VnaCBtdWx0aXBsZSB0aWVycykgcmlnaHQgYW5kIGxpY2Vuc2UgdG8gZXhlcmNpc2UgdGhlIGNvcHlyaWdodCwgcHVibGljaXR5LCBhbmQgZGF0YWJhc2UgcmlnaHRzIHlvdSBoYXZlIGluIHlvdXIgSW5mb3JtYXRpb24sIGFuZCB0byB1c2UsIGNvcHksIHBlcmZvcm0sIGRpc3BsYXkgYW5kIGRpc3RyaWJ1dGUgc3VjaCBJbmZvcm1hdGlvbiB0byBwcmVwYXJlIGRlcml2YXRpdmUgd29ya3MsIG9yIGluY29ycG9yYXRlIGludG8gb3RoZXIgd29ya3MsIHN1Y2ggSW5mb3JtYXRpb24sIGluIGFueSBtZWRpYSBub3cga25vd24gb3Igbm90IGN1cnJlbnRseSBrbm93bi4gUmFuay1YIGRvZXMgbm90IGFzc2VydCBhbnkgb3duZXJzaGlwIG92ZXIgeW91ciBJbmZvcm1hdGlvbjsgcmF0aGVyLCBhcyBiZXR3ZWVuIHlvdSBhbmQgUmFuay1YLCBzdWJqZWN0IHRvIHRoZSByaWdodHMgZ3JhbnRlZCB0byB1cyBpbiB0aGlzIEFncmVlbWVudCwgeW91IHJldGFpbiBmdWxsIG93bmVyc2hpcCBvZiBhbGwgb2YgeW91ciBJbmZvcm1hdGlvbiBhbmQgYW55IGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb3Igb3RoZXIgcHJvcHJpZXRhcnkgcmlnaHRzIGFzc29jaWF0ZWQgd2l0aCB5b3VyIEluZm9ybWF0aW9uLjxicj5Zb3UgbWF5IGJlIGFibGUgdG8gY3JlYXRlIG9yIGxvZy1pbiB0byB5b3VyIFJhbmstWCBQcmVtaXVtIE1lbWJlciBhY2NvdW50IHRocm91Z2ggb25saW5lIGFjY291bnRzIHlvdSBtYXkgaGF2ZSB3aXRoIHRoaXJkIHBhcnR5IHNvY2lhbCBuZXR3b3JraW5nIHNpdGVzIChlYWNoIHN1Y2ggYWNjb3VudCwgYW4gXFxcIlNOUyBBY2NvdW50XFxcIikuIEJ5IGNvbm5lY3RpbmcgdG8gUmFuay1YIHRocm91Z2ggYW4gU05TIEFjY291bnQsIHlvdSB1bmRlcnN0YW5kIHRoYXQgUmFuay1YIG1heSBhY2Nlc3MsIHN0b3JlLCBhbmQgbWFrZSBhdmFpbGFibGUgYW55IFNOUyBBY2NvdW50IGNvbnRlbnQgYWNjb3JkaW5nIHRvIHRoZSBwZXJtaXNzaW9uIHNldHRpbmdzIG9mIHlvdXIgU05TIEFjY291bnQgKGUuZy4sIGZyaWVuZHMsIG11dHVhbCBmcmllbmRzLCBjb250YWN0cyBvciBmb2xsb3dpbmcvZm9sbG93ZWQgbGlzdHMgKHRoZSDigJxTTlMgQ29udGVudOKAnSkpLiBZb3UgdW5kZXJzdGFuZCB0aGF0IFNOUyBDb250ZW50IG1heSBiZSBhdmFpbGFibGUgb24gYW5kIHRocm91Z2ggdGhlIFJhbmstWCBQbGF0Zm9ybSB0byBvdGhlciBVc2Vycy4gVW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQgaW4gdGhpcyBBZ3JlZW1lbnQsIGFsbCBTTlMgQ29udGVudCwgaWYgYW55LCBzaGFsbCBiZSBjb25zaWRlcmVkIHRvIGJlIHlvdXIgSW5mb3JtYXRpb24uPC9saT48bGk+PGI+UHJvbW90aW9ucyBhbmQgUmVmZXJyYWwgUHJvZ3JhbXM8L2I+IFJhbmstWCwgYXQgaXRzIHNvbGUgZGlzY3JldGlvbiwgbWF5IG1ha2UgYXZhaWxhYmxlIHByb21vdGlvbnMgd2l0aCBkaWZmZXJlbnQgZmVhdHVyZXMgdG8gYW55IFByZW1pdW0gTWVtYmVycyBvciBwcm9zcGVjdGl2ZSBQcmVtaXVtIE1lbWJlcnMuIFRoZXNlIHByb21vdGlvbnMsIHVubGVzcyBtYWRlIHRvIHlvdSwgc2hhbGwgaGF2ZSBubyBiZWFyaW5nIHdoYXRzb2V2ZXIgb24geW91ciBBZ3JlZW1lbnQgb3IgcmVsYXRpb25zaGlwIHdpdGggUmFuay1YLiBSYW5rLVggcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHdpdGhob2xkIG9yIGRlZHVjdCBjcmVkaXRzIG9yIGJlbmVmaXRzIG9idGFpbmVkIHRocm91Z2ggYSBwcm9tb3Rpb24gaW4gdGhlIGV2ZW50IHRoYXQgUmFuay1YIGRldGVybWluZXMgb3IgYmVsaWV2ZXMgdGhhdCB0aGUgcmVkZW1wdGlvbiBvZiB0aGUgcHJvbW90aW9uIG9yIHJlY2VpcHQgb2YgdGhlIGNyZWRpdCBvciBiZW5lZml0IHdhcyBpbiBlcnJvciwgZnJhdWR1bGVudCwgaWxsZWdhbCwgb3IgaW4gdmlvbGF0aW9uIG9mIHRoZSBhcHBsaWNhYmxlIHByb21vdGlvbiB0ZXJtcyBvciB0aGlzIEFncmVlbWVudC48L2xpPjxsaT48Yj5SZXN0cmljdGVkIEFjdGl2aXRpZXM8L2I+PG9sIHR5cGU9XFxcImFcXFwiPldpdGggcmVzcGVjdCB0byB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCB5b3VyIHBhcnRpY2lwYXRpb24gaW4gdGhlIFByZW1pdW0gTWVtYmVyc2hpcCwgeW91IGFncmVlIHRoYXQgeW91IHdpbGwgbm90OjxsaT5pbXBlcnNvbmF0ZSBhbnkgcGVyc29uLCBidXNpbmVzcywgb3IgZ292ZXJubWVudCBlbnRpdHk7PC9saT48bGk+c3RhbGssIHRocmVhdGVuLCBvciBvdGhlcndpc2UgaGFyYXNzIGFueSBwZXJzb24gb3IgZW50aXR5LCBvciBjYXJyeSBhbnkgd2VhcG9uczs8L2xpPjxsaT52aW9sYXRlIGFueSBsYXcsIHN0YXR1dGUsIHJ1bGUsIHBlcm1pdCwgb3JkaW5hbmNlIG9yIHJlZ3VsYXRpb247PC9saT48bGk+aW50ZXJmZXJlIHdpdGggb3IgZGlzcnVwdCB0aGUgU2VydmljZXMgb3IgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciB0aGUgc2VydmVycyBvciBuZXR3b3JrcyBjb25uZWN0ZWQgdG8gdGhlIFJhbmstWCBQbGF0Zm9ybTs8L2xpPjxsaT5wb3N0IEluZm9ybWF0aW9uIG9yIGludGVyYWN0IG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMgaW4gYSBtYW5uZXIgd2hpY2ggaXMgZmFsc2UsIGluYWNjdXJhdGUsIG1pc2xlYWRpbmcgKGRpcmVjdGx5IG9yIGJ5IG9taXNzaW9uIG9yIGZhaWx1cmUgdG8gdXBkYXRlIGluZm9ybWF0aW9uKSwgZGVmYW1hdG9yeSwgbGliZWxvdXMsIGFidXNpdmUsIG9ic2NlbmUsIHByb2ZhbmUsIG9mZmVuc2l2ZSwgc2V4dWFsbHkgb3JpZW50ZWQsIHRocmVhdGVuaW5nLCBoYXJhc3NpbmcsIG9yIGlsbGVnYWw7PC9saT48bGk+dXNlIHRoZSBSYW5rLVggUGxhdGZvcm0gaW4gYW55IHdheSB0aGF0IGluZnJpbmdlcyBhbnkgdGhpcmQgcGFydHnigJlzIHJpZ2h0cywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bzogaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cywgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgc2VjcmV0IG9yIG90aGVyIHByb3ByaWV0YXJ5IHJpZ2h0cyBvciByaWdodHMgb2YgcHVibGljaXR5IG9yIHByaXZhY3k7PC9saT48bGk+cG9zdCwgZW1haWwgb3Igb3RoZXJ3aXNlIHRyYW5zbWl0IGFueSBtYWxpY2lvdXMgY29kZSwgZmlsZXMgb3IgcHJvZ3JhbXMgZGVzaWduZWQgdG8gaW50ZXJydXB0LCBkYW1hZ2UsIGRlc3Ryb3kgb3IgbGltaXQgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYW55IGNvbXB1dGVyIHNvZnR3YXJlIG9yIGhhcmR3YXJlIG9yIHRlbGVjb21tdW5pY2F0aW9ucyBlcXVpcG1lbnQgb3Igc3VycmVwdGl0aW91c2x5IGludGVyY2VwdCBvciBleHByb3ByaWF0ZSBhbnkgc3lzdGVtLCBkYXRhIG9yIHBlcnNvbmFsIGluZm9ybWF0aW9uOzwvbGk+PGxpPmZvcmdlIGhlYWRlcnMgb3Igb3RoZXJ3aXNlIG1hbmlwdWxhdGUgaWRlbnRpZmllcnMgaW4gb3JkZXIgdG8gZGlzZ3Vpc2UgdGhlIG9yaWdpbiBvZiBhbnkgaW5mb3JtYXRpb24gdHJhbnNtaXR0ZWQgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPuKAnGZyYW1l4oCdIG9yIOKAnG1pcnJvcuKAnSBhbnkgcGFydCBvZiB0aGUgUmFuay1YIFBsYXRmb3JtLCB3aXRob3V0IG91ciBwcmlvciB3cml0dGVuIGF1dGhvcml6YXRpb24gb3IgdXNlIG1ldGEgdGFncyBvciBjb2RlIG9yIG90aGVyIGRldmljZXMgY29udGFpbmluZyBhbnkgcmVmZXJlbmNlIHRvIHVzIGluIG9yZGVyIHRvIGRpcmVjdCBhbnkgcGVyc29uIHRvIGFueSBvdGhlciB3ZWIgc2l0ZSBmb3IgYW55IHB1cnBvc2U7IG9yPC9saT48bGk+bW9kaWZ5LCBhZGFwdCwgdHJhbnNsYXRlLCByZXZlcnNlIGVuZ2luZWVyLCBkZWNpcGhlciwgZGVjb21waWxlIG9yIG90aGVyd2lzZSBkaXNhc3NlbWJsZSBhbnkgcG9ydGlvbiBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIGFueSBzb2Z0d2FyZSB1c2VkIG9uIG9yIGZvciB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPnJlbnQsIGxlYXNlLCBsZW5kLCBzZWxsLCByZWRpc3RyaWJ1dGUsIGxpY2Vuc2Ugb3Igc3VibGljZW5zZSB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIGFjY2VzcyB0byBhbnkgcG9ydGlvbiBvZiB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPnVzZSBhbnkgcm9ib3QsIHNwaWRlciwgc2l0ZSBzZWFyY2gvcmV0cmlldmFsIGFwcGxpY2F0aW9uLCBvciBvdGhlciBtYW51YWwgb3IgYXV0b21hdGljIGRldmljZSBvciBwcm9jZXNzIHRvIHJldHJpZXZlLCBpbmRleCwgc2NyYXBlLCDigJxkYXRhIG1pbmXigJ0sIG9yIGluIGFueSB3YXkgcmVwcm9kdWNlIG9yIGNpcmN1bXZlbnQgdGhlIG5hdmlnYXRpb25hbCBzdHJ1Y3R1cmUgb3IgcHJlc2VudGF0aW9uIG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgaXRzIGNvbnRlbnRzOzwvbGk+PGxpPmxpbmsgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSB0byBhbnkgb3RoZXIgd2ViIHNpdGVzOzwvbGk+PGxpPnRyYW5zZmVyIG9yIHNlbGwgeW91ciBQcmVtaXVtIE1lbWJlciBhY2NvdW50LCBwYXNzd29yZCBhbmQvb3IgaWRlbnRpZmljYXRpb24gdG8gYW55IG90aGVyIHBhcnR5PC9saT48bGk+ZGlzY3JpbWluYXRlIGFnYWluc3Qgb3IgaGFyYXNzIGFueW9uZSBvbiB0aGUgYmFzaXMgb2YgcmFjZSwgbmF0aW9uYWwgb3JpZ2luLCByZWxpZ2lvbiwgZ2VuZGVyLCBnZW5kZXIgaWRlbnRpdHksIHBoeXNpY2FsIG9yIG1lbnRhbCBkaXNhYmlsaXR5LCBtZWRpY2FsIGNvbmRpdGlvbiwgbWFyaXRhbCBzdGF0dXMsIGFnZSBvciBzZXh1YWwgb3JpZW50YXRpb24sIG9yPC9saT48bGk+Y2F1c2UgYW55IHRoaXJkIHBhcnR5IHRvIGVuZ2FnZSBpbiB0aGUgcmVzdHJpY3RlZCBhY3Rpdml0aWVzIGFib3ZlLjwvbGk+PC9vbD48L2xpPjxsaT48Yj5JbnRlbGxlY3R1YWwgUHJvcGVydHk8L2I+IEFsbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gc2hhbGwgYmUgb3duZWQgYnkgUmFuay1YIGFic29sdXRlbHkgYW5kIGluIHRoZWlyIGVudGlyZXR5LiBUaGVzZSByaWdodHMgaW5jbHVkZSBhbmQgYXJlIG5vdCBsaW1pdGVkIHRvIGRhdGFiYXNlIHJpZ2h0cywgY29weXJpZ2h0LCBkZXNpZ24gcmlnaHRzICh3aGV0aGVyIHJlZ2lzdGVyZWQgb3IgdW5yZWdpc3RlcmVkKSwgdHJhZGVtYXJrcyAod2hldGhlciByZWdpc3RlcmVkIG9yIHVucmVnaXN0ZXJlZCkgYW5kIG90aGVyIHNpbWlsYXIgcmlnaHRzIHdoZXJldmVyIGV4aXN0aW5nIGluIHRoZSB3b3JsZCB0b2dldGhlciB3aXRoIHRoZSByaWdodCB0byBhcHBseSBmb3IgcHJvdGVjdGlvbiBvZiB0aGUgc2FtZS4gQWxsIG90aGVyIHRyYWRlbWFya3MsIGxvZ29zLCBzZXJ2aWNlIG1hcmtzLCBjb21wYW55IG9yIHByb2R1Y3QgbmFtZXMgc2V0IGZvcnRoIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gYXJlIHRoZSBwcm9wZXJ0eSBvZiB0aGVpciByZXNwZWN0aXZlIG93bmVycy4gWW91IGFja25vd2xlZGdlIGFuZCBhZ3JlZSB0aGF0IGFueSBxdWVzdGlvbnMsIGNvbW1lbnRzLCBzdWdnZXN0aW9ucywgaWRlYXMsIGZlZWRiYWNrIG9yIG90aGVyIGluZm9ybWF0aW9uICjigJxTdWJtaXNzaW9uc+KAnSkgcHJvdmlkZWQgYnkgeW91IHRvIHVzIGFyZSBub24tY29uZmlkZW50aWFsIGFuZCBzaGFsbCBiZWNvbWUgdGhlIHNvbGUgcHJvcGVydHkgb2YgUmFuay1YLiBSYW5rLVggc2hhbGwgb3duIGV4Y2x1c2l2ZSByaWdodHMsIGluY2x1ZGluZyBhbGwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cywgYW5kIHNoYWxsIGJlIGVudGl0bGVkIHRvIHRoZSB1bnJlc3RyaWN0ZWQgdXNlIGFuZCBkaXNzZW1pbmF0aW9uIG9mIHRoZXNlIFN1Ym1pc3Npb25zIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBvdGhlcndpc2UsIHdpdGhvdXQgYWNrbm93bGVkZ21lbnQgb3IgY29tcGVuc2F0aW9uIHRvIHlvdS48YnI+UmFuay1YIGFuZCBvdGhlciBSYW5rLVggbG9nb3MsIGRlc2lnbnMsIGdyYXBoaWNzLCBpY29ucywgc2NyaXB0cyBhbmQgc2VydmljZSBuYW1lcyBhcmUgcmVnaXN0ZXJlZCB0cmFkZW1hcmtzLCB0cmFkZW1hcmtzIG9yIHRyYWRlIGRyZXNzIG9mIFJhbmstWCBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQvb3Igb3RoZXIgY291bnRyaWVzIChjb2xsZWN0aXZlbHksIHRoZSDigJxSYW5rLVggTWFya3PigJ0pLiBJZiB5b3UgcHJvdmlkZSBTZXJ2aWNlcyBhcyBhIFByZW1pdW0gTWVtYmVyLCBSYW5rLVggZ3JhbnRzIHRvIHlvdSwgZHVyaW5nIHRoZSB0ZXJtIG9mIHRoaXMgQWdyZWVtZW50LCBhbmQgc3ViamVjdCB0byB5b3VyIGNvbXBsaWFuY2Ugd2l0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQsIGEgbGltaXRlZCwgcmV2b2NhYmxlLCBub24tZXhjbHVzaXZlIGxpY2Vuc2UgdG8gZGlzcGxheSBhbmQgdXNlIHRoZSBSYW5rLVggTWFya3Mgc29sZWx5IGluIGNvbm5lY3Rpb24gd2l0aCBwcm92aWRpbmcgdGhlIFNlcnZpY2VzIHRocm91Z2ggdGhlIFJhbmstWCBQbGF0Zm9ybSAo4oCcTGljZW5zZeKAnSkuIFRoZSBMaWNlbnNlIGlzIG5vbi10cmFuc2ZlcmFibGUgYW5kIG5vbi1hc3NpZ25hYmxlLCBhbmQgeW91IHNoYWxsIG5vdCBncmFudCB0byBhbnkgdGhpcmQgcGFydHkgYW55IHJpZ2h0LCBwZXJtaXNzaW9uLCBsaWNlbnNlIG9yIHN1YmxpY2Vuc2Ugd2l0aCByZXNwZWN0IHRvIGFueSBvZiB0aGUgcmlnaHRzIGdyYW50ZWQgaGVyZXVuZGVyIHdpdGhvdXQgUmFuay1Y4oCZcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24sIHdoaWNoIGl0IG1heSB3aXRoaG9sZCBpbiBpdHMgc29sZSBkaXNjcmV0aW9uLiBUaGUgUmFuay1YIE1hcmtzIG1heSBub3QgYmUgdXNlZCBpbiBhbnkgbWFubmVyIHRoYXQgaXMgbGlrZWx5IHRvIGNhdXNlIGNvbmZ1c2lvbi48YnI+WW91IGFja25vd2xlZGdlIHRoYXQgUmFuay1YIGlzIHRoZSBvd25lciBhbmQgbGljZW5zb3Igb2YgdGhlIFJhbmstWCBNYXJrcywgaW5jbHVkaW5nIGFsbCBnb29kd2lsbCBhc3NvY2lhdGVkIHRoZXJld2l0aCwgYW5kIHRoYXQgeW91ciB1c2Ugb2YgdGhlIFJhbmstWCBNYXJrcyB3aWxsIGNvbmZlciBubyBhZGRpdGlvbmFsIGludGVyZXN0IGluIG9yIG93bmVyc2hpcCBvZiB0aGUgUmFuay1YIE1hcmtzIGluIHlvdSBidXQgcmF0aGVyIGludXJlcyB0byB0aGUgYmVuZWZpdCBvZiBSYW5rLVguIFlvdSBhZ3JlZSB0byB1c2UgdGhlIFJhbmstWCBNYXJrcyBzdHJpY3RseSBpbiBhY2NvcmRhbmNlIHdpdGggUmFuay1Y4oCZcyBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgYW55IG90aGVyIGd1aWRlbGluZXMgYXMgbWF5IGJlIHByb3ZpZGVkIHRvIHlvdSBhbmQgcmV2aXNlZCBmcm9tIHRpbWUgdG8gdGltZSwgYW5kIHRvIGltbWVkaWF0ZWx5IGNlYXNlIGFueSB1c2UgdGhhdCBSYW5rLVggZGV0ZXJtaW5lcyB0byBub25jb25mb3JtaW5nIG9yIG90aGVyd2lzZSB1bmFjY2VwdGFibGUuPGJyPllvdSBhZ3JlZSB0aGF0IHlvdSB3aWxsIG5vdDogKDEpIGNyZWF0ZSBhbnkgbWF0ZXJpYWxzIHRoYXQgaW5jb3Jwb3JhdGUgdGhlIFJhbmstWCBNYXJrcyBvciBhbnkgZGVyaXZhdGl2ZXMgb2YgdGhlIFJhbmstWCBNYXJrcyBvdGhlciB0aGFuIGFzIGV4cHJlc3NseSBhcHByb3ZlZCBieSBSYW5rLVggaW4gd3JpdGluZzsgKDIpIHVzZSB0aGUgUmFuay1YIE1hcmtzIGluIGFueSB3YXkgdGhhdCB0ZW5kcyB0byBpbXBhaXIgdGhlaXIgdmFsaWRpdHkgYXMgcHJvcHJpZXRhcnkgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgdHJhZGUgbmFtZXMgb3IgdHJhZGUgZHJlc3MsIG9yIHVzZSB0aGUgUmFuay1YIE1hcmtzIG90aGVyIHRoYW4gaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcywgY29uZGl0aW9ucyBhbmQgcmVzdHJpY3Rpb25zIGhlcmVpbjsgKDMpIHRha2UgYW55IG90aGVyIGFjdGlvbiB0aGF0IHdvdWxkIGplb3BhcmRpemUgb3IgaW1wYWlyIFJhbmstWOKAmXMgcmlnaHRzIGFzIG93bmVyIG9mIHRoZSBSYW5rLVggTWFya3Mgb3IgdGhlIGxlZ2FsaXR5IGFuZC9vciBlbmZvcmNlYWJpbGl0eSBvZiB0aGUgUmFuay1YIE1hcmtzLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgY2hhbGxlbmdpbmcgb3Igb3Bwb3NpbmcgUmFuay1Y4oCZcyBvd25lcnNoaXAgaW4gdGhlIFJhbmstWCBNYXJrczsgKDQpIGFwcGx5IGZvciB0cmFkZW1hcmsgcmVnaXN0cmF0aW9uIG9yIHJlbmV3YWwgb2YgdHJhZGVtYXJrIHJlZ2lzdHJhdGlvbiBvZiBhbnkgb2YgdGhlIFJhbmstWCBNYXJrcywgYW55IGRlcml2YXRpdmUgb2YgdGhlIFJhbmstWCBNYXJrcywgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSBSYW5rLVggTWFya3MgYW5kIGFueSBvdGhlciBuYW1lLCBvciBhbnkgdHJhZGVtYXJrLCBzZXJ2aWNlIG1hcmssIHRyYWRlIG5hbWUsIHN5bWJvbCBvciB3b3JkIHdoaWNoIGlzIHNpbWlsYXIgdG8gdGhlIFJhbmstWCBNYXJrczsgKDUpIHVzZSB0aGUgUmFuay1YIE1hcmtzIG9uIG9yIGluIGNvbm5lY3Rpb24gd2l0aCBhbnkgcHJvZHVjdCwgc2VydmljZSBvciBhY3Rpdml0eSB0aGF0IGlzIGluIHZpb2xhdGlvbiBvZiBhbnkgbGF3LCBzdGF0dXRlLCBnb3Zlcm5tZW50IHJlZ3VsYXRpb24gb3Igc3RhbmRhcmQuPGJyPlZpb2xhdGlvbiBvZiBhbnkgcHJvdmlzaW9uIG9mIHRoaXMgTGljZW5zZSBtYXkgcmVzdWx0IGluIGltbWVkaWF0ZSB0ZXJtaW5hdGlvbiBvZiB0aGUgTGljZW5zZSwgaW4gUmFuay1Y4oCZcyBzb2xlIGRpc2NyZXRpb24uIElmIHlvdSBjcmVhdGUgYW55IG1hdGVyaWFscyBiZWFyaW5nIHRoZSBSYW5rLVggTWFya3MgKGluIHZpb2xhdGlvbiBvZiB0aGlzIEFncmVlbWVudCBvciBvdGhlcndpc2UpLCB5b3UgYWdyZWUgdGhhdCB1cG9uIHRoZWlyIGNyZWF0aW9uIFJhbmstWCBleGNsdXNpdmVseSBvd25zIGFsbCByaWdodCwgdGl0bGUgYW5kIGludGVyZXN0IGluIGFuZCB0byBzdWNoIG1hdGVyaWFscywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiBhbnkgbW9kaWZpY2F0aW9ucyB0byB0aGUgUmFuay1YIE1hcmtzIG9yIGRlcml2YXRpdmUgd29ya3MgYmFzZWQgb24gdGhlIFJhbmstWCBNYXJrcy4gWW91IGZ1cnRoZXIgYWdyZWUgdG8gYXNzaWduIGFueSBpbnRlcmVzdCBvciByaWdodCB5b3UgbWF5IGhhdmUgaW4gc3VjaCBtYXRlcmlhbHMgdG8gUmFuay1YLCBhbmQgdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhbmQgZXhlY3V0ZSBhbnkgZG9jdW1lbnRzIGFzIHJlYXNvbmFibHkgcmVxdWVzdGVkIGJ5IFJhbmstWCB0byBlbmFibGUgUmFuay1YIHRvIGZvcm1hbGl6ZSBzdWNoIGFzc2lnbm1lbnQuPGJyPlJhbmstWCByZXNwZWN0cyB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9mIG90aGVycywgYW5kIGV4cGVjdHMgUHJlbWl1bSBNZW1iZXJzIHRvIGRvIHRoZSBzYW1lLiBJZiB5b3UgYmVsaWV2ZSwgaW4gZ29vZCBmYWl0aCwgdGhhdCBhbnkgbWF0ZXJpYWxzIG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMgaW5mcmluZ2UgdXBvbiB5b3VyIGNvcHlyaWdodHMsIHBsZWFzZSBjb250YWN0IHVzIHZpYSBlbWFpbC48YnI+PC9saT48bGk+PGI+RGlzY2xhaW1lcnM8L2I+IFRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lcnMgYXJlIG1hZGUgb24gYmVoYWxmIG9mIFJhbmstWCwgb3VyIGFmZmlsaWF0ZXMsIHN1YnNpZGlhcmllcywgcGFyZW50cywgc3VjY2Vzc29ycyBhbmQgYXNzaWducywgYW5kIGVhY2ggb2Ygb3VyIHJlc3BlY3RpdmUgb2ZmaWNlcnMsIGRpcmVjdG9ycywgZW1wbG95ZWVzLCBhZ2VudHMsIGFuZCBzaGFyZWhvbGRlcnMuPGJyPlRoZSBSYW5rLVggUGxhdGZvcm0gaXMgcHJvdmlkZWQgb24gYW4g4oCcYXMgaXPigJ0gYmFzaXMgYW5kIHdpdGhvdXQgYW55IHdhcnJhbnR5IG9yIGNvbmRpdGlvbiwgZXhwcmVzcywgaW1wbGllZCBvciBzdGF0dXRvcnkuIFdlIGRvIG5vdCBndWFyYW50ZWUgYW5kIGRvIG5vdCBwcm9taXNlIGFueSBzcGVjaWZpYyByZXN1bHRzIGZyb20gdXNlIG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gYW5kL29yIHRoZSBTZXJ2aWNlcywgaW5jbHVkaW5nIHRoZSBhYmlsaXR5IHRvIHByb3ZpZGUgb3IgcmVjZWl2ZSBTZXJ2aWNlcyBhdCBhbnkgZ2l2ZW4gbG9jYXRpb24gb3IgdGltZS4gV2Ugc3BlY2lmaWNhbGx5IGRpc2NsYWltIGFueSBpbXBsaWVkIHdhcnJhbnRpZXMgb2YgdGl0bGUsIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyIHB1cnBvc2UgYW5kIG5vbi1pbmZyaW5nZW1lbnQuIFNvbWUgc3RhdGVzIGRvIG5vdCBhbGxvdyB0aGUgZGlzY2xhaW1lciBvZiBpbXBsaWVkIHdhcnJhbnRpZXMsIHNvIHRoZSBmb3JlZ29pbmcgZGlzY2xhaW1lciBtYXkgbm90IGFwcGx5IHRvIHlvdS48YnI+V2UgZG8gbm90IHdhcnJhbnQgdGhhdCB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIFNlcnZpY2VzIHdpbGwgYmUgYWNjdXJhdGUsIGNvbXBsZXRlLCByZWxpYWJsZSwgY3VycmVudCwgc2VjdXJlLCB1bmludGVycnVwdGVkLCBhbHdheXMgYXZhaWxhYmxlLCBvciBlcnJvci0gZnJlZSwgb3Igd2lsbCBtZWV0IHlvdXIgcmVxdWlyZW1lbnRzLCB0aGF0IGFueSBkZWZlY3RzIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gd2lsbCBiZSBjb3JyZWN0ZWQsIG9yIHRoYXQgdGhlIFJhbmstWCBQbGF0Zm9ybSBpcyBmcmVlIG9mIHZpcnVzZXMgb3Igb3RoZXIgaGFybWZ1bCBjb21wb25lbnRzLiBXZSBkaXNjbGFpbSBsaWFiaWxpdHkgZm9yLCBhbmQgbm8gd2FycmFudHkgaXMgbWFkZSB3aXRoIHJlc3BlY3QgdG8sIGNvbm5lY3Rpdml0eSBhbmQgYXZhaWxhYmlsaXR5IG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMuPGJyPldlIGNhbm5vdCBndWFyYW50ZWUgdGhhdCBlYWNoIFVzZXIgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBpcyB3aG8gaGUgb3Igc2hlIGNsYWltcyB0byBiZS4gUGxlYXNlIHVzZSBjb21tb24gc2Vuc2Ugd2hlbiB1c2luZyB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCBTZXJ2aWNlcy4gUGxlYXNlIG5vdGUgdGhhdCB0aGVyZSBhcmUgYWxzbyByaXNrcyBvZiBkZWFsaW5nIHdpdGggdW5kZXJhZ2UgcGVyc29ucyBvciBwZW9wbGUgYWN0aW5nIHVuZGVyIGZhbHNlIHByZXRlbnNlLCBhbmQgd2UgZG8gbm90IGFjY2VwdCByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIGFueSBjb250ZW50LCBjb21tdW5pY2F0aW9uIG9yIG90aGVyIHVzZSBvciBhY2Nlc3Mgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBieSBwZXJzb25zIHVuZGVyIHRoZSBhZ2Ugb2YgMTggaW4gdmlvbGF0aW9uIG9mIHRoaXMgQWdyZWVtZW50Ljxicj5SYW5rLVggaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29uZHVjdCwgd2hldGhlciBvbmxpbmUgb3Igb2ZmbGluZSwgb2YgYW55IFVzZXIgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciBTZXJ2aWNlcy4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHlvdXIgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgVXNlcnMuPGJyPlJhbmstWCBleHByZXNzbHkgZGlzY2xhaW1zIGFueSBsaWFiaWxpdHkgYXJpc2luZyBmcm9tIHRoZSB1bmF1dGhvcml6ZWQgdXNlIG9mIHlvdXIgUHJlbWl1bSBNZW1iZXIgYWNjb3VudC4gU2hvdWxkIHlvdSBzdXNwZWN0IHRoYXQgYW55IHVuYXV0aG9yaXplZCBwYXJ0eSBtYXkgYmUgdXNpbmcgeW91ciBQcmVtaXVtIE1lbWJlciBhY2NvdW50IG9yIHlvdSBzdXNwZWN0IGFueSBvdGhlciBicmVhY2ggb2Ygc2VjdXJpdHksIHlvdSBhZ3JlZSB0byBub3RpZnkgdXMgaW1tZWRpYXRlbHkuPGJyPlBsZWFzZSBjYXJlZnVsbHkgc2VsZWN0IHRoZSB0eXBlIG9mIGluZm9ybWF0aW9uIHRoYXQgeW91IHBvc3Qgb24gdGhlIFJhbmstWCBQbGF0Zm9ybSBvciB0aHJvdWdoIHRoZSBTZXJ2aWNlcyBvciByZWxlYXNlIHRvIG90aGVycy4gV2UgZGlzY2xhaW0gYWxsIGxpYWJpbGl0eSwgcmVnYXJkbGVzcyBvZiB0aGUgZm9ybSBvZiBhY3Rpb24sIGZvciB0aGUgYWN0cyBvciBvbWlzc2lvbnMgb2Ygb3RoZXIgVXNlcnMgKGluY2x1ZGluZyB1bmF1dGhvcml6ZWQgdXNlcnMsIG9yIOKAnGhhY2tlcnPigJ0pLjxicj5PcGluaW9ucywgYWR2aWNlLCBzdGF0ZW1lbnRzLCBvZmZlcnMsIG9yIG90aGVyIGluZm9ybWF0aW9uIG9yIGNvbnRlbnQgY29uY2VybmluZyBSYW5rLVggb3IgbWFkZSBhdmFpbGFibGUgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtLCBidXQgbm90IGRpcmVjdGx5IGJ5IHVzLCBhcmUgdGhvc2Ugb2YgdGhlaXIgcmVzcGVjdGl2ZSBhdXRob3JzLCBhbmQgc2hvdWxkIG5vdCBuZWNlc3NhcmlseSBiZSByZWxpZWQgdXBvbi4gU3VjaCBhdXRob3JzIGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHN1Y2ggY29udGVudC4gVW5kZXIgbm8gY2lyY3Vtc3RhbmNlcyB3aWxsIHdlIGJlIHJlc3BvbnNpYmxlIGZvciBhbnkgbG9zcyBvciBkYW1hZ2UgcmVzdWx0aW5nIGZyb20geW91ciByZWxpYW5jZSBvbiBpbmZvcm1hdGlvbiBvciBvdGhlciBjb250ZW50IHBvc3RlZCBieSB0aGlyZCBwYXJ0aWVzLCB3aGV0aGVyIG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3Igb3RoZXJ3aXNlLiBXZSByZXNlcnZlIHRoZSByaWdodCwgYnV0IHdlIGhhdmUgbm8gb2JsaWdhdGlvbiwgdG8gbW9uaXRvciB0aGUgbWF0ZXJpYWxzIHBvc3RlZCBvbiB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCByZW1vdmUgYW55IHN1Y2ggbWF0ZXJpYWwgdGhhdCBpbiBvdXIgc29sZSBvcGluaW9uIHZpb2xhdGVzLCBvciBpcyBhbGxlZ2VkIHRvIHZpb2xhdGUsIHRoZSBsYXcgb3IgdGhpcyBhZ3JlZW1lbnQgb3Igd2hpY2ggbWlnaHQgYmUgb2ZmZW5zaXZlLCBpbGxlZ2FsLCBvciB0aGF0IG1pZ2h0IHZpb2xhdGUgdGhlIHJpZ2h0cywgaGFybSwgb3IgdGhyZWF0ZW4gdGhlIHNhZmV0eSBvZiBVc2VycyBvciBvdGhlcnMuPGJyPlRoaXMgcGFyYWdyYXBoIGFwcGxpZXMgdG8gYW55IHZlcnNpb24gb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSB0aGF0IHlvdSBhY3F1aXJlIGZyb20gdGhlIEFwcGxlIEFwcCBTdG9yZS4gVGhpcyBBZ3JlZW1lbnQgaXMgZW50ZXJlZCBpbnRvIGJldHdlZW4geW91IGFuZCBSYW5rLVguIEFwcGxlLCBJbmMuICjigJxBcHBsZeKAnSkgaXMgbm90IGEgcGFydHkgdG8gdGhpcyBBZ3JlZW1lbnQgYW5kIHNoYWxsIGhhdmUgbm8gb2JsaWdhdGlvbnMgd2l0aCByZXNwZWN0IHRvIHRoZSBSYW5rLVggUGxhdGZvcm0uIFJhbmstWCwgbm90IEFwcGxlLCBpcyBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHRoZSBSYW5rLVggUGxhdGZvcm0gYW5kIHRoZSBjb250ZW50IHRoZXJlb2YgYXMgc2V0IGZvcnRoIGhlcmV1bmRlci4gSG93ZXZlciwgQXBwbGUgYW5kIEFwcGxl4oCZcyBzdWJzaWRpYXJpZXMgbWF5IGJlIHRoaXJkIHBhcnR5IGJlbmVmaWNpYXJpZXMgb2YgdGhpcyBBZ3JlZW1lbnQuIFVwb24geW91ciBhY2NlcHRhbmNlIG9mIHRoaXMgQWdyZWVtZW50LCBBcHBsZSBzaGFsbCBoYXZlIHRoZSByaWdodCAoYW5kIHdpbGwgYmUgZGVlbWVkIHRvIGhhdmUgYWNjZXB0ZWQgdGhlIHJpZ2h0KSB0byBlbmZvcmNlIHRoaXMgQWdyZWVtZW50IGFnYWluc3QgeW91IGFzIGEgdGhpcmQgcGFydHkgYmVuZWZpY2lhcnkgdGhlcmVvZi4gVGhpcyBBZ3JlZW1lbnQgaW5jb3Jwb3JhdGVzIGJ5IHJlZmVyZW5jZSBBcHBsZeKAmXMgTGljZW5zZWQgQXBwbGljYXRpb24gRW5kIFVzZXIgTGljZW5zZSBBZ3JlZW1lbnQsIGZvciBwdXJwb3NlcyBvZiB3aGljaCwgeW91IGFyZSDigJx0aGUgZW5kLXVzZXIu4oCdIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGluIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZWQgQXBwbGljYXRpb24gRW5kIFVzZXIgTGljZW5zZSBBZ3JlZW1lbnQgYW5kIHRoaXMgQWdyZWVtZW50LCB0aGUgdGVybXMgb2YgdGhpcyBBZ3JlZW1lbnQgc2hhbGwgY29udHJvbC48L2xpPjxsaT48Yj5JbmRlbW5pdHk8L2I+IFlvdSB3aWxsIGRlZmVuZCwgaW5kZW1uaWZ5LCBhbmQgaG9sZCBSYW5rLVggaW5jbHVkaW5nIG91ciBhZmZpbGlhdGVzLCBzdWJzaWRpYXJpZXMsIHBhcmVudHMsIHN1Y2Nlc3NvcnMgYW5kIGFzc2lnbnMsIGFuZCBlYWNoIG9mIG91ciByZXNwZWN0aXZlIG9mZmljZXJzLCBkaXJlY3RvcnMsIGVtcGxveWVlcywgYWdlbnRzLCBvciBzaGFyZWhvbGRlcnMgaGFybWxlc3MgZnJvbSBhbnkgY2xhaW1zLCBhY3Rpb25zLCBzdWl0cywgbG9zc2VzLCBjb3N0cywgbGlhYmlsaXRpZXMgYW5kIGV4cGVuc2VzIChpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leXPigJkgZmVlcykgcmVsYXRpbmcgdG8gb3IgYXJpc2luZyBvdXQgb2YgeW91ciB1c2Ugb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBhbmQgcGFydGljaXBhdGlvbiBpbiB0aGUgU2VydmljZXMsIGluY2x1ZGluZzogKDEpIHlvdXIgYnJlYWNoIG9mIHRoaXMgQWdyZWVtZW50IG9yIHRoZSBkb2N1bWVudHMgaXQgaW5jb3Jwb3JhdGVzIGJ5IHJlZmVyZW5jZTsgKDIpIHlvdXIgdmlvbGF0aW9uIG9mIGFueSBsYXcgb3IgdGhlIHJpZ2h0cyBvZiBhIHRoaXJkIHBhcnR5LCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgRHJpdmVycywgUmlkZXJzLCBvdGhlciBtb3RvcmlzdHMsIGFuZCBwZWRlc3RyaWFucywgYXMgYSByZXN1bHQgb2YgeW91ciBvd24gaW50ZXJhY3Rpb24gd2l0aCBzdWNoIHRoaXJkIHBhcnR5OyAoMykgYW55IGFsbGVnYXRpb24gdGhhdCBhbnkgbWF0ZXJpYWxzIHRoYXQgeW91IHN1Ym1pdCB0byB1cyBvciB0cmFuc21pdCB0aHJvdWdoIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgdG8gdXMgaW5mcmluZ2Ugb3Igb3RoZXJ3aXNlIHZpb2xhdGUgdGhlIGNvcHlyaWdodCwgdHJhZGVtYXJrLCB0cmFkZSBzZWNyZXQgb3Igb3RoZXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHJpZ2h0cyBvZiBhbnkgdGhpcmQgcGFydHk7ICg0KSB5b3VyIG93bmVyc2hpcCwgdXNlIG9yIG9wZXJhdGlvbiBvZiBhIG1vdG9yIHZlaGljbGUgb3IgcGFzc2VuZ2VyIHZlaGljbGUsIGluY2x1ZGluZyB5b3VyIHByb3Zpc2lvbiBvZiBTZXJ2aWNlcyBhcyBhIERyaXZlcjsgYW5kL29yICg1KSBhbnkgb3RoZXIgYWN0aXZpdGllcyBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNlcnZpY2VzLiBUaGlzIGluZGVtbml0eSBzaGFsbCBiZSBhcHBsaWNhYmxlIHdpdGhvdXQgcmVnYXJkIHRvIHRoZSBuZWdsaWdlbmNlIG9mIGFueSBwYXJ0eSwgaW5jbHVkaW5nIGFueSBpbmRlbW5pZmllZCBwZXJzb24uPC9saT48bGk+PGI+TGltaXRhdGlvbiBvZiBMaWFiaWxpdHk8L2I+IElOIE5PIEVWRU5UIFdJTEwgUkFOSy1YLCBJTkNMVURJTkcgT1VSIEFGRklMSUFURVMsIFNVQlNJRElBUklFUywgUEFSRU5UUywgU1VDQ0VTU09SUyBBTkQgQVNTSUdOUywgQU5EIEVBQ0ggT0YgT1VSIFJFU1BFQ1RJVkUgT0ZGSUNFUlMsIERJUkVDVE9SUywgRU1QTE9ZRUVTLCBBR0VOVFMsIE9SIFNIQVJFSE9MREVSUyAoQ09MTEVDVElWRUxZIOKAnFJBTkstWOKAnSBGT1IgUFVSUE9TRVMgT0YgVEhJUyBTRUNUSU9OKSwgQkUgTElBQkxFIFRPIFlPVSBGT1IgQU5ZIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgUFVOSVRJVkUsIENPTlNFUVVFTlRJQUwsIE9SIElORElSRUNUIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBEQU1BR0VTIEZPUiBERUxFVElPTiwgQ09SUlVQVElPTiwgTE9TUyBPRiBEQVRBLCBMT1NTIE9GIFBST0dSQU1TLCBGQUlMVVJFIFRPIFNUT1JFIEFOWSBJTkZPUk1BVElPTiBPUiBPVEhFUiBDT05URU5UIE1BSU5UQUlORUQgT1IgVFJBTlNNSVRURUQgQlkgVEhFIFJBTkstWCBQTEFURk9STSwgU0VSVklDRSBJTlRFUlJVUFRJT05TLCBPUiBGT1IgVEhFIENPU1QgT0YgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBTRVJWSUNFUykgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBSQU5LLVggUExBVEZPUk0sIFRIRSBTRVJWSUNFUywgT1IgVEhJUyBBR1JFRU1FTlQsIEhPV0VWRVIgQVJJU0lORyBJTkNMVURJTkcgTkVHTElHRU5DRSwgRVZFTiBJRiBXRSBPUiBPVVIgQUdFTlRTIE9SIFJFUFJFU0VOVEFUSVZFUyBLTk9XIE9SIEhBVkUgQkVFTiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRVMuIFRIRSBSQU5LLVggUExBVEZPUk0gTUFZIEJFIFVTRUQgQlkgWU9VIFRPIFJFUVVFU1QgQU5EIFNDSEVEVUxFIFRSQU5TUE9SVEFUSU9OLCBHT09EUywgT1IgT1RIRVIgU0VSVklDRVMgV0lUSCBUSElSRCBQQVJUWSBQUk9WSURFUlMsIEJVVCBZT1UgQUdSRUUgVEhBVCBSQU5LLVggSEFTIE5PIFJFU1BPTlNJQklMSVRZIE9SIExJQUJJTElUWSBUTyBZT1UgUkVMQVRFRCBUTyBBTlkgVFJBTlNQT1JUQVRJT04sIEdPT0RTIE9SIE9USEVSIFNFUlZJQ0VTIFBST1ZJREVEIFRPIFlPVSBCWSBUSElSRCBQQVJUWSBQUk9WSURFUlMgT1RIRVIgVEhBTiBBUyBFWFBSRVNTTFkgU0VUIEZPUlRIIElOIFRoZWlyIFRFUk1TLiBDRVJUQUlOIEpVUklTRElDVElPTlMgTUFZIE5PVCBBTExPVyBUSEUgRVhDTFVTSU9OIE9SIExJTUlUQVRJT04gT0YgQ0VSVEFJTiBEQU1BR0VTLiBJRiBUSEVTRSBMQVdTIEFQUExZIFRPIFlPVSwgU09NRSBPUiBBTEwgT0YgVEhFIEFCT1ZFIERJU0NMQUlNRVJTLCBFWENMVVNJT05TIE9SIExJTUlUQVRJT05TIE1BWSBOT1QgQVBQTFkgVE8gWU9VLCBBTkQgWU9VIE1BWSBIQVZFIEFERElUSU9OQUwgUklHSFRTLjwvbGk+PGxpPjxiPlRlcm0gYW5kIFRlcm1pbmF0aW9uPC9iPiBUaGlzIEFncmVlbWVudCBpcyBlZmZlY3RpdmUgdXBvbiB5b3VyIGNyZWF0aW9uIG9mIGEgUHJlbWl1bSBNZW1iZXIgYWNjb3VudC4gVGhpcyBBZ3JlZW1lbnQgbWF5IGJlIHRlcm1pbmF0ZWQ6IGEpIGJ5IFByZW1pdW0gTWVtYmVyLCB3aXRob3V0IGNhdXNlLCB1cG9uIHNldmVuICg3KSBkYXlz4oCZIHByaW9yIHdyaXR0ZW4gbm90aWNlIHRvIFJhbmstWDsgb3IgYikgYnkgZWl0aGVyIFBhcnR5IGltbWVkaWF0ZWx5LCB3aXRob3V0IG5vdGljZSwgdXBvbiB0aGUgb3RoZXIgUGFydHnigJlzIG1hdGVyaWFsIGJyZWFjaCBvZiB0aGlzIEFncmVlbWVudCwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBhbnkgYnJlYWNoIG9mIFNlY3Rpb24gOCBvciBicmVhY2ggb2YgU2VjdGlvbiA5IG9mIHRoaXMgQWdyZWVtZW50LiBJbiBhZGRpdGlvbiwgUmFuay1YIG1heSB0ZXJtaW5hdGUgdGhpcyBBZ3JlZW1lbnQgb3IgZGVhY3RpdmF0ZSB5b3VyIFVzZXIgYWNjb3VudCBpbW1lZGlhdGVseSBpbiB0aGUgZXZlbnQ6ICgxKSB5b3Ugbm8gbG9uZ2VyIHF1YWxpZnkgdG8gcHJvdmlkZSBTZXJ2aWNlcyBvciB0byBvcGVyYXRlIHRoZSBhcHByb3ZlZCB2ZWhpY2xlIHVuZGVyIGFwcGxpY2FibGUgbGF3LCBydWxlLCBwZXJtaXQsIG9yZGluYW5jZSBvciByZWd1bGF0aW9uOyAoMikgeW91IGZhbGwgYmVsb3cgUmFuay1Y4oCZcyBzdGFyIHJhdGluZyBvciBjYW5jZWxsYXRpb24gdGhyZXNob2xkOyAoMykgUmFuay1YIGhhcyB0aGUgZ29vZCBmYWl0aCBiZWxpZWYgdGhhdCBzdWNoIGFjdGlvbiBpcyBuZWNlc3NhcnkgdG8gcHJvdGVjdCB0aGUgc2FmZXR5IG9mIHRoZSBSYW5rLVggY29tbXVuaXR5IG9yIHRoaXJkIHBhcnRpZXMsIHByb3ZpZGVkIHRoYXQgaW4gdGhlIGV2ZW50IG9mIGEgZGVhY3RpdmF0aW9uIHB1cnN1YW50IHRvICgxKS0oMykgYWJvdmUsIHlvdSB3aWxsIGJlIGdpdmVuIG5vdGljZSBvZiB0aGUgcG90ZW50aWFsIG9yIGFjdHVhbCBkZWFjdGl2YXRpb24gYW5kIGFuIG9wcG9ydHVuaXR5IHRvIGF0dGVtcHQgdG8gY3VyZSB0aGUgaXNzdWUgdG8gUmFuay1Y4oCZcyByZWFzb25hYmxlIHNhdGlzZmFjdGlvbiBwcmlvciB0byBSYW5rLVggcGVybWFuZW50bHkgdGVybWluYXRpbmcgdGhlIEFncmVlbWVudC4gRm9yIGFsbCBvdGhlciBicmVhY2hlcyBvZiB0aGlzIEFncmVlbWVudCwgeW91IHdpbGwgYmUgcHJvdmlkZWQgbm90aWNlIGFuZCBhbiBvcHBvcnR1bml0eSB0byBjdXJlIHRoZSBicmVhY2guIElmIHRoZSBicmVhY2ggaXMgY3VyZWQgaW4gYSB0aW1lbHkgbWFubmVyIGFuZCB0byBSYW5rLVjigJlzIHNhdGlzZmFjdGlvbiwgdGhpcyBBZ3JlZW1lbnQgd2lsbCBub3QgYmUgcGVybWFuZW50bHkgdGVybWluYXRlZC4gU2VjdGlvbnMgMiwgNCwgNiwgOSAod2l0aCByZXNwZWN0IHRvIHRoZSBsaWNlbnNlKSwgMTAtMTIsIDE0LTE2IHNoYWxsIHN1cnZpdmUgYW55IHRlcm1pbmF0aW9uIG9yIGV4cGlyYXRpb24gb2YgdGhpcyBBZ3JlZW1lbnQuPC9saT48bGk+PGI+Q29uZmlkZW50aWFsaXR5PC9iPiBZb3UgYWdyZWUgbm90IHRvIHVzZSBhbnkgdGVjaG5pY2FsLCBmaW5hbmNpYWwsIHN0cmF0ZWdpYyBhbmQgb3RoZXIgcHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbCBpbmZvcm1hdGlvbiByZWxhdGluZyB0byBSYW5rLVjigJlzIGJ1c2luZXNzLCBvcGVyYXRpb25zIGFuZCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgUHJlbWl1bSBNZW1iZXIgaW5mb3JtYXRpb24gKOKAnENvbmZpZGVudGlhbCBJbmZvcm1hdGlvbuKAnSkgZGlzY2xvc2VkIHRvIHlvdSBieSBSYW5rLVggZm9yIHlvdXIgb3duIHVzZSBvciBmb3IgYW55IHB1cnBvc2Ugb3RoZXIgdGhhbiBhcyBjb250ZW1wbGF0ZWQgaGVyZWluLiBZb3Ugc2hhbGwgbm90IGRpc2Nsb3NlIG9yIHBlcm1pdCBkaXNjbG9zdXJlIG9mIGFueSBDb25maWRlbnRpYWwgSW5mb3JtYXRpb24gdG8gdGhpcmQgcGFydGllcy4gWW91IGFncmVlIHRvIHRha2UgYWxsIHJlYXNvbmFibGUgbWVhc3VyZXMgdG8gcHJvdGVjdCB0aGUgc2VjcmVjeSBvZiBhbmQgYXZvaWQgZGlzY2xvc3VyZSBvciB1c2Ugb2YgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIG9mIFJhbmstWCBpbiBvcmRlciB0byBwcmV2ZW50IGl0IGZyb20gZmFsbGluZyBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLiBOb3R3aXRoc3RhbmRpbmcgdGhlIGFib3ZlLCB5b3Ugc2hhbGwgbm90IGhhdmUgbGlhYmlsaXR5IHRvIFJhbmstWCB3aXRoIHJlZ2FyZCB0byBhbnkgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIHdoaWNoIHlvdSBjYW4gcHJvdmU6IHdhcyBpbiB0aGUgcHVibGljIGRvbWFpbiBhdCB0aGUgdGltZSBpdCB3YXMgZGlzY2xvc2VkIGJ5IFJhbmstWCBvciBoYXMgZW50ZXJlZCB0aGUgcHVibGljIGRvbWFpbiB0aHJvdWdoIG5vIGZhdWx0IG9mIHlvdXJzOyB3YXMga25vd24gdG8geW91LCB3aXRob3V0IHJlc3RyaWN0aW9uLCBhdCB0aGUgdGltZSBvZiBkaXNjbG9zdXJlLCBhcyBkZW1vbnN0cmF0ZWQgYnkgZmlsZXMgaW4gZXhpc3RlbmNlIGF0IHRoZSB0aW1lIG9mIGRpc2Nsb3N1cmU7IGlzIGRpc2Nsb3NlZCB3aXRoIHRoZSBwcmlvciB3cml0dGVuIGFwcHJvdmFsIG9mIFJhbmstWDsgYmVjb21lcyBrbm93biB0byB5b3UsIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGZyb20gYSBzb3VyY2Ugb3RoZXIgdGhhbiBSYW5rLVggd2l0aG91dCBicmVhY2ggb2YgdGhpcyBBZ3JlZW1lbnQgYnkgeW91IGFuZCBvdGhlcndpc2Ugbm90IGluIHZpb2xhdGlvbiBvZiBSYW5rLVjigJlzIHJpZ2h0czsgb3IgaXMgZGlzY2xvc2VkIHB1cnN1YW50IHRvIHRoZSBvcmRlciBvciByZXF1aXJlbWVudCBvZiBhIGNvdXJ0LCBhZG1pbmlzdHJhdGl2ZSBhZ2VuY3ksIG9yIG90aGVyIGdvdmVybm1lbnRhbCBib2R5OyBwcm92aWRlZCwgaG93ZXZlciwgdGhhdCBZb3Ugc2hhbGwgcHJvdmlkZSBwcm9tcHQgbm90aWNlIG9mIHN1Y2ggY291cnQgb3JkZXIgb3IgcmVxdWlyZW1lbnQgdG8gUmFuay1YIHRvIGVuYWJsZSBSYW5rLVggdG8gc2VlayBhIHByb3RlY3RpdmUgb3JkZXIgb3Igb3RoZXJ3aXNlIHByZXZlbnQgb3IgcmVzdHJpY3Qgc3VjaCBkaXNjbG9zdXJlLjwvbGk+PGxpPjxiPkdlbmVyYWw8L2I+IEV4Y2VwdCBhcyBwcm92aWRlZCBpbiBTZWN0aW9uIDE2LCB0aGlzIEFncmVlbWVudCBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3cyBvZiB0aGUgU3RhdGUgb2YgQ2FsaWZvcm5pYSB3aXRob3V0IHJlZ2FyZCB0byBjaG9pY2Ugb2YgbGF3IHByaW5jaXBsZXMuIFRoaXMgY2hvaWNlIG9mIGxhdyBwcm92aXNpb24gaXMgb25seSBpbnRlbmRlZCB0byBzcGVjaWZ5IHRoZSB1c2Ugb2YgQ2FsaWZvcm5pYSBsYXcgdG8gaW50ZXJwcmV0IHRoaXMgQWdyZWVtZW50IGFuZCBpcyBub3QgaW50ZW5kZWQgdG8gY3JlYXRlIGFueSBvdGhlciBzdWJzdGFudGl2ZSByaWdodCB0byBub24tQ2FsaWZvcm5pYW5zIHRvIGFzc2VydCBjbGFpbXMgdW5kZXIgQ2FsaWZvcm5pYSBsYXcgd2hldGhlciBieSBzdGF0dXRlLCBjb21tb24gbGF3LCBvciBvdGhlcndpc2UuIElmIGFueSBwcm92aXNpb24gb2YgdGhpcyBBZ3JlZW1lbnQgaXMgb3IgYmVjb21lcyBpbnZhbGlkIG9yIG5vbi1iaW5kaW5nLCB0aGUgcGFydGllcyBzaGFsbCByZW1haW4gYm91bmQgYnkgYWxsIG90aGVyIHByb3Zpc2lvbnMgaGVyZW9mLiBJbiB0aGF0IGV2ZW50LCB0aGUgcGFydGllcyBzaGFsbCByZXBsYWNlIHRoZSBpbnZhbGlkIG9yIG5vbi0gYmluZGluZyBwcm92aXNpb24gd2l0aCBwcm92aXNpb25zIHRoYXQgYXJlIHZhbGlkIGFuZCBiaW5kaW5nIGFuZCB0aGF0IGhhdmUsIHRvIHRoZSBncmVhdGVzdCBleHRlbnQgcG9zc2libGUsIGEgc2ltaWxhciBlZmZlY3QgYXMgdGhlIGludmFsaWQgb3Igbm9uLWJpbmRpbmcgcHJvdmlzaW9uLCBnaXZlbiB0aGUgY29udGVudHMgYW5kIHB1cnBvc2Ugb2YgdGhpcyBBZ3JlZW1lbnQuIFlvdSBhZ3JlZSB0aGF0IHRoaXMgQWdyZWVtZW50IGFuZCBhbGwgaW5jb3Jwb3JhdGVkIGFncmVlbWVudHMgbWF5IGJlIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYnkgUmFuay1YLCBpbiBvdXIgc29sZSBkaXNjcmV0aW9uIGJ5IHByb3ZpZGluZyBub3RpY2UgdG8geW91LiBFeGNlcHQgYXMgZXhwbGljaXRseSBzdGF0ZWQgb3RoZXJ3aXNlLCBhbnkgbm90aWNlcyB0byBSYW5rLVggc2hhbGwgYmUgZ2l2ZW4gYnkgY2VydGlmaWVkIG1haWwsIHBvc3RhZ2UgcHJlcGFpZCBhbmQgcmV0dXJuIHJlY2VpcHQgcmVxdWVzdGVkIHRvIFJhbmstWC4gQW55IG5vdGljZXMgdG8geW91IHNoYWxsIGJlIHByb3ZpZGVkIHRvIHlvdSB0aHJvdWdoIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgZ2l2ZW4gdG8geW91IHZpYSB0aGUgZW1haWwgYWRkcmVzcyBvciBwaHlzaWNhbCB5b3UgcHJvdmlkZSB0byBSYW5rLVggZHVyaW5nIHRoZSByZWdpc3RyYXRpb24gcHJvY2Vzcy4gSGVhZGluZ3MgYXJlIGZvciByZWZlcmVuY2UgcHVycG9zZXMgb25seSBhbmQgaW4gbm8gd2F5IGRlZmluZSwgbGltaXQsIGNvbnN0cnVlIG9yIGRlc2NyaWJlIHRoZSBzY29wZSBvciBleHRlbnQgb2Ygc3VjaCBzZWN0aW9uLiBBIHBhcnR54oCZcyBmYWlsdXJlIHRvIGFjdCB3aXRoIHJlc3BlY3QgdG8gYSBicmVhY2ggYnkgdGhlIG90aGVyIHBhcnR5IGRvZXMgbm90IGNvbnN0aXR1dGUgYSB3YWl2ZXIgb2YgdGhlIHBhcnR54oCZcyByaWdodCB0byBhY3Qgd2l0aCByZXNwZWN0IHRvIHN1YnNlcXVlbnQgb3Igc2ltaWxhciBicmVhY2hlcy4gVGhpcyBBZ3JlZW1lbnQgc2V0cyBmb3J0aCB0aGUgZW50aXJlIHVuZGVyc3RhbmRpbmcgYW5kIGFncmVlbWVudCBiZXR3ZWVuIHlvdSBhbmQgUmFuay1YIHdpdGggcmVzcGVjdCB0byB0aGUgc3ViamVjdCBtYXR0ZXIgaGVyZW9mIGFuZCBzdXBlcnNlZGVzIGFsbCBwcmV2aW91cyB1bmRlcnN0YW5kaW5ncyBhbmQgYWdyZWVtZW50cyBiZXR3ZWVuIHRoZSBwYXJ0aWVzLCB3aGV0aGVyIG9yYWwgb3Igd3JpdHRlbi48L2xpPjxsaT48Yj5EaXNwdXRlIFJlc29sdXRpb24gYW5kIEFyYml0cmF0aW9uIEFncmVlbWVudDwvYj48b2wgdHlwZT1cXFwiYVxcXCI+PGxpPjxiPkFncmVlbWVudCB0byBCaW5kaW5nIEFyYml0cmF0aW9uIEJldHdlZW4gWW91IGFuZCBSYW5rLVguPC9iPiBZT1UgQU5EIFJBTkstWCBNVVRVQUxMWSBBR1JFRSBUTyBXQUlWRSBPVVIgUkVTUEVDVElWRSBSSUdIVFMgVE8gUkVTT0xVVElPTiBPRiBESVNQVVRFUyBJTiBBIENPVVJUIE9GIExBVyBCWSBBIEpVREdFIE9SIEpVUlkgQU5EIEFHUkVFIFRPIFJFU09MVkUgQU5ZIERJU1BVVEUgQlkgQVJCSVRSQVRJT04sIGFzIHNldCBmb3J0aCBiZWxvdy4gVGhpcyBhZ3JlZW1lbnQgdG8gYXJiaXRyYXRlICjigJxBcmJpdHJhdGlvbiBBZ3JlZW1lbnTigJ0pIGlzIGdvdmVybmVkIGJ5IHRoZSBGZWRlcmFsIEFyYml0cmF0aW9uIEFjdCBhbmQgc3Vydml2ZXMgYWZ0ZXIgdGhlIEFncmVlbWVudCB0ZXJtaW5hdGVzIG9yIHlvdXIgcmVsYXRpb25zaGlwIHdpdGggUmFuay1YIGVuZHMuIEFOWSBBUkJJVFJBVElPTiBVTkRFUiBUSElTIEFHUkVFTUVOVCBXSUxMIFRBS0UgUExBQ0UgT04gQU4gSU5ESVZJRFVBTCBCQVNJUzsgQ0xBU1MgQVJCSVRSQVRJT05TIEFORCBDTEFTUyBBQ1RJT05TIEFSRSBOT1QgUEVSTUlUVEVELiBFeGNlcHQgYXMgZXhwcmVzc2x5IHByb3ZpZGVkIGJlbG93LCB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBhcHBsaWVzIHRvIGFsbCBDbGFpbXMgKGRlZmluZWQgYmVsb3cpIGJldHdlZW4geW91IGFuZCBSYW5rLVgsIGluY2x1ZGluZyBvdXIgYWZmaWxpYXRlcywgc3Vic2lkaWFyaWVzLCBwYXJlbnRzLCBzdWNjZXNzb3JzIGFuZCBhc3NpZ25zLCBhbmQgZWFjaCBvZiBvdXIgcmVzcGVjdGl2ZSBvZmZpY2VycywgZGlyZWN0b3JzLCBlbXBsb3llZXMsIGFnZW50cywgb3Igc2hhcmVob2xkZXJzLjxicj5FeGNlcHQgYXMgZXhwcmVzc2x5IHByb3ZpZGVkIGJlbG93LCBBTEwgRElTUFVURVMgQU5EIENMQUlNUyBCRVRXRUVOIFVTIChFQUNIIEEg4oCcQ0xBSU3igJ0gQU5EIENPTExFQ1RJVkVMWSwg4oCcQ0xBSU1T4oCdKSBTSEFMTCBCRSBFWENMVVNJVkVMWSBSRVNPTFZFRCBCWSBCSU5ESU5HIEFSQklUUkFUSU9OIFNPTEVMWSBCRVRXRUVOIFlPVSBBTkQgUkFOSy1YLiBUaGVzZSBDbGFpbXMgaW5jbHVkZSwgYnV0IGFyZSBub3QgbGltaXRlZCB0bywgYW55IGRpc3B1dGUsIGNsYWltIG9yIGNvbnRyb3ZlcnN5LCB3aGV0aGVyIGJhc2VkIG9uIHBhc3QsIHByZXNlbnQsIG9yIGZ1dHVyZSBldmVudHMsIGFyaXNpbmcgb3V0IG9mIG9yIHJlbGF0aW5nIHRvOiB0aGlzIEFncmVlbWVudCBhbmQgcHJpb3IgdmVyc2lvbnMgdGhlcmVvZiAoaW5jbHVkaW5nIHRoZSBicmVhY2gsIHRlcm1pbmF0aW9uLCBlbmZvcmNlbWVudCwgaW50ZXJwcmV0YXRpb24gb3IgdmFsaWRpdHkgdGhlcmVvZiksIHRoZSBSYW5rLVggUGxhdGZvcm0sIHRoZSBTZXJ2aWNlcywgYW55IG90aGVyIGdvb2RzIG9yIHNlcnZpY2VzIG1hZGUgYXZhaWxhYmxlIHRocm91Z2ggdGhlIFJhbmstWCBQbGF0Zm9ybSwgeW91ciByZWxhdGlvbnNoaXAgd2l0aCBSYW5rLVgsIHRoZSB0aHJlYXRlbmVkIG9yIGFjdHVhbCBzdXNwZW5zaW9uLCBkZWFjdGl2YXRpb24gb3IgdGVybWluYXRpb24gb2YgeW91ciBQcmVtaXVtIE1lbWJlciBBY2NvdW50IG9yIHRoaXMgQWdyZWVtZW50LCBwYXltZW50cyBtYWRlIGJ5IHlvdSBvciBhbnkgcGF5bWVudHMgbWFkZSBvciBhbGxlZ2VkbHkgb3dlZCB0byB5b3UsIGFueSBwcm9tb3Rpb25zIG9yIG9mZmVycyBtYWRlIGJ5IFJhbmstWCwgYW55IGNpdHksIGNvdW50eSwgc3RhdGUgb3IgZmVkZXJhbCB3YWdlLWhvdXIgbGF3LCB0cmFkZSBzZWNyZXRzLCB1bmZhaXIgY29tcGV0aXRpb24sIGNvbXBlbnNhdGlvbiwgYnJlYWtzIGFuZCByZXN0IHBlcmlvZHMsIGV4cGVuc2UgcmVpbWJ1cnNlbWVudCwgd3JvbmdmdWwgdGVybWluYXRpb24sIGRpc2NyaW1pbmF0aW9uLCBoYXJhc3NtZW50LCByZXRhbGlhdGlvbiwgZnJhdWQsIGRlZmFtYXRpb24sIGVtb3Rpb25hbCBkaXN0cmVzcywgYnJlYWNoIG9mIGFueSBleHByZXNzIG9yIGltcGxpZWQgY29udHJhY3Qgb3IgY292ZW5hbnQsIGNsYWltcyBhcmlzaW5nIHVuZGVyIGZlZGVyYWwgb3Igc3RhdGUgY29uc3VtZXIgcHJvdGVjdGlvbiBsYXdzOyBjbGFpbXMgYXJpc2luZyB1bmRlciBhbnRpdHJ1c3QgbGF3cywgY2xhaW1zIGFyaXNpbmcgdW5kZXIgdGhlIFRlbGVwaG9uZSBDb25zdW1lciBQcm90ZWN0aW9uIEFjdCBhbmQgRmFpciBDcmVkaXQgUmVwb3J0aW5nIEFjdDsgYW5kIGNsYWltcyBhcmlzaW5nIHVuZGVyIHRoZSBVbmlmb3JtIFRyYWRlIFNlY3JldHMgQWN0LCBDaXZpbCBSaWdodHMgQWN0IG9mIDE5NjQsIEFtZXJpY2FucyBXaXRoIERpc2FiaWxpdGllcyBBY3QsIEFnZSBEaXNjcmltaW5hdGlvbiBpbiBFbXBsb3ltZW50IEFjdCwgT2xkZXIgV29ya2VycyBCZW5lZml0IFByb3RlY3Rpb24gQWN0LCBGYW1pbHkgTWVkaWNhbCBMZWF2ZSBBY3QsIEZhaXIgTGFib3IgU3RhbmRhcmRzIEFjdCwgRW1wbG95ZWUgUmV0aXJlbWVudCBJbmNvbWUgU2VjdXJpdHkgQWN0IChleGNlcHQgZm9yIGluZGl2aWR1YWwgY2xhaW1zIGZvciBlbXBsb3llZSBiZW5lZml0cyB1bmRlciBhbnkgYmVuZWZpdCBwbGFuIHNwb25zb3JlZCBieSBSYW5rLVggYW5kIGNvdmVyZWQgYnkgdGhlIEVtcGxveWVlIFJldGlyZW1lbnQgSW5jb21lIFNlY3VyaXR5IEFjdCBvZiAxOTc0IG9yIGZ1bmRlZCBieSBpbnN1cmFuY2UpLCBhbmQgc3RhdGUgc3RhdHV0ZXMsIGlmIGFueSwgYWRkcmVzc2luZyB0aGUgc2FtZSBvciBzaW1pbGFyIHN1YmplY3QgbWF0dGVycywgYW5kIGFsbCBvdGhlciBmZWRlcmFsIGFuZCBzdGF0ZSBzdGF0dXRvcnkgYW5kIGNvbW1vbiBsYXcgY2xhaW1zLiBBbGwgZGlzcHV0ZXMgY29uY2VybmluZyB0aGUgYXJiaXRyYWJpbGl0eSBvZiBhIENsYWltIChpbmNsdWRpbmcgZGlzcHV0ZXMgYWJvdXQgdGhlIHNjb3BlLCBhcHBsaWNhYmlsaXR5LCBlbmZvcmNlYWJpbGl0eSwgcmV2b2NhYmlsaXR5IG9yIHZhbGlkaXR5IG9mIHRoZSBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQpIHNoYWxsIGJlIGRlY2lkZWQgYnkgdGhlIGFyYml0cmF0b3IsIGV4Y2VwdCBhcyBleHByZXNzbHkgcHJvdmlkZWQgYmVsb3cuPGJyPkJZIEFHUkVFSU5HIFRPIEFSQklUUkFUSU9OLCBZT1UgVU5ERVJTVEFORCBUSEFUIFlPVSBBTkQgUkFOSy1YIEFSRSBXQUlWSU5HIFRIRSBSSUdIVCBUTyBTVUUgSU4gQ09VUlQgT1IgSEFWRSBBIEpVUlkgVFJJQUwgRk9SIEFMTCBDTEFJTVMsIEVYQ0VQVCBBUyBFWFBSRVNTTFkgT1RIRVJXSVNFIFBST1ZJREVEIElOIFRISVMgQVJCSVRSQVRJT04gQUdSRUVNRU5ULiBUaGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBpcyBpbnRlbmRlZCB0byByZXF1aXJlIGFyYml0cmF0aW9uIG9mIGV2ZXJ5IGNsYWltIG9yIGRpc3B1dGUgdGhhdCBjYW4gbGF3ZnVsbHkgYmUgYXJiaXRyYXRlZCwgZXhjZXB0IGZvciB0aG9zZSBjbGFpbXMgYW5kIGRpc3B1dGVzIHdoaWNoIGJ5IHRoZSB0ZXJtcyBvZiB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBhcmUgZXhwcmVzc2x5IGV4Y2x1ZGVkIGZyb20gdGhlIHJlcXVpcmVtZW50IHRvIGFyYml0cmF0ZS48L2xpPjxsaT48Yj5Qcm9oaWJpdGlvbiBvZiBDbGFzcyBBY3Rpb25zIGFuZCBOb24tSW5kaXZpZHVhbGl6ZWQgUmVsaWVmLjwvYj4gWU9VIFVOREVSU1RBTkQgQU5EIEFHUkVFIFRIQVQgWU9VIEFORCBSQU5LLVggTUFZIEVBQ0ggQlJJTkcgQ0xBSU1TIElOIEFSQklUUkFUSU9OIEFHQUlOU1QgVEhFIE9USEVSIE9OTFkgSU4gQU4gSU5ESVZJRFVBTCBDQVBBQ0lUWSBBTkQgTk9UIE9OIEEgQ0xBU1MsIENPTExFQ1RJVkUgQUNUSU9OLCBPUiBSRVBSRVNFTlRBVElWRSBCQVNJUyAo4oCcQ0xBU1MgQUNUSU9OIFdBSVZFUuKAnSkuIFlPVSBVTkRFUlNUQU5EIEFORCBBR1JFRSBUSEFUIFlPVSBBTkQgUkFOSy1YIEJPVEggQVJFIFdBSVZJTkcgVEhFIFJJR0hUIFRPIFBVUlNVRSBPUiBIQVZFIEEgRElTUFVURSBSRVNPTFZFRCBBUyBBIFBMQUlOVElGRiBPUiBDTEFTUyBNRU1CRVIgSU4gQU5ZIFBVUlBPUlRFRCBDTEFTUywgQ09MTEVDVElWRSBPUiBSRVBSRVNFTlRBVElWRSBQUk9DRUVESU5HLiBOT1RXSVRIU1RBTkRJTkcgVEhFIEZPUkVHT0lORywgVEhJUyBTVUJTRUNUSU9OIChCKSBTSEFMTCBOT1QgQVBQTFkgVE8gUkVQUkVTRU5UQVRJVkUgUFJJVkFURSBBVFRPUk5FWVMgR0VORVJBTCBBQ1QgQ0xBSU1TIEJST1VHSFQgQUdBSU5TVCBSQU5LLVgsIFdISUNIIEFSRSBBRERSRVNTRUQgU0VQQVJBVEVMWSBJTiBTRUNUSU9OIDE3KEMpLjxicj5UaGUgYXJiaXRyYXRvciBzaGFsbCBoYXZlIG5vIGF1dGhvcml0eSB0byBjb25zaWRlciBvciByZXNvbHZlIGFueSBDbGFpbSBvciBpc3N1ZSBhbnkgcmVsaWVmIG9uIGFueSBiYXNpcyBvdGhlciB0aGFuIGFuIGluZGl2aWR1YWwgYmFzaXMuIFRoZSBhcmJpdHJhdG9yIHNoYWxsIGhhdmUgbm8gYXV0aG9yaXR5IHRvIGNvbnNpZGVyIG9yIHJlc29sdmUgYW55IENsYWltIG9yIGlzc3VlIGFueSByZWxpZWYgb24gYSBjbGFzcywgY29sbGVjdGl2ZSwgb3IgcmVwcmVzZW50YXRpdmUgYmFzaXMuPGJyPk5vdHdpdGhzdGFuZGluZyBhbnkgb3RoZXIgcHJvdmlzaW9uIG9mIHRoaXMgQWdyZWVtZW50LCB0aGUgQXJiaXRyYXRpb24gQWdyZWVtZW50IG9yIHRoZSBBQUEgUnVsZXMsIGRpc3B1dGVzIHJlZ2FyZGluZyB0aGUgc2NvcGUsIGFwcGxpY2FiaWxpdHksIGVuZm9yY2VhYmlsaXR5LCByZXZvY2FiaWxpdHkgb3IgdmFsaWRpdHkgb2YgdGhlIENsYXNzIEFjdGlvbiBXYWl2ZXIgbWF5IGJlIHJlc29sdmVkIG9ubHkgYnkgYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uIGFuZCBub3QgYnkgYW4gYXJiaXRyYXRvci4gSW4gYW55IGNhc2UgaW4gd2hpY2g6ICgxKSB0aGUgZGlzcHV0ZSBpcyBmaWxlZCBhcyBhIGNsYXNzLCBjb2xsZWN0aXZlLCBvciByZXByZXNlbnRhdGl2ZSBhY3Rpb24gYW5kICgyKSB0aGVyZSBpcyBhIGZpbmFsIGp1ZGljaWFsIGRldGVybWluYXRpb24gdGhhdCB0aGUgQ2xhc3MgQWN0aW9uIFdhaXZlciBpcyB1bmVuZm9yY2VhYmxlIGFzIHRvIGFueSBDbGFpbXMsIHRoZSBjbGFzcywgY29sbGVjdGl2ZSwgYW5kL29yIHJlcHJlc2VudGF0aXZlIGFjdGlvbiBvbiBzdWNoIENsYWltcyBtdXN0IGJlIGxpdGlnYXRlZCBpbiBhIGNpdmlsIGNvdXJ0IG9mIGNvbXBldGVudCBqdXJpc2RpY3Rpb24sIGJ1dCB0aGUgQ2xhc3MgQWN0aW9uIFdhaXZlciBzaGFsbCBiZSBlbmZvcmNlZCBpbiBhcmJpdHJhdGlvbiBvbiBhbiBpbmRpdmlkdWFsIGJhc2lzIGFzIHRvIGFsbCBvdGhlciBDbGFpbXMgdG8gdGhlIGZ1bGxlc3QgZXh0ZW50IHBvc3NpYmxlLjwvbGk+PGxpPjxiPlJlcHJlc2VudGF0aXZlIFBBR0EgV2FpdmVyLjwvYj4gTm90d2l0aHN0YW5kaW5nIGFueSBvdGhlciBwcm92aXNpb24gb2YgdGhpcyBBZ3JlZW1lbnQgb3IgdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudCwgdG8gdGhlIGZ1bGxlc3QgZXh0ZW50IHBlcm1pdHRlZCBieSBsYXc6ICgxKSB5b3UgYW5kIFJhbmstWCBhZ3JlZSBub3QgdG8gYnJpbmcgYSByZXByZXNlbnRhdGl2ZSBhY3Rpb24gb24gYmVoYWxmIG9mIG90aGVycyB1bmRlciB0aGUgUHJpdmF0ZSBBdHRvcm5leXMgR2VuZXJhbCBBY3Qgb2YgMjAwNCAo4oCcUEFHQeKAnSksIENhbGlmb3JuaWEgTGFib3IgQ29kZSDCpyAyNjk4IGV0IHNlcS4sIGluIGFueSBjb3VydCBvciBpbiBhcmJpdHJhdGlvbiwgYW5kICgyKSBmb3IgYW55IGNsYWltIGJyb3VnaHQgb24gYSBwcml2YXRlIGF0dG9ybmV5IGdlbmVyYWwgYmFzaXMsIGluY2x1ZGluZyB1bmRlciB0aGUgQ2FsaWZvcm5pYSBQQUdBLCBib3RoIHlvdSBhbmQgUmFuay1YIGFncmVlIHRoYXQgYW55IHN1Y2ggZGlzcHV0ZSBzaGFsbCBiZSByZXNvbHZlZCBpbiBhcmJpdHJhdGlvbiBvbiBhbiBpbmRpdmlkdWFsIGJhc2lzIG9ubHkgKGkuZS4sIHRvIHJlc29sdmUgd2hldGhlciB5b3UgaGF2ZSBwZXJzb25hbGx5IGJlZW4gYWdncmlldmVkIG9yIHN1YmplY3QgdG8gYW55IHZpb2xhdGlvbnMgb2YgbGF3KSwgYW5kIHRoYXQgc3VjaCBhbiBhY3Rpb24gbWF5IG5vdCBiZSB1c2VkIHRvIHJlc29sdmUgdGhlIGNsYWltcyBvciByaWdodHMgb2Ygb3RoZXIgaW5kaXZpZHVhbHMgaW4gYSBzaW5nbGUgb3IgY29sbGVjdGl2ZSBwcm9jZWVkaW5nIChpLmUuLCB0byByZXNvbHZlIHdoZXRoZXIgb3RoZXIgaW5kaXZpZHVhbHMgaGF2ZSBiZWVuIGFnZ3JpZXZlZCBvciBzdWJqZWN0IHRvIGFueSB2aW9sYXRpb25zIG9mIGxhdykgKGNvbGxlY3RpdmVseSwg4oCccmVwcmVzZW50YXRpdmUgUEFHQSBXYWl2ZXLigJ0pLiBOb3R3aXRoc3RhbmRpbmcgYW55IG90aGVyIHByb3Zpc2lvbiBvZiB0aGlzIEFncmVlbWVudCwgdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudCBvciB0aGUgQUFBIFJ1bGVzLCBkaXNwdXRlcyByZWdhcmRpbmcgdGhlIHNjb3BlLCBhcHBsaWNhYmlsaXR5LCBlbmZvcmNlYWJpbGl0eSwgcmV2b2NhYmlsaXR5IG9yIHZhbGlkaXR5IG9mIHRoaXMgcmVwcmVzZW50YXRpdmUgUEFHQSBXYWl2ZXIgbWF5IGJlIHJlc29sdmVkIG9ubHkgYnkgYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uIGFuZCBub3QgYnkgYW4gYXJiaXRyYXRvci4gSWYgYW55IHByb3Zpc2lvbiBvZiB0aGlzIHJlcHJlc2VudGF0aXZlIFBBR0EgV2FpdmVyIGlzIGZvdW5kIHRvIGJlIHVuZW5mb3JjZWFibGUgb3IgdW5sYXdmdWwgZm9yIGFueSByZWFzb246IChpKSB0aGUgdW5lbmZvcmNlYWJsZSBwcm92aXNpb24gc2hhbGwgYmUgc2V2ZXJlZCBmcm9tIHRoaXMgQWdyZWVtZW50OyAoaWkpIHNldmVyYW5jZSBvZiB0aGUgdW5lbmZvcmNlYWJsZSBwcm92aXNpb24gc2hhbGwgaGF2ZSBubyBpbXBhY3Qgd2hhdHNvZXZlciBvbiB0aGUgQXJiaXRyYXRpb24gQWdyZWVtZW50IG9yIHRoZSByZXF1aXJlbWVudCB0aGF0IGFueSByZW1haW5pbmcgQ2xhaW1zIGJlIGFyYml0cmF0ZWQgb24gYW4gaW5kaXZpZHVhbCBiYXNpcyBwdXJzdWFudCB0byB0aGUgQXJiaXRyYXRpb24gQWdyZWVtZW50OyBhbmQgKGlpaSkgYW55IHN1Y2ggcmVwcmVzZW50YXRpdmUgUEFHQSBvciBvdGhlciByZXByZXNlbnRhdGl2ZSBwcml2YXRlIGF0dG9ybmV5cyBnZW5lcmFsIGFjdCBjbGFpbXMgbXVzdCBiZSBsaXRpZ2F0ZWQgaW4gYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uIGFuZCBub3QgaW4gYXJiaXRyYXRpb24uIFRvIHRoZSBleHRlbnQgdGhhdCB0aGVyZSBhcmUgYW55IENsYWltcyB0byBiZSBsaXRpZ2F0ZWQgaW4gYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uIGJlY2F1c2UgYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uIGRldGVybWluZXMgdGhhdCB0aGUgcmVwcmVzZW50YXRpdmUgUEFHQSBXYWl2ZXIgaXMgdW5lbmZvcmNlYWJsZSB3aXRoIHJlc3BlY3QgdG8gdGhvc2UgQ2xhaW1zLCB0aGUgUGFydGllcyBhZ3JlZSB0aGF0IGxpdGlnYXRpb24gb2YgdGhvc2UgQ2xhaW1zIHNoYWxsIGJlIHN0YXllZCBwZW5kaW5nIHRoZSBvdXRjb21lIG9mIGFueSBpbmRpdmlkdWFsIENsYWltcyBpbiBhcmJpdHJhdGlvbi48L2xpPjxsaT48Yj5SdWxlcyBHb3Zlcm5pbmcgdGhlIEFyYml0cmF0aW9uLjwvYj4gQW55IGFyYml0cmF0aW9uIGNvbmR1Y3RlZCBwdXJzdWFudCB0byB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBzaGFsbCBiZSBhZG1pbmlzdGVyZWQgYnkgdGhlIEFtZXJpY2FuIEFyYml0cmF0aW9uIEFzc29jaWF0aW9uICjigJxBQUHigJ0pIHB1cnN1YW50IHRvIGl0cyBDb25zdW1lciBBcmJpdHJhdGlvbiBSdWxlcyB0aGF0IGFyZSBpbiBlZmZlY3QgYXQgdGhlIHRpbWUgdGhlIGFyYml0cmF0aW9uIGlzIGluaXRpYXRlZCwgYXMgbW9kaWZpZWQgYnkgdGhlIHRlcm1zIHNldCBmb3J0aCBpbiB0aGlzIEFncmVlbWVudC4gQ29waWVzIG9mIHRoZXNlIHJ1bGVzIGNhbiBiZSBvYnRhaW5lZCBhdCB0aGUgQUFB4oCZcyB3ZWJzaXRlICh3d3cuYWRyLm9yZykgKHRoZSDigJxBQUEgUnVsZXPigJ0pIG9yIGJ5IGNhbGxpbmcgdGhlIEFBQSBhdCAxLTgwMC03NzgtNzg3OS4gTm90d2l0aHN0YW5kaW5nIHRoZSBmb3JlZ29pbmcsIGlmIHJlcXVlc3RlZCBieSB5b3UgYW5kIGlmIHByb3BlciBiYXNlZCBvbiB0aGUgZmFjdHMgYW5kIGNpcmN1bXN0YW5jZXMgb2YgdGhlIENsYWltcyBwcmVzZW50ZWQsIHRoZSBhcmJpdHJhdG9yIHNoYWxsIGhhdmUgdGhlIGRpc2NyZXRpb24gdG8gc2VsZWN0IGEgZGlmZmVyZW50IHNldCBvZiBBQUEgUnVsZXMsIGJ1dCBpbiBubyBldmVudCBzaGFsbCB0aGUgYXJiaXRyYXRvciBjb25zb2xpZGF0ZSBtb3JlIHRoYW4gb25lIHBlcnNvbuKAmXMgQ2xhaW1zLCBvciBvdGhlcndpc2UgcHJlc2lkZSBvdmVyIGFueSBmb3JtIG9mIHJlcHJlc2VudGF0aXZlLCBjb2xsZWN0aXZlLCBvciBjbGFzcyBwcm9jZWVkaW5nLjxicj5BcyBwYXJ0IG9mIHRoZSBhcmJpdHJhdGlvbiwgYm90aCB5b3UgYW5kIFJhbmstWCB3aWxsIGhhdmUgdGhlIG9wcG9ydHVuaXR5IGZvciByZWFzb25hYmxlIGRpc2NvdmVyeSBvZiBub24tcHJpdmlsZWdlZCBpbmZvcm1hdGlvbiB0aGF0IGlzIHJlbGV2YW50IHRvIHRoZSBDbGFpbS4gVGhlIGFyYml0cmF0b3IgbWF5IGF3YXJkIGFueSBpbmRpdmlkdWFsaXplZCByZW1lZGllcyB0aGF0IHdvdWxkIGJlIGF2YWlsYWJsZSBpbiBjb3VydC4gVGhlIGFyYml0cmF0b3IgbWF5IGF3YXJkIGRlY2xhcmF0b3J5IG9yIGluanVuY3RpdmUgcmVsaWVmIG9ubHkgaW4gZmF2b3Igb2YgdGhlIGluZGl2aWR1YWwgcGFydHkgc2Vla2luZyByZWxpZWYgYW5kIG9ubHkgdG8gdGhlIGV4dGVudCBuZWNlc3NhcnkgdG8gcHJvdmlkZSByZWxpZWYgd2FycmFudGVkIGJ5IHRoYXQgcGFydHlcXCdzIGluZGl2aWR1YWwgY2xhaW1zLiBUaGUgYXJiaXRyYXRvciB3aWxsIHByb3ZpZGUgYSByZWFzb25lZCB3cml0dGVuIHN0YXRlbWVudCBvZiB0aGUgYXJiaXRyYXRvcuKAmXMgZGVjaXNpb24gd2hpY2ggc2hhbGwgZXhwbGFpbiB0aGUgYXdhcmQgZ2l2ZW4gYW5kIHRoZSBmaW5kaW5ncyBhbmQgY29uY2x1c2lvbnMgb24gd2hpY2ggdGhlIGRlY2lzaW9uIGlzIGJhc2VkLjxicj5UaGUgYXJiaXRyYXRvciB3aWxsIGRlY2lkZSB0aGUgc3Vic3RhbmNlIG9mIGFsbCBjbGFpbXMgaW4gYWNjb3JkYW5jZSB3aXRoIGFwcGxpY2FibGUgbGF3LCBhbmQgd2lsbCBob25vciBhbGwgY2xhaW1zIG9mIHByaXZpbGVnZSByZWNvZ25pemVkIGJ5IGxhdy4gVGhlIGFyYml0cmF0b3Igc2hhbGwgbm90IGJlIGJvdW5kIGJ5IHJ1bGluZ3MgaW4gcHJpb3IgYXJiaXRyYXRpb25zIGludm9sdmluZyBkaWZmZXJlbnQgUmlkZXJzIG9yIERyaXZlcnMsIGJ1dCBpcyBib3VuZCBieSBydWxpbmdzIGluIHByaW9yIGFyYml0cmF0aW9ucyBpbnZvbHZpbmcgdGhlIHNhbWUgUmlkZXIgb3IgRHJpdmVyIHRvIHRoZSBleHRlbnQgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcuIFRoZSBhcmJpdHJhdG9y4oCZcyBhd2FyZCBzaGFsbCBiZSBmaW5hbCBhbmQgYmluZGluZyBhbmQganVkZ21lbnQgb24gdGhlIGF3YXJkIHJlbmRlcmVkIGJ5IHRoZSBhcmJpdHJhdG9yIG1heSBiZSBlbnRlcmVkIGluIGFueSBjb3VydCBoYXZpbmcganVyaXNkaWN0aW9uIHRoZXJlb2YsIHByb3ZpZGVkIHRoYXQgYW55IGF3YXJkIG1heSBiZSBjaGFsbGVuZ2VkIGluIGEgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbi48L2xpPjxsaT48Yj5BcmJpdHJhdGlvbiBGZWVzIGFuZCBBd2FyZHMuPC9iPiBUaGUgcGF5bWVudCBvZiBmaWxpbmcgYW5kIGFyYml0cmF0aW9uIGZlZXMgd2lsbCBiZSBnb3Zlcm5lZCBieSB0aGUgcmVsZXZhbnQgQUFBIFJ1bGVzIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBtb2RpZmljYXRpb25zOjxvbCB0eXBlPVxcXCJpXFxcIj48bGk+SWYgeW91IGluaXRpYXRlIGFyYml0cmF0aW9uIHVuZGVyIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IGFmdGVyIHBhcnRpY2lwYXRpbmcgaW4gdGhlIG9wdGlvbmFsIE5lZ290aWF0aW9uIHByb2Nlc3MgZGVzY3JpYmVkIGluIHN1YnNlY3Rpb24gKGspIGJlbG93IGFuZCBhcmUgb3RoZXJ3aXNlIHJlcXVpcmVkIHRvIHBheSBhIGZpbGluZyBmZWUgdW5kZXIgdGhlIHJlbGV2YW50IEFBQSBSdWxlcywgUmFuay1YIGFncmVlcyB0aGF0LCB1bmxlc3MgeW91ciBjbGFpbSBpcyBmb3IgJDUsMDAwIG9yIG1vcmUsIHlvdXIgc2hhcmUgb2YgdGhlIGZpbGluZyBhbmQgYXJiaXRyYXRpb24gZmVlcyBpcyBsaW1pdGVkIHRvICQ1MCwgYW5kIHRoYXQsIGFmdGVyIHlvdSBzdWJtaXQgcHJvb2Ygb2YgcGF5bWVudCBvZiB0aGUgZmlsaW5nIGZlZSB0byBSYW5rLVgsIFJhbmstWCB3aWxsIHByb21wdGx5IHJlaW1idXJzZSB5b3UgZm9yIGFsbCBidXQgJDUwIG9mIHRoZSBmaWxpbmcgZmVlLiBJZiwgaG93ZXZlciwgdGhlIGFyYml0cmF0b3IgZmluZHMgdGhhdCBlaXRoZXIgdGhlIHN1YnN0YW5jZSBvZiB5b3VyIGNsYWltIG9yIHRoZSByZWxpZWYgc291Z2h0IGluIHRoZSBjbGFpbSBpcyBmcml2b2xvdXMgb3IgYnJvdWdodCBmb3IgYW4gaW1wcm9wZXIgcHVycG9zZSAoYXMgbWVhc3VyZWQgYnkgdGhlIHN0YW5kYXJkcyBzZXQgZm9ydGggaW4gRmVkZXJhbCBSdWxlIG9mIENpdmlsIFByb2NlZHVyZSAxMShiKSksIHRoZW4gdGhlIHBheW1lbnQgb2YgYWxsIHN1Y2ggZmVlcyB3aWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBBQUEgUnVsZXMuPC9saT48bGk+UmFuay1YIGluaXRpYXRlcyBhcmJpdHJhdGlvbiB1bmRlciB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCwgUmFuay1YIHdpbGwgcGF5IGFsbCBBQUEgZmlsaW5nIGFuZCBhcmJpdHJhdGlvbiBmZWVzLjwvbGk+PGxpPldpdGggcmVzcGVjdCB0byBhbnkgQ2xhaW1zIGJyb3VnaHQgYnkgUmFuay1YIGFnYWluc3QgYSBQcmVtaXVtIE1lbWJlciwgb3IgZm9yIENsYWltcyBicm91Z2h0IGJ5IGEgUHJlbWl1bSBNZW1iZXIgYWdhaW5zdCBSYW5rLVggdGhhdDogKEEpIGFyaXNlIG91dCBvZiwgb3IgcmVsYXRlIHRvLCBSYW5rLVjigJlzIGFjdHVhbCBkZWFjdGl2YXRpb24gb2YgYSBQcmVtaXVtIE1lbWJlcuKAmXMgYWNjb3VudCBvciBhIHRocmVhdCBieSBSYW5rLVggdG8gZGVhY3RpdmF0ZSBhIFByZW1pdW0gTWVtYmVy4oCZcyBhY2NvdW50OyBvciAoQykgYXJpc2Ugb3V0IG9mLCBvciByZWxhdGUgdG8sIFJhbmstWOKAmXMgYWN0dWFsIHRlcm1pbmF0aW9uIG9mIGEgUHJlbWl1bSBNZW1iZXLigJlzIEFncmVlbWVudCB3aXRoIFJhbmstWCB1bmRlciB0aGUgdGVybWluYXRpb24gcHJvdmlzaW9ucyBvZiB0aGlzIEFncmVlbWVudCwgb3IgYSB0aHJlYXQgYnkgUmFuay1YIHRvIHRlcm1pbmF0ZSBhIFByZW1pdW0gTWVtYmVy4oCZcyBBZ3JlZW1lbnQsIFJhbmstWCBzaGFsbCBwYXkgYWxsIGNvc3RzIHVuaXF1ZSB0byBhcmJpdHJhdGlvbiAoYXMgY29tcGFyZWQgdG8gdGhlIGNvc3RzIG9mIGFkanVkaWNhdGluZyB0aGUgc2FtZSBjbGFpbXMgYmVmb3JlIGEgY291cnQpLCBpbmNsdWRpbmcgdGhlIHJlZ3VsYXIgYW5kIGN1c3RvbWFyeSBhcmJpdHJhdGlvbiBmZWVzIGFuZCBleHBlbnNlcyAodG8gdGhlIGV4dGVudCBub3QgcGFpZCBieSBSYW5rLVggcHVyc3VhbnQgdG8gdGhlIGZlZSBwcm92aXNpb25zIGFib3ZlKS4gSG93ZXZlciwgaWYgeW91IGFyZSB0aGUgcGFydHkgaW5pdGlhdGluZyB0aGUgUHJlbWl1bSBNZW1iZXIgQ2xhaW0sIHlvdSBzaGFsbCBiZSByZXNwb25zaWJsZSBmb3IgY29udHJpYnV0aW5nIHVwIHRvIGFuIGFtb3VudCBlcXVhbCB0byB0aGUgZmlsaW5nIGZlZSB0aGF0IHdvdWxkIGJlIHBhaWQgdG8gaW5pdGlhdGUgdGhlIGNsYWltIGluIHRoZSBjb3VydCBvZiBnZW5lcmFsIGp1cmlzZGljdGlvbiBpbiB0aGUgc3RhdGUgaW4gd2hpY2ggeW91IHByb3ZpZGUgU2VydmljZXMgdG8gQnVzaW5lc3NlcywgdW5sZXNzIGEgbG93ZXIgZmVlIGFtb3VudCB3b3VsZCBiZSBvd2VkIGJ5IHlvdSBwdXJzdWFudCB0byB0aGUgQUFBIFJ1bGVzLCBhcHBsaWNhYmxlIGxhdywgb3Igc3Vic2VjdGlvbiAoZSkoMSkgYWJvdmUuIEFueSBkaXNwdXRlIGFzIHRvIHdoZXRoZXIgYSBjb3N0IGlzIHVuaXF1ZSB0byBhcmJpdHJhdGlvbiBzaGFsbCBiZSByZXNvbHZlZCBieSB0aGUgYXJiaXRyYXRvci48L2xpPjxsaT5FeGNlcHQgYXMgcHJvdmlkZWQgaW4gRmVkZXJhbCBSdWxlIG9mIENpdmlsIFByb2NlZHVyZSA2OCBvciBhbnkgc3RhdGUgZXF1aXZhbGVudHMsIGVhY2ggcGFydHkgc2hhbGwgcGF5IGl0cyBvd24gYXR0b3JuZXlz4oCZIGZlZXMgYW5kIHBheSBhbnkgY29zdHMgdGhhdCBhcmUgbm90IHVuaXF1ZSB0byB0aGUgYXJiaXRyYXRpb24gKGkuZS4sIGNvc3RzIHRoYXQgZWFjaCBwYXJ0eSB3b3VsZCBpbmN1ciBpZiB0aGUgY2xhaW0ocykgd2VyZSBsaXRpZ2F0ZWQgaW4gYSBjb3VydCBzdWNoIGFzIGNvc3RzIHRvIHN1YnBvZW5hIHdpdG5lc3NlcyBhbmQvb3IgZG9jdW1lbnRzLCB0YWtlIGRlcG9zaXRpb25zIGFuZCBwdXJjaGFzZSBkZXBvc2l0aW9uIHRyYW5zY3JpcHRzLCBjb3B5IGRvY3VtZW50cywgZXRjLikuPC9saT48bGk+QXQgdGhlIGVuZCBvZiBhbnkgYXJiaXRyYXRpb24sIHRoZSBhcmJpdHJhdG9yIG1heSBhd2FyZCByZWFzb25hYmxlIGZlZXMgYW5kIGNvc3RzIG9yIGFueSBwb3J0aW9uIHRoZXJlb2YgdG8geW91IGlmIHlvdSBwcmV2YWlsLCB0byB0aGUgZXh0ZW50IGF1dGhvcml6ZWQgYnkgYXBwbGljYWJsZSBsYXcuPGJyPnZpLiBJZiB0aGUgYXJiaXRyYXRvciBpc3N1ZXMgeW91IGFuIGF3YXJkIHRoYXQgaXMgZ3JlYXRlciB0aGFuIHRoZSB2YWx1ZSBvZiBSYW5rLVjigJlzIGxhc3Qgd3JpdHRlbiBzZXR0bGVtZW50IG9mZmVyIG1hZGUgYWZ0ZXIgeW91IHBhcnRpY2lwYXRlZCBpbiBnb29kIGZhaXRoIGluIHRoZSBvcHRpb25hbCBOZWdvdGlhdGlvbiBwcm9jZXNzIGRlc2NyaWJlZCBpbiBzdWJzZWN0aW9uIChqKSBiZWxvdywgdGhlbiBSYW5rLVggd2lsbCBwYXkgeW91IHRoZSBhbW91bnQgb2YgdGhlIGF3YXJkIG9yIFUuUy4gJDEsMDAwLCB3aGljaGV2ZXIgaXMgZ3JlYXRlci48L2xpPjwvb2w+PC9saT48bGk+PGI+TG9jYXRpb24gYW5kIE1hbm5lciBvZiBBcmJpdHJhdGlvbi48L2I+IFVubGVzcyB5b3UgYW5kIFJhbmstWCBhZ3JlZSBvdGhlcndpc2UsIGFueSBhcmJpdHJhdGlvbiBoZWFyaW5ncyBiZXR3ZWVuIFJhbmstWCBhbmQgYSBQcmVtaXVtIE1lbWJlciB3aWxsIHRha2UgcGxhY2UgaW4gdGhlIGNvdW50eSBvZiBSYW5rLVjigJlzIFByaW5jaXBhbCBPZmZpY2UsIGFuZCBhbnkgYXJiaXRyYXRpb24gaGVhcmluZ3MgYmV0d2VlbiBSYW5rLVggYW5kIGEgUHJlbWl1bSBNZW1iZXIgd2lsbCB0YWtlIHBsYWNlIGluIHRoZSBjb3VudHkgaW4gd2hpY2ggUmFuay1YIG1haW50YWlucyBpdHMgUHJpbmNpcGFsIE9mZmljZS4gSWYgQUFBIGFyYml0cmF0aW9uIGlzIHVuYXZhaWxhYmxlIGluIHN1Y2ggY291bnR5LCB0aGUgYXJiaXRyYXRpb24gaGVhcmluZ3Mgd2lsbCB0YWtlIHBsYWNlIGluIHRoZSBuZWFyZXN0IGF2YWlsYWJsZSBsb2NhdGlvbiBmb3IgYSBBQUEgYXJiaXRyYXRpb24uIElmIHlvdXIgQ2xhaW0gaXMgZm9yICQxMCwwMDAgb3IgbGVzcywgUmFuay1YIGFncmVlcyB0aGF0IHlvdSBtYXkgY2hvb3NlIHdoZXRoZXIgdGhlIGFyYml0cmF0aW9uIHdpbGwgYmUgY29uZHVjdGVkIHNvbGVseSBvbiB0aGUgYmFzaXMgb2YgZG9jdW1lbnRzIHN1Ym1pdHRlZCB0byB0aGUgYXJiaXRyYXRvciwgdGhyb3VnaCBhIHRlbGVwaG9uaWMgaGVhcmluZywgb3IgYnkgYW4gaW4tcGVyc29uIGhlYXJpbmcgYXMgZGV0ZXJtaW5lZCBieSB0aGUgQUFBIFJ1bGVzLiBJZiB5b3VyIENsYWltIGV4Y2VlZHMgJDEwLDAwMCwgdGhlIHJpZ2h0IHRvIGEgaGVhcmluZyB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIEFBQSBSdWxlcy48L2xpPjxsaT48Yj5FeGNlcHRpb25zIHRvIEFyYml0cmF0aW9uLjwvYj4gVGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgc2hhbGwgbm90IHJlcXVpcmUgYXJiaXRyYXRpb24gb2YgdGhlIGZvbGxvd2luZyB0eXBlcyBvZiBjbGFpbXM6ICgxKSBzbWFsbCBjbGFpbXMgYWN0aW9ucyBicm91Z2h0IG9uIGFuIGluZGl2aWR1YWwgYmFzaXMgdGhhdCBhcmUgd2l0aGluIHRoZSBzY29wZSBvZiBzdWNoIHNtYWxsIGNsYWltcyBjb3VydOKAmXMganVyaXNkaWN0aW9uOyAoMikgYSByZXByZXNlbnRhdGl2ZSBhY3Rpb24gYnJvdWdodCBvbiBiZWhhbGYgb2Ygb3RoZXJzIHVuZGVyIFBBR0Egb3Igb3RoZXIgcHJpdmF0ZSBhdHRvcm5leXMgZ2VuZXJhbCBhY3RzLCB0byB0aGUgZXh0ZW50IHRoZSByZXByZXNlbnRhdGl2ZSBQQUdBIFdhaXZlciBpbiBTZWN0aW9uIDE3KGMpIG9mIHN1Y2ggYWN0aW9uIGlzIGRlZW1lZCB1bmVuZm9yY2VhYmxlIGJ5IGEgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbjsgKDMpIGNsYWltcyBmb3Igd29ya2Vyc+KAmSBjb21wZW5zYXRpb24sIHN0YXRlIGRpc2FiaWxpdHkgaW5zdXJhbmNlIGFuZCB1bmVtcGxveW1lbnQgaW5zdXJhbmNlIGJlbmVmaXRzOyBhbmQgKDQpIGNsYWltcyB0aGF0IG1heSBub3QgYmUgc3ViamVjdCB0byBhcmJpdHJhdGlvbiBhcyBhIG1hdHRlciBvZiBsYXcuPGJyPk5vdGhpbmcgaW4gdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgcHJldmVudHMgeW91IGZyb20gbWFraW5nIGEgcmVwb3J0IHRvIG9yIGZpbGluZyBhIGNsYWltIG9yIGNoYXJnZSB3aXRoIHRoZSBFcXVhbCBFbXBsb3ltZW50IE9wcG9ydHVuaXR5IENvbW1pc3Npb24sIFUuUy4gRGVwYXJ0bWVudCBvZiBMYWJvciwgU2VjdXJpdGllcyBFeGNoYW5nZSBDb21taXNzaW9uLCBOYXRpb25hbCBMYWJvciBSZWxhdGlvbnMgQm9hcmQsIG9yIE9mZmljZSBvZiBGZWRlcmFsIENvbnRyYWN0IENvbXBsaWFuY2UgUHJvZ3JhbXMsIG9yIHNpbWlsYXIgbG9jYWwsIHN0YXRlIG9yIGZlZGVyYWwgYWdlbmN5LCBhbmQgbm90aGluZyBpbiB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBzaGFsbCBiZSBkZWVtZWQgdG8gcHJlY2x1ZGUgb3IgZXhjdXNlIGEgcGFydHkgZnJvbSBicmluZ2luZyBhbiBhZG1pbmlzdHJhdGl2ZSBjbGFpbSBiZWZvcmUgYW55IGFnZW5jeSBpbiBvcmRlciB0byBmdWxmaWxsIHRoZSBwYXJ0eVxcJ3Mgb2JsaWdhdGlvbiB0byBleGhhdXN0IGFkbWluaXN0cmF0aXZlIHJlbWVkaWVzIGJlZm9yZSBtYWtpbmcgYSBjbGFpbSBpbiBhcmJpdHJhdGlvbiwgaG93ZXZlciB5b3Uga25vd2luZ2x5IGFuZCB2b2x1bnRhcmlseSB3YWl2ZSB0aGUgcmlnaHQgdG8gc2VlayBvciByZWNvdmVyIG1vbmV5IGRhbWFnZXMgb2YgYW55IHR5cGUgcHVyc3VhbnQgdG8gYW55IGFkbWluaXN0cmF0aXZlIGNvbXBsYWludCBhbmQgaW5zdGVhZCBtYXkgc2VlayBzdWNoIHJlbGllZiBvbmx5IHRocm91Z2ggYXJiaXRyYXRpb24gdW5kZXIgdGhpcyBBZ3JlZW1lbnQuIE5vdGhpbmcgaW4gdGhpcyBBZ3JlZW1lbnQgb3IgQXJiaXRyYXRpb24gQWdyZWVtZW50IHByZXZlbnRzIHlvdXIgcGFydGljaXBhdGlvbiBpbiBhbiBpbnZlc3RpZ2F0aW9uIGJ5IGEgZ292ZXJubWVudCBhZ2VuY3kgb2YgYW55IHJlcG9ydCwgY2xhaW0gb3IgY2hhcmdlIG90aGVyd2lzZSBjb3ZlcmVkIGJ5IHRoaXMgQXJiaXRyYXRpb24gUHJvdmlzaW9uLjwvbGk+PGxpPjxiPlNldmVyYWJpbGl0eS48L2I+IEluIGFkZGl0aW9uIHRvIHRoZSBzZXZlcmFiaWxpdHkgcHJvdmlzaW9ucyBpbiBzdWJzZWN0aW9ucyAoYykgYWJvdmUsIGluIHRoZSBldmVudCB0aGF0IGFueSBwb3J0aW9uIG9mIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IGlzIGRlZW1lZCBpbGxlZ2FsIG9yIHVuZW5mb3JjZWFibGUsIHN1Y2ggcHJvdmlzaW9uIHNoYWxsIGJlIHNldmVyZWQgYW5kIHRoZSByZW1haW5kZXIgb2YgdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudCBzaGFsbCBiZSBnaXZlbiBmdWxsIGZvcmNlIGFuZCBlZmZlY3QuPC9saT48L29sPjwvbGk+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVggd2VsY29tZXMgeW91ciBxdWVzdGlvbnMgb3IgY29tbWVudHMgcmVnYXJkaW5nIHRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kuIElmIHlvdSBiZWxpZXZlIHRoYXQgUmFuay1YIGhhcyBub3QgYWRoZXJlZCB0byB0aGlzIFN0YXRlbWVudCwgcGxlYXNlIGNvbnRhY3QgUmFuay1YIGF0Ojxicj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVgsIExMQzwvZGl2PjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+MTY1MCBBZGFtcyBBdi48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlNhbiBEaWVnbywgQ2FsaWZvcm5pYSwgOTIxMTY8L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5FbWFpbCBBZGRyZXNzOjwvZGl2PjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+Y29udGFjdEByYW5rLXguY29tPC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+VGVsZXBob25lIG51bWJlcjo8L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPjxicj5FZmZlY3RpdmUgYXMgb2YgTWF5IDMxLCAyMDE3PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj48YnI+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2xheW91dC9QYXJ0aWFsczIvZmVlZGJhY2suaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+PGNvbnRlbnQtYmxvY2sgdHlwZT1cXFwicnhmZWVkYmFja1xcXCIgZHluYW1pYz1cXFwiZmFsc2VcXFwiPjwvY29udGVudC1ibG9jaz48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtbGctNlxcXCI+PGNvbnRlbnQtYmxvY2sgdHlwZT1cXFwicnhzdWdnZXN0aW9uXFxcIiBkeW5hbWljPVxcXCJmYWxzZVxcXCI+PC9jb250ZW50LWJsb2NrPjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9sYXlvdXQvUGFydGlhbHMyL2ZlZWRzLmh0bWxcIixcIjx1c2VyZmVlZC1ibG9jayBzaG93LWFsbD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcInNob3ctYWxsXFxcIj48L3VzZXJmZWVkLWJsb2NrPlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9sYXlvdXQvUGFydGlhbHMyL215YnVzaW5lc3MuaHRtbFwiLFwiPGRpdiB1aS12aWV3PVxcXCJuYXZiYXJcXFwiPjwvZGl2PjxkaXYgaWQ9XFxcInZlaWxcXFwiIG5nLWhpZGU9XFxcInZtLmRhdGFSZWFkeVxcXCI+PC9kaXY+PGRpdiBpZD1cXFwiZmVlZExvYWRpbmdcXFwiIG5nLWhpZGU9XFxcInZtLmRhdGFSZWFkeVxcXCI+PGRpdiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyXFxcIiBuZy1pZj1cXFwiIXZtLmRhdGFSZWFkeVxcXCI+PGRpdj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9hZGluZy5naWZcXFwiIGNsYXNzPVxcXCJpbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4XFxcIj48L2Rpdj48cCBzdHlsZT1cXFwiZm9udC1zaXplOmxhcmdlXFxcIj5sb2FkaW5nIHlvdXIgYnVzaW5lc3MgYWNjb3VudHMuLi48L3A+PC9kaXY+PC9kaXY+PGRpdiBpZD1cXFwiZmVlZExvYWRpbmdcXFwiIG5nLXNob3c9XFxcInZtLnB1cmNoYXNlX3Byb2dyZXNzXFxcIj48ZGl2IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXJcXFwiIG5nLWlmPVxcXCJ2bS5wdXJjaGFzZV9wcm9ncmVzc1xcXCI+PGRpdj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9hZGluZy5naWZcXFwiIGNsYXNzPVxcXCJpbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4XFxcIj48L2Rpdj48cCBzdHlsZT1cXFwiZm9udC1zaXplOmxhcmdlXFxcIj5Qcm9jZXNzaW5nIHlvdXIgcGF5bWVudCBpbmZvcm1hdGlvbi4uLjwvcD48L2Rpdj48L2Rpdj48ZGl2IGlkPVxcXCJmZWVkTG9hZGluZ1xcXCIgbmctc2hvdz1cXFwidm0uZWRpdF9wcm9ncmVzc1xcXCI+PGRpdiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyXFxcIiBuZy1pZj1cXFwidm0uZWRpdF9wcm9ncmVzc1xcXCI+PGRpdj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9hZGluZy5naWZcXFwiIGNsYXNzPVxcXCJpbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4XFxcIj48L2Rpdj48cCBzdHlsZT1cXFwiZm9udC1zaXplOmxhcmdlXFxcIj5VcGRhdGluZyB5b3VyIGFjY291bnQuLi48L3A+PC9kaXY+PC9kaXY+PGRpdiBpZD1cXFwiZmVlZExvYWRpbmdcXFwiIG5nLXNob3c9XFxcInZtLmNhbmNlbF9wcm9ncmVzc1xcXCI+PGRpdiBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyXFxcIiBuZy1pZj1cXFwidm0uY2FuY2VsX3Byb2dyZXNzXFxcIj48ZGl2PjxpbWcgc3JjPVxcXCIvYXNzZXRzL2ltYWdlcy9sb2FkaW5nLmdpZlxcXCIgY2xhc3M9XFxcImltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHhcXFwiPjwvZGl2PjxwIHN0eWxlPVxcXCJmb250LXNpemU6bGFyZ2VcXFwiPkNhbmNlbGxpbmcgeW91ciBzdWJzY3JwaXRpb25zLi4uPC9wPjwvZGl2PjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLmRhdGFSZWFkeVxcXCIgbmctaGlkZT1cXFwidm0ucHJvY2Vzc0luUHJvZ3Jlc3NcXFwiPjxkaXY+PGgzIG5nLWlmPVxcXCJ2bS5vdmVydmlld1xcXCI+TXkgQnVzaW5lc3M8L2gzPjxkaXYgbmctaWY9XFxcIiF2bS5ub0FucyYmdm0ub3ZlcnZpZXdcXFwiIGlkPVxcXCJteWJpenRhYmxlLWNvbnRhaW5lclxcXCI+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgaWQ9XFxcIm15Yml6dGFibGVcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPk5hbWU8L3RoPjx0aCB0ZXh0LWFsaWduPVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+UHJlbWl1bSBNZW1iZXJzaGlwPC90aD48dGggdGV4dC1hbGlnbj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkN1c3RvbSBSYW5rczwvdGg+PHRoPjwvdGg+PHRoPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0ubXliaXpzXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQ+e3t4Lm5hbWV9fTwvdGQ+PHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiIG5nLWF0dHItc3R5bGU9XFxcInt7eC5zdHlsZX19XFxcIj57e3guc3RhdHVzfX08L3RkPjx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJ7e3guc3R5bGUyfX1cXFwiPnt7eC5zdGF0dXMyfX08L3RkPjx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIj48YSBocmVmPVxcXCJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb3RvbWFuYWdlKHgpXFxcIj57eyh4LmlzUHJlbWl1bSB8fCB4Lmhhc1JhbmtzKSA/IFxcJ01hbmFnZVxcJzpcXCdQdXJjaGFzZSBGZWF0dXJlc1xcJ319PC9hPjwvdGQ+PHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiPjxhIGhyZWY9XFxcIlxcXCIgbmctY2xpY2s9XFxcInZtLmdvdG9hbnN3ZXIoeClcXFwiPkdvIHRvIExpc3Rpbmc8L2E+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48ZGl2IG5nLWlmPVxcXCJ2bS5teWJpenMubGVuZ3RoID09IDBcXFwiPjxicj48cD5Zb3UgaGF2ZSBub3QgYm91bmQgeW91ciBhY2NvdW50IHRvIGFueSBidXNpbmVzcy4gSWYgeW91IGFyZSBmcmVlbGFuY2VyIG93biBvciByZXByZXNlbnQgYSBidXNpbmVzcyBpbiB0aGlzIGNpdHksIGNyZWF0ZSBhIGxpc3RpbmcgYW5kIGJpbmQgeW91ciBhY2NvdW50IHNvIHlvdSBjYW4gbWFuYWdlIGl0cyBhY2NvdW50LjwvcD48L2Rpdj48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ2bS5tYW5hZ2V2aWV3XFxcIj48aDM+e3t2bS5idXNpbmVzcy5uYW1lfX08L2gzPjxoNCBhbGlnbj1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj5Db250YWN0IEluZm88L2g0PjxkaXY+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCIgc3R5bGU9XFxcImNvbG9yOnt7dm0uZm5vaz9cXCdibGFja1xcJzpcXCdyZWRcXCd9fVxcXCI+PHN0cm9uZz5GaXJzdCBOYW1lOjwvc3Ryb25nPiZuYnNwe3t2bS5idXNpbmVzcy5maXJzdG5hbWV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIiBzdHlsZT1cXFwiY29sb3I6e3t2bS5sbm9rP1xcJ2JsYWNrXFwnOlxcJ3JlZFxcJ319XFxcIj48c3Ryb25nPkxhc3QgTmFtZTo8L3N0cm9uZz4mbmJzcHt7dm0uYnVzaW5lc3MubGFzdG5hbWV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIiBzdHlsZT1cXFwiY29sb3I6e3t2bS5lbW9rP1xcJ2JsYWNrXFwnOlxcJ3JlZFxcJ319XFxcIj48c3Ryb25nPkVtYWlsOjwvc3Ryb25nPiZuYnNwe3t2bS5idXNpbmVzcy5lbWFpbH19PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmVkaXRDb250YWN0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkVkaXQ8L2J1dHRvbj48L2Rpdj48aDQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2IzYjNiMztwYWRkaW5nOjVweFxcXCI+QnVzaW5lc3MgSW5mbzwvaDQ+PGRpdj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkJ1c2luZXNzIE5hbWU6PC9zdHJvbmc+Jm5ic3B7e3ZtLmJ1c2luZXNzLm5hbWV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+Jm5ic3B7e3ZtLmJ1c2luZXNzLmxvY2F0aW9ufX08L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+PHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4mbmJzcHt7dm0uYnVzaW5lc3MucGhvbmV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPk1lbWJlcnNoaXA6PC9zdHJvbmc+Jm5ic3B7e3ZtLmJ1c2luZXNzLnN0YXR1c319PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxhIGhyZWY9XFxcIlxcXCIgbmctY2xpY2s9XFxcInZtLnVuYmluZCh2bS5idXNpbmVzcy5pZClcXFwiPlVuYmluZCB0aGlzIGJ1c2luZXNzIGZyb20gbXkgYWNjb3VudDwvYT48L2Rpdj48aDQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2IzYjNiMztwYWRkaW5nOjVweFxcXCIgbmctaWY9XFxcInZtLmJ1c2luZXNzLmlzUHJlbWl1bXx8dm0uYnVzaW5lc3MuaGFzUmFua3NcXFwiPlN1YnNjcmlwdGlvbnM8L2g0PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxkaXYgbmctaWY9XFxcInZtLmJ1c2luZXNzLmlzUHJlbWl1bXx8dm0uYnVzaW5lc3MuaGFzUmFua3NcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTo1cHhcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGFzcz1cXFwidm0uc2hvd1BheW1lbnRJbmZvP1xcJ2FjdGl2ZVxcJzpcXCdcXCdcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93UGF5bWVudEluZm9FZGl0Q2xpY2tlZCgpXFxcIj57e3ZtLnNob3dQYXltZW50SW5mbz9cXCdIaWRlIFBheW1lbnQgTWV0aG9kXFwnOlxcJ1Nob3cgUGF5bWVudCBNZXRob2RcXCd9fTwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xhc3M9XFxcInZtLnNob3dJbnZvaWNlcz9cXCdhY3RpdmVcXCc6XFwnXFwnXFxcIiBuZy1jbGljaz1cXFwidm0uc2hvd0ludm9pY3NDbGlja2VkKClcXFwiPnt7dm0uc2hvd0ludm9pY2VzP1xcJ0hpZGUgSW52b2ljZXNcXCc6XFwnU2hvdyBJbnZvaWNlc1xcJ319PC9idXR0b24+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uc2hvd1BheW1lbnRJbmZvICYmICF2bS5idXNpbmVzcy5sb2FkaW5nSW52b2ljZXNcXFwiPjxoMz5QYXltZW50IEluZm9ybWF0aW9uPC9oMz48aHI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxzcGFuPk5vdyB5b3UgYXJlIGJpbGxpbmcgd2l0aCB7e3ZtLmJ1c2luZXNzLmN1c3RvbWVyLnNvdXJjZXMuZGF0YVswXS5icmFuZH19IENhcmQgPGNvZGU+ICoqKiogLSAqKioqIC0gKioqKiAtIHt7dm0uYnVzaW5lc3MuY3VzdG9tZXIuc291cmNlcy5kYXRhWzBdLmxhc3Q0fX0gPC9jb2RlPjwvc3Bhbj48YnI+PGJ1dHRvbiBpZD1cXFwidXBkYXRlQ2FyZEJ1dHRvblxcXCIgbmFtZT1cXFwidXBkYXRlQ2FyZEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgb25jbGljaz1cXFwidXBkYXRlQ2FyZE51bWJlckJ1dHRvbigpXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDoxMHB4XFxcIj5FbnRlciBhIE5ldyBDYXJkPC9idXR0b24+PC9kaXY+PGZvcm0gYWN0aW9uPVxcXCJodHRwczovL3NlcnZlci5yYW5rLXguY29tL1N0cmlwZVNlcnZlci9jaGFuZ2VTb3VyY2VcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCIgZGF0YS1yZW1vdGU9XFxcInRydWVcXFwiIG5nLXN1Ym1pdD1cXFwiY2hhbmdlQ2FyZE51bWJlcigpXFxcIiBpZD1cXFwidXBkYXRlQ2FyZE51bWJlckZvcm1cXFwiPjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmVcXFwiPjxzY3JpcHQgc3JjPVxcXCJodHRwczovL2NoZWNrb3V0LnN0cmlwZS5jb20vY2hlY2tvdXQuanNcXFwiIGNsYXNzPVxcXCJzdHJpcGUtYnV0dG9uXFxcIiBkYXRhLWtleT1cXFwicGtfdGVzdF9xOWtiWXp2ekU2dU13Wkg5WlVqZks2WHFcXFwiIGRhdGEtZW1haWw9XFxcInt7dm0uYnVzaW5lc3MuZW1haWx9fVxcXCIgZGF0YS1sYWJlbD1cXFwiVXBkYXRlIENhcmQgRGV0YWlsc1xcXCIgZGF0YS1uYW1lPVxcXCJSYW5rLVhcXFwiIGRhdGEtZGVzY3JpcHRpb249XFxcIlVwZGF0ZSBDYXJkIERldGFpbHNcXFwiIGRhdGEtcGFuZWwtbGFiZWw9XFxcIlN1YnNjcmliZVxcXCIgZGF0YS1pbWFnZT1cXFwiL2Fzc2V0cy9pbWFnZXMvcmFua3gtbG9nby1zbWFsbC0yLXNxdWFyZS5wbmdcXFwiIGRhdGEtbG9jYWxlPVxcXCJhdXRvXFxcIiBkYXRhLXppcC1jb2RlPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICA8L3NjcmlwdD48L2Rpdj48aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwidXNlcklkXFxcIiBuYW1lPVxcXCJ1c2VySWRcXFwiIHZhbHVlPVxcXCJ7e3ZtLmJ1c2luZXNzLnVzZXJ9fVxcXCI+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGlkPVxcXCJ1c2VyYWNjbnRJZFxcXCIgbmFtZT1cXFwidXNlcmFjY250SWRcXFwiIHZhbHVlPVxcXCJ7e3ZtLmJ1c2luZXNzLmFjY291bnRpZH19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcInN0cmlwZUlkXFxcIiBuYW1lPVxcXCJzdHJpcGVJZFxcXCIgdmFsdWU9XFxcInt7dm0uYnVzaW5lc3Muc3RyaXBlaWR9fVxcXCI+PC9mb3JtPjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLnNob3dJbnZvaWNlcyAmJiAhdm0uYnVzaW5lc3MubG9hZGluZ0ludm9pY2VzXFxcIj48aDM+SW52b2ljZXM8L2gzPjxocj48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBzdHlsZT1cXFwid2lkdGg6MjUlXFxcIiB0ZXh0LWFsaWduPVxcXCJjZW50ZXJcXFwiPkRhdGU8L3RoPjx0aCBzdHlsZT1cXFwid2lkdGg6MTUlXFxcIiB0ZXh0LWFsaWduPVxcXCJjZW50ZXJcXFwiPlN1YlRvdGFsPC90aD48dGggc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgdGV4dC1hbGlnbj1cXFwiY2VudGVyXFxcIj5EaXNjb3VudDwvdGg+PHRoIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiIHRleHQtYWxpZ249XFxcImNlbnRlclxcXCI+VG90YWw8L3RoPjx0aCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlN0YXR1czwvdGg+PHRoIHN0eWxlPVxcXCJ3aWR0aDoyMCVcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0Ym9keT48dHIgbmctcmVwZWF0PVxcXCJpbnZvaWNlIGluIHZtLmJ1c2luZXNzLmludm9pY2VzXFxcIj48dGQ+e3tpbnZvaWNlLmRhdGV9fTwvdGQ+PHRkPnt7aW52b2ljZS5zdWJ0b3RhbC8xMDAgKyBcXCcgXFwnICsgaW52b2ljZS5jdXJyZW5jeS50b1VwcGVyQ2FzZSgpfX08L3RkPjx0ZD57e2ludm9pY2UuZGlzY291bnRNc2d9fTwvdGQ+PHRkPnt7aW52b2ljZS50b3RhbC8xMDAgKyBcXCcgXFwnICsgaW52b2ljZS5jdXJyZW5jeS50b1VwcGVyQ2FzZSgpfX08L3RkPjx0ZD57e2ludm9pY2UucGFpZCA/IFxcJ1BhaWRcXCcgOiBcXCdcXCd9fTwvdGQ+PHRkPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5oaWRlSW52b2ljZXMoKVxcXCI+SGlkZSBJbnZvaWNlczwvYnV0dG9uPjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLmJ1c2luZXNzLmlzUHJlbWl1bXx8dm0uYnVzaW5lc3MuaGFzUmFua3NcXFwiPjxoMz5TdWJzY3JpcHRpb25zPC9oMz48aHI+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIHN0eWxlPVxcXCJ3aWR0aDo0NSVcXFwiIHRleHQtYWxpZ249XFxcImNlbnRlclxcXCI+U3Vic2NyaXB0aW9uPC90aD48dGggc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgdGV4dC1hbGlnbj1cXFwiY2VudGVyXFxcIj5Nb250aGx5IENvc3Q8L3RoPjx0aCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48L3RoPjx0aCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctaWY9XFxcInZtLmJ1c2luZXNzLmlzUHJlbWl1bVxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo0NSVcXFwiPlByZW1pdW0gTWVtYmVyc2hpcDwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiPiR7e3ZtLmJ1c2luZXNzLnByaWNlfX08L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWxQcmVtaXVtKClcXFwiPkNhbmNlbDwvYnV0dG9uPjwvdGQ+PC90cj48dHIgbmctaWY9XFxcInZtLmJ1c2luZXNzLmhhc1JhbmtzXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjQ1JVxcXCI+e3t2bS5idXNpbmVzcy5yYW5rc1F0eX19IEN1c3RvbSBSYW5rczwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiPiR7e3ZtLmJ1c2luZXNzLnJhbmtzUXR5KnZtLkNVU1RPTV9SQU5LX1BSSUNFfX08L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiBuZy1jbGljaz1cXFwidm0uZWRpdFJhbmtzKClcXFwiPkVkaXQ8L2J1dHRvbj48L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MjAlXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jYW5jZWxBbGxSYW5rcygpXFxcIj5DYW5jZWw8L2J1dHRvbj48L3RkPjwvdHI+PHRyIG5nLWlmPVxcXCJ2bS5idXNpbmVzcy5pc3RyaWFsXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjQ1JVxcXCI+RnJlZSBUcmlhbDwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiPi0gJHt7dm0uYnVzaW5lc3MucmFua3NRdHkqdm0uQ1VTVE9NX1JBTktfUFJJQ0UgKyB2bS5idXNpbmVzcy5wcmljZX19PC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjIwJVxcXCI+PC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjIwJVxcXCI+PC90ZD48L3RyPjx0ciBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjQ1JVxcXCI+VG90YWw8L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MTUlXFxcIiBuZy1pZj1cXFwiIXZtLmJ1c2luZXNzLmlzdHJpYWxcXFwiPiR7e3ZtLmJ1c2luZXNzLnJhbmtzUXR5KnZtLkNVU1RPTV9SQU5LX1BSSUNFICsgdm0uYnVzaW5lc3MucHJpY2V9fTwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiIG5nLWlmPVxcXCJ2bS5idXNpbmVzcy5pc3RyaWFsXFxcIj4kMDwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoyMCVcXFwiPjwvdGQ+PHRkIHN0eWxlPVxcXCJ3aWR0aDoyMCVcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgbmctY2xpY2s9XFxcInZtLmNhbmNlbEFsbCgpXFxcIiBuZy1pZj1cXFwidm0uYnVzaW5lc3MuaGFzcmFua3MmJnZtLmJ1c2luZXNzLmlzcHJlbWl1bVxcXCI+Q2FuY2VsIEFsbDwvYnV0dG9uPjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PGRpdiBuZy1pZj1cXFwidm0uYnVzaW5lc3MubGFzdFBheW1lbnRBbW91bnQgPiAwXFxcIj5UaGFuayB5b3UgZm9yIHlvdXIgbGFzdCBwYXltZW50IG9mIDxzdHJvbmc+JHt7dm0uYnVzaW5lc3MubGFzdFBheW1lbnRBbW91bnR9fTwvc3Ryb25nPiBvbiA8c3Ryb25nPnt7dm0uYnVzaW5lc3MubGFzdFBheW1lbnRNYWRlfX08L3N0cm9uZz4uPGJyPjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLmJ1c2luZXNzLm5leHRQYXltZW50QW1vdW50ID4gMFxcXCI+WW91ciBuZXh0IHBheW1lbnQgd2lsbCBiZSBmb3IgPHN0cm9uZz4ke3t2bS5idXNpbmVzcy5uZXh0UGF5bWVudEFtb3VudH19PC9zdHJvbmc+IGFuZCBpdCB3aWxsIGJlIGJpbGxlZCBvbiA8c3Ryb25nPnt7dm0uYnVzaW5lc3MubmV4dFBheW1lbnREdWV9fTwvc3Ryb25nPjxicj48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ2bS5idXNpbmVzcy5pc3RyaWFsXFxcIj5Zb3UgaGF2ZSA8c3Ryb25nPnt7dm0uYnVzaW5lc3MuZGF5c0xlZnR9fSBkYXlzPC9zdHJvbmc+IGxlZnQgb24geW91ciBmcmVlIHRyaWFsLiBJdCB3aWxsIGV4cGlyZSBvbiA8c3Ryb25nPnt7dm0uYnVzaW5lc3MuZGlzY291bnRFbmREYXRlfX08L3N0cm9uZz4uPGJyPjwvZGl2Pjxicj5Gb3IgYW55IHF1ZXN0aW9ucyBhYm91dCB5b3VyIGJpbGxpbmcsIHBsZWFzZSB3cml0ZSB1cyBhdCA8c3Ryb25nPmNvbnRhY3RAcmFuay14LmNvbTwvc3Ryb25nPjwvZGl2PjxkaXYgY2xhc3M9XFxcIndlbGxcXFwiIG5nLWlmPVxcXCIhdm0uYnVzaW5lc3MuaXNQcmVtaXVtXFxcIj48aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5VcGdyYWRlIHRvIFByZW1pdW08L2gyPjxoMyBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPiR7e3ZtLmJ1c2luZXNzLnByaWNlfX0gLyBtb250aDwvaDM+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+PHN0cm9uZz4mbmJzcEdldCBtb3JlIGV4cG9zdXJlPC9zdHJvbmc+IHdpdGhpbiBTYW4gRGllZ288YnI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+Jm5ic3BMZXQgcGVvcGxlIGtub3cgYWxsIHlvdXIgPHN0cm9uZz5zcGVjaWFscywgcHJvbW90aW9ucyBhbmQgc3BlY2lhbCBldmVudHM8L3N0cm9uZz48YnI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+Jm5ic3BPZmZlciA8c3Ryb25nPmNvdXBvbnMgYW5kIHByb21vdGlvbnM8L3N0cm9uZz5yZWFsIHRpbWUuPGJyPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPjxzdHJvbmc+Jm5ic3BEcml2ZSBtb3JlIHRyYWZmaWM8L3N0cm9uZz4gdG8geW91ciBidXNpbmVzcyBwcm9maWxlPGJyPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPjxzdHJvbmc+Jm5ic3BHZXQmbmJzcDwvc3Ryb25nPm1vcmUgY3VzdG9tZXJzPGJyPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YSBocmVmPVxcXCJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93TGVhcm5Nb3JlKDEpXFxcIj5MZWFybiBNb3JlPC9hPjwvZGl2PjxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJ2bS5nZXRQcmVtaXVtXFxcIiB2YWx1ZT1cXFwiXFxcIj5HZXQgUHJlbWl1bSBNZW1iZXJzaGlwPC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ3ZWxsXFxcIiBuZy1pZj1cXFwiIXZtLmJ1c2luZXNzLmhhc1JhbmtzXFxcIj48aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5QdXJjaGFzZSBSYW5raW5nczwvaDI+PGgzIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+JHt7dm0uQ1VTVE9NX1JBTktfUFJJQ0V9fSAvIG1vbnRoIGVhY2g8L2gzPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPiZuYnNwQ3JlYXRlIDxzdHJvbmc+dW5pcXVlIHJhbmtpbmdzIGFuZCBsaXN0czwvc3Ryb25nPiBmb3IgeW91ciBvd24gcHJvZHVjdHMgYW5kIHNlcnZpY2VzPGJyPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPiZuYnNwVXNlIGZvcjogPHN0cm9uZz5tZW51IGl0ZW1zLCByZWNlbnQgcHJvamVjdHMsIHRvcC1zZWxsaW5nIHByb2R1Y3RzLCB0ZWFtIG1lbWJlcnM8L3N0cm9uZz4gYW5kIG1vcmUuPGJyPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPiZuYnNwPHN0cm9uZz5QdXQgdGhlIHNwb3RsaWdodDwvc3Ryb25nPiBvbiBhbnkgYXJlYSBvZiB5b3VyIGJ1c2luZXNzPGJyPjxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPjxzdHJvbmc+Jm5ic3BFbmdhZ2UgdGhlIGF1ZGllbmNlPC9zdHJvbmc+IHdpdGggdGhlIGJlc3Qgb2Ygd2hhdCB5b3Ugb2ZmZXI8YnI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZWNrXFxcIj48L2k+PHN0cm9uZz4mbmJzcEdldCBmZWVkYmFjazwvc3Ryb25nPiBmcm9tIHlvdXIgY3VzdG9tZXJzIG9uIHlvdXIgc3BlY2lmaWMgcHJvZHVjdHMgb3Igc2VydmljZXM8YnI+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxhIGhyZWY9XFxcIlxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dMZWFybk1vcmUoMilcXFwiPkxlYXJuIE1vcmU8L2E+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTkgY29sLW1kLTEwIGNvbC1sZy0xMFxcXCI+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmdldFJhbmtzXFxcIiB2YWx1ZT1cXFwiXFxcIj5QdXJjaGFzZSBSYW5rczwvbGFiZWw+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0zIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgbmctaWY9XFxcInZtLmdldFJhbmtzXFxcIj48c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5taW51c1F0eSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbWludXNcXFwiPjwvaT48L2J1dHRvbj48L3NwYW4+IDxpbnB1dCBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5yYW5rc1F0eVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInZtLnJhbmtzUXR5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0ucGx1c1F0eSgpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPjwvYnV0dG9uPjwvc3Bhbj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIG5nLWlmPVxcXCJ2bS5zZWxsXFxcIj48YnI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PGxhYmVsPlByb21vIENvZGU6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0xMCBjb2wtbGctMTBcXFwiPjxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj48aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgc3R5bGU9XFxcImNvbG9yOnJlZDtcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wcm9tb2NvZGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBjb2RlLi4uXFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uY2hlY2tjb2RlKClcXFwiPkNoZWNrIENvZGU8L2J1dHRvbj48L3NwYW4+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIG5nLWlmPVxcXCJ2bS5zZWxsXFxcIj48YnI+PHA+PGk+e3t2bS5jb2RlTXNnfX08L2k+PC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIiBuZy1pZj1cXFwidm0uc2VsbFxcXCI+PGJyPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcInZtLmdvQ2hlY2tvdXQoKVxcXCIgbmctY2xhc3M9XFxcIih2bS5nZXRQcmVtaXVtIHx8IHZtLmdldFJhbmtzKSA/IFxcJ1xcJyA6IFxcJ2Rpc2FibGVkXFwnXFxcIj5DaGVja291dDwvYnV0dG9uPjwvZGl2PjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLmNoZWNrb3V0XFxcIj48aDM+Q2hlY2tvdXQ8L2gzPjxicj48cCBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPllvdSBhcmUgcHVyY2hhc2luZyB0aGUgZm9sbG93aW5nIHN1YnNjcmlwdGlvbnMgZm9yIHRoZSBidXNpbmVzcyA8c3Ryb25nPnt7dm0uYnVzaW5lc3MubmFtZX19PC9zdHJvbmc+OjwvcD48YnI+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+TmFtZTwvdGg+PHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+UXVhbnRpdHk8L3RoPjx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlRvdGFsPC90aD48dGggY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctaWY9XFxcInZtLmdldFByZW1pdW1cXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NzAlXFxcIj5QcmVtaXVtIE1lbWJlcnNoaXA8L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MTUlXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj4xPC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+JHt7dm0uYnVzaW5lc3MucHJpY2V9fTwvdGQ+PC90cj48dHIgbmctaWY9XFxcInZtLmdldFJhbmtzXFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjcwJVxcXCI+Q3VzdG9tIFJhbmtpbmdzPC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+e3t2bS5yYW5rc1F0eX19PC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+JHt7dm0ucmFua3NRdHkqdm0uQ1VTVE9NX1JBTktfUFJJQ0V9fTwvdGQ+PC90cj48dHI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo4NSVcXFwiIGNvbHNwYW49XFxcIjJcXFwiPlRvdGFsPC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+JHt7dm0udG90YWx9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgbmctaWY9XFxcInZtLmNvZGVPa1xcXCI+WW91IGhhdmUgYSB2YWxpZCBjb2RlIHRvIHRyeSB0aGUgYWJvdmUgc3Vic2NyaXB0aW9ucyBmcmVlIGZvciA2MCBkYXlzLiBZb3Ugd2lsbCBub3QgYmUgY2hhcmdlZCB1bnRpbCB0aGUgNjAgZGF5IHRyaWFsIHBlcmlvZCBleHBpcmVzLiBBZnRlcndhcmRzIHlvdXIgY2FyZCB3aWxsIGJlIGNoYXJnZWQgPHN0cm9uZz4ke3t2bS50b3RhbH19PC9zdHJvbmc+IG1vbnRobHkuIFlvdSBjYW4gbG9nIGluIHRvIGNhbmNlbCBvciBtYWtlIG1vZGlmaWNhdGlvbnMgdG8geW91ciBhY2NvdW50IGF0IGFueSB0aW1lLiBJZiB5b3UgZXhwZXJpZW5jZSBhbnkgcHJvYmxlbXMgZHVyaW5nIGNoZWNrb3V0LCBwbGVhc2UgY29udGFjdCB1cyBhdCA8c3Ryb25nPmNvbnRhY3RAcmFuay14LmNvbTwvc3Ryb25nPjwvcD48cCBuZy1pZj1cXFwiIXZtLmNvZGVPa1xcXCI+WW91ciBjYXJkIHdpbGwgYmUgY2hhcmdlZCA8c3Ryb25nPiR7e3ZtLnRvdGFsfX08L3N0cm9uZz4gbW9udGhseS4gWW91IGNhbiBsb2cgaW4gdG8gY2FuY2VsIG9yIG1ha2UgbW9kaWZpY2F0aW9ucyB0byB5b3VyIGFjY291bnQgYXQgYW55IHRpbWUuIElmIHlvdSBleHBlcmllbmNlIGFueSBwcm9ibGVtcyBkdXJpbmcgY2hlY2tvdXQsIHBsZWFzZSBjb250YWN0IHVzIGF0IDxzdHJvbmc+Y29udGFjdEByYW5rLXguY29tPC9zdHJvbmc+PC9wPjxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5nLW1vZGVsPVxcXCJ2bS5hY2NlcHRUT1NcXFwiIHZhbHVlPVxcXCJcXFwiPkkgaGF2ZSByZWFkIGFuZCB1bmRlcnN0b29kIHRoZSA8YSBuZy1jbGljaz1cXFwidm0uc2hvd1RPU0N1c3RvbWVyc0RsZygpXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+VGVybXMgb2YgU2VydmljZTwvYT48L2xhYmVsPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YnI+PGJ1dHRvbiBpZD1cXFwiY2hlY2tvdXRCdXR0b25cXFwiIG5hbWU9XFxcImNoZWNrb3V0QnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiBuZy1jbGFzcz1cXFwidm0uYWNjZXB0VE9TID8gXFwnXFwnIDogXFwnZGlzYWJsZWRcXCdcXFwiIG9uY2xpY2s9XFxcImNsaWNrU3RyaXBlQnV0dG9uKClcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbGlja1N0cmlwZUNoZWNrb3V0KClcXFwiIG5nLWlmPVxcXCIhKHZtLmJ1c2luZXNzLmlzUHJlbWl1bSA9PSB0cnVlIHx8IHZtLmJ1c2luZXNzLmhhc1JhbmtzID09IHRydWUpXFxcIj5QYXkgd2l0aCBDYXJkPC9idXR0b24+IDxidXR0b24gaWQ9XFxcImNoZWNrb3V0QnV0dG9uXFxcIiBuYW1lPVxcXCJjaGVja291dEJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgbmctY2xhc3M9XFxcInZtLmFjY2VwdFRPUyA/IFxcJ1xcJyA6IFxcJ2Rpc2FibGVkXFwnXFxcIiBuZy1jbGljaz1cXFwidm0uYWRkU3Vic2NyaXB0aW9uKClcXFwiIG5nLWlmPVxcXCJ2bS5idXNpbmVzcy5pc1ByZW1pdW0gPT0gdHJ1ZSB8fCB2bS5idXNpbmVzcy5oYXNSYW5rcyA9PSB0cnVlXFxcIj5BZGQgU3Vic2NyaXB0aW9uPC9idXR0b24+PGJyPjxkaXYgbmctc2hvdz1cXFwiIXZtLnNob3dDdXJyZW50UGxhblxcXCI+PGZvcm0gYWN0aW9uPVxcXCJodHRwczovL3NlcnZlci5yYW5rLXguY29tL1N0cmlwZVNlcnZlci9jaGFyZ2VcXFwiIG1ldGhvZD1cXFwiUE9TVFxcXCI+PGRpdiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj48c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jaGVja291dC5zdHJpcGUuY29tL2NoZWNrb3V0LmpzXFxcIiBjbGFzcz1cXFwic3RyaXBlLWJ1dHRvblxcXCIgZGF0YS1rZXk9XFxcInBrX3Rlc3RfcTlrYll6dnpFNnVNd1pIOVpVamZLNlhxXFxcIiBkYXRhLWVtYWlsPVxcXCJ7e3ZtLmJ1c2luZXNzLmVtYWlsfX1cXFwiIGRhdGEtbGFiZWw9XFxcIlBheSB3aXRoIENhcmRcXFwiIGRhdGEtbmFtZT1cXFwiUmFuay1YXFxcIiBkYXRhLWRlc2NyaXB0aW9uPVxcXCJQcmVtaXVtIE1lbWJlcnNoaXAgU3Vic2NyaXB0aW9uXFxcIiBkYXRhLXBhbmVsLWxhYmVsPVxcXCJTdWJzY3JpYmVcXFwiIGRhdGEtaW1hZ2U9XFxcIi9hc3NldHMvaW1hZ2VzL3Jhbmt4LWxvZ28tc21hbGwtMi1zcXVhcmUucG5nXFxcIiBkYXRhLWxvY2FsZT1cXFwiYXV0b1xcXCIgZGF0YS16aXAtY29kZT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgPC9zY3JpcHQ+PC9kaXY+PGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcInVzZXJFbWFpbFxcXCIgbmFtZT1cXFwidXNlckVtYWlsXFxcIiB2YWx1ZT1cXFwie3t2bS5idXNpbmVzcy5lbWFpbH19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcInVzZXJOYW1lXFxcIiBuYW1lPVxcXCJ1c2VyTmFtZVxcXCIgdmFsdWU9XFxcInt7dm0uYnVzaW5lc3MuZmlyc3RuYW1lICsgXFwnIFxcJyArIHZtLmJ1c2luZXNzLmxhc3RuYW1lfX1cXFwiPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwiYml6TmFtZVxcXCIgbmFtZT1cXFwiYml6TmFtZVxcXCIgdmFsdWU9XFxcInt7dm0uYnVzaW5lc3MubmFtZX19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcInVzZXJJZFxcXCIgbmFtZT1cXFwidXNlcklkXFxcIiB2YWx1ZT1cXFwie3t2bS5idXNpbmVzcy51c2VyfX1cXFwiPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwidXNlcmFjY250SWRcXFwiIG5hbWU9XFxcInVzZXJhY2NudElkXFxcIiB2YWx1ZT1cXFwie3t2bS5idXNpbmVzcy5hY2NvdW50aWR9fVxcXCI+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGlkPVxcXCJhbnN3ZXJJZFxcXCIgbmFtZT1cXFwiYW5zd2VySWRcXFwiIHZhbHVlPVxcXCJ7e3ZtLmJ1c2luZXNzLmlkfX1cXFwiPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwic3RyaXBlSWRcXFwiIG5hbWU9XFxcInN0cmlwZUlkXFxcIiB2YWx1ZT1cXFwie3t2bS5idXNpbmVzcy5zdHJpcGVpZH19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcImdldFByZW1pdW1QbGFuXFxcIiBuYW1lPVxcXCJnZXRQcmVtaXVtUGxhblxcXCIgdmFsdWU9XFxcInt7dm0uZ2V0UHJlbWl1bX19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcImdldEN1c3RvbVJhbmtzXFxcIiBuYW1lPVxcXCJnZXRDdXN0b21SYW5rc1xcXCIgdmFsdWU9XFxcInt7dm0uZ2V0UmFua3N9fVxcXCI+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGlkPVxcXCJyYW5rc1F1YW50aXR5XFxcIiBuYW1lPVxcXCJyYW5rc1F1YW50aXR5XFxcIiB2YWx1ZT1cXFwie3t2bS5yYW5rc1F0eX19XFxcIj4gPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgaWQ9XFxcImNvdXBvblZhbGlkXFxcIiBuYW1lPVxcXCJjb3Vwb25WYWxpZFxcXCIgdmFsdWU9XFxcInt7dm0uY29kZU9rfX1cXFwiPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwiY291cG9uVmFsaWRcXFwiIG5hbWU9XFxcInByb21vQ29kZVxcXCIgdmFsdWU9XFxcInt7dm0ucHJvbW9jb2RlfX1cXFwiPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBpZD1cXFwiYml6Y2F0XFxcIiBuYW1lPVxcXCJiaXpjYXRcXFwiIHZhbHVlPVxcXCJ7e3ZtLmJ1c2luZXNzLmJpemNhdH19XFxcIj48L2Zvcm0+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIiByb2xlPVxcXCJncm91cFxcXCI+PGJyPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj48YnI+PGJyPjwvZGl2PjwvZGl2PjxzY3JpcHQ+XFxuICAgICAgICBmdW5jdGlvbiBldmVudEZpcmUoZWwsIGV0eXBlKXtcXG4gICAgICAgICAgaWYgKGVsLmZpcmVFdmVudCkge1xcbiAgICAgICAgICAgIGVsLmZpcmVFdmVudChcXCdvblxcJyArIGV0eXBlKTtcXG4gICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICB2YXIgZXZPYmogPSBkb2N1bWVudC5jcmVhdGVFdmVudChcXCdFdmVudHNcXCcpO1xcbiAgICAgICAgICAgIGV2T2JqLmluaXRFdmVudChldHlwZSwgdHJ1ZSwgZmFsc2UpO1xcbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZPYmopO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBmdW5jdGlvbiBjbGlja0NhbmNlbFBsYW5CdXR0b24oKSB7XFxuICAgICAgICAgIHNob3dMb2FkZXJCcmllZkRvdWJsZSgpO1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhcXFwiYWJvdXQgdG8gZmlyZSBjbGljayBldmVudFxcXCIpO1xcbiAgICAgICAgICB2YXIgcmVzdWx0T2ZFdmVudEZpcmUgPSBldmVudEZpcmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnY29uZmlybUNhbmNlbFBsYW5cXCcpLCBcXCdjbGlja1xcJyk7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJkb25lIGZpcmluZyBjbGljayBldmVudCwgcmVzdWx0T2ZFdmVudEZpcmU6IFxcXCIgKyByZXN1bHRPZkV2ZW50RmlyZSk7XFxuICAgICAgICB9XFxuICAgICAgICBmdW5jdGlvbiBjbGlja1N0cmlwZUJ1dHRvbigpIHtcXG4gICAgICAgICAgY29uc29sZS5sb2coXFxcImFib3V0IHRvIGZpcmUgY2xpY2sgZXZlbnRcXFwiKTtcXG4gICAgICAgICAgdmFyIHJlc3VsdE9mRXZlbnRGaXJlID0gZXZlbnRGaXJlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXFwnc3RyaXBlLWJ1dHRvbi1lbFxcJylbMF0sIFxcJ2NsaWNrXFwnKTtcXG5cXG4gICAgICAgICAgY29uc29sZS5sb2coXFxcImRvbmUgZmlyaW5nIGNsaWNrIGV2ZW50LCByZXN1bHRPZkV2ZW50RmlyZTogXFxcIiArIHJlc3VsdE9mRXZlbnRGaXJlKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcmROdW1iZXJCdXR0b24oKSB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKFxcXCJhYm91dCB0byBmaXJlIHVwZGF0ZSBzdHJpcGUgaW5mbyBldmVudFxcXCIpO1xcblx0XHQgIHZhciByZXN1bHRPZkV2ZW50RmlyZSA9IGV2ZW50RmlyZSgkKFxcJyN1cGRhdGVDYXJkTnVtYmVyRm9ybSAuc3RyaXBlLWJ1dHRvbi1lbFxcJylbMF0sIFxcJ2NsaWNrXFwnKTtcXG5cXG4gICAgICAgICAgY29uc29sZS5sb2coXFxcImRvbmUgZmlyaW5nIGNsaWNrIGV2ZW50LCByZXN1bHRPZkV2ZW50RmlyZTogXFxcIiArIHJlc3VsdE9mRXZlbnRGaXJlKTtcXG4gICAgICAgIH1cXG5cXG5cXG5cdFx0Ly8gJChcXCdpZnJhbWUuc3RyaXBlX2NoZWNrb3V0X2FwcFxcJykucmVhZHkoZnVuY3Rpb24oKXtcXG5cdFx0Ly8gXHR2YXIgc3RyaXBlX2Zvcm1faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXFwnMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXFwnKVxcblx0XHQvLyBcdFx0aWYoJChcXCdidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl1cXCcpLmxlbmd0aCAhPSAwKXtcXG5cdFx0Ly8gXHRcdFx0Y2xlYXJJbnRlcnZhbChzdHJpcGVfZm9ybV9pbnRlcnZhbClcXG5cdFx0Ly8gXHRcdFx0JChcXCdidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl1cXCcpLmJpbmQoXFwnY3NzQ2xhc3NDaGFuZ2VkXFwnLGZ1bmN0aW9uKCl7XFxuXHRcdC8vIFx0XHRcdFx0YWxlcnQoXFwnY2xlYXJJbnRlcnZhbChzdHJpcGVfZm9ybV9pbnRlcnZhbClcXCcpXFxuXHRcdFx0XHRcdFx0XFxuXHRcdC8vIFx0XHRcdH0pXFxuXHRcdC8vIFx0XHR9IFxcblx0XHQvLyBcdH0pXFxuXHRcdC8vIH0pXFxuICAgICAgICA8L3NjcmlwdD5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvbGF5b3V0L1BhcnRpYWxzMi9wcml2YWN5cG9saWN5Lmh0bWxcIixcIjxzdHlsZT5cXG4gICAgI3BwQm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDExcHQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgfVxcbiAgICBcXG4gICAgI3BwSGVhZGVyIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xcbiAgICAgICAgZm9udC1zaXplOiAyMXB0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcbiAgICBcXG4gICAgLnBwQ29uc2lzdGVuY2llcyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuPC9zdHlsZT48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxicj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjxkaXYgaWQ9XFxcInBwSGVhZGVyXFxcIj48c3Bhbj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9nb19zcS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MHB4XFxcIj48L3NwYW4+IFJhbmstWCBQcml2YWN5IFBvbGljeTwvZGl2PjxkaXYgaWQ9XFxcInBwQm9keVxcXCI+PGRpdiBjbGFzcz1cXFwicHBDb25zaXN0ZW5jaWVzXFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wtMlxcXCI+PGRpdiBjbGFzcz1cXFwicXVpY2stbGlua3MgdGV4dC1jZW50ZXJcXFwiPkluZm9ybWF0aW9uIENvbGxlY3Rpb248L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtMlxcXCI+PGRpdiBjbGFzcz1cXFwicXVpY2stbGlua3MgdGV4dC1jZW50ZXJcXFwiPkluZm9ybWF0aW9uIFVzYWdlPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcInF1aWNrLWxpbmtzIHRleHQtY2VudGVyXFxcIj5JbmZvcm1hdGlvbiBQcm90ZWN0aW9uPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcInF1aWNrLWxpbmtzIHRleHQtY2VudGVyXFxcIj5Db29raWUgVXNhZ2U8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtMlxcXCI+PGRpdiBjbGFzcz1cXFwicXVpY2stbGlua3MgdGV4dC1jZW50ZXJcXFwiPjNyZCBQYXJ0eSBEaXNjbG9zdXJlPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcInF1aWNrLWxpbmtzIHRleHQtY2VudGVyXFxcIj4zcmQgUGFydHkgTGlua3M8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtMlxcXCI+PC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cXFwiY2xlYXI6Ym90aDtoZWlnaHQ6MTBweDtcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInBwQ29uc2lzdGVuY2llc1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC0xMiBxdWljay1saW5rczIgZ2VuLXRleHQtY2VudGVyXFxcIj5Hb29nbGUgQWRTZW5zZTwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC0yXFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wtMTIgcXVpY2stbGlua3MyIGdlbi10ZXh0LWNlbnRlclxcXCI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8ZGl2IGNsYXNzPVxcXCJjb2wtOCBnZW4tdGV4dC1sZWZ0IGdlbi14cy10ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcImZvbnQtc2l6ZToxMnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6MjBweDtcXFwiPkZhaXIgaW5mb3JtYXRpb248YnI+UHJhY3RpY2VzPC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC0xMiBxdWljay1saW5rczIgZ2VuLXRleHQtY2VudGVyIGNvcHBhLXBhZFxcXCI+Q09QUEE8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wtMlxcXCI+PGRpdiBjbGFzcz1cXFwiY29sLTEyIHF1aWNrLWxpbmtzMiBxdWljazQgZ2VuLXRleHQtY2VudGVyIGNhbG9wcGEtcGFkXFxcIj5DYWxPUFBBPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLTJcXFwiPjxkaXYgY2xhc3M9XFxcInF1aWNrLWxpbmtzMiBnZW4tdGV4dC1jZW50ZXJcXFwiPk91ciBDb250YWN0IEluZm9ybWF0aW9uPGJyPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XFxcImNsZWFyOmJvdGg7aGVpZ2h0OjEwcHg7XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlByb3RlY3RpbmcgeW91ciBwcml2YXRlIGluZm9ybWF0aW9uIGlzIG91ciBwcmlvcml0eS4gVGhpcyBTdGF0ZW1lbnQgb2YgUHJpdmFjeSBhcHBsaWVzIHRvIDxhIGhyZWY9XFxcImh0dHA6Ly93d3cucmFuay14LmNvbVxcXCI+aHR0cDovL3d3dy5yYW5rLXguY29tPC9hPiBhbmQgUmFuay1YLCBMTEMgYW5kIGdvdmVybnMgZGF0YSBjb2xsZWN0aW9uIGFuZCB1c2FnZS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIFByaXZhY3kgUG9saWN5LCB1bmxlc3Mgb3RoZXJ3aXNlIG5vdGVkLCBhbGwgcmVmZXJlbmNlcyB0byBSYW5rLVgsIExMQyBpbmNsdWRlIGh0dHA6Ly93d3cucmFuay14LmNvbSBhbmQgUmFuay1YLiBUaGUgUmFuay1YIHdlYnNpdGUgaXMgYSBPbmxpbmUgQWR2ZXJ0aXNpbmcgYW5kIE1hcmtldGluZyBzaXRlLiBCeSB1c2luZyB0aGUgUmFuay1YIHdlYnNpdGUsIHlvdSBjb25zZW50IHRvIHRoZSBkYXRhIHByYWN0aWNlcyBkZXNjcmliZWQgaW4gdGhpcyBzdGF0ZW1lbnQuPC9kaXY+PGJyPjwvZGl2PjxzcGFuIGlkPVxcXCJpbmZvQ29cXFwiPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz1cXFwiZ3JheVRleHRcXFwiPjxzdHJvbmc+Q29sbGVjdGlvbiBvZiB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+UmFuay1YIG1heSBjb2xsZWN0IHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uLCBzdWNoIGFzIHlvdXI6PHVsIHN0eWxlPVxcXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmVcXFwiPjxsaT4tIE5hbWU8L2xpPjxsaT4tIEFkZHJlc3M8L2xpPjxsaT4tIEUtbWFpbCBBZGRyZXNzPC9saT48L3VsPjxicj5QbGVhc2Uga2VlcCBpbiBtaW5kIHRoYXQgaWYgeW91IGRpcmVjdGx5IGRpc2Nsb3NlIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIG9yIHBlcnNvbmFsbHkgc2Vuc2l0aXZlIGRhdGEgdGhyb3VnaCBSYW5rLVhcXCdzIHB1YmxpYyBtZXNzYWdlIGJvYXJkcywgdGhpcyBpbmZvcm1hdGlvbiBtYXkgYmUgY29sbGVjdGVkIGFuZCB1c2VkIGJ5IG90aGVycy48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlJhbmstWCBlbmNvdXJhZ2VzIHlvdSB0byByZXZpZXcgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvZiB3ZWJzaXRlcyB5b3UgY2hvb3NlIHRvIGxpbmsgdG8gZnJvbSBSYW5rLVggc28gdGhhdCB5b3UgY2FuIHVuZGVyc3RhbmQgaG93IHRob3NlIHdlYnNpdGVzIGNvbGxlY3QsIHVzZSBhbmQgc2hhcmUgeW91ciBpbmZvcm1hdGlvbi4gUmFuay1YIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIHByaXZhY3kgc3RhdGVtZW50cyBvciBvdGhlciBjb250ZW50IG9uIHdlYnNpdGVzIG91dHNpZGUgb2YgdGhlIFJhbmstWCB3ZWJzaXRlLjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJncmF5VGV4dFxcXCI+PHN0cm9uZz5Vc2Ugb2YgeW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbjwvc3Ryb25nPjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlJhbmstWCBjb2xsZWN0cyBhbmQgdXNlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIG9wZXJhdGUgaXRzIHdlYnNpdGUocykgYW5kIGRlbGl2ZXIgdGhlIHNlcnZpY2VzIHlvdSBoYXZlIHJlcXVlc3RlZC48YnI+UmFuay1YIG1heSBhbHNvIHVzZSB5b3VyIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIHRvIGluZm9ybSB5b3Ugb2Ygb3RoZXIgcHJvZHVjdHMgb3Igc2VydmljZXMgYXZhaWxhYmxlIGZyb20gUmFuay1YIGFuZCBpdHMgYWZmaWxpYXRlcy4gUmFuay1YIG1heSBhbHNvIGNvbnRhY3QgeW91IHZpYSBzdXJ2ZXlzIHRvIGNvbmR1Y3QgcmVzZWFyY2ggYWJvdXQgeW91ciBvcGluaW9uIG9mIGN1cnJlbnQgc2VydmljZXMgb3Igb2YgcG90ZW50aWFsIG5ldyBzZXJ2aWNlcyB0aGF0IG1heSBiZSBvZmZlcmVkLjxicj5SYW5rLVggZG9lcyBub3Qgc2VsbCwgcmVudCBvciBsZWFzZSBpdHMgY3VzdG9tZXIgbGlzdHMgdG8gdGhpcmQgcGFydGllcy48YnI+UmFuay1YIG1heSwgZnJvbSB0aW1lIHRvIHRpbWUsIGNvbnRhY3QgeW91IG9uIGJlaGFsZiBvZiBleHRlcm5hbCBidXNpbmVzcyBwYXJ0bmVycyBhYm91dCBhIHBhcnRpY3VsYXIgb2ZmZXJpbmcgdGhhdCBtYXkgYmUgb2YgaW50ZXJlc3QgdG8geW91LiBJbiB0aG9zZSBjYXNlcywgeW91ciB1bmlxdWUgcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gKGUtbWFpbCwgbmFtZSwgYWRkcmVzcywgdGVsZXBob25lIG51bWJlcikgaXMgbm90IHRyYW5zZmVycmVkIHRvIHRoZSB0aGlyZCBwYXJ0eS4gUmFuay1YIG1heSBzaGFyZSBkYXRhIHdpdGggdHJ1c3RlZCBwYXJ0bmVycyB0byBoZWxwIHBlcmZvcm0gc3RhdGlzdGljYWwgYW5hbHlzaXMsIHNlbmQgeW91IGVtYWlsIG9yIHBvc3RhbCBtYWlsLCBwcm92aWRlIGN1c3RvbWVyIHN1cHBvcnQsIG9yIGFycmFuZ2UgZm9yIGRlbGl2ZXJpZXMuIEFsbCBzdWNoIHRoaXJkIHBhcnRpZXMgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGV4Y2VwdCB0byBwcm92aWRlIHRoZXNlIHNlcnZpY2VzIHRvIFJhbmstWCwgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIHRvIG1haW50YWluIHRoZSBjb25maWRlbnRpYWxpdHkgb2YgeW91ciBpbmZvcm1hdGlvbi48YnI+UmFuay1YIG1heSBrZWVwIHRyYWNrIG9mIHRoZSB3ZWJzaXRlcyBhbmQgcGFnZXMgb3VyIHVzZXJzIHZpc2l0IHdpdGhpbiBSYW5rLVgsIGluIG9yZGVyIHRvIGRldGVybWluZSB3aGF0IFJhbmstWCBzZXJ2aWNlcyBhcmUgdGhlIG1vc3QgcG9wdWxhci4gVGhpcyBkYXRhIGlzIHVzZWQgdG8gZGVsaXZlciBjdXN0b21pemVkIGNvbnRlbnQgYW5kIGFkdmVydGlzaW5nIHdpdGhpbiBSYW5rLVggdG8gY3VzdG9tZXJzIHdob3NlIGJlaGF2aW9yIGluZGljYXRlcyB0aGF0IHRoZXkgYXJlIGludGVyZXN0ZWQgaW4gYSBwYXJ0aWN1bGFyIHN1YmplY3QgYXJlYS48YnI+UmFuay1YIHdpbGwgZGlzY2xvc2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiwgd2l0aG91dCBub3RpY2UsIG9ubHkgaWYgcmVxdWlyZWQgdG8gZG8gc28gYnkgbGF3IG9yIGluIHRoZSBnb29kIGZhaXRoIGJlbGllZiB0aGF0IHN1Y2ggYWN0aW9uIGlzIG5lY2Vzc2FyeSB0bzogKGEpIGNvbmZvcm0gdG8gdGhlIGVkaWN0cyBvZiB0aGUgbGF3IG9yIGNvbXBseSB3aXRoIGxlZ2FsIHByb2Nlc3Mgc2VydmVkIG9uIFJhbmstWCBvciB0aGUgc2l0ZTsgKGIpIHByb3RlY3QgYW5kIGRlZmVuZCB0aGUgcmlnaHRzIG9yIHByb3BlcnR5IG9mIFJhbmstWDsgYW5kLCAoYykgYWN0IHVuZGVyIGV4aWdlbnQgY2lyY3Vtc3RhbmNlcyB0byBwcm90ZWN0IHRoZSBwZXJzb25hbCBzYWZldHkgb2YgdXNlcnMgb2YgUmFuay1YLCBvciB0aGUgcHVibGljLjxicj48L2Rpdj48c3BhbiBpZD1cXFwiaW5mb1VzXFxcIj48L3NwYW4+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkF1dG9tYXRpY2FsbHkgQ29sbGVjdGVkIEluZm9ybWF0aW9uPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+SW5mb3JtYXRpb24gYWJvdXQgeW91ciBjb21wdXRlciBoYXJkd2FyZSBhbmQgc29mdHdhcmUgbWF5IGJlIGF1dG9tYXRpY2FsbHkgY29sbGVjdGVkIGJ5IFJhbmstWC4gVGhpcyBpbmZvcm1hdGlvbiBjYW4gaW5jbHVkZTogeW91ciBJUCBhZGRyZXNzLCBicm93c2VyIHR5cGUsIGRvbWFpbiBuYW1lcywgYWNjZXNzIHRpbWVzIGFuZCByZWZlcnJpbmcgd2Vic2l0ZSBhZGRyZXNzZXMuIFRoaXMgaW5mb3JtYXRpb24gaXMgdXNlZCBmb3IgdGhlIG9wZXJhdGlvbiBvZiB0aGUgc2VydmljZSwgdG8gbWFpbnRhaW4gcXVhbGl0eSBvZiB0aGUgc2VydmljZSwgYW5kIHRvIHByb3ZpZGUgZ2VuZXJhbCBzdGF0aXN0aWNzIHJlZ2FyZGluZyB1c2Ugb2YgdGhlIFJhbmstWCB3ZWJzaXRlLjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiZ3JheVRleHRcXFwiPjxzdHJvbmc+VXNlIG9mIENvb2tpZXM8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlRoZSBSYW5rLVggd2Vic2l0ZSBtYXkgdXNlIFxcXCJjb29raWVzXFxcIiB0byBoZWxwIHlvdSBwZXJzb25hbGl6ZSB5b3VyIG9ubGluZSBleHBlcmllbmNlLiBBIGNvb2tpZSBpcyBhIHRleHQgZmlsZSB0aGF0IGlzIHBsYWNlZCBvbiB5b3VyIGhhcmQgZGlzayBieSBhIHdlYiBwYWdlIHNlcnZlci4gQ29va2llcyBjYW5ub3QgYmUgdXNlZCB0byBydW4gcHJvZ3JhbXMgb3IgZGVsaXZlciB2aXJ1c2VzIHRvIHlvdXIgY29tcHV0ZXIuIENvb2tpZXMgYXJlIHVuaXF1ZWx5IGFzc2lnbmVkIHRvIHlvdSwgYW5kIGNhbiBvbmx5IGJlIHJlYWQgYnkgYSB3ZWIgc2VydmVyIGluIHRoZSBkb21haW4gdGhhdCBpc3N1ZWQgdGhlIGNvb2tpZSB0byB5b3UuPGJyPk9uZSBvZiB0aGUgcHJpbWFyeSBwdXJwb3NlcyBvZiBjb29raWVzIGlzIHRvIHByb3ZpZGUgYSBjb252ZW5pZW5jZSBmZWF0dXJlIHRvIHNhdmUgeW91IHRpbWUuIFRoZSBwdXJwb3NlIG9mIGEgY29va2llIGlzIHRvIHRlbGwgdGhlIFdlYiBzZXJ2ZXIgdGhhdCB5b3UgaGF2ZSByZXR1cm5lZCB0byBhIHNwZWNpZmljIHBhZ2UuIEZvciBleGFtcGxlLCBpZiB5b3UgcGVyc29uYWxpemUgUmFuay1YIHBhZ2VzLCBvciByZWdpc3RlciB3aXRoIFJhbmstWCBzaXRlIG9yIHNlcnZpY2VzLCBhIGNvb2tpZSBoZWxwcyBSYW5rLVggdG8gcmVjYWxsIHlvdXIgc3BlY2lmaWMgaW5mb3JtYXRpb24gb24gc3Vic2VxdWVudCB2aXNpdHMuIFRoaXMgc2ltcGxpZmllcyB0aGUgcHJvY2VzcyBvZiByZWNvcmRpbmcgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiwgc3VjaCBhcyBiaWxsaW5nIGFkZHJlc3Nlcywgc2hpcHBpbmcgYWRkcmVzc2VzLCBhbmQgc28gb24uIFdoZW4geW91IHJldHVybiB0byB0aGUgc2FtZSBSYW5rLVggd2Vic2l0ZSwgdGhlIGluZm9ybWF0aW9uIHlvdSBwcmV2aW91c2x5IHByb3ZpZGVkIGNhbiBiZSByZXRyaWV2ZWQsIHNvIHlvdSBjYW4gZWFzaWx5IHVzZSB0aGUgUmFuay1YIGZlYXR1cmVzIHRoYXQgeW91IGN1c3RvbWl6ZWQuPGJyPllvdSBoYXZlIHRoZSBhYmlsaXR5IHRvIGFjY2VwdCBvciBkZWNsaW5lIGNvb2tpZXMuIE1vc3QgV2ViIGJyb3dzZXJzIGF1dG9tYXRpY2FsbHkgYWNjZXB0IGNvb2tpZXMsIGJ1dCB5b3UgY2FuIHVzdWFsbHkgbW9kaWZ5IHlvdXIgYnJvd3NlciBzZXR0aW5nIHRvIGRlY2xpbmUgY29va2llcyBpZiB5b3UgcHJlZmVyLiBJZiB5b3UgY2hvb3NlIHRvIGRlY2xpbmUgY29va2llcywgeW91IG1heSBub3QgYmUgYWJsZSB0byBmdWxseSBleHBlcmllbmNlIHRoZSBpbnRlcmFjdGl2ZSBmZWF0dXJlcyBvZiB0aGUgUmFuay1YIHNlcnZpY2VzIG9yIHdlYnNpdGVzIHlvdSB2aXNpdC48YnI+PGJyPjwvZGl2PjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPlNlY3VyaXR5IG9mIHlvdXIgUGVyc29uYWwgSW5mb3JtYXRpb248L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVggc2VjdXJlcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gdW5hdXRob3JpemVkIGFjY2VzcywgdXNlLCBvciBkaXNjbG9zdXJlLiBSYW5rLVggdXNlcyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgZm9yIHRoaXMgcHVycG9zZTo8YnI+PHVsIHN0eWxlPVxcXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmVcXFwiPjxsaT4tIFNTTCBQcm90b2NvbDwvbGk+PGxpPi0gTWFsd2FyZSBTY2FubmluZzwvbGk+PC91bD48YnI+V2hlbiBwZXJzb25hbCBpbmZvcm1hdGlvbiAoc3VjaCBhcyBhIGNyZWRpdCBjYXJkIG51bWJlcikgaXMgdHJhbnNtaXR0ZWQgdG8gb3RoZXIgd2Vic2l0ZXMsIGl0IGlzIHByb3RlY3RlZCB0aHJvdWdoIHRoZSB1c2Ugb2YgZW5jcnlwdGlvbiwgc3VjaCBhcyB0aGUgU2VjdXJlIFNvY2tldHMgTGF5ZXIgKFNTTCkgcHJvdG9jb2wuPC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkNoaWxkcmVuIFVuZGVyIFRoaXJ0ZWVuPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+UmFuay1YIGRvZXMgbm90IGtub3dpbmdseSBjb2xsZWN0IHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiB0aGlydGVlbi4gSWYgeW91IGFyZSB1bmRlciB0aGUgYWdlIG9mIHRoaXJ0ZWVuLCB5b3UgbXVzdCBhc2sgeW91ciBwYXJlbnQgb3IgZ3VhcmRpYW4gZm9yIHBlcm1pc3Npb24gdG8gdXNlIHRoaXMgd2Vic2l0ZS48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkRpc2Nvbm5lY3RpbmcgeW91ciBSYW5rLVggQWNjb3VudCBmcm9tIFRoaXJkIFBhcnR5IFdlYnNpdGVzPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+WW91IHdpbGwgYmUgYWJsZSB0byBjb25uZWN0IHlvdXIgUmFuay1YIGFjY291bnQgdG8gdGhpcmQgcGFydHkgYWNjb3VudHMuIEJZIENPTk5FQ1RJTkcgWU9VUiBSQU5LLVggQUNDT1VOVCBUTyBZT1VSIFRISVJEIFBBUlRZIEFDQ09VTlQsIFlPVSBBQ0tOT1dMRURHRSBBTkQgQUdSRUUgVEhBVCBZT1UgQVJFIENPTlNFTlRJTkcgVE8gVEhFIENPTlRJTlVPVVMgUkVMRUFTRSBPRiBJTkZPUk1BVElPTiBBQk9VVCBZT1UgVE8gT1RIRVJTIChJTiBBQ0NPUkRBTkNFIFdJVEggWU9VUiBQUklWQUNZIFNFVFRJTkdTIE9OIFRIT1NFIFRISVJEIFBBUlRZIFNJVEVTKS4gSUYgWU9VIERPIE5PVCBXQU5UIElORk9STUFUSU9OIEFCT1VUIFlPVSwgSU5DTFVESU5HIFBFUlNPTkFMTFkgSURFTlRJRllJTkcgSU5GT1JNQVRJT04sIFRPIEJFIFNIQVJFRCBJTlRISVMgTUFOTkVSLCBETyBOT1QgVVNFIFRIRSBUSElTIEZFQVRVUkUuIFlvdSBtYXkgZGlzY29ubmVjdCB5b3VyIGFjY291bnQgZnJvbSBhIHRoaXJkIHBhcnR5IGFjY291bnQgYXQgYW55IHRpbWUuIFVzZXJzIG1heSBsZWFybiBob3cgdG8gZGlzY29ubmVjdCB0aGVpciBhY2NvdW50cyBmcm9tIHRoaXJkLXBhcnR5IHdlYnNpdGVzIGJ5IHZpc2l0aW5nIHRoZWlyIFxcXCJNeSBBY2NvdW50XFxcIiBwYWdlLiBVc2VycyBtYXkgYWxzbyBjb250YWN0IHVzIHZpYSBlbWFpbC48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkFjY291bnQgVGVybWluYXRpb248L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5XZSB3aWxsIHJlbW92ZSB5b3VyIHB1YmxpYyBwb3N0cyBmcm9tIHZpZXcgYW5kL29yIGRpc3NvY2lhdGUgdGhlbSBmcm9tIHlvdXIgYWNjb3VudCBwcm9maWxlLCBidXQgd2UgbWF5IHJldGFpbiBpbmZvcm1hdGlvbiBhYm91dCB5b3UgZm9yIHRoZSBwdXJwb3NlcyBhdXRob3JpemVkIHVuZGVyIHRoaXMgUHJpdmFjeSBQb2xpY3kgdW5sZXNzIHByb2hpYml0ZWQgYnkgbGF3LiBGb3IgZXhhbXBsZSwgd2UgbWF5IHJldGFpbiBpbmZvcm1hdGlvbiB0byBwcmV2ZW50LCBpbnZlc3RpZ2F0ZSwgb3IgaWRlbnRpZnkgcG9zc2libGUgd3Jvbmdkb2luZyBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNlcnZpY2Ugb3IgdG8gY29tcGx5IHdpdGggbGVnYWwgb2JsaWdhdGlvbnMuIFBsZWFzZSBub3RlIHRoYXQgYnVzaW5lc3NlcyBjYW5ub3QgcmVtb3ZlIHRoZWlyIGJ1c2luZXNzIGxpc3RpbmdzLCByYXRpbmdzLCBvciByZXZpZXdzIGJ5IGNsb3NpbmcgdGhlaXIgYWNjb3VudHMuPGJyPjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJncmF5VGV4dFxcXCI+PHN0cm9uZz5PcHQtT3V0ICZhbXA7IFVuc3Vic2NyaWJlPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+V2UgcmVzcGVjdCB5b3VyIHByaXZhY3kgYW5kIGdpdmUgeW91IGFuIG9wcG9ydHVuaXR5IHRvIG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFubm91bmNlbWVudHMgb2YgY2VydGFpbiBpbmZvcm1hdGlvbi4gVXNlcnMgbWF5IG9wdC1vdXQgb2YgcmVjZWl2aW5nIGFueSBvciBhbGwgY29tbXVuaWNhdGlvbnMgZnJvbSBSYW5rLVggYnkgY29udGFjdGluZyB1cyBoZXJlOjxicj48dWwgc3R5bGU9XFxcImxpc3Qtc3R5bGUtdHlwZTogbm9uZVxcXCI+PGxpPi0gV2ViIHBhZ2U6IF9fX19fX19fX19fX19fX19fPC9saT48bGk+LSBFbWFpbDogX19fX19fX19fX19fX19fX188L2xpPjxsaT4tIFBob25lOiBfX19fX19fX19fX19fX19fXzwvbGk+PC91bD48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkNhbGlmb3JuaWEgUmVzaWRlbnRzOiBZb3VyIENhbGlmb3JuaWEgUHJpdmFjeSBSaWdodHM8L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVggZG9lcyBub3QgZGlzY2xvc2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byB0aGlyZCBwYXJ0aWVzIGZvciB0aGUgcHVycG9zZSBvZiBkaXJlY3RseSBtYXJrZXRpbmcgdGhlaXIgc2VydmljZXMgdG8geW91IHVubGVzcyB5b3UgZmlyc3QgYWdyZWUgdG8gc3VjaCBkaXNjbG9zdXJlLiBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIHJlZ2FyZGluZyB0aGlzIHBvbGljeSwgb3Igd291bGQgbGlrZSB0byBjaGFuZ2UgeW91ciBwcmVmZXJlbmNlcywgeW91IG1heSBjb250YWN0IHVzIGF0IHRoZSBhZGRyZXNzIGxpc3RlZCBiZWxvdy48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImdyYXlUZXh0XFxcIj48c3Ryb25nPkNoYW5nZXMgdG8gdGhpcyBTdGF0ZW1lbnQ8L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVggd2lsbCBvY2Nhc2lvbmFsbHkgdXBkYXRlIHRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kgdG8gcmVmbGVjdCBjb21wYW55IGFuZCBjdXN0b21lciBmZWVkYmFjay4gUmFuay1YIGVuY291cmFnZXMgeW91IHRvIHBlcmlvZGljYWxseSByZXZpZXcgdGhpcyBTdGF0ZW1lbnQgdG8gYmUgaW5mb3JtZWQgb2YgaG93IFJhbmstWCBpcyBwcm90ZWN0aW5nIHlvdXIgaW5mb3JtYXRpb24uPGJyPjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJncmF5VGV4dFxcXCI+PHN0cm9uZz5Db250YWN0IEluZm9ybWF0aW9uPC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+UmFuay1YIHdlbGNvbWVzIHlvdXIgcXVlc3Rpb25zIG9yIGNvbW1lbnRzIHJlZ2FyZGluZyB0aGlzIFN0YXRlbWVudCBvZiBQcml2YWN5LiBJZiB5b3UgYmVsaWV2ZSB0aGF0IFJhbmstWCBoYXMgbm90IGFkaGVyZWQgdG8gdGhpcyBTdGF0ZW1lbnQsIHBsZWFzZSBjb250YWN0IFJhbmstWCBhdDo8YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+UmFuay1YLCBMTEM8L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPjE2NTAgQWRhbXMgQXYuPC9kaXY+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5TYW4gRGllZ28sIENhbGlmb3JuaWEsIDkyMTE2PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+RW1haWwgQWRkcmVzczo8L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPmNvbnRhY3RAcmFuay14LmNvbTwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlRlbGVwaG9uZSBudW1iZXI6PC9kaXY+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj48YnI+RWZmZWN0aXZlIGFzIG9mIE1heSAzMSwgMjAxNzwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLmdvQmFjaygpXFxcIj5CYWNrPC9idXR0b24+PC9kaXY+PGJyPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9sYXlvdXQvUGFydGlhbHMyL3Byb21vdGVydG9zLmh0bWxcIixcIjxzdHlsZT5cXG4gICAgI3BwQm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDEzcHQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgfVxcbiAgICAjcHBIZWFkZXIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XFxuICAgICAgICBmb250LXNpemU6IDIxcHQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuICAgIFxcbiAgICAucHBDb25zaXN0ZW5jaWVzIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG5cXG4gICAgI3BwQm9keSA+IG9sID4gbGkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgI3BwQm9keSA+IG9sID4gbGkgPiB1bCA+IGxpe1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcblxcbiAgICAjcHBCb2R5ID4gb2wgPiBsaSA+IHVsID4gbGkgPiBvbCA+bGl7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuPC9zdHlsZT48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxicj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjxkaXYgaWQ9XFxcInBwSGVhZGVyXFxcIj48c3Bhbj48aW1nIHNyYz1cXFwiL2Fzc2V0cy9pbWFnZXMvbG9nb19zcS5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDo4MHB4XFxcIj48L3NwYW4+IFJhbmstWCBUZXJtcyBvZiBVc2U8L2Rpdj48ZGl2IGlkPVxcXCJwcEJvZHlcXFwiPlRoZXNlIHRlcm1zIG9mIHNlcnZpY2UgY29uc3RpdHV0ZSBhIGxlZ2FsbHkgYmluZGluZyBhZ3JlZW1lbnQgKHRoZSDigJxBZ3JlZW1lbnTigJ0pIGJldHdlZW4geW91IGFuZCBSYW5rLVgsIExMQyAo4oCcUmFuay1Y4oCdIOKAnHdlLOKAnSDigJx1c+KAnSBvciDigJxvdXLigJ0pIGdvdmVybmluZyB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIGFwcGxpY2F0aW9uLCB3ZWJzaXRlLCBhbmQgdGVjaG5vbG9neSBwbGF0Zm9ybSAoY29sbGVjdGl2ZWx5LCB0aGUg4oCcUmFuay1YIFBsYXRmb3Jt4oCdKS4gUExFQVNFIEJFIEFEVklTRUQ6IFRISVMgQUdSRUVNRU5UIENPTlRBSU5TIFBST1ZJU0lPTlMgVEhBVCBHT1ZFUk4gSE9XIENMQUlNUyBZT1UgQU5EIFJBTkstWCBIQVZFIEFHQUlOU1QgRUFDSCBPVEhFUiBDQU4gQkUgQlJPVUdIVCAoU0VFIFNFQ1RJT04gMTYgQkVMT1cpLiBUSEVTRSBQUk9WSVNJT05TIFdJTEwsIFdJVEggTElNSVRFRCBFWENFUFRJT04sIFJFUVVJUkUgWU9VIFRPIFNVQk1JVCBDTEFJTVMgWU9VIEhBVkUgQUdBSU5TVCBSQU5LLVggVE8gQklORElORyBBTkQgRklOQUwgQVJCSVRSQVRJT04gT04gQU4gSU5ESVZJRFVBTCBCQVNJUywgTk9UIEFTIEEgUExBSU5USUZGIE9SIENMQVNTIE1FTUJFUiBJTiBBTlkgQ0xBU1MsIEdST1VQIE9SIFJFUFJFU0VOVEFUSVZFIEFDVElPTiBPUiBQUk9DRUVESU5HLiBBUyBBIERSSVZFUiwgWU9VIEhBVkUgQU4gT1BQT1JUVU5JVFkgVE8gT1BUIE9VVCBPRiBBUkJJVFJBVElPTiBXSVRIIFJFU1BFQ1QgVE8gQ0VSVEFJTiBDTEFJTVMgQVMgUFJPVklERUQgSU4gU0VDVElPTiAxNy4gQnkgZW50ZXJpbmcgaW50byB0byB0aGlzIEFncmVlbWVudCwgeW91IGV4cHJlc3NseSBhY2tub3dsZWRnZSB0aGF0IHlvdSB1bmRlcnN0YW5kIHRoaXMgQWdyZWVtZW50IChpbmNsdWRpbmcgdGhlIGRpc3B1dGUgcmVzb2x1dGlvbiBhbmQgYXJiaXRyYXRpb24gcHJvdmlzaW9ucyBTZWN0aW9uIDE2KSBhbmQgYWNjZXB0IGFsbCBvZiBpdHMgdGVybXMuIElGIFlPVSBETyBOT1QgQUdSRUUgVE8gQkUgQk9VTkQgQlkgVEhFIFRFUk1TIEFORCBDT05ESVRJT05TIE9GIFRISVMgQUdSRUVNRU5ULCBZT1UgTUFZIE5PVCBVU0UgT1IgQUNDRVNTIFRIRSBSQU5LLVggUExBVEZPUk0uPG9sPjxsaT48Yj5UaGUgUmFuay1YIFBsYXRmb3JtPC9iPiBUaGUgUmFuay1YIFBsYXRmb3JtIHByb3ZpZGVzIGFuIG9ubGluZSBwbGF0Zm9ybSB0aGF0IGNyZWF0ZXMgbGlzdHMsIHJhbmtpbmdzLCBhbmQgZm9ydW1zIGFib3V0IGJ1c2luZXNzZXMsIGFjdGl2aXRpZXMsIGxvY2F0aW9ucywgYW5kIHZlbnVlcyAoQ29sbGVjdGl2ZWx5IOKAnEJ1c2luZXNzZXPigJ0pLiBUaGUgbGlzdHMsIHJhbmtpbmdzLCBhbmQgZm9ydW1zIHdpdGhpbiB0aGUgUmFuay1YIFBsYXRmb3JtIGFyZSBnZW5lcmF0ZWQgYnkgcGVyc29ucyB3aG8gdXNlIHRoZSBzaXRlICjigJxVc2Vyc+KAnSkgdG8gcmFuayBhbmQgY29tbWVudCBvbiBCdXNpbmVzc2VzIHRoZXkgaGF2ZSBleHBlcmllbmNlZC4gVGhlIFJhbmstWCBQbGF0Zm9ybSBhbHNvIGFsbG93cyBwZXJzb25zIHRvIHByb21vdGUgUmFuay1YIHRvIHZhcmlvdXMgQnVzaW5lc3NlcyAo4oCcUHJvbW90ZXJz4oCdKSBpbiBleGNoYW5nZSBmb3IgYSBjb21taXNzaW9uLWJhc2VkIHBlcmNlbnRhZ2Ugb2YgdGhlIHJldmVudWUgZ2VuZXJhdGVkIGJ5IEJ1c2luZXNzZXMgd2hvIHRoZSBQcm9tb3RlciBzdWNjZXNzZnVsbHkgc2lnbnMgdXAgZm9yIFJhbmstWOKAmXMgUHJlbWl1bSBNZW1iZXJzaGlwLiBFYWNoIGluZGl2aWR1YWwgUHJvbW90ZXIgd2lsbCBiZSBhc3NpZ25lZCBhIHVuaXF1ZSBhbHBoYW51bWVyaWMgY29kZSAo4oCcQ29kZeKAnSkuIEVhY2ggQnVzaW5lc3MgdGhhdCBzaWducyB1cCBmb3IgUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgd2lsbCB1c2UgdGhlIENvZGUgYXNzaWduZWQgdG8gdGhlIFByb21vdGVyIHRoYXQgY29udGFjdGVkIHRoZW0gdG8gZ2FpbiBhY2Nlc3MgdG8gUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMuIFdoZW4gYSBCdXNpbmVzcyB1c2VzIHRoaXMgQ29kZSwgdGhlIEJ1c2luZXNzIHdpbGwgYmUgZ2l2ZW4gc2l4dHkgKDYwKSBkYXlzIG9mIGZyZWUgYWNjZXNzIHRvIHRoZSBQcmVtaXVtIE1lbWJlcnNoaXAuIElmIGEgQnVzaW5lc3MsIGFmdGVyIHRoZSA2MC1kYXkgZnJlZSBwZXJpb2QgZXhwaXJlcywgY2hvb3NlcyB0byBjb250aW51ZSBhY2Nlc3NpbmcgUmFuay1Y4oCZcyBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMsIGl0IHdpbGwgZG8gc28gYnkgdXNpbmcgdGhlIFByb21vdGVy4oCZcyBDb2RlIHRvIHNpZ24gdXAgZm9yIGNvbnRpbnVlZCBQcmVtaXVtIE1lbWJlcnNoaXAgYmVuZWZpdHMgYXQgdGhlIHNwZWNpZmllZCBjb3N0LjwvbGk+PGxpPjxiPk1vZGlmaWNhdGlvbiB0byB0aGUgQWdyZWVtZW50PC9iPiBJbiB0aGUgZXZlbnQgUmFuay1YIG1vZGlmaWVzIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIEFncmVlbWVudCwgc3VjaCBtb2RpZmljYXRpb25zIHNoYWxsIGJlIGJpbmRpbmcgb24geW91IG9ubHkgdXBvbiB5b3VyIGFjY2VwdGFuY2Ugb2YgdGhlIG1vZGlmaWVkIEFncmVlbWVudC4gUmFuay1YIHJlc2VydmVzIHRoZSByaWdodCB0byBtb2RpZnkgYW55IGluZm9ybWF0aW9uIHJlZmVyZW5jZWQgaW4gdGhlIGh5cGVybGlua3MgZnJvbSB0aGlzIEFncmVlbWVudCBmcm9tIHRpbWUgdG8gdGltZSwgYW5kIHN1Y2ggbW9kaWZpY2F0aW9ucyBzaGFsbCBiZWNvbWUgZWZmZWN0aXZlIHVwb24gcG9zdGluZy4gQ29udGludWVkIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIFNlcnZpY2VzIGFmdGVyIGFueSBzdWNoIGNoYW5nZXMgc2hhbGwgY29uc3RpdHV0ZSB5b3VyIGNvbnNlbnQgdG8gc3VjaCBjaGFuZ2VzLiBVbmxlc3MgbWF0ZXJpYWwgY2hhbmdlcyBhcmUgbWFkZSB0byB0aGUgYXJiaXRyYXRpb24gcHJvdmlzaW9ucyBoZXJlaW4sIHlvdSBhZ3JlZSB0aGF0IG1vZGlmaWNhdGlvbiBvZiB0aGlzIEFncmVlbWVudCBkb2VzIG5vdCBjcmVhdGUgYSByZW5ld2VkIG9wcG9ydHVuaXR5IHRvIG9wdCBvdXQgb2YgYXJiaXRyYXRpb24gKGlmIGFwcGxpY2FibGUpLjwvbGk+PGxpPjxiPkVsaWdpYmlsaXR5PC9iPiBUaGUgUmFuay1YIFBsYXRmb3JtIG1heSBvbmx5IGJlIHVzZWQgYnkgaW5kaXZpZHVhbHMgYW5kIGJ1c2luZXNzZXMgd2hvIGNhbiBmb3JtIGxlZ2FsbHkgYmluZGluZyBjb250cmFjdHMgdW5kZXIgYXBwbGljYWJsZSBsYXcuIFRoZSBSYW5rLVggUGxhdGZvcm0gaXMgbm90IGF2YWlsYWJsZSB0byBjaGlsZHJlbiAocGVyc29ucyB1bmRlciB0aGUgYWdlIG9mIDE4KSBvciBQcmVtaXVtIE1lbWJlcnMgd2hvIGhhdmUgaGFkIHRoZWlyIFByZW1pdW0gTWVtYmVyIGFjY291bnQgdGVtcG9yYXJpbHkgb3IgcGVybWFuZW50bHkgZGVhY3RpdmF0ZWQuIEJ5IGJlY29taW5nIGEgUHJlbWl1bSBNZW1iZXIgb2YgUmFuay1Y4oCZcyBQbGF0Zm9ybSwgeW91IHJlcHJlc2VudCBhbmQgd2FycmFudCB0aGF0IHlvdSBhcmUgYXQgbGVhc3QgMTggeWVhcnMgb2xkIGFuZCB0aGF0IHlvdSBoYXZlIHRoZSByaWdodCwgYXV0aG9yaXR5IGFuZCBjYXBhY2l0eSB0byBlbnRlciBpbnRvIGFuZCBhYmlkZSBieSB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQuIFlvdSBtYXkgbm90IGFsbG93IG90aGVyIHBlcnNvbnMgdG8gdXNlIHlvdXIgQnVzaW5lc3PigJlzIFJhbmstWCBhY2NvdW50LCBhbmQgeW91IGFncmVlIHRoYXQgeW91IGFyZSB0aGUgc29sZSBhdXRob3JpemVkIHVzZXIgb2YgeW91ciBhY2NvdW50LjwvbGk+PGxpPjxiPlBheW1lbnRzPC9iPiBJZiB5b3UgYXJlIGEgUHJvbW90ZXIsIHlvdSB3aWxsIHJlY2VpdmUgcGF5bWVudCBmb3IgeW91ciBlZmZvcnRzIGluIHByb21vdGluZyBhZnRlciBzdWNjZXNzZnVsbHkgc2lnbmluZyBCdXNpbmVzc2VzIHVwIGZvciBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcHMgKOKAnFNlcnZpY2Vz4oCdKS4gQWxsIHBheW1lbnRzIGFyZSBzdWJqZWN0IHRvIFJhbmstWCBDb21taXNzaW9uLCBkaXNjdXNzZWQgYmVsb3cuIFJhbmstWCB3aWxsIHByb2Nlc3MgYWxsIHBheW1lbnRzIGR1ZSB0byB5b3UgdGhyb3VnaCBpdHMgdGhpcmQgcGFydHkgcGF5bWVudHMgcHJvY2Vzc29yLiBZb3UgYWNrbm93bGVkZ2UgYW5kIGFncmVlIHRoYXQgc3VjaCBhbW91bnRzIHNoYWxsIG5vdCBpbmNsdWRlIGFueSBpbnRlcmVzdCBhbmQgd2lsbCBiZSBuZXQgb2YgYW55IGFtb3VudHMgdGhhdCB3ZSBhcmUgcmVxdWlyZWQgdG8gd2l0aGhvbGQgYnkgbGF3LjxvbCB0eXBlPVxcXCJhXFxcIj48bGk+PGI+YS4gQ29tbWlzc2lvbjwvYj4gSW4gZXhjaGFuZ2UgZm9yIHN1Y2Nlc3NmdWxseSBzaWduaW5nIEJ1c2luZXNzZXMgdXAgZm9yIFJhbmstWOKAmXMgUHJlbWl1bSBNZW1iZXJzaGlwcywgUmFuay1YIGFncmVlcyB0byBwYXkgdGhlIFByb21vdGVyIGEgY29tbWlzc2lvbiBiYXNlZCBvbiB0aGUgcmV2ZW51ZSBnZW5lcmF0ZWQgYnkgaGlzIG9yIGhlciBTZXJ2aWNlcy4gVGhlIGFtb3VudCBvZiB0aGUgYXBwbGljYWJsZSBDb21taXNzaW9uIGlzIHNldCBvdXQgaW4gRXhoaWJpdCAxIGhlcmVpbiwgYW5kIHdpbGwgYXBwbHkgb25jZSB5b3UgYWNjZXB0IHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UuIFJhbmstWCByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2hhbmdlIHRoZSBhcHBsaWNhYmxlIENvbW1pc3Npb24gYXQgYW55IHRpbWUgaW4gUmFuay1Y4oCZcyBkaXNjcmV0aW9uIGJhc2VkIHVwb24gbG9jYWwgbWFya2V0IGZhY3RvcnMsIGFuZCBSYW5rLVggd2lsbCBwcm92aWRlIHlvdSB3aXRoIG5vdGljZSBpbiB0aGUgZXZlbnQgb2Ygc3VjaCBjaGFuZ2UuIENvbW1pc3Npb24gZm9yIGVhY2ggQWNjb3VudCBnZW5lcmF0ZWQgYnkgUHJvbW90ZXIgc2hhbGwgY29udGludWUgdW5sZXNzIGFuZCB1bnRpbCB0aGlzIHJlbGF0aW9uc2hpcCBpcyBleHByZXNzbHkgdGVybWluYXRlZCBhbmQvb3IgdGhlIEJ1c2luZXNzIGNhbmNlbHMgaXRzIFByZW1pdW0gTWVtYmVyc2hpcC4gQ29udGludWVkIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIGFmdGVyIGFueSBzdWNoIGNoYW5nZSBpbiB0aGUgQ29tbWlzc2lvbiBjYWxjdWxhdGlvbiBzaGFsbCBjb25zdGl0dXRlIHlvdXIgY29uc2VudCB0byBzdWNoIGNoYW5nZS4gVGhlIGFtb3VudCBvZiBtb250aGx5IENvbW1pc3Npb24gcGFpZCBieSBSYW5rLVggdG8gYW55IGluZGl2aWR1YWwgUHJvbW90ZXIgc2hhbGwgbm90IGV4Y2VlZCAkNSwwMDAuMDAgVW5pdGVkIFN0YXRlcyBEb2xsYXJzIHBlciBtb250aC4gU2ltaWxhcmx5LCBubyBpbmRpdmlkdWFsIFByb21vdGVyIG1heSByZWNlaXZlIGNvbW1pc3Npb24gZm9yIG1vcmUgdGhhbiBvbmUgaHVuZHJlZCAoMTAwKSBCdXNpbmVzc2VzIHRoYXQgdGhleSBzaWduIHVwIGZvciBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcHMgKOKAnEFjY291bnRz4oCdKS48L2xpPjxsaT48Yj5NZW1iZXJzaGlwIEZlZXMgYW5kIFBheW1lbnQgU2NoZWR1bGUuPC9iPiBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcCBjb3N0cyB2YXJ5IGRlcGVuZGluZyBvbiB0aGUgaW5kdXN0cnkgYW5kIGJ1c2luZXNzIHR5cGUgdGhhdCB0aGUgYnVzaW5lc3MgaXMgYXNzb2NpYXRlZCB3aXRoLCBhcyBzZXQgb3V0IGluIFNlY3Rpb24gNChjKSBiZWxvdy4gQWRkaXRpb25hbGx5LCBCdXNpbmVzc2VzIG1heSBwdXJjaGFzZSBjdXN0b20gcmFua2luZ3MgYXQgdGhlIHByaWNlIG9mICQ0NS4wMCBwZXIgbW9udGguIFJhbmstWCBjaGFyZ2VzIEJ1c2luZXNzZXMgb25jZSBwZXIgbW9udGggZm9yIFByZW1pdW0gTWVtYmVyc2hpcCBiZW5lZml0cywgd2hpY2ggd2lsbCBjb250aW51ZSB0byBiZSBhY2Nlc3NpYmxlIGJ5IEJ1c2luZXNzZXMgdW50aWwgYW5kIHVubGVzcyB0aGlzIEFncmVlbWVudCBoYXMgYmVlbiBtYXRlcmlhbGx5IGJyZWFjaGVkIG9yIHRlcm1pbmF0ZWQgd2l0aCBvciB3aXRob3V0IGNhdXNlLjwvbGk+PGxpPjxiPlByZW1pdW0gTWVtYmVyc2hpcHMgYW5kIFByaWNpbmc8L2I+IEEgQnVzaW5lc3MgbWF5IHNpZ24gdXAgZm9yIGFuZCBwdXJjaGFzZSBSYW5rLVjigJlzIFByZW1pdW0gTWVtYmVyc2hpcCBpbiBvcmRlciB0byB1dGlsaXplIHRoZSB2YXJpb3VzIGJlbmVmaXRzIG9mIGRvaW5nIHNvLiDigJxQcmVtaXVtIE1lbWJlcnNoaXDigJ0gZm9yIHB1cnBvc2VzIG9mIHRoaXMgYWdyZWVtZW50IHJlZmVycyB0byBhIEJ1c2luZXNz4oCZcyBhYmlsaXR5IHRvIHByb21vdGUgdGhlIEJ1c2luZXNz4oCZcyBzcGVjaWFscyBhbmQgYWN0aXZpdGllcywgd2hpY2ggZHJpdmVzIGFkZGl0aW9uYWwgb25saW5lIHRyYWZmaWMgdG8gdGhlIEJ1c2luZXNz4oCZcyBwcm9maWxlLCBpbiBleGNoYW5nZSBmb3IgYSBtb250aGx5IFByZW1pdW0gTWVtYmVyc2hpcCBmZWUuIFJhbmstWCByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2hhbmdlIHRoZSBwcmljaW5nIHNjaGVkdWxlIGZvciBQcmVtaXVtIE1lbWJlcnNoaXBzIGF0IGFueSB0aW1lIGluIG91ciBkaXNjcmV0aW9uIGJhc2VkIHVwb24gbG9jYWwgbWFya2V0IGZhY3RvcnMsIGFuZCB3ZSB3aWxsIHByb3ZpZGUgeW91IHdpdGggbm90aWNlIGluIHRoZSBldmVudCBvZiBjaGFuZ2VzIHRvIHRoZSBiYXNlIFByZW1pdW0gTWVtYmVyc2hpcCBmZWVzIHRoYXQgd291bGQgcmVzdWx0IGluIGEgY2hhbmdlIGluIHRoZSBhcHBsaWNhYmxlIGNvbW1pc3Npb24gcmF0ZS48L2xpPjxsaT48Yj5QYXltZW50IFNjaGVkdWxlLjwvYj4gUHJvbW90ZXJzIHNoYWxsIGJlIHBhaWQgb25jZSBwZXIgbW9udGggKHR3ZWx2ZSB0aW1lcyBwZXIgeWVhcikgZm9yIHRoZSBjdW11bGF0aXZlIGNvbW1pc3Npb24gZWFybmVkIGluIHRoYXQgbW9udGgsIGJhc2VkIG9uIHRoZSBDb21taXNzaW9uIFNjaGVkdWxlLCB0aGF0IGlzIGdlbmVyYXRlZCBieSB0aGUgQWNjb3VudHMgdGhleSBoYXZlIG9idGFpbmVkIGZvciBSYW5rLVguPC9saT48bGk+PGI+Tm8gT3RoZXIgUGF5bWVudHMuPC9iPiBObyBvdGhlciBmZWVzIGFuZC9vciBleHBlbnNlcyB3aWxsIGJlIHBhaWQgdG8gdGhlIFByb21vdGVyLCB1bmxlc3Mgc3VjaCBmZWVzIGFuZC9vciBleHBlbnNlcyBoYXZlIGJlZW4gYXBwcm92ZWQgaW4gYWR2YW5jZSBieSB0aGUgYXBwcm9wcmlhdGUgZXhlY3V0aXZlIG9uIGJlaGFsZiBvZiB0aGUgUmVjaXBpZW50IGluIHdyaXRpbmcuIFRoZSBQcm9tb3RlciBzaGFsbCBiZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGFueSBhbmQgYWxsIHRheGVzLCBTb2NpYWwgU2VjdXJpdHkgY29udHJpYnV0aW9ucyBvciBwYXltZW50cywgZGlzYWJpbGl0eSBpbnN1cmFuY2UsIHVuZW1wbG95bWVudCB0YXhlcywgYW5kIG90aGVyIHBheXJvbGwgdHlwZSB0YXhlcyBhcHBsaWNhYmxlIHRvIHN1Y2ggY29tcGVuc2F0aW9uLiBUaGUgQ29udHJhY3RvciBoYXMgdGhlIHJpZ2h0IG9mIGNvbnRyb2wgb3ZlciB0aGUgbWV0aG9kIG9mIHBheW1lbnQgZm9yIHNlcnZpY2VzLjwvbGk+PC9vbD48L2xpPjxsaT48Yj5Db21tdW5pY2F0aW9uczwvYj4gQnkgYmVjb21pbmcgYSBQcmVtaXVtIE1lbWJlciwgeW91IGFncmVlIHRvIHJlY2VpdmUgY29tbXVuaWNhdGlvbnMgZnJvbSB1cywgaW5jbHVkaW5nIHZpYSBlLW1haWwsIHRleHQgbWVzc2FnZSwgY2FsbHMsIGFuZCBwdXNoIG5vdGlmaWNhdGlvbnMuIFlvdSBhZ3JlZSB0aGF0IHRleHRzLCBjYWxscyBvciBwcmVyZWNvcmRlZCBtZXNzYWdlcyBtYXkgYmUgZ2VuZXJhdGVkIGJ5IGF1dG9tYXRpYyB0ZWxlcGhvbmUgZGlhbGluZyBzeXN0ZW1zLiBDb21tdW5pY2F0aW9ucyBmcm9tIFJhbmstWCwgaXRzIGFmZmlsaWF0ZWQgY29tcGFuaWVzIGFuZC9vciBEcml2ZXJzLCBtYXkgaW5jbHVkZSBidXQgYXJlIG5vdCBsaW1pdGVkIHRvOiBvcGVyYXRpb25hbCBjb21tdW5pY2F0aW9ucyBjb25jZXJuaW5nIHlvdXIgUHJlbWl1bSBNZW1iZXIgYWNjb3VudCBvciB1c2Ugb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciBTZXJ2aWNlcywgdXBkYXRlcyBjb25jZXJuaW5nIG5ldyBhbmQgZXhpc3RpbmcgZmVhdHVyZXMgb24gdGhlIFJhbmstWCBQbGF0Zm9ybSwgY29tbXVuaWNhdGlvbnMgY29uY2VybmluZyBwcm9tb3Rpb25zIHJ1biBieSB1cyBvciBvdXIgdGhpcmQtcGFydHkgcGFydG5lcnMsIGFuZCBuZXdzIGNvbmNlcm5pbmcgUmFuay1YIGFuZCBpbmR1c3RyeSBkZXZlbG9wbWVudHMuIFN0YW5kYXJkIHRleHQgbWVzc2FnaW5nIGNoYXJnZXMgYXBwbGllZCBieSB5b3VyIGNlbGwgcGhvbmUgY2FycmllciB3aWxsIGFwcGx5IHRvIHRleHQgbWVzc2FnZXMgd2Ugc2VuZC48YnI+SUYgWU9VIFdJU0ggVE8gT1BUIE9VVCBPRiBQUk9NT1RJT05BTCBFTUFJTFMsIFlPVSBDQU4gVU5TVUJTQ1JJQkUgRlJPTSBPVVIgUFJPTU9USU9OQUwgRU1BSUwgTElTVCBCWSBGT0xMT1dJTkcgVEhFIFVOU1VCU0NSSUJFIE9QVElPTlMgSU4gVEhFIFBST01PVElPTkFMIEVNQUlMIElUU0VMRi4gWU9VIEFDS05PV0xFREdFIFRIQVQgWU9VIEFSRSBOT1QgUkVRVUlSRUQgVE8gQ09OU0VOVCBUTyBSRUNFSVZFIFBST01PVElPTkFMIFRFWFRTIE9SIENBTExTIEFTIEEgQ09ORElUSU9OIE9GIFVTSU5HIFRIRSBQTEFURk9STSBPUiBUSEUgU0VSVklDRVMuIElGIFlPVSBXSVNIIFRPIE9QVCBPVVQgT0YgQUxMIFRFWFRTIE9SIENBTExTIEZST00gKElOQ0xVRElORyBPUEVSQVRJT05BTCBPUiBUUkFOU0FDVElPTkFMIFRFWFRTIE9SIENBTExTKSwgWU9VIENBTiBOT1RJRlkgVVMgVklBIEVNQUlMLCBIT1dFVkVSIFlPVSBBQ0tOT1dMRURHRSBUSEFUIE9QVElORyBPVVQgT0YgUkVDRUlWSU5HIEFMTCBURVhUUyBNQVkgSU1QQUNUIFlPVVIgVVNFIE9GIFRIRSBSYW5rLVggUExBVEZPUk0gT1IgVEhFIFNFUlZJQ0VTLjwvbGk+PGxpPjxiPllvdXIgSW5mb3JtYXRpb248L2I+IFlvdXIgSW5mb3JtYXRpb24gaXMgYW55IGluZm9ybWF0aW9uIHlvdSBwcm92aWRlLCBwdWJsaXNoIG9yIHBvc3QgdG8gb3IgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtIChpbmNsdWRpbmcgYW55IHByb2ZpbGUgaW5mb3JtYXRpb24geW91IHByb3ZpZGUpIG9yIHNlbmQgdG8gb3RoZXIgVXNlcnMgb3IgUHJlbWl1bSBNZW1iZXJzIChpbmNsdWRpbmcgdmlhIGluLWFwcGxpY2F0aW9uIGZlZWRiYWNrLCBhbnkgZW1haWwgZmVhdHVyZSwgb3IgdGhyb3VnaCBhbnkgLXJlbGF0ZWQgRmFjZWJvb2ssIFR3aXR0ZXIgb3Igb3RoZXIgc29jaWFsIG1lZGlhIHBvc3RpbmcpICh5b3VyIOKAnEluZm9ybWF0aW9u4oCdKS4gWW91IGNvbnNlbnQgdG8gdXMgdXNpbmcgeW91ciBJbmZvcm1hdGlvbiB0byBjcmVhdGUgYSBQcmVtaXVtIE1lbWJlciBhY2NvdW50IHRoYXQgd2lsbCBhbGxvdyB5b3UgdG8gdXNlIHRoZSBQbGF0Zm9ybSBhbmQgcGFydGljaXBhdGUgaW4gdGhlIFNlcnZpY2VzLiBPdXIgY29sbGVjdGlvbiBhbmQgdXNlIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCBTZXJ2aWNlcyBpcyBhcyBwcm92aWRlZCBpbiBSYW5rLVjigJlzIFByaXZhY3kgUG9saWN5IGxvY2F0ZWQgYXQgd3d3LlJhbmstWC5jb20vcHJpdmFjeS4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHlvdXIgSW5mb3JtYXRpb24gYW5kIHlvdXIgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgbWVtYmVycyBvZiB0aGUgcHVibGljLCBhbmQgd2UgYWN0IG9ubHkgYXMgYSBwYXNzaXZlIGNvbmR1aXQgZm9yIHlvdXIgb25saW5lIHBvc3Rpbmcgb2YgeW91ciBJbmZvcm1hdGlvbi4gWW91IGFncmVlIHRvIHByb3ZpZGUgYW5kIG1haW50YWluIGFjY3VyYXRlLCBjdXJyZW50IGFuZCBjb21wbGV0ZSBpbmZvcm1hdGlvbiBhbmQgdGhhdCB3ZSBhbmQgb3RoZXIgbWVtYmVycyBvZiB0aGUgcHVibGljIG1heSByZWx5IG9uIHlvdXIgSW5mb3JtYXRpb24gYXMgYWNjdXJhdGUsIGN1cnJlbnQgYW5kIGNvbXBsZXRlLiBUbyBlbmFibGUgUmFuay1YIHRvIHVzZSB5b3VyIEluZm9ybWF0aW9uLCB5b3UgZ3JhbnQgdG8gdXMgYSBub24tZXhjbHVzaXZlLCB3b3JsZHdpZGUsIHBlcnBldHVhbCwgaXJyZXZvY2FibGUsIHJveWFsdHktZnJlZSwgdHJhbnNmZXJhYmxlLCBzdWItbGljZW5zYWJsZSAodGhyb3VnaCBtdWx0aXBsZSB0aWVycykgcmlnaHQgYW5kIGxpY2Vuc2UgdG8gZXhlcmNpc2UgdGhlIGNvcHlyaWdodCwgcHVibGljaXR5LCBhbmQgZGF0YWJhc2UgcmlnaHRzIHlvdSBoYXZlIGluIHlvdXIgSW5mb3JtYXRpb24sIGFuZCB0byB1c2UsIGNvcHksIHBlcmZvcm0sIGRpc3BsYXkgYW5kIGRpc3RyaWJ1dGUgc3VjaCBJbmZvcm1hdGlvbiB0byBwcmVwYXJlIGRlcml2YXRpdmUgd29ya3MsIG9yIGluY29ycG9yYXRlIGludG8gb3RoZXIgd29ya3MsIHN1Y2ggSW5mb3JtYXRpb24sIGluIGFueSBtZWRpYSBub3cga25vd24gb3Igbm90IGN1cnJlbnRseSBrbm93bi4gUmFuay1YIGRvZXMgbm90IGFzc2VydCBhbnkgb3duZXJzaGlwIG92ZXIgeW91ciBJbmZvcm1hdGlvbjsgcmF0aGVyLCBhcyBiZXR3ZWVuIHlvdSBhbmQgUmFuay1YLCBzdWJqZWN0IHRvIHRoZSByaWdodHMgZ3JhbnRlZCB0byB1cyBpbiB0aGlzIEFncmVlbWVudCwgeW91IHJldGFpbiBmdWxsIG93bmVyc2hpcCBvZiBhbGwgb2YgeW91ciBJbmZvcm1hdGlvbiBhbmQgYW55IGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb3Igb3RoZXIgcHJvcHJpZXRhcnkgcmlnaHRzIGFzc29jaWF0ZWQgd2l0aCB5b3VyIEluZm9ybWF0aW9uLjxicj5Zb3UgbWF5IGJlIGFibGUgdG8gY3JlYXRlIG9yIGxvZy1pbiB0byB5b3VyIFJhbmstWCBQcmVtaXVtIE1lbWJlciBhY2NvdW50IHRocm91Z2ggb25saW5lIGFjY291bnRzIHlvdSBtYXkgaGF2ZSB3aXRoIHRoaXJkIHBhcnR5IHNvY2lhbCBuZXR3b3JraW5nIHNpdGVzIChlYWNoIHN1Y2ggYWNjb3VudCwgYW4gXFxcIlNOUyBBY2NvdW50XFxcIikuIEJ5IGNvbm5lY3RpbmcgdG8gUmFuay1YIHRocm91Z2ggYW4gU05TIEFjY291bnQsIHlvdSB1bmRlcnN0YW5kIHRoYXQgUmFuay1YIG1heSBhY2Nlc3MsIHN0b3JlLCBhbmQgbWFrZSBhdmFpbGFibGUgYW55IFNOUyBBY2NvdW50IGNvbnRlbnQgYWNjb3JkaW5nIHRvIHRoZSBwZXJtaXNzaW9uIHNldHRpbmdzIG9mIHlvdXIgU05TIEFjY291bnQgKGUuZy4sIGZyaWVuZHMsIG11dHVhbCBmcmllbmRzLCBjb250YWN0cyBvciBmb2xsb3dpbmcvZm9sbG93ZWQgbGlzdHMgKHRoZSDigJxTTlMgQ29udGVudOKAnSkpLiBZb3UgdW5kZXJzdGFuZCB0aGF0IFNOUyBDb250ZW50IG1heSBiZSBhdmFpbGFibGUgb24gYW5kIHRocm91Z2ggdGhlIFJhbmstWCBQbGF0Zm9ybSB0byBvdGhlciBVc2Vycy4gVW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQgaW4gdGhpcyBBZ3JlZW1lbnQsIGFsbCBTTlMgQ29udGVudCwgaWYgYW55LCBzaGFsbCBiZSBjb25zaWRlcmVkIHRvIGJlIHlvdXIgSW5mb3JtYXRpb24uPC9saT48bGk+PGI+UHJvbW90aW9ucyBhbmQgUmVmZXJyYWwgUHJvZ3JhbXM8L2I+IFJhbmstWCwgYXQgaXRzIHNvbGUgZGlzY3JldGlvbiwgbWF5IG1ha2UgYXZhaWxhYmxlIHByb21vdGlvbnMgd2l0aCBkaWZmZXJlbnQgZmVhdHVyZXMgdG8gYW55IFByZW1pdW0gTWVtYmVycyBvciBwcm9zcGVjdGl2ZSBQcmVtaXVtIE1lbWJlcnMuIFRoZXNlIHByb21vdGlvbnMsIHVubGVzcyBtYWRlIHRvIHlvdSwgc2hhbGwgaGF2ZSBubyBiZWFyaW5nIHdoYXRzb2V2ZXIgb24geW91ciBBZ3JlZW1lbnQgb3IgcmVsYXRpb25zaGlwIHdpdGggUmFuay1YLiBSYW5rLVggcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHdpdGhob2xkIG9yIGRlZHVjdCBjcmVkaXRzIG9yIGJlbmVmaXRzIG9idGFpbmVkIHRocm91Z2ggYSBwcm9tb3Rpb24gaW4gdGhlIGV2ZW50IHRoYXQgUmFuay1YIGRldGVybWluZXMgb3IgYmVsaWV2ZXMgdGhhdCB0aGUgcmVkZW1wdGlvbiBvZiB0aGUgcHJvbW90aW9uIG9yIHJlY2VpcHQgb2YgdGhlIGNyZWRpdCBvciBiZW5lZml0IHdhcyBpbiBlcnJvciwgZnJhdWR1bGVudCwgaWxsZWdhbCwgb3IgaW4gdmlvbGF0aW9uIG9mIHRoZSBhcHBsaWNhYmxlIHByb21vdGlvbiB0ZXJtcyBvciB0aGlzIEFncmVlbWVudC48L2xpPjxsaT48Yj5SZXN0cmljdGVkIEFjdGl2aXRpZXM8L2I+PG9sIHR5cGU9XFxcImFcXFwiPldpdGggcmVzcGVjdCB0byB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCB5b3VyIHBhcnRpY2lwYXRpb24gaW4gdGhlIFByZW1pdW0gTWVtYmVyc2hpcCwgeW91IGFncmVlIHRoYXQgeW91IHdpbGwgbm90OjxsaT5pbXBlcnNvbmF0ZSBhbnkgcGVyc29uLCBidXNpbmVzcywgb3IgZ292ZXJubWVudCBlbnRpdHk7PC9saT48bGk+c3RhbGssIHRocmVhdGVuLCBvciBvdGhlcndpc2UgaGFyYXNzIGFueSBwZXJzb24gb3IgZW50aXR5LCBvciBjYXJyeSBhbnkgd2VhcG9uczs8L2xpPjxsaT52aW9sYXRlIGFueSBsYXcsIHN0YXR1dGUsIHJ1bGUsIHBlcm1pdCwgb3JkaW5hbmNlIG9yIHJlZ3VsYXRpb247PC9saT48bGk+aW50ZXJmZXJlIHdpdGggb3IgZGlzcnVwdCB0aGUgU2VydmljZXMgb3IgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciB0aGUgc2VydmVycyBvciBuZXR3b3JrcyBjb25uZWN0ZWQgdG8gdGhlIFJhbmstWCBQbGF0Zm9ybTs8L2xpPjxsaT5wb3N0IEluZm9ybWF0aW9uIG9yIGludGVyYWN0IG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMgaW4gYSBtYW5uZXIgd2hpY2ggaXMgZmFsc2UsIGluYWNjdXJhdGUsIG1pc2xlYWRpbmcgKGRpcmVjdGx5IG9yIGJ5IG9taXNzaW9uIG9yIGZhaWx1cmUgdG8gdXBkYXRlIGluZm9ybWF0aW9uKSwgZGVmYW1hdG9yeSwgbGliZWxvdXMsIGFidXNpdmUsIG9ic2NlbmUsIHByb2ZhbmUsIG9mZmVuc2l2ZSwgc2V4dWFsbHkgb3JpZW50ZWQsIHRocmVhdGVuaW5nLCBoYXJhc3NpbmcsIG9yIGlsbGVnYWw7PC9saT48bGk+dXNlIHRoZSBSYW5rLVggUGxhdGZvcm0gaW4gYW55IHdheSB0aGF0IGluZnJpbmdlcyBhbnkgdGhpcmQgcGFydHnigJlzIHJpZ2h0cywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bzogaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cywgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgc2VjcmV0IG9yIG90aGVyIHByb3ByaWV0YXJ5IHJpZ2h0cyBvciByaWdodHMgb2YgcHVibGljaXR5IG9yIHByaXZhY3k7PC9saT48bGk+cG9zdCwgZW1haWwgb3Igb3RoZXJ3aXNlIHRyYW5zbWl0IGFueSBtYWxpY2lvdXMgY29kZSwgZmlsZXMgb3IgcHJvZ3JhbXMgZGVzaWduZWQgdG8gaW50ZXJydXB0LCBkYW1hZ2UsIGRlc3Ryb3kgb3IgbGltaXQgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgYW55IGNvbXB1dGVyIHNvZnR3YXJlIG9yIGhhcmR3YXJlIG9yIHRlbGVjb21tdW5pY2F0aW9ucyBlcXVpcG1lbnQgb3Igc3VycmVwdGl0aW91c2x5IGludGVyY2VwdCBvciBleHByb3ByaWF0ZSBhbnkgc3lzdGVtLCBkYXRhIG9yIHBlcnNvbmFsIGluZm9ybWF0aW9uOzwvbGk+PGxpPmZvcmdlIGhlYWRlcnMgb3Igb3RoZXJ3aXNlIG1hbmlwdWxhdGUgaWRlbnRpZmllcnMgaW4gb3JkZXIgdG8gZGlzZ3Vpc2UgdGhlIG9yaWdpbiBvZiBhbnkgaW5mb3JtYXRpb24gdHJhbnNtaXR0ZWQgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPuKAnGZyYW1l4oCdIG9yIOKAnG1pcnJvcuKAnSBhbnkgcGFydCBvZiB0aGUgUmFuay1YIFBsYXRmb3JtLCB3aXRob3V0IG91ciBwcmlvciB3cml0dGVuIGF1dGhvcml6YXRpb24gb3IgdXNlIG1ldGEgdGFncyBvciBjb2RlIG9yIG90aGVyIGRldmljZXMgY29udGFpbmluZyBhbnkgcmVmZXJlbmNlIHRvIHVzIGluIG9yZGVyIHRvIGRpcmVjdCBhbnkgcGVyc29uIHRvIGFueSBvdGhlciB3ZWIgc2l0ZSBmb3IgYW55IHB1cnBvc2U7IG9yPC9saT48bGk+bW9kaWZ5LCBhZGFwdCwgdHJhbnNsYXRlLCByZXZlcnNlIGVuZ2luZWVyLCBkZWNpcGhlciwgZGVjb21waWxlIG9yIG90aGVyd2lzZSBkaXNhc3NlbWJsZSBhbnkgcG9ydGlvbiBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIGFueSBzb2Z0d2FyZSB1c2VkIG9uIG9yIGZvciB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPnJlbnQsIGxlYXNlLCBsZW5kLCBzZWxsLCByZWRpc3RyaWJ1dGUsIGxpY2Vuc2Ugb3Igc3VibGljZW5zZSB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIGFjY2VzcyB0byBhbnkgcG9ydGlvbiBvZiB0aGUgUmFuay1YIFBsYXRmb3JtOzwvbGk+PGxpPnVzZSBhbnkgcm9ib3QsIHNwaWRlciwgc2l0ZSBzZWFyY2gvcmV0cmlldmFsIGFwcGxpY2F0aW9uLCBvciBvdGhlciBtYW51YWwgb3IgYXV0b21hdGljIGRldmljZSBvciBwcm9jZXNzIHRvIHJldHJpZXZlLCBpbmRleCwgc2NyYXBlLCDigJxkYXRhIG1pbmXigJ0sIG9yIGluIGFueSB3YXkgcmVwcm9kdWNlIG9yIGNpcmN1bXZlbnQgdGhlIG5hdmlnYXRpb25hbCBzdHJ1Y3R1cmUgb3IgcHJlc2VudGF0aW9uIG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgaXRzIGNvbnRlbnRzOzwvbGk+PGxpPmxpbmsgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSB0byBhbnkgb3RoZXIgd2ViIHNpdGVzOzwvbGk+PGxpPnRyYW5zZmVyIG9yIHNlbGwgeW91ciBQcmVtaXVtIE1lbWJlciBhY2NvdW50LCBwYXNzd29yZCBhbmQvb3IgaWRlbnRpZmljYXRpb24gdG8gYW55IG90aGVyIHBhcnR5PC9saT48bGk+ZGlzY3JpbWluYXRlIGFnYWluc3Qgb3IgaGFyYXNzIGFueW9uZSBvbiB0aGUgYmFzaXMgb2YgcmFjZSwgbmF0aW9uYWwgb3JpZ2luLCByZWxpZ2lvbiwgZ2VuZGVyLCBnZW5kZXIgaWRlbnRpdHksIHBoeXNpY2FsIG9yIG1lbnRhbCBkaXNhYmlsaXR5LCBtZWRpY2FsIGNvbmRpdGlvbiwgbWFyaXRhbCBzdGF0dXMsIGFnZSBvciBzZXh1YWwgb3JpZW50YXRpb24sIG9yPC9saT48bGk+Y2F1c2UgYW55IHRoaXJkIHBhcnR5IHRvIGVuZ2FnZSBpbiB0aGUgcmVzdHJpY3RlZCBhY3Rpdml0aWVzIGFib3ZlLjwvbGk+PC9vbD48L2xpPjxsaT48Yj5JbnRlbGxlY3R1YWwgUHJvcGVydHk8L2I+IEFsbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gc2hhbGwgYmUgb3duZWQgYnkgUmFuay1YIGFic29sdXRlbHkgYW5kIGluIHRoZWlyIGVudGlyZXR5LiBUaGVzZSByaWdodHMgaW5jbHVkZSBhbmQgYXJlIG5vdCBsaW1pdGVkIHRvIGRhdGFiYXNlIHJpZ2h0cywgY29weXJpZ2h0LCBkZXNpZ24gcmlnaHRzICh3aGV0aGVyIHJlZ2lzdGVyZWQgb3IgdW5yZWdpc3RlcmVkKSwgdHJhZGVtYXJrcyAod2hldGhlciByZWdpc3RlcmVkIG9yIHVucmVnaXN0ZXJlZCkgYW5kIG90aGVyIHNpbWlsYXIgcmlnaHRzIHdoZXJldmVyIGV4aXN0aW5nIGluIHRoZSB3b3JsZCB0b2dldGhlciB3aXRoIHRoZSByaWdodCB0byBhcHBseSBmb3IgcHJvdGVjdGlvbiBvZiB0aGUgc2FtZS4gQWxsIG90aGVyIHRyYWRlbWFya3MsIGxvZ29zLCBzZXJ2aWNlIG1hcmtzLCBjb21wYW55IG9yIHByb2R1Y3QgbmFtZXMgc2V0IGZvcnRoIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gYXJlIHRoZSBwcm9wZXJ0eSBvZiB0aGVpciByZXNwZWN0aXZlIG93bmVycy4gWW91IGFja25vd2xlZGdlIGFuZCBhZ3JlZSB0aGF0IGFueSBxdWVzdGlvbnMsIGNvbW1lbnRzLCBzdWdnZXN0aW9ucywgaWRlYXMsIGZlZWRiYWNrIG9yIG90aGVyIGluZm9ybWF0aW9uICjigJxTdWJtaXNzaW9uc+KAnSkgcHJvdmlkZWQgYnkgeW91IHRvIHVzIGFyZSBub24tY29uZmlkZW50aWFsIGFuZCBzaGFsbCBiZWNvbWUgdGhlIHNvbGUgcHJvcGVydHkgb2YgUmFuay1YLiBSYW5rLVggc2hhbGwgb3duIGV4Y2x1c2l2ZSByaWdodHMsIGluY2x1ZGluZyBhbGwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cywgYW5kIHNoYWxsIGJlIGVudGl0bGVkIHRvIHRoZSB1bnJlc3RyaWN0ZWQgdXNlIGFuZCBkaXNzZW1pbmF0aW9uIG9mIHRoZXNlIFN1Ym1pc3Npb25zIGZvciBhbnkgcHVycG9zZSwgY29tbWVyY2lhbCBvciBvdGhlcndpc2UsIHdpdGhvdXQgYWNrbm93bGVkZ21lbnQgb3IgY29tcGVuc2F0aW9uIHRvIHlvdS48YnI+UmFuay1YIGFuZCBvdGhlciBSYW5rLVggbG9nb3MsIGRlc2lnbnMsIGdyYXBoaWNzLCBpY29ucywgc2NyaXB0cyBhbmQgc2VydmljZSBuYW1lcyBhcmUgcmVnaXN0ZXJlZCB0cmFkZW1hcmtzLCB0cmFkZW1hcmtzIG9yIHRyYWRlIGRyZXNzIG9mIFJhbmstWCBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQvb3Igb3RoZXIgY291bnRyaWVzIChjb2xsZWN0aXZlbHksIHRoZSDigJxSYW5rLVggTWFya3PigJ0pLiBJZiB5b3UgcHJvdmlkZSBTZXJ2aWNlcyBhcyBhIFByZW1pdW0gTWVtYmVyLCBSYW5rLVggZ3JhbnRzIHRvIHlvdSwgZHVyaW5nIHRoZSB0ZXJtIG9mIHRoaXMgQWdyZWVtZW50LCBhbmQgc3ViamVjdCB0byB5b3VyIGNvbXBsaWFuY2Ugd2l0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhpcyBBZ3JlZW1lbnQsIGEgbGltaXRlZCwgcmV2b2NhYmxlLCBub24tZXhjbHVzaXZlIGxpY2Vuc2UgdG8gZGlzcGxheSBhbmQgdXNlIHRoZSBSYW5rLVggTWFya3Mgc29sZWx5IGluIGNvbm5lY3Rpb24gd2l0aCBwcm92aWRpbmcgdGhlIFNlcnZpY2VzIHRocm91Z2ggdGhlIFJhbmstWCBQbGF0Zm9ybSAo4oCcTGljZW5zZeKAnSkuIFRoZSBMaWNlbnNlIGlzIG5vbi10cmFuc2ZlcmFibGUgYW5kIG5vbi1hc3NpZ25hYmxlLCBhbmQgeW91IHNoYWxsIG5vdCBncmFudCB0byBhbnkgdGhpcmQgcGFydHkgYW55IHJpZ2h0LCBwZXJtaXNzaW9uLCBsaWNlbnNlIG9yIHN1YmxpY2Vuc2Ugd2l0aCByZXNwZWN0IHRvIGFueSBvZiB0aGUgcmlnaHRzIGdyYW50ZWQgaGVyZXVuZGVyIHdpdGhvdXQgUmFuay1Y4oCZcyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24sIHdoaWNoIGl0IG1heSB3aXRoaG9sZCBpbiBpdHMgc29sZSBkaXNjcmV0aW9uLiBUaGUgUmFuay1YIE1hcmtzIG1heSBub3QgYmUgdXNlZCBpbiBhbnkgbWFubmVyIHRoYXQgaXMgbGlrZWx5IHRvIGNhdXNlIGNvbmZ1c2lvbi48YnI+WW91IGFja25vd2xlZGdlIHRoYXQgUmFuay1YIGlzIHRoZSBvd25lciBhbmQgbGljZW5zb3Igb2YgdGhlIFJhbmstWCBNYXJrcywgaW5jbHVkaW5nIGFsbCBnb29kd2lsbCBhc3NvY2lhdGVkIHRoZXJld2l0aCwgYW5kIHRoYXQgeW91ciB1c2Ugb2YgdGhlIFJhbmstWCBNYXJrcyB3aWxsIGNvbmZlciBubyBhZGRpdGlvbmFsIGludGVyZXN0IGluIG9yIG93bmVyc2hpcCBvZiB0aGUgUmFuay1YIE1hcmtzIGluIHlvdSBidXQgcmF0aGVyIGludXJlcyB0byB0aGUgYmVuZWZpdCBvZiBSYW5rLVguIFlvdSBhZ3JlZSB0byB1c2UgdGhlIFJhbmstWCBNYXJrcyBzdHJpY3RseSBpbiBhY2NvcmRhbmNlIHdpdGggUmFuay1Y4oCZcyBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgYW55IG90aGVyIGd1aWRlbGluZXMgYXMgbWF5IGJlIHByb3ZpZGVkIHRvIHlvdSBhbmQgcmV2aXNlZCBmcm9tIHRpbWUgdG8gdGltZSwgYW5kIHRvIGltbWVkaWF0ZWx5IGNlYXNlIGFueSB1c2UgdGhhdCBSYW5rLVggZGV0ZXJtaW5lcyB0byBub25jb25mb3JtaW5nIG9yIG90aGVyd2lzZSB1bmFjY2VwdGFibGUuPGJyPllvdSBhZ3JlZSB0aGF0IHlvdSB3aWxsIG5vdDogKDEpIGNyZWF0ZSBhbnkgbWF0ZXJpYWxzIHRoYXQgaW5jb3Jwb3JhdGUgdGhlIFJhbmstWCBNYXJrcyBvciBhbnkgZGVyaXZhdGl2ZXMgb2YgdGhlIFJhbmstWCBNYXJrcyBvdGhlciB0aGFuIGFzIGV4cHJlc3NseSBhcHByb3ZlZCBieSBSYW5rLVggaW4gd3JpdGluZzsgKDIpIHVzZSB0aGUgUmFuay1YIE1hcmtzIGluIGFueSB3YXkgdGhhdCB0ZW5kcyB0byBpbXBhaXIgdGhlaXIgdmFsaWRpdHkgYXMgcHJvcHJpZXRhcnkgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgdHJhZGUgbmFtZXMgb3IgdHJhZGUgZHJlc3MsIG9yIHVzZSB0aGUgUmFuay1YIE1hcmtzIG90aGVyIHRoYW4gaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSB0ZXJtcywgY29uZGl0aW9ucyBhbmQgcmVzdHJpY3Rpb25zIGhlcmVpbjsgKDMpIHRha2UgYW55IG90aGVyIGFjdGlvbiB0aGF0IHdvdWxkIGplb3BhcmRpemUgb3IgaW1wYWlyIFJhbmstWOKAmXMgcmlnaHRzIGFzIG93bmVyIG9mIHRoZSBSYW5rLVggTWFya3Mgb3IgdGhlIGxlZ2FsaXR5IGFuZC9vciBlbmZvcmNlYWJpbGl0eSBvZiB0aGUgUmFuay1YIE1hcmtzLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgY2hhbGxlbmdpbmcgb3Igb3Bwb3NpbmcgUmFuay1Y4oCZcyBvd25lcnNoaXAgaW4gdGhlIFJhbmstWCBNYXJrczsgKDQpIGFwcGx5IGZvciB0cmFkZW1hcmsgcmVnaXN0cmF0aW9uIG9yIHJlbmV3YWwgb2YgdHJhZGVtYXJrIHJlZ2lzdHJhdGlvbiBvZiBhbnkgb2YgdGhlIFJhbmstWCBNYXJrcywgYW55IGRlcml2YXRpdmUgb2YgdGhlIFJhbmstWCBNYXJrcywgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSBSYW5rLVggTWFya3MgYW5kIGFueSBvdGhlciBuYW1lLCBvciBhbnkgdHJhZGVtYXJrLCBzZXJ2aWNlIG1hcmssIHRyYWRlIG5hbWUsIHN5bWJvbCBvciB3b3JkIHdoaWNoIGlzIHNpbWlsYXIgdG8gdGhlIFJhbmstWCBNYXJrczsgKDUpIHVzZSB0aGUgUmFuay1YIE1hcmtzIG9uIG9yIGluIGNvbm5lY3Rpb24gd2l0aCBhbnkgcHJvZHVjdCwgc2VydmljZSBvciBhY3Rpdml0eSB0aGF0IGlzIGluIHZpb2xhdGlvbiBvZiBhbnkgbGF3LCBzdGF0dXRlLCBnb3Zlcm5tZW50IHJlZ3VsYXRpb24gb3Igc3RhbmRhcmQuPGJyPlZpb2xhdGlvbiBvZiBhbnkgcHJvdmlzaW9uIG9mIHRoaXMgTGljZW5zZSBtYXkgcmVzdWx0IGluIGltbWVkaWF0ZSB0ZXJtaW5hdGlvbiBvZiB0aGUgTGljZW5zZSwgaW4gUmFuay1Y4oCZcyBzb2xlIGRpc2NyZXRpb24uIElmIHlvdSBjcmVhdGUgYW55IG1hdGVyaWFscyBiZWFyaW5nIHRoZSBSYW5rLVggTWFya3MgKGluIHZpb2xhdGlvbiBvZiB0aGlzIEFncmVlbWVudCBvciBvdGhlcndpc2UpLCB5b3UgYWdyZWUgdGhhdCB1cG9uIHRoZWlyIGNyZWF0aW9uIFJhbmstWCBleGNsdXNpdmVseSBvd25zIGFsbCByaWdodCwgdGl0bGUgYW5kIGludGVyZXN0IGluIGFuZCB0byBzdWNoIG1hdGVyaWFscywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiBhbnkgbW9kaWZpY2F0aW9ucyB0byB0aGUgUmFuay1YIE1hcmtzIG9yIGRlcml2YXRpdmUgd29ya3MgYmFzZWQgb24gdGhlIFJhbmstWCBNYXJrcy4gWW91IGZ1cnRoZXIgYWdyZWUgdG8gYXNzaWduIGFueSBpbnRlcmVzdCBvciByaWdodCB5b3UgbWF5IGhhdmUgaW4gc3VjaCBtYXRlcmlhbHMgdG8gUmFuay1YLCBhbmQgdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhbmQgZXhlY3V0ZSBhbnkgZG9jdW1lbnRzIGFzIHJlYXNvbmFibHkgcmVxdWVzdGVkIGJ5IFJhbmstWCB0byBlbmFibGUgUmFuay1YIHRvIGZvcm1hbGl6ZSBzdWNoIGFzc2lnbm1lbnQuPGJyPlJhbmstWCByZXNwZWN0cyB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9mIG90aGVycywgYW5kIGV4cGVjdHMgUHJlbWl1bSBNZW1iZXJzIHRvIGRvIHRoZSBzYW1lLiBJZiB5b3UgYmVsaWV2ZSwgaW4gZ29vZCBmYWl0aCwgdGhhdCBhbnkgbWF0ZXJpYWxzIG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMgaW5mcmluZ2UgdXBvbiB5b3VyIGNvcHlyaWdodHMsIHBsZWFzZSBjb250YWN0IHVzIHZpYSBlbWFpbC48YnI+PC9saT48bGk+PGI+RGlzY2xhaW1lcnM8L2I+IFRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lcnMgYXJlIG1hZGUgb24gYmVoYWxmIG9mIFJhbmstWCwgb3VyIGFmZmlsaWF0ZXMsIHN1YnNpZGlhcmllcywgcGFyZW50cywgc3VjY2Vzc29ycyBhbmQgYXNzaWducywgYW5kIGVhY2ggb2Ygb3VyIHJlc3BlY3RpdmUgb2ZmaWNlcnMsIGRpcmVjdG9ycywgZW1wbG95ZWVzLCBhZ2VudHMsIGFuZCBzaGFyZWhvbGRlcnMuPGJyPlRoZSBSYW5rLVggUGxhdGZvcm0gaXMgcHJvdmlkZWQgb24gYW4g4oCcYXMgaXPigJ0gYmFzaXMgYW5kIHdpdGhvdXQgYW55IHdhcnJhbnR5IG9yIGNvbmRpdGlvbiwgZXhwcmVzcywgaW1wbGllZCBvciBzdGF0dXRvcnkuIFdlIGRvIG5vdCBndWFyYW50ZWUgYW5kIGRvIG5vdCBwcm9taXNlIGFueSBzcGVjaWZpYyByZXN1bHRzIGZyb20gdXNlIG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gYW5kL29yIHRoZSBTZXJ2aWNlcywgaW5jbHVkaW5nIHRoZSBhYmlsaXR5IHRvIHByb3ZpZGUgb3IgcmVjZWl2ZSBTZXJ2aWNlcyBhdCBhbnkgZ2l2ZW4gbG9jYXRpb24gb3IgdGltZS4gV2Ugc3BlY2lmaWNhbGx5IGRpc2NsYWltIGFueSBpbXBsaWVkIHdhcnJhbnRpZXMgb2YgdGl0bGUsIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyIHB1cnBvc2UgYW5kIG5vbi1pbmZyaW5nZW1lbnQuIFNvbWUgc3RhdGVzIGRvIG5vdCBhbGxvdyB0aGUgZGlzY2xhaW1lciBvZiBpbXBsaWVkIHdhcnJhbnRpZXMsIHNvIHRoZSBmb3JlZ29pbmcgZGlzY2xhaW1lciBtYXkgbm90IGFwcGx5IHRvIHlvdS48YnI+V2UgZG8gbm90IHdhcnJhbnQgdGhhdCB5b3VyIHVzZSBvZiB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIFNlcnZpY2VzIHdpbGwgYmUgYWNjdXJhdGUsIGNvbXBsZXRlLCByZWxpYWJsZSwgY3VycmVudCwgc2VjdXJlLCB1bmludGVycnVwdGVkLCBhbHdheXMgYXZhaWxhYmxlLCBvciBlcnJvci0gZnJlZSwgb3Igd2lsbCBtZWV0IHlvdXIgcmVxdWlyZW1lbnRzLCB0aGF0IGFueSBkZWZlY3RzIGluIHRoZSBSYW5rLVggUGxhdGZvcm0gd2lsbCBiZSBjb3JyZWN0ZWQsIG9yIHRoYXQgdGhlIFJhbmstWCBQbGF0Zm9ybSBpcyBmcmVlIG9mIHZpcnVzZXMgb3Igb3RoZXIgaGFybWZ1bCBjb21wb25lbnRzLiBXZSBkaXNjbGFpbSBsaWFiaWxpdHkgZm9yLCBhbmQgbm8gd2FycmFudHkgaXMgbWFkZSB3aXRoIHJlc3BlY3QgdG8sIGNvbm5lY3Rpdml0eSBhbmQgYXZhaWxhYmlsaXR5IG9mIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgU2VydmljZXMuPGJyPldlIGNhbm5vdCBndWFyYW50ZWUgdGhhdCBlYWNoIFVzZXIgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBpcyB3aG8gaGUgb3Igc2hlIGNsYWltcyB0byBiZS4gUGxlYXNlIHVzZSBjb21tb24gc2Vuc2Ugd2hlbiB1c2luZyB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCBTZXJ2aWNlcy4gUGxlYXNlIG5vdGUgdGhhdCB0aGVyZSBhcmUgYWxzbyByaXNrcyBvZiBkZWFsaW5nIHdpdGggdW5kZXJhZ2UgcGVyc29ucyBvciBwZW9wbGUgYWN0aW5nIHVuZGVyIGZhbHNlIHByZXRlbnNlLCBhbmQgd2UgZG8gbm90IGFjY2VwdCByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIGFueSBjb250ZW50LCBjb21tdW5pY2F0aW9uIG9yIG90aGVyIHVzZSBvciBhY2Nlc3Mgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBieSBwZXJzb25zIHVuZGVyIHRoZSBhZ2Ugb2YgMTggaW4gdmlvbGF0aW9uIG9mIHRoaXMgQWdyZWVtZW50Ljxicj5SYW5rLVggaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29uZHVjdCwgd2hldGhlciBvbmxpbmUgb3Igb2ZmbGluZSwgb2YgYW55IFVzZXIgb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBvciBTZXJ2aWNlcy4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHlvdXIgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgVXNlcnMuPGJyPlJhbmstWCBleHByZXNzbHkgZGlzY2xhaW1zIGFueSBsaWFiaWxpdHkgYXJpc2luZyBmcm9tIHRoZSB1bmF1dGhvcml6ZWQgdXNlIG9mIHlvdXIgUHJlbWl1bSBNZW1iZXIgYWNjb3VudC4gU2hvdWxkIHlvdSBzdXNwZWN0IHRoYXQgYW55IHVuYXV0aG9yaXplZCBwYXJ0eSBtYXkgYmUgdXNpbmcgeW91ciBQcmVtaXVtIE1lbWJlciBhY2NvdW50IG9yIHlvdSBzdXNwZWN0IGFueSBvdGhlciBicmVhY2ggb2Ygc2VjdXJpdHksIHlvdSBhZ3JlZSB0byBub3RpZnkgdXMgaW1tZWRpYXRlbHkuPGJyPlBsZWFzZSBjYXJlZnVsbHkgc2VsZWN0IHRoZSB0eXBlIG9mIGluZm9ybWF0aW9uIHRoYXQgeW91IHBvc3Qgb24gdGhlIFJhbmstWCBQbGF0Zm9ybSBvciB0aHJvdWdoIHRoZSBTZXJ2aWNlcyBvciByZWxlYXNlIHRvIG90aGVycy4gV2UgZGlzY2xhaW0gYWxsIGxpYWJpbGl0eSwgcmVnYXJkbGVzcyBvZiB0aGUgZm9ybSBvZiBhY3Rpb24sIGZvciB0aGUgYWN0cyBvciBvbWlzc2lvbnMgb2Ygb3RoZXIgVXNlcnMgKGluY2x1ZGluZyB1bmF1dGhvcml6ZWQgdXNlcnMsIG9yIOKAnGhhY2tlcnPigJ0pLjxicj5PcGluaW9ucywgYWR2aWNlLCBzdGF0ZW1lbnRzLCBvZmZlcnMsIG9yIG90aGVyIGluZm9ybWF0aW9uIG9yIGNvbnRlbnQgY29uY2VybmluZyBSYW5rLVggb3IgbWFkZSBhdmFpbGFibGUgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtLCBidXQgbm90IGRpcmVjdGx5IGJ5IHVzLCBhcmUgdGhvc2Ugb2YgdGhlaXIgcmVzcGVjdGl2ZSBhdXRob3JzLCBhbmQgc2hvdWxkIG5vdCBuZWNlc3NhcmlseSBiZSByZWxpZWQgdXBvbi4gU3VjaCBhdXRob3JzIGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHN1Y2ggY29udGVudC4gVW5kZXIgbm8gY2lyY3Vtc3RhbmNlcyB3aWxsIHdlIGJlIHJlc3BvbnNpYmxlIGZvciBhbnkgbG9zcyBvciBkYW1hZ2UgcmVzdWx0aW5nIGZyb20geW91ciByZWxpYW5jZSBvbiBpbmZvcm1hdGlvbiBvciBvdGhlciBjb250ZW50IHBvc3RlZCBieSB0aGlyZCBwYXJ0aWVzLCB3aGV0aGVyIG9uIHRoZSBSYW5rLVggUGxhdGZvcm0gb3Igb3RoZXJ3aXNlLiBXZSByZXNlcnZlIHRoZSByaWdodCwgYnV0IHdlIGhhdmUgbm8gb2JsaWdhdGlvbiwgdG8gbW9uaXRvciB0aGUgbWF0ZXJpYWxzIHBvc3RlZCBvbiB0aGUgUmFuay1YIFBsYXRmb3JtIGFuZCByZW1vdmUgYW55IHN1Y2ggbWF0ZXJpYWwgdGhhdCBpbiBvdXIgc29sZSBvcGluaW9uIHZpb2xhdGVzLCBvciBpcyBhbGxlZ2VkIHRvIHZpb2xhdGUsIHRoZSBsYXcgb3IgdGhpcyBhZ3JlZW1lbnQgb3Igd2hpY2ggbWlnaHQgYmUgb2ZmZW5zaXZlLCBpbGxlZ2FsLCBvciB0aGF0IG1pZ2h0IHZpb2xhdGUgdGhlIHJpZ2h0cywgaGFybSwgb3IgdGhyZWF0ZW4gdGhlIHNhZmV0eSBvZiBVc2VycyBvciBvdGhlcnMuPGJyPlRoaXMgcGFyYWdyYXBoIGFwcGxpZXMgdG8gYW55IHZlcnNpb24gb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSB0aGF0IHlvdSBhY3F1aXJlIGZyb20gdGhlIEFwcGxlIEFwcCBTdG9yZS4gVGhpcyBBZ3JlZW1lbnQgaXMgZW50ZXJlZCBpbnRvIGJldHdlZW4geW91IGFuZCBSYW5rLVguIEFwcGxlLCBJbmMuICjigJxBcHBsZeKAnSkgaXMgbm90IGEgcGFydHkgdG8gdGhpcyBBZ3JlZW1lbnQgYW5kIHNoYWxsIGhhdmUgbm8gb2JsaWdhdGlvbnMgd2l0aCByZXNwZWN0IHRvIHRoZSBSYW5rLVggUGxhdGZvcm0uIFJhbmstWCwgbm90IEFwcGxlLCBpcyBzb2xlbHkgcmVzcG9uc2libGUgZm9yIHRoZSBSYW5rLVggUGxhdGZvcm0gYW5kIHRoZSBjb250ZW50IHRoZXJlb2YgYXMgc2V0IGZvcnRoIGhlcmV1bmRlci4gSG93ZXZlciwgQXBwbGUgYW5kIEFwcGxl4oCZcyBzdWJzaWRpYXJpZXMgbWF5IGJlIHRoaXJkIHBhcnR5IGJlbmVmaWNpYXJpZXMgb2YgdGhpcyBBZ3JlZW1lbnQuIFVwb24geW91ciBhY2NlcHRhbmNlIG9mIHRoaXMgQWdyZWVtZW50LCBBcHBsZSBzaGFsbCBoYXZlIHRoZSByaWdodCAoYW5kIHdpbGwgYmUgZGVlbWVkIHRvIGhhdmUgYWNjZXB0ZWQgdGhlIHJpZ2h0KSB0byBlbmZvcmNlIHRoaXMgQWdyZWVtZW50IGFnYWluc3QgeW91IGFzIGEgdGhpcmQgcGFydHkgYmVuZWZpY2lhcnkgdGhlcmVvZi4gVGhpcyBBZ3JlZW1lbnQgaW5jb3Jwb3JhdGVzIGJ5IHJlZmVyZW5jZSBBcHBsZeKAmXMgTGljZW5zZWQgQXBwbGljYXRpb24gRW5kIFVzZXIgTGljZW5zZSBBZ3JlZW1lbnQsIGZvciBwdXJwb3NlcyBvZiB3aGljaCwgeW91IGFyZSDigJx0aGUgZW5kLXVzZXIu4oCdIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGluIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZWQgQXBwbGljYXRpb24gRW5kIFVzZXIgTGljZW5zZSBBZ3JlZW1lbnQgYW5kIHRoaXMgQWdyZWVtZW50LCB0aGUgdGVybXMgb2YgdGhpcyBBZ3JlZW1lbnQgc2hhbGwgY29udHJvbC48L2xpPjxsaT48Yj5JbmRlbW5pdHk8L2I+IFlvdSB3aWxsIGRlZmVuZCwgaW5kZW1uaWZ5LCBhbmQgaG9sZCBSYW5rLVggaW5jbHVkaW5nIG91ciBhZmZpbGlhdGVzLCBzdWJzaWRpYXJpZXMsIHBhcmVudHMsIHN1Y2Nlc3NvcnMgYW5kIGFzc2lnbnMsIGFuZCBlYWNoIG9mIG91ciByZXNwZWN0aXZlIG9mZmljZXJzLCBkaXJlY3RvcnMsIGVtcGxveWVlcywgYWdlbnRzLCBvciBzaGFyZWhvbGRlcnMgaGFybWxlc3MgZnJvbSBhbnkgY2xhaW1zLCBhY3Rpb25zLCBzdWl0cywgbG9zc2VzLCBjb3N0cywgbGlhYmlsaXRpZXMgYW5kIGV4cGVuc2VzIChpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leXPigJkgZmVlcykgcmVsYXRpbmcgdG8gb3IgYXJpc2luZyBvdXQgb2YgeW91ciB1c2Ugb2YgdGhlIFJhbmstWCBQbGF0Zm9ybSBhbmQgcGFydGljaXBhdGlvbiBpbiB0aGUgU2VydmljZXMsIGluY2x1ZGluZzogKDEpIHlvdXIgYnJlYWNoIG9mIHRoaXMgQWdyZWVtZW50IG9yIHRoZSBkb2N1bWVudHMgaXQgaW5jb3Jwb3JhdGVzIGJ5IHJlZmVyZW5jZTsgKDIpIHlvdXIgdmlvbGF0aW9uIG9mIGFueSBsYXcgb3IgdGhlIHJpZ2h0cyBvZiBhIHRoaXJkIHBhcnR5LCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiwgRHJpdmVycywgUmlkZXJzLCBvdGhlciBtb3RvcmlzdHMsIGFuZCBwZWRlc3RyaWFucywgYXMgYSByZXN1bHQgb2YgeW91ciBvd24gaW50ZXJhY3Rpb24gd2l0aCBzdWNoIHRoaXJkIHBhcnR5OyAoMykgYW55IGFsbGVnYXRpb24gdGhhdCBhbnkgbWF0ZXJpYWxzIHRoYXQgeW91IHN1Ym1pdCB0byB1cyBvciB0cmFuc21pdCB0aHJvdWdoIHRoZSBSYW5rLVggUGxhdGZvcm0gb3IgdG8gdXMgaW5mcmluZ2Ugb3Igb3RoZXJ3aXNlIHZpb2xhdGUgdGhlIGNvcHlyaWdodCwgdHJhZGVtYXJrLCB0cmFkZSBzZWNyZXQgb3Igb3RoZXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHJpZ2h0cyBvZiBhbnkgdGhpcmQgcGFydHk7ICg0KSB5b3VyIG93bmVyc2hpcCwgdXNlIG9yIG9wZXJhdGlvbiBvZiBhIG1vdG9yIHZlaGljbGUgb3IgcGFzc2VuZ2VyIHZlaGljbGUsIGluY2x1ZGluZyB5b3VyIHByb3Zpc2lvbiBvZiBTZXJ2aWNlcyBhcyBhIERyaXZlcjsgYW5kL29yICg1KSBhbnkgb3RoZXIgYWN0aXZpdGllcyBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNlcnZpY2VzLiBUaGlzIGluZGVtbml0eSBzaGFsbCBiZSBhcHBsaWNhYmxlIHdpdGhvdXQgcmVnYXJkIHRvIHRoZSBuZWdsaWdlbmNlIG9mIGFueSBwYXJ0eSwgaW5jbHVkaW5nIGFueSBpbmRlbW5pZmllZCBwZXJzb24uPC9saT48bGk+PGI+TGltaXRhdGlvbiBvZiBMaWFiaWxpdHk8L2I+IElOIE5PIEVWRU5UIFdJTEwgUkFOSy1YLCBJTkNMVURJTkcgT1VSIEFGRklMSUFURVMsIFNVQlNJRElBUklFUywgUEFSRU5UUywgU1VDQ0VTU09SUyBBTkQgQVNTSUdOUywgQU5EIEVBQ0ggT0YgT1VSIFJFU1BFQ1RJVkUgT0ZGSUNFUlMsIERJUkVDVE9SUywgRU1QTE9ZRUVTLCBBR0VOVFMsIE9SIFNIQVJFSE9MREVSUyAoQ09MTEVDVElWRUxZIOKAnFJBTkstWOKAnSBGT1IgUFVSUE9TRVMgT0YgVEhJUyBTRUNUSU9OKSwgQkUgTElBQkxFIFRPIFlPVSBGT1IgQU5ZIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgUFVOSVRJVkUsIENPTlNFUVVFTlRJQUwsIE9SIElORElSRUNUIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBEQU1BR0VTIEZPUiBERUxFVElPTiwgQ09SUlVQVElPTiwgTE9TUyBPRiBEQVRBLCBMT1NTIE9GIFBST0dSQU1TLCBGQUlMVVJFIFRPIFNUT1JFIEFOWSBJTkZPUk1BVElPTiBPUiBPVEhFUiBDT05URU5UIE1BSU5UQUlORUQgT1IgVFJBTlNNSVRURUQgQlkgVEhFIFJBTkstWCBQTEFURk9STSwgU0VSVklDRSBJTlRFUlJVUFRJT05TLCBPUiBGT1IgVEhFIENPU1QgT0YgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBTRVJWSUNFUykgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBSQU5LLVggUExBVEZPUk0sIFRIRSBTRVJWSUNFUywgT1IgVEhJUyBBR1JFRU1FTlQsIEhPV0VWRVIgQVJJU0lORyBJTkNMVURJTkcgTkVHTElHRU5DRSwgRVZFTiBJRiBXRSBPUiBPVVIgQUdFTlRTIE9SIFJFUFJFU0VOVEFUSVZFUyBLTk9XIE9SIEhBVkUgQkVFTiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRVMuIFRIRSBSQU5LLVggUExBVEZPUk0gTUFZIEJFIFVTRUQgQlkgWU9VIFRPIFJFUVVFU1QgQU5EIFNDSEVEVUxFIFRSQU5TUE9SVEFUSU9OLCBHT09EUywgT1IgT1RIRVIgU0VSVklDRVMgV0lUSCBUSElSRCBQQVJUWSBQUk9WSURFUlMsIEJVVCBZT1UgQUdSRUUgVEhBVCBSQU5LLVggSEFTIE5PIFJFU1BPTlNJQklMSVRZIE9SIExJQUJJTElUWSBUTyBZT1UgUkVMQVRFRCBUTyBBTlkgVFJBTlNQT1JUQVRJT04sIEdPT0RTIE9SIE9USEVSIFNFUlZJQ0VTIFBST1ZJREVEIFRPIFlPVSBCWSBUSElSRCBQQVJUWSBQUk9WSURFUlMgT1RIRVIgVEhBTiBBUyBFWFBSRVNTTFkgU0VUIEZPUlRIIElOIFRoZWlyIFRFUk1TLiBDRVJUQUlOIEpVUklTRElDVElPTlMgTUFZIE5PVCBBTExPVyBUSEUgRVhDTFVTSU9OIE9SIExJTUlUQVRJT04gT0YgQ0VSVEFJTiBEQU1BR0VTLiBJRiBUSEVTRSBMQVdTIEFQUExZIFRPIFlPVSwgU09NRSBPUiBBTEwgT0YgVEhFIEFCT1ZFIERJU0NMQUlNRVJTLCBFWENMVVNJT05TIE9SIExJTUlUQVRJT05TIE1BWSBOT1QgQVBQTFkgVE8gWU9VLCBBTkQgWU9VIE1BWSBIQVZFIEFERElUSU9OQUwgUklHSFRTLjwvbGk+PGxpPjxiPlRlcm0gYW5kIFRlcm1pbmF0aW9uPC9iPiBUaGlzIEFncmVlbWVudCBpcyBlZmZlY3RpdmUgdXBvbiB5b3VyIGNyZWF0aW9uIG9mIGEgUHJlbWl1bSBNZW1iZXIgYWNjb3VudC4gVGhpcyBBZ3JlZW1lbnQgbWF5IGJlIHRlcm1pbmF0ZWQ6IGEpIGJ5IFByZW1pdW0gTWVtYmVyLCB3aXRob3V0IGNhdXNlLCB1cG9uIHNldmVuICg3KSBkYXlz4oCZIHByaW9yIHdyaXR0ZW4gbm90aWNlIHRvIFJhbmstWDsgb3IgYikgYnkgZWl0aGVyIFBhcnR5IGltbWVkaWF0ZWx5LCB3aXRob3V0IG5vdGljZSwgdXBvbiB0aGUgb3RoZXIgUGFydHnigJlzIG1hdGVyaWFsIGJyZWFjaCBvZiB0aGlzIEFncmVlbWVudCwgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBhbnkgYnJlYWNoIG9mIFNlY3Rpb24gOCBvciBicmVhY2ggb2YgU2VjdGlvbiA5IG9mIHRoaXMgQWdyZWVtZW50LiBJbiBhZGRpdGlvbiwgUmFuay1YIG1heSB0ZXJtaW5hdGUgdGhpcyBBZ3JlZW1lbnQgb3IgZGVhY3RpdmF0ZSB5b3VyIFVzZXIgYWNjb3VudCBpbW1lZGlhdGVseSBpbiB0aGUgZXZlbnQ6ICgxKSB5b3Ugbm8gbG9uZ2VyIHF1YWxpZnkgdG8gcHJvdmlkZSBTZXJ2aWNlcyBvciB0byBvcGVyYXRlIHRoZSBhcHByb3ZlZCB2ZWhpY2xlIHVuZGVyIGFwcGxpY2FibGUgbGF3LCBydWxlLCBwZXJtaXQsIG9yZGluYW5jZSBvciByZWd1bGF0aW9uOyAoMikgeW91IGZhbGwgYmVsb3cgUmFuay1Y4oCZcyBzdGFyIHJhdGluZyBvciBjYW5jZWxsYXRpb24gdGhyZXNob2xkOyAoMykgUmFuay1YIGhhcyB0aGUgZ29vZCBmYWl0aCBiZWxpZWYgdGhhdCBzdWNoIGFjdGlvbiBpcyBuZWNlc3NhcnkgdG8gcHJvdGVjdCB0aGUgc2FmZXR5IG9mIHRoZSBSYW5rLVggY29tbXVuaXR5IG9yIHRoaXJkIHBhcnRpZXMsIHByb3ZpZGVkIHRoYXQgaW4gdGhlIGV2ZW50IG9mIGEgZGVhY3RpdmF0aW9uIHB1cnN1YW50IHRvICgxKS0oMykgYWJvdmUsIHlvdSB3aWxsIGJlIGdpdmVuIG5vdGljZSBvZiB0aGUgcG90ZW50aWFsIG9yIGFjdHVhbCBkZWFjdGl2YXRpb24gYW5kIGFuIG9wcG9ydHVuaXR5IHRvIGF0dGVtcHQgdG8gY3VyZSB0aGUgaXNzdWUgdG8gUmFuay1Y4oCZcyByZWFzb25hYmxlIHNhdGlzZmFjdGlvbiBwcmlvciB0byBSYW5rLVggcGVybWFuZW50bHkgdGVybWluYXRpbmcgdGhlIEFncmVlbWVudC4gRm9yIGFsbCBvdGhlciBicmVhY2hlcyBvZiB0aGlzIEFncmVlbWVudCwgeW91IHdpbGwgYmUgcHJvdmlkZWQgbm90aWNlIGFuZCBhbiBvcHBvcnR1bml0eSB0byBjdXJlIHRoZSBicmVhY2guIElmIHRoZSBicmVhY2ggaXMgY3VyZWQgaW4gYSB0aW1lbHkgbWFubmVyIGFuZCB0byBSYW5rLVjigJlzIHNhdGlzZmFjdGlvbiwgdGhpcyBBZ3JlZW1lbnQgd2lsbCBub3QgYmUgcGVybWFuZW50bHkgdGVybWluYXRlZC4gU2VjdGlvbnMgMiwgNCwgNiwgOSAod2l0aCByZXNwZWN0IHRvIHRoZSBsaWNlbnNlKSwgMTAtMTIsIDE0LTE2IHNoYWxsIHN1cnZpdmUgYW55IHRlcm1pbmF0aW9uIG9yIGV4cGlyYXRpb24gb2YgdGhpcyBBZ3JlZW1lbnQuPC9saT48bGk+PGI+Q29uZmlkZW50aWFsaXR5PC9iPiBZb3UgYWdyZWUgbm90IHRvIHVzZSBhbnkgdGVjaG5pY2FsLCBmaW5hbmNpYWwsIHN0cmF0ZWdpYyBhbmQgb3RoZXIgcHJvcHJpZXRhcnkgYW5kIGNvbmZpZGVudGlhbCBpbmZvcm1hdGlvbiByZWxhdGluZyB0byBSYW5rLVjigJlzIGJ1c2luZXNzLCBvcGVyYXRpb25zIGFuZCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgUHJlbWl1bSBNZW1iZXIgaW5mb3JtYXRpb24gKOKAnENvbmZpZGVudGlhbCBJbmZvcm1hdGlvbuKAnSkgZGlzY2xvc2VkIHRvIHlvdSBieSBSYW5rLVggZm9yIHlvdXIgb3duIHVzZSBvciBmb3IgYW55IHB1cnBvc2Ugb3RoZXIgdGhhbiBhcyBjb250ZW1wbGF0ZWQgaGVyZWluLiBZb3Ugc2hhbGwgbm90IGRpc2Nsb3NlIG9yIHBlcm1pdCBkaXNjbG9zdXJlIG9mIGFueSBDb25maWRlbnRpYWwgSW5mb3JtYXRpb24gdG8gdGhpcmQgcGFydGllcy4gWW91IGFncmVlIHRvIHRha2UgYWxsIHJlYXNvbmFibGUgbWVhc3VyZXMgdG8gcHJvdGVjdCB0aGUgc2VjcmVjeSBvZiBhbmQgYXZvaWQgZGlzY2xvc3VyZSBvciB1c2Ugb2YgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIG9mIFJhbmstWCBpbiBvcmRlciB0byBwcmV2ZW50IGl0IGZyb20gZmFsbGluZyBpbnRvIHRoZSBwdWJsaWMgZG9tYWluLiBOb3R3aXRoc3RhbmRpbmcgdGhlIGFib3ZlLCB5b3Ugc2hhbGwgbm90IGhhdmUgbGlhYmlsaXR5IHRvIFJhbmstWCB3aXRoIHJlZ2FyZCB0byBhbnkgQ29uZmlkZW50aWFsIEluZm9ybWF0aW9uIHdoaWNoIHlvdSBjYW4gcHJvdmU6IHdhcyBpbiB0aGUgcHVibGljIGRvbWFpbiBhdCB0aGUgdGltZSBpdCB3YXMgZGlzY2xvc2VkIGJ5IFJhbmstWCBvciBoYXMgZW50ZXJlZCB0aGUgcHVibGljIGRvbWFpbiB0aHJvdWdoIG5vIGZhdWx0IG9mIHlvdXJzOyB3YXMga25vd24gdG8geW91LCB3aXRob3V0IHJlc3RyaWN0aW9uLCBhdCB0aGUgdGltZSBvZiBkaXNjbG9zdXJlLCBhcyBkZW1vbnN0cmF0ZWQgYnkgZmlsZXMgaW4gZXhpc3RlbmNlIGF0IHRoZSB0aW1lIG9mIGRpc2Nsb3N1cmU7IGlzIGRpc2Nsb3NlZCB3aXRoIHRoZSBwcmlvciB3cml0dGVuIGFwcHJvdmFsIG9mIFJhbmstWDsgYmVjb21lcyBrbm93biB0byB5b3UsIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGZyb20gYSBzb3VyY2Ugb3RoZXIgdGhhbiBSYW5rLVggd2l0aG91dCBicmVhY2ggb2YgdGhpcyBBZ3JlZW1lbnQgYnkgeW91IGFuZCBvdGhlcndpc2Ugbm90IGluIHZpb2xhdGlvbiBvZiBSYW5rLVjigJlzIHJpZ2h0czsgb3IgaXMgZGlzY2xvc2VkIHB1cnN1YW50IHRvIHRoZSBvcmRlciBvciByZXF1aXJlbWVudCBvZiBhIGNvdXJ0LCBhZG1pbmlzdHJhdGl2ZSBhZ2VuY3ksIG9yIG90aGVyIGdvdmVybm1lbnRhbCBib2R5OyBwcm92aWRlZCwgaG93ZXZlciwgdGhhdCBZb3Ugc2hhbGwgcHJvdmlkZSBwcm9tcHQgbm90aWNlIG9mIHN1Y2ggY291cnQgb3JkZXIgb3IgcmVxdWlyZW1lbnQgdG8gUmFuay1YIHRvIGVuYWJsZSBSYW5rLVggdG8gc2VlayBhIHByb3RlY3RpdmUgb3JkZXIgb3Igb3RoZXJ3aXNlIHByZXZlbnQgb3IgcmVzdHJpY3Qgc3VjaCBkaXNjbG9zdXJlLjwvbGk+PGxpPjxiPlJlbGF0aW9uc2hpcCB3aXRoIFJhbmstWDwvYj4gQXMgYSBQcm9tb3RlciBvbiB0aGUgUmFuay1YIFBsYXRmb3JtLCB5b3UgYWNrbm93bGVkZ2UgYW5kIGFncmVlIHRoYXQgeW91IGFuZCBSYW5rLVggYXJlIGluIGEgZGlyZWN0IGJ1c2luZXNzIHJlbGF0aW9uc2hpcCwgYW5kIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgcGFydGllcyB1bmRlciB0aGlzIEFncmVlbWVudCBpcyBzb2xlbHkgdGhhdCBvZiBpbmRlcGVuZGVudCBjb250cmFjdGluZyBwYXJ0aWVzLiBZb3UgYW5kIFJhbmstWCBleHByZXNzbHkgYWdyZWUgZXhwcmVzc2x5IGFncmVlIHRoYXQgKDEpIHRoaXMgaXMgbm90IGFuIGVtcGxveW1lbnQgYWdyZWVtZW50IGFuZCBkb2VzIG5vdCBjcmVhdGUgYW4gZW1wbG95bWVudCByZWxhdGlvbnNoaXAgYmV0d2VlbiB5b3UgYW5kIFJhbmstWDsgYW5kICgyKSBubyBqb2ludCB2ZW50dXJlLCBmcmFuY2hpc29yLWZyYW5jaGlzZWUsIHBhcnRuZXJzaGlwLCBvciBhZ2VuY3kgcmVsYXRpb25zaGlwIGlzIGludGVuZGVkIG9yIGNyZWF0ZWQgYnkgdGhpcyBBZ3JlZW1lbnQuIFlvdSBoYXZlIG5vIGF1dGhvcml0eSB0byBiaW5kIFJhbmstWCwgYW5kIHlvdSB1bmRlcnRha2Ugbm90IHRvIGhvbGQgeW91cnNlbGYgb3V0IGFzIGFuIGVtcGxveWVlLCBhZ2VudCBvciBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIG9mIFJhbmstWC48YnI+UmFuay1YIGRvZXMgbm90LCBhbmQgc2hhbGwgbm90IGJlIGRlZW1lZCB0bywgZGlyZWN0IG9yIGNvbnRyb2wgeW91IGdlbmVyYWxseSBvciBpbiB5b3VyIHBlcmZvcm1hbmNlIHVuZGVyIHRoaXMgQWdyZWVtZW50IHNwZWNpZmljYWxseSwgaW5jbHVkaW5nIGluIGNvbm5lY3Rpb24gd2l0aCB5b3VyIHByb3Zpc2lvbiBvZiBTZXJ2aWNlcywgeW91ciBhY3RzIG9yIG9taXNzaW9ucywgb3IgeW91ciBvcGVyYXRpb24gYW5kIG1haW50ZW5hbmNlIG9mIHlvdXIgdmVoaWNsZS4gWW91IHJldGFpbiB0aGUgc29sZSByaWdodCB0byBkZXRlcm1pbmUgd2hlbiwgd2hlcmUsIGFuZCBmb3IgaG93IGxvbmcgeW91IHdpbGwgdXRpbGl6ZSB0aGUgUmFuay1YIFBsYXRmb3JtLiBZb3UgcmV0YWluIHRoZSBvcHRpb24gdG8gYWNjZXB0IG9yIHRvIGRlY2xpbmUgb3IgaWdub3JlIGEgUmFuay1YIG9yIGFueSBUaGlyZCBQYXJ0eSByZXF1ZXN0IGZvciBTZXJ2aWNlcyB2aWEgdGhlIFJhbmstWCBQbGF0Zm9ybSwgb3IgdG8gY2FuY2VsIHlvdXIgUHJvbW90ZXIgQ29kZSB2aWEgdGhlIFJhbmstWCBQbGF0Zm9ybSwgc3ViamVjdCB0byBSYW5rLVjigJlzIHRoZW4tY3VycmVudCBjYW5jZWxsYXRpb24gcG9saWNpZXMuIFdpdGggdGhlIGV4Y2VwdGlvbiBvZiBhbnkgc2lnbmFnZSByZXF1aXJlZCBieSBsYXcgb3IgcGVybWl0L2xpY2Vuc2UgcnVsZXMgb3IgcmVxdWlyZW1lbnRzLCBSYW5rLVggc2hhbGwgaGF2ZSBubyByaWdodCB0byByZXF1aXJlIHlvdSB0bzogKGEpIGRpc3BsYXkgUmFuay1Y4oCZcyBuYW1lcywgbG9nb3Mgb3IgY29sb3JzIHdoZW4geW91IGFyZSBQcm9tb3RpbmcgdGhlIENvbXBhbnk7IG9yIChiKSB3ZWFyIGEgdW5pZm9ybSBvciBhbnkgb3RoZXIgY2xvdGhpbmcgZGlzcGxheWluZyBSYW5rLVjigJlzIG5hbWVzLCBsb2dvcyBvciBjb2xvcnMuIFlvdSBhY2tub3dsZWRnZSBhbmQgYWdyZWUgdGhhdCB5b3UgaGF2ZSBjb21wbGV0ZSBkaXNjcmV0aW9uIHRvIHByb3ZpZGUgU2VydmljZXMgb3Igb3RoZXJ3aXNlIGVuZ2FnZSBpbiBvdGhlciBidXNpbmVzcyBvciBlbXBsb3ltZW50IGFjdGl2aXRpZXMuIFRoZSBQcm9tb3RlciBoYXMgbm8gZGVzayBvciBvdGhlciBlcXVpcG1lbnQgZWl0aGVyIGxvY2F0ZWQgYXQgb3IgZnVybmlzaGVkIGJ5IFJhbmstWC48L2xpPjxsaT48Yj5HZW5lcmFsPC9iPiBFeGNlcHQgYXMgcHJvdmlkZWQgaW4gU2VjdGlvbiAxNiwgdGhpcyBBZ3JlZW1lbnQgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3Mgb2YgdGhlIFN0YXRlIG9mIENhbGlmb3JuaWEgd2l0aG91dCByZWdhcmQgdG8gY2hvaWNlIG9mIGxhdyBwcmluY2lwbGVzLiBUaGlzIGNob2ljZSBvZiBsYXcgcHJvdmlzaW9uIGlzIG9ubHkgaW50ZW5kZWQgdG8gc3BlY2lmeSB0aGUgdXNlIG9mIENhbGlmb3JuaWEgbGF3IHRvIGludGVycHJldCB0aGlzIEFncmVlbWVudCBhbmQgaXMgbm90IGludGVuZGVkIHRvIGNyZWF0ZSBhbnkgb3RoZXIgc3Vic3RhbnRpdmUgcmlnaHQgdG8gbm9uLUNhbGlmb3JuaWFucyB0byBhc3NlcnQgY2xhaW1zIHVuZGVyIENhbGlmb3JuaWEgbGF3IHdoZXRoZXIgYnkgc3RhdHV0ZSwgY29tbW9uIGxhdywgb3Igb3RoZXJ3aXNlLiBJZiBhbnkgcHJvdmlzaW9uIG9mIHRoaXMgQWdyZWVtZW50IGlzIG9yIGJlY29tZXMgaW52YWxpZCBvciBub24tYmluZGluZywgdGhlIHBhcnRpZXMgc2hhbGwgcmVtYWluIGJvdW5kIGJ5IGFsbCBvdGhlciBwcm92aXNpb25zIGhlcmVvZi4gSW4gdGhhdCBldmVudCwgdGhlIHBhcnRpZXMgc2hhbGwgcmVwbGFjZSB0aGUgaW52YWxpZCBvciBub24tIGJpbmRpbmcgcHJvdmlzaW9uIHdpdGggcHJvdmlzaW9ucyB0aGF0IGFyZSB2YWxpZCBhbmQgYmluZGluZyBhbmQgdGhhdCBoYXZlLCB0byB0aGUgZ3JlYXRlc3QgZXh0ZW50IHBvc3NpYmxlLCBhIHNpbWlsYXIgZWZmZWN0IGFzIHRoZSBpbnZhbGlkIG9yIG5vbi1iaW5kaW5nIHByb3Zpc2lvbiwgZ2l2ZW4gdGhlIGNvbnRlbnRzIGFuZCBwdXJwb3NlIG9mIHRoaXMgQWdyZWVtZW50LiBZb3UgYWdyZWUgdGhhdCB0aGlzIEFncmVlbWVudCBhbmQgYWxsIGluY29ycG9yYXRlZCBhZ3JlZW1lbnRzIG1heSBiZSBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGJ5IFJhbmstWCwgaW4gb3VyIHNvbGUgZGlzY3JldGlvbiBieSBwcm92aWRpbmcgbm90aWNlIHRvIHlvdS4gRXhjZXB0IGFzIGV4cGxpY2l0bHkgc3RhdGVkIG90aGVyd2lzZSwgYW55IG5vdGljZXMgdG8gUmFuay1YIHNoYWxsIGJlIGdpdmVuIGJ5IGNlcnRpZmllZCBtYWlsLCBwb3N0YWdlIHByZXBhaWQgYW5kIHJldHVybiByZWNlaXB0IHJlcXVlc3RlZCB0byBSYW5rLVguIEFueSBub3RpY2VzIHRvIHlvdSBzaGFsbCBiZSBwcm92aWRlZCB0byB5b3UgdGhyb3VnaCB0aGUgUmFuay1YIFBsYXRmb3JtIG9yIGdpdmVuIHRvIHlvdSB2aWEgdGhlIGVtYWlsIGFkZHJlc3Mgb3IgcGh5c2ljYWwgeW91IHByb3ZpZGUgdG8gUmFuay1YIGR1cmluZyB0aGUgcmVnaXN0cmF0aW9uIHByb2Nlc3MuIEhlYWRpbmdzIGFyZSBmb3IgcmVmZXJlbmNlIHB1cnBvc2VzIG9ubHkgYW5kIGluIG5vIHdheSBkZWZpbmUsIGxpbWl0LCBjb25zdHJ1ZSBvciBkZXNjcmliZSB0aGUgc2NvcGUgb3IgZXh0ZW50IG9mIHN1Y2ggc2VjdGlvbi4gQSBwYXJ0eeKAmXMgZmFpbHVyZSB0byBhY3Qgd2l0aCByZXNwZWN0IHRvIGEgYnJlYWNoIGJ5IHRoZSBvdGhlciBwYXJ0eSBkb2VzIG5vdCBjb25zdGl0dXRlIGEgd2FpdmVyIG9mIHRoZSBwYXJ0eeKAmXMgcmlnaHQgdG8gYWN0IHdpdGggcmVzcGVjdCB0byBzdWJzZXF1ZW50IG9yIHNpbWlsYXIgYnJlYWNoZXMuIFRoaXMgQWdyZWVtZW50IHNldHMgZm9ydGggdGhlIGVudGlyZSB1bmRlcnN0YW5kaW5nIGFuZCBhZ3JlZW1lbnQgYmV0d2VlbiB5b3UgYW5kIFJhbmstWCB3aXRoIHJlc3BlY3QgdG8gdGhlIHN1YmplY3QgbWF0dGVyIGhlcmVvZiBhbmQgc3VwZXJzZWRlcyBhbGwgcHJldmlvdXMgdW5kZXJzdGFuZGluZ3MgYW5kIGFncmVlbWVudHMgYmV0d2VlbiB0aGUgcGFydGllcywgd2hldGhlciBvcmFsIG9yIHdyaXR0ZW4uPC9saT48bGk+PGI+RGlzcHV0ZSBSZXNvbHV0aW9uIGFuZCBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQ8L2I+PG9sIHR5cGU9XFxcImFcXFwiPjxsaT48Yj5BZ3JlZW1lbnQgdG8gQmluZGluZyBBcmJpdHJhdGlvbiBCZXR3ZWVuIFlvdSBhbmQgUmFuay1YLjwvYj4gWU9VIEFORCBSQU5LLVggTVVUVUFMTFkgQUdSRUUgVE8gV0FJVkUgT1VSIFJFU1BFQ1RJVkUgUklHSFRTIFRPIFJFU09MVVRJT04gT0YgRElTUFVURVMgSU4gQSBDT1VSVCBPRiBMQVcgQlkgQSBKVURHRSBPUiBKVVJZIEFORCBBR1JFRSBUTyBSRVNPTFZFIEFOWSBESVNQVVRFIEJZIEFSQklUUkFUSU9OLCBhcyBzZXQgZm9ydGggYmVsb3cuIFRoaXMgYWdyZWVtZW50IHRvIGFyYml0cmF0ZSAo4oCcQXJiaXRyYXRpb24gQWdyZWVtZW504oCdKSBpcyBnb3Zlcm5lZCBieSB0aGUgRmVkZXJhbCBBcmJpdHJhdGlvbiBBY3QgYW5kIHN1cnZpdmVzIGFmdGVyIHRoZSBBZ3JlZW1lbnQgdGVybWluYXRlcyBvciB5b3VyIHJlbGF0aW9uc2hpcCB3aXRoIFJhbmstWCBlbmRzLiBBTlkgQVJCSVRSQVRJT04gVU5ERVIgVEhJUyBBR1JFRU1FTlQgV0lMTCBUQUtFIFBMQUNFIE9OIEFOIElORElWSURVQUwgQkFTSVM7IENMQVNTIEFSQklUUkFUSU9OUyBBTkQgQ0xBU1MgQUNUSU9OUyBBUkUgTk9UIFBFUk1JVFRFRC4gRXhjZXB0IGFzIGV4cHJlc3NseSBwcm92aWRlZCBiZWxvdywgdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgYXBwbGllcyB0byBhbGwgQ2xhaW1zIChkZWZpbmVkIGJlbG93KSBiZXR3ZWVuIHlvdSBhbmQgUmFuay1YLCBpbmNsdWRpbmcgb3VyIGFmZmlsaWF0ZXMsIHN1YnNpZGlhcmllcywgcGFyZW50cywgc3VjY2Vzc29ycyBhbmQgYXNzaWducywgYW5kIGVhY2ggb2Ygb3VyIHJlc3BlY3RpdmUgb2ZmaWNlcnMsIGRpcmVjdG9ycywgZW1wbG95ZWVzLCBhZ2VudHMsIG9yIHNoYXJlaG9sZGVycy48YnI+RXhjZXB0IGFzIGV4cHJlc3NseSBwcm92aWRlZCBiZWxvdywgQUxMIERJU1BVVEVTIEFORCBDTEFJTVMgQkVUV0VFTiBVUyAoRUFDSCBBIOKAnENMQUlN4oCdIEFORCBDT0xMRUNUSVZFTFksIOKAnENMQUlNU+KAnSkgU0hBTEwgQkUgRVhDTFVTSVZFTFkgUkVTT0xWRUQgQlkgQklORElORyBBUkJJVFJBVElPTiBTT0xFTFkgQkVUV0VFTiBZT1UgQU5EIFJBTkstWC4gVGhlc2UgQ2xhaW1zIGluY2x1ZGUsIGJ1dCBhcmUgbm90IGxpbWl0ZWQgdG8sIGFueSBkaXNwdXRlLCBjbGFpbSBvciBjb250cm92ZXJzeSwgd2hldGhlciBiYXNlZCBvbiBwYXN0LCBwcmVzZW50LCBvciBmdXR1cmUgZXZlbnRzLCBhcmlzaW5nIG91dCBvZiBvciByZWxhdGluZyB0bzogdGhpcyBBZ3JlZW1lbnQgYW5kIHByaW9yIHZlcnNpb25zIHRoZXJlb2YgKGluY2x1ZGluZyB0aGUgYnJlYWNoLCB0ZXJtaW5hdGlvbiwgZW5mb3JjZW1lbnQsIGludGVycHJldGF0aW9uIG9yIHZhbGlkaXR5IHRoZXJlb2YpLCB0aGUgUmFuay1YIFBsYXRmb3JtLCB0aGUgU2VydmljZXMsIGFueSBvdGhlciBnb29kcyBvciBzZXJ2aWNlcyBtYWRlIGF2YWlsYWJsZSB0aHJvdWdoIHRoZSBSYW5rLVggUGxhdGZvcm0sIHlvdXIgcmVsYXRpb25zaGlwIHdpdGggUmFuay1YLCB0aGUgdGhyZWF0ZW5lZCBvciBhY3R1YWwgc3VzcGVuc2lvbiwgZGVhY3RpdmF0aW9uIG9yIHRlcm1pbmF0aW9uIG9mIHlvdXIgUHJlbWl1bSBNZW1iZXIgQWNjb3VudCBvciB0aGlzIEFncmVlbWVudCwgcGF5bWVudHMgbWFkZSBieSB5b3Ugb3IgYW55IHBheW1lbnRzIG1hZGUgb3IgYWxsZWdlZGx5IG93ZWQgdG8geW91LCBhbnkgcHJvbW90aW9ucyBvciBvZmZlcnMgbWFkZSBieSBSYW5rLVgsIGFueSBjaXR5LCBjb3VudHksIHN0YXRlIG9yIGZlZGVyYWwgd2FnZS1ob3VyIGxhdywgdHJhZGUgc2VjcmV0cywgdW5mYWlyIGNvbXBldGl0aW9uLCBjb21wZW5zYXRpb24sIGJyZWFrcyBhbmQgcmVzdCBwZXJpb2RzLCBleHBlbnNlIHJlaW1idXJzZW1lbnQsIHdyb25nZnVsIHRlcm1pbmF0aW9uLCBkaXNjcmltaW5hdGlvbiwgaGFyYXNzbWVudCwgcmV0YWxpYXRpb24sIGZyYXVkLCBkZWZhbWF0aW9uLCBlbW90aW9uYWwgZGlzdHJlc3MsIGJyZWFjaCBvZiBhbnkgZXhwcmVzcyBvciBpbXBsaWVkIGNvbnRyYWN0IG9yIGNvdmVuYW50LCBjbGFpbXMgYXJpc2luZyB1bmRlciBmZWRlcmFsIG9yIHN0YXRlIGNvbnN1bWVyIHByb3RlY3Rpb24gbGF3czsgY2xhaW1zIGFyaXNpbmcgdW5kZXIgYW50aXRydXN0IGxhd3MsIGNsYWltcyBhcmlzaW5nIHVuZGVyIHRoZSBUZWxlcGhvbmUgQ29uc3VtZXIgUHJvdGVjdGlvbiBBY3QgYW5kIEZhaXIgQ3JlZGl0IFJlcG9ydGluZyBBY3Q7IGFuZCBjbGFpbXMgYXJpc2luZyB1bmRlciB0aGUgVW5pZm9ybSBUcmFkZSBTZWNyZXRzIEFjdCwgQ2l2aWwgUmlnaHRzIEFjdCBvZiAxOTY0LCBBbWVyaWNhbnMgV2l0aCBEaXNhYmlsaXRpZXMgQWN0LCBBZ2UgRGlzY3JpbWluYXRpb24gaW4gRW1wbG95bWVudCBBY3QsIE9sZGVyIFdvcmtlcnMgQmVuZWZpdCBQcm90ZWN0aW9uIEFjdCwgRmFtaWx5IE1lZGljYWwgTGVhdmUgQWN0LCBGYWlyIExhYm9yIFN0YW5kYXJkcyBBY3QsIEVtcGxveWVlIFJldGlyZW1lbnQgSW5jb21lIFNlY3VyaXR5IEFjdCAoZXhjZXB0IGZvciBpbmRpdmlkdWFsIGNsYWltcyBmb3IgZW1wbG95ZWUgYmVuZWZpdHMgdW5kZXIgYW55IGJlbmVmaXQgcGxhbiBzcG9uc29yZWQgYnkgUmFuay1YIGFuZCBjb3ZlcmVkIGJ5IHRoZSBFbXBsb3llZSBSZXRpcmVtZW50IEluY29tZSBTZWN1cml0eSBBY3Qgb2YgMTk3NCBvciBmdW5kZWQgYnkgaW5zdXJhbmNlKSwgYW5kIHN0YXRlIHN0YXR1dGVzLCBpZiBhbnksIGFkZHJlc3NpbmcgdGhlIHNhbWUgb3Igc2ltaWxhciBzdWJqZWN0IG1hdHRlcnMsIGFuZCBhbGwgb3RoZXIgZmVkZXJhbCBhbmQgc3RhdGUgc3RhdHV0b3J5IGFuZCBjb21tb24gbGF3IGNsYWltcy4gQWxsIGRpc3B1dGVzIGNvbmNlcm5pbmcgdGhlIGFyYml0cmFiaWxpdHkgb2YgYSBDbGFpbSAoaW5jbHVkaW5nIGRpc3B1dGVzIGFib3V0IHRoZSBzY29wZSwgYXBwbGljYWJpbGl0eSwgZW5mb3JjZWFiaWxpdHksIHJldm9jYWJpbGl0eSBvciB2YWxpZGl0eSBvZiB0aGUgQXJiaXRyYXRpb24gQWdyZWVtZW50KSBzaGFsbCBiZSBkZWNpZGVkIGJ5IHRoZSBhcmJpdHJhdG9yLCBleGNlcHQgYXMgZXhwcmVzc2x5IHByb3ZpZGVkIGJlbG93Ljxicj5CWSBBR1JFRUlORyBUTyBBUkJJVFJBVElPTiwgWU9VIFVOREVSU1RBTkQgVEhBVCBZT1UgQU5EIFJBTkstWCBBUkUgV0FJVklORyBUSEUgUklHSFQgVE8gU1VFIElOIENPVVJUIE9SIEhBVkUgQSBKVVJZIFRSSUFMIEZPUiBBTEwgQ0xBSU1TLCBFWENFUFQgQVMgRVhQUkVTU0xZIE9USEVSV0lTRSBQUk9WSURFRCBJTiBUSElTIEFSQklUUkFUSU9OIEFHUkVFTUVOVC4gVGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgaXMgaW50ZW5kZWQgdG8gcmVxdWlyZSBhcmJpdHJhdGlvbiBvZiBldmVyeSBjbGFpbSBvciBkaXNwdXRlIHRoYXQgY2FuIGxhd2Z1bGx5IGJlIGFyYml0cmF0ZWQsIGV4Y2VwdCBmb3IgdGhvc2UgY2xhaW1zIGFuZCBkaXNwdXRlcyB3aGljaCBieSB0aGUgdGVybXMgb2YgdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgYXJlIGV4cHJlc3NseSBleGNsdWRlZCBmcm9tIHRoZSByZXF1aXJlbWVudCB0byBhcmJpdHJhdGUuPC9saT48bGk+PGI+UHJvaGliaXRpb24gb2YgQ2xhc3MgQWN0aW9ucyBhbmQgTm9uLUluZGl2aWR1YWxpemVkIFJlbGllZi48L2I+IFlPVSBVTkRFUlNUQU5EIEFORCBBR1JFRSBUSEFUIFlPVSBBTkQgUkFOSy1YIE1BWSBFQUNIIEJSSU5HIENMQUlNUyBJTiBBUkJJVFJBVElPTiBBR0FJTlNUIFRIRSBPVEhFUiBPTkxZIElOIEFOIElORElWSURVQUwgQ0FQQUNJVFkgQU5EIE5PVCBPTiBBIENMQVNTLCBDT0xMRUNUSVZFIEFDVElPTiwgT1IgUkVQUkVTRU5UQVRJVkUgQkFTSVMgKOKAnENMQVNTIEFDVElPTiBXQUlWRVLigJ0pLiBZT1UgVU5ERVJTVEFORCBBTkQgQUdSRUUgVEhBVCBZT1UgQU5EIFJBTkstWCBCT1RIIEFSRSBXQUlWSU5HIFRIRSBSSUdIVCBUTyBQVVJTVUUgT1IgSEFWRSBBIERJU1BVVEUgUkVTT0xWRUQgQVMgQSBQTEFJTlRJRkYgT1IgQ0xBU1MgTUVNQkVSIElOIEFOWSBQVVJQT1JURUQgQ0xBU1MsIENPTExFQ1RJVkUgT1IgUkVQUkVTRU5UQVRJVkUgUFJPQ0VFRElORy4gTk9UV0lUSFNUQU5ESU5HIFRIRSBGT1JFR09JTkcsIFRISVMgU1VCU0VDVElPTiAoQikgU0hBTEwgTk9UIEFQUExZIFRPIFJFUFJFU0VOVEFUSVZFIFBSSVZBVEUgQVRUT1JORVlTIEdFTkVSQUwgQUNUIENMQUlNUyBCUk9VR0hUIEFHQUlOU1QgUkFOSy1YLCBXSElDSCBBUkUgQUREUkVTU0VEIFNFUEFSQVRFTFkgSU4gU0VDVElPTiAxNyhDKS48YnI+VGhlIGFyYml0cmF0b3Igc2hhbGwgaGF2ZSBubyBhdXRob3JpdHkgdG8gY29uc2lkZXIgb3IgcmVzb2x2ZSBhbnkgQ2xhaW0gb3IgaXNzdWUgYW55IHJlbGllZiBvbiBhbnkgYmFzaXMgb3RoZXIgdGhhbiBhbiBpbmRpdmlkdWFsIGJhc2lzLiBUaGUgYXJiaXRyYXRvciBzaGFsbCBoYXZlIG5vIGF1dGhvcml0eSB0byBjb25zaWRlciBvciByZXNvbHZlIGFueSBDbGFpbSBvciBpc3N1ZSBhbnkgcmVsaWVmIG9uIGEgY2xhc3MsIGNvbGxlY3RpdmUsIG9yIHJlcHJlc2VudGF0aXZlIGJhc2lzLjxicj5Ob3R3aXRoc3RhbmRpbmcgYW55IG90aGVyIHByb3Zpc2lvbiBvZiB0aGlzIEFncmVlbWVudCwgdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudCBvciB0aGUgQUFBIFJ1bGVzLCBkaXNwdXRlcyByZWdhcmRpbmcgdGhlIHNjb3BlLCBhcHBsaWNhYmlsaXR5LCBlbmZvcmNlYWJpbGl0eSwgcmV2b2NhYmlsaXR5IG9yIHZhbGlkaXR5IG9mIHRoZSBDbGFzcyBBY3Rpb24gV2FpdmVyIG1heSBiZSByZXNvbHZlZCBvbmx5IGJ5IGEgY2l2aWwgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbiBhbmQgbm90IGJ5IGFuIGFyYml0cmF0b3IuIEluIGFueSBjYXNlIGluIHdoaWNoOiAoMSkgdGhlIGRpc3B1dGUgaXMgZmlsZWQgYXMgYSBjbGFzcywgY29sbGVjdGl2ZSwgb3IgcmVwcmVzZW50YXRpdmUgYWN0aW9uIGFuZCAoMikgdGhlcmUgaXMgYSBmaW5hbCBqdWRpY2lhbCBkZXRlcm1pbmF0aW9uIHRoYXQgdGhlIENsYXNzIEFjdGlvbiBXYWl2ZXIgaXMgdW5lbmZvcmNlYWJsZSBhcyB0byBhbnkgQ2xhaW1zLCB0aGUgY2xhc3MsIGNvbGxlY3RpdmUsIGFuZC9vciByZXByZXNlbnRhdGl2ZSBhY3Rpb24gb24gc3VjaCBDbGFpbXMgbXVzdCBiZSBsaXRpZ2F0ZWQgaW4gYSBjaXZpbCBjb3VydCBvZiBjb21wZXRlbnQganVyaXNkaWN0aW9uLCBidXQgdGhlIENsYXNzIEFjdGlvbiBXYWl2ZXIgc2hhbGwgYmUgZW5mb3JjZWQgaW4gYXJiaXRyYXRpb24gb24gYW4gaW5kaXZpZHVhbCBiYXNpcyBhcyB0byBhbGwgb3RoZXIgQ2xhaW1zIHRvIHRoZSBmdWxsZXN0IGV4dGVudCBwb3NzaWJsZS48L2xpPjxsaT48Yj5SZXByZXNlbnRhdGl2ZSBQQUdBIFdhaXZlci48L2I+IE5vdHdpdGhzdGFuZGluZyBhbnkgb3RoZXIgcHJvdmlzaW9uIG9mIHRoaXMgQWdyZWVtZW50IG9yIHRoZSBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQsIHRvIHRoZSBmdWxsZXN0IGV4dGVudCBwZXJtaXR0ZWQgYnkgbGF3OiAoMSkgeW91IGFuZCBSYW5rLVggYWdyZWUgbm90IHRvIGJyaW5nIGEgcmVwcmVzZW50YXRpdmUgYWN0aW9uIG9uIGJlaGFsZiBvZiBvdGhlcnMgdW5kZXIgdGhlIFByaXZhdGUgQXR0b3JuZXlzIEdlbmVyYWwgQWN0IG9mIDIwMDQgKOKAnFBBR0HigJ0pLCBDYWxpZm9ybmlhIExhYm9yIENvZGUgwqcgMjY5OCBldCBzZXEuLCBpbiBhbnkgY291cnQgb3IgaW4gYXJiaXRyYXRpb24sIGFuZCAoMikgZm9yIGFueSBjbGFpbSBicm91Z2h0IG9uIGEgcHJpdmF0ZSBhdHRvcm5leSBnZW5lcmFsIGJhc2lzLCBpbmNsdWRpbmcgdW5kZXIgdGhlIENhbGlmb3JuaWEgUEFHQSwgYm90aCB5b3UgYW5kIFJhbmstWCBhZ3JlZSB0aGF0IGFueSBzdWNoIGRpc3B1dGUgc2hhbGwgYmUgcmVzb2x2ZWQgaW4gYXJiaXRyYXRpb24gb24gYW4gaW5kaXZpZHVhbCBiYXNpcyBvbmx5IChpLmUuLCB0byByZXNvbHZlIHdoZXRoZXIgeW91IGhhdmUgcGVyc29uYWxseSBiZWVuIGFnZ3JpZXZlZCBvciBzdWJqZWN0IHRvIGFueSB2aW9sYXRpb25zIG9mIGxhdyksIGFuZCB0aGF0IHN1Y2ggYW4gYWN0aW9uIG1heSBub3QgYmUgdXNlZCB0byByZXNvbHZlIHRoZSBjbGFpbXMgb3IgcmlnaHRzIG9mIG90aGVyIGluZGl2aWR1YWxzIGluIGEgc2luZ2xlIG9yIGNvbGxlY3RpdmUgcHJvY2VlZGluZyAoaS5lLiwgdG8gcmVzb2x2ZSB3aGV0aGVyIG90aGVyIGluZGl2aWR1YWxzIGhhdmUgYmVlbiBhZ2dyaWV2ZWQgb3Igc3ViamVjdCB0byBhbnkgdmlvbGF0aW9ucyBvZiBsYXcpIChjb2xsZWN0aXZlbHksIOKAnHJlcHJlc2VudGF0aXZlIFBBR0EgV2FpdmVy4oCdKS4gTm90d2l0aHN0YW5kaW5nIGFueSBvdGhlciBwcm92aXNpb24gb2YgdGhpcyBBZ3JlZW1lbnQsIHRoZSBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgb3IgdGhlIEFBQSBSdWxlcywgZGlzcHV0ZXMgcmVnYXJkaW5nIHRoZSBzY29wZSwgYXBwbGljYWJpbGl0eSwgZW5mb3JjZWFiaWxpdHksIHJldm9jYWJpbGl0eSBvciB2YWxpZGl0eSBvZiB0aGlzIHJlcHJlc2VudGF0aXZlIFBBR0EgV2FpdmVyIG1heSBiZSByZXNvbHZlZCBvbmx5IGJ5IGEgY2l2aWwgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbiBhbmQgbm90IGJ5IGFuIGFyYml0cmF0b3IuIElmIGFueSBwcm92aXNpb24gb2YgdGhpcyByZXByZXNlbnRhdGl2ZSBQQUdBIFdhaXZlciBpcyBmb3VuZCB0byBiZSB1bmVuZm9yY2VhYmxlIG9yIHVubGF3ZnVsIGZvciBhbnkgcmVhc29uOiAoaSkgdGhlIHVuZW5mb3JjZWFibGUgcHJvdmlzaW9uIHNoYWxsIGJlIHNldmVyZWQgZnJvbSB0aGlzIEFncmVlbWVudDsgKGlpKSBzZXZlcmFuY2Ugb2YgdGhlIHVuZW5mb3JjZWFibGUgcHJvdmlzaW9uIHNoYWxsIGhhdmUgbm8gaW1wYWN0IHdoYXRzb2V2ZXIgb24gdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudCBvciB0aGUgcmVxdWlyZW1lbnQgdGhhdCBhbnkgcmVtYWluaW5nIENsYWltcyBiZSBhcmJpdHJhdGVkIG9uIGFuIGluZGl2aWR1YWwgYmFzaXMgcHVyc3VhbnQgdG8gdGhlIEFyYml0cmF0aW9uIEFncmVlbWVudDsgYW5kIChpaWkpIGFueSBzdWNoIHJlcHJlc2VudGF0aXZlIFBBR0Egb3Igb3RoZXIgcmVwcmVzZW50YXRpdmUgcHJpdmF0ZSBhdHRvcm5leXMgZ2VuZXJhbCBhY3QgY2xhaW1zIG11c3QgYmUgbGl0aWdhdGVkIGluIGEgY2l2aWwgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbiBhbmQgbm90IGluIGFyYml0cmF0aW9uLiBUbyB0aGUgZXh0ZW50IHRoYXQgdGhlcmUgYXJlIGFueSBDbGFpbXMgdG8gYmUgbGl0aWdhdGVkIGluIGEgY2l2aWwgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbiBiZWNhdXNlIGEgY2l2aWwgY291cnQgb2YgY29tcGV0ZW50IGp1cmlzZGljdGlvbiBkZXRlcm1pbmVzIHRoYXQgdGhlIHJlcHJlc2VudGF0aXZlIFBBR0EgV2FpdmVyIGlzIHVuZW5mb3JjZWFibGUgd2l0aCByZXNwZWN0IHRvIHRob3NlIENsYWltcywgdGhlIFBhcnRpZXMgYWdyZWUgdGhhdCBsaXRpZ2F0aW9uIG9mIHRob3NlIENsYWltcyBzaGFsbCBiZSBzdGF5ZWQgcGVuZGluZyB0aGUgb3V0Y29tZSBvZiBhbnkgaW5kaXZpZHVhbCBDbGFpbXMgaW4gYXJiaXRyYXRpb24uPC9saT48bGk+PGI+UnVsZXMgR292ZXJuaW5nIHRoZSBBcmJpdHJhdGlvbi48L2I+IEFueSBhcmJpdHJhdGlvbiBjb25kdWN0ZWQgcHVyc3VhbnQgdG8gdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgc2hhbGwgYmUgYWRtaW5pc3RlcmVkIGJ5IHRoZSBBbWVyaWNhbiBBcmJpdHJhdGlvbiBBc3NvY2lhdGlvbiAo4oCcQUFB4oCdKSBwdXJzdWFudCB0byBpdHMgQ29uc3VtZXIgQXJiaXRyYXRpb24gUnVsZXMgdGhhdCBhcmUgaW4gZWZmZWN0IGF0IHRoZSB0aW1lIHRoZSBhcmJpdHJhdGlvbiBpcyBpbml0aWF0ZWQsIGFzIG1vZGlmaWVkIGJ5IHRoZSB0ZXJtcyBzZXQgZm9ydGggaW4gdGhpcyBBZ3JlZW1lbnQuIENvcGllcyBvZiB0aGVzZSBydWxlcyBjYW4gYmUgb2J0YWluZWQgYXQgdGhlIEFBQeKAmXMgd2Vic2l0ZSAod3d3LmFkci5vcmcpICh0aGUg4oCcQUFBIFJ1bGVz4oCdKSBvciBieSBjYWxsaW5nIHRoZSBBQUEgYXQgMS04MDAtNzc4LTc4NzkuIE5vdHdpdGhzdGFuZGluZyB0aGUgZm9yZWdvaW5nLCBpZiByZXF1ZXN0ZWQgYnkgeW91IGFuZCBpZiBwcm9wZXIgYmFzZWQgb24gdGhlIGZhY3RzIGFuZCBjaXJjdW1zdGFuY2VzIG9mIHRoZSBDbGFpbXMgcHJlc2VudGVkLCB0aGUgYXJiaXRyYXRvciBzaGFsbCBoYXZlIHRoZSBkaXNjcmV0aW9uIHRvIHNlbGVjdCBhIGRpZmZlcmVudCBzZXQgb2YgQUFBIFJ1bGVzLCBidXQgaW4gbm8gZXZlbnQgc2hhbGwgdGhlIGFyYml0cmF0b3IgY29uc29saWRhdGUgbW9yZSB0aGFuIG9uZSBwZXJzb27igJlzIENsYWltcywgb3Igb3RoZXJ3aXNlIHByZXNpZGUgb3ZlciBhbnkgZm9ybSBvZiByZXByZXNlbnRhdGl2ZSwgY29sbGVjdGl2ZSwgb3IgY2xhc3MgcHJvY2VlZGluZy48YnI+QXMgcGFydCBvZiB0aGUgYXJiaXRyYXRpb24sIGJvdGggeW91IGFuZCBSYW5rLVggd2lsbCBoYXZlIHRoZSBvcHBvcnR1bml0eSBmb3IgcmVhc29uYWJsZSBkaXNjb3Zlcnkgb2Ygbm9uLXByaXZpbGVnZWQgaW5mb3JtYXRpb24gdGhhdCBpcyByZWxldmFudCB0byB0aGUgQ2xhaW0uIFRoZSBhcmJpdHJhdG9yIG1heSBhd2FyZCBhbnkgaW5kaXZpZHVhbGl6ZWQgcmVtZWRpZXMgdGhhdCB3b3VsZCBiZSBhdmFpbGFibGUgaW4gY291cnQuIFRoZSBhcmJpdHJhdG9yIG1heSBhd2FyZCBkZWNsYXJhdG9yeSBvciBpbmp1bmN0aXZlIHJlbGllZiBvbmx5IGluIGZhdm9yIG9mIHRoZSBpbmRpdmlkdWFsIHBhcnR5IHNlZWtpbmcgcmVsaWVmIGFuZCBvbmx5IHRvIHRoZSBleHRlbnQgbmVjZXNzYXJ5IHRvIHByb3ZpZGUgcmVsaWVmIHdhcnJhbnRlZCBieSB0aGF0IHBhcnR5XFwncyBpbmRpdmlkdWFsIGNsYWltcy4gVGhlIGFyYml0cmF0b3Igd2lsbCBwcm92aWRlIGEgcmVhc29uZWQgd3JpdHRlbiBzdGF0ZW1lbnQgb2YgdGhlIGFyYml0cmF0b3LigJlzIGRlY2lzaW9uIHdoaWNoIHNoYWxsIGV4cGxhaW4gdGhlIGF3YXJkIGdpdmVuIGFuZCB0aGUgZmluZGluZ3MgYW5kIGNvbmNsdXNpb25zIG9uIHdoaWNoIHRoZSBkZWNpc2lvbiBpcyBiYXNlZC48YnI+VGhlIGFyYml0cmF0b3Igd2lsbCBkZWNpZGUgdGhlIHN1YnN0YW5jZSBvZiBhbGwgY2xhaW1zIGluIGFjY29yZGFuY2Ugd2l0aCBhcHBsaWNhYmxlIGxhdywgYW5kIHdpbGwgaG9ub3IgYWxsIGNsYWltcyBvZiBwcml2aWxlZ2UgcmVjb2duaXplZCBieSBsYXcuIFRoZSBhcmJpdHJhdG9yIHNoYWxsIG5vdCBiZSBib3VuZCBieSBydWxpbmdzIGluIHByaW9yIGFyYml0cmF0aW9ucyBpbnZvbHZpbmcgZGlmZmVyZW50IFJpZGVycyBvciBEcml2ZXJzLCBidXQgaXMgYm91bmQgYnkgcnVsaW5ncyBpbiBwcmlvciBhcmJpdHJhdGlvbnMgaW52b2x2aW5nIHRoZSBzYW1lIFJpZGVyIG9yIERyaXZlciB0byB0aGUgZXh0ZW50IHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3LiBUaGUgYXJiaXRyYXRvcuKAmXMgYXdhcmQgc2hhbGwgYmUgZmluYWwgYW5kIGJpbmRpbmcgYW5kIGp1ZGdtZW50IG9uIHRoZSBhd2FyZCByZW5kZXJlZCBieSB0aGUgYXJiaXRyYXRvciBtYXkgYmUgZW50ZXJlZCBpbiBhbnkgY291cnQgaGF2aW5nIGp1cmlzZGljdGlvbiB0aGVyZW9mLCBwcm92aWRlZCB0aGF0IGFueSBhd2FyZCBtYXkgYmUgY2hhbGxlbmdlZCBpbiBhIGNvdXJ0IG9mIGNvbXBldGVudCBqdXJpc2RpY3Rpb24uPC9saT48bGk+PGI+QXJiaXRyYXRpb24gRmVlcyBhbmQgQXdhcmRzLjwvYj4gVGhlIHBheW1lbnQgb2YgZmlsaW5nIGFuZCBhcmJpdHJhdGlvbiBmZWVzIHdpbGwgYmUgZ292ZXJuZWQgYnkgdGhlIHJlbGV2YW50IEFBQSBSdWxlcyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgbW9kaWZpY2F0aW9uczo8b2wgdHlwZT1cXFwiaVxcXCI+PGxpPklmIHlvdSBpbml0aWF0ZSBhcmJpdHJhdGlvbiB1bmRlciB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBhZnRlciBwYXJ0aWNpcGF0aW5nIGluIHRoZSBvcHRpb25hbCBOZWdvdGlhdGlvbiBwcm9jZXNzIGRlc2NyaWJlZCBpbiBzdWJzZWN0aW9uIChrKSBiZWxvdyBhbmQgYXJlIG90aGVyd2lzZSByZXF1aXJlZCB0byBwYXkgYSBmaWxpbmcgZmVlIHVuZGVyIHRoZSByZWxldmFudCBBQUEgUnVsZXMsIFJhbmstWCBhZ3JlZXMgdGhhdCwgdW5sZXNzIHlvdXIgY2xhaW0gaXMgZm9yICQ1LDAwMCBvciBtb3JlLCB5b3VyIHNoYXJlIG9mIHRoZSBmaWxpbmcgYW5kIGFyYml0cmF0aW9uIGZlZXMgaXMgbGltaXRlZCB0byAkNTAsIGFuZCB0aGF0LCBhZnRlciB5b3Ugc3VibWl0IHByb29mIG9mIHBheW1lbnQgb2YgdGhlIGZpbGluZyBmZWUgdG8gUmFuay1YLCBSYW5rLVggd2lsbCBwcm9tcHRseSByZWltYnVyc2UgeW91IGZvciBhbGwgYnV0ICQ1MCBvZiB0aGUgZmlsaW5nIGZlZS4gSWYsIGhvd2V2ZXIsIHRoZSBhcmJpdHJhdG9yIGZpbmRzIHRoYXQgZWl0aGVyIHRoZSBzdWJzdGFuY2Ugb2YgeW91ciBjbGFpbSBvciB0aGUgcmVsaWVmIHNvdWdodCBpbiB0aGUgY2xhaW0gaXMgZnJpdm9sb3VzIG9yIGJyb3VnaHQgZm9yIGFuIGltcHJvcGVyIHB1cnBvc2UgKGFzIG1lYXN1cmVkIGJ5IHRoZSBzdGFuZGFyZHMgc2V0IGZvcnRoIGluIEZlZGVyYWwgUnVsZSBvZiBDaXZpbCBQcm9jZWR1cmUgMTEoYikpLCB0aGVuIHRoZSBwYXltZW50IG9mIGFsbCBzdWNoIGZlZXMgd2lsbCBiZSBnb3Zlcm5lZCBieSB0aGUgQUFBIFJ1bGVzLjwvbGk+PGxpPlJhbmstWCBpbml0aWF0ZXMgYXJiaXRyYXRpb24gdW5kZXIgdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQsIFJhbmstWCB3aWxsIHBheSBhbGwgQUFBIGZpbGluZyBhbmQgYXJiaXRyYXRpb24gZmVlcy48L2xpPjxsaT5XaXRoIHJlc3BlY3QgdG8gYW55IENsYWltcyBicm91Z2h0IGJ5IFJhbmstWCBhZ2FpbnN0IGEgUHJlbWl1bSBNZW1iZXIsIG9yIGZvciBDbGFpbXMgYnJvdWdodCBieSBhIFByZW1pdW0gTWVtYmVyIGFnYWluc3QgUmFuay1YIHRoYXQ6IChBKSBhcmlzZSBvdXQgb2YsIG9yIHJlbGF0ZSB0bywgUmFuay1Y4oCZcyBhY3R1YWwgZGVhY3RpdmF0aW9uIG9mIGEgUHJlbWl1bSBNZW1iZXLigJlzIGFjY291bnQgb3IgYSB0aHJlYXQgYnkgUmFuay1YIHRvIGRlYWN0aXZhdGUgYSBQcmVtaXVtIE1lbWJlcuKAmXMgYWNjb3VudDsgb3IgKEMpIGFyaXNlIG91dCBvZiwgb3IgcmVsYXRlIHRvLCBSYW5rLVjigJlzIGFjdHVhbCB0ZXJtaW5hdGlvbiBvZiBhIFByZW1pdW0gTWVtYmVy4oCZcyBBZ3JlZW1lbnQgd2l0aCBSYW5rLVggdW5kZXIgdGhlIHRlcm1pbmF0aW9uIHByb3Zpc2lvbnMgb2YgdGhpcyBBZ3JlZW1lbnQsIG9yIGEgdGhyZWF0IGJ5IFJhbmstWCB0byB0ZXJtaW5hdGUgYSBQcmVtaXVtIE1lbWJlcuKAmXMgQWdyZWVtZW50LCBSYW5rLVggc2hhbGwgcGF5IGFsbCBjb3N0cyB1bmlxdWUgdG8gYXJiaXRyYXRpb24gKGFzIGNvbXBhcmVkIHRvIHRoZSBjb3N0cyBvZiBhZGp1ZGljYXRpbmcgdGhlIHNhbWUgY2xhaW1zIGJlZm9yZSBhIGNvdXJ0KSwgaW5jbHVkaW5nIHRoZSByZWd1bGFyIGFuZCBjdXN0b21hcnkgYXJiaXRyYXRpb24gZmVlcyBhbmQgZXhwZW5zZXMgKHRvIHRoZSBleHRlbnQgbm90IHBhaWQgYnkgUmFuay1YIHB1cnN1YW50IHRvIHRoZSBmZWUgcHJvdmlzaW9ucyBhYm92ZSkuIEhvd2V2ZXIsIGlmIHlvdSBhcmUgdGhlIHBhcnR5IGluaXRpYXRpbmcgdGhlIFByZW1pdW0gTWVtYmVyIENsYWltLCB5b3Ugc2hhbGwgYmUgcmVzcG9uc2libGUgZm9yIGNvbnRyaWJ1dGluZyB1cCB0byBhbiBhbW91bnQgZXF1YWwgdG8gdGhlIGZpbGluZyBmZWUgdGhhdCB3b3VsZCBiZSBwYWlkIHRvIGluaXRpYXRlIHRoZSBjbGFpbSBpbiB0aGUgY291cnQgb2YgZ2VuZXJhbCBqdXJpc2RpY3Rpb24gaW4gdGhlIHN0YXRlIGluIHdoaWNoIHlvdSBwcm92aWRlIFNlcnZpY2VzIHRvIEJ1c2luZXNzZXMsIHVubGVzcyBhIGxvd2VyIGZlZSBhbW91bnQgd291bGQgYmUgb3dlZCBieSB5b3UgcHVyc3VhbnQgdG8gdGhlIEFBQSBSdWxlcywgYXBwbGljYWJsZSBsYXcsIG9yIHN1YnNlY3Rpb24gKGUpKDEpIGFib3ZlLiBBbnkgZGlzcHV0ZSBhcyB0byB3aGV0aGVyIGEgY29zdCBpcyB1bmlxdWUgdG8gYXJiaXRyYXRpb24gc2hhbGwgYmUgcmVzb2x2ZWQgYnkgdGhlIGFyYml0cmF0b3IuPC9saT48bGk+RXhjZXB0IGFzIHByb3ZpZGVkIGluIEZlZGVyYWwgUnVsZSBvZiBDaXZpbCBQcm9jZWR1cmUgNjggb3IgYW55IHN0YXRlIGVxdWl2YWxlbnRzLCBlYWNoIHBhcnR5IHNoYWxsIHBheSBpdHMgb3duIGF0dG9ybmV5c+KAmSBmZWVzIGFuZCBwYXkgYW55IGNvc3RzIHRoYXQgYXJlIG5vdCB1bmlxdWUgdG8gdGhlIGFyYml0cmF0aW9uIChpLmUuLCBjb3N0cyB0aGF0IGVhY2ggcGFydHkgd291bGQgaW5jdXIgaWYgdGhlIGNsYWltKHMpIHdlcmUgbGl0aWdhdGVkIGluIGEgY291cnQgc3VjaCBhcyBjb3N0cyB0byBzdWJwb2VuYSB3aXRuZXNzZXMgYW5kL29yIGRvY3VtZW50cywgdGFrZSBkZXBvc2l0aW9ucyBhbmQgcHVyY2hhc2UgZGVwb3NpdGlvbiB0cmFuc2NyaXB0cywgY29weSBkb2N1bWVudHMsIGV0Yy4pLjwvbGk+PGxpPkF0IHRoZSBlbmQgb2YgYW55IGFyYml0cmF0aW9uLCB0aGUgYXJiaXRyYXRvciBtYXkgYXdhcmQgcmVhc29uYWJsZSBmZWVzIGFuZCBjb3N0cyBvciBhbnkgcG9ydGlvbiB0aGVyZW9mIHRvIHlvdSBpZiB5b3UgcHJldmFpbCwgdG8gdGhlIGV4dGVudCBhdXRob3JpemVkIGJ5IGFwcGxpY2FibGUgbGF3Ljxicj52aS4gSWYgdGhlIGFyYml0cmF0b3IgaXNzdWVzIHlvdSBhbiBhd2FyZCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdmFsdWUgb2YgUmFuay1Y4oCZcyBsYXN0IHdyaXR0ZW4gc2V0dGxlbWVudCBvZmZlciBtYWRlIGFmdGVyIHlvdSBwYXJ0aWNpcGF0ZWQgaW4gZ29vZCBmYWl0aCBpbiB0aGUgb3B0aW9uYWwgTmVnb3RpYXRpb24gcHJvY2VzcyBkZXNjcmliZWQgaW4gc3Vic2VjdGlvbiAoaikgYmVsb3csIHRoZW4gUmFuay1YIHdpbGwgcGF5IHlvdSB0aGUgYW1vdW50IG9mIHRoZSBhd2FyZCBvciBVLlMuICQxLDAwMCwgd2hpY2hldmVyIGlzIGdyZWF0ZXIuPC9saT48L29sPjwvbGk+PGxpPjxiPkxvY2F0aW9uIGFuZCBNYW5uZXIgb2YgQXJiaXRyYXRpb24uPC9iPiBVbmxlc3MgeW91IGFuZCBSYW5rLVggYWdyZWUgb3RoZXJ3aXNlLCBhbnkgYXJiaXRyYXRpb24gaGVhcmluZ3MgYmV0d2VlbiBSYW5rLVggYW5kIGEgUHJlbWl1bSBNZW1iZXIgd2lsbCB0YWtlIHBsYWNlIGluIHRoZSBjb3VudHkgb2YgUmFuay1Y4oCZcyBQcmluY2lwYWwgT2ZmaWNlLCBhbmQgYW55IGFyYml0cmF0aW9uIGhlYXJpbmdzIGJldHdlZW4gUmFuay1YIGFuZCBhIFByZW1pdW0gTWVtYmVyIHdpbGwgdGFrZSBwbGFjZSBpbiB0aGUgY291bnR5IGluIHdoaWNoIFJhbmstWCBtYWludGFpbnMgaXRzIFByaW5jaXBhbCBPZmZpY2UuIElmIEFBQSBhcmJpdHJhdGlvbiBpcyB1bmF2YWlsYWJsZSBpbiBzdWNoIGNvdW50eSwgdGhlIGFyYml0cmF0aW9uIGhlYXJpbmdzIHdpbGwgdGFrZSBwbGFjZSBpbiB0aGUgbmVhcmVzdCBhdmFpbGFibGUgbG9jYXRpb24gZm9yIGEgQUFBIGFyYml0cmF0aW9uLiBJZiB5b3VyIENsYWltIGlzIGZvciAkMTAsMDAwIG9yIGxlc3MsIFJhbmstWCBhZ3JlZXMgdGhhdCB5b3UgbWF5IGNob29zZSB3aGV0aGVyIHRoZSBhcmJpdHJhdGlvbiB3aWxsIGJlIGNvbmR1Y3RlZCBzb2xlbHkgb24gdGhlIGJhc2lzIG9mIGRvY3VtZW50cyBzdWJtaXR0ZWQgdG8gdGhlIGFyYml0cmF0b3IsIHRocm91Z2ggYSB0ZWxlcGhvbmljIGhlYXJpbmcsIG9yIGJ5IGFuIGluLXBlcnNvbiBoZWFyaW5nIGFzIGRldGVybWluZWQgYnkgdGhlIEFBQSBSdWxlcy4gSWYgeW91ciBDbGFpbSBleGNlZWRzICQxMCwwMDAsIHRoZSByaWdodCB0byBhIGhlYXJpbmcgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBBQUEgUnVsZXMuPC9saT48bGk+PGI+RXhjZXB0aW9ucyB0byBBcmJpdHJhdGlvbi48L2I+IFRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IHNoYWxsIG5vdCByZXF1aXJlIGFyYml0cmF0aW9uIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXMgb2YgY2xhaW1zOiAoMSkgc21hbGwgY2xhaW1zIGFjdGlvbnMgYnJvdWdodCBvbiBhbiBpbmRpdmlkdWFsIGJhc2lzIHRoYXQgYXJlIHdpdGhpbiB0aGUgc2NvcGUgb2Ygc3VjaCBzbWFsbCBjbGFpbXMgY291cnTigJlzIGp1cmlzZGljdGlvbjsgKDIpIGEgcmVwcmVzZW50YXRpdmUgYWN0aW9uIGJyb3VnaHQgb24gYmVoYWxmIG9mIG90aGVycyB1bmRlciBQQUdBIG9yIG90aGVyIHByaXZhdGUgYXR0b3JuZXlzIGdlbmVyYWwgYWN0cywgdG8gdGhlIGV4dGVudCB0aGUgcmVwcmVzZW50YXRpdmUgUEFHQSBXYWl2ZXIgaW4gU2VjdGlvbiAxNyhjKSBvZiBzdWNoIGFjdGlvbiBpcyBkZWVtZWQgdW5lbmZvcmNlYWJsZSBieSBhIGNvdXJ0IG9mIGNvbXBldGVudCBqdXJpc2RpY3Rpb247ICgzKSBjbGFpbXMgZm9yIHdvcmtlcnPigJkgY29tcGVuc2F0aW9uLCBzdGF0ZSBkaXNhYmlsaXR5IGluc3VyYW5jZSBhbmQgdW5lbXBsb3ltZW50IGluc3VyYW5jZSBiZW5lZml0czsgYW5kICg0KSBjbGFpbXMgdGhhdCBtYXkgbm90IGJlIHN1YmplY3QgdG8gYXJiaXRyYXRpb24gYXMgYSBtYXR0ZXIgb2YgbGF3Ljxicj5Ob3RoaW5nIGluIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IHByZXZlbnRzIHlvdSBmcm9tIG1ha2luZyBhIHJlcG9ydCB0byBvciBmaWxpbmcgYSBjbGFpbSBvciBjaGFyZ2Ugd2l0aCB0aGUgRXF1YWwgRW1wbG95bWVudCBPcHBvcnR1bml0eSBDb21taXNzaW9uLCBVLlMuIERlcGFydG1lbnQgb2YgTGFib3IsIFNlY3VyaXRpZXMgRXhjaGFuZ2UgQ29tbWlzc2lvbiwgTmF0aW9uYWwgTGFib3IgUmVsYXRpb25zIEJvYXJkLCBvciBPZmZpY2Ugb2YgRmVkZXJhbCBDb250cmFjdCBDb21wbGlhbmNlIFByb2dyYW1zLCBvciBzaW1pbGFyIGxvY2FsLCBzdGF0ZSBvciBmZWRlcmFsIGFnZW5jeSwgYW5kIG5vdGhpbmcgaW4gdGhpcyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgc2hhbGwgYmUgZGVlbWVkIHRvIHByZWNsdWRlIG9yIGV4Y3VzZSBhIHBhcnR5IGZyb20gYnJpbmdpbmcgYW4gYWRtaW5pc3RyYXRpdmUgY2xhaW0gYmVmb3JlIGFueSBhZ2VuY3kgaW4gb3JkZXIgdG8gZnVsZmlsbCB0aGUgcGFydHlcXCdzIG9ibGlnYXRpb24gdG8gZXhoYXVzdCBhZG1pbmlzdHJhdGl2ZSByZW1lZGllcyBiZWZvcmUgbWFraW5nIGEgY2xhaW0gaW4gYXJiaXRyYXRpb24sIGhvd2V2ZXIgeW91IGtub3dpbmdseSBhbmQgdm9sdW50YXJpbHkgd2FpdmUgdGhlIHJpZ2h0IHRvIHNlZWsgb3IgcmVjb3ZlciBtb25leSBkYW1hZ2VzIG9mIGFueSB0eXBlIHB1cnN1YW50IHRvIGFueSBhZG1pbmlzdHJhdGl2ZSBjb21wbGFpbnQgYW5kIGluc3RlYWQgbWF5IHNlZWsgc3VjaCByZWxpZWYgb25seSB0aHJvdWdoIGFyYml0cmF0aW9uIHVuZGVyIHRoaXMgQWdyZWVtZW50LiBOb3RoaW5nIGluIHRoaXMgQWdyZWVtZW50IG9yIEFyYml0cmF0aW9uIEFncmVlbWVudCBwcmV2ZW50cyB5b3VyIHBhcnRpY2lwYXRpb24gaW4gYW4gaW52ZXN0aWdhdGlvbiBieSBhIGdvdmVybm1lbnQgYWdlbmN5IG9mIGFueSByZXBvcnQsIGNsYWltIG9yIGNoYXJnZSBvdGhlcndpc2UgY292ZXJlZCBieSB0aGlzIEFyYml0cmF0aW9uIFByb3Zpc2lvbi48L2xpPjxsaT48Yj5TZXZlcmFiaWxpdHkuPC9iPiBJbiBhZGRpdGlvbiB0byB0aGUgc2V2ZXJhYmlsaXR5IHByb3Zpc2lvbnMgaW4gc3Vic2VjdGlvbnMgKGMpIGFib3ZlLCBpbiB0aGUgZXZlbnQgdGhhdCBhbnkgcG9ydGlvbiBvZiB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudCBpcyBkZWVtZWQgaWxsZWdhbCBvciB1bmVuZm9yY2VhYmxlLCBzdWNoIHByb3Zpc2lvbiBzaGFsbCBiZSBzZXZlcmVkIGFuZCB0aGUgcmVtYWluZGVyIG9mIHRoZSBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgc2hhbGwgYmUgZ2l2ZW4gZnVsbCBmb3JjZSBhbmQgZWZmZWN0LjwvbGk+PC9vbD48L2xpPjwvb2w+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVggd2VsY29tZXMgeW91ciBxdWVzdGlvbnMgb3IgY29tbWVudHMgcmVnYXJkaW5nIHRoaXMgU3RhdGVtZW50IG9mIFByaXZhY3kuIElmIHlvdSBiZWxpZXZlIHRoYXQgUmFuay1YIGhhcyBub3QgYWRoZXJlZCB0byB0aGlzIFN0YXRlbWVudCwgcGxlYXNlIGNvbnRhY3QgUmFuay1YIGF0Ojxicj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5SYW5rLVgsIExMQzwvZGl2PjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+MTY1MCBBZGFtcyBBdi48L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPlNhbiBEaWVnbywgQ2FsaWZvcm5pYSwgOTIxMTY8L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwiaW5uZXJUZXh0XFxcIj5FbWFpbCBBZGRyZXNzOjwvZGl2PjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+Y29udGFjdEByYW5rLXguY29tPC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcImlubmVyVGV4dFxcXCI+VGVsZXBob25lIG51bWJlcjo8L2Rpdj48ZGl2IGNsYXNzPVxcXCJpbm5lclRleHRcXFwiPjxicj5FZmZlY3RpdmUgYXMgb2YgTWF5IDMxLCAyMDE3PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj48YnI+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL2xheW91dC9QYXJ0aWFsczIvc2VhcmNocmVzdWx0cy5odG1sXCIsXCI8ZGl2IG5nLXNob3c9XFxcInZtLnNlYXJjaEFjdGl2ZVxcXCI+PHNlYXJjaC1ibG9jaz48L3NlYXJjaC1ibG9jaz48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvbGF5b3V0L1BhcnRpYWxzMi90cmVuZHMuaHRtbFwiLFwiPHRyZW5kLWJsb2NrIHNob3ctYWxsPVxcXCJ0cnVlXFxcIj48L3RyZW5kLWJsb2NrPlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9yYW5rL1BhcnRpYWxzMi9SYW5rQ2hhdC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPjxoMSBjbGFzcz1cXFwicGFnZS1oZWFkaW5nXFxcIj5UaGlzIGlzIGEgdGVzdDwvaDE+PC9kaXY+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL3JhbmsvUGFydGlhbHMyL2FkZEN1c3RvbVJhbmsuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj48aDQ+QWRkIGEgTmV3IFJhbmtpbmc8L2g0Pjxicj48bGFiZWw+PHN0cm9uZz5DaG9vc2UgdGhlIGJlc3QgY2F0ZWdvcnkgZm9yIHlvdXIgcmFua2luZzo8L3N0cm9uZz48L2xhYmVsPjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIiBzdHlsZT1cXFwicGFkZGluZy1ib3R0b206MTBweFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGlkPVxcXCJuaGRyb3Bkb3duXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCI+e3t2bS5yYW5rQ2F0fX0mbmJzcCZuYnNwPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9idXR0b24+PHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtbWlkZGxlXFxcIj48bGkgbmctY2xpY2s9XFxcInZtLnNlbENhdCgxKVxcXCI+PGE+Rk9PRDwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDIpXFxcIj48YT5MSUZFU1RZTEU8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbENhdCgzKVxcXCI+PGE+SEVBTFRIPC9hPjwvbGk+PGxpIG5nLWNsaWNrPVxcXCJ2bS5zZWxDYXQoNClcXFwiPjxhPlNPQ0lBTDwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDUpXFxcIj48YT5TUE9SVFM8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbENhdCg2KVxcXCI+PGE+UEVSU09OQUxJVElFUzwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDcpXFxcIj48YT5TRVJWSUNFUzwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDgpXFxcIj48YT5CRUFVVFk8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbENhdCg5KVxcXCI+PGE+Q0lUWTwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDEwKVxcXCI+PGE+UE9MSVRJQ1M8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbENhdCgxMSlcXFwiPjxhPlNDSUVOQ0UgJiBURUNIPC9hPjwvbGk+PGxpIG5nLWNsaWNrPVxcXCJ2bS5zZWxDYXQoMTIpXFxcIj48YT5MT1ZFICYgUkVMQVRJT05TSElQUzwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsQ2F0KDEzKVxcXCI+PGE+RkFNSUxZPC9hPjwvbGk+PGxpIG5nLWNsaWNrPVxcXCJ2bS5zZWxDYXQoMTQpXFxcIj48YT5PVEhFUjwvYT48L2xpPjwvdWw+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uc3RlcCA+IDFcXFwiPjxsYWJlbD48c3Ryb25nPldoYXQgYXJlIHlvdSByYW5raW5nPzwvc3Ryb25nPjwvbGFiZWw+PGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbToxMHB4XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgaWQ9XFxcIm5oZHJvcGRvd25cXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIj57e3ZtLnJhbmtUeXBlfX0mbmJzcCZuYnNwPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+PC9idXR0b24+PHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtbWlkZGxlXFxcIj48bGkgbmctY2xpY2s9XFxcInZtLnNlbFR5cGUoMSlcXFwiPjxhPjxzdHJvbmc+RVNUQUJMSVNITUVOVFM8L3N0cm9uZz4gLSBpLmUuIFJlc3RhdXJhbnRzLCBTaG9wcywgR3ltczwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsVHlwZSgyKVxcXCI+PGE+PHN0cm9uZz5QRU9QTEU8L3N0cm9uZz4gLSBpLmUuIEF0aGxldGVzLCBDZWxlYnJpdGllcywgUG9saXRpY2lhbnM8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbFR5cGUoMylcXFwiPjxhPjxzdHJvbmc+T1JHQU5JWkFUSU9OUzwvc3Ryb25nPiAtIGkuZS4gQ29tcGFuaWVzLCBCcmFuZHM8L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbFR5cGUoNClcXFwiPjxhPjxzdHJvbmc+UExBQ0VTPC9zdHJvbmc+IC0gaS5lLiBQaHlzaWNhbCBMYW5kbWFya3MsIEJlYWNoZXMsIFBhcmtzLCBldGMuPC9hPjwvbGk+PGxpIG5nLWNsaWNrPVxcXCJ2bS5zZWxUeXBlKDUpXFxcIj48YT48c3Ryb25nPk9QSU5JT05TPC9zdHJvbmc+IC0gaS5lLiBGYXZvcml0ZSB0aGluZ3MsIFRoaW5ncyBwZW9wbGUgbGlrZSwgZXRjLjwvYT48L2xpPjxsaSBuZy1jbGljaz1cXFwidm0uc2VsVHlwZSg2KVxcXCI+PGE+PHN0cm9uZz5DT05UUkFDVE9SUzwvc3Ryb25nPiAtIGkuZS4gRnJlZWxhbmNlcnMsIEhhbmR5bWFuLCBUdXRvcnMsIGV0Yy48L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbFR5cGUoNylcXFwiPjxhPjxzdHJvbmc+SVRFTSAvIE9CSkVDVFM8L3N0cm9uZz4gLSBpLmUuIFNvdXZlbmllciwgUHJvZHVjdHMsIGV0Yy48L2E+PC9saT48bGkgbmctY2xpY2s9XFxcInZtLnNlbFR5cGUoOClcXFwiPjxhPjxzdHJvbmc+RVZFTlRTPC9zdHJvbmc+IC0gaS5lLiBQYXJ0aWVzLCBGZXN0aXZhbHMsIGV0YzwvYT48L2xpPjwvdWw+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uc3RlcCA+IDJcXFwiPjxsYWJlbD48c3Ryb25nPlJhbmtpbmcgVGl0bGU6PC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOjEwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiaS5lLiBUaGUgYmVzdCBmaXNoIHRhY29zIGluIFNhbiBEaWVnb1xcXCIgbmctbW9kZWw9XFxcInZtLnJhbmtUaXRsZVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnZhbFJhbmsoKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5WYWxpZGF0ZTwvYnV0dG9uPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiBuZy1pZj1cXFwidm0uc2hvd0FsZXJ0JiZ2bS5zaW1pbGFyUmFua3MubGVuZ3RoPjBcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbTowcHg7bWFyZ2luLWJvdHRvbTowcHg7XFxcIj48c3Ryb25nPlBsZWFzZSBjb25maXJtLjwvc3Ryb25nPiBUaGVyZSBhcmUgc2ltaWxhciByYW5raW5ncyB0byB0aGUgb25lIHlvdSBhcmUgdHJ5aW5nIHRvIGNyZWF0ZS4gSWYgdGhpcyByYW5raW5nIGlzIGRpZmZlcmVudCB0byBhbnkgb2YgdGhlIGV4aXN0aW5nIHJhbmtpbmdzIGJlbG93LCBjbGljayBcXCdDb250aW51ZVxcJy4gSWYgbm90LCBwbGVhc2UgY2FuY2VsIGFuZCBleHBhbmQgb24gdGhlIGFscmVhZHkgZXhpc3RpbmcgcmFua2luZ3MuPGJyPjxkaXYgbmctcmVwZWF0PVxcXCJ4IGluIHZtLnNpbWlsYXJSYW5rc1xcXCI+Jm5ic3AtIHt7eC50aXRsZX19PGJyPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbGVydE9rKClcXFwiPkNvbnRpbnVlPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLmdvQmFjaygpXFxcIj5DYW5jZWw8L2J1dHRvbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiBuZy1pZj1cXFwidm0uc2hvd0FsZXJ0JiZ2bS5zaW1pbGFyUmFua3MubGVuZ3RoPT0wXFxcIj48c3Ryb25nPkdvb2Qgb25lITwvc3Ryb25nPiBUaGlzIHJhbmsgZG9lcyBub3Qgc2VlbSB0byBoYXZlIGFueSBkdXBsaWNhdGVzLjxicj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbGVydE9rKClcXFwiPk9rPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uc3RlcCA+IDNcXFwiPjxsYWJlbD48c3Ryb25nPlJhbmtpbmcgUXVlc3Rpb246PC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOjEwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiaS5lLiBXaG8gbWFrZXMgdGhlIGJldHRlciBmaXNoIHRhY29zP1xcXCIgbmctbW9kZWw9XFxcInZtLnF1ZXN0aW9uXFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0ucXVlc3Rpb25PaygpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPk9rPC9idXR0b24+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxhIGhyZWY9XFxcIlxcXCIgbmctY2xpY2s9XFxcInZtLndoYXRpc3JhbmtxdWVzdGlvbigpXFxcIj5XaGF0IGlzIHRoaXM/PC9hPjwvZGl2PjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLnN0ZXAgPiA0XFxcIj48bGFiZWw+PHN0cm9uZz5UYWdzPC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOjEwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwidGFncyBzZXBhcmF0ZWQgYnkgYmxhbmsgc3BhY2UsIGkuZS4gZm9vZCBzZWFmb29kIGZpc2hcXFwiIG5nLW1vZGVsPVxcXCJ2bS50YWdzXFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0udGFnc09rKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+T2s8L2J1dHRvbj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PGEgaHJlZj1cXFwiXFxcIiBuZy1jbGljaz1cXFwidm0ud2hhdGFyZXRhZ3MoKVxcXCI+V2hhdCBhcmUgdGFncz88L2E+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwidm0uc3RlcCA+IDVcXFwiPjxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWluZm9cXFwiIG5nLWlmPVxcXCJ2bS5zdGVwID09IDZcXFwiPjxzdHJvbmc+U2VsZWN0IEltYWdlPC9zdHJvbmc+PGJyPjEuIEVudGVyIGEgcXVlcnkgYW5kIGNsaWNrIHRoZSBcXCdTZWFyY2ggSW1hZ2VzXFwnIGJ1dHRvbi48YnI+Mi4gTmF2aWdhdGUgdGhlIGF2YWlsYWJsZSBpbWFnZXMgdXNpbmcgdGhlIFxcJzw8XFwnIGFuZD1cXFwiXFxcIiBcXCc9XFxcIlxcXCI+PlxcJyBidXR0b25zLjxicj4zLiBXaGVuIHlvdSBmaW5kIGFuIGltYWdlIHlvdSBsaWtlLCBjbGljayBcXCdTZWxlY3QgSW1hZ2VcXCcuPGJyPjxicj48L1xcJz48L2Rpdj48YnI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uaW1hZ2VCYW5rc0RpYWxvZygpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcXVlc3Rpb25cXFwiPjwvaT48L2J1dHRvbj4gPGxhYmVsPjxzdHJvbmc+U2VsZWN0IEltYWdlIEJhbms6PC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImhpZGRlbi14cyBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BpeGFiYXktbG9nby5wbmdcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxJbWdCYW5rKDEpXFxcIiBhbHQ9XFxcIlBpeGFiYXlcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO2hlaWdodDo0NXB4O3BhZGRpbmc6M3B4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLnBpeGFiYXkgPyBcXCdibGFja1xcJzpcXCd3aGl0ZVxcJ319XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLWxvZ28ucG5nXFxcIiBuZy1jbGljaz1cXFwidm0uc2VsSW1nQmFuaygyKVxcXCIgYWx0PVxcXCJQZXhlbHNcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO2hlaWdodDo0NXB4O3BhZGRpbmc6M3B4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLnBleGVscyA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX1cXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImhpZGRlbi14cyBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PC9kaXY+PC9kaXY+PGxhYmVsPjxzdHJvbmc+SW1hZ2UgUXVlcnk6PC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOjEwcHhcXFwiPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgd2hhdCB0byBzZWFyY2ggZm9yIGFuIGltYWdlLCBpLmUuIHRhY29cXFwiIG5nLW1vZGVsPVxcXCJ2bS5pbWFnZVF1ZXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+PGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uZ2V0SW1hZ2VzKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+U2VhcmNoIEltYWdlczwvYnV0dG9uPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5wcmV2SW1nKClcXFwiPiZuYnNwJm5ic3BQcmV2Jm5ic3AmbmJzcDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5uZXh0SW1nKClcXFwiPiZuYnNwJm5ic3BOZXh0Jm5ic3AmbmJzcDwvYnV0dG9uPjwvZGl2PjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyB7e3ZtLnNlbEltYWdlRW5hYmxlfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxlY3RJbWcoKVxcXCI+U2VsZWN0IEltYWdlPC9idXR0b24+PC9kaXY+PC9kaXY+PGJyPjxkaXYgbmctaWY9XFxcInZtLnN0ZXAgPiA2XFxcIj48ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1pbmZvXFxcIiBuZy1pZj1cXFwidm0uc3RlcCA9PSA3XFxcIj48c3Ryb25nPlNlbGVjdCBUaXRsZSBCb3ggQmFja2dyb3VuZCBDb2xvcjwvc3Ryb25nPjxicj4xLiBTZWxlY3QgYSBiYWNrZ3JvdW5kIGNvbG9yLjxicj4yLiBBZGp1c3QgdGhlIHNoYWRlIGZhY3RvciB0byBjcmVhdGUgYXR0cmFjdGl2ZSB2aXN1YWwgd2l0aCB5b3VyIGltYWdlLjxicj4zLiBXaGVuIHlvdSBhcmUgcmVhZHkgdG8gc3VibWl0LCBjbGljayB0aGUgXFwnQWRkIFJhbmtcXCcgYnV0dG9uLjwvZGl2PjxsYWJlbD48c3Ryb25nPlNlbGVjdCBDb2xvciBEZXNpZ246PC9zdHJvbmc+PC9sYWJlbD48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiaGlkZGVuLXhzIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMSBjb2wtbWQtMSBjb2wtbGctMVxcXCIgbmctY2xpY2s9XFxcInZtLmNzZWwoMSlcXFwiIG5nLWF0dHItc3R5bGU9XFxcInBhZGRpbmc6MTVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6e3t2bS5jMXNlbCA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX07XFxcIj48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOmJyb3duXFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMSBjb2wtbWQtMSBjb2wtbGctMVxcXCIgbmctY2xpY2s9XFxcInZtLmNzZWwoMilcXFwiIG5nLWF0dHItc3R5bGU9XFxcInBhZGRpbmc6MTVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6e3t2bS5jMnNlbCA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX07XFxcIj48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiM0NjgyYjRcXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0xIGNvbC1tZC0xIGNvbC1sZy0xXFxcIiBuZy1jbGljaz1cXFwidm0uY3NlbCgzKVxcXCIgbmctYXR0ci1zdHlsZT1cXFwicGFkZGluZzoxNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLmMzc2VsID8gXFwnYmxhY2tcXCc6XFwnd2hpdGVcXCd9fTtcXFwiPjxkaXYgc3R5bGU9XFxcImhlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzAwODA4MFxcXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTEgY29sLW1kLTEgY29sLWxnLTFcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jc2VsKDQpXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJwYWRkaW5nOjE1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnt7dm0uYzRzZWwgPyBcXCdibGFja1xcJzpcXCd3aGl0ZVxcJ319O1xcXCI+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjpncmF5XFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMSBjb2wtbWQtMSBjb2wtbGctMVxcXCIgbmctY2xpY2s9XFxcInZtLmNzZWwoNSlcXFwiIG5nLWF0dHItc3R5bGU9XFxcInBhZGRpbmc6MTVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6e3t2bS5jNXNlbCA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX07XFxcIj48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOiNhMzI5N2FcXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0xIGNvbC1tZC0xIGNvbC1sZy0xXFxcIiBuZy1jbGljaz1cXFwidm0uY3NlbCg2KVxcXCIgbmctYXR0ci1zdHlsZT1cXFwicGFkZGluZzoxNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLmM2c2VsID8gXFwnYmxhY2tcXCc6XFwnd2hpdGVcXCd9fTtcXFwiPjxkaXYgc3R5bGU9XFxcImhlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6I2M2OGM1M1xcXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaGlkZGVuLXhzIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLXRvcDoxMHB4XFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGNvbC14cy02XFxcIj48bGFiZWw+U2hhZGUgRmFjdG9yOjwvbGFiZWw+PC9kaXY+PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGNvbC14cy02XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5taW51c1NoYWRlKClcXFwiPiZuYnNwJm5ic3A8aSBjbGFzcz1cXFwiZmEgZmEtbWludXNcXFwiPjwvaT4mbmJzcCZuYnNwPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnBsdXNTaGFkZSgpXFxcIj4mbmJzcCZuYnNwPGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiPjwvaT4mbmJzcCZuYnNwPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiBuZy1pZj1cXFwidm0uc3RlcCA+IDVcXFwiPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyXFxcIj48ZGl2IGNsYXNzPVxcXCJ3ZWxsLXNtXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojNjY2NjY2O2NvbG9yOiNmOGY4ZmY7XFxcIj48aDMgY2xhc3M9XFxcInN1Yi1oZWFkZXJcXFwiPlByZXZpZXc8L2gzPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcInBhZGRpbmctYm90dG9tOjEwcHhcXFwiPjxkaXYgY2xhc3M9XFxcImhpZGRlbi14cyBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctNFxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWJnYm94IGNvbC14cy02IGNvbC1zbS0zIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48YmctYm94IGJjPVxcXCJ7e3ZtLmJjfX1cXFwiIGJjMj1cXFwie3t2bS5iYzJ9fVxcXCIgZmM9XFxcInt7dm0uZmN9fVxcXCIgdGV4dD1cXFwie3t2bS5yYW5rVGl0bGV9fVxcXCIgZGlyPVxcXCJob3Jpem9udGFsXFxcIiB3PVxcXCIxMDAlXFxcIiBoPVxcXCJ7e3ZtLnNtID8gXFwnMTUwcHhcXCc6XFwnMjAwcHhcXCd9fVxcXCI+PC9iZy1ib3g+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTIgY29sLWxnLTJcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7XFxcIj48aW1nIG5nLXNyYz1cXFwie3t2bS5pbWFnZX19XFxcIiBuZy1pZj1cXFwiIXZtLmltYWdlTG9hZGluZ1xcXCIgbmctYXR0ci1zdHlsZT1cXFwid2lkdGg6MTAwJTtoZWlnaHQ6e3t2bS5zbSA/IFxcJzE1MHB4XFwnOlxcJzIwMHB4XFwnfX07XFxcIj48ZGl2IG5nLWF0dHItc3R5bGU9XFxcInBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0Ont7dm0uc20gPyBcXCcxNTBweFxcJzpcXCcyMDBweFxcJ319O1xcXCIgbmctaWY9XFxcInZtLmltYWdlTG9hZGluZ1xcXCI+PGltZyBzcmM9XFxcIi9hc3NldHMvaW1hZ2VzL2xvYWRpbmcuZ2lmXFxcIiBjbGFzcz1cXFwiaW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDtoZWlnaHQ6NTBweDtwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDo1MCU7IG1hcmdpbi1yaWdodDotNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSlcXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImhpZGRlbi14cyBjb2wtc20tMyBjb2wtbWQtNCBjb2wtbGctNFxcXCI+PC9kaXY+PC9kaXY+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiPkNhbmNlbDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmFkZFJhbmsoKVxcXCIgbmctc2hvdz1cXFwidm0uc2hvd0FkZEJ1dHRvblxcXCI+e3t2bS5idXR0b25MYWJlbH19PC9idXR0b24+PC9kaXY+PGJyPjxicj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvcmFuay9QYXJ0aWFsczIvYWRkUmFua2ZvckFuc3dlci5odG1sXCIsXCI8YnI+PGg0PkFkZCBSYW5raW5nPC9oND48bGFiZWw+PHN0cm9uZz5UaXRsZTo8L3N0cm9uZz48L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLnJhbmtUaXRsZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7dm0ucmFua1RpdGxlfX1cXFwiPiA8bGFiZWw+PHN0cm9uZz5RdWVzdGlvbjo8L3N0cm9uZz48L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLnF1ZXN0aW9uXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5xdWVzdGlvbn19XFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YSBocmVmPVxcXCJcXFwiIG5nLWNsaWNrPVxcXCJcXFwiPldoYXQgaXMgdGhpcz88L2E+PC9kaXY+PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgc3R5bGU9XFxcInBhZGRpbmc6NXB4XFxcIj48bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWxcXFwiPkludHJvOjwvbGFiZWw+IDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uaW50cm90ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5pbnRyb3RleHR9fVxcXCIgcm93cz1cXFwiNFxcXCI+PC90ZXh0YXJlYT48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+QmFja2dyb3VuZCBDb2xvcjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PGNvbG9yLXBpY2tlciBuZy1tb2RlbD1cXFwidm0uYmNcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2g9XFxcInRydWVcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtcG9zPVxcXCJcXCdsZWZ0XFwnXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLWJvb3RzdHJhcD1cXFwidHJ1ZVxcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1vbmx5PVxcXCJ0cnVlXFxcIj48L2NvbG9yLXBpY2tlcj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMiBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPkZvbnQgQ29sb3I8L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTIgY29sLW1kLTIgY29sLWxnLTJcXFwiPjxjb2xvci1waWNrZXIgbmctbW9kZWw9XFxcInZtLmZjXFxcIiBjb2xvci1waWNrZXItc3dhdGNoPVxcXCJ0cnVlXFxcIiBjb2xvci1waWNrZXItc3dhdGNoLXBvcz1cXFwiXFwnbGVmdFxcJ1xcXCIgY29sb3ItcGlja2VyLXN3YXRjaC1ib290c3RyYXA9XFxcInRydWVcXFwiIGNvbG9yLXBpY2tlci1zd2F0Y2gtb25seT1cXFwidHJ1ZVxcXCI+PC9jb2xvci1waWNrZXI+PC9kaXY+PGRpdiBjbGFzcz1cXFwiaGlkZGVuLXhzIGNvbC1zbS0yIGNvbC1tZC0yIGNvbC1sZy0yXFxcIj48L2Rpdj48L2Rpdj48aDQ+UHJldmlldzwvaDQ+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiBuZy1pZj1cXFwidHJ1ZVxcXCI+PGRpdiBjbGFzcz1cXFwicm93XFxcIiBuZy1pZj1cXFwidm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCdcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMlxcXCI+PGRpdiBjbGFzcz1cXFwid2VsbC1zbVxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzY2NjY2Njtjb2xvcjojZjhmOGZmO1xcXCI+PGgzIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj5UaGUgRmF2b3JpdGVzPC9oMz48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMiBjb2wtbGctMlxcXCIgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJjfX07Y29sb3I6e3t2bS5mY319O2hlaWdodDp7e3ZtLnNtID8gXFwnMTIwcHhcXCc6XFwnMTUwcHhcXCd9fTttYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7cG9zaXRpb246cmVsYXRpdmU7XFxcIj48aDIgY2xhc3M9XFxcImhpZGRlbi14cyB0ZXh0LWNlbnRlclxcXCIgc3R5bGU9XFxcInBhZGRpbmc6M3B4OyBtYXJnaW46MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDo1MCU7IG1hcmdpbi1yaWdodDotNTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSlcXFwiPnt7dm0ucmFua1RpdGxlfX08L2gyPjxoMyBjbGFzcz1cXFwiaGlkZGVuLXNtIGhpZGRlbi1tZCBoaWRkZW4tbGcgaGlkZGVuLXhsIHRleHQtY2VudGVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzozcHg7IG1hcmdpbjowcHg7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6NTAlOyBsZWZ0OjUwJTsgbWFyZ2luLXJpZ2h0Oi01MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKVxcXCI+e3t2bS5yYW5rVGl0bGV9fTwvaDM+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTIgY29sLWxnLTJcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7XFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ub2ltYWdlLmpwZ1xcXCIgbmctYXR0ci1zdHlsZT1cXFwid2lkdGg6MTAwJTtoZWlnaHQ6e3t2bS5zbSA/IFxcJzEyMHB4XFwnOlxcJzE1MHB4XFwnfX07XFxcIj48L2Rpdj48L2Rpdj48L2Rpdj48YnI+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCI+Q2FuY2VsPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uYWRkUmFua2luZ2ZvckFuc3dlcigpXFxcIj57e3ZtLmJ1dHRvbkxhYmVsfX08L2J1dHRvbj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvcmFuay9QYXJ0aWFsczIvZWRpdFJhbmtpbmcuaHRtbFwiLFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj48aDM+RWRpdCBSYW5raW5nPC9oMz48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbToxMHB4XFxcIj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTRcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1iZ2JveCBjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMiBjb2wtbGctMlxcXCI+PGJnLWJveCBiYz1cXFwie3t2bS5iY319XFxcIiBiYzI9XFxcInt7dm0uYmMyfX1cXFwiIGZjPVxcXCJ7e3ZtLmZjfX1cXFwiIHRleHQ9XFxcInt7dm0ucmFua1RpdGxlfX1cXFwiIGRpcj1cXFwiaG9yaXpvbnRhbFxcXCIgdz1cXFwiMTAwJVxcXCIgaD1cXFwie3t2bS5zbSA/IFxcJzIwMHB4XFwnOlxcJzIwMHB4XFwnfX1cXFwiPjwvYmctYm94PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy02IGNvbC1zbS0zIGNvbC1tZC0yIGNvbC1sZy0yXFxcIiBzdHlsZT1cXFwibWFyZ2luOjBweDtwYWRkaW5nOjBweDtib3JkZXI6MHB4O1xcXCI+PGltZyBuZy1zcmM9XFxcInt7dm0uaW1hZ2V9fVxcXCIgbmctYXR0ci1zdHlsZT1cXFwid2lkdGg6MTAwJTtoZWlnaHQ6e3t2bS5zbSA/IFxcJzIwMHB4XFwnOlxcJzIwMHB4XFwnfX07XFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTMgY29sLW1kLTQgY29sLWxnLTRcXFwiPjwvZGl2PjwvZGl2Pjxicj48bGFiZWw+PHN0cm9uZz5TZWxlY3QgSW1hZ2UgQmFuazo8L3N0cm9uZz48L2xhYmVsPjxkaXYgY2xhc3M9XFxcInJvd1xcXCI+PGRpdiBjbGFzcz1cXFwiaGlkZGVuLXhzIGNvbC1zbS0zIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtc20tMyBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGl4YWJheS1sb2dvLnBuZ1xcXCIgbmctY2xpY2s9XFxcInZtLnNlbEltZ0JhbmsoMSlcXFwiIGFsdD1cXFwiUGl4YWJheVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7aGVpZ2h0OjQ1cHg7cGFkZGluZzozcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnt7dm0ucGl4YWJheSA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX1cXFwiPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YSBocmVmPVxcXCJodHRwczovL3d3dy5waXhhYmF5LmNvbS9cXFwiPlZpc2l0IFBpeGFiYXk8L2E+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BleGVscy1sb2dvLnBuZ1xcXCIgbmctY2xpY2s9XFxcInZtLnNlbEltZ0JhbmsoMilcXFwiIGFsdD1cXFwiUGV4ZWxzXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtoZWlnaHQ6NDVweDtwYWRkaW5nOjNweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6e3t2bS5wZXhlbHMgPyBcXCdibGFja1xcJzpcXCd3aGl0ZVxcJ319XFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9cXFwiPlZpc2l0IFBleGVsczwvYT48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjwvZGl2PjwvZGl2PjxkaXY+PGJyPjxsYWJlbD48c3Ryb25nPkltYWdlIFF1ZXJ5Ojwvc3Ryb25nPjwvbGFiZWw+PGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWJvdHRvbToxMHB4XFxcIj48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHdoYXQgdG8gc2VhcmNoIGZvciBhbiBpbWFnZSwgaS5lLiB0YWNvXFxcIiBuZy1tb2RlbD1cXFwidm0uaW1hZ2VRdWVyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uZ2V0SW1hZ2VzKClcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+U2VhcmNoIEltYWdlczwvYnV0dG9uPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+PGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5wcmV2SW1nKClcXFwiPiZuYnNwJm5ic3BQcmV2Jm5ic3AmbmJzcDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5uZXh0SW1nKClcXFwiPiZuYnNwJm5ic3BOZXh0Jm5ic3AmbmJzcDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxlY3RJbWcoKVxcXCI+U2VsZWN0IEltYWdlPC9idXR0b24+PC9kaXY+PC9kaXY+PC9kaXY+PGJyPjxkaXY+PGxhYmVsPjxzdHJvbmc+U2VsZWN0IENvbG9yIERlc2lnbjo8L3N0cm9uZz48L2xhYmVsPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0xIGNvbC1tZC0xIGNvbC1sZy0xXFxcIiBuZy1jbGljaz1cXFwidm0uY3NlbCgxKVxcXCIgbmctYXR0ci1zdHlsZT1cXFwicGFkZGluZzoxNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLmMxc2VsID8gXFwnYmxhY2tcXCc6XFwnd2hpdGVcXCd9fTtcXFwiPjxkaXYgc3R5bGU9XFxcImhlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6YnJvd25cXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0xIGNvbC1tZC0xIGNvbC1sZy0xXFxcIiBuZy1jbGljaz1cXFwidm0uY3NlbCgyKVxcXCIgbmctYXR0ci1zdHlsZT1cXFwicGFkZGluZzoxNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLmMyc2VsID8gXFwnYmxhY2tcXCc6XFwnd2hpdGVcXCd9fTtcXFwiPjxkaXYgc3R5bGU9XFxcImhlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzQ2ODJiNFxcXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTEgY29sLW1kLTEgY29sLWxnLTFcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jc2VsKDMpXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJwYWRkaW5nOjE1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnt7dm0uYzNzZWwgPyBcXCdibGFja1xcJzpcXCd3aGl0ZVxcJ319O1xcXCI+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMDA4MDgwXFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMiBjb2wtc20tMSBjb2wtbWQtMSBjb2wtbGctMVxcXCIgbmctY2xpY2s9XFxcInZtLmNzZWwoNClcXFwiIG5nLWF0dHItc3R5bGU9XFxcInBhZGRpbmc6MTVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6e3t2bS5jNHNlbCA/IFxcJ2JsYWNrXFwnOlxcJ3doaXRlXFwnfX07XFxcIj48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6MzBweDtiYWNrZ3JvdW5kLWNvbG9yOmdyYXlcXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0yIGNvbC1zbS0xIGNvbC1tZC0xIGNvbC1sZy0xXFxcIiBuZy1jbGljaz1cXFwidm0uY3NlbCg1KVxcXCIgbmctYXR0ci1zdHlsZT1cXFwicGFkZGluZzoxNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp7e3ZtLmM1c2VsID8gXFwnYmxhY2tcXCc6XFwnd2hpdGVcXCd9fTtcXFwiPjxkaXYgc3R5bGU9XFxcImhlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6I2EzMjk3YVxcXCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTIgY29sLXNtLTEgY29sLW1kLTEgY29sLWxnLTFcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jc2VsKDYpXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJwYWRkaW5nOjE1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnt7dm0uYzZzZWwgPyBcXCdibGFja1xcJzpcXCd3aGl0ZVxcJ319O1xcXCI+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojYzY4YzUzXFxcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJoaWRkZW4teHMgY29sLXNtLTMgY29sLW1kLTMgY29sLWxnLTNcXFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOjEwcHhcXFwiPjxkaXYgY2xhc3M9XFxcInRleHQtcmlnaHQgY29sLXhzLTZcXFwiPjxsYWJlbD5TaGFkZSBGYWN0b3I6PC9sYWJlbD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgY29sLXhzLTZcXFwiPjxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLm1pbnVzU2hhZGUoKVxcXCI+Jm5ic3AmbmJzcDxpIGNsYXNzPVxcXCJmYSBmYS1taW51c1xcXCI+PC9pPiZuYnNwJm5ic3A8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0ucGx1c1NoYWRlKClcXFwiPiZuYnNwJm5ic3A8aSBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9pPiZuYnNwJm5ic3A8L2J1dHRvbj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48YnI+PGxhYmVsPjxzdHJvbmc+VGl0bGU6PC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5yYW5rVGl0bGVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3ZtLnJhbmtUaXRsZX19XFxcIj4gPGxhYmVsPjxzdHJvbmc+UXVlc3Rpb246PC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5xdWVzdGlvblxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7dm0ucXVlc3Rpb259fVxcXCI+IDxsYWJlbD48c3Ryb25nPlRhZ3M6PC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS50YWdzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS50YWdzfX1cXFwiPiA8bGFiZWw+PHN0cm9uZz5LZXl3b3Jkczo8L3N0cm9uZz48L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmtleXdvcmRzXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5rZXl3b3Jkc319XFxcIj4gPGxhYmVsPjxzdHJvbmc+QW5zd2VyVGFnczo8L3N0cm9uZz48L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLmFuc3dlcnRhZ3NcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3ZtLmFuc3dlcnRhZ3N9fVxcXCI+IDxsYWJlbD48c3Ryb25nPklzQXRvbWljOjwvc3Ryb25nPjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uaXNhdG9taWNcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3ZtLmlzYXRvbWljfX1cXFwiPiA8bGFiZWw+PHN0cm9uZz5DYXRlZ29yeS1TdHJpbmdzOjwvc3Ryb25nPjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uY2F0c3RyXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5jYXRzdHJ9fVxcXCI+IDxsYWJlbD48c3Ryb25nPlR5cGU6PC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS50eXBlXFxcIiBicy10eXBlYWhlYWQ9XFxcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7dm0udHlwZX19XFxcIiBicy1vcHRpb25zPVxcXCJjIGZvciBjIGluIHZtLnR5cGVMaXN0XFxcIj4gPGxhYmVsPjxzdHJvbmc+ZmltYWdlOjwvc3Ryb25nPjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0uaW1hZ2VcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e3ZtLmltYWdlfX1cXFwiPiA8bGFiZWw+PHN0cm9uZz5pc01QIEZsYWc6PC9zdHJvbmc+PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5pc21wXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5pc21wfX1cXFwiPiA8bGFiZWw+PHN0cm9uZz5TY29wZTo8L3N0cm9uZz48L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLnNjb3BlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5zY29wZX19XFxcIj48YnI+PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgbmctY2xpY2s9XFxcInZtLmdvQmFjaygpXFxcIj5DYW5jZWw8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0VkaXQoKVxcXCI+RWRpdDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBuZy1jbGljaz1cXFwidm0uZ29EZWxldGUoKVxcXCI+RGVsZXRlPC9idXR0b24+PC9kaXY+PGJyPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC9yYW5rL1BhcnRpYWxzMi9tYXRjaC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ3ZWxsLXJhbmtcXFwiIG5nLWlmPVxcXCJ2bS5uc21cXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGgyIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj57e3ZtLnRhYmxlLnRpdGxlfX0gPHNwYW4gY2xhc3M9XFxcIm5vbWFyZ2luXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGNjO2NvbG9yOiMwMDI2OTk7Zm9udC1zaXplOm1lZGl1bTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PC9idXR0b24+PC9zcGFuPjwvaDI+PC9kaXY+PGRpdiBjbGFzcz1cXFwid2VsbC1yYW5rXFxcIiBuZy1pZj1cXFwidm0uc21cXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O1xcXCI+PGgzIGNsYXNzPVxcXCJzdWItaGVhZGVyXFxcIj57e3ZtLnRhYmxlLnRpdGxlfX0gPHNwYW4gY2xhc3M9XFxcIm5vbWFyZ2luXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIHB1bGwtcmlnaHRcXFwiIHN0eWxlPVxcXCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7YmFja2dyb3VuZC1jb2xvcjojMDA2ZGNjO2NvbG9yOiMwMDI2OTk7Zm9udC1zaXplOm1lZGl1bTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5jbG9zZVJhbmsoKVxcXCI+PC9idXR0b24+PC9zcGFuPjwvaDM+PC9kaXY+PGgzPnt7dm0udGFibGUucXVlc3Rpb259fTwvaDM+PGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlclxcXCI+PGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWRhcmtcXFwiPlJhbmsgbWF0Y2ggPHN0cm9uZz57e3ZtLkdQfX08L3N0cm9uZz4gb2YgPHN0cm9uZz57e3ZtLlRvdH19PC9zdHJvbmc+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWxpZ2h0XFxcIiBuZy1jbGljaz1cXFwidm0uc2VsZWN0QW5zd2VyKDEpXFxcIiBuZy1zaG93PVxcXCJ7e3ZtLnR5cGUgIT0gXFwnU2hvcnQtUGhyYXNlXFwnfX1cXFwiPjxzcGFuIG5nLXJlcGVhdD1cXFwiZiBpbiB2bS5maWVsZHMgfCBmaWx0ZXI6KGYuaXNyZXF1aXJlZD10cnVlKVxcXCI+e3soZi5uYW1lID09IFxcXCJuYW1lXFxcIiAmJiB2bS5hbnN3ZXIxLm5hbWUpID8gdm0uYW5zd2VyMS5uYW1lIDogXFxcIlxcXCJ9fSB7eyhmLm5hbWUgPT0gXFxcImNpdHlhcmVhXFxcIiAmJiB2bS5hbnN3ZXIxLmNpdHlhcmVhKSA/IFxcXCIgLSBcXFwiKyB2bS5hbnN3ZXIxLmNpdHlhcmVhIDogXFxcIlxcXCJ9fTwvc3Bhbj48L2Rpdj48aW1nIGNsYXNzPVxcXCJkaXNwbGF5ZWRcXFwiIHNyYz1cXFwie3t2bS5hbnN3ZXIxLmltYWdldXJsfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxlY3RBbnN3ZXIoMSlcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlO21heC1oZWlnaHQ6MzAwcHhcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSAhPSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLWFuc3dlclxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7IGhlaWdodDphdXRvO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlbGVjdEFuc3dlcigxKVxcXCIgbmctc2hvdz1cXFwie3t2bS50eXBlID09IFxcJ1Nob3J0LVBocmFzZVxcJ319XFxcIj48YnI+PGgyIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlclxcXCI+PHN0cm9uZz57e3ZtLmFuc3dlcjEubmFtZX19PC9zdHJvbmc+PC9oMj48YnI+PGg0IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmNlbnRlclxcXCI+e3t2bS5hbnN3ZXIxLmFkZGluZm99fTwvaDQ+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTYgY29sLW1kLTYgY29sLWxnLTZcXFwiPjxkaXYgY2xhc3M9XFxcIndlbGwgd2VsbC1saWdodFxcXCIgbmctY2xpY2s9XFxcInZtLnNlbGVjdEFuc3dlcigyKVxcXCIgbmctc2hvdz1cXFwie3t2bS50eXBlICE9IFxcJ1Nob3J0LVBocmFzZVxcJ319XFxcIj48c3BhbiBuZy1yZXBlYXQ9XFxcImYgaW4gdm0uZmllbGRzIHwgZmlsdGVyOihmLmlzcmVxdWlyZWQ9dHJ1ZSlcXFwiPnt7KGYubmFtZSA9PSBcXFwibmFtZVxcXCIgJiYgdm0uYW5zd2VyMi5uYW1lKSA/IHZtLmFuc3dlcjIubmFtZSA6IFxcXCJcXFwifX0ge3soZi5uYW1lID09IFxcXCJjaXR5YXJlYVxcXCIgJiYgdm0uYW5zd2VyMi5jaXR5YXJlYSkgPyBcXFwiIC0gXFxcIisgdm0uYW5zd2VyMi5jaXR5YXJlYSA6IFxcXCJcXFwifX08L3NwYW4+PC9kaXY+PGltZyBjbGFzcz1cXFwiZGlzcGxheWVkXFxcIiBzcmM9XFxcInt7dm0uYW5zd2VyMi5pbWFnZXVybH19XFxcIiBuZy1jbGljaz1cXFwidm0uc2VsZWN0QW5zd2VyKDIpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTttYXgtaGVpZ2h0OjMwMHB4XFxcIiBuZy1zaG93PVxcXCJ7e3ZtLnR5cGUgIT0gXFwnU2hvcnQtUGhyYXNlXFwnfX1cXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1hbnN3ZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlOyBoZWlnaHQ6YXV0bztcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWxlY3RBbnN3ZXIoMilcXFwiIG5nLXNob3c9XFxcInt7dm0udHlwZSA9PSBcXCdTaG9ydC1QaHJhc2VcXCd9fVxcXCI+PGJyPjxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPjxzdHJvbmc+e3t2bS5hbnN3ZXIyLm5hbWV9fTwvc3Ryb25nPjwvaDI+PGJyPjxoNCBzdHlsZT1cXFwidGV4dC1hbGlnbjpjZW50ZXJcXFwiPnt7dm0uYW5zd2VyMi5hZGRpbmZvfX08L2g0PjwvZGl2PjwvZGl2PjwvZGl2Pjxicj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1sZWZ0IGNvbC14cy02IGNvbC1tZC02IGNvbC1sZy02XFxcIj48YnV0dG9uIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoMSlcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+RGV0YWlsczwvYnV0dG9uPjwvZGl2PjxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1yaWdodCBjb2wteHMtNiBjb2wtbWQtNiBjb2wtbGctNlxcXCI+PGJ1dHRvbiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDIpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPkRldGFpbHM8L2J1dHRvbj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXFxcIj48YnV0dG9uIG5nLWNsaWNrPVxcXCJ2bS5za2lwTWF0Y2goKVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5JIGRvblxcJ3Qga25vdywgU2tpcDwvYnV0dG9uPiA8YnV0dG9uIG5nLWNsaWNrPVxcXCJ2bS5yYW5rU3VtbWFyeSgpXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+U3RvcDwvYnV0dG9uPjwvZGl2Pjxicj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvcHJvbW90ZXJzL1BhcnRpYWxzL3Byb21vdGUuaHRtbFwiLFwiPGJyPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGgyPkJlY29tZSBhIFJhbmstWCBQcm9tb3RlcjwvaDI+PGJyPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPlRoYW5rIHlvdSBmb3IgeW91ciBpbnRlcmVzdCBpbiBiZWNvbWluZyBhIFJhbmstWCBwcm9tb3Rvci4gUGxlYXNlIHJlYWQgY2FyZWZ1bGx5IHRoZSBpbmZvcm1hdGlvbiBiZWxvdy48L3A+PGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uXFxcIiByb2xlPVxcXCJ0YWJsaXN0XFxcIiBhcmlhLW11bHRpc2VsZWN0YWJsZT1cXFwidHJ1ZVxcXCI+PGRpdiBjbGFzcy09XFxcIlxcXCIgXFxcImNhcmRcXFwiPVxcXCJcXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIiByb2xlPVxcXCJ0YWJcXFwiIGlkPVxcXCJoZWFkaW5nT25lXFxcIiBuZy1jbGljaz1cXFwidm0uc2hvdygxKVxcXCI+PGgzIGNsYXNzPVxcXCJtYi0wXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj48YSBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtcGFyZW50PVxcXCIjYWNjb3JkaW9uXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZU9uZVxcXCI+V2hhdCBpcyBSYW5rLVg/PC9hPjwvaDM+PC9kaXY+PGRpdiBpZD1cXFwiY29sbGFwc2VPbmVcXFwiIGNsYXNzPVxcXCJjb2xsYXBzZSBzaG93XFxcIiByb2xlPVxcXCJ0YWJwYW5lbFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nT25lXFxcIiBuZy1zaG93PVxcXCJ2bS5zaG93T25lXFxcIj48ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj5SYW5rLVggaXMgYSBTYW4gRGllZ28gYmFzZWQgY29tcGFueSB3aXRoIGEgd2ViIGFwcGxpY2F0aW9uIGRlc2lnbmVkIHRvIGNyZWF0ZSBpbnRlcmFjdGl2ZSBjb250ZW50IGluIHRoZSBmb3JtcyBvZiByYW5raW5ncywgbGlzdHMgYW5kIG9waW5pb25zLiBXZSBsaWtlIHRvIGZvY3VzIG9uIHRoaW5ncyBvbiBvdXIgY2l0eSBidXQgYWxzbyBjb3ZlciBnZW5lcmFsIHRvcGljcy4gT3VyIGdvYWwgaXMgdG8gYmUgdGhlIGJlc3Qgc291cmNlIG9mIGluZm9ybWF0aW9uIGZvciB0aGUgYmVzdCBzZXJ2aWNlcywgZm9vZCwgZXZlbnRzIGFuZCB0aGluZ3MgaGFwcGVuaW5nIGFyb3VuZCBvdXIgY2l0eSBpbiBhIGNsZWFuIGFuZCBlbGVnYW50IHdheS4gSW4gYWRkaXRpb24gdG8gYmVzdCBkZWFscyBhbmQgc3BlY2lhbHMgdGhhdCBkaWZmZXJlbnQgYnVzaW5lc3NlcyBvZmZlci4gSWYgeW91IGhhdmUgbm90IGFscmVhZHkgZG9uZSBzbywgcGxlYXNlIHRha2UgYSB0aW1lIHRvIGxvb2sgYXQgdGhlIHdlYnNpdGUuIDxzcGFuPjxhIGhyZWY9XFxcIi8jIS9ob21lXFxcIj5DbGljayBoZXJlPC9hPjwvc3Bhbj48L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcy09XFxcIlxcXCIgXFxcImNhcmRcXFwiPVxcXCJcXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIiByb2xlPVxcXCJ0YWJcXFwiIGlkPVxcXCJoZWFkaW5nVHdvXFxcIiBuZy1jbGljaz1cXFwidm0uc2hvdygyKVxcXCI+PGgzIGNsYXNzPVxcXCJtYi0wXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj48YSBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtcGFyZW50PVxcXCIjYWNjb3JkaW9uXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZVR3b1xcXCI+V2hhdCBkb2VzIFJhbmstWCBzZWxscz88L2E+PC9oMz48L2Rpdj48ZGl2IGlkPVxcXCJjb2xsYXBzZVR3b1xcXCIgY2xhc3M9XFxcImNvbGxhcHNlIHNob3dcXFwiIHJvbGU9XFxcInRhYnBhbmVsXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUd29cXFwiIG5nLXNob3c9XFxcInZtLnNob3dUd29cXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPlJhbmstWCBzZWxscyBwcmVtaXVtIG1lbWJlcnNoaXBzIHRvIGJ1c2luZXNzZXMgYW5kIGJyYW5kcyB0aGF0IHdpc2ggdG8gc3RhbmQgb3V0IGZyb20gb3RoZXJzLCBhbmQgdG8gdGhvc2UgdGhhdCB3aXNoIHRvIHByb21vdGUgdGhlaXIgc3BlY2lhbHMgYW5kIHByb21vdGlvbnMgd2l0aCB1c2Vycy48L3A+PGRpdiBjbGFzcz1cXFwicm93XFxcIj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxpbWcgc3JjPVxcXCIvYXNzZXRzL2ltYWdlcy9wcm9tb3RlX2ltZzEuanBnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IGJvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6M3B4OyBib3JkZXItY29sb3I6bGlnaHRncmF5XFxcIj48cCBzdHlsZT1cXFwibWFyZ2luLXRvcDo1cHhcXFwiPkFsbCBvZiB0aGUgY29udGVudCBpcyBnZW5lcmF0ZWQgYnkgbGlzdHMuPC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGltZyBzcmM9XFxcIi9hc3NldHMvaW1hZ2VzL3Byb21vdGVfaW1nMi5qcGdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlOyBoZWlnaHQ6YXV0bzsgYm9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDozcHg7IGJvcmRlci1jb2xvcjpsaWdodGdyYXlcXFwiPjxwIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+V2hlbiBjb250ZW50IGlzIHByZXNlbnRlZCwgYSBmYXIgcmlnaHQgY29sdW1uIGlzIHNhdmVkIGZvciBzcGVjaWFscy4gPGk+UHJlbWl1bSBCdXNpbmVzczwvaT4gKERlbW8gUmVzdGF1cmFudCAxKSBnZXRzIGhpZ2hsaWdodGVkIHdpdGggYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgY3VycmVudCBzcGVjaWFsLjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTMgY29sLWxnLTNcXFwiPjxpbWcgc3JjPVxcXCIvYXNzZXRzL2ltYWdlcy9wcm9tb3RlX2ltZzMuanBnXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTsgaGVpZ2h0OmF1dG87IGJvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6M3B4OyBib3JkZXItY29sb3I6bGlnaHRncmF5XFxcIj48cCBzdHlsZT1cXFwibWFyZ2luLXRvcDo1cHhcXFwiPkluc2lkZSBhbiBFc3RhYmxpc2htZW50IGRldGFpbCwgYSA8aT5QcmVtaXVtIEJ1c2luZXNzPC9pPiBjYW4gY3JlYXRlIGRldGFpbCBib3hlcyB0byBhZHZlcnRpc2UgdGhlaXIgc3BlY2lhbHMuPC9wPjwvZGl2PjxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtMyBjb2wtbGctM1xcXCI+PGltZyBzcmM9XFxcIi9hc3NldHMvaW1hZ2VzL3Byb21vdGVfaW1nNC5qcGdcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlOyBoZWlnaHQ6YXV0bzsgYm9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDozcHg7IGJvcmRlci1jb2xvcjpsaWdodGdyYXlcXFwiPjxwIHN0eWxlPVxcXCJtYXJnaW4tdG9wOjVweFxcXCI+RWFjaCBzcGVjaWFsIGNhbiBjb250YWluIGFuIGltYWdlIHRoYXQgY2FuIGJlIGRpc3BsYXllZC4gSW1hZ2VzIGNhbiBjb250YWluIDxzdHJvbmc+Y291cG9uczwvc3Ryb25nPiwgPHN0cm9uZz5mbHllcnM8L3N0cm9uZz4sIDxzdHJvbmc+YmFyIGNvZGVzPC9zdHJvbmc+LCBldGMuIEl0IGlzIHVwIHRvIHRoZSBidXNpbmVzcyB0aGUgY29udGVudCBvZiB0aGUgaW1hZ2UgdG8gYmUgZGlzcGxheWVkLjwvcD48L2Rpdj48L2Rpdj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48aT5QcmVtaXVtIEJ1c2luZXNzPC9pPiBjYW4gZWRpdCBhbmQgY29udHJvbCByZWFsLXRpbWUgdGhlIHNwZWNpYWxzIGFuZCBwcm9tb3Rpb25zIHRoYXQgYXJlIHNob3duLjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzLT1cXFwiXFxcIiBcXFwiY2FyZFxcXCI9XFxcIlxcXCI+PGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiIHJvbGU9XFxcInRhYlxcXCIgaWQ9XFxcImhlYWRpbmdUaHJlZVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3coMylcXFwiPjxoMyBjbGFzcz1cXFwibWItMFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6I2IzYjNiMztwYWRkaW5nOjVweFxcXCI+PGEgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXBhcmVudD1cXFwiI2FjY29yZGlvblxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1jb250cm9scz1cXFwiY29sbGFwc2VPbmVcXFwiPkhvdyBtdWNoIGRvIGJ1c2luZXNzZXMgcGF5IGZvciBQcmVtaXVtIE1lbWJlcnNoaXA/PC9hPjwvaDM+PC9kaXY+PGRpdiBpZD1cXFwiY29sbGFwc2VUaHJlZVxcXCIgY2xhc3M9XFxcImNvbGxhcHNlIHNob3dcXFwiIHJvbGU9XFxcInRhYnBhbmVsXFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImhlYWRpbmdUaHJlZVxcXCIgbmctc2hvdz1cXFwidm0uc2hvd1RocmVlXFxcIj48ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj5QcmVtaXVtIG1lbWJlcnNoaXBzIGZvciBSYW5rLVggY29zdCAkOTkgcGVyIG1vbnRoLiBXaGVuIHVzaW5nIGEgcHJvbW8gY29kZSBidXNpbm5lc2VzIGdldCA2MCBkYXlzIGZyZWUgdHJpYWwuPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3MtPVxcXCJcXFwiIFxcXCJjYXJkXFxcIj1cXFwiXFxcIj48ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCIgcm9sZT1cXFwidGFiXFxcIiBpZD1cXFwiaGVhZGluZ0ZvdXJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93KDQpXFxcIj48aDMgY2xhc3M9XFxcIm1iLTBcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNiM2IzYjM7cGFkZGluZzo1cHhcXFwiPjxhIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNhY2NvcmRpb25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIGFyaWEtY29udHJvbHM9XFxcImNvbGxhcHNlRm91clxcXCI+V2hhdCBkb2VzIGl0IG1lYW4gdG8gYmUgYSBSYW5rLVggUHJvbW90b3I/PC9hPjwvaDM+PC9kaXY+PGRpdiBpZD1cXFwiY29sbGFwc2VGb3VyXFxcIiBjbGFzcz1cXFwiY29sbGFwc2Ugc2hvd1xcXCIgcm9sZT1cXFwidGFicGFuZWxcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ0ZvdXJcXFwiIG5nLXNob3c9XFxcInZtLnNob3dGb3VyXFxcIj48ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj5SYW5rLVggcHJvbW90b3JzIGFyZSBwZW9wbGUgd29ya2luZyBhcyBpbmRlcGVuZGVudCBjb250cmFjdG9ycyB0aGF0IGhlbHAgdXMgcHJvbW90ZSwgYWR2ZXJ0aXNlIGFuZCBnaXZlIGZlZWRiYWNrIGFib3V0IHRoZSBhcHBsaWNhdGlvbi4gVGhlIHN1Y2Nlc3Mgb2YgUmFuay1YIHdpbGwgZGVwZW5kIHN0cm9uZ2x5IG9uIGl0cyBhYmlsaXR5IHRvIHNwcmVhZCB0aGUgd29yZCBvdXQgYWJvdXQgaXRzIGV4c2l0YW5jZSB0byBidXNpbmVzc2VzIGFuZCB0byBnZXQgYnVzaW5lc3MgdG8gc3Vic2NyaWJlIHRvIFJhbmstWCB0byBhZHZlcnRpc2UgdGhlaXIgc3BlY2lhbHMgYW5kIHByb21vdGlvbnMuIFRodXMsIFJhbmstWCBwcm9tb3RvcnMgaGF2ZSB0aHJlZSBiYXNpYyByZXNwb25zaWJpbGl0aWVzLjwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPjEuIEJlY29tZSBmYW1pbGlhciB3aXRoIHRoZSBhcHAuPC9zdHJvbmc+IFJhbmstWCBQcm9tb3RvcnMgYXJlIGV4cGVjdGVkIHRvIHVuZGVyc3RhbmQgdGhlIHdvcmtpbmcgb2YgdGhlIGFwcGxpY2F0aW9uLCB0byBwYXJ0aWNpcGF0ZSByZWd1bGFybHkgaW4gdGhlIHJhbmtpbmdzLCBhZGQgY29udGVudCBhbmQgZG8gdGhlaXIgYmVzdCBzbyB0aGUgY29udGVudCBvZiB0aGUgYXBwbGljYXRpb24gaXMgYWx3YXlzIGVuZ2FnaW5nLCBhY2N1cmF0ZSBhbmQgdXNlZnVsLjwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPjIuIE1hcmtldCB0aGUgYXBwbGljYXRpb24uPC9zdHJvbmc+IFJhbmstWCBQcm9tb3RvcnMgYXJlIGV4cGVjdGVkIHRvIGNvbm5lY3Qgd2l0aCBidXNpbmVzcyBvd25lcnMgaW4gdGhlaXIgYXJlYSBzaG93IHRoZSB2YWx1ZSB0aGF0IFJhbmstWCBjYW4gaGF2ZSBpbiB0aGVpciBidXNzaW5lc3MuIFRoZSBhbW91bnQgb2YgbW9uZXkgZWFybmVkIGJ5IGEgUmFuay1YIHByb21vdGVyIHdpbGwgYmUgZGlyZWN0bHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBhbW91bnQgb2YgYnVzaW5lc3NlcyB0aGV5IGdldCB0byBzaWduIHVwLjwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPjMuIFByb3ZpZGUgY29uc3RhbnQgRmVlZGJhY2suPC9zdHJvbmc+IFJhbmstWCBQcm9tb3RvcnMgYXJlIGV4cGVjdGVkIHRvIHByb3ZpZGUgZmVlZGJhY2sgb2YgdGhlIHdvcmtpbmdzIG9mIHRoZSBhcHAgc28gaXQgY2FuIGJlIGNvbnRpbnVhbGx5IGltcHJvdmVkLiBCeSBrZWVwaW5nIHRoZSBhcHBsaWNhdGlvbiBydW5uaW5nIHNtb290aGx5LCB3aXRoIGhlbHAgY3VzdG9tZXIgcmV0ZW50aW9uIGFuZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzLT1cXFwiXFxcIiBcXFwiY2FyZFxcXCI9XFxcIlxcXCI+PGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiIHJvbGU9XFxcInRhYlxcXCIgaWQ9XFxcImhlYWRpbmdGaXZlXFxcIiBuZy1jbGljaz1cXFwidm0uc2hvdyg1KVxcXCI+PGgzIGNsYXNzPVxcXCJtYi0wXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj48YSBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtcGFyZW50PVxcXCIjYWNjb3JkaW9uXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZUZpdmVcXFwiPldoYXQgYXJlIHRoZSBiZW5lZml0cyBvZiBiZWNvbWluZyBhIFJhbmstWCBQcm9tb3Rvcj88L2E+PC9oMz48L2Rpdj48ZGl2IGlkPVxcXCJjb2xsYXBzZUZpdmVcXFwiIGNsYXNzPVxcXCJjb2xsYXBzZSBzaG93XFxcIiByb2xlPVxcXCJ0YWJwYW5lbFxcXCIgYXJpYS1sYWJlbGxlZGJ5PVxcXCJoZWFkaW5nRml2ZVxcXCIgbmctc2hvdz1cXFwidm0uc2hvd0ZpdmVcXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPkFsbCBwYXltZW50cyB0byBwcm9tb3RvcnMgYXJlIHN0cmljdGx5IGJhc2VkIG9uIGNvbW1pc3Npb25zLiBSYW5rLVggb2ZmZXJzIGxhc3RpbmcgY29tbWlzc2lvbnMgb24gYWxsIGFjY291bnRzIHRoYXQgYSBSYW5rLVggcHJvbW90b3IgY2xvc2VzLiBBcyBsb25nIGFzIHRoZSBhY2NvdW50IHRoYXQgdGhlIHByb21vdGVyIGNsb3NlZCBhcmUgYWN0aXZlLCB0aGUgUHJvbW90b3Igd2lsbCBjb250aW51ZSByZWNlaXZpbmcgY29tbWlzc2lvbi4gVGhlcmUgaXMgbm8gbGltaXQgb24gaG93IG11Y2ggbW9uZXkgYSBwcm9tb3RvciBjYW4gbWFrZS48L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+Q29uc2lkZXIgdGhlIGV4YW1wbGUgb2YgYSBSYW5rLVggcHJvbW90ZXIgdGhhdCBjbG9zZXMgb25lIGJ1c2luZXNzIHBlciBtb250aCBhbmQgcmVjZWl2ZXMgJDMwIGNvbW1pc3Npb24gcGVyIGJ1c2luZXNzIChhY3R1YWwgY29tbWlzc2lvbiBtaWdodCB2YXJ5KS4gUHJvbW90ZXIgc2lnbiB1cHMgY29tZSB3aXRoIGEgNjAgZGF5cyBmcmVlIHRyaWFsIGZvciB0aGF0IGJ1c2luZXNzLiBBZnRlciBmcmVlIHRyaWFsIGV4cGlyZXMsIGFuZCBidXNpbmVzcyBzdGFydCBwYXlpbmcgc3Vic2NyaXB0aW9uLCBSYW5rLVggcHJvbW90ZXIgd2lsbCBnZXQgcGFpZCBjb21taXNzaW9uIGZvciB0aGF0IGFjY291bnQgYXMgc2hvd24gaW4gdGhlIHRhYmxlIGJlbG93LjwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWhvdmVyIGN1cnNvclxcXCI+PHRoZWFkPjx0cj48dGggYWxpZ249XFxcIm1pZGRsZVxcXCI+TW9udGg8L3RoPjx0aCBhbGlnbj1cXFwibWlkZGxlXFxcIj5BY2NudCAxPC90aD48dGggYWxpZ249XFxcIm1pZGRsZVxcXCI+QWNjbnQgMjwvdGg+PHRoIGFsaWduPVxcXCJtaWRkbGVcXFwiPkFjY250IDM8L3RoPjx0aCBhbGlnbj1cXFwibWlkZGxlXFxcIj5Db21taXNzaW9uPC90aD48L3RyPjwvdGhlYWQ+PHRib2R5IGFsaWduPVxcXCJtaWRkbGVcXFwiPjx0cj48dGQ+MXN0PC90ZD48dGQ+T24gdHJpYWw8L3RkPjx0ZD4tPC90ZD48dGQ+LTwvdGQ+PHRkPiQwLjAwPC90ZD48L3RyPjx0cj48dGQ+Mm5kPC90ZD48dGQ+T24gdHJpYWw8L3RkPjx0ZD5PbiB0cmlhbDwvdGQ+PHRkPi08L3RkPjx0ZD4kMC4wMDwvdGQ+PC90cj48dHI+PHRkPjNyZDwvdGQ+PHRkPkFjdGl2ZTwvdGQ+PHRkPk9uIHRyaWFsPC90ZD48dGQ+T24gdHJpYWw8L3RkPjx0ZD4kMzAuMDA8L3RkPjwvdHI+PHRyPjx0ZD40dGg8L3RkPjx0ZD5BY3RpdmU8L3RkPjx0ZD5BY3RpdmU8L3RkPjx0ZD5PbiB0cmlhbDwvdGQ+PHRkPiQ2MC4wMDwvdGQ+PC90cj48dHI+PHRkPjV0aDwvdGQ+PHRkPkFjdGl2ZTwvdGQ+PHRkPkFjdGl2ZTwvdGQ+PHRkPkFjdGl2ZTwvdGQ+PHRkPiQ5MC4wMDwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcy09XFxcIlxcXCIgXFxcImNhcmRcXFwiPVxcXCJcXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIiByb2xlPVxcXCJ0YWJcXFwiIGlkPVxcXCJoZWFkaW5nU2l4XFxcIiBuZy1jbGljaz1cXFwidm0uc2hvdyg2KVxcXCI+PGgzIGNsYXNzPVxcXCJtYi0wXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj48YSBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtcGFyZW50PVxcXCIjYWNjb3JkaW9uXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLWNvbnRyb2xzPVxcXCJjb2xsYXBzZU9uZVxcXCI+SG93IGRvIEkgYmVjb21lIGEgUmFuay1YIHByb21vdGVyPzwvYT48L2gzPjwvZGl2PjxkaXYgaWQ9XFxcImNvbGxhcHNlU2l4XFxcIiBjbGFzcz1cXFwiY29sbGFwc2Ugc2hvd1xcXCIgcm9sZT1cXFwidGFicGFuZWxcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiaGVhZGluZ1NpeFxcXCIgbmctc2hvdz1cXFwidm0uc2hvd1NpeFxcXCI+PGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+QmVjb21pbmcgYSBSYW5rLVggcHJvbW90ZXIgaXMgdmVyeSBzaW1wbGUuIE9ubHkgcmVxdWlyZW1lbnQgaXMgdGhhdCB5b3UgbXVzdCBoYXZlIGFuIGFjdGl2ZSBGYWNlYm9vayBhY2NvdW50LiBUaGVyZSBpcyBubyBjb3N0IHRvIGJlY29taW5nIGEgcHJvbW90ZXIsIGl0cyBjb21wbGV0ZWx5IGZyZWUuIFRvIGJlZ2luLCBsb2dpbiB0byBSYW5rLVggdXNpbmcgeW91ciBGYWNlYm9vayBhY2NvdW50LiBPbmNlIHlvdSBhcmUgbG9nZ2VkIGluLCBjbGljayB0aGUgXFwnUHJvbW90ZVxcJyBsaW5rIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuIEl0IHdpbGwgcmVkaXJlY3QgeW91IHRvIHRoZSBQcm9tb3RlciBDb25zb2xlLCB3aGVyZSB5b3Ugd2lsbCBiZSBhc2tlZCB0byBmaWxsIGluIGEgZm9ybSBhbmQgeW91IHdpbGwgZ2V0IHlvdXIgUHJvbW90ZXIgQ29kZSByaWdodCBhd2F5LjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PHAgY2xhc3M9XFxcInRleHQtbXV0ZWRcXFwiPlJhbmstWCBpcyBwcm9wZXJ0eSBvZiBSYW5rLVggTExDLiBTYW4gRGllZ28sIENBIC0gMjAxNjwvcD48L2Rpdj48L2Zvb3Rlcj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvcHJvbW90ZXJzL1BhcnRpYWxzL3Byb21vdGVyY29uc29sZS5odG1sXCIsXCI8ZGl2IGlkPVxcXCJ2ZWlsXFxcIiBuZy1oaWRlPVxcXCJ2bS5kYXRhUmVhZHlcXFwiPjwvZGl2PjxkaXYgaWQ9XFxcImZlZWRMb2FkaW5nXFxcIiBuZy1oaWRlPVxcXCJ2bS5kYXRhUmVhZHlcXFwiPjxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlclxcXCIgbmctaWY9XFxcIiF2bS5kYXRhUmVhZHlcXFwiPjxkaXY+PGltZyBzcmM9XFxcIi9hc3NldHMvaW1hZ2VzL2xvYWRpbmcuZ2lmXFxcIiBjbGFzcz1cXFwiaW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDtoZWlnaHQ6NTBweFxcXCI+PC9kaXY+PHAgc3R5bGU9XFxcImZvbnQtc2l6ZTpsYXJnZVxcXCI+bG9hZGluZyB5b3VyIGFjY291bnRzLi4uPC9wPjwvZGl2PjwvZGl2PjxkaXYgbmctaWY9XFxcInZtLmRhdGFSZWFkeVxcXCI+PGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj48aDM+UHJvbW90ZXIgQ29uc29sZTwvaDM+PGRpdiBuZy1pZj1cXFwidm0udXNlcklzUHJvbW90ZXJcXFwiPjxoNCBhbGlnbj1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj5BY2NvdW50IEluZm9ybWF0aW9uPC9oND48ZGl2IG5nLWlmPVxcXCIhdm0ucHJvbW90ZXIuc3RyaXBlaWRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O2JhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDtib3JkZXItcmFkaXVzOiAxMHB4O3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHhcXFwiPllvdSBzaG91bGQgbGluayB5b3VyIHN0cmlwZSBhY2NvdW50IHRvIGdldCBwYXllZC4gPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLmNvbm5lY3RTdHJpcGUoKVxcXCI+Q29ubmVjdCB3aXRoIFN0cmlwZTwvYT48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ2bS5ub3RpZmljYXRpb25zLmxlbmd0aCAhPSAwXFxcIj48bm90aWZpY2F0aW9uLWJsb2NrIG5vdGlmaWNhdGlvbnM9XFxcInZtLm5vdGlmaWNhdGlvbnNcXFwiPjwvbm90aWZpY2F0aW9uLWJsb2NrPjwvZGl2PjxwIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPjxzdHJvbmc+Rmlyc3QgTmFtZTo8L3N0cm9uZz4mbmJzcHt7dm0ucHJvbW90ZXIuZmlyc3RuYW1lfX08L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+PHN0cm9uZz5MYXN0IE5hbWU6PC9zdHJvbmc+Jm5ic3B7e3ZtLnByb21vdGVyLmxhc3RuYW1lfX08L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4mbmJzcHt7dm0ucHJvbW90ZXIuZW1haWx9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+Jm5ic3B7e3ZtLnByb21vdGVyLmFkZHJlc3N9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPlBob25lIE51bWJlcjo8L3N0cm9uZz4mbmJzcHt7dm0ucHJvbW90ZXIucGhvbmV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPlByb21vdGVyIENvZGU6PC9zdHJvbmc+Jm5ic3B7e3ZtLnByb21vdGVyLmNvZGV9fTwvcD48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiByb2xlPVxcXCJncm91cFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0VkaXQoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+RWRpdDwvYnV0dG9uPjwvZGl2PjxoNCBhbGlnbj1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojYjNiM2IzO3BhZGRpbmc6NXB4XFxcIj5BY2NvdW50czwvaDQ+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcIiF2bS5ub0FucyYmdm0ub3ZlcnZpZXdcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPkJ1c2luZXNzIE5hbWU8L3RoPjx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlN0YXR1czwvdGg+PHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+Q29tbWlzc2lvbiAoYWZ0ZXIgdHJpYWwpPC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWFjY250c1xcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIG5nLWNsaWNrPVxcXCJ2bS5nb3RvYW5zd2VyKHguYW5zd2VyT2JqKVxcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIGFsaWduPVxcXCJtaWRkbGVcXFwiIG5nLWF0dHItc3R5bGU9XFxcInt7eC5zdHlsZX19XFxcIiBuZy1jbGljaz1cXFwidm0uZ290b21hbmFnZSh4KVxcXCI+e3t4LnN0YXR1c319PC90ZD48dGQgbmctY2xpY2s9XFxcInZtLmdvdG9tYW5hZ2UoeClcXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOnJpZ2h0XFxcIj4ke3t4LnRvdGFsQ29tbWlzc2lvbn19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48ZGl2IG5nLWlmPVxcXCJ2bS5tYW5hZ2V2aWV3XFxcIj48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkJ1c2luZXNzIE5hbWU6PC9zdHJvbmc+Jm5ic3B7e3ZtLmJ1c2luZXNzLmFuc3dlck9iai5uYW1lfX08L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+PHN0cm9uZz5FbWFpbDo8L3N0cm9uZz4mbmJzcHt7dm0uYnVzaW5lc3MuZW1haWx9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPk93bmVyL0NvbnRhY3QgTmFtZTo8L3N0cm9uZz4mbmJzcHt7dm0uYnVzaW5lc3MudXNlcm5hbWV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkxhc3QgTmFtZTo8L3N0cm9uZz4mbmJzcHt7dm0ucHJvbW90ZXIubGFzdG5hbWV9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPlN0YXR1czo8L3N0cm9uZz48c3BhbiBhbGlnbj1cXFwibWlkZGxlXFxcIiBuZy1hdHRyLXN0eWxlPVxcXCJ7e3guc3R5bGV9fVxcXCI+e3t4LmJ1c2luZXNzLnN0YXR1c319PC9zcGFuPjwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYnVzaW5lc3Muc3RhdHVzPT1cXCdBY3RpdmVcXCdcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBzdHlsZT1cXFwid2lkdGg6NDUlXFxcIiB0ZXh0LWFsaWduPVxcXCJjZW50ZXJcXFwiPlN1YnNjcmlwdGlvbjwvdGg+PHRoIHN0eWxlPVxcXCJ3aWR0aDoxNSVcXFwiIHRleHQtYWxpZ249XFxcImNlbnRlclxcXCI+Q29tbWlzc2lvbjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1pZj1cXFwidm0uYnVzaW5lc3MuaXNwcmVtaXVtXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjQ1JVxcXCI+UHJlbWl1bSBNZW1iZXJzaGlwPC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCI+JHt7dm0uYnVzaW5lc3MucHJpY2Uqdm0uU1RSSVBFX0NPTU1JU1NJT05fUEVSQ0VOVEFHRX19PC90ZD48L3RyPjx0ciBuZy1pZj1cXFwidm0uYnVzaW5lc3MuaGFzcmFua3NcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NDUlXFxcIj57e3ZtLmJ1c2luZXNzLnJhbmtzcXR5fX0gQ3VzdG9tIFJhbmtzPC90ZD48dGQgc3R5bGU9XFxcIndpZHRoOjE1JVxcXCI+JHt7dm0uYnVzaW5lc3MucmFua3NxdHkqdm0uQ1VTVE9NX1JBTktfUFJJQ0Uqdm0uU1RSSVBFX0NPTU1JU1NJT05fUEVSQ0VOVEFHRX19PC90ZD48L3RyPjx0cj48dGQgc3R5bGU9XFxcIndpZHRoOjQ1JVxcXCI+VG90YWw8L3RkPjx0ZCBzdHlsZT1cXFwid2lkdGg6MTUlOyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXFwiPiR7e3ZtLmJ1c2luZXNzLnRvdGFsQ29tbWlzc2lvbn19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L3A+PHAgY2xhc3M9XFxcInRleHQtbGVmdFxcXCIgbmctaWY9XFxcInZtLmJ1c2luZXNzLnN0YXR1cy5pbmRleE9mKFxcJ09uIFRyaWFsXFwnKSAhPSAtMVxcXCI+V2lsbCBiZSBhY3RpdmUgZnJvbSB7e3ZtLmJ1c2luZXNzLmRpc2NvdW50RW5kRGF0ZX19LjwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+Jm5ic3B7e3ZtLnByb21vdGVyLmFkZHJlc3N9fTwvcD48cCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48c3Ryb25nPlBob25lIE51bWJlcjo8L3N0cm9uZz4mbmJzcHt7dm0ucHJvbW90ZXIucGhvbmV9fTwvcD48L2Rpdj48ZGl2IG5nLWlmPVxcXCJ2bS5ub0Fuc1xcXCI+PGJyPjxwPk5vIGJ1c2luZXNzZXMgaGF2ZSBzaWduZWQgdXAgdXNpbmcgeW91ciBwcm9tb3RlciBjb2RlLiBGb3IgdGlwcyBhbmQgc3VnZ2VzdGlvbnMgb24gaG93IHRvIGdldCBidXNpbmVzc2VzIHRvIHNpZ24gdXAgdXNpbmcgeW91ciBwcm9tb3RlciBjb2RlIDxhIGhyZWY9XFxcIlxcXCIgbmctY2xpY2s9XFxcInZtLmdvdG9Qcm9tb3RlUGFnZSgpXFxcIj5jbGljayBoZXJlPC9hPi48L3A+PC9kaXY+PC9kaXY+PGRpdiBuZy1pZj1cXFwiIXZtLnVzZXJJc1Byb21vdGVyXFxcIj48cD5Zb3UgYXJlIGN1cnJlbnRseSBub3QgcmVnaXN0ZXJlZCB0byBiZSBhIFByb21vdGVyLiBSYW5rLVggcHJvbW90ZXJzIGhlbHAgc3ByZWFkIHRoZSB3b3JkIG91dCBhYm91dCB0aGUgYXBwIHRvIGxvY2FsIGJ1c2luZXNzZXMsIGFzIHdlbGwgYXMgbW9uaXRvcmluZyB0aGUgYWNjdXJhY3kgb2YgY29udGVudCBvZiB0aGUgYXBwbGljYXRpb24uIEluIGV4Y2hhbmdlLCBwcm9tb3RlcnMgZ2V0IHBhaWQgbW9udGhseSBjb21taXNzaW9ucyBvbiBhbGwgYnVzaW5lc3NlcyBhY2NvdW50cyB0aGV5IGJyaW5nIHRvIFJhbmstWC48L3A+PGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uZ29TaWdudXAoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCI+U2lnbiBVcDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctY2xpY2s9XFxcInZtLmdvdG9Qcm9tb3RlUGFnZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5MZWFybiBNb3JlPC9idXR0b24+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJhcHAvcHJvbW90ZXJzL1BhcnRpYWxzL3Byb21vdGVyc2lnbnVwLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+PGgzPlByb21vdGVyIFNpZ24gVXA8L2gzPjxicj48Zm9ybSBjbGFzcz1cXFwiZm9ybS1ob3Jpem9udGFsXFxcIiByb2xlPVxcXCJmb3JtXFxcIiBuYW1lPVxcXCJhbnN3ZXJGb3JtXFxcIj48ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj48bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY2FwaXRhbGl6ZVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDoxMHB4XFxcIj5GaXJzdCBOYW1lOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0ucHJvbW90ZXIuZmlyc3RuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5wcm9tb3Rlci5maXJzdG5hbWV9fVxcXCIgc3R5bGU9XFxcIndpZHRoOjk0JTttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O1xcXCI+IDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjYXBpdGFsaXplXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OjEwcHhcXFwiPkxhc3QgTmFtZTo8L2xhYmVsPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmctbW9kZWw9XFxcInZtLnByb21vdGVyLmxhc3RuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwie3t2bS5wcm9tb3Rlci5sYXN0bmFtZX19XFxcIiBzdHlsZT1cXFwid2lkdGg6OTQlO21hcmdpbi1sZWZ0OjEwcHg7bWFyZ2luLXJpZ2h0OjEwcHg7XFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJjb250cm9sLWxhYmVsIGNhcGl0YWxpemVcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6MTBweFxcXCI+RW1haWw6PC9sYWJlbD4gPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5nLW1vZGVsPVxcXCJ2bS5wcm9tb3Rlci5lbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgZW1haWwgYWRkcmVzc1xcXCIgc3R5bGU9XFxcIndpZHRoOjk0JTttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O1xcXCI+IDxsYWJlbCBjbGFzcz1cXFwiY29udHJvbC1sYWJlbCBjYXBpdGFsaXplXFxcIiBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OjEwcHhcXFwiPlBob25lOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0ucHJvbW90ZXIucGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCIxMjMtMTIzLTEyMzRcXFwiIHN0eWxlPVxcXCJ3aWR0aDo5NCU7bWFyZ2luLWxlZnQ6MTBweDttYXJnaW4tcmlnaHQ6MTBweDtcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImNvbnRyb2wtbGFiZWwgY2FwaXRhbGl6ZVxcXCIgc3R5bGU9XFxcInBhZGRpbmctbGVmdDoxMHB4XFxcIj5BZGRyZXNzOjwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuZy1tb2RlbD1cXFwidm0ucHJvbW90ZXIuYWRkcmVzc1xcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgYWRkcmVzc1xcXCIgc3R5bGU9XFxcIndpZHRoOjk0JTttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDoxMHB4O1xcXCI+PC9kaXY+PGxhYmVsIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmctbW9kZWw9XFxcInZtLmFjY2VwdFRPU1xcXCIgdmFsdWU9XFxcIlxcXCI+SSBoYXZlIHJlYWQgYW5kIHVuZGVyc3Rvb2QgdGhlIDxhIG5nLWNsaWNrPVxcXCJ2bS5zaG93VE9TUHJvbW90ZXJzRGxnKClcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPjwvbGFiZWw+PC9mb3JtPjxicj48ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPjxkaXYgY2xhc3M9XFxcImNvbC14cy0zIGNvbC1zbS0zIGNvbC1tZC0yXFxcIj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5nZXRjb2RlKClcXFwiPkdldCBDb2RlPC9idXR0b24+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiY29sLXhzLTkgY29sLXNtLTkgY29sLW1kLTEwXFxcIj48aDMgc3R5bGU9XFxcImNvbG9yOmJsdWU7IG1hcmdpbjoycHhcXFwiPnt7dm0uY29kZX19PC9oMz48L2Rpdj48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zdWJtaXQoKVxcXCIgbmctY2xhc3M9XFxcInZtLmFjY2VwdFRPUyA/IFxcJ1xcJyA6IFxcJ2Rpc2FibGVkXFwnXFxcIj5TdWJtaXQ8L2J1dHRvbj48L2Rpdj48YnI+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYXBwL3VzZXIvUGFydGlhbHMvZmF2cy5odG1sXCIsXCI8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCI+PGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPjxhIGRhdGEtdG9nZ2xlPVxcXCJ0YWJcXFwiIGhyZWY9XFxcIiNteWZhdnNcXFwiPk15IEZhdm9yaXRlczwvYT48L2xpPjxsaT48YSBkYXRhLXRvZ2dsZT1cXFwidGFiXFxcIiBocmVmPVxcXCIjbXlmcmllbmRzXFxcIj5NeSBGcmllbmRzPC9hPjwvbGk+PC91bD48ZGl2IGNsYXNzPVxcXCJ0YWItY29udGVudFxcXCI+PGRpdiBpZD1cXFwibXlmYXZzXFxcIiBjbGFzcz1cXFwidGFiLXBhbmUgZmFkZSBpbiBhY3RpdmVcXFwiPjxkaXYgbmctY29udHJvbGxlcj1cXFwibXlmYXZzIGFzIHZtXFxcIj48aDM+TXkgRmF2b3JpdGVzPC9oMz48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3QyXFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzJ9fTtjb2xvcjp7e3ZtLmZjMn19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmUyfX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMn19O2NvbG9yOnt7dm0uZmMyfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWxpZmVzdHlsZWFucyB8IGxpbWl0VG86dm0ubWF4UmVzMlxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCgyLHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoMilcXFwiIG5nLWlmPVxcXCJ2bS5jYjJndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDJ9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDFcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMX19O2NvbG9yOnt7dm0uZmMxfX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTF9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MxfX07Y29sb3I6e3t2bS5mYzF9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15Zm9vZGFucyB8IGxpbWl0VG86dm0ubWF4UmVzMVxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCgxLHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoMSlcXFwiIG5nLWlmPVxcXCJ2bS5jYjFndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDF9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDNcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjM319O2NvbG9yOnt7dm0uZmMzfX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTN9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MzfX07Y29sb3I6e3t2bS5mYzN9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15c2VydmljZXNhbnMgfCBsaW1pdFRvOnZtLm1heFJlczNcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoMyx4KVxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7XFxcIj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDMpXFxcIiBuZy1pZj1cXFwidm0uY2IzZ3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQzfX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q0XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzR9fTtjb2xvcjp7e3ZtLmZjNH19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU0fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNH19O2NvbG9yOnt7dm0uZmM0fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWhlYWx0aGFucyB8IGxpbWl0VG86dm0ubWF4UmVzNFxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCg0LHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoNClcXFwiIG5nLWlmPVxcXCJ2bS5jYjRndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDR9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDVcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNX19O2NvbG9yOnt7dm0uZmM1fX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTV9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M1fX07Y29sb3I6e3t2bS5mYzV9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15YmVhdXR5YW5zIHwgbGltaXRUbzp2bS5tYXhSZXM1XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDUseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSg1KVxcXCIgbmctaWY9XFxcInZtLmNiNWd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0NX19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0NlxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M2fX07Y29sb3I6e3t2bS5mYzZ9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lNn19PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzZ9fTtjb2xvcjp7e3ZtLmZjNn19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0ubXlzb2NpYWxhbnMgfCBsaW1pdFRvOnZtLm1heFJlczZcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoNix4KVxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7XFxcIj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDYpXFxcIiBuZy1pZj1cXFwidm0uY2I2Z3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQ2fX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q3XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzd9fTtjb2xvcjp7e3ZtLmZjN319O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU3fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjN319O2NvbG9yOnt7dm0uZmM3fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWZhbWlseWFucyB8IGxpbWl0VG86dm0ubWF4UmVzN1xcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCg3LHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoNylcXFwiIG5nLWlmPVxcXCJ2bS5jYjdndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDd9fSZndDsmZ3Q7PC9wPjxkaXYgbmctaWY9XFxcInZtLm5vQW5zXFxcIj48YnI+PHA+WW91IGhhdmUgbm90IGVuZG9yc2VkIGFueSBFc3RhYmxpc2htZW50cyB5ZXQuIFBsYWNlcyB0aGF0IHlvdSBlbmRvcnNlIHdpbGwgc2hvdyB1cCBoZXJlIHNvIHlvdSBjYW4gaGF2ZSBxdWljayBhY2Nlc3MgdG8gYWxsIHRoZWlyIHNwZWNpYWxzIGFuZCBwcm9tb3Rpb25zLjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiByb2xlPVxcXCJncm91cFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgaWQ9XFxcIm15ZnJpZW5kc1xcXCIgY2xhc3M9XFxcInRhYi1wYW5lIGZhZGVcXFwiPjxkaXYgbmctY29udHJvbGxlcj1cXFwibXlmcmllbmRzIGFzIHZtXFxcIj48aDM+TXkgRnJpZW5kc1xcJyBGYXZvcml0ZXM8L2gzPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDJcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMn19O2NvbG9yOnt7dm0uZmMyfX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTJ9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MyfX07Y29sb3I6e3t2bS5mYzJ9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMn19O2NvbG9yOnt7dm0uZmMyfX07d2lkdGg6NTAlO1xcXCI+PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzJ9fTtjb2xvcjp7e3ZtLmZjMn19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0ubGlmZXN0eWxlYW5zIHwgbGltaXRUbzp2bS5tYXhSZXMyIHRyYWNrIGJ5ICRpbmRleFxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7bGluZS1oZWlnaHQ6IDM1cHhcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoMix4KVxcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48dGQ+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2JqcyB8IGxpbWl0VG86MVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48aW1nIG5nLXNyYz1cXFwie3t1c2VyT2JqLnBpY3R1cmUuZGF0YS51cmx9fVxcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGUgcHJvZmlsZS1hdmF0YXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjwvZGl2PjwvdGQ+PHRkIHN0eWxlPVxcXCJsaW5lLWhlaWdodDogMzVweFxcXCI+PGRpdiBuZy1zaG93PVxcXCJ4LnVzZXJPYmpzLmxlbmd0aCA+IDFcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxzcGFuIGNsYXNzPVxcXCJiYWRnZSBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIj57e3gudXNlck9ianMubGVuZ3RofX08L3NwYW4+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSgyKVxcXCIgbmctaWY9XFxcInZtLmNiMmd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0Mn19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0MVxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MxfX07Y29sb3I6e3t2bS5mYzF9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lMX19PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzF9fTtjb2xvcjp7e3ZtLmZjMX19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MxfX07Y29sb3I6e3t2bS5mYzF9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMX19O2NvbG9yOnt7dm0uZmMxfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5mb29kYW5zIHwgbGltaXRUbzp2bS5tYXhSZXMxIHRyYWNrIGJ5ICRpbmRleFxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7bGluZS1oZWlnaHQ6IDM1cHhcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoMSx4KVxcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48dGQ+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2JqcyB8IGxpbWl0VG86MVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48aW1nIG5nLXNyYz1cXFwie3t1c2VyT2JqLnBpY3R1cmUuZGF0YS51cmx9fVxcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGUgcHJvZmlsZS1hdmF0YXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjwvZGl2PjwvdGQ+PHRkIHN0eWxlPVxcXCJsaW5lLWhlaWdodDogMzVweFxcXCI+PGRpdiBuZy1zaG93PVxcXCJ4LnVzZXJPYmpzLmxlbmd0aCA+IDFcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxzcGFuIGNsYXNzPVxcXCJiYWRnZSBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIj57e3gudXNlck9ianMubGVuZ3RofX08L3NwYW4+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSgxKVxcXCIgbmctaWY9XFxcInZtLmNiMWd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0MX19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0M1xcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MzfX07Y29sb3I6e3t2bS5mYzN9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lM319PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzN9fTtjb2xvcjp7e3ZtLmZjM319O3dpZHRoOjUwJTtcXFwiPjwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MzfX07Y29sb3I6e3t2bS5mYzN9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjM319O2NvbG9yOnt7dm0uZmMzfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5zZXJ2aWNlc2FucyB8IGxpbWl0VG86dm0ubWF4UmVzMyB0cmFjayBieSAkaW5kZXhcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO2xpbmUtaGVpZ2h0OiAzNXB4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDMseClcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PHRkPjxkaXYgY2xhc3M9XFxcInByb2ZpbGUtYXZhdGFyLXdyYXBwZXIgbWVkaWEtbGVmdFxcXCIgbmctcmVwZWF0PVxcXCJ1c2VyT2JqIGluIHgudXNlck9ianMgfCBsaW1pdFRvOjFcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93QWxsRnJpZW5kc0xpc3QoeC51c2VyT2JqcywgeC5uYW1lKVxcXCIgYWxpZ249XFxcIm1pZGRsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj48L3RkPjx0ZCBzdHlsZT1cXFwibGluZS1oZWlnaHQ6IDM1cHhcXFwiPjxkaXYgbmctc2hvdz1cXFwieC51c2VyT2Jqcy5sZW5ndGggPiAxXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93QWxsRnJpZW5kc0xpc3QoeC51c2VyT2JqcywgeC5uYW1lKVxcXCI+e3t4LnVzZXJPYmpzLmxlbmd0aH19PC9zcGFuPjwvZGl2PjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoMylcXFwiIG5nLWlmPVxcXCJ2bS5jYjNndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDN9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDRcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNH19O2NvbG9yOnt7dm0uZmM0fX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTR9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M0fX07Y29sb3I6e3t2bS5mYzR9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNH19O2NvbG9yOnt7dm0uZmM0fX07d2lkdGg6NTAlO1xcXCI+PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzR9fTtjb2xvcjp7e3ZtLmZjNH19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0uaGVhbHRoYW5zIHwgbGltaXRUbzp2bS5tYXhSZXM0IHRyYWNrIGJ5ICRpbmRleFxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7bGluZS1oZWlnaHQ6IDM1cHhcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoNCx4KVxcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48dGQ+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2JqcyB8IGxpbWl0VG86MVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48aW1nIG5nLXNyYz1cXFwie3t1c2VyT2JqLnBpY3R1cmUuZGF0YS51cmx9fVxcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGUgcHJvZmlsZS1hdmF0YXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjwvZGl2PjwvdGQ+PHRkIHN0eWxlPVxcXCJsaW5lLWhlaWdodDogMzVweFxcXCI+PGRpdiBuZy1zaG93PVxcXCJ4LnVzZXJPYmpzLmxlbmd0aCA+IDFcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxzcGFuIGNsYXNzPVxcXCJiYWRnZSBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIj57e3gudXNlck9ianMubGVuZ3RofX08L3NwYW4+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSg0KVxcXCIgbmctaWY9XFxcInZtLmNiNGd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0NH19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0NVxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M1fX07Y29sb3I6e3t2bS5mYzV9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lNX19PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzV9fTtjb2xvcjp7e3ZtLmZjNX19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M1fX07Y29sb3I6e3t2bS5mYzV9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNX19O2NvbG9yOnt7dm0uZmM1fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5iZWF1dHlhbnMgfCBsaW1pdFRvOnZtLm1heFJlczUgdHJhY2sgYnkgJGluZGV4XFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtsaW5lLWhlaWdodDogMzVweFxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCg1LHgpXFxcIj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjx0ZD48ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWF2YXRhci13cmFwcGVyIG1lZGlhLWxlZnRcXFwiIG5nLXJlcGVhdD1cXFwidXNlck9iaiBpbiB4LnVzZXJPYmpzIHwgbGltaXRUbzoxXFxcIiBuZy1jbGljaz1cXFwidm0uc2hvd0FsbEZyaWVuZHNMaXN0KHgudXNlck9ianMsIHgubmFtZSlcXFwiIGFsaWduPVxcXCJtaWRkbGVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxpbWcgbmctc3JjPVxcXCJ7e3VzZXJPYmoucGljdHVyZS5kYXRhLnVybH19XFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZSBwcm9maWxlLWF2YXRhclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PC9kaXY+PC90ZD48dGQgc3R5bGU9XFxcImxpbmUtaGVpZ2h0OiAzNXB4XFxcIj48ZGl2IG5nLXNob3c9XFxcIngudXNlck9ianMubGVuZ3RoID4gMVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJ0bi1wcmltYXJ5XFxcIiBuZy1jbGljaz1cXFwidm0uc2hvd0FsbEZyaWVuZHNMaXN0KHgudXNlck9ianMsIHgubmFtZSlcXFwiPnt7eC51c2VyT2Jqcy5sZW5ndGh9fTwvc3Bhbj48L2Rpdj48L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDUpXFxcIiBuZy1pZj1cXFwidm0uY2I1Z3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQ1fX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q2XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzZ9fTtjb2xvcjp7e3ZtLmZjNn19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU2fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNn19O2NvbG9yOnt7dm0uZmM2fX07d2lkdGg6NTAlO1xcXCI+PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzZ9fTtjb2xvcjp7e3ZtLmZjNn19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M2fX07Y29sb3I6e3t2bS5mYzZ9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLnNvY2lhbGFucyB8IGxpbWl0VG86dm0ubWF4UmVzNlxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7bGluZS1oZWlnaHQ6IDM1cHhcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoNix4KVxcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48dGQ+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2JqcyB8IGxpbWl0VG86MVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48aW1nIG5nLXNyYz1cXFwie3t1c2VyT2JqLnBpY3R1cmUuZGF0YS51cmx9fVxcXCIgY2xhc3M9XFxcImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGUgcHJvZmlsZS1hdmF0YXJcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjwvZGl2PjwvdGQ+PHRkIHN0eWxlPVxcXCJsaW5lLWhlaWdodDogMzVweFxcXCI+PGRpdiBuZy1zaG93PVxcXCJ4LnVzZXJPYmpzLmxlbmd0aCA+IDFcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxzcGFuIGNsYXNzPVxcXCJiYWRnZSBidG4tcHJpbWFyeVxcXCIgbmctY2xpY2s9XFxcInZtLnNob3dBbGxGcmllbmRzTGlzdCh4LnVzZXJPYmpzLCB4Lm5hbWUpXFxcIj57e3gudXNlck9ianMubGVuZ3RofX08L3NwYW4+PC9kaXY+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSg2KVxcXCIgbmctaWY9XFxcInZtLmNiNmd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0Nn19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0N1xcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M3fX07Y29sb3I6e3t2bS5mYzd9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lN319PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzd9fTtjb2xvcjp7e3ZtLmZjN319O3dpZHRoOjUwJTtcXFwiPjwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M3fX07Y29sb3I6e3t2bS5mYzd9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjN319O2NvbG9yOnt7dm0uZmM3fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5mYW1pbHlhbnMgfCBsaW1pdFRvOnZtLm1heFJlczdcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO2xpbmUtaGVpZ2h0OiAzNXB4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDcseClcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PHRkPjxkaXYgY2xhc3M9XFxcInByb2ZpbGUtYXZhdGFyLXdyYXBwZXIgbWVkaWEtbGVmdFxcXCIgbmctcmVwZWF0PVxcXCJ1c2VyT2JqIGluIHgudXNlck9ianMgfCBsaW1pdFRvOjFcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93QWxsRnJpZW5kc0xpc3QoeC51c2VyT2JqcywgeC5uYW1lKVxcXCIgYWxpZ249XFxcIm1pZGRsZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj48L3RkPjx0ZCBzdHlsZT1cXFwibGluZS1oZWlnaHQ6IDM1cHhcXFwiPjxkaXYgbmctc2hvdz1cXFwieC51c2VyT2Jqcy5sZW5ndGggPiAxXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYnRuLXByaW1hcnlcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zaG93QWxsRnJpZW5kc0xpc3QoeC51c2VyT2JqcywgeC5uYW1lKVxcXCI+e3t4LnVzZXJPYmpzLmxlbmd0aH19PC9zcGFuPjwvZGl2PjwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoNylcXFwiIG5nLWlmPVxcXCJ2bS5jYjdndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDd9fSZndDsmZ3Q7PC9wPjxkaXYgbmctaWY9XFxcInZtLm5vQW5zXFxcIj48YnI+PHA+WW91IGhhdmUgbm90IGVuZG9yc2VkIGFueSBFc3RhYmxpc2htZW50cyB5ZXQuIFBsYWNlcyB0aGF0IHlvdSBlbmRvcnNlIHdpbGwgc2hvdyB1cCBoZXJlIHNvIHlvdSBjYW4gaGF2ZSBxdWljayBhY2Nlc3MgdG8gYWxsIHRoZWlyIHNwZWNpYWxzIGFuZCBwcm9tb3Rpb25zLjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiByb2xlPVxcXCJncm91cFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC91c2VyL1BhcnRpYWxzL215ZmF2cy5odG1sXCIsXCI8aDM+TXkgRmF2b3JpdGVzPC9oMz48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3QyXFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzJ9fTtjb2xvcjp7e3ZtLmZjMn19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmUyfX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMn19O2NvbG9yOnt7dm0uZmMyfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWxpZmVzdHlsZWFucyB8IGxpbWl0VG86dm0ubWF4UmVzMlxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCgyLHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoMilcXFwiIG5nLWlmPVxcXCJ2bS5jYjJndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDJ9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDFcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMX19O2NvbG9yOnt7dm0uZmMxfX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTF9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MxfX07Y29sb3I6e3t2bS5mYzF9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15Zm9vZGFucyB8IGxpbWl0VG86dm0ubWF4UmVzMVxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCgxLHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoMSlcXFwiIG5nLWlmPVxcXCJ2bS5jYjFndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDF9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDNcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjM319O2NvbG9yOnt7dm0uZmMzfX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTN9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MzfX07Y29sb3I6e3t2bS5mYzN9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15c2VydmljZXNhbnMgfCBsaW1pdFRvOnZtLm1heFJlczNcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoMyx4KVxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7XFxcIj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDMpXFxcIiBuZy1pZj1cXFwidm0uY2IzZ3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQzfX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q0XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzR9fTtjb2xvcjp7e3ZtLmZjNH19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU0fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNH19O2NvbG9yOnt7dm0uZmM0fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWhlYWx0aGFucyB8IGxpbWl0VG86dm0ubWF4UmVzNFxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCg0LHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoNClcXFwiIG5nLWlmPVxcXCJ2bS5jYjRndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDR9fSZndDsmZ3Q7PC9wPjx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiIG5nLWlmPVxcXCJ2bS5hbnN3ZXJFeGlzdDVcXFwiPjx0Ym9keT48dGhlYWQgc3R5bGU9XFxcImJvcmRlci1zdHlsZTpub25lO1xcXCI+PHRyPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNX19O2NvbG9yOnt7dm0uZmM1fX07d2lkdGg6NTAlO1xcXCI+e3t2bS5oZWFkbGluZTV9fTwvdGg+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M1fX07Y29sb3I6e3t2bS5mYzV9fTt3aWR0aDo1MCU7XFxcIj48L3RoPjwvdHI+PC90aGVhZD48dHIgbmctcmVwZWF0PVxcXCJ4IGluIHZtLm15YmVhdXR5YW5zIHwgbGltaXRUbzp2bS5tYXhSZXM1XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDUseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSg1KVxcXCIgbmctaWY9XFxcInZtLmNiNWd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0NX19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0NlxcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2M2fX07Y29sb3I6e3t2bS5mYzZ9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lNn19PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzZ9fTtjb2xvcjp7e3ZtLmZjNn19O3dpZHRoOjUwJTtcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0ubXlzb2NpYWxhbnMgfCBsaW1pdFRvOnZtLm1heFJlczZcXFwiIG5nLWNsaWNrPVxcXCJ2bS5hbnN3ZXJEZXRhaWwoNix4KVxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyO1xcXCI+PHRkIHN0eWxlPVxcXCJ3aWR0aDo1MCU7XFxcIj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDYpXFxcIiBuZy1pZj1cXFwidm0uY2I1Z3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQ2fX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q3XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzd9fTtjb2xvcjp7e3ZtLmZjN319O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU3fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjN319O2NvbG9yOnt7dm0uZmM3fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5teWZhbWlseWFucyB8IGxpbWl0VG86dm0ubWF4UmVzN1xcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCg3LHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPnt7eC5uYW1lfX08L3RkPjx0ZCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7eC5zcF9iY319O2NvbG9yOnt7eC5zcF9mY319XFxcIj57e3guc3BfdGl0bGV9fTwvdGQ+PC90cj48L3Rib2R5PjwvdGFibGU+PHAgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIHN0eWxlPVxcXCJjb2xvcjpibHVlO1xcXCIgbmctY2xpY2s9XFxcInZtLnNlZU1vcmUoNylcXFwiIG5nLWlmPVxcXCJ2bS5jYjVndDVcXFwiPiZsdDsmbHQ7e3t2bS5idGV4dDd9fSZndDsmZ3Q7PC9wPjxkaXYgbmctaWY9XFxcInZtLm5vQW5zXFxcIj48YnI+PHA+WW91IGhhdmUgbm90IGVuZG9yc2VkIGFueSBFc3RhYmxpc2htZW50cyB5ZXQuIFBsYWNlcyB0aGF0IHlvdSBlbmRvcnNlIHdpbGwgc2hvdyB1cCBoZXJlIHNvIHlvdSBjYW4gaGF2ZSBxdWljayBhY2Nlc3MgdG8gYWxsIHRoZWlyIHNwZWNpYWxzIGFuZCBwcm9tb3Rpb25zLjwvcD48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiByb2xlPVxcXCJncm91cFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIG5nLWNsaWNrPVxcXCJ2bS5nb0JhY2soKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+QmFjazwvYnV0dG9uPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcImFwcC91c2VyL1BhcnRpYWxzL215ZnJpZW5kcy5odG1sXCIsXCI8aDM+TXkgRmF2b3JpdGVzPC9oMz48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3QyXFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzJ9fTtjb2xvcjp7e3ZtLmZjMn19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmUyfX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMn19O2NvbG9yOnt7dm0uZmMyfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5saWZlc3R5bGVhbnMgfCBsaW1pdFRvOnZtLm1heFJlczIgdHJhY2sgYnkgJGluZGV4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDIseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2Jqc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDIpXFxcIiBuZy1pZj1cXFwidm0uY2IyZ3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQyfX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3QxXFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzF9fTtjb2xvcjp7e3ZtLmZjMX19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmUxfX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjMX19O2NvbG9yOnt7dm0uZmMxfX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5mb29kYW5zIHwgbGltaXRUbzp2bS5tYXhSZXMxIHRyYWNrIGJ5ICRpbmRleFxcXCIgbmctY2xpY2s9XFxcInZtLmFuc3dlckRldGFpbCgxLHgpXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXI7XFxcIj48dGQgc3R5bGU9XFxcIndpZHRoOjUwJTtcXFwiPjxkaXYgY2xhc3M9XFxcInByb2ZpbGUtYXZhdGFyLXdyYXBwZXIgbWVkaWEtbGVmdFxcXCIgbmctcmVwZWF0PVxcXCJ1c2VyT2JqIGluIHgudXNlck9ianNcXFwiIGFsaWduPVxcXCJtaWRkbGVcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OiBpbmxpbmVcXFwiPjxpbWcgbmctc3JjPVxcXCJ7e3VzZXJPYmoucGljdHVyZS5kYXRhLnVybH19XFxcIiBjbGFzcz1cXFwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZSBwcm9maWxlLWF2YXRhclxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PC9kaXY+e3t4Lm5hbWV9fTwvdGQ+PHRkIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t4LnNwX2JjfX07Y29sb3I6e3t4LnNwX2ZjfX1cXFwiPnt7eC5zcF90aXRsZX19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48cCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgc3R5bGU9XFxcImNvbG9yOmJsdWU7XFxcIiBuZy1jbGljaz1cXFwidm0uc2VlTW9yZSgxKVxcXCIgbmctaWY9XFxcInZtLmNiMWd0NVxcXCI+Jmx0OyZsdDt7e3ZtLmJ0ZXh0MX19Jmd0OyZndDs8L3A+PHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgbmctaWY9XFxcInZtLmFuc3dlckV4aXN0M1xcXCI+PHRib2R5Pjx0aGVhZCBzdHlsZT1cXFwiYm9yZGVyLXN0eWxlOm5vbmU7XFxcIj48dHI+PHRoIG5nLWF0dHItc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6e3t2bS5iZ2MzfX07Y29sb3I6e3t2bS5mYzN9fTt3aWR0aDo1MCU7XFxcIj57e3ZtLmhlYWRsaW5lM319PC90aD48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzN9fTtjb2xvcjp7e3ZtLmZjM319O3dpZHRoOjUwJTtcXFwiPjwvdGg+PC90cj48L3RoZWFkPjx0ciBuZy1yZXBlYXQ9XFxcInggaW4gdm0uc2VydmljZXNhbnMgfCBsaW1pdFRvOnZtLm1heFJlczMgdHJhY2sgYnkgJGluZGV4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDMseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2Jqc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDMpXFxcIiBuZy1pZj1cXFwidm0uY2IzZ3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQzfX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q0XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzR9fTtjb2xvcjp7e3ZtLmZjNH19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU0fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNH19O2NvbG9yOnt7dm0uZmM0fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5oZWFsdGhhbnMgfCBsaW1pdFRvOnZtLm1heFJlczQgdHJhY2sgYnkgJGluZGV4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDQseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2Jqc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDQpXFxcIiBuZy1pZj1cXFwidm0uY2I0Z3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQ0fX0mZ3Q7Jmd0OzwvcD48dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBuZy1pZj1cXFwidm0uYW5zd2VyRXhpc3Q1XFxcIj48dGJvZHk+PHRoZWFkIHN0eWxlPVxcXCJib3JkZXItc3R5bGU6bm9uZTtcXFwiPjx0cj48dGggbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3ZtLmJnYzV9fTtjb2xvcjp7e3ZtLmZjNX19O3dpZHRoOjUwJTtcXFwiPnt7dm0uaGVhZGxpbmU1fX08L3RoPjx0aCBuZy1hdHRyLXN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnt7dm0uYmdjNX19O2NvbG9yOnt7dm0uZmM1fX07d2lkdGg6NTAlO1xcXCI+PC90aD48L3RyPjwvdGhlYWQ+PHRyIG5nLXJlcGVhdD1cXFwieCBpbiB2bS5iZWF1dHlhbnMgfCBsaW1pdFRvOnZtLm1heFJlczUgdHJhY2sgYnkgJGluZGV4XFxcIiBuZy1jbGljaz1cXFwidm0uYW5zd2VyRGV0YWlsKDUseClcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtcXFwiPjx0ZCBzdHlsZT1cXFwid2lkdGg6NTAlO1xcXCI+PGRpdiBjbGFzcz1cXFwicHJvZmlsZS1hdmF0YXItd3JhcHBlciBtZWRpYS1sZWZ0XFxcIiBhbGlnbj1cXFwibWlkZGxlXFxcIiBuZy1yZXBlYXQ9XFxcInVzZXJPYmogaW4geC51c2VyT2Jqc1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6IGlubGluZVxcXCI+PGltZyBuZy1zcmM9XFxcInt7dXNlck9iai5waWN0dXJlLmRhdGEudXJsfX1cXFwiIGNsYXNzPVxcXCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlIHByb2ZpbGUtYXZhdGFyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogaW5saW5lXFxcIj48L2Rpdj57e3gubmFtZX19PC90ZD48dGQgbmctYXR0ci1zdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp7e3guc3BfYmN9fTtjb2xvcjp7e3guc3BfZmN9fVxcXCI+e3t4LnNwX3RpdGxlfX08L3RkPjwvdHI+PC90Ym9keT48L3RhYmxlPjxwIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBzdHlsZT1cXFwiY29sb3I6Ymx1ZTtcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zZWVNb3JlKDUpXFxcIiBuZy1pZj1cXFwidm0uY2I1Z3Q1XFxcIj4mbHQ7Jmx0O3t7dm0uYnRleHQ1fX0mZ3Q7Jmd0OzwvcD48ZGl2IG5nLWlmPVxcXCJ2bS5ub0Fuc1xcXCI+PGJyPjxwPllvdSBoYXZlIG5vdCBlbmRvcnNlZCBhbnkgRXN0YWJsaXNobWVudHMgeWV0LiBQbGFjZXMgdGhhdCB5b3UgZW5kb3JzZSB3aWxsIHNob3cgdXAgaGVyZSBzbyB5b3UgY2FuIGhhdmUgcXVpY2sgYWNjZXNzIHRvIGFsbCB0aGVpciBzcGVjaWFscyBhbmQgcHJvbW90aW9ucy48L3A+PC9kaXY+PGRpdiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgcm9sZT1cXFwiZ3JvdXBcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBuZy1jbGljaz1cXFwidm0uZ29CYWNrKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPkJhY2s8L2J1dHRvbj48L2Rpdj5cIik7fV0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
(function () {
    'use strict';

    angular
        .module('app')
        .controller('myfriends', myfriends);

    myfriends.$inject = ['$location', '$rootScope', '$state', '$window', 'votes', '$scope', 'dialog'];

    function myfriends(location, $rootScope, $state, $window, votes, $scope, dialog) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'myfriends';

        vm.goBack = goBack;
        vm.answerDetail = answerDetail;
        vm.seeMore = seeMore;
        vm.showAllFriendsList = showAllFriendsList;

        // ----- SEO tags ----
        $scope.$parent.$parent.$parent.seo = { 
            pageTitle : "My Friends' Favourite", 
            metaDescription: "RankX lets you see your friends' favorite food, lifestyle, health, beauty and services." 
        };

        var cdate = new Date();
        var dayOfWeek = cdate.getDay();
        var isToday = false;
        vm.noAns = false;
        vm.friendsDataLoading = true;
        vm.maxRes1 = 5; vm.btext1 = 'See more';
        vm.maxRes2 = 5; vm.btext2 = 'See more';
        vm.maxRes3 = 5; vm.btext3 = 'See more';
        vm.maxRes4 = 5; vm.btext4 = 'See more';
        vm.maxRes5 = 5; vm.btext5 = 'See more';
        vm.maxRes6 = 5; vm.btext6 = 'See more';
        vm.maxRes7 = 5; vm.btext7 = 'See more';

        vm.cb1gt5 = false;
        vm.cb2gt5 = false;
        vm.cb3gt5 = false;
        vm.cb4gt5 = false;
        vm.cb5gt5 = false;
        vm.cb6gt5 = false;
        vm.cb7gt5 = false;


        function showAllFriendsList(userObjs, answername){
            dialog.showAllFriendsListDlg(userObjs, answername);
        }
        activate();

        function activate() {
            formatTables(); 
            if( !$rootScope.friendsVotes ){
                votes.loadVotesByMyFriends()
                .then(function(data){
                    $rootScope.friends_votes = data;
                    formatData();
                })
            } else {
                formatData();
            }
        }

        function formatTables() {

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'food') {
                    vm.bgc1 = $rootScope.headlines[i].bc;
                    vm.fc1 = $rootScope.headlines[i].fc;
                    vm.headline1 = $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'lifestyle') {
                    vm.bgc2 = $rootScope.headlines[i].bc;
                    vm.fc2 = $rootScope.headlines[i].fc;
                    vm.headline2 = $rootScope.headlines[i].title; 
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'services') {
                    vm.bgc3 = $rootScope.headlines[i].bc;
                    vm.fc3 = $rootScope.headlines[i].fc;
                    vm.headline3 = $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'health') {
                    vm.bgc4 = $rootScope.headlines[i].bc;
                    vm.fc4 = $rootScope.headlines[i].fc;
                    vm.headline4 = $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'beauty') {
                    vm.bgc5 = $rootScope.headlines[i].bc;
                    vm.fc5 = $rootScope.headlines[i].fc;
                    vm.headline5 = $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'social') {
                    vm.bgc6 = $rootScope.headlines[i].bc;
                    vm.fc6 = $rootScope.headlines[i].fc;
                    vm.headline6 = $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'family') {
                    vm.bgc7 = $rootScope.headlines[i].bc;
                    vm.fc7 = $rootScope.headlines[i].fc;
                    vm.headline7 = $rootScope.headlines[i].title;
                    break;
                }
            }
        }

        function formatData() {
            var answer = {};
            var category = {};

            vm.foodans = [];
            vm.lifestyleans = [];
            vm.servicesans = [];
            vm.healthans = [];
            vm.beautyans = [];
            vm.socialans = [];
            vm.familyans = [];

            var tmap = [];


            for (var i = 0; i < $rootScope.friends_votes.length; i++) {
                if ($rootScope.friends_votes[i].vote == 1) {
                    var idx = $rootScope.answers.map(function (x) { return x.id; }).indexOf($rootScope.friends_votes[i].answer);
                    answer = $rootScope.answers[idx];
                    if (idx > -1) {
                        //console.log("answer - ", answer.name);
                        if (answer.type == 'Establishment') {

                            //look this answer in catans recs
                            for (var n = 0; n < $rootScope.catansrecs.length; n++) {

                                if ($rootScope.catansrecs[n].answer == answer.id) {

                                    var idx2 = $rootScope.content.map(function (x) { return x.id; }).indexOf($rootScope.catansrecs[n].category);
                                    category = $rootScope.content[idx2];
                                    if (!category)
                                        continue;
                                    if (category.title.indexOf('food') > -1 || category.tags.indexOf('food') > -1) {
                                        addRecord(vm.foodans, answer, i);
                                    }

                                    if (category.title.indexOf('lifestyle') > -1 || category.tags.indexOf('lifestyle') > -1) {

                                        addRecord(vm.lifestyleans, answer, i);
                                    }

                                    if (category.title.indexOf('services') > -1 || category.tags.indexOf('services') > -1) {

                                        addRecord(vm.servicesans, answer, i);
                                    }

                                    if (category.title.indexOf('health') > -1 || category.tags.indexOf('health') > -1) {

                                        addRecord(vm.healthans, answer, i);
                                    }

                                    if (category.title.indexOf('beauty') > -1 || category.tags.indexOf('beauty') > -1) {

                                        addRecord(vm.beautyans, answer, i);
                                    }


                                    if (category.title.indexOf('social') > -1 || category.tags.indexOf('social') > -1) {

                                        addRecord(vm.socialans, answer, i);
                                    }

                                    if (category.title.indexOf('family') > -1 || category.tags.indexOf('family') > -1) {

                                        addRecord(vm.familyans, answer, i);
                                    }
                                }
                            }
                        }
                    }   
                }
            }
            
            if (vm.foodans.length > 5) vm.cb1gt5 = true;
            if (vm.lifestyleans.length > 5) vm.cb2gt5 = true;
            if (vm.servicesans.length > 5) vm.cb3gt5 = true;
            if (vm.healthans.length > 5) vm.cb4gt5 = true;
            if (vm.beautyans.length > 5) vm.cb5gt5 = true;
            if (vm.socialans.length > 5) vm.cb6gt5 = true;
            if (vm.familyans.length > 5) vm.cb7gt5 = true;

            if (vm.foodans.length > 0) vm.answerExist1 = true;
            else vm.answerExist1 = false;

            if (vm.lifestyleans.length > 0) vm.answerExist2 = true;
            else vm.answerExist2 = false;

            if (vm.servicesans.length > 0) vm.answerExist3 = true;
            else vm.answerExist3 = false;

            if (vm.healthans.length > 0) vm.answerExist4 = true;
            else vm.answerExist4 = false;

            if (vm.beautyans.length > 0) vm.answerExist5 = true;
            else vm.answerExist5 = false;

            if (vm.socialans.length > 0) vm.answerExist6 = true;
            else vm.answerExist6 = false;

            if (vm.familyans.length > 0) vm.answerExist7 = true;
            else vm.answerExist7 = false;
            
            
            if (vm.foodans.length == 0 && vm.servicesans.length == 0 && vm.lifestyleans.length == 0 &&
            vm.healthans.length == 0 && vm.beautyans.length == 0 && vm.socialans.length == 0 && vm.familyans.length == 0){
                vm.noAns = true;
            }

        }

        function getSpecials(answer) {
            for (var i = 0; i < $rootScope.specials.length; i++) {
                if (answer.id == $rootScope.specials[i].answer) {
                    if ($rootScope.specials[i].freq == 'weekly') {
                        if (dayOfWeek == 0 && $rootScope.specials[i].sun) isToday = true;
                        if (dayOfWeek == 1 && $rootScope.specials[i].mon) isToday = true;
                        if (dayOfWeek == 2 && $rootScope.specials[i].tue) isToday = true;
                        if (dayOfWeek == 3 && $rootScope.specials[i].wed) isToday = true;
                        if (dayOfWeek == 4 && $rootScope.specials[i].thu) isToday = true;
                        if (dayOfWeek == 5 && $rootScope.specials[i].fri) isToday = true;
                        if (dayOfWeek == 6 && $rootScope.specials[i].sat) isToday = true;
                        if (isToday) {
                            answer.sp_bc = $rootScope.specials[i].bc;
                            answer.sp_fc = $rootScope.specials[i].fc;
                            answer.sp_title = $rootScope.specials[i].stitle;
                            break;
                        }
                    }
                }
            }
        }

        function getUser(answer, votetable) {
            for (var i = 0; i < $rootScope.user.friends.data.length; i++) {
                if (votetable.user == $rootScope.user.friends.data[i].id) {
                    return $rootScope.user.friends.data[i];
                }
            }
        }

        function addRecord(part, answer, i){
            var cidx = 0;
            var ridx = 0;
            var fidx = 0;
            var idx = 0;
            
            cidx = $rootScope.catansrecs.map(function(x) {return x.id; }).indexOf($rootScope.friends_votes[i].catans);
            ridx = $rootScope.content.map(function(x) {return x.id; }).indexOf($rootScope.catansrecs[cidx].category); 

            var map = part.map(function (x) { return x.id; });
            idx = map.indexOf(answer.id);
            if(idx == -1){
                var data = angular.copy(answer);
                getSpecials(data);
                data.trackID = data.id + '' + $rootScope.friends_votes[i].id;
                data.userObjs = [];
                var friend = angular.copy(getUser(data, $rootScope.friends_votes[i]));
                
                friend.endorsements = [];
                friend.endorsements.push($rootScope.content[ridx].title);
                data.userObjs.push(friend);
                part.push(data);
            }
            else {
                
                var friend = angular.copy(getUser(data, $rootScope.friends_votes[i]));
                fidx = part[idx].userObjs.map(function(x) {return x.id; }).indexOf(friend.id);
                
                if (fidx == -1){
                    friend.endorsements = [];
                    friend.endorsements.push($rootScope.content[ridx].title);
                    part[idx].userObjs.push(friend);
                }
                else {
                    if (part[idx].userObjs[fidx].endorsements.indexOf($rootScope.content[ridx].title) == -1){ 
                        part[idx].userObjs[fidx].endorsements.push($rootScope.content[ridx].title);
                    }
                }
            }
        }

        function addUser(data, friend){

            var map = data.userObjs.map(function (x) { return x.id; });
            if( map.indexOf(friend.id) == -1 )
                data.userObjs.push(friend);

        }

        function answerDetail(cb,x) {
            
            $rootScope.myfavs = {};
            
            switch (cb){
                case 1: { $rootScope.canswers = vm.foodans; 
                          $rootScope.myfavs.title = 'My Food';  break; }
                case 2: { $rootScope.canswers = vm.lifestyleans; 
                          $rootScope.myfavs.title = 'My Lifestyle';  break; }
                case 3: { $rootScope.canswers = vm.servicesans;
                          $rootScope.myfavs.title = 'My Services';  break; }  
                case 4: { $rootScope.canswers = vm.healthans; 
                          $rootScope.myfavs.title = 'My Health';  break; }
                case 5: { $rootScope.canswers = vm.beautyans; 
                          $rootScope.myfavs.title = 'My Beauty';  break; }
                case 6: { $rootScope.canswers = vm.socialans; 
                          $rootScope.myfavs.title = 'My Social';  break; }
                case 7: { $rootScope.canswers = vm.familyans; 
                          $rootScope.myfavs.title = 'My Family';  break; }
            }
            $state.go("answerDetail", { index: x.slug });
        }

        function seeMore(x) {
            if (x == 1) {
                if (vm.maxRes1 == 5) { vm.btext1 = 'See less'; vm.maxRes1 = 100; }
                else { vm.btext1 = 'See more'; vm.maxRes1 = 5; }
            }
            if (x == 2) {
                if (vm.maxRes2 == 5) { vm.btext2 = 'See less'; vm.maxRes2 = 100; }
                else { vm.btext2 = 'See more'; vm.maxRes2 = 5; }
            }
            if (x == 3) {
                if (vm.maxRes3 == 5) { vm.btext3 = 'See less'; vm.maxRes3 = 100; }
                else { vm.btext3 = 'See more'; vm.maxRes3 = 5; }
            }
            if (x == 4) {
                if (vm.maxRes4 == 5) { vm.btext4 = 'See less'; vm.maxRes4 = 100; }
                else { vm.btext4 = 'See more'; vm.maxRes4 = 5; }
            }
            if (x == 5) {
                if (vm.maxRes5 == 5) { vm.btext5 = 'See less'; vm.maxRes5 = 100; }
                else { vm.btext5 = 'See more'; vm.maxRes5 = 5; }
            }
            if (x == 6) {
                if (vm.maxRes6 == 5) { vm.btext6 = 'See less'; vm.maxRes6 = 100; }
                else { vm.btext6 = 'See more'; vm.maxRes6 = 5; }
            }
            if (x == 7) {
                if (vm.maxRes7 == 5) { vm.btext7 = 'See less'; vm.maxRes7 = 100; }
                else { vm.btext7 = 'See more'; vm.maxRes7 = 5; }
            }
        }

        function goBack() {
            
            if ($rootScope.previousState == 'rankSummary')  $state.go('rankSummary', { index: $rootScope.cCategory.slug });
            else $state.go('cwrapper');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('myfavs', myfavs);

    myfavs.$inject = ['$location', '$rootScope', '$state', '$window','dataloader'];

    function myfavs(location, $rootScope, $state, $window, dataloader) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'myfavs';

        vm.goBack = goBack;
        vm.answerDetail = answerDetail;
        vm.seeMore = seeMore;

        var cdate = new Date();
        var dayOfWeek = cdate.getDay();
        var isToday = false;
        vm.noAns = false;

        vm.maxRes1 = 5; vm.btext1 = 'See more';
        vm.maxRes2 = 5; vm.btext2 = 'See more';
        vm.maxRes3 = 5; vm.btext3 = 'See more';
        vm.maxRes4 = 5; vm.btext4 = 'See more';
        vm.maxRes5 = 5; vm.btext5 = 'See more';
        vm.maxRes6 = 5; vm.btext6 = 'See more';
        vm.maxRes7 = 5; vm.btext7 = 'See more';

        vm.cb1gt5 = false;
        vm.cb2gt5 = false;
        vm.cb3gt5 = false;
        vm.cb4gt5 = false;
        vm.cb5gt5 = false;
        vm.cb6gt5 = false;
        vm.cb7gt5 = false;

        activate();

        function activate() {
            
            $rootScope.inFavMode = true;

            formatTables();
            loadData();
            if ($rootScope.DEBUG_MODE) console.log("myfavs page Loaded!");

        }

        function formatTables() {

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'food') {
                    vm.bgc1 = $rootScope.headlines[i].bc;
                    vm.fc1 = $rootScope.headlines[i].fc;
                    vm.headline1 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'lifestyle') {
                    vm.bgc2 = $rootScope.headlines[i].bc;
                    vm.fc2 = $rootScope.headlines[i].fc;
                    vm.headline2 = 'My ' + $rootScope.headlines[i].title; 
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'services') {
                    vm.bgc3 = $rootScope.headlines[i].bc;
                    vm.fc3 = $rootScope.headlines[i].fc;
                    vm.headline3 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'health') {
                    vm.bgc4 = $rootScope.headlines[i].bc;
                    vm.fc4 = $rootScope.headlines[i].fc;
                    vm.headline4 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'beauty') {
                    vm.bgc5 = $rootScope.headlines[i].bc;
                    vm.fc5 = $rootScope.headlines[i].fc;
                    vm.headline5 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }

            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'social') {
                    vm.bgc6 = $rootScope.headlines[i].bc;
                    vm.fc6 = $rootScope.headlines[i].fc;
                    vm.headline6 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }


            for (var i = 0; i < $rootScope.headlines.length; i++) {
                if ($rootScope.headlines[i].type == 'family') {
                    vm.bgc7 = $rootScope.headlines[i].bc;
                    vm.fc7 = $rootScope.headlines[i].fc;
                    vm.headline7 = 'My ' + $rootScope.headlines[i].title;
                    break;
                }
            }
        }

        function loadData() {
            var answer = {};
            var category = {};

            vm.myfoodans = [];
            vm.mylifestyleans = [];
            vm.myservicesans = [];
            vm.myhealthans = [];
            vm.mybeautyans = [];
            vm.mysocialans = [];
            vm.myfamilyans = [];

            var tmap = [];

            for (var i = 0; i < $rootScope.cvotes.length; i++) {
                if ($rootScope.cvotes[i].vote == 1) {
                    var idx = $rootScope.answers.map(function (x) { return x.id; }).indexOf($rootScope.cvotes[i].answer);
                    if (idx > -1) {
                        answer = $rootScope.answers[idx];
                        //console.log("answer - ", answer.name);
                        if (answer.type == 'Establishment') {

                            //look this answer in catans recs
                            for (var n = 0; n < $rootScope.catansrecs.length; n++) {

                                if ($rootScope.catansrecs[n].answer == answer.id) {

                                    var idx2 = $rootScope.content.map(function (x) { return x.id; }).indexOf($rootScope.catansrecs[n].category);
                                    category = $rootScope.content[idx2];
                                    if (!category)
                                        continue;
                                    if (category.title.indexOf('food') > -1 || category.tags.indexOf('food') > -1) {
                                        tmap = vm.myfoodans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.myfoodans.push(answer);
                                        }
                                    }

                                    if (category.title.indexOf('lifestyle') > -1 || category.tags.indexOf('lifestyle') > -1) {
                                        tmap = vm.mylifestyleans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.mylifestyleans.push(answer);
                                        }
                                    }

                                    if (category.title.indexOf('services') > -1 || category.tags.indexOf('services') > -1) {
                                        tmap = vm.myservicesans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.myservicesans.push(answer);
                                        }
                                    }

                                    if (category.title.indexOf('health') > -1 || category.tags.indexOf('health') > -1) {
                                        tmap = vm.myhealthans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.myhealthans.push(answer);
                                        }
                                    }

                                    if (category.title.indexOf('beauty') > -1 || category.tags.indexOf('beauty') > -1) {
                                        tmap = vm.mybeautyans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.mybeautyans.push(answer);
                                        }
                                    }


                                    if (category.title.indexOf('social') > -1 || category.tags.indexOf('social') > -1) {
                                        tmap = vm.mysocialans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.mysocialans.push(answer);
                                        }
                                    }


                                    if (category.title.indexOf('family') > -1 || category.tags.indexOf('family') > -1) {
                                        tmap = vm.myfamilyans.map(function (x) { return x.id; });
                                        if (tmap.indexOf(answer.id) < 0) {
                                            getSpecials(answer);
                                            vm.myfamilyans.push(answer);
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }
            
            if (vm.myfoodans.length > 5) vm.cb1gt5 = true;
            if (vm.mylifestyleans.length > 5) vm.cb2gt5 = true;
            if (vm.myservicesans.length > 5) vm.cb3gt5 = true;
            if (vm.myhealthans.length > 5) vm.cb4gt5 = true;
            if (vm.mybeautyans.length > 5) vm.cb5gt5 = true;
            if (vm.mysocialans.length > 5) vm.cb6gt5 = true;
            if (vm.myfamilyans.length > 5) vm.cb7gt5 = true;

            if (vm.myfoodans.length > 0) vm.answerExist1 = true;
            else vm.answerExist1 = false;

            if (vm.mylifestyleans.length > 0) vm.answerExist2 = true;
            else vm.answerExist2 = false;

            if (vm.myservicesans.length > 0) vm.answerExist3 = true;
            else vm.answerExist3 = false;

            if (vm.myhealthans.length > 0) vm.answerExist4 = true;
            else vm.answerExist4 = false;

            if (vm.mybeautyans.length > 0) vm.answerExist5 = true;
            else vm.answerExist5 = false;

            if (vm.mysocialans.length > 0) vm.answerExist6 = true;
            else vm.answerExist6 = false;

            if (vm.myfamilyans.length > 0) vm.answerExist7 = true;
            else vm.answerExist7 = false;
            
            if (vm.myfoodans.length == 0 && vm.myservicesans.length == 0 && vm.mylifestyleans.length == 0 &&
            vm.myhealthans.length == 0 && vm.mybeautyans.length == 0 && vm.mysocialans.length == 0 && vm.myfamilyans.length == 0){
                vm.noAns = true;
            }

        }

        function getSpecials(answer) {
            for (var i = 0; i < $rootScope.specials.length; i++) {
                if (answer.id == $rootScope.specials[i].answer) {
                    if ($rootScope.specials[i].freq == 'weekly') {
                        if (dayOfWeek == 0 && $rootScope.specials[i].sun) isToday = true;
                        if (dayOfWeek == 1 && $rootScope.specials[i].mon) isToday = true;
                        if (dayOfWeek == 2 && $rootScope.specials[i].tue) isToday = true;
                        if (dayOfWeek == 3 && $rootScope.specials[i].wed) isToday = true;
                        if (dayOfWeek == 4 && $rootScope.specials[i].thu) isToday = true;
                        if (dayOfWeek == 5 && $rootScope.specials[i].fri) isToday = true;
                        if (dayOfWeek == 6 && $rootScope.specials[i].sat) isToday = true;
                        if (isToday) {
                            answer.sp_bc = $rootScope.specials[i].bc;
                            answer.sp_fc = $rootScope.specials[i].fc;
                            answer.sp_title = $rootScope.specials[i].stitle;
                            break;
                        }
                    }
                }
            }
        }

        function answerDetail(cb,x) {
            
            $rootScope.myfavs = {};
            
            switch (cb){
                case 1: { $rootScope.canswers = vm.myfoodans; 
                          $rootScope.myfavs.title = 'My Food';  break; }
                case 2: { $rootScope.canswers = vm.mylifestyleans; 
                          $rootScope.myfavs.title = 'My Lifestyle';  break; }
                case 3: { $rootScope.canswers = vm.myservicesans;
                          $rootScope.myfavs.title = 'My Services';  break; }  
                case 4: { $rootScope.canswers = vm.myhealthans; 
                          $rootScope.myfavs.title = 'My Health';  break; }
                case 5: { $rootScope.canswers = vm.mybeautyans; 
                          $rootScope.myfavs.title = 'My Beauty';  break; }
                case 6: { $rootScope.canswers = vm.mysocialans; 
                          $rootScope.myfavs.title = 'My Social';  break; }
                case 7: { $rootScope.canswers = vm.myfamilyans; 
                          $rootScope.myfavs.title = 'My Family';  break; }
            }
            $state.go("answerDetail", { index: x.id });
        }

        function seeMore(x) {
            if (x == 1) {
                if (vm.maxRes1 == 5) { vm.btext1 = 'See less'; vm.maxRes1 = 100; }
                else { vm.btext1 = 'See more'; vm.maxRes1 = 5; }
            }
            if (x == 2) {
                if (vm.maxRes2 == 5) { vm.btext2 = 'See less'; vm.maxRes2 = 100; }
                else { vm.btext2 = 'See more'; vm.maxRes2 = 5; }
            }
            if (x == 3) {
                if (vm.maxRes3 == 5) { vm.btext3 = 'See less'; vm.maxRes3 = 100; }
                else { vm.btext3 = 'See more'; vm.maxRes3 = 5; }
            }
            if (x == 4) {
                if (vm.maxRes4 == 5) { vm.btext4 = 'See less'; vm.maxRes4 = 100; }
                else { vm.btext4 = 'See more'; vm.maxRes4 = 5; }
            }
            if (x == 5) {
                if (vm.maxRes5 == 5) { vm.btext5 = 'See less'; vm.maxRes5 = 100; }
                else { vm.btext5 = 'See more'; vm.maxRes5 = 5; }
            }
            if (x == 6) {
                if (vm.maxRes6 == 5) { vm.btext6 = 'See less'; vm.maxRes6 = 100; }
                else { vm.btext6 = 'See more'; vm.maxRes6 = 5; }
            }
            if (x == 7) {
                if (vm.maxRes7 == 5) { vm.btext7 = 'See less'; vm.maxRes7 = 100; }
                else { vm.btext7 = 'See more'; vm.maxRes7 = 5; }
            }
        }

        function goBack() {
            
            if ($rootScope.previousState == 'rankSummary')  $state.go('rankSummary', { index: $rootScope.cCategory.slug });
            else $rootScope.$emit('backToResults');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('favs', favs);

    favs.$inject = ['$location', '$rootScope', '$state', '$window'];

    function favs(location, $rootScope, $state, $window) {
        
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('promotersignup', promotersignup);

    promotersignup.$inject = ['$location', '$rootScope', '$state','promoter','dialog', 'mailing'];

    function promotersignup(location, $rootScope, $state, promoter, dialog, mailing) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'promote';

        vm.getcode = getcode;
        vm.submit = submit;
        
        var dataOk = false;
        
        activate();
        vm.showTOSPromotersDlg = showTOSPromotersDlg;
        function activate() {

            //initialize
            vm.promoter = {};
            vm.promoter.firstname = '';
            vm.promoter.lastname = '';
            vm.promoter.phone = '';
            vm.promoter.address = '';
            vm.promoter.code = '';
            vm.promoter.email = '';

            vm.code = '';
            
            if ($rootScope.user) {
                vm.promoter.firstname = $rootScope.user.first_name;
                vm.promoter.lastname = $rootScope.user.last_name;
                vm.promoter.user = $rootScope.user.id;
            }
            else dialog.getDialog('nologinsignup');

            console.log("promote page Loaded!");
        }

        function submit() {

            vm.promoter.code = vm.code;
            
            checkInputData();
            //vm.promoter.user = $rootScope.user.id;
            if (dataOk) promoter.add(vm.promoter).then(function(){
                mailing.promoterCreated(vm.promoter)
                .then(function(){

                });
                dialog.notificationWithCallback('Success','You have successfully registered as a Promoter. ',gotoPromoterConsole);

            });
        }

        function gotoPromoterConsole(){
            $state.go('promoterconsole');
        }
        function checkInputData(){
            dataOk = true;
            if ($rootScope.DEBUG_MODE) console.log("vm.promoter ", vm.promoter);

            if (vm.promoter.firstname.length < 1) {
                dialog.getDialog('firstnameisinvalid');
                dataOk = false;
            }
            else if (vm.promoter.lastname.length < 1) {
                dialog.getDialog('lastnameisinvalid');
                dataOk = false;
            }
            else if (vm.promoter.email.length < 1 || vm.promoter.email.indexOf('@')<0) {
                dialog.getDialog('emailisinvalid');
                dataOk = false;
            }
            else if (vm.promoter.address.length < 5) {
                dialog.getDialog('addressisinvalid');
                dataOk = false;
            }
            else if (vm.promoter.phone.length < 9) {
                dialog.getDialog('phoneisinvalid');
                dataOk = false;
            }
            else if (vm.promoter.code.length < 1) {
                dialog.getDialog('missingcode');
                dataOk = false;
            }
        }

        //Create random code
        function getcode() {

            var text = "";
            var nums = "";
            //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            //var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
            var possiblet = "abcdefghijklmnopqrstuvwxyz";
            var possiblen = "0123456789";
            for (var i = 0; i < 5; i++)
                text += possiblet.charAt(Math.floor(Math.random() * possiblet.length));

            for (var i = 0; i < 3; i++)
                nums += possiblen.charAt(Math.floor(Math.random() * possiblen.length));    

            vm.code = text+nums;
        }
        
        function showTOSPromotersDlg(){
            dialog.showTOSPromotersDlg();
        }
    }

})();





(function () {
    'use strict';

    angular
        .module('app')
        .controller('promoterconsole', promoterconsole);

    promoterconsole.$inject = ['$location', '$rootScope', '$state', '$window', 'useraccnt', 'dialog', 'promoter', '$location', 'STRIPE_CLIENT_ID', 'setting', '$q'];

    function promoterconsole(location, $rootScope, $state, $window, useraccnt, dialog, promoter, $location, STRIPE_CLIENT_ID, setting, $q) {
        /* jshint validthis:true */
        var vm = this;
        vm.notifications = [];        
        if($window.location.href.indexOf('connectStripe') !== -1) {
            var isSuccess =  $window.location.href.slice($window.location.href.indexOf('connectStripe')).split('=')[1].split('&')[0];
            if(isSuccess == 'success'){
                vm.notifications.push({message:"You are successfully connected to your Stripe Account", type: "success"});
            } else {
                $window.alert($window.location.href.slice($window.location.href.indexOf('message')).split('=')[1].split('&')[0]);
            }
        }

        var fields = [];
        var labels = [];
        var vals = [];

        vm.title = 'promoterconsole';

        vm.overview = true;
        vm.manageview = true;
        
        //Methods
        vm.gotoanswer = gotoanswer;
        vm.gotomanage = gotomanage;
        vm.gotoPromotePage = gotoPromotePage;
        vm.goBack = goBack;
        vm.goEdit = goEdit;
        vm.goSignup = goSignup;
        vm.connectStripe = connectStripe;
        vm.myaccnts = [];
        vm.noAns = false;
        vm.manageview = false;
        vm.dataReady = false;
        var promoterdataok = false;

        retrieveData();

        function retrieveData() {
            $q.all([promoter.getbyUser($rootScope.user.id), setting.getSetting()])
            .then(function (data) {
                $rootScope.userpromoter = data[0];
                vm.STRIPE_COMMISSION_PERCENTAGE = data[1].STRIPE_COMMISSION_PERCENTAGE;
                vm.CUSTOM_RANK_PRICE = data[1].CUSTOM_RANK_PRICE;
                activate();
            });
        }

        function connectStripe(){
	        var igPopup = window.open('https://connect.stripe.com/oauth/authorize?response_type=code&client_id=' + STRIPE_CLIENT_ID + '&scope=read_write&state=' + vm.promoter.id,'Stripe Connect', '_self');
            
        }

        function activate() {

            //Check there is only one promoter accounts and that is for current useraccnt
            if ($rootScope.userpromoter) {
                if ($rootScope.userpromoter.length == 1 && $rootScope.userpromoter[0].user == $rootScope.user.id) {
                    promoterdataok = true;
                    vm.promoter = $rootScope.userpromoter[0];
                    vm.userIsPromoter = true;
                }
                else {
                    vm.userIsPromoter = false;
                    vm.dataReady = true;
                }
            }
            else {
                vm.userIsPromoter = false;
                vm.dataReady = true;
            }

            if (!vm.dataReady) {
                loadData();
            }
            console.log("Promoter console page Loaded!");
            console.log("vm.dataReady - ",vm.dataReady);

        }

        function loadData() {

            var answerid = 0;
            var idx = 0;
            var obj = {};


            if (!vm.dataReady && promoterdataok) {
                useraccnt.getaccntsbycode($rootScope.userpromoter[0].code).then(function (result) {

                    console.log("resuls -", result);

                    for (var i = 0; i < result.length; i++) {
                        answerid = result[i].answer;
                        obj = {};
                        idx = $rootScope.answers.map(function (x) { return x.id; }).indexOf(answerid);
                        obj = angular.copy(result[i])
                        obj.name = $rootScope.answers[idx].name;
                        obj.answerObj = $rootScope.answers[idx];
                        if (obj.status == 'Basic') obj.style = 'background-color:#bfbfbf';
                        if (obj.istrial){
                            obj.status = 'On Trial ' + Math.ceil(moment.duration(moment(obj.discountEndDate) - moment()).asDays()) + ' Days left';
                            obj.style = 'background-color:#b3b300';
                        } else {
                            obj.status = 'Active';
                            obj.style = 'background-color:#009900';
                        } 

                        //get monthly price
                        for (var k=0; k<$rootScope.codeprices.length; k++){
                            //console.log($rootScope.codeprices[k].code, bizObj.bizcat);
                            if ($rootScope.codeprices[k].code == obj.bizcat){
                                obj.price = $rootScope.codeprices[k].price;
                                break;
                            }
                        }
                        obj.totalCommission = 0;
                        if(obj.ispremium)
                            obj.totalCommission += obj.price  * vm.STRIPE_COMMISSION_PERCENTAGE;
                        if(obj.hasranks)
                            obj.totalCommission += obj.ranksqty* vm.CUSTOM_RANK_PRICE *vm.STRIPE_COMMISSION_PERCENTAGE;

                        vm.myaccnts.push(obj);
                    }
                    if (vm.myaccnts.length > 0) vm.noAns = false;
                    else vm.noAns = true;

                    vm.dataReady = true;
                    activate();
                });
            }
        }



        function gotoanswer(x) {
            $state.go('answerDetail', { index: x.slug });
        }

        function gotoPromotePage() {
            $state.go('promote');
        }

        function gotomanage(x) {
            //$state.go('mybiz');
            vm.manageview = true;
            vm.business = x;
            vm.overview = false;
        }

        function goBack() {
            if (vm.manageview == true) {
                vm.overview = true;
                vm.manageview = false;
                return;
            }

            if ($rootScope.previousState == 'rankSummary')
                $state.go('rankSummary', { index: $rootScope.cCategory.id });
            else if ($rootScope.previousState == 'answerDetail')
                $state.go('answerDetail', { index: $rootScope.canswer.id });
            else if ($rootScope.previousState == 'addAnswer')
                $state.go('addAnswer', { index: $rootScope.canswer.id });
            else if ($rootScope.previousState == 'editAnswer')
                $state.go('editAnswer', { index: $rootScope.canswer.id });
            else if ($rootScope.previousState == 'about')
                $state.go('about');
            else $state.go('cwrapper');
        }

        function goEdit() {
            fields = ['firstname', 'lastname', 'email', 'address', 'phone'];
            labels = ['First Name', 'Last Name', 'Email', 'Address', 'Phone'];
            vals = [vm.promoter.firstname, vm.promoter.lastname, vm.promoter.email, vm.promoter.address, vm.promoter.phone];

            dialog.editInfo(fields, labels, vals, execEdit);
        }

        function execEdit(newvals) {
            promoter.update(vm.promoter.id, fields, newvals).then(function () {
                loadData();
            });
        }

        function goSignup(){
            $state.go('promotersignup');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('promote', promote);

    promote.$inject = ['$location', '$rootScope', '$state','promoter'];

    function promote(location, $rootScope, $state, promoter) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'promote';

        vm.show = show;

        vm.showOne = false;
        vm.showTwo = false;
        vm.showThree = false;
        vm.showFour = false;
        vm.showFive = false;
        vm.showSix = false;
        
        activate();

        function activate() {

            console.log("promote page Loaded!");
        }

        function show(x) {

            if (x == 1 && vm.showOne) vm.showOne = false;
            else if (x == 2 && vm.showTwo) vm.showTwo = false;
            else if (x == 3 && vm.showThree) vm.showThree = false;
            else if (x == 4 && vm.showFour) vm.showFour = false;
            else if (x == 5 && vm.showFive) vm.showFive = false;
            else if (x == 6 && vm.showSix) vm.showSix = false;
            else {
                vm.showOne = false;
                vm.showTwo = false;
                vm.showThree = false;
                vm.showFour = false;
                vm.showFive = false;
                vm.showSix = false;

                if (x == 1 && !vm.showOne) vm.showOne = true;
                if (x == 2 && !vm.showTwo) vm.showTwo = true;
                if (x == 3 && !vm.showThree) vm.showThree = true;
                if (x == 4 && !vm.showFour) vm.showFour = true;
                if (x == 5 && !vm.showFive) vm.showFive = true;
                if (x == 6 && !vm.showSix) vm.showSix = true;
            }
            
        }

    }

})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('match', match);

    match.$inject = ['$state', 'dialog', '$location', 'answer', '$rootScope', 'matchrec', '$modal', 'useractivity','$window'];

    function match($state, dialog, $location, answer, $rootScope, matchrec, $modal, useractivity, $window) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'match';
        vm.header = "table" + $rootScope.cCategory.id + ".header";
        vm.body = 'table' + $rootScope.cCategory.id + '.body';
        vm.ranking = $rootScope.title;
        var HS = [];
        var LS = [];
        var answers = [];
        var N = 0;
        var M = 0;
        var r = [];
        var GPIdx = 0;
        var returningUser = $rootScope.cmrecs_user.length > 0;
        var mrecs_session = [];
        var rankInProgress = false;
        
        // Members
        vm.table = $rootScope.cCategory;
        vm.type = $rootScope.cCategory.type;
        vm.answer1;
        vm.answer2;

        // Methods
        vm.selectAnswer = selectAnswer;
        vm.rankSummary = rankSummary;
        vm.skipMatch = skipMatch;
        vm.answerDetail = answerDetail;
        vm.closeRank = closeRank;

        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) { vm.sm = true; vm.nsm = false; }
        else { vm.sm = false; vm.nsm = true; }

        activate();

        function activate() {
            
            //TODO: Would like to add this abstract template, but dont know how               
            $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
                $rootScope.previousState = from.name;
            });
            $rootScope.$on('$stateChangeStart',
                function (ev, to, toParams, from, fromParams) {
                    if (from.name == 'match') {
                        if (mrecs_session.length > 0) {
                            matchrec.postRec(mrecs_session);
                            //if ($rootScope.userHasRank) useractivity.patchRec($rootScope.userActRecId);
                            //else useractivity.postRec();
                            mrecs_session = [];
                        }
                    }
                });
            
            loadAnswers();
            getmatchIndexes();
            createRandomIndexArray();
            getAnswers();
            
        }

        function selectAnswer(number) {

            if ($rootScope.isLoggedIn) {

                var data = {};
                data.user = $rootScope.user.id;
                data.hs = vm.answer1.id;
                data.ls = vm.answer2.id;

                data.category = $rootScope.cCategory.id;
                data.timestmp = Date.now(); 
            
                //Update relative arrays for each of the answers
                if (number == 1) data.sel = vm.answer1.id;
                //matchrec.postRec($rootScope.cCategory.id, vm.answer1.id, vm.answer2.id, vm.answer1.id);
                if (number == 2) data.sel = vm.answer2.id;
                //matchrec.postRec($rootScope.cCategory.id, vm.answer1.id, vm.answer2.id, vm.answer2.id);
            
                mrecs_session.push(data);
                //$rootScope.cmrecs_user.push.apply($rootScope.cmrecs_user, data);
                $rootScope.cmrecs_user.push(data);

                GPIdx++;
                if (GPIdx >= M) GPIdx = 0;
                rankInProgress = true;
                getAnswers();
            }
            else {
                dialog.loginFacebook();
                //dialog.getDialog('notLoggedIn');
                return;
            }
        }

        function skipMatch() {
            GPIdx++;
            if (GPIdx >= M) GPIdx = 0;
            getAnswers();
        }
        
        function loadAnswers(){
            //console.log("$rootScope.cvotes - ", $rootScope.cvotes);
            //console.log("$rootScope.ccatans - ", $rootScope.ccatans);
            //console.log("$rootScope.canswers - ", $rootScope.canswers);
            //console.log("$rootScope.canswers4rank --- ", $rootScope.canswers4rank);
            answers = $rootScope.canswers4rank;
            N = answers.length;
            M = N * (N - 1) / 2;
            //console.log("$rootScope.canswers4rank --- ", $rootScope.canswers4rank, N, M);
            
        }
        
        function getAnswers() {         

            vm.GP = $rootScope.cmrecs_user.length;
            if ($rootScope.DEBUG_MODE) console.log("vm.GP - ", vm.GP);
            vm.Tot = M;            
            
            //if already played all matches
            if ($rootScope.cmrecs_user.length >= M) {
                if (rankInProgress) dialog.getDialog('goodJobRankComplete');
                else dialog.getDialog('rankComplete');
                rankSummary();
                return;
            }
            
            //Check if current user has not played this match.
            if (returningUser) {

                var hs = HS[r[GPIdx]];
                var ls = LS[r[GPIdx]];
                var matchPlayed = false;

                for (var i = 0; i < $rootScope.cmrecs_user.length; i++) {
                    if ($rootScope.cmrecs_user[i].hs == answers[hs].id) {
                        if ($rootScope.cmrecs_user[i].ls == answers[ls].id) {
                            //This match already exists
                            matchPlayed = true;
                            break;
                        }
                    }
                }
            }
            //console.log("matchPlayed", matchPlayed );
            if (matchPlayed) {
                skipMatch();
            }

            vm.answer1 = answers[HS[r[GPIdx]]];
            vm.answer2 = answers[LS[r[GPIdx]]];
            getHeaders();
        }
        function rankSummary() {
            //update records
            //if (mrecs_session.length > 0) matchrec.postRec(mrecs_session);
            $state.go("rankSummary", { index: vm.table.id });
        }

        function answerDetail(x) {

            if (x === 1) $state.go("answerDetail", { index: vm.answer1.id });
            else $state.go("answerDetail", { index: vm.answer2.id });

        }

        function getmatchIndexes() {
            HS = [];
            LS = [];
            for (var i = 0; i <= N - 1; i++) {
                for (var j = i + 1; j <= N - 1; j++) {
                    HS.push(i);
                    LS.push(j);
                }
            }

        }

        function createRandomIndexArray() {
            for (var i = 0; i < M; i++) { r[i] = i; }

            function shuffle(array) {
                var tmp, current, top = array.length;
                if (top) while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
                return array;
            }
            r = shuffle(r);
        }

        function getHeaders() {

            vm.fields = $rootScope.fields;

        }

        function closeRank() {
               $state.go('rankSummary',{index: $rootScope.cCategory.id});                            
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('editRanking', editRanking);

    editRanking.$inject = ['$location', '$rootScope', '$state','$stateParams', '$window','$http','imagelist',
    'table','dialog','catans','color','pixabay','pexels','categories', '$cookies','APP_API_KEY','answer'];

    function editRanking(location, $rootScope, $state, $stateParams, $window, $http, imagelist,
    table, dialog, catans, color, pixabay, pexels, categories, $cookies, APP_API_KEY, answer) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'editRanking';

        vm.goEdit = goEdit;
        vm.goDelete = goDelete;
        vm.getImages = getImages;
        vm.plusShade = plusShade;
        vm.minusShade = minusShade;
        vm.selImgBank = selImgBank;
        vm.shade = 0;
        vm.nextImg = nextImg;
        vm.prevImg = prevImg;
        vm.csel = csel;
        vm.goBack = goBack;

        var item = {};
        
        vm.typeList = ["Person", "Establishment", "Place", "Activity", "Short-Phrase", "Organization", "Event","Thing","PersonCust"];

        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) { vm.sm = true; vm.nsm = false; }
        else { vm.sm = false; vm.nsm = true; }
        
        activate();

        function activate() {
            
            //Load current category
            $rootScope.cCategory = {};
            for (var i = 0; i < $rootScope.content.length; i++) {
                if (($rootScope.content[i].id == $stateParams.index) || ($rootScope.content[i].slug == $stateParams.index)) {
                    $rootScope.cCategory = $rootScope.content[i];
                    break;
                }
            }

            item = JSON.parse(JSON.stringify($rootScope.cCategory));
            if ($rootScope.DEBUG_MODE) console.log("$rootScope.cCategory - ", $rootScope.cCategory);
            vm.ranking = $rootScope.cCategory.title;
            
            $rootScope.rankIsActive = true;
            $rootScope.objNumAct = $rootScope.objNum;
            
            loadData();
            selImgBank(1);
            if ($rootScope.DEBUG_MODE) console.log("editRanking page Loaded!");

        }

        function loadData() {
            //Load current category

            vm.rankTitle = $rootScope.cCategory.title;
            vm.tags = $rootScope.cCategory.tags;
            vm.keywords = $rootScope.cCategory.keywords;
            vm.type = $rootScope.cCategory.type;
            vm.question = $rootScope.cCategory.question;
            vm.answertags = $rootScope.cCategory.answertags;
            vm.isatomic = $rootScope.cCategory.isatomic;
            vm.catstr = $rootScope.cCategory.catstr;
            vm.ismp = $rootScope.cCategory.ismp;
            vm.scope = $rootScope.cCategory.scope;
            vm.image = $rootScope.cCategory.fimage;
            if ($rootScope.cCategory.bc) vm.bc = $rootScope.cCategory.bc;
            if ($rootScope.cCategory.fc) vm.fc = $rootScope.cCategory.fc;
            if ($rootScope.cCategory.shade) vm.shade = $rootScope.cCategory.shade;
            if ($rootScope.cCategory.bc) vm.bc2 = color.shadeColor(vm.bc,vm.shade/10);
            if ($rootScope.cCategory.fimage) vm.image = $rootScope.cCategory.fimage;
  
        }

        function selImgBank(x){
            if (x == 1){
                vm.pixabay = true;
                vm.pexels = false;
            }
            if (x == 2){
                vm.pixabay = false;
                vm.pexels = true;
            }
        }
        
        function goEdit(){
                        
           
            var fields = [];
            var vals = [];
            var fieldsc = [];
            var valsc = [];
            //if title change
            if (item.title != vm.rankTitle) {

                //Determine original title of category
                var idx = $rootScope.categories.map(function(x) {return x.id; }).indexOf(item.cat);
                var titleo = $rootScope.categories[idx].category;
                var titlex = vm.rankTitle;
                //if this was a generic ranking
                if (titleo.indexOf('@Nh')>-1){
                    var idx2 = $rootScope.locations.map(function(x) {return x.id; }).indexOf(item.nh);
                    var location = $rootScope.locations[idx2].nh_name;
                    titlex = vm.rankTitle.replace(location, '@Nh');
                }
                fieldsc.push('category');
                valsc.push(titlex);
                if ($rootScope.DEBUG_MODE) console.log("tablex - ", titlex);
                fields.push('title');
                vals.push(titlex);
                //console.log("tablex - ", titlex);
            }
            //if tags change
            if (item.tags != vm.tags) {
                fieldsc.push('tags');
                valsc.push(vm.tags);
            }
            //if keywords change
            if (item.keywords != vm.keywords) {
                fieldsc.push('keywords');
                valsc.push(vm.keywords);
            }
            //if type change
            if (item.type != vm.type) {
                fieldsc.push('type');
                valsc.push(vm.type);
            }
            //if type change
            if (item.question != vm.question) {
                fieldsc.push('question');
                valsc.push(vm.question);
            }
            //if type change
            //if (item.answertags != vm.answertags) {
            //    fields.push('answertags');
            //    vals.push(vm.answertags);
            //}
            //if isatomic changes
            //if (item.isatomic != vm.isatomic) {
            //    fields.push('isatomic');
            //    vals.push(vm.isatomic);
            //}
            //if category-string changes
            if (item.catstr != vm.catstr) {
                fields.push('catstr');
                vals.push(vm.catstr);
            }
            //if isatomic changes
            if (item.ismp != vm.ismp) {
                fieldsc.push('ismp');
                valsc.push(vm.ismp);
            }
            //if bc changes
            if (item.bc != vm.bc) {
                fieldsc.push('bc');
                valsc.push(vm.bc);
            }
            //if fc changes
            if (item.fc != vm.fc) {
                fieldsc.push('fc');
                valsc.push(vm.fc);
            }
            //if shade changes
            if (item.shade != vm.shade) {
                fieldsc.push('shade');
                valsc.push(vm.shade);
            }
            //if image changed via form
            if (item.fimage != vm.image) {
                fieldsc.push('fimage');
                valsc.push(vm.image);
            }
            if (item.scope != vm.scope) {
                fieldsc.push('scope');
                valsc.push(vm.scope);
                fields.push('scope');
                vals.push(vm.scope);
                changeScopeofAnswers();
                changeScopeofAnswers()
            }

            //if fimage changed
            if(vm.images){
                    //Save new image to azure-storage
                    processImage();
            }
            if (fields) {
                if ($rootScope.DEBUG_MODE) console.log("fields - ", fields, vals);
                table.update(item.id, fields, vals);
            }
            if (fieldsc) {
                if ($rootScope.DEBUG_MODE) console.log("fieldsc - ", fieldsc, valsc);
                categories.update(item.cat, fieldsc, valsc);
            }
            goBack();
        }
        
        function goDelete(){            
            dialog.deleteRank($rootScope.cCategory, confirmDelete);           
        }
        
        function confirmDelete(){
            //Delete image if stored in azure
            if (vm.image != null && vm.image != undefined ){
                if (vm.image.indexOf('https://rankx.blob') > -1) imagelist.deleteBlob(vm.image);
            }
            if ($rootScope.cCategory.nh == 1) categories.deleteRec($rootScope.cCategory.cat);
            catans.deletebyCategory($rootScope.cCategory.id);
            table.deleteTable($rootScope.cCategory.id);
            
            goBack();
        }

        function getImages() {
            var qry = vm.imageQuery.replace(' ', '+');
            vm.i = 0;
            vm.images = [];
            //If Image bank is Pixabay
            if (vm.pixabay) {
                pixabay.search(qry).then(function (result) {
                    if ($rootScope.DEBUG_MODE) console.log("Pixabay results - ", result);
                    vm.numResults = result.length;

                    for (var i = 0; i < vm.numResults; i++) {
                        vm.images.push(result[i]);
                        //console.log("image i - ", result[i].previewURL);
                    }
                    vm.image = vm.images[vm.i].previewURL;
                });
            }
            //If Image bank is Pexels
            if (vm.pexels) {
                //pexels.search(qry).then(function (result) {
                    pexels.reqFromServer(qry).then(function (res) {
                    var result = res.data.photos; //remove this line for direct query
                    
                    if ($rootScope.DEBUG_MODE) console.log("Pexels results - ", result);
                    vm.numResults = result.length;

                    for (var i = 0; i < vm.numResults; i++) {
                        vm.images.push(result[i]);
                        //console.log("image i - ", result[i].previewURL);
                    }
                    vm.image = vm.images[vm.i].src.small;
                });
            }

        }

        function nextImg(){
            vm.i = vm.i + 1;
            if (vm.i > vm.images.length -1) vm.i = vm.images.length-1;
            
            if (vm.pixabay) vm.image = vm.images[vm.i].previewURL;
            if (vm.pexels) vm.image = vm.images[vm.i].src.small;
                 
        }

        function prevImg(){
            vm.i = vm.i - 1;
            if (vm.i < 0) vm.i = 0;

            if (vm.pixabay) vm.image = vm.images[vm.i].previewURL;
            if (vm.pexels) vm.image = vm.images[vm.i].src.small;
        }

        function csel(x){
            vm.c1sel = false;
            vm.c2sel = false;
            vm.c3sel = false;
            vm.c4sel = false;
            vm.c5sel = false;
            vm.c6sel = false;
            if (x == 1) vm.c1sel = true;
            if (x == 2) vm.c2sel = true;
            if (x == 3) vm.c3sel = true;
            if (x == 4) vm.c4sel = true;
            if (x == 5) vm.c5sel = true;
            if (x == 6) vm.c6sel = true;
            setBoxColor(x);
        }

        function setBoxColor(x){
            if (x == 1) {vm.bc = 'brown'; vm.fc = '#f8f8ff'; }
            if (x == 2) {vm.bc = '#4682b4'; vm.fc = '#f8f8ff'; }
            if (x == 3) {vm.bc = '#008080'; vm.fc = '#f8f8ff'; }
            if (x == 4) {vm.bc = 'gray'; vm.fc = '#f8f8ff'; }
            if (x == 5) {vm.bc = '#a3297a'; vm.fc = '#f8f8ff'; }
            if (x == 6) {vm.bc = '#c68c53'; vm.fc = '#f8f8ff'; }
            vm.bc2 = color.shadeColor(vm.bc, vm.shade);
        }
        
         function plusShade(){
            vm.shade = vm.shade + 1;
            if  (vm.shade > 10 ) vm.shade = 10;
            vm.bc2 = color.shadeColor(vm.bc, vm.shade/10);
        }

        function minusShade(){
            vm.shade = vm.shade - 1;
            if  (vm.shade < -10 ) vm.shade = -10;
            vm.bc2 = color.shadeColor(vm.bc, vm.shade/10);
        }

        function processImage(){

            var img = '';
            if ($rootScope.DEBUG_MODE) console.log("fimage changed");

            if (vm.pixabay) img = vm.images[vm.i].webformatURL;
            if (vm.pexels) img = vm.images[vm.i].src.medium;

            if (item.fimage != img) {

            var ext = '';
            if (img.indexOf('.jpeg') > -1) ext = '.jpeg';
            if (img.indexOf('.jpg') > -1) ext = '.jpg';
            if (img.indexOf('.png') > -1) ext = '.png';

            var imagefilename = $rootScope.cCategory.title.toLowerCase(); 
                imagefilename = imagefilename.replace(/ /g,'-');
                imagefilename = imagefilename.replace('/','at');
                imagefilename = imagefilename.replace('?','');
       
                //fieldsc.push('fimage');
                //valsc.push('https://rankx.blob.core.windows.net/sandiego/featuredImages/' + imagefilename + ext);
                //Delete old image from storage if exists
                if (item.fimage) {
                    if (item.fimage.indexOf('https://rankx.blob') > -1) {

                        try { imagelist.deleteBlob(item.fimage); }
                        catch (err) { console.log('Error deleting existing image: ', (err)); }
                    }
                }

            var cat = $rootScope.cCategory.cat;
            
            if ($rootScope.DEBUG_MODE) console.log("Process Image - ", cat, img, imagefilename);
            processImageExec(img, imagefilename, cat);
            }

        }

        function processImageExec(imageurl, filename, rank){
            var url = 'https://server.rank-x.com/ImageServer/SaveImage';
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'X-Dreamfactory-API-Key': undefined,
                    'X-DreamFactory-Session-Token': undefined
                },
                data: {
                    'imageurl': imageurl,
                    'filename': filename,
                    'category': rank,                  
                }
            }

            $http(req).then(function (result) {
                if ($rootScope.DEBUG_MODE) console.log("Processing Image Success", result);
                
            }, function (error) {
                $http.defaults.headers.common['X-Dreamfactory-API-Key'] = APP_API_KEY;
                $http.defaults.headers.common['X-DreamFactory-Session-Token'] = $cookies.session_token;
                if ($rootScope.DEBUG_MODE) console.log("Error Processing Image - ", error);
            });
        }

        function changeScopeofAnswers(){
            console.log("change Scope of Answres");
            for (var i=0; i<$rootScope.catansrecs.length; i++){
                if ($rootScope.catansrecs[i].category == $rootScope.cCategory.id){
                    //console.log('Catans: ',$rootScope.catansrecs[i].id, $rootScope.catansrecs[i].category,$rootScope.catansrecs[i].answer);
                    //console.log('Change scope of answer: ',$rootScope.catansrecs[i].answer, ' to ', vm.scope);
                    var idx = $rootScope.answers.map(function(x) {return x.id; }).indexOf($rootScope.catansrecs[i].answer); 
                    if (idx > -1) answer.updateAnswer($rootScope.catansrecs[i].answer,['scope'],[vm.scope]);
                }
            }
        }

        function goBack(){
            //$state.go('cwrapper');
            $rootScope.$emit('backToResults');
        }      
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('addRankforAnswer', addRankforAnswer);

    addRankforAnswer.$inject = ['$location', '$rootScope', '$state','$stateParams', 'table2','dialog','$window','answer'];

    function addRankforAnswer(location, $rootScope, $state, $stateParams, table2, dialog, $window, answer) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addRankforAnswer';

        vm.goBack = goBack;
        
        var item = {};
        var rankTitleOk = true;
        var rankTypeOk = true;
        var rankQuestionOk = true;
            
        vm.addRankingforAnswer = addRankingforAnswer;
        
        vm.typeList = ["Person", "Establishment", "Place", "Activity", "Short-Phrase", "Organization", "Event", "Thing","PersonCust"];

        vm.isAdmin = $rootScope.isAdmin;
        var colors = [];
        var ranks = [];
        var idx = 0;

        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) { vm.sm = true; vm.nsm = false; }
        else { vm.sm = false; vm.nsm = true; }
        
        activate();

        function activate() {

            if ($rootScope.rankforAnswerMode == undefined) $state.go('cwrapper');

            if ($rootScope.rankforAnswerMode == 'edit'){
                ranks = JSON.parse($rootScope.canswer.ranks);
                idx = $rootScope.customranks.map(function(x) {return x.id; }).indexOf(ranks[$rootScope.rankIdx].id);
                vm.rankTitle = $rootScope.customranks[idx].title.replace(' @ '+$rootScope.canswer.name,'');
                vm.question = $rootScope.customranks[idx].question;
                vm.introtext = $rootScope.customranks[idx].introtext;
                vm.bc = ranks[$rootScope.rankIdx].bc;
                vm.fc = ranks[$rootScope.rankIdx].fc;
                vm.buttonLabel = 'Edit';              
            }

            else {            
                vm.rankTitle = 'Enter a title...';
                vm.question = 'Enter a question...';
                vm.bc = 'gray';
                vm.fc = 'lightgray';
                vm.buttonLabel = 'Add';
                vm.introtext = 'Tell us what your rank is about...';
            }
            //loadData();
            if ($rootScope.DEBUG_MODE) console.log("addRankforAnswer page Loaded!");
            
        }
        
        function validateData(){
            
            if (vm.rankTitle == 'Enter a title...' || vm.rankTitle == '' 
            || vm.rankTitle.length < 10) rankTitleOk = false;
            else rankTitleOk = true;
            if (vm.question == 'Enter a question...' || vm.question == ''
            || vm.question.length < 3 ) rankQuestionOk = false;
            else rankQuestionOk = true;
            
            item.title = vm.rankTitle +' @ ' + $rootScope.canswer.name;
            item.tags = '';
            item.keywords = '';
            item.type = 'Simple';
            item.question = vm.question;
            item.views = 0;
            item.answers = 0;
            item.introtext = vm.introtext;
            item.ismp = false;
            item.owner = $rootScope.canswer.id;
            
            rankTypeOk = true;

            colors = [vm.bc, vm.fc];      
           
        }

        function addRankingforAnswer(){
            validateData();
                var tfields = [];
                var tvals = [];

                if (rankTitleOk && rankTypeOk && rankQuestionOk) {
                    if ($rootScope.rankforAnswerMode == 'add'){
                        table2.addTableforAnswer(item,colors,$rootScope.canswer.id).then(function(){
                            $state.go('answerRanksManager');
                        });
                    }
                    else{
                        if ($rootScope.customranks[idx].title != vm.rankTitle +' @ ' + $rootScope.canswer.name){
                            tfields.push('title');
                            tvals.push(vm.rankTitle +' @ ' + $rootScope.canswer.name);                            
                        }
                        if ($rootScope.customranks[idx].question != vm.question){
                            tfields.push('question');
                            tvals.push(vm.question);                            
                        }
                        if ($rootScope.customranks[idx].intro != vm.introtext){
                            tfields.push('introtext');
                            tvals.push(vm.introtext);                            
                        }
                        if (tfields.length > 0) {
                            table2.update($rootScope.customranks[idx].id, tfields, tvals).then(function(){
                            $state.go('answerRanksManager');
                        });
                        }
                        
                        if (vm.bc != ranks[$rootScope.rankIdx].bc || vm.fc != ranks[$rootScope.rankIdx].fc){
                            ranks[$rootScope.rankIdx].bc = vm.bc;
                            ranks[$rootScope.rankIdx].fc = vm.fc;
                            var ranksStr = JSON.stringify(ranks);
                            answer.updateAnswer($rootScope.canswer.id,['ranks'],[ranksStr]).then(function(){
                            $state.go('answerRanksManager');
                        });
                        }
                    }
                    
                    //clearFields();
                }
                else {
                    if (!rankTitleOk) dialog.getDialog('rankTitle');
                    else if (!rankQuestionOk) dialog.getDialog('rankQuestion');
                    else dialog.getDialog('rankType');
                }                  
        }
        
        function clearFields(){
            item = {};
            vm.rankTitle = '';
            vm.tags = '';
            vm.keywords = '';
            vm.type = '';
            vm.isatomic = true;
            vm.question = '';
            vm.image1url = '';
            vm.image2url = '';
            vm.image3url = '';
        }
        
        function goBack(){
            $state.go('answerRanksManager');
        }
                     
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('addCustomRank', addCustomRank);

    addCustomRank.$inject = ['$location', '$rootScope', '$state','$stateParams','categories','search',
    'dialog','$window','answer','color','pixabay','pexels','$http','table','$timeout','$scope'];

    function addCustomRank(location, $rootScope, $state, $stateParams, categories, search,
     dialog, $window, answer, color, pixabay, pexels, $http, table, $timeout, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addCustomRank';

        vm.goBack = goBack;
        vm.selType = selType;
        vm.selCat = selCat;
        vm.minusShade = minusShade;
        vm.plusShade = plusShade;
        vm.valRank = valRank;
        vm.alertOk = alertOk;
        vm.tagsOk = tagsOk;
        vm.questionOk = questionOk;
        vm.getImages = getImages;
        vm.nextImg = nextImg;
        vm.prevImg = prevImg;
        vm.selectImg = selectImg;
        vm.processImage = processImage;
        vm.whatisrankquestion = whatisrankquestion;
        vm.whataretags = whataretags;
        vm.selImgBank = selImgBank;
        vm.selScopeGeneral = selScopeGeneral;
        vm.imageBanksDialog = imageBanksDialog;
        vm.csel = csel;
        vm.c1sel = true;
        vm.showAlert = false;
        vm.showAddButton = false;
        vm.selImageEnable = 'disabled';
        vm.question = 'Who do you recommend?';    
        
        var itemt = {};
        var item = {};
        var rankTitleOk = true;
        var rankTypeOk = true;
        var rankQuestionOk = true;
        vm.imageLoading = false;
            
        vm.editRank = editRank;
        vm.addRank = addRank;
        
        vm.typeList = ["Person", "Establishment", "Place", "Activity", "Short-Phrase", "Organization", "Event", "Thing","PersonCust"];

        vm.isAdmin = $rootScope.isAdmin;
        var colors = [];
        var ranks = [];
        var idx = 0;
        var idx2 = 0;

        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) { vm.sm = true; vm.nsm = false; }
        else { vm.sm = false; vm.nsm = true; }
        
        activate();

        function activate() {
                //vm.rankTitle = 'Enter a title...';
                //vm.question = 'Enter a question...';
                vm.resLength = -1;
                vm.rankType = 'Select ranking type';
                vm.rankCat = 'Choose a category';
                vm.selScopeGeneralText = "Choose Scope...";
                vm.selScopeCityText = "San Diego";
                vm.image = $rootScope.EMPTY_IMAGE;
                vm.i = 0;
                vm.step = 1;
                vm.shade = 0;
                setBoxColor(1);
                vm.buttonLabel = 'Add Rank';
                selImgBank(1);
            
            //loadData();
            if ($rootScope.DEBUG_MODE) console.log("addCustomRank page Loaded!");
        }
        
        function validateData(){
            
            var titleOk = true;
            var tagsOk = true;
            var questionOk = true;

            if (vm.rankTitle.length < 10) {dialog.getDialog('rankTitle'); titleOk = false;}
            if (vm.tags < 5) {dialog.getDialog('rankTags'); tagsOk = false;}
            if (vm.question.length < 10) {dialog.getDialog('rankQuestion'); questionOk = false;}

            return titleOk && tagsOk && questionOk;                 

        }

        function editRank(){
            validateData();

                var tfields = [];
                var tvals = [];

                if (rankTitleOk && rankTypeOk && rankQuestionOk) {
                    if ($rootScope.rankforAnswerMode == 'add'){
                        table.addTableforAnswer(item,colors,$rootScope.canswer.id).then(function(){
                            $state.go('answerRanksManager');
                        });
                    }
                    else{
                        if ($rootScope.content[idx].title != vm.rankTitle +' @ ' + $rootScope.canswer.name){
                            tfields.push('title');
                            tvals.push(vm.rankTitle +' @ ' + $rootScope.canswer.name);                            
                        }
                        if ($rootScope.content[idx].question != vm.question){
                            tfields.push('question');
                            tvals.push(vm.question);                            
                        }
                        if (tfields.length > 0) 
                        table.update($rootScope.content[idx].id, tfields, tvals).then(function(){
                            $state.go('answerRanksManager');
                        });

                        if (vm.bc != ranks[$rootScope.rankIdx].bc || vm.fc != ranks[$rootScope.rankIdx].fc){
                            ranks[$rootScope.rankIdx].bc = vm.bc;
                            ranks[$rootScope.rankIdx].fc = vm.fc;
                            var ranksStr = JSON.stringify(ranks);
                            answer.updateAnswer($rootScope.canswer.id,['ranks'],[ranksStr]).then(function(){
                            $state.go('answerRanksManager');
                        });
                        }
                    }
                    
                    //clearFields();
                }
                else {
                    if (!rankTitleOk) dialog.getDialog('rankTitle');
                    else if (!rankQuestionOk) dialog.getDialog('rankQuestion');
                    else dialog.getDialog('rankType');
                }                  
        }

        function addRank(){

            var dataOk = validateData();

            if (dataOk){

                itemt = {};
                item = {};

                item.category = vm.rankTitle;
                item.type = vm.type;
                item.tags = vm.tags;
                item.question = vm.question;
                item.user = $rootScope.user.id;
                item.timestmp = Date.now();
                item.bc = vm.bc;
                item.fc = vm.fc;
                item.shade = vm.shade;
                item.keywords = '';
                item.fimage = vm.image;
                item.scope = $rootScope.SCOPE;

                categories.addCategory(item).then(function(result){
                    
                    itemt = {};
                    itemt.views = 0;
                    itemt.answers = 0;
                    itemt.numcom = 0;
                    itemt.ismp = true;
                    itemt.isatomic = true;
                    itemt.cat = result.resource[0].id;
                    itemt.nh = 1;
                    itemt.scope = $rootScope.SCOPE;

                    //Create and update slug
                    //Create table record
                    table.addTable(itemt).then(function(resultx){
                        //$timeout(function(){
                        //console.log("result ---> ", resultx.resource[0].id);
                        processImage(itemt.cat);
                        //dialog.getDialog('newRank');
                        var titlemsg = 'Success!';
                        var message = 'Your ranking has been created succesfully! <br><br> Now add items to rank and '+
                        'don\'t forget to share your ranking with other users!';
                        idx2 = resultx;
                        dialog.notificationWithCallback(titlemsg, message, goToNewRank);
                        
                        //},2000);
                    });

                    if ($rootScope.DEBUG_MODE) console.log("category added --- ", result);
                });
            }
        }

        function goToNewRank(){
            $state.go('rankSummary',{index: idx2}); //slug matches filename
        }
        
        function clearFields(){
            item = {};
            vm.rankTitle = '';
            vm.tags = '';
            vm.keywords = '';
            vm.type = '';
            vm.isatomic = true;
            vm.question = '';
            vm.image1url = '';
            vm.image2url = '';
            vm.image3url = '';
        }

        function selType(x){
            if (x == 1) {vm.rankType = 'ESTABLISHMENTS'; vm.type='Establishment';}
            if (x == 2) {vm.rankType = 'PEOPLE'; vm.type='Person';}
            if (x == 3) {vm.rankType = 'ORGANIZATIONS'; vm.type='Organization';}
            if (x == 4) {vm.rankType = 'PLACES'; vm.type='Place';}
            if (x == 5) {vm.rankType = 'OPINIONS'; vm.type='Short-Phrase';}
            if (x == 6) {vm.rankType = 'CONTRACTORS'; vm.type='PersonCust';}
            if (x == 7) {vm.rankType = 'ITEM / OBJECTS'; vm.type='Thing';}
            if (x == 8) {vm.rankType = 'EVENTS'; vm.type='Event';}
            vm.step = 3;
        }

        function selCat(x){
            if (x == 1) {vm.rankCat = 'FOOD'; vm.tags = 'food';}
            if (x == 2) {vm.rankCat = 'LIFESTYLE'; vm.tags = 'lifestyle';}
            if (x == 3) {vm.rankCat = 'HEALTH'; vm.tags= 'health';}
            if (x == 4) {vm.rankCat = 'SOCIAL'; vm.tags='social';}
            if (x == 5) {vm.rankCat = 'SPORTS'; vm.tags='sports';}
            if (x == 6) {vm.rankCat = 'PERSONALITIES'; vm.tags='personalities';}
            if (x == 7) {vm.rankCat = 'SERVICES'; vm.tags='services';}
            if (x == 8) {vm.rankCat = 'BEAUTY'; vm.tags='beauty';}
            if (x == 9) {vm.rankCat = 'CITY'; vm.tags='city';}
            if (x == 10) {vm.rankCat = 'POLITICS'; vm.tags='politics';}
            if (x == 11) {vm.rankCat = 'SCIENCE & TECH'; vm.tags='technology';}
            if (x == 12) {vm.rankCat = 'LOVE & RELATIONSHIPS'; vm.tags='dating';}
            if (x == 13) {vm.rankCat = 'FAMILY'; vm.tags='family';}
            vm.step = 2;
        }

        function csel(x){
            vm.c1sel = false;
            vm.c2sel = false;
            vm.c3sel = false;
            vm.c4sel = false;
            vm.c5sel = false;
            vm.c6sel = false;
            if (x == 1) vm.c1sel = true;
            if (x == 2) vm.c2sel = true;
            if (x == 3) vm.c3sel = true;
            if (x == 4) vm.c4sel = true;
            if (x == 5) vm.c5sel = true;
            if (x == 6) vm.c6sel = true;
            setBoxColor(x);
        }

        function setBoxColor(x){
            if (x == 1) {vm.bc = 'brown'; vm.fc = '#f8f8ff'; }
            if (x == 2) {vm.bc = '#4682b4'; vm.fc = '#f8f8ff'; }
            if (x == 3) {vm.bc = '#008080'; vm.fc = '#f8f8ff'; }
            if (x == 4) {vm.bc = 'gray'; vm.fc = '#f8f8ff'; }
            if (x == 5) {vm.bc = '#a3297a'; vm.fc = '#f8f8ff'; }
            if (x == 6) {vm.bc = '#c68c53'; vm.fc = '#f8f8ff'; }
            vm.bc2 = color.shadeColor(vm.bc, vm.shade);
        }
        
         function plusShade(){
            vm.shade = vm.shade + 1;
            if  (vm.shade > 10 ) vm.shade = 10;
            vm.bc2 = color.shadeColor(vm.bc, vm.shade/10);
        }

        function minusShade(){
            vm.shade = vm.shade - 1;
            if  (vm.shade < -10 ) vm.shade = -10;
            vm.bc2 = color.shadeColor(vm.bc, vm.shade/10);
        }

        function valRank(){
            if (vm.rankTitle == undefined) {
                dialog.getDialog('rankTitle');
            }
            else {
                if (vm.rankTitle.indexOf('San Diego') < 0 && vm.scopeIsCity){
                    vm.rankTitle = vm.rankTitle + ' in San Diego';
                    var title = 'We made an adjustment';
                    var message = "Because you are adding a City Ranking, we added 'in San Diego' to your Rank Title.";
                    dialog.notificationWithCallback(title,message,getSimilarRanks);
                }
                //if (vm.rankTitle.length < 10) dialog.getDialog('rankTitle'); 
                else getSimilarRanks();
            }
        }

        function getSimilarRanks(){
             vm.similarRanks = search.searchRanks2(vm.rankTitle);
             if (vm.similarRanks.length > 0){
                vm.showAlert = true;
                //$scope.$apply();
             }
             else alertOk();

        }

        function getImages() {
            var qry = vm.imageQuery.replace(' ', '+');
            vm.images = [];
            vm.i = 0;

            if (vm.pixabay) {
                vm.imageLoading = true;
                pixabay.search(qry).then(function (result) {
                    if ($rootScope.DEBUG_MODE) console.log("Pixabay results - ", result);
                    vm.numResults = result.length;

                    for (var i = 0; i < vm.numResults; i++) {
                        vm.images.push(result[i]);
                        //console.log("image i - ", result[i].previewURL);

                    }
                    if (vm.images[vm.i]) {
                        vm.image = vm.images[vm.i].previewURL;
                        vm.selImageEnable = '';
                    }
                    else {
                        vm.selImageEnable = 'disabled';
                        dialog.getDialog('noImages');
                    }

                    vm.imageLoading = false;
                });
            }
            if (vm.pexels) {
                vm.imageLoading = true;
                //pexels.search(qry).then(function (result) {
                pexels.reqFromServer(qry).then(function (res) {
                    
                    var result = res.data.photos; //remove this line for direct query
                    if ($rootScope.DEBUG_MODE) console.log("Pexels results - ", result);
                    vm.numResults = result.length;

                    for (var i = 0; i < vm.numResults; i++) {
                        vm.images.push(result[i]);
                        //console.log("image i - ", result[i].previewURL);
                    }
                    if (vm.images[vm.i]) {
                        vm.image = vm.images[vm.i].src.small;
                        vm.selImageEnable = '';
                    }
                    else {
                        vm.selImageEnable = 'disabled';
                        dialog.getDialog('noImages');
                    }

                    vm.imageLoading = false;
                });
            }
        }

        function nextImg(){
            vm.i = vm.i + 1;
            if (vm.i > vm.images.length -1) vm.i = vm.images.length-1;
            if(vm.pixabay && vm.images[vm.i]) vm.image = vm.images[vm.i].previewURL;
            if(vm.pexels && vm.images[vm.i]) vm.image = vm.images[vm.i].src.small; 
        }

        function prevImg(){
            vm.i = vm.i - 1;
            if (vm.i < 0) vm.i = 0;
            
            if(vm.pixabay && vm.images[vm.i]) vm.image = vm.images[vm.i].previewURL;
            if(vm.pexels && vm.images[vm.i]) vm.image = vm.images[vm.i].src.small; 
        }

        function selectImg(){
            vm.step = 7;
            vm.showAddButton = true;
        }

        function alertOk(){
            vm.showAlert = false;
            vm.step = 4;
            //$scope.$apply();
        }

        function tagsOk(){
            if (vm.tags.length == 0) dialog.getDialog('rankTags');
            else vm.step = 6;
        }

        function questionOk(){
              if (vm.question == undefined) {
                dialog.getDialog('rankQuestion');
            }
            else {
                if (vm.question.length < 10) dialog.getDialog('rankQuestion'); 
                else {
                    vm.step = 5;
                }
            }
        }

        function whatisrankquestion(){
            dialog.whatisrankquestion();
        }
        function whataretags(){
            dialog.getDialog('whataretags');
        }

        function processImage(category){

            var fext = '';       
            var cat = category;
            var imageurl = '';
            
            if(vm.pixabay) imageurl = vm.images[vm.i].webformatURL;
            if(vm.pexels) imageurl = vm.images[vm.i].src.medium;

            if (imageurl.indexOf('jpg') > -1) fext = '.jpg';
            if (imageurl.indexOf('png') > -1) fext = '.png';
            if (imageurl.indexOf('jpeg') > -1) fext = '.jpeg';
            
            var filename = vm.rankTitle.toLowerCase(); 
            filename = filename.replace(/ /g,'-');
            filename = filename.replace('?','');
            filename = filename + '-' + cat;

            var fimage = 'https://rankx.blob.core.windows.net/sandiego/featuredImages/' + filename + fext;
            
            processImageExec(imageurl, filename, cat);
            
            /*
            $timeout(function(){
                categories.update(category, ['fimage'], [fimage]);
            },2000);*/
            
            if ($rootScope.DEBUG_MODE) console.log("Process Image - ", cat, imageurl, filename);
            
        }

        function processImageExec(imageurl, filename, category){
            var url = 'https://server.rank-x.com/ImageServer/SaveImage';
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'X-Dreamfactory-API-Key': undefined,
                    'X-DreamFactory-Session-Token': undefined
                },
                data: {
                    'imageurl': imageurl,
                    'filename': filename,
                    'category': category,                  
                }
            }

            $http(req).then(function (result) {
                if ($rootScope.DEBUG_MODE) console.log("Processing Image Success", result);
                
            }, function (error) {
                if ($rootScope.DEBUG_MODE) console.log("Error Processing Image - ", error);
            });
        }

        function goBack(){
            if ($rootScope.previousState == 'rankSummary')  $state.go('rankSummary', { index: $rootScope.cCategory.slug });
            else if ($rootScope.previousState == 'answerDetail')  $state.go('answerDetail', { index: $rootScope.canswer.slug });
            else $rootScope.$emit('backToResults');
        }

        function selImgBank(x){
            if (x == 1){
                vm.pixabay = true;
                vm.pexels = false;
            }
            if (x == 2){
                vm.pixabay = false;
                vm.pexels = true;
            }
        }

        function selScopeGeneral(x){
            if (x==1) { 
                vm.scopeIsGeneral = true; 
                vm.scopeIsCity = false; 
                vm.selScopeGeneralText = 'General';
            }
            if (x==2) { 
                vm.scopeIsGeneral = false; 
                vm.scopeIsCity = true; 
                vm.selScopeGeneralText = 'City';
            }       
        }

        function imageBanksDialog(){
            dialog.imageBank();
        }
                     
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('trends', trends);

    trends.$inject = ['$location', '$rootScope', '$state', '$window'];

    function trends(location, $rootScope, $state, $window) {
        
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('promotertos', promotertos);

    promotertos.$inject = ['$state','$rootScope'];

    function promotertos($state, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Promoter Terms of Service';

        vm.goBack = goBack;
        
        activate();

        function activate() {
            console.log("Promoter Terms of Service page Loaded!");
        }

        function goBack() {
            if ($rootScope.previousState == 'rankSummary')
                    $state.go('rankSummary', {index: $rootScope.cCategory.slug});
            else if ($rootScope.previousState == 'answerDetail')
                    $state.go('answerDetail', {index: $rootScope.canswer.slug});
            else if ($rootScope.previousState == 'addAnswer')
                    $state.go('addAnswer', {index: $rootScope.canswer.slug});
            else if ($rootScope.previousState == 'editAnswer')
                    $state.go('editAnswer', {index: $rootScope.canswer.slug});                
            else if ($rootScope.previousState == 'about')
                    $state.go('about');
            else $state.go('cwrapper');                
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('privacypolicy', privacypolicy);

    privacypolicy.$inject = ['$state','$rootScope'];

    function privacypolicy($state, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'privacypolicy';

        vm.goBack = goBack;
        
        activate();

        function activate() {            

            console.log("privacypolicy page Loaded!");
            
        }

        function goBack() {
            if ($rootScope.previousState == 'rankSummary')
                    $state.go('rankSummary', {index: $rootScope.cCategory.id});
            else if ($rootScope.previousState == 'answerDetail')
                    $state.go('answerDetail', {index: $rootScope.canswer.id});
            else if ($rootScope.previousState == 'addAnswer')
                    $state.go('addAnswer', {index: $rootScope.canswer.id});
            else if ($rootScope.previousState == 'editAnswer')
                    $state.go('editAnswer', {index: $rootScope.canswer.id});                
            else if ($rootScope.previousState == 'about')
                    $state.go('about');
            else {
                $rootScope.$emit('backToResults');
                $state.go('cwrapper');
            }                
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('mybusiness', mybusiness);

    mybusiness.$inject = ['$location', '$rootScope', '$state', '$window', '$scope',
    'useraccnt','dialog','answer','$http','promoter', 'SERVER_URL', '$q', 'setting', 'codeprice'];

    function mybusiness(location, $rootScope, $state, $window, $scope, 
        useraccnt, dialog, answer, $http, promoter, SERVER_URL, $q, setting, codeprice) {
        /* jshint validthis:true */
        if($window.location.href.indexOf('cardUpdate') !== -1) {
            var isSuccess =  $window.location.href.slice($window.location.href.indexOf('cardUpdate')).split('=')[1].split('&')[0];
            if(isSuccess == 'success'){
                //$window.alert("Successfully changed card details.");
                dialog.notificationSuccess('Success', "Successfully changed card details.");
            } else {
                $window.alert($window.location.href.slice($window.location.href.indexOf('messgage')).split('=')[1].split('&')[0]);
            }
        }
      
        var vm = this;
        vm.title = 'mybusiness';

        vm.overview = true;
        vm.manageview = false;
        vm.codeOk = false;
        vm.getRanks = false;
        vm.getPremium = false;
        vm.dataReady = false;
        vm.showInvoices = false;
        vm.showPaymentInfo = false;
        vm.processInProgress = false;
        
        vm.SERVER_URL = SERVER_URL;

        //Methods
        vm.gotoanswer = gotoanswer;
        vm.gotomanage = gotomanage;
        vm.goCheckout = goCheckout;
        vm.unbind = unbind;
        vm.goBack = goBack;
        vm.ranksQty = 1;
        vm.plusQty = plusQty;
        vm.minusQty = minusQty;
        vm.checkcode = checkcode;
        vm.cancelPremium = cancelPremium;
        vm.cancelAllRanks = cancelAllRanks;
        vm.editRanks = editRanks;
        vm.cancelAll = cancelAll;
        vm.editContact = editContact;
        vm.showInvoicsClicked = showInvoicsClicked;
        vm.showPaymentInfoEditClicked = showPaymentInfoEditClicked;
        vm.changeCardNumber = changeCardNumber;
        vm.GetFormattedDate = GetFormattedDate;
        vm.hideInvoices = hideInvoices;
        vm.showTOSCustomersDlg = showTOSCustomersDlg;
        vm.showLearnMore = showLearnMore;
        vm.mybizs = [];
        vm.clickStripeCheckout = clickStripeCheckout;
        vm.stripeFormSubmit = stripeFormSubmit;
        vm.addSubscription = addSubscription;
        activate();
        vm.noAns = false;

        var cancelAll = false;
        var cancelPremium = false;
        var cancelRanks = false;
        var cancelNumRanks = 0;
        var fields = [];
        var labels = [];
        var vals = [];

        function changeCardNumber(){
            $state.go('mybusiness', {}, {reload: true})
        }
        function activate() {
            if ($rootScope.DEBUG_MODE) console.log("activate business page")
            //dialog.notificationWithCallback(
            //    'Info',
            //    'The Purchasing of Premium Feautures is not available at this moment. Please try again later.',
            //    goBack);

            $q.all([ useraccnt.getuseraccnt(),  setting.getSetting(), codeprice.get()]).then(function(data){
                $rootScope.useraccnts = data[0];
                vm.CUSTOM_RANK_PRICE = data[1].CUSTOM_RANK_PRICE;
                $rootScope.codeprices = data[2];
                vm.dataReady = true;
                loadData();
            });

            //loadData();
            if ($rootScope.DEBUG_MODE) console.log("mybusiness page Loaded!");

        }

        function loadData(){
            vm.mybizs = [];
            var accntExists = false;
            var bizObj = {};
            for (var i=0; i<$rootScope.answers.length; i++){
                if ($rootScope.answers[i].owner == $rootScope.user.id  && 
                    ($rootScope.answers[i].type == 'Establishment' || $rootScope.answers[i].type == 'PersonCust')){
                    accntExists = false;
                    bizObj = {};
                    bizObj = $rootScope.answers[i];

                    //Check that record exists also in user accounts, if not, it will get created
                    for (var j=0; j<$rootScope.useraccnts.length; j++){
                        if ($rootScope.useraccnts[j].answer == $rootScope.answers[i].id) { 
                            accntExists = true;
                            bizObj.status = $rootScope.useraccnts[j].status;
                            bizObj.bizcat = $rootScope.useraccnts[j].bizcat;
                            bizObj.email = $rootScope.useraccnts[j].email;
                            bizObj.accountid = $rootScope.useraccnts[j].id;
                            bizObj.stripeid = $rootScope.useraccnts[j].stripeid;
                            bizObj.lastPaymentMade = formatDate($rootScope.useraccnts[j].lastPaymentMade);
                            bizObj.nextPaymentDue = formatDate($rootScope.useraccnts[j].nextPaymentDue);
                            bizObj.lastPaymentAmount = $rootScope.useraccnts[j].lastPaymentAmount/100;
                            bizObj.nextPaymentAmount = $rootScope.useraccnts[j].nextPaymentAmount/100;
                            bizObj.istrial = $rootScope.useraccnts[j].istrial;
                            bizObj.discountEndDate = formatDate($rootScope.useraccnts[j].discountEndDate);
                            bizObj.monthlyCost = $rootScope.useraccnts[j].monthlyCost;
                            bizObj.isPremium = $rootScope.useraccnts[j].ispremium;
                            bizObj.hasRanks = $rootScope.useraccnts[j].hasranks;
                            bizObj.ranksQty = $rootScope.useraccnts[j].ranksqty;
                            bizObj.stripesub = $rootScope.useraccnts[j].stripesub;
                            bizObj.stripesipremium = $rootScope.useraccnts[j].stripesipremium;
                            bizObj.stripesiranks = $rootScope.useraccnts[j].stripesiranks;
                            bizObj.user = $rootScope.useraccnts[j].user;
                            bizObj.firstname = $rootScope.user.first_name;
                            bizObj.lastname = $rootScope.user.last_name;

                            bizObj.promocode = $rootScope.useraccnts[j].promocode;
                                
                            if (bizObj.isPremium) {
                                bizObj.status = 'Premium'; bizObj.style = 'background-color:#47d147';
                            }
                            else {bizObj.status = 'Basic'; bizObj.style = 'background-color:#ffffff';}

                            if (bizObj.hasRanks) {
                                bizObj.status2 = bizObj.ranksQty + ' Custom Ranks';
                                    bizObj.style2 = 'background-color:#47d147';
                            }
                            else {bizObj.status2 = 'No Custom Ranks'; bizObj.style2 = 'background-color:#ffffff';}

                            if (bizObj.istrial) {
                                var todayDate = Date.now();
                                var endDate = new Date(bizObj.discountEndDate);
                                bizObj.daysLeft = Math.floor((endDate - todayDate)/86400000)
                            }
                            //get monthly price
                            for (var k=0; k<$rootScope.codeprices.length; k++){
                                //console.log($rootScope.codeprices[k].code, bizObj.bizcat);
                                if ($rootScope.codeprices[k].code == bizObj.bizcat){
                                    bizObj.price = $rootScope.codeprices[k].price;
                                    break;
                                }
                            }
                            break;
                        }                        
                    }
                    if (!accntExists) 
                        useraccnt.adduseraccnt($rootScope.answers[i]);
                    bizObj.loadingInvoices = true;
                    bizObj.invoices = [];
                    loadInvoicesAndCustomer(bizObj);
                    loadPromoter(bizObj);
                    if ($rootScope.DEBUG_MODE) console.log("bizObj - ", bizObj);
                    vm.mybizs.push(bizObj);     
                }
            }
  
            //console.log("vm.mybizs", vm.mybizs);
            if (vm.mybizs.length == 0) vm.noAns = true;           
        }

        function showInvoicsClicked(){
            vm.showInvoices = !vm.showInvoices;
            if (vm.showInvoices) vm.showPaymentInfo = false; 
        }
        function hideInvoices(){
            vm.showInvoices = false;   
        }
        function showPaymentInfoEditClicked(){
            vm.showPaymentInfo = !vm.showPaymentInfo;
            vm.showInvoices = false;
        }
        function GetFormattedDate(date) {
            var month = format(date.getMonth() + 1);
            var day = format(date.getDate());
            var year = format(date.getFullYear());
            return month + "/" + day + "/" + year;
        }
        function loadPromoter(biz){
            if(biz.promocode){
                promoter.getbyCode(biz.promocode)
                .then(function(promoterObj){
                    if(promoterObj.length >= 1)
                        biz.promoterObj = promoterObj[0];
            
                })
            } else {
                biz.promoterObj = undefined;
            }
        }
        function loadInvoicesAndCustomer(biz){
            if([undefined, '', '0'].indexOf(biz.stripeid) === -1){
                useraccnt.getuseraccntInvoicesAndCustomer(biz.stripeid).then(function(result){
                    
                    var invoices = angular.copy(result.invoices);
                    biz.invoices = invoices.data.map(function(invoice){
                        invoice.period_end = new Date(invoice.period_end * 1000);
                        invoice.date = moment(invoice.date * 1000).format('YYYY-MM-DD');
                        invoice.period_start = new Date(invoice.period_start * 1000);
                        
                        if (invoice.discount) {
                            if(Date.now() > invoice.discount.end * 1000)
                                invoice.discountMsg = "Trial Ended";
                            else    
                                invoice.discountMsg = "Trial " + Math.ceil(moment.duration(invoice.discount.end * 1000- Date.now()).asDays()) + ' Days left';
                        } else {
                            invoice.discountMsg = 'No Discount';
                        }
                        return invoice;
                    });
                    biz.customer = result.customer;
                    biz.loadingInvoices = false;
                }).catch(function(err){
                    biz.invoices = [];
                    console.log("Error getting Stripe Invoices - ", err);
                })

            } else {

            }
        }

        function gotoanswer(x){
            $state.go('answerDetail', {index: x.slug});
        }

        function gotomanage(x){
            vm.showInvoices = false;
            vm.showPaymentInfo = false;
            
            vm.codeMsg = 'Enter a code and validate it using the \'Check code\' button';
            vm.promocode = '';
            //$state.go('mybiz');
            vm.business = x;
            vm.getRanks = false;
            vm.getPremium = false;
            vm.ranksQty = 1;
            vm.overview = false;
            vm.manageview = true;
            if (!x.isPremium || !x.hasRanks) vm.sell = true;
            else vm.sell = false;
            checkData();

            if ($rootScope.DEBUG_MODE) console.log("vm.business",x);
            
        }

        function goBack() {
            if (vm.manageview == true) {
                vm.overview = true;
                vm.manageview = false;
                vm.checkout = false;
                //$scope.$apply();
                return;
            }
            if (vm.checkout == true) {
                vm.manageview = true;
                vm.checkout = false;
                vm.overview = false;
                return;
            }
            if (vm.overview == true){

                if ($rootScope.previousState == 'rankSummary')
                    $state.go('rankSummary', { index: $rootScope.cCategory.slug });
                else if ($rootScope.previousState == 'answerDetail')
                    $state.go('answerDetail', { index: $rootScope.canswer.slug });
                else if ($rootScope.previousState == 'addAnswer')
                    $state.go('addAnswer', { index: $rootScope.canswer.id });
                else if ($rootScope.previousState == 'editAnswer')
                    $state.go('editAnswer', { index: $rootScope.canswer.id });
                else if ($rootScope.previousState == 'about')
                    $state.go('about');
                else {
                    $rootScope.$emit('backToResults');
                    //$state.go('cwrapper');
                }
            }                
        }

        function unbind(id){
            dialog.unbindAccount(vm.business, exec_unbind);
        }

        function exec_unbind(){
            answer.updateAnswer(vm.business.id,['owner'],[0]);
            useraccnt.deleteAccount(vm.business.stripeid, vm.business.accountid, vm.business.answer)
            .then(function(res){
                vm.mybizs = [];
                loadData();
                vm.overview = true;
                vm.manageview = false;
            })
            .catch(function(err){
                console.log(err);
            });
        }

        function plusQty(){
            vm.ranksQty = vm.ranksQty + 1;
        }

        function minusQty(){
            vm.ranksQty = vm.ranksQty - 1;
            if (vm.ranksQty < 1) vm.ranksQty = 1;
        }

        function checkcode(){
            if (vm.promocode.length == 8){
                //TODO check code is valid
                vm.codeMsg = "Validating code ..."

                promoter.getbyCode(vm.promocode).then(function(result){
                    console.log("code exists - ", result.length, result);
                    if (result.length > 0){
                          vm.codeOk = true;
                          vm.codeMsg = 'This code gets you 60 days free on all your subscriptions!';  
                    }
                    else {
                        vm.codeOk = false;
                        vm.codeMsg = 'Sorry, this is not a valid code.';
                    }    
                });           
            }
            else {
                vm.codeOk = false;
                vm.codeMsg = 'Sorry, this is not a valid code.';
            }
        }

        function checkData(){
            vm.contactInfoOk == false;
            vm.fnok = false; //first name ok
            vm.lnok = false; //last name ok
            vm.emok = false; //email ok
            
            if (vm.business.firstname != undefined && vm.business.firstname != '' && vm.business.firstname != null){
                vm.fnok = true;
            }
            if (vm.business.lastname != undefined && vm.business.lastname != '' && vm.business.lastname != null){
                vm.lnok = true;
            }
            if (vm.business.email != undefined && vm.business.email != '' && vm.business.email != null &&
                vm.business.email.indexOf('@')>-1){
                vm.emok = true;
            }
            vm.contactInfoOk = vm.fnok && vm.lnok && vm.emok;

            //check business category
            if (vm.business.bizcat == undefined || vm.business.bizcat == '' || vm.business.bizcat == null ){
                dialog.notificationWithCallback(
                    'Missing Data',
                    'The business category for this establishment or profile has not been assigned. Please '+
                    'contact rank-x at <strong>contact@rank-x.com</strong> for more information.',
                    goBack);
            }
        }

        function goCheckout(){
            vm.acceptTOS = false;
            //Verify data
            
            if (vm.contactInfoOk == false) {
                if (!vm.fnok) dialog.getDialog('invalidFirstName');
                if (!vm.lnok) dialog.getDialog('invalidLastName');
                if (!vm.emok) dialog.getDialog('invalidEmail');
            }
            else if (vm.getRanks == false && vm.getPremium == false ) {
                dialog.getDialog('nothingSelectedForPurchase');
            }
            else {
                vm.total = vm.getRanks*vm.ranksQty*vm.CUSTOM_RANK_PRICE + vm.getPremium*vm.business.price;
                vm.manageview = false;
                vm.checkout = true;
                loopCheck('purchase');
                
            }
        }

        function cancelPremium(){
            //Check if there are other subscriptions other than Premium, if not delete entire subscription otherwise StripeServer
            //gives error
            if (vm.business.hasRanks){
                cancelAll = false;
                cancelPremium = true;
                cancelRanks = false;
                cancelNumRanks = 0;
                dialog.confirmCancel(vm.business, 'Premium',execCancel);
            }
            else{
                cancelAll = true;
                cancelPremium = false;
                cancelRanks = false;
                cancelNumRanks = 0;
                dialog.confirmCancel(vm.business, 'Premium',execCancel);
            }
        }

        function execCancel(){
            var url = SERVER_URL + 'StripeServer/cancel';
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'X-Dreamfactory-API-Key': undefined,
                    'X-DreamFactory-Session-Token': undefined
                },
                data: {
                    'cancelAll': cancelAll,
                    'cancelPremium': cancelPremium,
                    'cancelRanks': cancelRanks,
                    'cancelNumRanks': cancelNumRanks,
                    'stripeId': vm.business.stripeid,
                    'useraccntId': vm.business.accountid,
                    'stripesub' : vm.business.stripesub,
                    'stripesipremium' : vm.business.stripesipremium,
                    'stripesiranks' : vm.business.stripesiranks,
                    'answerId': vm.business.id                   
                }
            }

            $http(req).then(function (result) {
                if ($rootScope.DEBUG_MODE) console.log("Cancelling Premium Membership Success", result);
                dialog.notificationSuccess('Success', 'Succesfully cancelled your Premium Membership');
            }, function (error) {
                if ($rootScope.DEBUG_MODE) console.log("Error Cancelling Premium Membership - ", error);
                dialog.notificationDanger('Error', 'There was an error cancelling your Premium Membership');
            });
            loopCheck('cancel');        
        }
        function cancelAllRanks(){
            //Check if there are other subscriptions other than Premium, if not delete entire subscription otherwise StripeServer
            //gives error
            if (vm.business.isPremium){
                cancelAll = false;
                cancelPremium = false;
                cancelRanks = true;
                cancelNumRanks = 0;
                dialog.confirmCancel(vm.business, 'Ranks',execCancel);
            }
            else{
                cancelAll = true;
                cancelPremium = false;
                cancelRanks = false;
                cancelNumRanks = 0;
                dialog.confirmCancel(vm.business, 'Ranks',execCancel);
            }
        }
        
        function cancelAll(){
            cancelAll = true;
            cancelPremium = false;
            cancelRanks = false;
            cancelNumRanks = 0;
            dialog.confirmCancel(vm.business,'All',execCancel);
        }
        function editRanks(){
            dialog.editNumRanks(vm.business, execEditNumRanks);
        }
        function execEditNumRanks(action, N){
            //if deleting all ranks, call delete ranks subscription
            if (action == 'cancel' && N == vm.business.ranksQty){
                cancelAllRanks();
            }
            else {

                var updatedNumRanks = 0;
                if (action == 'purchase') updatedNumRanks = vm.business.ranksQty + N;
                if (action == 'cancel') updatedNumRanks = vm.business.ranksQty - N;
                var url = SERVER_URL + 'StripeServer/edit';
                var req = {
                    method: 'POST',
                    url: url,
                    headers: {
                        'X-Dreamfactory-API-Key': undefined,
                        'X-DreamFactory-Session-Token': undefined
                    },
                    data: {
                        'action': action,
                        'numRanks': updatedNumRanks,
                        'stripeId': vm.business.stripeid,
                        'useraccntId': vm.business.accountid,
                        'stripesub': vm.business.stripesub,
                        'stripesiranks': vm.business.stripesiranks,
                        'answerId': vm.business.id,

                    }
                }

                $http(req).then(function (result) {
                   if ($rootScope.DEBUG_MODE) console.log("Updating Quantity of Custom Ranks Success", result);
                   dialog.notificationSuccess('Success', 'Updating Quantity of Custom Ranks Success');
                }, function (error) {
                    if ($rootScope.DEBUG_MODE) console.log("Error Updating Quantity of Custom Ranks - ", error);
                    dialog.notificationDanger('Error', 'Error Updating Quantity of Custom Ranks');
                });
                loopCheck('edit', updatedNumRanks);
            }
            console.log("Execute Edit Num Ranks");

        }

        function addSubscription() {
            var url = SERVER_URL + 'StripeServer/update';
            var req = {
                method: 'POST',
                url: url,
                headers: {
                    'X-Dreamfactory-API-Key': undefined,
                    'X-DreamFactory-Session-Token': undefined
                },
                data: {
                    'userId': vm.business.user,
                    'useraccntId': vm.business.accountid,
                    'answerId': vm.business.id,
                    'stripeId': vm.business.stripeid,
                    'stripeSub': vm.business.stripesub,
                    'getPremiumPlan': vm.getPremium,
                    'getCustomRanks': vm.getRanks,
                    'ranksQuantity': vm.ranksQty,
                    'couponValid': vm.codeOk,
                    'promoCode': vm.promocode,
                    'bizcat': vm.business.bizcat,
                }
            }

            $http(req).then(function (result) {
               if ($rootScope.DEBUG_MODE) console.log("Updating Quantity of Custom Ranks Success", result);
               dialog.notificationSuccess('Success', 'Updating Quantity of Custom Ranks Success');
            }, function (error) {
                if ($rootScope.DEBUG_MODE) console.log("Error Updating Quantity of Custom Ranks - ", error);
                dialog.notificationDanger('Error', 'Error Updating Quantity of Custom Ranks');
            });

        }
      // -------- **UPGRADE**  STRIPE LOOP CHECKERS
        function loopCheck(check, updatedNumRanks) {
            console.log("---------------call loop check------------------------");
            setTimeout(function () {
                //  call a 3s setTimeout when the loop is called
                //  your code here
                console.log('loopCheck -- ', check);

                useraccnt.getuseraccntans(vm.business.id).then(successGetuseraccnt, failGetuseraccnt);
                function failGetuseraccnt(err) {
                    console.log(JSON.stringify(err));
                    return err;
                }
                function successGetuseraccnt(result) {
                    // result[0] =
                    // {"user":37,"answer":0,"bizcat":"REB","email":"sjurowski+facebook@ucsd.edu","status":"1001:Rank-X Premium Business Plan:sub_9qe3oH617BKGWD","stripeid":"cus_9qe3Kburx73l2L","id":176}

                    var checkAgain = true;
                    console.log("i'm in, will check every 3 seconds for signup success");
                    console.log("full result:");
                    console.log(result);

                    var missionAccomplished = false;
                    try {

                        if (check == 'purchase') {

                            if ((vm.getPremium && result[0].ispremium && !vm.getRanks) ||      //if purchase only Premium
                                (!vm.getPremium && vm.getRanks && result[0].hasranks && vm.ranksQty == result[0].ranksqty) || //if purchase only ranks
                                (vm.getPremium && result[0].ispremium && vm.getRanks && result[0].hasranks && vm.ranksQty == result[0].ranksqty)) {

                                missionAccomplished = true;

                            }
                        }

                        if (check == 'cancel') {
                            if ((cancelPremium && !result[0].ispremium && result[0].stripesipremium == '') ||      //if Premium was cancellesd
                                (cancelRanks && !result[0].hasranks && result[0].stripesiranks == '') || //if Ranks were cancelled
                                (cancelAll && result[0].stripesub == '')) {
                                missionAccomplished = true;
                            }
                        }

                        if (check == 'edit') {
                            if (result[0].ranksqty == updatedNumRanks) missionAccomplished = true;
                        }

                        if (missionAccomplished) {
                            console.log("mission accomplished");
                            vm.purchase_progress = false;
                            vm.edit_progress = false;
                            vm.cancel_progress = false;
                            vm.processInProgress = false;
                            //update local copy
                            var idx = $rootScope.useraccnts.map(function (x) { return x.id; }).indexOf(result[0].id);
                            console.log("idx - ", idx);
                            $rootScope.useraccnts[idx] = result[0];
                            var idx2 = $rootScope.answers.map(function (x) { return x.id; }).indexOf(result[0].answer);
                            $rootScope.answers[idx2].ispremium = result[0].ispremium;
                            $rootScope.answers[idx2].hasranks = result[0].hasranks;
                            $rootScope.answers[idx2].ranksqty = result[0].ranksqty;
                            
                            loadData();
                            console.log(vm.mybiz);
                            vm.overview = true;
                            vm.manageview = false;
                            vm.checkout = false;
                            vm.dataReady = true;
                            return true;

                        } else {
                            console.log("havent accomplished mission yet");
                            // return false;  <-- this will stop the looping
                        }
                    }
                    catch (err) {
                        console.log("error while looking up subscription info from DF: " + JSON.stringify(err));
                        checkAgain = false;

                        return err;
                    }

                    if (checkAgain == true && (vm.checkout || vm.manage)) {
                        //recursion ... find another way if possible
                        if (vm.acceptTOS && vm.processInProgress) {
                            if (check == 'purchase') {
                                vm.purchase_progress = true;
                            }
                            if (check == 'edit' && vm.acceptTOS && vm.processInProgress) {
                                vm.edit_progress = true;
                            }
                            if (check == 'cancel' && vm.acceptTOS && vm.processInProgress) {
                                vm.cancel_progress = true;
                            }
                        }

                        loopCheck(check);

                    } else {
                        return;
                    }
                    //  ..  setTimeout()
                }
            }, 3000);
        }

        function clickStripeCheckout(){
            vm.processInProgress = true;
        }

        function editContact(){
            fields = ['firstname','lastname','email'];
            labels = ['First Name','Last Name','Email'];
            vals = [vm.business.firstname, vm.business.lastname, vm.business.email];
            dialog.editInfo(fields,labels,vals,execEditContact);
        }

        function execEditContact(newvals){
            useraccnt.updateuseraccnt(vm.business.accountid, fields, newvals).then(function(){
                loadData();
            })
        }        

        function showTOSCustomersDlg() {
            dialog.showTOSCustomersDlg();
        }

        function showLearnMore(x) {
            var url='';
            if (x==1) url = 'https://www.youtube.com/embed/IpUNM4Okb0U';
            if (x==2) url = 'https://www.youtube.com/embed/pjxmggRM37o';
            dialog.showLearnMore(url);
            
        }

        function stripeFormSubmit(e) {
            alert();
        }

        function formatDate(x){
            var date = new Date(x);
            return date.toDateString();
        }
    }   
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('feeds', feeds);

    feeds.$inject = ['$location', '$rootScope', '$state', '$window'];

    function feeds(location, $rootScope, $state, $window) {
        
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('feedback', feedback);

    feedback.$inject = ['$location', '$rootScope', '$state'];

    function feedback(location, $rootScope, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'feedback';
        

        vm.goBack = goBack;

       activate();

        function activate() {            

            console.log("feedback page Loaded!");
            
        }

        function goBack() {
            //if ($rootScope.cCategory.id == undefined) $state.go('rankSummary', { index: $rootScope.cCategory.id });
            //else $state.go('rankSummary', { index: 1 });
            $state.go('cwrapper');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('customertos', customertos);

    customertos.$inject = ['$state','$rootScope'];

    function customertos($state, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Customer Terms of Service';

        vm.goBack = goBack;
        
        activate();

        function activate() {
            console.log("Customer Terms of Service page Loaded!");
        }

        function goBack() {
            if ($rootScope.previousState == 'rankSummary')
                    $state.go('rankSummary', {index: $rootScope.cCategory.slug});
            else if ($rootScope.previousState == 'answerDetail')
                    $state.go('answerDetail', {index: $rootScope.canswer.slug});
            else if ($rootScope.previousState == 'addAnswer')
                    $state.go('addAnswer', {index: $rootScope.canswer.slug});
            else if ($rootScope.previousState == 'editAnswer')
                    $state.go('editAnswer', {index: $rootScope.canswer.slug});                
            else if ($rootScope.previousState == 'about')
                    $state.go('about');
            else $state.go('cwrapper');                
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('about', about);

    about.$inject = ['$location', '$rootScope', '$state','$window', '$scope'];

    function about(location, $rootScope, $state, $window, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'about';

        vm.goBack = goBack;
        
        if ($window.innerWidth < 512) {
            vm.logoimage = "/assets/images/rankxlogo_noheadline.png";
            vm.sm = true;
        }
        else {
            vm.logoimage = "/assets/images/rankxlogo_noheadline.png";
            vm.sm = false;
        }

        //-----SEO tags ----
        $scope.$parent.seo = { 
            pageTitle : 'About', 
            metaDescription: 'Rank-X creates collective rankings on everything in your city.' 
        };
      
        activate();

        function activate() {            

            console.log("About page Loaded!");
            
        }

        function goBack() {
            //if ($rootScope.cCategory.id == undefined) $state.go('rankSummary', { index: $rootScope.cCategory.id });
            //else $state.go('rankSummary', { index: 1 });
            //$state.go('cwrapper');
            if ($rootScope.previousState == 'rankSummary')  $state.go('rankSummary', { index: $rootScope.cCategory.slug });
            else if ($rootScope.previousState == 'answerDetail')  $state.go('answerDetail', { index: $rootScope.canswer.slug });
            else $rootScope.$emit('backToResults');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('specials', specials);

    specials.$inject = ['$location', '$rootScope', '$state', 'dialog', 'special'];

    function specials(location, $rootScope, $state, dialog, special) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'specials';

        vm.addSpecial = addSpecial;
        vm.selSpecial = selSpecial;
        vm.deleteSpecial = deleteSpecial;
        vm.goBack = goBack;

        vm.specialsList = [];
        vm.dataReady = false;
        var selSpecial = {};

        //$rootScope.cust.specials = [];

        activate();

        function activate() {
           
            //Load specials for this answer
            special.getSpecialsbyAnswer($rootScope.canswer.id).then(function (response) {
                $rootScope.specials = response;
                vm.dataReady = true;
                displaySpecials();
            });

            console.log("Specials Page loaded!")

        }

        function displaySpecials() {
            vm.specialsList = [];
            var obj = {};
            for (var i=0; i<7; i++){
                obj = {};
                if (i < $rootScope.specials.length){
                    obj = $rootScope.specials[i];
                    obj.used = true;
                }
                else{
                    obj.stitle = 'Empty';
                    obj.used = false;
                }
                vm.specialsList.push(obj);
            }
        }

        function addSpecial() {
            $rootScope.specialmode = 'add'
            $state.go('editspecial');
        }

        function selSpecial(x) {

            $rootScope.cspecial = x;
            $rootScope.specialmode = 'edit'
            $state.go('editspecial');
        }

        function deleteSpecial(x){
            selSpecial = x;
            dialog.deleteRank(x,execDeleteSpecial,true);
        }

        function execDeleteSpecial(){
            special.deleteSpecial(selSpecial.id).then(function(){
                displaySpecials();
            });
        }
        
        function goBack() {
               $state.go("answerDetail", { index: $rootScope.canswer.id });                              
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('photogallery', photogallery);

    photogallery.$inject = ['$location', '$rootScope', '$state'];

    function photogallery(location, $rootScope, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'photogallery';
               
       activate();

        function activate() {            

            console.log("photogallery page Loaded!");
            
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainphoto', mainphoto);

    mainphoto.$inject = ['$location', '$rootScope', '$state'];

    function mainphoto(location, $rootScope, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainphoto';
               
       activate();

        function activate() {            

            console.log("mainphoto page Loaded!");
            
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('editvrows', editvrows);

    editvrows.$inject = ['$location', '$rootScope', '$state', 'dialog', 'vrows','vrowvotes'];

    function editvrows(location, $rootScope, $state, dialog, vrows, vrowvotes) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'editvrows';

        var tidx = 99999;

        vm.header = 'Edit Vote Rows for ' + $rootScope.canswer.name;
        vm.editvrowsList = [];
        vm.vrows = [];
        
        //Methods
        vm.addVRowDiag = addVRowDiag;
        vm.addVRowGroupDiag = addVRowGroupDiag;
        vm.deleteVRowDiag = deleteVRowDiag;
        vm.editVRowGroupDiag = editVRowGroupDiag;
        vm.closeRank = closeRank;
        
        activate();

        function activate() {
            vm.vrows = $rootScope.cansvrows;
            displayVRows();
            console.log("editvrows Page loaded!");

        }

        function displayVRows() {

            vm.vrows = [];
            function compare(a, b) {
                return a.gnum - b.gnum;
            }
            if ($rootScope.cansvrows.length > 0) {
                vm.vrows = $rootScope.cansvrows.sort(compare);
                //console.log("length $rootScope.cansvrows--",$rootScope.cansvrows.length);
                vm.vrows[0].shdr = true;
                for (var i = 1; i < vm.vrows.length; i++) {
                    if (vm.vrows[i].gnum == vm.vrows[i - 1].gnum) vm.vrows[i].shdr = false;
                    else vm.vrows[i].shdr = true;
                }
                vm.vrows[vm.vrows.length - 1].saddr = true;
                for (var i = 0; i < vm.vrows.length - 1; i++) {
                    if (vm.vrows[i].gnum != vm.vrows[i + 1].gnum) vm.vrows[i].saddr = true;
                    else vm.vrows[i].saddr = false;
                }
            }
            
        }

        function closeRank() {
            $state.go("answerDetail", { index: $rootScope.canswer.id });
        }

        function getVRows(answerid) {
            $rootScope.cansvrows = [];
            //Load vrows for this answer           
            for (var i = 0; i < $rootScope.cvrows.length; i++) {
                if ($rootScope.cvrows[i].answer == answerid) {
                    $rootScope.cansvrows.push($rootScope.cvrows[i]);
                }
            }
            displayVRows();
        }

        function addVRowDiag(x) {
            dialog.addVRow(x, addVRow);
        }

        function addVRow(x, newname) {
            
            //if title is '-' is a row without title
            var isGroupFirst = false;
            if (x.title == '-') isGroupFirst = true;

            var vrowobj = JSON.parse(JSON.stringify(x));
            vrowobj.id = undefined;
            vrowobj.$$hashKey = undefined;
            vrowobj.upV = 0;
            vrowobj.downV = 0;
            vrowobj.title = newname;

            if (isGroupFirst) {
                var promise = vrows.updateRec(x.id, ['title'], [newname]);

                promise.then(function () {
                    getVRows($rootScope.canswer.id);
                    //displayVRows();
                });
            }
            else {
                var promise2 = vrows.postRec(vrowobj); 
                
                promise2.then(function () {
                    getVRows($rootScope.canswer.id);
                    //displayVRows();
                });

            }

        }

        function deleteVRowDiag(x) {
            dialog.deleteVRow(x, deleteVRow);
        }

        function deleteVRow(x) {
            var promise = vrows.deleteVrow(x.id);
            vrowvotes.deleteVrowVotesbyVrow(x.id);

            promise.then(function () {
                getVRows($rootScope.canswer.id);
                //displayVRows();
            });
        }

        function addVRowGroupDiag() {
           
                var x = vm.vrows[vm.vrows.length - 1];
                dialog.addVRowGroup(x, addVRowGroup);
           
        }

        function addVRowGroup(x, newname) {
            if (vm.vrows.length > 0){
            var vrowobj = JSON.parse(JSON.stringify(x));
            vrowobj.id = undefined;
            vrowobj.$$hashKey = undefined;
            vrowobj.upV = 0;
            vrowobj.downV = 0;
            vrowobj.title = '-';
            vrowobj.gnum = vm.vrows[vm.vrows.length - 1].gnum + 1;
            vrowobj.gtitle = newname;
            }
            else {
                vrowobj = {};
                vrowobj.answer = $rootScope.canswer.id;
                vrowobj.gnum = 0;
                vrowobj.gtitle = newname;
                vrowobj.title = '-';
                vrowobj.upV = 0;
                vrowobj.downV = 0;
            }
            
            var promise = vrows.postRec(vrowobj);

            promise.then(function () {
                getVRows($rootScope.canswer.id);
                //displayVRows();
            });
            // console.log(x);
        }
        
        function editVRowGroupDiag(x){
            dialog.editVRowGroup(x, editVRowGroup, deleteVRowGroupDiag);
        }
        
        function editVRowGroup(x, newgroupname) {

            var nameChanged = false;
            if (x.gtitle != newgroupname) nameChanged = true;

            if (nameChanged) {
                for (var i = 0; i < $rootScope.cansvrows.length; i++) {
                    if ($rootScope.cansvrows[i].gnum == x.gnum) {
                        $rootScope.cansvrows[i].gtitle = newgroupname;
                        vrows.updateRec($rootScope.cansvrows[i].id, ['gtitle'], [newgroupname]);
                    }
                }
                getVRows($rootScope.canswer.id);
            }
        }
        
        function deleteVRowGroupDiag(x){
            dialog.deleteVRowGroup(x, deleteVRowGroup);
        }
        
        function deleteVRowGroup(x){
            
            //delete votes for all vrow in group that is deleted
            /*No need for this, delete votes automatically deleted from call within vrow service
            for (var i=0; i < vm.vrows.length; i++){
                if (vm.vrows[i].gnum == x.gnum){
                    vrowvotes.deleteVrowVotesbyVrow(vm.vrows[i].id);
                }
            }*/
            
            //delete all vrows in that group
            var promise = vrows.deleteVrowByGroup(x.gnum, x.answer);

            promise.then(function () {
                console.log("$rootScope.cvrows - ", $rootScope.cvrows);
                getVRows($rootScope.canswer.id);
                //displayVRows();
            });
            
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('editspecial', editspecial);

    editspecial.$inject = ['$location', '$rootScope', '$state', 'dialog', 'special','datetime','$scope'];

    function editspecial(location, $rootScope, $state, dialog, special,datetime, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'editspecial';
        vm.sp = {};
        var spx = {}; //special as loaded
        var item = {};
        
        //Methods
        vm.displayCharLength = displayCharLength;
        vm.frequencySel = frequencySel;
        vm.showPreview = showPreview;
        vm.deleteSpecial = deleteSpecial;
        vm.goBack = goBack;
        vm.closeRank = closeRank;
        vm.header = $rootScope.canswer.name;

        vm.isEdit = false;
        vm.userIsOwner = $rootScope.userIsOwner;
        
         var fileUploadedListener = $rootScope.$on('fileUploaded', function (event, data){            
            console.log("Received fileUploaded", data);
            console.log('$state.current.name - ',$state.current.name);
            if ($state.current.name == 'editspecial') {
                console.log("loaded date to vm.imageURL");
                vm.imageURL = data;
            }
        });

        $scope.$on('$destroy',fileUploadedListener);

        activate();

        function activate() {

            if ($rootScope.specialmode == 'edit') {
                
                //Copy object without reference
                vm.sp = JSON.parse(JSON.stringify($rootScope.cspecial));
                spx = JSON.parse(JSON.stringify($rootScope.cspecial));
                datetime.formatdatetime(vm.sp);
                
                vm.isEdit = true;
                if (vm.sp.freq == 'onetime') frequencySel(1);
                if (vm.sp.freq == 'weekly') frequencySel(2);
                vm.sp.bc = vm.sp.bc;
                vm.sp.fc = vm.sp.fc;
                if (vm.sp.image != undefined) vm.imageURL = vm.sp.image;
                else vm.imageURL = $rootScope.EMPTY_IMAGE; 
                
            }

            if ($rootScope.specialmode == 'add') {

                vm.char = 25;
                vm.sp.fc = "hsl(0, 100%, 0%)"; //black
                vm.sp.bc = "hsl(0, 0%, 100%)"; //white
                frequencySel(1);
                vm.imageURL = $rootScope.EMPTY_IMAGE;
            }

            createTimeDropdown();

            console.log("editspecial page Loaded!");

        }

        function displayCharLength() {
            vm.char = 25 - vm.sp.stitle.length;
        }

        function frequencySel(x) {
            if (x == 1) {
                vm.weekly = false;
                vm.onetime = true;
                vm.sp.freq = 'onetime';
            }
            if (x == 2) {
                vm.weekly = true;
                vm.onetime = false;
                vm.sp.freq = 'weekly';
            }
        }

        function showPreview() {
            item = vm.sp;
            item.name = $rootScope.canswer.name;
            item.answer = $rootScope.canswer.id;
            item.image = vm.imageURL;
            item.freq = (vm.onetime ? 'onetime' : 'weekly');

            dialog.createSpecialPreview(item, addSpecial);

        }

        function addSpecial() {
            if (vm.sp.freq == 'onetime') {
                item.stime2 = null;
                item.etime2 = null;
            }
            if (vm.sp.freq == 'weekly') {
                item.stime = null; item.sdate = null;
                item.etime = null; item.edate = null;
            }
            if (vm.isEdit == false) {
                special.addSpecial(item).then(function(){
                    $state.go('specials');
                });
            }
            else {
                //update special
                var fields = [];
                var vals = [];
                console.log("spx, vm.sp", spx, vm.sp);

                if (spx.bc != vm.sp.bc) { fields.push('bc'); vals.push(vm.sp.bc); }
                if (spx.fc != vm.sp.fc) { fields.push('fc'); vals.push(vm.sp.fc); }
                if (spx.edate != vm.sp.edate) { fields.push('edate'); vals.push(vm.sp.edate); }
                if (spx.etime != vm.sp.etime) { fields.push('etime'); vals.push(vm.sp.etime); }
                if (spx.etime2 != vm.sp.etime2) { fields.push('etime2'); vals.push(vm.sp.etime2); }
                if (spx.sdate != vm.sp.sdate) { fields.push('sdate'); vals.push(vm.sp.sdate); }
                if (spx.stime != vm.sp.stime) { fields.push('stime'); vals.push(vm.sp.stime); }
                if (spx.stime2 != vm.sp.stime2) { fields.push('stime2'); vals.push(vm.sp.stime2); }
                if (spx.stitle != vm.sp.stitle) { fields.push('stitle'); vals.push(vm.sp.stitle); }
                if (spx.image != vm.imageURL) { fields.push('image'); vals.push(vm.imageURL); }
                if (spx.name != vm.sp.name) { fields.push('name'); vals.push(vm.sp.name); }
                if (spx.details != vm.sp.details) { fields.push('details'); vals.push(vm.sp.details); }
                if (spx.freq != vm.sp.freq) { fields.push('freq'); vals.push(vm.sp.freq); }
                if (spx.mon != vm.sp.mon) { fields.push('mon'); vals.push(vm.sp.mon); }
                if (spx.tue != vm.sp.tue) { fields.push('tue'); vals.push(vm.sp.tue); }
                if (spx.wed != vm.sp.wed) { fields.push('wed'); vals.push(vm.sp.wed); }
                if (spx.thu != vm.sp.thu) { fields.push('thu'); vals.push(vm.sp.thu); }
                if (spx.fri != vm.sp.fri) { fields.push('fri'); vals.push(vm.sp.fri); }
                if (spx.sat != vm.sp.sat) { fields.push('sat'); vals.push(vm.sp.sat); }
                if (spx.sun != vm.sp.sun) { fields.push('sun'); vals.push(vm.sp.sun); }

                console.log("fields, vals", fields, vals);
                special.updateSpecial(item.id, fields, vals).then(function(){
                    $state.go('specials');
                });
            }
            
        }
        
       function deleteSpecial() {
            special.deleteSpecial(vm.sp.id);
            $state.go('specials');
        }

        function goBack() {
            $state.go('specials');
        }

        function createTimeDropdown() {

            vm.timeDD = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
                "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM",
                "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"];
        }
        
        function closeRank() {
               $state.go("answerDetail", { index: $rootScope.canswer.id });                              
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('customer', customer);

    customer.$inject = ['$location', '$rootScope', '$state','answer','dialog','special'];

    function customer(location, $rootScope, $state, answer, dialog, special) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'customer';
        
        vm.selMainPhoto = 'active';
        vm.selSpecials = '';
        vm.selPhotoGallery = '';

        vm.goBack = goBack;
        vm.loadMainPhoto = loadMainPhoto;
        vm.loadSpecials = loadSpecials;
        vm.loadPhotoGallery = loadPhotoGallery;
        vm.selAnswer = selAnswer;
        
        //****Temp, need to create customer object when customer logs in ****//
        $rootScope.cust = {};
        $rootScope.cust.id = 1;
        //**********************************************************************           

        activate();
        //utiat228
        function activate() {            

            //Load answers for this customer
            answer.getAnswerbyCustomer($rootScope.cust.id).then(function(response){
                $rootScope.custans = response.resource;
                console.log("Customer-Answer records: ", $rootScope.custans)
                //loadSpecialsObjects();
                displayAnswers();
            });  
                      
            console.log("customer page Loaded!");
            
        }
        
        function displayAnswers(){
           vm.answers = $rootScope.custans;
            
        }
        
        function selAnswer(x){
            $rootScope.cust.canswer = x.id;
            console.log("current answer ", x.id, x.name);
        }
        
        function loadMainPhoto() {            
            
            if ($rootScope.cust.canswer == undefined ) dialog.getDialog('selectBusiness');
            else $state.go('mainphoto');
            
        }
        function loadSpecials() {            

            if ($rootScope.cust.canswer == undefined ) dialog.getDialog('selectBusiness');
            else $state.go('specials');
            
        }
        function loadPhotoGallery() {            
            
            if ($rootScope.cust.canswer == undefined ) dialog.getDialog('selectBusiness');
            else $state.go('photogallery');
            
        }

        function goBack() {
            //if ($rootScope.cCategory.id == undefined) $state.go('rankSummary', { index: $rootScope.cCategory.id });
            //else $state.go('rankSummary', { index: 1 });
            $state.go('content');
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('editAnswer', editAnswer);

    editAnswer.$inject = ['dialog', '$stateParams', '$state', '$rootScope', 'catans', '$scope',
    '$modal', 'edit', 'editvote', 'answer', 'image','getgps', 'table',
    '$window','getwiki', '$http'];

    function editAnswer(dialog, $stateParams, $state, $rootScope, catans, $scope, 
    $modal, edit, editvote, answer, image, getgps, table, 
    $window, getwiki, $http) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = 'editAnswer';
        //vm.header = "table" + $rootScope.cCategory.id + ".header";
        //vm.body = 'table' + $rootScope.cCategory.id + '.body';
        
        // Members
        vm.answer = {};

        vm.showHowItWorksDialog = showHowItWorksDialog;
        vm.editField = editField;
        vm.editAgree = editAgree;
        vm.editImage = editImage;
        vm.selectImage = selectImage;
        vm.viewPrev = viewPrev;
        vm.viewNext = viewNext;
        vm.closeRank = closeRank;
        vm.editDisagree = editDisagree;
        vm.answerDetail = answerDetail;
        vm.hoursChanged = hoursChanged;
        vm.updateHours = updateHours;
        vm.onNoGoodImages = onNoGoodImages;
        vm.getWiki = getWiki;
        vm.remRank = remRank;
        vm.addCatans = addCatans;
        vm.addcts = addcts;
        
        vm.ranking = $rootScope.title;
        vm.userIsOwner = $rootScope.userIsOwner;
        
        //var A = $rootScope.A;
        //if ($stateParams.index) vm.answer = $rootScope.canswers[A.indexOf(+$stateParams.index)];
        if ($stateParams.index) {
            var isnum = /^\d+$/.test($stateParams.index);
            if(isnum){
                var i = $rootScope.answers.map(function (x) { return x.id; }).indexOf(+$stateParams.index);
                vm.answer = $rootScope.answers[i];
            } else {
                var i = $rootScope.answers.map(function (x) { return x.slug; }).indexOf($stateParams.index);
                vm.answer = $rootScope.answers[i];
            }
        }
        vm.type = vm.answer.type;
        vm.fields = [];
        var publicfield_obj = {};

        vm.edits = [];
        var upVi = [];
        var downVi = [];
        var editvotes = [];
        var recordsUpdated = false;
        var numVotes2accept = 1;
        var numVotes2discard = 1;
        var needEditDelete = false;
        var editDeleteIndex = 0;
        var editIsLocation = false;
        var editAnswerGPSexec = false;
        var requestOnFlight = false;
        
        // Methods
     
        //google search
        var imageLinks = [];
        vm.linkIdx = 0;
        vm.numLinks = 0;
        vm.imageCommand = 'Change Image';
        var attNum = 3;
        vm.imagefunctions = 'none';
        vm.emptyarray=[];
        vm.updateHoursEn = 'disabled'
                
        vm.neighborhoods = $rootScope.nhs;
                
        //TODO: Would like to add this abstract template, but dont know how               
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
        });
        $rootScope.$on('$stateChangeStart',
            function (ev, to, toParams, from, fromParams) {
                if (from.name == 'editAnswer') {
                    if (!recordsUpdated) updateRecords();
                }
            });

        var fileUploadedListener = $rootScope.$on('fileUploaded', function (event, data){
                $rootScope.cmd1exe = $rootScope.cmd1exe ? $rootScope.cmd1exe : false;        
            if ($state.current.name == 'editAnswer' && !$rootScope.cmd1exe) {
                $rootScope.cmd1exe = true;
                $rootScope.blobimage = data;
                vm.imageURL = $rootScope.blobimage;
                selectImage();                
            }
        });
        
        var answerGPSreadyListener = $rootScope.$on('answerGPSready', function () {
            if ($state.current.name == 'editAnswer' && !editAnswerGPSexec) editAnswerGPS();
        });
        
        var wikiReadyListener = $rootScope.$on('wikiReady', function (event,wikiRes) {
            if ($state.current.name == 'editAnswer') loadWiki(wikiRes);
        });

        $scope.$on('$destroy',fileUploadedListener);
        $scope.$on('$destroy', answerGPSreadyListener);
        $scope.$on('$destroy',wikiReadyListener);
        
        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) {vm.sm = true; vm.nsm=false;}
        else {vm.sm = false; vm.nsm = true;}
                    
        activate();

        function activate() {

            //Set custom rank flag
            if ($rootScope.cCategory != undefined){
                if ($rootScope.cCategory.owner != undefined && $rootScope.cCategory.owner != 0 ) $rootScope.isCustomRank = true;
                else $rootScope.isCustomRank = false;
            }

            $window.scrollTo(0, 0);
            
            //country.loadCountries();
            //vm.countries = $rootScope.cCountries;
            loadAnswerData();
            loadAnswerRanks();
            prepareCatansOptions();
            if (vm.userIsOwner && vm.type == 'Establishment') loadHoursData();
            
            vm.access = vm.userIsOwner && vm.answer.isactive;
            
            
            getEdits(vm.answer.id);

            if ($rootScope.DEBUG_MODE) console.log("Edit Answer Activated!");
        }

        function loadAnswerData() {

            vm.imageURL = vm.answer.imageurl;

            for (var i = 0; i < $rootScope.fields.length; i++) {
                publicfield_obj = {};
                publicfield_obj.field = $rootScope.fields[i].name;
                publicfield_obj.onlybyowner = $rootScope.fields[i].onlybyowner;
                switch ($rootScope.fields[i].name) {
                    case "name": { publicfield_obj.cval = vm.answer.name; break; }
                    case "cityarea": { publicfield_obj.cval = vm.answer.cityarea; break; }
                    case "location": { publicfield_obj.cval = vm.answer.location; break; }
                    case "addinfo": { publicfield_obj.cval = vm.answer.addinfo; break; }
                    case "phone": { publicfield_obj.cval = vm.answer.phone; break; }
                    case "website": { publicfield_obj.cval = vm.answer.website; break; }
                    case "email": { publicfield_obj.cval = vm.answer.email; break; }
                }
                publicfield_obj.val = '';
                publicfield_obj.label = $rootScope.fields[i].label;
                
                if (publicfield_obj.field == "cityarea") publicfield_obj.opts ="c for c in vm.neighborhoods";
                else publicfield_obj.opts = "c for c in vm.emptyarray";
                
                vm.fields.push(publicfield_obj);
            }
            
            for (var i = 0; i < vm.fields.length; i++){
                vm.fields[i].val = vm.fields[i].cval; 
            }
            
        }

        function loadAnswerRanks(){
            //Create arrays one for initial value, other one that will be used for comparison 
            vm.answerRanks = [];
            var idx = 0;
            for (var i=0; i < $rootScope.catansrecs.length; i++){
                if ($rootScope.catansrecs[i].answer == vm.answer.id){
                    idx = $rootScope.content.map(function(x) {return x.id; }).indexOf($rootScope.catansrecs[i].category);
                    vm.answerRanks.push($rootScope.content[idx]);
                }
            }
        }

        function prepareCatansOptions(){

            if ($rootScope.DEBUG_MODE) console.log("prepareCatansOptions");

            //search.sibblingRanks($rootScope.cCategory.id);
            vm.addctsopts = [];
            var opt = '';
            //if (answerNeighborhood == undefined || answerNeighborhood == '') answerNeighborhood = 'San Diego';
            for (var i = 0; i < $rootScope.ctsOptions.length; i++) {
                if ($rootScope.ctsOptions[i].indexOf('@neighborhood') > -1) {
                    if (vm.answer.cityarea){
                        opt = $rootScope.ctsOptions[i].replace('@neighborhood', vm.answer.cityarea);
                        vm.addctsopts.push(opt);
                    }
                }
                else vm.addctsopts.push($rootScope.ctsOptions[i]);
            }
        }

        function addCatans(){            
            vm.addctsactive = true;
        }

        function addcts(){
            var typemismatch = false;
            var rankObj = {};
            var idx = $rootScope.content.map(function(x) {return x.title; }).indexOf(vm.addctsval);  
            //Check types match
            if (vm.answer.type == 'Person' && 
                $rootScope.content[idx].type != 'Person') typemismatch = true;
            if (vm.answer.type == 'Event' && 
                $rootScope.content[idx].type != 'Event') typemismatch = true;
            if (vm.answer.type == 'Thing' && 
                $rootScope.content[idx].type != 'Thing') typemismatch = true;
            if (vm.answer.type == 'PersonCust' && 
                $rootScope.content[idx].type != 'PersonCust') typemismatch = true;        
            if ((vm.answer.type == 'Place' || 
                vm.answer.type == 'Establishment' || 
                vm.answer.type == 'Organization') &&  
                ($rootScope.content[idx].type != 'Place' &&
                $rootScope.content[idx].type != 'Establishment' &&
                $rootScope.content[idx].type != 'Organization')) typemismatch = true;
            
            if (typemismatch) dialog.typemismatch($rootScope.content[idx].type,vm.answer.type);
            else  dialog.confirmAddRank($rootScope.content[idx],vm.answer,addRank);     

        }

        function addRank(category,answer){
            catans.postRec2(answer.id, category.id).then(loadAnswerRanks);
            vm.addctsval = '';
            vm.addctsactive = false;
        }

        function remRank(x){
            dialog.confirmRemoveRank(x, vm.answer, remRankConfirmed);    
        }

        function remRankConfirmed(category,answer){
            for (var i=0; i<$rootScope.catansrecs.length; i++){
                if ($rootScope.catansrecs[i].answer == answer.id && 
                    $rootScope.catansrecs[i].category == category.id){
                        catans.deleteRec(answer.id, category.id).then(loadAnswerRanks);
                    }
            }
        }

        function getEdits(answer_id) {
            vm.edits = [];
            upVi = [];
            downVi = [];
            var edit_obj = {}
            for (var i = 0; i < $rootScope.edits.length; i++) {
                if ($rootScope.edits[i].answer == answer_id) {
                    edit_obj = $rootScope.edits[i];
                    edit_obj.vote = 0;
                    edit_obj.idx = i;  //this is index within cedits
                    edit_obj.agree = '';
                    edit_obj.disagree = '';
                    switch ($rootScope.fields[0].name) {
                        case "name": { edit_obj.name = vm.answer.name; break; }
                        //case "country": { edit_obj.name = vm.answer.country; break; }
                        //case "club": { edit_obj.name = vm.answer.club; break; }
                    }
                    //edit_obj.name = vm.answer.name;

                    vm.edits.push(edit_obj);
                    
                    //store initial counters 
                    upVi.push($rootScope.edits[i].upV);
                    downVi.push($rootScope.edits[i].downV);

                }
            }
            getEditsVote(vm.answer.id);
        }

        function editField(x) {
            if ($rootScope.isLoggedIn) {
                //check that there isnt an edit for that field already
                var editExists = false;
                for (var i = 0; i < vm.edits.length; i++) {
                    if (vm.edits[i].field == x.field) {
                        editExists = true;
                        break;
                    }
                }

                if (editExists) {
                    dialog.getDialog('editFieldExists');
                    return;
                }
                
                var newEdit = {};
                newEdit.field = x.field;
                newEdit.nval = x.val;
                if (!newEdit.cval) newEdit.cval = ''; //So it doesnt display 'undefined'
                newEdit.answer = vm.answer.id;
                newEdit.upV = 0;
                newEdit.downV = 0;
                newEdit.imageURL = '';
                newEdit.display = 'none';
                switch ($rootScope.fields[0].name) {
                    case "name": { newEdit.name = vm.answer.name; break; }
                    //case "country": { newEdit.name = vm.answer.country; break; }
                    //case "club": { newEdit.name = vm.answer.club; break; }
                }
                newEdit.user = $rootScope.user.id;
                newEdit.username = $rootScope.user.name;
                newEdit.timestmp = Date.now();
                //if user is owner - execute userIsOwnerEditDirectly function
                if ($rootScope.userIsOwner) dialog.editConfirm(newEdit, 'field', userIsOwnerEditDirectly);
                //else create edit for image
                else dialog.editConfirm(newEdit, 'field', createEdit);
            }
            else {
                dialog.loginFacebook();
                //dialog.getDialog('notLoggedIn');
                return;
            }

        }

        function editImage() {
            console.log("@editImage");
            if ($rootScope.isLoggedIn) {
                //check that there isnt an edit for that field already
                var editExists = false;
                for (var i = 0; i < vm.edits.length; i++) {
                    if (vm.edits[i].field == "imageurl") {
                        editExists = true;
                        break;
                    }
                }

                if (editExists) {
                    dialog.getDialog('editFieldExists');
                    return;
                }

                var q1 = image.getImageLinks(vm.fields, attNum, 'edit');
                q1.then(processImageResults, imageQueryFailed)
            }
            else {
                dialog.loginFacebook();
                //dialog.getDialog('notLoggedIn');
                return;
            }
        }

        function selectImage() {
            if ($rootScope.DEBUG_MODE) console.log("@selectImage");
            var newEdit = {};
            newEdit.field = "imageurl";
            //newEdit.cval = vm.answer.imageurl;
            newEdit.cval = vm.imageURL;
            newEdit.nval = "";
            
            if ($rootScope.userIsOwner) newEdit.imageURL = $rootScope.blobimage;
            //else newEdit.imageURL = vm.imageURL;
            newEdit.imageURL = vm.imageURL;
            newEdit.display = 'inline'
            newEdit.answer = vm.answer.id;
            newEdit.upV = 0;
            newEdit.downV = 0;
            switch ($rootScope.fields[0].name) {
                case "name": { newEdit.name = vm.answer.name; break; }
                //case "country": { newEdit.name = vm.answer.country; break; }
                //case "club": { newEdit.name = vm.answer.club; break; }
            }

            newEdit.user = $rootScope.user.id;
            newEdit.username = $rootScope.user.name;
            //newEdit.category = $rootScope.cCategory.id;
            newEdit.timestmp = Date.now();
            //if user is owner - execute userIsOwnerEditDirectly function
            if ($rootScope.userIsOwner) dialog.editConfirm(newEdit, 'image', userIsOwnerEditDirectly); 
            //else create edit for image
            else dialog.editConfirm(newEdit, 'image', createImageEdit);
            //console.log("$rootScope.userIsOwner - ", $rootScope.userIsOwner);
        }

        //Get the votes for the edits in this answer
        function getEditsVote(x) {

            var editvote_obj = {};

            for (var i = 0; i < $rootScope.editvotes.length; i++) {
                if ($rootScope.editvotes[i].answer == x) {
                    editvote_obj = $rootScope.editvotes[i];
                    editvotes.push(editvote_obj);
                }
            }

            for (i = 0; i < vm.edits.length; i++) {
                for (var j = 0; j < editvotes.length; j++) {
                    if (vm.edits[i].id == editvotes[j].edit) {
                        vm.edits[i].vote = editvotes[j].vote;
                    }
                }
            }
            displayActiveVotes();
        }

        function editAgree(x, index) {
            if ($rootScope.isAdmin){
                dialog.editChangeEffective(vm.edits[index], index, 'approve', editEffective);
                return;
            }
            if ($rootScope.isLoggedIn) {

                switch (x.vote) {
                    case 1: {
                        vm.edits[index].vote = 0;
                        vm.edits[index].upV--;
                        break;
                    }
                    case 0: {
                        vm.edits[index].vote = 1;
                        vm.edits[index].upV++;
                        break;
                    }
                    case -1: {
                        vm.edits[index].vote = 1;
                        vm.edits[index].upV++;
                        vm.edits[index].downV--;
                        break;
                    }
                }
                //console.log("vote, upV, downV",vm.edits[index].vote, vm.edits[index].upV, vm.edits[index].downV );
                checkEditStatus(index);
                displayActiveVotes();
            }
            else {
                dialog.loginFacebook();
                //dialog.getDialog('notLoggedIn');
                return;
            }
        }

        function editDisagree(x, index) {
            if ($rootScope.isAdmin){
                dialog.editChangeEffective(vm.edits[index], index, 'reject', editEffective);
                return;
            }
            if ($rootScope.isLoggedIn) {
                switch (x.vote) {
                    case 1: {
                        vm.edits[index].vote = -1;
                        vm.edits[index].upV--;
                        vm.edits[index].downV++;
                        break;
                    }
                    case 0: {
                        vm.edits[index].vote = -1;
                        vm.edits[index].downV++;
                        break;
                    }
                    case -1: {
                        vm.edits[index].vote = 0;
                        vm.edits[index].downV--;
                        break;
                    }
                }
                checkEditStatus(index);
                displayActiveVotes();
            }
            else {
                dialog.loginFacebook();
                //dialog.getDialog('notLoggedIn');
                return;
            }
        }


        function displayActiveVotes() {
            for (var i = 0; i < vm.edits.length; i++) {
                switch (vm.edits[i].vote) {
                    case 1: {
                        vm.edits[i].agree = 'active';
                        vm.edits[i].disagree = '';
                        break;
                    }
                    case 0: {
                        vm.edits[i].agree = '';
                        vm.edits[i].disagree = '';
                        break;
                    }
                    case -1: {
                        vm.edits[i].agree = '';
                        vm.edits[i].disagree = 'active';
                        break;
                    }
                }
            }
        }

        function checkEditStatus(index) {
            //check the new number of agree and disagress, discard edit req, or modify answer if applicable
       
            if (vm.edits[index].upV > vm.edits[index].downV) {
                if ((vm.edits[index].upV - vm.edits[index].downV >= numVotes2accept)) {
                    dialog.editChangeEffective(vm.edits[index], index, 'approve', editEffective);
                    return;
                }
                /*
                if (vm.edits[index].downV > 0 && (vm.edits[index].upV / vm.edits[index].downV) >= 4) {
                    dialog.editChangeEffective(vm.edits[index], index, 'approve', editEffective);
                    return;
                }
                */
            }
            else if (vm.edits[index].downV > vm.edits[index].upV) {
                if ((vm.edits[index].downV - vm.edits[index].upV >= numVotes2discard)) {
                    dialog.editChangeEffective(vm.edits[index], index, 'reject', editEffective);
                    return;
                }
                /*
                if (vm.edits[index].upV > 0 && (vm.edits[index].downV / vm.edits[index].upV) >= 3) {
                    dialog.editChangeEffective(vm.edits[index], index, 'approve', editEffective);
                    return;
                }
                */
            }
            return;
        }

        function updateRecords() {

            if ($rootScope.DEBUG_MODE) console.log('updateRecords @ editAnswer');
            var voterecexists = false;
            var session_votes = [];
            var item = {};
            for (var i = 0; i < vm.edits.length; i++) {

                voterecexists = false;
                for (var j = 0; j < editvotes.length; j++) {
                    if (vm.edits[i].id == editvotes[j].edit) {
                        voterecexists = true;
                        break;
                    }
                }
                if (voterecexists) { //record already exist, patch existing record
                    editvote.patchEditVoteRec(editvotes[j].id, vm.edits[i].vote);
                }
                else if (vm.edits[i].vote != 0) { //if there is a vote on this edit
                    
                    item = {};
                    item.edit = vm.edits[i].id;
                    item.user = $rootScope.user.id;
                    item.category = $rootScope.cCategory.id;
                    item.answer = vm.edits[i].answer;
                    item.vote = vm.edits[i].vote;
                    item.timestmp = Date.now();

                    session_votes.push(item);

                }
                //if number of votes changed
                if (vm.edits[i].upV != upVi[i] || vm.edits[i].downV != downVi[i]) {
                    //patch edit item
                    edit.updateEdit(vm.edits[i].id, vm.edits[i].upV, vm.edits[i].downV)
                }

            }

            if (session_votes.length > 0) {
                editvote.postEditVoteRec(session_votes);
                session_votes = [];
            }
            recordsUpdated = true;
        }

        function editEffective(index, type) {
            if (type == 'approve') {
                approveEdit(index);
                if (!editIsLocation && !requestOnFlight) answerDetail();
            }
            if (type == 'reject') {
                discardEdit(index);
            }
        }

        function approveEdit(index) {
            //update answer, delete edit record, and delete edit votes
            if ($rootScope.DEBUG_MODE) console.log("Edit has been approved");
            if (vm.edits[index].field == "imageurl") {
                if ($rootScope.DEBUG_MODE) console.log("EA-3");
                answer.updateAnswer(vm.edits[index].answer, [vm.edits[index].field], [vm.edits[index].imageURL]).then(function(){
                    console.log("vm.answer - ", vm.answer);
                    loadAnswerData();

                });
            }
            else if (vm.edits[index].field == "location"){
                     if (vm.edits[index].nval != undefined && vm.edits[index].nval != "" && vm.edits[index].nval != null) {
                         //var idx = $rootScope.answers.map(function(x) {return x.id; }).indexOf(vm.edits[index].answer);
                        editIsLocation = true;
                        vm.answer.location = vm.edits[index].nval;
                        var promise = getgps.getLocationGPS(vm.answer);
                        promise.then(function () {
                        //console.log("myAnswer --- ", myAnswer);
                        //answer.addAnswer(myAnswer).then(rankSummary);
                        });
                     }
            }
            else if (vm.edits[index].field == "cityarea"){
                //if change neighborhood, modify catans as well
                //---Search catans with this answer
                var cidx = 0;
                var cObj = {};
                var sTitle = ''; //searched title
                var rec2change = 0; // id of catans to change
                var change2cat = 0; //category to change to
                var rFound = false;
                for (var i=0; i<$rootScope.catansrecs.length; i++){
                    if ($rootScope.catansrecs[i].answer == vm.answer.id){
                        rFound = false;
                        cidx = $rootScope.content.map(function(x) {return x.id; }).indexOf($rootScope.catansrecs[i].category);
                        cObj = $rootScope.content[cidx];
                        console.log("change nh- ", cidx, cObj);
                        //if category for catans includes old nh, see if category for new nh exists
                        if (cObj.title.indexOf(vm.answer.cityarea) > -1){
                            sTitle = cObj.title.replace(vm.answer.cityarea,vm.edits[index].nval);
                            for (var k=0; k<$rootScope.content.length; k++){
                                //if searched title is found, store catans rec and category
                                if ($rootScope.content[k].title == sTitle){
                                    //console.log($rootScope.content[k].title);
                                    rec2change = $rootScope.catansrecs[i].id;
                                    change2cat = $rootScope.content[k].id;
                                    rFound = true;
                                    break;
                                }
                            }
                            if (rFound){
                                console.log("Changed catans");
                                catans.updateRec(rec2change,['category'],[change2cat]);
                            }
                            else {
                            console.log('dang, have to create table');
                            //if nh not found, create rank from ghost
                            var gidx = $rootScope.categories.map(function(x) {return x.id; }).indexOf(cObj.cat);
                            var nidx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(vm.edits[index].nval);

                            var rObj = {}
                            rObj.cat = $rootScope.categories[gidx].id;
                            rObj.nh = $rootScope.locations[nidx].id;
                            rObj.isatomic = true;
                            rObj.scope = $rootScope.SCOPE;
                            requestOnFlight = true;
                            table.addTable(rObj).then(function(result){
                                console.log('Had to create table, the id is: ', result);
                                catans.updateRec(rec2change,['category'],[result]);
                                answerDetail();
                            });
                            }                         
                        }
                    }
                }
                
                if ($rootScope.DEBUG_MODE) console.log("EA-4");
                answer.updateAnswer(vm.edits[index].answer, [vm.edits[index].field], [vm.edits[index].nval]);
                
            }
            else {
                if ($rootScope.DEBUG_MODE) console.log("EA-2");
                answer.updateAnswer(vm.edits[index].answer, [vm.edits[index].field], [vm.edits[index].nval]);
            }
            /*
            edit.deleteEdit(vm.edits[index].id);
            editvote.deleteEditVotes(vm.edits[index].id);
            //remove from current edits
            $rootScope.edits.splice(vm.edits[index].idx, 1);
            vm.edits.splice(index, 1);
            */
            needEditDelete = true;
            editDeleteIndex = index;
        }
        
        function editAnswerGPS(){
            if (!editAnswerGPSexec) {
                editAnswerGPSexec = true;
                if ($rootScope.DEBUG_MODE) console.log("EA-1"); 
                answer.updateAnswer(vm.answer.id,['location','lat','lng'],[vm.answer.location, vm.answer.lat, vm.answer.lng]).then(answerDetail);
            }
        }

        function discardEdit(index) {
            if ($rootScope.DEBUG_MODE) console.log("Edit has been discarded");
            edit.deleteEdit(vm.edits[index].id);
            editvote.deleteEditVotes(vm.edits[index].id);
            //remove from current edits
            $rootScope.edits.splice(vm.edits[index].idx, 1);
            vm.edits.splice(index, 1);

        }
        function showHowItWorksDialog() {
            dialog.howItWorks('editAnswer');
        }

        function createEdit(newEdit) {
            updateRecords();
            recordsUpdated = false;
            var promise = edit.addEdit(newEdit);
            if ($rootScope.DEBUG_MODE) console.log("creating edit");

            promise.then(function () {
                getEdits(vm.answer.id);
            });
        }

        function createImageEdit(newEdit) {
            updateRecords();
            recordsUpdated = false;
            var promise = edit.addEdit(newEdit);

            promise.then(function () {
                getEdits(vm.answer.id);
                vm.imageURL = vm.answer.imageurl;
                vm.imagefunctions = 'none';
            });
        }

        function answerDetail() {
            
            if (needEditDelete){
                edit.deleteEdit(vm.edits[editDeleteIndex].id);
                editvote.deleteEditVotes(vm.edits[editDeleteIndex].id);
                //remove from current edits
                $rootScope.edits.splice(vm.edits[editDeleteIndex].idx, 1);
                vm.edits.splice(editDeleteIndex, 1);
            }
            
            $state.go("answerDetail", { index: vm.answer.id });
        }


        function processImageResults(results) {

            var n;
            var linkExists = false;
            //Check link results are not repeated.
            for (var j = 0; j < results.length; j++) {
                for (var i = 0; i < imageLinks.length; i++) {
                    n = results[j].localeCompare(imageLinks[i]);
                    if (n == 0) {
                        linkExists = true;
                        break;
                    }
                }
                if (!linkExists) imageLinks.push(results[j]);
            }     
             
            vm.numLinks = imageLinks.length;
            attNum++;
            if (vm.numLinks > 10 || attNum > 4) vm.searchDisabled = 'disabled';
            if (attNum > 1) vm.imageCommand = 'Load More Images'; 
                
            vm.linkIdx = 0;

            vm.imageURL = imageLinks[vm.linkIdx];
            //testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);

            if (vm.numLinks > 0) vm.imagefunctions = 'inline';

        }

        function imageQueryFailed() {
            if ($rootScope.DEBUG_MODE) console.log('query failed, dont give up');
        }

        function viewNext() {
            vm.linkIdx++;
            if (vm.linkIdx >= vm.numLinks) vm.linkIdx = 0;
            vm.imageURL = imageLinks[vm.linkIdx];
        }
        function viewPrev() {
            vm.linkIdx--;
            if (vm.linkIdx < 0) vm.linkIdx = vm.numLinks - 1;
            vm.imageURL = imageLinks[vm.linkIdx];
        }
          function closeRank() {
               // $rootScope.$emit('closeRank');
               answerDetail();                              
        }
        
        function loadHoursData(){
            vm.timeDD = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
                "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM",
                "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"];
                
            vm.openOptions = ["OPEN", "CLOSED"];
            
            if (vm.answer.strhours == undefined || vm.answer.strhours == null || vm.answer.strhours.length == 0){
            var myStr = '[{"day":"MON","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},{"day":"TUE","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},'+
            '{"day":"WED","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},{"day":"THU","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},'+
            '{"day":"FRI","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},{"day":"SAT","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"},'+
            '{"day":"SUN","opn":"OPEN","st":"8:00 AM","ct":"5:00 PM"}]';
             vm.openhours = JSON.parse(myStr);
            }
            else {
              vm.openhours = JSON.parse(vm.answer.strhours);  
            }
             
        }
        
        function hoursChanged(){
            vm.updateHoursEn = '';
        }
        
        function updateHours(){
            
            var openhoursx = [];
            var obj = {};
            for (var i=0; i<vm.openhours.length; i++){
                obj = {};
                obj.day = vm.openhours[i].day;
                obj.opn = vm.openhours[i].opn;
                obj.st = vm.openhours[i].st;
                obj.ct = vm.openhours[i].ct;
                openhoursx.push(obj);
            }
            
            var strhours = JSON.stringify(openhoursx);
            
            //delete strhours.$$hashKey;
            //console.log('@updateHours - ', strhours);
            if ($rootScope.DEBUG_MODE) console.log("EA-4");
            answer.updateAnswer(vm.answer.id, ['strhours'], [strhours]);
            vm.updateHoursEn = 'disabled';
        }
        
        function getWiki(){
            var wikiSearchStr = '';
            for (var n=0; n<vm.fields.length; n++){
                if (vm.fields[n].field == 'name'){
                    wikiSearchStr = vm.fields[n].val;
                }
            }
            
            if (wikiSearchStr.length > 0){
                getwiki.getWiki(wikiSearchStr);
            }
            return;
        }
        
        function loadWiki(x){
            console.log("Load Wiki!!", x);
            for (var n=0; n<vm.fields.length; n++){
                if (vm.fields[n].field == 'addinfo'){
                    vm.fields[n].val = x;
                }
            }
            //vm.answer.addinfo = x;       
        }
    
        function userIsOwnerEditDirectly(x){
            if ($rootScope.DEBUG_MODE) console.log("Direct Edit Executed");
            if ($rootScope.DEBUG_MODE) console.log("edit - ", x);
            if (x.field == "imageurl") {
                if ($rootScope.DEBUG_MODE) console.log("R1");
                answer.updateAnswer(x.answer, ['imageurl'], [x.imageURL]);
                //$state.go("editAnswer", { reload: true });
                //$state.go('editAnswer',{index: vm.answer.slug});
                //refreshImage();                
            }
            else if (x.field == "location"){
                     if ($rootScope.DEBUG_MODE) console.log("R2");
                     if (x.nval != undefined && x.nval != "" && x.nval != null) {
                         //var idx = $rootScope.answers.map(function(x) {return x.id; }).indexOf(vm.edits[index].answer);
                        vm.answer.location = x.nval;
                        var promise = getgps.getLocationGPS(vm.answer);
                        promise.then(function () {
                        //console.log("myAnswer --- ", myAnswer);
                        //answer.addAnswer(myAnswer).then(rankSummary);
                        });
                     }
            }
            else {
                if ($rootScope.DEBUG_MODE) console.log("R3");
                answer.updateAnswer(x.answer, [x.field], [x.nval]);
            }
            
            $rootScope.cmd1exe = false;
        }
        
        function onNoGoodImages(x){
            if (x){
                vm.imageURL = $rootScope.EMPTY_IMAGE;
                console.log("vm.imageURL - ", vm.imageURL);
                selectImage();
            }
            else{
                vm.imageURL = imageLinks[vm.linkIdx];
            }
        }
        
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('answerRanksManager', answerRanksManager);

    answerRanksManager.$inject = ['dialog', '$stateParams', '$state', '$rootScope', 'catans', 
    '$modal', 'edit', 'editvote', 'answer', 'table2','$window'];

    function answerRanksManager(dialog, $stateParams, $state, $rootScope, catans, 
    $modal, edit, editvote, answer, table2, $window) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = 'answerRanksManager';

        //Members
        vm.editRank = editRank;
        vm.addRank = addRank;
        vm.deleteRank = deleteRank;
        vm.goBack = goBack;

        var selRank = 0;
        
        activate();

        function activate() {

            vm.ranksqty = $rootScope.canswer.ranksqty; 

            if ($rootScope.canswer == undefined) $state.go('cwrapper');

            var n=0;
            vm.ranks = JSON.parse($rootScope.canswer.ranks);
            if (vm.ranks == undefined) vm.ranks = [];
            for (var i=0; i<vm.ranks.length; i++){
                n = $rootScope.customranks.map(function(x) {return x.id; }).indexOf(vm.ranks[i].id);
                vm.ranks[i].title = $rootScope.customranks[n].title.replace(' @ '+$rootScope.canswer.name,'');
                vm.ranks[i].used = true;
            }

            if (vm.ranks.length < $rootScope.canswer.ranksqty){
                for (var j=vm.ranks.length; j<$rootScope.canswer.ranksqty; j++){
                    var emptyObj = {}
                    emptyObj.title = 'Empty';
                    emptyObj.used = false;
                    vm.ranks.push(emptyObj);
                }
            }
            if ($rootScope.DEBUG_MODE) console.log("vm.ranks - ", vm.ranks);                     
            if ($rootScope.DEBUG_MODE) console.log("Answer rankings manager activated!");
        }

        function editRank(x){
            $rootScope.rankIdx = x;
            $rootScope.rankforAnswerMode = 'edit';
            $state.go('addRankforAnswer'); 
        }

        function addRank(){
            $rootScope.rankforAnswerMode = 'add';
            $state.go('addRankforAnswer');
        }

        function deleteRank(x){
            var idx = $rootScope.customranks.map(function(x) {return x.id; }).indexOf(vm.ranks[x].id);
            selRank = x;
            dialog.deleteRank($rootScope.customranks[idx],execDeleteRank);           
        }

        function execDeleteRank(){
            table2.deleteTable(vm.ranks[selRank].id);
            vm.ranks.splice(selRank,1);
            //Clear title fields and scope variables
            var ranksArr = [];
            var rankObj = {};
            for (var i=0; i<vm.ranks.length; i++){
                if (vm.ranks[i].used){
                    rankObj = {};
                    rankObj.id = vm.ranks[i].id;
                    rankObj.bc = vm.ranks[i].bc;
                    rankObj.fc = vm.ranks[i].fc;
                    ranksArr.push(rankObj);
                }                
            }
            var ranksStr = JSON.stringify(ranksArr);
            answer.updateAnswer($rootScope.canswer.id,['ranks'],[ranksStr]);
            activate();
            
        }

        function goBack(){
            $state.go('answerDetail',{index: $rootScope.canswer.id});
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('addEvent', addEvent);

    addEvent.$inject = ['dialog', '$state', 'answer', '$rootScope', '$modal', 'datetime', 'table',
     'image', 'catans', 'getgps', '$timeout','getwiki','$window','$scope','common','search'];

    function addEvent(dialog, $state, answer, $rootScope, $modal, datetime, table,
    image, catans, getgps, $timeout, getwiki, $window, $scope, common, search) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addEvent';
        //vm.header = "table" + $rootScope.cCategory.id + ".header";
        //vm.body = 'table' + $rootScope.cCategory.id + '.body';
        vm.searchDisabled = 'disabled';
        vm.modalEnable = true;
        vm.publicfields = [];
        vm.ranking = $rootScope.cCategory != undefined ? $rootScope.cCategory.title: 'Add Event';
        var publicfield_obj = {};
        var loadImageDataOk = false;
        var addEventDataOk = false;
        var addEventExec = false;
        var events = $rootScope.events;
        var nhChanged = false;
        var myAnswer = {};
        
        var hasSubAreas = false;
        var answerNeighborhood = '';
        var rankNh = '';
        var rankNhObj = {};
        var eqRankIdx = 0;
        //load public fields
        var fieldreq = [];
                
        //google search
        var imageLinks = [];
        vm.linkIdx = 0;
        vm.numLinks = 0;
        vm.imageCommand = 'Get images';
        vm.searchDisabled = '';
        var attNum = 1;
        vm.imagefunctions = 'none';
        vm.ev = {};
        var myEvent = {};

        //search for equivalent ranks
        var inDistrict = false;
        var inDistrictName = '';
        var inDowntown = false;
        var inCity = false;
        var eqRankIdx = 0;
        var eqFound = false;
        var addAnswerGPSexec = false;
        var needCreateRec = false;

        var inputLengthMem = 0; //inputLength in Memory
        var inputLengthMemNh = 0;
        var maybeLocations = [];
        
        // Members
        //var myEvent = {};
        
        // Methods
        vm.calladdEvent = calladdEvent;
        vm.rankSummary = rankSummary;
        vm.callSearchImage = callSearchImage;
        vm.viewNext = viewNext;
        vm.viewPrev = viewPrev;
        vm.closeRank = closeRank;
        vm.onNoGoodImages = onNoGoodImages;
        vm.showHowItWorksDialog = showHowItWorksDialog;
        vm.displayCharLength = displayCharLength;
        vm.frequencySel = frequencySel;
        vm.showPreview = showPreview;
        vm.deleteSpecial = deleteSpecial;
        vm.onSelect = onSelect;
        vm.onSelectNh = onSelectNh;
        vm.goBack = goBack;
        
        vm.imageURL = $rootScope.EMPTY_IMAGE;
        vm.header = $rootScope.header;
        
        //TODO: Would like to add this abstract template, but dont know how         
        
		//Adjust picture size for very small displays
        if ($window.innerWidth < 512) {vm.sm = true; vm.nsm = false; }
        else {vm.sm = false; vm.nsm = true; }

        //TODO: Would like to add this abstract template, but dont know how         
        var GPSReadyListenerEvent = $rootScope.$on('answerGPSready', function () {
            if ($state.current.name == 'addEvent' && !addAnswerGPSexec) addEventGPS(myAnswer);
        });

        activate();

        function activate() {

            //Concatenate Establishments and Places to show venue options
            vm.locations = $rootScope.estNames.concat($rootScope.plaNames);
            
            //Load neighborhoods
            vm.neighborhoods = $rootScope.nhs;
            vm.addToRanks = [];
            
            //$rootScope.eventmode = 'add';
             if ($rootScope.eventmode == 'edit') {
                
                //Copy object without reference
                vm.ev = JSON.parse(JSON.stringify($rootScope.canswer));
                
                //Check if this event is bind to user
                if (vm.ev.owner != 0 && vm.ev.owner != undefined) vm.bind = true;
                else vm.bind = false;
                
                datetime.formatdatetime(vm.ev);
                
                vm.isEdit = true;
                if (vm.ev.freq == 'onetime') frequencySel(1);
                if (vm.ev.freq == 'weekly') frequencySel(2);
                //vm.ev.bc = vm.sp.bc;
                //vm.ev.fc = vm.sp.fc;
                if ($rootScope.DEBUG_MODE) console.log("vm.ev --- ", vm.ev);
                vm.imageURL = vm.ev.imageurl;

            }

            if ($rootScope.eventmode == 'add') {

                determineScope();
                detectNeighborhood();
                vm.char = 45;
                vm.ev.fc = "hsl(0, 100%, 0%)"; //black
                vm.ev.bc = "hsl(0, 0%, 100%)"; //white
                vm.ev.eventlocid = -1;
                frequencySel(1);
            }

            createTimeDropdown();            
            if ($rootScope.DEBUG_MODE) console.log("Add Event Activated!");

        }

        function determineScope() {

            if (!$rootScope.cCategory.isatomic) hasSubAreas = true; 
        }
        function detectNeighborhood(){
            //this function determines if current ranking is for a neighborhood or district
            var idx = $rootScope.locations.map(function (x) { return x.id; }).indexOf($rootScope.cCategory.nh);
            if (idx > -1){
                rankNh = $rootScope.locations[idx].nh_name;
                rankNhObj = $rootScope.locations[idx];
                answerNeighborhood = rankNh;
                if ($rootScope.cCategory.isatomic || rankNhObj.id != 1 ) prepareCatansOptions();
            } 
        }

        function prepareCatansOptions(){

            if ($rootScope.DEBUG_MODE) console.log("prepareCatansOptions - ", $rootScope.cCategory, answerNeighborhood);
            if (true) {
                
                if (vm.addToRanks.length > 0) {
                    var morePossibleRanks = search.sibblingRanks($rootScope.cCategory, answerNeighborhood);
                    var map = vm.addToRanks.map(function (x) { return x.id; });
                    morePossibleRanks.forEach(function (item) {
                        if (map.indexOf(item.id) < 0) vm.addToRanks.push(item);
                    })
                }
                else vm.addToRanks = search.sibblingRanks($rootScope.cCategory, answerNeighborhood);
                      
                if (vm.addToRanks.length == 0) vm.addToRanks.push($rootScope.cCategory);
                if (vm.addToRanks.length > 0) vm.addToRanks[0].sel = true;
                for (var i = 1; i < vm.addToRanks.length; i++) {
                    vm.addToRanks[i].sel = false;
                }

                vm.addToRanks = vm.addToRanks.sort(compare);
                
                vm.addctsopts = [];
                var opt = '';
                //if (answerNeighborhood == undefined || answerNeighborhood == '') answerNeighborhood = 'San Diego';
                for (var i = 0; i < $rootScope.ctsOptions.length; i++) {
                    if ($rootScope.ctsOptions[i].indexOf('@Nh') > -1) {
                        if (answerNeighborhood) {
                            opt = $rootScope.ctsOptions[i].replace('@Nh', answerNeighborhood);
                            vm.addctsopts.push(opt);
                        }
                    }
                    else vm.addctsopts.push($rootScope.ctsOptions[i]);
                }
            }
            else {
                vm.addToRanks.push($rootScope.cCategory);
            }
        }

        function compare(a,b) {
                //console.log("sort.compare");
                if (a.sel == b.sel) return (b.ctr - a.ctr);
                else if (b.sel) return 1;
                else return -1;
        }

        function eqRanks() {
            var lookRank = '';
            var cityarea = '';
            //Determine answer neighborhood
            if (myEvent.cityarea == undefined)
                if (extAnswer.cityarea) cityarea = extAnswer.cityarea;
                else cityarea = rankNh;
            else 
                cityarea = myEvent.cityarea;

            if (hasSubAreas) {    
            //if (inDowntown || inDistrict || inCity) {              
                //if (inCity){
                    var idx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(cityarea);
                    for (var n = 0; n < $rootScope.content.length; n++) {
                        if ($rootScope.content[n].cat == $rootScope.cCategory.cat && 
                            $rootScope.content[n].nh == $rootScope.locations[idx].id) {
                                eqFound = true;
                                eqRankIdx = $rootScope.content[n].id;
                        }
                    }
                    //if (!eqFound) needCreateGhostRec = true;
                //}
            }
        }

        function addAnswerConfirmed(myEvent) {

            //Add new answer, also add new post to catans (inside addAnser)
            
            if ($rootScope.DEBUG_MODE) console.log("No, different! @addAnswerConfirmed");
            //***** if (myEvent.type == 'Establishment' && rankNh && rankNh != myEvent.cityarea) dialog.getDialog('neighborhoodsDontMatch');
            var nhIsValid = neighborhoodOk(myEvent); 
            if (!nhIsValid) dialog.getDialog('neighborhoodsDontMatch');
            //****else if (myEvent.type == 'Establishment' && (myEvent.location != undefined && myEvent.location != "" && myEvent.location != null)) {
            else if (
                myEvent.location != undefined && 
                myEvent.location != "" && 
                myEvent.location != null &&
                myEvent.lat == undefined && 
                myEvent.lng == undefined ) {
              
                var promise = getgps.getLocationGPS(myEvent);
                promise.then(function () {
                    //console.log("myEvent --- ", myEvent);
                    //answer.addAnswer(myEvent).then(rankSummary);
                });
            }
            else {
                //**** if (myEvent.type == 'Establishment' || myEvent.type == 'PersonCust') eqRanks();
                eqRanks();
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P1 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx,myEvent);
                        answer.addAnswer2(myEvent, [$rootScope.cCategory.id, eqRankIdx]).then(rankSummary);
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P2 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx,myEvent);
                        answer.addAnswer2(myEvent, [eqRankIdx]).then(rankSummary);
                    }                    
                }
                else { //eqFound = false
                    if (needCreateRec){
                        if ($rootScope.DEBUG_MODE) console.log("Need to create record");
                    }
                    else{ 
                        if ($rootScope.DEBUG_MODE) console.log("P3 - ", myEvent);
                        
                        var ranks = [];
                        var includesGhostRanking = false;
                        //var granks = [];
                        for (var i=0; i<vm.addToRanks.length; i++){
                            if (vm.addToRanks[i].sel) ranks.push(vm.addToRanks[i]);
                            if (vm.addToRanks[i].isghost) includesGhostRanking = true;
                            //if (vm.addToRanks[i].sel && vm.addToRanks[i].isghost) granks.push(vm.addToRanks[i]);
                        }
                        //Process non-ghost ranks  
                        if (!includesGhostRanking) answer.addAnswer(myEvent, ranks).then(rankSummary);
                        //Process ghost ranks
                        else {
                            if ($rootScope.DEBUG_MODE) console.log("X1 - ", ranks, myEvent);
                            table.ghostTablesWithAnswer(ranks, myEvent).then(function(){
                                $timeout(function(){
                                    rankSummary();
                                },1000);
                            });
                        }

                    }
                    myEvent = undefined;
                } 
            }
        }
    
        function addEventGPS(myEvent) {
            if (!addAnswerGPSexec) {
                 if ($rootScope.DEBUG_MODE) console.log("@exec-addAnswerGPS");
                addAnswerGPSexec = true;
                eqRanks();
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P4 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx, myEvent);
                        if (myEvent) answer.addAnswer2(myEvent, [$rootScope.cCategory.id, eqRankIdx]).then(rankSummary);
                    }
                    else{
                        if ($rootScope.DEBUG_MODE) console.log("P5 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx, myEvent);
                        if (myEvent) answer.addAnswer2(myEvent, [eqRankIdx]).then(rankSummary);
                    }
                }
                else { //eqFound = false
                    if (needCreateRec){
                        if ($rootScope.DEBUG_MODE) console.log("Need to Create Record")
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P6", eqFound, myEvent);
                        if (myEvent) {
                            var ranks = [];
                            var includesGhostRanking = false;
                            //var granks = [];
                            for (var i = 0; i < vm.addToRanks.length; i++) {
                                if (vm.addToRanks[i].sel) ranks.push(vm.addToRanks[i]);
                                if (vm.addToRanks[i].isghost) includesGhostRanking = true;
                                //if (vm.addToRanks[i].sel && vm.addToRanks[i].isghost) granks.push(vm.addToRanks[i]);
                            }
                            //Process non-ghost ranks  
                            if (!includesGhostRanking) {
                                answer.addAnswer(myEvent, ranks).then(rankSummary);
                            }
                            //Process ghost ranks
                            else {
                                if ($rootScope.DEBUG_MODE) console.log("X2 - ", ranks, myEvent);
                                table.ghostTablesWithAnswer(ranks, myEvent).then(function () {
                                    $timeout(function () {
                                        rankSummary();
                                    }, 1000);
                                });
                            }
                        }
                    }
                myEvent = undefined;                                 
            }
            }
        }
        
         function answerIsSame() {
            if ($rootScope.DEBUG_MODE) console.log("Yeah Same, @answerIsSame");
            var nhIsValid = neighborhoodOk(extAnswer);
            //Answer already exist in this category, do not add
            if (duplicateSameCategory) dialog.getDialog('answerDuplicated');
            
            else if (!nhIsValid) dialog.getDialog('neighborhoodsDontMatch');
            
            //Answer already exist, just post new category-answer record            
            else {
                eqRanks();
                if ($rootScope.DEBUG_MODE) console.log("eqFound, hasSubAreas, eqRankIdx = ", eqFound, hasSubAreas, eqRankIdx);
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P7 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx);
                        catans.postRec2(extAnswer.id, eqRankIdx);
                        catans.postRec2(extAnswer.id, $rootScope.cCategory.id).then(rankSummary);
                    }
                    else{
                        if ($rootScope.DEBUG_MODE) console.log("P8 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx);
                        catans.postRec2(extAnswer.id, eqRankIdx).then(rankSummary);
                    }
                }
                else { //eqFound = false;
                    if (needCreateRec){
                        if ($rootScope.DEBUG_MODE) console.log("Need to create record");
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P9");
                        if ($rootScope.cCategory.isatomic) catans.postRec(extAnswer.id).then(rankSummary);
                        else{
                            //Need to find appropriate ranking record
                            var rFound = false;
                            var nidx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(extAnswer.cityarea);
                            $rootScope.content.forEach(function(r){
                                if (r.nh == $rootScope.locations[nidx].id && 
                                    r.cat == $rootScope.cCategory.cat ){
                                        rFound = true;
                                        rankid = r.id;
                                    }
                            });
                            if (rFound) catans.postRec2(extAnswer.id,rankid).then(rankSummary);
                            else{
                                //Need to create rank from ghost
                                var rObj = {};
                                rObj.cat = $rootScope.cCategory.cat;
                                rObj.nh = $rootScope.locations[nidx].id;
                                rObj.isatomic = true;
                                table.addTable(rObj).then(function(tableid){
                                    //update catstr and register new catans record
                                    var newcatstr = $rootScope.cCategory.catstr + ':' + tableid;
                                    var p1 = catans.postRec2(extAnswer.id,tableid);
                                    var p2 = table.update($rootScope.cCategory.id,['catstr'],[newcatstr]); 
                                    $q.all([p1,p2]).then(rankSummary);
                                });
                            }
                        }
                    }
                }
                myEvent = undefined;                
             }
         }
        
         function neighborhoodOk(answer) {
            var nhOk = true;
            //var idx = vm.fields.map(function (x) { return x.name; }).indexOf('cityarea');
            //if (rankNh && idx > -1) {
            if (rankNh){
                if (rankNh != answer.cityarea) {

                    var nhArr = [];
                    common.getInclusiveAreas(rankNhObj.id, nhArr);

                    var idx2 = $rootScope.locations.map(function (x) { return x.nh_name; }).indexOf(answer.cityarea);
                    var nhIsIncluded = nhArr.indexOf($rootScope.locations[idx2].id) > -1;

                    if (nhIsIncluded) nhOk = true;
                    else nhOk = false;

                    //Temp until all neighborhoods are set and confirmed
                    if (rankNhObj.id == 1) nhOk = true;
                }
            }
            else nhOk = true;
            return nhOk;
        }

         function onSelectNh(x) {
             //console.log("$rootScope.allnh.length ",$rootScope.allnh.length);
             if (Math.abs(vm.ev.cityarea.length - inputLengthMemNh) > 2 && vm.ev.cityarea.length != 0) {
                 //an option was selected from the typeahead
                 inputLengthMemNh = vm.ev.cityarea.length;
                 for (var i = 0; i < $rootScope.nhs.length; i++) {
                     if ($rootScope.nhs[i] == vm.ev.cityarea) {
                         vm.nhrdy = true;
                         answerNeighborhood = vm.ev.cityarea;
                         prepareCatansOptions();
                     }
                 }
             }
             inputLengthMemNh = vm.ev.cityarea.length;
         }
        
        function loadFormData() {
                    myEvent.name = vm.ev.name;
                    myEvent.location = vm.ev.location;
                    myEvent.addinfo = vm.ev.addinfo;
                    myEvent.cityarea = vm.ev.cityarea;
                    myEvent.website = vm.ev.website;
                    myEvent.eventloc = vm.ev.eventloc;                
        }

        function validateData() {
            loadImageDataOk = true;
            //addEventDataOk = true;
            if (vm.ev.name.length < 3) {
                  loadImageDataOk = false;
            }
            
           //loadImageDataOk = loadImageDataOk && countryIsValid;
           addEventDataOk = (loadImageDataOk && (vm.numLinks > 0 || vm.ngi));
        }

        function rankSummary() {

            $state.go("rankSummary", { index: $rootScope.cCategory.id });
        }

        function callSearchImage() {

            var pFields = [];

            loadFormData();
            validateData();

            if (loadImageDataOk) {
                
                var obj = {};
                obj.field = "name";
                obj.val = vm.ev.name;
                obj.cval = vm.ev.name;
                
                pFields.push(obj);
                var q1 = image.getImageLinks(pFields, attNum, 'add');
                q1.then(processImageResults, imageQueryFailed)

            }
            else {
                dialog.getDialog('missingDataImage');
                return;
            }
        }

        function imageQueryFailed() {
            console.log('query failed, dont give up');
        }

        function calladdEvent() {
            loadFormData();
            validateData();
            
            if (addEventDataOk) {
                addEvent();
            }
            else {
                dialog.getDialog('missingDataAnswer');
                return;
            }
        }

        function processImageResults(results) {

            var n;
            var linkExists = false;
            //Check link results are not repeated.
            for (var j = 0; j < results.length; j++) {
                for (var i = 0; i < imageLinks.length; i++) {
                    n = results[j].localeCompare(imageLinks[i]);
                    if (n == 0) {
                        linkExists = true;
                        break;
                    }
                }
                if (!linkExists) imageLinks.push(results[j]);
            }     
            
            //imageLinks = imageLinks.concat(results);
            vm.numLinks = imageLinks.length;
            attNum++;
            if (vm.numLinks > 10 || attNum >= 4) vm.searchDisabled = 'disabled';
            if (attNum > 1) vm.imageCommand = 'Get more images';
            vm.linkIdx = 0;

            vm.imageURL = imageLinks[vm.linkIdx];

            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);

            if (vm.numLinks > 0) vm.imagefunctions = 'inline';

        }


        function viewNext() {
            vm.linkIdx++;
            if (vm.linkIdx >= vm.numLinks) vm.linkIdx = 0;
            vm.imageURL = imageLinks[vm.linkIdx];
            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);
        }
        function viewPrev() {
            vm.linkIdx--;
            if (vm.linkIdx < 0) vm.linkIdx = vm.numLinks - 1;
            vm.imageURL = imageLinks[vm.linkIdx];
            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);
        }

        function addEventConfirmed(myEvent) {
            //Add new answer, also add new post to catans (inside addAnser)
            var eventObj = {};
            eventObj.bc = myEvent.bc;
            eventObj.fc = myEvent.fc;
            eventObj.freq = myEvent.freq;
            eventObj.edate = myEvent.edate;
            eventObj.sdate = myEvent.sdate;
            eventObj.etime = myEvent.etime;
            eventObj.etime2 = myEvent.etime2;
            eventObj.stime = myEvent.stime;
            eventObj.stime2 = myEvent.stime2;
            eventObj.mon = myEvent.mon;
            eventObj.tue = myEvent.tue;
            eventObj.wed = myEvent.wed;
            eventObj.thu = myEvent.thu;
            eventObj.fri = myEvent.fri;
            eventObj.sat = myEvent.sat;
            eventObj.sun = myEvent.sun;
            
            var eventstr = JSON.stringify(eventObj);
            
            var ansObj = {};
            ansObj.name = myEvent.name;
            ansObj.addinfo = myEvent.addinfo;
            ansObj.cityarea = myEvent.cityarea;
            ansObj.location = myEvent.location;
            ansObj.eventloc = myEvent.eventloc;
            ansObj.eventlocid = myEvent.eventlocid;
            ansObj.lat = myEvent.lat;
            ansObj.lng = myEvent.lng;
            ansObj.type = 'Event';
            ansObj.website = myEvent.website;
            ansObj.phone = myEvent.phone;
            ansObj.imageurl = myEvent.imageurl;
            ansObj.views = 0;
            ansObj.eventstr = eventstr;
            ansObj.userid = $rootScope.user.id;
            ansObj.ig_image_urls = '';
            ansObj.slug = '';
            if(vm.bind) ansObj.owner = $rootScope.user.id;

            myAnswer = ansObj;
            addAnswerConfirmed(ansObj);
            //eqRanks();
            //if (eqFound && !inCity) answer.addAnswer2(ansObj, [$rootScope.cCategory.id, eqRankIdx]).then(rankSummary);
            //else if (eqFound && inCity) answer.addAnswer2(ansObj, [eqRankIdx]).then(rankSummary);
            //else answer.addAnswer(ansObj,[$rootScope.cCategory]).then(rankSummary); 
            
         }
        
        function updateEventConfirmed(){

            console.log("updateEventComfirmed");
            
            var eventObj = {};
            eventObj.bc = myEvent.bc;
            eventObj.fc = myEvent.fc;
            eventObj.freq = myEvent.freq;
            eventObj.edate = myEvent.edate;
            eventObj.sdate = myEvent.sdate;
            eventObj.etime = myEvent.etime;
            eventObj.etime2 = myEvent.etime2;
            eventObj.stime = myEvent.stime;
            eventObj.stime2 = myEvent.stime2;
            eventObj.mon = myEvent.mon;
            eventObj.tue = myEvent.tue;
            eventObj.wed = myEvent.wed;
            eventObj.thu = myEvent.thu;
            eventObj.fri = myEvent.fri;
            eventObj.sat = myEvent.sat;
            eventObj.sun = myEvent.sun;
            
            var eventstrNew = JSON.stringify(eventObj);
            if(!vm.bind) vm.ev.owner = 0;
            
            var fields = [];
            var vals = []; 
            
            if($rootScope.canswer.name != vm.ev.name) {fields.push('name'); vals.push(vm.ev.name);}
            if($rootScope.canswer.addinfo != vm.ev.addinfo) {fields.push('addinfo'); vals.push(vm.ev.addinfo);}
            if($rootScope.canswer.cityarea != vm.ev.cityarea) {fields.push('cityarea'); vals.push(vm.ev.cityarea); nhChanged = true;}
            if($rootScope.canswer.location != vm.ev.location) {fields.push('location'); vals.push(vm.ev.location);}
            if($rootScope.canswer.website != vm.ev.website) {fields.push('website'); vals.push(vm.ev.website);}
            if($rootScope.canswer.phone != vm.ev.phone) {fields.push('phone'); vals.push(vm.ev.phone);}
            if($rootScope.canswer.imageurl != vm.imageURL) {fields.push('image'); vals.push(vm.imageURL);}
            if($rootScope.canswer.eventstr != eventstrNew) {fields.push('eventstr'); vals.push(eventstrNew);}
            if($rootScope.canswer.owner != vm.ev.owner) {fields.push('owner'); vals.push(vm.ev.owner);}
            if($rootScope.canswer.eventloc != vm.ev.eventloc) {fields.push('eventloc'); vals.push(vm.ev.eventloc);}
            if($rootScope.canswer.eventlocid != vm.ev.eventlocid) {fields.push('eventlocid'); vals.push(vm.ev.eventlocid);}
            if($rootScope.canswer.lat != vm.ev.lat) {fields.push('lat'); vals.push(vm.ev.lat);}
            if($rootScope.canswer.lng != vm.ev.lng) {fields.push('lng'); vals.push(vm.ev.lng);}
            
            if ($rootScope.DEBUG_MODE) console.log("fields - ", fields);
            if ($rootScope.DEBUG_MODE) console.log("vals - ", vals);

            if (nhChanged) updateCatans();
            
            answer.updateAnswer(vm.ev.id, fields, vals).then(function(){
                $state.go('answerDetail',{index: vm.ev.id});
            });
        }

        function updateCatans(){
                //if change neighborhood, modify catans as well
                //---Search catans with this answer
                var cidx = 0;
                var cObj = {};
                var sTitle = ''; //searched title
                var rec2change = []; //store id of catans to change
                var change2cat = []; //store category to change to
                
                for (var i=0; i<$rootScope.catansrecs.length; i++){
                    if ($rootScope.catansrecs[i].answer == vm.ev.id){
                        cidx = $rootScope.content.map(function(x) {return x.id; }).indexOf($rootScope.catansrecs[i].category);
                        cObj = $rootScope.content[cidx];
                        //if category for catans includes old nh, see if category for new nh exists
                        if (cObj.title.indexOf($rootScope.canswer.cityarea) > -1){
                            sTitle = cObj.title.replace($rootScope.canswer.cityarea,vm.ev.cityarea);
                            for (var k=0; k<$rootScope.content.length; k++){
                                //if searched title is found, store catans rec and category
                                if ($rootScope.content[k].title == sTitle){
                                    //console.log($rootScope.content[k].title);
                                    rec2change.push($rootScope.catansrecs[i].id);
                                    change2cat.push($rootScope.content[k].id);
                                    break;
                                }
                            }
                        }
                    }
                }
                for (var i=0; i<rec2change.length; i++){
                    catans.updateRec(rec2change[i],['category'],[change2cat[i]]);
                }
        }
        
        function showHowItWorksDialog() {
            dialog.howItWorks('addEvent');
        }

        function testImageUrl(url, callback, timeout) {
            timeout = timeout || 5000;
            var timedOut = false, timer;
            var img = new Image();
            img.onerror = img.onabort = function () {
                if (!timedOut) {
                    clearTimeout(timer);
                    callback(url, "error");
                }
            };
            img.onload = function () {
                if (!timedOut) {
                    clearTimeout(timer);
                    callback(url, "success");
                }
            };
            img.src = url;
            timer = setTimeout(function () {
                timedOut = true;
                callback(url, "timeout");
            }, timeout);
        }

        function showImageNotOk(url, result) {
            if (result == "error" || result == "timeout") {
                vm.imageURL = $rootScope.EMPTY_IMAGE;
            }
        }
        
        function onNoGoodImages(x){
            if (x){
                vm.imageURL = $rootScope.EMPTY_IMAGE;
            }
            else{
                vm.imageURL = imageLinks[vm.linkIdx];
            }
        }
        
        function displayCharLength() {
            vm.char = 45 - vm.ev.name.length;
        }

        function frequencySel(x) {
            if (x == 1) {
                vm.weekly = false;
                vm.onetime = true;
                vm.ev.freq = 'onetime';
            }
            if (x == 2) {
                vm.weekly = true;
                vm.onetime = false;
                vm.ev.freq = 'weekly';
            }
        }

        function showPreview() {
            myEvent = vm.ev;
            myEvent.imageurl = vm.imageURL;
            myEvent.date = myEvent.sdate;
            
            if ($rootScope.eventmode == 'add') dialog.createEventPreview(myEvent, 'add', addEventConfirmed);
            else dialog.createEventPreview(myEvent, 'edit', updateEventConfirmed);
        }
        /*
        function eqRanks() {
            var lookRank = '';
            if (inDowntown || inDistrict || inCity) {
                if (inDowntown && myEvent.cityarea != 'Downtown') {
                    lookRank = $rootScope.cCategory.title.replace('Downtown', vm.ev.cityarea);
                    for (var n = 0; n < $rootScope.content.length; n++) {
                        if ($rootScope.content[n].title == lookRank) {
                            eqFound = true;
                            eqRankIdx = $rootScope.content[n].id;
                        }
                    }
                }
                if (inDistrict) {
                    lookRank = $rootScope.cCategory.title.replace(inDistrictName, 'Downtown');
                    for (var n = 0; n < $rootScope.content.length; n++) {
                        if ($rootScope.content[n].title == lookRank) {
                            eqFound = true;
                            eqRankIdx = $rootScope.content[n].id;
                        }
                    }
                }               
                if (inCity){
                    lookRank = $rootScope.cCategory.title.replace('San Diego', vm.ev.cityarea);
                    for (var n = 0; n < $rootScope.content.length; n++) {
                        if ($rootScope.content[n].title == lookRank) {
                            eqFound = true;
                            eqRankIdx = $rootScope.content[n].id;
                        }
                    }
                }
            }
        }*/

        function onSelect(){
            maybeLocations = [];
            //only use for field name
                if (Math.abs(vm.ev.eventloc.length - inputLengthMem)>2 && vm.ev.eventloc.length != 0){
                    //an option was selected from the typeahead
                    //search for this answer, if single result populate fields, if not
                    //show dialog with options
                    inputLengthMem = vm.ev.eventloc.length;        
                    for (var i=0; i<$rootScope.answers.length; i++){
                        if ($rootScope.answers[i].name == vm.ev.eventloc){
                            maybeLocations.push($rootScope.answers[i]);
                        }
                    }
                    //console.log("MaybeSameAnswers - ", maybeSameAnswers);
                    if (maybeLocations.length == 1) {
                        //checkAnswerExists(maybeLocations[0]);
                        dialog.confirmSameAnswer(maybeLocations[0],locationSelected);
                    }
                    else if (maybeLocations.length > 1) dialog.confirmSameAnswerMultiple(maybeSameAnswers,locationSelected);                 
                }                
            inputLengthMem = vm.ev.eventloc.length;                       
        }

        function locationSelected(x){
            var n = 0;
            if (x != undefined) n = x;
                //console.log("n ", maybeLocations[n], n);
                for (var i=0; i< $rootScope.answers.length; i++){
                        if ($rootScope.answers[i].name == maybeLocations[n].name){
                            vm.ev.location = $rootScope.answers[i].location;
                            vm.ev.cityarea = $rootScope.answers[i].cityarea;
                            vm.ev.eventloc = $rootScope.answers[i].name;
                            vm.ev.eventlocid = $rootScope.answers[i].id;
                            vm.ev.phone = $rootScope.answers[i].phone;
                            vm.ev.website = $rootScope.answers[i].website;
                            vm.ev.lat = $rootScope.answers[i].lat;
                            vm.ev.lng = $rootScope.answers[i].lng;
                            $scope.$apply();
                        }
                }
        }
        
       function deleteSpecial() {
            event.deleteEvent(myEvent.id);
            $state.go('specials');
        }

        function goBack() {
            //$state.go('specials');
            if ($rootScope.eventmode == 'edit') $state.go("answerDetail", { index: $rootScope.canswer.slug });
            if ($rootScope.eventmode == 'add') $state.go("rankSummary", { index: $rootScope.cCategory.slug });
        }

        function createTimeDropdown() {

            vm.timeDD = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
                "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
                "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM",
                "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM"];
        }

        function closeRank() {
            $state.go('cwrapper');
        }

    }

})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('addAnswer', addAnswer);

    addAnswer.$inject = ['dialog', '$state', 'answer', '$rootScope', '$modal', '$q','common','table',
    'image', 'catans', 'getgps', '$timeout','getwiki','$window','$scope','search'];

    function addAnswer(dialog, $state, answer, $rootScope, $modal, $q, common, table,
    image, catans, getgps, $timeout, getwiki, $window,$scope, search) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addAnswer';
        vm.header = "table" + $rootScope.cCategory.id + ".header";
        vm.body = 'table' + $rootScope.cCategory.id + '.body';
        vm.searchDisabled = 'disabled';
        vm.modalEnable = true;
        vm.userIsOwner = false;
        vm.addRanksEnable = true;
        vm.publicfields = [];
        vm.ranking = $rootScope.cCategory.title;
        var publicfield_obj = {};
        var loadImageDataOk = false;
        var addAnswerDataOk = false;
        var addAnswerExec = false;
        var addAnswerGPSexec = false;
        var answers = $rootScope.answers;
        var inputLengthMem = 0; //inputLength in Memory
        var inputLengthMemNh = 0; //inputLength in Memory
        var maybeSameAnswers = [];
        
        
        //load public fields
        var fieldreq = [];
                
        //google search
        var imageLinks = [];
        vm.linkIdx = 0;
        vm.numLinks = 0;
        vm.imageCommand = 'Get images';
        vm.searchDisabled = '';
        var attNum = 1;
        vm.imagefunctions = 'none';

        //var answerhtml = '';
        //var categoryhtml = '';
        //var countryIsValid = false;
        //var countryIdx = -1;
        //var cFld = -1;
        var duplicateExists = false;
        var duplicateSameCategory = false;
        
        //search for equivalent ranks
        var inDistrict = false;
        var inDistrictName = '';
        var inDowntown = false;
        //var inCity = false;
        var hasSubAreas = false;
        var needCreateRec = false;
        var eqRankIdx = 0;
        var eqFound = false;
        var rankNh = undefined;
        var answerNeighborhood = undefined;
        var rankObj = {};
        var rankNhObj = {};
        var isCustomRank = false;
        
        // Members
        var myAnswer = {};
        var extAnswer = {};

        // Methods
        vm.callAddAnswer = callAddAnswer;
        vm.rankSummary = rankSummary;
        vm.callSearchImage = callSearchImage;
        vm.viewNext = viewNext;
        vm.viewPrev = viewPrev;
        vm.closeRank = closeRank;
        vm.getWiki = getWiki;
        vm.onNoGoodImages = onNoGoodImages;
        vm.showHowItWorksDialog = showHowItWorksDialog;
        vm.onSelect = onSelect;
        vm.addCatans = addCatans;
        vm.addcts = addcts;
        vm.selRank = selRank;

        vm.imageURL = $rootScope.EMPTY_IMAGE;
        vm.header = $rootScope.header;
        
        //TODO: Would like to add this abstract template, but dont know how         
        var GPSReadyListener = $rootScope.$on('answerGPSready', function () {
            if ($state.current.name == 'addAnswer' && !addAnswerGPSexec) addAnswerGPS();
        });
        
        var WikiReadyListener = $rootScope.$on('wikiReady', function (event,wikiRes) {
            if ($state.current.name == 'addAnswer') loadWiki(wikiRes);
        });

        var fileUploadedListener = $rootScope.$on('fileUploaded', function (event, data){
            if ($state.current.name == 'addAnswer') {
                $rootScope.blobimage = data;
                showUploadedImage();                
            }
        });

        $scope.$on('$destroy',GPSReadyListener);
        $scope.$on('$destroy',WikiReadyListener);
        $scope.$on('$destroy', fileUploadedListener);

        checkUserCredentials();

        //Adjust picture size for very small displays
        if ($window.innerWidth < 512) {vm.sm = true; vm.nsm = false; }
        else {vm.sm = false; vm.nsm = true; }

        activate();

        function activate() {

            //Set custom rank flag
            if ($rootScope.cCategory.owner != undefined && $rootScope.cCategory.owner != 0 ) $rootScope.isCustomRank = true;
            else $rootScope.isCustomRank = false;

            $window.scrollTo(0, 0);
            vm.addToRanks = [];
            detectNeighborhood();
            loadPublicFields();
            determineScope(); 
            

            if ($rootScope.cCategory.owner != undefined && $rootScope.cCategory.owner != 0 ){
                isCustomRank = true;
                vm.addRanksEnable = false;
            } 

            if ($rootScope.cCategory.isatomic || rankNhObj.id != 1 ){
                vm.nhrdy = true;
                prepareCatansOptions();
                rankObj = $rootScope.cCategory;
                rankObj.sel = true;
                //vm.addToRanks.push(rankObj);
            }
            
             if ($rootScope.DEBUG_MODE) console.log("Add Answer Activated!");

        }

        function determineScope() {

            if (!$rootScope.cCategory.isatomic) hasSubAreas = true; 
            
            //if ($rootScope.cCategory.title.indexOf('San Diego') > -1) {
            //    inCity = true;
            // }
            
        }

        function loadPublicFields() {
            vm.emptyarray = [];
            
            vm.neighborhoods = $rootScope.nhs;

            vm.establishmentNames = $rootScope.estNames.concat($rootScope.plaNames, $rootScope.orgNames, $rootScope.freNames);
            vm.peopleNames = $rootScope.pplNames;
            
            vm.fields = $rootScope.fields;
            vm.type = $rootScope.cCategory.type;
            myAnswer.type = vm.type;
                       
            //Add extra info
            vm.fields.opts = [];
            vm.fields.val = [];
            vm.fields.textstyle = [];

            for (var i = 0; i < vm.fields.length; i++) {
                vm.fields[i].val = '';
                
                //Typeahead for neighborhoods
                if (vm.fields[i].name == "cityarea") vm.fields[i].opts = "c for c in vm.neighborhoods";
                else vm.fields[i].opts = "c for c in vm.emptyarray";
                
                //Typeahead check for current establishments
                if (vm.fields[i].name == "name" && $rootScope.cCategory.type == 'Establishment') {
                    vm.fields[i].opts = "c for c in vm.establishmentNames";
                }
                
                //Typeahead check for current Persons
                if (vm.fields[i].name == "name" && $rootScope.cCategory.type == 'Person') {
                    vm.fields[i].opts = "c for c in vm.peopleNames";
                }
                
                //Typeahead check for current Places
                if (vm.fields[i].name == "name" && $rootScope.cCategory.type == 'Place') {
                    //vm.fields[i].opts = "c for c in vm.placesNames";
                    vm.fields[i].opts = "c for c in vm.establishmentNames";
                }

                //Typeahead check for current Companies
                if (vm.fields[i].name == "name" && $rootScope.cCategory.type == 'Organization') {
                    //vm.fields[i].opts = "c for c in vm.organizationNames";
                    vm.fields[i].opts = "c for c in vm.establishmentNames";
                }

                //Typeahead check for current Companies
                if (vm.fields[i].name == "name" && $rootScope.cCategory.type == 'PersonCust') {
                    //vm.fields[i].opts = "c for c in vm.organizationNames";
                    vm.fields[i].opts = "c for c in vm.establishmentNames";
                }
                
                //When neighborhood is implied put it in the input field right away
                if (vm.fields[i].name == "cityarea" && $rootScope.cCategory.type == 'Establishment' && $rootScope.NhImplied == true) {
                    if ($rootScope.NhValue != 'Downtown') vm.fields[i].val = $rootScope.NhValue;
                }

                if (vm.fields[i].name == "addinfo") vm.fields[i].textstyle = "textarea";
                else vm.fields[i].textstyle = "text";
                
                //console.log("name, opts -- ", vm.fields[i].name, vm.fields[i].opts);
            }

        }


        function addAnswer() {

            if (!addAnswerExec) {
                myAnswer.imageurl = vm.imageURL;
                if ($rootScope.cCategory.type == 'Short-Phrase') myAnswer.imageurl = 'none';

                myAnswer.upV = 0;
                myAnswer.downV = 0;
                myAnswer.type = vm.type;
                myAnswer.userid = $rootScope.user.id;
                myAnswer.views = 0;
                myAnswer.ig_image_urls = '';
                myAnswer.slug = '';
                if (vm.userIsOwner) myAnswer.owner = $rootScope.user.id;

                if (duplicateExists) dialog.checkSameAnswer(myAnswer, extAnswer, addAnswerConfirmed, answerIsSame);
                else dialog.addAnswer(myAnswer, vm.addToRanks, vm.imageURL, addAnswerConfirmed);

                addAnswerExec = true;
                
                //This is to prevent double pulses and have two answers get submitted by hardware glitch
                $timeout(function () {
                    addAnswerExec = false;
                }, 1000)
            }
        }

        function loadFormData() {
            //initialize form
            for (var i = 0; i < vm.fields.length; i++) {
                switch (vm.fields[i].name) {

                    case "name": { myAnswer.name = vm.fields[i].val; break; }
                    case "location": { myAnswer.location = vm.fields[i].val; break; }
                    case "addinfo": { myAnswer.addinfo = vm.fields[i].val; break; }
                    case "cityarea": { myAnswer.cityarea = vm.fields[i].val; break; }
                    case "phone": { myAnswer.phone = vm.fields[i].val; break; }
                    case "website": { myAnswer.website = vm.fields[i].val; break; }
                    case "email": { myAnswer.email = vm.fields[i].val; break; }

                }
            }
        }

        function validateData() {
            loadImageDataOk = true;
            //addAnswerDataOk = true;
            for (var i = 0; i < vm.fields.length; i++) {
                if (vm.fields[i].isrequired && vm.fields[i].val.length < 3) {
                    loadImageDataOk = false;
                    break;
                }
            }

            //For freelancer type 'PersonCust' data required is either email or website, not necessarily both
            if ($rootScope.cCategory.type == 'PersonCust'){
                for (var i = 0; i < vm.fields.length; i++) {
                    if ((vm.fields[i].name == 'email' && vm.fields[i].val.length > 3 ) || 
                        (vm.fields[i].name == 'website' && vm.fields[i].val.length > 3)){
                        loadImageDataOk = true;
                        break;
                    }
                } 
            }
            
            //loadImageDataOk = loadImageDataOk && countryIsValid;
            if ($rootScope.cCategory.type == 'Short-Phrase' || $rootScope.cCategory.type == 'PersonCust' 
            || $rootScope.cCategory.type == 'Simple' ) addAnswerDataOk = loadImageDataOk;
            else addAnswerDataOk = (loadImageDataOk && (vm.numLinks > 0 || vm.ngi));

        }

        function rankSummary() {

            $state.go("rankSummary", { index: $rootScope.cCategory.id });
        }

        function callSearchImage() {

            var pFields = [];

            loadFormData();
            validateData();

            if (loadImageDataOk) {
                pFields = JSON.parse(JSON.stringify(vm.fields));
                //console.log("pFields --", pFields);
                //pFields[cFld].val = $rootScope.countries_en[countryIdx];
                var q1 = image.getImageLinks(pFields, attNum, 'add');
                q1.then(processImageResults, imageQueryFailed)

            }
            else {
                dialog.getDialog('missingDataImage');
                return;
            }
        }

        function imageQueryFailed() {
            console.log('query failed, dont give up');
        }

        function callAddAnswer() {
            loadFormData();
            validateData();
            if (vm.type == 'Establishment' || vm.type == 'Person' || vm.type == 'Place') checkAnswerExists(myAnswer);

            if (addAnswerDataOk) {
                addAnswer();
            }
            else {
                dialog.getDialog('missingDataAnswer');
                return;
            }
        }

        function processImageResults(results) {

            var n;
            var linkExists = false;
            //Check link results are not repeated.
            for (var j = 0; j < results.length; j++) {
                for (var i = 0; i < imageLinks.length; i++) {
                    n = results[j].localeCompare(imageLinks[i]);
                    if (n == 0) {
                        linkExists = true;
                        break;
                    }
                }
                if (!linkExists) imageLinks.push(results[j]);
            }     
            
            //imageLinks = imageLinks.concat(results);
            vm.numLinks = imageLinks.length;
            attNum++;
            if (vm.numLinks > 10 || attNum >= 4) vm.searchDisabled = 'disabled';
            if (attNum > 1) vm.imageCommand = 'Get more images';
            vm.linkIdx = 0;

            vm.imageURL = imageLinks[vm.linkIdx];

            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);

            if (vm.numLinks > 0) vm.imagefunctions = 'inline';

        }


        function viewNext() {
            vm.linkIdx++;
            if (vm.linkIdx >= vm.numLinks) vm.linkIdx = 0;
            vm.imageURL = imageLinks[vm.linkIdx];
            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);
        }
        function viewPrev() {
            vm.linkIdx--;
            if (vm.linkIdx < 0) vm.linkIdx = vm.numLinks - 1;
            vm.imageURL = imageLinks[vm.linkIdx];
            testImageUrl(imageLinks[vm.linkIdx], showImageNotOk);
        }

        function neighborhoodOk(answer) {
            var nhOk = true;
            var idx = vm.fields.map(function (x) { return x.name; }).indexOf('cityarea');
            if (rankNh && idx > -1) {
                if (rankNh != answer.cityarea) {

                    var nhArr = [];
                    common.getInclusiveAreas(rankNhObj.id, nhArr);

                    var idx2 = $rootScope.locations.map(function (x) { return x.nh_name; }).indexOf(answer.cityarea);
                    var nhIsIncluded = nhArr.indexOf($rootScope.locations[idx2].id) > -1;

                    if (nhIsIncluded) nhOk = true;
                    else nhOk = false;

                    //Temp until all neighborhoods are set and confirmed
                    if (rankNhObj.id == 1) nhOk = true;
                }
            }
            else nhOk = true;
            return nhOk;
        }  

        function addAnswerConfirmed(myAnswer) {

            //Add new answer, also add new post to catans (inside addAnser)
            
            if ($rootScope.DEBUG_MODE) console.log("No, different! @addAnswerConfirmed");
            //***** if (myAnswer.type == 'Establishment' && rankNh && rankNh != myAnswer.cityarea) dialog.getDialog('neighborhoodsDontMatch');
            var nhIsValid = neighborhoodOk(myAnswer); 
            if (!nhIsValid) dialog.getDialog('neighborhoodsDontMatch');
            //****else if (myAnswer.type == 'Establishment' && (myAnswer.location != undefined && myAnswer.location != "" && myAnswer.location != null)) {
            else if ((myAnswer.location != undefined && myAnswer.location != "" && myAnswer.location != null)) {
              
                var promise = getgps.getLocationGPS(myAnswer);
                promise.then(function () {
                    //console.log("myAnswer --- ", myAnswer);
                    //answer.addAnswer(myAnswer).then(rankSummary);
                });
            }
            else {
                //**** if (myAnswer.type == 'Establishment' || myAnswer.type == 'PersonCust') eqRanks();
                eqRanks();
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P1 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx,myAnswer);
                        answer.addAnswer2(myAnswer, [$rootScope.cCategory.id, eqRankIdx]).then(rankSummary);
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P2 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx,myAnswer);
                        answer.addAnswer2(myAnswer, [eqRankIdx]).then(rankSummary);
                    }                    
                }
                else { //eqFound = false
                    if (needCreateRec){
                        console.log("Need to create record");
                    }
                    else{ 
                        if ($rootScope.DEBUG_MODE) console.log("P3 - ", myAnswer);
                        
                        var ranks = [];
                        var includesGhostRanking = false;
                        //var granks = [];
                        for (var i=0; i<vm.addToRanks.length; i++){
                            if (vm.addToRanks[i].sel) ranks.push(vm.addToRanks[i]);
                            if (vm.addToRanks[i].isghost) includesGhostRanking = true;
                            //if (vm.addToRanks[i].sel && vm.addToRanks[i].isghost) granks.push(vm.addToRanks[i]);
                        }
                        //Process non-ghost ranks  
                        if (!includesGhostRanking) answer.addAnswer(myAnswer, ranks).then(rankSummary);
                        //Process ghost ranks
                        else {
                            console.log("X1 - ", ranks, myAnswer);
                            table.ghostTablesWithAnswer(ranks, myAnswer).then(function(){
                                $timeout(function(){
                                    rankSummary();
                                },1000);
                            });
                        }

                    }
                    myAnswer = undefined;
                } 
            }
        }
    

        function addAnswerGPS() {
            if (!addAnswerGPSexec) {
                 if ($rootScope.DEBUG_MODE) console.log("@exec-addAnswerGPS");
                addAnswerGPSexec = true;
                eqRanks();
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P4 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx, myAnswer);
                        if (myAnswer) answer.addAnswer2(myAnswer, [$rootScope.cCategory.id, eqRankIdx]).then(rankSummary);
                    }
                    else{
                        if ($rootScope.DEBUG_MODE) console.log("P5 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx, myAnswer);
                        if (myAnswer) answer.addAnswer2(myAnswer, [eqRankIdx]).then(rankSummary);
                    }
                }
                else { //eqFound = false
                    if (needCreateRec){
                        console.log("Need to Create Record")
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P6", myAnswer);
                        if (myAnswer) {
                            var ranks = [];
                            var includesGhostRanking = false;
                            //var granks = [];
                            for (var i = 0; i < vm.addToRanks.length; i++) {
                                if (vm.addToRanks[i].sel) ranks.push(vm.addToRanks[i]);
                                if (vm.addToRanks[i].isghost) includesGhostRanking = true;
                                //if (vm.addToRanks[i].sel && vm.addToRanks[i].isghost) granks.push(vm.addToRanks[i]);
                            }
                            //Process non-ghost ranks  
                            if (!includesGhostRanking) answer.addAnswer(myAnswer, ranks).then(rankSummary);
                            //Process ghost ranks
                            else {
                                console.log("X2 - ", ranks, myAnswer);
                                table.ghostTablesWithAnswer(ranks, myAnswer).then(function () {
                                    $timeout(function () {
                                        rankSummary();
                                    }, 1000);
                                });
                            }
                        }
                    }
                myAnswer = undefined;                                 
            }
            }
        }
        
         function answerIsSame() {
            if ($rootScope.DEBUG_MODE) console.log("Yeah Same, @answerIsSame");
            var nhIsValid = neighborhoodOk(extAnswer);
            //Answer already exist in this category, do not add
            if (duplicateSameCategory) dialog.getDialog('answerDuplicated');
            
            //**** else if (myAnswer.type == 'Establishment' && rankNh && rankNh != extAnswer.cityarea) dialog.getDialog('neighborhoodsDontMatch');
             
            else if (!nhIsValid) dialog.getDialog('neighborhoodsDontMatch');
            
            
            //else if (rankNh && rankNh != extAnswer.cityarea) {
            //    dialog.getDialog('neighborhoodsDontMatch');
            //}
            
            //Answer already exist, just post new category-answer record            
            else {
                //**** if (extAnswer.type == 'Establishment' || extAnswer.type == 'PersonCust' || extAnswer.type == 'Place'
                // || extAnswer.type == 'Event') eqRanks();
                eqRanks();
                if ($rootScope.DEBUG_MODE) console.log("eqFound, hasSubAreas, eqRankIdx = ", eqFound, hasSubAreas, eqRankIdx);
                //create 2 catans records one for downtown and then district
                if (eqFound) {
                    if (!hasSubAreas){
                        if ($rootScope.DEBUG_MODE) console.log("P7 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx);
                        catans.postRec2(extAnswer.id, eqRankIdx);
                        catans.postRec2(extAnswer.id, $rootScope.cCategory.id).then(rankSummary);
                    }
                    else{
                        if ($rootScope.DEBUG_MODE) console.log("P8 - eqFound,hasSubAreas,eqRankIdx - ", eqFound, hasSubAreas, eqRankIdx);
                        catans.postRec2(extAnswer.id, eqRankIdx).then(rankSummary);
                    }
                }
                else { //eqFound = false;
                    if (needCreateRec){
                        console.log("Need to create record");
                    }
                    else {
                        if ($rootScope.DEBUG_MODE) console.log("P9");
                        if ($rootScope.cCategory.isatomic) catans.postRec(extAnswer.id).then(rankSummary);
                        else{
                            //Need to find appropriate ranking record
                            var rFound = false;
                            var nidx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(extAnswer.cityarea);
                            $rootScope.content.forEach(function(r){
                                if (r.nh == $rootScope.locations[nidx].id && 
                                    r.cat == $rootScope.cCategory.cat ){
                                        rFound = true;
                                        rankid = r.id;
                                    }
                            });
                            if (rFound) catans.postRec2(extAnswer.id,rankid).then(rankSummary);
                            else{
                                //Need to create rank from ghost
                                var rObj = {};
                                rObj.cat = $rootScope.cCategory.cat;
                                rObj.nh = $rootScope.locations[nidx].id;
                                rObj.isatomic = true;
                                table.addTable(rObj).then(function(tableid){
                                    //update catstr and register new catans record
                                    var newcatstr = $rootScope.cCategory.catstr + ':' + tableid;
                                    var p1 = catans.postRec2(extAnswer.id,tableid);
                                    var p2 = table.update($rootScope.cCategory.id,['catstr'],[newcatstr]); 
                                    $q.all([p1,p2]).then(rankSummary);
                                });
                            }
                        }
                    }
                }
                myAnswer = undefined;                
             }
         }

        function eqRanks() {
            var lookRank = '';
            var cityarea = '';
            //Determine answer neighborhood
            if (myAnswer.cityarea == undefined)
                if (extAnswer.cityarea) cityarea = extAnswer.cityarea;
                else cityarea = rankNh;
            else 
                cityarea = myAnswer.cityarea;

            if (hasSubAreas) {    
            //if (inDowntown || inDistrict || inCity) {              
                //if (inCity){
                    var idx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(cityarea);
                    //lookRank = $rootScope.cCategory.title.replace(rankNh, cityarea);
                    //console.log("lookRank - ", lookRank);
                    for (var n = 0; n < $rootScope.content.length; n++) {
                        if ($rootScope.content[n].cat == $rootScope.cCategory.cat && 
                            $rootScope.content[n].nh == $rootScope.locations[idx].id) {
                                eqFound = true;
                                eqRankIdx = $rootScope.content[n].id;
                        }
                    }
                    //if (!eqFound) needCreateGhostRec = true;
                //}
            }
        }

        function showHowItWorksDialog() {
            if ($rootScope.cCategory.type == 'Short-Phrase') dialog.howItWorks('shortPhrase');
            else dialog.howItWorks('addAnswer');
        }

        function selRank(x, idx){
            if (x.sel) {
                if (idx != 0) x.sel = false;
            }
            else x.sel = true;
            vm.addToRanks = vm.addToRanks.sort(compare);
        }

        function prepareCatansOptions(){

            if ($rootScope.DEBUG_MODE) console.log("prepareCatansOptions - ", $rootScope.cCategory, answerNeighborhood);
            if (!isCustomRank) {
                
                if (vm.addToRanks.length > 0) {
                    var morePossibleRanks = search.sibblingRanks($rootScope.cCategory, answerNeighborhood);
                    var map = vm.addToRanks.map(function (x) { return x.id; });
                    morePossibleRanks.forEach(function (item) {
                        if (map.indexOf(item.id) < 0) vm.addToRanks.push(item);
                    })
                    //vm.addToRanks = vm.addToRanks.concat(search.sibblingRanks($rootScope.cCategory, answerNeighborhood));
                }
                else vm.addToRanks = search.sibblingRanks($rootScope.cCategory, answerNeighborhood);
                      
                if (vm.addToRanks.length == 0) vm.addToRanks.push($rootScope.cCategory);
                if (vm.addToRanks.length > 0) vm.addToRanks[0].sel = true;
                for (var i = 1; i < vm.addToRanks.length; i++) {
                    vm.addToRanks[i].sel = false;
                }

                vm.addToRanks = vm.addToRanks.sort(compare);

                //search.sibblingRanks($rootScope.cCategory.id);
                vm.addctsopts = [];
                var opt = '';
                //if (answerNeighborhood == undefined || answerNeighborhood == '') answerNeighborhood = 'San Diego';
                for (var i = 0; i < $rootScope.ctsOptions.length; i++) {
                    if ($rootScope.ctsOptions[i].indexOf('@Nh') > -1) {
                        if (answerNeighborhood) {
                            opt = $rootScope.ctsOptions[i].replace('@Nh', answerNeighborhood);
                            vm.addctsopts.push(opt);
                        }
                    }
                    else vm.addctsopts.push($rootScope.ctsOptions[i]);
                }
            }
            else {
                //console.log("added $rootScope.cCategory - ", $rootScope.cCategory);
                //console.log("vm.addRanksEnable - ", vm.addRanksEnable);
                vm.addToRanks.push($rootScope.cCategory);
            }
        }

        function compare(a,b) {
                //console.log("sort.compare");
                if (a.sel == b.sel) return (b.ctr - a.ctr);
                else if (b.sel) return 1;
                else return -1;
        }

        function addCatans(){            
            vm.addctsactive = true;
        }

        function addcts(){
            var typemismatch = false;
            var rankObj = {};
            var idx = $rootScope.content.map(function(x) {return x.title; }).indexOf(vm.addctsval);  
            //Check types match
            if (idx > -1) {
                
                if ($rootScope.cCategory.type == 'Person' &&
                    $rootScope.content[idx].type != 'Person') typemismatch = true;
                if ($rootScope.cCategory.type == 'Event' &&
                    $rootScope.content[idx].type != 'Event') typemismatch = true;
                if ($rootScope.cCategory.type == 'Thing' &&
                    $rootScope.content[idx].type != 'Thing') typemismatch = true;
                if ($rootScope.cCategory.type == 'PersonCust' &&
                    $rootScope.content[idx].type != 'PersonCust') typemismatch = true;
                if (($rootScope.cCategory.type == 'Place' ||
                    $rootScope.cCategory.type == 'Establishment' ||
                    $rootScope.cCategory.type == 'Organization') &&
                    ($rootScope.content[idx].type != 'Place' &&
                    $rootScope.content[idx].type != 'Establishment' &&
                    $rootScope.content[idx].type != 'Organization')) typemismatch = true;

                if (typemismatch) dialog.typemismatch($rootScope.content[idx].type, $rootScope.cCategory.type);
                else {
                    rankObj = $rootScope.content[idx];
                    rankObj.sel = true;
                    vm.addToRanks.push(rankObj);
                    vm.addToRanks = vm.addToRanks.sort(compare);

                    //console.log("vm.addToRanks - ", vm.addToRanks);
                    vm.addctsval = '';
                    vm.addctsactive = false;
                }
            }
            //check if the value from addcts require ghost
            else{
                var idx2 = $rootScope.categories.map(function(x) {return x.category; }).indexOf(vm.addctsval.slice(0,9));
                if ($rootScope.categories[idx2].category.indexOf('@Nh')>-1){
                    var nidx = $rootScope.locations.map(function(x) {return x.nh_name; }).indexOf(answerNeighborhood);
                    var gObj = {};
                    gObj.cat = $rootScope.categories[idx2].id;
                    gObj.nh = $rootScope.locations[nidx].id;
                    gObj.isghost = true;
                    gObj.isatomic = true;
                    gObj.title = vm.addctsval;
                    console.log("added ghost to vm.addToRanks from addcts");
                    vm.addToRanks.push(gObj);
                }
            }
        }

        function testImageUrl(url, callback, timeout) {
            timeout = timeout || 5000;
            var timedOut = false, timer;
            var img = new Image();
            img.onerror = img.onabort = function () {
                if (!timedOut) {
                    clearTimeout(timer);
                    callback(url, "error");
                }
            };
            img.onload = function () {
                if (!timedOut) {
                    clearTimeout(timer);
                    callback(url, "success");
                }
            };
            img.src = url;
            timer = setTimeout(function () {
                timedOut = true;
                callback(url, "timeout");
            }, timeout);
        }

        function showImageNotOk(url, result) {
            if (result == "error" || result == "timeout") {
                vm.imageURL = $rootScope.EMPTY_IMAGE;
            }
        }

        function checkAnswerExists(answer) {
            //Check if answer about to be added exists already among establishments
            if (vm.type == 'Establishment' || vm.type == 'Place' || vm.type == 'Organization') {
                for (var i = 0; i < $rootScope.estAnswers.length; i++) {
                    if (answer.name == $rootScope.estAnswers[i].name &&
                        answer.cityarea == $rootScope.estAnswers[i].cityarea) {

                        duplicateExists = true;
                        extAnswer = $rootScope.estAnswers[i];

                        for (var j = 0; j < $rootScope.catansrecs.length; j++) {
                            if ($rootScope.catansrecs[j].answer == $rootScope.estAnswers[i].id &&
                                $rootScope.catansrecs[j].category == $rootScope.cCategory.id) {
                                duplicateSameCategory = true;
                            }
                        }
                    }
                }
            }
            else if (vm.type == 'Person') {
                for (var i = 0; i < $rootScope.pplAnswers.length; i++) {
                    if (answer.name == $rootScope.pplAnswers[i].name) {

                        duplicateExists = true;
                        extAnswer = $rootScope.pplAnswers[i];

                        for (var j = 0; j < $rootScope.catansrecs.length; j++) {
                            if ($rootScope.catansrecs[j].answer == $rootScope.pplAnswers[i].id &&
                                $rootScope.catansrecs[j].category == $rootScope.cCategory.id) {
                                duplicateSameCategory = true;
                            }
                        }
                    }
                }
            }
            else if (vm.type == 'Establishment' || vm.type == 'Place' || vm.type == 'Organization') {
                for (var i = 0; i < $rootScope.plaAnswers.length; i++) {
                    if (answer.name == $rootScope.plaAnswers[i].name) {

                        duplicateExists = true;
                        extAnswer = $rootScope.plaAnswers[i];

                        for (var j = 0; j < $rootScope.catansrecs.length; j++) {
                            if ($rootScope.catansrecs[j].answer == $rootScope.plaAnswers[i].id &&
                                $rootScope.catansrecs[j].category == $rootScope.cCategory.id) {
                                duplicateSameCategory = true;
                            }
                        }
                    }
                }
            }
            else if (vm.type == 'Establishment' || vm.type == 'Place' || vm.type == 'Organization') {
                for (var i = 0; i < $rootScope.orgAnswers.length; i++) {
                    if (answer.name == $rootScope.orgAnswers[i].name) {

                        duplicateExists = true;
                        extAnswer = $rootScope.orgAnswers[i];

                        for (var j = 0; j < $rootScope.catansrecs.length; j++) {
                            if ($rootScope.catansrecs[j].answer == $rootScope.orgAnswers[i].id &&
                                $rootScope.catansrecs[j].category == $rootScope.cCategory.id) {
                                duplicateSameCategory = true;
                            }
                        }
                    }
                }
            }
            //console.log("duplicateExists: ", duplicateExists, " duplicateSameCategory: ", duplicateSameCategory);
        }
        
        function getWiki(){
            var wikiSearchStr = '';
            for (var n=0; n < vm.fields.length; n++){
                if (vm.fields[n].name == 'name') {
                    wikiSearchStr = vm.fields[n].val;
                    break;
                }
            }
            
            if (wikiSearchStr.length > 0){
                getwiki.getWiki(wikiSearchStr);
            }
            return;
        }
        
        function loadWiki(x){
            for (var n=0; n < vm.fields.length; n++){
                if (vm.fields[n].name == 'addinfo') {
                    vm.fields[n].val = x;
                    break;
                }
            }          
        }
        
        function onNoGoodImages(x){
            if (x){
                vm.imageURL = $rootScope.EMPTY_IMAGE;
            }
            else{
                vm.imageURL = imageLinks[vm.linkIdx];
            }
        }

        function closeRank() {
            $state.go('cwrapper');
        }

        function onSelect(x){
            maybeSameAnswers = [];
            //console.log("x.val.length, inputLengthMem - ", x.val.length, inputLengthMem);
            //only use for field name
            if (x.name == 'name'){
                if (Math.abs(x.val.length - inputLengthMem)>=2 && x.val.length != 0){
                    //an option was selected from the typeahead
                    //search for this answer, if single result populate fields, if not
                    //show dialog with options
                    inputLengthMem = x.val.length;        
                    for (var i=0; i < $rootScope.answers.length; i++){
                        if ($rootScope.answers[i].name == x.val){
                            if (rankNhObj.id != 1){

                                if ($rootScope.answers[i].cityarea == rankNh)
                                    maybeSameAnswers.push($rootScope.answers[i]);    
                            }
                            else maybeSameAnswers.push($rootScope.answers[i]);
                        }
                    }
                    //console.log("MaybeSameAnswers - ", maybeSameAnswers);
                    if (maybeSameAnswers.length == 1) {
                        checkAnswerExists(maybeSameAnswers[0]);
                        dialog.confirmSameAnswer(maybeSameAnswers[0],answerChosen);
                    }
                    else if (maybeSameAnswers.length > 1) dialog.confirmSameAnswerMultiple(maybeSameAnswers,answerChosen);                 
                }
                inputLengthMem = x.val.length;                
            }
            if (x.name == 'cityarea'){
                if (Math.abs(x.val.length - inputLengthMemNh)>2 && x.val.length != 0){
                    //an option was selected from the typeahead
                    inputLengthMemNh = x.val.length;
                    for (var i=0; i < $rootScope.nhs.length; i++){
                        if ($rootScope.nhs[i] == x.val){
                            vm.nhrdy = true;
                            answerNeighborhood = x.val;
                            prepareCatansOptions();
                        }
                    }                
                }
                inputLengthMemNh = x.val.length;                
            }                             
        }

        function answerChosen(n){
            if (n == undefined ) extAnswer = maybeSameAnswers[0];
            else extAnswer = maybeSameAnswers[n];
            answerIsSame();
        }

        function detectNeighborhood(){
            //this function determines if current ranking is for a neighborhood or district
            var idx = $rootScope.locations.map(function (x) { return x.id; }).indexOf($rootScope.cCategory.nh);
            if (idx > -1){
                rankNh = $rootScope.locations[idx].nh_name;
                rankNhObj = $rootScope.locations[idx];
                answerNeighborhood = rankNh;
                if ($rootScope.cCategory.isatomic || rankNhObj.id != 1 ) prepareCatansOptions();
            } 
        }

        function checkUserCredentials(){
            if ($rootScope.isLoggedIn){
                //if $rootScope.cCategoryExists
                var answerParent = $rootScope.cCategory.owner;
                if (answerParent != undefined && answerParent != 0){
                    //look for answerParent and see who is its owner
                     var idx = $rootScope.answers.map(function(x) {return x.id; }).indexOf(Number(answerParent));
                     var owner = $rootScope.answers[idx].owner;
                     if ($rootScope.user.id == owner) vm.userIsOwner = true;  
                }
            }
        }

        function showUploadedImage(){
            vm.imageURL = $rootScope.blobimage;
        }
                     
    }

})();
