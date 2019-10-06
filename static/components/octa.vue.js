// Define the login

Vue.component(
    'octa',
     {
    template: `<div>
        <div class="m-2">
            <h1 class="bg-yellow-400 text-red-600 p-2 m-5 w-auto rounded" v-if="count > 2">{{ count }} Wrong Guess Counts check the hints below... </h1>
            <form>

            <div class="flex lg:flex-row flex-col">

                <input v-model="code" class="py-2 px-2 border border-blue-300 rounded m-2" type="text" placeholder="Cat Code">
                    <button class="py-2 px-4 bg-blue-300 text-gray-200 hover:text-white rounded shadow-lg m-2" type="submit" @click="getCat()">Guess</button>
                <span class="py-2 px-4 bg-white text-gray-500 m-2">Else</span>
                <p class="py-2 px-4 bg-green-400 text-gray-200 hover:text-white rounded shadow-lg m-2"> <router-link to="/">Go Home</router-link></p>
                </div>
            </form>

    </div>
        <p class="text-green-500 text-2xl ml-10 p-5" v-if="catname"> {{ catname }} </p>
        <p class="text-red-500 text-2xl ml-10 p-5" v-if="errorcode"> {{ errorcode }} </p>
        <ul class="flex -flex-row" v-if="showhint">
            <caption class="text-green-500 mr-2 p-2">Hints</caption>
            <li class="text-blue-300 mr-10 p-2" v-for="hint of hints">{{hint}}</li>
        </ul>


        <div class="ml-20 p-10 items-center" v-if="showcat">
        <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
         id="octocat"
         alt="octocat-gif"
         class="w-40 h-40" />
        </div>

    </div>`,
       
    data: function () {
        return {
            count:0,
            code: null,
            catname: null,
            showcat: false,
            showhint: false,
            catCodes:['octa','Octa','dribbles'],
            hints:['acat','octa-gone','Octa-via'],
            errorcode: null
        }
        
    },
    methods: {
        getCat(){
            const self = this;
            if ( self.catCodes.includes(self.code)){
                
                self.catname = "Octa Cat";
                self.showcat = !self.showcat;
                self.errorcode = null;
                self.showhint = false;
                self.code = null;
                self.count = 0;

            }else {
                
                self.errorcode = "sorry that code is incorect ";
                self.catname = null;
                self.showcat = false;
                self.count += 1;
                if (self.count == 3){
                    setTimeout(self.showHints(), 5000);
                }
            }
        },
        showHints(){
            this.showhint = !this.showhint;
            this.errorcode = null;
            
        }

        
    }

            
});
  
  