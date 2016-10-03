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



C:\Windows\System32\cmd.exe /E:ON /K C:\Ruby23-x64\bin\setrbvars.bat