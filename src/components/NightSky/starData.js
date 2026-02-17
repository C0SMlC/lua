/**
 * Star positions for February 19, 2004 night sky
 * Corrected positions for mobile portrait view
 * Winter Northern Hemisphere ~9PM looking South
 * Coordinates are percentages (x: 0-100, y: 0-100)
 */

// Orion - The Hunter (WIDE hourglass shape)
export const orion = {
  name: 'Orion',
  stars: [
    // Shoulders (top WIDE part - far apart!)
    { id: 'betelgeuse', x: 30, y: 32, size: 5, brightness: 1, color: '#ffcc6f' },    // Upper-LEFT shoulder (red supergiant)
    { id: 'bellatrix', x: 58, y: 32, size: 3.5, brightness: 0.9, color: '#cce4ff' }, // Upper-RIGHT shoulder
    
    // Belt (3 stars in tight diagonal across middle)
    { id: 'alnitak', x: 40, y: 42, size: 2.5, brightness: 0.9, color: '#b4d4ff' },   // Belt LEFT
    { id: 'alnilam', x: 44, y: 44, size: 3, brightness: 0.95, color: '#b4d4ff' },    // Belt CENTER (brightest of belt)
    { id: 'mintaka', x: 48, y: 46, size: 2.5, brightness: 0.9, color: '#b4d4ff' },   // Belt RIGHT
    
    // Sword (3 stars hanging DIRECTLY BELOW ALNILAM, slightly diagonal)
    { id: 'sword-top', x: 43, y: 50, size: 1.8, brightness: 0.7, color: '#fff' },         // Sword star 1
    { id: 'orion-nebula', x: 42, y: 54, size: 3, brightness: 0.85, color: '#ffbbbb' },    // Sword star 2 - Orion Nebula M42 (fuzzy pink)
    { id: 'sword-bottom', x: 41, y: 58, size: 1.8, brightness: 0.65, color: '#fff' },     // Sword star 3
    
    // Feet (bottom WIDE part - far apart!)
    { id: 'saiph', x: 32, y: 68, size: 3, brightness: 0.85, color: '#b4d4ff' },      // Lower-LEFT foot
    { id: 'rigel', x: 58, y: 68, size: 5, brightness: 1, color: '#b4d4ff' },         // Lower-RIGHT foot (brightest!)
  ],
  lines: [
    // Shoulders
    ['betelgeuse', 'bellatrix'],
    // Shoulders to belt
    ['betelgeuse', 'alnitak'],
    ['bellatrix', 'mintaka'],
    // Belt
    ['alnitak', 'alnilam'],
    ['alnilam', 'mintaka'],
    // Belt to feet
    ['alnitak', 'saiph'],
    ['mintaka', 'rigel'],
    // Feet
    ['saiph', 'rigel'],
    // Sword (hanging directly below Alnilam - center belt star)
    ['alnilam', 'sword-top'],
    ['sword-top', 'orion-nebula'],
    ['orion-nebula', 'sword-bottom'],
  ]
}

// Canis Major - The Great Dog (Sirius at top, dog shape going down)
export const canisMajor = {
  name: 'Canis Major',
  stars: [
    // HEAD - Sirius is the brilliant eye/nose at TOP
    { id: 'sirius', x: 38, y: 75, size: 6, brightness: 1, color: '#fff' },           // BRIGHTEST star - top of dog
    { id: 'mirzam', x: 45, y: 77, size: 2.5, brightness: 0.75, color: '#b4d4ff' },   // Back of head
    
    // BODY going downward
    { id: 'muliphein', x: 36, y: 80, size: 2, brightness: 0.65, color: '#fff' },     // Chest
    { id: 'wezen', x: 42, y: 85, size: 3, brightness: 0.85, color: '#ffeedd' },      // Mid-body (bright yellowish)
    { id: 'adhara', x: 40, y: 91, size: 3.5, brightness: 0.9, color: '#b4d4ff' },    // Hindquarters (2nd brightest in constellation)
    
    // LEGS & TAIL
    { id: 'aludra', x: 48, y: 88, size: 2.5, brightness: 0.75, color: '#b4d4ff' },   // Back leg upper
    { id: 'eta-cma', x: 33, y: 88, size: 2, brightness: 0.6, color: '#fff' },        // Front leg
    { id: 'omicron2-cma', x: 36, y: 95, size: 1.8, brightness: 0.55, color: '#fff' },// Front paw
    { id: 'kappa-cma', x: 46, y: 94, size: 1.8, brightness: 0.55, color: '#fff' },   // Back paw
  ],
  lines: [
    // Head
    ['sirius', 'mirzam'],
    // Neck/chest
    ['sirius', 'muliphein'],
    // Body line down
    ['muliphein', 'wezen'],
    ['mirzam', 'wezen'],
    ['wezen', 'adhara'],
    // Back leg
    ['wezen', 'aludra'],
    ['aludra', 'kappa-cma'],
    // Front leg
    ['muliphein', 'eta-cma'],
    ['eta-cma', 'omicron2-cma'],
    // Connect hindquarters
    ['adhara', 'kappa-cma'],
  ]
}

// Canis Minor - The Little Dog (left of Orion)
export const canisMinor = {
  name: 'Canis Minor',
  stars: [
    { id: 'procyon', x: 20, y: 55, size: 4.5, brightness: 1, color: '#fffde8' },     // 8th brightest star
    { id: 'gomeisa', x: 18, y: 48, size: 2.5, brightness: 0.75, color: '#b4d4ff' },  // Beta CMi
  ],
  lines: [
    ['procyon', 'gomeisa'],
  ]
}

// Gemini - The Twins (two PARALLEL vertical columns)
export const gemini = {
  name: 'Gemini',
  stars: [
    // CASTOR's column (LEFT twin) - x around 12-16
    { id: 'castor', x: 12, y: 20, size: 3.5, brightness: 0.95, color: '#fff' },      // Head
    { id: 'gem-tau', x: 13, y: 28, size: 2, brightness: 0.65, color: '#fff' },       // Shoulder
    { id: 'gem-eps', x: 14, y: 36, size: 2, brightness: 0.7, color: '#fff' },        // Torso
    { id: 'gem-mu', x: 15, y: 46, size: 2, brightness: 0.65, color: '#fff' },        // Knee
    { id: 'gem-xi', x: 16, y: 54, size: 1.8, brightness: 0.6, color: '#fff' },       // Foot
    
    // POLLUX's column (RIGHT twin) - x around 22-26
    { id: 'pollux', x: 22, y: 22, size: 4, brightness: 1, color: '#ffd993' },        // Head (orange giant, brightest in Gemini)
    { id: 'gem-kap', x: 23, y: 30, size: 2, brightness: 0.65, color: '#fff' },       // Shoulder
    { id: 'gem-del', x: 24, y: 38, size: 2, brightness: 0.7, color: '#fff' },        // Torso
    { id: 'gem-lam', x: 25, y: 48, size: 1.8, brightness: 0.6, color: '#fff' },      // Foot
    
    // SATURN - between the twins for Feb 2004!
    { id: 'saturn', x: 17, y: 26, size: 4, brightness: 1, color: '#ffd700', isSaturn: true }, // Gold/yellow planet
  ],
  lines: [
    // Twin heads connected
    ['castor', 'pollux'],
    // Castor's body (left column)
    ['castor', 'gem-tau'],
    ['gem-tau', 'gem-eps'],
    ['gem-eps', 'gem-mu'],
    ['gem-mu', 'gem-xi'],
    // Pollux's body (right column)
    ['pollux', 'gem-kap'],
    ['gem-kap', 'gem-del'],
    ['gem-del', 'gem-lam'],
    // Arms connecting twins at shoulders
    ['gem-tau', 'gem-kap'],
  ]
}

// Taurus - The Bull (V-shape face with horns)
export const taurus = {
  name: 'Taurus',
  stars: [
    { id: 'aldebaran', x: 62, y: 32, size: 4, brightness: 1, color: '#ffaa6f' },     // Red giant eye
    { id: 'elnath', x: 48, y: 20, size: 3, brightness: 0.85, color: '#fff' },        // Horn tip (shared with Auriga)
    { id: 'zeta-tau', x: 70, y: 25, size: 2.5, brightness: 0.75, color: '#fff' },    // Other horn tip
    // Hyades cluster (V-shape face)
    { id: 'hya1', x: 58, y: 30, size: 2, brightness: 0.7, color: '#fff' },
    { id: 'hya2', x: 65, y: 34, size: 2, brightness: 0.7, color: '#fff' },
    { id: 'hya3', x: 60, y: 38, size: 1.8, brightness: 0.65, color: '#fff' },
  ],
  lines: [
    ['elnath', 'aldebaran'],
    ['aldebaran', 'zeta-tau'],
    ['hya1', 'aldebaran'],
    ['aldebaran', 'hya2'],
    ['hya1', 'hya3'],
    ['hya3', 'hya2'],
  ]
}

// Pleiades (Seven Sisters) - tight cluster upper-right of Orion
export const pleiades = {
  name: 'Pleiades',
  stars: [
    { id: 'alcyone', x: 72, y: 22, size: 2.5, brightness: 0.9, color: '#cce4ff' },
    { id: 'atlas', x: 74, y: 20, size: 2, brightness: 0.75, color: '#cce4ff' },
    { id: 'electra', x: 70, y: 21, size: 2, brightness: 0.75, color: '#cce4ff' },
    { id: 'maia', x: 72, y: 19, size: 2, brightness: 0.75, color: '#cce4ff' },
    { id: 'merope', x: 71, y: 24, size: 1.8, brightness: 0.7, color: '#cce4ff' },
    { id: 'taygeta', x: 70, y: 18, size: 1.8, brightness: 0.7, color: '#cce4ff' },
    { id: 'pleione', x: 75, y: 19, size: 1.5, brightness: 0.6, color: '#cce4ff' },
  ],
  lines: [] // Cluster, no lines needed
}

// Auriga - The Charioteer (pentagon shape)
export const auriga = {
  name: 'Auriga',
  stars: [
    { id: 'capella', x: 55, y: 8, size: 4.5, brightness: 1, color: '#fff4b8' },      // Yellow giant
    { id: 'menkalinan', x: 48, y: 12, size: 2.5, brightness: 0.8, color: '#fff' },
    { id: 'aur-theta', x: 58, y: 15, size: 2, brightness: 0.7, color: '#fff' },
    { id: 'aur-iota', x: 52, y: 18, size: 2, brightness: 0.7, color: '#fff' },
  ],
  lines: [
    ['capella', 'menkalinan'],
    ['capella', 'aur-theta'],
    ['menkalinan', 'aur-iota'],
    ['aur-theta', 'aur-iota'],
    ['menkalinan', 'elnath'], // Connects to Taurus
  ]
}

// Background filler stars (dimmer, scattered)
export const backgroundStars = [
  { id: 'bg1', x: 5, y: 5, size: 1, brightness: 0.4 },
  { id: 'bg2', x: 12, y: 12, size: 1, brightness: 0.3 },
  { id: 'bg3', x: 85, y: 10, size: 1.2, brightness: 0.5 },
  { id: 'bg4', x: 92, y: 18, size: 1, brightness: 0.35 },
  { id: 'bg5', x: 88, y: 35, size: 1, brightness: 0.4 },
  { id: 'bg6', x: 82, y: 50, size: 1.2, brightness: 0.45 },
  { id: 'bg7', x: 90, y: 65, size: 1, brightness: 0.35 },
  { id: 'bg8', x: 78, y: 80, size: 1, brightness: 0.4 },
  { id: 'bg9', x: 85, y: 92, size: 1.2, brightness: 0.5 },
  { id: 'bg10', x: 8, y: 80, size: 1, brightness: 0.35 },
  { id: 'bg11', x: 5, y: 92, size: 1, brightness: 0.4 },
  { id: 'bg12', x: 60, y: 70, size: 1, brightness: 0.35 },
  { id: 'bg13', x: 75, y: 60, size: 1, brightness: 0.4 },
  { id: 'bg14', x: 68, y: 85, size: 1.2, brightness: 0.45 },
  { id: 'bg15', x: 55, y: 95, size: 1, brightness: 0.35 },
  { id: 'bg16', x: 10, y: 45, size: 1, brightness: 0.4 },
  { id: 'bg17', x: 3, y: 35, size: 1.2, brightness: 0.45 },
  { id: 'bg18', x: 95, y: 45, size: 1, brightness: 0.4 },
  { id: 'bg19', x: 82, y: 28, size: 1, brightness: 0.35 },
  { id: 'bg20', x: 15, y: 85, size: 1, brightness: 0.4 },
]

/*
 * Moon data for Feb 19, 2004:
 * CORRECTION: The Moon was a Waning CRESCENT with <1% illumination (nearly New Moon).
 * It was located in Aquarius, rising with the Sun in the morning.
 * It would NOT be visible in the night sky - therefore we don't render it.
 */

// Hidden heart constellation - appears last as a romantic surprise! 💝
export const heartConstellation = {
  name: 'Heart',
  stars: [
    // Left side of heart
    { id: 'heart-1', x: 80, y: 60 },
    { id: 'heart-2', x: 77, y: 55 },
    { id: 'heart-3', x: 78, y: 50 },
    { id: 'heart-4', x: 82, y: 47 },
    // Top right bump
    { id: 'heart-5', x: 88, y: 47 },
    { id: 'heart-6', x: 92, y: 50 },
    { id: 'heart-7', x: 93, y: 55 },
    // Right side down to point
    { id: 'heart-8', x: 90, y: 60 },
    // Bottom point
    { id: 'heart-9', x: 85, y: 70 },
  ],
  lines: [
    ['heart-1', 'heart-2'],
    ['heart-2', 'heart-3'],
    ['heart-3', 'heart-4'],
    ['heart-4', 'heart-5'],
    ['heart-5', 'heart-6'],
    ['heart-6', 'heart-7'],
    ['heart-7', 'heart-8'],
    ['heart-8', 'heart-9'],
    ['heart-9', 'heart-1'],
  ]
}

// All constellations combined
export const constellations = [
  orion,
  taurus,
  gemini,
  canisMajor,
  canisMinor,
  pleiades,
  auriga,
]

// Get all constellation stars
export const getAllStars = () => {
  const stars = []
  constellations.forEach(constellation => {
    constellation.stars.forEach(star => {
      stars.push({
        ...star,
        constellation: constellation.name,
      })
    })
  })
  return [...stars, ...backgroundStars.map(s => ({ ...s, color: '#fff', constellation: null }))]
}

// Get all constellation lines with coordinates
export const getAllLines = () => {
  const lines = []
  
  // Build a map of ALL stars across constellations for cross-references
  const allStarMap = {}
  constellations.forEach(constellation => {
    constellation.stars.forEach(star => {
      allStarMap[star.id] = star
    })
  })
  
  constellations.forEach(constellation => {
    constellation.lines.forEach(([from, to]) => {
      if (allStarMap[from] && allStarMap[to]) {
        lines.push({
          from: allStarMap[from],
          to: allStarMap[to],
          constellation: constellation.name,
        })
      }
    })
  })
  return lines
}
