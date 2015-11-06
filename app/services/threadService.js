angular.module('rtfmApp')
	.service('threadService', function(){

	this.getThreads = function(fb){
		return new Firebase(fb + '/threads');
	}

	this.getThread = function(threadId, fb){
		return new Firebase(fb + '/threads/' + threadId);
	}

	this.getComments = function(threadId, fb){
    	return new Firebase(fb + '/threads/' + threadId + '/comments');
  	}

});