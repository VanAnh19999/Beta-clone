import { fetchWrapper } from './http_service'

export const ticketService = {
    createTicket , getTicket
}

function createTicket (payload) {
    return fetchWrapper.post('ticket' , null , payload)
}

function getTicket (params) {
    return fetchWrapper.get('ticket' , {
        email : params
    });
}