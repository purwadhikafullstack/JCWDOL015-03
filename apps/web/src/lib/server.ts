'use server'
import { cookies } from 'next/headers'


export async function createToken(token: string) {
    const oneDay = 14*24*60*60*1000
    cookies().set('token', token, { expires: Date.now() + oneDay })
}

export async function getToken() {
    return cookies().get('token')
}