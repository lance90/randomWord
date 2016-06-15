$(function () {
	var words = getWordsArray();
	var running = true;
	var start
	
	//執行startWords的function
	startWords();

	$('.button').on('click', function () {
		if (running) {
			stopWords();
		} else {
			startWords();
		}
	});
	
	//定義文字開始隨機跳動
	function startWords() {
		start = setInterval(function () {
					running = true;
					$('.button').val('Stop').removeClass('start').addClass('stop');       //val() 方法返回或设置被选元素的值
					$('#word_container').text(words[Math.floor(Math.random() * words.length)]);    //text() 方法设置或返回被选元素的文本内容
				}, 50);	
	}
	
	//定義文字結束隨機跳動
	function stopWords() {
		running = false;
		$('.button').val('Start').removeClass('stop').addClass('start');
		clearInterval(start);		//暫停L19 start變數的秒數
	}
	
	//定義文字來源
	function getWordsArray() {
		var array;
		
		//ajax() 方法通过 HTTP 请求加载远程数据。
		$.ajax({
			type: 'GET',   //設定請求的方式
			url: 'words.html',   //設定發送請求的網址
			async: false,    //設定同步請求
			success: function (data) {    //設定请求成功后的回调函数
				array = data.split("\n");
			}
		});

		return array
	};
});