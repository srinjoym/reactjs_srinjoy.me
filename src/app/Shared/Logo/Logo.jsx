import React, { PropTypes } from 'react'
import theme from './Logo.scss'

class Logo extends React.Component {
  render () {
    return (
      <svg className={theme.svg} viewBox='0 0 173.000000 238.000000'>
        <g transform='translate(0.000000,238.000000) scale(0.100000,-0.100000)'
          fill='#000000' stroke='none'>
          <path d='M485 1998 c-214 -165 -390 -306 -390 -313 0 -7 300 -243 668 -525
    367 -282 667 -515 667 -519 -1 -7 -515 -403 -540 -415 -15 -7 -83 42 -345 243
    -221 170 -332 250 -343 246 -10 -3 -35 -21 -57 -40 -39 -33 -39 -34 -20 -49
    11 -8 184 -141 385 -295 201 -155 367 -281 370 -280 9 0 763 584 764 591 1 3
    -98 82 -219 175 -121 93 -220 174 -219 179 0 9 293 242 307 243 4 1 7 -77 7
    -173 l0 -175 61 -46 c33 -26 62 -45 65 -43 2 3 3 163 2 356 l-3 351 -278 -215
    c-164 -126 -283 -211 -290 -207 -49 29 -776 596 -772 603 7 11 553 430 568
    435 7 3 160 -110 342 -249 l330 -254 45 33 c25 18 45 40 45 48 0 11 -748 599
    -758 597 -1 -1 -177 -136 -392 -302z' />
          <path d='M80 1155 c0 -233 3 -345 10 -345 6 0 35 18 65 41 l55 41 2 179 3 178
    324 -249 c179 -138 327 -250 329 -250 7 0 152 112 152 118 0 2 -16 26 -36 53
    -39 53 -37 53 -91 6 l-21 -19 -385 296 c-212 163 -390 296 -396 296 -8 0 -11
    -106 -11 -345z' />
        </g>
      </svg>
    )
  }
}

export default Logo
