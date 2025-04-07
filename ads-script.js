window.googletag = window.googletag || { cmd: [] };

var anchor_slot;
var REFRESH_KEY = 'refresh';
var REFRESH_VALUE = 'true';

googletag.cmd.push(function () {
    //Size mapping
    var mapping_top = googletag.sizeMapping()
        .addSize([980, 200], [[970, 250], [970, 90]])
        .addSize([0, 0], [[320, 50], [320, 100]])
        .build();

    var mapping_middle = googletag.sizeMapping()
        .addSize([980, 200], [[728, 90], [300, 250], [336, 280]])
        .addSize([0, 0], [[320, 50], [320, 100], [300, 250], [336, 280]])
        .build();

    googletag.defineSlot('7542,40069432/parceiros/bebemamae', [[970, 250], [970, 90], [320, 50], [320, 100]], 'r7_header')
        .defineSizeMapping(mapping_top)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    googletag.defineSlot('/7542,40069432/parceiros/bebemamae', [[728, 90], [300, 250], [336, 280], [320, 50], [320, 100]], 'r7_texto_1')
        .defineSizeMapping(mapping_middle)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    googletag.defineSlot('/7542,40069432/parceiros/bebemamae', [[728, 90], [300, 250], [336, 280], [320, 50], [320, 100]], 'r7_texto_2')
        .defineSizeMapping(mapping_middle)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    googletag.defineSlot('/7542,40069432/parceiros/bebemamae', [[728, 90], [300, 250], [336, 280], [320, 50], [320, 100]], 'r7_texto_3')
        .defineSizeMapping(mapping_middle)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    googletag.defineSlot('/7542,40069432/parceiros/bebemamae', [[728, 90], [300, 250], [336, 280], [320, 50], [320, 100]], 'r7_texto_4')
        .defineSizeMapping(mapping_middle)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    googletag.defineSlot('/7542,40069432/parceiros/bebemamae', [[728, 90], [300, 250], [336, 280], [320, 50], [320, 100]], 'r7_texto_5')
        .defineSizeMapping(mapping_middle)
        .setTargeting(REFRESH_KEY, REFRESH_VALUE)
        .setTargeting('refreshed_slot', 'false')
        .addService(googletag.pubads());

    anchor_slot = googletag.defineOutOfPageSlot('/7542,40069432/parceiros/bebemamae', googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR);

    if (anchor_slot) {
        anchor_slot.setTargeting(REFRESH_KEY, REFRESH_VALUE).setTargeting('refreshed_slot', 'false').addService(googletag.pubads());
    } else { }

    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
    googletag.pubads().addEventListener('impressionViewable', function (event) {
        var slot = event.slot;
        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
            slot.setTargeting('refreshed_slot', 'true');
            setTimeout(function () {
                googletag.pubads().refresh([slot]);
            }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
        }
    });

    googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 100,
        renderMarginPercent: 100,
        mobileScaling: 2.0
    });

    //googletag.pubads().set('page_url', 'bebemamae.com');
    googletag.pubads().setTargeting('executed', 'ads');
    googletag.pubads().setCentering(true);
    googletag.enableServices();

    googletag.display(anchor_slot);
});

function appendAd(adUnitID) {
    var existingDiv = document.getElementById(adUnitID);

    if (existingDiv) {
        googletag.cmd.push(function () {
            googletag.display(adUnitID);
        });
    }
}

appendAd('r7_header');
appendAd('r7_texto_1');
appendAd('r7_texto_2');
appendAd('r7_texto_3');
appendAd('r7_texto_4');
appendAd('r7_texto_5');