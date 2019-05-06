module.exports = api =>{
    api.cache.never();// turn off caching

    return{
        presets: [ 
            [
                '@babel/preset-env',{
                    modules: false, // we don't want to trans js in Commet Modules
                }
            ],
            '@babel/preset-flow',
        ],
    }
}