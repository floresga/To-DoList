**************************************************
***  by guillermo.flores@mx.unisys.com
***
**************************************************

1) Instalar GRUNT 1.01
=======================

Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

C:\Users\guill\OneDrive\Documents\To-DoList>npm install grunt --save-dev
                                            =============================
npm WARN prefer global coffee-script@1.10.0 should be installed with -g
angular-seed@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
`-- grunt@1.0.1
  +-- coffee-script@1.10.0
  +-- dateformat@1.0.12
  | +-- get-stdin@4.0.1
  | `-- meow@3.7.0
  |   +-- camelcase-keys@2.1.0
  |   | `-- camelcase@2.1.1
  |   +-- decamelize@1.2.0
  |   +-- loud-rejection@1.6.0
  |   | +-- currently-unhandled@0.4.1
  |   | | `-- array-find-index@1.0.2
  |   | `-- signal-exit@3.0.1
  |   +-- map-obj@1.0.1
  |   +-- minimist@1.2.0
  |   +-- normalize-package-data@2.3.5
  |   | +-- hosted-git-info@2.1.5
  |   | +-- is-builtin-module@1.0.0
  |   | | `-- builtin-modules@1.1.1
  |   | +-- semver@5.3.0
  |   | `-- validate-npm-package-license@3.0.1
  |   |   +-- spdx-correct@1.0.2
  |   |   | `-- spdx-license-ids@1.2.2
  |   |   `-- spdx-expression-parse@1.0.3
  |   +-- object-assign@4.1.0
  |   +-- read-pkg-up@1.0.1
  |   | +-- find-up@1.1.2
  |   | | +-- path-exists@2.1.0
  |   | | `-- pinkie-promise@2.0.1
  |   | |   `-- pinkie@2.0.4
  |   | `-- read-pkg@1.1.0
  |   |   +-- load-json-file@1.1.0
  |   |   | +-- graceful-fs@4.1.9
  |   |   | +-- parse-json@2.2.0
  |   |   | | `-- error-ex@1.3.0
  |   |   | |   `-- is-arrayish@0.2.1
  |   |   | +-- pify@2.3.0
  |   |   | `-- strip-bom@2.0.0
  |   |   |   `-- is-utf8@0.2.1
  |   |   `-- path-type@1.1.0
  |   +-- redent@1.0.0
  |   | +-- indent-string@2.1.0
  |   | | `-- repeating@2.0.1
  |   | |   `-- is-finite@1.0.2
  |   | |     `-- number-is-nan@1.0.1
  |   | `-- strip-indent@1.0.1
  |   `-- trim-newlines@1.0.0
  +-- eventemitter2@0.4.14
  +-- exit@0.1.2
  +-- findup-sync@0.3.0
  | `-- glob@5.0.15
  +-- glob@7.0.6
  | +-- fs.realpath@1.0.0
  | +-- inflight@1.0.5
  | | `-- wrappy@1.0.2
  | +-- inherits@2.0.3
  | `-- once@1.4.0
  +-- grunt-cli@1.2.0
  | `-- resolve@1.1.7
  +-- grunt-known-options@1.1.0
  +-- grunt-legacy-log@1.0.0
  | +-- colors@1.1.2
  | +-- grunt-legacy-log-utils@1.0.0
  | | +-- chalk@1.1.3
  | | | +-- ansi-styles@2.2.1
  | | | +-- escape-string-regexp@1.0.5
  | | | +-- has-ansi@2.0.0
  | | | | `-- ansi-regex@2.0.0
  | | | +-- strip-ansi@3.0.1
  | | | `-- supports-color@2.0.0
  | | `-- lodash@4.3.0
  | +-- hooker@0.2.3
  | +-- lodash@3.10.1
  | `-- underscore.string@3.2.3
  +-- grunt-legacy-util@1.0.0
  | +-- async@1.5.2
  | +-- getobject@0.1.0
  | +-- lodash@4.3.0
  | `-- which@1.2.11
  |   `-- isexe@1.1.2
  +-- iconv-lite@0.4.13
  +-- js-yaml@3.5.5
  | +-- argparse@1.0.9
  | | `-- sprintf-js@1.0.3
  | `-- esprima@2.7.3
  +-- minimatch@3.0.3
  | `-- brace-expansion@1.1.6
  |   +-- balanced-match@0.4.2
  |   `-- concat-map@0.0.1
  +-- nopt@3.0.6
  | `-- abbrev@1.0.9
  +-- path-is-absolute@1.0.1
  `-- rimraf@2.2.8
**********************************************************************************************

2)Install GRUNT-CONTRIB-CONCAT
===============================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install grunt-contrib-concat --save-dev
                                            =============================================
angular-seed@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
`-- grunt-contrib-concat@1.0.1
  `-- source-map@0.5.6

**********************************************************************************************

3)Install GRUNT-CONTRIB-UGLIFY
===============================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install grunt-contrib-uglify --save-dev
npm WARN deprecated lodash.assign@4.2.0: This package is deprecated. Use Object.assign.
angular-seed@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
`-- grunt-contrib-uglify@2.0.0
  +-- lodash.assign@4.2.0
  +-- maxmin@1.1.0
  | +-- figures@1.7.0
  | +-- gzip-size@1.0.0
  | | +-- browserify-zlib@0.1.4
  | | | `-- pako@0.2.9
  | | `-- concat-stream@1.5.2
  | |   +-- readable-stream@2.0.6
  | |   | +-- core-util-is@1.0.2
  | |   | +-- isarray@1.0.0
  | |   | +-- process-nextick-args@1.0.7
  | |   | +-- string_decoder@0.10.31
  | |   | `-- util-deprecate@1.0.2
  | |   `-- typedarray@0.0.6
  | `-- pretty-bytes@1.0.4
  +-- uglify-js@2.7.3
  | +-- async@0.2.10
  | +-- uglify-to-browserify@1.0.2
  | `-- yargs@3.10.0
  |   +-- camelcase@1.2.1
  |   +-- cliui@2.1.0
  |   | +-- center-align@0.1.3
  |   | | +-- align-text@0.1.4
  |   | | | +-- kind-of@3.0.4
  |   | | | | `-- is-buffer@1.1.4
  |   | | | +-- longest@1.0.1
  |   | | | `-- repeat-string@1.5.4
  |   | | `-- lazy-cache@1.0.4
  |   | +-- right-align@0.1.3
  |   | `-- wordwrap@0.0.2
  |   `-- window-size@0.1.0
  `-- uri-path@1.0.0

**********************************************************************************************

4)Install MOCHA
===============


C:\Users\guill\OneDrive\Documents\To-DoList>npm install mocha --save-dev
                                            =============================
angular-seed@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
`-- mocha@3.1.0
  +-- browser-stdout@1.3.0
  +-- commander@2.9.0
  | `-- graceful-readlink@1.0.1
  +-- debug@2.2.0
  | `-- ms@0.7.1
  +-- diff@1.4.0
  +-- glob@7.0.5
  +-- growl@1.9.2
  +-- json3@3.3.2
  +-- lodash.create@3.1.1
  | +-- lodash._baseassign@3.2.0
  | | +-- lodash._basecopy@3.0.1
  | | `-- lodash.keys@3.1.2
  | |   +-- lodash._getnative@3.9.1
  | |   +-- lodash.isarguments@3.1.0
  | |   `-- lodash.isarray@3.0.4
  | +-- lodash._basecreate@3.0.3
  | `-- lodash._isiterateecall@3.0.9
  +-- mkdirp@0.5.1
  | `-- minimist@0.0.8
  `-- supports-color@3.1.2
    `-- has-flag@1.0.0


**********************************************************************************************

5)Install GRUNT-MOCHA-TEST
==========================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install grunt-mocha-test --save-dev
                                            =======================================
angular-seed@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
`-- grunt-mocha-test@0.13.2

**********************************************************************************************

5)Install Ruby for Windows from http://rubyinstaller.org/downloads/  (actual version 2.3.1
==========================================================================================

C:\Users\guill>ruby --version
ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]

**********************************************************************************************

6)Install SaSS using ruby command.com
==========================================================================================

C:\Users\guill>gem install sass
Fetching: sass-3.4.22.gem (100%)
Successfully installed sass-3.4.22
Parsing documentation for sass-3.4.22
Installing ri documentation for sass-3.4.22
Done installing documentation for sass after 30 seconds
1 gem installed

C:\Users\guill>sass --version
Sass 3.4.22 (Selective Steve)

**********************************************************************************************

7)Install grunt-contrib-sass
==========================================================================================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install grunt-contrib-sass --save-dev
`-- grunt-contrib-sass@1.0.0
  +-- async@0.9.2
  +-- cross-spawn@0.2.9
  | `-- lru-cache@2.7.3
  `-- dargs@4.1.0

**********************************************************************************************

8)Update PATH
==========================================================================================


Append PATH system variable with the following 'C:\Ruby23-x64\bin\'

**********************************************************************************************

7)Install BOWER
==========================================================================================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install -g bower
                                            ======================
C:\Users\guill\AppData\Roaming\npm\bower -> C:\Users\guill\AppData\Roaming\npm\node_modules\bower\bin\bower
C:\Users\guill\AppData\Roaming\npm
`-- bower@1.7.9

C:\Users\guill\OneDrive\Documents\To-DoList>bower --version
                                             ===============
1.7.9

** UPDATE

C:\Users\guill\OneDrive\Documents\To-DoList>bower install
                                            ==============
bower                     invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower jquery#~2.1.0         not-cached https://github.com/jquery/jquery-dist.git#~2.1.0
bower jquery#~2.1.0            resolve https://github.com/jquery/jquery-dist.git#~2.1.0
bower angular-route#~1.5.0      cached https://github.com/angular/bower-angular-route.git#1.5.8
bower angular-route#~1.5.0    validate 1.5.8 against https://github.com/angular/bower-angular-route.git#~1.5.0
bower angular#~1.5.0            cached https://github.com/angular/bower-angular.git#1.5.8
bower angular#~1.5.0          validate 1.5.8 against https://github.com/angular/bower-angular.git#~1.5.0
bower angular-loader#~1.5.0     cached https://github.com/angular/bower-angular-loader.git#1.5.8
bower angular-loader#~1.5.0   validate 1.5.8 against https://github.com/angular/bower-angular-loader.git#~1.5.0
bower html5-boilerplate#^5.3.0  cached https://github.com/h5bp/html5-boilerplate.git#5.3.0
bower html5-boilerplate#^5.3.0         validate 5.3.0 against https://github.com/h5bp/html5-boilerplate.git#^5.3.0
bower angular-mocks#~1.5.0               cached https://github.com/angular/bower-angular-mocks.git#1.5.8
bower angular-mocks#~1.5.0             validate 1.5.8 against https://github.com/angular/bower-angular-mocks.git#~1.5.0
bower jquery#~2.1.0                    checkout 2.1.4
bower jquery#~2.1.0                    resolved https://github.com/jquery/jquery-dist.git#2.1.4
bower html5-boilerplate#^5.3.0          install html5-boilerplate#5.3.0
bower angular-route#~1.5.0              install angular-route#1.5.8
bower angular-loader#~1.5.0             install angular-loader#1.5.8
bower angular#~1.5.0                    install angular#1.5.8
bower angular-mocks#~1.5.0              install angular-mocks#1.5.8
bower jquery#~2.1.0                     install jquery#2.1.4

html5-boilerplate#5.3.0 app\bower_components\html5-boilerplate

angular-route#1.5.8 app\bower_components\angular-route
└── angular#1.5.8

angular-loader#1.5.8 app\bower_components\angular-loader
└── angular#1.5.8

angular#1.5.8 app\bower_components\angular

angular-mocks#1.5.8 app\bower_components\angular-mocks
└── angular#1.5.8

jquery#2.1.4 app\bower_components\jquery

C:\Users\guill\OneDrive\Documents\To-DoList>bower install backbone -S
                                             ========================
bower                     invalid-meta The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower backbone#*            not-cached https://github.com/jashkenas/backbone.git#*
bower backbone#*               resolve https://github.com/jashkenas/backbone.git#*
bower backbone#*              checkout 1.3.3
bower backbone#*              resolved https://github.com/jashkenas/backbone.git#1.3.3
bower underscore#>=1.8.3    not-cached https://github.com/jashkenas/underscore.git#>=1.8.3
bower underscore#>=1.8.3       resolve https://github.com/jashkenas/underscore.git#>=1.8.3
bower underscore#>=1.8.3      checkout 1.8.3
bower underscore#>=1.8.3      resolved https://github.com/jashkenas/underscore.git#1.8.3
bower backbone#^1.3.3          install backbone#1.3.3
bower underscore#>=1.8.3       install underscore#1.8.3

backbone#1.3.3 app\bower_components\backbone
└── underscore#1.8.3

underscore#1.8.3 app\bower_components\underscore


C:\Users\guill\OneDrive\Documents\To-DoList>npm install --save-dev grunt-bower-install
                                            ===========================================
npm WARN deprecated grunt-bower-install@1.6.0: use grunt-wiredep instead
npm WARN deprecated graceful-fs@2.0.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm
ls graceful-fs' to find it in the tree.
npm WARN deprecated lodash@1.3.1: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
npm WARN deprecated minimatch@0.3.0: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
To-DoList@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
+-- UNMET PEER DEPENDENCY grunt@1.0.1
`-- grunt-bower-install@1.6.0
  +-- bower-config@0.5.2
  | +-- graceful-fs@2.0.3
  | +-- mout@0.9.1
  | +-- optimist@0.6.1
  | | `-- minimist@0.0.10
  | `-- osenv@0.0.3
  `-- wiredep@1.5.0
    +-- chalk@0.1.1
    | +-- ansi-styles@0.1.2
    | `-- has-color@0.1.7
    +-- glob@3.2.11
    | `-- minimatch@0.3.0
    |   `-- sigmund@1.0.1
    +-- lodash@1.3.1
    `-- through2@0.4.2
      +-- readable-stream@1.0.34
      | `-- isarray@0.0.1
      `-- xtend@2.1.2
        `-- object-keys@0.4.0

npm WARN grunt-bower-install@1.6.0 requires a peer of grunt@~0.4.0 but none was installed.

**********************************************************************************************

7)Install Twitter RECESS
==========================================================================================



C:\Users\guill\OneDrive\Documents\To-DoList>npm install --save-dev grunt-recess
                                            ====================================
npm WARN deprecated grunt-recess@1.0.1: Deprecated as RECESS is unmaintained
npm WARN prefer global ycssmin@1.0.1 should be installed with -g
npm WARN prefer global recess@1.1.9 should be installed with -g
To-DoList@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
+-- UNMET PEER DEPENDENCY grunt@1.0.1
`-- grunt-recess@1.0.1
  +-- async@0.9.2
  `-- recess@1.1.9
    +-- less@1.3.3
    | `-- ycssmin@1.0.1
    +-- underscore@1.8.3
    `-- watch@0.19.2
      `-- exec-sh@0.2.0
        `-- merge@1.2.0

npm WARN grunt-bower-install@1.6.0 requires a peer of grunt@~0.4.0 but none was installed.

**********************************************************************************************

7)Install grunt-autoprefixer
==========================================================================================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install --save-dev grunt-autoprefixer
                                            =========================================
To-DoList@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
+-- UNMET PEER DEPENDENCY grunt@1.0.1
`-- grunt-autoprefixer@3.0.4
  +-- autoprefixer-core@5.2.1
  | +-- browserslist@0.4.0
  | +-- caniuse-db@1.0.30000542
  | `-- num2fraction@1.2.2
  +-- chalk@1.0.0
  | +-- has-ansi@1.0.3
  | | `-- ansi-regex@1.1.1
  | +-- strip-ansi@2.0.1
  | `-- supports-color@1.3.1
  +-- diff@1.3.2
  `-- postcss@4.1.16
    +-- es6-promise@2.3.0
    +-- js-base64@2.1.9
    `-- source-map@0.4.4
      `-- amdefine@1.0.0

npm WARN grunt-bower-install@1.6.0 requires a peer of grunt@~0.4.0 but none was installed.

**********************************************************************************************

7)Install Yahoo!, is called YUICompressor
==========================================================================================

C:\Users\guill\OneDrive\Documents\To-DoList>npm install --save-dev grunt-contrib-cssmin
                                            ===========================================
To-DoList@0.0.0 C:\Users\guill\OneDrive\Documents\To-DoList
+-- UNMET PEER DEPENDENCY grunt@1.0.1
`-- grunt-contrib-cssmin@1.0.2
  `-- clean-css@3.4.20
    +-- commander@2.8.1
    `-- source-map@0.4.4

npm WARN grunt-bower-install@1.6.0 requires a peer of grunt@~0.4.0 but none was installed.

