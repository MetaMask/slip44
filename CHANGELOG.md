# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.1.0]
### Uncategorized
- fix: Ignore reserved names ([#171](https://github.com/MetaMask/slip44/pull/171))
- Update with latest data as of 2024-11-02 ([#170](https://github.com/MetaMask/slip44/pull/170))
- chore(devDeps): bump yarn to v3.8.5 ([#169](https://github.com/MetaMask/slip44/pull/169))
- chore(devdeps): @lavamoat/allow-scripts@^2.3.1->^3.2.1 ([#143](https://github.com/MetaMask/slip44/pull/143))
- Update cronjob to run every month ([#168](https://github.com/MetaMask/slip44/pull/168))
- Update with latest data as of 2024-10-07 ([#167](https://github.com/MetaMask/slip44/pull/167))
- Update with latest data as of 2024-09-02 ([#162](https://github.com/MetaMask/slip44/pull/162))
- Bump the npm_and_yarn group across 1 directory with 2 updates ([#149](https://github.com/MetaMask/slip44/pull/149))

## [4.0.0]
### Changed
- **BREAKING:** Require Node 18.16 or higher ([#111](https://github.com/MetaMask/slip44/pull/111))
- Update with latest data as of 2024-07-29 ([#156](https://github.com/MetaMask/slip44/pull/156))

## [3.1.0]
### Changed
- Update with latest data as of 2023-10-09 ([#101](https://github.com/MetaMask/slip44/pull/101))

## [3.0.0]
### Changed
- **BREAKING:** Require Node 14 or higher ([#28](https://github.com/MetaMask/slip44/pull/28))
- Update with latest data as of 2023-04-24 ([#68](https://github.com/MetaMask/slip44/pull/68))

### Removed
- **BREAKING:** Removed `link` property as it was removed in the SLIP-44 document ([#25](https://github.com/MetaMask/slip44/pull/25))

## [2.2.0]
### Changed
- Update with latest SLIP-44 data as of 2022-08-07 ([#14](https://github.com/MetaMask/slip44/pull/14))

## [2.1.0]
### Changed
- Update SLIP-44 data ([#3](https://github.com/MetaMask/slip44/pull/3))
  - Current as of [satoshilabs/slips#34a4034](https://github.com/satoshilabs/slips/blob/34a4034bdf0da30f49b7bb2fe24251c381d739fd/slip-0044.md)

## [2.0.0]
### Added
- Changelog
- Readme

### Changed
- **BREAKING:** Convert primary export from `.js` to `.json`
  - This may be breaking for TypeScript projects, since some `tsc` configurations disallow importing JSON modules.
- Update SLIP-44 data
  - Current as of [satoshilabs/slips#6279209](https://github.com/satoshilabs/slips/blob/6279209c5686c2910d67a37ddeef2643228472b1/slip-0044.md).

## [1.0.0]
### Changed
- Initial release.

[Unreleased]: https://github.com/MetaMask/slip44/compare/v4.1.0...HEAD
[4.1.0]: https://github.com/MetaMask/slip44/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/MetaMask/slip44/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/MetaMask/slip44/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/MetaMask/slip44/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/MetaMask/slip44/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/MetaMask/slip44/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/slip44/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/MetaMask/slip44/releases/tag/v1.0.0
