require.config({
    paths: {
        'jQuery': '../node_modules/jquery/dist/jquery.min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['charCreate', 'jQuery'], function(cc, $) {
  cc.launch();
});
