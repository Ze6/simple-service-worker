const notFound = Vue.component("NotFoundPage", {
    template: `<div>
         <p class="text-2xl text-red-400 m-5 p-2">Danger! You Have Strayed way off course... Press the yellow button to go back Home.</p>
         <p class="text-white bg-yellow-300 p-4 m-5 hover:bg-green-400"> <router-link to="/">Back to Safety</router-link></p>

    </div>`  
    

});