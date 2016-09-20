angular.module('myApp')
.component('myComponent', {
  template: `
    <h1>Hello {{ $ctrl.name }}</h1>
  `,
  controller: function myComponentCtrl() {
    this.name = 'Mike';
  }
});
