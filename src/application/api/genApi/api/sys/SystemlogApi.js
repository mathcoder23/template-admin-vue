/**
*  该代码全为自动生成，为了不影响代码的持续生成，请不要修改此处代码
*  version:
*  date:  2021-08-15 17:10:15
*  mbg-author: Petty Fox
*/
import {PFApi} from '@/api/core/core'
const apiPrefix = '/api/sys/systemLog'
/**
* function:
*  list
* params:
	*[
	*	{
	*		"in":"query",
	*		"name":"api",
	*		"description":"api",
	*		"type":"string",
	*		"required":false
	*	},
	*	{
	*		"in":"query",
	*		"name":"endDate",
	*		"description":"endDate",
	*		"type":"string",
	*		"required":false
	*	},
	*	{
	*		"in":"query",
	*		"name":"ip",
	*		"description":"ip",
	*		"type":"string",
	*		"required":false
	*	},
	*	{
	*		"in":"query",
	*		"name":"log",
	*		"description":"log",
	*		"type":"string",
	*		"required":false
	*	},
	*	{
	*		"default":1,
	*		"in":"query",
	*		"name":"pageNum",
	*		"format":"int32",
	*		"description":"pageNum",
	*		"type":"integer",
	*		"required":false
	*	},
	*	{
	*		"default":20,
	*		"in":"query",
	*		"name":"pageSize",
	*		"format":"int32",
	*		"description":"pageSize",
	*		"type":"integer",
	*		"required":false
	*	},
	*	{
	*		"in":"query",
	*		"name":"startDate",
	*		"description":"startDate",
	*		"type":"string",
	*		"required":false
	*	},
	*	{
	*		"in":"query",
	*		"name":"type",
	*		"format":"int32",
	*		"description":"type",
	*		"type":"integer",
	*		"required":false
	*	}
	*]

* body:

* response:
	*{
	*	"type":"object",
	*	"title":"RestObjectResponse«PageInfo«SystemLog»»",
	*	"properties":{
	*		"msg":{
	*			"type":"string"
	*		},
	*		"code":{
	*			"format":"int32",
	*			"type":"integer"
	*		},
	*		"data":{
	*			"ref":"#/definitions/PageInfo«SystemLog»",
	*			"value":{
	*				"type":"object",
	*				"title":"PageInfo«SystemLog»",
	*				"properties":{
	*					"navigatepageNums":{
	*						"type":"array",
	*						"items":{
	*							"format":"int32",
	*							"type":"integer"
	*						}
	*					},
	*					"startRow":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"hasNextPage":{
	*						"type":"boolean"
	*					},
	*					"prePage":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"nextPage":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"endRow":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"pageSize":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"list":{
	*						"type":"array",
	*						"items":{
	*							"ref":"#/definitions/SystemLog"
	*						}
	*					},
	*					"pageNum":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"navigatePages":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"navigateFirstPage":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"total":{
	*						"format":"int64",
	*						"type":"integer"
	*					},
	*					"pages":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"size":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"isLastPage":{
	*						"type":"boolean"
	*					},
	*					"hasPreviousPage":{
	*						"type":"boolean"
	*					},
	*					"navigateLastPage":{
	*						"format":"int32",
	*						"type":"integer"
	*					},
	*					"isFirstPage":{
	*						"type":"boolean"
	*					}
	*				}
	*			}
	*		},
	*		"errmsg":{
	*			"type":"string"
	*		},
	*		"bcode":{
	*			"format":"int32",
	*			"type":"integer"
	*		}
	*	}
	*}

*
*/
const list = (body, params) => {
    return PFApi.apiRequest(
    {
        url: apiPrefix + '/list',
        method: 'POST',
        data: body,
        params: params
    })
}
export const SystemlogApi = {
    /**
     *
     */
    list: list
}
