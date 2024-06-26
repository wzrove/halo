/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { ListedPostVoList } from '../models';
// @ts-ignore
import { NavigationPostVo } from '../models';
// @ts-ignore
import { PostVo } from '../models';
/**
 * ApiContentHaloRunV1alpha1PostApi - axios parameter creator
 * @export
 */
export const ApiContentHaloRunV1alpha1PostApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets a post by name.
         * @param {string} name Post name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('queryPostByName', 'name', name)
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/posts/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a post navigation by name.
         * @param {string} name Post name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostNavigationByName: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('queryPostNavigationByName', 'name', name)
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/posts/{name}/navigation`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists posts.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPosts: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/api.content.halo.run/v1alpha1/posts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiContentHaloRunV1alpha1PostApi - functional programming interface
 * @export
 */
export const ApiContentHaloRunV1alpha1PostApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiContentHaloRunV1alpha1PostApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets a post by name.
         * @param {string} name Post name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryPostByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostVo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryPostByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiContentHaloRunV1alpha1PostApi.queryPostByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets a post navigation by name.
         * @param {string} name Post name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryPostNavigationByName(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NavigationPostVo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryPostNavigationByName(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiContentHaloRunV1alpha1PostApi.queryPostNavigationByName']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Lists posts.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryPosts(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedPostVoList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryPosts(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ApiContentHaloRunV1alpha1PostApi.queryPosts']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ApiContentHaloRunV1alpha1PostApi - factory interface
 * @export
 */
export const ApiContentHaloRunV1alpha1PostApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiContentHaloRunV1alpha1PostApiFp(configuration)
    return {
        /**
         * Gets a post by name.
         * @param {ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostByName(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<PostVo> {
            return localVarFp.queryPostByName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a post navigation by name.
         * @param {ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPostNavigationByName(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest, options?: RawAxiosRequestConfig): AxiosPromise<NavigationPostVo> {
            return localVarFp.queryPostNavigationByName(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists posts.
         * @param {ApiContentHaloRunV1alpha1PostApiQueryPostsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryPosts(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ListedPostVoList> {
            return localVarFp.queryPosts(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryPostByName operation in ApiContentHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest
 */
export interface ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest {
    /**
     * Post name
     * @type {string}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPostByName
     */
    readonly name: string
}

/**
 * Request parameters for queryPostNavigationByName operation in ApiContentHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest
 */
export interface ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest {
    /**
     * Post name
     * @type {string}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByName
     */
    readonly name: string
}

/**
 * Request parameters for queryPosts operation in ApiContentHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiContentHaloRunV1alpha1PostApiQueryPostsRequest
 */
export interface ApiContentHaloRunV1alpha1PostApiQueryPostsRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPosts
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPosts
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPosts
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPosts
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ApiContentHaloRunV1alpha1PostApiQueryPosts
     */
    readonly sort?: Array<string>
}

/**
 * ApiContentHaloRunV1alpha1PostApi - object-oriented interface
 * @export
 * @class ApiContentHaloRunV1alpha1PostApi
 * @extends {BaseAPI}
 */
export class ApiContentHaloRunV1alpha1PostApi extends BaseAPI {
    /**
     * Gets a post by name.
     * @param {ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiContentHaloRunV1alpha1PostApi
     */
    public queryPostByName(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostByNameRequest, options?: RawAxiosRequestConfig) {
        return ApiContentHaloRunV1alpha1PostApiFp(this.configuration).queryPostByName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a post navigation by name.
     * @param {ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiContentHaloRunV1alpha1PostApi
     */
    public queryPostNavigationByName(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostNavigationByNameRequest, options?: RawAxiosRequestConfig) {
        return ApiContentHaloRunV1alpha1PostApiFp(this.configuration).queryPostNavigationByName(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists posts.
     * @param {ApiContentHaloRunV1alpha1PostApiQueryPostsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiContentHaloRunV1alpha1PostApi
     */
    public queryPosts(requestParameters: ApiContentHaloRunV1alpha1PostApiQueryPostsRequest = {}, options?: RawAxiosRequestConfig) {
        return ApiContentHaloRunV1alpha1PostApiFp(this.configuration).queryPosts(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }
}

