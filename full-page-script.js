function tmearn_get_url(e){var n=document.createElement("a");return n.href=e,n}function tmearn_get_host_name(e){var n;return void 0===e||null===e||""===e||e.match(/^\#/)?"":-1===(e=tmearn_get_url(e)).href.search(/^http[s]?:\/\//)?"":(n=e.href.split("/")[2],(n=n.split(":")[0]).toLowerCase())}function tmearn_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof tmearn_url&&"undefined"!=typeof tmearn_api_token){var n=1;"undefined"!=typeof tmearn_advert&&(2==tmearn_advert&&(n=2),0==tmearn_advert&&(n=0));var l=document.getElementsByTagName("a");if("undefined"==typeof tmearn_domains)if("undefined"==typeof tmearn_exclude_domains);else for(o=0;o<l.length;o++){var t=tmearn_get_host_name(l[o].getAttribute("href"));t.length>0&&-1===tmearn_exclude_domains.indexOf(t)?l[o].href=tmearn_url+"search/?label="+(l[o].href)+encodeURIComponent:"magnet:"===l[o].protocol&&(l[o].href=tmearn_url+"search/?label="+(l[o].href)+encodeURIComponent(n))}else for(var o=0;o<l.length;o++)(t=tmearn_get_host_name(l[o].getAttribute("href"))).length>0&&tmearn_domains.indexOf(t)>-1?l[o].href=tmearn_url+"search/?label="+(l[o].href)+encodeURIComponent:"magnet:"===l[o].protocol&&(l[o].href=tmearn_url+"search/?label="+tmearn_base64_encode(l[o].href)+encodeURIComponent)}});
