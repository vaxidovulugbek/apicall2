import axios from "axios";
import { storage } from "../stotage/index";
import config from "../../config";

export const httpClient = axios.create({
	baseURL: config.baseUrl,
});

httpClient.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = `Bearer ${storage.get("token")}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);