import { isFunction, get } from "lodash";

import { queryBuilder } from "../queryBuilder/index";
import { httpClient } from "../api/index";

const queryFn = async (context, urlSearchParams = {}) => {
    const { queryKey, signal, pageParam, body } = context;
    if (pageParam) urlSearchParams.page = pageParam;

    const url = queryBuilder(queryKey[1], urlSearchParams);
    const { data } = await httpClient.request({
        method: queryKey[0],
        url,
        signal,
        data: body,
    });
    return data;
};

const ultimateQueryFn = (customQueryFn, urlSearchParams) =>
    customQueryFn
        ? customQueryFn
        : (context) => queryFn(context, urlSearchParams);

const dataSelect = (data = {}, dataKey) =>
    isFunction(dataKey) ? dataKey(data) : get(data, dataKey);

const metaSelect = (data = {}, metaKey) =>
    isFunction(metaKey) ? metaKey(data) : get(data, metaKey);

const getQueryKey = (method, url, urlSearchParams) => {
    return urlSearchParams ? [method, url, urlSearchParams] : [method, url];
};

export const apiHelpers = {
    ultimateQueryFn,
    dataSelect,
    metaSelect,
    getQueryKey
};
