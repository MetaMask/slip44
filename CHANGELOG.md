# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.1.0]
### Uncategorized
- Update with latest data as of 2023-10-09 ([#101](https://github.com/MetaMask/slip44/pull/101))
- Update with latest data as of 2023-08-21 ([#93](https://github.com/MetaMask/slip44/pull/93))
- Bump word-wrap from 1.2.3 to 1.2.5 ([#92](https://github.com/MetaMask/slip44/pull/92))
- Bump semver from 6.3.0 to 6.3.1 ([#91](https://github.com/MetaMask/slip44/pull/91))
- Bump @metamask/auto-changelog from 3.1.0 to 3.2.0 ([#82](https://github.com/MetaMask/slip44/pull/82))
- Update with latest data as of 2023-08-14 ([#90](https://github.com/MetaMask/slip44/pull/90))
- Update with latest data as of 2023-07-10 ([#81](https://github.com/MetaMask/slip44/pull/81))
- Update with latest data as of 2023-06-19 ([#78](https://github.com/MetaMask/slip44/pull/78))
- Update with latest data as of 2023-06-05 ([#76](https://github.com/MetaMask/slip44/pull/76))
- Update with latest data as of 2023-05-22 ([#74](https://github.com/MetaMask/slip44/pull/74))
- Update with latest data as of 2023-05-01 ([#70](https://github.com/MetaMask/slip44/pull/70))
- chore: bump devDeps ([#71](https://github.com/MetaMask/slip44/pull/71))

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

[Unreleased]: https://github.com/MetaMask/slip44/compare/v3.1.0...HEAD
[3.1.0]: https://github.com/MetaMask/slip44/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/MetaMask/slip44/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/MetaMask/slip44/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/MetaMask/slip44/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/slip44/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/MetaMask/slip44/releases/tag/v1.0.0
