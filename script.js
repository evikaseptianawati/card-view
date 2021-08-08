"use strict";
(function () {
    var endpoint = "https://randomuser.me/api/?results=";
    var app = new Vue({
        el: '#app',
        data: {
            title: "View Data with Card",
            people: [],
            quantity: 24
        },
        methods: {
            getPeople: function () {
                // ** axios requires a promise polyfill for ie11 **//
                axios.get(endpoint + this.quantity)
                    .then((rsp) => this.people = rsp.data.results);
                //**normal XMLHttpRequest **//
                // var url = endpoint + this.quantity;
                // var request = new XMLHttpRequest();
                // request.open("GET", url);
                // request.responseType = 'json';
                // request.send();
                // request.onload = ()=> this.people = request.response.results;
            }
        },
        created: function () {
            this.getPeople();
        }
    });
})();