module.exports = {
    presets: ["@vue/app"],
    plugins: [
        [
            "import",
            { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }, "ant-design-vue"
        ],
        [
            'component',
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            },
            'element-ui'
        ],
        // [
        //     'import',
        //     {
        //         'libraryName': 'iview',
        //         'libraryDirectory': 'src/components'
        //     },
        //     'iview'
        // ],
    ]
};