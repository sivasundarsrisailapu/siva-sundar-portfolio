// ==========================================================================
// CLIENT WORK FOLDERS
// Each block below becomes one folder in the "Featured Projects" section.
// To add a new client: copy a whole { ... } block, paste it, and edit it.
//
//   color    : 'lime' | 'dark' | 'cream'   (folder colour)
//   theme    : optional custom folder colours instead of `color`, e.g. to match
//              a client's brand: { front, back, ink, inkSoft, chip, chipInk }
//   accent   : two colours for the preview thumbnail / banner gradient
//   logo     : optional client logo, shown in the window banner and on the folder
//   cover    : optional image shown on the paper peeking out of the folder
//   status   : optional, e.g. 'Ongoing' — adds a pulsing "Live" dot to the folder
//   files    : what's inside the folder
//              type = 'image' | 'video' | 'doc' | 'link' | 'folder'
//              src  = path to the file (e.g. 'work/shm/poster-1.jpg') or a URL.
//              Leave src out and the tile shows as "Coming soon".
//              A 'folder' holds its own files list (sub-folders), e.g.
//              { name: 'Post Designs', type: 'folder', files: [ ... ] }
// ==========================================================================

window.PROJECTS = [
  {
    client: 'Telugu Anime Database',
    tab: 'TADB',
    title: 'TADB: Website, App & Community',
    category: 'Web App & Community',
    year: '2024 – Present',
    role: 'Founder & Content Creator',
    // TADB's blue theme
    theme: { front: '#BFD6FB', back: '#93B6EC', ink: '#0F2A5C', inkSoft: 'rgba(15, 42, 92, 0.68)', chip: '#2F5FBF', chipInk: '#FFFFFF' },
    accent: ['#7FA8EE', '#2F5FBF'],
    logo: 'work/tadb/tadb_app_icon.png',
    tools: ['Figma', 'Photoshop', 'CapCut'],
    summary: 'My biggest self-driven project. I created and manage the TADB website, the Android app and the Instagram community page, bringing anime to Telugu audiences.',
    highlights: [
      '1,000+ downloads on Google Play Store',
      'Website, Android app and Instagram page run by me',
      'All visuals, posts and video content designed in-house'
    ],
    files: [
      {
        name: 'Post Designs', type: 'folder',
        files: [
          // e.g. { name: 'Naruto Post', type: 'image', src: 'work/tadb/posts/naruto.jpg' },
        ]
      },
      {
        name: 'Reel Makings', type: 'folder',
        files: [
          // e.g. { name: 'Promo Reel', type: 'video', src: 'work/tadb/reels/promo.mp4' },
        ]
      },
      {
        name: 'Website', type: 'folder',
        files: [
          { name: 'TADB Website', type: 'link', src: 'tadb.html' },
          { name: 'App Icon', type: 'image', src: 'work/tadb/tadb_app_icon.png' },
          { name: 'Play Store Banner', type: 'image', src: 'work/tadb/tadb_play_store_banner.png' }
        ]
      },
      {
        name: 'Links', type: 'folder',
        files: [
          { name: 'TADB Website', type: 'link', src: 'tadb.html' },
          { name: 'Instagram Page', type: 'link' },
          { name: 'Play Store', type: 'link' }
        ]
      }
    ],
    link: { label: 'Open TADB', href: 'tadb.html' }
  },
  {
    client: 'Andhra Anime Club',
    tab: 'AAC',
    title: 'Andhra Anime Club: Website & App',
    category: 'Web & App Design',
    year: '2026 – Present',
    status: 'Ongoing',
    role: 'Designer',
    // Matches the Andhra Anime Club site: crimson on near-black with gold
    theme: { front: '#A0022D', back: '#4A0012', ink: '#FFFFFF', inkSoft: 'rgba(255, 255, 255, 0.7)', chip: '#F6C453', chipInk: '#180105' },
    accent: ['#A0022D', '#0E0003'],
    logo: 'work/aac/aac_logo.png',
    tools: ['Figma', 'Photoshop'],
    summary: 'The home of the Andhra Anime Club, a community of anime fans across Andhra Pradesh. The website and Android app cover upcoming meet-ups and screenings, member sign-up and seat booking. I am still working on this project.',
    highlights: [
      'Live countdown to the next meet-up and a filterable events list',
      'Android app: book seats and pay with any UPI app',
      'Alerts for new screenings and live member stats across districts',
      'Free sign-up with member profiles'
    ],
    files: [
      { name: 'Club Logo', type: 'image', src: 'work/aac/aac_main_logo.png' },
      { name: 'App Icon', type: 'image', src: 'work/aac/aac_app_icon.png' },
      { name: 'Live Website', type: 'link', src: 'https://andhra-anime-club.pages.dev/' },
      { name: 'Android App', type: 'link', src: 'https://andhra-anime-club.pages.dev/download.html' },
      { name: 'Member Profile', type: 'link', src: 'https://andhra-anime-club.pages.dev/profile.html' },
      { name: 'Design Screens', type: 'image' }
    ],
    link: { label: 'Visit Website', href: 'https://andhra-anime-club.pages.dev/' }
  },
  {
    client: 'SHM Technologies',
    tab: 'SHM',
    title: 'Social Media Creatives & Reels',
    category: 'Graphic Design & Video',
    year: '2026',
    role: 'Graphic Designer & Video Editor (Intern)',
    // Navy blue
    theme: { front: '#13234A', back: '#0B1630', ink: '#FFFFFF', inkSoft: 'rgba(255, 255, 255, 0.7)', chip: '#FFFFFF', chipInk: '#13234A' },
    accent: ['#2B4C8C', '#0B1630'],
    tools: ['Photoshop', 'Illustrator', 'CapCut', 'Premiere Pro'],
    summary: 'Designing posters and social media creatives and editing short-form reels for SHM Technologies.',
    highlights: [
      'Posters and social media creatives',
      'Short-form reels with audio sync and transitions',
      'Consistent visual style across posts'
    ],
    files: [
      { name: 'Poster Designs', type: 'image' },
      { name: 'Social Posts', type: 'image' },
      { name: 'Reels', type: 'video' }
    ]
  },
  {
    client: 'BGMI Promo',
    tab: 'BGMI',
    title: 'BGMI Promo Reel Campaign',
    category: 'Video Editing',
    year: '2026',
    role: 'Video Editor',
    // Slightly dark green, with a gold accent
    theme: { front: '#2A6B45', back: '#1A4A2E', ink: '#FFFFFF', inkSoft: 'rgba(255, 255, 255, 0.72)', chip: '#F5C542', chipInk: '#13321F' },
    accent: ['#3FA066', '#13321F'],
    logo: 'work/bgmi/pubg_mobile_logo_white.png',
    tools: ['CapCut', 'Premiere Pro'],
    summary: 'A high-energy promotional reel campaign with a custom voiceover and CapCut audio sync.',
    highlights: [
      'Custom voiceover synced to gameplay',
      'Beat-matched cuts and trending transitions'
    ],
    files: [
      { name: 'Promo Reel', type: 'video' },
      { name: 'Thumbnail', type: 'image' }
    ]
  }
];
