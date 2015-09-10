angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'login/register.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<form role=\"form\" ng-submit=\"login()\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"email\">UserId:(Email):</label>\n" +
    "    <input type=\"email\" class=\"form-control\" id=\"email\" ng-model=\"account.userid\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"pwd\">Password:</label>\n" +
    "    <input type=\"password\" class=\"form-control\" id=\"pwd\" ng-model=\"account.password\">\n" +
    "  </div>\n" +
    "  <div class=\"checkbox\">\n" +
    "    <label><input type=\"checkbox\"> Remember me</label>\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n" +
    "  New User  <a href ui-sref=\"register\">Register</a>\n" +
    "</form>");
}]);

angular.module("login/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/register.tpl.html",
    "<form name=\"registerForm\" role=\"form\" ng-submit=\"register()\" novalidate>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"email\">UserId:(Email):</label>\n" +
    "    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"user.emailId\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.email.$error.required\">The user's email is required</p>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    	Student<input type=\"radio\" name=\"role\" class=\"form-control\" ng-model=\"user.role\" value=\"STUDENT\" required>\n" +
    "    	Faculty<input type=\"radio\" name=\"role\" class=\"form-control\" ng-model=\"user.role\" value=\"FACULTY\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.role.$error.required\">The role selection is required</p>    \n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"pwd\">Password:</label>\n" +
    "    <input type=\"password\" class=\"form-control\" name=\"pwd\" id=\"pwd\" ng-model=\"user.password\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.pwd.$error.required\">The password is required</p>    \n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"first\">FirstName:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" name=\"first\" id=\"first\" ng-model=\"user.firstName\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.first.$error.required\">Firstname is required</p>    \n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"last\">LastName:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" name=\"last\" id=\"last\" ng-model=\"user.lastName\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.last.$error.required\">Lastname is required</p>    \n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"middle\">MiddleName:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" id=\"middle\" ng-model=\"user.middleName\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"street\">Street:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" name=\"street\" id=\"street\" ng-model=\"user.address.street\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.street.$error.required\">Street is required</p>    \n" +
    "  </div>  \n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"city\">City:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" name=\"city\" id=\"city\" ng-model=\"user.address.city\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.city.$error.required\">City is required</p>    \n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "	<label for=\"state\">State:</label> \n" +
    "	<select id=\"state\" name=\"state\" ng-model=\"user.address.state\" required>\n" +
    "			<option value=\"AL\">Alabama</option>\n" +
    "			<option value=\"AK\">Alaska</option>\n" +
    "			<option value=\"AZ\">Arizona</option>\n" +
    "			<option value=\"AR\">Arkansas</option>\n" +
    "			<option value=\"CA\">California</option>\n" +
    "			<option value=\"CO\">Colorado</option>\n" +
    "			<option value=\"CT\">Connecticut</option>\n" +
    "			<option value=\"DE\">Delaware</option>\n" +
    "			<option value=\"DC\">District Of Columbia</option>\n" +
    "			<option value=\"FL\">Florida</option>\n" +
    "			<option value=\"GA\">Georgia</option>\n" +
    "			<option value=\"HI\">Hawaii</option>\n" +
    "			<option value=\"ID\">Idaho</option>\n" +
    "			<option value=\"IL\">Illinois</option>\n" +
    "			<option value=\"IN\">Indiana</option>\n" +
    "			<option value=\"IA\">Iowa</option>\n" +
    "			<option value=\"KS\">Kansas</option>\n" +
    "			<option value=\"KY\">Kentucky</option>\n" +
    "			<option value=\"LA\">Louisiana</option>\n" +
    "			<option value=\"ME\">Maine</option>\n" +
    "			<option value=\"MD\">Maryland</option>\n" +
    "			<option value=\"MA\">Massachusetts</option>\n" +
    "			<option value=\"MI\">Michigan</option>\n" +
    "			<option value=\"MN\">Minnesota</option>\n" +
    "			<option value=\"MS\">Mississippi</option>\n" +
    "			<option value=\"MO\">Missouri</option>\n" +
    "			<option value=\"MT\">Montana</option>\n" +
    "			<option value=\"NE\">Nebraska</option>\n" +
    "			<option value=\"NV\">Nevada</option>\n" +
    "			<option value=\"NH\">New Hampshire</option>\n" +
    "			<option value=\"NJ\">New Jersey</option>\n" +
    "			<option value=\"NM\">New Mexico</option>\n" +
    "			<option value=\"NY\">New York</option>\n" +
    "			<option value=\"NC\">North Carolina</option>\n" +
    "			<option value=\"ND\">North Dakota</option>\n" +
    "			<option value=\"OH\">Ohio</option>\n" +
    "			<option value=\"OK\">Oklahoma</option>\n" +
    "			<option value=\"OR\">Oregon</option>\n" +
    "			<option value=\"PA\">Pennsylvania</option>\n" +
    "			<option value=\"RI\">Rhode Island</option>\n" +
    "			<option value=\"SC\">South Carolina</option>\n" +
    "			<option value=\"SD\">South Dakota</option>\n" +
    "			<option value=\"TN\">Tennessee</option>\n" +
    "			<option value=\"TX\">Texas</option>\n" +
    "			<option value=\"UT\">Utah</option>\n" +
    "			<option value=\"VT\">Vermont</option>\n" +
    "			<option value=\"VA\">Virginia</option>\n" +
    "			<option value=\"WA\">Washington</option>\n" +
    "			<option value=\"WV\">West Virginia</option>\n" +
    "			<option value=\"WI\">Wisconsin</option>\n" +
    "			<option value=\"WY\">Wyoming</option>\n" +
    "		</select>\n" +
    "		<p class=\"help-block\" ng-if=\"registerForm.state.$error.required\">State selection is required</p>        		\n" +
    "	</div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"zip\">Zip:</label>\n" +
    "    <input type=\"text\" class=\"form-control\" name=\"zip\" id=\"zip\" ng-model=\"user.address.zipCode\" required>\n" +
    "    <p class=\"help-block\" ng-if=\"registerForm.zip.$error.required\">Zip is required</p>        \n" +
    "  </div>\n" +
    "  <div class=\"form-group\" show-errors>\n" +
    "    <label for=\"stream\">Stream:</label>\n" +
    "	<select id=\"stream\" name=\"stream\" ng-model=\"user.stream\" required>\n" +
    "		<option value=\"SE\">Software Engineering</option>\n" +
    "		<option value=\"EE\">Electrical Engineering</option>\n" +
    "		<option value=\"ME\">Mechanical Engineering</option>\n" +
    "	</select>    \n" +
    "	<p class=\"help-block\" ng-if=\"registerForm.stream.$error.required\">Stream selection is required</p>        		\n" +
    "  </div>\n" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-default\">Register</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-click=\"reset()\">Reset</button>\n" +
    "\n" +
    "</form>");
}]);
