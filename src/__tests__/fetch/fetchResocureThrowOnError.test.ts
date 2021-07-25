import { fetchResocureThrowOnError } from '../../fetch/fetchResourceThrowOnError'
import fetchMock from 'jest-fetch-mock';

test('fetchResocureThrowOnError on status indicating failure will result in error throw',async ()=>{
    const errorStatuses = [400, 401, 403, 404, 500, 501];
    fetchMock.doMock();
    for(const error of errorStatuses){
        fetchMock.mockResponseOnce('',({status: error}))
        await expect(fetchResocureThrowOnError('')).rejects.toThrow()
    }
    fetchMock.resetMocks();
})

test('fetchResocureThrowOnError on status indicating success will result in json object',async ()=>{
    const jsonResponse ={'data':'data'};
    fetchMock.doMock()
    fetchMock.mockResponse(JSON.stringify(jsonResponse),{ status : 200})
    await expect(fetchResocureThrowOnError('')).resolves.toEqual(jsonResponse)
    fetchMock.resetMocks();
})