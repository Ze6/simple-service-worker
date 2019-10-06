const indexPage = Vue.component("IndexPage", {
    template: `<div>
         <p class="bg-gray-700 text-white text-2xl p-5">
        {{ message }}
        <button class="bg-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-100 py-2 px-4 m-5 w-auto rounded"> <router-link to="/octa">Check out Octa Cat</router-link></button>

        </p>
        <p class="bg-blue-300 text-gray-200 hover:text-white py-2 px-4 m-5 rounded">
            This is a Demonstration of the use of a Service Worker <br>
            to cache the site's resource and make them available offline.
        </p>

    </div>`,
    props: ["title"],
    data () {
        return {
            message: "A Simple Service Worker Example"

        }
    },
    created () {
        
    },
    methods: {
        
    },

});