describe('MRS.Client-Detector:', function () {
    'use strict';

    var setBrowser = function(userAgent, appName, appVersion) {
        var __originalNavigator = navigator;
        navigator = new Object();
        navigator.__proto__ = __originalNavigator;

        if (userAgent)
            navigator.__defineGetter__('userAgent', function(){
                return userAgent;
            });
        if (appName)
            navigator.__defineGetter__('appName', function(){
                return appName;
            });
        if (appVersion)
            navigator.__defineGetter__('appVersion', function(){
                return appVersion;
            });
    };
    
    describe('Windows - Chrome:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36",
                'Netscape',
                "5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36"
                );
            window.client.run();
        });
        
        it('should return windows OS 8.1', function () {
            expect(window.client.os).toBe('Windows');
            expect(window.client.osVersion).toBe('8.1');
        });

        it('should return Chrome 36.0.1985.143', function () {
            expect(window.client.browser).toBe('Chrome');
            expect(window.client.browserVersion).toBe('36.0.1985.143');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(false);
        });
        
    });
    
});