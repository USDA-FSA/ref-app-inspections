////////////////////////////////////////////////////////////////////////////////
'use strict';

// SASS ////////////////////////////////////////////////////////////////////////

// import variable from webpack.common.js to reference FSA Style in node_modules
import 'fsaStyleScss';

// Project-specific styles
import './stylesheets/core/_variables.scss';
import './stylesheets/components/_fic-inspections.scss';
import './stylesheets/components/_fic-progress-bar.scss';
import './stylesheets/components/_fic-finder.scss';
import './stylesheets/components/_fic-tooltip.scss';
import './stylesheets/components/_fic-inspection-list-header.scss';
import './stylesheets/components/_fic-inspection-triage.scss';

import './stylesheets/components/_hbs-play.scss';
import './stylesheets/components/_component-test.scss';
import './stylesheets/components/_test-card.scss';

import './stylesheets/_SHAME.scss';

// Prototype-only
import './stylesheets/_aoux-pt-strip.scss';

// JS //////////////////////////////////////////////////////////////////////////

//
import jQuery from 'jquery';

// Project-specific JS
import './js/fsa-style-docs.min.js'; // TODO import only select ones from https://github.com/USDA-FSA/fsa-style/tree/master/src/js/components
import './js/fic-finder.js';
import './js/fic-inspections.js';
import './js/aoux-pt-strip.js';
