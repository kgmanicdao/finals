const books = Vue.createApp ({
    data(){
        return {
            showBooks: true,
            btitle: 'Francis Forever',
            bauthor: 'Katerisse Manicdao',
            year: 2014
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
}
);
books.mount('#books');