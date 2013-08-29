progressLoading(5);
yepnope.addPrefix("preload", function(resource) {
	  resource.noexec = true;
	  return resource;
});
yepnope({
	test : Modernizr.csstransforms,
	yep: ['/js/turn4/turn.js'],
	//yep: ['/js/jin-package/turn.min.js'],
	nope: ['/js/turn4/turn.html4.min.js'],
	load: ['preload!/img/book/hcf.png', 'preload!/img/book/pbl.png', 'preload!/img/book/pbr.png', 'preload!/img/book/pl.png', 'preload!/img/book/pr.png', 'preload!/img/book/ui/menu-item-bg-hover.png'],
	complete: function () {
		// Create the flipbook
		progressLoading(10);
		$('.loadingSite').hide();
		$('.quran').removeClass('hide');
		
		ignoreStartPages = $('.quranPages').prevAll().length;
		
		// build empty Quran pages
		$('.quranPages').replaceWith(emptyPages(gq.config.data.by));

		$('.book').turn({
				gradients: false,//!$.isTouch,
				direction: 'rtl',
				turnCorners: 'tl,tr',
				autoCenter: true,
//				acceleration: true,
				
				when: {
					// first page
					first: function (event)
					{
						$('.hard.right').removeClass('fixed');
						stackEffect(0);
					},
					
					// turning page
					turning: function (event, page, pageObj)
					{
						// hide stack effect on cover turn
						if (page <= 1)
						{
							$('.stack').hide();
							$('.menu').hide();
							$('.book-nav.prev').hide();
						}
					},
					
					// turned page
					turned: function (event, page, pageObj)
					{
						//console.log('page:'+page);
						//console.log('pages:'+$('.book').turn('pages'));
												
						// cover is been open
						if (page > 1)
						{
							$('.menu').show();
							$('.book-nav.prev').show();
							
							// if page is not first and fixed class dosn't already exist, then add fixed class for making background border effect
							if (!$('.hard.right').hasClass('fixed'))
								$('.hard.right').addClass('fixed');
						}
						
						stackEffect(page);
					}
				}
		})
		//.turn('next')
		;
	}
});

function stackEffect (page)
{
	var totalPages = $('.book').turn('pages'),
	pagesLeft = totalPages - page,
	maxWidth = 22;
	
	// if pages left is greater then the max width, then use maxWidth, else use pages left as width of the stack effect
	if (pagesLeft > maxWidth)
	{
		$('.stack.left').width(maxWidth);
		// stack left width needs margin-left to adjust according to the set width
		$('.stack.left').css('margin-left', -maxWidth);
	}
	else
	{
		$('.stack.left').width(pagesLeft);
		$('.stack.left').css('margin-left', -pagesLeft);
	}
	
	// if current page is greater then max width, then use max width, else use current page number as width of the right stack effect	
	if (page > maxWidth)
		$('.stack.right').width(maxWidth);
	else
		$('.stack.right').width((page == 1 ? 0 : page));
	
	
	// if page is greater then 1 and not visible, then show. we used greater then 1, because on closing the cover, it wont conflict with hide on turning the cover
	if (page > 1 && !$('.stack').is(':visible'))
		$('.stack').show();
	
	// show right stack effect after on 3rd page.
	if (page <= 3)
		$('.stack.right').hide();
	else 
		$('.stack.right').show();	
}

function emptyPages (by)
{
	var pages = '', num;
	
	if (by == 'surah')
		num = 114;
	else
		num = 604;
	
	for(var i=1;i<=num;i++)
	{
		pages += '<div><div class="loadingPage"><i class="icon icon-refresh icon-spin"></i></div></div>';
	}
	
	return pages;
}