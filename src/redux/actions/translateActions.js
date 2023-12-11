import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constants/constaants";

export const getLanguages = createAsyncThunk("getLanguages", async () => {

    // api'a istek atma
const res = await axios.request(options);

const data = res.data.data.languages;

const refinedData = data.map((item) => ({
    value: item.code,
    label: item.name,
}));


// oluşturduğumu< asenkron aksiyonun slice 'a aktaracağı veri (payload)
return refinedData;
});

export const translateText = createAsyncThunk(
    'translate',
    async(params) => {
        const encodedParams = new URLSearchParams();
encodedParams.set('source_language', params.sourceLang.value);
encodedParams.set('target_language',  params.sourceLang.value);
encodedParams.set('text', params.text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '8b2aa26b09mshfab78cfd706501fp1b1006jsn68da307dd59a',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

const res = await axios.request(options);

return res.data.data.translatedText;

    }
);