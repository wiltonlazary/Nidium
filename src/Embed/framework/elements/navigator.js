/**
 * Copyright 2017 Nidium Inc. All rights reserved.
 * Use of this source code is governed by a MIT license
 * that can be found in the LICENSE file.
 */

{
    const Elements = require("Elements");
    const Navigator = require("Navigator");
    const { ElementStyle } = require("ElementsStyles");

    Elements.navigator = class extends Navigator {};
    ElementStyle.Inherit(Elements.navigator);
}