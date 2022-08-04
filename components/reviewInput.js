app.component('review-input', {
    props:{
        reviews:{
            type:Array
        }
    },
    template:
    /*html*/
    `
        <div id="reviewForm">
            <label for="name"> Name </label>
            <input type="text" id="name" v-model="name">

            <label for="rating">Rating</label>
            <input type="number" id="rating" v-model.numger="rating">

            <label for="commentary">Comments</label>
            <input type="textarea" id="commentary" v-model="comment">

            <button type="submit" v-on:click="registerReview" >Register </button>

        </div>
    `,
    data(){
        return{
            name: "",
            rating: null,
            comment: "",
            reviews:[]
        }
    },
    methods: {
        registerReview(){
            this.reviews.push({
                name:  this.name,
                rating: this.rating,
                comment: this.comment
            })
            this.name = ''
            this.rating=''
            this.comment =''
            return
        }
    }
})