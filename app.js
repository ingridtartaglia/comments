var comments = angular.module('comments', ['ngMaterial', 'firebase']);

comments.controller('commentsCtrl', function($scope, $firebaseArray){
    var url = "https://daychallenge19.firebaseio.com/comments";
    var firebase = new Firebase(url);

    $scope.comments = $firebaseArray(firebase);

    $scope.sendComment = function(comment){
        $scope.comments.$add(comment);
        $scope.comment = {};
        $scope.commentForm.$setPristine();
        $scope.commentForm.$setUntouched();
    };



    ////

});
