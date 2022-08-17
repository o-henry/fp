module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        ["@babel/preset-es2017"],
    ],
    plugins: [
        ["@babel/plugin-proposal-pipeline-operator", { topicToken: "^^" }],
    ],
};
