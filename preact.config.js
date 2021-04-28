module.exports = (config, env, helpers) => {
	const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
	postCssLoaders.forEach(({ loader }) => {
		const plugins = loader.options.plugins;

		// Add tailwind css at the top.
		plugins.unshift(require('tailwindcss'));
	});

	if (process.env.NODE_ENV === 'production') {
		config.output.publicPath = '/v3-minesweeper/';
	}

	return config;
};
