const ADDPOST = 'ADDPOST';

const initialState = {postDate: [
  { id: 1, post: "Hi", likesCount: 12 },
  { id: 2, post: "Its my first post!", likesCount: 15 }
]}

 const profileReducer = (state =initialState, action) => {
    if (action.type === 'ADDPOST') {
        let newPostItem = {
          id: state.postDate.length + 1,
          post: action.newPostItem,
          likesCount:0
        };
      state.postDate = [...state.postDate, newPostItem];

      }
    
        
  return state;
}

export const addPostActionCreator = () => {
    return {
      type: 'ADDPOST'
    }
  };
export default profileReducer;