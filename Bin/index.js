(async () => {
    const thingtosearch = process.argv.slice(2).join(' ')
    const TorrentSearchApi = require('torrent-search-api');
    TorrentSearchApi.enableProvider('ThePirateBay');
    const magnet = await TorrentSearchApi.search(thingtosearch);
    console.log(magnet);
    TorrentSearchApi.disableAllProviders();
})();