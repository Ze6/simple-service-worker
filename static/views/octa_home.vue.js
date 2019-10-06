const octaHomePage = Vue.component("OctaPage", {
    template: `<div>
         <h1 class="text-2xl text-gray-700 m-5 p-2">{{ title }}</h1>
         <p class="text-teal-400 m-5 p-2">Try to guess the correct codename for the Cat hiding behind the curtain!</p>
         <octa></octa>
    </div>`,
    
    data () {
        return {
            title: "Octa Cat Home"

        }
    }

});