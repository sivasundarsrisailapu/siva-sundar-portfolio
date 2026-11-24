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
//              Optional: date ('May 2026', shown on the tile and sorts newest
//              first), thumb (small preview image), and desc on a folder.
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
    tools: ['Photoshop', 'Illustrator', 'CapCut', 'Figma'],
    summary: 'My biggest self-driven project. I created and manage the TADB website, the Android app and the @teluguanime.db Instagram page, bringing anime news, Telugu dub updates and voice artist spotlights to Telugu audiences. Every post on the page is designed by me.',
    highlights: [
      '88 post designs from Aug 2025 to Aug 2026, all designed in Photoshop',
      '41 Telugu title posters, each with its own hand-lettered Telugu logo',
      '18 voice artist cast reveals, plus news, charts and schedules',
      '1,000+ downloads of the TADB Android app on Google Play'
    ],
    files: [
      {
        name: 'Post Designs', type: 'folder',
        desc: 'Everything I designed for the TADB Instagram page, sorted by type.',
        files: [
          {
            name: 'Telugu Dub Posters', type: 'folder',
            desc: 'Telugu title posters for anime, animated films and live-action releases. I hand-letter each title in Telugu.',
            files: [
              { name: 'Agents of the Four Seasons', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/agents-of-the-four-seasons.jpg', thumb: 'work/tadb/posters/thumbs/agents-of-the-four-seasons.jpg' },
              { name: 'An Observation Log', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/an-observation-log.jpg', thumb: 'work/tadb/posters/thumbs/an-observation-log.jpg' },
              { name: 'Attack on Titan: Eren', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/attack-on-titan-eren.jpg', thumb: 'work/tadb/posters/thumbs/attack-on-titan-eren.jpg' },
              { name: 'Attack on Titan', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/attack-on-titan.jpg', thumb: 'work/tadb/posters/thumbs/attack-on-titan.jpg' },
              { name: 'The Warrior Princess and the Barbaric King', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/the-warrior-princess-and-the-barbaric-king.jpg', thumb: 'work/tadb/posters/thumbs/the-warrior-princess-and-the-barbaric-king.jpg' },
              { name: 'Bleach: Kisuke Urahara', type: 'image', date: 'Feb 2026', src: 'work/tadb/posters/bleach-kisuke-urahara.jpg', thumb: 'work/tadb/posters/thumbs/bleach-kisuke-urahara.jpg' },
              { name: 'Blue Box', type: 'image', date: 'May 2026', src: 'work/tadb/posters/blue-box.jpg', thumb: 'work/tadb/posters/thumbs/blue-box.jpg' },
              { name: 'Swapped', type: 'image', date: 'May 2026', src: 'work/tadb/posters/swapped.jpg', thumb: 'work/tadb/posters/thumbs/swapped.jpg' },
              { name: 'Daemons of the Shadow Realm', type: 'image', date: 'May 2026', src: 'work/tadb/posters/daemons-of-the-shadow-realm.jpg', thumb: 'work/tadb/posters/thumbs/daemons-of-the-shadow-realm.jpg' },
              { name: 'Doraemon: Nobita\'s Sky Utopia', type: 'image', date: 'May 2026', src: 'work/tadb/posters/doraemon-nobita-s-sky-utopia.jpg', thumb: 'work/tadb/posters/thumbs/doraemon-nobita-s-sky-utopia.jpg' },
              { name: 'Doraemon Special', type: 'image', date: 'May 2026', src: 'work/tadb/posters/doraemon-special.jpg', thumb: 'work/tadb/posters/thumbs/doraemon-special.jpg' },
              { name: 'Dr. Stone', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/dr-stone.jpg', thumb: 'work/tadb/posters/thumbs/dr-stone.jpg' },
              { name: 'Easy-Going Territory Defense', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/easy-going-territory-defense.jpg', thumb: 'work/tadb/posters/thumbs/easy-going-territory-defense.jpg' },
              { name: 'Eren the Southpaw', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/eren-the-southpaw.jpg', thumb: 'work/tadb/posters/thumbs/eren-the-southpaw.jpg' },
              { name: 'Eren the Southpaw: Typography', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/eren-the-southpaw-typography.jpg', thumb: 'work/tadb/posters/thumbs/eren-the-southpaw-typography.jpg' },
              { name: 'GOAT (2026)', type: 'image', date: 'May 2026', src: 'work/tadb/posters/goat-2026.jpg', thumb: 'work/tadb/posters/thumbs/goat-2026.jpg' },
              { name: 'GOAT: Character Poster', type: 'image', date: 'May 2026', src: 'work/tadb/posters/goat-character-poster.jpg', thumb: 'work/tadb/posters/thumbs/goat-character-poster.jpg' },
              { name: 'The Good Dinosaur', type: 'image', date: 'May 2026', src: 'work/tadb/posters/the-good-dinosaur.jpg', thumb: 'work/tadb/posters/thumbs/the-good-dinosaur.jpg' },
              { name: 'Kamen Rider Gavv', type: 'image', date: 'Aug 2026', src: 'work/tadb/posters/kamen-rider-gavv.jpg', thumb: 'work/tadb/posters/thumbs/kamen-rider-gavv.jpg' },
              { name: 'Karna', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/karna.jpg', thumb: 'work/tadb/posters/thumbs/karna.jpg' },
              { name: 'Liar Game', type: 'image', date: 'May 2026', src: 'work/tadb/posters/liar-game.jpg', thumb: 'work/tadb/posters/thumbs/liar-game.jpg' },
              { name: 'Marriage Toxin', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/marriage-toxin.jpg', thumb: 'work/tadb/posters/thumbs/marriage-toxin.jpg' },
              { name: 'My Hero Academia', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/my-hero-academia.jpg', thumb: 'work/tadb/posters/thumbs/my-hero-academia.jpg' },
              { name: 'One Piece Live Action', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/one-piece-live-action.jpg', thumb: 'work/tadb/posters/thumbs/one-piece-live-action.jpg' },
              { name: 'One Piece Live Action: Season 2', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/one-piece-live-action-season-2.jpg', thumb: 'work/tadb/posters/thumbs/one-piece-live-action-season-2.jpg' },
              { name: 'One Piece Live Action 2027', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/one-piece-live-action-2027.jpg', thumb: 'work/tadb/posters/thumbs/one-piece-live-action-2027.jpg' },
              { name: 'The One Piece', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/the-one-piece.jpg', thumb: 'work/tadb/posters/thumbs/the-one-piece.jpg' },
              { name: 'One Punch Man', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/one-punch-man.jpg', thumb: 'work/tadb/posters/thumbs/one-punch-man.jpg' },
              { name: 'Release That Witch', type: 'image', date: 'May 2026', src: 'work/tadb/posters/release-that-witch.jpg', thumb: 'work/tadb/posters/thumbs/release-that-witch.jpg' },
              { name: 'Scarlet', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/scarlet.jpg', thumb: 'work/tadb/posters/thumbs/scarlet.jpg' },
              { name: 'The Rising of the Shield Hero', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/the-rising-of-the-shield-hero.jpg', thumb: 'work/tadb/posters/thumbs/the-rising-of-the-shield-hero.jpg' },
              { name: 'Shin-chan: The Movie', type: 'image', date: 'May 2026', src: 'work/tadb/posters/shin-chan-the-movie.jpg', thumb: 'work/tadb/posters/thumbs/shin-chan-the-movie.jpg' },
              { name: 'Shin-chan: The Movie (Alt)', type: 'image', date: 'May 2026', src: 'work/tadb/posters/shin-chan-the-movie-alt.jpg', thumb: 'work/tadb/posters/thumbs/shin-chan-the-movie-alt.jpg' },
              { name: 'That Time I Got Reincarnated as a Slime S4', type: 'image', date: 'May 2026', src: 'work/tadb/posters/that-time-i-got-reincarnated-as-a-slime-s4.jpg', thumb: 'work/tadb/posters/thumbs/that-time-i-got-reincarnated-as-a-slime-s4.jpg' },
              { name: 'That Time I Got Reincarnated as a Slime', type: 'image', date: 'May 2026', src: 'work/tadb/posters/that-time-i-got-reincarnated-as-a-slime.jpg', thumb: 'work/tadb/posters/thumbs/that-time-i-got-reincarnated-as-a-slime.jpg' },
              { name: 'Sakamoto Days', type: 'image', date: 'Apr 2026', src: 'work/tadb/posters/sakamoto-days.jpg', thumb: 'work/tadb/posters/thumbs/sakamoto-days.jpg' },
              { name: 'JoJo: Steel Ball Run', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/jojo-steel-ball-run.jpg', thumb: 'work/tadb/posters/thumbs/jojo-steel-ball-run.jpg' },
              { name: 'Suzume', type: 'image', date: 'Dec 2025', src: 'work/tadb/posters/suzume.jpg', thumb: 'work/tadb/posters/thumbs/suzume.jpg' },
              { name: 'To Be Hero X', type: 'image', date: 'Mar 2026', src: 'work/tadb/posters/to-be-hero-x.jpg', thumb: 'work/tadb/posters/thumbs/to-be-hero-x.jpg' },
              { name: 'Watari-kun\'s Life Is About to Collapse', type: 'image', date: 'Jun 2026', src: 'work/tadb/posters/watari-kun-s-life-is-about-to-collapse.jpg', thumb: 'work/tadb/posters/thumbs/watari-kun-s-life-is-about-to-collapse.jpg' },
              { name: 'Wistoria: Wand and Sword S2', type: 'image', date: 'May 2026', src: 'work/tadb/posters/wistoria-wand-and-sword-s2.jpg', thumb: 'work/tadb/posters/thumbs/wistoria-wand-and-sword-s2.jpg' }
            ]
          },
          {
            name: 'Voice Artist Castings', type: 'folder',
            desc: 'Cast reveals that introduce the Telugu voice artists behind each character.',
            files: [
              { name: 'Govardini Prakash: Voices Behind the Heroines', type: 'image', date: 'Dec 2025', src: 'work/tadb/castings/govardini-prakash-voices-behind-the-heroines.jpg', thumb: 'work/tadb/castings/thumbs/govardini-prakash-voices-behind-the-heroines.jpg' },
              { name: 'Campfire Cooking: Chandu as Mukouda', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/campfire-cooking-chandu-as-mukouda.jpg', thumb: 'work/tadb/castings/thumbs/campfire-cooking-chandu-as-mukouda.jpg' },
              { name: 'Dandadan: Priya Santosh as Seiko', type: 'image', date: 'Dec 2025', src: 'work/tadb/castings/dandadan-priya-santosh-as-seiko.jpg', thumb: 'work/tadb/castings/thumbs/dandadan-priya-santosh-as-seiko.jpg' },
              { name: 'Dragon Ball: Kamal as Goku', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/dragon-ball-kamal-as-goku.jpg', thumb: 'work/tadb/castings/thumbs/dragon-ball-kamal-as-goku.jpg' },
              { name: 'Doraemon: Bhavanambika', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/doraemon-bhavanambika.jpg', thumb: 'work/tadb/castings/thumbs/doraemon-bhavanambika.jpg' },
              { name: 'Dhurandhar: Telugu Voice Cast', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/dhurandhar-telugu-voice-cast.jpg', thumb: 'work/tadb/castings/thumbs/dhurandhar-telugu-voice-cast.jpg' },
              { name: 'Gachiakuta: Rudo', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/gachiakuta-rudo.jpg', thumb: 'work/tadb/castings/thumbs/gachiakuta-rudo.jpg' },
              { name: 'Govardini as Lucy', type: 'image', date: 'Mar 2026', src: 'work/tadb/castings/govardini-as-lucy.jpg', thumb: 'work/tadb/castings/thumbs/govardini-as-lucy.jpg' },
              { name: 'Lokah: Sunny', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/lokah-sunny.jpg', thumb: 'work/tadb/castings/thumbs/lokah-sunny.jpg' },
              { name: 'A Misanthrope Teaches a Class: Arun T', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/a-misanthrope-teaches-a-class-arun-t.jpg', thumb: 'work/tadb/castings/thumbs/a-misanthrope-teaches-a-class-arun-t.jpg' },
              { name: 'Spy x Family: Tejasvi as Sharon', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/spy-x-family-tejasvi-as-sharon.jpg', thumb: 'work/tadb/castings/thumbs/spy-x-family-tejasvi-as-sharon.jpg' },
              { name: 'Little Singham: Chikki', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/little-singham-chikki.jpg', thumb: 'work/tadb/castings/thumbs/little-singham-chikki.jpg' },
              { name: 'Sirai: Telugu Voice Cast', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/sirai-telugu-voice-cast.jpg', thumb: 'work/tadb/castings/thumbs/sirai-telugu-voice-cast.jpg' },
              { name: 'Spy x Family: Govardini as Anya', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/spy-x-family-govardini-as-anya.jpg', thumb: 'work/tadb/castings/thumbs/spy-x-family-govardini-as-anya.jpg' },
              { name: 'Kedarnath as Takeru', type: 'image', date: 'Dec 2025', src: 'work/tadb/castings/kedarnath-as-takeru.jpg', thumb: 'work/tadb/castings/thumbs/kedarnath-as-takeru.jpg' },
              { name: 'Teja as Cecilia', type: 'image', date: 'Feb 2026', src: 'work/tadb/castings/teja-as-cecilia.jpg', thumb: 'work/tadb/castings/thumbs/teja-as-cecilia.jpg' },
              { name: 'Steel Ball Run: Pocoloco', type: 'image', date: 'May 2026', src: 'work/tadb/castings/steel-ball-run-pocoloco.jpg', thumb: 'work/tadb/castings/thumbs/steel-ball-run-pocoloco.jpg' },
              { name: 'TADB Awards 2025: Best Female Voice Artist', type: 'image', date: 'Apr 2026', src: 'work/tadb/castings/tadb-awards-2025-best-female-voice-artist.jpg', thumb: 'work/tadb/castings/thumbs/tadb-awards-2025-best-female-voice-artist.jpg' }
            ]
          },
          {
            name: 'News & Announcements', type: 'folder',
            desc: 'Release news, premiere dates and streaming updates for Telugu dubs.',
            files: [
              { name: 'Kaiju No. 8: Telugu Dub Premiere', type: 'image', date: 'Dec 2025', src: 'work/tadb/news/kaiju-no-8-telugu-dub-premiere.jpg', thumb: 'work/tadb/news/thumbs/kaiju-no-8-telugu-dub-premiere.jpg' },
              { name: 'Jujutsu Kaisen: Five Big Announcements', type: 'image', date: 'Aug 2025', src: 'work/tadb/news/jujutsu-kaisen-five-big-announcements.jpg', thumb: 'work/tadb/news/thumbs/jujutsu-kaisen-five-big-announcements.jpg' },
              { name: 'Karna Now on Crunchyroll', type: 'image', date: 'May 2026', src: 'work/tadb/news/karna-now-on-crunchyroll.jpg', thumb: 'work/tadb/news/thumbs/karna-now-on-crunchyroll.jpg' },
              { name: 'Coming Soon and Trailer Drop', type: 'image', date: 'May 2026', src: 'work/tadb/news/coming-soon-and-trailer-drop.jpg', thumb: 'work/tadb/news/thumbs/coming-soon-and-trailer-drop.jpg' },
              { name: 'Heroines Run the Show', type: 'image', date: 'May 2026', src: 'work/tadb/news/heroines-run-the-show.jpg', thumb: 'work/tadb/news/thumbs/heroines-run-the-show.jpg' },
              { name: 'One Punch Man S2: Telugu Dub Streaming', type: 'image', date: 'May 2026', src: 'work/tadb/news/one-punch-man-s2-telugu-dub-streaming.jpg', thumb: 'work/tadb/news/thumbs/one-punch-man-s2-telugu-dub-streaming.jpg' },
              { name: 'One Punch Man S2: YouTube Broadcast', type: 'image', date: 'May 2026', src: 'work/tadb/news/one-punch-man-s2-youtube-broadcast.jpg', thumb: 'work/tadb/news/thumbs/one-punch-man-s2-youtube-broadcast.jpg' },
              { name: 'One Piece: Coming Soon', type: 'image', date: 'Mar 2026', src: 'work/tadb/news/one-piece-coming-soon.jpg', thumb: 'work/tadb/news/thumbs/one-piece-coming-soon.jpg' },
              { name: 'A Misanthrope Teaches a Class: Now Streaming', type: 'image', date: 'Feb 2026', src: 'work/tadb/news/a-misanthrope-teaches-a-class-now-streaming.jpg', thumb: 'work/tadb/news/thumbs/a-misanthrope-teaches-a-class-now-streaming.jpg' },
              { name: 'Start Watching at Rs 99', type: 'image', date: 'Feb 2026', src: 'work/tadb/news/start-watching-at-rs-99.jpg', thumb: 'work/tadb/news/thumbs/start-watching-at-rs-99.jpg' }
            ]
          },
          {
            name: 'Charts & Schedules', type: 'folder',
            desc: 'Ranked lists, IMDb rating charts and weekly streaming schedules.',
            files: [
              { name: 'Jujutsu Kaisen: IMDb Episode Ratings', type: 'image', date: 'Feb 2026', src: 'work/tadb/charts/jujutsu-kaisen-imdb-episode-ratings.jpg', thumb: 'work/tadb/charts/thumbs/jujutsu-kaisen-imdb-episode-ratings.jpg' },
              { name: 'Kaiju No. 8: Crunchyroll Ratings', type: 'image', date: 'Feb 2026', src: 'work/tadb/charts/kaiju-no-8-crunchyroll-ratings.jpg', thumb: 'work/tadb/charts/thumbs/kaiju-no-8-crunchyroll-ratings.jpg' },
              { name: 'Top Anime List: 001 to 005', type: 'image', date: 'Aug 2025', src: 'work/tadb/charts/top-anime-list-001-to-005.jpg', thumb: 'work/tadb/charts/thumbs/top-anime-list-001-to-005.jpg' },
              { name: 'Top Anime List: 006 to 010', type: 'image', date: 'Aug 2025', src: 'work/tadb/charts/top-anime-list-006-to-010.jpg', thumb: 'work/tadb/charts/thumbs/top-anime-list-006-to-010.jpg' },
              { name: 'Top Anime List: 011 to 015', type: 'image', date: 'Aug 2025', src: 'work/tadb/charts/top-anime-list-011-to-015.jpg', thumb: 'work/tadb/charts/thumbs/top-anime-list-011-to-015.jpg' },
              { name: 'Highest-Grossing Animated Films in India', type: 'image', date: 'Dec 2025', src: 'work/tadb/charts/highest-grossing-animated-films-in-india.jpg', thumb: 'work/tadb/charts/thumbs/highest-grossing-animated-films-in-india.jpg' },
              { name: 'Crunchyroll Telugu Dubs: IMDb Ratings', type: 'image', date: 'Dec 2025', src: 'work/tadb/charts/crunchyroll-telugu-dubs-imdb-ratings.jpg', thumb: 'work/tadb/charts/thumbs/crunchyroll-telugu-dubs-imdb-ratings.jpg' },
              { name: 'Solo Leveling: Telugu Dub Likes', type: 'image', date: 'Dec 2025', src: 'work/tadb/charts/solo-leveling-telugu-dub-likes.jpg', thumb: 'work/tadb/charts/thumbs/solo-leveling-telugu-dub-likes.jpg' },
              { name: 'Sony Yay Weekend Movie Schedule', type: 'image', date: 'Dec 2025', src: 'work/tadb/charts/sony-yay-weekend-movie-schedule.jpg', thumb: 'work/tadb/charts/thumbs/sony-yay-weekend-movie-schedule.jpg' },
              { name: 'Weekly Crunchyroll Schedule', type: 'image', date: 'May 2026', src: 'work/tadb/charts/weekly-crunchyroll-schedule.jpg', thumb: 'work/tadb/charts/thumbs/weekly-crunchyroll-schedule.jpg' }
            ]
          },
          {
            name: 'Thumbnails & Title Logos', type: 'folder',
            desc: 'YouTube thumbnails and Telugu title logos.',
            files: [
              { name: 'Bleach: YouTube Thumbnail', type: 'image', date: 'Feb 2026', src: 'work/tadb/thumbs/bleach-youtube-thumbnail.jpg', thumb: 'work/tadb/thumbs/thumbs/bleach-youtube-thumbnail.jpg' },
              { name: 'Doraemon: YouTube Thumbnail', type: 'image', date: 'Feb 2026', src: 'work/tadb/thumbs/doraemon-youtube-thumbnail.jpg', thumb: 'work/tadb/thumbs/thumbs/doraemon-youtube-thumbnail.jpg' },
              { name: 'One Punch Man: YouTube Thumbnail', type: 'image', date: 'Feb 2026', src: 'work/tadb/thumbs/one-punch-man-youtube-thumbnail.jpg', thumb: 'work/tadb/thumbs/thumbs/one-punch-man-youtube-thumbnail.jpg' },
              { name: 'One Piece: Telugu Title Logo', type: 'image', date: 'Mar 2026', src: 'work/tadb/thumbs/one-piece-telugu-title-logo.jpg', thumb: 'work/tadb/thumbs/thumbs/one-piece-telugu-title-logo.jpg' },
              { name: 'Bleach: Telugu Title Logo', type: 'image', date: 'Mar 2026', src: 'work/tadb/thumbs/bleach-telugu-title-logo.jpg', thumb: 'work/tadb/thumbs/thumbs/bleach-telugu-title-logo.jpg' }
            ]
          }
        ]
      },
      {
        name: 'Reel Makings', type: 'folder',
        desc: 'Reel and story covers. The reel videos will be added soon.',
        files: [
          { name: 'News 07: Why PVR Keeps Doing This', type: 'image', date: 'Feb 2026', src: 'work/tadb/reels/news-07-why-pvr-keeps-doing-this.jpg', thumb: 'work/tadb/reels/thumbs/news-07-why-pvr-keeps-doing-this.jpg' },
          { name: 'Steel Ball Run: Story Cover', type: 'image', date: 'Feb 2026', src: 'work/tadb/reels/steel-ball-run-story-cover.jpg', thumb: 'work/tadb/reels/thumbs/steel-ball-run-story-cover.jpg' },
          { name: 'Steel Ball Run: Trailer Story', type: 'image', date: 'Feb 2026', src: 'work/tadb/reels/steel-ball-run-trailer-story.jpg', thumb: 'work/tadb/reels/thumbs/steel-ball-run-trailer-story.jpg' },
          { name: 'To Be Hero X: Story Cover', type: 'image', date: 'Mar 2026', src: 'work/tadb/reels/to-be-hero-x-story-cover.jpg', thumb: 'work/tadb/reels/thumbs/to-be-hero-x-story-cover.jpg' }
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
          { name: 'Instagram Page', type: 'link', src: 'https://www.instagram.com/teluguanime.db/' },
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
    client: 'Udaya',
    tab: 'Udaya',
    title: 'Udaya: Money & Plans App',
    category: 'Web App (PWA)',
    year: '2026',
    status: 'Ongoing',
    role: 'Designer & Builder (built with AI)',
    // Udaya's deep blue with a cream sunrise mark
    theme: { front: '#2E5BD6', back: '#002E8A', ink: '#FFFFFF', inkSoft: 'rgba(255, 255, 255, 0.72)', chip: '#F6F1E6', chipInk: '#002E8A' },
    accent: ['#3B6FE8', '#002E8A'],
    logo: 'work/udaya/logo.png',
    tools: ['AI Tools', 'Firebase', 'HTML / CSS / JS', 'Photoshop'],
    summary: 'A personal money and daily-plans app I designed and built with AI tools. Udaya means "sunrise" in Telugu, so the app greets you by the time of day and helps you start every day in balance: income, expenses, budgets, subscriptions, savings goals and tasks in one place.',
    highlights: [
      'Installable PWA that works offline, with light and dark themes',
      'Monthly budget that tells you how much you can safely spend each day',
      'Tracks subscriptions, bank accounts, savings goals and lend / borrow money',
      'Google or email sign-in with PIN lock, cloud sync, CSV export and JSON backup',
      'Custom sunrise logo, app icon and intro animation',
      '44 full-page UI screens captured across light / dark and phone / desktop'
    ],
    files: [
      {
        name: 'App Screens', type: 'folder',
        desc: 'Full-page screenshots of every screen in Udaya, in light and dark mode, on phone and desktop.',
        files: [
          {
            name: 'Mobile: Light', type: 'folder',
            desc: 'Phone layout with the bottom tab bar and quick-add button, light theme.',
            files: [
              { name: 'Sign in', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-signin.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-signin.jpg' },
              { name: 'Home', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-home.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-home.jpg' },
              { name: 'Money: Overview', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-money.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-money.jpg' },
              { name: 'Money: Budget', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-money-budget.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-money-budget.jpg' },
              { name: 'Money: Savings Goals', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-money-goals.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-money-goals.jpg' },
              { name: 'Money: Lend / Borrow', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-money-debts.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-money-debts.jpg' },
              { name: 'Money: Bank Accounts', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-money-accounts.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-money-accounts.jpg' },
              { name: 'Dashboard', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-dash.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-dash.jpg' },
              { name: 'Subscriptions', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-subs.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-subs.jpg' },
              { name: 'Plans & Tasks', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-plans.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-plans.jpg' },
              { name: 'Profile & Backup', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-mobile-safe.jpg', thumb: 'work/udaya/screens/thumbs/light-mobile-safe.jpg' }
            ]
          },
          {
            name: 'Mobile: Dark', type: 'folder',
            desc: 'The same phone screens in dark mode.',
            files: [
              { name: 'Sign in', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-signin.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-signin.jpg' },
              { name: 'Home', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-home.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-home.jpg' },
              { name: 'Money: Overview', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-money.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-money.jpg' },
              { name: 'Money: Budget', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-money-budget.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-money-budget.jpg' },
              { name: 'Money: Savings Goals', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-money-goals.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-money-goals.jpg' },
              { name: 'Money: Lend / Borrow', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-money-debts.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-money-debts.jpg' },
              { name: 'Money: Bank Accounts', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-money-accounts.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-money-accounts.jpg' },
              { name: 'Dashboard', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-dash.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-dash.jpg' },
              { name: 'Subscriptions', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-subs.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-subs.jpg' },
              { name: 'Plans & Tasks', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-plans.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-plans.jpg' },
              { name: 'Profile & Backup', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-mobile-safe.jpg', thumb: 'work/udaya/screens/thumbs/dark-mobile-safe.jpg' }
            ]
          },
          {
            name: 'Desktop: Light', type: 'folder',
            desc: 'Wide layout with the side navigation, light theme.',
            files: [
              { name: 'Sign in', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-signin.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-signin.jpg' },
              { name: 'Home', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-home.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-home.jpg' },
              { name: 'Money: Overview', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-money.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-money.jpg' },
              { name: 'Money: Budget', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-money-budget.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-money-budget.jpg' },
              { name: 'Money: Savings Goals', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-money-goals.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-money-goals.jpg' },
              { name: 'Money: Lend / Borrow', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-money-debts.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-money-debts.jpg' },
              { name: 'Money: Bank Accounts', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-money-accounts.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-money-accounts.jpg' },
              { name: 'Dashboard', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-dash.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-dash.jpg' },
              { name: 'Subscriptions', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-subs.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-subs.jpg' },
              { name: 'Plans & Tasks', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-plans.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-plans.jpg' },
              { name: 'Profile & Backup', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/light-desktop-safe.jpg', thumb: 'work/udaya/screens/thumbs/light-desktop-safe.jpg' }
            ]
          },
          {
            name: 'Desktop: Dark', type: 'folder',
            desc: 'Wide layout in dark mode.',
            files: [
              { name: 'Sign in', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-signin.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-signin.jpg' },
              { name: 'Home', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-home.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-home.jpg' },
              { name: 'Money: Overview', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-money.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-money.jpg' },
              { name: 'Money: Budget', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-money-budget.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-money-budget.jpg' },
              { name: 'Money: Savings Goals', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-money-goals.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-money-goals.jpg' },
              { name: 'Money: Lend / Borrow', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-money-debts.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-money-debts.jpg' },
              { name: 'Money: Bank Accounts', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-money-accounts.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-money-accounts.jpg' },
              { name: 'Dashboard', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-dash.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-dash.jpg' },
              { name: 'Subscriptions', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-subs.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-subs.jpg' },
              { name: 'Plans & Tasks', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-plans.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-plans.jpg' },
              { name: 'Profile & Backup', type: 'image', date: 'Nov 2026', src: 'work/udaya/screens/dark-desktop-safe.jpg', thumb: 'work/udaya/screens/thumbs/dark-desktop-safe.jpg' }
            ]
          }
        ]
      },
      { name: 'App Logo', type: 'image', src: 'work/udaya/logo.png' },
      { name: 'App Icon', type: 'image', src: 'work/udaya/icon-512.png' },
      { name: 'Live App', type: 'link', src: 'https://budget-72f91.web.app/' }
    ],
    link: { label: 'Open App', href: 'https://budget-72f91.web.app/' }
  },
  {
    client: 'SHM Technologies',
    tab: 'SHM',
    title: 'Social Media Creatives & Reels',
    category: 'Graphic Design & Video',
    year: 'Aug 2026 – Present',
    role: 'Graphic Designer & Video Editor',
    status: 'Ongoing',
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
