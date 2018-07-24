# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Core: Add mousewheel throttle & key check. See #665 (#e0551a7)

## [1.28.4]

### Fixed

- use crypto.getRandomValues() for scramble extension if possible (#678) (#3c5d3d8)

## [1.28.3]

### Fixed

- Core: Clear opening flag. Fixes #668 (#aaa1c9e)

## [1.28.2]

### Fixed

- Core: Allow urls in display option. See #555 (#7aaf207)
- AltKeys: Switch to using event.key. Fixes #664 (#76c9870)


## [1.28.1]

### Fixed

- Core: Prevent double key action. Fixes #659 (#dfe6efb)
- use hasClass instead of indexOf (#661) (#d0ab2bc)

## [1.28.0]

### Added

- An activeOnReadonly option to open the keyboard (#653) (#7cefb82)

### Fixed

- Prevent exception with browser autocompletion (#651) (#e4f9dd3)
- Core: Fix undefined variable (#f65fe6e)
- Core: Remove $allKeys; use delegated binding. See #649 (#b136216)
- AltKeys: Disable keysets when popup is open. See #654 (#dca3d47)
- Core: Add `checkValidOnInit` option. Fixes #650 (#a8ba4e1)

## [1.27.4]

### Fixed

- Autocomplete: Add destroy method. Closes #636 (#9950408)
- Core: Pass correct clicked target to close event. Fixes #639 (#024eeb2)

## [1.27.3]

### Fixed

- Core: Prevent JS error while checking closeByClickEvent. Fixes #634 (#675f7c3)

## [1.27.2]

### Fixed

- Core: Prevent JS error on empty contenteditable (#6b3d52c)
- Core: Fix contenteditable caret position at beginning of line (#28c2c52)

## [1.27.1]

### Fixed

- Core: Allow using {space} in restrictInclude option. Fixes #627 (553bb6e)
- Core: Prevent bksp wrap to end. Fixes #628 (#3b9cfbf)

## [1.27.0]

### Fixed

- Core: Replace references to jQuery with $ (#cc72112)

## [1.27.3-beta]

### Fixed

- Core: Add missing wrapBR parameter (#df0885c)
- Core: Save caret after inserting a line break (#3516f37)


## [1.27.2-beta]

### Added

- Core: Add language and layout data-attribute to wrapper (#06463e7)

### Fixed

- Core: Fix caret chaining (#9abb52d)
- Core: Save caret position when positioned by dev. See #611 (#7f13e92)
- Core: Save current language to kb.language (#d0d2351)
- Core: Fix toggle disabled state (#d81856f)
- Core: Fix contenteditable problems (#d2ec70c)
- CSS: Add `white-space: pre;` for contenteditable elements (#4abd3cb)

## [1.27.1-beta]

### Fixed

- Meta: remove extra filetypes from bower main entry. Fixes #600 (#964a711)
- Core: Fix contenteditable inside iframes (#96a6785)
- Core: Preserve caret on sign change. See #607 (#3b55826)
- Core: Prevent caret function call on non form elements. Fixes #607 (#ecab49c)
- Core: Prevent adding empty strings into acceptedKeys array. Fixes #606 (#9c4c20b)

## [1.27.0-beta]

### Added

- Add contenteditable support (#a765346)

### Fixed

- Core: Restore minimum jQuery to v1.4.3. Fixes #586 (#0cf8be5)
- Fix getMaxIndex function in jquery.keyboard.extension-navigation (#1891b4c)
- Define kbcss only once (#fea20a1)
- Core: Prevent max call stack size error. Fixes #542 (#a156bb2)
- Core: Always return keyboard object (#988a996)
