myApp.directive('primaryMenu', function() {
  return {
    scope: {
        selected: '='
    },
    template: `
        <div class="menu">
            <div><a ng-class="{'selected': selected=='home'}" href="#!/home">home</a></div>
            <div><a ng-class="{'selected': selected=='freelance'}" ng-if="selected" href="#!/freelance">freelance</a></div>
            <div><a ng-class="{'selected': selected=='cv'}" href="#!/cv">c.v.</a></div>
            <div><a ng-class="{'selected': selected=='portfolio'}" href="#!/portfolio">portfolio</a></div>
            <div><a ng-class="{'selected': selected=='fun'}" href="#!/fun">fun</a></div>
        </div>
    `
  };
});
