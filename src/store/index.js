import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: "m1",
                    title: "A trip into the mountain",
                    description: "It was really a nice trip",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1024px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
                },
                {
                    id: "m2",
                    title: "Surfing the sea",
                    description: "Feeling the cool breeze",
                    image:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mavericks_Surf_Contest_2010b.jpg/1024px-Mavericks_Surf_Contest_2010b.jpg",
                },
                {
                    id: "m3",
                    title: "Eating Food",
                    description: "Tasty...",
                    image:
                        "https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMF8xNTE0MTkwNzU0XzA5Ng/screen-0.jpg?fakeurl=1&type=.jpg",
                },
            ],
        }
    },
    mutations:{
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageURL,
                describe: memoryData.description
            }
            state.memories.unshift(newMemory)    //adding the new memory to the begening of the list
        }
    },
    /*Basically the actions used for communicate with backend and store data there.
    Now we are calling addMemory() from actions then this addMemory() calling the addMemory() of the mutation.
    what is kind of redundant, 
    */
    actions:{
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData)
        }
    },
    getters:{
        memories(state){
            return state.memories
        },
        memory(state){
            return (memoryId) =>{
                return state.memories.find((memory) => memory.id === memoryId)
            }
        }
    }
});

export default store;