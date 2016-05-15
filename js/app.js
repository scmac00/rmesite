
$(document).ready(function(){

	var tabs = $('.tabs');

	var tabContent = tabs.find('.tab-content').hide();
	
	var tab = tabs.find('.tab');

	tabContent.first().show();

	tab.on('click', function() {
		var $this = $(this);
		var tabNum = $this.index();

		if ($this.hasClass('active')) {
			//do nothing
		}
		else {
			tab.removeClass('active');
			$this.addClass('active');

			tabContent.hide().eq(tabNum).fadeIn();
		}


	});

	
});

// .tabs {
//     .tab-links {
// 		a.tab {
// 	}
	
//     .tab-content {
//         padding: $spacing-unit/2;
//     }
// }