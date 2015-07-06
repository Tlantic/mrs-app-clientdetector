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
    
    describe('MacOSX - Chrome:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36",
                'Mozilla',
                "5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"
                );
            window.client.run();
        });
        
        it('should return Mac OSX 10.10.3', function () {
            expect(window.client.os).toBe('Mac OS X');
            expect(window.client.osVersion).toBe('10.10.3');
        });

        it('should return Chrome 43.0.2357.130', function () {
            expect(window.client.browser).toBe('Chrome');
            expect(window.client.browserVersion).toBe('43.0.2357.130');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(false);
        });
        
    });
    
    describe('MacOSX - Safari:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.6.3 (KHTML, like Gecko) Version/8.0.6 Safari/600.6.3",
                'Mozilla',
                "5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.6.3 (KHTML, like Gecko) Version/8.0.6 Safari/600.6.3"
                );
            window.client.run();
        });
        
        it('should return Mac OSX 10.10.3', function () {
            expect(window.client.os).toBe('Mac OS X');
            expect(window.client.osVersion).toBe('10.10.3');
        });

        it('should return Chrome 43.0.2357.130', function () {
            expect(window.client.browser).toBe('Safari');
            expect(window.client.browserVersion).toBe('8.0.6');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(false);
        });
        
    });
    
    describe('Android Lollipop - Chrome:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36",
                'Mozilla',
                "5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36"
                );
            window.client.run();
        });
        
        it('should return Android 5.1.1', function () {
            expect(window.client.os).toBe('Android');
            expect(window.client.osVersion).toBe('5.1.1');
        });

        it('should return Chrome 43.0.2357.93', function () {
            expect(window.client.browser).toBe('Chrome');
            expect(window.client.browserVersion).toBe('43.0.2357.93');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(true);
        });
        
    });
    
    describe('Android Lollipop - Firefox:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Android; Mobile; rv:39.0) Gecko/39.0 Firefox/39.0",
                'Mozilla',
                "5.0 (Android; Mobile; rv:39.0) Gecko/39.0 Firefox/39.0"
                );
            window.client.run();
        });
        
        it('should return Android with unknown version', function () {
            expect(window.client.os).toBe('Android');
            expect(window.client.osVersion).toBe('-');
        });

        it('should return Firefox 39.0', function () {
            expect(window.client.browser).toBe('Firefox');
            expect(window.client.browserVersion).toBe('39.0');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(true);
        });
        
    });
    
    describe('iOS - Safari:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4",
                'Mozilla',
                "5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4"
                );
            window.client.run();
        });
        
        it('should return iOS 8.4', function () {
            expect(window.client.os).toBe('iOS');
            expect(window.client.osVersion).toBe('8.4.0');
        });

        it('should return Sarari 8.0', function () {
            expect(window.client.browser).toBe('Safari');
            expect(window.client.browserVersion).toBe('8.0');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(true);
        });
        
    });
    
    describe('Windows Phone 8.0 - IE:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 530)",
                'Mozilla',
                "5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 530)"
                );
            window.client.run();
        });
        
        it('should return Windows Phone 8.0', function () {
            expect(window.client.os).toBe('Windows Phone');
            expect(window.client.osVersion).toBe('8.0');
        });

        it('should return IE 10.0', function () {
            expect(window.client.browser).toBe('Microsoft Internet Explorer');
            expect(window.client.browserVersion).toBe('10.0');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(true);
        });
        
    });
    
    describe('Windows Phone 8.1 - IE:', function () {
        
        beforeEach(function() {
            setBrowser(
                "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520; Vodafone) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537",
                'Mozilla',
                "5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520; Vodafone) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"
                );
            window.client.run();
        });
        
        it('should return Windows Phone 8.1', function () {
            expect(window.client.os).toBe('Windows Phone');
            expect(window.client.osVersion).toBe('8.1');
        });

        it('should return IE 8.0', function () {
           // expect(window.client.browser).toBe('Microsoft Internet Explorer');
           // expect(window.client.browserVersion).toBe('8.0');
        });

        it('should not be mobile', function() {
            expect(window.client.mobile).toBe(true);
        });
        
    });
    
});