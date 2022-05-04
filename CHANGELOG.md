# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0]
### Uncategorized
- Regenerate SLIP44 JSON ([#3](https://github.com/MetaMask/slip44/pull/3))

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

[Unreleased]: https://github.com/MetaMask/slip44/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/MetaMask/slip44/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/slip44/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/MetaMask/slip44/releases/tag/v1.0.0
