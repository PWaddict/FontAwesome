function InputfieldIcon() {

	// Added to display brand icons with the required "fab" class for Font Awesome 6.6.0
	const regex = /(^fa-42-group$|^fa-500px$|^fa-accessible-icon$|^fa-accusoft$|^fa-adn$|^fa-adversal$|^fa-affiliatetheme$|^fa-airbnb$|^fa-algolia$|^fa-alipay$|^fa-amazon$|^fa-amazon-pay$|^fa-amilia$|^fa-android$|^fa-angellist$|^fa-angrycreative$|^fa-angular$|^fa-app-store$|^fa-app-store-ios$|^fa-apper$|^fa-apple$|^fa-apple-pay$|^fa-artstation$|^fa-asymmetrik$|^fa-atlassian$|^fa-audible$|^fa-autoprefixer$|^fa-avianex$|^fa-aviato$|^fa-aws$|^fa-bandcamp$|^fa-battle-net$|^fa-behance$|^fa-bilibili$|^fa-bimobject$|^fa-bitbucket$|^fa-bitcoin$|^fa-bity$|^fa-black-tie$|^fa-blackberry$|^fa-blogger$|^fa-blogger-b$|^fa-bluesky$|^fa-bluetooth$|^fa-bluetooth-b$|^fa-bootstrap$|^fa-bots$|^fa-brave$|^fa-brave-reverse$|^fa-btc$|^fa-buffer$|^fa-buromobelexperte$|^fa-buy-n-large$|^fa-buysellads$|^fa-canadian-maple-leaf$|^fa-cc-amazon-pay$|^fa-cc-amex$|^fa-cc-apple-pay$|^fa-cc-diners-club$|^fa-cc-discover$|^fa-cc-jcb$|^fa-cc-mastercard$|^fa-cc-paypal$|^fa-cc-stripe$|^fa-cc-visa$|^fa-centercode$|^fa-centos$|^fa-chrome$|^fa-chromecast$|^fa-cloudflare$|^fa-cloudscale$|^fa-cloudsmith$|^fa-cloudversify$|^fa-cmplid$|^fa-codepen$|^fa-codiepie$|^fa-confluence$|^fa-connectdevelop$|^fa-contao$|^fa-cotton-bureau$|^fa-cpanel$|^fa-creative-commons$|^fa-creative-commons-by$|^fa-creative-commons-nc$|^fa-creative-commons-nc-eu$|^fa-creative-commons-nc-jp$|^fa-creative-commons-nd$|^fa-creative-commons-pd$|^fa-creative-commons-pd-alt$|^fa-creative-commons-remix$|^fa-creative-commons-sa$|^fa-creative-commons-sampling$|^fa-creative-commons-sampling-plus$|^fa-creative-commons-share$|^fa-creative-commons-zero$|^fa-critical-role$|^fa-css3$|^fa-css3-alt$|^fa-cuttlefish$|^fa-d-and-d$|^fa-d-and-d-beyond$|^fa-dailymotion$|^fa-dart-lang$|^fa-dashcube$|^fa-debian$|^fa-deezer$|^fa-delicious$|^fa-deploydog$|^fa-deskpro$|^fa-dev$|^fa-deviantart$|^fa-dhl$|^fa-diaspora$|^fa-digg$|^fa-digital-ocean$|^fa-discord$|^fa-discourse$|^fa-dochub$|^fa-docker$|^fa-draft2digital$|^fa-dribbble$|^fa-dropbox$|^fa-drupal$|^fa-dyalog$|^fa-earlybirds$|^fa-ebay$|^fa-edge$|^fa-edge-legacy$|^fa-elementor$|^fa-ello$|^fa-ember$|^fa-empire$|^fa-envira$|^fa-erlang$|^fa-ethereum$|^fa-etsy$|^fa-evernote$|^fa-expeditedssl$|^fa-facebook$|^fa-facebook-f$|^fa-facebook-messenger$|^fa-fantasy-flight-games$|^fa-fedex$|^fa-fedora$|^fa-figma$|^fa-firefox$|^fa-firefox-browser$|^fa-first-order$|^fa-first-order-alt$|^fa-firstdraft$|^fa-flickr$|^fa-flipboard$|^fa-flutter$|^fa-fly$|^fa-font-awesome$|^fa-fonticons$|^fa-fonticons-fi$|^fa-fort-awesome$|^fa-fort-awesome-alt$|^fa-forumbee$|^fa-foursquare$|^fa-free-code-camp$|^fa-freebsd$|^fa-fulcrum$|^fa-galactic-republic$|^fa-galactic-senate$|^fa-get-pocket$|^fa-gg$|^fa-gg-circle$|^fa-git$|^fa-git-alt$|^fa-github$|^fa-github-alt$|^fa-gitkraken$|^fa-gitlab$|^fa-gitter$|^fa-glide$|^fa-glide-g$|^fa-gofore$|^fa-golang$|^fa-goodreads$|^fa-goodreads-g$|^fa-google$|^fa-google-drive$|^fa-google-pay$|^fa-google-play$|^fa-google-plus$|^fa-google-plus-g$|^fa-google-scholar$|^fa-google-wallet$|^fa-gratipay$|^fa-grav$|^fa-gripfire$|^fa-grunt$|^fa-guilded$|^fa-gulp$|^fa-hacker-news$|^fa-hackerrank$|^fa-hashnode$|^fa-hips$|^fa-hire-a-helper$|^fa-hive$|^fa-hooli$|^fa-hornbill$|^fa-hotjar$|^fa-houzz$|^fa-html5$|^fa-hubspot$|^fa-ideal$|^fa-imdb$|^fa-instagram$|^fa-instalod$|^fa-intercom$|^fa-internet-explorer$|^fa-invision$|^fa-ioxhost$|^fa-itch-io$|^fa-itunes$|^fa-itunes-note$|^fa-java$|^fa-jedi-order$|^fa-jenkins$|^fa-jira$|^fa-joget$|^fa-joomla$|^fa-js$|^fa-jsfiddle$|^fa-jxl$|^fa-kaggle$|^fa-keybase$|^fa-keycdn$|^fa-kickstarter$|^fa-kickstarter-k$|^fa-korvue$|^fa-laravel$|^fa-lastfm$|^fa-leanpub$|^fa-less$|^fa-letterboxd$|^fa-line$|^fa-linkedin$|^fa-linkedin-in$|^fa-linode$|^fa-linux$|^fa-lyft$|^fa-magento$|^fa-mailchimp$|^fa-mandalorian$|^fa-markdown$|^fa-mastodon$|^fa-maxcdn$|^fa-mdb$|^fa-medapps$|^fa-medium$|^fa-medrt$|^fa-meetup$|^fa-megaport$|^fa-mendeley$|^fa-meta$|^fa-microblog$|^fa-microsoft$|^fa-mintbit$|^fa-mix$|^fa-mixcloud$|^fa-mixer$|^fa-mizuni$|^fa-modx$|^fa-monero$|^fa-napster$|^fa-neos$|^fa-nfc-directional$|^fa-nfc-symbol$|^fa-nimblr$|^fa-node$|^fa-node-js$|^fa-npm$|^fa-ns8$|^fa-nutritionix$|^fa-octopus-deploy$|^fa-odnoklassniki$|^fa-odysee$|^fa-old-republic$|^fa-opencart$|^fa-openid$|^fa-opensuse$|^fa-opera$|^fa-optin-monster$|^fa-orcid$|^fa-osi$|^fa-padlet$|^fa-page4$|^fa-pagelines$|^fa-palfed$|^fa-patreon$|^fa-paypal$|^fa-perbyte$|^fa-periscope$|^fa-phabricator$|^fa-phoenix-framework$|^fa-phoenix-squadron$|^fa-php$|^fa-pied-piper$|^fa-pied-piper-alt$|^fa-pied-piper-hat$|^fa-pied-piper-pp$|^fa-pinterest$|^fa-pinterest-p$|^fa-pix$|^fa-pixiv$|^fa-playstation$|^fa-product-hunt$|^fa-pushed$|^fa-python$|^fa-qq$|^fa-quinscape$|^fa-quora$|^fa-r-project$|^fa-raspberry-pi$|^fa-ravelry$|^fa-react$|^fa-reacteurope$|^fa-readme$|^fa-rebel$|^fa-red-river$|^fa-reddit$|^fa-reddit-alien$|^fa-redhat$|^fa-renren$|^fa-replyd$|^fa-researchgate$|^fa-resolving$|^fa-rev$|^fa-rocketchat$|^fa-rockrms$|^fa-rust$|^fa-safari$|^fa-salesforce$|^fa-sass$|^fa-schlix$|^fa-screenpal$|^fa-scribd$|^fa-searchengin$|^fa-sellcast$|^fa-sellsy$|^fa-servicestack$|^fa-shirtsinbulk$|^fa-shoelace$|^fa-shopify$|^fa-shopware$|^fa-signal-messenger$|^fa-simplybuilt$|^fa-sistrix$|^fa-sith$|^fa-sitrox$|^fa-sketch$|^fa-skyatlas$|^fa-skype$|^fa-slack$|^fa-slideshare$|^fa-snapchat$|^fa-soundcloud$|^fa-sourcetree$|^fa-space-awesome$|^fa-speakap$|^fa-speaker-deck$|^fa-spotify$|^fa-square-behance$|^fa-square-dribbble$|^fa-square-facebook$|^fa-square-font-awesome$|^fa-square-font-awesome-stroke$|^fa-square-git$|^fa-square-github$|^fa-square-gitlab$|^fa-square-google-plus$|^fa-square-hacker-news$|^fa-square-instagram$|^fa-square-js$|^fa-square-lastfm$|^fa-square-letterboxd$|^fa-square-odnoklassniki$|^fa-square-pied-piper$|^fa-square-pinterest$|^fa-square-reddit$|^fa-square-snapchat$|^fa-square-steam$|^fa-square-threads$|^fa-square-tumblr$|^fa-square-twitter$|^fa-square-upwork$|^fa-square-viadeo$|^fa-square-vimeo$|^fa-square-web-awesome$|^fa-square-web-awesome-stroke$|^fa-square-whatsapp$|^fa-square-x-twitter$|^fa-square-xing$|^fa-square-youtube$|^fa-squarespace$|^fa-stack-exchange$|^fa-stack-overflow$|^fa-stackpath$|^fa-staylinked$|^fa-steam$|^fa-steam-symbol$|^fa-sticker-mule$|^fa-strava$|^fa-stripe$|^fa-stripe-s$|^fa-stubber$|^fa-studiovinari$|^fa-stumbleupon$|^fa-stumbleupon-circle$|^fa-superpowers$|^fa-supple$|^fa-suse$|^fa-swift$|^fa-symfony$|^fa-teamspeak$|^fa-telegram$|^fa-tencent-weibo$|^fa-the-red-yeti$|^fa-themeco$|^fa-themeisle$|^fa-think-peaks$|^fa-threads$|^fa-tiktok$|^fa-trade-federation$|^fa-trello$|^fa-tumblr$|^fa-twitch$|^fa-twitter$|^fa-typo3$|^fa-uber$|^fa-ubuntu$|^fa-uikit$|^fa-umbraco$|^fa-uncharted$|^fa-uniregistry$|^fa-unity$|^fa-unsplash$|^fa-untappd$|^fa-ups$|^fa-upwork$|^fa-usb$|^fa-usps$|^fa-ussunnah$|^fa-vaadin$|^fa-viacoin$|^fa-viadeo$|^fa-viber$|^fa-vimeo$|^fa-vimeo-v$|^fa-vine$|^fa-vk$|^fa-vnv$|^fa-vuejs$|^fa-watchman-monitoring$|^fa-waze$|^fa-web-awesome$|^fa-webflow$|^fa-weebly$|^fa-weibo$|^fa-weixin$|^fa-whatsapp$|^fa-whmcs$|^fa-wikipedia-w$|^fa-windows$|^fa-wirsindhandwerk$|^fa-wix$|^fa-wizards-of-the-coast$|^fa-wodu$|^fa-wolf-pack-battalion$|^fa-wordpress$|^fa-wordpress-simple$|^fa-wpbeginner$|^fa-wpexplorer$|^fa-wpforms$|^fa-wpressr$|^fa-x-twitter$|^fa-xbox$|^fa-xing$|^fa-y-combinator$|^fa-yahoo$|^fa-yammer$|^fa-yandex$|^fa-yandex-international$|^fa-yarn$|^fa-yelp$|^fa-yoast$|^fa-youtube$|^fa-zhihu$)/;
	
	$('.InputfieldIcon select').on('change', function() {
		var $select = $(this);
		var val = $select.val();
		var fab = ""; // Added
		if(regex.test(val)) var fab = "fab "; // Added
		if(val.length > 0) {
			$select.closest('.InputfieldIcon').find('.InputfieldHeader > i.fa:first-child')
				.attr('class', 'fa fa-fw '+ fab + val) // Edited
				.parent().effect('highlight', 500);
			var $all = $select.siblings('.InputfieldIconAll');
			if($all.is(':visible')) {
				$all.find('.on').removeClass('on');
				$all.find('.' + val).addClass('on');
			}
		}
		$select.removeClass('on');
	});

	$('.InputfieldIconAll').hide();

	$('a.InputfieldIconShowAll').on('click', function() {

		var $a = $(this);
		var $ai = $a.prev('i');
		var $all = $a.siblings('.InputfieldIconAll');
		var $select = $a.siblings("select");
		
		$ai.toggleClass('fa-angle-down fa-angle-right');

		if($all.is(":visible")) {
			$all.hide();
			return false;
		}

		$all.show();

		if($all.hasClass('initialized')) return false;

		$all.addClass('initialized');

		$select.children('option').each(function() {
			var val = $(this).val();
			if(val.length == 0) return;
			var fab = ""; // Added
			if(regex.test(val)) var fab = "fab "; // Added
			$all.append("<i class='fa fw " + fab + "" + val + "' title='" + val + "'>"); // Edited
		});

		$all.on('click', 'i', function() {
			var $i = $(this);
			if($i.hasClass('on')) {
				$i.removeClass('on');
				$select.val('').trigger('change');
				return;
			}
			$all.find('.on').removeClass('on');
			$i.addClass('on');
			if(!$select.hasClass('on')) {
				$select.val($i.attr('title')).trigger('change');
			}
		});

		var val = $select.val();
		if(val.length > 0) {
			$all.find('.' + val).addClass('on');
		}

		return false;
	});

}

$(document).ready(function() {
	InputfieldIcon();
});
