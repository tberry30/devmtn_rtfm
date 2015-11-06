angular.module('rtfmApp', ['ui.router','firebase'])

.constant('fb', 'https://dm7-rtfm.firebaseio.com')

.config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('threads', {
			url: '/threads',
			templateUrl: '/app/threads/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadService, $stateParams, fb){
					return threadService.getThreads(fb);
				}
			}
		})
		.state('thread', {
		    url: '/thread/:threadId',
		    templateUrl: '/app/thread/thread.html',
		    controller: 'threadCtrl',
		    resolve: {
		        threadRef: function (threadService, $stateParams, fb) {
		            return threadService.getThread($stateParams.threadId, fb);
		        },
		        commentsRef: function (threadService, $stateParams, fb) {
    				return threadService.getComments($stateParams.threadId, fb);
  				}
		    }
		});
			
	$urlRouterProvider.otherwise('/threads');

});