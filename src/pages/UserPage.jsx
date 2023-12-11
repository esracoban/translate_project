import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../redux/actions/userActions";



const UserPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store);

console.log(state);
    useEffect(() =>{
        // asenkron aksiyonu çalıştırma
        dispatch(getUsers());
    }, []);

  return (
    <div>
    {state.isLoading ? (
       <p>Yükleniyor</p>
    ) : (
       !state.isError && (
          <div>
             {state.users.map((user, index) => (
                <p key={index}>{user.name}</p>
             ))}
          </div>
       )
    )}
 </div>
 
  );
};

export default UserPage;
