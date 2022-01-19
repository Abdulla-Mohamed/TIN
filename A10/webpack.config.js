const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpaco = require("webpack");

const config =  {
    entry: path.resolve(__dirname,"./10A/entryPoint"),
    output: {
       path: path.resolve(__dirname, "bundle.js")
    },
    optimization: {
        minmize : true,
        minimizer: [new TerserPlugin()],
    }

};

module.exports = config;