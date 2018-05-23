exports.default = function (distFolder) {
    if (process.env.NODE_ENV !== 'production') {
        // const DIST_MATCHER = /[\/\\]dist[\/\\]/
        const DIST_MATCHER = new RegExp(`\/${distFolder}\/`)
        const chokidar = require('chokidar')
        const watcher = chokidar.watch('./dist')
        watcher.on('ready', function () {
            watcher.on('all', function () {
                console.log(`Clearing ${distFolder} module cache from server`)
                Object.keys(require.cache).forEach(function (id) {
                    if (DIST_MATCHER.test(id)){
                        delete require.cache[id]
                    }
                })
            })
        })
    }
}
