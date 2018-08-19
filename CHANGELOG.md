# [2.2.0](https://github.com/pathephone/pathephone-desktop/compare/v2.1.0...v2.2.0) (2018-08-19)


### Bug Fixes

* pick random swarm ports ([#215](https://github.com/pathephone/pathephone-desktop/issues/215)) ([a0aab19](https://github.com/pathephone/pathephone-desktop/commit/a0aab19)), closes [#174](https://github.com/pathephone/pathephone-desktop/issues/174)
* replace broken donate form with a donate link ([#214](https://github.com/pathephone/pathephone-desktop/issues/214)) ([bb96b88](https://github.com/pathephone/pathephone-desktop/commit/bb96b88)), closes [#183](https://github.com/pathephone/pathephone-desktop/issues/183)


### Features

* extract covers from audio tags ([#216](https://github.com/pathephone/pathephone-desktop/issues/216)) ([7f89d7e](https://github.com/pathephone/pathephone-desktop/commit/7f89d7e)), closes [#179](https://github.com/pathephone/pathephone-desktop/issues/179)

# [2.1.0](https://github.com/pathephone/pathephone-desktop/compare/v2.0.2...v2.1.0) (2018-08-04)


### Bug Fixes

* preget albums covers before rendering them ([#192](https://github.com/pathephone/pathephone-desktop/issues/192)) ([f7d5ac9](https://github.com/pathephone/pathephone-desktop/commit/f7d5ac9))
* use random IPFS api port ([bda4535](https://github.com/pathephone/pathephone-desktop/commit/bda4535)), closes [#174](https://github.com/pathephone/pathephone-desktop/issues/174) [#178](https://github.com/pathephone/pathephone-desktop/issues/178)


### Features

* **UI:** add indicator bar with some basic stats ([#190](https://github.com/pathephone/pathephone-desktop/issues/190)) ([a2e2d0b](https://github.com/pathephone/pathephone-desktop/commit/a2e2d0b))


### Performance Improvements

* make a single ipc call when publishing outdated albums ([#193](https://github.com/pathephone/pathephone-desktop/issues/193)) ([326194a](https://github.com/pathephone/pathephone-desktop/commit/326194a))

## [2.0.2](https://github.com/pathephone/pathephone-desktop/compare/v2.0.1...v2.0.2) (2018-07-23)


### Bug Fixes

* add cover placeholder icon for discover page albums ([4cad8e4](https://github.com/pathephone/pathephone-desktop/commit/4cad8e4))
* add random gateway port ([991bb41](https://github.com/pathephone/pathephone-desktop/commit/991bb41))
* fix 'Bitcoin Cache' typo ([92efaa6](https://github.com/pathephone/pathephone-desktop/commit/92efaa6))
* focus empty cover input on submit ([fc9e3c9](https://github.com/pathephone/pathephone-desktop/commit/fc9e3c9))
* replace custom tracklist errors with ajv native errors ([258d375](https://github.com/pathephone/pathephone-desktop/commit/258d375))
* replace ipfs gateway endpoint with api endpoint for images ([4bc93cb](https://github.com/pathephone/pathephone-desktop/commit/4bc93cb))

## [2.0.1](https://github.com/pathephone/pathephone-desktop/compare/v2.0.0...v2.0.1) (2018-07-13)


### Bug Fixes

* make albums appearence interval 2 min ([41eb42f](https://github.com/pathephone/pathephone-desktop/commit/41eb42f))

# [2.0.0](https://github.com/pathephone/pathephone-desktop/compare/v1.4.0...v2.0.0) (2018-07-05)


### Bug Fixes

*  add yandex donate button to about page ([78946b9](https://github.com/pathephone/pathephone-desktop/commit/78946b9))
* add CIDv0 regex pattern to album instance schema ([0390d55](https://github.com/pathephone/pathephone-desktop/commit/0390d55))
* add web site link to about page ([98cdc92](https://github.com/pathephone/pathephone-desktop/commit/98cdc92))
* cache playlist CIDs on app start if any ([b7cd076](https://github.com/pathephone/pathephone-desktop/commit/b7cd076))
* correct feed album artist if it was edited ([53f1f2a](https://github.com/pathephone/pathephone-desktop/commit/53f1f2a))
* disable latest albums request on empty search if search was not performed ([07d7581](https://github.com/pathephone/pathephone-desktop/commit/07d7581))
* disable pubsub-related tasks when offline ([418db3d](https://github.com/pathephone/pathephone-desktop/commit/418db3d))
* hide search bar when albums count equals 0 ([f53d73c](https://github.com/pathephone/pathephone-desktop/commit/f53d73c))
* limit max tracklist size ([e958e25](https://github.com/pathephone/pathephone-desktop/commit/e958e25))
* perform search on enter only ([b09d3f5](https://github.com/pathephone/pathephone-desktop/commit/b09d3f5))
* playlist controls fixed position ([5cda3b5](https://github.com/pathephone/pathephone-desktop/commit/5cda3b5))
* prevent nested metadata field access error ([76aa4fc](https://github.com/pathephone/pathephone-desktop/commit/76aa4fc))
* return missing fields on album update ([2925f5f](https://github.com/pathephone/pathephone-desktop/commit/2925f5f))
* set albums collection limit to 50000 ([a733b5e](https://github.com/pathephone/pathephone-desktop/commit/a733b5e))
* update feed automatically when first album arrive ([0b984e9](https://github.com/pathephone/pathephone-desktop/commit/0b984e9))
* updated indicator icons with retina display support ([9241b5f](https://github.com/pathephone/pathephone-desktop/commit/9241b5f))
* updated tray icon ([e79d9ed](https://github.com/pathephone/pathephone-desktop/commit/e79d9ed))
* warning notifiaction for duplicate album sharing ([be5a1bc](https://github.com/pathephone/pathephone-desktop/commit/be5a1bc))


### Code Refactoring

* album instance schema update ([f86b362](https://github.com/pathephone/pathephone-desktop/commit/f86b362))
* replace musicmetadata with music-metadata package ([b7db52d](https://github.com/pathephone/pathephone-desktop/commit/b7db52d))


### Features

* **ui:** discover latest albums ([c42ab1b](https://github.com/pathephone/pathephone-desktop/commit/c42ab1b))
* **ui:** legal notice on first start ([e07c6cb](https://github.com/pathephone/pathephone-desktop/commit/e07c6cb))
* about page with version number ([00626cc](https://github.com/pathephone/pathephone-desktop/commit/00626cc))
* add "new albums available" button to Discover page ([7b518c0](https://github.com/pathephone/pathephone-desktop/commit/7b518c0))
* add check for new release ([762f3e2](https://github.com/pathephone/pathephone-desktop/commit/762f3e2))
* add russian localization ([48c785d](https://github.com/pathephone/pathephone-desktop/commit/48c785d))
* add text search with custom allOf implementation ([6c0566c](https://github.com/pathephone/pathephone-desktop/commit/6c0566c))
* display time left ([016e761](https://github.com/pathephone/pathephone-desktop/commit/016e761))
* display total albums count in search bar ([8c2652b](https://github.com/pathephone/pathephone-desktop/commit/8c2652b))


### Performance Improvements

* move all Dexie operations to Web Worker ([75370f3](https://github.com/pathephone/pathephone-desktop/commit/75370f3))
* move fs-related methods to child process ([5551ba4](https://github.com/pathephone/pathephone-desktop/commit/5551ba4))
* move ipfs to a child process ([7d22361](https://github.com/pathephone/pathephone-desktop/commit/7d22361))
* move performance-affecting methods to main thread ([bf78b84](https://github.com/pathephone/pathephone-desktop/commit/bf78b84))
* remove second get discover albums request ([7935531](https://github.com/pathephone/pathephone-desktop/commit/7935531))


### BREAKING CHANGES

* modify album instance schema with no backward compatibility (tracks[])
* modify album instance schema with no backward compatibility (cover.image, tracks[].audio fields)
* modify album instance schema with no backward compatibility (tracks[].bitrate field).
* remove quality bage as bitrate field is removed as well.
* modify album instance schema with no backward compatibility (cover, tracks fields)

# [1.4.0](https://github.com/pathephone/pathephone-desktop/compare/v1.3.0...v1.4.0) (2018-06-21)


### Features

* appindicator support on some Linux systems ([#166](https://github.com/pathephone/pathephone-desktop/issues/166)) ([99183d9](https://github.com/pathephone/pathephone-desktop/commit/99183d9))
* multiple sharing, validation ([#165](https://github.com/pathephone/pathephone-desktop/issues/165)) ([154bde5](https://github.com/pathephone/pathephone-desktop/commit/154bde5))

<a name="1.3.0"></a>
# [1.3.0](https://github.com/pathephone/pathephone-desktop/compare/v1.2.1...v1.3.0) (2018-03-24)


### Features

* **tray:** tray support for mac and win ([94f706c](https://github.com/pathephone/pathephone-desktop/commit/94f706c))

<a name="1.2.1"></a>
## [1.2.1](https://github.com/pathephone/pathephone-desktop/compare/v1.2.0...v1.2.1) (2018-03-01)


### Bug Fixes

* disallow publishing without cover ([2bdd849](https://github.com/pathephone/pathephone-desktop/commit/2bdd849))

<a name="1.2.0"></a>
# [1.2.0](https://github.com/pathephone/pathephone-desktop/compare/v1.1.0...v1.2.0) (2018-02-28)


### Features

* **UI:** download status ([b4c11bd](https://github.com/pathephone/pathephone-desktop/commit/b4c11bd))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/pathephone/pathephone-desktop/compare/v1.0.4...v1.1.0) (2018-02-16)


### Features

* search bar ([#146](https://github.com/pathephone/pathephone-desktop/issues/146)) ([df2375f](https://github.com/pathephone/pathephone-desktop/commit/df2375f))

<a name="1.0.4"></a>
## [1.0.4](https://github.com/pathephone/pathephone-desktop/compare/v1.0.3...v1.0.4) (2018-02-13)


### Bug Fixes

* **macOS:** unable to resolve path with spaces ([#144](https://github.com/pathephone/pathephone-desktop/issues/144)) ([91c3a43](https://github.com/pathephone/pathephone-desktop/commit/91c3a43)), closes [#143](https://github.com/pathephone/pathephone-desktop/issues/143)

<a name="1.0.3"></a>
## [1.0.3](https://github.com/pathephone/pathephone-desktop/compare/v1.0.2...v1.0.3) (2018-02-12)


### Bug Fixes

* **database:** fixed rxdb error on startup ([9738a6a](https://github.com/pathephone/pathephone-desktop/commit/9738a6a))

<a name="1.0.2"></a>
## [1.0.2](https://github.com/pathephone/pathephone-desktop/compare/v1.0.1...v1.0.2) (2018-02-12)


### Bug Fixes

* **UI:** close window on errors ([897b8aa](https://github.com/pathephone/pathephone-desktop/commit/897b8aa))

<a name="1.0.1"></a>
## [1.0.1](https://github.com/pathephone/pathephone-desktop/compare/v1.0.0...v1.0.1) (2018-02-12)


### Bug Fixes

* **ipfs:** ipfs daemon start moved to renderer ([#139](https://github.com/pathephone/pathephone-desktop/issues/139)) ([4896a20](https://github.com/pathephone/pathephone-desktop/commit/4896a20))

<a name="1.0.0"></a>
# [1.0.0](https://github.com/pathephone/pathephone-desktop/compare/v0.5.1...v1.0.0) (2018-02-09)


### Bug Fixes

* **UI:** informative empty feed message ([#138](https://github.com/pathephone/pathephone-desktop/issues/138)) ([f5eaf36](https://github.com/pathephone/pathephone-desktop/commit/f5eaf36))


### Features

* **UI:** album quality label ([293c5d6](https://github.com/pathephone/pathephone-desktop/commit/293c5d6))


### BREAKING CHANGES

* **UI:** album schema updated with tracks[].bitrate field

# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.4.0"></a>
# [0.4.0](https://github.com/pathephone/pathephone-desktop/compare/v0.2.3...v0.4.0) (2017-12-18)


### Bug Fixes

* **mac:** main window appears on Mac OS ([297fdb1](https://github.com/pathephone/pathephone-desktop/commit/297fdb1)), closes [#50](https://github.com/pathephone/pathephone-desktop/issues/50)


### Features

* **forms:** tracks autofill from id3 ([4a50555](https://github.com/pathephone/pathephone-desktop/commit/4a50555)), closes [#53](https://github.com/pathephone/pathephone-desktop/issues/53)
* **playlist:** download full playlist in background ([aa99d1e](https://github.com/pathephone/pathephone-desktop/commit/aa99d1e))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/pathephone/pathephone-desktop/compare/v0.2.3...v0.3.0) (2017-12-17)


### Features

* **forms:** tracks autofill from id3 ([4a50555](https://github.com/pathephone/pathephone-desktop/commit/4a50555)), closes [#53](https://github.com/pathephone/pathephone-desktop/issues/53)



<a name="0.2.3"></a>
## [0.2.3](https://github.com/pathephone/pathephone-desktop/compare/v0.2.2...v0.2.3) (2017-12-03)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/pathephone/pathephone-desktop/compare/v0.2.1...v0.2.2) (2017-12-03)


### Bug Fixes

* **build:** missing dependency for windows ([ed6f0c0](https://github.com/pathephone/pathephone-desktop/commit/ed6f0c0))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/pathephone/pathephone-desktop/compare/v0.2.0...v0.2.1) (2017-12-03)



<a name="0.2.0"></a>
# 0.2.0 (2017-12-03)


### Features

* **ipfs:** go-ipfs v0.4.13 + new js ipfs api ([1343bb7](https://github.com/pathephone/pathephone-desktop/commit/1343bb7))
* continious albums publications ([0aea310](https://github.com/pathephone/pathephone-desktop/commit/0aea310)), closes [#43](https://github.com/pathephone/pathephone-desktop/issues/43)
