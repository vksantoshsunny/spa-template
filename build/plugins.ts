import * as path from "path";
import * as webpack from "webpack";

const plugins: webpack.Plugin[] = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // ignore optional dependencies    
    new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve("node-noop")), // Workaround for https://github.com/andris9/encoding/issues/16
]

export default plugins;
