const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://www.shutterstock.com/image-vector/whatsapp-avatar-profile-icon-vector-260nw-471591746.jpg",
      followed: true,
      fullName: "Sasha",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      photoUrl:
        "https://www.shutterstock.com/image-vector/whatsapp-avatar-profile-icon-vector-260nw-471591746.jpg",
      followed: true,
      fullName: "Inna",
      location: { city: "Minsk", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl:
        "https://www.shutterstock.com/image-vector/whatsapp-avatar-profile-icon-vector-260nw-471591746.jpg",
      followed: false,
      fullName: "Olga",
      location: { city: "Brest", country: "Belarus" },
    },
    {
      id: 4,
      photoUrl:
        "https://www.shutterstock.com/image-vector/whatsapp-avatar-profile-icon-vector-260nw-471591746.jpg",
      followed: false,
      fullName: "Olga",
      location: { city: "Almaty", country: "Kazakhstan" },
    },
    {
      id: 5,
      photoUrl:
        "https://www.shutterstock.com/image-vector/whatsapp-avatar-profile-icon-vector-260nw-471591746.jpg",
      followed: false,
      fullName: "Oksana",
      location: { city: "Brest", country: "Belarus" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (usersId) => ({ type: FOLLOW, usersId });
export const unfollowAC = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
