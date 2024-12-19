const ADDPOST = "ADDPOST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

const initialState = {
  postDate: [
    { id: 1, post: "Hi", likesCount: 12 },
    { id: 2, post: "Its my first post!", likesCount: 15 },
  ],
  newPost: "Hello",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPOST":
      let newPostItem = {
        id: state.postDate.length + 1,
        post: state.newPost,
        likesCount: 0,
      };
      return {
        ...state,
        postDate: [...state.postDate, newPostItem],
        newPost: "",
      };

    case UPDATE_NEW_POST: {
      return {
        ...state,
        newPost: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: "ADDPOST",
  };
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: "UPDATE_NEW_POST",
    newText: text,
  };
};
export default profileReducer;
