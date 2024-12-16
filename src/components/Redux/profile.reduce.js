
const ADD_POST = 'ADD_POST';

export const profileReducer = (state, action) => {
    if (action.type === 'ADD_POST') {
        let newPostItem = {
          id: this._state.ProfilePage.postDate.length + 1,
          post: this.newPost,
          likesCount:0
        };
      state.postDate = [...state.ProfilePage.postDate, newPostItem];

      }
    
        
      
    return state;
}

export const addPostActionCreator = () => {
    return {
      type: "ADD-POST",
    };
  };
export default profileReducer