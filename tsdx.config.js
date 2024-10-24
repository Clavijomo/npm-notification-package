const postcss = require('rollup-plugin-postcss');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                inject: true,
                minimize: true,
            })
        );
        return config;
    },
};
