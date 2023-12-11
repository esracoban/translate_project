import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 export const getUsers = createAsyncThunk('getUsers', async () => {
    // asenkron işlemler burada yapılır
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');


//   storea aktarmak isteğimiz değerleri return etme
return res.data;
});