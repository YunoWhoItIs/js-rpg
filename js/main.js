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
  // Start char creator, to be replaced with main menu
  cc.launch();
  cc.checkInput();
  cc.submitParty();
});
