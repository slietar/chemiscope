/* eslint-disable */

// HACK: we need to insert jquery in the page for 3Dmol to work
import * as jQuery from 'jquery';
(window as any).$ = jQuery.default;

import { IJupyterWidgetRegistry } from '@jupyter-widgets/base';

import * as widgetExports from './widget';

const PACKAGE_NAME = 'chemiscope';
const PACKAGE_VERSION = '0.4.0';

const PLUGIN = {
    id: 'chemiscope:plugin',
    requires: [IJupyterWidgetRegistry],
    activate: (app: unknown, registry: IJupyterWidgetRegistry) => {
        registry.registerWidget({
            name: PACKAGE_NAME,
            version: PACKAGE_VERSION,
            exports: widgetExports,
        });
    },
    autoStart: true,
};

export default PLUGIN;
