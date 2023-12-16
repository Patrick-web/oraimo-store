import { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts";

import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const document = new DOMParser().parseFromString(
    `<!doctype html>
<html lang="en">
    <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">
        <script>
    var BASE_URL = 'https\u003A\u002F\u002Fke.oraimo.com\u002F';
    var require = {
        'baseUrl': 'https\u003A\u002F\u002Fstatic.ke.oraimo.com\u002Fversion1695696274\u002Ffrontend\u002FMaijindou\u002Foraimo\u002Fen_US'
    };</script>        <meta charset="utf-8"/>
<meta name="title" content="oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale"/>
<meta name="description" content="oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale Product Parameters:
Battery Type: AAA Dry batteryRated voltage: DC 4.5VMaterial: Tempered glass/Stainless steel/ABS

Product Features:
High-precision Sensors-Real-time Data Feedback
orai"/>
<meta name="keywords" content="oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale"/>
<meta name="robots" content="INDEX,FOLLOW"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="format-detection" content="telephone=no"/>
<title>oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale</title>
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/mage/calendar.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/css/styles-m.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Amasty_Affiliate/css/default.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Amasty_Base/vendor/slick/amslick.min.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Amasty_Rewards/css/balance.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_Core/css/owl.carousel.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_Core/css/owl.theme.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_DailyDeal/css/widget.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Webkul_SpinToWin/css/main.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Webkul_SpinToWin/css/style.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/WeltPixel_OwlCarouselSlider/css/owl.carousel.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/mage/gallery/gallery.css" />
<link  rel="stylesheet" type="text/css"  media="all" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Amasty_Rewards/css/checkout.css" />
<link  rel="stylesheet" type="text/css"  media="screen and (min-width: 768px)" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/css/styles-l.css" />
<link  rel="stylesheet" type="text/css"  media="print" href="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/css/print.css" />
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/./byteh5bridge.aio.min.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/requirejs/require.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/mage/requirejs/mixins.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/requirejs-config.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/miniprogram/index.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_SocialShare/js/thankskit.js"></script>
<script  type="text/javascript"  src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Webkul_SpinToWin/js/main.js"></script>
<script  type="text/javascript"  src="https://static.addtoany.com/menu/page.js"></script>
<link  rel="icon" type="image/x-icon" href="https://media.ke.oraimo.com/favicon/stores/1/e6f1ae92-5b4b-4a65-9996-387e720d5d8f.png" />
<link  rel="shortcut icon" type="image/x-icon" href="https://media.ke.oraimo.com/favicon/stores/1/e6f1ae92-5b4b-4a65-9996-387e720d5d8f.png" />
<!-- Facebook Pixel Code -->
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1369280940101297');
    fbq('track', 'PageView');
</script>
<noscript>
    < img height="1" width="1"
    src="https://www.facebook.com/tr?id=1369280940101297&ev=PageView
    &noscript=1"/>
</noscript>

<!-- End Facebook Pixel Code -->
<!-- Twitter conversion tracking base code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','ofnt5');
</script>
<!-- End Twitter conversion tracking base code -->
<!-- Snap Pixel Code -->
<script type='text/javascript'>
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');
</script>
<!-- End Snap Pixel Code -->
<style>
@keyframes marqueeAnim {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>                <script>
        window.getWpCookie = function(name) {
            match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')) ;
        };

        window.dataLayer = window.dataLayer || [];
                var dlObjects = [{"ecommerce":{"detail":{"products":[{"name":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","id":"OPC-SC20","price":"2200.00","category":"Product\/Lifestyle"}]},"currencyCode":"KES"}}];
        for (var i in dlObjects) {
            window.dataLayer.push(dlObjects[i]);
        }
                var wpCookies = ['wp_customerId','wp_customerGroup'];
        wpCookies.map(function(cookieName) {
            var cookieValue = window.getWpCookie(cookieName);
            if (cookieValue) {
                var dlObject = {};
                dlObject[cookieName.replace('wp_', '')] = cookieValue;
                window.dataLayer.push(dlObject);
            }
        });
    </script>

    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJQHM3F');</script>
<!-- End Google Tag Manager -->            <script>
        window.getWpGA4Cookie = function(name) {
            match = document.cookie.match(new RegExp(name + '=([^;]+)'));
            if (match) return decodeURIComponent(match[1].replace(/\+/g, ' ')) ;
        };

        window.dataLayer = window.dataLayer || [];
                var dl4Objects = [{"pageName":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","pageType":"product","ecommerce":{"items":[{"item_name":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","item_id":"OPC-SC20","price":"2200.00","item_category":"Product","item_category2":"Lifestyle","currency":"KES","item_stock_status":"Out of stock","item_sale_product":"No","item_reviews_count":"50","item_reviews_score":"4.6"}]},"event":"view_item"}];
        for (var i in dl4Objects) {
            window.dataLayer.push({ecommerce: null});
            window.dataLayer.push(dl4Objects[i]);
        }
                var wpGA4Cookies = ['wp_ga4_customerId','wp_ga4_customerGroup'];
        wpGA4Cookies.map(function(cookieName) {
            var cookieValue = window.getWpGA4Cookie(cookieName);
            if (cookieValue) {
                var dl4Object = {};
                dl4Object[cookieName.replace('wp_ga4_', '')] = cookieValue;
                window.dataLayer.push(dl4Object);
            }
        });
    </script>

    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KN7L7QK');</script>
<!-- End Google Tag Manager -->    <script type="text/x-magento-init">
        {
            "*": {
                "Magento_PageCache/js/form-key-provider": {}
            }
        }
    </script>

<meta property="og:type" content="product" />
<meta property="og:title"
      content="oraimo&#x20;SmartScale&#x20;18&#x20;Key&#x20;Fitness&#x20;Metrics&#x20;Body&#x20;Fat&#x20;Weight&#x20;Scale" />
<meta property="og:image"
      content="https://media.ke.oraimo.com/catalog/product/cache/ba61974f671a28b31e237250b6f766d9/o/p/opc-sc20_680_-07.jpg" />
<meta property="og:description"
      content="oraimo&#x20;Guarantee&#x3A;&#x20;&#x0D;&#x0A;Cash&#x20;On&#x20;Delivery&#x0D;&#x0A;Free&#x20;Delivery&#x20;Above&#x20;1500Ksh&#x0D;&#x0A;Carlcare&#x20;Warranty&#x0D;&#x0A;Delivery&#x20;Time&#xFF1A;2&#x20;-&#x20;7&#x20;working&#x20;days" />
<meta property="og:url" content="https://ke.oraimo.com/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html" />
    <meta property="product:price:amount" content="2200"/>
    <meta property="product:price:currency"
      content="KES"/>
    </head>
    <body data-container="body"
          data-mage-init='{"loaderAjax": {}, "loader": { "icon": "https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/images/loader-2.gif"}}'
        id="html-body" itemtype="http://schema.org/Product" itemscope="itemscope" class="catalog-product-view product-oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale page-layout-1column">
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJQHM3F"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --><!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KN7L7QK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="cookie-status">
    The store will not work correctly in the case when cookies are disabled.</div>
<script type="text&#x2F;javascript">document.querySelector("#cookie-status").style.display = "none";</script>
<script type="text/x-magento-init">
    {
        "*": {
            "cookieStatus": {}
        }
    }
</script>

<script type="text/x-magento-init">
    {
        "*": {
            "mage/cookies": {
                "expires": null,
                "path": "\u002F",
                "domain": ".ke.oraimo.com",
                "secure": false,
                "lifetime": "86400"
            }
        }
    }
</script>
    <noscript>
        <div class="message global noscript">
            <div class="content">
                <p>
                    <strong>JavaScript seems to be disabled in your browser.</strong>
                    <span>
                        For the best experience on our site, be sure to turn on Javascript in your browser.                    </span>
                </p>
            </div>
        </div>
    </noscript>

<script>
    window.cookiesConfig = window.cookiesConfig || {};
    window.cookiesConfig.secure = true;
</script><script>    require.config({
        map: {
            '*': {
                wysiwygAdapter: 'mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter'
            }
        }
    });</script>
<div class="page-wrapper"><header class="page-header"><div class="marquee-root" style="width: 100%; height: 40px; text-align: left; overflow: hidden; background-color: #82e600;">
<div class="top-header marquee-content" style="white-space: nowrap; display: inline-block; animation: marqueeAnim 15s linear 0s infinite; background-color: none; color: #333333; font-weight: 800;">Free shipping for orders over KES1500. Any other questions? Contact us at <a href="mailto:Care.ke@oraimo.com">Care.ke@oraimo.com</a></div>
</div><div class="header content"><div class="logo-container"><span data-action="toggle-nav" class="action nav-toggle"><span>Toggle Nav</span></span>
<a
    class="logo"
    href="https://ke.oraimo.com/"
    title=""
    aria-label="store logo">
    <img src="https://media.ke.oraimo.com/logo/stores/1/oraimo_logo2.0.png"
         title=""
         alt=""
            width="170"                />
</a>
</div><div class="wrapper-toolbar"><!--<div class="search-btn"></div>-->
<style>
    #search::-webkit-input-placeholder{
        font-size: 12px;
    }
    #search::-moz-placeholder{   /* Mozilla Firefox 19+ */
        font-size: 12px;
    }
    #search:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        font-size: 12px;
    }
    #search:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        font-size: 12px;
    }
</style>
<div class="block block-search">
    <div class="block block-content">
        <form class="form minisearch" id="search_mini_form"
              action="https://ke.oraimo.com/catalogsearch/result/" method="get">
            <div class="field search">
                <label class="label" for="search" data-role="minisearch-label">
                    <span>Search</span>
                </label>
                <div class="control">
                    <input id="search"
                                                    data-mage-init='{"quickSearch":{
                                    "formSelector":"#search_mini_form",
                                    "url":"https://ke.oraimo.com/search/ajax/suggest/",
                                    "destinationSelector":"#search_autocomplete",
                                    "minSearchLength":"3"}
                               }'
                                                   type="text"
                           name="q"
                           value=""
                           placeholder="Search&#x20;oraimo&#x20;products"
                           class="input-text"
                           maxlength="128"
                           role="combobox"
                           aria-haspopup="false"
                           aria-autocomplete="both"
                           aria-expanded="false"/>
                    <div id="search_autocomplete" class="search-autocomplete"></div>
                </div>
            </div>
            <div class="actions">
                <button type="submit"
                        title="Search"
                        class="action search"
                        aria-label="Search"
                >
                    <span>Search</span>
                </button>
            </div>
        </form>
    </div>
</div>

<script>
    require(['jquery'],function ($) {
        $("#search_mini_form").unbind().click(function (e) {
            $(this).addClass("active");
            $(this).find(".label").eq(0).addClass("active");
            e.stopPropagation();
        });
        $(document).click(function (event) {
            $("#search_mini_form").removeClass("active");
            $("#search_mini_form .label").removeClass("active");
        })
    })
</script>

<div data-block="minicart" class="minicart-wrapper">
    <a class="action showcart" href="https://ke.oraimo.com/checkout/cart/"
       data-bind="scope: 'minicart_content'">
        <span class="text">My Cart</span>
        <span class="counter qty empty"
              data-bind="css: { empty: !!getCartParam('summary_count') == false && !isLoading() },
               blockLoader: isLoading">
            <span class="counter-number"><!-- ko text: getCartParam('summary_count') --><!-- /ko --></span>
            <span class="counter-label">
            <!-- ko if: getCartParam('summary_count') -->
                <!-- ko text: getCartParam('summary_count') --><!-- /ko -->
                <!-- ko i18n: 'items' --><!-- /ko -->
            <!-- /ko -->
            </span>
        </span>
    </a>
            <div class="block block-minicart"
             data-role="dropdownDialog"
             data-mage-init='{"dropdownDialog":{
                "appendTo":"[data-block=minicart]",
                "triggerTarget":".showcart",
                "timeout": "2000",
                "closeOnMouseLeave": false,
                "closeOnEscape": true,
                "triggerClass":"active",
                "parentClass":"active",
                "buttons":[]}}'>
            <div id="minicart-content-wrapper" data-bind="scope: 'minicart_content'">
                <!-- ko template: getTemplate() --><!-- /ko -->
            </div>
                    </div>
        <script>window.checkout = {"shoppingCartUrl":"https:\/\/ke.oraimo.com\/checkout\/cart\/","checkoutUrl":"https:\/\/ke.oraimo.com\/checkout\/","updateItemQtyUrl":"https:\/\/ke.oraimo.com\/checkout\/sidebar\/updateItemQty\/","removeItemUrl":"https:\/\/ke.oraimo.com\/checkout\/sidebar\/removeItem\/","imageTemplate":"Magento_Catalog\/product\/image_with_borders","baseUrl":"https:\/\/ke.oraimo.com\/","minicartMaxItemsVisible":5,"websiteId":"1","maxItemsToDisplay":10,"storeId":"1","storeGroupId":"1","customerLoginUrl":"https:\/\/ke.oraimo.com\/customer\/account\/login\/referer\/aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw%2C\/","isRedirectRequired":false,"autocomplete":"off","captcha":{"user_login":{"isCaseSensitive":false,"imageHeight":50,"imageSrc":"","refreshUrl":"https:\/\/ke.oraimo.com\/captcha\/refresh\/","isRequired":false,"timestamp":1702366812}}}</script>    <script type="text/x-magento-init">
    {
        "[data-block='minicart']": {
            "Magento_Ui/js/core/app": {"components":{"minicart_content":{"children":{"subtotal.container":{"children":{"subtotal":{"children":{"subtotal.totals":{"config":{"display_cart_subtotal_incl_tax":0,"display_cart_subtotal_excl_tax":1,"template":"Magento_Tax\/checkout\/minicart\/subtotal\/totals"},"children":{"subtotal.totals.msrp":{"component":"Magento_Msrp\/js\/view\/checkout\/minicart\/subtotal\/totals","config":{"displayArea":"minicart-subtotal-hidden","template":"Magento_Msrp\/checkout\/minicart\/subtotal\/totals"}}},"component":"Magento_Tax\/js\/view\/checkout\/minicart\/subtotal\/totals"}},"component":"uiComponent","config":{"template":"Magento_Checkout\/minicart\/subtotal"}}},"component":"uiComponent","config":{"displayArea":"subtotalContainer"}},"item.renderer":{"component":"Magento_Checkout\/js\/view\/cart-item-renderer","config":{"displayArea":"defaultRenderer","template":"Magento_Checkout\/minicart\/item\/default"},"children":{"item.image":{"component":"Magento_Catalog\/js\/view\/image","config":{"template":"Magento_Catalog\/product\/image","displayArea":"itemImage"}},"checkout.cart.item.price.sidebar":{"component":"uiComponent","config":{"template":"Magento_Checkout\/minicart\/item\/price","displayArea":"priceSidebar"}}}},"extra_info":{"component":"uiComponent","config":{"displayArea":"extraInfo"}},"promotion":{"component":"uiComponent","config":{"displayArea":"promotion"}}},"config":{"itemRenderer":{"default":"defaultRenderer","simple":"defaultRenderer","virtual":"defaultRenderer"},"template":"Magento_Checkout\/minicart\/content"},"component":"Magento_Checkout\/js\/view\/minicart"}},"types":[]}        },
        "*": {
            "Magento_Ui/js/block-loader": "https\u003A\u002F\u002Fstatic.ke.oraimo.com\u002Fversion1695696274\u002Ffrontend\u002FMaijindou\u002Foraimo\u002Fen_US\u002Fimages\u002Floader\u002D1.gif"
        }
    }
    </script>
</div>
    <div class="account-link-box" data-label="or">
        <a href="https://ke.oraimo.com/customer/account/login/referer/aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw%2C/"            >Sign In</a>
    </div>
</div>    <div class="sections nav-sections">
                <div class="section-items nav-sections-items"
             data-mage-init='{"tabs":{"openedState":"active"}}'>
                                            <div class="section-item-title nav-sections-item-title"
                     data-role="collapsible">
                    <a class="nav-sections-item-switch"
                       data-toggle="switch" href="#store.menu">
                        Menu                    </a>
                </div>
                <div class="section-item-content nav-sections-item-content"
                     id="store.menu"
                     data-role="content">
                    <style>
    .page-header .footer-links,
    .page-header .copyright-box {
        display: none !important;
    }
</style>
<nav class="navigation" data-action="navigation">
    <ul data-mage-init='{"menu":{"responsive":true, "position":{"my":"left top","at":"left bottom"}}}'>
        <li class="level0 nav-1 category-item first level-top ui-menu-item"><a href="https://ke.oraimo.com/" class="level-top ui-corner-all"><span>Home</span></a></li>
                                                        <li class="level0 nav-1 category-item level-top ui-menu-item " role="presentation">
                    <a href="https://ke.oraimo.com/oraimo-daily-deals.html" id="ui-id-26" class="level-top ui-corner-all 1231" aria-haspopup="true" tabindex="-1" role="menuitem">
                                                <span>Daily Deals</span>
                    </a>
                                    </li>
                                                            <li class="level0 nav-1 category-item level-top ui-menu-item parent" role="presentation">
                    <a href="javascript:void(0)" id="ui-id-25" class="level-top ui-corner-all 1231" aria-haspopup="true" tabindex="-1" role="menuitem">
                                                    <span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span>
                                                <span>Product</span>
                    </a>
                                            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" aria-expanded="false" aria-hidden="true">
                            <div class="nav-box">
                                                                <li class="level1 level-2 category-item ui-menu-item parent" role="presentation">
                                    <img src="https://media.ke.oraimo.com/catalog/category/power_1_1.jpg" class="menu-img" />
                                    <a href="https://ke.oraimo.com/products/power.html" id="ui-id-5" aria-haspopup="true" class="ui-corner-all level-top" tabindex="-1" role="menuitem">
                                                                                    <span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span>
                                                                                <span>Power</span>
                                    </a>
                                                                            <ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" aria-expanded="false" aria-hidden="true">
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/power-banks.html" id="ui-id-15" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Power Banks</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/wall-chargers.html" id="ui-id-16" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Wall Chargers</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/cable.html" id="ui-id-17" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Cable</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/car-chargers.html" id="ui-id-14" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Car Chargers</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/power-strip.html" id="ui-id-18" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Power Strip</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/power/solar-generator.html" id="ui-id-55" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Solar Generator</span></a>
                                            </li>
                                                                                </ul>
                                                                    </li>
                                                                <li class="level1 level-2 category-item ui-menu-item parent" role="presentation">
                                    <img src="https://media.ke.oraimo.com/catalog/category/audio_1.jpg" class="menu-img" />
                                    <a href="https://ke.oraimo.com/products/audio.html" id="ui-id-6" aria-haspopup="true" class="ui-corner-all level-top" tabindex="-1" role="menuitem">
                                                                                    <span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span>
                                                                                <span>Audio</span>
                                    </a>
                                                                            <ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" aria-expanded="false" aria-hidden="true">
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/wireless-stereo-earbuds.html" id="ui-id-12" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Wireless Stereo Earbuds</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/wireless-speakers.html" id="ui-id-23" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Wireless Speakers</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/wireless-earphones.html" id="ui-id-31" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Sport Wireless Earphones</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/open-ear.html" id="ui-id-10" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Open-ear Wireless Headphones</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/wireless-headphones.html" id="ui-id-11" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Wireless Headphones</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/audio/wired-earphones.html" id="ui-id-13" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Wired Earphones</span></a>
                                            </li>
                                                                                </ul>
                                                                    </li>
                                                                <li class="level1 level-2 category-item ui-menu-item parent" role="presentation">
                                    <img src="https://media.ke.oraimo.com/catalog/category/lifestyle.jpg" class="menu-img" />
                                    <a href="https://ke.oraimo.com/products/lifestyle.html" id="ui-id-8" aria-haspopup="true" class="ui-corner-all level-top" tabindex="-1" role="menuitem">
                                                                                    <span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span>
                                                                                <span>Lifestyle</span>
                                    </a>
                                                                            <ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" aria-expanded="false" aria-hidden="true">
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/shaving-hair-removal.html" id="ui-id-39" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Shaving & Hair Removal</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/electric-toothbrush.html" id="ui-id-30" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Electric Toothbrushes</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/home-appliances.html" id="ui-id-53" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Home Appliances</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/smart-light-bulbs.html" id="ui-id-48" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Smart Light Bulbs</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/keyboard.html" id="ui-id-43" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mice & Keyboards</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/mirror.html" id="ui-id-50" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Beauty Tools & Accessories</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/vacuums.html" id="ui-id-42" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Vacuums</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/backpack.html" id="ui-id-41" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span> Backpacks</span></a>
                                            </li>
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/lifestyle/mi-fi.html" id="ui-id-51" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Mi-Fi</span></a>
                                            </li>
                                                                                </ul>
                                                                    </li>
                                                                <li class="level1 level-2 category-item ui-menu-item parent" role="presentation">
                                    <img src="https://media.ke.oraimo.com/catalog/category/wearable_1.jpg" class="menu-img" />
                                    <a href="https://ke.oraimo.com/products/wearable.html" id="ui-id-7" aria-haspopup="true" class="ui-corner-all level-top" tabindex="-1" role="menuitem">
                                                                                    <span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span>
                                                                                <span>Wearable</span>
                                    </a>
                                                                            <ul class="level1 submenu ui-menu ui-widget ui-widget-content ui-corner-all" role="menu" aria-expanded="false" aria-hidden="true">
                                                                                    <li class="level2 category-item ui-menu-item" role="presentation">
                                                <a href="https://ke.oraimo.com/products/wearable/smart-watches.html" id="ui-id-19" aria-haspopup="true" class="ui-corner-all" tabindex="-1" role="menuitem"><span>Smart Watches</span></a>
                                            </li>
                                                                                </ul>
                                                                    </li>
                                                            </div>
                        </ul>
                                    </li>
                                                                                                                                                                                                                                                                                    <li class="level0 nav-1 category-item level-top ui-menu-item" style="display: none"><a href="https://ke.oraimo.com/forum/" class="level-top ui-corner-all">Community</a></li>
                <li class="level0 nav-1 category-item last level-top ui-menu-item parent support" style="position:relative;">
            <a href="#" class="level-top ui-corner-all"><span class="ui-menu-icon ui-icon ui-icon-carat-1-e"></span><span>Support</span></a>
            <ul class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all">
<li class="level1">
<div class="mobile-menu" style="font-weight: normal;">Track Order</div>
<a href="https://ke.oraimo.com/shippingm/track"><img src="https://media.ke.oraimo.com/wysiwyg/cms/s1.png" alt=""></a></li>
<li class="level1">
<div class="mobile-menu" style="font-weight: normal;">Visit Carlcare</div>
<a href="https://www.carlcare.com/ke/" target="_blank" rel="noopener"><img src="https://media.ke.oraimo.com/wysiwyg/cms/s2.png" alt=""></a></li>
</ul>        </li>
                        <li class="level0 nav-1 category-item last level-top ui-menu-item"><a href="https://ke.oraimo.com/smarter-life.html" class="level-top ui-corner-all"><span>Smarter Life+</span></a></li>
                            </ul>
</nav>

<script>
    require(['jquery'],function ($) {
        $(document).on("click",".drop-title",function () {
            if($(this).parent(".links-items").hasClass("active")) {
                $(this).parent(".links-items").removeClass("active")
            }
            else {
                $(this).parent(".links-items").addClass("active")
            }
        })
    })
</script>
                </div>
                                    </div>
    </div>
</div><div class="top-promotion">
<div id="top-promotion" class="promotion-list  owl-carousel owl-theme">
<div class="promotion-item"><img src="https://media.ke.oraimo.com/wysiwyg/cms/shipping.png" alt="">Fast, Free Shipping over <span id="fsb_symbol">KES</span><span id="fsb_amount">1500</span></div>
<div class="promotion-item"><img src="https://media.ke.oraimo.com/wysiwyg/cms/refund.png" alt="">Cash on Delivery</div>
<div class="promotion-item"><img src="https://media.ke.oraimo.com/wysiwyg/cms/save.png" alt="">Hassle-Free Warranty</div>
</div>
</div></header><main id="maincontent" class="page-main"><a id="contentarea" tabindex="-1"></a>
<div class="page messages"><div data-placeholder="messages"></div>
<div data-bind="scope: 'messages'">
    <!-- ko if: cookieMessages && cookieMessages.length > 0 -->
    <div aria-atomic="true" role="alert" data-bind="foreach: { data: cookieMessages, as: 'message' }" class="messages">
        <div data-bind="attr: {
            class: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }">
            <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
        </div>
    </div>
    <!-- /ko -->

    <!-- ko if: messages().messages && messages().messages.length > 0 -->
    <div aria-atomic="true" role="alert" class="messages" data-bind="foreach: {
        data: messages().messages, as: 'message'
    }">
        <div data-bind="attr: {
            class: 'message-' + message.type + ' ' + message.type + ' message',
            'data-ui-id': 'message-' + message.type
        }">
            <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
        </div>
    </div>
    <!-- /ko -->
</div>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Ui/js/core/app": {
                "components": {
                        "messages": {
                            "component": "Magento_Theme/js/view/messages"
                        }
                    }
                }
            }
    }
</script>
</div><div class="columns"><div class="column main">

<div class="product-info-main"><div class="title-wrapper"><div class="page-title-wrapper&#x20;product">
    <h1 class="page-title"
                >
        <span class="base" data-ui-id="page-title-wrapper" itemprop="name">oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale</span>    </h1>
    </div>
</div><div class="product-info-price">        <div class="product-reviews-summary" itemprop="aggregateRating" itemscope
         itemtype="http://schema.org/AggregateRating">
                    <div class="rating-summary">
                <span class="label"><span>Rating:</span></span>
                <div class="rating-result" title="4.6">
                 <span>
                     <span>
                         <span itemprop="ratingValue">92                         </span>% of <span itemprop="bestRating">100</span>
                     </span>
                 </span>
                </div>
            </div>
            <script type="text&#x2F;javascript">var elem6V33luwL = document.querySelector('div.rating-summary div.rating-result>span:first-child');
if (elem6V33luwL) {
elem6V33luwL.style.width = '92%';
}</script>                <div class="reviews-actions">
            <a class="action view"
               href="https://ke.oraimo.com/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html#reviews">
                <span itemprop="reviewCount">445</span>&nbsp;
                <span>Reviews                </span>
            </a>
            <a class="action add" href="https://ke.oraimo.com/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html#review-form" id="to-review">
                Add Your Review            </a>
        </div>
    </div>
<script>
    require(['jquery'],function ($) {
        $("#to-review").on("click",function () {
            $("#tab-label-reviews").click()
            return false
        })
    })
</script>
<div class="price-box price-final_price" data-role="priceBox" data-product-id="148" data-price-box="product-id-148">
    <span class="special-price">


<span class="price-container price-final_price&#x20;tax&#x20;weee"
         itemprop="offers" itemscope itemtype="http://schema.org/Offer">
            <span class="price-label">Special Price</span>
        <span  id="product-price-148"                data-price-amount="2200"
        data-price-type="finalPrice"
        class="price-wrapper "
    ><span class="price">KES2,200</span></span>
                <meta itemprop="price" content="2200" />
        <meta itemprop="priceCurrency" content="KES" />
    </span>
    </span>
    <span class="old-price">


<span class="price-container price-final_price&#x20;tax&#x20;weee"
        >
        <span  id="old-price-148"                data-price-amount="3100"
        data-price-type="oldPrice"
        class="price-wrapper "
    ><span class="price">KES3,100</span></span>
        </span>
    </span>

</div></div>
<div data-bind="scope: 'amasty-rewards-highlight-catalog'">
    <div class="amasty-rewards-loader" data-bind="visible: loader" style="display: none;">
        <img src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Amasty_Rewards/images/ajax-loader.gif" />
    </div>
    <!-- ko template: getTemplate() --><!-- /ko -->
    <script type="text/x-magento-init">
        {
            "*": {
                "Magento_Ui/js/core/app": {"components":[]}            }
        }
    </script>
</div>
<div id="mp-dailydeal-block" class="mp-dailydeal-block">
                </div>

<div class="product-add-form">
    <form data-product-sku="OPC-SC20"
          action="https://ke.oraimo.com/checkout/cart/add/uenc/aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw%2C/product/148/" method="post"
          id="product_addtocart_form">
        <input type="hidden" name="product" value="148" />
        <input type="hidden" name="selected_configurable_option" value="" />
        <input type="hidden" name="related_product" id="related-products-field" value="" />
        <input type="hidden" name="item"  value="148" />
        <input name="form_key" type="hidden" value="z16LYiFwVLmvBYmm" />                                <div class="box-tocart">
        <div class="fieldset">
            <div class="actions">
                <button type="submit"
                        title="Add&#x20;to&#x20;Cart"
                        class="action primary tocart"
                        id="product-addtocart-button" disabled>
                    <span>Out of Stock</span>
                </button>
            </div>
        </div>
    </div>
<div class="wish-share-box" style="padding: 0">
    <div class="wish-box">
        <div class="cart-care-container">

                <a href="#"
           class="action towishlist"
           data-post='{"action":"https:\/\/ke.oraimo.com\/wishlist\/index\/add\/","data":{"product":148,"uenc":"aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw,"}}'
           data-action="add-to-wishlist"><span>Add to Wish List</span></a>
        <script>
            require(['jquery'],function ($) {
                $('[data-action="add-to-wishlist"]').on('click', function (event) {
                    localStorage.setItem('isWish',true)
                })
            })
        </script>
    <script type="text/x-magento-init">
    {
        "body": {
            "addToWishlist": {"productType":"simple"}        }
    }
</script>
<div class="cart-care-box">
				<strong>Worry-Free Guarantee</strong>
				<a href="javascript:;" class="cart-care-image" data-action="open-cart-care-tip">
					<img src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_SocialShare/images/cc.png" alt="Cart Care" />
					<span>?</span>
				</a>
				<div class="cart-care-tip">
                    <div class="cart-care-tip-bg" data-action="close-cart-care-tip"></div>
					<p>
						<button type="button" data-action="close-cart-care-tip">
							<img src="https://static.ke.oraimo.com/version1695696274/frontend/Maijindou/oraimo/en_US/Mageplaza_SocialShare/images/close.svg" alt="Close" />
						</button>
						<span>
                            As the official after-sales service brand of oraimo, Carlcare provides nationwide offline service centers for worry-free support. If you encounter any quality issues with your oraimo product during the warranty period, contact the nearest Carlcare service center (<a href="https://www.carlcare.com/global/service-center">https://www.carlcare.com/global/service-center</a>) for professional repair or replacement services.<br />
                            <a href="/how-to-claim-the-oraimo-warranty">How it works?</a>
                        </span>
					</p>
				</div>
			</div>
			<script>
				require(['jquery'], function($) {
					$('[data-action="open-cart-care-tip"]').on('click', function(event) {
						event.preventDefault();

						if (window.innerWidth > 767) {
							return;
						}

						$('.cart-care-box .cart-care-tip').addClass('visible');
					});

					$('[data-action="close-cart-care-tip"]').on('click', function(event) {
						event.preventDefault();
						$('.cart-care-box .cart-care-tip').removeClass('visible');
					});
				});
			</script>
		</div>


    </div>
</div>
<script type="text/x-magento-init">
    {
        "#product_addtocart_form": {
            "Magento_Catalog/js/validate-product": {}
        }
    }
</script>
<script>
    require(['jquery'],function ($) {

        $(document).on("click","#review-form label[class^='rating-']",function () {
            var vim = $(this)
            vim.prev("input").attr("checked",'checked')
        })
        $(document).on("click","#review-form button[type='submit']",function () {
            $("#review-form").submit()
        })
        $(document).on("click",".btn",function () {
            if($(this).hasClass("increase")) {
                var val = parseInt($(this).prev(".qty").val())
                if(isNaN(val)) {
                    $(this).prev(".qty").val('1')
                }
                else {
                    $(this).prev(".qty").val(val+1)
                }
            }
            else if($(this).hasClass("decrease")) {
                var val = parseInt($(this).next(".qty").val())
                if(isNaN(val)) {
                    $(this).next(".qty").val('1')
                }
                else {
                    if(val > 1) {
                        $(this).next(".qty").val(val-1)
                    }
                    else {
                        $(this).next(".qty").val('1')
                    }
                }
            }
        })
    })
</script>

                    </form>
</div>

<script type="text/x-magento-init">
    {
        "[data-role=priceBox][data-price-box=product-id-148]": {
            "priceBox": {
                "priceConfig":  {"productId":"148","priceFormat":{"pattern":"KES%s","precision":0,"requiredPrecision":0,"decimalSymbol":".","groupSymbol":",","groupLength":3,"integerRequired":false}}            }
        }
    }
</script>

<div class="product attribute overview">
        <div class="value" itemprop="description"><div><strong><span class="text-only" data-eleid="3">oraimo Guarantee:</span> </strong></div>
<div><span class="text-only" data-eleid="5">Cash On Delivery</span></div>
<div><span class="text-only" data-eleid="7">Free Delivery Above 1500Ksh</span></div>
<div><span class="text-only" data-eleid="9">Carlcare Warranty</span></div>
<div><span class="text-only" data-eleid="11">Delivery Time：2 - 7 working days</span></div></div>
</div>
</div><div class="product media"><a id="gallery-prev-area" tabindex="-1"></a>
<div class="action-skip-wrapper"><a class="action skip gallery-next-area"
   href="#gallery-next-area">
    <span>
        Skip to the end of the images gallery    </span>
</a>
</div>

<div class="gallery-placeholder _block-content-loading" data-gallery-role="gallery-placeholder">
    <img
        alt="main product photo"
        class="gallery-placeholder__image"
        src="https://media.ke.oraimo.com/catalog/product/cache/260d56349d48a602b23f9645dee29150/o/p/opc-sc20_680_-07.jpg"
    />
</div>

<script type="text/x-magento-init">
    {
        "[data-gallery-role=gallery-placeholder]": {
            "mage/gallery/gallery": {
                "mixins":["magnifier/magnify"],
                "magnifierOpts": {"fullscreenzoom":"20","top":"","left":"","width":"","height":"","eventType":"hover","enabled":false},
                "data": [{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-07.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-07.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-07.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"0","isMain":true,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20.jpeg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20.jpeg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20.jpeg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"1","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-01.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-01.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-01.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"2","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-02.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-02.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-02.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"3","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-03.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-03.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-03.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"4","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-04.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-04.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-04.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"5","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-05.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-05.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-05.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"6","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_680_-06.jpg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_680_-06.jpg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_680_-06.jpg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"7","isMain":false,"type":"image","videoUrl":null},{"thumb":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/2840e64ad71a742d4ac226dd4815e8aa\/o\/p\/opc-sc20_2_.jpeg","img":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/260d56349d48a602b23f9645dee29150\/o\/p\/opc-sc20_2_.jpeg","full":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/39b8d68382bba865f2bf503d06bb41d9\/o\/p\/opc-sc20_2_.jpeg","caption":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","position":"8","isMain":false,"type":"image","videoUrl":null}],
                "options": {"nav":"thumbs","loop":true,"keyboard":true,"arrows":true,"allowfullscreen":true,"showCaption":false,"width":700,"thumbwidth":90,"thumbheight":90,"height":700,"transitionduration":500,"transition":"slide","navarrows":true,"navtype":"slides","navdir":"horizontal"},
                "fullscreen": {"nav":"thumbs","loop":true,"navdir":"horizontal","navarrows":false,"navtype":"slides","arrows":false,"showCaption":false,"transitionduration":500,"transition":"dissolve"},
                 "breakpoints": {"mobile":{"conditions":{"max-width":"767px"},"options":{"options":{"nav":"dots"}}}}            }
        }
    }
</script>
<script type="text/x-magento-init">
    {
        "[data-gallery-role=gallery-placeholder]": {
            "Magento_ProductVideo/js/fotorama-add-video-events": {
                "videoData": [{"mediaType":"image","videoUrl":null,"isBase":true},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false}],
                "videoSettings": [{"playIfBase":"0","showRelated":"0","videoAutoRestart":"0"}],
                "optionsVideoData": []            }
        }
    }
</script>
<div class="action-skip-wrapper"><a class="action skip gallery-prev-area"
   href="#gallery-prev-area">
    <span>
        Skip to the beginning of the images gallery    </span>
</a>
</div><a id="gallery-next-area" tabindex="-1"></a>
</div>    <div class="product info detailed">
                <div class="product data items" data-mage-init='{"tabs":{"openedState":"active"}}'>
                                                            <div class="data item title"
                     data-role="collapsible" id="tab-label-description">
                    <a class="data switch"
                       tabindex="-1"
                       data-toggle="trigger"
                       href="javascript:void(0)"
                       id="tab-label-description-title">
                        DESCRIPTION                    </a>
                </div>
                <div class="data item content"
                     aria-labelledby="tab-label-description-title" id="description" data-role="content">

<div class="product attribute description">
        <div class="value" ><h3 data-sanitized-data-mce-fragment="1">Product Parameters:</h3>
<p data-sanitized-data-mce-fragment="1">Battery Type: AAA Dry battery<br data-sanitized-data-mce-fragment="1" />Rated voltage: DC 4.5V<br data-sanitized-data-mce-fragment="1" />Material: Tempered glass/Stainless steel/ABS</p>
<p data-sanitized-data-mce-fragment="1">Model: OPC-SC20</p>
<p data-sanitized-data-mce-fragment="1"> </p>
<h3 data-sanitized-data-mce-fragment="1">Product Features:</h3>
<p data-sanitized-data-mce-fragment="1"><strong data-sanitized-data-mce-fragment="1">High-precision Sensors-Real-time Data Feedback</strong></p>
<p data-sanitized-data-mce-fragment="1">oraimo SmartScale is equipped with multiple high-sensitive sensors. Real-time health data can be easily obtained just by standing on the scale.</p>
<p data-sanitized-data-mce-fragment="1"><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-10.jpg?v=1662693877" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-10.jpg?v=1662693877" /></p>
<p data-sanitized-data-mce-fragment="1"><strong data-sanitized-data-mce-fragment="1">Tempered Glass- Safety is Priority</strong></p>
<p data-sanitized-data-mce-fragment="1">5mm thick tempered glass surface and skid-resistant base provide exceptional durability and stability. The delicate round edge design gives you a pleasant and safe health data monitoring experience.</p>
<p data-sanitized-data-mce-fragment="1"><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-03.jpg?v=1662693876" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-03.jpg?v=1662693876" /> </p>
<p data-sanitized-data-mce-fragment="1"><strong data-sanitized-data-mce-fragment="1">Smart LED Display- Smarter and Powerful</strong></p>
<p data-sanitized-data-mce-fragment="1">oraimo SmartScale comes with a digital LED display, which shows your appropriate weight in real-time and is completely invisible when you don't need it. The long battery life lets you get rid of battery anxiety and continuously track your full-body data.</p>
<p data-sanitized-data-mce-fragment="1"> <img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-04.jpg?v=1662693876" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-04.jpg?v=1662693876" data-sanitized-data-mce-fragment="1" /></p>
<p data-sanitized-data-mce-fragment="1"><strong data-sanitized-data-mce-fragment="1">18 Key Fitness Metrics-Comprehensive Health Monitoring</strong></p>
<p data-sanitized-data-mce-fragment="1">oraimo SmartScale tracks 18 key fitness metrics, including Weight, BMI, Body Fat Rate, Muscle Mass, Fat Mass, Body Fat Index, Obesity Level, Ideal Weight, Weight Control, Visceral Fat, Weight Without Fat, Body Water, Bone Mass, Protein Rate, BMR, Metabolic Age, Body Type, Score. Give you a comprehensive and comfortable health monitoring experience</p>
<p data-sanitized-data-mce-fragment="1"> <img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-05.jpg?v=1662693877" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-05.jpg?v=1662693877" /></p>
<p data-sanitized-data-mce-fragment="1"><strong data-sanitized-data-mce-fragment="1">Powerful Self-developed APP- Meticulous Health Guardian</strong></p>
<p data-sanitized-data-mce-fragment="1">A low-latency Bluetooth connection helps you easily check your health data in oraimo Home. History record on the APP allows you to continuously monitor changes in body composition. Seamless sync, simple analysis.</p>
<p data-sanitized-data-mce-fragment="1"><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-06.jpg?v=1662693876" /><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-08.jpg?v=1662693877" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-08.jpg?v=1662693877" /><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-07.jpg?v=1662693876" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-07.jpg?v=1662693876" /><img src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-01.jpg?v=1662693875" data-sanitized-data-mce-fragment="1" data-sanitized-data-mce-src="https://cdn.shopify.com/s/files/1/0652/8542/3344/files/OPC-SC20_FB_-01.jpg?v=1662693875" /></p></div>
</div>
                </div>
                                            <div class="data item title"
                     data-role="collapsible" id="tab-label-reviews">
                    <a class="data switch"
                       tabindex="-1"
                       data-toggle="trigger"
                       href="javascript:void(0)"
                       id="tab-label-reviews-title">
                        CUSTOMER REVIEWS                    </a>
                </div>
                <div class="data item content"
                     aria-labelledby="tab-label-reviews-title" id="reviews" data-role="content">
                    <div id="product-review-container" data-role="product-review"></div>
<div class="block review-add">
    <div class="block-title"><strong>Write Your Own Review</strong></div>
    <div class="block-content">
                    <div class="message info notlogged" id="review-form">
                <div>
                    Only registered users can write reviews. Please <a href="https://ke.oraimo.com/customer/account/login/referer/aHR0cHM6Ly9rZS5vcmFpbW8uY29tL2NhdGFsb2cvcHJvZHVjdC92aWV3L2lkLzE0OC8jcmV2aWV3LWZvcm0%2C/">Sign in</a> or <a href="https://ke.oraimo.com/customer/account/create/">create an account</a>                </div>
            </div>
            </div>
</div>

<script>
    require(['jquery'],function ($) {
        $("#reviews .review-add").on("click",function (e) {
            e.stopPropagation()
        })
    })
</script>

<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Review/js/process-reviews": {
                "productReviewUrl": "https\u003A\u002F\u002Fke.oraimo.com\u002Freview\u002Fproduct\u002FlistAjax\u002Fid\u002F148\u002F",
                "reviewsTabSelector": "#tab-label-reviews"
            }
        }
    }
</script>
                </div>
                    </div>
    </div>
<script>
    require(['jquery'],function ($) {
        $("div[id^='tab-label-']").eq(0).addClass("active")
        var start = $("div[id^='tab-label-']").eq(0).attr("id").replace("tab-label-","")
        $("#"+start).show();
        $(document).on("click","div[id^='tab-label-']",function () {
            if(!$(this).hasClass("active")) {
                $(this).addClass("active")
                var tem = $(this).attr("id").replace("tab-label-","")
                $(this).siblings("div[id^='tab-label-']").removeClass("active")
                $(this).siblings("div[aria-labelledby^='tab-label-']").hide()
                $("#"+tem).show();
            }
        })
    })
</script>
<input name="form_key" type="hidden" value="z16LYiFwVLmvBYmm" /><div id="authenticationPopup" data-bind="scope:'authenticationPopup', style: {display: 'none'}">
        <script>window.authenticationPopup = {"autocomplete":"off","customerRegisterUrl":"https:\/\/ke.oraimo.com\/customer\/account\/create\/","customerForgotPasswordUrl":"https:\/\/ke.oraimo.com\/customer\/account\/forgotpassword\/","baseUrl":"https:\/\/ke.oraimo.com\/"}</script>    <!-- ko template: getTemplate() --><!-- /ko -->
    <script type="text/x-magento-init">
        {
            "#authenticationPopup": {
                "Magento_Ui/js/core/app": {"components":{"authenticationPopup":{"component":"Magento_Customer\/js\/view\/authentication-popup","children":{"messages":{"component":"Magento_Ui\/js\/view\/messages","displayArea":"messages"},"captcha":{"component":"Magento_Captcha\/js\/view\/checkout\/loginCaptcha","displayArea":"additional-login-form-fields","formId":"user_login","configSource":"checkout"},"amazon-button":{"component":"Amazon_Login\/js\/view\/login-button-wrapper","sortOrder":"0","displayArea":"additional-login-form-fields","config":{"tooltip":"Securely login to our website using your existing Amazon details.","componentDisabled":true}}}}}}            },
            "*": {
                "Magento_Ui/js/block-loader": "https\u003A\u002F\u002Fstatic.ke.oraimo.com\u002Fversion1695696274\u002Ffrontend\u002FMaijindou\u002Foraimo\u002Fen_US\u002Fimages\u002Floader\u002D1.gif"
            }
        }
    </script>
</div>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Customer/js/section-config": {
                "sections": {"stores\/store\/switch":["*"],"stores\/store\/switchrequest":["*"],"directory\/currency\/switch":["*"],"*":["messages"],"customer\/account\/logout":["*","recently_viewed_product","recently_compared_product","persistent"],"customer\/account\/loginpost":["*"],"customer\/account\/createpost":["*"],"customer\/account\/editpost":["*"],"customer\/ajax\/login":["checkout-data","cart","captcha"],"catalog\/product_compare\/add":["compare-products","wp_ga4","gtm"],"catalog\/product_compare\/remove":["compare-products"],"catalog\/product_compare\/clear":["compare-products"],"sales\/guest\/reorder":["cart"],"sales\/order\/reorder":["cart"],"checkout\/cart\/add":["cart","directory-data","directory-city-data","directory-district-data","wp_ga4","gtm"],"checkout\/cart\/delete":["cart","wp_ga4","gtm"],"checkout\/cart\/updatepost":["cart","wp_ga4"],"checkout\/cart\/updateitemoptions":["cart","wp_ga4"],"checkout\/cart\/couponpost":["cart"],"checkout\/cart\/estimatepost":["cart"],"checkout\/cart\/estimateupdatepost":["cart"],"checkout\/onepage\/saveorder":["cart","checkout-data","last-ordered-items","rewards"],"checkout\/sidebar\/removeitem":["cart","wp_ga4","gtm"],"checkout\/sidebar\/updateitemqty":["cart","wp_ga4"],"rest\/*\/v1\/carts\/*\/payment-information":["cart","last-ordered-items","instant-purchase","rewards","wp_ga4","gtm"],"rest\/*\/v1\/guest-carts\/*\/payment-information":["cart","wp_ga4","gtm"],"rest\/*\/v1\/guest-carts\/*\/selected-payment-method":["cart","checkout-data"],"rest\/*\/v1\/carts\/*\/selected-payment-method":["cart","checkout-data","instant-purchase"],"customer\/address\/*":["instant-purchase"],"customer\/account\/*":["instant-purchase"],"vault\/cards\/deleteaction":["instant-purchase"],"multishipping\/checkout\/overviewpost":["cart"],"paypal\/express\/placeorder":["cart","checkout-data"],"paypal\/payflowexpress\/placeorder":["cart","checkout-data"],"paypal\/express\/onauthorization":["cart","checkout-data"],"persistent\/index\/unsetcookie":["persistent"],"review\/product\/post":["review"],"wishlist\/index\/add":["wishlist","wp_ga4","gtm"],"wishlist\/index\/remove":["wishlist"],"wishlist\/index\/updateitemoptions":["wishlist"],"wishlist\/index\/update":["wishlist"],"wishlist\/index\/cart":["wishlist","cart","wp_ga4","gtm"],"wishlist\/index\/fromcart":["wishlist","cart"],"wishlist\/index\/allcart":["wishlist","cart","wp_ga4","gtm"],"wishlist\/shared\/allcart":["wishlist","cart"],"wishlist\/shared\/cart":["cart"],"ammostviewed\/cart\/add":["cart","messages"],"braintree\/paypal\/placeorder":["cart","checkout-data"],"braintree\/googlepay\/placeorder":["cart","checkout-data"],"payfast\/payfast\/placeorder":["cart","checkout-data"],"buynow\/cart\/add":["cart"],"buynow\/index\/cart":["cart"],"checkout\/cart\/configure":["wp_ga4","gtm"],"rest\/*\/v1\/guest-carts\/*\/shipping-information":["wp_ga4","gtm"],"rest\/*\/v1\/carts\/*\/shipping-information":["wp_ga4","gtm"]},
                "clientSideSections": ["checkout-data","cart-data","chatData"],
                "baseUrls": ["https:\/\/ke.oraimo.com\/"],
                "sectionNames": ["messages","customer","compare-products","last-ordered-items","cart","directory-data","captcha","instant-purchase","loggedAsCustomer","persistent","review","wishlist","rewards","chatData","directory-city-data","directory-district-data","wp_ga4","gtm","recently_viewed_product","recently_compared_product","product_data_storage","paypal-billing-agreement"]            }
        }
    }
</script>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Customer/js/customer-data": {
                "sectionLoadUrl": "https\u003A\u002F\u002Fke.oraimo.com\u002Fcustomer\u002Fsection\u002Fload\u002F",
                "expirableSectionLifetime": 60,
                "expirableSectionNames": ["cart","persistent"],
                "cookieLifeTime": "86400",
                "updateSessionUrl": "https\u003A\u002F\u002Fke.oraimo.com\u002Fcustomer\u002Faccount\u002FupdateSession\u002F"
            }
        }
    }
</script>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Customer/js/invalidation-processor": {
                "invalidationRules": {
                    "website-rule": {
                        "Magento_Customer/js/invalidation-rules/website-rule": {
                            "scopeConfig": {
                                "websiteId": "1"
                            }
                        }
                    }
                }
            }
        }
    }
</script>
<script type="text/x-magento-init">
    {
        "body": {
            "pageCache": {"url":"https:\/\/ke.oraimo.com\/page_cache\/block\/render\/id\/148\/","handles":["default","catalog_product_view","catalog_product_view_type_simple","catalog_product_view_id_148","catalog_product_view_sku_OPC-SC20"],"originalRequest":{"route":"catalog","controller":"product","action":"view","uri":"\/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html"},"versionCookieName":"private_content_version"}        }
    }
</script>

        <style type="text/css">
                            .form-customer-login .g-recaptcha {
                padding-top: 20%;
            }

        .form.form-login .g-recaptcha .grecaptcha-badge{
            position: unset !important;
        }

        .form-customer-login .g-recaptcha {
            margin: 0px;
        }

        #social-form-create .g-recaptcha{
            padding-top: 5%;
        }

        #social-form-password-forget .g-recaptcha{
            padding-top: 5%;
        }

        .onestepcheckout-index-index .form-login .g-recaptcha .grecaptcha-badge {
            position: unset !important;
        }

        .checkout-index-index form[data-role=login] .g-recaptcha .grecaptcha-badge {
            position: unset !important;
        }

        #mpageverify-form .g-recaptcha {
            margin-left: 30%;
        }

        .g-recaptcha {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>
    <script type="text/x-magento-init">
        {
            "*": {
                "Mageplaza_GoogleRecaptcha/js/captcha": {
                    "key": "6LcBwdchAAAAALPygWwnZckuMAFYwijRbtENFmyr",
                    "language": "en",
                    "position": "bottomleft",
                    "theme": "light",
                    "forms": [""],
                    "type": "invisible",
                    "size": ""
                }
            }
        }
    </script>
<script type="text/x-magento-init">
    {
        "body": {
            "requireCookie": {"noCookieUrl":"https:\/\/ke.oraimo.com\/cookie\/index\/noCookies\/","triggers":[".action.towishlist"],"isRedirectCmsPage":true}        }
    }
</script>
<script type="text/x-magento-init">
    {
        "*": {
                "Magento_Catalog/js/product/view/provider": {
                    "data": {"items":{"148":{"add_to_cart_button":{"post_data":"{\"action\":\"https:\\\/\\\/ke.oraimo.com\\\/checkout\\\/cart\\\/add\\\/uenc\\\/%25uenc%25\\\/product\\\/148\\\/\",\"data\":{\"product\":\"148\",\"uenc\":\"%uenc%\"}}","url":"https:\/\/ke.oraimo.com\/checkout\/cart\/add\/uenc\/%25uenc%25\/product\/148\/","required_options":false},"add_to_compare_button":{"post_data":null,"url":"{\"action\":\"https:\\\/\\\/ke.oraimo.com\\\/catalog\\\/product_compare\\\/add\\\/\",\"data\":{\"product\":\"148\",\"uenc\":\"aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw,\"}}","required_options":null},"price_info":{"final_price":2200,"max_price":2200,"max_regular_price":2200,"minimal_regular_price":2200,"special_price":null,"minimal_price":2200,"regular_price":3100,"formatted_prices":{"final_price":"<span class=\"price\">KES2,200<\/span>","max_price":"<span class=\"price\">KES2,200<\/span>","minimal_price":"<span class=\"price\">KES2,200<\/span>","max_regular_price":"<span class=\"price\">KES2,200<\/span>","minimal_regular_price":null,"special_price":null,"regular_price":"<span class=\"price\">KES3,100<\/span>"},"extension_attributes":{"msrp":{"msrp_price":"<span class=\"price\">KES0<\/span>","is_applicable":"","is_shown_price_on_gesture":"","msrp_message":"","explanation_message":"Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart."},"tax_adjustments":{"final_price":2200,"max_price":2200,"max_regular_price":2200,"minimal_regular_price":2200,"special_price":2200,"minimal_price":2200,"regular_price":3100,"formatted_prices":{"final_price":"<span class=\"price\">KES2,200<\/span>","max_price":"<span class=\"price\">KES2,200<\/span>","minimal_price":"<span class=\"price\">KES2,200<\/span>","max_regular_price":"<span class=\"price\">KES2,200<\/span>","minimal_regular_price":null,"special_price":"<span class=\"price\">KES2,200<\/span>","regular_price":"<span class=\"price\">KES3,100<\/span>"}},"weee_attributes":[],"weee_adjustment":"<span class=\"price\">KES2,200<\/span>"}},"images":[{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/3a346770ef58757f32973991e3c11754\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_viewed_products_grid_content_widget","height":240,"width":240,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":240,"resized_height":240},{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/13f8c36d5d4cd9ec4b22b5c411468fee\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_viewed_products_list_content_widget","height":270,"width":270,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":270,"resized_height":270},{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/4bc18bc63581c54801bc3f1857607615\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_viewed_products_images_names_widget","height":90,"width":75,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":75,"resized_height":90},{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/3a346770ef58757f32973991e3c11754\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_compared_products_grid_content_widget","height":240,"width":240,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":240,"resized_height":240},{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/93258fc114a37e38cedb1ba31bc8bb49\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_compared_products_list_content_widget","height":207,"width":270,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":270,"resized_height":207},{"url":"https:\/\/media.ke.oraimo.com\/catalog\/product\/cache\/4bc18bc63581c54801bc3f1857607615\/o\/p\/opc-sc20_680_-07.jpg","code":"recently_compared_products_images_names_widget","height":90,"width":75,"label":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","resized_width":75,"resized_height":90}],"url":"https:\/\/ke.oraimo.com\/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html","id":148,"name":"oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale","type":"simple","is_salable":"","store_id":1,"currency_code":"KES","extension_attributes":{"review_html":"        <div class=\"product-reviews-summary short\">\n                <div class=\"rating-summary\">\n            <span class=\"label\"><span>Rating:<\/span><\/span>\n            <div class=\"rating-result\"\n                 id=\"rating-result_148\"\n                 title=\"4.6\">\n                <span><span>92%<\/span><\/span>\n            <\/div>\n            <script type=\"text&#x2F;javascript\">var elemgo3n8MGy = document.querySelector('#rating-result_148 span');\nif (elemgo3n8MGy) {\nelemgo3n8MGy.style.width = '92%';\n}<\/script>        <\/div>\n                <div class=\"reviews-actions\">\n            <a class=\"action view\"\n               href=\"https:\/\/ke.oraimo.com\/oraimo-smartscale-18-key-fitness-metrics-body-fat-weight-scale.html#reviews\">445                &nbsp;<span>Reviews                <\/span>\n            <\/a>\n        <\/div>\n    <\/div>\n","wishlist_button":{"post_data":null,"url":"{\"action\":\"https:\\\/\\\/ke.oraimo.com\\\/wishlist\\\/index\\\/add\\\/\",\"data\":{\"product\":148,\"uenc\":\"aHR0cHM6Ly9rZS5vcmFpbW8uY29tL29yYWltby1zbWFydHNjYWxlLTE4LWtleS1maXRuZXNzLW1ldHJpY3MtYm9keS1mYXQtd2VpZ2h0LXNjYWxlLmh0bWw,\"}}","required_options":null}}}},"store":"1","currency":"KES","productCurrentScope":"website"}            }
        }
    }
</script>

<script type="text/x-magento-init">
{
	"*": {
		"Omnisend_Omnisend/js/product-picker": {
		    "productID": "148",
        "variantID": "148",
        "currency": "KES",
        "price": 220000,
        "title": "oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale",
        "imageUrl": "https://media.ke.oraimo.com/catalog/product/o/p/opc-sc20_680_-07.jpg",
        "productUrl": "https://ke.oraimo.com/catalog/product/view/id/148/?___store=default",
        "oldPrice": 310000,
        "description": "Product Parameters:\r\nBattery Type: AAA Dry batteryRated voltage: DC 4.5VMaterial: Tempered glass\/Stainless steel\/ABS\r\nModel: OPC-SC20\r\n\u00a0\r\nProduct Features:\r\nHigh-precision Sensors-Real-time Data Feedback\r\noraimo SmartScale is equipped with multiple high-sensitive sensors. Real-time health data can be easily obtained just by standing on the scale.\r\n\r\nTempered Glass- Safety is Priority\r\n5mm thick tempered glass surface and skid-resistant base provide exceptional durability and stability. The delicate round edge design gives you a pleasant and safe health data monitoring experience.\r\n\u00a0\r\nSmart LED Display- Smarter and Powerful\r\noraimo SmartScale comes with a digital LED display, which shows your appropriate weight in real-time and is completely invisible when you don't need it. The long battery life lets you get rid of battery anxiety and continuously track your full-body data.\r\n\u00a0\r\n18 Key Fitness Metrics-Comprehensive Health Monitoring\r\noraimo SmartScale tracks 18 key fitness metrics, including Weight, BMI, Body Fat Rate, Muscle Mass, Fat Mass, Body Fat Index, Obesity Level, Ideal Weight, Weight Control, Visceral Fat, Weight Without Fat, Body Water, Bone Mass, Protein Rate, BMR, Metabolic Age, Body Type, Score. Give you a comprehensive and comfortable health monitoring experience\r\n\u00a0\r\nPowerful Self-developed APP- Meticulous Health Guardian\r\nA low-latency Bluetooth connection helps you easily check your health data in oraimo Home. History record on the APP allows you to continuously monitor changes in body composition. Seamless sync, simple analysis.\r\n",
        "vendor": ""
		  }
    }
}
</script>
<script id="omnisend-product-viewed" type="text/x-magento-init">
    {
	"*": {
		"Omnisend_Omnisend/js/product-viewed": {
		    "productID": "148",
            "variantID": "148",
            "currency": "KES",
            "tags": "",
            "price": 220000,
            "oldPrice": 310000,
            "title": "oraimo SmartScale 18 Key Fitness Metrics Body Fat Weight Scale",
            "description": "Product Parameters:\r\nBattery Type: AAA Dry batteryRated voltage: DC 4.5VMaterial: Tempered glass\/Stainless steel\/ABS\r\nModel: OPC-SC20\r\n\u00a0\r\nProduct Features:\r\nHigh-precision Sensors-Real-time Data Feedback\r\noraimo SmartScale is equipped with multiple high-sensitive sensors. Real-time health data can be easily obtained just by standing on the scale.\r\n\r\nTempered Glass- Safety is Priority\r\n5mm thick tempered glass surface and skid-resistant base provide exceptional durability and stability. The delicate round edge design gives you a pleasant and safe health data monitoring experience.\r\n\u00a0\r\nSmart LED Display- Smarter and Powerful\r\noraimo SmartScale comes with a digital LED display, which shows your appropriate weight in real-time and is completely invisible when you don't need it. The long battery life lets you get rid of battery anxiety and continuously track your full-body data.\r\n\u00a0\r\n18 Key Fitness Metrics-Comprehensive Health Monitoring\r\noraimo SmartScale tracks 18 key fitness metrics, including Weight, BMI, Body Fat Rate, Muscle Mass, Fat Mass, Body Fat Index, Obesity Level, Ideal Weight, Weight Control, Visceral Fat, Weight Without Fat, Body Water, Bone Mass, Protein Rate, BMR, Metabolic Age, Body Type, Score. Give you a comprehensive and comfortable health monitoring experience\r\n\u00a0\r\nPowerful Self-developed APP- Meticulous Health Guardian\r\nA low-latency Bluetooth connection helps you easily check your health data in oraimo Home. History record on the APP allows you to continuously monitor changes in body composition. Seamless sync, simple analysis.\r\n",
            "imageUrl": "https://media.ke.oraimo.com/catalog/product/o/p/opc-sc20_680_-07.jpg",
            "productUrl": "https://ke.oraimo.com/catalog/product/view/id/148/?___store=default",
            "vendor": ""
		  }
    }
}
</script>




                    <script>
                require(['jquery', 'owl_carousel', 'owl_config' ],
                    function ($) {
                        $(document).ready(function() {
                            var products_type = 'related',
                                slider_config = {"nav":"1","dots":"1","center":"0","items":"5","stagePadding":"0","status":"1","title":"YOU MAY ALSO LIKE","show_price":null,"show_addto":null,"show_wishlist":null,"show_compare":null,"random_sort":null,"loop":"1","margin":"0","merge":null,"URLhashListener":null,"lazyLoad":"1","autoplay":"1","autoplayTimeout":"3000","autoplayHoverPause":"1","nav_brk1":"0","dots_brk1":"1","items_brk1":"2","center_brk1":"0","stagePadding_brk1":"0","nav_brk2":"0","dots_brk2":"1","items_brk2":"3","center_brk2":"0","stagePadding_brk2":"0","nav_brk3":"0","dots_brk3":"1","items_brk3":"4","center_brk3":"0","stagePadding_brk3":"0","nav_brk4":"1","dots_brk4":"1","items_brk4":"5","center_brk4":"0","stagePadding_brk4":"0"},

                                carouselElement = $('.owl-carousel-products-' + products_type),

                                windowWidth = $(window).width(),
                                carouselWidth = carouselElement.width(),
                                carouselContainer = carouselWidth + 120,

                                items = ((slider_config.items >= 0 && slider_config.items != null) ? slider_config.items : 2),

                                stagePadding = slider_config.stagePadding != '' ? parseInt(slider_config.stagePadding) : 0,

                                sPBrk_1 = slider_config.stagePadding_brk1 != '' ? parseInt(slider_config.stagePadding_brk1) : 0,
                                sPBrk_2 = slider_config.stagePadding_brk2 != '' ? parseInt(slider_config.stagePadding_brk2) : 0,
                                sPBrk_3 = slider_config.stagePadding_brk3 != '' ? parseInt(slider_config.stagePadding_brk3) : 0,
                                sPBrk_4 = slider_config.stagePadding_brk4 != '' ? parseInt(slider_config.stagePadding_brk4) : 0;

                            /** Lazyload bug when fewer items exist in the carousel then the ones displayed */
                            carouselElement.on('initialized.owl.carousel', function(event){
                                var scopeSize = event.page.size;
                                for (var i = 0; i < scopeSize; i++){
                                    var imgsrc = $(event.target).find('.owl-item').eq(i).find('img').attr('data-src');
                                    $(event.target).find('.owl-item').eq(i).find('img').attr('src', imgsrc);
                                    $(event.target).find('.owl-item').eq(i).find('img').attr('style', 'opacity: 1;');
                                }
                            });

                            carouselElement.owlCarousel({
                                nav                 :parseInt(slider_config.nav) == 1 ? true : false,
                                dots                :parseInt(slider_config.dots) == 1 ? true : false,
                                center              :parseInt(slider_config.center) == 1 ? true : false,
                                items               :items,
                                loop                :parseInt(slider_config.loop) == 1 ? true : false,
                                margin              :parseInt(slider_config.margin) != '' ? parseInt(slider_config.margin) : 0,
                                stagePadding        :parseInt(slider_config.center) == 1 ? 0 : stagePadding,
                                lazyLoad            :parseInt(slider_config.lazyLoad) == 1 ? true : false,
                                autoplay            :parseInt(slider_config.autoplay) == 1 ? true : false,
                                autoplayTimeout     :(slider_config.autoplayTimeout > 0 && slider_config.autoplayTimeout != null) ? parseInt(slider_config.autoplayTimeout) : 3000,
                                autoplayHoverPause  :parseInt(slider_config.autoplayHoverPause) == 1 ? true : false,
                                autoHeight          :false,


                                responsive:{
                            0:{
                                nav             :parseInt(slider_config.nav_brk1) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk1) == 1 ? true : false,
                                    items           :(slider_config.items_brk1  >= 0 && slider_config.items_brk1 != null) ? parseInt(slider_config.items_brk1) : items,
                                    center          :parseInt(slider_config.center_brk1) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_1,
                            },
                            768:{
                                nav             :parseInt(slider_config.nav_brk2) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk2) == 1 ? true : false,
                                    items           :(slider_config.items_brk2  >= 0 && slider_config.items_brk2 != null) ? parseInt(slider_config.items_brk2) : items,
                                    center          :parseInt(slider_config.center_brk2) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_2,
                            },
                            1024:{
                                nav             :parseInt(slider_config.nav_brk3) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk3) == 1 ? true : false,
                                    items           :(slider_config.items_brk3  >= 0 && slider_config.items_brk3 != null) ? parseInt(slider_config.items_brk3) : items,
                                    center          :parseInt(slider_config.center_brk3) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_3,
                            },
                            1280:{
                                nav             :parseInt(slider_config.nav_brk4) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk4) == 1 ? true : false,
                                    items           :(slider_config.items_brk4  >= 0 && slider_config.items_brk4 != null) ? parseInt(slider_config.items_brk4) : items,
                                    center          :parseInt(slider_config.center_brk4) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_4,
                            }
                        }
                        });

                            var carouselControls = carouselElement.find('.owl-nav');
                            if (carouselContainer >= windowWidth) {
                                carouselControls.find('.owl-prev').css({
                                    'left': 0,
                                    'top': -15
                                });
                                carouselControls.find('.owl-next').css({
                                    'right': 0,
                                    'top': -15
                                });
                            }
                        });
                    });
            </script>



                    <script>
                require(['jquery', 'owl_carousel', 'owl_config' ],
                    function ($) {
                        $(document).ready(function() {
                            var products_type = 'upsell',
                                slider_config = {"nav":"1","dots":"1","center":"0","items":"5","stagePadding":"0","status":"1","title":"Upsell products","show_price":null,"show_addto":null,"show_wishlist":null,"show_compare":null,"random_sort":null,"loop":"1","margin":"0","merge":null,"URLhashListener":null,"lazyLoad":"1","autoplay":"1","autoplayTimeout":"3000","autoplayHoverPause":"1","nav_brk1":"0","dots_brk1":"1","items_brk1":"2","center_brk1":"0","stagePadding_brk1":"0","nav_brk2":"0","dots_brk2":"1","items_brk2":"3","center_brk2":"0","stagePadding_brk2":"0","nav_brk3":"0","dots_brk3":"1","items_brk3":"4","center_brk3":"0","stagePadding_brk3":"0","nav_brk4":"1","dots_brk4":"1","items_brk4":"5","center_brk4":"0","stagePadding_brk4":"0"},

                                carouselElement = $('.owl-carousel-products-' + products_type),

                                windowWidth = $(window).width(),
                                carouselWidth = carouselElement.width(),
                                carouselContainer = carouselWidth + 120,

                                items = ((slider_config.items >= 0 && slider_config.items != null) ? slider_config.items : 2),

                                stagePadding = slider_config.stagePadding != '' ? parseInt(slider_config.stagePadding) : 0,

                                sPBrk_1 = slider_config.stagePadding_brk1 != '' ? parseInt(slider_config.stagePadding_brk1) : 0,
                                sPBrk_2 = slider_config.stagePadding_brk2 != '' ? parseInt(slider_config.stagePadding_brk2) : 0,
                                sPBrk_3 = slider_config.stagePadding_brk3 != '' ? parseInt(slider_config.stagePadding_brk3) : 0,
                                sPBrk_4 = slider_config.stagePadding_brk4 != '' ? parseInt(slider_config.stagePadding_brk4) : 0;

                            /** Lazyload bug when fewer items exist in the carousel then the ones displayed */
                            carouselElement.on('initialized.owl.carousel', function(event){
                                var scopeSize = event.page.size;
                                for (var i = 0; i < scopeSize; i++){
                                    var imgsrc = $(event.target).find('.owl-item').eq(i).find('img').attr('data-src');
                                    $(event.target).find('.owl-item').eq(i).find('img').attr('src', imgsrc);
                                    $(event.target).find('.owl-item').eq(i).find('img').attr('style', 'opacity: 1;');
                                }
                            });

                            carouselElement.owlCarousel({
                                nav                 :parseInt(slider_config.nav) == 1 ? true : false,
                                dots                :parseInt(slider_config.dots) == 1 ? true : false,
                                center              :parseInt(slider_config.center) == 1 ? true : false,
                                items               :items,
                                loop                :parseInt(slider_config.loop) == 1 ? true : false,
                                margin              :parseInt(slider_config.margin) != '' ? parseInt(slider_config.margin) : 0,
                                stagePadding        :parseInt(slider_config.center) == 1 ? 0 : stagePadding,
                                lazyLoad            :parseInt(slider_config.lazyLoad) == 1 ? true : false,
                                autoplay            :parseInt(slider_config.autoplay) == 1 ? true : false,
                                autoplayTimeout     :(slider_config.autoplayTimeout > 0 && slider_config.autoplayTimeout != null) ? parseInt(slider_config.autoplayTimeout) : 3000,
                                autoplayHoverPause  :parseInt(slider_config.autoplayHoverPause) == 1 ? true : false,
                                autoHeight          :false,


                                responsive:{
                            0:{
                                nav             :parseInt(slider_config.nav_brk1) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk1) == 1 ? true : false,
                                    items           :(slider_config.items_brk1  >= 0 && slider_config.items_brk1 != null) ? parseInt(slider_config.items_brk1) : items,
                                    center          :parseInt(slider_config.center_brk1) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_1,
                            },
                            768:{
                                nav             :parseInt(slider_config.nav_brk2) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk2) == 1 ? true : false,
                                    items           :(slider_config.items_brk2  >= 0 && slider_config.items_brk2 != null) ? parseInt(slider_config.items_brk2) : items,
                                    center          :parseInt(slider_config.center_brk2) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_2,
                            },
                            1024:{
                                nav             :parseInt(slider_config.nav_brk3) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk3) == 1 ? true : false,
                                    items           :(slider_config.items_brk3  >= 0 && slider_config.items_brk3 != null) ? parseInt(slider_config.items_brk3) : items,
                                    center          :parseInt(slider_config.center_brk3) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_3,
                            },
                            1280:{
                                nav             :parseInt(slider_config.nav_brk4) == 1 ? true : false,
                                    dots            :parseInt(slider_config.dots_brk4) == 1 ? true : false,
                                    items           :(slider_config.items_brk4  >= 0 && slider_config.items_brk4 != null) ? parseInt(slider_config.items_brk4) : items,
                                    center          :parseInt(slider_config.center_brk4) == 1 ? true : false,
                                    stagePadding    :parseInt(slider_config.center) == 1 ? 0 : sPBrk_4,
                            }
                        }
                        });

                            var carouselControls = carouselElement.find('.owl-nav');
                            if (carouselContainer >= windowWidth) {
                                carouselControls.find('.owl-prev').css({
                                    'left': 0,
                                    'top': -15
                                });
                                carouselControls.find('.owl-next').css({
                                    'right': 0,
                                    'top': -15
                                });
                            }
                        });
                    });
            </script>


</div></div></main><footer class="page-footer"><div class="footer-links">
<div class="links-list">
<div class="links-items">
<div class="item-sub-title pc-show">Newsletter:::</div>
<div class="drop-title mobile-show">Newsletter
<div class="drop-icon">&nbsp;</div>
</div>
<div class="link-item">Get the Latest oraimo News and Giveaways</div>
<div class="link-item "><div class="block newsletter">
    <div class="content">
        <form class="form subscribe"
              novalidate
              action="https://ke.oraimo.com/newsletter/subscriber/new/"
              method="post"
              data-mage-init='{"validation": {"errorClass": "mage-error"}}'
              id="newsletter-validate-detail">
            <div class="field newsletter">
                <div class="control">
                    <label for="newsletter">
                        <input name="email" type="email" id="newsletter"
                               placeholder="Enter your email address"
                               data-mage-init='{"mage/trim-input":{}}'
                               data-validate="{required:true, 'validate-email':true}"
                        />
                    </label>
                </div>
            </div>
            <div class="actions">
                <button class="action subscribe primary"
                        title="Subscribe"
                        type="submit"
                        aria-label="Subscribe">
                    <span>Subscribe</span>
                </button>
            </div>
        </form>
    </div>
</div>
<script type="text/x-magento-init">
    {
        "*": {
            "Magento_Customer/js/block-submit-on-send": {
                "formId": "newsletter-validate-detail"
            }
        }
    }
</script>
</div>
<div class="link-item">SERVICE HOURS: Monday-Friday 9AM to 6PM</div>
<div class="link-item">CUSTOMER SERVICE: +0721 899 999&nbsp;</div>
<div class="link-item">Whatsapp us on 0728 810 810 / 0797 288 388</div>
<div class="link-item iti--separate-dial-code"><a title="Follow us on Instagram" href="https://www.instagram.com/oraimo.kenya/" target="_blank" rel="noopener"><img src="https://media.ke.oraimo.com/wysiwyg/instagram-4-32.png" alt=""></a><a class="iti__selected-dial-code" title="Follow us on Facebook" href="https://www.facebook.com/oraimoKenya" target="_blank" rel="noopener"><img src="https://media.ke.oraimo.com/wysiwyg/facebook-4-32.png" alt="facebook"></a><a class="iti__selected-dial-code" title="Follow us on Twitter" href="https://twitter.com/oraimokenya" target="_blank" rel="noopener"><img src="https://media.ke.oraimo.com/wysiwyg/twitter-4-32.png" alt=""></a><a class="iti__selected-dial-code" title="Follow us on Youtube" href="https://www.youtube.com/user/OraimoMate" target="_blank" rel="noopener"><img src="https://media.ke.oraimo.com/wysiwyg/youtube-4-32.png" alt=""></a></div>
</div>
<div class="links-items">
<div class="item-sub-title pc-show">About oraimo:::</div>
<div class="drop-title mobile-show">oraimo
<div class="drop-icon">&nbsp;</div>
</div>
<div class="link-item"><a href="https://ke.oraimo.com/about-oraimo" target="_blank" rel="noopener">About Us</a></div>
<div class="link-item"><a href="https://ke.oraimo.com/where-to-buy" target="_blank" rel="noopener">Where to Buy</a></div>
<div class="link-item"><a href="http://ke.oraimo.com/contact-us" target="_blank" rel="noopener">Contact Us</a></div>
<div class="link-item">&nbsp;</div>
</div>
<div class="links-items">
<div class="item-sub-title pc-show">Terms:::</div>
<div class="drop-title mobile-show">Terms
<div class="drop-icon">&nbsp;</div>
</div>
<div class="link-item"><a href="https://ke.oraimo.com/warranty" target="_blank" rel="noopener">Warranty</a></div>
<div class="link-item"><a href="https://ke.oraimo.com/order-shipping" target="_blank" rel="noopener">Order &amp; Shipping</a></div>
<div class="link-item"><a href="https://ke.oraimo.com/replacement-policy" target="_blank" rel="noopener">Replacement &amp; Refund</a></div>
<div class="link-item"><a href="https://ke.oraimo.com/terms-conditions" target="_blank" rel="noopener">Terms &amp; Conditions</a></div>
<div class="link-item"><a href="https://ke.oraimo.com//privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></div>
<div class="link-item">&nbsp;</div>
</div>
<div class="links-items">
<div class="item-sub-title pc-show">Get Help:::</div>
<div class="link-item"><a href="https://ke.oraimo.com/shippingm/track" target="_blank" rel="noopener">Track Your Order</a></div>
<div class="link-item"><a href="https://www.carlcare.com/" target="_blank" rel="noopener">Visit Carlcare</a></div>
</div>
</div>
</div>
<div class="copyright-box">
<div class="copyright-logo"><img src="https://media.ke.oraimo.com/wysiwyg/cms/flogo.png" alt=""></div>
<div class="copyright-text">© 2013-2023 oraimo Copyright. oraimo Technology (HK) Ltd</div>
</div><script>
    require(['jquery', 'underscore', 'owl_carousel', 'owl_config' ],
        function ($, _) {
            $(document).ready(function() {
                if($("#top-promotion").length > 0) {

                    var items = 1;

                    var stagePadding = 0;
                    var animate_Out = false;

                    /** Lazyload bug when fewer items exist in the carousel then the ones displayed */
                    $('#top-promotion').on('initialized.owl.carousel', function(event){
                        var scopeSize = event.page.size;
                        for (var i = 0; i < scopeSize; i++){
                            var imgsrc = $(event.target).find('.owl-item').eq(i).find('img').attr('data-src');
                            $(event.target).find('.owl-item').eq(i).find('img').attr('src', imgsrc);
                            $(event.target).find('.owl-item').eq(i).find('img').attr('style', 'opacity: 1;');
                        }
                    });

                    $('#top-promotion').owlCarousel({
                        nav               : false,
                        dots              : false,
                        center            : false,
                        items             : items,
                        loop              : false,
                        margin            : 0,
                        stagePadding      : 0,
                        lazyLoad          : false,
                        autoplay          : false,
                        autoplayTimeout   : 3000,
                        autoplayHoverPause: false,
                        autoHeight        : true,
                        animateOut        : false ,
                        responsive:{
                            0:{
                                dots    : false,
                                nav     : false,
                                items   : 1,
                                autoplay: true,
                                loop    : true
                            },
                            768:{
                                dots    : false,
                                nav     : false,
                                items   : 2,
                                autoplay: true,
                                loop    : true
                            },
                            991:{
                                dots    : false,
                                nav     : false,
                                items   : 3,
                                autoplay: false,
                                loop    : false
                            }
                        }
                    });

                    $('#top-promotion').on('resized.owl.carousel', function (event) {
                        var $that = $(this);
                        setTimeout(function(){
                            $that.find('.owl-height').css('height', $that.find('.owl-item.active').height());
                        }, 1);
                    });

                    $('#top-promotion').on('initialized.owl.carousel', function(event) {
                        setTimeout(function(){
                            $('.owl-thumbs').each(function() {
                                if (!$('.owl-thumbs').children().length) {$(this).remove();}
                            });
                            $('.cssload-loader').parent().remove();
                        }, 370);
                    });

                    setTimeout(function(){
                        var $that = $('#top-promotion');
                        $that.find('.owl-height').css('height', $that.find('.owl-item.active').height());
                    }, 1);
                }

            });
        });
</script>
</footer><script type="text/x-magento-init">
        {
            "*": {
                "Magento_Ui/js/core/app": {
                    "components": {
                        "storage-manager": {
                            "component": "Magento_Catalog/js/storage-manager",
                            "appendTo": "",
                            "storagesConfiguration" : {"recently_viewed_product":{"requestConfig":{"syncUrl":"https:\/\/ke.oraimo.com\/catalog\/product\/frontend_action_synchronize\/"},"lifetime":"1000","allowToSendRequest":null},"recently_compared_product":{"requestConfig":{"syncUrl":"https:\/\/ke.oraimo.com\/catalog\/product\/frontend_action_synchronize\/"},"lifetime":"1000","allowToSendRequest":null},"product_data_storage":{"updateRequestConfig":{"url":"https:\/\/ke.oraimo.com\/rest\/default\/V1\/products-render-info"},"requestConfig":{"syncUrl":"https:\/\/ke.oraimo.com\/catalog\/product\/frontend_action_synchronize\/"},"allowToSendRequest":null}}                        }
                    }
                }
            }
        }
</script>
<!-- BEGIN OMNISEND SCRIPT-->
<script type="text/javascript">
    window.omnisend = window.omnisend || [];
    omnisend.push(["accountID", "60a4d316916f9c001dc42819"]);
    omnisend.push(["track", "$pageViewed"]);
    !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
</script>
<!-- END OMNISEND SCRIPT-->
<script>
    require(['jquery', 'iframeResizer' ],
        function ($) {
            $(function () {
                waitUntilExists(function() { return $('.embedded-iframe').length; }, function() {
                    var iframe = $('.embedded-iframe'),
                        headerHeight = $('header').outerHeight(),
                        windowHeight = $(window).innerHeight(),
                        availableHeight =  windowHeight - headerHeight - 70,
                        isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
                    iframe.css({'height': availableHeight + 'px'});

                    iframe.on('load', function(){
                        iFrameResize({
                            log: false,
                            minHeight: availableHeight,
                            resizeFrom: 'parent',
                            scrolling: true,
                            inPageLinks: true,
                            autoResize: true,
                            heightCalculationMethod: isOldIE ? 'max' : 'bodyScroll',
                            onInit: function(iframe) {
                                iframe.style.height = availableHeight + 'px';
                            },
                            onResized: function(messageData) {
                                setTimeout(function() {
                                    messageData.iframe.style.visibility = 'visible';
                                }, 300);
                            },
                            onMessage: function(messageData) {
                                if (history.pushState && messageData.message.hasOwnProperty('trackNo')) {
                                    var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname.replace(/\/$/, '') + '/' + messageData.message.trackNo;
                                    window.history.pushState({path:newUrl}, '', newUrl);
                                }
                            }
                        }, '.embedded-iframe');
                    });

                }, function() { });
                function waitUntilExists(isReady, success, error, count, interval){
                    if (count === undefined) {
                        count = 300;
                    }
                    if (interval === undefined) {
                        interval = 20;
                    }
                    if (isReady()) {
                        success();
                        return;
                    }
                    setTimeout(function(){
                        if (!count) {
                            if (error !== undefined) {
                                error();
                            }
                        } else {
                            waitUntilExists(isReady, success, error, count -1, interval);
                        }
                    }, interval);
                }
            });
        });
</script>
</div>    <script>
        require(['jquery','weltpixel_ga4_persistentLayer','weltpixel_ga4_gtm', 'Magento_Customer/js/customer-data'],
            function ($, wpGa4PersDl ,wpGa4gtm, customerData) {
                $( document ).ajaxComplete(function( event, xhr, settings ) {
                    if (settings.url.search('/customer\/section\/load/') > 0) {
                        var response = xhr.responseJSON;
                        if (response.wp_ga4) {
                            var dataLayerData = $.parseJSON(response.wp_ga4.datalayer);
                            for (index in dataLayerData) {
                                window.dataLayer.push({ecommerce: null});
                                window.dataLayer.push(dataLayerData[index]);
                            }
                        }
                    }
                });
                var wpPersDlOptions = {'storageExpiryTime' : 30 };
                var wpGtmOptions = {
                    'enabled' : 0,
                    'persDataLayer' : wpGa4PersDl
                };
                wpGa4PersDl.init(wpPersDlOptions);
                wpGa4gtm.trackPromotion(wpGtmOptions);
            });
    </script>
    <script>
        require(['jquery','weltpixel_persistentLayer', 'weltpixel_gtm', 'Magento_Customer/js/customer-data'],
            function ($, wpPersDl, wpgtm, customerData) {
                $( document ).ajaxComplete(function( event, xhr, settings ) {
                    if (settings.url.search('/customer\/section\/load/') > 0) {
                        var response = xhr.responseJSON;
                        if (response.gtm) {
                            var dataLayerData = $.parseJSON(response.gtm.datalayer);
                            for (index in dataLayerData) {
                                window.dataLayer.push(dataLayerData[index]);
                            }
                        }
                    }
                });
                var wpPersDlOptions = {'storageExpiryTime' : 30 };
                var wpGtmOptions = {
                    'enabled' : 0,
                    'persDataLayer' : wpPersDl
                };
                wpPersDl.init(wpPersDlOptions);
                wpgtm.trackPromotion(wpGtmOptions);
            });
    </script>
    </body>
</html>
`,
    "text/html",
);

assert(document);



// const docScript = document.querySelector("#omnisend-product-viewed")
// const description = docScript?.outerHTML || "";
// const regex = /\*":\s{([^}]*)}/
// const results = regex.exec(description)
// const json = results[0].replace(`*": {`, "")
// const regex2 = /{([^}]*)}/
// const data = regex2.exec(json)
// const dat_ = data[0]
// const str = dat_.replace(/\s/g, "").toString()
// console.log(JSON.parse(str));


const sampleProductDetails = {
    productID: "148",
    variantID: "148",
    currency: "KES",
    tags: "",
    price: 220000,
    oldPrice: 310000,
    title: "oraimoSmartScale18KeyFitnessMetricsBodyFatWeightScale",
    description: "ProductParameters:BatteryType:AAADrybatteryRatedvoltage:DC4.5VMaterial:Temperedglass/Stainlesssteel/",
    imageUrl: "https://media.ke.oraimo.com/catalog/product/o/p/opc-sc20_680_-07.jpg",
    productUrl: "https://ke.oraimo.com/catalog/product/view/id/148/?___store=default",
    vendor: ""
}

const ProductDetailsSchema = z.object({
    productID: z.string(),
    variantID: z.string(),
    currency: z.string(),
    tags: z.string(),
    price: z.number(),
    oldPrice: z.number(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string().url(),
    productUrl: z.string().url(),
    vendor: z.string(),
})



function getProductDetails() {
    try {
        const docScript = document.querySelector("#omnisend-product-viewed");
        if (!docScript) {
            throw new Error("Product details script not found.");
        }
        const description = docScript.outerHTML || "";
        const regex = /\*":\s{([^}]*)}/;
        const results = regex.exec(description);
        if (!results) {
            throw new Error("Product details not found.");
        }
        const json = results[0].replace(`*": {`, "");
        const regex2 = /{([^}]*)}/;
        const data = regex2.exec(json);
        if (!data) {
            throw new Error("Product details data not found.");
        }
        const dat_ = data[0];
        const detailsString = dat_.replace(/^\s*|\n/gm, "").toString();
        const details = JSON.parse(detailsString);
        const validatedDetails = ProductDetailsSchema.parse(details);
        return validatedDetails;
    } catch (error) {
        console.error("Error retrieving product details:", error);
        return null;
    }
}


const resp = getProductDetails();
console.log({ resp });


const ProductImageSchema = z.object({
    url: z.string().url(),
    height: z.number().positive(),
    width: z.number().positive(),
    resized_width: z.number().positive(),
    resized_height: z.number().positive(),
    label: z.string(),
    code: z.string().optional(),
})

function getProductImages() {
    const html = document.querySelector("body")?.outerHTML || "";
    const regex = /\{"url([^}]*)\}/gm
    const results = html.match(regex);
    let images: z.infer<typeof ProductImageSchema>[] = []
    results?.forEach((res) => {
        try {
            const data = JSON.parse(res);
            const image = ProductImageSchema.parse(data);
            images.push(image);
        } catch (error) {
            // console.log(error);
            // Just skip invalid data
        }
    })
    return images;
}

const data = getProductImages()
console.log(data[0].url);

// const docScript = document.querySelector("#omnisend-product-viewed")
// const description = docScript?.outerHTML || "";