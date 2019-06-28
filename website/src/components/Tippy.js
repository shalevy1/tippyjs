import Tippy, { TippySingleton, tippy } from '../tippy.js'

import '../../../backdrop.css'
import '../../../svg-arrow.css'

import '../../../themes/light.css'
import '../../../themes/light-border.css'
import '../../../themes/material.css'
import '../../../themes/translucent.css'

import '../../../animations/perspective.css'
import '../../../animations/perspective-subtle.css'
import '../../../animations/perspective-extreme.css'
import '../../../animations/scale.css'
import '../../../animations/scale-subtle.css'
import '../../../animations/scale-extreme.css'
import '../../../animations/shift-away.css'
import '../../../animations/shift-away-subtle.css'
import '../../../animations/shift-away-extreme.css'
import '../../../animations/shift-toward.css'
import '../../../animations/shift-toward-subtle.css'
import '../../../animations/shift-toward-extreme.css'

Tippy.defaultProps = {
  content: "I'm a Tippy tooltip!",
}

export default Tippy
export { TippySingleton, tippy }
