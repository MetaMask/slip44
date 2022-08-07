# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.0]
### Uncategorized
- Update with latest data as of 2022-08-07 ([#14](https://github.com/MetaMask/slip44/pull/14))
- Fix fetch and rebuild workflow ([#13](https://github.com/MetaMask/slip44/pull/13))
- Implemented a CRON job to fetch the chain list ([#11](https://github.com/MetaMask/slip44/pull/11))
- Bump @metamask/auto-changelog from 2.6.0 to 2.6.1 ([#9](https://github.com/MetaMask/slip44/pull/9))
- Bump @metamask/auto-changelog from 2.5.0 to 2.6.0 ([#8](https://github.com/MetaMask/slip44/pull/8))
- Fix build scripts ([#5](https://github.com/MetaMask/slip44/pull/5))

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

[Unreleased]: https://github.com/MetaMask/slip44/compare/v2.2.0...HEAD
[2.2.0]: https://github.com/MetaMask/slip44/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/MetaMask/slip44/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/slip44/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/MetaMask/slip44/releases/tag/v1.0.0
