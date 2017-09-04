const app = new Vue({
    el: '#app',
    data: {
        key: '',
        nonce: 0
    },
    methods: {
        sha512: function(data) {
            let md = forge.md.sha512.create();
            md.update(data);
            return md.digest();
        }
    }
});