// import {
//     ReactNode,
//     createContext,
//     useState,
//   } from "react";
//   import { apiLocal } from "../services/api";
//  import { favoriteData, editFavoriteData } from "../validations/favorite"; 

//  interface FavoriteProviderProps {
//     children: ReactNode;
//   }

//   interface FavoriteProviderValues{
//     editFavorite: (data: editFavoriteData)=>void;
//     createFavorite: (data: favoriteData)=>void;
//     deleteFavorite: () => void;
//   }


//  export const favoriteContext = createContext<FavoriteProviderValues>(
//     {} as FavoriteProviderValues
//   );

//   export const UserProvider = ({ children }: FavoriteProviderProps) => {
//     const { userData, setUserData, logout } = useAuth();
   
//     const profileEdit = async (data: editFavoriteData) => {
//       try {
//         const response = await apiLocal.patch(`/favorite/${userData.id}`, data);  
//         return response;
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     const addressEdit = async (data: AddressData) => {
//       try {
//         const response = await apiLocal.patch(`/users/${userData.id}`, data);
//         setUserData(response.data);
//         toggleAddressModal();
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     const deleteProfile = async () => {
//       try {
//         await apiLocal.delete(`/users/${userData.id}`);
//         toggleDeleteModal();
//         toggleProfileModal();
//         logout();
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     return (
//       <UserContext.Provider
//         value={{
//           errorResetModal,
//           toggleErrorResetModal,
//           resetModal,
//           toggleResetModal,
//           errorForgotModal,
//           toggleErrorForgotModal,
//           toggleForgotModal,
//           toggleSucessRegisterModal,
//           toggleErrorRegisterModal,
//           registerSucessModal,
//           registerErrorModal,
//           forgotModal,
//           profileModal,
//           addressModal,
//           deleteModal,
//           toggleProfileModal,
//           toggleAddressModal,
//           toggleDeleteModal,
//           profileEdit,
//           addressEdit,
//           deleteProfile,
//         }}
//       >
//         {children}
//       </UserContext.Provider>
//     );
//   };






