import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://64280eb4161067a83b060b8b.mockapi.io/";

export const retrieveProducts = createAsyncThunk(
	"products/retrieveProducts",
	async () => {
		const res = await axios.get(`${url}/products/`);
		return res.data;
	}
);
