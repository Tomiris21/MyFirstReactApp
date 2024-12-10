import { rerenderEntireTree
 } from "../../render";

let state = {
    ProfilePage:{
       postDate:[
        { id: 1, post: "Hi", likesCount: 12 },
        { id: 2, post: "Its my first post!", likesCount: 15 },
      ],
    },
    MessagePage: {
dialogsData: [
    { id: 1, name: "Alexandr" },
    { id: 2, name: "Inna" },
    { id: 3, name: "Olga" },
    { id: 4, name: "Olga" },
    { id: 5, name: "Oxana" },
  ],
  
 messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello" },
    { id: 4, message: "" },
    { id: 5, message: "" },
  ]
  }
}
  export let addPost = (newPost) => {
    let newPostItem = {
      id:  state.ProfilePage.postDate.length + 1,
      post: newPost,
      likesCount:0
    }
    state.ProfilePage.postDate = [...state.ProfilePage.postDate, newPostItem];
    rerenderEntireTree(state)
  }
  export default state;